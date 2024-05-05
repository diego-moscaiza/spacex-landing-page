import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

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
  output: "hybrid",
  adapter: node({
    mode: "standalone",
  }),
});
