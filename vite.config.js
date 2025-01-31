import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/aman-portfolio/", // Set the base URL for GitHub Pages
  plugins: [react()],
  assetsInclude: ["**/*.jpg", "**/*.png"], // Include image types
});
