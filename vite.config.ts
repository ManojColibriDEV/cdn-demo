import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import { cssInjectedByJsPlugin } from './src/tools/vite-plugin-css-injector';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), cssInjectedByJsPlugin()],
  server: {
    proxy: {
      "/api": {
        target: "https://dev-demo-env.colibrilearning.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, "/api"),
      },
      "/admin": {
        target: "https://dev-demo-env.colibrilearning.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/admin/, "/admin"),
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
      "/keycloak": {
        target: "https://dev-keycloak.colibricore.io",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/keycloak/, ""),
      },
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
    // Force WEBCOMPONENT mode for production builds
    ...(mode === 'production' && {
      "import.meta.env.VITE_RENDER_MODE": '"WEBCOMPONENT"'
    }),
    process: {},
  },
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "src/main.tsx",
      name: "ColibriIdentityWidget",
      formats: ["es", "umd"],
      fileName: (format) => `keycloak-widget.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'keycloak-widget.css';
          return assetInfo.name || 'asset';
        },
        inlineDynamicImports: true,
      },
    },
  },
}));