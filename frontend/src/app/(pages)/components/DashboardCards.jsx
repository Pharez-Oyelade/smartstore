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
}) => {
  return (
    <div className=" mt-8 flex items-center justify-between">
      <div className="bg-white p-6 rounded-lg w-[30%] flex flex-col gap-2 shadow-md">
        <p>{header1}</p>
        <p className="text-3xl font-bold">₦ {value1}</p>
        <p className="text-sm text-slate-500">{text1}</p>
      </div>
      <div className="bg-white p-6 rounded-lg w-[30%] flex flex-col gap-2 shadow-md">
        <p>{header2}</p>
        <p className="text-3xl font-bold">₦ {value2}</p>
        <p className="text-sm text-slate-500">{text2}</p>
      </div>
      <div className="bg-white p-6 rounded-lg w-[30%] flex flex-col gap-2 shadow-md">
        <p>{header3}</p>
        <p className="text-3xl font-bold">{value3}</p>
        <p className="text-sm text-slate-500">{text3}</p>
      </div>
    </div>
  );
};

export default DashboardCards;
