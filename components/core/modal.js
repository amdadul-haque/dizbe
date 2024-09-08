'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaCheckSquare, FaRegSquare, FaTimes } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

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
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fromMail: email,
        }),
      });
      const result = await response.json();
      if (result.success) {
        console.log(result.message);
        setIsSuccess(true);
        console.log(isSuccess + 'isSuccess');

      } else {
        console.error(result.message);
        setIsSuccess(false);
        console.log(isSuccess + 'isSuccess');
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
      setEmail('');
      setIsChecked(false);
      setIsSuccess(true);
    }
  };




  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-white to-white/90 z-[100]">
      <div className="layout relative h-full flex items-center">
        <button onClick={onClose} className='absolute right-3 top-8 text-black-300 bg-gray-300 hover:bg-white transition p-3 rounded-full'>
          <FaTimes className='text-2xl' />
        </button>
        {/* <span className='absolute left-3 top-8 text-lg font-medium'>1 of 4</span> */}
        {!isSuccess ?
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
                {<span
                  className='text-xl'
                  onClick={() => setIsChecked(!isChecked)}
                >
                  {isChecked ? <FaCheckSquare /> : <FaRegSquare />}
                </span>
                }
                <span className='text-sm'>By continuing, you agree to Daydream’s Privacy policy and acknowledge you’ve read our Terms of service</span>
              </div>
            </div>
            <button
              type='submit'
              className="w-full p-3 bg-primary text-white hover:bg-primary/90 transition disabled:bg-gray-400 mt-4 md:mt-6 xl:mt-8"
              disabled={!isChecked}
            >
              Get Started {isLoading && '...'}
            </button>
          </form>
          :
          <motion.div
            className="flex flex-col items-center bg-white p-8 rounded-lg shadow-md text-center mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <FiCheckCircle className="text-primary text-6xl mb-4" />
            </motion.div>
            <motion.h2
              className="text-2xl font-semibold text-gray-800"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              You're on the waitlist!
            </motion.h2>
            <motion.p
              className="text-gray-600 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Thank you for signing up with <strong>{email}</strong>. We will notify you as soon as we’re ready to launch.
            </motion.p>
            <motion.p
              className="text-gray-600 mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Meanwhile, stay tuned for updates and exciting news from our team. We’re thrilled to have you onboard!
            </motion.p>
          </motion.div>
        }
      </div>
    </div >
  );
};

export { Modal };