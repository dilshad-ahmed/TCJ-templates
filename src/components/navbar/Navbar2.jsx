import React from "react";
import { FaSearch } from "react-icons/fa";

const Navbar2 = () => {
  return (
    <>
      <section className="bg-blue-950 dark:bg-black ">
        <div className="max-w-[1200px] mx-auto ">
          <nav className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-center text-white">
              Navbar
            </h1>
            <div className="menu">
              <ul className="flex gap-12 text-xl text-white">
                <li className="cursor-pointer">Home</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
              </ul>
            </div>
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
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar2;
