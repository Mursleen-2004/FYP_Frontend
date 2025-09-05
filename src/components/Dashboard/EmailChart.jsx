import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Open', value: 40 },
  { name: 'Bounce', value: 40 },
  { name: 'Unsubscribe', value: 20 },
];

const COLORS = ['#8884d8', '#ffc658', '#ff4c4c'];

const EmailChart = () => {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Email Statistics</h2>
      <PieChart width={250} height={250}>
        <Pie
          data={data}
          dataKey="value"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default EmailChart;
