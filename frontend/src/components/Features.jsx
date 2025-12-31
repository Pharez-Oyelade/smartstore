import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BookCheck } from "lucide-react";
import { ClipboardCheck } from "lucide-react";
import { CreditCard } from "lucide-react";
import Image from "next/image";

const Features = () => {
  return (
    <section className="p-40 h-screen">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold w-[45%]">
          Everything You Need to Run Your Store
        </h1>
        <div className="flex justify-between items-end">
          <p className="text-lg text-muted w-[45%]">
            Simple tools designed specifically for vendors and shop owners. No
            technical skills required.
          </p>
          <div className="flex items-center gap-2 text-blue-700 font-bold text-lg">
            <Link href="/features">View all features</Link>
            <ArrowRight />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        <div className="flex flex-col overflow-hidden h-[45vh] relative rounded-2xl">
          <Image
            src="/images/feature_1.jpg"
            alt=""
            height={400}
            width={400}
            className="w-full object-cover hover:scale-110 transition-all duration-300"
          />
          <div className="flex flex-col gap-2 items-start bg-white absolute top-[25%] translate-y-[25%] w-full h-full p-5">
            <div className="text-blue-700 text-2xl bg-blue-700/20 rounded-full p-3">
              <BookCheck className=" w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Simple Sales Recording</h2>
            <p className="text-muted">
              Record a sale in seconds with just a few taps. It's faster than
              writing it down.
            </p>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden h-[45vh] relative rounded-2xl">
          <Image
            src="/images/feature_2.jpg"
            alt=""
            height={400}
            width={400}
            className="w-full object-cover hover:scale-110 transition-all duration-300"
          />
          <div className="flex flex-col gap-2 items-start bg-white absolute top-[25%] translate-y-[25%] w-full h-full p-5">
            <div className="text-blue-700 text-2xl bg-blue-700/20 rounded-full p-3">
              <ClipboardCheck className=" w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Real-time Inventory</h2>
            <p className="text-muted">
              Stock levels update automatically as you sell. Get low stock
              alerts before you run out.
            </p>
          </div>
        </div>

        <div className="flex flex-col overflow-hidden h-[45vh] relative rounded-2xl">
          <Image
            src="/images/feature_3.jpg"
            alt=""
            height={400}
            width={400}
            className="w-full object-cover hover:scale-110 transition-all duration-300"
          />
          <div className="flex flex-col gap-2 items-start bg-white absolute top-[25%] translate-y-[25%] w-full h-full p-5">
            <div className="text-blue-700 text-2xl bg-blue-700/20 rounded-full p-3">
              <CreditCard className=" w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold">Flexible Payments</h2>
            <p className="text-muted">
              Accept Cash, Transfer, or Paystack seamlessly. Reconcile your
              daily earnings easily.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
