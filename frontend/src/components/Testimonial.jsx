import React from "react";
import { TrendingUp } from "lucide-react";
import { Clock4 } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { Star } from "lucide-react";
import { Quote } from "lucide-react";

const Testimonial = () => {
  return (
    <section className="py-20 px-40 flex items-center gap-10">
      <div className="w-[45%]">
        <h2 className="text-4xl font-semibold">Why Businesses Trust Vendora</h2>

        <div className="mt-10 space-y-5">
          <div className="flex items-start gap-5">
            <div className="bg-green-500/20 p-2 rounded-full">
              <TrendingUp size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Increase Profitability</h3>
              <p className="text-gray-600">
                Spot leaks and understand what sells best so you can restock
                intelligently.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="bg-blue-500/20 p-2 rounded-full">
              <Clock4 size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">Save 10+ Hours Weekly</h3>
              <p className="text-gray-600">
                Automate the boring stuff. No more late nights balancing the
                books manually.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="bg-purple-500/20 p-2 rounded-full">
              <GraduationCap size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-semibold">No Training Needed</h3>
              <p className="text-gray-600">
                So simple that your sales staff can start using it on day one
                without supervision.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* testimonial */}
      <div className="w-[45%] bg-white p-10 rounded-2xl shadow-lg space-y-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Star size={24} color="#EFBF04" />
            <Star size={24} color="#EFBF04" />
            <Star size={24} color="#EFBF04" />
            <Star size={24} color="#EFBF04" />
            <Star size={24} color="#EFBF04" />
          </div>
          <Quote size={24} />
        </div>

        <div>
          <p className="font-semibold text-lg">
            Since switching to SmartStore, I haven't lost a single Naira to
            calculation errors. It works perfectly on my phone even when the
            network is bad.
          </p>
        </div>

        <div>
          <p className="font-semibold">Sarah Adebayo</p>
          <p className="text-gray-600">Owner, Sarah's Fashion Hub, Lagos</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
