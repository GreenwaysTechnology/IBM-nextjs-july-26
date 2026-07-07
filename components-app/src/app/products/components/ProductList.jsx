// import PRODUCTS from "../data/products"
import PRODUCTS from "@/app/products/data/products"
// import ProductCard from "./ProductCard"
import ProductCard from "@/app/products/components/ProductCard"

export default function ProductList(props) {
    return <>
        {
            PRODUCTS.map(product => {
                return <ProductCard key={product.id} name={product.name} price={product.price} />
            })
        }
    </>
}