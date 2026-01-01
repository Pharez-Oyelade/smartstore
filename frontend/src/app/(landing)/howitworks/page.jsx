import Indicator from "@/components/ui/Indicator";
import React from "react";

const page = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-10">
      <div className="flex flex-col justify-center items-center max-w-4xl mx-auto text-center">
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
    </section>
  );
};

export default page;
