"use client";
import Container from "@/components/Container";
import { MentorsArray } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { FaGraduationCap, FaTrophy, FaUserFriends } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbPlayerPlayFilled } from "react-icons/tb";

const SinglePage = () => {
  const params = useParams();
  const { id } = params;
  const Mentors = MentorsArray.find((item) => item?._id === id);
  if (!Mentors) {
    return <div className="py-10 px-5 text-center">No Mentors Available</div>;
  }
  return (
    <Container className="py-5 md:py-10 flex flex-col md:flex-row gap-2">
      <div className="w-full">
        <Image src={Mentors?.image} alt={Mentors?.name} />
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="flex flex-col items-start gap-1">
          <p className="text-lg md:text-xl font-semibold">Hi, I am</p>
          <h2 className="text-2xl md:text-4xl font-semibold">
            {Mentors?.name}
          </h2>
          <p className="text-base font-medium tracking-wide text-gray-600">
            {Mentors?.title}
          </p>
        </div>
        <p className="text-base text-gray-600 tracking-wide leading-7">
          {Mentors?.des}
        </p>
        {/* contact */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-x-1">
            <p className="flex items-center gap-3 text-[16px] font-normal tracking-wide text-black/80">
              <span className="text-2xl text-skyColor">
                <IoMail />
              </span>
              Email:
            </p>
            <p className="text-gray-600">{Mentors?.email}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <p className="flex items-center gap-3 text-[16px] font-normal tracking-wide text-black/80">
              <span className="text-2xl text-skyColor">
                <RiCustomerService2Fill />
              </span>
              Phone number:
            </p>
            <p className="text-gray-600">{Mentors?.phone}</p>
          </div>
        </div>
        {/* experience */}
        <div
          className="w-full flex flex-col md:flex-row items-center
         justify-between gap-5"
        >
          <div className="flex items-center gap-x-3">
            <div
              className="bg-[#E8F3EE] w-14 h-14 flex items-center justify-center 
            text-2xl text-[#198754] rounded-md"
            >
              <span>
                <TbPlayerPlayFilled />
              </span>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-semibold">10+</p>
              <p className="text-base font-thin tracking-wide text-gray-600">
                Total Course
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <div
              className="bg-[#F0ECF9] w-14 h-14 flex items-center justify-center 
            text-3xl text-[#6F42C1] rounded-md"
            >
              <span>
                <FaUserFriends />
              </span>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-semibold">36k+</p>
              <p className="text-base font-thin tracking-wide text-gray-600">
                Total Students
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-3">
            <div
              className="bg-[#FFF2E7] w-14 h-14 flex items-center justify-center 
            text-3xl text-[#FD7E14] rounded-md"
            >
              <span>
                <FaTrophy />
              </span>
            </div>
            <div>
              <p className="text-xl md:text-2xl font-semibold">20+</p>
              <p className="text-base font-thin tracking-wide text-gray-600">
                Years in Experience
              </p>
            </div>
          </div>
        </div>
        {/* certification */}
        <div className="flex flex-col gap-5">
          <p className="text-lg md:text-2xl font-semibold tracking-wide">
            Certifications
          </p>
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-md bg-[#DFFFEA] text-[#12B76A]
            flex items-center justify-center text-2xl"
            >
              <span>
                <FaGraduationCap />
              </span>
            </div>
            <div>
              {Mentors?.certificate.map((item, index) => (
                <div key={index}>
                  <p className="text-base md:text-lg font-semibold">
                    {item?.name}
                  </p>
                  <Link
                    href={item?.link}
                    target="_blank"
                    className="text-skyColor hover:text-lightSky duration-300"
                  >
                    {item?.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SinglePage;
