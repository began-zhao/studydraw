import { defineUserConfig } from "vuepress";
// import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "咖飞的博客",
  description: "咖飞的学习笔记分享",

  base: "/",
  theme,
  plugins: [
    // searchPlugin({
    //   // 排除首页
    //   // isSearchable: (page) => page.path !== '/',
    // }),
  ],
});
