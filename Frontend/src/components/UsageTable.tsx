import React from 'react';
import type { UsageRecord } from '../types';

interface UsageTableProps {
  records: UsageRecord[];
  onDelete: (id: string) => void;
}

const UsageTable: React.FC<UsageTableProps> = ({ records, onDelete }) => {
  return (
    <div className="table-shell">
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Aplicacion</th>
              <th>Tiempo</th>
              <th>Periodo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record) => (
              <tr key={record.id}>
                <td>
                  <div className="font-semibold text-slate-900">
                    {record.user ? `${record.user.firstName} ${record.user.lastName}` : record.userId}
                  </div>
                </td>
                <td>{record.application?.name ?? '—'}</td>
                <td>{record.days}d {record.hours}h {record.minutes}m</td>
                <td>
                  <span className="tag border-slate-200 bg-slate-50 text-slate-600">{record.usagePeriod === 'MORNING' ? 'Mañana' : record.usagePeriod === 'AFTERNOON' ? 'Tarde' : 'Noche'}</span>
                </td>
                <td>
                  <button onClick={() => record.id && onDelete(record.id)} className="btn-danger">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsageTable;
