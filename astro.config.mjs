import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    defaultStrategy: "viewport",
  },
  integrations: [tailwind()],
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
});
