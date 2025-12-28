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
      <div className="mt-8 overflow-hidden border border-border rounded-xl bg-surface color-foreground  shadow-sm">
        <table className="w-full border-collapse">
          <thead className="bg-surface">
            <tr className="border-b border-border text-muted uppercase text-[11px] font-semibold tracking-wider">
              <th className="px-6 py-4 text-left">Product Name</th>
              <th className="px-6 py-4 text-left">Category</th>
              <th className="px-6 py-4 text-left">Price (₦)</th>
              <th className="px-6 py-4 text-left">Stock Level</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface">
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
                  className="hover:bg-slate-50/20 transition-colors border-b border-border"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-surface flex items-center justify-center text-muted border border-border">
                        <Package size={20} />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-sm">
                          {product.name}
                        </div>
                        <div className="text-xs text-muted uppercase tracking-tight">
                          SKU: {product.sku || "N/A"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-muted">
                    {product.category || "General"}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-foreground">
                    ₦{Number(product.price).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-sm text-muted">
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
                      className="text-muted hover:text-foreground cursor-pointer"
                      title="Edit"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => deleteAlert(product)}
                      className="text-muted hover:text-foreground cursor-pointer"
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
