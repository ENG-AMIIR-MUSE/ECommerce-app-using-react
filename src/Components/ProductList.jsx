import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductList(props){
  console.log(props)
  const {products } =  props
    return(
      <>
    <div className="flex flex-wrap">
    {products.map((product)=>{
        return(

        <>
        <Link to={`/products/${product.id}`}>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img src={product.image} alt={product.image} />
         <div className="px-5 pb-5">
          
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{product.title}</h5>
         
             <div className="flex items-center mt-2.5 mb-5">
                         
                 <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3"></span>
             </div>
             <div className="flex items-center justify-between">
                 <span className="text-3xl font-bold text-gray-900 dark:text-white">{product.price}</span>
                 <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy</a>
             </div>
         </div>
     </div>
        </Link>
        
        
        </>
         
        )
      })}
    </div>
    
      </>
    )
}
export default ProductList