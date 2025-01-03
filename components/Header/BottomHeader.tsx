"use client";
import React, { useState } from "react";
import Container from "../Container";
import Image from "next/image";
import { logo } from "@/public/assets";
import Link from "next/link";
import { NavArray } from "@/constants";
import { IoMdArrowForward } from "react-icons/io";
import MobileNavigation from "../MobileNavigation";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa";

const BottomHeader = () => {
  const [dropdown, setDropdown] = useState(null);
  const pathName = usePathname();
  const HandelMouseEnter = (name: any) => {
    setDropdown(name);
  };
  const HandelMouseLeave = () => {
    setDropdown(null);
  };
  return (
    <div className="w-full h-16 shadow-lg bg-white/90">
      <Container
        onMouseLeave={HandelMouseLeave}
        className="h-full flex items-center justify-between gap-5"
      >
        <Link href={"/"} className="max-w-52">
          <Image
            src={logo}
            alt="logo"
            width={200}
            priority={true}
            quality={"100"}
            className="w-full object-cover"
          />
        </Link>
        {/* menuItem */}
        <div className="hidden lg:inline-flex items-center gap-5">
          {NavArray?.map((item) => (
            <div
              key={item?.name}
              className="relative"
              onMouseEnter={() => HandelMouseEnter(item?.name)}
            >
              <Link
                href={item?.href}
                className={`text-[15px] font-semibold tracking-wide
                 hover:text-lightSky duration-300 flex items-center ${
                   item?.href === pathName && "text-skyColor"
                 }`}
              >
                {item?.name}
                {item?.submenu && (
                  <div>
                    <span>
                      <FaAngleDown />
                    </span>
                  </div>
                )}
              </Link>
              {item?.submenu && dropdown === item?.name && (
                <div
                  className=" absolute top-10 left-0 bg-white shadow-md
                 rounded-md flex flex-col w-[200px]"
                >
                  {item?.submenu.map((item) => (
                    <Link
                      key={item?.name}
                      href={item?.href}
                      rel="noopener noreferrer"
                      className="px-4 py-2 border-b border-b-gray-200 text-gray-600 font-medium
                       hover:text-lightSky duration-300 ease-in-out"
                    >
                      {item?.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href={"/"}
            className="text-[15px] font-semibold flex items-center
             gap-1 border border-lightSky rounded-md px-2 py-1.5
             hover:bg-lightSky hover:text-white duration-300"
          >
            Login
            <span>
              <IoMdArrowForward />
            </span>
          </Link>
        </div>
        <div className=" inline-flex lg:hidden">
          <MobileNavigation />
        </div>
      </Container>
    </div>
  );
};

export default BottomHeader;
