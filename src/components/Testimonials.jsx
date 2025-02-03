import React from "react";
import img1 from "../assets/Katy Perry.webp";
import img2 from "../assets/Katy Perry 2.webp";
import img3 from "../assets/Katy Perry 3.webp";
import img4 from "../assets/Katy Perry 4.webp";
import comma from "../images/inverted-commas.png";
import Something from "./Something";
const Testimonials = () => {
  return (
    <div className="bg-[#18191F]">
      <div className=" py-8 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-8 md:mx-[30%]  text-center">
          <p
            className="bg-gradient-to-r  from-[#27232C] to-[#333139] w-fit 
          px-6 py-2 rounded-tl-full  rounded-r-full "
          >
            Testimonials
          </p>
          <p className="md:text-[54px] text-[30px] leading-9 md:leading-none font-extrabold">
            What they say about us
          </p>
          <p className="text-xl text-[#C2C7DC] px-4 md:px-0">
            Discover first-hand accounts from our clients, who experienced the
            transformative power of our creative solutions.
          </p>
        </div>

        {/**************************************************** */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-2 md:grid-rows-3 gap-8 content-center items-center mx-6 md:mx-28">
          <div className="row-span-2 flex flex-col items-center gap-8 px-8 py-20 bg-[#22212A] rounded-3xl">
            <div className="flex flex-col items-center gap-4 text-center ">
              <p className="text-4xl font-bold">
                Discover why so many companies trust us
              </p>
              <p className="text-xl text-[#C2C7DC]">
                We pride ourselves on delivering exceptional and tangible
                results that matter to you.
              </p>
            </div>
            {/************************************** */}
            <div className="flex flex-col gap-6 items-center">
              <div className="flex flex-col items-center gap-2">
                <p className="text-5xl font-bold">69</p>
                <p className="text-[#C2C7DC]">Happy clients</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-5xl font-bold">420</p>
                <p className="text-[#C2C7DC]">Projects complited</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p className="text-5xl font-bold">20</p>
                <p className="text-[#C2C7DC]">Years in business </p>
              </div>
            </div>
          </div>

          {/*********************************************************** */}

          <div
            className="relative bg-[#22212A] px-8 py-12 flex flex-col 
          items-center gap-8 h-full rounded-3xl"
          >
            <img
              src={comma}
              alt=""
              className="absolute z-0 opacity-50 top-[10px] left-5 h-40 "
            />
            <p className="text-[#C2C7DC] text-xl  text-center z-20">
              Working with Crator was a game-changer. Their creative vision
              truly amplified our {`brand's`} potential.
            </p>
            <div className="flex flex-col items-center gap-1">
              <img
                src={img1}
                alt=""
                className="rounded-full h-12 w-12 object-cover"
              />
              <p>Katy Perry </p>
              <p className="text-[#C2C7DC]">CEO, Spotify</p>
            </div>
          </div>

          <div className="relative bg-[#22212A] px-8 py-12 flex flex-col items-center gap-8 h-full rounded-3xl">
            <img
              src={comma}
              alt=""
              className="absolute z-0 opacity-50 top-[10px] left-5 h-40 "
            />
            <p className="text-[#C2C7DC] text-xl  text-center z-20">
              {`Crator's`} innovative design solutions played a key role in our{" "}
              {`product's`} successful launch.
            </p>
            <div className="flex flex-col items-center gap-1">
              <img
                src={img2}
                alt=""
                className="rounded-full h-12 w-12 object-cover"
              />
              <p>Henry Krasner </p>
              <p className="text-[#C2C7DC]">CEO, Twitter</p>
            </div>
          </div>

          <div className="relative bg-[#22212A]  px-8 py-12 flex flex-col items-center gap-8 h-full rounded-3xl">
            <img
              src={comma}
              alt=""
              className="absolute z-0 opacity-50 top-[10px] left-5 h-40 "
            />
            <p className="text-[#C2C7DC] text-xl text-center z-20">
              {` Crator's`} team is exceptional. Their commitment to quality
              exceeded our highest expectations.
            </p>
            <div className="flex flex-col items-center gap-1">
              <img
                src={img3}
                alt=""
                className="rounded-full h-12 w-12 object-cover"
              />
              <p>Bob Foster</p>
              <p className="text-[#C2C7DC]">CEO, Amazon</p>
            </div>
          </div>

          <div className="relative bg-[#22212A] px-8 py-12 flex flex-col items-center gap-8 h-full rounded-3xl">
            <img
              src={comma}
              alt=""
              className="absolute z-0 opacity-50 top-[10px] left-5 h-40 "
            />
            <p className="text-[#C2C7DC] text-xl  text-center z-20">
              From concept to execution, {`Crator's`} approach was seamlessly
              integrated and highly efficient.
            </p>
            <div className="flex flex-col items-center gap-1">
              <img
                src={img4}
                alt=""
                className="rounded-full h-12 w-12 object-cover"
              />
              <p>Ema Roberts </p>
              <p className="text-[#C2C7DC]">CEO, Dropbox</p>
            </div>
          </div>
        </div>
      </div>
      <Something />
    </div>
  );
};

export default Testimonials;
