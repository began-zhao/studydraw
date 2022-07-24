export const data = JSON.parse("{\"key\":\"v-5d1d4cff\",\"path\":\"/code/java/database/mysql/some-thoughts-on-database-storage-time.html\",\"title\":\"MySQL数据库时间类型数据存储建议\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"MySQL数据库时间类型数据存储建议\",\"date\":\"2020-12-21T00:00:00.000Z\",\"category\":[\"数据库\"],\"tag\":[\"MySQL\"],\"summary\":\"我们平时开发中不可避免的就是要存储时间，比如我们要记录操作表中这条记录的时间、记录转账的交易时间、记录出发时间等等。你会发现时间这个东西与我们开发的联系还是非常紧密的，用的好与不好会给我们的业务甚至功能带来很大的影响。所以，我们有必要重新出发，好好认识一下这个东西。 这是一篇短小精悍的文章，仔细阅读一定能学到不少东西！ 1.切记不要用字符串存储日期 我记得我\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/database/mysql/some-thoughts-on-database-storage-time.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"MySQL数据库时间类型数据存储建议\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"MySQL\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-12-21T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":3,\"title\":\"1.切记不要用字符串存储日期\",\"slug\":\"_1-切记不要用字符串存储日期\",\"children\":[]},{\"level\":3,\"title\":\"2.Datetime 和 Timestamp 之间抉择\",\"slug\":\"_2-datetime-和-timestamp-之间抉择\",\"children\":[]},{\"level\":3,\"title\":\"3 再看 MySQL 日期类型存储空间\",\"slug\":\"_3-再看-mysql-日期类型存储空间\",\"children\":[]},{\"level\":3,\"title\":\"4.数值型时间戳是更好的选择吗？\",\"slug\":\"_4-数值型时间戳是更好的选择吗\",\"children\":[]},{\"level\":3,\"title\":\"5.总结\",\"slug\":\"_5-总结\",\"children\":[]}],\"readingTime\":{\"minutes\":5.44,\"words\":1631},\"filePathRelative\":\"code/java/database/mysql/some-thoughts-on-database-storage-time.md\",\"localizedDate\":\"2020年12月21日\"}")

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
