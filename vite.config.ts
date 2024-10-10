import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  //For GitHub Pages
  const baseUrl = mode === "production" ? "/mh-react/" : "/";

  return {
    base: baseUrl,
    plugins: [s
      react(),
      VitePWA({
        registerType: "autoUpdate",
        scope: baseUrl,
        manifest: {
          name: "MH React App",
          short_name: "MH App",
          description: "All of MH React Apps.",
          theme_color: "#ffffff",
          background_color: "#ffffff",
          display: "standalone",
          orientation: "portrait",
          start_url: "/",
          icons: [
            {
              src: "icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
        workbox: {
          runtimeCaching: [
            {
              urlPattern: ({ request }) =>
                request.destination === "document" ||
                request.destination === "image",
              handler: "NetworkFirst",
              options: {
                cacheName: "html-images",
              },
            },
          ],
        },
      }),
    ],
  };
});
