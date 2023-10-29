import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: "https://statictest.kinsta.cloud/",
  base: "/astro",
  vite: {
    type: "module",

    // ssr: {
    //   noExternal: ["@builder.io/react"],
    // },
    build: {
      rollupOptions: {
        output: {
          entryFileNames: "[name]-[hash].js",
        },
      },
    },
  },
});
