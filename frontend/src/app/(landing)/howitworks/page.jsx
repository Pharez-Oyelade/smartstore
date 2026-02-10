import Indicator from "@/components/ui/Indicator";
import React from "react";
import FeatureTools from "../components/FeatureTools";
import Image from "next/image";

import { ShoppingCart, Banknote, ClipboardPlus, ChartLine } from "lucide-react";
import ToolsGrid from "../components/ToolsGrid";
import Cta from "../components/Cta";

const page = () => {
  const tools = [
    {
      title: "1. Add Products",
      description: "Enter product details to add product to the store.",
      icon: <ClipboardPlus />,
    },
    {
      title: "2. Create a Sale",
      description: "Record orders instantly in seconds.",
      icon: <ShoppingCart />,
    },
    {
      title: "3. Manage Payment",
      description: "Accept bank transfers, cash or card payments seamlessly.",
      icon: <Banknote />,
    },
    {
      title: "4. Track Growth",
      description:
        "See your daily profit and track inventory levels automatically.",
      icon: <ChartLine />,
    },
  ];

  return (
    <section className=" bg-white">
      <div className="py-16 md:py-24 px-4 md:px-10 flex flex-col justify-center items-center max-w-4xl mx-auto text-center">
        <div>
          <Indicator text="Trusted by 500+ Nigerian Vendors" />
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-foreground">
            Simplify Your Business in{" "}
            <span className="text-accent">Minutes</span>
          </h1>
        </div>
        <div>
          <p className="text-muted text-lg max-w-3xl mx-auto">
            Manage your store with ease using our simple 4-step process.
            Designed for mobile-first businesses, perfect for managing inventory
            and sales on the go.
          </p>
        </div>
      </div>

      <div>
        <ToolsGrid tools={tools} />
      </div>

      <div className="bg-background py-20 px-4 md:px-10">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black leading-[1.1] tracking-tight text-foreground">
            Your Store at a Glance
          </h2>
          <p className="text-muted text-md max-w-3xl mx-auto">
            Everything you need to know, right on one screen
          </p>
        </div>

        <div>
          <Image
            src="/images/dashboard_mockup.png"
            alt="Dashboard"
            width={1000}
            height={1000}
            className="w-full h-auto"
          />
        </div>

        <Cta
          title="Ready to grow your business?"
          details="Join thousands of Nigerian store owners who trust Vendora to manage their daily sales."
          btnText="Get Started for Free"
          href="/pricing"
        />
      </div>
    </section>
  );
};

export default page;
