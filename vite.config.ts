import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import { cssInjectedByJsPlugin } from './src/tools/vite-plugin-css-injector';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react(), tailwindcss(), cssInjectedByJsPlugin()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_AUTH_GATEWAY_URL_DEV,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/api/, "/api"),
        },
        "/global": {
          target: env.VITE_GLOBAL_API_URL_DEV,
          changeOrigin: true,
          secure: true,
          rewrite: (path) => path.replace(/^\/global/, "/global"),
        }
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
          inlineDynamicImports: true,
        },
      },
    },
  };
});