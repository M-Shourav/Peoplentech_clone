"use client";
import React, { useState, useEffect } from "react";
import { LuArrowUp } from "react-icons/lu";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);

    setScrollProgress(scrollPercent);
    setIsVisible(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-10 h-10 rounded-full flex items-center justify-center
         bg-black text-white shadow-lg relative"
        style={{
          background: `conic-gradient(aqua ${scrollProgress}%, red ${scrollProgress}%)`,
        }}
      >
        <div
          className="absolute inset-1 bg-black rounded-full flex items-center justify-center"
          style={{ zIndex: 1 }}
        >
          <span className="text-2xl">
            <LuArrowUp />
          </span>
        </div>
      </button>
    </div>
  );
};

export default ScrollButton;
