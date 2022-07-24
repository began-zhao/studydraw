export const data = JSON.parse("{\"key\":\"v-01f75a27\",\"path\":\"/code/java/common/concurrent/java-concurrent-collections.html\",\"title\":\"Java 常见并发容器总结\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Java 常见并发容器总结\",\"date\":\"2020-08-19T00:00:00.000Z\",\"category\":[\"Java\"],\"tag\":[\"Java并发\"],\"summary\":\"JDK 提供的这些容器大部分在 java.util.concurrent 包中。\\rConcurrentHashMap : 线程安全的 HashMap; \\rCopyOnWriteArrayList : 线程安全的 List，在读多写少的场合性能非常好，远远好于 Vector。; \\rConcurrentLinkedQueue : 高效的并发队列，使用链表实现。可\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/common/concurrent/java-concurrent-collections.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Java 常见并发容器总结\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Java并发\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-08-19T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"ConcurrentHashMap\",\"slug\":\"concurrenthashmap\",\"children\":[]},{\"level\":2,\"title\":\"CopyOnWriteArrayList\",\"slug\":\"copyonwritearraylist\",\"children\":[{\"level\":3,\"title\":\"CopyOnWriteArrayList 简介\",\"slug\":\"copyonwritearraylist-简介\",\"children\":[]},{\"level\":3,\"title\":\"CopyOnWriteArrayList 是如何做到的？\",\"slug\":\"copyonwritearraylist-是如何做到的\",\"children\":[]},{\"level\":3,\"title\":\"CopyOnWriteArrayList 读取和写入源码简单分析\",\"slug\":\"copyonwritearraylist-读取和写入源码简单分析\",\"children\":[]}]},{\"level\":2,\"title\":\"ConcurrentLinkedQueue\",\"slug\":\"concurrentlinkedqueue\",\"children\":[]},{\"level\":2,\"title\":\"BlockingQueue\",\"slug\":\"blockingqueue\",\"children\":[{\"level\":3,\"title\":\"BlockingQueue 简介\",\"slug\":\"blockingqueue-简介\",\"children\":[]},{\"level\":3,\"title\":\"ArrayBlockingQueue\",\"slug\":\"arrayblockingqueue\",\"children\":[]},{\"level\":3,\"title\":\"LinkedBlockingQueue\",\"slug\":\"linkedblockingqueue\",\"children\":[]},{\"level\":3,\"title\":\"PriorityBlockingQueue\",\"slug\":\"priorityblockingqueue\",\"children\":[]}]},{\"level\":2,\"title\":\"ConcurrentSkipListMap\",\"slug\":\"concurrentskiplistmap\",\"children\":[]},{\"level\":2,\"title\":\"参考\",\"slug\":\"参考\",\"children\":[]}],\"readingTime\":{\"minutes\":10.08,\"words\":3024},\"filePathRelative\":\"code/java/common/concurrent/java-concurrent-collections.md\",\"localizedDate\":\"2020年8月19日\"}")

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
