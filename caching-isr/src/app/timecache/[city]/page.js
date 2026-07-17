// export async function getTime() {
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     const response = await fetch(url)
//     const data = await response.json()
//     return data
// }
// export async function getTime() {
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     //next js has extended fetch api to support server cache.
//     //{cache:'force-cache'} - option only for next js not for regular apis

//     const response = await fetch(url, { cache: 'force-cache' })
//     const data = await response.json()
//     return data
// }

//route segment options
//to enable cache
export const fetchCache = 'force-cache'

//to disable cache
// export const fetchCache = 'force-no-store'

// export async function getTime() {
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     //next js has extended fetch api to support server cache.
//     //{cache:'force-cache'} - option only for next js not for regular apis

//     const response = await fetch(url)
//     const data = await response.json()
//     return data
// }

//With cache and revalidation with timer
// export async function getTime() {
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     const response = await fetch(url, { cache: 'force-cache', next: { revalidate: 2 } })
//     const data = await response.json()
//     return data
// }
// export async function getTime() {
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     const response = await fetch(url, { cache: 'force-cache' })
//     const data = await response.json()
//     return data
// }

//on demand revalidation with tag
// export async function getTime() {
//     const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
//     const response = await fetch(url, {
//         cache: 'force-cache', next: {
//             tags: ['timerTag']
//         }
//     })
//     const data = await response.json()
//     return data
// }

export async function getTime() {
    const url = 'https://www.timeapi.io/api/Time/current/zone?timeZone=Asia/Kolkata'
    const response = await fetch(url, {
        cache: 'force-cache', next: {
            tags: ['timerTag']
        }
    })
    const data = await response.json()
    return data
}

export default async function TimeCachePage() {
    const data = await getTime()
    return <>
        <h1 className="font-bold">Time Now: {new Date(data.dateTime).toLocaleTimeString()}</h1>
    </>
}
export async function generateStaticParams() {
    return [{
        city: 'Kolkata'
    }]
}
