import React  from "react";
import ProductCard from "./productCard";
function ProductList(props){
   console.log(props)
    return(
     {props.products.map(()=>{
        
     })}
    )
}
export default ProductList;