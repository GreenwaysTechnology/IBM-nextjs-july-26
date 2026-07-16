import { NextResponse } from "next/server";

//normal execution : http://localhost:3000/dashboard ---> /dashboard
export function proxy(req){
   return NextResponse.next()
}

//configuration :
export const config = {
    matcher: ['/dashboard/:path*']
}