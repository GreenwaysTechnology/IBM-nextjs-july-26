
export default async function ShopCategoryPage({params}){
    const category = (await params).category 
    return <div>
        <h1>{category}</h1>
    </div>
}