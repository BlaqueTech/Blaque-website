import React from "react";
import img1 from "../assets/fire.png";
import img2 from "../assets/rise.png";
import img3 from "../assets/user.png";
const Values = () => {
  return (
    <div className="flex flex-col items-center gap-12 py-24">
      <div className="flex flex-col items-center text-center md:mx-80 gap-6">
        <p className="bg-gradient-to-r  from-[#27232C] to-[#333139] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
          Our values
        </p>
        <p className="md:text-6xl text-4xl font-extrabold">
          The values that guide and define our work
        </p>
        <p className="md:text-[24px] text-[20px] text-[#C2C7DC]">
          We are driven by a unique ethos, firmly rooted in a cohesive set of
          shared values that guide all our decisions and actions.
        </p>
      </div>

      {/*-------------------- */}

      <div className="flex flex-col md:flex-row gap-6 md:px-24">
        <div
          className="flex flex-col items-center md:w-1/3 w-96 text-center 
        bg-[#22212A] gap-6 md:px-8 px-2 py-16 rounded-3xl"
        >
          <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
            <img src={img1} alt="" className="h-16  p-4  " />
          </div>
          <p className="text-2xl font-bold">Quality</p>
          <p className="md:text-[22px] text-[20px] text-[#C2C7DC]">
            We strive for excellence in all facets of our work, assuring
            high-end results.
          </p>
        </div>

        <div
          className="flex flex-col items-center md:w-1/3 w-96 text-center 
        bg-[#22212A] gap-6 md:px-8 px-2 py-16 rounded-3xl"
        >
          <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
            <img src={img2} alt="" className="h-16  p-4  " />
          </div>
          <p className="text-2xl font-bold">Improvement</p>
          <p className="md:text-[22px] text-[20px] text-[#C2C7DC]">
            We are committed to learning, adapting, and constantly elevating our
            game.
          </p>
        </div>

        <div
          className="flex flex-col items-center md:w-1/3 w-96 text-center 
        bg-[#22212A] gap-6 md:px-8 px-2 py-16 rounded-3xl"
        >
          <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
            <img src={img3} alt="" className="h-16  p-4  " />
          </div>
          <p className="text-2xl font-bold">Team work</p>
          <p className="md:text-[22px] text-[20px] text-[#C2C7DC]">
            We believe in collective efforts, fostering a culture of
            collaboration and support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
