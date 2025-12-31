import React from "react";
import Link from "next/link";

const Cta = ({ title, details, btnText, href }) => {
  return (
    <div className="flex flex-col gap-5 items-center text-center py-20 bg-white">
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="text-xl text-muted">{details}</p>
      <Link href={href}>
        <button className="bg-accent text-white px-10 py-5 rounded-xl flex items-center justify-center font-bold text-base transition-all transform hover:scale-[1.05] cursor-pointer">
          {btnText}
        </button>
      </Link>
      <p className="text-sm text-muted">
        Free for 14 days. No credit card required.
      </p>
    </div>
  );
};

export default Cta;
