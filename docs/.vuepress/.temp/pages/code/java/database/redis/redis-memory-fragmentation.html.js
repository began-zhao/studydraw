export const data = JSON.parse("{\"key\":\"v-c4df73ec\",\"path\":\"/code/java/database/redis/redis-memory-fragmentation.html\",\"title\":\"Redis 内存碎片详解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Redis 内存碎片详解\",\"date\":\"2021-11-18T00:00:00.000Z\",\"category\":[\"redis\"],\"tag\":[\"Redis\"],\"summary\":\"什么是内存碎片? 你可以将内存碎片简单地理解为那些不可用的空闲内存。 举个例子：操作系统为你分配了 32 字节的连续内存空间，而你存储数据实际只需要使用 24 字节内存空间，那这多余出来的 8 字节内存空间如果后续没办法再被分配存储其他数据的话，就可以被称为内存碎片。 Redis 内存碎片虽然不会影响 Redis 性能，但是会增加内存消耗。 为什么会有 Re\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/database/redis/redis-memory-fragmentation.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Redis 内存碎片详解\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Redis\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-11-18T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"什么是内存碎片?\",\"slug\":\"什么是内存碎片\",\"children\":[]},{\"level\":2,\"title\":\"为什么会有 Redis 内存碎片?\",\"slug\":\"为什么会有-redis-内存碎片\",\"children\":[]},{\"level\":2,\"title\":\"如何查看 Redis 内存碎片的信息？\",\"slug\":\"如何查看-redis-内存碎片的信息\",\"children\":[]},{\"level\":2,\"title\":\"如何清理 Redis 内存碎片？\",\"slug\":\"如何清理-redis-内存碎片\",\"children\":[]},{\"level\":2,\"title\":\"参考\",\"slug\":\"参考\",\"children\":[]}],\"readingTime\":{\"minutes\":4.76,\"words\":1428},\"filePathRelative\":\"code/java/database/redis/redis-memory-fragmentation.md\",\"localizedDate\":\"2021年11月18日\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
