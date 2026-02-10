import React from "react";
import Link from "next/link";

const FeatureTools = ({ tools, toolStyles }) => {
  return (
    <section className="bg-white px-40 py-20">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-4xl font-bold">
          Tools designed for real business needs
        </h1>
        <p className="text-lg text-muted max-w-xl text-center">
          We focus on what matters: making sales fast and tracking your stock
          accurately without the headache.
        </p>
      </div>

      {/* Tools grid */}
      <div className={toolStyles}>
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-5 bg-blue-500/5 p-6 rounded-xl h-[200px]"
          >
            <div className="flex items-center gap-2 bg-blue-500/10 text-blue-500 p-2 rounded-xl">
              {tool.icon}
            </div>
            <h2 className="text-lg font-bold">{tool.title}</h2>
            <p className="text-muted">{tool.description}</p>
          </div>
        ))}
        <div className="flex flex-col justify-center gap-2 bg-blue-500 text-white px-5 rounded-xl h-[200px] text-center">
          <h4 className="text-2xl font-bold">Ready to start?</h4>
          <p>Join hundereds of store owners simplifying their business today</p>
          <Link href="/pricing">
            <button className="bg-white text-blue-500 px-5 py-2 rounded-xl font-bold text-lg w-full hover:scale-[1.05] transition-all cursor-pointer">
              Get Started Free
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureTools;
