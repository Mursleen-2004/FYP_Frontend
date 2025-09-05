import { LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-[#0d1117] min-h-screen text-[#e5e7eb] p-6 shadow-lg border-r border-[#1e293b]">
      <Link
        to="/"
        className="text-2xl font-bold bg-gradient-to-r from-[#AE67FA] to-[#F49867] bg-clip-text text-transparent"
      >
        Content Genius
      </Link>
      <nav className="flex flex-col gap-6 mt-10 text-[16px] font-medium">
        <button className="flex items-center gap-3 hover:text-[#F49867] cursor-pointer transition">
          <LayoutDashboard /> Dashboard
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
