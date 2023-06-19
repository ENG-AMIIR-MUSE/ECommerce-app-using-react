import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

import './App.css'
import ProductCard from './Components/productCard'


function App() {
useEffect(()=>{
  axios.get("'https://fakestoreapi.com/products/1'")
  .then((response)=>{
    console.log(response)
  }).then((er)=>{
    console.log(er)
  })

})

  return (
    <>
    <ProductCard/>
    </>
  )
}

export default App
