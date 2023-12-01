import React from "react";
import { FaCaretSquareDown, FaSearch } from "react-icons/fa";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { LuComponent } from "react-icons/lu";

const Navbar2 = () => {
  return (
    <>
      <section className="bg-blue-950 dark:bg-black ">
        <div className="max-w-[1200px] mx-auto ">
          <div className="py-3 flex justify-between items-center border-b-2 border-white/40">
            <div className="text-white">
              <p>Choose Language </p>
            </div>
            <div className="flex items-center gap-4">
              <FiUser className="text-2xl text-white" />
              <FiSearch className="text-2xl text-white" />
              <FiShoppingCart className="text-2xl text-white" />
            </div>
          </div>
          <nav className="flex justify-between items-center py-6">
            <h1 className="text-3xl italic font-bold text-center text-white">
              <span className="flex items-center justify-center gap-3">
                <LuComponent />
                Navbar
              </span>
            </h1>

            <div className="flex items-center gap-10">
              <div className="menu">
                <ul className="flex gap-12 text-xl text-white">
                  <li className="cursor-pointer ">Home</li>
                  <li className="cursor-pointer ">About</li>
                  <li className="cursor-pointer ">Contact</li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar2;
