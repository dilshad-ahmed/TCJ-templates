import React from "react";
import HeroSection from "../components/HeroSection";
import Footer2 from "../components/footers/Footer2";
import Footer3 from "../components/footers/Footer3";
import Footer4 from "../components/footers/Footer4";
import Footer5 from "../components/footers/Footer5";
import Heading from "../components/shared/Heading";
const Footers = () => {
  return (
    <div>
      <HeroSection />
      <br />
      <br />
      <Heading text="Footers" />
      <div className="pb-16 pt-8 px-4">
        <Footer2 />
        <br />
        <Footer3 />
        <br />
        <Footer4 />
        <br />
        <Footer5 />
        <br />
      </div>
    </div>
  );
};

export default Footers;
