import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

function hasDashboardPrefix(pathname: string) {
  return pathname === "/dashboard" || pathname.startsWith("/dashboard/");
}

function stripDashboardPrefix(pathname: string) {
  if (pathname === "/dashboard") return "/";
  if (pathname.startsWith("/dashboard/")) {
    return pathname.replace("/dashboard", "") || "/";
  }
  return pathname;
}

function withDashboardPrefix(pathname: string) {
  if (pathname === "/dashboard" || pathname.startsWith("/dashboard/")) return pathname;
  if (pathname === "/") return "/dashboard";
  return `/dashboard${pathname}`;
}

export async function middleware(req: NextRequest) {
  const rawPath = req.nextUrl.pathname;
  const normalizedPath = stripDashboardPrefix(rawPath);
  const isDashboardRequest = hasDashboardPrefix(rawPath);

  // Allow static and Next internals
  if (
    normalizedPath.startsWith("/_next") ||
    normalizedPath.includes(".") ||
    normalizedPath === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Always force /dashboard prefix for app pages and API
  if (!isDashboardRequest) {
    const to = req.nextUrl.clone();
    to.pathname = withDashboardPrefix(rawPath);
    return NextResponse.redirect(to);
  }

  // Allow NextAuth routes and login page
  if (normalizedPath.startsWith("/api/auth") || normalizedPath === "/login") {
    return NextResponse.next();
  }

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // Protected routes
  if (!token) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/dashboard/login";
    return NextResponse.redirect(loginUrl);
  }

  // Admin protection
  if (normalizedPath.startsWith("/admin") || normalizedPath.startsWith("/api/admin")) {
    const role = token.role as string | undefined;
    if (role !== "owner" && role !== "admin") {
      const overviewUrl = req.nextUrl.clone();
      overviewUrl.pathname = "/dashboard/overview";
      return NextResponse.redirect(overviewUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
