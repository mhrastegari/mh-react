import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  //For GitHub Pages
  const baseUrl = mode === "production" ? "/mh-react/" : "/";

  return {
    base: baseUrl,
    plugins: [react()],
    build: {
      rollupOptions: {
        output: {
          entryFileNames: 'script.js',
          chunkFileNames: 'chunk-script.js',
          assetFileNames: (assetInfo) => {
            if (!assetInfo.names || assetInfo.names.length === 0) {
              return 'assets/default.[ext]';
            }

            const assetName = assetInfo.names[0];
            if (assetName.endsWith('.css')) {
              return 'style.css';
            }
            return `assets/${assetName}-[hash][extname]`;
          },
        },
      },
    },
  };
});
