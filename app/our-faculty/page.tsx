import Banner from "@/components/Banner";
import Container from "@/components/Container";
import { MentorsArray } from "@/constants";
import { mentorsBanner } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LuArrowRight } from "react-icons/lu";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Faculty = () => {
  return (
    <div className="mb-10">
      <Banner>
        <div className="w-full py-6 flex flex-col items-start gap-5">
          <div className="flex items-center gap-1">
            <Link
              href={"/"}
              className="text-lg md:text-xl font-semibold hover:text-lightSky duration-300"
            >
              Home
            </Link>
            <span className="text-lg md:text-xl font-semibold text-white/80">
              <MdOutlineArrowForwardIos />
            </span>
            <Link
              href={"/"}
              className="text-lg md:text-xl font-semibold text-white/80"
            >
              {" "}
              Our Mentors
            </Link>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className=" text-lg md:text-2xl lg:text-4xl font-semibold">
              Start the course with the best mentor
            </h2>
            <p className="max-w-[600px] text-xs md:text-base mb-10 text-white/80">
              Welcome to our faculty page, where you can get to know the
              dedicated individuals who make up the backbone of our IT industry.
              Our Mentors are professionals expertise with a passion for their
              respective fields.
            </p>
          </div>
        </div>
        <div className="w-full mt-10 hidden lg:inline-flex justify-evenly">
          <Image
            src={mentorsBanner}
            alt="mentors_bannerImg"
            width={500}
            height={500}
            className="object-cover p-3"
          />
        </div>
      </Banner>
      <Container className="py-5 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {MentorsArray?.map((item) => (
            <div
              key={item?.name}
              className="flex flex-col md:flex-row items-start justify-between
            border border-gray-200 p-3 gap-5 rounded-md shadow-xl"
            >
              <div className="w-full">
                <Image
                  src={item?.image}
                  alt={item?.name}
                  className=" object-cover rounded-md"
                />
              </div>
              {/* description */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-col items-start">
                  <Link
                    href={{
                      pathname: `/our-faculty/${item?._id}`,
                      query: { id: item?._id },
                    }}
                    className="text-base md:text-xl font-semibold hover:text-skyColor
                    duration-300 ease-in-out"
                  >
                    {item?.name}
                  </Link>
                  <p className="text-sm font-medium text-gray-600">
                    {item?.title}
                  </p>
                </div>
                <div>
                  <p className="text-[15px] text-gray-600">
                    {item?.des.slice(0, 131)}...
                  </p>
                </div>
                <div className="flex flex-col items-start gap-y-3">
                  <p
                    className="text-base md:text-xl font-semibold tracking-wide
                  text-black/80"
                  >
                    Expertise
                  </p>
                  <div className="flex flex-wrap gap-x-3 gap-y-2">
                    {item?.Skills.map((item, index) => (
                      <p
                        key={index}
                        className={`px-2 py-1
                       uppercase text-[14px] font-semibold rounded-md ${
                         (index === 0 || index === 1 || index === 5) &&
                         "bg-[#fff2d6] text-[#FFAB00]"
                       }
                       ${
                         (index === 2 || index === 7) &&
                         "bg-[#FFEEF3] text-[#F8285A]"
                       }
                       ${index === 3 && "bg-[#E7E7FF] text-[#796CFF]"}
                       ${index === 4 && "bg-[#D7F5FC] text-[#03C3EC]"}
                       ${index === 6 && "bg-[#E6E9EF] text-[#6F42C1]"}
                       `}
                      >
                        {item?.name}
                      </p>
                    ))}
                  </div>
                </div>
                {/* button */}
                <div className="flex flex-row-reverse p-6">
                  <Link
                    href={{
                      pathname: `/our-faculty/${item?._id}`,
                      query: { id: item?._id },
                    }}
                    className="flex items-center gap-1 text-skyColor 
                    border border-skyColor px-4 py-1.5 rounded-md
                     text-base font-medium hover:bg-skyColor duration-300
                     hover:text-white"
                  >
                    See Details
                    <span>
                      <LuArrowRight />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Faculty;
