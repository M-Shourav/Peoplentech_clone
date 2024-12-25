import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Title from "./Title";
import Image from "next/image";
import { seminars_1, seminars_2, seminars_3 } from "@/public/assets";
import Container from "./Container";
import Link from "next/link";

const StoryPeopleNTech = () => {
  return (
    <Container className="py-5 md:py-10">
      <div className="py-5 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* images */}
        <div className="grid grid-cols-2 gap-3">
          <div className="w-full flex items-center justify-center overflow-hidden">
            <Image
              src={seminars_1}
              alt="seminars_1"
              width={250}
              className=" object-cover rounded-md overflow-hidden"
            />
          </div>
          <div className="w-full">
            <Image
              src={seminars_2}
              alt="seminars_2"
              width={300}
              className=" object-cover rounded-md"
            />
          </div>
          <div
            className="w-full bg-[#E9F6FF] flex items-center justify-center
        p-6 rounded-md"
          >
            <p className="text-base md:text-xl font-semibold">
              " Our Mission - To Create Skilled Manpower "
            </p>
          </div>
          <div className="w-full flex items-center justify-center overflow-hidden">
            <Image
              src={seminars_3}
              alt="seminars_3"
              width={250}
              className=" object-cover rounded-md overflow-hidden"
            />
          </div>
        </div>
        {/* description */}
        <div className="flex flex-col gap-3">
          <h2
            className="text-base md:text-lg font-semibold text-orange-600/85
    tracking-wide"
          >
            Stories of PeopleNTech Institute of IT.
          </h2>
          <Title className="md:text-3xl">
            A trusted institution in the realm of IT expert training
          </Title>
          <p className="text-sm md:text-base text-gray-500 leading-5 tracking-wide">
            For over 09 years, PeopleNTech Institute of IT has been providing IT
            training to over 60,000 students, along with creating employment
            opportunities for them. Whether in the IT sector or non-IT sectors,
            there is now a high demand for IT experts everywhere. That's why,
            with updated curriculum, experienced mentors, and modern labs, we
            have been preparing IT experts for over 09 years. Through this
            journey, we have seen the success of over 60,000 individuals who
            have become self-reliant and created job opportunities for others.
            The success of these students inspires our path. We believe everyone
            is talented, and it's our responsibility to nurture your talent. All
            you need is the enthusiasm and regular practice.
          </p>
          <div className="w-full flex items-center gap-5">
            <Link
              href={"/about"}
              className="flex items-center gap-1 px-4 py-2 bg-skyColor text-white rounded-md
        hover:bg-lightSky duration-300 text-sm md:text-base font-semibold tracking-wide"
            >
              Read More <MdOutlineArrowForwardIos className="text-sm" />
            </Link>
            <Link
              href={"/courses"}
              className="flex items-center gap-1 px-4 py-2 bg-skyColor text-white rounded-md
        hover:bg-lightSky text-sm md:text-base duration-300  font-semibold tracking-wide"
            >
              Show All Courses <MdOutlineArrowForwardIos className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="w-full bg-[#002147] text-white p-10 rounded-md flex
      flex-col md:flex-row items-start md:items-center  justify-between gap-5"
      >
        <div className="w-full flex flex-col gap-3">
          <h3 className="max-w-[500px] text-2xl md:text-4xl tracking-wide font-semibold">
            Call for any course related information
          </h3>
          <p className="text-sm md:text-base font-medium">08:00AM to 09:00PM</p>
        </div>
        <Link
          href={"tel:+8801710267985"}
          className="w-full md:w-80 flex items-center justify-center gap-1 bg-skyColor
     text-white px-4 py-1.5 text-xl rounded-md hover:bg-lightSky duration-300"
        >
          <span className="text-lg">
            <BiSolidPhoneCall />
          </span>
          +8801710267985
        </Link>
      </div>
    </Container>
  );
};

export default StoryPeopleNTech;
