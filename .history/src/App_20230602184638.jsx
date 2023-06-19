import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

import './App.css'
import ProductCard from './Components/productCard'
import ProductList from './Components/productList'

function App() {
const [products,setProducts] =  useState([])

useEffect(()=>{
  axios.get('https://fakestoreapi.com/products/1')
  .then((response)=>{
    console.log(response)
  //  setProducts(response.data)
  }).catch((er)=>{
    console.log(er.response)
  })

})

  return (
    <>
   { <products && <ProductCard key = {products.id} products =  {products}/>}
    </>
  )
}

export default App
