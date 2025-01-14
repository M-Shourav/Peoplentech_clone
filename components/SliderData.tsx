"use client";
import {
  basicComputerImg,
  dataBaseImg,
  developerImg,
  digitalImg,
  graphicsImg,
  MachineImg,
  scholarshipImg,
  securityImg,
} from "@/public/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { IoMdArrowRoundForward } from "react-icons/io";
import Link from "next/link";

const SliderArray = [
  {
    id: 1,
    title: "Scholarship Courses",
    course: "6 courses",
    href: "courses",
    image: scholarshipImg,
  },
  {
    id: 2,
    title: "DataBase Management & Testing",
    course: "3 courses",
    href: "courses",
    image: MachineImg,
  },
  {
    id: 3,
    title: "Web & Software development ",
    course: "6 courses",
    href: "courses",
    image: developerImg,
  },
  {
    id: 4,
    title: "Post Graduate Diploma ",
    course: "5 courses",
    href: "courses",
    image: dataBaseImg,
  },
  {
    id: 5,
    title: "Network & Server Administration",
    course: "4 courses",
    href: "courses",
    image: dataBaseImg,
  },
  {
    id: 6,
    title: "Security & Project Management",
    course: "11 courses",
    href: "courses",
    image: securityImg,
  },
  {
    id: 7,
    title: "Graphic & Multimedia ",
    course: "1 courses",
    href: "courses",
    image: graphicsImg,
  },
  {
    id: 8,
    title: "Digital Marketing ",
    course: "1 courses",
    href: "courses",
    image: digitalImg,
  },
  {
    id: 9,
    title: "Basic Computing ",
    course: "0 courses",
    href: "courses",
    image: basicComputerImg,
  },
];

const SliderData = () => {
  const handleSlideChange = (index: number) => {
    handleSlideChange(index);
  };
  return (
    <div className="w-full mt-10 md:mt-0">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full"
        onSelect={() => {
          const index = 0;
          if (typeof index === "number") {
            handleSlideChange(index);
          }
        }}
      >
        <CarouselContent>
          {SliderArray?.map((item) => (
            <CarouselItem key={item?.id} className="basis-1/2 md:basis-1/5">
              <Card className="bg-white border border-skyColor/20">
                <CardContent
                  className="w-full h-60 p-6 hover:bg-orange-500/85 rounded-md
                  duration-300 ease-in-out group"
                >
                  <Link
                    href={item?.href}
                    className="w-full flex flex-col items-center text-center gap-y-3"
                  >
                    <div
                      className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden
                     group-hover:bg-white duration-300"
                    >
                      <Image
                        src={item?.image}
                        alt={item?.title}
                        className="w-full h-full object-cover p-4 overflow-hidden"
                      />
                    </div>
                    <h3 className="w-full text-sm lg:text-base font-semibold group-hover:text-white duration-300">
                      {item?.title}
                    </h3>
                    <p className="flex items-center gap-x-1 text-[10px] md:text-sm lg:text-lg text-gray-600 group-hover:text-white duration-300">
                      {item?.course}
                      <span className="inline-flex md:hidden">
                        <IoMdArrowRoundForward />
                      </span>
                    </p>
                  </Link>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -top-10 right-20">
          <CarouselPrevious
            className="bg-skyColor/60 w-10 h-10 hover:bg-skyColor
             hover:text-white duration-300 ease-in-out border border-white/10"
          />
          <CarouselNext
            className="bg-skyColor/60 w-10 h-10 hover:bg-skyColor
             hover:text-white duration-300 ease-in-out border border-white/10"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default SliderData;
