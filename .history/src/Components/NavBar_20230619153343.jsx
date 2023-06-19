import React from 'react'
import {Link } from 'react-router-dom'
 export function NavBar() {
  return (
    <nav className=' p-12 bg-red-900 text-black'>
 
           <Link to="/">Logo</Link>
           <Link to="/">shop</Link>
           <Link to="/">Cart</Link>
           <Link to="/">Home</Link>
    

          

    </nav>
  )
}

