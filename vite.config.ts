import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://dev-demo-env.colibricore.io",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
      "/brand": {
        target: "https://dev-idb.colibrirealestate.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/brand/, "/brand"),
      },
      "/register": {
        target: "https://dev-idb.colibrirealestate.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/register/, "/register"),
      },
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
    process: {},
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "src/main.tsx",
      name: "KeycloakWidget",
      formats: ["umd"],
      fileName: () => "keycloak-widget.umd.js",
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
});
