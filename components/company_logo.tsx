"use client"
import Image from 'next/image'
import React from 'react'

const Company_logo = () => {
  return (
    <div className='flex mr-auto ml-auto justify-center gap-[110px] mt-10'>
      <Image src={require('@/public/company-logo/logo@2x.png')} alt='logo-1 ' height={85} width={85}/>
      <Image src={require('@/public/company-logo/logo1@2x.png')} alt='logo-1 ' height={85} width={85}/>
      <Image src={require('@/public/company-logo/logo2@2x.png')} alt='logo-1 ' height={85} width={85}/>
      <Image src={require('@/public/company-logo/logo3@2x.png')} alt='logo-1 ' height={85} width={85}/>
      <Image src={require('@/public/company-logo/logo4@2x.png')} alt='logo-1 ' height={85} width={85}/>
      <Image src={require('@/public/company-logo/logo5@2x.png')} alt='logo-1 ' height={85} width={85}/>
      <Image src={require('@/public/company-logo/logo6@2x.png')} alt='logo-1 ' height={85} width={85}/>
    </div>
  )
}

export default Company_logo
