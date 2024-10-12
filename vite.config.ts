import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  //For GitHub Pages
  const baseUrl = mode === "production" ? "/mh-react/" : "/";

  return {
    base: baseUrl,
    plugins: [react()],
  };
});
