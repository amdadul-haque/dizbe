import Link from 'next/link';
import React from 'react'


const Button = ({ buttonText, buttonLink, isSecondary, className, newTab }) => {
  return (
    <Link
      href={buttonLink ?? ''}
      target={newTab ? '_blank' : '_self'}
      className={`inline-block px-5 py-2 lg:px-6 lg:py-3 xl:py-4 xl:px-10 font-medium text-base lg:text-lg xl:text-xl xl:text-[22px] rounded-full cursor-pointer ${isSecondary ? 'bg-white text-black-1 border border-transparent hover:bg-primary hover:text-white hover:border-white' : 'bg-primary/90 text-white hover:bg-primary hover:scale-[1.02]'} transition duration-300  ${className} `}
    >
      {buttonText}
    </Link>
  )
}

export { Button }