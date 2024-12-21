import React from "react";
import Container from "./Container";
import Image from "next/image";
import { certificate, membership, partner } from "@/public/assets";

const certificated = [
  {
    id: 1,
    name: "Certificate",
    images: certificate,
  },
  {
    id: 2,
    name: "Membership",
    images: membership,
  },
  {
    id: 3,
    name: "Partner",
    images: partner,
  },
];
const Certificate = () => {
  return (
    <div className="w-full">
      <Container className="max-w-6xl rounded-md bg-white shadow-custom-sm py-6 px-4">
        <div className="flex flex-col items-start md:flex-row gap-3 md:gap-5">
          {certificated?.map((item) => (
            <div key={item?.id} className="flex flex-col">
              <h1 className="ml-2.5 text-base md:text-lg text-lightSky font-semibold">
                {item?.name}
              </h1>
              <Image src={item?.images} alt={item?.name} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Certificate;
