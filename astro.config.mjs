import { defineConfig, squooshImageService } from "astro/config";
import vercelStatic from "@astrojs/vercel/static";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  image: {
    service: squooshImageService(),
  },
  output: "static",
  adapter: vercelStatic(),
});
