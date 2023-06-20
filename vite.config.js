import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';
import path from "path";

export default defineConfig({
  plugins: [react(
    {
      include: '**/*.{ts,js,tsx}',
    }
  )],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: `${path.resolve(__dirname, "./src/components/")}`,
    }
  },
  base: '',
  root: 'src',
  build: {
    outDir: '../dist',
  },
  server: {
    port: 8080
  },
  preview: {
    port: 8080
  }
})