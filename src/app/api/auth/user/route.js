import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import dbConnect from "@/lib/connection";
import { User } from "@/lib/models/User";

export async function GET() {
  const cookieStore = await cookies();
  const tokenCookie = await cookieStore.get("_user_session_token");
  const token = tokenCookie?.value || "";

  if (!token) {
    return NextResponse.json(
      { message: "Unauthorized!", success: false },
      { status: 400 }
    );
  }

  try {
    await dbConnect();
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    if (!payload || !payload.email) {
      return NextResponse.json(
        { message: "Invalid user", success: false },
        { status: 400 }
      );
    }

    const user = await User.findOne({ email: payload.email });
    if (!user) {
      return NextResponse.json(
        { message: "User not found", success: false },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "User available", user, success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 500 }
    );
  }
}
