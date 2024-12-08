
"use client"
import Image from 'next/image'
import React from 'react'
import { BsCart3 } from 'react-icons/bs'



const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-[#F0F2F3]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={require("@/public/logo/logo-icon.svg")} alt='logo'/>
      <span className="ml-3 text-2xl font-semibold">Comforty</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Home</a>
      <a className="mr-5 hover:text-gray-900">Shop</a>
      <a className="mr-5 hover:text-gray-900">Product</a>
      <a className="mr-5 hover:text-gray-900">Pages</a>
      <a className="mr-5 hover:text-gray-900">About</a>
    </nav>
    <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
    <BsCart3  className='text-lg mr-2 font-bold'/>
      Cart <span className='bg-green-800 text-white rounded-full  ml-2 w-5 h-5 text-sm items-center'>2</span>
      
    </button>
  </div>
</header>

  )
}

export default Navbar
