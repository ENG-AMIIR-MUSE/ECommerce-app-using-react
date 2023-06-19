import React from 'react'
import {Link } from 'react-router-dom'
 export function NavBar() {
  return (
    <nav className=' p-12 bg-red-900 text-white '>
 
           <Link to="/"className='p-2 text-right'>Logo</Link>
           <Link to="/"className='p-2 text-right'>shop</Link>
           <Link to="/"className='p-2 text-right'>Cart</Link>
           <Link to="/"className='p-2 text-right'>Home</Link>
    

          

    </nav>
  )
}

