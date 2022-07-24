export const data = JSON.parse("{\"key\":\"v-0ffe16c0\",\"path\":\"/code/java/database/mysql/transaction-isolation-level.html\",\"title\":\"MySQL事务隔离级别详解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"MySQL事务隔离级别详解\",\"date\":\"2020-12-21T00:00:00.000Z\",\"category\":[\"数据库\"],\"tag\":[\"MySQL\"],\"summary\":\"\\\" 本文由 SnailClimb 和 guang19 共同完成。\\\" 事务隔离级别(图文详解) 什么是事务? 事务是逻辑上的一组操作，要么都执行，要么都不执行。 事务最经典也经常被拿出来说例子就是转账了。假如小明要给小红转账 1000 元，这个转账会涉及到两个关键操作就是：将小明的余额减少 1000 元，将小红的余额增加 1000 元。万一在这两个操作之间突然\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/database/mysql/transaction-isolation-level.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"MySQL事务隔离级别详解\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"MySQL\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-12-21T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"事务隔离级别(图文详解)\",\"slug\":\"事务隔离级别-图文详解\",\"children\":[{\"level\":3,\"title\":\"什么是事务?\",\"slug\":\"什么是事务\",\"children\":[]},{\"level\":3,\"title\":\"事务的特性(ACID)\",\"slug\":\"事务的特性-acid\",\"children\":[]},{\"level\":3,\"title\":\"并发事务带来的问题\",\"slug\":\"并发事务带来的问题\",\"children\":[]},{\"level\":3,\"title\":\"事务隔离级别\",\"slug\":\"事务隔离级别\",\"children\":[]},{\"level\":3,\"title\":\"实际情况演示\",\"slug\":\"实际情况演示\",\"children\":[]},{\"level\":3,\"title\":\"参考\",\"slug\":\"参考\",\"children\":[]}]}],\"readingTime\":{\"minutes\":8.87,\"words\":2661},\"filePathRelative\":\"code/java/database/mysql/transaction-isolation-level.md\",\"localizedDate\":\"2020年12月21日\"}")

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
