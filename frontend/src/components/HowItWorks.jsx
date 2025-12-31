import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-20 px-40 bg-white">
      <div className="">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-2">How It Works</h2>
            <p className="text-gray-400">Get started in minutes, not days.</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-12 left-40 w-[calc(100%-20rem)] h-0.5 bg-gray-700 -z-0" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full border-4 border-sky-500 bg-[#0f172a] flex items-center justify-center text-2xl font-bold text-sky-500 mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Add your products</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Upload your items manually or via bulk import. <br /> Add
                  prices and stock quantity.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full border-4 border-sky-500 bg-[#0f172a] flex items-center justify-center text-2xl font-bold text-sky-500 mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Record sales</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tap on items to add them to cart and checkout instantly on
                  your mobile or PC.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full border-4 border-sky-500 bg-[#0f172a] flex items-center justify-center text-2xl font-bold text-sky-500 mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Track Stock & Revenue
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Watch your business grow with automatic reports on profit,
                  best sellers, and low stock.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
