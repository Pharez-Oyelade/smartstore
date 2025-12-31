import React from "react";
import {
  ShoppingCart,
  Archive,
  Banknote,
  ClipboardPlus,
  Users,
} from "lucide-react";

const FeatureTools = () => {
  const tools = [
    {
      title: "Fast Sales & Checkout",
      description:
        "Create orders instantly with a simple cart system designed to get customers moving.",
      icon: <ShoppingCart />,
    },
    {
      title: "Inventory Management",
      description:
        "Track stock levels in real-time and get automated alerts before you run out of best-sellers.",
      icon: <Archive />,
    },
    {
      title: "Sales History & Reporting",
      description:
        "View daily earnings at a glance and track pending payments easily from your dashboard.",
      icon: <ClipboardPlus />,
    },
    {
      title: "Flexible Payments",
      description:
        "Accept cash now, record bank transfers, or track partial payments to collect later.",
      icon: <Banknote />,
    },
    {
      title: "Customer Records",
      description:
        "Keep track of your regulars, their purchase history, and their preferences to build loyalty.",
      icon: <Users />,
    },
  ];
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
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
          <button className="bg-white text-blue-500 px-5 py-2 rounded-xl font-bold text-lg">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeatureTools;
