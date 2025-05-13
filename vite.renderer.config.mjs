import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      "/api/yiyan": {
        target: "https://international.v1.hitokoto.cn/",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api\/yiyan/, ""),
      },
      "/api": {
        target: "https://api-hot.imsyy.top/",
        changeOrigin: true,
        rewrite: (p) => p.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
