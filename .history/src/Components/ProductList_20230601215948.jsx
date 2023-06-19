import React  from "react";
import ProductCard from "./productCard";
function ProductList(props){
   console.log("PROPS", props)
   
    return(
            <div>
                {
                    props.products.map((data)=>{
                        return(
                            <ProductCard key={product.id} product={product}/>
                        )
                    })
                }
            </div>
    )
}
export default ProductList;