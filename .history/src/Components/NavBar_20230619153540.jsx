import React from 'react'
import {Link } from 'react-router-dom'
 export function NavBar() {
  return (
    <nav className=' p-12 bg-red-900 text-white '>
 
           <Link to="/"className='p-2 justify-end'>Logo</Link>
           <Link to="/"className='p-2 justify-end'>shop</Link>
           <Link to="/"className='p-2 justify-end'>Cart</Link>
           <Link to="/"className='p-2 justify-end'>Home</Link>
    

          

    </nav>
  )
}

