import { heroLogo, p1, p10, p2, p3, p4, p6, p7, p8, p9 } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RiVipCrownFill } from "react-icons/ri";

const images = [
  {
    id: 1,
    images: p1,
  },
  {
    id: 2,
    images: p2,
  },
  {
    id: 3,
    images: p3,
  },
  {
    id: 4,
    images: p4,
  },
  {
    id: 5,
    images: p6,
  },
  {
    id: 6,
    images: p7,
  },
  {
    id: 7,
    images: p8,
  },
  {
    id: 8,
    images: p9,
  },
  {
    id: 9,
    images: p10,
  },
];

const Photo = () => {
  return (
    <div>
      <div className="relative">
        <Image src={heroLogo} alt="heroLogo" />
        <div
          className=" absolute top-[32%] left-0 hidden md:inline-flex items-center justify-center rounded-md gap-x-2
       bg-white max-w-64 h-12 shadow-md px-4"
        >
          <span
            className="w-6 h-6 rounded-full bg-skyColor text-white
         flex items-center justify-center"
          >
            <RiVipCrownFill />
          </span>
          <Link
            href={"/"}
            className="text-base tracking-wider font-semibold hover:text-lightSky duration-300 "
          >
            Get a Discount Offers
          </Link>
        </div>
        <div
          className=" absolute top-[35%] -right-6 animate-bounce
           duration-1000 ease-in hidden md:inline-flex flex-col 
           gap-y-2 items-center justify-center rounded-md gap-x-2
        bg-white max-w-56 h-24 shadow-md px-4"
        >
          <p className="text-[15px] font-semibold text-lightSky">
            10k Successful Student
          </p>
          <div className="flex items-center">
            {images?.map((item) => (
              <Image
                key={item?.id}
                src={item?.images}
                alt="student-images"
                className="w-5 h-5 rounded-full object-cover leading-tight"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photo;
