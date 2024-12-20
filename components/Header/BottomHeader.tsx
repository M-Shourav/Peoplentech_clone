import React from "react";
import Container from "../Container";
import Image from "next/image";
import { logo } from "@/public/assets";
import Link from "next/link";
import { NavArray } from "@/constants";
import { IoMdArrowForward } from "react-icons/io";
import MobileNavigation from "../MobileNavigation";

const BottomHeader = () => {
  return (
    <div className="w-full h-16 shadow-lg bg-white/90">
      <Container className="h-full flex items-center justify-between gap-5">
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
            <Link
              key={item?.name}
              href={item?.href}
              className="text-[15px] font-semibold tracking-wide hover:text-lightSky duration-300"
            >
              {item?.name}
            </Link>
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
