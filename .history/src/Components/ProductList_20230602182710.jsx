import React  from "react";
import ProductCard from "./productCard";
function ProductList(props){
    // const {products} =  props
//    console.log(products)
const { products } = props
    return(
            <div>
                {console.log( 'PROPS',props.products)}
                {
                //    props.products.map((product)=>
                //    <ProductCard product={product}/>
                //    )
                }
            </div>
    )
}
export default ProductList;