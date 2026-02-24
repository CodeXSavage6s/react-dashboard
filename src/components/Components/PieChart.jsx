//PieChart.jsx
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Direct", value: 40 },
  { name: "Referral", value: 30 },
  { name: "Social", value: 15 },
  { name: "Other", value: 15 },
];

const COLORS = ["#3b82f6", "#a855f7", "#f97316", "#1e40af"];
          // 1. Calculate total for the percentage logic
const total = data.reduce((acc, item) => acc + item.value, 0);
export default function TrafficSources() {
  return (
    <div className="all bg-[var(--bg-card)] rounded-2xl shadow-xl p-[1vh] mt-[2vh] transition-colors duration-200 text-[var(--text-primary)]">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-[1vh]">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">Traffic Sources</h2>
        <button className="text-gray-400 text-xl">•••</button>
      </div>

      {/* Donut Chart */}
      <div className="h-50">
        <ResponsiveContainer width="100%" height="100%">
<PieChart>
  <Tooltip
    contentStyle={{
      backgroundColor: "#fff",
      color: "#000", 
      border: "none",
      borderRadius: "12px",
    }}
    formatter={(value) => [`${((value / total) * 100).toFixed(1)}%`, "Ratio"]}
  />

  <Pie
    data={data}
    innerRadius={0}
    outerRadius={60}
    paddingAngle={0}
    dataKey="value"
    stroke="none"
    label={({ name }) => `${name}`} 
  >
    {data.map((entry, index) => (
      <Cell key={`cell-${index}`} fill={COLORS[index]} />
    ))}
  </Pie>
</PieChart>

         
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-[var(--text-primary)]">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            ></span>
            <span className="">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}