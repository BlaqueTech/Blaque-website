import React from "react";
import img1 from "../assets/team.webp";
import img2 from "../assets/values.webp";
import img5 from "../assets/handbook.webp";
import img3 from "../assets/security.png";
import img4 from "../assets/bright.png";
import img6 from "../assets/person.png";
import img7 from "../assets/telephone.png";
import Testimonials from "../components/Testimonials";
import Values from "../components/Values";
import Team from "../components/Team";

const About = () => {
  return (
    <div>
      <div
        style={{
          background: "linear-gradient(4deg,#1E1A25 10%, #18191F 0%)",
        }}
        id="top"
        className="flex flex-col gap-12 items-center pb-52"
      >
        <div className="flex flex-col items-center gap-4">
          <p className="bg-gradient-to-r from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
            About us
          </p>
          <p className="md:text-6xl text-4xl font-bold px-4 lg:px-80 text-center">
            A small creative team excited to create beautiful things
          </p>
          <p className="text-xl text-[#C2C7DC] mx-16 lg:mx-96 text-center">
            Born out of a shared passion for design and innovation, {`we're`} a
            dedicated team committed to turning visions into impactful digital
            realities.
          </p>
        </div>
        <img
          src={img1}
          alt=""
          className="rounded-3xl px-4 lg:px-0 object-cover"
        />
      </div>

      {/****************Vision****************** */}

      <div className="bg-[#1E1A25] flex flex-col md:flex-row gap-14 items-center px-4 md:px-28 py-12 ">
        <div className="flex flex-col justify-between gap-10">
          <p className="bg-gradient-to-r from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
            Our vision
          </p>
          <p className="md:text-6xl text-4xl font-bold  ">
            We believe in the power of creative ideas
          </p>
          <p className="text-2xl text-[#C2C7DC]">
            In the heart of our company lies a strong belief in the
            transformative power of ideas. Leveraging innovation and
            originality, we aim to deliver results that exceed expectations.
          </p>

          {/***************************** */}

          <span className="flex flex-col md:flex-row">
            <div>
              <span className="flex gap-4 items-center">
                <img
                  src={img3}
                  alt=""
                  className="h-12 p-2 rounded-full bg-gradient-to-r from-[#333139] to-[#27232C]"
                />
                <p className="text-xl font-bold">Full transparency</p>
              </span>
              <p className="text-xl text-[#C2C7DC]">
                Trust is key; we uphold honesty. Every step is communicated for
                clarity.
              </p>
            </div>
            <div>
              <span className="flex  gap-4 items-center">
                <img
                  src={img4}
                  alt=""
                  className="h-12 p-2 rounded-full bg-gradient-to-r from-[#333139] to-[#27232C]"
                />
                <p className="text-xl font-bold">Product Mindset</p>
              </span>
              <p className="text-xl text-[#C2C7DC]">
                Our focus: user-centric, engaging, and valuable products with
                purpose.
              </p>
            </div>
          </span>
        </div>

        <div>
          <img src={img2} alt="" className="rounded-3xl" />
        </div>
      </div>

      {/**************************************Handbook**************************************************** */}

      <div
        style={{
          background: "linear-gradient(-4deg,#18191F 10%, #1E1A25 0%)",
        }}
        className="flex flex-col md:flex-row gap-14 items-center px-4 md:px-28 pt-12 pb-24 "
      >
        <div className="md:order-1 order-2">
          <img src={img5} alt="" className="rounded-3xl" />
        </div>
        <div className="flex flex-col justify-between gap-10 md:order-2 order-1">
          <p className="bg-gradient-to-r from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
            Our handbook
          </p>
          <p className="md:text-6xl text-4xl font-bold  ">
            How we work and collaborate with our clients
          </p>
          <p className="text-2xl text-[#C2C7DC]">
            Our work philosophy revolves around active collaboration and open
            dialogue. We engage with clients every step of the way, ensuring
            their vision is at the heart of our designs and strategies.
          </p>

          {/***************************** */}

          <span className="flex flex-col md:flex-row">
            <div className="flex flex-col gap-4">
              <span className="flex gap-6 items-center">
                <div
                  href=""
                  className="h-12 bg-[#22212A]  rounded-2xl w-12 p-2"
                >
                  <img
                    src={img6}
                    alt=""
                    className="w-full h-full object-contain "
                  />
                </div>
                <p className="text-xl font-bold">User focused</p>
              </span>
              <p className="text-xl text-[#C2C7DC]">
                Trust is key; we uphold honesty. Every step is communicated for
                clarity.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="flex  gap-6 items-center">
                <div
                  href=""
                  className="h-12 bg-[#22212A]  rounded-2xl w-12 p-2"
                >
                  <img
                    src={img7}
                    alt=""
                    className="w-full h-full object-contain "
                  />
                </div>
                <p className="text-xl font-bold">Clear communication</p>
              </span>
              <p className="text-xl text-[#C2C7DC]">
                Our focus: user-centric, engaging, and valuable products with
                purpose.
              </p>
            </div>
          </span>
        </div>
      </div>
      <Values />
      <Team />
      <Testimonials />
    </div>
  );
};

export default About;
