import React from "react";
import Nedia from "../assets/Nedia.webp";
import Pantone from "../assets/Pantone.webp";
import JBL from "../assets/JBL.webp";
import TikTok from "../assets/TikTok.webp";
import { Link } from "react-router-dom";
const WorkComp = () => {
  return (
    <div id="work" className="md:px-28 md:py-12 h-full ">
      <div className="flex flex-col gap-6 items-center text-center px-4 md:px-60">
        <p className="bg-gradient-to-r  from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
          Our work
        </p>
        <p className="md:text-[54px] text-[30px] leading-9 md:leading-none font-extrabold">
          Check out some of our recent & current work
        </p>
      </div>

      {/************************************************************** */}

      <div className="  gap-40 mt-24 hidden md:flex  md:flex-col">
        <div className="h-screen relative ">
          <img
            src={Nedia}
            alt=""
            className="w-[90%] h-[80%] absolute object-cover rounded-3xl z-0"
          />
          <div className="absolute flex flex-col rounded-2xl px-[50px] py-12 justify-between z-10 bg-[#22212A] h-[70%] w-[35%] end-0 top-[20%]">
            <p className="bg-gradient-to-r  from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-2xl  rounded-r-2xl">
              Ecommerce
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-5xl font-bold">Nedia</p>
              <p className="text-xl text-[#C2C7DC] ">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Vivamus magna justo, lacinia eget sed, convallis at tellus.
              </p>
            </div>
            <Link
              to="/case"
              className="relative  group lg:px-14 px-10  py-4  rounded-full "
            >
              <span
                className="md:absolute md:left-2 lg:left-6 top-0 h-full w-14 z-0 bg-[#1C1B23] rounded-full 
            group-hover:w-36 transition-all ease-in-out"
              ></span>
              <span className="z-11 relative">Case study</span>
            </Link>
          </div>
        </div>

        {/*---------------------------------------------------- */}

        <div className="h-screen relative hidden md:block">
          <img
            src={Pantone}
            alt=""
            className="w-[90%] h-[80%] left-[10%] absolute object-cover rounded-3xl z-0"
          />
          <div className="absolute flex flex-col rounded-2xl px-[50px] py-12 justify-between z-10 bg-[#22212A] h-[70%] w-[35%] start-0 top-[20%]">
            <p className="bg-gradient-to-r  from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-2xl  rounded-r-2xl">
              Ecommerce
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-5xl font-bold">Pantone</p>
              <p className="text-xl text-[#C2C7DC] ">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Vivamus magna justo, lacinia eget sed, convallis at tellus.
              </p>
            </div>
            <Link
              to="/case"
              className="relative  group lg:px-14 px-10  py-4  rounded-full "
            >
              <span
                className="md:absolute md:left-2 lg:left-6 top-0 h-full w-14 z-0 bg-[#1C1B23] rounded-full 
          group-hover:w-36 transition-all ease-in-out"
              ></span>
              <span className="z-11 relative">Case study</span>
            </Link>
          </div>
        </div>

        {/**---------------------------------------------------- */}

        <div className="h-screen relative hidden md:block">
          <img
            src={JBL}
            alt=""
            className="w-[90%] h-[80%] absolute object-cover rounded-3xl z-0"
          />
          <div className="absolute flex flex-col rounded-2xl px-[50px] py-12 justify-between z-10 bg-[#22212A] h-[70%] w-[35%] end-0 top-[20%]">
            <p className="bg-gradient-to-r  from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-2xl  rounded-r-2xl">
              Ecommerce
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-5xl font-bold">Sastastic</p>
              <p className="text-xl text-[#C2C7DC] ">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Vivamus magna justo, lacinia eget sed, convallis at tellus.
              </p>
            </div>
            <Link
              to="/case"
              className="relative  group lg:px-14 px-10  py-4  rounded-full "
            >
              <span
                className="md:absolute md:left-2 lg:left-6 top-0 h-full w-14 z-0 bg-[#1C1B23] rounded-full 
          group-hover:w-36 transition-all ease-in-out"
              ></span>
              <span className="z-11 relative">Case study</span>
            </Link>
          </div>
        </div>
        {/*-------------------------------------------------- */}

        <div className="h-screen relative hidden md:block">
          <img
            src={TikTok}
            alt=""
            className="w-[90%] h-[80%] left-[10%] absolute object-cover rounded-3xl z-0"
          />
          <div className="absolute flex flex-col rounded-2xl px-[50px] py-12 justify-between z-10 bg-[#22212A] h-[70%] w-[35%] start-[-2%] top-[20%]">
            <p className="bg-gradient-to-r  from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-2xl  rounded-r-2xl">
              Ecommerce
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-5xl font-bold">Sigma</p>
              <p className="text-xl text-[#C2C7DC] ">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                Vivamus magna justo, lacinia eget sed, convallis at tellus.
              </p>
            </div>
            <Link
              to="/case"
              className="relative  group lg:px-14 px-10  py-4  rounded-full "
            >
              <span
                className="md:absolute md:left-2 lg:left-6 top-0 h-full w-14 z-0 bg-[#1C1B23] rounded-full 
          group-hover:w-36 transition-all ease-in-out"
              ></span>
              <span className="z-11 relative">Case study</span>
            </Link>
          </div>
        </div>
      </div>

      {/****************************************************************************** */}

      <div className="px-4 my-8 flex flex-col gap-8 md:hidden">
        <div className="rounded-3xl bg-[#22212A]">
          <img src={Nedia} alt="" className="rounded-t-3xl" />
          <div className="px-4 py-6 flex flex-col justify-between gap-4">
            <p className="text-2xl font-bold">Nedia</p>
            <p className="text-[#C2C7DC]">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Vivamus magna justo, lacinia eget sed, convallis at tellus.
            </p>
            <Link
              to="/case"
              className="relative  group lg:px-14 px-10  py-4  rounded-full "
            >
              <span
                className="md:absolute md:left-2 lg:left-6 top-0 h-full w-14 z-0 bg-[#1C1B23] rounded-full 
          group-hover:w-36 transition-all ease-in-out"
              ></span>
              <span className="z-11 relative">Case study</span>
            </Link>
          </div>
        </div>
        <div className="rounded-3xl bg-[#22212A]">
          <img src={Pantone} alt="" className="rounded-t-3xl" />
          <div className="px-4 py-6 flex flex-col justify-between gap-4">
            <p className="text-2xl font-bold">Nedia</p>
            <p className="text-[#C2C7DC]">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Vivamus magna justo, lacinia eget sed, convallis at tellus.
            </p>
            <Link
              to="/case"
              className="bg-[#18191F] w-fit px-10 py-4 rounded-full"
            >
              Case study
            </Link>
          </div>
        </div>
        <div className="rounded-3xl bg-[#22212A]">
          <img src={JBL} alt="" className="rounded-t-3xl" />
          <div className="px-4 py-6 flex flex-col justify-between gap-4">
            <p className="text-2xl font-bold">Nedia</p>
            <p className="text-[#C2C7DC]">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Vivamus magna justo, lacinia eget sed, convallis at tellus.
            </p>
            <Link
              to="/case"
              className="bg-[#18191F] w-fit px-10 py-4 rounded-full"
            >
              Case study
            </Link>
          </div>
        </div>
        <div className="rounded-3xl bg-[#22212A]">
          <img src={TikTok} alt="" className="rounded-3xl" />
          <div className="px-4 py-6 flex flex-col justify-between gap-4">
            <p className="text-2xl font-bold">Nedia</p>
            <p className="text-[#C2C7DC]">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Vivamus magna justo, lacinia eget sed, convallis at tellus.
            </p>
            <Link
              to="/case"
              className="bg-[#18191F] w-fit px-10 py-4 rounded-full"
            >
              Case study
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkComp;
