import img1 from "../assets/team.webp";
import img2 from "../assets/values.webp";
import img5 from "../assets/handbook.webp";
import img3 from "../assets/security.png";
import img4 from "../assets/bright.png";
import img6 from "../assets/person.png";
import img7 from "../assets/telephone.png";
import Values from "../components/Values";
import Something from "../components/Something";

const About = () => {
  return (
    <div>
      <div
        style={{
          background: "linear-gradient(4deg,#1E1A25 10%, #18191F 0%)",
        }}
        id="top"
        className="flex flex-col items-center gap-12 pb-52"
      >
        <div className="flex flex-col items-center gap-4">
          <p className="bg-gradient-to-r from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
            About us
          </p>
          <p className="px-4 text-4xl font-bold text-center md:text-6xl lg:px-80">
            A small creative team excited to create beautiful things
          </p>
          <p className="text-xl text-[#C2C7DC] mx-16 lg:mx-96 text-center">
            We empower businesses with innovative digital solutions that drive
            growth, enhance customer experiences, and streamline operations.
          </p>
        </div>
        <img
          src={img1}
          alt=""
          className="object-cover px-4 rounded-3xl lg:px-0"
        />
      </div>

      {/****************Vision****************** */}

      <div className="bg-[#1E1A25] flex flex-col md:flex-row gap-14 items-center px-4 md:px-28 py-12 ">
        <div className="flex flex-col justify-between gap-10">
          <p className="bg-gradient-to-r from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
            Our vision
          </p>
          <p className="text-4xl font-bold md:text-6xl ">
            We believe in the power of creative ideas
          </p>
          <p className="text-2xl text-[#C2C7DC]">
            By combining cutting-edge technology with top-tier talent, we help
            businesses stay ahead of the curve, create scalable platforms, and
            achieve long-term success in a rapidly evolving digital world.
          </p>

          {/***************************** */}

          <span className="flex flex-col md:flex-row">
            <div>
              <span className="flex items-center gap-4">
                <img
                  src={img3}
                  alt=""
                  className="h-12 p-2 rounded-full bg-gradient-to-r from-[#333139] to-[#27232C]"
                />
                <p className="text-xl font-bold">Custom Solutions</p>
              </span>
              <p className="text-xl text-[#C2C7DC]">
                Tailored services that meet specific client requirements.
              </p>
            </div>
            <div>
              <span className="flex items-center gap-4">
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
        className="flex flex-col items-center px-4 pt-12 pb-24 md:flex-row gap-14 md:px-28 "
      >
        <div className="order-2 md:order-1">
          <img src={img5} alt="" className="rounded-3xl" />
        </div>
        <div className="flex flex-col justify-between order-1 gap-10 md:order-2">
          <p className="bg-gradient-to-r from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
            Our handbook
          </p>
          <p className="text-4xl font-bold md:text-6xl ">
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
              <span className="flex items-center gap-6">
                <div
                  href=""
                  className="h-12 bg-[#22212A]  rounded-2xl w-12 p-2"
                >
                  <img
                    src={img6}
                    alt=""
                    className="object-contain w-full h-full "
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
              <span className="flex items-center gap-6">
                <div
                  href=""
                  className="h-12 bg-[#22212A]  rounded-2xl w-12 p-2"
                >
                  <img
                    src={img7}
                    alt=""
                    className="object-contain w-full h-full "
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
      {/* <Team />
      <Testimonials /> */}
      <Something />
    </div>
  );
};

export default About;
