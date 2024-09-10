'use client'
import { discoverContents } from '@/data'
import React from 'react'
import { motion } from 'framer-motion'


const Discover = () => {
  return (
    <div className='w-full bg-gray-100 py-16 md:py-20 xl:py-28'>
      <div className='layout'>
        <div className=''>
          <motion.h2 className='text-center text-2xl md:text-3xl xl:text-4xl font-semibold w-[80%] max-w-[400px] mx-auto'
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .4 }}
          >
            Discover the Ultimate Search Experience
          </motion.h2>

          <motion.div className='mt-10 md:mt-12 xl:mt-20 grid grid-cols-1 md:grid-cols-3 gap-y-6 gap-x-6'
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: .4 }}
          >
            {
              discoverContents.map((item, index) => (
                <div key={index} className={`flex flex-col items-center gap-4  shadow-md p-5 pt-7 rounded-lg xl:rounded-2xl hover:scale-[1.02] transition ${index % 2 == 1 ? 'bg-primary text-white' : 'bg-white'}`}>
                  <div className={`text-3xl md:text-4xl xl:text-5xl text-primary rounded-full p-4 md:p-5 ${index % 2 == 1 ? 'bg-gray-50' : 'bg-primary/10 '}`}>
                    {item.icon}
                  </div>
                  <h3 className='text-xl text-center md:text-2xl font-semibold'>{item.title}</h3>
                  <p className='text-center text-sm md:text-base xl:text-lg'>{item.description}</p>
                </div>
              ))
            }
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export { Discover }