import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UsageForm from '../components/UsageForm';
import UsageTable from '../components/UsageTable';
import type { User, UsageRecord, Application } from '../types';
import { getUsageRecords, createUsageRecord, deleteUsageRecord, getApplications } from '../services/usageService';
import { getUsers } from '../services/userService';

const UsagePage: React.FC = () => {
  const [records, setRecords] = useState<UsageRecord[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [filterApp, setFilterApp] = useState('');
  const [filterUser, setFilterUser] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const [usageRes, userRes, appRes] = await Promise.all([
        getUsageRecords(),
        getUsers(),
        getApplications(),
      ]);
      setRecords(usageRes.data);
      setUsers(userRes.data);
      setApplications(appRes.data);
      setError(null);
    } catch (err) {
      setError('No fue posible cargar la informacion');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateRecord = async (record: UsageRecord) => {
    try {
      await createUsageRecord(record);
      fetchData();
    } catch {
      alert('Error al guardar el registro');
    }
  };

  const handleDeleteRecord = async (id: string) => {
    if (window.confirm('¿Deseas eliminar este registro?')) {
      try {
        await deleteUsageRecord(id);
        fetchData();
      } catch {
        alert('Error al eliminar el registro');
      }
    }
  };

  const filteredRecords = records.filter((r) => {
    const matchesApp = filterApp ? r.application?.name === filterApp : true;
    const matchesUser = filterUser ? r.userId === filterUser : true;
    return matchesApp && matchesUser;
  });

  return (
    <div className="space-y-8">
      <section className="panel-dark px-6 py-8 sm:px-8">
        <p className="eyebrow">Captura de uso</p>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-4xl font-bold">Uso de aplicaciones</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-700 sm:text-base">
              Registra actividad, filtra el historial y mantén cada dato listo para analisis posteriores.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-[22px] border border-white/12 bg-white/10 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-gray-700">Registros</p>
              <p className="mt-2 text-3xl font-bold">{loading ? '...' : records.length}</p>
            </div>
            <div className="rounded-[22px] border border-white/12 bg-white/10 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-gray-700">Aplicaciones</p>
              <p className="mt-2 text-3xl font-bold">{loading ? '...' : applications.length}</p>
            </div>
            <div className="rounded-[22px] border border-white/12 bg-white/10 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-gray-700">Usuarios</p>
              <p className="mt-2 text-3xl font-bold">{loading ? '...' : users.length}</p>
            </div>
          </div>
          <Link
            to="/applications"
            className="self-end rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/25"
          >
            + Gestionar aplicaciones
          </Link>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-4 px-1">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Captura</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">Registrar uso</h2>
          </div>
          <UsageForm users={users} applications={applications} onSubmit={handleCreateRecord} />
        </div>

        <div>
          <div className="mb-4 flex flex-col gap-4 px-1 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Historial</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">Linea de uso</h2>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <select value={filterApp} onChange={(e) => setFilterApp(e.target.value)} className="field-input min-w-40">
                <option value="">Todas las aplicaciones</option>
                {applications.map((app) => <option key={app.id} value={app.name}>{app.name}</option>)}
              </select>
              <select value={filterUser} onChange={(e) => setFilterUser(e.target.value)} className="field-input min-w-40">
                <option value="">Todos los usuarios</option>
                {users.map((u) => <option key={u.id} value={u.id}>{u.firstName} {u.lastName}</option>)}
              </select>
            </div>
          </div>

          {loading ? (
            <div className="panel p-8 text-sm text-slate-500">Cargando historial de uso...</div>
          ) : error ? (
            <div className="panel border border-rose-200 p-8 text-sm text-rose-600">{error}</div>
          ) : (
            <UsageTable records={filteredRecords} onDelete={handleDeleteRecord} />
          )}
        </div>
      </section>
    </div>
  );
};

export default UsagePage;
