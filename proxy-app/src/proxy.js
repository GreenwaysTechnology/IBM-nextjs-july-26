import { NextResponse } from "next/server";

//normal execution : http://localhost:3000/dashboard ---> /dashboard
export function proxy(request) {
    const response = NextResponse.next()
    const pathname = request.nextUrl.pathname
    if (pathname.startsWith('/admin')) {
        response.headers.set('page', 'admin')
    }

    if (pathname.startsWith('/dashboard')) {
        response.headers.set('page', 'dashboard')
    }
    if (pathname.startsWith('/profile')) {
        response.headers.set('page', 'profile')
    }
    return response

}

//configuration :
export const config = {
    matcher: [
        '/dashboard/:path*',
        '/about/:path*',
        '/profile/:path*',
        '/admin/:path*'
    ]
}