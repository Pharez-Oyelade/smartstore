"use client";

import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Store } from "lucide-react";
import { Star } from "lucide-react";
import { useForm } from "react-hook-form";

import api from "@/lib/axios";

const page = () => {
  const router = useRouter();

  const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const payload = { ...data, password };
      await api.post(`/auth/register`, payload);
      router.push("/dashboard");
    } catch (error) {
      console.error("Registration failed:", error);
    }
    console.log(data);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const StrengthBars = ({ password }) => {
    const level = useMemo(() => {
      if (!password) return 0;
      let score = 1;
      if (password.length >= 8) score++;
      if (/[A-Z]/.test(password)) score++;
      if (/\d/.test(password)) score++;
      if (password.length >= 12) score++;
      return Math.min(4, score);
    }, [password]);

    const fillClass =
      level === 1
        ? "bg-red-500"
        : level === 2
        ? "bg-orange-500"
        : level === 3
        ? "bg-yellow-400"
        : level === 4
        ? "bg-green-500"
        : "";

    return (
      <div className="mt-2">
        <div className="flex gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded ${
                level >= i ? fillClass : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  const strength = useMemo(() => {
    if (
      (password.length >= 12 && /[A-Z]/.test(password)) ||
      /\d/.test(password)
    ) {
      return "Strong";
    }
    if (password.length >= 8) {
      return "Medium";
    }
    return "Weak";
  }, [password]);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="h-full w-1/2 relative">
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <img
          src="/images/storefront.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute top-5 left-10 z-20 text-white p-4 h-full w-full">
          <div className="flex flex-col justify-between h-[90%]">
            <div className="flex items-center gap-4">
              <div className="bg-[#0070f3] p-2 rounded-xl inline-block my-4">
                <Store size={28} color="#fff" />
              </div>
              <h1 className="text-3xl font-bold">Vendora</h1>
            </div>

            <div className="mt-auto w-2/4">
              <div className="flex gap-2">
                <Star size={20} color="#fdcc0d" />
                <Star size={20} color="#fdcc0d" />
                <Star size={20} color="#fdcc0d" />
                <Star size={20} color="#fdcc0d" />
                <Star size={20} color="#fdcc0d" />
              </div>
              <h1 className="text-2xl mt-2 font-medium">
                "Since switching to Vendora, managing my inventory in Lagos has
                been seamless. I save 10 hours a week on bookkeeping alone."
              </h1>
              <div>
                <p className="mt-2 text-sm">- Chinedu Okafor, Lagos</p>
                <p className="text-xs">Owner, Destiny Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Registration form */}
      <div className="w-1/2">
        <div className="flex justify-end p-8">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-blue-500">
              Login
            </a>
          </p>
        </div>

        <div className="flex flex-col items-center justify-center h-[80%]">
          <div className="w-3/4">
            <h1 className="text-4xl font-bold mb-6">
              Start managing your store today
            </h1>
            <p className="text-gray-600 mb-8">
              Create your account to access inventory tracking, sales reports,
              and seamless payments.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <label htmlFor="name">
                Full Legal Name
                <input
                  type="text"
                  id="name"
                  className="border border-gray-300 rounded-md px-5 py-2 w-full mt-2"
                  placeholder="e.g. Oyelade Pharez"
                  {...register("name", { required: true })}
                />
              </label>

              <label htmlFor="email">
                Business Email
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 rounded-md px-5 py-2 w-full mt-2"
                  placeholder="name@business.com"
                  {...register("email", { required: true })}
                />
              </label>

              <div>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="border border-gray-300 rounded-md px-5 py-2 w-full mt-2"
                    placeholder="Create a strong password"
                  />
                </label>
                {password.length > 0 && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm">Password Strength</p>
                      <p className="text-sm">
                        {password.length === 0 ? "None" : strength}
                      </p>
                    </div>

                    <StrengthBars password={password} />
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
