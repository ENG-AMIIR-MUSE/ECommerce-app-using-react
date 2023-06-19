import React  from "react";
import ProductCard from "./productCard";
function ProductList(props){
   const myData  = props.products.map((data)=>{
    <div>{data}</div>
   })
    return(
       {myData}
    )
}
export default ProductList;