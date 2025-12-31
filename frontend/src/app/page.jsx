// landing page

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemCards from "@/components/ProblemCards";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Testimonial from "@/components/Testimonial";
import CallToAction from "@/components/CallToAction";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProblemCards />
      <Features />
      <HowItWorks />
      <Testimonial />
      <CallToAction />
    </div>
  );
};

export default page;
