import React from "react";
import { Package, MoreVertical, Pencil, Trash2 } from "lucide-react";

const ProductTable = ({
  products,
  getStatusStyle,
  getStatusText,
  deleteProduct,
  openEditModal,
  deleteAlert,
  deletingProductId,
}) => {
  return (
    <div>
      <div className="mt-8 overflow-hidden border border-slate-200 rounded-xl bg-white shadow-sm">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr className="border-b border-slate-100 text-slate-400 uppercase text-[11px] font-semibold tracking-wider">
              <th className="px-6 py-4 text-left">Product Name</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Price (₦)</th>
              <th className="px-6 py-4 text-left">Stock Level</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {products.map((product) => {
              const isDeleting = deletingProductId === product.id;

              if (isDeleting) {
                return (
                  <tr key={product.id} className="bg-red-50 animate-pulse">
                    <td colSpan={6} className="px-6 py-6">
                      <div className="flex justify-center items-center gap-4 text-red-700 font-semibold">
                        <div className="w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                        Deleting <span className="italic">{product.name}</span>…
                      </div>
                    </td>
                  </tr>
                );
              }

              return (
                <tr
                  key={product.id}
                  className="hover:bg-slate-50/50 transition-colors border-b border-slate-100"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400 border border-slate-200">
                        <Package size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-700 text-sm">
                          {product.name}
                        </div>
                        <div className="text-xs text-slate-400 uppercase tracking-tight">
                          SKU: {product.sku || "N/A"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {product.category || "General"}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-slate-700">
                    ₦{Number(product.price).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">
                    {product.stock} Units
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-bold border ${getStatusStyle(
                        product.stock
                      )}`}
                    >
                      {getStatusText(product.stock)}
                    </span>
                  </td>
                  <td className="px-6 py-8 text-right flex gap-3 justify-end items-center">
                    <button
                      onClick={() => openEditModal(product)}
                      className="text-slate-400 hover:text-slate-600 cursor-pointer"
                      title="Edit"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => deleteAlert(product)}
                      className="text-slate-400 hover:text-slate-600 cursor-pointer"
                      title="Delete"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
