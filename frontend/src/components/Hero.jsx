import React from "react";
import { CirclePlay } from "lucide-react";
import Indicator from "./ui/Indicator";

const Hero = () => {
  return (
    <section className="relative w-full md:h-[calc(100vh-4rem)] py-10 md:py-24 px-4 md:px-10 overflow-hidden bg-background text-foreground">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 md:gap-12 md:my-10">
        <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-6 text-center lg:text-left lg:w-1/2 w-full z-10">
          <Indicator text="New for Nigerian Businesses" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-foreground">
            Track Sales and Inventory{" "}
            <span className="text-accent">Without Stress</span>
          </h1>
          <p className="text-lg text-muted max-w-xl leading-relaxed">
            Vendora helps small businesses record sales, manage stock, and
            accept payments, all from one simple dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-3 mt-4">
            <button className="btn-primary flex items-center justify-center font-bold text-base transition-all transform hover:scale-105">
              Request a Demo
            </button>
            <button className="flex items-center justify-center h-[46px] px-6 rounded-lg border border-border bg-surface text-foreground font-bold text-base hover:bg-muted/10 transition-colors">
              <CirclePlay className="mr-2 text-xl" />
              See How It Works
            </button>
          </div>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted">
            <div className="flex -space-x-2">
              <div
                className="w-8 h-8 rounded-full border-2 border-background bg-gray-300 bg-cover bg-center"
                data-alt="Portrait of a smiling young woman"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCp1MLiC_o6SKfmzgFRmMBOu-LcfVZ4Q3FQXjTl9I4c2OBc6OJw2GFY3t9oPbnrqdNm-hP5HodmpoPA78wsT8XyBDD_EmJ7kYkh9nBQfN29_uQGbF7SVxHW3BCGj8pOFn0Mqnsbg9OHDVHy2VQZbfVaoiSF5X1aqpJTLMcjekzzJ_KEO1nPARvjd2aSUihjOsI2Hewk4xFLd24_j_hCPTd7Y_voLZj-mns-WFaCzmr90UJgOnxKHEVw2xN_GlrEVgzTDkV2_nHf2og')",
                }}
              ></div>
              <div
                className="w-8 h-8 rounded-full border-2 border-background bg-gray-300 bg-cover bg-center"
                data-alt="Portrait of a smiling young man"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0InyNvxDAUohIc8u6ZP3ZSCM0LLi5kNDvD3F6aIBDnVP7mw41qnghgravJ7ybZWF2hK0Iz6zIS-7Host5lWV2B8gXIQvpe_LACAzmkWy-Wr56JtcU8fdiHVXdsZ0F4qxjEX90i_jgE_K8z7t1VSyJTuCqgtpddFLq8GmTYN6i6-GCSAc-ZypkdcLBOPbtf9Dr-mTcwvWzKq_7er8M78FjwUEkYD7EYmXz5O8Uuy27JKR2nkfVWvYMehVbI4n_5gKSX4pUVsUG8Cs')",
                }}
              ></div>
              <div
                className="w-8 h-8 rounded-full border-2 border-background bg-gray-300 bg-cover bg-center"
                data-alt="Portrait of a business owner"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXliMBZ8QHPUzC6NN_Yz1-ml0cuWKF4KF4kFohfcRRL3xvd_cBAEznJCzn0vybLZyV2UplJC7feDMa1lzA6_sL-RceGWDCqX0s-Rdz9wyP_JaXXZG27TTzgcQWrsvr_I74RHkaCWO-vRrZN31HCsoW5ooL99xw9mwCudUy9FnfBjnfvuEksQ5dECDea1DVxQ_VyfxNmYKkburfm2yjJSZJQ7cX1rvA1_Jyyx17kFPARdvYcipRbTBcFKt-NsvnUzuOqnBWTEz7O4o')",
                }}
              ></div>
            </div>
            <p>Trusted by 500+ local stores</p>
          </div>
        </div>

        {/* ... Right image ... */}
        <div className="w-full md:w-3/4 lg:w-1/2 relative">
          <div className="absolute -inset-4 bg-accent/20 blur-3xl rounded-full opacity-50 z-0"></div>
          <div className="relative z-10 w-full aspect-4/3 rounded-xl overflow-hidden shadow-2xl border border-border bg-surface group">
            <div
              className="absolute inset-0 bg-cover bg-center"
              data-alt="Modern dashboard interface on a laptop screen showing sales charts"
              style={{
                backgroundImage: "url('/images/feature_1.jpg')",
              }}
            ></div>
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-transparent to-transparent"></div>

            <div className="absolute bottom-6 left-6 right-6 bg-surface/95 backdrop-blur p-4 rounded-lg border border-border shadow-lg">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
