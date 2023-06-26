
import reactsvg from '../assets/weImage.jpg'
import { useState } from "react";
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from "formik";

const  AddProduct = ()=>{
  const [image,setImage]  = useState(null)
  const initialValues  = {
    name:"",
    price:"",
    description:"",
    image:"",
  }
  const validation  = Yup.object({
   name:Yup.string().required("Product Name Required!"),
   price:Yup.string().required("Price Required"),
   description:Yup.string().required("description Required"),
  })
  const handleSubmit =  (values)=>{

    console.log(values)
  
   
 
    

   }

    return(
        <div  className="bg-gray-900 mt-0 sm:max-w-md  md:max-w-lg max-w-sm text-black  min-h-screen flex flex-col lg:flex-row lg:max-w-full 2xl:max-w-full max-w-sm mx-auto justify-center items-center  shadow-lg rounded-lg  overflow-hidden">
          <div className="w-96 rounded-lg mx-auto  bg-red-900  m-5 h-80 p-10  ">
           <img src= {reactsvg} className="w-full "  alt="missing-product-image"/>
          <h1 className="text-2xl text-white text-bold mt-3 ">Manage Products Easy</h1>
          </div>
          <p className="p-5 text-gray-100 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus temporibus cupiditate iste quis deleniti? Commodi vel nemo omnis nisi facere, totam amet esse debitis, itaque excepturi illum atque iure fuga?</p>
               <div className="  m-10 rounded-lg bg-gray-100  mx-auto">
        <Formik  
        initialValues={initialValues}
        validationSchema= {validation}
        onSubmit =  {handleSubmit}
        >
        <Form className="space-y-3 mx-auto p-5 ">
          
          <Field type="text"placeholder=" Product Name" className="w-full rounded-lg h-11  pl-3" name="name"/>
        <ErrorMessage name ="name" component="div" className='text-red-800 text-center'/>
         <Field type="text"placeholder="Product Product Price" className="w-full rounded-lg h-11  pl-3"name="price"/>
        <ErrorMessage name ="price" component="div" className='text-red-800 text-center'/>
         
         <Field type="text"placeholder="Product Description" className="w-full rounded-lg h-11  pl-3" name="description"/>
        <ErrorMessage name ="description" component="div" className='text-red-800 text-center'/>
          
           <div className="flex felx-row  flex-wrap items-center justify-center space-x-4">
            <img src={image&&URL.createObjectURL(image)} alt={image} className="rounded-full w-52 h-52 mt-5  max-w-md  object-cover object-center bg-yellow-900" />
            <Field type="file" className = "rounded-lg p-3 h-10 mb-4 " name="image" onChange={(event)=>{
          
             setImage(event.target.files[0])
            }}/>
          </div>
            <Field type="submit"  className = "rounded-lg bg-red-900 p-3 text-gray-100 h-10 "value="Add Product" />
         </Form>
        </Formik>
          </div>
     
        </div>
    )
}
export default AddProduct;