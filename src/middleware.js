// import { NextResponse } from "next/server";

// export function middleware(req) {
//   const isLoggedIn = req.cookies.get("userToken");

//   if (!isLoggedIn && req.nextUrl.pathname.startsWith("/dashboard")) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/dashboard/:path*"], //middleware only to dashboard routes
// };


// import { NextResponse } from 'next/server'
 
// // This function can be marked `async` if using `await` inside
// export function middleware(request) {
//   return NextResponse.redirect(new URL('/', request.url))
// }
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }


import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url))
  }
}