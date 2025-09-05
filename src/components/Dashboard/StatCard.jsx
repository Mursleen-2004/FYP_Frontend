const StatCard = ({ icon, label, value, desc }) => {
  return (
    <div className="bg-[#1e293b] text-[#e5e7eb] rounded-xl shadow-md p-5 hover:shadow-xl transition-all">
      <div className="flex justify-between items-center">
        <div className="text-[#F49867]">{icon}</div>
        <p className="text-sm text-gray-400">{desc}</p>
      </div>
      <h2 className="text-md font-semibold mt-2">{label}</h2>
      <p className="text-2xl font-bold text-[#F49867]">{value}</p>
    </div>
  );
};

export default StatCard;
