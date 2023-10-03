import Image from 'next/image'
import { BackgroundEllipse, Navbar } from '@/components'

export default function Home() {
  return (
    <main className='w-screen h-screen'>
      <section className="w-[1440px] h-[1024px] border-2 border-red-300 m-auto relative rounded-lg">
        
        {/* Background Ellipses */}
        <BackgroundEllipse 
          // left={443}
          // top={349}
          // blur={250}
          // width={1016}
          // height={968}
        />

        <Navbar />
        
        {/* Rendered Component */}
        <div className='absolute top-[37px] left-[275px] max-w-[1160px] max-h-[950px'>
          ff
        </div>
      </section>
    </main>
  )
}
