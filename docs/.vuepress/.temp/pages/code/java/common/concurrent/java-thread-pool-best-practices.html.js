export const data = JSON.parse("{\"key\":\"v-4676cd69\",\"path\":\"/code/java/common/concurrent/java-thread-pool-best-practices.html\",\"title\":\"Java 线程池最佳实践\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Java 线程池最佳实践\",\"date\":\"2020-08-21T00:00:00.000Z\",\"category\":[\"Java\"],\"tag\":[\"Java并发\"],\"summary\":\"这篇文章篇幅虽短，但是绝对是干货。标题稍微有点夸张，嘿嘿，实际都是自己使用线程池的时候总结的一些个人感觉比较重要的点。 线程池知识回顾 开始这篇文章之前还是简单介绍一嘴线程池，之前写的《新手也能看懂的线程池学习总结》这篇文章介绍的很详细了。 为什么要使用线程池？\\r\\\" 池化技术想必大家已经屡见不鲜了，线程池、数据库连接池、Http 连接池等等都是对这个思想的应\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/common/concurrent/java-thread-pool-best-practices.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Java 线程池最佳实践\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Java 线程池最佳实践\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Java并发\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-08-21T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"线程池知识回顾\",\"slug\":\"线程池知识回顾\",\"children\":[{\"level\":3,\"title\":\"为什么要使用线程池？\",\"slug\":\"为什么要使用线程池\",\"children\":[]},{\"level\":3,\"title\":\"线程池在实际项目的使用场景\",\"slug\":\"线程池在实际项目的使用场景\",\"children\":[]},{\"level\":3,\"title\":\"如何使用线程池？\",\"slug\":\"如何使用线程池\",\"children\":[]}]},{\"level\":2,\"title\":\"线程池最佳实践\",\"slug\":\"线程池最佳实践\",\"children\":[{\"level\":3,\"title\":\"1. 使用 ThreadPoolExecutor  的构造函数声明线程池\",\"slug\":\"_1-使用-threadpoolexecutor-的构造函数声明线程池\",\"children\":[]},{\"level\":3,\"title\":\"2.监测线程池运行状态\",\"slug\":\"_2-监测线程池运行状态\",\"children\":[]},{\"level\":3,\"title\":\"3.建议不同类别的业务用不同的线程池\",\"slug\":\"_3-建议不同类别的业务用不同的线程池\",\"children\":[]},{\"level\":3,\"title\":\"4.别忘记给线程池命名\",\"slug\":\"_4-别忘记给线程池命名\",\"children\":[]},{\"level\":3,\"title\":\"5.正确配置线程池参数\",\"slug\":\"_5-正确配置线程池参数\",\"children\":[]}]}],\"readingTime\":{\"minutes\":13.81,\"words\":4144},\"filePathRelative\":\"code/java/common/concurrent/java-thread-pool-best-practices.md\",\"localizedDate\":\"2020年8月21日\"}")

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
