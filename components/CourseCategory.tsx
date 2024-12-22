import React from "react";
import Container from "./Container";
import Slider from "./SliderData";
import Heading from "./Heading";

const CourseCategory = () => {
  return (
    <Container className="py-5 md:py-10  flex flex-col items-center md:items-start gap-10">
      <Heading
        title="Career Accelerator Categories"
        subtitle="Fast-track your career with our Accelerator Courses—intensive, industry-focused programs designed to propel your professional growth"
      />
      <Slider />
    </Container>
  );
};

export default CourseCategory;
