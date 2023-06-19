import React  from "react";
import ProductCard from "./productCard";
function ProductList(props){
    const {products} =  props
   console.log(products)
    return(
            <div>
                <h1>htis is the</h1>
                {
                   products.map((product)=>
                   <ProductCard product={product}/>
                   )
                }
            </div>
    )
}
export default ProductList;