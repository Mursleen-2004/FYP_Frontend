import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", views: 400 },
  { name: "Tue", views: 300 },
  { name: "Wed", views: 500 },
  { name: "Thu", views: 700 },
  { name: "Fri", views: 600 },
  { name: "Sat", views: 800 },
  { name: "Sun", views: 700 },
];

const Analytics = () => {
  return (
    <div className="bg-[#1e293b] p-5 rounded-xl shadow-md space-y-4">
      <h3 className="text-xl font-bold text-blue-400">📊 Analytics Overview</h3>
      <p className="text-gray-400 text-sm">User engagement over the week</p>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#334155" />
            <XAxis dataKey="name" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="views"
              stroke="#6366f1"
              strokeWidth={2}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
