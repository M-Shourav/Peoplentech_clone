import React from "react";
import Container from "./Container";
import LeftHero from "./LeftHero";
import Photo from "./Photo";

const HeroSection = () => {
  return (
    <div className="bg-banner-image w-full bg-cover bg-center ">
      <Container className="py-5 md:py-10 bg-red-200/10 grid grid-cols-1 md:grid-cols-2 items-center justify-between">
        <div className="order-2 md:order-1 mb-6 md:mb-0">
          <LeftHero />
        </div>
        <div className="order-1 md:order-2">
          <Photo />
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
