'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button, Modal } from './core'
import { motion } from 'framer-motion'

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className='hero py-12 md:py-16 xl:py-24'>
        <div className='layout text-white flex justify-center items-center'>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-10'>
            <motion.div className='w-full flex flex-col justify-center'
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: .4 }}
            >
              <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold !leading-[1.2]'>
              Smart Shopping, Tailored to You!
              </h1>
              <p className='text-base md:text-lg w-[90%] leading-[1.1] mt-3 md:mt-5'>Dizzbe revolutionizes your shopping experience with AI-driven, contextually aware search. Whether you’re at home or on the go, our platform adapts to your needs—suggesting products based on your location, weather, and events. Discover the future of shopping with unparalleled precision, wherever you are.</p>
              <div>
                <Button
                  buttonText='Get Started'
                  className='mt-8 md:mt-10'
                  onClick={() => setIsModalOpen(true)}
                />
              </div>
            </motion.div>
            <motion.div className='w-full flex justify-center md:justify-end '
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: .4 }}
            >
              <Image
                src='/images/hero/right.png'
                width={500}
                height={500}
                alt='Hero Image'
                className=''
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export { Hero }