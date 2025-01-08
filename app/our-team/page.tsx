import Banner from "@/components/Banner";
import Container from "@/components/Container";
import { OurTeamArray } from "@/constants";
import { ourTeamImg } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const OurTeam = () => {
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
              Team
            </Link>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className=" text-lg md:text-2xl lg:text-4xl font-semibold">
              Get to Know the Faces Behind Our Work
            </h2>
            <p className="max-w-[600px] text-xs md:text-base mb-10 text-white/80">
              Welcome to our team page! Here you&apos;ll find the incredible
              individuals who work tirelessly to bring our vision to life. From
              creative minds to technical wizards, each member of our team plays
              a crucial role in our success. Get to know us better below!
            </p>
          </div>
        </div>
        <div className="w-full mt-10 hidden lg:inline-flex justify-evenly">
          <Image
            src={ourTeamImg}
            alt="success_bannerImg"
            width={500}
            height={500}
            className="object-cover p-3"
          />
        </div>
      </Banner>
      <Container className="py-5 md:py-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {OurTeamArray?.map((item) => (
            <div
              key={item?.name}
              className="border border-gray-400 flex flex-col 
              items-center justify-center text-center gap-2 px-4 py-11 rounded-md 
              hover:-translate-y-2 duration-300 hover:shadow-lg"
            >
              <div
                className="w-28 h-28 border-2 overflow-hidden
               border-indigo-300 flex items-center justify-center
                rounded-full"
              >
                <Image
                  src={item?.Image}
                  alt={item?.name}
                  className="w-full h-full  rounded-full overflow-hidden"
                />
              </div>
              <div>
                <h2 className="text-lg md:text-base font-semibold">
                  {item?.name}
                </h2>
                <p className="text-[15px] font-normal text-gray-600">
                  {item?.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurTeam;
