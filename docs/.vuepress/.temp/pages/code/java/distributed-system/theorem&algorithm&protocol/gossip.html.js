export const data = JSON.parse("{\"key\":\"v-7396a8a6\",\"path\":\"/code/java/distributed-system/theorem&algorithm&protocol/gossip.html\",\"title\":\"Gossip 协议介绍\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Gossip 协议介绍\",\"icon\":\"分布式\",\"date\":\"2020-11-30T00:00:00.000Z\",\"summary\":\"背景 在分布式系统中，不同的节点进行数据/信息共享是一个基本的需求。 一种比较简单粗暴的方法就是 集中式发散消息，简单来说就是一个主节点同时共享最新信息给其他所有节点，比较适合中心化系统。这种方法的缺陷也很明显，节点多的时候不光同步消息的效率低，还太依赖与中心节点，存在单点风险问题。 于是，分散式发散消息 的 Gossip 协议 就诞生了。 Gossip 协\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/distributed-system/theorem&algorithm&protocol/gossip.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Gossip 协议介绍\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Gossip 协议介绍\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-11-30T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"背景\",\"slug\":\"背景\",\"children\":[]},{\"level\":2,\"title\":\"Gossip 协议介绍\",\"slug\":\"gossip-协议介绍\",\"children\":[]},{\"level\":2,\"title\":\"Gossip 协议应用\",\"slug\":\"gossip-协议应用\",\"children\":[]},{\"level\":2,\"title\":\"Gossip 协议消息传播模式\",\"slug\":\"gossip-协议消息传播模式\",\"children\":[{\"level\":3,\"title\":\"反熵(Anti-entropy)\",\"slug\":\"反熵-anti-entropy\",\"children\":[]},{\"level\":3,\"title\":\"谣言传播(Rumor mongering)\",\"slug\":\"谣言传播-rumor-mongering\",\"children\":[]},{\"level\":3,\"title\":\"总结\",\"slug\":\"总结\",\"children\":[]}]},{\"level\":2,\"title\":\"Gossip 协议优势和缺陷\",\"slug\":\"gossip-协议优势和缺陷\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结-1\",\"children\":[]},{\"level\":2,\"title\":\"参考\",\"slug\":\"参考\",\"children\":[]}],\"readingTime\":{\"minutes\":7.23,\"words\":2169},\"filePathRelative\":\"code/java/distributed-system/theorem&algorithm&protocol/gossip.md\",\"localizedDate\":\"2020年11月30日\"}")

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
