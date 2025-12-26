"use client";

import React from "react";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

import { Plus } from "lucide-react";
import BtnPrimary from "@/components/ui/BtnPrimary";

const page = () => {
  const router = useRouter();

  const { user, loading, setUser } = useAuth();

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
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-extrabold">Dashboard</h1>
          <p className="text-md text-gray-600">
            Welcome back, {user?.name || "User"}! Here is your dashboard
            overview.
          </p>
        </div>

        <BtnPrimary text="New Sale" />
      </header>
    </div>
  );
};

export default page;
