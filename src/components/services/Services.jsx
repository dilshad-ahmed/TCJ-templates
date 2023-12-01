import React from "react";
import { styles } from "../../styles/styles";
import ServiceCard from "./ServiceCard";
import Heading from "../shared/Heading";
import Img1 from "../../assets/png/airplane.png";
import Img2 from "../../assets/png/rating.png";
import Img3 from "../../assets/png/reschedule.png";
import Img4 from "../../assets/png/travel-insurance.png";

const imgList = [Img1, Img2, Img3, Img4];
const Services = () => {
  return (
    <>
      <span id="top-stories"></span>
      <div className={` pb-10 `}>
        <div className={`${styles.container}`}>
          <Heading text="Services" />
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <ServiceCard icon={Img1} text={"Navbars"} />
            <ServiceCard icon={Img2} text={"Hero section"} />
            <ServiceCard icon={Img3} text={"Newsletter"} />
            <ServiceCard icon={Img4} text={"Footers"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
