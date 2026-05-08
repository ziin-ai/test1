import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { remarkCitations } from "./src/plugins/remark-citations";

export default defineConfig({
  output: "static",
  integrations: [react()],
  markdown: {
    remarkPlugins: [remarkCitations],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
