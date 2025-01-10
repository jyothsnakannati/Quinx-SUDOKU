import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/jyothsnakannati/Quinx-SUDOKU/',  // Replace with your repository name
});

