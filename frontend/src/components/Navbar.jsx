"use client";
import React from "react";
import { Store } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="flex justify-between items-center px-40 py-4 bg-surface border-b border-border shadow-xl">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Store className="w-10 h-10 bg-accent p-2 rounded-md text-white" />
          <h1 className="text-2xl font-bold">Vendora</h1>
        </div>
      </Link>

      <ul className="flex gap-5">
        <li>
          <Link
            href="/features"
            className={`px-3 py-2 rounded-md transition-colors hover:text-accent ${
              isActive("/features") ? "active" : ""
            }`}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            href="/howitworks"
            className={`px-3 py-2 rounded-md transition-colors hover:text-accent ${
              isActive("/howitworks") ? "active" : ""
            }`}
          >
            How it Works
          </Link>
        </li>
        <li>
          <Link
            href="/pricing"
            className={`px-3 py-2 rounded-md transition-colors hover:text-accent ${
              isActive("/pricing") ? "active" : ""
            }`}
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="px-3 py-2 rounded-md transition-colors hover:text-accent"
          >
            Contact
          </Link>
        </li>
      </ul>

      <Link href="/login">
        <button className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-hover transition-colors">
          Login
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
