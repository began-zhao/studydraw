export const data = JSON.parse("{\"key\":\"v-5af03abe\",\"path\":\"/code/java/system-design/framework/spring/spring-transaction.html\",\"title\":\"Spring 事务详解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Spring 事务详解\",\"category\":[\"框架\"],\"date\":\"2021-05-03T00:00:00.000Z\",\"tag\":[\"Spring\"],\"summary\":\"前段时间答应读者的 Spring 事务 分析总结终于来了。这部分内容比较重要，不论是对于工作还是面试，但是网上比较好的参考资料比较少。 什么是事务？ 事务是逻辑上的一组操作，要么都执行，要么都不执行。 相信大家应该都能背上面这句话了，下面我结合我们日常的真实开发来谈一谈。 我们系统的每个业务方法可能包括了多个原子性的数据库操作，比如下面的 savePerso\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/system-design/framework/spring/spring-transaction.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Spring 事务详解\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"Spring 事务详解\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Spring\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-05-03T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"什么是事务？\",\"slug\":\"什么是事务\",\"children\":[]},{\"level\":2,\"title\":\"事务的特性（ACID）了解么?\",\"slug\":\"事务的特性-acid-了解么\",\"children\":[]},{\"level\":2,\"title\":\"详谈 Spring 对事务的支持\",\"slug\":\"详谈-spring-对事务的支持\",\"children\":[{\"level\":3,\"title\":\"Spring 支持两种方式的事务管理\",\"slug\":\"spring-支持两种方式的事务管理\",\"children\":[]},{\"level\":3,\"title\":\"Spring 事务管理接口介绍\",\"slug\":\"spring-事务管理接口介绍\",\"children\":[]},{\"level\":3,\"title\":\"事务属性详解\",\"slug\":\"事务属性详解\",\"children\":[]},{\"level\":3,\"title\":\"@Transactional 注解使用详解\",\"slug\":\"transactional-注解使用详解\",\"children\":[]}]},{\"level\":2,\"title\":\"参考\",\"slug\":\"参考\",\"children\":[]}],\"readingTime\":{\"minutes\":20.97,\"words\":6292},\"filePathRelative\":\"code/java/system-design/framework/spring/spring-transaction.md\",\"localizedDate\":\"2021年5月3日\"}")

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
