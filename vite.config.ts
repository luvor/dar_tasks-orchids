import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      shortcuts: {
        btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
      },
    }),
  ],
});
