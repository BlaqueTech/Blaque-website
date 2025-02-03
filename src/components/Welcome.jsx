import Hero from "../assets/hero-home.webp";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div
      id="main"
      style={{
        background: "linear-gradient(110deg, #22202B 60%, #1F1B25 60%)",
      }}
      className="grid gap-8 justify-items-center items-center py-16 mx-4 bg-gray-800 rounded-3xl md:grid-cols-2 lg:px-32 md:py-28 lg:mx-24"
    >
      <div
        id="left"
        className="flex flex-col gap-5 items-center px-4 md:justify-between md:items-start"
      >
        <p className="bg-[#1B1820] w-fit px-6 py-2 rounded-tl-full  rounded-r-full ">
          Welcome
        </p>
        <h1 className="text-4xl font-extrabold text-center md:text-left lg:text-5xl">
          {`Let's`} make your product a success
        </h1>
        <p
          className="text-lg text-center md:text-left  text-[#ADC6DD]"
          id="main-p"
        >
          Technology Resource Solutions company. Empowering businesses with
          top-tier talent to drive innovation and digital transformation..
        </p>
        <div className="flex flex-col gap-4 items-center md:flex-row">
          <Link
            to="/connect"
            className="text-[#22202B] bg-white hover:bg-[#1F1B25] hover:text-white font-medium px-7 py-4 rounded-full"
          >{`Let's get started`}</Link>
          <Link
            to="/services"
            className="relative px-10 py-4 rounded-full group lg:px-14"
          >
            <span
              className="md:absolute md:left-2 lg:left-6 top-0 h-full w-14 z-0 bg-[#1C1B23] rounded-full
            group-hover:w-36 transition-all ease-in-out"
            ></span>
            <span className="relative z-11">Learn more</span>
          </Link>
        </div>
      </div>
      <div id="right" className="">
        <img src={Hero} className="p-4 rounded-3xl" alt="" />
      </div>
    </div>
  );
};

export default Welcome;
