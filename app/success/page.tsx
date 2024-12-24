import Banner from "@/components/Banner";
import Container from "@/components/Container";
import { videoLink } from "@/constants";
import { facilities_banner } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const SuccessStories = () => {
  return (
    <div className="flex flex-col gap-5 md:gap-7">
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
              Our Facilities
            </Link>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className="text-lg md:text-2xl font-semibold">
              What are the benefits of enrolling in our course?
            </h2>
            <p className="max-w-[600px] text-xs md:text-base text-white/80">
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
      </Banner>
      <Container>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {videoLink?.map((item) => (
            <div key={item?.id}>
              <iframe
                src={item?.link}
                width={350}
                height={200}
                loading="lazy"
                className=" rounded-md"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SuccessStories;
