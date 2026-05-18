import React from 'react';
import type { User } from '../types';

interface UserTableProps {
  users: User[];
  onDelete: (id: string) => void;
}

const UserTable: React.FC<UserTableProps> = ({ users, onDelete }) => {
  return (
    <div className="table-shell">
      <div className="overflow-x-auto">
        <table className="data-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Nombre</th>
              <th>Documento</th>
              <th>Telefono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <div className="font-semibold text-slate-900">{user.email}</div>
                </td>
                <td>
                  <div className="font-semibold text-slate-900">{user.firstName} {user.lastName}</div>
                </td>
                <td>{user.document}</td>
                <td>{user.phoneNumber}</td>
                <td>
                  <button onClick={() => user.id && onDelete(user.id)} className="btn-danger">
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

export default UserTable;
