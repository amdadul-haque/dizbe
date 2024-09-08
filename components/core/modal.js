'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaCheckSquare, FaRegSquare, FaTimes } from 'react-icons/fa';

const Modal = ({ isOpen, onClose }) => {
  // Lock body scroll when modal opens
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto'; // Ensure scroll is restored on unmount
    };
  }, [isOpen]);
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-white to-white/90 z-[100]">
      <div className="layout relative h-full flex items-center">
        <button onClick={onClose} className='absolute right-3 top-8 text-black-300 bg-gray-300 hover:bg-white transition p-3 rounded-full'>
          <FaTimes className='text-2xl' />
        </button>
        <span className='absolute left-3 top-8 text-lg font-medium'>1 of 4</span>
        <form
          onSubmit={handleSubmit}
          className='w-full max-w-[400px] mx-auto flex flex-col items-center gap-5'>
          <Image
            src='/images/logo.png'
            alt='Dizzbe'
            width={200}
            height={50}
            className=""
          />
          <p className='text-sm md:text-base text-center w-[90%] mx-auto'>We’ll send a code to your email to verify and register your account.</p>
          <div>
            <p className='text-sm md:text-base'>Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 text-black-300 bg-white border border-black-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
            <div className='flex gap-3 mt-5'>
              {<button
                className='text-xl'
                onClick={() => setIsChecked(!isChecked)}
              >
                {isChecked ? <FaCheckSquare /> : <FaRegSquare />}
              </button>
              }
              <span className='text-sm'>By continuing, you agree to Daydream’s Privacy policy and acknowledge you’ve read our Terms of service</span>
            </div>
          </div>
          <button
            type='submit'
            className="w-full p-3 bg-primary text-white hover:bg-primary/90 transition disabled:bg-gray-400 mt-4 md:mt-6 xl:mt-8"
            disabled={!isChecked}
          >
            Get Started
          </button>
        </form>
      </div>
    </div >
  );
};

export { Modal };