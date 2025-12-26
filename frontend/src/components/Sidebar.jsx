"use client";

import React from "react";
import "../app/globals.css";
import { Store } from "lucide-react";
import { LayoutDashboard } from "lucide-react";
import { CirclePile } from "lucide-react";
import { ReceiptText } from "lucide-react";
import { Users } from "lucide-react";
import { UserStar } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const isActiveClass = (path) => {
    return pathname === path ? "active" : "";
  };

  return (
    <aside className="fixed h-full bg-white w-[15%] border-r border-gray-300 p-4 z-50">
      <div className="flex items-center gap-4">
        <div className="bg-[#0070f3] p-2 rounded-xl inline-block my-4">
          <Store size={28} color="#fff" />
        </div>
        <div>
          <h1 className="text-xl font-bold">SmartStore</h1>
          <p className="text-xs text-gray-500">Lite Admin</p>
        </div>
      </div>

      <nav className=" flex flex-col h-[90%] justify-between">
        <div className="flex flex-col gap-4 mt-8">
          <Link
            href="/dashboard"
            className={`${isActiveClass(
              "/dashboard"
            )} block py-2 px-4 rounded hover:bg-blue-200/20`}
          >
            <LayoutDashboard className="inline mr-2" size={24} />
            Dashboard
          </Link>
          <Link
            href="/inventory"
            className={`${isActiveClass(
              "/inventory"
            )} block py-2 px-4 rounded hover:bg-blue-200/20`}
          >
            <CirclePile className="inline mr-2" size={24} />
            Inventory
          </Link>
          <Link
            href="/sales"
            className={`${isActiveClass(
              "/sales"
            )} block py-2 px-4 rounded hover:bg-blue-200/20`}
          >
            <ReceiptText className="inline mr-2" size={24} />
            Sales History
          </Link>
          <Link
            href="/customers"
            className={`${isActiveClass(
              "/customers"
            )} block py-2 px-4 rounded hover:bg-blue-200/20`}
          >
            <Users className="inline mr-2" size={24} />
            Customers
          </Link>
        </div>

        <div className="mt-auto">
          <Link href="/profile">
            <UserStar className="inline mr-2" size={24} />
            Profile
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
