import React from "react";
import reactsvg from '../assets/react.svg'
const  AddProduct = ()=>{

    return(

        <div  className="bg-gray-900 mt-0  text-black  min-h-screen flex flex-col max-w-sm mx-auto justify-center items-center  shadow-lg rounded-lg ">
          <div>
           <img src= {reactsvg}  alt="missing-product-image"/>
          </div>
          <div className="mx-auto p-10 m-10 rounded-lg bg-red-100">
          <form className="space-y-3">
          
           <input type="text"placeholder="Product Name" className="w-full  rounded-lg h-11 "/>
          <input type="text"placeholder="Product " className="w-full rounded-lg h-11 "/>
          <input type="text"placeholder="" className="w-full rounded-lg h-11 "/>
           <input type="text" placeholder=""className="w-full rounded-lg h-11 "/>
         
          </form>
          </div>
        </div>
    )
}
export default AddProduct;