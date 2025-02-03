import React from "react";
import Upwork from "../assets/upwork-svgrepo-com.png";
import Shopify from "../assets/Shopify.png";
import Amazon from "../assets/amazon.png";
import Adobe from "../assets/Adobe.png";
import Snapchat from "../assets/snapchat.png";
import Strava from "../assets/Strava.png";
const Partners = () => {
  return (
    <div
      id="partners"
      className="flex flex-col gap-8 items-center py-24 pb-72 "
      style={{
        background: "linear-gradient(8deg,#1E1A25 20%, #18191F 0%)",
      }}
    >
      <div
        id="top"
        className="flex flex-col text-center gap-6 items-center md:px-20 md:w-3/5"
      >
        <p className="bg-gradient-to-r from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
          Our Partners
        </p>
        <p className="text-3xl md:text-5xl font-extrabold ">
          Trusted by the best companies in the business
        </p>
        <p className="text-xl text-gray-400">
          Collaborating with various sectors, {`we've`} helped startups and
          established businesses alike to flourish.
        </p>
      </div>
      <div
        id="partners-grid"
        className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-8 px-4 md:789px-0"
      >
        <div className="  bg-[#222138] flex justify-center items-center rounded-2xl opacity-50 hover:opacity-100">
          <img
            src={Upwork}
            alt=""
            className="h-fit px-12 md:h-28 lg:h-32  md:px-18 lg:px-24"
          />
        </div>
        <div className=" bg-[#222138] flex justify-center items-center rounded-2xl opacity-50 hover:opacity-100">
          <img
            src={Shopify}
            alt=""
            className="h-fit px-12 md:h-8 lg:h-12  md:px-18 lg:px-24"
          />
        </div>
        <div className=" bg-[#222138] flex justify-center items-center rounded-2xl opacity-50 hover:opacity-100">
          <img
            src={Amazon}
            alt=""
            className="h-fit px-12 md:h-28 lg:h-32  md:px-18 lg:px-24"
          />
        </div>
        <div className=" bg-[#222138] flex justify-center items-center rounded-2xl opacity-50 hover:opacity-100">
          <img
            src={Adobe}
            alt=""
            className=" h-fit px-12 md:h-8 lg:h-8  md:px-18 lg:px-24"
          />
        </div>
        <div className=" bg-[#222138] flex justify-center items-center rounded-2xl opacity-50 hover:opacity-100">
          <img
            src={Snapchat}
            alt=""
            className="h-16 px-12 md:h-10 lg:h-12  md:px-18 lg:px-24"
          />
        </div>
        <div className=" bg-[#222138] flex justify-center items-center rounded-2xl opacity-50 hover:opacity-100">
          <img
            src={Strava}
            alt=""
            className="h-fit px-12 md:h-5 lg:h-6 md:px-18 lg:px-24"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
