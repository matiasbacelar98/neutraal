import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': `${path.resolve(__dirname, './src/components/')}`,
      '@pages': `${path.resolve(__dirname, './src/components/pages/')}`,
      '@ui': `${path.resolve(__dirname, './src/components/UI/')}`,
      '@layouts': `${path.resolve(__dirname, './src/components/layouts/')}`,
      '@constants': `${path.resolve(__dirname, './src/constants')}`,
      '@assets': `${path.resolve(__dirname, './src/assets/')}`,
      '@types': `${path.resolve(__dirname, './src/types')}`,
    },
  },
});
