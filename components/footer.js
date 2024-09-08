import { appLinks, socials } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black-100 pt-16 md:pt-20 xl:pt-24 text-white">
      <div className="layout">
        <div className="pb-9 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-y-10 gap-x-8">
            <div>
              <Link href="/book">
              <Image
                  src="/images/logo.png"
                  width={223}
                  height={66}
                  alt="Apex Autos"
                  className="w-auto xl:w-[223px]"
                />
              </Link>
              <p className="text-white text-sm md:text-base mt-5 md:mt-6 xl:mt-8 max-w-[500px] lg:max-w-[630px]">
              Dizzbe revolutionizes your shopping experience with AI-driven, contextually aware search. Whether you’re at home or on the go, our platform adapts to your needs—suggesting products based on your location, weather, and events. Discover the future of shopping with unparalleled precision, wherever you are.
              </p>
            </div>
            <div>
              <div className="flex justify-start md:justify-end items-center gap-3 md:gap-4">
                {socials.map((item, index) => (
                  <Link key={index} href={item.link} passHref>
                    <span className="bg-white/10 border border-white/10 rounded-full text-white text-base md:text-lg flex justify-center items-center w-10 md:w-12 aspect-square hover:bg-white/30 hover:border-white/50 transition duration-300">
                      {item?.icon}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-5 md:mt-6 xl:mt-8">
                <Link href={appLinks.ios} target="_blank">
                  <Image
                    src="/images/common/appstore-white.svg"
                    alt="location"
                    width={243}
                    height={70}
                    className="w-auto h-[40px] md:h-auto xl:h-[70px] hover:scale-[1.02] transition"
                  />
                </Link>
                <Link href={appLinks.android} target="_blank">
                  <Image
                    src="/images/common/playstore-white.svg"
                    alt="playstore"
                    width={243}
                    height={70}
                    className="w-auto h-[40px] md:h-auto xl:h-[70px] hover:scale-[1.02] transition"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-white/10"></div>
        <div className="py-4 md:py-5 xl:py-6">
          <p className="text-sm md:text-base text-white leading-normal text-center">
            Copyright © {new Date().getFullYear()} dizzbe. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };