import { FacilitiesArray } from "@/constants";
import Image from "next/image";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Banner from "@/components/Banner";

const Facilities = () => {
  return (
    <div
      className="w-full flex flex-col items-center justify-between gap-5
     bg-red-100/50"
    >
      <Banner />
      <Container className="w-full flex flex-col gap-7">
        <Heading
          className="max-w-5xl"
          title="What are the benefits you will get from PeopleNTech?"
          subtitle="Our responsibility is not limited to training. Not just classes, PeopleNTech Institute of IT is always ready for any need of the students, anytime. We believe, this special facility of ours makes our students unique from any other competitors."
        />
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {FacilitiesArray?.map((item) => (
            <div
              key={item?._id}
              className={`${
                item?._id === 1
                  ? "bg-[#FFFCCF] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 2
                  ? "bg-[#FFEDFF] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 3
                  ? "bg-[#E9F6FF] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 4
                  ? "bg-[#E3F6EE] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 5
                  ? "bg-[#E5E9F6] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 6
                  ? "bg-[#E5F6E7] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 7
                  ? "bg-[#E5F6F8] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 8
                  ? "bg-[#EBF7EA] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 9
                  ? "bg-[#ECEAFA] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 10
                  ? "bg-[#E9F1FB] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 11
                  ? "bg-[#FCF1EA] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : item?._id === 12
                  ? "bg-[#E9F6FF] rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
                  : "rounded-md flex flex-col items-center gap-5 p-4 shadow shadow-boxShadow"
              }`}
            >
              <Image
                src={item?.image}
                width={80}
                alt="logo_images"
                className=" object-cover"
                quality={100}
              />
              <div className="flex flex-col items-center text-center gap-y-2">
                <h1 className="text-base md:text-2xl font-semibold">
                  {item?.title}
                </h1>
                <p>{item?.des}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Facilities;