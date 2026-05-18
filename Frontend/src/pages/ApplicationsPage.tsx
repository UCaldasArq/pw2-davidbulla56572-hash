import React, { useState, useEffect } from 'react';
import ApplicationForm from '../components/ApplicationForm';
import ApplicationTable from '../components/ApplicationTable';
import type { Application } from '../types';
import { getApplications, createApplication, updateApplication, deleteApplication } from '../services/applicationService';

const ApplicationsPage: React.FC = () => {
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingApp, setEditingApp] = useState<Application | null>(null);

  const fetchApps = async () => {
    try {
      setLoading(true);
      const response = await getApplications();
      setApps(response.data);
      setError(null);
    } catch {
      setError('No fue posible cargar las aplicaciones. ¿El backend esta activo?');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApps();
  }, []);

  const handleCreateOrUpdate = async (app: Application) => {
    try {
      if (app.id) {
        await updateApplication(app.id, app);
      } else {
        await createApplication(app);
      }
      setEditingApp(null);
      fetchApps();
    } catch (err: any) {
      if (err.response && err.response.data && err.response.data.message) {
        alert('Error: ' + err.response.data.message);
      } else {
        alert('Error al guardar la aplicacion');
      }
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('¿Seguro que deseas eliminar esta aplicacion?')) {
      try {
        await deleteApplication(id);
        fetchApps();
      } catch {
        alert('Error al eliminar la aplicacion');
      }
    }
  };

  const handleEdit = (app: Application) => {
    setEditingApp(app);
  };

  const handleCancelEdit = () => {
    setEditingApp(null);
  };

  return (
    <div className="space-y-8">
      <section className="panel-dark px-6 py-8 sm:px-8">
        <p className="eyebrow">Catalogo de software</p>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-4xl font-bold">Gestion de aplicaciones</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-800 sm:text-base">
              Administra las aplicaciones que se monitorean. Agrega nuevas, edita nombres existentes o elimina las que ya no necesites.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-[22px] border border-white/12 bg-white/10 px-5 py-4">
              <p className="text-xs uppercase tracking-[0.24em] text-gray-700">Aplicaciones registradas</p>
              <p className="mt-2 text-3xl font-bold text-white">{loading ? '...' : apps.length}</p>
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
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
              {editingApp ? 'Editar' : 'Crear'}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              {editingApp ? 'Editar aplicacion' : 'Registrar aplicacion'}
            </h2>
          </div>
          <ApplicationForm onSubmit={handleCreateOrUpdate} initialData={editingApp} />
          {editingApp && (
            <button
              onClick={handleCancelEdit}
              className="mt-3 w-full rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-slate-950"
            >
              Cancelar edicion
            </button>
          )}
        </div>

        <div>
          <div className="mb-4 px-1">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Listado</p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">Aplicaciones registradas</h2>
          </div>
          {loading ? (
            <div className="panel p-8 text-sm text-slate-500">Cargando aplicaciones...</div>
          ) : error ? (
            <div className="panel border border-rose-200 p-8 text-sm text-rose-600">{error}</div>
          ) : (
            <ApplicationTable applications={apps} onDelete={handleDelete} onEdit={handleEdit} />
          )}
        </div>
      </section>
    </div>
  );
};

export default ApplicationsPage;
