import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/light_hive/", // Adjust to your repository name
  build: {
    outDir: "build" // Output to 'build' instead of 'dist'
  }
});
