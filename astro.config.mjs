import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from '@astrojs/vercel/serverless';

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
  output: 'server',
  adapter: vercel({
    imageService: true,
  }),
});
