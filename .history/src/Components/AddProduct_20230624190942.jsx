import React from "react";
import reactsvg from '../assets/react.svg'
const  AddProduct = ()=>{

    return(

        <div  className="bg-gray-900 text-white  min-h- flex flex-col max-w-sm mx-auto justify-center items-center  shadow-lg rounded-lg ">
          <div>
           <img src= {reactsvg}  alt="missing-product-image"/>
          </div>
          <div>
          <form>
          <label> Product Name  </label>
           <input type="text"/>
          <label>Price</label> <input type="text"/>
          <label>descrption</label> <input type="text"/>
           <label>image</label> <input type="text"/>
         
          </form>
          </div>
        </div>
    )
}
export default AddProduct;