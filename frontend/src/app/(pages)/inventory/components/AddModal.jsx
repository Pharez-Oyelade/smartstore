import React from "react";
import Modal from "@/components/ui/Modal";
import BtnPrimary from "@/components/ui/BtnPrimary";

const AddModal = ({ onClose, addForm, onSubmit, addLoading }) => {
  return (
    <div>
      <Modal
        onClose={() => {
          onClose();
        }}
        closeText="Bact to Inventory"
      >
        <div className="flex gap-20 mt-10">
          <h2 className="text-2xl font-bold">Add New Product</h2>

          <form
            onSubmit={addForm.handleSubmit(onSubmit)}
            action=""
            className="flex flex-col gap-4 w-[60%] bg-white p-6 rounded-lg shadow-lg border  border-slate-200"
          >
            <label htmlFor="" className="flex flex-col gap-2">
              <span className="text-black text-sm">Product Name</span>
              <input
                type="text"
                placeholder="Product Name"
                className="border border-slate-200 rounded-lg px-3 py-2"
                {...addForm.register("name")}
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
                  {...addForm.register("selling_price", {
                    valueAsNumber: true,
                  })}
                />
              </label>
              <label htmlFor="" className="flex flex-col gap-2">
                <span className="text-black text-sm">Cost Price</span>
                <input
                  type="number"
                  placeholder="Product Price"
                  className="border border-slate-200 rounded-lg px-3 py-2 w-full"
                  {...addForm.register("cost", {
                    valueAsNumber: true,
                  })}
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
                  {...addForm.register("stock", { valueAsNumber: true })}
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
                {...addForm.register("category")}
              />
            </label>
            {addLoading ? (
              <BtnPrimary text="Adding..." type="submit" disabled />
            ) : (
              <BtnPrimary text="Add Product" type="submit" />
            )}
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddModal;
