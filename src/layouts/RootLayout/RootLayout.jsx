import { Link, Outlet } from "react-router-dom";
import { appRoutes } from "../../app/routes";

function RootLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_32%),linear-gradient(180deg,#020617_0%,#020617_100%)] text-slate-100">
      <header className="border-b border-white/10 bg-white/5 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
              sinap-login
            </p>
            <p className="text-sm text-slate-300">
              Base simples para crescer com o projeto.
            </p>
          </div>

          <nav className="flex items-center gap-2 text-sm">
            {appRoutes.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className="rounded-full px-4 py-2 transition text-slate-300 hover:bg-white/10 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-5xl items-center justify-center px-6 py-12">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
