"use client";
import React, { useState } from "react";
import Container from "./Container";
import Heading from "./Heading";
import { videoLink } from "@/constants";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Link from "next/link";

const SuccessStory = () => {
  const [showVideo, setShowVideo] = useState(false);

  const disPlayVideo = showVideo ? videoLink : videoLink.slice(0, 6);
  return (
    <Container className="py-5 flex flex-col gap-5 md:gap-10">
      <Heading
        title="Success stories of our students"
        subtitle="The success of our students has fueled our journey of nine years, inspiring us along the way. With the guidance of skilled mentors, we have seen countless individuals achieve success, elevating PeopleNTech Institute of IT to an unparalleled status."
      />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {disPlayVideo?.map((item) => (
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
      <div className="w-full mx-auto flex items-center justify-center">
        <Link
          href={"/success"}
          className="w-40 h-12 flex items-center justify-center gap-1
           bg-skyColor text-base md:text-lg text-white font-semibold
            rounded-md tracking-wide hover:bg-lightSky duration-300"
        >
          Show More
          <span>
            <MdOutlineArrowForwardIos />
          </span>
        </Link>
      </div>
    </Container>
  );
};

export default SuccessStory;
