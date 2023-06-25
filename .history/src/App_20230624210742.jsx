import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import ProductList from './Components/ProductList'
import ProductCard from './Components/ProductCard'

import './App.css'

import {NavBar} from './Components/NavBar'
import {  Routes,Route } from 'react-router-dom'

import AddProduct from './Components/AddProduct'
import axios from 'axios'

function App() {
const [products,setProducts] =  useState([])
const addProduct = (newProduct)=>{
  axios.post("https://fakestoreapi.com/products/newProduct")
  setProducts([resp.data,...resp])
  
}

useEffect(()=>{
  axios.get('https://fakestoreapi.com/products')
  .then((response)=>{
    // console.log(response)
   setProducts(response.data)
  }).catch((er)=>{
    console.log(er.response)
  })

})

  return (
    <>

    {/* {console.log(products)} */}
    <NavBar/>
   
    {/* <ProductCard/> */}
    <Routes>
    <Route path="/"/>
    <Route path="/products" element={<ProductList products ={products}/>}/>

    <Route path="/products/:id" element={<ProductCard products = {products}/>}/>
  <Route path="/addProducts/" element={<AddProduct/>}/>
  </Routes>
    </>

    
  )

  
}

export default App
