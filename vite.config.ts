import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true, // Automatically opens the report in the browser
      filename: "stats.html",
      gzipSize: true,
      brotliSize: true,
    }) as PluginOption,
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    minify: "esbuild",
    rollupOptions: {
      external: ["lodash", "d3"],
      output: {
        manualChunks: {
          recharts: ["recharts"],
        },
      },
      treeshake: true,
    },
  },
  optimizeDeps: {
    include: ["recharts/es6"],
  },
});
