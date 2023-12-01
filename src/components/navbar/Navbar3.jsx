import React from "react";
import { FaSearch } from "react-icons/fa";
import { LuComponent } from "react-icons/lu";

const Navbar2 = () => {
  return (
    <>
      <section className="bg-blue-950 dark:bg-black ">
        <div className="max-w-[1200px] mx-auto ">
          <nav className="flex justify-between items-center py-6">
            <div className="menu">
              <ul className="flex gap-12 text-xl text-white">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
              </ul>
            </div>
            <h1 className="text-3xl italic font-bold text-center text-white">
              <span className="flex items-center justify-center gap-3">
                <LuComponent />
                Navbar
              </span>
            </h1>
            <div className="login-signup">
              <button className="hover:bg-orange-500 border-2 border-white text-white rounded-full inline-block px-8 py-2 mr-3">
                Login
              </button>
              <button className="hover:bg-orange-500 border-2 border-white text-white rounded-full inline-block px-8 py-2 mr-3">
                Signup
              </button>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar2;
