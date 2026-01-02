"use client"

import { createContext, useContext, useEffect, useState } from "react"
import api from "@/lib/axios"

const SalesContext = createContext();

export const SalesProvider = ({children}) => {
  const [sales, setSales] = useState([]);

  const fetchSales = async () => {
      try {
        const response = await api.get("/sales/get");
        setSales(response.data.sales);
      } catch (error) {
        console.log(error);
      }
    }

  useEffect(()=> {
    fetchSales();
  }, [])

  const totalRevenue = sales.reduce((sum, sale) => {
    return sum + sale.totalAmount;
  }, 0);

  const value = {
    sales,
    totalRevenue,
    fetchSales,
  }

  return (
    <SalesContext.Provider value={value}>
      {children}
    </SalesContext.Provider>
  )
}

export const useSales = () => useContext(SalesContext);