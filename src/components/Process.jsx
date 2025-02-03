import React from "react";
import Clipboard from "../assets/clipboards.png";
import Bright from "../assets/bright.png";
import Rocket from "../assets/rocket.png";
const Process = () => {
  return (
    <div className="flex flex-col items-center gap-8 px-4 md:px-28 pb-12">
      <div className="flex flex-col items-center gap-4 text-center md:mx-[260px]">
        <p className="bg-gradient-to-r  from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-2xl  rounded-r-2xl ">
          Our process
        </p>
        <p className="md:text-[54px] text-[30px] leading-9 md:leading-none font-extrabold">
          Experience our simple design process
        </p>
        <p className="md:text-[22px] text-[20px] text-[#C2C7DC]">
          Uncover the essence of your brand, through our highly collaborative
          and intuitively structured design process.
        </p>
      </div>

      {/************************************************************************************* */}

      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
            <img src={Clipboard} alt="" className="h-16  p-4  " />
          </div>
          <p className="text-2xl font-semibold">1. Collect Ideas</p>
          <p className="text-xl text-[#C2C7DC]">
            We gather comprehensive insights about your product to fully
            understand your unique needs and vision.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
            <img src={Bright} alt="" className="h-16  p-4  " />
          </div>
          <p className="text-2xl font-semibold">2. Design Concept</p>
          <p className="text-xl text-[#C2C7DC]">
            We creatively dHctdHJhbnNmb3Jt your vision and ideas into design
            drafts. We iterate until you are satisfied.
          </p>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
            <img src={Rocket} alt="" className="h-16  p-4  " />
          </div>
          <p className="text-2xl font-semibold">3. Finalize Product</p>
          <p className="text-xl text-[#C2C7DC]">
            Upon your approval, we finalize and refine the design and launch
            your uniquely tailored product to the market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
