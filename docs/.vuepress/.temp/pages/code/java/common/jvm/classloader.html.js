export const data = JSON.parse("{\"key\":\"v-808fc0c8\",\"path\":\"/code/java/common/jvm/classloader.html\",\"title\":\"类加载器详解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"类加载器详解\",\"category\":[\"Java\"],\"date\":\"2020-09-21T00:00:00.000Z\",\"tag\":[\"JVM\"],\"summary\":\"类加载器详解 回顾一下类加载过程 类加载过程：加载->连接->初始化。连接过程又可分为三步：验证->准备->解析。 一个非数组类的加载阶段（加载阶段获取类的二进制字节流的动作）是可控性最强的阶段，这一步我们可以去自定义类加载器去控制字节流的获取方式（重写一个类加载器的 loadClass() 方法）。数组类型不通过类加载器创建，它由 Java 虚拟机直接创建\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/common/jvm/classloader.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"类加载器详解\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"JVM\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-09-21T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"回顾一下类加载过程\",\"slug\":\"回顾一下类加载过程\",\"children\":[]},{\"level\":2,\"title\":\"类加载器总结\",\"slug\":\"类加载器总结\",\"children\":[]},{\"level\":2,\"title\":\"双亲委派模型\",\"slug\":\"双亲委派模型\",\"children\":[{\"level\":3,\"title\":\"双亲委派模型介绍\",\"slug\":\"双亲委派模型介绍\",\"children\":[]},{\"level\":3,\"title\":\"双亲委派模型实现源码分析\",\"slug\":\"双亲委派模型实现源码分析\",\"children\":[]},{\"level\":3,\"title\":\"双亲委派模型的好处\",\"slug\":\"双亲委派模型的好处\",\"children\":[]},{\"level\":3,\"title\":\"如果我们不想用双亲委派模型怎么办？\",\"slug\":\"如果我们不想用双亲委派模型怎么办\",\"children\":[]}]},{\"level\":2,\"title\":\"自定义类加载器\",\"slug\":\"自定义类加载器\",\"children\":[]},{\"level\":2,\"title\":\"推荐阅读\",\"slug\":\"推荐阅读\",\"children\":[]}],\"readingTime\":{\"minutes\":4.78,\"words\":1435},\"filePathRelative\":\"code/java/common/jvm/classloader.md\",\"localizedDate\":\"2020年9月21日\"}")

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
