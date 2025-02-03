import React from "react";

import Welcome from "../components/Welcome";
import Partners from "../components/Partners";
import Wedo from "../components/Wedo";
import Process from "../components/Process";
import Work from "../components/Work";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Welcome />
      <Partners />
      <Wedo />
      <Process />
      <Work />
      <Testimonials />
    </>
  );
};

export default Home;
