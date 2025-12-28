import React from "react";
import { Store } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-surface border-b border-border">
      <div className="flex items-center gap-2">
        <Store />
        <h1>Vendora</h1>
      </div>

      <ul className="flex gap-5">
        <li>
          <Link href="#">Features</Link>
        </li>
        <li>
          <Link href="#">How it Works</Link>
        </li>
        <li>
          <Link href="#">Pricing</Link>
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
