import React from "react";
import Banner from "/assets/banner.jpg";

const HeroPage1 = () => {
  return (
    <div className="bg-slate-300">
      <section className="h-[600px] grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex justify-center items-center text-center p-8 sm:text-left md:p-20">
          <div className="">
            <h1 className="text-4xl sm:text-6xl text-black font-bold">
              Write Any Title{" "}
            </h1>
            <p className="text-xl text-black py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              culpa tempore expedita obcaecati veritatis voluptatem saepe
              beatae, maiores nulla sint!
            </p>
            <button className="text-xl inline-block text-white bg-slate-800 rounded-md px-4 py-2">
              Click here
            </button>
          </div>{" "}
        </div>
        <div className=" flex items-center relative ">
          <img
            src={Banner}
            alt="banner"
            className="block w-[90%] mx-auto h-auto sm:m-10 lg:m-20 xl:m-28 rounded-3xl shadow-xl "
          />
          <div className="bg-white py-3 shadow-xl absolute top-28 right-24 rounded-full px-6">
            {" "}
            Travel{" "}
          </div>
          <div className="bg-white py-3 shadow-xl absolute top-38 left-24 rounded-full px-6">
            {" "}
            Enjoy{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroPage1;
