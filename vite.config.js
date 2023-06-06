import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    define: {
      "process.env.SUPABASE_URL": JSON.stringify(process.env.SUPABASE_URL),
      "process.env.SUPABASE_TOKEN": JSON.stringify(process.env.SUPABASE_TOKEN),
    },
  };
});
