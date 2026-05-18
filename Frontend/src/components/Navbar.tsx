import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/users', label: 'Usuarios' },
  { to: '/usage', label: 'Uso' },
  { to: '/applications', label: 'Aplicaciones' },
  { to: '/dashboard', label: 'Dashboard' },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 px-2 pt-2 md:px-4 md:pt-4">
      <nav className="mx-auto flex w-full max-w-7xl flex-col gap-5 rounded-[26px] border border-slate-200/90 bg-white/92 px-5 py-4 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.18)] backdrop-blur sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <NavLink to="/" className="flex items-center gap-3 self-start">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
            PB
          </span>
          <span>
            <span className="block text-lg font-extrabold tracking-tight text-slate-950">PulseBoard</span>
            <span className="mt-0.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Control de tiempo en pantalla
            </span>
          </span>
        </NavLink>

        <div className="flex flex-wrap items-center gap-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                [
                  'rounded-full px-4 py-2.5 text-sm font-semibold transition',
                  isActive
                    ? 'bg-slate-950 text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
