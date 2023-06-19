import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

import './App.css'
import ProductList from './Components/ProductList'


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
    <h1>app</h1>
    {/* {console.log(products)} */}
    { products && <ProductList products={products}/>}
    </>
  )
}

export default App
