import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

import { GoogleGenerativeAI } from "@google/generative-ai";
import { User } from "@/lib/models/User";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const template = (projectData) => {
  return `Generate a professional GitHub README file in Markdown format based on the following project details:
 
- **Project Name:** ${projectData.title}  
- **Description:** ${projectData.description}  
- **Tech Stack:** ${projectData.technologies}  
${projectData.features && `- **Features:** ${projectData.features}`}

Respond strictly in valid Markdown format with proper headings, bullet points, and code blocks where needed. **Do not** include any introductory or closing statements—only the raw README content.`;
};

export async function POST(req) {
  const payload = await req.json();
  const cookieStore = await cookies();
  const tokenCookie = await cookieStore.get("_user_session_token"); //Get The Cookie Object
  const token = tokenCookie?.value || "";

  const { title, description, technologies, features } = payload;

  // Body Validation
  if (!title || !description || !technologies) {
    return NextResponse.json(
      {
        message: "Required fields are missing!",
        success: false,
      },
      { status: 400 }
    );
  }

  // Token Validation
  if (!token) {
    return NextResponse.json(
      { message: "Unauthorized!", success: false },
      { status: 400 }
    );
  }

  // Authorization Validation
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    if (!payload.email) {
      return NextResponse.json(
        { message: "Invalid user token!", success: false },
        { status: 400 }
      );
    }

    try {
      const user = await User.findOne({ email: payload.email });
      if (user.credits < 1) {
        return NextResponse.json(
          {
            message: "Insufficient credits! Please upgrade your plan.",
            success: false,
          },
          { status: 400 }
        );
      }
      if (!user.isVerified) {
        return NextResponse.json(
          {
            message:
              "User email is not verified. Please verify your email and try again.",
            success: false,
          },
          { status: 400 }
        );
      }
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(
        template({ title, description, technologies })
      );
      const responseText = result.response.text();

      const updateUser = await User.findOneAndUpdate(
        { email: payload.email },
        { credits: user.credits - 1 }
      );
      if (!updateUser) {
        return NextResponse.json(
          { mesage: "Error updating credits. Try Again!", success: false },
          { status: 400 }
        );
      }

      return NextResponse.json({
        success: true,
        readme: responseText,
      });
    } catch (error) {
      console.error("Gemini API Error:", error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 500 }
    );
  }
}
