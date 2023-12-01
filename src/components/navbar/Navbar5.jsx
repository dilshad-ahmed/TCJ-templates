import React from "react";
import { FaFacebook, FaSearch } from "react-icons/fa";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { LuComponent } from "react-icons/lu";

const Navbar2 = () => {
  return (
    <>
      <section className="bg-blue-950 dark:bg-black ">
        <div className="max-w-[1200px] mx-auto ">
          <nav className="flex justify-between items-center py-6 border-b-2 border-white/50">
            <div className="flex items-center gap-4">
              <FiFacebook className="text-2xl text-white" />
              <FiTwitter className="text-2xl text-white" />
              <FiLinkedin className="text-2xl text-white" />
              <FiInstagram className="text-2xl text-white" />
            </div>

            <h1 className="text-3xl font-bold text-center text-white">
              <span className="flex items-center justify-center gap-3">
                <LuComponent />
                Navbar
              </span>
            </h1>

            <div className="search">
              <label class="relative block">
                <span class="sr-only">Search</span>
                <span class="absolute inset-y-0 right-0 flex items-center pr-4">
                  <FaSearch className="text-slate-400" />
                </span>
                <input
                  class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pr-9 pl-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                  placeholder="Search for anything..."
                  type="text"
                  name="search"
                />
              </label>
            </div>

            {/* <div className="login-signup">
              <button className="hover:bg-orange-500 border-2 border-white text-white rounded-full inline-block px-8 py-2 mr-3">
                Login
              </button>
              <button className="hover:bg-orange-500 border-2 border-white text-white rounded-full inline-block px-8 py-2 mr-3">
                Signup
              </button>
            </div> */}
          </nav>
          <div className="flex justify-center w-full py-4 ">
            <div className="menu">
              <ul className="flex gap-12 text-xl text-white">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
                <li className="cursor-pointer">Privacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar2;
