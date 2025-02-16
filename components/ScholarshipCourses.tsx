import { scholarshipArray } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbCurrencyTaka } from "react-icons/tb";

const ScholarshipCourses = () => {
  return (
    <div
      id="scholarship"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {scholarshipArray?.map((item) => (
        <div
          key={item?.name}
          className="w-full border border-gray-200 flex flex-col
            rounded-md hover:border-skyColor duration-300 "
        >
          <Image
            src={item?.images}
            alt={item?.name}
            className=" object-cover rounded-md"
          />
          <div className="flex flex-col gap-5">
            <div className="w-full bg-red-50 flex items-center justify-between px-4 py-5">
              {item?.price.map((item, index) => (
                <div key={index} className="flex items-center gap-5">
                  <p className="text-xl font-semibold flex items-center">
                    <TbCurrencyTaka className="text-3xl -mt-1" />
                    {item?.discountPrice}
                  </p>
                  <p className="flex items-center text-lg font-medium line-through text-red-500">
                    <TbCurrencyTaka className="text-2xl -mt-1" />
                    {item?.regularPrice}
                  </p>
                </div>
              ))}
              <Link
                href={"/registration"}
                className="text-base font-medium tracking-wider
              text-skyColor hover:text-lightSky hover:underline 
              hover:underline-offset-1 duration-300"
              >
                Registration
              </Link>
            </div>
            <h3
              className="p-2 text-base md:text-[22px] leading-7 font-normal text-gray-800
            tracking-wide"
            >
              {item?.name}
            </h3>
          </div>
          <div className="w-[95%] mt-5 mx-auto mb-2 py-2 rounded-md bg-skyColor flex items-center justify-center">
            <Link
              className="flex items-center text-white text-base md:text-base font-medium uppercase"
              href={"/"}
            >
              See Details
              <span className="text-2xl">
                <IoIosArrowRoundForward />
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScholarshipCourses;
