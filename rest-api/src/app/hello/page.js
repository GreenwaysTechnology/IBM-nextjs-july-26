async function hello(){
    const response = await fetch('http://localhost:3000/api/hello')
    return response.json()
}
export default async function  HelloPage(){
    const result = await hello();
    return <div>
        <h1>{result.message}</h1>
    </div>
}