import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base : process.env.BASE || "/",
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "SellEcx",
        short_name: "SellEcx",
        description:
          "Join millions of people worldwide in purchasing and selling digital assets in a convenient, quick, and safe environment.",
        display: "fullscreen",
        theme_color: "#fdba35",
        background_color: "#fdba35",
      },
      registerType: "autoUpdate",
      workbox: {
        cleanupOutdatedCaches: true,
      },
    }),
  ],
  resolve: {
    alias: {
      src: __dirname + "/src",
    },
  },
});
