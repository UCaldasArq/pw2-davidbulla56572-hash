import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { UsageRecord } from '../types';

interface ApplicationChartProps {
  records: UsageRecord[];
}

const ApplicationChart: React.FC<ApplicationChartProps> = ({ records }) => {
  const dataMap = records.reduce((acc, curr) => {
    const totalMinutes = (curr.days * 24 * 60) + (curr.hours * 60) + curr.minutes;
    const appName = curr.application?.name ?? 'Unknown';
    acc[appName] = (acc[appName] || 0) + totalMinutes;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.keys(dataMap).map((name) => ({
    name,
    minutes: dataMap[name],
    hours: parseFloat((dataMap[name] / 60).toFixed(2)),
  }));

  return (
    <div className="h-72 w-full">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-gray-700">Distribucion</p>
        <h3 className="mt-2 text-xl font-bold text-slate-950">Uso por aplicacion</h3>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#dbe4f0" vertical={false} />
          <XAxis dataKey="name" tick={{ fill: '#475569', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#475569', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="hours" radius={[10, 10, 0, 0]} fill="#0f172a" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ApplicationChart;
