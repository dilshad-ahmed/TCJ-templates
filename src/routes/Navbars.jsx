import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar2 from "../components/navbar/Navbar2";
import Navbar3 from "../components/navbar/Navbar3";
import Navbar4 from "../components/navbar/Navbar4";
import Navbar5 from "../components/navbar/Navbar5";
import Navbar6 from "../components/navbar/Navbar6";
import Heading from "../components/shared/Heading";

const Navbars = () => {
  return (
    <div>
      <HeroSection />
      <br />
      <br />
      <Heading text="Navbars components" />
      <div className="pb-16 pt-8 px-4">
        <Navbar2 />
        <br />
        <Navbar3 />
        <br />
        <Navbar4 />
        <br />
        <Navbar5 />
        <br />
        <Navbar6 />
        <br />
      </div>
    </div>
  );
};

export default Navbars;
