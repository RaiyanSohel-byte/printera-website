import React from "react";
import { Save } from "lucide-react";

const EditProfileForm = () => {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-50">
        <h3 className="text-sm font-black text-[#1e1e2d] tracking-tight uppercase">
          Edit Profile Information
        </h3>
      </div>

      <form className="p-8 space-y-6">
        {/* Name Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              First Name
            </label>
            <input
              type="text"
              defaultValue="John"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-600 transition-all font-medium text-[#1e1e2d]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Last Name
            </label>
            <input
              type="text"
              defaultValue="Doe"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-600 transition-all font-medium text-[#1e1e2d]"
            />
          </div>
        </div>

        {/* Contact Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              defaultValue="john.doe@company.com"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-600 transition-all font-medium text-[#1e1e2d]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Phone
            </label>
            <input
              type="tel"
              defaultValue="+1 (555) 123-4567"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-600 transition-all font-medium text-[#1e1e2d]"
            />
          </div>
        </div>

        {/* Company Row (Full Width) */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Company
          </label>
          <input
            type="text"
            defaultValue="Acme Corporation"
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-600 transition-all font-medium text-[#1e1e2d]"
          />
        </div>

        {/* Address Row (Full Width) */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            Address
          </label>
          <input
            type="text"
            defaultValue="123 Business Ave"
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-600 transition-all font-medium text-[#1e1e2d]"
          />
        </div>

        {/* City/State Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              City
            </label>
            <input
              type="text"
              defaultValue="New York"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-600 transition-all font-medium text-[#1e1e2d]"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              State
            </label>
            <input
              type="text"
              defaultValue="NY"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-600 transition-all font-medium text-[#1e1e2d]"
            />
          </div>
        </div>

        {/* ZIP Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              ZIP Code
            </label>
            <input
              type="text"
              defaultValue="10001"
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-blue-600 transition-all font-medium text-[#1e1e2d]"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-50 pt-8">
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-100"
          >
            <Save size={18} /> Save Changes
          </button>
          <button
            type="button"
            className="flex-1 bg-gray-100 text-gray-500 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center justify-center"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
