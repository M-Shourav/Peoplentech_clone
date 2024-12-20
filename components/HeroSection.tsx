import React from "react";
import Container from "./Container";

const HeroSection = () => {
  return (
    <div className="bg-banner-image w-full bg-cover bg-center">
      <Container className="py-5 md:py-10 bg-shadowColor flex flex-col md:flex-row items-center justify-between">
        <div className="order-2 md:order-1 mb-6 md:mb-0">text</div>
        <div className="order-1 md:order-2">photo</div>
      </Container>
    </div>
  );
};

export default HeroSection;
