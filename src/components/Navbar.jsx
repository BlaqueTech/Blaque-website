import { useState } from "react";
import { ROUTES } from "../routes";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const nav_links = [
    { name: "Home", link: ROUTES.HOME },
    { name: "Services", link: ROUTES.SERVICES },
    { name: "About", link: ROUTES.ABOUT },
    { name: "Work", link: ROUTES.WORK },
    { name: "Case study", link: ROUTES.CASE },
  ];
  let [open, setOpen] = useState(false);
  return (
    <nav className="top-0 left-0 w-full  lg:px-32 md:py-6">
      <div className="justify-between px-7 py-4 md:flex lg:px-10">
        <div className="flex items-center text-2xl font-bold cursor-pointer">
          <p className="text-2xl font-extrabold">
            Blaque - <span className="text-[#C3C7DD]">tech</span>
          </p>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="flex flex-col justify-between items-center md:flex-row"
        >
          <div className="absolute top-6 right-8 z-20 text-3xl cursor-pointer md:hidden">
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`w-full h-screen md:h-auto flex flex-col md:flex-row justify-center items-center absolute md:static md:bg-transparent bg-[#1A1921] md:z-auto z-[11] md:items-center md:justify-between
           gap-12 md:gap-36 transition-all duration-500 ease-in-out ${
             open ? "top-0" : "top-[-1000px]"
           }`}
          >
            <span className="flex flex-col gap-14 justify-center md:flex-row md:gap-8">
              {nav_links.map((link) => (
                <li
                  key={link.name}
                  className="flex items-center justify-center md:my-0  text-2xl md:text-lg font-medium text-[#C3C7DD]"
                >
                  <NavLink
                    to={link.link}
                    className={({ isActive }) =>
                      `${
                        isActive ? "bg-[#22202B] px-4 py-1 rounded-full" : ""
                      }hover:bg-[#22202B] px-4 py-1 rounded-full`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </span>
            <Link
              to="/connect"
              className="text-2xl md:text-lg bg-white hover:bg-[#22202B] hover:text-white transition-all text-[#18191F] md:px-8 px-12 md:py-2 py-4 rounded-full font-medium"
            >
              {`Let's`} talk
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
