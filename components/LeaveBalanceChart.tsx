
'use client';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Vacation Days', value: 18, total: 45, color: '#7A1F24' },
  { name: 'Sick Leave', value: 8, total: 12, color: '#B79C3B' },
  { name: 'Casual Leave', value: 5, total: 10, color: '#4B4B4B' },
];

const COLORS = ['#7A1F24', '#B79C3B', '#4B4B4B'];

export default function LeaveBalanceChart() {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border">
          <p className="font-medium text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-600">
            Remaining: {data.value} / {data.total} days
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-[#7A1F24]">Leave Balance</h3>
        <i className="ri-calendar-check-line w-5 h-5 flex items-center justify-center text-[#B79C3B] text-xl"></i>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3 mt-4">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: COLORS[index] }}
              ></div>
              <span className="text-sm font-medium text-gray-700">{item.name}</span>
            </div>
            <span className="text-sm text-gray-600 font-medium">
              {item.value}/{item.total} days
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

