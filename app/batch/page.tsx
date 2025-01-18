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
        <div className="w-full p-2 shadow shadow-boxShadow border border-gray-200">
          <div>
            <div className="grid grid-cols-12 gap-5 border-b p-2 border-b-gray-400">
              <p className="col-span-1 text-base font-semibold">SL</p>

              <p className="col-span-4 md:col-span-5 text-base font-semibold">
                Batch
              </p>

              <p className="col-span-1 hidden sm:block text-base font-semibold">
                Enroll date
              </p>

              <p className="col-span-1 hidden sm:block text-base font-semibold">
                Class start
              </p>

              <p className="col-span-3 md:col-span-2 text-base font-semibold">
                Price
              </p>

              <p className="col-span-4 md:col-span-2 text-base font-semibold">
                #
              </p>
            </div>
            <div>
              {upComingBatchArray?.map((item) => (
                <div className="" key={item?.SLNo}>
                  <Accordion type="single" collapsible>
                    <AccordionItem value={item?.SLNo}>
                      <AccordionTrigger className="hover:no-underline grid grid-cols-12 gap-5">
                        <div className="col-span-1 flex items-center gap-3">
                          <p className="text-base font-semibold">
                            {item?.SLNo}
                          </p>
                          <span className="text-base text-gray-500">
                            <LiaArrowsAltVSolid />
                          </span>
                        </div>
                        <div className="col-span-4 md:col-span-5">
                          <p>{item?.title}</p>
                        </div>
                        <div className="hidden md:inline-block col-span-1">
                          <p>{item?.date.endDate}</p>
                        </div>
                        <div className="hidden md:inline-block col-span-1">
                          <p>{item?.date.startDate}</p>
                        </div>
                        <div className="col-span-3 md:col-span-3">
                          <p>{item?.price.discountPrice}</p>
                          <p>{item?.price.regularPrice}</p>
                          <p>{item?.price.installment}</p>
                        </div>
                        <div className="col-span-4 md:col-span-2">
                          <Link href={item?.button.href}>
                            {item?.button.name}
                          </Link>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BatchPage;
