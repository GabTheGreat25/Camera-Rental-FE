import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url";

const srcPath = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": srcPath,
      "@assets": `${srcPath}/assets`,
      "@generateKey": `${srcPath}/services/generateKey`,
      "@dataTable": `${srcPath}/services/dataTable`,
      "@component": `${srcPath}/component`,
      "@transactions": `${srcPath}/page/Transactions`,
      "@api": `${srcPath}/state/api/reducer`,
      "@auth": `${srcPath}/state/auth/authReducer`,
      "@sidebar": `${srcPath}/state/sidebar/authSideBar`,
    },
  },
  server: {
    port: 6969,
  },
});
