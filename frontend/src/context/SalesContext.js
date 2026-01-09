"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import api from "@/lib/axios";

const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
  const [sales, setSales] = useState([]);

  const fetchSales = async () => {
    try {
      const response = await api.get("/sales/get");
      setSales(response.data.sales);
    } catch (error) {
      console.log(error);
    }
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // const getDailyRevenue = sales.filter((sale) => sale.createdAt === new Date()).reduce((sum, sale) => {
  //   return sum + sale.totalAmount;
  // }, 0);

  const getDailyRevenue = sales
    .filter((sale) => new Date(sale.createdAt) >= today)
    .reduce((sum, sale) => sum + sale.totalAmount, 0);

  const totalRevenue = sales.reduce((sum, sale) => {
    return sum + sale.totalAmount;
  }, 0);

  // const month = new Date().getMonth();

  // const getMonthlyRevenue = sales
  // .filter((sale) => new Date(sale.createdAt).getMonth() === month)
  // .reduce((sum, sale) => sum + sale.totalAmount, 0);

  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  const monthlyRevenue = sales
    .filter((sale) => {
      const date = new Date(sale.createdAt);
      return (
        date.getMonth() === currentMonth && date.getFullYear() === currentYear
      );
    })
    .reduce((sum, sale) => sum + sale.totalAmount, 0);

  useEffect(() => {
    fetchSales();
  }, []);

  const value = useMemo(
    () => ({
      sales,
      totalRevenue,
      getDailyRevenue,
      monthlyRevenue,
      fetchSales,
    }),
    [sales, totalRevenue, getDailyRevenue, monthlyRevenue]
  );

  return (
    <SalesContext.Provider value={value}>{children}</SalesContext.Provider>
  );
};

export const useSales = () => useContext(SalesContext);
