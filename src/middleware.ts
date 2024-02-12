import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { STORAGE_TOKEN } from "./utils/constants";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get(STORAGE_TOKEN.superadminToken);
  //   const token = true;

  if (token && (path === "/" || path === "/login")) {
    return NextResponse.redirect(
      new URL("/super-admin-dashboard", request.url)
    );
  }
  if (!token && (path === "/" || path === "/super-admin-dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login", "/super-admin-dashboard"],
};
