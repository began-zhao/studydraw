export const data = JSON.parse("{\"key\":\"v-b3b51aee\",\"path\":\"/code/java/database/mysql/innodb-implementation-of-mvcc.html\",\"title\":\"InnoDB存储引擎对MVCC的实现\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"InnoDB存储引擎对MVCC的实现\",\"date\":\"2020-12-21T00:00:00.000Z\",\"category\":[\"数据库\"],\"tag\":[\"MySQL\"],\"summary\":\"一致性非锁定读和锁定读 一致性非锁定读 对于 一致性非锁定读（Consistent Nonlocking Reads） 的实现，通常做法是加一个版本号或者时间戳字段，在更新数据的同时版本号 + 1 或者更新时间戳。查询时，将当前可见的版本号与对应记录的版本号进行比对，如果记录的版本小于可见版本，则表示该记录可见 在 InnoDB 存储引擎中，多版本控制 (m\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/database/mysql/innodb-implementation-of-mvcc.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"InnoDB存储引擎对MVCC的实现\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"InnoDB存储引擎对MVCC的实现\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"MySQL\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-12-21T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"一致性非锁定读和锁定读\",\"slug\":\"一致性非锁定读和锁定读\",\"children\":[{\"level\":3,\"title\":\"一致性非锁定读\",\"slug\":\"一致性非锁定读\",\"children\":[]},{\"level\":3,\"title\":\"锁定读\",\"slug\":\"锁定读\",\"children\":[]}]},{\"level\":2,\"title\":\"InnoDB 对 MVCC 的实现\",\"slug\":\"innodb-对-mvcc-的实现\",\"children\":[{\"level\":3,\"title\":\"隐藏字段\",\"slug\":\"隐藏字段\",\"children\":[]},{\"level\":3,\"title\":\"ReadView\",\"slug\":\"readview\",\"children\":[]},{\"level\":3,\"title\":\"undo-log\",\"slug\":\"undo-log\",\"children\":[]},{\"level\":3,\"title\":\"数据可见性算法\",\"slug\":\"数据可见性算法\",\"children\":[]}]},{\"level\":2,\"title\":\"RC 和 RR 隔离级别下 MVCC 的差异\",\"slug\":\"rc-和-rr-隔离级别下-mvcc-的差异\",\"children\":[]},{\"level\":2,\"title\":\"MVCC 解决不可重复读问题\",\"slug\":\"mvcc-解决不可重复读问题\",\"children\":[{\"level\":3,\"title\":\"在 RC 下 ReadView 生成情况\",\"slug\":\"在-rc-下-readview-生成情况\",\"children\":[]},{\"level\":3,\"title\":\"在 RR 下 ReadView 生成情况\",\"slug\":\"在-rr-下-readview-生成情况\",\"children\":[]}]},{\"level\":2,\"title\":\"MVCC➕Next-key-Lock 防止幻读\",\"slug\":\"mvcc➕next-key-lock-防止幻读\",\"children\":[]},{\"level\":2,\"title\":\"参考\",\"slug\":\"参考\",\"children\":[]}],\"readingTime\":{\"minutes\":12.57,\"words\":3771},\"filePathRelative\":\"code/java/database/mysql/innodb-implementation-of-mvcc.md\",\"localizedDate\":\"2020年12月21日\"}")

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
