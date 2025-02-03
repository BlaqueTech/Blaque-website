import React from "react";

import img1 from "../assets/hero-services-01.webp";
import img2 from "../assets/hero-services-02.webp";
import img3 from "../assets/features-alternating-simple-01.webp";
import img4 from "../assets/features-alternating-simple-02.webp";
import img5 from "../assets/features-alternating-simple-03.webp";
import { Link } from "react-router-dom";
import Process from "../components/Process";
import Something from "../components/Something";
import Weoffer from "../components/weoffer";
import Approach from "../components/approach";

const Services = () => {
  return (
    <div className="px-4 py-4 lg:px-24">
      {/***************************************** */}
      <div className="">
        <div className="hidden md:flex flex-col  gap-16 pb-12">
          <div className="flex flex-col gap-4">
            <p className="bg-gradient-to-r  from-[#27232C] to-[#333139] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
              OurServices
            </p>
            <p className="text-[37px] md:text-6xl text-center md:text-left font-extrabold ">
              We Create meaningful digital solutions that level up your business
            </p>
          </div>
          {/************************* */}
          <div className="flex flex-col gap-12">
            <div className="flex md:flex-row flex-col justify-center items-center md:items-start gap-4 ">
              <div className="flex flex-col gap-8 flex-[0.5]">
                <p className="text-[22px] text-[#C2C7DC]">
                  Elevating businesses with expertly designed and executed
                  digital strategies. Crator is here to help you conquer the
                  online space one pexel at a time.
                </p>
                <Link
                  to="/connect"
                  className="text-[#22202B] w-fit bg-white hover:bg-[#1F1B25] hover:text-white font-medium px-7 py-4 rounded-full"
                >{`Let's get started`}</Link>
              </div>
              <div className="flex items-center justify-center gap-4  flex-[0.5] md:flex-row flex-col">
                <img src={img1} alt="" className="h-96 w-72 rounded-3xl" />
                <img src={img2} alt="" className="h-96 w-72 rounded-3xl " />
              </div>
            </div>

            {/*************************************** */}

            <div className="flex gap-32 items-center ">
              <div className="flex-[0.5]">
                <img
                  src={img3}
                  alt=""
                  className="w-[650px] h-[550px] object-cover rounded-3xl"
                />
              </div>
              <div className="flex-[0.5] flex flex-col gap-8">
                <p className="bg-gradient-to-r  from-[#27232C] to-[#333139] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
                  Product development
                </p>
                <p className="text-5xl font-bold">
                  Innovative digital solutions
                </p>
                <p className="text-[#C2C7DC] text-[22px]">
                  We specialize in crafting top-tier digital products that are
                  perfectly tailored to your {`brand's`} needs. From ideation to
                  execution, we turn ideas into tangible realities.
                </p>
              </div>
            </div>

            <div className="flex gap-32 items-center ">
              <div className="flex-[0.5] flex flex-col gap-8">
                <p className="bg-gradient-to-r  from-[#27232C] to-[#333139] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
                  Design
                </p>
                <p className="text-5xl font-bold">
                  Designing for better user experiences
                </p>
                <p className="text-[#C2C7DC] text-[22px]">
                  Our approach leverages the power of aesthetics to create
                  unparalleled user experiences. By balancing beauty and
                  functionality, we make the complex simple, and the ordinary
                  extraordinary.
                </p>
              </div>
              <div className="flex-[0.5]">
                <img
                  src={img4}
                  alt=""
                  className="w-[650px] h-[550px] object-cover rounded-3xl"
                />
              </div>
            </div>

            <div className="flex gap-32 items-center ">
              <div className="flex-[0.5]">
                <img
                  src={img5}
                  alt=""
                  className="w-[650px] h-[550px] object-cover rounded-3xl"
                />
              </div>
              <div className="flex-[0.5] flex flex-col gap-8">
                <p className="bg-gradient-to-r  from-[#27232C] to-[#333139] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
                  Optimization
                </p>
                <p className="text-5xl font-bold">
                  Innovative digital solutions
                </p>
                <p className="text-[#C2C7DC] text-[22px]">
                  We are committed to maximizing efficiency and performance
                  through the use of cutting-edge technologies. We strive to
                  ensure that each solution we provide is optimized for success.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/**************************Mobile*************************** */}

        <div className="md:hidden flex items-center flex-col pb-6 gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex-[0.5] flex flex-col gap-4 pb-6">
              <p className="bg-gradient-to-r  from-[#27232C] to-[#333139] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
                Our services
              </p>
              <p className="text-[37px] md:text-5xl font-extrabold">
                We Create meaningful digital solutions that level up your
                business
              </p>
              <p className="text-[#C2C7DC] text-[20px]">
                Elevating businesses with expertly designed and executed digital
                strategies. Crator is here to help you conquer the online space
                one pexel at a time.
              </p>
              <Link
                to="/connect"
                className="text-[#22202B] w-full text-center bg-white hover:bg-[#1F1B25]
                text-2xl hover:text-white font-medium px-7 py-4 rounded-full"
              >{`Let's get started`}</Link>
            </div>
            <div className="flex-[0.5]">
              <img
                src={img1}
                alt=""
                className="w-[650px] h-[550px] object-cover rounded-3xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex-[0.5] flex flex-col items-center gap-8">
              <p className="bg-gradient-to-r  from-[#27232C] to-[#333139] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
                Product development
              </p>
              <p className="text-5xl font-bold">Innovative digital solutions</p>
              <p className="text-[#C2C7DC] text-[22px]">
                We specialize in crafting top-tier digital products that are
                perfectly tailored to your brands needs. From ideation to
                execution, we turn ideas into tangible realities.
              </p>
            </div>
            <div className="flex-[0.5]">
              <img
                src={img3}
                alt=""
                className="w-[650px] h-[550px] object-cover rounded-3xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex-[0.5] flex flex-col items-center gap-8">
              <p className="bg-gradient-to-r  from-[#27232C] to-[#333139] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
                Design
              </p>
              <p className="text-5xl font-bold">
                Designing for better user experiences
              </p>
              <p className="text-[#C2C7DC] text-[22px]">
                Our approach leverages the power of aesthetics to create
                unparalleled user experiences. By balancing beauty and
                functionality, we make the complex simple, and the ordinary
                extraordinary.
              </p>
            </div>
            <div className="flex-[0.5]">
              <img
                src={img4}
                alt=""
                className="w-[650px] h-[550px] object-cover rounded-3xl"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex-[0.5] flex flex-col items-center gap-8">
              <p className="bg-gradient-to-r  from-[#27232C] to-[#333139] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
                Optimization
              </p>
              <p className="text-5xl font-bold">State of the art performance</p>
              <p className="text-[#C2C7DC] text-[22px]">
                We are committed to maximizing efficiency and performance
                through the use of cutting-edge technologies. We strive to
                ensure that each solution we provide is optimized for success.
              </p>
            </div>
            <div className="flex-[0.5]">
              <img
                src={img5}
                alt=""
                className="w-[650px] h-[550px] object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
        <Weoffer />
        <Approach />
        <Process />
        <Something />
      </div>
    </div>
  );
};

export default Services;
