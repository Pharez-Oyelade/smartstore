// landing page

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemCards from "@/components/ProblemCards";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProblemCards />
      <Features />
      <HowItWorks />
    </div>
  );
};

export default page;
