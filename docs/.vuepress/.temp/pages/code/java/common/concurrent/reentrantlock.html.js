export const data = JSON.parse("{\"key\":\"v-3c8e1a8e\",\"path\":\"/code/java/common/concurrent/reentrantlock.html\",\"title\":\"从ReentrantLock的实现看AQS的原理及应用\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"从ReentrantLock的实现看AQS的原理及应用\",\"date\":\"2020-08-21T00:00:00.000Z\",\"category\":[\"Java\"],\"tag\":[\"Java并发\"],\"summary\":\"\\\" 本文转载自：https://tech.meituan.com/2019/12/05/aqs-theory-and-apply.html\\\"\\r\\\"\\\"\\r\\\" 作者：美团技术团队\\\" 前言 Java 中的大部分同步类（Semaphore、ReentrantLock 等）都是基于 AbstractQueuedSynchronizer（简称为 AQS）实现的。AQS 是一\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/common/concurrent/reentrantlock.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"从ReentrantLock的实现看AQS的原理及应用\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Java并发\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-08-21T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"children\":[]},{\"level\":2,\"title\":\"1 ReentrantLock\",\"slug\":\"_1-reentrantlock\",\"children\":[{\"level\":3,\"title\":\"1.1 ReentrantLock 特性概览\",\"slug\":\"_1-1-reentrantlock-特性概览\",\"children\":[]},{\"level\":3,\"title\":\"1.2 ReentrantLock 与 AQS 的关联\",\"slug\":\"_1-2-reentrantlock-与-aqs-的关联\",\"children\":[]}]},{\"level\":2,\"title\":\"2 AQS\",\"slug\":\"_2-aqs\",\"children\":[{\"level\":3,\"title\":\"2.1 原理概览\",\"slug\":\"_2-1-原理概览\",\"children\":[]}]},{\"level\":2,\"title\":\"2.2 AQS 重要方法与 ReentrantLock 的关联\",\"slug\":\"_2-2-aqs-重要方法与-reentrantlock-的关联\",\"children\":[]},{\"level\":2,\"title\":\"2.3 通过 ReentrantLock 理解 AQS\",\"slug\":\"_2-3-通过-reentrantlock-理解-aqs\",\"children\":[{\"level\":3,\"title\":\"2.3.1 线程加入等待队列\",\"slug\":\"_2-3-1-线程加入等待队列\",\"children\":[]},{\"level\":3,\"title\":\"2.3.2 CANCELLED 状态节点生成\",\"slug\":\"_2-3-2-cancelled-状态节点生成\",\"children\":[]},{\"level\":3,\"title\":\"2.3.3 如何解锁\",\"slug\":\"_2-3-3-如何解锁\",\"children\":[]},{\"level\":3,\"title\":\"2.3.4 中断恢复后的执行流程\",\"slug\":\"_2-3-4-中断恢复后的执行流程\",\"children\":[]},{\"level\":3,\"title\":\"2.3.5 小结\",\"slug\":\"_2-3-5-小结\",\"children\":[]}]},{\"level\":2,\"title\":\"3 AQS 应用\",\"slug\":\"_3-aqs-应用\",\"children\":[{\"level\":3,\"title\":\"3.1 ReentrantLock 的可重入应用\",\"slug\":\"_3-1-reentrantlock-的可重入应用\",\"children\":[]},{\"level\":3,\"title\":\"3.2 JUC 中的应用场景\",\"slug\":\"_3-2-juc-中的应用场景\",\"children\":[]},{\"level\":3,\"title\":\"3.3 自定义同步工具\",\"slug\":\"_3-3-自定义同步工具\",\"children\":[]}]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"children\":[]},{\"level\":2,\"title\":\"参考资料\",\"slug\":\"参考资料\",\"children\":[]}],\"readingTime\":{\"minutes\":29.8,\"words\":8939},\"filePathRelative\":\"code/java/common/concurrent/reentrantlock.md\",\"localizedDate\":\"2020年8月21日\"}")

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
