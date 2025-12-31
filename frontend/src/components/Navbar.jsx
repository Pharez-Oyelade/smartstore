import React from "react";
import { Store } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
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
          <Link href="/features">Features</Link>
        </li>
        <li>
          <Link href="/howitworks">How it Works</Link>
        </li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>
          <Link href="#">Contact</Link>
        </li>
      </ul>

      <Link href="/login">
        <button className="bg-accent text-white px-4 py-2 rounded">
          Login
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;
