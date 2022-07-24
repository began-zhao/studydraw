export const data = JSON.parse("{\"key\":\"v-6b457bcc\",\"path\":\"/code/java/database/mysql/how-sql-executed-in-mysql.html\",\"title\":\"SQL语句在MySQL中的执行过程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"SQL语句在MySQL中的执行过程\",\"date\":\"2020-12-21T00:00:00.000Z\",\"category\":[\"数据库\"],\"tag\":[\"MySQL\"],\"summary\":\"\\\" 本文来自木木匠投稿。\\\" 本篇文章会分析下一个 SQL 语句在 MySQL 中的执行流程，包括 SQL 的查询在 MySQL 内部会怎么流转，SQL 语句的更新是怎么完成的。 在分析之前我会先带着你看看 MySQL 的基础架构，知道了 MySQL 由那些组件组成以及这些组件的作用是什么，可以帮助我们理解和解决这些问题。 一 MySQL 基础架构分析 1.1\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/database/mysql/how-sql-executed-in-mysql.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"SQL语句在MySQL中的执行过程\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"MySQL\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-12-21T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"一 MySQL 基础架构分析\",\"slug\":\"一-mysql-基础架构分析\",\"children\":[{\"level\":3,\"title\":\"1.1 MySQL 基本架构概览\",\"slug\":\"_1-1-mysql-基本架构概览\",\"children\":[]},{\"level\":3,\"title\":\"1.2 Server 层基本组件介绍\",\"slug\":\"_1-2-server-层基本组件介绍\",\"children\":[]}]},{\"level\":2,\"title\":\"二 语句分析\",\"slug\":\"二-语句分析\",\"children\":[{\"level\":3,\"title\":\"2.1 查询语句\",\"slug\":\"_2-1-查询语句\",\"children\":[]},{\"level\":3,\"title\":\"2.2 更新语句\",\"slug\":\"_2-2-更新语句\",\"children\":[]}]},{\"level\":2,\"title\":\"三 总结\",\"slug\":\"三-总结\",\"children\":[]},{\"level\":2,\"title\":\"四 参考\",\"slug\":\"四-参考\",\"children\":[]}],\"readingTime\":{\"minutes\":10.25,\"words\":3074},\"filePathRelative\":\"code/java/database/mysql/how-sql-executed-in-mysql.md\",\"localizedDate\":\"2020年12月21日\"}")

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
