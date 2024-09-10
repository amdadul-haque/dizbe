import { Navbar } from '@/components/core'
import TermsOfService from '@/components/terms-of-service'
import React from 'react'

const TermsofServicePage = () => {
  return (
    <main>
      <Navbar />
      <div className='layout-sm py-6 md:py-8'>
        <TermsOfService />
      </div>
    </main>
  )
}

export default TermsofServicePage