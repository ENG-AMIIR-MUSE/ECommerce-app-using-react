import React from 'react'
import {Link } from 'react-router-dom'
 export function NavBar() {
  return (
    <nav className=' p-12 bg-red-900 text-white '>
 
           <Link to="/"className='p-2 justify-center'>Logo</Link>
           <Link to="/"className='p-2 justify-center'>shop</Link>
           <Link to="/"className='p-2 justify-center'>Cart</Link>
           <Link to="/"className='p-2 justify-center'>Home</Link>
    

          

    </nav>
  )
}

