const Analytics = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">📊 Your Post Stats</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#1f2833] p-4 rounded-xl">Posts This Week: <b>12</b></div>
        <div className="bg-[#1f2833] p-4 rounded-xl">Most Used Tone: <b>Professional</b></div>
      </div>
    </div>
  );
};

export default Analytics;
