import React from "react";
import Container from "./Container";
import Title from "./Title";
import Slider from "./SliderData";

const CourseCategory = () => {
  return (
    <Container className="py-10 md:py-20 flex flex-col items-center md:items-start gap-10">
      <div
        className="max-w-2xl mx-auto flex flex-col gap-2 items-center
       justify-between text-center"
      >
        <Title className="md:text-4xl tracking-wide">
          Career Accelerator Categories
        </Title>
        <p className="text-sm md:text-base tracking-wide text-gray-800">
          Fast-track your career with our Accelerator Courses—intensive,
          industry-focused programs designed to propel your professional growth
        </p>
      </div>
      <Slider />
    </Container>
  );
};

export default CourseCategory;
