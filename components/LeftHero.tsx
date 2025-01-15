import Link from "next/link";
import { BsBookHalf } from "react-icons/bs";
import { FaTrophy } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import { IoMdArrowForward } from "react-icons/io";
import { IoPlayCircleOutline } from "react-icons/io5";
import { LuCopyCheck } from "react-icons/lu";
import { TiPlus } from "react-icons/ti";

const LeftHero = () => {
  return (
    <div className="flex flex-col gap-5 items-center md:items-start justify-center">
      <div className="flex items-center gap-3">
        <span className="text-lg text-lightSky">
          <LuCopyCheck />
        </span>
        <p className="text-sm md:text-base font-semibold text-lightSky">
          Global Leader in Professional Skill Development & Job Placement
        </p>
      </div>
      <p className="text-3xl font-semibold max-w-[500px]">
        Creating Skilled {""}
        <span className="text-lightText">Manpower,</span>{" "}
        <span className="text-headingText">Freelancer & Entrepreneur</span>{" "}
        since 2005
      </p>
      <div className="max-w-[560px]">
        <p className="w-full text-base font-normal leading-5">
          Pioneering professional skill development with expert mentors,
          ensuring continuous success through strategic job placements in the
          tech sector. A proven pathway to thriving careers in the dynamic
          digital landscape
        </p>
      </div>
      {/* achievement */}
      <div className="hidden md:inline-flex items-center gap-5">
        <div className="flex items-center gap-5">
          <p
            className="w-8 h-8 rounded-full bg-gray-200 text-lg flex items-center justify-center
          text-lightSky"
          >
            <BsBookHalf />
          </p>
          <div className="flex flex-col gap-y-0">
            <h1 className="flex items-center text-2xl font-semibold">
              70
              <span className="text-xl">
                <TiPlus />
              </span>
            </h1>
            <p className="text-sm font-semibold tracking-wide">courses</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <p
            className="w-8 h-8 rounded-full bg-gray-200 text-lg flex items-center justify-center
          text-lightSky"
          >
            <HiUsers />
          </p>
          <div className="flex flex-col gap-y-0">
            <h1 className="flex items-center text-2xl font-semibold">
              200
              <span className="text-xl">
                <TiPlus />
              </span>
            </h1>
            <p className="text-sm font-semibold tracking-wide">
              Experienced teachers
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <p
            className="w-8 h-8 rounded-full bg-gray-200 text-lg flex items-center justify-center
          text-lightSky"
          >
            <FaTrophy />
          </p>
          <div className="flex flex-col gap-y-0">
            <h1 className="flex items-center text-2xl font-semibold">
              10K
              <span className="text-xl">
                <TiPlus />
              </span>
            </h1>
            <p className="text-sm font-semibold tracking-wide">
              Successful students
            </p>
          </div>
        </div>
      </div>
      {/* button */}
      <div className="flex items-center  gap-5">
        <Link
          href={"courses"}
          className="flex items-center gap-x-1 text-sm md:text-base font-semibold 
          px-8 py-2 rounded-full bg-skyColor hover:bg-lightSky
           text-white duration-300 ease-in-out"
        >
          Our courses{" "}
          <span className="text-lg md:text-xl">
            <IoMdArrowForward />
          </span>
        </Link>
        <Link
          href={"seminars"}
          className="flex items-center gap-x-1 text-sm md:text-base font-semibold 
          hover:text-lightSky duration-300 ease-in-out"
        >
          <span className="text-xl md:text-3xl">
            <IoPlayCircleOutline />
          </span>
          Join Free Seminar
        </Link>
      </div>
    </div>
  );
};

export default LeftHero;
