'use client'
import React from 'react'
import { Button, Modal } from './core'
import { motion } from 'framer-motion'

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className='bg-gray-100 py-12 md:py-16 xl:py-24'>
        <motion.div className='layout flex flex-col md:flex-row justify-between gap-y-8'
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: .4 }}
        >
          <div>
            <h2 className='text-2xl md:text-3xl xl:text-4xl font-semibold leading-snug'>See how Dizzbe can refine your search.</h2>
            <p className='mt-2 md:mt-5 xl:mt-6 text-base md:text-lg'>Experience AI-driven, contextually aware shopping like never before</p>
          </div>
          <div>
            <Button
              buttonText="Get Started"
              // buttonLink="/waitlist"
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </motion.div>
      </div>
    </>
  )
}

export { CTA }