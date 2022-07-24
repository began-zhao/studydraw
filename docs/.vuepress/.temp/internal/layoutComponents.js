import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/blog/gitblog/studydraw/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.87/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("D:/blog/gitblog/studydraw/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.87/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import("D:/blog/gitblog/studydraw/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.87/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js")),
  "Blog": defineAsyncComponent(() => import("D:/blog/gitblog/studydraw/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.87/node_modules/vuepress-theme-hope/lib/client/module/blog/layouts/Blog.js")),
}
