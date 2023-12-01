import React from "react";
import { styles } from "../styles/styles";
import HeroVectorImg from "../assets/hero-vector.jpg";

const backgroundStyle = {
  backgroundImage: `url(${HeroVectorImg})`,
  backgroundPosition: "center",
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
};
const Home = () => {
  return (
    <div style={backgroundStyle}>
      <div className="">
        <div className={styles.container}>
          <div
            className={` h-[600px]  flex sm:flex-row flex-col  justify-center items-center pb-8`}
          >
            <div className="w-full mt-20 sm:mt-0">
              <div className="heroContent max-w-[500px] mx-auto text-center text-white">
                <h1 className={styles.heroText}>Website Templates</h1>
                <p className="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi voluptate a, nisi magni similique debitis dicta
                  maiores veritatis molestias necessitatibus!
                </p>
                <button className={styles.mainBtn}> Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
