"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import google from "../../../public/auth/google.png";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex-1 flex items-center justify-center p-8 bg-white">
      <div className="w-full max-w-[440px] space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-black text-[#1e1e2d] tracking-tight text-center lg:text-left">
            Create Account
          </h1>
        </div>

        <form className="space-y-5">
          {/* Email Address */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#EE2A24] transition-colors">
                <Mail size={18} />
              </span>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#EE2A24] focus:ring-4 focus:ring-red-50 transition-all font-medium placeholder:text-gray-300"
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Password
            </label>
            <div className="relative group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#EE2A24] transition-colors">
                <Lock size={18} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full pl-12 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-[#EE2A24] focus:ring-4 focus:ring-red-50 transition-all font-medium placeholder:text-gray-300"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                {showPassword ?
                  <EyeOff size={18} />
                : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#EE2A24] text-white py-4 rounded-xl font-bold shadow-xl shadow-red-100 hover:bg-[#d6221c] transition-all active:scale-[0.98] mt-4"
          >
            Sign In
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm font-medium text-gray-500">
            Don't have an account?{" "}
            <Link
              href="/register"
              className="text-[#EE2A24] font-bold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>

        <div className="relative py-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-4 font-bold text-gray-400 tracking-widest">
              Or
            </span>
          </div>
        </div>

        {/* Social Auth */}
        <button className="w-full flex items-center justify-center gap-3 border-2 border-[#EB221E] py-3.5 rounded-xl font-bold text-gray-600 hover:bg-gray-50 hover:border-gray-200 transition-all">
          <Image src={google} alt="" className="w-5 h-5" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}
