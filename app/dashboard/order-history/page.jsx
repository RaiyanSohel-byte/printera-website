import React from "react";
import { ExternalLink } from "lucide-react";

const OrderHistory = () => {
  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-02-05",
      items: 3,
      total: "$450.00",
      status: "Delivered",
      statusClass: "bg-emerald-50 text-emerald-600",
    },
    {
      id: "ORD-2024-002",
      date: "2024-02-01",
      items: 5,
      total: "$850.00",
      status: "In Production",
      statusClass: "bg-amber-50 text-amber-600",
    },
    {
      id: "ORD-2024-003",
      date: "2024-01-28",
      items: 2,
      total: "$320.00",
      status: "Shipped",
      statusClass: "bg-blue-50 text-blue-600",
    },
    {
      id: "ORD-2024-004",
      date: "2024-01-20",
      items: 8,
      total: "$1200.00",
      status: "Delivered",
      statusClass: "bg-emerald-50 text-emerald-600",
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-6 md:p-8 border-b border-gray-100 flex justify-between items-center">
        <h3 className="text-lg font-black tracking-tight">Order History</h3>
      </div>

      {/* DESKTOP TABLE VIEW */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/50">
              <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Order ID
              </th>
              <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Date
              </th>
              <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-center">
                Items
              </th>
              <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Total
              </th>
              <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Status
              </th>
              <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {orders.map((order) => (
              <tr
                key={order.id}
                className="hover:bg-gray-50/50 transition-colors group"
              >
                <td className="px-8 py-5 text-sm font-bold text-[#1e1e2d]">
                  {order.id}
                </td>
                <td className="px-8 py-5 text-sm font-medium text-gray-500">
                  {order.date}
                </td>
                <td className="px-8 py-5 text-sm font-medium text-gray-500 text-center">
                  {order.items}
                </td>
                <td className="px-8 py-5 text-sm font-black text-[#1e1e2d]">
                  {order.total}
                </td>
                <td className="px-8 py-5">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${order.statusClass}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-8 py-5 text-right">
                  <button className="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1.5 ml-auto">
                    View Details <ExternalLink size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARD VIEW */}
      <div className="md:hidden divide-y divide-gray-100">
        {orders.map((order) => (
          <div key={order.id} className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                  Order ID
                </p>
                <p className="font-black text-[#1e1e2d]">{order.id}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${order.statusClass}`}
              >
                {order.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">
                  Date
                </p>
                <p className="text-sm font-medium">{order.date}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">
                  Total
                </p>
                <p className="text-sm font-black text-[#1e1e2d]">
                  {order.total}
                </p>
              </div>
            </div>

            <button className="w-full py-3 border border-gray-100 rounded-xl text-sm font-bold text-blue-600 bg-gray-50/50 active:bg-gray-100 transition-colors">
              View Order Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
