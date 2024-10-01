import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  // favicon: "/assets/favicon.ico",
  lang: "en-US",
  title: "Wildfire On Fashion",
  description: "Where fashion and lifestyle catch fire",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
