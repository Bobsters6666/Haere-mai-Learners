import React from 'react'
import Image from 'next/image'

const DisplayedBadges = () => {
  return (
    <div className='grid grid-cols-2 gap-5 mt-6'>
      <div className='badges-ellipse'>
        <Image 
          src="/badge1.png"
          alt="badge 1"
          width={42}
          height={42}
        />
      </div>
      <div className='badges-ellipse'>
        <Image 
          src="/badge2.png"
          alt="badge 2"
          width={42}
          height={42}
        />
      </div>
      <div className='badges-ellipse'>
        <Image 
          src="/badge3.png"
          alt="badge 3"
          width={42}
          height={42}
        />
      </div>
      <div className='badges-ellipse'>
        <Image 
          src="/badge4.png"
          alt="badge 4"
          width={42}
          height={42}
        />
      </div>
    </div>
  )
}

export default DisplayedBadges