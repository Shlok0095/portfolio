import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages: https://shlok0095.github.io/portfolio/
const repoBase = process.env.CI ? "/portfolio/" : "/";

export default defineConfig({
  base: repoBase,
  plugins: [react()],
});
