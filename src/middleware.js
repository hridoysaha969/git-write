import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const url = request.url;
  const cookieStore = await cookies();
  const tokenCookie = await cookieStore.get("_user_session_token");

  const token = tokenCookie?.value || "";

  if (!token && url.includes("/my-readme")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!token && url.includes("/cancel")) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (token) {
    try {
      const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      );

      if (payload.email && url.includes("/sign-in")) {
        return NextResponse.redirect(new URL("/generate", request.url));
      }
      if (payload.email && url.includes("/sign-up")) {
        return NextResponse.redirect(new URL("/generate", request.url));
      }
      if (!payload.email && url.includes("/my-readme")) {
        return NextResponse.redirect(new URL("/", request.url));
      }
      if (!payload.email && url.includes("/success")) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
      }
      if (!payload.email && url.includes("/cancel")) {
        return NextResponse.redirect(new URL("/sign-in", request.url));
      }
    } catch (error) {
      console.log("verification failed!", error.message);
      if (error && url.includes("/sign-in")) {
        return NextResponse.redirect(new URL("/", request.url));
      }
      if (error && url.includes("/sign-up")) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
  }
}
