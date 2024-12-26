import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import { HiOutlineStatusOnline } from "react-icons/hi";
import {
  BitmImg,
  CouncilImg,
  ICTImg,
  IsoImg,
  NdsaImg,
  WustPImg,
} from "@/public/assets";
import Link from "next/link";
import Image from "next/image";

const ClientsLinks = [
  {
    id: "01",
    image: ICTImg,
    href: "https://ictd.gov.bd/",
  },
  {
    id: "02",
    image: NdsaImg,
    href: "https://nsda.gov.bd/",
  },
  {
    id: "03",
    image: WustPImg,
    href: "https://wust.edu/",
  },
  {
    id: "04",
    image: IsoImg,
    href: "https://peoplentech.com.bd/",
  },
  {
    id: "05",
    image: CouncilImg,
    href: "https://peoplentech.com.bd/",
  },
  {
    id: "06",
    image: BitmImg,
    href: "https://peoplentech.com.bd/",
  },
];

const OurClients = () => {
  return (
    <Container
      className="py-7 md:py-10 flex flex-col gap-5 md:gap-10 
    items-start mb-5"
    >
      <Heading
        className="max-w-4xl mx-auto"
        icon={<HiOutlineStatusOnline />}
        smallTitle="Our Clients"
        title="We Are Working with The Organizations"
        subtitle="We are proud of our strategy and happy to work with some fantastic companies. Organizations are taking our Corporate Skills Development Programmed"
      />
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {ClientsLinks?.map((item) => (
          <Link
            key={item?.id}
            href={item?.href}
            target="_blank"
            className="w-full flex items-center justify-center"
          >
            <Image
              src={item?.image}
              alt="clients-image"
              className="w-16 md:w-28 object-cover"
            />
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default OurClients;
