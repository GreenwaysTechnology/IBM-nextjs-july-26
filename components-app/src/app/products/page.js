// import ProductCard from "./components/ProductCard";
// import ProductList from "./components/ProductList";

import ProductList from "@/app/products/components/ProductList";

// export default function ProductsPage(){
//     return <div>
//         <h1>Name : {"IPhone 18"}</h1>
//         <p>Price : {125000}</p>
//     </div>


export default function ProductsPage() {
    return <>
        {/* <ProductCard name="Iphone 18" price={125000} />
        <ProductCard name="Iphone 18" price={125000} />
        <ProductCard name="Iphone 18" price={125000} />
        <ProductCard name="Iphone 18" price={125000} />
        <ProductCard name="Iphone 18" price={125000} />
        <ProductCard name="Iphone 18" price={125000} />
        <ProductCard name="Iphone 18" price={125000} /> */}

        <ProductList />

    </>
}