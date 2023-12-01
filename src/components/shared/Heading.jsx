import React from "react";

const Heading = ({ text }) => {
  return (
    <>
      <h1 className="sm:text-3xl text-xl py-8 font-bold text-center">{text}</h1>
    </>
  );
};

export default Heading;
