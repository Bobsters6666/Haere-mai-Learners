import React from 'react'
import Image from 'next/image'
import { BadgesCollection, DisplayedBadges, LogoutButton, Navlinks, Points } from '.'
import { NavbarProps } from '@/types'

const Navbar = ({ selectedPage, setSelectedPage, setIsBackdrop }: NavbarProps) => {
  return (
    <header className='w-[209px] h-[956px] nav-gradient shadow-components absolute top-1/2 -translate-y-1/2 left-9 rounded-[20px]'>
      <nav className='flex flex-col items-center justify-center text-white'>
        <div>
          <p className='pt-[26px] text-sm'>Logo</p>
        </div>

        <div className='mt-[57px] mb-[50px] bg-red-100 w-[86px] h-[83px] grid place-items-center rounded-full'>
          <Image 
            alt="avatar"
            src="/next.svg"
            width={50}
            height={50}
          />
        </div>

        <Points points={3560} />

        <h2 className='font-bold mt-4 mb-2'>Jason Huang</h2>
        <p className='text-sm italic'>Streaker</p>

        <h3 className='pr-16 mt-16 text-sm font-bold'>Navigation</h3>
        <Navlinks 
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        <h3 className='pr-20 mt-12 text-sm font-bold'>Badges</h3>
        <DisplayedBadges />

        <button className='text-xs font-semibold pl-20 pt-6 red-hover'>View All</button>

        <LogoutButton />

        <BadgesCollection />
      </nav>
    </header>
  )
}

export default Navbar