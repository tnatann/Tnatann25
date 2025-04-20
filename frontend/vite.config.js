import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      filename: "./dist/stats.html", // You can change this path
      open: true, // Automatically opens the report after build
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  optimizeDeps: {
    exclude: ["country-state-city"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // If the module is `country-state-city`, create a separate chunk
          if (id.includes("country-state-city")) {
            return "country-state-city"; // This will create a separate chunk for this library
          }
        },
      },
    },
  },
});
