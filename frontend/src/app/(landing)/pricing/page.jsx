"use client";

import React, { useState } from "react";
import Switch from "react-switch";
import { Check } from "lucide-react";
import { MdCurrencyExchange } from "react-icons/md";
import { GoXCircle } from "react-icons/go";
import { FaShieldHalved } from "react-icons/fa6";

const page = () => {
  const [checked, setChecked] = useState(false);
  const [status, setStatus] = useState(null);

  const formatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const pricingList = [
    {
      title: "Free Starter",
      description: "For solo vendors just starting out",
      price: 0,
      yearlyPrice: 0,
      features: [
        "Create & manage sales",
        "Basic inventory tracking",
        "Sales history",
      ],
    },
    {
      title: "Standard",
      description: "For growing shops with daily sales",
      price: 2500,
      yearlyPrice: 24000,
      features: [
        "Everything in Starter",
        "Pending payment tracking",
        "Multiple payment methods",
        "SMS receipts",
      ],
    },
    {
      title: "Business",
      description: "For multi-store businesses",
      price: 5000,
      yearlyPrice: 48000,
      features: [
        "Everything in Standard",
        "User roles & permissions",
        "Advanced analytics",
        "Priority support",
      ],
    },
  ];

  const handleChange = () => {
    setChecked(!checked);
    setStatus(checked ? "Yearly" : "Monthly");
  };

  return (
    <main>
      <div className="max-w-2xl mx-auto flex flex-col items-center gap-4 mt-20 text-center">
        <h1 className="text-5xl font-black tracking-tighter text-foreground">
          Simple pricing that grows with your business
        </h1>
        <p className="text-lg text-muted max-w-xl leading-relaxed">
          Transparent costs. No hidden fees. Start for free today and upgrade as
          you scale.
        </p>

        {/* switch */}
        <label htmlFor="" className="flex items-center gap-2">
          <span
            className={`${!checked ? "text-accent font-bold" : "text-muted"}`}
          >
            Monthly
          </span>
          <Switch
            onChange={handleChange}
            checked={checked}
            uncheckedIcon={false}
            checkedIcon={false}
            onColor="#0000ff"
          />
          <span
            className={`${checked ? "text-accent font-bold" : "text-muted"}`}
          >
            Yearly (Save 20%)
          </span>
        </label>
      </div>

      {/* pricing cards */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pricingList.map((pl) => (
            <div
              key={pl.title}
              className={`bg-white ${
                pl.title === "Standard"
                  ? "border-accent border-2"
                  : "border-border border"
              } rounded-lg p-6 h-[400px] shadow-lg hover:shadow-xl transition-all relative space-y-6`}
            >
              {pl.title === "Standard" && (
                <div className="absolute -top-4 z-10 left-1/2 -translate-x-1/2 bg-accent px-4 py-2 rounded-full text-xs font-bold text-white">
                  Most Popular
                </div>
              )}
              <div>
                <h1 className="text-xl font-bold">{pl.title}</h1>
                <p className="text-muted text-sm">{pl.description}</p>
              </div>

              <div>
                <p className="text-4xl font-bold">
                  {formatter.format(checked ? pl.yearlyPrice : pl.price)}
                  <span className="text-muted text-sm font-normal">
                    /{checked ? "year" : "month"}
                  </span>
                </p>
              </div>

              <button
                className={`${
                  pl.title === "Standard"
                    ? "btn-primary"
                    : "bg-background py-3 rounded-2xl cursor-pointer"
                } w-full`}
              >
                {pl.title === "Free Starter"
                  ? "Get Started"
                  : "Start Free Trial"}
              </button>

              <div className="flex flex-col gap-3">
                {pl.features.map((feature, index) => (
                  <div key={index} className="flex gap-2 text-sm">
                    <Check className="w-5 h-5 text-accent" />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* pricing features */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col items-start gap-3 bg-white border border-border hover:border-accent transition-all p-6 rounded-lg h-[220px]">
            <div className="bg-accent/20 p-2 rounded-full">
              <MdCurrencyExchange className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-lg font-bold">No Setup Fees</h1>
            <p className="text-muted text-md">
              Get started instantly without any upfront costs. Sign up, and
              start selling.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 bg-white border border-border hover:border-accent transition-all p-6 rounded-lg h-[220px]">
            <div className="bg-accent/20 p-2 rounded-full">
              <GoXCircle className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-lg font-bold">Cancel Anytime</h1>
            <p className="text-muted text-md">
              No long-term contracts. You remain in control of your subscription
              at all times.
            </p>
          </div>

          <div className="flex flex-col items-start gap-3 bg-white border border-border hover:border-accent transition-all p-6 rounded-lg h-[220px]">
            <div className="bg-accent/20 p-2 rounded-full">
              <FaShieldHalved className="w-8 h-8 text-accent" />
            </div>
            <h1 className="text-lg font-bold">Secure Data</h1>
            <p className="text-muted text-md">
              Bank-grade security to keep your business data and sales history
              safe and private.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
