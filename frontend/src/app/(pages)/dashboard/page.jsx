"use client";

import React from "react";
import api from "@/lib/axios";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

import { Plus } from "lucide-react";

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
    <div>
      <header className="my-10 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-extrabold">Dashboard</h1>
          <p className="text-md text-gray-600">
            Welcome back, {user?.name || "User"}! Here is your dashboard
            overview.
          </p>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          New Sale <Plus className="inline-block ml-2" />
        </button>
      </header>
    </div>
  );
};

export default page;
