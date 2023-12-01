import React from "react";
import { styles } from "../styles/styles";
import FooterOverlyImg from "../assets/colors-overlay.jpg";
import { NavLink } from "react-router-dom";

const footerOverlay = {
  backgroundImage: `url(${FooterOverlyImg})`,
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
};

const Footer = () => {
  return (
    <div
      style={{ ...footerOverlay }}
      className="w-full sm:h-[400px] min-h-[400px]   bg-slate-900 text-white "
    >
      <div className="backdrop-blur-sm h-full py-8 flex flex-col justify-between items-center">
        <div className="  flex flex-col items-center sm:flex-row justify-between w-[80%] mx-auto">
          <div className="flex flex-col gap-3 max-w-[300px] sm:mb-0 mb-6">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
              TCJ Templates
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.{" "}
            </p>
            <h1>Address: Noida-64733, New Delhi, India</h1>
          </div>
          <div className="flex justify-around w-[100%]">
            <div>
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Link
              </h1>
              <ul>
                <li className={styles.footerLink}>
                  <NavLink to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li className={styles.footerLink}>
                  <NavLink to="/hero-pages" activeClassName="active">
                    Hero pages
                  </NavLink>
                </li>
                <li className={styles.footerLink}>
                  <NavLink to="/contact" activeClassName="active">
                    Contact
                  </NavLink>
                </li>
                <li className={styles.footerLink}>
                  <NavLink to="/about" activeClassName="active">
                    about
                  </NavLink>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                Link
              </h1>
              <ul>
                <li className={styles.footerLink}>Adventures</li>
                <li className={styles.footerLink}>Funny</li>
                <li className={styles.footerLink}>Stories</li>
                <li className={styles.footerLink}>For Kids</li>
              </ul>
            </div>
          </div>
        </div>
        <h1 className="text-white sm:mt-0 mt-8 text-center text-sm">
          © 2022 All Rights Reserved || created by{" "}
          <a href="https://dilshad-ahmed.github.io">Dilshad</a>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
