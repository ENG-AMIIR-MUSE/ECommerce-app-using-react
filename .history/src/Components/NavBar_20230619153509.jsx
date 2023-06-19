import React from 'react'
import {Link } from 'react-router-dom'
 export function NavBar() {
  return (
    <nav className=' p-12 bg-red-900 text-white '>
 
           <Link to="/"className='p-10'>Logo</Link>
           <Link to="/"className='p-10'>shop</Link>
           <Link to="/"className='p-10'>Cart</Link>
           <Link to="/"className='p-10'>Home</Link>
    

          

    </nav>
  )
}

