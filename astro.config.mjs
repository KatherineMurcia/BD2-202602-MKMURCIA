import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://katherinemurcia.github.io/BD2-202602-MKMURCIA",
  base: "/BD2-202602-MKMURCIA",
  integrations: [mdx(), sitemap(), tailwind()],
});