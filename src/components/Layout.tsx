import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { ROUTES } from "../constants/router/routes";

export default function Layout() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const currentRoute = ROUTES.find((route) => route.path === location.pathname);
  const headerTitle = currentRoute?.title || "App";

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="flex flex-col h-screen">
      <header className="fixed top-0 bg-white z-10 px-4 h-14 text-xl font-bold w-full shadow-md flex justify-between items-center">
        <span>{headerTitle}</span>
        <button className="text-2xl lg:hidden" onClick={toggleNav}>
          ☰
        </button>
      </header>

      <div className="flex flex-row h-full pt-14">
        <nav
          className={`bg-blue-500 w-48 top-0 p-4 h-full fixed lg:static transition-transform transform ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 z-20`}
        >
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/"
                className="block text-white hover:text-slate-300 w-full"
                onClick={toggleNav}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/todo"
                className="block text-white hover:text-slate-300 w-full"
                onClick={toggleNav}
              >
                Todo
              </Link>
            </li>
            <li>
              <Link
                to="/weather"
                className="block text-white hover:text-slate-300 w-full"
                onClick={toggleNav}
              >
                Weather
              </Link>
            </li>
            <li>
              <Link
                to="/tictactoe"
                className="block text-white hover:text-slate-300 w-full"
                onClick={toggleNav}
              >
                Tic Tac Toe
              </Link>
            </li>
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
