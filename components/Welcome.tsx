import Image from 'next/image'
import { SearchBar } from '.'

const Welcome = () => {
  return (
    <div className='flex w-[580px] items-center justify-between mb-8 mt-8'>
      <div>
        <h3 className='font-bold text-lg'>Nau Mai Jason</h3>
        <p className='text-[13px]'>Lorem ipsum doris, lorem ipusm doris</p>
      </div>
      <div className='flex gap-4'>
        <SearchBar />
        <div className='shadow-components h-[38px] w-[38px] bg-white rounded-lg grid place-items-center'>
          <Image 
            src='/notification.svg'
            alt='notification'
            width={25}
            height={25}
          />
        </div>
      </div>
    </div>
  )
}

export default Welcome