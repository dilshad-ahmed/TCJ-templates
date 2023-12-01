import React from "react";
import HeroPage1 from "../components/heroPages/HeroPage1.jsx";
import HeroPage2 from "../components/heroPages/HeroPage2.jsx";
import HeroPage3 from "../components/heroPages/HeroPage3.jsx";
import HeroSection from "../components/HeroSection.jsx";
import Heading from "../components/shared/Heading.jsx";

const HeroPages = () => {
  return (
    <>
      <HeroSection />
      <br />
      <br />
      <Heading text="Hero Pages" />
      <div className="pb-16 pt-8 px-4">
        <HeroPage1 />
        <br />
        <HeroPage2 />
        <br />
        <HeroPage3 />
        <br />
      </div>
    </>
  );
};

export default HeroPages;
