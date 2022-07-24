export const data = JSON.parse("{\"key\":\"v-472a9536\",\"path\":\"/code/java/distributed-system/theorem&algorithm&protocol/raft-algorithm.html\",\"title\":\"Raft 算法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Raft 算法\",\"category\":[\"分布式\"],\"date\":\"2020-11-30T00:00:00.000Z\",\"tag\":[\"分布式协议&算法\"],\"summary\":\"\\\" 本文由 SnailClimb 和 Xieqijun 共同完成。\\\" 1 背景 当今的数据中心和应用程序在高度动态的环境中运行，为了应对高度动态的环境，它们通过额外的服务器进行横向扩展，并且根据需求进行扩展和收缩。同时，服务器和网络故障也很常见。 因此，系统必须在正常操作期间处理服务器的上下线。它们必须对变故做出反应并在几秒钟内自动适应；对客户来说的话，明显\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/distributed-system/theorem&algorithm&protocol/raft-algorithm.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Raft 算法\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"分布式协议&算法\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-11-30T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"1 背景\",\"slug\":\"_1-背景\",\"children\":[{\"level\":3,\"title\":\"1.1 拜占庭将军\",\"slug\":\"_1-1-拜占庭将军\",\"children\":[]},{\"level\":3,\"title\":\"1.2 共识算法\",\"slug\":\"_1-2-共识算法\",\"children\":[]}]},{\"level\":2,\"title\":\"2 基础\",\"slug\":\"_2-基础\",\"children\":[{\"level\":3,\"title\":\"2.1 节点类型\",\"slug\":\"_2-1-节点类型\",\"children\":[]},{\"level\":3,\"title\":\"2.2 任期\",\"slug\":\"_2-2-任期\",\"children\":[]},{\"level\":3,\"title\":\"2.3 日志\",\"slug\":\"_2-3-日志\",\"children\":[]}]},{\"level\":2,\"title\":\"3 领导人选举\",\"slug\":\"_3-领导人选举\",\"children\":[]},{\"level\":2,\"title\":\"4 日志复制\",\"slug\":\"_4-日志复制\",\"children\":[]},{\"level\":2,\"title\":\"5 安全性\",\"slug\":\"_5-安全性\",\"children\":[{\"level\":3,\"title\":\"5.1 选举限制\",\"slug\":\"_5-1-选举限制\",\"children\":[]},{\"level\":3,\"title\":\"5.2 节点崩溃\",\"slug\":\"_5-2-节点崩溃\",\"children\":[]},{\"level\":3,\"title\":\"5.3 时间与可用性\",\"slug\":\"_5-3-时间与可用性\",\"children\":[]}]},{\"level\":2,\"title\":\"6 参考\",\"slug\":\"_6-参考\",\"children\":[]}],\"readingTime\":{\"minutes\":12.15,\"words\":3645},\"filePathRelative\":\"code/java/distributed-system/theorem&algorithm&protocol/raft-algorithm.md\",\"localizedDate\":\"2020年11月30日\"}")

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
