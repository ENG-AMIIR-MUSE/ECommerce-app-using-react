import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

import './App.css'
import ProductCard from './Components/productCard'
import ProductList from './Components/productList'

function App() {
const [post,setPost] =  useState({})

useEffect(()=>{
  axios.get('https://fakestoreapi.com/products/1')
  .then((response)=>{
    // console.log(response)
    setPost({
      post:response.data
    })
  }).catch((er)=>{
    console.log(er)
  })

})

  return (
    <>
   {/* {console.log(products)} */}
    <ProductList post={post}/>
    </>
  )
}

export default App
