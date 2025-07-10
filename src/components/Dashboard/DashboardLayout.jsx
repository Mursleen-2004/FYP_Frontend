import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full min-h-screen bg-[#0b0c10] text-white p-8 space-y-6">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
