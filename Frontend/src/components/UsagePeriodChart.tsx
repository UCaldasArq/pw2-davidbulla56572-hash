import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import type { UsageRecord } from '../types';

interface UsagePeriodChartProps {
  records: UsageRecord[];
}

const COLORS = ['#0f172a', '#0ea5e9', '#f59e0b'];

const UsagePeriodChart: React.FC<UsagePeriodChartProps> = ({ records }) => {
  const dataMap = records.reduce((acc, curr) => {
    acc[curr.usagePeriod] = (acc[curr.usagePeriod] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.keys(dataMap).map((name) => ({
    name,
    value: dataMap[name],
  }));

  return (
    <div className="h-72 w-full">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-700">Ritmo</p>
        <h3 className="mt-2 text-xl font-bold text-slate-950">Uso por momento del dia</h3>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={88}
            innerRadius={48}
            dataKey="value"
            label={({ name, percent }) => `${name === 'Morning' ? 'Manana' : name === 'Afternoon' ? 'Tarde' : 'Noche'} ${((percent ?? 0) * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value, _name, item) => [value, item?.payload?.name === 'Morning' ? 'Manana' : item?.payload?.name === 'Afternoon' ? 'Tarde' : 'Noche']} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UsagePeriodChart;
