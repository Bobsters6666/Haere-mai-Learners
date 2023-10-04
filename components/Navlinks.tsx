import React from 'react'
import { NavbarProps } from '@/types'

const Navlinks = ({ selectedPage, setSelectedPage }: NavbarProps) => {
  return (
    <div className='flex flex-col gap-4 mt-6 text-xs font-semibold'>
      <div className='flex items-center gap-4'>
        <img src="/dashboard.svg" alt="dashboard" className='w-6 h-6' />
        <button className={`red-hover ${selectedPage == '' ? 'text-red-200 underline' : ''}`} onClick={() => setSelectedPage('')}>Dashboard</button>
      </div>
      <div className='flex items-center gap-4'>
        <img src="/book.svg" alt="courses" className='w-6 h-6' />
        <span className={`red-hover ${selectedPage == 'courses' ? 'text-red-200 underline' : ''}`} onClick={() => setSelectedPage('courses')}>Courses</span>
      </div>
      <div className='flex items-center gap-4'>
        <img src="/social.svg" alt="socials" className='w-6 h-6' />
        <span className={`red-hover ${selectedPage == 'friends' ? 'text-red-200 underline' : ''}`} onClick={() => setSelectedPage('friends')}>Friends</span>
      </div>
      <div className='flex items-center gap-4'>
        <img src="/shop.svg" alt="shop" className='w-6 h-6' />
        <button className={`red-hover ${selectedPage == 'shop' ? 'text-red-200 underline' : ''}`} onClick={() => setSelectedPage('shop')}>Shop</button>
      </div>
    </div>
  )
}

export default Navlinks