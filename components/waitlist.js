'use client'
import { whishListContents as contents } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Typewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";
import { Button, Modal } from "./core";

const animatedTexts = [
  "I need a dress for summer in Costa Rica",
  "Bright colors sneakers that feels old school and classic",
  "Street  style tops inspired by BELLA Hadid",
  "I am shopping for a cozy and effortless vibe ",
  "I love these tops but without stripes",
]


const WaitList = () => {

  const typeSpeed = 70
  const deleteSpeed = 30
  const delaySpeed = 1000

  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentContent, setCurrentContent] = useState(contents[0])

  // var timeToChange = animatedTexts[currentIndex].length * (typeSpeed + deleteSpeed) + delaySpeed
  // setInterval(() => {
  //   setCurrentIndex((currentIndex + 1) % (animatedTexts?.length - 1))

  // }, timeToChange)

  useEffect(() => {
    setCurrentContent(contents[currentIndex])
    const timeToChange = animatedTexts[currentIndex].length * (typeSpeed + deleteSpeed) + delaySpeed + 500
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animatedTexts.length)
    }, timeToChange)

    return () => clearInterval(intervalId)

  }, [currentIndex, typeSpeed, deleteSpeed, delaySpeed])


  const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

  const getUniqueAnimation = () => {
    const directions = ['x', 'y'];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    const oppositeDirection = randomDirection === 'x' ? 'y' : 'x';

    return {
      animate: {
        [randomDirection]: [0, getRandomNumber(-20, 20), 0, getRandomNumber(-20, 20), 0],
        [oppositeDirection]: [0, getRandomNumber(-10, 10), 0],
        rotate: [0, getRandomNumber(-5, 5), 0, getRandomNumber(-5, 5), 0],
        scale: [1, getRandomNumber(0.95, 1.05), 1],
      },
      transition: {
        duration: getRandomNumber(8, 15),
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }
    };
  };


  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className={`min-h-screen transition duration-300`}
        style={{ backgroundColor: contents[currentIndex]?.bgColor }}>
        <div className="layout py-5 md:py-10">
          <div className="w-full hidden md:flex justify-between items-center mb-12">
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                alt="logo"
                width={200}
                height={200}
                className="h-12 xl:h-16 w-auto"
              />
            </Link>
          </div>
          {/* <p>index:{currentIndex}</p> */}
          {/* <p>{contents[currentIndex]?.bgColor}</p> */}
          <div className="w-full flex flex-col lg:flex-row gap-10 items-stretch">
            <div className="w-full lg:w-1/3 flex flex-col justify-center gap-2 xl:gap-8">
              <div>
                <Image
                  src={"/images/logo.png"}
                  alt={currentContent?.products[0]?.name}
                  width={500}
                  height={500}
                  className="h-12 xl:h-16 w-auto"
                />
              </div>
              <div className="h-20 xl:h-24">
                <span className="text-2xl xl:text-[28px] font-semibold leading-relaxed">
                  <Typewriter
                    words={animatedTexts}
                    loop={true}
                    cursor
                    cursorStyle='|'
                    typeSpeed={typeSpeed}
                    deleteSpeed={deleteSpeed}
                    delaySpeed={delaySpeed}
                  />
                </span>
              </div>
              <div className="">
                <Button
                  buttonText="Join Waitlist"
                  // buttonLink="/waitlist"
                  onClick={() => setIsModalOpen(true)}
                />
              </div>
            </div>
            <motion.div className="w-full lg:w-2/3"
              style={{ zIndex: 10 }}
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 xl:gap-8">
                {currentContent?.products.map((product, index) => (
                  <div key={index} className="w-full flex flex-col gap-4">
                    <motion.div
                      className="w-full h-60 relative rounded-2xl !z-10"
                      {...getUniqueAnimation(index)}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl"
                      />
                      <div className="absolute bottom-0 w-full px-4 py-5 flex flex-col gap-0 font-medium bg-gradient-to-t from-black/50 to-transparent text-white rounded-2xl">
                        <span className="text-xl">{product.name}</span>
                        <span>${product.price}</span>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export { WaitList };
