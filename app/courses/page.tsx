import Banner from "@/components/Banner";
import BasicComputingCourses from "@/components/BasicsComputingCourses";
import Container from "@/components/Container";
import DatabaseCourse from "@/components/DatabaseCourse";
import DigitalMarketingCourses from "@/components/DigitalMarketingCourses";
import DiplomaCourses from "@/components/DiplomaCourses";
import GraphicCourses from "@/components/GraphicCourses";
import NetworkCourses from "@/components/NetworkCourses";
import ScholarshipCourses from "@/components/ScholarshipCourses";
import SecurityCourses from "@/components/SecurityCourses";
import SliderData from "@/components/SliderData";
import Title from "@/components/Title";
import WebDevelopmentCourses from "@/components/WebDevelopmentCourses";
import { ManiCourseImg } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const CoursePage = () => {
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
              All Courses
            </Link>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold">
              Unlock Your Potential: Mastering Skills for Success
            </h2>
            <p className="max-w-[600px] text-xs md:text-base mb-10 text-white/80">
              Welcome to our Skill Development Hub, where you embark on a
              journey of self-discovery and mastery. In today&apos;s fast-paced
              world, honing your skills is not just a choice; it&apos;s a
              necessity. Whether you&apos;re aiming for personal growth, career
              advancement, or simply exploring new passions, this platform is
              your gateway to unlocking your full potential.
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
      <Container className="w-full py-5 md:py-10 flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <Title className="text-lg md:text-3xl">
            Unlock your potential in the Courses section below
          </Title>
          <SliderData />
        </div>
        <div className="flex flex-col gap-10">
          <Title className="text-lg md:text-3xl">Scholarship Courses</Title>
          <ScholarshipCourses />
        </div>
        <div className="flex flex-col gap-10">
          <Title className="text-lg md:text-3xl">
            Database Management & Testing
          </Title>
          <DatabaseCourse />
        </div>
        <div className="flex flex-col gap-10">
          <Title className="text-lg md:text-3xl">
            Web & Software Development
          </Title>
          <WebDevelopmentCourses />
        </div>
        <div className="flex flex-col gap-10">
          <Title className="text-lg md:text-3xl">Post Graduate Diploma</Title>
          <DiplomaCourses />
        </div>
        <div className="flex flex-col gap-10">
          <Title className="text-lg md:text-3xl">
            Network & Server Administration
          </Title>
          <NetworkCourses />
        </div>
        <div className="flex flex-col gap-10">
          <Title className="text-lg md:text-3xl">
            Security & Project Management
          </Title>
          <SecurityCourses />
        </div>
        <div className="flex flex-col gap-10">
          <Title className="text-lg md:text-3xl">Graphic & Multimedia</Title>
          <GraphicCourses />
        </div>
        <div className="flex flex-col gap-10">
          <Title className="text-lg md:text-3xl">Digital Marketing</Title>
          <DigitalMarketingCourses />
        </div>
        <div className="flex flex-col gap-10">
          <Title className="text-lg md:text-3xl">Basic Computing</Title>
          <BasicComputingCourses />
        </div>
      </Container>
    </div>
  );
};

export default CoursePage;
