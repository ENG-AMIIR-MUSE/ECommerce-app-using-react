import React from "react";
import reactsvg from '../assets/react.svg'
const  AddProduct = ()=>{

    return(

        <div  className="bg-gray-900 mt-0  text-white  min-h-screen flex flex-col max-w-sm mx-auto justify-center items-center  shadow-lg rounded-lg ">
          <div>
           <img src= {reactsvg}  alt="missing-product-image"/>
          </div>
          <div className="mx-auto p-10 rounded-lg bg-gray-100">
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