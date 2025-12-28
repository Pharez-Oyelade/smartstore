import React from "react";

const LoginForm = ({ register, handleSubmit, onSubmit, isLoading }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md border border-gray-300">
        <h1 className="text-4xl font-bold mb-2">Welcome back</h1>
        <p className="text-gray-600 text-sm">
          Manage your sales and inventory with ease.
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-8">
          <label htmlFor="email" className="block mb-4">
            Email Address
            <input
              className="border border-gray-300 rounded-md px-5 py-3 w-full mt-2"
              type="email"
              id="email"
              placeholder="shopowner@example.com"
              {...register("email", { required: true })}
            />
          </label>
          <label htmlFor="password" className="block mb-4">
            Password
            <input
              className="border border-gray-300 rounded-md px-5 py-3 w-full mt-2"
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
          </label>
          <div className="flex justify-end">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              {isLoading ? "Logging in..." : "Login to Your Account"}
            </button>
          </div>
        </form>
      </div>
      <div className="text-center text-gray-500 text-sm mt-6">
        &copy; 2025 Vendora. All rights reserved.
      </div>
    </div>
  );
};

export default LoginForm;
