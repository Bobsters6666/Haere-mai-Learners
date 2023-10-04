"use client"

import Image from 'next/image'
import { Backdrop, BackgroundEllipse, Dashboard, Navbar, Shop, Welcome } from '@/components'
import { useState } from 'react'

export default function Home() {
  const [selectedPage, setSelectedPage] = useState('')
  const [isBackdrop, setIsBackdrop] = useState(false)

  return (
    <main className='w-screen h-screen'>
      <section className="w-[1440px] h-[1024px] border-2 border-red-300 m-auto relative rounded-lg">
        
        <BackgroundEllipse />

          <Navbar 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isBackdrop={isBackdrop}
            setIsBackdrop={setIsBackdrop}
          />
          
          {/* Rendered Component */}
          
          <div className='absolute top-[37px] left-[290px] max-w-[1120px] max-h-[950px'>
            {selectedPage === '' && 
              <>
                <Welcome />
                <Dashboard />
              </>
            || selectedPage === 'shop' &&
              <Shop />
            }
          </div>

        {isBackdrop && <Backdrop /> }
      </section>
    </main>
  )
}
