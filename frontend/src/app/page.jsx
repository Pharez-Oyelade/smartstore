// landing page

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemCards from "@/components/ProblemCards";
import Features from "@/components/Features";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProblemCards />
      <Features />
    </div>
  );
};

export default page;
