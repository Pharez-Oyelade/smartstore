"use client";

import React, { useEffect, useState } from "react";
import api from "@/lib/axios";
import BtnPrimary from "@/components/ui/BtnPrimary";
import { Search } from "lucide-react";
import Modal from "@/components/ui/Modal";
import ProductTable from "./components/ProductTable";
import InventoryLoader from "@/components/ui/InventoryLoader";

import { useForm } from "react-hook-form";
import EditModal from "./components/EditModal";
import AddModal from "./components/AddModal";

const Page = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [loading, setLoading] = useState(false);
  const [deletingProductId, setDeletingProductId] = useState(null);

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

  const deleteAlert = (product) => {
    if (window.confirm(`Are you sure you want to delete ${product.name}?`)) {
      deleteProduct(product.id);
    } else {
      return;
    }
  };

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
    setDeletingProductId(id);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const response = await api.post(`/products/delete/${id}`);
      console.log(response);
      fetchProducts();
    } catch (error) {
      console.log(error);
    } finally {
      setDeletingProductId(null);
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
      {loading ? (
        <InventoryLoader />
      ) : (
        <>
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
            deleteAlert={deleteAlert}
            deletingProductId={deletingProductId}
          />

          {addProductModal && (
            <AddModal
              onClose={() => {
                addForm.reset();
                setAddProductModal(false);
              }}
              addForm={addForm}
              onSubmit={onSubmit}
            />
          )}

          {updateProductModal && (
            <EditModal
              onClose={() => {
                updateForm.reset();
                setUpdateProductModal(false);
                setSelectedProduct(null);
              }}
              updateForm={updateForm}
              onUpdateProduct={onUpdateProduct}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Page;
