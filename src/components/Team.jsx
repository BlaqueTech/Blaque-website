import React from "react";
import Insta from "../assets/instagram.png";
import FB from "../assets/facebook 1.png";
import Twitter from "../assets/twitter.png";
import img1 from "../assets/team-01.webp";
import img2 from "../assets/team-02.webp";
import img3 from "../assets/team-03.webp";
import img4 from "../assets/team-04.webp";
import img5 from "../assets/team-05.webp";
import img6 from "../assets/team-06.webp";
const Team = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <div className="flex flex-col gap-6 items-center lg:mx-96 text-center">
        <p className="bg-gradient-to-r  from-[#27232C] to-[#333139] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
          The team
        </p>
        <p className="md:text-6xl text-[33px] font-extrabold">
          Decades of experience in design and development
        </p>
        <p className=" text-[20px] text-[#C2C7DC]">
          Our diverse team unites industry veterans and innovative minds, all
          committed to delivering transformative digital experiences.
        </p>
      </div>

      {/************************************** */}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-x-40 md:gap-x-36 gap-16">
        <div className="flex flex-col items-center gap-2">
          <div className="h-56 w-56">
            <img
              src={img1}
              alt=""
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>
          <p className="text-xl font-medium">Kaylen Meyer</p>
          <p className="text-xl text-[#C2C7DC]">CEO</p>
          <div className="flex gap-2">
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img
                src={Insta}
                alt=""
                className="w-full h-full  object-contain"
              />
            </a>
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img src={FB} alt="" className="w-full h-full object-contain" />
            </a>
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img
                src={Twitter}
                alt=""
                className="w-full h-full object-contain "
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="h-56 w-56">
            <img
              src={img2}
              alt=""
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>
          <p className="text-xl font-medium">Coriss Ambady</p>
          <p className="text-xl text-[#C2C7DC]">Lead Developer</p>
          <div className="flex gap-2">
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img
                src={Insta}
                alt=""
                className="w-full h-full  object-contain"
              />
            </a>
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img src={FB} alt="" className="w-full h-full object-contain" />
            </a>
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img
                src={Twitter}
                alt=""
                className="w-full h-full object-contain "
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-56 w-56">
            <img
              src={img3}
              alt=""
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>
          <p className="text-xl font-medium">Lester Mccall</p>
          <p className="text-xl text-[#C2C7DC]">Senior Designer</p>
          <div className="flex gap-2">
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img
                src={Insta}
                alt=""
                className="w-full h-full  object-contain"
              />
            </a>
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img src={FB} alt="" className="w-full h-full object-contain" />
            </a>
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img
                src={Twitter}
                alt=""
                className="w-full h-full object-contain "
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-56 w-56">
            <img
              src={img4}
              alt=""
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>
          <p className="text-xl font-medium">Misha Mustafa</p>
          <p className="text-xl text-[#C2C7DC]">Studio Artist</p>
          <div className="flex gap-2">
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img
                src={Insta}
                alt=""
                className="w-full h-full  object-contain"
              />
            </a>
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img src={FB} alt="" className="w-full h-full object-contain" />
            </a>
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img
                src={Twitter}
                alt=""
                className="w-full h-full object-contain "
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-56 w-56">
            <img
              src={img5}
              alt=""
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>
          <p className="text-xl font-medium">Stefan Stefancik</p>
          <p className="text-xl text-[#C2C7DC]">Designer</p>
          <div className="flex gap-2">
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img
                src={Insta}
                alt=""
                className="w-full h-full  object-contain"
              />
            </a>
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img src={FB} alt="" className="w-full h-full object-contain" />
            </a>
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img
                src={Twitter}
                alt=""
                className="w-full h-full object-contain "
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-56 w-56">
            <img
              src={img6}
              alt=""
              className="h-full w-full object-cover rounded-3xl"
            />
          </div>
          <p className="text-xl font-medium">Vivien Smith</p>
          <p className="text-xl text-[#C2C7DC]">Developer</p>
          <div className="flex gap-2">
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img
                src={Insta}
                alt=""
                className="w-full h-full  object-contain"
              />
            </a>
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img src={FB} alt="" className="w-full h-full object-contain" />
            </a>
            <a href="" className="h-11 bg-[#22212A]  rounded-full w-12 p-3">
              <img
                src={Twitter}
                alt=""
                className="w-full h-full object-contain "
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
