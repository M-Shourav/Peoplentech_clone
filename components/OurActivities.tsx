import React from "react";
import Heading from "./Heading";
import Image from "next/image";
import { activitiesImg } from "@/public/assets";
import Container from "./Container";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

const OurActivities = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#FFD6BF] to-slate-50 flex flex-col items-center justify-center ">
      <Heading
        className="p-10"
        title="Our Activities"
        subtitle="PeopleNT is led by a talented and skilled dynamic team Aiming to make quality education accessible to all He is with PeopleNTech in various domestic and multinational companies Lots of young dreamers with work experience."
      />
      <Container className="py-5 md:py-10 flex flex-col items-start gap-2">
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            <CarouselItem>
              <div className="max-w-3xl">
                <Image
                  src={activitiesImg}
                  alt="activitiesImg"
                  className="object-cover rounded-2xl"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        <div className="hidden md:inline-flex items-start gap-2">
          <Image
            src={activitiesImg}
            width={140}
            alt="activitiesImg-image"
            className="object-cover rounded-md"
          />
          <Image
            src={activitiesImg}
            width={140}
            alt="activitiesImg-image"
            className="object-cover rounded-md"
          />{" "}
          <Image
            src={activitiesImg}
            width={140}
            alt="activitiesImg-image"
            className="object-cover rounded-md"
          />
        </div>
      </Container>
    </div>
  );
};

export default OurActivities;
