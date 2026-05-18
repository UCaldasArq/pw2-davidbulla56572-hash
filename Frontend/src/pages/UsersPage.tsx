import React, { useState, useEffect } from 'react';
import UserForm from '../components/UserForm';
import UserTable from '../components/UserTable';
import type { User } from '../types';
import { getUsers, createUser, deleteUser } from '../services/userService';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await getUsers();
      setUsers(response.data);
      setError(null);
    } catch (err) {
      setError('No fue posible cargar los usuarios. ¿El backend esta activo?');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleCreateUser = async (user: User) => {
    try {
      await createUser(user);
      fetchUsers();
    } catch (err: any) {
      if (err.response && err.response.status === 400) {
        alert('Error de validacion: ' + (err.response.data.message || 'Revisa los campos'));
      } else {
        alert('Error al crear el usuario');
      }
    }
  };

  const handleDeleteUser = async (id: string) => {
    if (window.confirm('¿Seguro que deseas eliminar este usuario?')) {
      try {
        await deleteUser(id);
        fetchUsers();
      } catch (err) {
        alert('Error al eliminar el usuario');
      }
    }
  };

  return (
    <div className="space-y-8">
      <section className="panel-dark px-6 py-8 sm:px-8">
        <p className="eyebrow">Gestion de directorio</p>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-4xl font-bold">Gestion de usuarios</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-800 sm:text-base">
              Registra personas, cuida la calidad de sus datos y mantén ordenada la base del sistema.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] border border-white/12 bg-white/10 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-gray-700">Usuarios cargados</p>
              <p className="mt-2 text-3xl font-bold">{loading ? '...' : users.length}</p>
            </div>
            <div className="rounded-[22px] border border-white/12 bg-white/10 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-gray-700">Estado</p>
              <p className="mt-2 text-sm font-semibold">{error ? 'Con incidencia' : 'Listo para gestionar'}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-4 px-1">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Crear</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">Registrar usuario</h2>
          </div>
          <UserForm onSubmit={handleCreateUser} />
        </div>
        <div>
          <div className="mb-4 px-1">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Listado</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">Usuarios registrados</h2>
          </div>
          {loading ? (
            <div className="panel p-8 text-sm text-slate-500">Cargando usuarios...</div>
          ) : error ? (
            <div className="panel border border-rose-200 p-8 text-sm text-rose-600">{error}</div>
          ) : (
            <UserTable users={users} onDelete={handleDeleteUser} />
          )}
        </div>
      </section>
    </div>
  );
};

export default UsersPage;
