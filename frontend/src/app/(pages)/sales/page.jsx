"use client";

import Title from "@/components/ui/Title";
import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import api from "@/lib/axios";
import SalesTable from "./components/SalesTable";

const page = () => {
  // get products when create sale is selected - ui chnages from sale history to create sale - products displayed in grid in the create sale page with add to cart button and the cart is displayed in the right side of the page
  const {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    increaseQty,
    decreaseQty,
    subtotal,
    itemCount,
  } = useCart();

  const [products, setProducts] = useState([]);
  const [createSale, setCreateSale] = useState(false);
  const [sales, setSales] = useState([]);

  const getProducts = async () => {
    const response = await api.get("/products/get");
    setProducts(response.data.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const checkout = async () => {
    const response = await api.post("/sales/create", {
      items: cart,
      paymentMethod: "cash",
    });
    console.log(response.data);
    clearCart();
    getSales();
  };

  const getSales = async () => {
    try {
      const response = await api.get("/sales/get");
      setSales(response.data.sales);
    } catch (error) {
      console.error("Failed to fetch sales:", error);
    }
  };

  useEffect(() => {
    getSales();
  }, []);

  const paySale = async (saleId) => {
    try {
      const res = await api.post(`/sales/${saleId}/pay`, {
        paymentMethod: "CASH",
      });

      console.log(res.data);
      getSales(); // refresh sales list
    } catch (err) {
      console.error("Payment failed", err);
    }
  };

  // get total pending payments, if sale.paymentStatus === "pending" then add sale.totalAmount to totalPendingPayments
  // const totalPendingPayments = sales.reduce((total, sale) => {
  //   if (sale.paymentStatus === "pending") {
  //     return total + sale.totalAmount;
  //   }
  //   return total;
  // }, 0);

  const totalPendingPayments = sales.reduce((sum, sale) => {
    if (sale.isPending) {
      return sum + sale.totalAmount;
    }
    return sum;
  }, 0);

  const totalRevenue = sales.reduce((sum, sale) => {
    return sum + sale.totalAmount;
  }, 0);

  return (
    <div className="p-4">
      <Title
        header={createSale ? "Create Sale" : "Sales History"}
        description={
          createSale
            ? "create a new sale"
            : "view and manage your transaction records and payments"
        }
        text={createSale ? "Create Sale" : "New Sale"}
        onClick={() => setCreateSale(!createSale)}
      />

      {/*page shows total revenue, pending payments and total sales  */}

      {!createSale && (
        <div className=" mt-8 flex items-center justify-between">
          <div className="bg-white p-6 rounded-lg w-[30%] flex flex-col gap-2 shadow-md">
            <p>Total Revenue </p>
            <p className="text-3xl font-bold">
              ₦ {totalRevenue.toLocaleString()}
            </p>
            <p className="text-sm text-slate-500">{sales.length} sales</p>
          </div>
          <div className="bg-white p-6 rounded-lg w-[30%] flex flex-col gap-2 shadow-md">
            <p>Pending Payments</p>
            <p className="text-3xl font-bold">
              ₦ {totalPendingPayments.toLocaleString()}
            </p>
            <p className="text-sm text-slate-500">
              {sales.filter((sale) => sale.isPending).length} invoices pending
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg w-[30%] flex flex-col gap-2 shadow-md">
            <p>Total Sales</p>
            <p className="text-3xl font-bold">{sales.length}</p>
            <p className="text-sm text-slate-500">
              {sales.filter((sale) => sale.isPaid).length} invoices paid
            </p>
          </div>
        </div>
      )}
      <div className=" mt-8">
        {!createSale && <SalesTable sales={sales} paySale={paySale} />}

        <div>
          {createSale && (
            <div className={cart.length > 0 ? "w-[70%]" : "w-full"}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border border-slate-200 rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover mb-4"
                    />
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    {/* <p className="text-sm text-slate-600 mb-2">
                      {product.description}
                    </p> */}
                    <p className="text-lg font-semibold mb-2">
                      ${product.price}
                    </p>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-primary text-black px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {createSale && cart.length > 0 && (
        <div className="fixed top-0 right-0 w-[25%] h-screen bg-white border border-slate-200 rounded-lg shadow-sm p-4">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Cart</h3>
              <button
                onClick={() => clearCart()}
                className="text-sm text-red-600 hover:text-red-800"
              >
                Clear Cart
              </button>
            </div>
            <div className="flex-1 overflow-y-auto mb-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-2"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover"
                    />
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-slate-600">
                        {item.quantity} x ${item.price}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.productId)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="font-semibold">
                Total: {subtotal.toLocaleString()}
              </p>
              <button
                onClick={checkout}
                className="bg-primary text-black px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
