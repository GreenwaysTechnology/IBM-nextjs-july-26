'use client'
import { useState } from "react"

export default function Post() {
    const [posts, setPosts] = useState([{
        id: 1, title: 'React', body: 'This is React Post'
    },
    {
        id: 2, title: 'Angular', body: 'This is Angular Post'
    }])

    const [isEditing, setIsEditing] = useState(false)

    const [form, setForm] = useState({ title: '', body: '', id: null })


    const handleSubmit = (e) => {
        e.preventDefault()
        isEditing ? updatePost() : addPost()
    }
    const updatePost = () => {
        console.log('updatePost')
        setPosts(posts.map(post => post.id === form.id ? form : post))
        setIsEditing(false)
        clearForm()
    }
    const addPost = () => {
        const newPost = { id: posts.length + 1, form: form.title, body: form.body }
        setPosts([...posts, newPost])
        clearForm()
    }
    const clearForm = () => {
        setForm({ title: '', body: '', id: null })
    }
    const handleEdit = post => {
        setIsEditing(true)
        setForm({ title: post.title, body: post.body, id: post.id })
    }
    const handleDelete = id => {
        setPosts(posts.filter(post => post.id !== id))
    }

    return <div style={{ marginLeft: 30, marginTop: 30 }}>
        {/* Form for adding new post and editing existing post */}
        {JSON.stringify(form)}
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 10 }}>
                <input value={form.title} onChange={(e) => {
                    setForm({ ...form, title: e.target.value })
                }} placeholder="Title" />
            </div>
            <div style={{ marginBottom: 10 }}>
                <textarea onChange={(e) => {
                    setForm({ ...form, body: e.target.value })
                }} value={form.body} placeholder="Body"></textarea>
            </div>
            <div style={{ marginBottom: 10 }}>
                <button>{isEditing ? "Update" : "Add"} Post</button>
            </div>
        </form>
        {/* List of items */}
        <ul>
            {
                posts.map(post => {
                    return <li key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <button onClick={() => {
                            handleEdit(post)
                        }}>Edit</button>
                        <button onClick={() => {
                            handleDelete(post.id)
                        }}>Delete</button>
                    </li>
                })
            }
        </ul>

    </div>
}