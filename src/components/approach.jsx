import React from "react";
import img1 from "../assets/sent.png";
import img2 from "../assets/features-alternating-with-list-01.webp";
import img3 from "../assets/features-alternating-with-list-02.webp";
const Approach = () => {
  return (
    <div className="flex flex-col gap-24 py-24">
      <div className="flex flex-col md:flex-row items-center  gap-12 ">
        <div className="flex flex-col gap-6 flex-[0.5]">
          <p className="bg-gradient-to-r  from-[#27232C] to-[#333139] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
            Strategic Approach
          </p>
          <p className="text-6xl font-extrabold">
            {`Let's`} Drive Your Brand Forward
          </p>
          <p className="text-[22.5px] text-[#C2C7DC]">
            With a fusion of data-driven tactics and creative storytelling, we
            elevate your brand. Our team empowers your business, pushing it
            beyond the ordinary to achieve unparalleled success.
          </p>
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2">
              <img src={img1} alt="" className="h-7" />
              <p className="text-[#C2C7DC] text-xl">
                In-depth market research and analysis.
              </p>
            </span>
            <span className="flex items-center gap-2">
              <img src={img1} alt="" className="h-7" />
              <p className="text-[#C2C7DC] text-xl">
                Comprehensive brand strategy formulation.
              </p>
            </span>
            <span className="flex items-center gap-2">
              <img src={img1} alt="" className="h-7" />
              <p className="text-[#C2C7DC] text-xl">
                Focused brand message and value proposition.
              </p>
            </span>
          </div>
        </div>

        {/*------------------------------------- */}

        <div className="flex-[0.5] ">
          <img src={img3} alt="" className="w-full rounded-3xl" />
        </div>
      </div>

      {/*----------------------------------------- */}

      <div className="flex flex-col md:flex-row items-center gap-12 ">
        <div className="flex-[0.5] ">
          <img src={img2} alt="" className="w-full rounded-3xl" />
        </div>

        {/*---------------------------- */}

        <div className="flex flex-col gap-6 flex-[0.5]">
          <p className="bg-gradient-to-r  from-[#27232C] to-[#333139] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
            Innovative Solutions
          </p>
          <p className="text-6xl font-extrabold">
            Unlock Your Business Potential
          </p>
          <p className="text-[22.5px] text-[#C2C7DC]">
            Redefining the limits with progressive solutions, we fuel your
            enterprise with innovation. From digital landscapes to brand
            narratives, our work propels your business to new heights.
          </p>
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2">
              <img src={img1} alt="" className="h-7" />
              <p className="text-[#C2C7DC] text-xl">
                Cutting-edge digital product development.
              </p>
            </span>
            <span className="flex items-center gap-2">
              <img src={img1} alt="" className="h-7" />
              <p className="text-[#C2C7DC] text-xl">
                Optimized marketing strategies for growth.
              </p>
            </span>
            <span className="flex items-center gap-2">
              <img src={img1} alt="" className="h-7" />
              <p className="text-[#C2C7DC] text-xl">
                Impactful narratives that resonate with audiences.
              </p>
            </span>
          </div>
        </div>

        {/*------------------------------------- */}
      </div>
    </div>
  );
};

export default Approach;
