import React from "react";
import { Heart, RefreshCw } from "lucide-react";

const SavedDesigns = () => {
  const designs = [
    {
      title: "Conference Room A Sign",
      category: "ADA Room Number",
      date: "2024-02-08",
      status: "Delivered",
      statusColor: "bg-emerald-50 text-emerald-600",
      isFavorite: true,
      image: "/api/placeholder/400/200",
    },
    {
      title: "Employee Name Plates",
      category: "Metal Nameplate",
      date: "2024-02-06",
      status: "In Production",
      statusColor: "bg-amber-50 text-amber-600",
      isFavorite: false,
      image: "/api/placeholder/400/200",
    },
    {
      title: "Restroom Signage Set",
      category: "ADA Restroom Sign",
      date: "2024-02-03",
      status: "Delivered",
      statusColor: "bg-emerald-50 text-emerald-600",
      isFavorite: true,
      image: "/api/placeholder/400/200",
    },
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <h2 className="text-lg font-black text-[#1e1e2d] tracking-tight">
          Custom Designs History
        </h2>
        <p className="text-xs font-medium text-gray-400">
          Designs you've customized and ordered
        </p>
      </div>

      {/* Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {designs.map((design, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow"
          >
            {/* Image Section */}
            <div className="relative h-48 w-full bg-gray-100">
              <img
                src={design.image}
                alt={design.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-5 space-y-4">
              <div className="space-y-1">
                <h3 className="font-bold text-[#1e1e2d] leading-tight">
                  {design.title}
                </h3>
                <p className="text-xs font-medium text-gray-500">
                  {design.category}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">
                  Ordered: {design.date}
                </p>
                <span
                  className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight ${design.statusColor}`}
                >
                  {design.status}
                </span>
              </div>

              <div className="flex gap-2 pt-2">
                <button className="flex-1 bg-[#2563eb] text-white py-2.5 rounded-xl text-xs font-black hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <RefreshCw size={14} /> Reorder / Modify
                </button>
                <button
                  className={`p-2.5 rounded-xl border transition-colors ${design.isFavorite ? "bg-red-50 border-red-100 text-red-500" : "bg-gray-50 border-gray-100 text-gray-400 hover:text-red-500"}`}
                >
                  <Heart
                    size={18}
                    fill={design.isFavorite ? "currentColor" : "none"}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedDesigns;
