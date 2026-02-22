import React from "react";
import {
  RefreshCcw,
  CheckCircle2,
  Circle,
  MessageSquare,
  MapPin,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

const OrderDashboard = () => {
  const orders = [
    {
      id: "SC12345678",
      date: "January 28, 2026",
      status: "In Production",
      statusVariant: "warning", // amber/orange
      progress: 2, // Steps completed: Received, In Production
      items: [
        {
          name: "ADA Restroom Sign",
          details: 'Size: 8" x 6" | Text: "RESTROOM"',
          material: "Brushed Aluminum",
          quantity: 5,
          image: "/api/placeholder/80/80",
        },
      ],
      total: "$287.50",
    },
    {
      id: "SC12345677",
      date: "January 20, 2026",
      status: "Ready for Pickup",
      statusVariant: "purple",
      progress: 3, // Received, Production, Shipped/Ready
      pickupInfo: {
        address: "123 Business Avenue, New York, NY 10001",
        hours: "Mon–Fri 9am–5pm",
        contact: "(555) 123-4567",
      },
      items: [
        {
          name: "Metal Nameplate",
          details: 'Size: 6" x 2" | Text: "John Smith"',
          material: "Stainless Steel",
          quantity: 10,
          image: "/api/placeholder/80/80",
        },
      ],
      total: "$420.00",
    },
  ];

  const steps = ["Order Received", "In Production", "Shipped", "Delivered"];

  return (
    <div className="max-w-[1200px] mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700 p-7">
      <Link
        href="/dashboard"
        className="text-sm text-red-600 font-semibold text-base hover:underline mb-8  flex items-center gap-1"
      >
        <ChevronLeft size={16} /> Back To Profile
      </Link>{" "}
      <div className="space-y-1">
        <h2 className="text-xl font-black text-[#1e1e2d] tracking-tight">
          Order Dashboard
        </h2>
        <p className="text-sm text-gray-400 font-medium">
          Track your orders and reorder with one click
        </p>
      </div>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            {/* Order Header */}
            <div className="p-5 border-b border-gray-50 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-black text-[#1e1e2d]">Order #{order.id}</h3>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-tight">
                  Placed on {order.date}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter 
                  ${
                    order.statusVariant === "warning" ?
                      "bg-amber-50 text-amber-600"
                    : order.statusVariant === "purple" ?
                      "bg-purple-50 text-purple-600"
                    : "bg-emerald-50 text-emerald-600"
                  }`}
                >
                  {order.status}
                </span>
                <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-bold text-gray-500 hover:bg-gray-50 transition-colors">
                  <RefreshCcw size={12} /> Reorder
                </button>
              </div>
            </div>

            {/* Progress Bar Section */}
            <div className="px-8 py-10 bg-gray-50/30">
              <div className="relative flex justify-between">
                {/* Background Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2" />
                {/* Active Line */}
                <div
                  className="absolute top-1/2 left-0 h-1 bg-blue-600 -translate-y-1/2 transition-all duration-1000"
                  style={{ width: `${(order.progress - 1) * 33.33}%` }}
                />

                {steps.map((step, idx) => {
                  const isCompleted = idx < order.progress;
                  const isCurrent = idx === order.progress - 1;
                  return (
                    <div
                      key={step}
                      className="relative z-10 flex flex-col items-center gap-3"
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center border-4 border-white shadow-sm transition-colors
                        ${isCompleted ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-400"}`}
                      >
                        {isCompleted ?
                          <CheckCircle2 size={16} />
                        : <Circle size={16} />}
                      </div>
                      <span
                        className={`text-[10px] font-black uppercase tracking-tighter whitespace-nowrap
                        ${isCurrent ? "text-blue-600" : "text-gray-400"}`}
                      >
                        {step}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pickup Alert (Conditional) */}
            {order.pickupInfo && (
              <div className="mx-5 mb-5 p-5 bg-purple-50/50 border border-purple-100 rounded-xl flex gap-4">
                <div className="p-2 bg-purple-600 text-white rounded-full h-fit shadow-lg shadow-purple-100">
                  <MapPin size={16} />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-black text-purple-900">
                    Ready for Pickup!
                  </p>
                  <p className="text-xs text-purple-700/80 font-medium">
                    Your order is ready to be picked up at our location
                  </p>
                  <div className="pt-2 text-[11px] font-bold text-purple-900/60 uppercase flex flex-wrap gap-x-4">
                    <span>{order.pickupInfo.address}</span>
                    <span>Hours: {order.pickupInfo.hours}</span>
                    <span>Contact: {order.pickupInfo.contact}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Product Details */}
            <div className="p-5 border-t border-gray-50">
              {order.items.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row justify-between gap-6"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      className="w-20 h-20 rounded-xl object-cover border border-gray-100 bg-gray-50"
                    />
                    <div className="space-y-1">
                      <h4 className="font-bold text-[#1e1e2d]">{item.name}</h4>
                      <p className="text-xs text-gray-500 font-medium">
                        {item.details}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-between sm:text-right gap-2">
                    <div className="space-y-1">
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        Material
                      </p>
                      <p className="text-xs font-bold text-gray-600">
                        {item.material}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                        Quantity
                      </p>
                      <p className="text-xs font-bold text-gray-600">
                        {item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="mt-6 pt-5 border-t border-gray-50 flex items-center justify-between">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Order Total
                </p>
                <p className="text-lg font-black text-blue-600">
                  {order.total}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Support Section */}
      <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-8 space-y-4">
        <h3 className="font-black text-[#1e1e2d]">Need Help?</h3>
        <p className="text-sm text-gray-500 font-medium max-w-xl">
          If you have questions about your order or need to make changes, our
          team is here to help.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-100 h-fit w-fit">
          <MessageSquare size={18} /> Contact Support
        </button>
      </div>
    </div>
  );
};

export default OrderDashboard;
