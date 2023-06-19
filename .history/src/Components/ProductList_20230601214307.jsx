import React  from "react";
import ProductCard from "./productCard";
function ProductList(props){
   console.log(props)
   const { post } props
    return(

     <>
     {
         post..map((product)=>{
            return <ProductCard key={product.id} product ={product} />
        })
     }
     </>
    )
}
export default ProductList;