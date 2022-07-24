export const data = JSON.parse("{\"key\":\"v-2cd035a9\",\"path\":\"/linux/bash/archives/commands/dd.html\",\"title\":\"dd\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"dd dd 命令用于复制磁盘或文件系统。 复制磁盘 上面命令表示将/dev/sda 磁盘复制到/dev/sdb 设备。参数 if 表示来源地，of 表示目的地。 除了复制，dd 还允许将磁盘做成一个镜像文件。 dd 还可以复制单个分区。 上面命令中，参数 bs 表示单次拷贝的字节数(bytes)。 要将镜像文件复原，也很简单。 清除数据 dd 也可以用于清除\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/linux/bash/archives/commands/dd.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"dd\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"复制磁盘\",\"slug\":\"复制磁盘\",\"children\":[]},{\"level\":2,\"title\":\"清除数据\",\"slug\":\"清除数据\",\"children\":[]},{\"level\":2,\"title\":\"监控进展\",\"slug\":\"监控进展\",\"children\":[]},{\"level\":2,\"title\":\"参考链接\",\"slug\":\"参考链接\",\"children\":[]}],\"readingTime\":{\"minutes\":1.05,\"words\":315},\"filePathRelative\":\"linux/bash/archives/commands/dd.md\"}")

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
