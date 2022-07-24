export const data = JSON.parse("{\"key\":\"v-418a26c0\",\"path\":\"/code/java/high-availability/timeout-and-retry.html\",\"title\":\"超时&重试机制\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"超时&重试机制\",\"category\":[\"高可用\"],\"date\":\"2021-03-18T00:00:00.000Z\",\"summary\":\"一旦用户的请求超过某个时间得不到响应就结束此次请求并抛出异常。 如果不进行超时设置可能会导致请求响应速度慢，甚至导致请求堆积进而让系统无法在处理请求。 另外，重试的次数一般设为 3 次，再多次的重试没有好处，反而会加重服务器压力（部分场景使用失败重试机制会不太适合）。\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/high-availability/timeout-and-retry.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"超时&重试机制\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-03-18T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.45,\"words\":136},\"filePathRelative\":\"code/java/high-availability/timeout-and-retry.md\",\"localizedDate\":\"2021年3月18日\"}")

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
