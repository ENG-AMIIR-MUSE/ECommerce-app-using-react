import React from "react";
import reactsvg from '../assets/weImage.jpg'
import { useState } from "react";
const  AddProduct = ()=>{
  const [image,setImage]  = useState(null)
  const handleSubmit =  (event)=>{
    event.preventDefault();
    const productName   = event.target[0].value 
    const productPrice   = event.target[1].value 
    const  productDes  =  event.target[2].value
    const image  =  event.files[0]

    console.log(productDes)
    console.log(productName)
    console.log(productPrice)
    console.log(image)
 
    

   }

    return(
        <div  className="bg-gray-900 mt-0 sm:max-w-md  md: max-w-lg max-w-sm text-black  min-h-screen flex flex-col lg:flex-row lg:max-w-full 2xl:max-w-full max-w-sm mx-auto justify-center items-center  shadow-lg rounded-lg  overflow-hidden">
          <div className="w-96 rounded-lg mx-auto  bg-red-900  m-5 h-80 p-10  ">
           <img src= {reactsvg} className="w-full "  alt="missing-product-image"/>
          <h1 className="text-2xl text-white text-bold mt-3 ">Manage Products Easy</h1>
          </div>
          <p className="p-5 text-gray-100 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus temporibus cupiditate iste quis deleniti? Commodi vel nemo omnis nisi facere, totam amet esse debitis, itaque excepturi illum atque iure fuga?</p>
               <div className="  m-10 rounded-lg bg-gray-100 mx-auto mx-auto mx-auto">
          <form className="space-y-3 mx-auto p-5 " onSubmit={handleSubmit}>
          
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
             <input type="submit"  className = "rounded-lg bg-red-900 p-3 text-gray-100 h-10 "value="Add Product" />
          </form>
          </div>
     
        </div>
    )
}
export default AddProduct;