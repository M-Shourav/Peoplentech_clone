import Banner from "@/components/Banner";
import Container from "@/components/Container";
import { videoLink } from "@/constants";
import { facilities_banner, success_bannerImg } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const SuccessStories = () => {
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
              Success Story
            </Link>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold">
              Success stories of our students
            </h2>
            <p className="max-w-[600px] text-xs md:text-base mb-10 text-white/80">
              The success of our students has fueled our journey of nine years,
              inspiring us along the way. With the guidance of skilled mentors,
              we have seen countless individuals achieve success, elevating
              PeopleNTech Institute of IT to an unparalleled status.
            </p>
          </div>
        </div>
        <div className="w-full mt-10 hidden lg:inline-flex justify-evenly">
          <Image
            src={success_bannerImg}
            alt="success_bannerImg"
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
