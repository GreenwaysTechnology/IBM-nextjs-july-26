'use client'

import { createUser } from "@/app/actions/userAction"

export default function UserForm() {
    //listener to collect form data and send to server actions
    async function handleSubmit(evt) {
        evt.preventDefault()
        //invoke server actions
        try {
            //read form values
            const user = {
                name: evt.target.name.value,
                email: evt.target.email.value
            }
            const result = await createUser(user)
            alert(JSON.stringify(result))
        }
        catch (err) {
            console.log(err)
        }
    }

    return <form onSubmit={handleSubmit}>
        <div>
            <input type="text" name="name" placeholder="Name" required />
        </div>
        <div>
            <input type="email" name="email" placeholder="Email" required />
        </div>
        <div>
            <button type="submit">Create User</button>
        </div>
    </form>
}