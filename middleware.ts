import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const room = request.nextUrl.searchParams.get("room");
  const date = request.nextUrl.searchParams.get("date");
  if (!room || !date) return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/book",
};
