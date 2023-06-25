import React from "react";
import reactsvg from '../assets/react.svg'
const  AddProduct = ()=>{

    return(

        <div  className="bg-gray-900 text-white ">
          <div>
           <img src= {reactsvg}  alt="missing-product-image"/>
          </div>
          <div>
          <form>
           Product Name  <input type="text"/>
           Product price  <input type="text"/>
           Product description  <input type="text"/>
           Product Name  <input type="text"/>
           Product Name  <input type="text"/>
          </form>
          </div>
        </div>
    )
}
export default AddProduct;