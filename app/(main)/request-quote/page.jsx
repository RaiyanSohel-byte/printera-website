"use client";
import React, { useState } from "react";

export default function RequestQuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quote Request Submitted:", formData);
    // Add logic here to send data to your backend or EmailJS
  };

  return (
    <section className="bg-[#F8FAFC] min-h-[600px] flex items-center justify-center py-20 px-6">
      <div className="bg-white w-full max-w-4xl p-10 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 transition-all hover:shadow-md">
        {/* Component Header */}
        <h2 className="text-xl font-bold text-gray-900 mb-10">
          Request a Quote
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Field */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 ml-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="Your full name"
              className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-[#EE2A24] focus:border-transparent outline-none transition-all placeholder:text-gray-300"
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 ml-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="email@example.com"
              className="w-full px-5 py-3.5 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-[#EE2A24] focus:border-transparent outline-none transition-all placeholder:text-gray-300"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          {/* Project Details Field */}
          <div className="space-y-2">
            <label
              htmlFor="details"
              className="block text-sm font-semibold text-gray-700 ml-1"
            >
              Project Details
            </label>
            <textarea
              id="details"
              required
              rows={5}
              placeholder="Describe your signage needs, dimensions, and materials..."
              className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-white focus:ring-2 focus:ring-[#EE2A24] focus:border-transparent outline-none transition-all resize-none placeholder:text-gray-300"
              onChange={(e) =>
                setFormData({ ...formData, details: e.target.value })
              }
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              type="submit"
              className="bg-[#EE2A24] text-white px-10 py-3.5 rounded-xl font-bold hover:bg-[#d6221c] transition-all active:scale-[0.97] shadow-lg shadow-red-100"
            >
              Submit Request
            </button>
            <button
              type="button"
              className="bg-white text-gray-700 px-10 py-3.5 rounded-xl font-bold border border-gray-300 hover:bg-gray-50 transition-all active:scale-[0.97]"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
