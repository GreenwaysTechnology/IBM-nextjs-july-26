//by default all components are server components, this component is client component because
//this component uses "state and usestate hook"
//if any component uses state/useState hook or any hook, that component must be client component.

'use client'

import { useState } from "react"

export default function Counter() {
    //declare use state with inital state
    const [value, setValue] = useState(0)

    const onIncrement = () => {
        setValue(value + 1)
    }
    return <>
        <h1>Counter : {value}</h1>
        <button onClick={onIncrement}>+</button>
    </>
}