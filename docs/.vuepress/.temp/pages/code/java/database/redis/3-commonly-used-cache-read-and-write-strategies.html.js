export const data = JSON.parse("{\"key\":\"v-58f2155e\",\"path\":\"/code/java/database/redis/3-commonly-used-cache-read-and-write-strategies.html\",\"title\":\"3种常用的缓存读写策略详解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"3种常用的缓存读写策略详解\",\"date\":\"2021-11-18T00:00:00.000Z\",\"category\":[\"数据库\"],\"tag\":[\"Redis\"],\"summary\":\"看到很多小伙伴简历上写了“熟练使用缓存”，但是被我问到“缓存常用的3种读写策略”的时候却一脸懵逼。 在我看来，造成这个问题的原因是我们在学习 Redis 的时候，可能只是简单了写一些 Demo，并没有去关注缓存的读写策略，或者说压根不知道这回事。 但是，搞懂3种常见的缓存读写策略对于实际工作中使用缓存以及面试中被问到缓存都是非常有帮助的！ 下面我会简单介绍一\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/database/redis/3-commonly-used-cache-read-and-write-strategies.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"3种常用的缓存读写策略详解\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Redis\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-11-18T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":3,\"title\":\"Cache Aside Pattern（旁路缓存模式）\",\"slug\":\"cache-aside-pattern-旁路缓存模式\",\"children\":[]},{\"level\":3,\"title\":\"Read/Write Through Pattern（读写穿透）\",\"slug\":\"read-write-through-pattern-读写穿透\",\"children\":[]},{\"level\":3,\"title\":\"Write Behind Pattern（异步缓存写入）\",\"slug\":\"write-behind-pattern-异步缓存写入\",\"children\":[]}],\"readingTime\":{\"minutes\":5.69,\"words\":1708},\"filePathRelative\":\"code/java/database/redis/3-commonly-used-cache-read-and-write-strategies.md\",\"localizedDate\":\"2021年11月18日\"}")

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
