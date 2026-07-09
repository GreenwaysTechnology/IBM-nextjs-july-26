import Link from "next/link"
//get thedata
export async function fetchPosts() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    return posts.json()
}

export default async function PostsMasterPage() {
    const posts = await fetchPosts()

    return <div>
        <ul>
            {posts.map(post => {
                return <li key={post.id}>
                    <Link href={{ pathname: `/posts/${post.id}` }}><span>{post.title}</span></Link>
                </li>
            })}
        </ul>
    </div>

} 