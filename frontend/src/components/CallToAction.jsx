import React from "react";

const CallToAction = () => {
  return (
    <section className="w-full py-20 px-40 bg-[#F9F9F9] flex flex-col gap-5 justify-center items-center">
      <h1 className="text-5xl font-semibold">
        Ready to transform your business?
      </h1>

      <p className="text-gray-700 text-lg w-[50%] text-center">
        Join hundreds of Nigerian businesses taking control of their sales and
        inventory today. No credit card required for the demo.
      </p>

      <div className="flex gap-5">
        <button className="bg-blue-500 text-white px-10 py-5 rounded-xl">
          Get Started for Free
        </button>

        <button className="bg-transparent text-black border border-black px-10 py-5 rounded-xl">
          Learn More
        </button>
      </div>

      <p className="text-gray-600 text-sm">Free 14-day trial on all plans.</p>
    </section>
  );
};

export default CallToAction;
