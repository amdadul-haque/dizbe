"use client";
import { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight/4) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        visible ? "scale-100 animate-bounce" : "scale-0 "
      } transition-transform duration-300 ease-in-out fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 focus:outline-none shadow-lg transform hover:scale-110 `}
    >
      <AiOutlineArrowUp className="text-2xl" />
    </button>
  );
};

export { ScrollToTop };
