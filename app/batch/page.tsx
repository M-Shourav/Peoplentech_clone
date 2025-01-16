import Banner from "@/components/Banner";
import Container from "@/components/Container";
import { Upcoming } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

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
      <Container className="py-5 md:py-10 border border-gray-300">
        <div className="w-full p-2 shadow shadow-boxShadow border border-gray-200">
          <div className="grid grid-cols-12 gap-5 ">
            <p className="text-base font-semibold">SL</p>

            <p className="col-span-4 text-base font-semibold">Batch</p>

            <p className="col-span-1 hidden sm:block text-base font-semibold">
              Enroll date
            </p>

            <p className="col-span-1 hidden sm:block text-base font-semibold">
              Class start
            </p>

            <p className="col-span-2 text-base font-semibold">Price</p>

            <p className="col-span-3 text-base font-semibold">#</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BatchPage;
