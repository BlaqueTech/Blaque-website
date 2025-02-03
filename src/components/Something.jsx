import React from "react";
import { Link } from "react-router-dom";

const Something = () => {
  return (
    <div className="bg-inherit py-28 mx-4">
      <div
        className="flex flex-col md:flex-row justify-between items-center 
        md:mx-28 px-6 md:px-16 py-12 rounded-3xl gap-10 md:gap-0"
        style={{
          background: "linear-gradient(110deg, #22202B 60%, #1F1B25 60%)",
        }}
      >
        <div className=" md:w-1/2 ">
          <p className="md:text-5xl text-3xl font-extrabold text-center md:text-left">
            {`Let's`} make something great together.
          </p>
        </div>
        <div className=" md:w-1/2 flex md:justify-end justify-center">
          <Link
            to="/connect"
            className="bg-white text-[#1E1A25] hover:bg-[#18191F] hover:text-white px-8 py-4 rounded-full font-semibold"
          >
            {`Let's`} Connect
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Something;
