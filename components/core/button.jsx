import Link from "next/link";
import React from "react";

const Button = ({
  buttonText,
  buttonLink,
  isSecondary,
  className,
  newTab,
  onClick,
}) => {
  return (
    <>
      <Link
        onClick={onClick}
        href={buttonLink ?? ""}
        target={newTab ? "_blank" : "_self"}
        className={`inline-block px-4 py-2 md:px-5 md:py-3 xl:px-8 font-medium text-base lg:text-lg xl:text-xl rounded-md md:rounded-lg xl:rounded-xl cursor-pointer ${
          isSecondary
            ? "bg-white text-black-1 border border-transparent hover:bg-primary hover:text-white hover:border-white"
            : "bg-primary/90 text-white hover:bg-primary hover:scale-[1.02]"
        } transition duration-300  ${className} `}
      >
        {buttonText}
      </Link>
    </>
  );
};

export { Button };
