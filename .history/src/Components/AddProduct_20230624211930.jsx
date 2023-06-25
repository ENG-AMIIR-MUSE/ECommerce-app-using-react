import React from "react";
import reactsvg from '../assets/weImage.jpg'
import { useState } from "react";
const  AddProduct = ()=>{
  const [image,setImage]  = useState(null)
  const handleSubmit =  (e)=>{
   e.preventDefault();
   
   console.log(e.target.values)
  }

    return(
        <div  className="bg-gray-900 mt-0  max-w-sm text-black  min-h-screen flex flex-col lg:flex-row lg:max-w-full 2xl:max-w-full max-w-sm mx-auto justify-center items-center  shadow-lg rounded-lg  overflow-hidden">
          <div className="w-96 rounded-lg mx-auto  bg-red-900  m-5 h-80 p-10  ">
           <img src= {reactsvg} className="w-full "  alt="missing-product-image"/>
          </div>
          <div className="  m-10 rounded-lg bg-red-100 mx-auto mx-auto mx-auto">
          <form className="space-y-3 mx-auto p-5 ">
          
           <input type="text"placeholder=" Product Name" className="w-full rounded-lg h-11  pl-3"/>
          <input type="text"placeholder="Product Product Price" className="w-full rounded-lg h-11  pl-3"/>
          <input type="text"placeholder="Product Description" className="w-full rounded-lg h-11  pl-3"/>
           <input type="text" placeholder="Product"className="w-full rounded-lg h-11 pl-3 "/>
           <div className="flex felx-row  flex-wrap items-center justify-center space-x-4">
             <img src={image&&URL.createObjectURL(image)} alt={image} className="rounded-full w-52 h-52 mt-5  max-w-md  object-cover object-center bg-yellow-900" />
             <input type="file" className = "rounded-lg p-3 h-10 mb-4 " onChange={(event)=>{
           
              setImage(event.target.files[0])
             }}/>
           </div>
             <input type="submit"  className = "rounded-lg bg-orange-400 p-3 h-10 "value="Add Product" onSubmit={handleSubmit}/>
          </form>
          </div>
     
        </div>
    )
}
export default AddProduct;