import { LocationCardArray } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
const LocationCard = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {LocationCardArray?.map((item, index) => (
        <div key={index} className=" relative">
          <Image
            src={item?.image}
            quality={100}
            loading="lazy"
            alt="location-images"
            className=" object-cover rounded-xl brightness-50"
          />
          <div className="w-full h-full absolute top-0 left-0 ">
            <div className="w-full h-full flex flex-col items-start px-5 text-white/90 justify-center">
              <div className="flex items-center gap-x-2 mb-1 text-2xl font-semibold text-yellow-400">
                <span>
                  <FaLocationDot />
                </span>
                <p>{item?.name}</p>
              </div>
              <div className="flex flex-col gap-y-1">
                <h3 className="text-lg font-semibold leading-7">
                  {item?.location}
                </h3>
                <p className="text-base font-semibold text-white/80">
                  Mobile:
                  <span className=" tracking-wide">{item?.mobile}</span>
                </p>
                <p className="text-base font-semibold text-white/80">
                  Ip Phone:
                  <span className=" tracking-wide">{item?.phone}</span>
                </p>
                <p className="text-base font-semibold text-white/80">
                  Fax:
                  <span className=" tracking-wide">{item?.fax}</span>
                </p>
                <p className="text-base font-semibold text-white/80">
                  Email:
                  <span className=" tracking-wide">{item?.email}</span>
                </p>
              </div>
              <Link
                href={item?.link}
                target="_blank"
                className="mt-5 px-4 py-1 bg-skyColor rounded-md text-sm font-semibold
                hover:bg-lightSky duration-300"
              >
                Google map
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationCard;
