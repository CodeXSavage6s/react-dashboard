//,LineChart.jsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", earnings: 3000, expenses: 1800 },
  { month: "Feb", earnings: 4000, expenses: 2000 },
  { month: "Mar", earnings: 7000, expenses: 4500 },
  { month: "Apr", earnings: 4500, expenses: 5500 },
  { month: "May", earnings: 8500, expenses: 5000 },
  { month: "Jun", earnings: 9000, expenses: 6500 },
];

export default function SalesOverview() {
  return (
    <div className="all bg-[var(--bg-card)] rounded-2xl shadow-xl mt-[2vh] transition-colors duration-200">
      
      {/* Header */}
      <div className="flex justify-between items-center mx-[1vh] mb-[1vh] transition-colors duration-200">
        <h2 className="text-xl font-semibold text-[var(--text-primary)]">Sales Overview</h2>
        <div className="flex gap-3">
          <button className="w-4 h-4 bg-[var(--color-primary)] rounded-full"></button>
          <button className="w-4 h-4 bg-[var(--color-secondary)] rounded-full"></button>
        </div>
      </div>

      {/* Chart */}
      <div className="h-40 ml-[-10%] md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
            
            <XAxis 
              dataKey="month" 
              stroke="var(--text-secondary)"
            />
            
            <YAxis 
              stroke="var(--text-secondary)"
              tickFormatter={(value) => `${value / 1000}k`}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "var(--bg-card)",
                border: "none",
                borderRadius: "2vh",
              }}
              className="all"
            />

            <Legend 
              wrapperStyle={{ color: "#cbd5e1" }}
            />

            <Line
              type="monotone"
              dataKey="earnings"
              stroke="var(--color-primary)"
              strokeWidth={3}
              dot={{ r: 2 }}
              activeDot={{ r: 4 }}
            />

            <Line
              type="monotone"
              dataKey="expenses"
              stroke="var(--color-secondary)"
              strokeWidth={3}
              dot={{ r: 2 }}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}