import React from "react";
import Container from "./Container";
import Image from "next/image";
import { CeoImg } from "@/public/assets";
import Title from "./Title";

const OurCeo = () => {
  return (
    <div className="w-full bg-slate-200">
      <Container
        className="py-5 md:py-10 flex flex-col md:flex-row
       items-start  justify-between gap-10"
      >
        <div className="w-full md:w-1/2">
          <Image
            src={CeoImg}
            alt="ceo-image"
            quality={100}
            className=" object-cover p-5 md:p-0"
          />
        </div>
        <div className="w-full flex flex-col items-start gap-5">
          <p className="text-gray-600 tracking-wider font-normal ">
            It gives me great pleasure to inform you that we are our Clients are
            in the US mainstream IT world Can help build IT career and so far we
            are 80 1000 to over 80000 trainees in mainstream IT I was able to
            get hired. 200k clients per year Satisfaction is the main tool
            through which we are Measure performance, and we hold ourselves,
            ours As clients, to the highest quality standards. This is
            constantly evolving In the marketplace, our top certified trainers
            by our clients about their own professions <br /> <br />
            Our most important assets include the broad knowledge base,
            deep-rooted professionalism and strong commitment of our
            highly-qualified, diverse staff and trainers. PeopleEnTech, the
            global leader in IT training and job placement, is at the core of
            who we are and what we do. From our executive training to our
            subject matter experts, and quality assurance team to our senior
            management, the PeopleNTech team is committed to providing the
            highest quality training and unparalleled service to our clients.
            <br /> <br />
            As we continue to grow, each new day gives us an opportunity to work
            together, pursue new opportunities, and improve upon the past. We
            establish deep relationships with our clients by learning their
            needs and capabilities, so that we can offer practical solutions
            with a clear vision, because we believe that every person in society
            has talents and we are here to explore them and show them.
          </p>
          <div>
            <Title className="text-skyColor">Engineer Abubokor Hanip</Title>
            <p className="text-base font-normal tracking-wide text-gray-600">
              Founder and CEO{" "}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurCeo;
