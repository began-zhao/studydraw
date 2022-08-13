export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"主页\",\"heroImage\":\"/logo.svg\",\"heroText\":\"咖飞的博客\",\"heroFullScreen\":true,\"tagline\":\"简单分享，希望和大家一起进步...\",\"projects\":[{\"icon\":\"project\",\"name\":\"代码笔记\",\"desc\":\"代码相关笔记\",\"link\":\"/code\"},{\"icon\":\"book\",\"name\":\"开源精选\",\"desc\":\"精选 Github 和 Gitee 上优质的 Java 开源项目\",\"link\":\"/about/openSourceProject\"},{\"icon\":\"article\",\"name\":\"直击面试\",\"desc\":\"一些常见的面试考点\",\"link\":\"/interview\"},{\"icon\":\"/logo.svg\",\"name\":\"项目介绍\",\"desc\":\"简单介绍一下\",\"link\":\"/about/author\"}],\"summary\":\"<!-- 这是一个博客主页的案例。 要使用此布局，你应该在页面前端设置 layout: Blog 和 home: true。 相关配置文档请见 博客主页。 -->\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.72,\"words\":217},\"filePathRelative\":\"README.md\"}")

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
