export const data = JSON.parse("{\"key\":\"v-31a56016\",\"path\":\"/code/java/system-design/schedule-task.html\",\"title\":\"Java 定时任务详解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Java 定时任务详解\",\"date\":\"2021-05-21T00:00:00.000Z\",\"category\":[\"MQ\"],\"summary\":\"Java 定时任务详解 为什么需要定时任务？ 我们来看一下几个非常常见的业务场景： 1. 某系统凌晨要进行数据备份。 2. 某电商平台，用户下单半个小时未支付的情况下需要自动取消订单。 3. 某媒体聚合平台，每 10 分钟动态抓取某某网站的数据为自己所用。 4. 某博客平台，支持定时发送文章。 5. 某基金平台，每晚定时计算用户当日收益情况并推送给用户最新的\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/system-design/schedule-task.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Java 定时任务详解\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-05-21T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"为什么需要定时任务？\",\"slug\":\"为什么需要定时任务\",\"children\":[]},{\"level\":2,\"title\":\"单机定时任务技术选型\",\"slug\":\"单机定时任务技术选型\",\"children\":[{\"level\":3,\"title\":\"Timer\",\"slug\":\"timer\",\"children\":[]},{\"level\":3,\"title\":\"ScheduledExecutorService\",\"slug\":\"scheduledexecutorservice\",\"children\":[]},{\"level\":3,\"title\":\"Spring Task\",\"slug\":\"spring-task\",\"children\":[]},{\"level\":3,\"title\":\"时间轮\",\"slug\":\"时间轮\",\"children\":[]}]},{\"level\":2,\"title\":\"分布式定时任务技术选型\",\"slug\":\"分布式定时任务技术选型\",\"children\":[{\"level\":3,\"title\":\"Quartz\",\"slug\":\"quartz\",\"children\":[]},{\"level\":3,\"title\":\"Elastic-Job\",\"slug\":\"elastic-job\",\"children\":[]},{\"level\":3,\"title\":\"XXL-JOB\",\"slug\":\"xxl-job\",\"children\":[]},{\"level\":3,\"title\":\"PowerJob\",\"slug\":\"powerjob\",\"children\":[]}]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"children\":[]}],\"readingTime\":{\"minutes\":13.18,\"words\":3953},\"filePathRelative\":\"code/java/system-design/schedule-task.md\",\"localizedDate\":\"2021年5月21日\"}")

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
