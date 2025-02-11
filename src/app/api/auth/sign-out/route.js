import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.set("_user_session_token", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    expires: new Date(0),
    path: "/",
  });

  return NextResponse.json(
    {
      message: "Looged out successfully",
      success: true,
    },
    { status: 200 }
  );
}
