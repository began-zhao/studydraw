export const data = JSON.parse("{\"key\":\"v-d15fda92\",\"path\":\"/code/java/high-performance/message-queue/rocketmq-questions.html\",\"title\":\"RocketMQ 常见问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"RocketMQ 常见问题\",\"category\":[\"MQ\"],\"date\":\"2021-04-22T00:00:00.000Z\",\"summary\":\"RocketMQ常见问题 本文来自读者 PR。 1 单机版消息中心 一个消息中心，最基本的需要支持多生产者、多消费者，例如下： 问题： 1. 没有实现真正执行消息存储落盘 2. 没有实现 NameServer 去作为注册中心，定位服务 3. 使用 LinkedBlockingQueue 作为消息队列，注意，参数是无限大，在真正 RocketMQ 也是如此是无\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/high-performance/message-queue/rocketmq-questions.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"RocketMQ 常见问题\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-04-22T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"1 单机版消息中心\",\"slug\":\"_1-单机版消息中心\",\"children\":[]},{\"level\":2,\"title\":\"2 分布式消息中心\",\"slug\":\"_2-分布式消息中心\",\"children\":[{\"level\":3,\"title\":\"2.1 问题与解决\",\"slug\":\"_2-1-问题与解决\",\"children\":[]}]},{\"level\":2,\"title\":\"3 参考\",\"slug\":\"_3-参考\",\"children\":[]}],\"readingTime\":{\"minutes\":8.31,\"words\":2492},\"filePathRelative\":\"code/java/high-performance/message-queue/rocketmq-questions.md\",\"localizedDate\":\"2021年4月22日\"}")

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
