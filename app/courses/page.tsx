import Banner from "@/components/Banner";
import Container from "@/components/Container";
import SliderData from "@/components/SliderData";
import Title from "@/components/Title";
import { ManiCourseImg, success_bannerImg } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const CoursePage = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-7 mb-10">
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
              All Courses
            </Link>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold">
              Unlock Your Potential: Mastering Skills for Success
            </h2>
            <p className="max-w-[600px] text-xs md:text-base mb-10 text-white/80">
              Welcome to our Skill Development Hub, where you embark on a
              journey of self-discovery and mastery. In today's fast-paced
              world, honing your skills is not just a choice; it's a necessity.
              Whether you're aiming for personal growth, career advancement, or
              simply exploring new passions, this platform is your gateway to
              unlocking your full potential.
            </p>
          </div>
        </div>
        <div className="w-full mt-10 hidden lg:inline-flex justify-evenly">
          <Image
            src={ManiCourseImg}
            alt="success_bannerImg"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </Banner>
    </div>
  );
};

export default CoursePage;
