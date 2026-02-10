import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import Link from "next/link";
import FeatureTools from "../components/FeatureTools";
import WhySection from "../components/WhySection";
import Cta from "../components/Cta";

import {
  ShoppingCart,
  Archive,
  Banknote,
  ClipboardPlus,
  Users,
} from "lucide-react";

const page = () => {
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

  const toolStyles =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20";

  return (
    <div>
      <main className="relative w-full h-[calc(100vh-4rem)] py-16 md:py-24 px-4 md:px-10 overflow-hidden bg-background text-foreground">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 my-10">
          <div className="flex flex-col gap-6 lg:w-1/2 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-foreground">
              Everything you need to <span className="text-accent">sell</span>,{" "}
              <span className="text-accent">track</span>, and{" "}
              <span className="text-accent">grow</span>,
            </h1>
            <p className="text-lg text-muted max-w-xl leading-relaxed">
              Simplify your daily operations. Manage sales, inventory, and
              payments effortlessly from any device—designed specifically for
              growing businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <Link href="/pricing">
                <button className="btn-primary flex items-center justify-center font-bold text-base transition-all transform hover:scale-105">
                  Try the Dashboard
                </button>
              </Link>
              <button className="flex items-center justify-center h-[46px] px-6 rounded-lg border border-border bg-surface text-foreground font-bold text-base hover:bg-muted/10 transition-colors">
                View Demo
              </button>
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted">
              <div className="flex gap-2 items-center">
                <FaRegCircleCheck className="text-green-500" />
                <p>No credit card required</p>
              </div>
              <div className="flex gap-2 items-center">
                <FaRegCircleCheck className="text-green-500" />
                <p>Free 14-day trial</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full relative">
            <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-50 z-0"></div>
            <div className="relative z-10 w-full aspect-4/3 rounded-xl overflow-hidden shadow-2xl border border-border bg-surface group">
              <div
                className="absolute inset-0 bg-cover bg-center"
                data-alt="Modern dashboard interface on a laptop screen showing sales charts"
                style={{
                  backgroundImage: "url('/images/feature_3.jpg')",
                }}
              ></div>
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent"></div>

              {/* <div className="absolute bottom-6 left-6 right-6 bg-surface/95 backdrop-blur p-4 rounded-lg border border-border shadow-lg">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <p className="text-xs text-muted">Today's Revenue</p>
                  <p className="text-xl font-bold text-foreground">
                    ₦ 145,200.00
                  </p>
                </div>
                <div className="bg-green-500/20 text-green-600 dark:text-green-400 px-2 py-1 rounded text-xs font-bold flex items-center">
                  <span className="material-symbols-outlined text-sm mr-1">
                    trending_up
                  </span>{" "}
                  +12%
                </div>
              </div>
              <div className="w-full bg-muted/20 rounded-full h-1.5">
                <div
                  className="bg-accent h-1.5 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </main>

      {/* other sections */}
      <FeatureTools tools={tools} toolStyles={toolStyles} />
      <WhySection />
      <Cta
        title="Ready to organize your shop?"
        details="Stop using pen and paper. Switch to the modern way to manage your business today."
        btnText="Try the Dashboard"
        href="/pricing"
      />
    </div>
  );
};

export default page;
