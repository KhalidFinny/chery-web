import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    plugins: [basicSsl()]
  }
});
