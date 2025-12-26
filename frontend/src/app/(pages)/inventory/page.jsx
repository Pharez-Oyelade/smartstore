"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/axios";
import BtnPrimary from "@/components/ui/BtnPrimary";
import { Search } from "lucide-react";
import Modal from "@/components/ui/Modal";
import ProductTable from "./components/ProductTable";

import { useForm } from "react-hook-form";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const [addProductModal, setAddProductModal] = useState(false);
  const [updateProductModal, setUpdateProductModal] = useState(false);

  const addForm = useForm({
    defaultValues: {
      name: "",
      selling_price: "",
      stock: "",
    },
  });

  const updateForm = useForm({
    defaultValues: {
      name: "",
      selling_price: "",
      stock: "",
    },
  });

  const openEditModal = (product) => {
    setSelectedProduct(product);

    updateForm.reset({
      name: product.name,
      selling_price: product.price,
      stock: product.stock,
    });

    setUpdateProductModal(true);
  };

  const onSubmit = (data) => {
    addProduct(data);
  };

  const onUpdateProduct = (data) => {
    updateProduct(data);
  };

  // Helper for status badge styling
  const getStatusStyle = (stock) => {
    if (stock <= 0) return "bg-red-50 text-red-600 border-red-100";
    if (stock < 15) return "bg-orange-50 text-orange-600 border-orange-100";
    return "bg-green-50 text-green-600 border-green-100";
  };

  const getStatusText = (stock) => {
    if (stock <= 0) return "Out of Stock";
    if (stock < 15) return "Low Stock";
    return "In Stock";
  };

  const addProduct = async (data) => {
    const payload = {
      name: data.name,
      price: parseFloat(data.selling_price),
      stock: parseInt(data.stock),
    };
    try {
      const response = await api.post("/products/create", payload);
      console.log(response);

      setAddProductModal(false);
      addForm.reset();
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (data) => {
    const payload = {
      name: data.name,
      price: Number(data.selling_price),
      stockAdjustment: Number(data.stock) - selectedProduct.stock,
    };

    try {
      const response = await api.post(
        `products/update/${selectedProduct.id}`,
        payload
      );
      console.log(response);
      setUpdateProductModal(false);
      updateForm.reset();
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await api.post(`/products/delete/${id}`);
      console.log(response);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await api.get("/products/get");
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold">Products</h1>
          <p className="text-slate-500 text-sm">
            Manage your inventory, prices, and stock levels
          </p>
        </div>
        <BtnPrimary
          onClick={() => {
            addForm.reset();
            setAddProductModal(true);
          }}
          text="Add Product"
        />
      </header>

      <div className="mt-8 flex items-center gap-4">
        <div className="flex items-center gap-3 border bg-white border-slate-200 shadow-sm px-3 py-2 rounded-lg w-[40%]">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search products"
            className="bg-transparent focus:outline-none w-full text-sm"
          />
        </div>

        <div className="border bg-white border-slate-200 shadow-sm px-3 py-2 rounded-lg flex items-center gap-2 text-sm">
          <span className="text-slate-500">Stock:</span>
          <select className="focus:outline-none bg-transparent font-medium">
            <option>All</option>
            <option>In Stock</option>
            <option>Out of Stock</option>
          </select>
        </div>
      </div>

      {/* ........ PRODUCT TABLE ............. */}
      <ProductTable
        products={products}
        getStatusStyle={getStatusStyle}
        getStatusText={getStatusText}
        deleteProduct={deleteProduct}
        openEditModal={openEditModal}
      />

      {addProductModal && (
        <Modal
          onClose={() => {
            addForm.reset();
            setAddProductModal(false);
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
                />
              </label>
              <BtnPrimary text="Add Product" />
            </form>
          </div>
        </Modal>
      )}

      {updateProductModal && (
        <Modal
          onClose={() => {
            updateForm.reset();
            setUpdateProductModal(false);
            setSelectedProduct(null);
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
              <BtnPrimary text="Update Product" />
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Page;
