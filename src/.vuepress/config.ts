import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  // favicon: "/assets/favicon.ico",
  lang: "en-US",
  title: "Wildfire On: Life & Play",
  description: "Where innovation meets entertainment. From cutting-edge tech trends to immersive gaming experiences, Wildfire On sparks curiosity and delivers insights that fuel your passion for all things digital and interactive",
  theme,
  // Enable it with pwa
  // shouldPrefetch: false,
});
