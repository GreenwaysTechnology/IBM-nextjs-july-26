import { sayHello } from "@/app/actions/hello";
import ClientComponent from '@/app/hello/components/ClientComponent'

export default async function HelloPage() {
    const message = await sayHello();
    return <div>
        <h1>{message}</h1>
        <ClientComponent/>
    </div>

}