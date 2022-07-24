import { useStyleTag } from "D:/blog/gitblog/studydraw/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.87/node_modules/vuepress-plugin-components/lib/client/composables";
import { h } from "vue";
import { defineClientConfig } from "@vuepress/client";
import Badge from "D:/blog/gitblog/studydraw/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.87/node_modules/vuepress-plugin-components/lib/client/components/Badge";
import FontIcon from "D:/blog/gitblog/studydraw/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.87/node_modules/vuepress-plugin-components/lib/client/components/FontIcon";
import BackToTop from "D:/blog/gitblog/studydraw/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-components@2.0.0-beta.87/node_modules/vuepress-plugin-components/lib/client/components/BackToTop";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Badge", Badge);
    app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`@import url("//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css");`, { id: "icon-assets" });
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});