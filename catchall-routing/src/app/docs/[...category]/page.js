
import { notFound } from "next/navigation"


const docs = {
    //path: path Content
    "getting-started": "Heres How to get started",
    "advanced": "This is advanced Guide"
}
export default async function DocsCategoryPage({ params }) {
    const category = (await params).category
    const path = category.join("/")
    const content = docs[path]
     if (!content) {
        notFound()
    }
    return <div className="p-6">
        <h1>Docs :{path}</h1>
        <p>{content}</p>
    </div>
}