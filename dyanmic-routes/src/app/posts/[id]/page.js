
export async function fetchPostsById(id) {
    const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return post.json()
}

export default async function PostsDetailsPage(props) {
    const id = (await props.params).id
    const post = await fetchPostsById(+id)
    return <div>
        <section>
            <h1>id:{post.id} userId: {post.userId}</h1>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </section>
    </div>
}