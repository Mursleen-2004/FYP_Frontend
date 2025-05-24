import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-[#1e293b] min-h-screen p-6 flex flex-col space-y-8 text-gray-300">
      <h1 className="text-2xl font-bold text-white mb-8">Content Genius</h1>
      <nav className="flex flex-col space-y-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "text-purple-400 font-semibold" : "hover:text-purple-400"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/trends"
          className={({ isActive }) =>
            isActive ? "text-purple-400 font-semibold" : "hover:text-purple-400"
          }
        >
          Trends
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
