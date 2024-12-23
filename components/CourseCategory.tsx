import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import SliderData from "./SliderData";

const CourseCategory = () => {
  return (
    <Container className="py-5 md:py-10  flex flex-col items-center md:items-start gap-10">
      <Heading
        title="Career Accelerator Categories"
        subtitle="Fast-track your career with our Accelerator Courses—intensive, industry-focused programs designed to propel your professional growth"
      />
      <SliderData />
    </Container>
  );
};

export default CourseCategory;
