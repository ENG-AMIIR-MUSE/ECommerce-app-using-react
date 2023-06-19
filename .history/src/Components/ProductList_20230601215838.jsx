import React  from "react";
import ProductCard from "./productCard";
function ProductList(props){
   console.log("PROPS", props)
   
    return(

     <>
      {
        props.products.map((product)=>(
            <ProductCard product =  {product}/>
        ))
      }
     </>
    )
}
export default ProductList;