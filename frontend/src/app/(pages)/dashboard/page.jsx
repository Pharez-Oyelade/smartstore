"use client";

import React, { useEffect, useState, useMemo } from "react";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Title from "@/components/ui/Title";
import SalesTable from "../sales/components/SalesTable";

import { Plus } from "lucide-react";
import BtnPrimary from "@/components/ui/BtnPrimary";
import { useSales } from "@/context/SalesContext";
import DashboardCards from "../components/DashboardCards";
import { FaArrowTrendUp, FaMoneyBills } from "react-icons/fa6";
import { LuClipboardCheck } from "react-icons/lu";
import SalesItemList from "../components/SalesItemList";

import {
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  ComposedChart,
} from "recharts";

const page = () => {
  const {
    fetchSales,
    sales,
    totalRevenue,
    getDailyRevenue,
    monthlyRevenue,
    weeklyRevenue,
  } = useSales();
  const router = useRouter();

  const { user, loading, setUser } = useAuth();

  const [products, setProducts] = useState([]);

  const slicedSales = sales.slice(0, 3);

  const getProducts = async () => {
    try {
      const response = await api.get("/products/get");
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log(sales);
    console.log(weeklyRevenue);
  }, [sales]);

  // const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
  const totalStock = useMemo(() => {
    return products.reduce((sum, product) => sum + product.stock, 0);
  }, [products]);

  const getLowStockProducts = products.filter(
    (product) => product.stock < 10
  ).length;

  const handleLogout = async () => {
    try {
      // ensure credentials (cookies) are sent with the request
      await api.get("/auth/logout");
      setUser(null);
      // navigate to login so middleware will apply (cookie cleared)
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

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

  // const salesProduct = sales
  //   .slice()
  //   .reverse()
  //   .flatMap((sale) =>
  //     sale.items.map((item) => {
  //       return {
  //         id: item.productId,
  //         productName: item.productName,
  //         unitPrice: item.unitPrice,
  //       };
  //     })
  //   )
  //   .slice(0, 5);

  const salesProduct = [...sales]
    .reverse()
    .flatMap((sale) =>
      sale.items.map((item) => ({
        id: item.productId,
        productName: item.productName,
        unitPrice: item.unitPrice,
      }))
    )
    .slice(0, 6);

  console.log(salesProduct);

  return (
    <div className="p-4">
      <Title
        header="Dashboard"
        description={`Welcome back, ${
          user?.name || "User"
        }! Here is your dashboard overview.`}
        onClick={() => router.push("/sales")}
        text="New Sale"
      />

      <DashboardCards
        header1="Today's Sales"
        icon1={<FaArrowTrendUp />}
        value1={getDailyRevenue.toLocaleString()}
        text1={" from yesterday"}
        header2="Monthly Revenue"
        icon2={<FaMoneyBills />}
        value2={monthlyRevenue.toLocaleString()}
        text2={"This month"}
        header3="Stock Level"
        icon3={<LuClipboardCheck />}
        value3={totalStock}
        text3={getLowStockProducts + "low stock alert"}
      />

      <div className="flex justify-between gap-10">
        <div className="mt-10 bg-white rounded-2xl w-[70%]">
          <div>
            <div>
              <h3>Weekly Sales Overview</h3>
              <span>Performance over the last 7 days</span>
            </div>
          </div>
          <div className="mx-30">
            <ComposedChart
              style={{ width: "100%", aspectRatio: 1.618, maxWidth: 600 }}
              responsive
              data={weeklyRevenue}
              margin={{
                top: 20,
                right: 20,
                bottom: 5,
                left: 10,
              }}
            >
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="none"
                fill="url(#colorRevenue)"
                tooltipType="none"
              />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="blue"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />

              <XAxis dataKey="day" />
            </ComposedChart>
          </div>
        </div>

        <SalesItemList salesItems={salesProduct} />
      </div>

      <div className="mt-10 bg-white rounded-2xl">
        <div className="flex justify-between items-center bg-white px-8 py-3 rounded-t-2xl">
          <h2 className="text-lg font-semibold">Transaction History</h2>
          <button
            onClick={() => router.push("/sales")}
            className="cursor-pointer text-blue-400"
          >
            View All
          </button>
        </div>
        <SalesTable sales={slicedSales} paySale={paySale} />
      </div>
    </div>
  );
};

export default page;
