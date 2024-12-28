"use client";
import Container from "./Container";
import Heading from "./Heading";
import { PiStackSimpleBold } from "react-icons/pi";

const CareerCourse = () => {
  return (
    <Container className="flex flex-col items-start gap-5 md:gap-10 py-5 md:py-10">
      <Heading
        icon={<PiStackSimpleBold />}
        smallTitle="Course"
        title="Career Acceleration Courses"
        subtitle="Benefit from expert guidance, gain in-demand skills, and accelerate your professional journey with our proven success"
      />
    </Container>
  );
};

export default CareerCourse;
