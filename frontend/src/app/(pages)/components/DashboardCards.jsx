import React from "react";

const DashboardCards = ({
  header1,
  value1,
  header2,
  value2,
  header3,
  value3,
  text1,
  text2,
  text3,
  icon1,
  icon2,
  icon3,
}) => {
  return (
    <div className=" mt-8 flex items-center justify-between">
      <div className="bg-white p-6 rounded-lg w-[30%] flex flex-col gap-2 shadow-md">
        <div className="flex items-center justify-between">
          <p className="text-md font-base text-slate-500">{header1}</p>
          <div className="bg-green-500/10 text-green-700 p-2 rounded-full">
            {icon1}
          </div>
        </div>
        <p className="text-3xl font-bold">₦ {value1}</p>
        <p className="text-sm text-slate-500">{text1}</p>
      </div>
      <div className="bg-white p-6 rounded-lg w-[30%] flex flex-col gap-2 shadow-md">
        <div className="flex items-center justify-between">
          <p className="text-md font-base text-slate-500">{header2}</p>
          <div className="bg-blue-500/10 text-blue-700 p-2 rounded-full">
            {icon2}
          </div>
        </div>
        <p className="text-3xl font-bold">₦ {value2}</p>
        <p className="text-sm text-slate-500">{text2}</p>
      </div>
      <div className="bg-white p-6 rounded-lg w-[30%] flex flex-col gap-2 shadow-md">
        <div className="flex items-center justify-between">
          <p className="text-md font-base text-slate-500">{header3}</p>
          <div className="bg-red-500/10 text-red-700 p-2 rounded-full">
            {icon3}
          </div>
        </div>
        <p className="text-3xl font-bold">{value3}</p>
        <p className="text-sm text-slate-500">{text3}</p>
      </div>
    </div>
  );
};

export default DashboardCards;
