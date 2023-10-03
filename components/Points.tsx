import React from 'react'
import Image from 'next/image'
import { PointsProps } from '@/types'

const Points = ({ points }: PointsProps) => {
  return (
    <div>
      <div className='relative'>
        {/* Background Image */}
        <Image 
          src="/points-bg.png"
          alt="points bg"
          width={112}
          height={41}
        />
        
        {/* Points Text */}
        <span className='text-black font-bold text-xs absolute inset-0 flex items-center justify-center left-7'>
          {points}
        </span>
      </div>  
    </div>
  )
}

export default Points