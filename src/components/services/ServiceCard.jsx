import React from "react";
import { styles } from "../../styles/styles";

const ServiceCard = ({ icon, text }) => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className="h-full flex flex-col justify-around items-center">
          <div className="flex justify-center items-center">
            <img src={icon} alt="cartoon" className="w-[80px] min-w[150px]" />
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
