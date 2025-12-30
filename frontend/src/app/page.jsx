// landing page

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemCards from "@/components/ProblemCards";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProblemCards />
    </div>
  );
};

export default page;
