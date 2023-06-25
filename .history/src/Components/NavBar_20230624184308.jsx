import React from 'react'
import {Link } from 'react-router-dom'
 export function NavBar() {
  return (
    <>
    <nav className=" items-center justify-between flex-wrap bg-black p-6 mb-20 h-auto p-5">
  <div className="flex items-center flex-shrink-0 text-white mr-6">
   
    <span className="font-semibold text-xl tracking-tight">Amiir-Shop</span>


  <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
      <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Home
      </Link>
      <Link to="/products" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Products
      </Link>
      <Link to="/carts" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Carts
      </Link>
      <Link to="/carts" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        AddPro
      </Link>
    </div>
    
  </div>
  </div>
</nav>
    </>
  )

 }