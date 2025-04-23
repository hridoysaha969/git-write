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

Add necessary emoji if needed. You can add other fields if needed according to this description.
Respond strictly in valid Markdown format with proper headings, bullet points, and code blocks where needed. **Do not** include any introductory or closing statements—only the raw README content.`;
};

async function verifyToken(token) {
  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    return payload.email || null;
  } catch {
    return null;
  }
}

export async function POST(req) {
  const payload = await req.json();
  const cookieStore = await cookies();
  const tokenCookie = await cookieStore.get("_user_session_token"); //Get The Cookie Object
  const token = tokenCookie?.value || "";

  const { title, description, technologies } = payload;

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
    const email = await verifyToken(token);
    if (!email) {
      return NextResponse.json(
        { message: "Unauthorize user!", success: false },
        { status: 400 }
      );
    }

    // Find and update the user in one query to reduce DB calls
    const user = await User.findOneAndUpdate(
      { email, credits: { $gte: 1 }, isVerified: true }, // Ensure user has credits and is verified
      { $inc: { credits: -1 } }, // Decrease credits
      { new: true } // Return updated user
    );

    if (!user) {
      return NextResponse.json(
        {
          message: "Insufficient credits or email not verified!",
          success: false,
        },
        { status: 400 }
      );
    }

    // Generate README using Gemini API
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
    const result = await model.generateContent(
      template({ title, description, technologies })
    );

    // Extract response text safely
    const responseText = result?.response?.text() || "No response generated.";
    return NextResponse.json({ success: true, readme: responseText });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 500 }
    );
  }
}
