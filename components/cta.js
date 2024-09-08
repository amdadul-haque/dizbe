'use client'
import React from 'react'
import { Button, Modal } from './core'

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className='bg-gray-100 py-12 md:py-16 xl:py-24'>
        <div className='layout flex justify-between'>
          <div>
            <h2 className='text-2xl md:text-3xl xl:text-4xl font-semibold'>See how Dizzbe can refine your search.</h2>
            <p className='mt-4 md:mt-5 xl:mt-6 text-base md:text-lg'>Experience AI-driven, contextually aware shopping like never before</p>
          </div>
          <div>
            <Button
              buttonText="Get Started"
              // buttonLink="/waitlist"
              onClick={() => setIsModalOpen(true)}
            />

          </div>
        </div>
      </div>
    </>
  )
}

export { CTA }