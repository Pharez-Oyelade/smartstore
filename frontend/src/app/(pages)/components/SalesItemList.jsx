import React from "react";

const SalesItemList = ({ salesItems }) => {
  return (
    <div className="bg-white rounded-lg border-border w-[30%] mt-8">
      <div className="flex justify-between items-center border-b border-border px-4 py-3">
        <h2 className="text-lg font-semibold">Recent Sales</h2>
        <button className="text-blue-400">View All</button>
      </div>

      <div className="flex justify-between items-center text-slate-500 text-xs font-bold px-4 py-3">
        <p>PRODUCT</p>
        <p>AMOUNT</p>
      </div>

      {/* <div className="px-4">
        {salesItems.map((items) =>
          items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-4 border-b border-border"
            >
              <p className="text-sm">{item.productName}</p>
              <p className="text-sm font-bold">
                ₦ {item.unitPrice.toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div> */}
      <div className="px-4">
        {salesItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center py-4 border-b border-border"
          >
            <span>{item.productName}</span>
            <span>₦{item.unitPrice}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesItemList;
