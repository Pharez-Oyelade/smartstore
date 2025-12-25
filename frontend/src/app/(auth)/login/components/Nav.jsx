import React from "react";

const Nav = () => {
  return (
    <div className="bg-white text-gray-800 p-4 flex justify-between items-center shadow fixed top-0 w-full z-10">
      <h1 className="text-2xl font-bold">SmartStore Lite</h1>
      <div>
        Don't have an account?{" "}
        <a href="/register" className="text-blue-600 hover:underline">
          Register
        </a>
      </div>
    </div>
  );
};

export default Nav;
