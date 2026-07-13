'use server'
import { redirect } from "next/navigation"

export async function createUser(data) {
    console.log('data', data)
    console.log('userName', data.get('name'), data.get('email'))

    // return {
    //     success: true, message: 'Data Saved Successfully'
    // }
    //  redirect('/success')
    redirect(`/success?name=${encodeURIComponent(data.get("name"))}&email=${encodeURIComponent(data.get("email"))}`);
}