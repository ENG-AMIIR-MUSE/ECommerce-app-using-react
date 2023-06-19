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
    // console.log(response)
   setProducts(response.data)
  }).catch((er)=>{
    console.log(er)
  })

})

  return (
    <>
    <ProductList products={products}/>
   {/* {console.log(products)} */}
    </>
  )
}

export default App
