export const data = JSON.parse("{\"key\":\"v-406b1082\",\"path\":\"/code/java/database/mysql/mysql-logs.html\",\"title\":\"MySQL三大日志(binlog、redo log和undo log)详解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"MySQL三大日志(binlog、redo log和undo log)详解\",\"date\":\"2020-12-21T00:00:00.000Z\",\"category\":[\"数据库\"],\"tag\":[\"MySQL\"],\"summary\":\"前言 MySQL 日志 主要包括错误日志、查询日志、慢查询日志、事务日志、二进制日志几大类。其中，比较重要的还要属二进制日志 binlog（归档日志）和事务日志 redo log（重做日志）和 undo log（回滚日志）。 今天就来聊聊 redo log（重做日志）、binlog（归档日志）、两阶段提交、undo log （回滚日志）。 redo log \",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/database/mysql/mysql-logs.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"MySQL三大日志(binlog、redo log和undo log)详解\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"MySQL\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-12-21T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"children\":[]},{\"level\":2,\"title\":\"redo log\",\"slug\":\"redo-log\",\"children\":[{\"level\":3,\"title\":\"刷盘时机\",\"slug\":\"刷盘时机\",\"children\":[]},{\"level\":3,\"title\":\"日志文件组\",\"slug\":\"日志文件组\",\"children\":[]},{\"level\":3,\"title\":\"redo log 小结\",\"slug\":\"redo-log-小结\",\"children\":[]}]},{\"level\":2,\"title\":\"binlog\",\"slug\":\"binlog\",\"children\":[{\"level\":3,\"title\":\"记录格式\",\"slug\":\"记录格式\",\"children\":[]},{\"level\":3,\"title\":\"写入机制\",\"slug\":\"写入机制\",\"children\":[]}]},{\"level\":2,\"title\":\"两阶段提交\",\"slug\":\"两阶段提交\",\"children\":[]},{\"level\":2,\"title\":\"undo log\",\"slug\":\"undo-log\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"children\":[]},{\"level\":2,\"title\":\"站在巨人的肩膀上\",\"slug\":\"站在巨人的肩膀上\",\"children\":[]},{\"level\":2,\"title\":\"MySQL 好文推荐\",\"slug\":\"mysql-好文推荐\",\"children\":[]}],\"readingTime\":{\"minutes\":12.55,\"words\":3765},\"filePathRelative\":\"code/java/database/mysql/mysql-logs.md\",\"localizedDate\":\"2020年12月21日\"}")

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
