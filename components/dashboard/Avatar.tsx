import React from 'react'
import Image from 'next/image'
import { CustomButton } from '..'

const Avatar = () => {

  return (
    <div className='flex items-center justify-center flex-col bg-white shadow-components w-[586px] h-[451px] rounded-2xl relative'>
      <div className='mb-4'>
        <Image 
          src="/avatar1.png"
          alt="avatar 1"
          width={150}
          height={400}
        />
      </div>
      <div className='flex gap-6 pl-6'>
        <div className='avatar__preset-ellipse'></div>
        <div className='avatar__preset-ellipse'></div>
        <div className='avatar__preset-ellipse'></div>
      </div>

      <div className='absolute bottom-6 right-6'>
        <CustomButton text="Customise"/>
      </div>
      
    </div>
  )
}

export default Avatar