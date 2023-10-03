import React from 'react'
import Image from 'next/image'

const Navlinks = () => {
  return (
    <div className='flex flex-col gap-4 mt-6 text-xs font-semibold'>
      <div className='flex items-center gap-4'>
        <img src="/dashboard.svg" alt="Dashboard" className='w-6 h-6' />
        <span className='red-hover'>Dashboard</span>
      </div>
      <div className='flex items-center gap-4'>
        <img src="/book.svg" alt="Dashboard" className='w-6 h-6' />
        <span className='red-hover'>Courses</span>
      </div>
      <div className='flex items-center gap-4'>
        <img src="/social.svg" alt="Dashboard" className='w-6 h-6' />
        <span className='red-hover'>Friends</span>
      </div>
      <div className='flex items-center gap-4'>
        <img src="/shop.svg" alt="Dashboard" className='w-6 h-6' />
        <span className='red-hover'>Shop</span>
      </div>
    </div>
  )
}

export default Navlinks