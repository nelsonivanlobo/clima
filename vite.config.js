import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
   base: '/clima/', // Asegúrate de reemplazar {NombreRepo} con el nombre real de tu repositorio
// https://vitejs.dev/config/
})
