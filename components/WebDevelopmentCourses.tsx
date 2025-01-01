import { webCoursesArray } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";

const WebDevelopmentCourses = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {webCoursesArray?.map((item) => (
        <div
          key={item?.name}
          className="flex flex-col justify-between border border-gray-200 hover:border-skyColor rounded-md"
        >
          <div className="w-full">
            <Image
              src={item?.images}
              alt="web-courses"
              className="object-cover rounded-t-md"
              quality={100}
            />
          </div>
          <div className="flex items-center justify-between px-4 py-2 bg-slate-200/80">
            {item?.price.map((item, index) => (
              <div key={index} className="flex items-center gap-x-10">
                <p className="flex items-center text-xl font-semibold">
                  <span className="text-3xl -mt-1">
                    <TbCurrencyTaka />
                  </span>
                  {item?.discountPrice}
                </p>
                <p className="flex items-center text-lg font-medium line-through text-red-500">
                  <span className="text-2xl -mt-1 line-through">
                    <TbCurrencyTaka />
                  </span>
                  {item?.regularPrice}
                </p>
              </div>
            ))}
            <Link
              href={"/registration"}
              className="text-base font-medium tracking-wider
          text-skyColor hover:text-lightSky hover:underline 
          hover:underline-offset-1 duration-300"
            >
              Registration
            </Link>
          </div>
          <div className="p-5">
            <p className="text-xl font-medium tracking-wide text-gray-700">
              {item?.name}
            </p>
          </div>
          <div className="w-[95%] mt-5 mx-auto mb-2 py-2 rounded-md bg-skyColor flex items-center justify-center">
            <Link
              className="flex items-center text-white text-base md:text-base font-medium uppercase"
              href={"/"}
            >
              See Details
              <span className="text-2xl">
                <IoIosArrowRoundForward />
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebDevelopmentCourses;
