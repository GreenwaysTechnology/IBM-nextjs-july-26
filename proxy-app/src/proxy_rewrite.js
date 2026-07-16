import { NextResponse } from "next/server";

//rewrite execution : http://localhost:3000/settings ---> /settings
export function proxy(request) {
    console.log(request.url)
    return NextResponse.rewrite(
        new URL('/dashboard', request.url)
    )
}

//configuration :
export const config = {
    matcher: ['/settings/:path*']
}