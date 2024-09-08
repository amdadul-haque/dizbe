import React from 'react'
import { Button } from './core'

const CTA = () => {
  return (
    <div className='bg-gray-100 py-12 md:py-16 xl:py-24'>
      <div className='layout flex justify-between'>
        <div>
          <h2 className='text-2xl md:text-3xl xl:text-4xl font-semibold'>See how Dizzbe can refine your search.</h2>
          <p className='mt-4 md:mt-5 xl:mt-6 text-base md:text-lg'>Experience AI-driven, contextually aware shopping like never before</p>
        </div>
        <div>
          <Button
            buttonLink="/waitlist"
            buttonText="Get Started"
          />

        </div>
      </div>
    </div>
  )
}

export { CTA }