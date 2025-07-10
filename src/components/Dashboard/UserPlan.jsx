const UserPlan = ({ plan, credits }) => {
  return (
    <div className="bg-[#1f2833] p-4 rounded-xl">
      <h2 className="text-lg font-bold mb-2">⚙️ Your Plan</h2>
      <p>Plan: <b>{plan}</b></p>
      <p>Credits Left Today: <b>{credits}</b></p>
      {plan === "Free" && <button className="mt-2 bg-[#66fcf1] text-black px-4 py-1 rounded-md">Upgrade</button>}
    </div>
  );
};

export default UserPlan;
