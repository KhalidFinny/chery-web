import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

export default defineConfig({
  integrations: [tailwind()],
  output: "server",

  vite: {
    plugins: []
  },

  adapter: node({
    mode: "middleware"
  })
});
