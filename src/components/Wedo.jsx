import bright from "../assets/bright.png";
import Code from "../assets/coding.png";
import Settings from "../assets/Settings.png";
import img1 from "../assets/grid-img-1.webp";
import img2 from "../assets/grid-img-2.webp";
import img3 from "../assets/grid-img-3.webp";

const Wedo = () => {
  return (
    <div
      id="what-we-do"
      className="bg-[#1E1A25] md:pb-72"
      style={{
        background: "linear-gradient(-8deg,#18191F 20%,  #1E1A25 0%)",
      }}
    >
      <div
        id="do-top"
        className="flex flex-col items-center md:px-16 lg:px-24 md:items-start"
      >
        <p className="bg-gradient-to-r from-[#333139] to-[#27232C] w-fit px-6 py-2 rounded-tl-2xl  rounded-r-2xl ">
          What we do
        </p>
        <div className="flex flex-col gap-6 mt-4 text-center md:text-left md:grid md:grid-cols-5">
          <p className="md:text-[54px] text-[30px] leading-9 md:leading-none font-extrabold  col-span-3">
            We empower businesses by delivering innovative digital solutions
            that enhance customer experiences.
          </p>
          <p className="md:text-[22px] text-[20px] text-[#C2C7DC] col-span-2">
            We focus on collaboration and adaptability, ensuring our services
            are aligned with industry trends and client needs.
          </p>
        </div>
      </div>

      {/**************************************************************************** */}

      <div
        id="do-bottom"
        className="flex flex-col gap-14 px-4 py-16 md:flex-row lg:px-24 h-fit"
      >
        <div id="bottom-left" className="flex flex-col gap-8">
          <div className="flex">
            <div className="flex flex-col md:flex-row items-center gap-8 py-6 px-14 md:ml-0 lg:ml-12 bg-[#22212A] rounded-[30px]">
              <img
                src={bright}
                alt=""
                className="h-14 rounded-2xl bg-[#1A1821] p-3"
              />
              <div className="text-center md:text-left">
                <p className="text-xl font-bold">AI & Intelligent Automation</p>
                <p className="text-lg text-clip">
                  We craft visually stunning, unforgettable experiences with
                  responsive design at the forefront.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col md:flex-row items-center  gap-8 py-6 px-14 md:mr-0 lg:mr-12  bg-[#22212A] rounded-[30px]">
              <img
                src={Code}
                alt=""
                className="h-14 rounded-2xl bg-[#1A1821] p-3"
              />
              <div className="text-center md:text-left">
                <p className="text-xl font-bold">
                  Development Team Augmentation
                </p>
                <p className="text-lg text-clip">
                  We excell at converting eye-catching designs into
                  high-functioning, user-friendly web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col md:flex-row items-center gap-8 py-6 px-14 md:ml-0 lg:ml-12 bg-[#22212A] rounded-[30px]">
              <img
                src={Code}
                alt=""
                className="h-14 rounded-2xl bg-[#1A1821] p-3"
              />
              <div className="text-center md:text-left">
                <p className="text-xl font-bold">App & Software Development</p>
                <p className="text-lg text-clip">
                  We excell at converting eye-catching designs into
                  high-functioning, user-friendly web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col md:flex-row items-center  gap-8 py-6 px-14 md:mr-0 lg:mr-12  bg-[#22212A] rounded-[30px]">
              <img
                src={Code}
                alt=""
                className="h-14 rounded-2xl bg-[#1A1821] p-3"
              />
              <div className="text-center md:text-left">
                <p className="text-xl font-bold">UI/UX & Ecommerce Solutions</p>
                <p className="text-lg text-clip">
                  We excell at converting eye-catching designs into
                  high-functioning, user-friendly web applications.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex  flex-col md:flex-row items-center gap-8 py-6 px-14 md:ml-0 lg:ml-12 bg-[#22212A] rounded-[30px]">
              <img
                src={Settings}
                alt=""
                className="h-14 rounded-2xl bg-[#1A1821] p-3"
              />
              <div className="text-center md:text-left">
                <p className="text-xl font-bold">Cloud & DevOps</p>
                <p className="text-lg text-clip">
                  We ensure your site remains an effective, optimized tool for
                  your business needs, goals and growth.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*********************************************************************** */}
        <div id="bottom-right" className="flex gap-3 md:gap-6">
          <div className="h-full flex-[0.5]">
            <img
              src={img1}
              alt=""
              className="object-cover h-full rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-3 md:gap-6 flex-[0.5]">
            <img
              src={img2}
              alt=""
              className="object-cover h-full rounded-2xl"
            />
            <img
              src={img3}
              alt=""
              className="object-cover h-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wedo;
