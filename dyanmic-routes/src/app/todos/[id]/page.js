import TODOS from "@/app/mock-data/todos";

export function getTodosById(id) {
    return TODOS.find(todo => todo.id === id)
}

export default async function TodosDetailsPage(props) {
    //console.log(await props.params)
    const id = (await props.params).id
    const todo = getTodosById(+id)
    return <div>
        <h1>{todo.id} details</h1>
        <h2>{todo.title}</h2>
        <p>{todo.status ? "Completed" : "Not Completed"} </p>
    </div>
}