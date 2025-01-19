"use client";
import Container from "@/components/Container";
import Title from "@/components/Title";
import { upComingBatchArray } from "@/constants";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { MdOutlineArrowForwardIos, MdPhone } from "react-icons/md";
import { TbPlayerPlayFilled } from "react-icons/tb";

const SingleCoursePage = () => {
  const params = useParams();
  const { id } = params;
  const data = upComingBatchArray?.find((item) => item?.SLNo === id);
  return (
    <Container className="py-5 md:py-10 flex flex-col gap-y-2">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-1 mb-2">
        <Link
          href={"/"}
          className="text-sm md:text-lg font-semibold
           hover:text-lightSky duration-300"
        >
          Home
        </Link>
        <span>
          <MdOutlineArrowForwardIos />
        </span>
        <Link
          href={"/courses"}
          className="text-sm md:text-lg font-semibold
           hover:text-lightSky duration-300"
        >
          Course
        </Link>
        <span>
          <MdOutlineArrowForwardIos />
        </span>
        <p
          className=" cursor-pointer text-sm md:text-lg font-semibold
         text-gray-500"
        >
          {data?._id}
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between gap-5">
        <div className="flex flex-col gap-y-3 w-full">
          <div className="w-full">
            <iframe
              src={data?.videoLink}
              loading="lazy"
              className=" rounded-md w-full h-[300px] md:h-[500px] object-contain"
              allowFullScreen
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <Title className="md:text-4xl mt-2">{data?.title}</Title>
            <p className="text-[14px]  md:text-base tracking-wide text-gray-600">
              {data?.des}
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="w-full border border-gray-300 p-3 rounded-md">
            <Title className="md:text-xl">{data?.subtitle}</Title>
            <div className="mt-5">
              {data?.courseFeature && (
                <div className="flex flex-col border-b border-b-gray-400">
                  {data?.courseFeature?.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 mb-5">
                      <p className="border-2 border-gray-800 rounded-full w-5 h-5 flex items-center justify-center">
                        <span className="text-xs">
                          <TbPlayerPlayFilled />
                        </span>
                      </p>
                      <p className="text-base font-medium tracking-wide">
                        {item?.name}
                      </p>
                    </div>
                  ))}
                </div>
              )}
              <div className="p-3 w-full flex flex-col gap-y-3">
                <div className="w-full flex items-center gap-x-2">
                  <p className="text-xl md:text-3xl font-semibold text-red-500">
                    ৳{data?.price.discountPrice}
                  </p>
                  <p className="text-base md:text-lg text-gray-500 line-through">
                    ৳{data?.price.regularPrice}
                  </p>
                </div>
                <div className="flex items-center gap-x-3">
                  {data?.registration.map((item) => (
                    <Link
                      key={item?.name}
                      className="bg-skyColor text-white px-5 py-2 rounded-md hover:bg-lightSky
                       duration-300"
                      href={item?.href}
                    >
                      {item?.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full flex flex-col items-center justify-between
           border border-gray-300 p-3 mt-5 gap-y-2 rounded-md"
          >
            <Title className="md:text-3xl text-red-500 text-center">
              {data?.details.title}
            </Title>

            <p
              className="text-base md:text-lg font-semibold
             text-skyColor flex items-center gap-x-1"
            >
              <span className="text-2xl">
                <MdPhone />
              </span>{" "}
              {data?.details.contact}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SingleCoursePage;
