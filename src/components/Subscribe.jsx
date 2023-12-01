import React from "react";
import { styles } from "../styles/styles";
import Heading from "./shared/Heading";
const Subscribe = () => {
  return (
    <div className="py-10 bg-gray-200 flex justify-center flex-col">
      <Heading text="Subscribe To Our Newsletter" />
      <div className="flex justify-center gap-8 mb-4">
        <h1 className="border-l-yellow-500 border-x-2 pl-2">
          Free <span className="font-bold "> Ebooks</span>
        </h1>
        <h1 className="border-l-yellow-500 border-x-2 pl-2">
          Free <span className="font-bold"> Stories</span>
        </h1>
        <h1 className="border-l-yellow-500 border-x-2 pl-2">
          Best <span className="font-bold"> Articles</span>
        </h1>
      </div>
      <div className="flex gap-3 justify-center items-center py-8">
        <input placeholder="Your Email" className="w-1/3 h-[40px] p-3 " />
        <button className={styles.mainBtn}>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
