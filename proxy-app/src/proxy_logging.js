import { NextResponse } from "next/server";

export function log(message) {
    console.log('log : [info] ',message)
}
//http://localhost:3000/dashboard   ---- /dashboard
export function proxy(request) {
    const response = NextResponse.next()
    //set any custom response headers
    response.headers.set('CompanyName', 'IBM')
    response.headers.set('HeadOffice', 'Banaglore')

    //logging feature
    log(request.nextUrl.pathname)

    return response
}

//configuration :
export const config = {
    matcher: ['/dashboard/:path*']
}