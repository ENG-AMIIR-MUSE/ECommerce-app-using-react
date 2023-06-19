import React  from "react";
import ProductCard from "./productCard";
function ProductList(props){
    // const {products} =  props
//    console.log(products)
    return(
            <div>
                {console.log(props.products)}
                {
                //    props.products.map((product)=>
                //    <ProductCard product={product}/>
                //    )
                }
            </div>
    )
}
export default ProductList;