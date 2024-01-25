import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const room = request.nextUrl.searchParams.get("room");
  const from = request.nextUrl.searchParams.get("from");
  const to = request.nextUrl.searchParams.get("to");

  if (!room || !from || !to)
    return NextResponse.redirect(new URL("/rooms", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/book",
};
