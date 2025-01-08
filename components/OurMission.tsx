import React from "react";
import Container from "./Container";
import Image from "next/image";
import { missionImg, visionImg } from "@/public/assets";
import Title from "./Title";

const OurMission = () => {
  return (
    <Container
      className=" py-5 md:py-10 flex flex-col md:flex-row
     items-center justify-between gap-10"
    >
      <div className="w-full h-[350px] bg-slate-100/80 py-5 px-6 flex flex-col gap-5 rounded-md">
        <div
          className="w-20 h-20 bg-[#1B548D] rounded-md flex items-center
         justify-center overflow-hidden"
        >
          <Image
            src={missionImg}
            alt="mission-image"
            className=" object-cover p-3 overflow-hidden
             hover:scale-110 duration-300"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Title className="text-lg md:text-2xl">Our Goal</Title>
          <p className="text-gray-600 tracking-wider leading-7">
            Our aim is to provide a learning experience that exceeds
            expectations and we believe in only practical training methods. We
            always support our students in their aspirations to never stop
            learning and never stop growing. Our mission is to meet the growing
            demand for IT education to stay abreast of the latest technologies
            and skills.
          </p>
        </div>
      </div>
      {/* vision */}
      <div className="w-full h-[350px] bg-slate-100/80 py-5 px-6 flex flex-col gap-5 rounded-md">
        <div
          className="w-20 h-20 bg-[#1B548D] rounded-md flex items-center
         justify-center overflow-hidden"
        >
          <Image
            src={visionImg}
            alt="mission-image"
            className=" object-cover p-3 overflow-hidden
             hover:scale-110 duration-300"
          />
        </div>
        <div className="flex flex-col gap-3">
          <Title className="text-lg md:text-2xl">Our Purpose</Title>
          <p className="text-gray-600 tracking-wider leading-7">
            Our vision is to serve our students as helping hands to create new
            horizons for people&apos;s career change. To empower the people of
            the country by ensuring modern and quality training system by
            harnessing the youth power.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default OurMission;
