import React from "react";
import reactsvg from '../assets/react.svg'
const  AddProduct = ()=>{

    return(

        <div  className="bg-gray-900 text-white flex max-w-sm mx-auto justify-center items-center p-10 shadow-lg  ">
          <div>
           <img src= {reactsvg}  alt="missing-product-image"/>
          </div>
          <div>
          <form>
           Product Name  <input type="text"/>
           Product price  <input type="text"/>
           Product description  <input type="text"/>
           Product image  <input type="text"/>
         
          </form>
          </div>
        </div>
    )
}
export default AddProduct;