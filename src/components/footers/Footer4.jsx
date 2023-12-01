import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMarkEmailRead, MdMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-800 dark:bg-black rounded-t-3xl ">
      <section className="max-w-[1200px] mx-auto text-white">
        {/* Contact us */}
        <div className="grid md:grid-cols-3 py-6 gap-4 md:gap-1">
          <div className="flex flex-col items-center gap-4">
            <HiLocationMarker className="text-2xl md:text-5xl inline-block h-16 w-16 bg-orange-500 hover:bg-orange-500/60 rounded-full p-4 " />{" "}
            <p>Noida 453354, New Delhi,India</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <MdMarkEmailRead className="text-2xl md:text-5xl inline-block h-16 w-16 bg-orange-500 hover:bg-orange-500/60 rounded-full p-4 " />{" "}
            <p>Noida 453354, New Delhi,India</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <MdCall className="text-2xl md:text-5xl inline-block h-16 w-16 bg-orange-500 hover:bg-orange-500/60 rounded-full p-4 " />{" "}
            <p>Noida 453354, New Delhi,India</p>
          </div>
        </div>
        {/* Contact us */}
        <div className=" grid md:grid-cols-4 py-5 border-t-2 border-gray-300/50">
          <div className="grid grid-cols-2 md:grid-cols-3 md:col-span-3">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3 `}>
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
                  Comapany
                </h1>
                <ul className="flex flex-col gap-3 ">
                  <li className="cursor-pointer">Our services</li>
                  <li className="cursor-pointer">Contact us</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3 ">
                  <li className="cursor-pointer">Blog</li>
                  <li className="cursor-pointer">Newsletter</li>
                  <li className="cursor-pointer">Privacy policy</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="py-8 px-4 ">
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Social Links
              </h1>
              <div className="flex flex-col gap-3">
                <h1>Subscribe to our newsletter</h1>
                <input
                  className="py-1 px-3 rounded focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 "
                  type="text"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-6 border-t-2 border-gray-300/50">
            <div className="flex items-center justify-center gap-4 mb-4">
              <a href="#">
                <FaInstagram className="text-4xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-4xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-4xl" />
              </a>
            </div>
            <span className="text-sm text-gray-300">
              @copyright 2024 Travery || Dilshad
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
