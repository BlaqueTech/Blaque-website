import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="bg-[#18191F]   text-white  lg:px-0">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
