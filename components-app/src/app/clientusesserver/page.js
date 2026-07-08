import MyClient from "@/app/clientusesserver/components/MyClient"
import MyServer from "@/app/clientusesserver/components/MyServer"

// export default function Home() {
//    return <MyClient/>
// }

export default function Home() {
    return <MyClient>
        <MyServer />
    </MyClient>
}
