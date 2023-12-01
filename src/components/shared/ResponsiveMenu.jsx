import React from "react";
// import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { styles } from "../../styles/styles";

const ResponsiveMenu = ({ showMenu }) => {
  console.log("showMenu", showMenu);
  return (
    showMenu && (
      <div className="fixed h-screen w-[70%] z-20 bg-slate-900 text-white top-0 left-0 px-8 pt-10 pb-6 flex flex-col justify-between">
        <div className="card">
          <div className="flex justify-start items-center gap-3">
            <FaUserCircle size={50} />
            <div>
              <h1>Dilshad Ahmed</h1>
              <h1>Age: 17 years</h1>
            </div>
          </div>
          <nav className="mt-8">
            <ul>
              <li>
                <Link to="/" className={styles.menuLink}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" className={styles.menuLink}>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/contact" className={styles.menuLink}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="footer">
          <h1>© 2022 All Rights Reserved</h1>
        </div>
      </div>
    )
  );
};

export default ResponsiveMenu;
