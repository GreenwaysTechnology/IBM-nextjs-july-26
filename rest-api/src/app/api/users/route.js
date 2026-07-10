import { NextResponse } from "next/server";
import USERS from "@/app/mock-data/users";

export async function GET(request) {
    return NextResponse.json(USERS)
}

export async function POST(req) {
    const payload = await req.json()
    //write biz logic to insert new user into db(array)
    const newUser = {
        id: USERS.length + 1,
        ...payload
    }
    USERS.push(newUser)
    return NextResponse.json(newUser, { status: 201 })
}