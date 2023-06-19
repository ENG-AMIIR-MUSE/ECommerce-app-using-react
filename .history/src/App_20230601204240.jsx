import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

import './App.css'
import ProductCard from './Components/productCard'

function App() {
const [products,setProducts] =  useState({})

useEffect(()=>{
  axios.get('https://fakestoreapi.com/products/1')
  .then((response)=>{
    // console.log(response)
    setProducts({
      products:response
    })
  }).then((er)=>{
    console.log(er)
  })

})

  return (
    <>
    {console.log(products)}
    <ProductCard/>
    </>
  )
}

export default App
