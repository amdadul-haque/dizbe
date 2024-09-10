import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-50 border-b'>
      <div className="w-full layout py-3 md:py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={200}
            height={200}
            className="h-12 xl:h-16 w-auto"
          />
        </Link>
      </div>
    </div>
  )
}

export { Navbar }