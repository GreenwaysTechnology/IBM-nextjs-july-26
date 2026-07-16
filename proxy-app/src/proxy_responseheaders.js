import { NextResponse } from "next/server";

//http://localhost:3000/dashboard   ---- /dashboard
export function proxy(request) {
    const response = NextResponse.next()
    //set any custom response headers
    response.headers.set('CompanyName', 'IBM')
    response.headers.set('HeadOffice', 'Banaglore')
    return response
}

//configuration :
export const config = {
    matcher: ['/dashboard/:path*']
}