"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import api from "@/lib/axios";
import { useAuth } from "@/context/AuthContext";
import {
  Store,
  LayoutDashboard,
  CirclePile,
  ReceiptText,
  Users,
  UserStar,
  X,
  Menu,
} from "lucide-react";

const Sidebar = () => {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(true);

  const isActiveClass = (path) =>
    pathname === path ? "bg-blue-100/50 font-semibold" : "";

  // Ensure sidebar is closed on small screens initially
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) setOpen(false);
      else setOpen(true);
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = async () => {
    try {
      await api.get("/auth/logout");
      setUser(null);
      router.push("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className={`lg:hidden relative top-4 right-0 z-50 p-2   ${
          open ? "translate-x-65" : "translate-x-5"
        } rounded shadow transform transition-transform duration-300 ease-in-out`}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`
          fixed top-0 left-0 h-full bg-white border-r border-gray-300 p-4 z-40
          w-64 lg:w-60
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-blue-600 p-2 rounded-xl inline-block">
            <Store size={28} color="#fff" />
          </div>
          <div>
            <h1 className="text-xl font-bold">SmartStore</h1>
            <p className="text-xs text-gray-500">Lite Admin</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col h-[90%] justify-between">
          <div className="flex flex-col gap-4">
            <Link
              href="/dashboard"
              className={`flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-200/20 ${isActiveClass(
                "/dashboard"
              )}`}
            >
              <LayoutDashboard size={24} /> Dashboard
            </Link>
            <Link
              href="/inventory"
              className={`flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-200/20 ${isActiveClass(
                "/inventory"
              )}`}
            >
              <CirclePile size={24} /> Inventory
            </Link>
            <Link
              href="/sales"
              className={`flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-200/20 ${isActiveClass(
                "/sales"
              )}`}
            >
              <ReceiptText size={24} /> Sales History
            </Link>
            <Link
              href="/customers"
              className={`flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-200/20 ${isActiveClass(
                "/customers"
              )}`}
            >
              <Users size={24} /> Customers
            </Link>
          </div>

          <div className="mt-auto flex flex-col gap-2">
            <Link
              href="/profile"
              className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-200/20"
            >
              <UserStar size={24} /> Profile
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 py-2 px-4 rounded hover:bg-blue-200/20"
            >
              Logout
            </button>
          </div>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {open && window.innerWidth < 1024 && (
        <div
          className="fixed inset-0 backdrop-blur z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
