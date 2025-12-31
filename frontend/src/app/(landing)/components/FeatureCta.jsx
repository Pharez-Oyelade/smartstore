import React from "react";

const FeatureCta = () => {
  return (
    <div className="flex flex-col gap-5 items-center text-center py-20 bg-white">
      <h2 className="text-5xl font-bold">Ready to organize your shop?</h2>
      <p className="text-xl text-muted">
        Stop using pen and paper. Switch to the modern way to manage your
        business today.
      </p>
      <button className="bg-accent text-white px-10 py-5 rounded-xl flex items-center justify-center font-bold text-base transition-all transform hover:scale-105">
        Try the Dashboard
      </button>
      <p className="text-sm text-muted">
        Free for 14 days. No credit card required.
      </p>
    </div>
  );
};

export default FeatureCta;
