import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { remarkCitations } from "./src/plugins/remark-citations";

const base = process.env.PUBLIC_BASE_PATH || "/";

export default defineConfig({
  output: "static",
  base,
  integrations: [react()],
  markdown: {
    remarkPlugins: [remarkCitations],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
