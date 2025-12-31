import React from "react";
import Link from "next/link";
import { FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="px-40 pt-20">
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-4 w-1/3">
          <h3 className="text-2xl font-bold">Vendora</h3>
          <p className="text-gray-500">
            The easiest way to track sales, manage inventory, and grow your
            business in Africa.
          </p>
          <div className="flex gap-4">
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaXTwitter />
            </a>
            <a href="">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Product</h4>
          <Link href="/features" className="text-gray-500">
            Features
          </Link>
          <Link href="/pricing" className="text-gray-500">
            Pricing
          </Link>
          <Link href="/" className="text-gray-500">
            Security
          </Link>
          <Link href="/" className="text-gray-500">
            Resources
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="font-bold">Company</h4>
          <Link href="/about" className="text-gray-500">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-500">
            Contact
          </Link>
          <Link href="/privacy" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-500">
            Terms & Conditions
          </Link>
        </div>
      </div>

      <hr className="my-10 text-gray-500" />

      <div className="pb-10">
        <p className="text-gray-500 text-sm">
          &copy; 2025 Vendora. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
