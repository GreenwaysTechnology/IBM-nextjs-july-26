import { NextResponse } from "next/server"

export function proxy(req) {
    const session = req.cookies.get("session")?.value
    if (req.nextUrl.pathname.startsWith("/dashboard") && !session) {
        return NextResponse.redirect(new URL("/login", req.url))
    }
    return NextResponse.next()
}
//authroization configuration
export const config = {
    matcher: [
        '/dashboard/:path*'
    ]
}
