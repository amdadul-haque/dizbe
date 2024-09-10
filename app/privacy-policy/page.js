import { Navbar } from '@/components/core'
import PrivacyPolicy from '@/components/privary-policy'
import React from 'react'

const PrivacyPage = () => {
  return (
    <div className=''>
      <Navbar />
      <div className='layout-sm py-6 md:py-8'>
        <PrivacyPolicy />
      </div>
    </div>
  )
}

export default PrivacyPage