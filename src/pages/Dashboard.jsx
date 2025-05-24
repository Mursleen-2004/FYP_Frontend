import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Welcome from "../components/Dashboard/Welcome";
import RealTimeTrends from "../components/Dashboard/RealTimeTrends";
import Analytics from "../components/Dashboard/Analytics";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto space-y-5">
        <Welcome />
        <RealTimeTrends />
        <Analytics/>
      </main>
    </div>
  );
};

export default Dashboard;
