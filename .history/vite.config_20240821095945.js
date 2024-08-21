// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/NewsWave/", // Replace with your repository name
  build: {
    outDir: "dist", // This should specify the output directory as 'dist'
  },
});
