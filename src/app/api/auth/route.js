import dbConnect from "@/lib/connection";
import { User } from "@/lib/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendVerificationEmail } from "@/utils/sendEmail";

export async function POST(req) {
  const payload = await req.json();
  await dbConnect();
  const { name, email, password, type, aggrement } = payload;

  //   Server side validation
  if (!type) {
    return NextResponse.json(
      { message: "Submission type is undefined!", result: [], success: false },
      { status: 400 }
    );
  }

  if (type === "sign-in") {
    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Required fields are missing",
          result: [],
          success: false,
        },
        { status: 400 }
      );
    }
  } else if (type === "sign-up") {
    if (!name || !email || !password) {
      return NextResponse.json(
        {
          message: "Required fields are missing",
          result: [],
          success: false,
        },
        { status: 400 }
      );
    }

    try {
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return NextResponse.json(
          {
            message: "User already exists",
            result: [],
            success: false,
          },
          { status: 422 }
        );
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const token = jwt.sign(
        {
          email: email,
          name: name,
        },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
      );

      const user = new User({
        name: name,
        email: email,
        password: hashedPassword,
        aggrement: aggrement,
        createdAt: new Date(),
        verificationToken: token,
      });

      await user.save();

      await sendVerificationEmail(email, token);

      const response = NextResponse.json(
        { message: "New user has been created", result: user, success: true },
        { status: 201 }
      );
      response.cookies.set("_user_session_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: 3600 * 24 * 7, // 1 week
        sameSite: "strict",
        path: "/",
      });

      return response;
    } catch (error) {
      return NextResponse.json(
        {
          message: error.message,
          result: [],
          success: false,
        },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json(
      {
        message: "Invalid submission type",
        result: [],
        success: false,
      },
      { status: 400 }
    );
  }
}
