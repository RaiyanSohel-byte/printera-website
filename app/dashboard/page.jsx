import React from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Edit3,
  Box,
  CreditCard,
  Heart,
  Settings,
  History,
  Camera,
} from "lucide-react";

const Dashboard = () => {
  const recentActivity = [
    {
      id: "ORD-2024-001",
      items: 3,
      date: "2024-02-05",
      price: "$450.00",
      status: "Delivered",
      statusCol: "bg-emerald-50 text-emerald-600",
    },
    {
      id: "ORD-2024-002",
      items: 5,
      date: "2024-02-01",
      price: "$850.00",
      status: "In Production",
      statusCol: "bg-amber-50 text-amber-600",
    },
    {
      id: "ORD-2024-003",
      items: 2,
      date: "2024-01-28",
      price: "$320.00",
      status: "Shipped",
      statusCol: "bg-blue-50 text-blue-600",
    },
  ];

  return (
    <div className="p-8 space-y-6">
      <h3 className="font-black text-lg">Recent Activity</h3>
      <div className="space-y-3">
        {recentActivity.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="bg-blue-100 p-2.5 rounded-lg text-blue-600">
                <Box size={20} />
              </div>
              <div>
                <p className="font-bold text-sm tracking-tight">{order.id}</p>
                <p className="text-xs text-gray-400 font-medium">
                  {order.items} items • {order.date}
                </p>
              </div>
            </div>
            <div className="text-right flex items-center gap-6">
              <div>
                <p className="font-black text-sm">{order.price}</p>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter ${order.statusCol}`}
                >
                  {order.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
