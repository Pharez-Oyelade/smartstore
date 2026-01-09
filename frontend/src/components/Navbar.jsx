"use client";
import React, { useState } from "react";
import { Store } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenuOpen } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => pathname === path;

  return (
    <nav className="flex justify-between items-center lg:px-40 px-10 py-4 bg-surface border-b border-border shadow-xl">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Store className="w-10 h-10 bg-accent p-2 rounded-md text-white" />
          <h1 className="text-2xl font-bold">Vendora</h1>
        </div>
      </Link>

      <ul className="lg:flex gap-5 hidden">
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

      <div className="flex items-center gap-5">
        <Link href="/login">
          <button className="bg-accent text-white px-4 py-2 rounded hover:bg-accent-hover hover:scale-105 active:scale-95 transition-all transform cursor-pointer">
            Login
          </button>
        </Link>

        <button onClick={toggleMenu} className="lg:hidden">
          <MdMenuOpen className="w-6 h-6" />
        </button>
      </div>

      <div
        className={`lg:hidden ${
          menuOpen ? "block translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-3/4 h-full bg-white z-50 transition-transform duration-500 ease-in-out`}
      >
        <div className="absolute top-10 right-10">
          <button onClick={toggleMenu}>
            <MdMenuOpen className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
