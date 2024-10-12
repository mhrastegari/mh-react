import { useState } from "react";
import { ROUTES } from "../constants/router/routes";
import { Outlet, Link, useLocation } from "react-router-dom";

export default function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const currentRoute = ROUTES.find((route) => route.path === location.pathname);
  const headerTitle = currentRoute?.title || "MH React";

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="flex flex-col h-screen">
      <header className="fixed top-0 bg-white z-10 px-4 h-14 text-xl font-bold w-full shadow-md flex gap-4 justify-between items-center">
        <span>{headerTitle}</span>
        <button className="text-2xl lg:hidden" onClick={toggleNav}>
          ☰
        </button>
      </header>

      <div className="flex flex-row h-full pt-14">
        <nav
          className={`bg-blue-500 w-52 top-0 p-4 h-full fixed lg:static transition-transform transform ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 z-20`}
        >
          <ul className="flex flex-col gap-4">
            {ROUTES.map((route) => (
              <li key={route.path}>
                <Link
                  to={route.path}
                  className="block text-white hover:text-slate-300 w-full"
                  onClick={toggleNav}
                >
                  {route.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <main className="flex-grow p-8 overflow-auto">
          <Outlet />
        </main>

        {isNavOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 lg:hidden"
            onClick={toggleNav}
          />
        )}
      </div>
    </div>
  );
}
