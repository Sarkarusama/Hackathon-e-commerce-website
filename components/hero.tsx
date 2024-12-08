"use client"
import Image from "next/image";
import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="w-[1250px] h-[850px] bg-[#F0F2F3] items-center ml-auto mr-auto flex mt-10">
        <div className="inline-block ml-16">
      <div className="">WELLCOME TO CHAIRY</div>
      <div className="text-6xl font-bold mt-5 mb-10">Best Furniture Collection for your interior.</div>
      <button className="mt-10 pl-4 text-white inline-flex items-center bg-[#029FAE]  border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base  md:mt-0">
      Shop 
      <IoArrowForwardSharp  className='text-lg ml-4 font-bold'/>
      
    </button>
      </div>
      <Image src={require("@/public/hero/product-image@2x.png")} alt="hero image "height={580} width={430} className="mr-10"/>
    </div>
  );
};

export default Hero;
