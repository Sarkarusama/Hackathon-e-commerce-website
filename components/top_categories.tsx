"use client"
import Image from 'next/image'
import React from 'react'

const Top_categories = () => {
  return (
    <div className=''>
        <div className='ml-[140px] text-4xl mb-10 font-bold'>Top Categories</div>
        <div className='flex justify-center gap-5'>
        <Image src={require("@/public/top_category/image8@2x.png")} alt='chair' height={420} width={400} />
        <Image src={require("@/public/top_category/image9@2x.png")} alt='chair' height={420} width={400}/>
        <Image src={require("@/public/top_category/image10@2x.png")} alt='chair' height={420} width={400} />
        </div>
    </div>
  )
}

export default Top_categories
