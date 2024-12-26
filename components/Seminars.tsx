import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import { HiOutlineStatusOnline } from "react-icons/hi";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Image from "next/image";
import { SeminarsImg } from "@/public/assets";
import StoryPeopleNTech from "./StoryPeopleNTech";

const Seminars = () => {
  return (
    <div>
      <div className="w-full h-full bg-slate-200 p-6 md:p-10">
        <Container className="flex flex-col items-center justify-center gap-5 md:gap-7">
          <Heading
            className="max-w-4xl"
            icon={<HiOutlineStatusOnline />}
            smallTitle="Free seminar"
            title="Join free online seminars for valuable guidance."
            subtitle="Participate in our complimentary seminars for the proper guidance needed to establish a successful career. These sessions offer opportunities to address any confusion through interactive Q&A sessions."
          />
          <div
            className="w-full flex flex-col lg:flex-row  items-center lg:items-start
             justify-between gap-5 lg:gap-0"
          >
            <div className="w-full h-full bg-[#002147] px-10 py-10 rounded-md">
              <Link
                href={"/seminars"}
                className="w-48 h-12 bg-skyColor hover:bg-lightSky flex items-center justify-center gap-1
                 text-white rounded-md text-base font-medium duration-300"
              >
                Show All Seminars{" "}
                <span>
                  <MdOutlineArrowForwardIos />
                </span>
              </Link>
            </div>
            <div className="w-full">
              <Image
                src={SeminarsImg}
                alt="seminarsLogo"
                quality={100}
                width={500}
                className=" object-cover rounded-md"
              />
            </div>
          </div>
        </Container>
      </div>
      <StoryPeopleNTech />
    </div>
  );
};

export default Seminars;
