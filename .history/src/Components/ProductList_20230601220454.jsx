import React  from "react";
import ProductCard from "./productCard";
function ProductList(props){
   console.log("PROPS", props)
   
    return(
            <div>
                {
                   props.products.map((product)=>
                   <ProductCard product={product}/>
                   )
                }
            </div>
    )
}
export default ProductList;