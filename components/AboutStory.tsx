import React from "react";
import Container from "./Container";
import Image from "next/image";
import { StoryImg } from "@/public/assets";
import Title from "./Title";

const AboutStory = () => {
  return (
    <Container
      className="py-5 md:py-10 mt-5 md:mt-10 flex flex-col lg:flex-row 
    items-center md:items-start justify-between gap-10"
    >
      <div className="w-full md:w-1/2 order-2 lg:order-2">
        <Image src={StoryImg} alt="story-images" quality={100} />
      </div>
      <div className="w-full flex flex-col gap-3 order-1 lg:order-2">
        <Title className="md:text-3xl">Our Story</Title>
        <p className="text-gray-600 tracking-wide leading-7">
          PeopleTech, LLC was formed in 2005 to provide affordable consulting
          and staffing services to small and medium enterprises to test their
          applications. Over the past few years, PeopleEnTech has expanded its
          service capabilities by incorporating diverse expertise into its pool
          of consultants and embarked on career consultancy to meet the needs of
          clients on both the employer and job seeker end. Such an endeavor for
          PeopleTech is a unique experience bringing a fresh realization that
          rapidly changing demands in technical skills can be effectively met by
          upskilling potential IT professionals through comprehensive and
          practical training.
        </p>
        <p className="text-gray-600 tracking-wide leading-7">
          In parallel with the employment agency, consulting and staffing
          services PeopleEnTech has started in-house training of its consultants
          and new hires on cutting edge testing, business analysts, project
          management professionals, database administration and network
          administration tools that are being used directly on the work desk. .
          The positive impact of such training results in higher performance for
          testers, QA analysts, business analysts, project management
          professionals, database administrators and network administrators.
        </p>
        <p className="text-gray-600 tracking-wide leading-7">
          Based on the success of PeopleNTech in USA, Canada and India,
          PeopleNTech started their journey in Bangladesh in 2014 with 60+
          courses at Dhaka campus. Now, PeopleEnTech Bangladesh is playing an
          important role in youth skill development by providing direct
          mid-level jobs and freelancing jobs. In this regard, PeopleNTech
          Bangladesh is known as the top professional skill development
          institute in Bangladesh and a global leader in IT and job placement.
        </p>
      </div>
    </Container>
  );
};

export default AboutStory;
