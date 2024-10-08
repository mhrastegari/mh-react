import { RouterProvider } from "react-router-dom";
import { router } from "./constants/router/router";

export default function App() {
  return <RouterProvider router={router} />;
}
