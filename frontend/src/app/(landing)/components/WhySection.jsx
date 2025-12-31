import React from "react";
import { Zap, BadgeCheck, Store } from "lucide-react";

const WhySection = () => {
  return (
    <section className="py-20 px-40">
      <h2 className="text-3xl font-bold text-center">Why Vendora?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="flex flex-col gap-4 items-center text-center p-6">
          <div className="text-3xl bg-white text-blue-500 p-4 rounded-full">
            <Zap size={32} />
          </div>
          <h3 className="text-xl font-bold">Designed for speed</h3>
          <p>
            Load products and checkout in seconds. Optimized for slow internet
            connections.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center text-center p-6">
          <div className="text-3xl bg-white text-blue-500 p-4 rounded-full">
            <BadgeCheck size={32} />
          </div>
          <h3 className="text-xl font-bold">No unnecessary complexity</h3>
          <p>
            We removed the clutter. Only the buttons you need to run your shop
            efficiently.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center text-center p-6">
          <div className="text-3xl bg-white text-blue-500 p-4 rounded-full">
            <Store size={32} />
          </div>
          <h3 className="text-xl font-bold">Built for small teams</h3>
          <p>
            Perfect for solo owners or shops with a few staff members. Simple
            permission controls.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
