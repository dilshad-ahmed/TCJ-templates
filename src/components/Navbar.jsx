import React, { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { styles } from "../styles/styles";
import ResponsiveMenu from "./shared/ResponsiveMenu";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div
      className="bg-transparent p-5 absolute top-0 right-0 left-0 text-white z-10 "
      id="home"
    >
      <div className={styles.container}>
        <nav className="flex justify-between">
          <div>
            <h1 className="flex justify-center items-center gap-2 font-bold sm:text-2xl text-xl">
              <CgWebsite size={30} />
              TCJ Templates
            </h1>
          </div>
          <div className="hidden sm:flex">
            <ul className="flex flex-row gap-10">
              <li className={styles.navLink}>
                <NavLink to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className={styles.navLink}>
                <NavLink to="/navbars" activeClassName="active">
                  Navbars
                </NavLink>
              </li>
              <li className={styles.navLink}>
                <NavLink to="/footers" activeClassName="active">
                  {/* style={({ isActive }) => ({
                    color: isActive ? "orange" : "white",
                  })} */}
                  Footers
                </NavLink>
              </li>
              <li className={styles.navLink}>
                <NavLink to="/contact" activeClassName="active">
                  Contact us
                </NavLink>
              </li>
              <li className={styles.navLink}>
                <NavLink to="/contribute" activeClassName="active">
                  Contribute
                </NavLink>
              </li>
            </ul>
            <div className="flex ml-6 gap-5  justify-center items-center">
              <FaUserCircle size={28} className="cursor-pointer" />
              {/* <FiLogOut size={20} className="cursor-pointer" /> */}
            </div>
          </div>

          {showMenu ? (
            <HiMenuAlt1
              onClick={toggleMenu}
              className="block sm:hidden cursor-pointer transition-all"
              size={30}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="block sm:hidden cursor-pointer transition-all"
              size={30}
            />
          )}
        </nav>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
