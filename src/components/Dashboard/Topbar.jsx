import { Menu } from "lucide-react";

const Topbar = ({ user, onMenuClick }) => {
  return (
    <div className="bg-[#161b22] px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center shadow text-[#e5e7eb] rounded-b-xl">
      <div className="flex items-center gap-4 w-full justify-between">
        <h1 className="text-xl sm:text-2xl font-bold">
          Welcome,{" "}
          <span className="text-[#F49867]">{user?.name || "Guest"}</span>
        </h1>
        <button onClick={onMenuClick} className="lg:hidden">
          <Menu size={24} />
        </button>
      </div>
      <div className="flex items-center gap-3 mt-2 sm:mt-0">
        <p className="text-white text-sm hidden sm:block">{user?.email}</p>
        <div className="w-10 h-10 rounded-full bg-[#F49867] text-[#0d1117] flex items-center justify-center font-bold">
          {user?.name?.charAt(0).toUpperCase() || "U"}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
