import React  from "react";
import ProductCard from "./productCard";
function ProductList(props){
   console.log(props.post.post.id)
   
    return(

     <>
     {
         props.post.post.map((product)=>{
            return <ProductCard key={product.id} product ={product} />
        })
     }
     </>
    )
}
export default ProductList;