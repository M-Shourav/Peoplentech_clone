import { HiOutlineStatusOnline } from "react-icons/hi";
import Heading from "./Heading";
import Container from "./Container";
import { ConcernArray } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
interface Props {
  className?: string;
}
const OurConcerns = ({ className }: Props) => {
  return (
    <div className={cn("w-full bg-slate-200 p-6 h-full", className)}>
      <Container className="flex flex-col gap-7 md:gap-10">
        <Heading
          icon={<HiOutlineStatusOnline />}
          smallTitle="Sister Concern"
          title="Our Sister Concerns"
          subtitle="We are proud to have some fantastic companies on our side. We are also pleased to introduce our concern that Bangladesh is working to build global human resources."
        />
        <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {ConcernArray?.map((item) => (
            <Link
              key={item?.id}
              href={item?.href}
              target="_blank"
              className="w-full flex items-center justify-center"
            >
              <Image
                src={item?.images}
                alt="concern-image"
                className="w-16 md:w-28 object-cover"
              />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurConcerns;
