import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "src", // 👈 Добавляем путь к корневой папке с main.jsx
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "../dist",    // 👈 Куда сохранять билд
    emptyOutDir: true,    // 👈 Очистить папку перед билдом
  },
});
