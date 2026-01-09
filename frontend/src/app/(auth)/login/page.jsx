"use client";

import React, { useState } from "react";
import LoginForm from "@/components/auth/LoginForm";
import { useForm } from "react-hook-form";
import Nav from "./components/Nav";

import api from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useSales } from "@/context/SalesContext";

const page = () => {
  const router = useRouter();
  const { fetchUser } = useAuth();
  const { fetchSales } = useSales();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      await api.post(`/auth/login`, data);
      await fetchUser();
      fetchSales();
      router.push("/dashboard");
    } catch (error) {
      console.error(
        "Login failed:",
        error.response?.data.error || error.message
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Nav />
      <LoginForm
        register={register}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        isLoading={isLoading}
      />
    </div>
  );
};

export default page;
