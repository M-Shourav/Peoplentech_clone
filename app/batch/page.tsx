import Banner from "@/components/Banner";
import Container from "@/components/Container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { upComingBatchArray } from "@/constants";
import { Upcoming } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { LiaArrowsAltVSolid } from "react-icons/lia";
import { BsArrowsExpand } from "react-icons/bs";

const BatchPage = () => {
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
              href={"batch"}
              className="text-lg md:text-xl font-semibold text-white/80"
            >
              {" "}
              Upcoming Batch
            </Link>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className=" text-lg md:text-2xl lg:text-4xl font-semibold">
              Join Our Upcoming Batch: Unlock Your Potential!
            </h2>
            <p className="max-w-[600px] text-xs md:text-base mb-10 text-white/80">
              Our next batch is just around the corner, offering you the
              opportunity to unlock your potential and achieve your goals.
            </p>
          </div>
        </div>
        <div className="w-full mt-10 hidden lg:inline-flex justify-evenly">
          <Image
            src={Upcoming}
            alt="contact_bannerImg"
            width={500}
            height={500}
            className="object-cover p-3"
          />
        </div>
      </Banner>
      <Container className="py-5 md:py-10 ">
        <div className="w-full shadow-lg border border-gray-200 rounded-lg">
          <div className="grid grid-cols-12 gap-4 font-semibold bg-gray-100 py-2 px-4 rounded-t-lg">
            <div className="col-span-1">SL</div>
            <div className="col-span-4">Batch</div>
            <div className="col-span-1 hidden lg:block">Enroll Date</div>
            <div className="col-span-1 hidden lg:block">Class Start</div>
            <div className="col-span-3">Price</div>
            <div className="col-span-1">#</div>
            <div className="col-span-1"></div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {upComingBatchArray?.map((item) => (
              <Accordion type="single" collapsible key={item?.SLNo}>
                <AccordionItem value={item?.SLNo}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="grid grid-cols-12 gap-4 items-center py-2 px-4">
                      <div className="col-span-1 text-base font-semibold flex flex-col md:flex-row gap-2 items-center">
                        <p>{item?.SLNo}</p>
                        <span>
                          <LiaArrowsAltVSolid />
                        </span>
                      </div>

                      <div className="col-span-4">
                        <Link
                          href={{
                            pathname: `/courses/${item?._id}`,
                            query: { id: item?._id },
                          }}
                          target="_blank"
                          className="text-sm md:text-base font-medium hover:text-blue-600 duration-300"
                        >
                          {item?.title}
                        </Link>
                      </div>
                      <div className="col-span-1 hidden lg:block">
                        <p
                          className="flex items-center justify-center bg-red-100
                         text-red-500 rounded-md font-semibold"
                        >
                          {item?.date.endDate}
                        </p>
                      </div>

                      <div className="col-span-1 hidden lg:block">
                        <p
                          className="bg-blue-200 text-blue-600 rounded-md
                         flex items-center justify-center font-semibold"
                        >
                          {item?.date.startDate}
                        </p>
                      </div>

                      <div className="col-span-3 ">
                        <div className="flex flex-col md:flex-row gap-3">
                          <p className="flex items-center text-sm md:text-[17px] font-semibold">
                            ৳{item?.price.discountPrice}
                          </p>
                          <p
                            className="text-sm md:text-[17px] font-medium 
                          line-through text-gray-500"
                          >
                            ৳{item?.price.regularPrice}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-red-600 font-semibold">
                            {item?.price.installment}
                          </p>
                        </div>
                      </div>

                      <div className="col-span-1">
                        <Link
                          href={item?.button.href}
                          className="w-24 py-2 text-base font-semibold px-1 
                          flex items-center justify-center bg-blue-500 text-white 
                         rounded-lg hover:bg-orange-500 duration-300"
                        >
                          {item?.button.name}
                        </Link>
                      </div>
                      <div className="col-span-1 hidden lg:inline-flex items-center justify-center">
                        <p className=" border border-gray-300 py-3 px-2 rounded-md">
                          <BsArrowsExpand />
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="w-full flex flex-col gap-y-2">
                    <div
                      className="w-full text-[12px] md:text-[13px] font-medium h-10
                     bg-[#CFF4FC] grid grid-cols-12 gap-7 md:gap-5 place-content-center"
                    >
                      <p className="col-span-2 md:col-span-3 px-2">
                        Batch-Code
                      </p>
                      <p className="col-span-2">Class Routine</p>
                      <p className="col-span-2">ClassTime</p>
                      <p className="col-span-2">ClassType</p>
                      <p className="col-span-1">Total Class</p>
                      <p className="col-span-3 md:col-span-2">
                        Course Duration
                      </p>
                    </div>
                    <div
                      className=" grid grid-cols-12 gap-7 md:gap-5 text-[10px] 
                    md:text-[13px] font-semibold"
                    >
                      <div className="col-span-2 md:col-span-3">
                        <p className="px-1 text-xs md:text-[13px]">
                          {item?.classDetails.batch.batchName}
                        </p>
                      </div>
                      <div className="col-span-2 flex flex-wrap md:flex-nowrap gap-1">
                        {item?.classDetails.batch.classRoutine.map(
                          (item, index) => (
                            <p
                              key={index}
                              className="w-fit  h-fit bg-green-600 text-white font-semibold text-[12px] px-1 rounded-md"
                            >
                              {item?.day}
                            </p>
                          )
                        )}
                      </div>
                      <div className="col-span-2 ">
                        {item?.classDetails.batch.classStart.map(
                          (item, index) => (
                            <div
                              key={index}
                              className="flex flex-wrap md:flex-nowrap gap-1"
                            >
                              <p>{item?.StTime}</p>
                              <p>{item?.EndTime}</p>
                            </div>
                          )
                        )}
                      </div>
                      <div className="text-start col-span-2">
                        <p className="text-green-600 bg-green-100 w-fit px-1">
                          {item?.classDetails.batch.classType}
                        </p>
                      </div>
                      <div className="col-span-1">
                        <p>{item?.classDetails.batch.totalClass}</p>
                      </div>
                      <div className="col-span-3 md:col-span-2">
                        <p>{item?.classDetails.batch.courseDuration}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BatchPage;
