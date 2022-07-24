import { arraySidebar } from "vuepress-theme-hope";

export const note = arraySidebar([
  "",
  {
    text: "读书笔记",
    icon: "form",
    prefix: "life/",
    collapsable: true,
    children: [
      "",
      "1",
    ],
  },
  "debug/",
]);
