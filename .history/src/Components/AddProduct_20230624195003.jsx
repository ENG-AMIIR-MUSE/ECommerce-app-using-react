import React from "react";
import reactsvg from '../assets/weImage.jpg'
const  AddProduct = ()=>{

    return(

        <div  className="bg-gray-900 mt-0  text-black  min-h-screen flex flex-col lg:flex-row lg:max-w-2xl  max-w-sm mx-auto justify-center items-center  shadow-lg rounded-lg ">
          <div className="w-96 rounded-lg mx-auto  bg-red-900  m-5 h-80 p-10">
           <img src= {reactsvg}  alt="missing-product-image"/>
          </div>
          <div className="mx-auto p-10 m-10 rounded-lg bg-red-100">
          <form className="space-y-3">
          
           <input type="text"placeholder="Product Name" className="w-full  rounded-lg h-11  pl-3"/>
          <input type="text"placeholder="Product Product Price" className="w-full rounded-lg h-11  pl-3"/>
          <input type="text"placeholder="Product Description" className="w-full rounded-lg h-11  pl-3"/>
           <input type="text" placeholder="Product"className="w-full rounded-lg h-11 pl-3 "/>
           <div>
             <img src={reactsvg} alt="" className="rounded-full w-52 mt-5  max-w-md  object-contain bg-yellow-900" />
             <input type="submit"/
           </div>
          </form>
          </div>
        </div>
    )
}
export default AddProduct;