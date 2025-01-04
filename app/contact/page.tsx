import Banner from "@/components/Banner";
import ContactRight from "@/components/ContactRight";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import Title from "@/components/Title";
import { contactArray } from "@/constants";
import { contactBannerImg, contactImg } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Social = [
  {
    id: 1,
    icons: <FaTwitter />,
    href: "https://x.com/MasumAh68543",
  },
  {
    id: 2,
    icons: <FaFacebook />,
    href: "https://web.facebook.com/profile.php?id=100027878711748",
  },
  {
    id: 3,
    icons: <FaYoutube />,
    href: "https://www.youtube.com/@MasumAhmed-cd",
  },
  {
    id: 4,
    icons: <FaLinkedin />,
    href: "https://x.com/MasumAh68543",
  },
];
const ContactPage = () => {
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
              href={"/"}
              className="text-lg md:text-xl font-semibold text-white/80"
            >
              {" "}
              Contact
            </Link>
          </div>
          <div className="w-full flex flex-col gap-5">
            <h2 className=" text-lg md:text-2xl lg:text-4xl font-semibold">
              Reach Out to Us for Any Inquiries or Collaborations
            </h2>
            <p className="max-w-[600px] text-xs md:text-base mb-10 text-white/80">
              You can directly visit our office to contact for any need.
              Moreover, you can call the hotline number to know any information
              related to training. You can also knock on the mentioned mail or
              Facebook messenger.
            </p>
          </div>
        </div>
        <div className="w-full mt-10 hidden lg:inline-flex justify-evenly">
          <Image
            src={contactBannerImg}
            alt="contact_bannerImg"
            width={500}
            height={500}
            className="object-cover p-3"
          />
        </div>
      </Banner>

      <Container className="py-5 md:py-10 flex flex-col gap-5 md:gap-10">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-3">
            <Title className="md:text-4xl tracking-wide">
              Office Contact Information
            </Title>
            <div className="flex flex-col items-center">
              <p className=" text-gray-600 text-[15px] md:text-lg">
                Ip Phone:{" "}
                <span className="text-[15px] md:text-lg font-bold tracking-wide">
                  +8801710267985{" "}
                </span>{" "}
                ( please use your extension ) For Support & Complain
              </p>
              <p className="text-[15px] md:text-base text-gray-600">
                send Email:{" "}
                <span className="text-base md:text-lg font-bold tracking-wide">
                  am.masum1129@gmail.com
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* number */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            className="flex flex-col border border-gray-300 p-3 
          rounded-md gap-y-2"
          >
            <Title className="text-base">{contactArray?.course.title}</Title>
            <div>
              {contactArray?.course.role.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 mb-1 p-2
                  rounded-md"
                >
                  <span className="text-xl">
                    <LuPhone />
                  </span>
                  <div>
                    <p className="text-base font-semibold tracking-wide">
                      {item?.name}
                    </p>
                    <Link
                      className="text-[15px] text-skyColor hover:text-lightSky
                       duration-300"
                      href={`tel:${item?.number}`}
                    >
                      {item?.number}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* course inquire */}
          <div
            className="flex flex-col border border-gray-300 p-3 
          rounded-md gap-y-2"
          >
            <Title className="text-base">{contactArray?.inquire.title}</Title>
            <div>
              {contactArray?.inquire.role.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 mb-1 p-2
                  rounded-md"
                >
                  <span className="text-xl">
                    <LuPhone />
                  </span>
                  <div>
                    <p className="text-base font-semibold tracking-wide">
                      {item?.name}
                    </p>
                    <Link
                      className="text-[15px] text-skyColor hover:text-lightSky
                       duration-300"
                      href={`tel:${item?.number}`}
                    >
                      {item?.number}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Class Inquiry */}
          <div
            className="flex flex-col border border-gray-300 p-3 
          rounded-md gap-y-2"
          >
            <Title className="text-base">{contactArray?.class.title}</Title>
            <div>
              {contactArray?.class.role.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 mb-1 p-2
                  rounded-md"
                >
                  <span className="text-xl">
                    <LuPhone />
                  </span>
                  <div>
                    <p className="text-base font-semibold tracking-wide">
                      {item?.name}
                    </p>
                    <Link
                      className="text-[15px] text-skyColor hover:text-lightSky
                       duration-300"
                      href={`tel:${item?.number}`}
                    >
                      {item?.number}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Corporate Inquiry */}
          <div
            className="flex flex-col border border-gray-300 p-3 
          rounded-md gap-y-2"
          >
            <Title className="text-base">{contactArray?.Corporate.title}</Title>
            <div>
              {contactArray?.Corporate.role.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 mb-1 p-2
                  rounded-md"
                >
                  <span className="text-xl">
                    <LuPhone />
                  </span>
                  <div>
                    <p className="text-base font-semibold tracking-wide">
                      {item?.name}
                    </p>
                    <Link
                      className="text-[15px] text-skyColor hover:text-lightSky
                       duration-300"
                      href={`tel:${item?.number}`}
                    >
                      {item?.number}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* GovtProject*/}
          <div
            className="flex flex-col border border-gray-300 p-3 
          rounded-md gap-y-2"
          >
            <Title className="text-base">
              {contactArray?.GovtProject.title}
            </Title>
            <div>
              {contactArray?.GovtProject.role.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 mb-1 p-2
                  rounded-md"
                >
                  <span className="text-xl">
                    <LuPhone />
                  </span>
                  <div>
                    <p className="text-base font-semibold tracking-wide">
                      {item?.name}
                    </p>
                    <Link
                      className="text-[15px] text-skyColor hover:text-lightSky
                       duration-300"
                      href={`tel:${item?.number}`}
                    >
                      {item?.number}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* BITM */}
          <div
            className="flex flex-col border border-gray-300 p-3 
          rounded-md gap-y-2"
          >
            <Title className="text-base">{contactArray?.Bitm.title}</Title>
            <div>
              {contactArray?.Bitm.role.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 mb-1 p-2
                  rounded-md"
                >
                  <span className="text-xl">
                    <LuPhone />
                  </span>
                  <div>
                    <p className="text-base font-semibold tracking-wide">
                      {item?.name}
                    </p>
                    <Link
                      className="text-[15px] text-skyColor hover:text-lightSky
                       duration-300"
                      href={`tel:${item?.number}`}
                    >
                      {item?.number}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* IDB Inquire */}
          <div
            className="flex flex-col border border-gray-300 p-3 
          rounded-md gap-y-2"
          >
            <Title className="text-base">{contactArray?.IDB.title}</Title>
            <div>
              {contactArray?.IDB.role.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 mb-1 p-2
                  rounded-md"
                >
                  <span className="text-xl">
                    <LuPhone />
                  </span>
                  <div>
                    <p className="text-base font-semibold tracking-wide">
                      {item?.name}
                    </p>
                    <Link
                      className="text-[15px] text-skyColor hover:text-lightSky
                       duration-300"
                      href={`tel:${item?.number}`}
                    >
                      {item?.number}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* software */}
          <div
            className="flex flex-col border border-gray-300 p-3 
          rounded-md gap-y-2"
          >
            <Title className="text-base">{contactArray?.Software.title}</Title>
            <div>
              {contactArray?.Software.role.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 mb-1 p-2
                  rounded-md"
                >
                  <span className="text-xl">
                    <LuPhone />
                  </span>
                  <div>
                    <p className="text-base font-semibold tracking-wide">
                      {item?.name}
                    </p>
                    <Link
                      className="text-[15px] text-skyColor hover:text-lightSky
                       duration-300"
                      href={`tel:${item?.number}`}
                    >
                      {item?.number}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Recruitment */}
          <div
            className="flex flex-col border border-gray-300 p-3 
          rounded-md gap-y-2"
          >
            <Title className="text-base">
              {contactArray?.Recruitment.title}
            </Title>
            <div>
              {contactArray?.Recruitment.role.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 mb-1 p-2
                  rounded-md"
                >
                  <span className="text-xl">
                    <LuPhone />
                  </span>
                  <div>
                    <p className="text-base font-semibold tracking-wide">
                      {item?.name}
                    </p>
                    <Link
                      className="text-[15px] text-skyColor hover:text-lightSky
                       duration-300"
                      href={`tel:${item?.number}`}
                    >
                      {item?.number}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Complain */}
          <div
            className="flex flex-col border border-gray-300 p-3 
          rounded-md gap-y-2"
          >
            <Title className="text-base">{contactArray?.Complain.title}</Title>
            <div>
              {contactArray?.Complain.role.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-gray-100 mb-1 p-2
                  rounded-md"
                >
                  <span className="text-xl">
                    <LuPhone />
                  </span>
                  <div>
                    <p className="text-base font-semibold tracking-wide">
                      {item?.name}
                    </p>
                    <Link
                      className="text-[15px] text-skyColor hover:text-lightSky
                       duration-300"
                      href={`tel:${item?.number}`}
                    >
                      {item?.number}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* contact form */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-5 py-5">
          <div className="w-full flex flex-col items-center justify-center gap-5">
            <div>
              <Image
                width={500}
                src={contactImg}
                alt="contact-image"
                className=" object-cover p-10"
              />
            </div>
            <div className="w-full flex items-center justify-center gap-x-3">
              <h2 className="text-lg font-semibold">Follow us on:</h2>
              <div className="flex items-center gap-x-3">
                {Social?.map((item) => (
                  <div
                    className="bg-white w-6 h-6 flex items-center 
                    justify-center rounded-full"
                    key={item?.id}
                  >
                    <Link
                      href={item?.href}
                      target="_blank"
                      className={`text-2xl ${
                        item?.id === 3
                          ? "text-red-500"
                          : "text-lightSky text-2xl p-1"
                      }`}
                    >
                      {item?.icons}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div>
              <Title>We will answer all your questions…</Title>
              <p className=" text-gray-600">
                We provide free career counseling support so that you can make
                the right career decision. Get answers to your various career
                related questions from experienced career counselors.
              </p>
            </div>
            <ContactRight />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
