import React from "react";
import Container from "./Container";
import { footerArray } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Title from "./Title";
import { RiMapPinRangeLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { IoMailUnreadOutline } from "react-icons/io5";
import SocialLinks from "./SocialLinks";
import { paymentImg } from "@/public/assets";

const Footer = () => {
  return (
    <div className="w-full h-full text-white bg-footerBg">
      <Container className="py-5 border-b border-b-gray-700">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[_2fr_1fr_1fr_2fr]
         gap-5 p-4"
        >
          {/* images */}
          <div className="w-full flex flex-col gap-5 items-start text-white bg-transparent">
            <Link href={"/"} className="w-64">
              <Image src={footerArray?.webBio.images} alt="logo" />
            </Link>
            <div className="w-full flex flex-col gap-5">
              <p className="text-xs md:text-base text-gray-400">
                {footerArray?.webBio.des}
              </p>
              <SocialLinks />
            </div>
          </div>
          {/* quick links */}
          <div className="flex flex-col gap-5 items-start">
            <Title className=" relative">
              {footerArray?.quickLinks.title}
              <div className=" absolute -bottom-2 left-0 w-20 h-[3px] flex items-center gap-1">
                <span className="w-[70%] h-full bg-skyColor" />
                <span className="w-[15%] h-full bg-skyColor" />
                <span className="w-[15%] h-full bg-skyColor" />
              </div>
            </Title>
            <div className="mt-5 flex flex-col items-start gap-2">
              {footerArray?.quickLinks.role.map((item) => (
                <Link
                  key={item?.name}
                  href={item?.href}
                  className="text-gray-400 hover:text-skyColor 
                duration-300 ease-in-out"
                >
                  {item?.name}
                </Link>
              ))}
            </div>
          </div>
          {/* abut us */}
          <div className="flex flex-col gap-5 items-start">
            <Title className=" relative">
              {footerArray?.aboutUs.title}
              <div className=" absolute -bottom-2 left-0 w-20 h-[3px] flex items-center gap-1">
                <span className="w-[70%] h-full bg-skyColor" />
                <span className="w-[15%] h-full bg-skyColor" />
                <span className="w-[15%] h-full bg-skyColor" />
              </div>
            </Title>
            <div className="mt-5 flex flex-col items-start gap-2">
              {footerArray?.aboutUs.role.map((item) => (
                <Link
                  key={item?.name}
                  href={item?.href}
                  className="text-gray-400 hover:text-skyColor 
                duration-300 ease-in-out"
                >
                  {item?.name}
                </Link>
              ))}
            </div>
          </div>
          {/* contact us */}
          <div className="flex flex-col gap-5 items-start">
            <Title className=" relative">
              {footerArray?.contactUs.title}
              <div className=" absolute -bottom-2 left-0 w-20 h-[3px] flex items-center gap-1">
                <span className="w-[70%] h-full bg-skyColor" />
                <span className="w-[15%] h-full bg-skyColor" />
                <span className="w-[15%] h-full bg-skyColor" />
              </div>
            </Title>
            <div className="mt-5 flex flex-col items-start gap-2">
              <div className="flex items-start gap-x-2">
                <span className="mt-1 text-xl text-skyColor flex items-center">
                  <RiMapPinRangeLine />.
                </span>
                <Link
                  href={"https://maps.app.goo.gl/G8kjq1Z7AKt5AX3S7"}
                  target="_blank"
                  className="text-sm md:text-base text-gray-400
              hover:text-skyColor duration-300 hover:font-medium"
                >
                  151/7, Good Luck Center (7th & 8th) Floor, Green Road, Dhaka -
                  1205, Bangladesh
                </Link>
              </div>
              {/* regular phone */}
              <div className="flex items-center gap-x-2">
                <span className="mt-1 text-xl text-skyColor flex items-center">
                  <BsTelephone />.
                </span>
                <Link
                  href={"tel:https://contacts.google.com/"}
                  className="text-sm md:text-base text-gray-400
              hover:text-skyColor duration-300 hover:font-medium"
                >
                  Regular: +88017-10267985,+88018-26341073
                </Link>
              </div>
              {/* phone */}
              <div className="flex items-center gap-x-2">
                <span className="mt-1 text-xl text-skyColor flex items-center">
                  <BiSupport />.
                </span>
                <Link
                  href={"tel:https://contacts.google.com/"}
                  className="text-sm md:text-base text-gray-400
              hover:text-skyColor duration-300 hover:font-medium"
                >
                  Phone: +8801710267985
                </Link>
              </div>
              {/* email */}
              <div className="flex items-center gap-x-2">
                <span className="mt-1 text-xl text-skyColor flex items-center">
                  <IoMailUnreadOutline />.
                </span>
                <Link
                  href={"mailto:https://mail.google.com/"}
                  className="text-sm md:text-base text-gray-400
              hover:text-skyColor duration-300 hover:font-medium"
                >
                  Email: am.masum1129@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Image
            src={paymentImg}
            alt="payment_Img "
            className=" object-cover"
            quality={100}
          />
        </div>
      </Container>
      <div className="w-full flex items-center justify-center py-5 mt-5">
        <p className="text-xs md:text-base uppercase">
          © Copyright 2024 {""}
          <span className="text-orange-500/95"> Masum-Ahmed</span> All right
          reserved |
        </p>
      </div>
    </div>
  );
};

export default Footer;
