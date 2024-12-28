import AboutStory from "@/components/AboutStory";
import Container from "@/components/Container";
import Heading from "@/components/Heading";
import OurActivities from "@/components/OurActivities";
import OurCeo from "@/components/OurCeo";
import OurConcerns from "@/components/OurConcerns";
import OurMission from "@/components/OurMission";
import Title from "@/components/Title";
import { logo } from "@/public/assets";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <div className="py-5 md:py-10 bg-gradient-to-br from-[#FFD6BF] to-slate-50">
        <Container className="flex flex-col items-center lg:flex-row gap-10">
          <div className="w-full flex flex-col gap-5 order-2 lg:order-2">
            <Title className="text-orange-500">Our Company Dream</Title>
            <h1 className="text-lg lg:text-4xl font-semibold max-w-2xl">
              PeopleNTech Mission - To Create Skilled Manpower For Students.
            </h1>
            <p className="max-w-2xl text-gray-600 tracking-wider leading-7">
              Since its inception in 2005, PeopleNTech has more than 6,000
              Trained students. PeopleNtech founder Abu Hanip has been committed
              to life and career change since the beginning attentive At
              PeopleNTech, we are real-time project oriented We provide training
              in the method. Our certified trainers With students at every step
              of their learning process Work closely. At PeopleNTech, we are
              passionate about learning, And we encourage our students to be the
              same. your Regardless of previous professional and educational
              background, if you successfully Complete the training and develop
              the right skills but few Within months you are IT like our other
              successful trainees will be employed in the field.
            </p>
          </div>
          <div className="w-full order-1 lg:order-2 flex items-center justify-center bg-gradient-to-l from-orange-300 to-red-300 rounded-md">
            <iframe
              className="w-full object-cover p-2 rounded-lg"
              height="300"
              src="https://www.youtube.com/embed/nxSFNs00AkY?si=C-Hf9g0PAZapYRX0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </Container>
      </div>
      <AboutStory />
      <OurMission />
      <OurCeo />
      <Heading
        className="py-10 px-4"
        title="Awards and Recognition"
        subtitle="We provide quality services, international courses according to the needs of the times Ensuring modules and advanced environments. So the students PeopleEnTech IT is now on a journey to facilitate a modern career path best of all"
      />
      <OurActivities />
      <OurConcerns className="bg-slate-200 py-10" />
    </div>
  );
};

export default AboutPage;
