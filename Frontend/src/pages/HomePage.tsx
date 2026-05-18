import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div className="section-stack">
      <section className="panel-dark relative overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.1),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.08),_transparent_28%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.18fr_0.82fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="eyebrow">Espacio de bienestar digital</p>
            <h1 className="mt-4 text-4xl text-slate-950 sm:text-5xl">
              Entiende los habitos digitales antes de que se vuelvan ruido.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Registra el tiempo en pantalla, organiza usuarios y transforma datos crudos
              en visualizaciones que tu equipo pueda usar para decidir mejor.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/dashboard" className="btn-primary">
                Abrir dashboard
              </Link>
              <Link to="/usage" className="btn-secondary">
                Registrar uso
              </Link>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[22px] border border-sky-100 bg-sky-50 px-5 py-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-sky-700">
                Por que importa
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                El tiempo en pantalla solo se vuelve util cuando es facil compararlo por persona,
                aplicacion y momento del dia.
              </p>
            </div>
            <div className="rounded-[22px] border border-amber-100 bg-amber-50 px-5 py-5">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-amber-700">
                Flujo actual
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-700">
                <div className="flex items-center gap-3">
                  <span className="tag border-sky-200 text-sky-700">01</span>
                  <span>Crear o revisar usuarios</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="tag border-sky-200 text-sky-700">02</span>
                  <span>Registrar tiempos de uso</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="tag border-sky-200 text-sky-700">03</span>
                  <span>Leer los indicadores del dashboard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center gap-3 px-1">
          <div className="h-px flex-1 bg-slate-200" />
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-slate-300" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-gray-700">
              Resumen
            </span>
          </div>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <article className="stat-card cursor-default border-slate-200/90 bg-white/72 opacity-92 shadow-none">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-lg text-gray-700">
              •
            </div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">Registro de usuarios</p>
            <h3 className="mt-4 text-3xl text-slate-950">Seguimiento centrado en personas</h3>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Mantiene organizado el listado de usuarios antes de agregar informacion de comportamiento.
            </p>
          </article>
          <article className="stat-card cursor-default border-slate-200/90 bg-white/72 opacity-92 shadow-none">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-lg text-gray-700">
              •
            </div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">Historial de uso</p>
            <h3 className="mt-4 text-3xl text-slate-950">Captura de datos clara</h3>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Registra tiempos por aplicacion y periodo con un flujo que se entiende rapido.
            </p>
          </article>
          <article className="stat-card cursor-default border-slate-200/90 bg-white/72 opacity-92 shadow-none">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-lg text-gray-700">
              •
            </div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-slate-500">Dashboard</p>
            <h3 className="mt-4 text-3xl text-slate-950">Lectura visual del uso</h3>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Compara las aplicaciones mas usadas e identifica patrones por momento del dia.
            </p>
          </article>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center gap-3 px-1">
          <div className="h-px flex-1 bg-sky-200" />
          <div className="flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-sky-500" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-sky-700">
              Acciones
            </span>
          </div>
          <div className="h-px flex-1 bg-sky-200" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Link to="/users" className="panel group relative overflow-hidden border-sky-200 bg-white p-7 shadow-[0_24px_56px_-38px_rgba(14,116,144,0.22)] transition hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-[0_28px_64px_-36px_rgba(14,116,144,0.28)] focus:outline-none focus:ring-4 focus:ring-sky-100">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-sky-500" />
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-lg font-bold text-sky-700 shadow-inner">
                U
              </div>
              <div className="rounded-full bg-sky-50 px-3 py-2 text-sm font-bold text-sky-700 transition group-hover:translate-x-1 group-hover:bg-sky-100">
                →
              </div>
            </div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-sky-700">Usuarios</p>
            <h3 className="mt-4 text-3xl text-slate-950">Gestionar usuarios</h3>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Crea la base de personas antes de asociarles registros de uso.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-950">
              <span>Ir a usuarios</span>
            </div>
          </Link>
          <Link to="/usage" className="panel group relative overflow-hidden border-amber-200 bg-white p-7 shadow-[0_24px_56px_-38px_rgba(217,119,6,0.2)] transition hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-[0_28px_64px_-36px_rgba(217,119,6,0.24)] focus:outline-none focus:ring-4 focus:ring-amber-100">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-amber-500" />
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-lg font-bold text-amber-700 shadow-inner">
                R
              </div>
              <div className="rounded-full bg-amber-50 px-3 py-2 text-sm font-bold text-amber-700 transition group-hover:translate-x-1 group-hover:bg-amber-100">
                →
              </div>
            </div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-amber-700">Registros</p>
            <h3 className="mt-4 text-3xl text-slate-950">Registrar uso</h3>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Guarda minutos, horas y periodos para que cada sesion sea analizable.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-950">
              <span>Abrir registro de uso</span>
            </div>
          </Link>
          <Link to="/dashboard" className="panel group relative overflow-hidden border-emerald-200 bg-white p-7 shadow-[0_24px_56px_-38px_rgba(5,150,105,0.18)] transition hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_28px_64px_-36px_rgba(5,150,105,0.24)] focus:outline-none focus:ring-4 focus:ring-emerald-100">
            <div className="absolute inset-x-0 top-0 h-1.5 bg-emerald-500" />
            <div className="mb-6 flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-lg font-bold text-emerald-700 shadow-inner">
                D
              </div>
              <div className="rounded-full bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700 transition group-hover:translate-x-1 group-hover:bg-emerald-100">
                →
              </div>
            </div>
            <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-emerald-700">Analitica</p>
            <h3 className="mt-4 text-3xl text-slate-950">Ver dashboard</h3>
            <p className="mt-4 text-sm leading-8 text-slate-600">
              Consulta los graficos que muestran que aplicaciones consumen mas atencion.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-slate-950">
              <span>Explorar analitica</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
