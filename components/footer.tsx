
"use client"
import Image from 'next/image'
import React from 'react'
import { BiLogoMastercard } from 'react-icons/bi'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoLogoPinterest } from 'react-icons/io'
import { RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={require("@/public/logo/logo-icon.svg")} alt='logo'/>
      <span className="ml-3 text-2xl font-semibold">Comforty</span>
    </a>
        <p className='text-sm font-thin text-gray-400 mt-4'>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.
        Cras egestas purus </p>
        <div className='flex gap-2 mt-5'>
        <FaFacebook  className='text-[#029FAE] border border-[#029FAE] rounded-lg'/> 
        <FaTwitter />
        <RiInstagramFill />
        <IoLogoPinterest />
        <FaYoutube />
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
          CATEGORY
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Sofa</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Armchair</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Wing Chair</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Desk Chair</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">wooden Chair</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Park Bench</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
          SUPPORT
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Help & Support</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Tearms & Conditions</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Help</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4 bg">
        <h2 className="title-font font-extralight text-gray-400 tracking-widest text-sm mb-3">
          NEWSLETTER
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-600"
            >
             
            </label>
            <input
              type="text"
              id="footer-field"
              placeholder='Your Email'
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#029FAE] border-0 py-2 px-6 focus:outline-none hover:bg-[#37b6c2] rounded">
            Subscribe
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
          Bitters chicharrones fanny pack
          <br className="lg:block hidden" />
          waistcoat green juice
        </p>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        
        <span className="ml-3 text-sm text-gray-400">@ 2021 - Blogy - Designed & Develop by <span className='text-black'>Zakirsoft</span></span>
      </a>
      
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-gray-500">
        <BiLogoMastercard />
        </a>
        
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
