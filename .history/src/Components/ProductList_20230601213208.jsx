import React  from "react";
import ProductCard from "./productCard";
function ProductList(props){
    const {p} =  props.products.products
    console.log(p)

    console.log(props.products.products)
    return(
     <>
     {
        //  props.products.products.map((product)=>{
        //     return <ProductCard key={product.id} product ={product} />
        // })
     }
     </>
    )
}
export default ProductList;