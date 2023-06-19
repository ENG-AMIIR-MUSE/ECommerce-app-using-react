import React from "react";
import ProductCard from "./ProductCard";

function ProductList(props){
  console.log(props)
  const {products } =  props
    return(
      <>
    
      {products.map((product)=>{
        return <ProductCard  key  = {product.id} product = {product}/>
      })}
      </>
    )
}
export default ProductList