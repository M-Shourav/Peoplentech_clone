"use client";
import { FacilitiesArray } from "@/constants";
import Container from "./Container";
import Heading from "./Heading";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
const Facilities = () => {
  const [showData, setShowData] = useState(false);
  const displayProject = showData
    ? FacilitiesArray
    : FacilitiesArray.slice(0, 6);
  const handleShow = () => {
    if (showData) {
      setShowData(false);
    } else {
      setShowData(true);
    }
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-between gap-5
     bg-gradient-to-t from-slate-100/80 to-pink-100/80 p-10 "
    >
      <Container className="w-full flex flex-col gap-5 md:gap-10">
        <Heading
          className="max-w-4xl"
          smallTitle="Special Services"
          icon={<PiShoppingBagOpenFill />}
          title="What are the benefits of enrolling in our course?"
          subtitle="At PeopleNTech Institute of IT, our commitment extends beyond training sessions. We are prepared to assist our students with any requirement they may have, at any time, not only limited to classroom instruction."
        />
        {/*support Page */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {displayProject?.map((item) => (
            <div
              key={item?._id}
              className={`${
                item?._id === 1
                  ? "bg-[#FFFCCF] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 2
                  ? "bg-[#FFEDFF] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 3
                  ? "bg-[#E9F6FF] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 4
                  ? "bg-[#E3F6EE] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 5
                  ? "bg-[#E5E9F6] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 6
                  ? "bg-[#E5F6E7] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 7
                  ? "bg-[#E5F6F8] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 8
                  ? "bg-[#EBF7EA] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 9
                  ? "bg-[#ECEAFA] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 10
                  ? "bg-[#E9F1FB] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 11
                  ? "bg-[#FCF1EA] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 12
                  ? "bg-[#E9F6FF] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : "rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
              }`}
            >
              <Image
                src={item?.image}
                width={80}
                alt="logo_images"
                className=" object-cover"
                quality={100}
              />
              <div className="flex flex-col items-center text-center gap-y-2">
                <h1 className="text-base md:text-2xl font-semibold">
                  {item?.title}
                </h1>
                <p>{item?.des}</p>
              </div>
            </div>
          ))}
        </div>
        {/* show more button */}
        <div className="w-full flex items-center justify-center">
          <Link
            href={"/facilities"}
            className="w-40 h-12 flex items-center justify-center gap-1
           bg-skyColor text-base md:text-lg text-white font-semibold
            rounded-md tracking-wide hover:bg-lightSky duration-300"
          >
            Show More
            <span>
              <MdOutlineArrowForwardIos />
            </span>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Facilities;
