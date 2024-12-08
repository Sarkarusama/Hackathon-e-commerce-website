"use client"
import Image from 'next/image'
import React from 'react'

const Product = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
  <p className='text-4xl font-bold mb-10'>Featured Products</p>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
       
        <a className="block relative h-[312px] w-[312px]rounded overflow-hidden">
          <Image src={require('@/public/product/image@2x.png')} alt='chair'/>
        </a>
        <div className="flex">
            <div className='inline-block'>      
          <h2 className="text-gray-900 title-font text-lg font-normal">
          Library Stool Chair
          </h2>
          <p className="mt-1 font-bold">$16.00</p>
          </div>
          <Image src={require('@/public/add-cart.svg')} alt='cart logo' className='ml-auto'/>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-[312px] w-[312px]rounded overflow-hidden">
          <Image src={require('@/public/product/image2@2x.png')} alt='chair'/>
        </a>
        <div className="flex">
            <div className='inline-block'>      
          <h2 className="text-gray-900 title-font text-lg font-normal">
          Library Stool Chair
          </h2>
          <p className="mt-1 font-bold">$16.00</p>
          </div>
          <Image src={require('@/public/add-cart.svg')} alt='cart logo' className='ml-auto'/>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-[312px] w-[312px]rounded overflow-hidden">
          <Image src={require('@/public/product/image4@2x.png')} alt='chair'/>
        </a>
        <div className="flex">
            <div className='inline-block'>      
          <h2 className="text-gray-900 title-font text-lg font-normal">
          Library Stool Chair
          </h2>
          <p className="mt-1 font-bold">$16.00</p>
          </div>
          <Image src={require('@/public/add-cart.svg')} alt='cart logo' className='ml-auto'/>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-[312px] w-[312px]rounded overflow-hidden">
          <Image src={require('@/public/product/image6@2x.png')} alt='chair'/>
        </a>
        <div className="flex">
            <div className='inline-block'>      
          <h2 className="text-gray-900 title-font text-lg font-normal">
          Library Stool Chair
          </h2>
          <p className="mt-1 font-bold">$16.00</p>
          </div>
          <Image src={require('@/public/add-cart.svg')} alt='cart logo' className='ml-auto'/>
        </div>
      </div>
     
    </div>
  </div>
</section>

  )
}

export default Product
