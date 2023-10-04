import React from 'react'
import { CustomButtonProps } from '@/types'

const CustomButton = ({ text, handleClick, btnType }: CustomButtonProps) => {
  return (
    <button className='px-[18px] py-[12px] bg-red-400 text-white hover:bg-red-200 hover:text-red-600 ease-in-out duration-[250ms] rounded-lg font-bold font-[Montserrat] font-sm'>
      {text}
    </button>
  )
}

export default CustomButton