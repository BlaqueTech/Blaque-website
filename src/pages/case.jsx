import React from "react";
import Challenge from "../assets/Puzzle.png";
import Results from "../assets/idea.png";
import Service from "../assets/Services.png";
import Nedia from "../assets/Nedia.webp";
import Something from "../components/Something";
import img1 from "../assets/case-img-1.webp";
import img2 from "../assets/case-img-2.webp";
import img3 from "../assets/case-img-3.webp";
import { Link } from "react-router-dom";

const Case = () => {
  return (
    <div className="bg-[#18181E]">
      <div className="flex flex-col items-center gap-12 h-full px-6 ">
        <div className="flex flex-col items-center gap-4">
          <p className="bg-gradient-to-r from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
            Case study
          </p>
          <p className="md:text-6xl text-4xl font-bold md:px-80 text-center">
            From idea to a thriving social platform
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-16 md:px-24">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
              <img src={Challenge} alt="" className="h-16  p-4  " />
            </div>
            <p className="text-2xl font-semibold">Challenge</p>
            <p className="text-xl text-[#C2C7DC]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elitdo eius
              mod tempor.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
              <img src={Service} alt="" className="h-16  p-4  " />
            </div>
            <p className="text-2xl font-semibold">Services</p>
            <p className="text-xl text-[#C2C7DC]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elitdo eius
              mod tempor.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="bg-gradient-to-r from-[#333139] to-[#24202A] w-fit rounded-2xl">
              <img src={Results} alt="" className="h-16  p-4  " />
            </div>
            <p className="text-2xl font-semibold">Results</p>
            <p className="text-xl text-[#C2C7DC]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elitdo eius
              mod tempor.
            </p>
          </div>
        </div>

        {/************************** */}

        <div className="rounded-2xl md:w-80%  flex items-center md:px-24 py-24">
          <img
            src={Nedia}
            alt=""
            className="md:w-full  object-cover rounded-3xl "
          />
        </div>

        {/********************** */}

        <div className="flex flex-col gap-4 items-center text-center md:px-64 font-medium">
          <p
            className="bg-gradient-to-r from-[#333139] to-[#27232C] w-fit px-6 py-2 
          rounded-tl-full  rounded-r-full "
          >
            About the project
          </p>
          <p className="md:text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eius
            mod tempor incididunt ut labore et. Ad cum decore expetenda
            dissentiet, civibus patrioque referrentur id nec, ei eam simul
            diceret.
          </p>
        </div>

        {/********************************************* */}

        <div
          className="flex flex-col gap-16 items-center py-24 rounded-3xl"
          style={{
            background: "linear-gradient(110deg, #22202B 60%, #1F1B25 60%)",
          }}
        >
          <div className="flex flex-col gap-8 items-center text-center md:px-24 ">
            <p
              className="bg-gradient-to-r bg-[#18191F] w-fit px-6 py-2 
            rounded-tl-full  rounded-r-full "
            >
              Key status
            </p>
            <p className="md:text-5xl text-3xl font-bold">
              Going above and beyond our clients expectations.
            </p>
            <p className="md:text-2xl text-xl text-[#C2C7DC]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus repellat laudantium.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-44 md:px-24">
            <div className="flex gap-4 flex-col items-center">
              <p className="text-5xl md:text-6xl font-extrabold">$2.1m</p>
              <p className="text-xl text-[#C2C7DC]">
                Additional revenue (2021)
              </p>
            </div>
            <div className="flex gap-4 flex-col items-center">
              <p className="text-5xl md:text-6xl font-extrabold">12m</p>
              <p className="text-xl text-[#C2C7DC]">
                Social interactions a month
              </p>
            </div>
            <div className="flex gap-4 flex-col items-center">
              <p className="text-5xl md:text-6xl font-extrabold">300k</p>
              <p className="text-xl text-[#C2C7DC]">Unique monthly visitors</p>
            </div>
          </div>
          <Link
            to="/case"
            className="relative  group lg:px-14 px-10  py-4  rounded-full "
          >
            <span
              className="md:absolute md:left-2 lg:left-6 top-0 h-full w-14 z-0 bg-[#1C1B23] rounded-full 
            group-hover:w-36 transition-all ease-in-out"
            ></span>
            <span className="z-11 relative">Learn more</span>
          </Link>
        </div>

        {/******************************************************************** */}

        <div className="flex flex-col   mt-24">
          <div className="flex flex-col items-center gap-6 ">
            <p
              className="bg-gradient-to-r from-[#333139] to-[#27232C] 
            w-fit px-6 py-2 rounded-tl-full  rounded-r-full "
            >
              The details
            </p>
            <p className="md:text-6xl text-4xl font-bold md:px-80 text-center">
              Taking a closer look
            </p>
            <p className="md:text-2xl text-xl text-[#C2C7DC] md:px-72 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sapien massa, convallis a pellentesque nec, egestas non nisi.
            </p>
          </div>
          {/*************************** */}
          <div className="hidden md:flex flex-col gap-12 my-20">
            <div className="flex justify-between gap-12 items-center px-24">
              <div className="flex flex-col gap-6 flex-[0.5]">
                <p
                  className="bg-gradient-to-r from-[#333139] to-[#27232C] 
                w-fit px-6 py-2 rounded-tl-full  rounded-r-full "
                >
                  User Focused
                </p>
                <p className="md:text-5xl text-xl font-bold ">
                  How we increased user engagement
                </p>
                <p className=" text-[18px] text-[#C2C7DC] ">
                  Anim aute id magna aliqua ad ad non deserunt sunt. qui irure
                  qui lorem cupidatat commodo. elit sunt amet fugiat veniam
                  occaecat fugiat aliqua. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              </div>
              <div className="flex-[0.5]">
                <img src={img1} alt="" className="w-full rounded-3xl" />
              </div>
            </div>
            <div className="flex justify-between gap-12 items-center px-24">
              <div className="flex-[0.5] ">
                <img src={img2} alt="" className="w-full rounded-3xl" />
              </div>
              <div className="flex flex-col gap-6 flex-[0.5]">
                <p
                  className="bg-gradient-to-r from-[#333139] to-[#27232C] 
                w-fit px-6 py-2 rounded-tl-full  rounded-r-full "
                >
                  Performance
                </p>
                <p className="md:text-5xl text-xl font-bold ">
                  How we improved website speed by 70%
                </p>
                <p className=" text-[18px] text-[#C2C7DC] ">
                  Anim aute id magna aliqua ad ad non deserunt sunt. qui irure
                  qui lorem cupidatat commodo. elit sunt amet fugiat veniam
                  occaecat fugiat aliqua. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-12 items-center px-24">
              <div className="flex flex-col gap-6 flex-[0.5]">
                <p
                  className="bg-gradient-to-r from-[#333139] to-[#27232C] 
                w-fit px-6 py-2 rounded-tl-full  rounded-r-full "
                >
                  Product growth
                </p>
                <p className="md:text-5xl text-xl font-bold ">
                  How we achieved 10x growth in revenue
                </p>
                <p className=" text-[18px] text-[#C2C7DC] ">
                  Anim aute id magna aliqua ad ad non deserunt sunt. qui irure
                  qui lorem cupidatat commodo. elit sunt amet fugiat veniam
                  occaecat fugiat aliqua. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              </div>
              <div className="flex-[0.5] ">
                <img src={img3} alt="" className="w-full rounded-3xl" />
              </div>
            </div>
          </div>
          {/*************************MOBILE********************************* */}
          <div className="my-12 md:hidden flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 flex-[0.5]">
                <p
                  className="bg-gradient-to-r from-[#333139] to-[#27232C] 
            w-fit px-6 py-2 rounded-tl-full  rounded-r-full "
                >
                  User focused
                </p>
                <p className="text-2xl font-bold ">
                  How we increased user engagement
                </p>
                <p className=" text-[19.9px] text-[#C2C7DC] ">
                  Anim aute id magna aliqua ad ad non deserunt sunt. qui irure
                  qui lorem cupidatat commodo. elit sunt amet fugiat veniam
                  occaecat fugiat aliqua. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              </div>
              <div className="flex-[0.5] ">
                <img src={img1} alt="" className="w-full rounded-3xl" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 flex-[0.5]">
                <p
                  className="bg-gradient-to-r from-[#333139] to-[#27232C] 
          w-fit px-6 py-2 rounded-tl-full  rounded-r-full "
                >
                  Performance
                </p>
                <p className="text-2xl font-bold ">
                  How we improved website speed by 70%
                </p>
                <p className=" text-[19.9px] text-[#C2C7DC] ">
                  Anim aute id magna aliqua ad ad non deserunt sunt. qui irure
                  qui lorem cupidatat commodo. elit sunt amet fugiat veniam
                  occaecat fugiat aliqua. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              </div>
              <div className="flex-[0.5] ">
                <img src={img2} alt="" className="w-full rounded-3xl" />
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 flex-[0.5]">
                <p
                  className="bg-gradient-to-r from-[#333139] to-[#27232C] 
        w-fit px-6 py-2 rounded-tl-full  rounded-r-full "
                >
                  Product growth
                </p>
                <p className="text-2xl font-bold ">
                  How we achieved 10x growth in revenue
                </p>
                <p className=" text-[19.9px] text-[#C2C7DC] ">
                  Anim aute id magna aliqua ad ad non deserunt sunt. qui irure
                  qui lorem cupidatat commodo. elit sunt amet fugiat veniam
                  occaecat fugiat aliqua. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit
                </p>
              </div>
              <div className="flex-[0.5] ">
                <img src={img3} alt="" className="w-full rounded-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Something />
    </div>
  );
};

export default Case;
