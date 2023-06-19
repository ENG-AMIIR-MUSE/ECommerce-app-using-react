import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

import './App.css'
import ProductList from './Components/ProductList'
import ProductCard from './Components/ProductCard'
import {NavBar} from './Components/NavBar'
import { Route, Routes } from 'react-router-dom'

function App() {
const [products,setProducts] =  useState([])

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
    </>
  )
  <Routes>
    <Route path='/' element={products && <ProductList products={products}/>
  </Routes>
}

export default App
