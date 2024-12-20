"use client";
import { logo } from "@/assets";
import { NavArray } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdArrowForward, IoMdClose } from "react-icons/io";
import { IoMenuSharp } from "react-icons/io5";

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleHamburger = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="inline-flex md:hidden">
      <button
        onClick={handleHamburger}
        className="text-3xl font-semibold hover:text-lightSky duration-300"
      >
        <IoMenuSharp />
      </button>
      <div
        onClick={handleHamburger}
        className={`${
          isOpen
            ? "fixed top-0 left-0 w-[85%] h-screen p-10 bg-white z-50 duration-700 ease-in-out"
            : "fixed top-0 left-[-100%] duration-1000 ease-in-out"
        }`}
      >
        <div className="w-full h-screen flex flex-col items-start gap-y-10">
          <div className="w-full flex items-center justify-between">
            <Image
              src={logo}
              alt="logo"
              width={150}
              quality={"100"}
              priority={true}
              className=" object-cover"
            />
            <button
              className="text-xl font-semibold border border-skyColor rounded-sm
            hover:text-red-600 duration-300 ease-in-out"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col gap-y-3">
            {NavArray?.map((item) => (
              <Link
                key={item?.name}
                href={item?.href}
                className="text-base font-semibold"
              >
                {item?.name}
              </Link>
            ))}
            <Link
              href={"/"}
              className="text-[15px] font-semibold flex items-center justify-center
             gap-1 border border-lightSky rounded-md w-20 h-8
             hover:bg-lightSky hover:text-white duration-300"
            >
              Login
              <span>
                <IoMdArrowForward />
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* overly */}
      {isOpen && <div className="fixed inset-0 bg-black/50" />}
    </div>
  );
};

export default MobileNavigation;
