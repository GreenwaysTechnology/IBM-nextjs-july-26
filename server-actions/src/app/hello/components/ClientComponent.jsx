'use client'

import { sayHello } from "@/app/actions/hello"
import { useEffect, useState } from "react"


export default  function ClientComponent() {
    const [message,setMessage] = useState('')
    async function init() {
        const hello = await sayHello()
        setMessage(hello)
    }
    useEffect(() => {
        init()
    }, [])
    return <div>
        <h1>Client Component Reads Server Actions</h1>
        {message}
    </div>
}