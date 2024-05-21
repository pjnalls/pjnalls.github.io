import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";

const manifest: VitePWAOptions = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touc-icon.png", "masked-icon.svg"],
  manifest: {
    name: "Preston's Portfolio",
    short_name: "pjnalls.github.io",
    start_url: "/",
    description:
      "🧬🧑‍💻🔬 Portfolio website of a senior software engineer with experience in iOS, Android, Web, .NET, Angular, React and React Native development 🍎🤖⚛️ ♥️ #OneLove 🌏🌎🌍",
    icons: [
      {
        src: "/assets/pwa/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/pwa/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/assets/pwa/apple-icon-180.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/assets/pwa/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#e9dfff",
    background_color: "#190444",
    display: "standalone",
    scope: "/",
    orientation: "portrait",
  },
  injectRegister: false,
  minify: false,
  workbox: {},
  injectManifest: {},
  includeManifestIcons: false,
  disable: false,
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifest)],
});
