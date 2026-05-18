import React from 'react';
import type { Application } from '../types';

interface ApplicationTableProps {
  applications: Application[];
  onDelete: (id: number) => void;
  onEdit: (app: Application) => void;
}

const ApplicationTable: React.FC<ApplicationTableProps> = ({ applications, onDelete, onEdit }) => {
  return (
    <div className="table-shell">
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>
                  <div className="font-semibold text-slate-900">{app.name}</div>
                </td>
                <td>
                  <div className="flex gap-2">
                    <button onClick={() => onEdit(app)} className="btn-secondary">
                      Editar
                    </button>
                    <button onClick={() => app.id && onDelete(app.id)} className="btn-danger">
                      Eliminar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {applications.length === 0 && (
              <tr>
                <td colSpan={2} className="text-center text-sm text-slate-500 py-4">
                  No hay aplicaciones registradas
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationTable;
