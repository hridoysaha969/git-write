import dbConnect from "@/lib/connection";
import { User } from "@/lib/models/User";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    if (!token) {
      return NextResponse.json(
        { message: "Token not found!", success: false },
        { status: 400 }
      );
    }

    const user = await User.findOneAndUpdate(
      { verificationToken: token },
      { isVerified: true, verificationToken: null }, // Update fields
      { new: true } // Return updated document
    );

    if (!user) {
      return NextResponse.json(
        { message: "Invalid or expired", success: false },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Email verified successfully!", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: error.message, success: false },
      { status: 500 }
    );
  }
}
