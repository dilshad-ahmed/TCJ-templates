import React from "react";

const NoPage = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center gap-4 bg-gradient-to-b from-fuchsia-900 to-fuchsia-400">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <h1 className="text-2xl font-semibold text-white">
          Page Not Available
        </h1>
      </div>
    </>
  );
};

export default NoPage;
