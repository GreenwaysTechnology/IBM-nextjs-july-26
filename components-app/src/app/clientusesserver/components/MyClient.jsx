'use client'

// import MyServer from "@/app/clientusesserver/components/MyServer"

// export default function MyClient(){
//     return <div>
//          <MyServer/>
//     </div>
// }

export default function MyClient(props) {
    return <div>
        {props.children}
    </div>
}