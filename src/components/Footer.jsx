import Insta from "../assets/instagram.png";
import FB from "../assets/facebook 1.png";
import Twitter from "../assets/twitter.png";
const Footer = () => {
  return (
    <footer className="grid justify-between gap-8 px-4 py-12 md:grid-cols-4 md:gap-24 md:px-28">
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-extrabold">
          Blaque <span className="text-[#C3C7DD]">Tech </span>
        </p>
        <p className="text-xl text-[#C3C7DD]">
          © 2025 Blaque Tech. <br /> All rights reserved.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <p className="text-xl font-bold">Get in touch</p>
          <p className="text-xl text-[#C3C7DD]">
            109 13th Street, Orange Grove Johannesburg
          </p>
        </div>
        <p className="text-[#C3C7DD]">
          {" "}
          +27 69 415 9494 innovate@blaquetech.dev
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold">Company</p>
        <div className="flex flex-col justify-bewteen text-[#C3C7DD]">
          <a href="" className="text-lg">
            Home
          </a>
          <a href="" className="text-lg">
            Services
          </a>
          <a href="" className="text-lg">
            About
          </a>
          <a href="" className="text-lg">
            Work
          </a>
          <a href="" className="text-lg">
            Contact Us
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xl font-bold">Follow us on social media</p>
        <p className="text-lg text-[#C3C7DD]">
          Stay connected and updated on our latest projects.
        </p>
        <div className="flex gap-2">
          <a href="" className="h-12 bg-[#22212A]  rounded-full w-12 p-2">
            <img src={Insta} alt="" className="object-contain w-full h-full" />
          </a>
          <a href="" className="h-12 bg-[#22212A]  rounded-full w-12 p-2">
            <img src={FB} alt="" className="object-contain w-full h-full" />
          </a>
          <a href="" className="h-12 bg-[#22212A]  rounded-full w-12 p-2">
            <img
              src={Twitter}
              alt=""
              className="object-contain w-full h-full"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
