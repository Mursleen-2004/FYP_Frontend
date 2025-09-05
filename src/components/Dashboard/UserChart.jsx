import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '9AM', Open: 400, Click: 240, SecondClick: 100 },
  { time: '12PM', Open: 500, Click: 260, SecondClick: 120 },
  { time: '3PM', Open: 600, Click: 290, SecondClick: 150 },
  { time: '6PM', Open: 700, Click: 300, SecondClick: 170 },
];

const UserChart = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Users Behavior (24h)</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="Open" stroke="#8884d8" />
          <Line type="monotone" dataKey="Click" stroke="#82ca9d" />
          <Line type="monotone" dataKey="SecondClick" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserChart;
