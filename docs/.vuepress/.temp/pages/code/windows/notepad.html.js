export const data = JSON.parse("{\"key\":\"v-1595002d\",\"path\":\"/code/windows/notepad.html\",\"title\":\"记事本的遗留问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"记事本的遗留问题\",\"icon\":\"warn\",\"date\":\"2019-09-07T00:00:00.000Z\",\"tag\":[\"Win10\"],\"summary\":\"在编写代码的时候，临时的软件选择需要注意。 请注意，绝对不能用 Word 和写字板。Word 和写字板保存的不是纯文本文件。 千万不要使用 Windows 自带的记事本编辑任何文本文件。 原因是 Microsoft 开发记事本的团队使用了一个非常弱智的行为来保存 UTF-8 编码的文件，他们自作聪明地在每个文件开头添加了几个特殊字符(UTF-8 BOM，即 \",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/windows/notepad.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"记事本的遗留问题\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Win10\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2019-09-07T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.95,\"words\":286},\"filePathRelative\":\"code/windows/notepad.md\",\"localizedDate\":\"2019年9月7日\"}")

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
