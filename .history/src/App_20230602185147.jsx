import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

import './App.css'
import ProductCard from './Components/productCard'
import ProductList from './Components/productList'

function App() {
const [products,setProducts] =  useState(null)

useEffect(()=>{
  axios.get('https://fakestoreapi.com/products/1')
  .then((response)=>{
    // console.log(response)
   setProducts(response.data)
  }).catch((er)=>{
    console.log(er.response)
  })

})

  return (
    <>
   {<ProductCard products =  {products}/>}
    </>
  )
}

export default App
