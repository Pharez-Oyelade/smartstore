"use client";

import React, { useEffect, useState, useMemo } from "react";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Title from "@/components/ui/Title";

import { Plus } from "lucide-react";
import BtnPrimary from "@/components/ui/BtnPrimary";
import { useSales } from "@/context/SalesContext";
import DashboardCards from "../components/DashboardCards";

const page = () => {
  const { fetchSales, sales, totalRevenue, getDailyRevenue, monthlyRevenue } =
    useSales();
  const router = useRouter();

  const { user, loading, setUser } = useAuth();

  const [products, setProducts] = useState([]);

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

  // useEffect(() => {
  //   fetchSales();
  // }, []);

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
        value1={getDailyRevenue.toLocaleString()}
        text1={" from yesterday"}
        header2="Monthly Revenue"
        value2={monthlyRevenue.toLocaleString()}
        text2={"This month"}
        header3="Stock Level"
        value3={totalStock}
        text3={getLowStockProducts + "low stock alert"}
      />
    </div>
  );
};

export default page;
