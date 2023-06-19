import React from "react";
import ProductCard from "./ProductCard";

function ProductList(props){
  console.log(props)
  const {products } =  props
    return(

    <div>
   {products.map((product)=>{
        return <ProductCard  key  = {product.id} product = {product}/>
      })}
     
    
    </div>
    )  
}
export default ProductList