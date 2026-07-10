import { NextResponse } from "next/server";
import USERS from "@/app/mock-data/users";

export async function GET(request, obj) {
    //console.log(await obj.params)
    const id = (await obj.params).id
    const user = USERS.find(user => user.id === +id)
    console.log(user)
    if (user) {
        return NextResponse.json(user)
    } else {
        return NextResponse.json({ message: 'User Not found' })
    }
}