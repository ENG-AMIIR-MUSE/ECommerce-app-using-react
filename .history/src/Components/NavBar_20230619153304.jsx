import React from 'react'
import {Link } from 'react-router-dom'
 export function NavBar() {
  return (
    <nav className='text-red-900 p-12 bg-red-900 text-white'>
 
           <Link to="/">Logo</Link>
           <Link to="/">shop</Link>
           <Link to="/">Cart</Link>
           <Link to="/">Home</Link>
    

          

    </nav>
  )
}

