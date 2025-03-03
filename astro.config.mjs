import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl';

import node from "@astrojs/node";

export default defineConfig({
  integrations: [tailwind()],
  output: "server",

  vite: {
    plugins: [basicSsl()]
  },

  adapter: node({
    mode: "middleware"
  })
});