import { NextResponse } from "next/server";

//redirection execution : http://localhost:3000/settings ---> /dashboard
export function proxy(request) {
    console.log(request.url)
    return NextResponse.redirect(
        new URL('/dashboard', request.url)
    )
}

//configuration :
export const config = {
    matcher: ['/settings/:path*']
}