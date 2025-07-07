import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const prootectedRoutes = [
  '/dashboard',
  '/profile',
  '/settings',
  // Add more protected routes as needed
];

const publicRoutes = [
  '/signin',
  '/signup',
  '/',
  // Add more public routes as needed
];
const authApiRoutes = [
  '/api/auth',
];

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  const isAuthRoute = request.nextUrl.pathname.startsWith('/api/auth');
  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname);
  const isProtectedRoute = prootectedRoutes.includes(request.nextUrl.pathname);

  // If the user is authenticated
  if (token) {
    // Allow access to protected routes
    if (isProtectedRoute) {
      return NextResponse.next();
    }
    // Redirect authenticated users away from public routes
    if (isPublicRoute) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  } else {
    // If the user is not authenticated
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }
  }

  // Allow access to API auth routes without authentication
  if (isAuthRoute) {
    return NextResponse.next();
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    /*
     * Protected routes that require authentication
     * These routes will redirect to the login page if the user is not authenticated.
     * You can add more protected routes as needed.
     * Note: The `:path*` syntax allows for dynamic segments in the URL.
     * For example, `/dashboard/:path*` will match `/dashboard`, `/dashboard/settings
     */
     '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$|api).*)',
  ],
};