
import React from 'react'


const Welcome = React.lazy(() => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 10000, import('../components/Greeter'))
    })
})

export default function Dashboard() {

    return <div>
        {/* static */}
        <h1>Header</h1>
        {/* Dynamic */}
        <React.Suspense fallback={<h1>Loading Welcome....</h1>}>
            <Welcome />
        </React.Suspense>
        {/* static */}
        <h1>Footer</h1>
    </div>
}