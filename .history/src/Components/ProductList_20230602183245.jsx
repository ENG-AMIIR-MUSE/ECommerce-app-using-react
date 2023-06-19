import React  from "react";
import ProductCard from "./productCard";
function ProductList(props){
    // const {products} =  props
//    console.log(products)
const { products } = props
    return(
            <div>
              {products.map((product)=>{
                return <ProductCard  key={product.id} product =  {product}  />
              })}
            </div>
    )
}
export default ProductList;