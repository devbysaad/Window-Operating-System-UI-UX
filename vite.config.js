import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // base:process.env.VITE_BASE_PATH || "/Window-Operating-System-UI-UX"
})
