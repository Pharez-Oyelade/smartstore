import React from "react";

const InventoryLoader = ({ label = "Loading inventory..." }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-10">
      <div className="relative w-14 h-14">
        {/* Rotating box */}
        <div className="absolute inset-0 rounded-xl border-2 border-slate-300 animate-spin-slow" />

        {/* Inventory bars */}
        <div className="absolute inset-2 flex items-end justify-center gap-1">
          <span className="w-2 bg-slate-700 rounded-sm animate-pulse-fast h-4" />
          <span className="w-2 bg-slate-700 rounded-sm animate-pulse-medium h-6" />
          <span className="w-2 bg-slate-700 rounded-sm animate-pulse-slow h-5" />
        </div>
      </div>

      <p className="text-sm text-slate-500 font-medium">{label}</p>
    </div>
  );
};

export default InventoryLoader;
