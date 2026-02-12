import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/setup.ts'],
    css: true,
    env: {
      VITE_RENDER_MODE: 'TEST',
    },
    coverage: {
      provider: 'v8',
      enabled: true,
      clean: true,
      cleanOnRerun: true,
      reportsDirectory: './coverage',
      
      // Multiple report formats
      reporter: [
        'text',           // Console output
        'text-summary',   // Summary in console
        'json',           // JSON for CI/CD
        'json-summary',   // Summary JSON
        'html',           // Interactive HTML report
        'lcov',           // For external tools
        'cobertura',      // XML format for CI/CD
      ],
      
      // Files to include in coverage
      include: [
        'src/**/*.{ts,tsx}',
      ],
      
      // Files to exclude from coverage
      exclude: [
        'node_modules/',
        'src/__tests__/**',
        'src/**/*.test.{ts,tsx}',
        'src/**/*.spec.{ts,tsx}',
        '**/*.d.ts',
        '**/*.config.*',
        '**/mockData/',
        '**/mocks/',
        'dist/',
        'public/',
        'docs/',
        'src/vite-env.d.ts',
        'src/custom.d.ts',
        'src/main.tsx', // Entry point, hard to test
      ],
      
      // Coverage thresholds - fail build if not met
      thresholds: {
        lines: 65,
        functions: 65,
        branches: 60,
        statements: 65,
        autoUpdate: false,
      },
      
      // Show coverage for all files, not just tested ones
      all: true,
      
      // Line-by-line coverage in reports
      lines: true,
      functions: true,
      branches: true,
      statements: true,
    },
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['node_modules', 'dist', '.git'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
