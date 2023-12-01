import React from "react";
import HeroSection from "../components/HeroSection";
import SerivcesCards from "../components/services/Services";
import Subscribe from "../components/Subscribe";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <SerivcesCards />
      <Subscribe />
    </>
  );
};

export default Homepage;
