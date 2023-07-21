
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
  // Load env variables from the appropriate .env file based on the mode (development/production)
  dotenv.config({ path: `./.env.${mode}` });

  return {
    define: {
      __APP_ENV__: JSON.stringify(process.env.VITE_APP_ENV),
    },
    plugins: [react()],
  };
});