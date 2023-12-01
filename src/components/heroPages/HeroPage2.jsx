import React from "react";
import Banner from "/assets/nature-vector.jpg";

const bgimg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
};

const HeroPage2 = () => {
  return (
    <div className="" style={{ ...bgimg }}>
      <section className="h-[600px] flex justify-center items-center backdrop-brightness-50">
        <div className=" flex justify-center items-center text-center p-8  md:p-20 max-w-[700px] mx-auto">
          <div className="text-white">
            <h1 className="text-4xl sm:text-6xl font-bold ">
              Write Any Title{" "}
            </h1>
            <p className="text-xl  py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              culpa tempore expedita obcaecati veritatis voluptatem saepe
              beatae, maiores nulla sint!
            </p>
            <button className="text-xl inline-block text-white bg-slate-800 rounded-md px-4 py-2">
              Click here
            </button>
          </div>{" "}
        </div>
      </section>
    </div>
  );
};

export default HeroPage2;
