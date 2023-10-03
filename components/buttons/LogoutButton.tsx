import React from 'react'

const LogoutButton = () => {
  return (
    <div className='absolute bottom-6'>
    <button className='relative text-sm font-semibold bg-red-400 w-[123px] h-[48px] rounded-[30px] ease-in-out duration-300 cursor-pointer hover:bg-red-300 hover:text-red-500 hover:shadow-components'>
      <span className='pr-4'>Log Out</span>
      <img src="/logout.svg" alt="logout" className='absolute top-[14px] right-[12px]'/>
    </button>
    </div>
    
  )
}

export default LogoutButton