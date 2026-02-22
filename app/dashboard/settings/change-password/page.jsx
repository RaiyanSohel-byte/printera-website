"use client";
import React, { useState } from "react";
import { Lock, Eye, EyeOff, ShieldCheck } from "lucide-react";

const ChangePassword = () => {
  const [showPass, setShowPass] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const toggleVisibility = (field) => {
    setShowPass((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl overflow-hidden">
      {/* Header Section */}
      <div className="p-6 border-b border-gray-50 flex items-center gap-3">
        <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
          <Lock size={20} />
        </div>
        <h3 className="font-black text-[#1e1e2d] tracking-tight">
          Change Password
        </h3>
      </div>

      <form className="p-8 space-y-6">
        {/* Current Password */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Current Password
          </label>
          <div className="relative group">
            <input
              type={showPass.current ? "text" : "password"}
              placeholder="Enter current password"
              className="w-full pl-4 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-600 transition-all font-medium text-[#1e1e2d]"
            />
            <button
              type="button"
              onClick={() => toggleVisibility("current")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPass.current ?
                <EyeOff size={18} />
              : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            New Password
          </label>
          <div className="relative group">
            <input
              type={showPass.new ? "text" : "password"}
              placeholder="Enter new password"
              className="w-full pl-4 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-600 transition-all font-medium text-[#1e1e2d]"
            />
            <button
              type="button"
              onClick={() => toggleVisibility("new")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPass.new ?
                <EyeOff size={18} />
              : <Eye size={18} />}
            </button>
          </div>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">
            Must be at least 8 characters long
          </p>
        </div>

        {/* Confirm New Password */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Confirm New Password
          </label>
          <div className="relative group">
            <input
              type={showPass.confirm ? "text" : "password"}
              placeholder="Confirm new password"
              className="w-full pl-4 pr-12 py-3.5 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-600 transition-all font-medium text-[#1e1e2d]"
            />
            <button
              type="button"
              onClick={() => toggleVisibility("confirm")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              {showPass.confirm ?
                <EyeOff size={18} />
              : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2"
          >
            Update Password
          </button>
          <button
            type="button"
            className="flex-1 bg-gray-100 text-gray-500 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
