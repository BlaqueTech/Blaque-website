import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/3d-cube.png";
import img2 from "../assets/shapes.png";
import img3 from "../assets/Services.png";
import img4 from "../assets/square.png";
import img5 from "../assets/diamond.png";
import img6 from "../assets/triangle.png";

const Weoffer = () => {
  return (
    <>
      <p className="bg-gradient-to-r  from-[#27232C] to-[#333139] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
        What we offer
      </p>
      <div className="grid md:grid-cols-3 gap-6 py-6">
        <div className="flex flex-col gap-6">
          <p className="text-6xl font-extrabold">{`We've`} Got You Covered</p>
          <Link
            to="/case"
            className="relative w-fit  group lg:px-14 px-10  py-4 bg-[#1C1B23] rounded-full "
          >
            <span
              className="md:absolute hidden md:left-12 lg:left-0 top-0 h-full w-14 z-0 
            rounded-full group-hover:w-36 transition-all ease-in-out"
            ></span>
            <span className="z-11 relative ">View work</span>
          </Link>
        </div>

        {/*-------------------------------------- */}

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
              <img src={img1} alt="" className="h-16  p-4  " />
            </div>
            <p className="text-2xl font-medium">UI/UX Design</p>
            <p className="text-xl text-[#C2C7DC]">
              Transforming ideas into visually compelling and functional designs
              that users love.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
              <img src={img2} alt="" className="h-16  p-4  " />
            </div>
            <p className="text-2xl font-medium">Mobile App Development</p>
            <p className="text-xl text-[#C2C7DC]">
              Creating intuitive, feature-rich mobile apps that engage and
              retain users.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
              <img src={img3} alt="" className="h-16  p-4  " />
            </div>
            <p className="text-2xl font-medium">Branding Services</p>
            <p className="text-xl text-[#C2C7DC]">
              Building strong, cohesive brand identities that resonate with
              target audiences.
            </p>
          </div>
        </div>

        {/*----------------------------- */}

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
              <img src={img4} alt="" className="h-16  p-4  " />
            </div>
            <p className="text-2xl font-medium">Web Development</p>
            <p className="text-xl text-[#C2C7DC]">
              Crafting robust and responsive websites that seamlessly operate
              across devices.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
              <img src={img5} alt="" className="h-16  p-4  " />
            </div>
            <p className="text-2xl font-medium">Digital Marketing</p>
            <p className="text-xl text-[#C2C7DC]">
              Driving brand awareness and growth through tailored digital
              marketing strategies.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
              <img src={img6} alt="" className="h-16  p-4  " />
            </div>
            <p className="text-2xl font-medium">SEO Optimization</p>
            <p className="text-xl text-[#C2C7DC]">
              Enhancing your online visibility and ranking through proven SEO
              strategies.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weoffer;
