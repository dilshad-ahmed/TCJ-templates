import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import CodeBlockComp from "../codeBlock/CodeBlockComp";
import jsxToString from "jsx-to-string";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const Footer = () => {
  const [showCode, setShowCode] = useState(false);
  const element = (
    <section className="max-w-[1200px] mx-auto text-white">
      <div className=" grid md:grid-cols-3 py-5">
        <div className=" py-8 px-4 ">
          <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
            StoryBook
          </h1>
          <p className="">
            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Possimus, voluptate.{" "}
          </p>
          <br />
          <div className="flex items-center gap-3">
            <FaLocationArrow />
            <p>Noida, Uttar Pradesh</p>
          </div>
          <div className="flex items-center gap-3 mt-3">
            <FaMobileAlt />
            <p>+91 123456789</p>
          </div>
          {/* Social Handle */}
          <div className="flex items-center gap-3 mt-6">
            <a href="#">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="#">
              <FaFacebook className="text-3xl" />
            </a>
            <a href="#">
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
          <div className="">
            <div className="py-8 px-4 ">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Important Links
              </h1>
              <ul className={`flex flex-col gap-3`}>
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Login</li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="py-8 px-4 ">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Login</li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="py-8 px-4 ">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Links
              </h1>
              {/* <ul className="list-disc list-inside"> */}
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Services</li>
                <li className="cursor-pointer">Login</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center py-10 border-t-2 border-gray-300/50">
          @copyright 2024 Travery || Dilshad
        </div>
      </div>
    </section>
  );
  return (
    <div className="bg-blue-950 rounded-t-3xl">
      {element}
      {/* code Block */}
      <div
        className={`${
          showCode ? "" : "max-h-[200px]"
        } overflow-hidden bg-slate-200 `}
      >
        <div className="flex justify-center py-5 relative">
          <button
            className="bg-white shadow-md flex justify-center items-center gap-2 hover:bg-white/80 text-black px-6 py-2 rounded-xl"
            onClick={() => setShowCode(!showCode)}
          >
            {" "}
            {showCode ? "View Less Code" : "View Full Code"}{" "}
            <span>
              {" "}
              {showCode ? (
                <RiArrowUpSLine className="text-2xl pt-1" />
              ) : (
                <RiArrowDownSLine className="text-2xl pt-1" />
              )}
            </span>
          </button>
        </div>
        <CodeBlockComp
          code={jsxToString(element)}
          language={"jsx"}
          showLineNumbers={true}
        />
      </div>
    </div>
  );
};

export default Footer;
