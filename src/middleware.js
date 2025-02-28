import { NextResponse } from "next/server";

export function middleware(req) {
  const isLoggedIn = req.cookies.get("userToken");

  if (!isLoggedIn && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], //middleware only to dashboard routes
};
