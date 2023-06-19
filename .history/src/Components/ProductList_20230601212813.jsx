import React  from "react";
import ProductCard from "./productCard";
function ProductList(props){
 
    return(
     <>
     {
         props.products.map((product)=>{
            return <ProductCard key={product.id} product ={product} />
        })
     }
     </>
    )
}
export default ProductList;