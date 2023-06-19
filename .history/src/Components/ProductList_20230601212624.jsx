import React  from "react";
import ProductCard from "./productCard";
function ProductList({products}){
    console.log(products)
    return(
     <>
     {
         products.map((product)=>{
            return <ProductCard/>
        })
     }
     </>
    )
}
export default ProductList;