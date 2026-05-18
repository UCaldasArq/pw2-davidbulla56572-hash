import React, { useState, useEffect, useMemo } from 'react';
import ApplicationChart from '../components/ApplicationChart';
import UsagePeriodChart from '../components/UsagePeriodChart';
import type { UsageRecord } from '../types';
import { getUsageRecords } from '../services/usageService';

const DashboardPage: React.FC = () => {
  const [records, setRecords] = useState<UsageRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await getUsageRecords();
        setRecords(response.data);
      } catch (err) {
        console.error('No fue posible cargar los registros de uso', err);
      } finally {
        setLoading(false);
      }
    };
    fetchRecords();
  }, []);

  const totals = useMemo(() => {
    const totalMinutes = records.reduce(
      (sum, current) => sum + (current.days * 24 * 60) + (current.hours * 60) + current.minutes,
      0,
    );

    const dataMap = records.reduce((acc, curr) => {
      const usageMinutes = (curr.days * 24 * 60) + (curr.hours * 60) + curr.minutes;
      const appName = curr.application?.name ?? 'Unknown';
      acc[appName] = (acc[appName] || 0) + usageMinutes;
      return acc;
    }, {} as Record<string, number>);

    let topApp = '';
    let maxTime = -1;

    for (const [app, time] of Object.entries(dataMap)) {
      if (time > maxTime) {
        maxTime = time;
        topApp = app;
      }
    }

    return {
      totalMinutes,
      topApp,
      topAppHours: maxTime > -1 ? (maxTime / 60).toFixed(1) : '0.0',
      applicationCount: Object.keys(dataMap).length,
    };
  }, [records]);

  if (loading) {
    return <div className="panel p-8 text-center text-slate-500">Cargando dashboard...</div>;
  }

  return (
    <div className="space-y-8">
      <section className="panel-dark px-6 py-8 sm:px-8">
        <p className="eyebrow">Analitica visual</p>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-4xl font-bold ">Dashboard de uso</h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-700 sm:text-base">
              Lee el conjunto de datos de un vistazo, entiende la concentracion por aplicacion y detecta los periodos de mayor actividad.
            </p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        <article className="stat-card">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Total de registros</p>
          <p className="mt-3 text-4xl font-bold text-slate-950">{records.length}</p>
          <p className="mt-3 text-sm leading-6 text-slate-500">Eventos de uso capturados.</p>
        </article>
        <article className="stat-card">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Aplicacion mas usada</p>
          <p className="mt-3 text-4xl font-bold text-slate-950">{totals.topApp || 'N/D'}</p>
          <p className="mt-3 text-sm leading-6 text-slate-500">La aplicacion con mayor carga horaria acumulada.</p>
        </article>
        <article className="stat-card">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Horas registradas</p>
          <p className="mt-3 text-4xl font-bold text-slate-950">{(totals.totalMinutes / 60).toFixed(1)}</p>
          <p className="mt-3 text-sm leading-6 text-slate-500">Tiempo total representado en el sistema.</p>
        </article>
        <article className="stat-card">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Aplicaciones activas</p>
          <p className="mt-3 text-4xl font-bold text-slate-950">{totals.applicationCount}</p>
          <p className="mt-3 text-sm leading-6 text-slate-500">Aplicaciones distintas con uso registrado.</p>
        </article>
      </section>

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="panel p-6">
          <ApplicationChart records={records} />
        </div>
        <div className="panel p-6">
          <UsagePeriodChart records={records} />
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
