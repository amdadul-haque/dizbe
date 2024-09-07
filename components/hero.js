import Image from 'next/image'
import React from 'react'
import { Button } from './core'

const Hero = () => {
  return (
    <div className='hero py-12 md:py-16 xl:py-24'>
      <div className='layout text-white flex justify-center items-center'>
        <div className='w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10'>
          <div className='w-full md:w-1/2'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold leading-none'>Precision in Every Cart</h1>
            <p className='text-base md:text-lg w-[90%] leading-[1.1] mt-3 md:mt-5'>Dizzbe revolutionizes your shopping experience with AI-driven, contextually aware search. Whether you’re at home or on the go, our platform adapts to your needs—suggesting products based on your location, weather, and events. Discover the future of shopping with unparalleled precision, wherever you are.</p>
            <Button buttonText='Get Started' buttonLink='/signup' className='mt-8 md:mt-10' />

          </div>
          <div className='w-full md:w-1/2'>
            <Image
              src='/images/hero/hero-bg.jpg'
              width={600}
              height={600}
              alt='Hero Image'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }