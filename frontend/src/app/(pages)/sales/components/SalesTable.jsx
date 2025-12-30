import React from "react";
import { CreditCard, FileText } from "lucide-react";

const SalesTable = ({ sales, paySale }) => {
  const getStatusStyle = (status) => {
    if (status === "PENDING")
      return "bg-orange-50 text-orange-600 border-orange-100";
    if (status === "COMPLETED")
      return "bg-green-50 text-green-600 border-green-100";
    return "bg-slate-50 text-slate-600 border-slate-100";
  };

  const getStatusText = (status) => {
    return status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
  };

  return (
    <div>
      <div className="mt-8 overflow-hidden border border-border rounded-xl bg-surface color-foreground shadow-sm">
        <table className="w-full border-collapse">
          <thead className="bg-surface">
            <tr className="border-b border-border text-muted uppercase text-[11px] font-semibold tracking-wider">
              <th className="px-6 py-4 text-left">Sale ID</th>
              <th className="px-6 py-4 text-left">Payment Method</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Amount (₦)</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface">
            {sales.map((sale) => (
              <tr
                key={sale.id}
                className="hover:bg-slate-50/20 transition-colors border-b border-border"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-muted border border-border">
                      <FileText size={20} />
                    </div>
                    <div className="font-semibold text-foreground text-sm">
                      #{sale.id}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <CreditCard size={16} />
                    {sale.paymentMethod}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-[11px] font-bold border ${getStatusStyle(
                      sale.paymentStatus
                    )}`}
                  >
                    {getStatusText(sale.paymentStatus)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-foreground">
                  ₦{sale.totalAmount.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-muted">
                  {new Date(sale.createdAt).toLocaleDateString("en-GB")}
                </td>
                <td className="px-6 py-4">
                  {(sale.paymentStatus === "PENDING" ||
                    sale.paymentStatus === "UNPAID") && (
                    <button
                      onClick={() => paySale(sale.id)}
                      className="bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Mark as Paid (Cash)
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {sales.length === 0 && (
          <div className="p-8 text-center text-muted">No sales found</div>
        )}
      </div>
    </div>
  );
};

export default SalesTable;
