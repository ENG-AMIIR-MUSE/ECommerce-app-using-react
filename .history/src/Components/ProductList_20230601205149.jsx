import React  from "react";
import ProductCard from "./productCard";
function ProductList({products}){
   
    return(
        products.map((product)=>{
            return <ProductCard key={product.id} product={product}/>
        })
    )
}
export default ProductList;