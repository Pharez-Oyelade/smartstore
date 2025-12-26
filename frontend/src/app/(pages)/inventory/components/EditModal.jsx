import React from "react";
import Modal from "@/components/ui/Modal";
import BtnPrimary from "@/components/ui/BtnPrimary";

const EditModal = ({ onClose, updateForm, onUpdateProduct }) => {
  return (
    <div>
      <Modal
        onClose={() => {
          updateForm.reset();
          onClose();
        }}
        closeText="Back to Inventory"
      >
        <div className="flex gap-20 mt-10">
          <h2 className="text-2xl font-bold">Update Product</h2>

          <form
            onSubmit={updateForm.handleSubmit(onUpdateProduct)}
            action=""
            className="flex flex-col gap-4 w-[60%] bg-white p-6 rounded-lg shadow-lg border  border-slate-200"
          >
            <label htmlFor="" className="flex flex-col gap-2">
              <span className="text-black text-sm">Product Name</span>
              <input
                type="text"
                placeholder="Product Name"
                className="border border-slate-200 rounded-lg px-3 py-2"
                {...updateForm.register("name")}
              />
            </label>

            <label htmlFor="" className="flex flex-col gap-2">
              <span className="text-black text-sm">Product Description</span>
              <input
                type="text"
                placeholder="Product Description"
                className="border border-slate-200 rounded-lg px-3 py-2"
              />
            </label>

            <div className="flex gap-4">
              <label htmlFor="" className="flex flex-col gap-2">
                <span className="text-black text-sm">Selling Price</span>
                <input
                  type="number"
                  placeholder="Product Price"
                  className="border border-slate-200 rounded-lg px-3 py-2 w-full"
                  {...updateForm.register("selling_price", {
                    valueAsNumber: true,
                  })}
                />
              </label>
              <label htmlFor="" className="flex flex-col gap-2">
                <span className="text-black text-sm">Cost Price</span>
                <input
                  type="text"
                  placeholder="Product Price"
                  className="border border-slate-200 rounded-lg px-3 py-2 w-full"
                />
              </label>
            </div>

            <label htmlFor="" className="flex flex-col gap-2">
              <span className="text-black text-sm">Product Stock</span>
              <div className="flex gap-4">
                <span className="border border-slate-200 rounded px-5 py-2 bg-gray-200">
                  +
                </span>
                <input
                  type="number"
                  placeholder="Stock"
                  className="border border-slate-200 rounded px-5 py-2 w-[30%]"
                  {...updateForm.register("stock", { valueAsNumber: true })}
                />
                <span className="border border-slate-200 rounded px-5 py-2 bg-gray-200">
                  -
                </span>
              </div>
            </label>

            <label htmlFor="" className="flex flex-col gap-2">
              <span className="text-black text-sm">Product Category</span>
              <input
                type="text"
                placeholder="Product Category"
                className="border border-slate-200 rounded-lg px-3 py-2"
              />
            </label>
            <BtnPrimary text="Update Product" type="submit" />
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditModal;
