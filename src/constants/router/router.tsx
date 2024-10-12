import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ROUTES } from "./routes";
import Layout from "../../components/Layout";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      {ROUTES.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Route>
  )
);
