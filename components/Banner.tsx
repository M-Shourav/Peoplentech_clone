import React from "react";
import Container from "./Container";
import Image from "next/image";
import { facilities_banner } from "@/public/assets";
import Link from "next/link";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Title from "./Title";

const Banner = () => {
  return (
    <div className="w-full h-full bg-black text-white">
      <Container className="h-full grid grid-cols-1 lg:grid-cols-2 gap-10">
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
              Our Facilities
            </Link>
          </div>
          <div className="flex flex-col gap-5">
            <Title className="md:text-3xl">
              What are the benefits of enrolling in our course?
            </Title>
            <p className="text-sm md:text-base text-white/80">
              At PeopleNTech Institute of IT, our commitment extends beyond
              training sessions. We are prepared to assist our students with any
              requirement they may have, at any time, not only limited to
              classroom instruction.
            </p>
          </div>
        </div>
        <div className="w-full mt-10 hidden lg:inline-flex justify-evenly">
          <Image
            src={facilities_banner}
            alt="facilities_banner"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </Container>
    </div>
  );
};

export default Banner;
