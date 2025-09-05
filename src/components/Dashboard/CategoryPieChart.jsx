import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CategoryPieChart = ({ data }) => {
  const formatted = data.map((d) => ({ name: d._id, value: d.count }));

  return (
    <div className="bg-[#1e293b] rounded-xl shadow-md p-5 text-[#e5e7eb]">
      <h2 className="text-lg font-semibold mb-4">Tone Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={formatted} dataKey="value" outerRadius={90} label>
            {formatted.map((_, index) => (
              <Cell
                key={index}
                fill={[
                  "#537895",
                  "#D4145A",
                  "#FCEE21",
                  "#FFC371",
                  "#1D2671",
                ][index % 5]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffff",
              border: "none",
              color: "#fff",
              cursor:"pointer",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryPieChart;
