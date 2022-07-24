export const data = JSON.parse("{\"key\":\"v-e09637f8\",\"path\":\"/code/java/system-design/framework/spring/spring-boot-auto-assembly-principles.html\",\"title\":\"SpringBoot 自动装配原理详解\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"SpringBoot 自动装配原理详解\",\"category\":[\"框架\"],\"date\":\"2021-05-03T00:00:00.000Z\",\"tag\":[\"SpringBoot\"],\"summary\":\"每次问到 Spring Boot， 面试官非常喜欢问这个问题：“讲述一下 SpringBoot 自动装配原理？”。 我觉得我们可以从以下几个方面回答： 1. 什么是 SpringBoot 自动装配？ 2. SpringBoot 是如何实现自动装配的？如何实现按需加载？ 3. 如何实现一个 Starter？ 篇幅问题，这篇文章并没有深入，小伙伴们也可以直接使用\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/system-design/framework/spring/spring-boot-auto-assembly-principles.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"咖飞的博客\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"SpringBoot 自动装配原理详解\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"SpringBoot\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2021-05-03T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"children\":[]},{\"level\":2,\"title\":\"什么是 SpringBoot 自动装配？\",\"slug\":\"什么是-springboot-自动装配\",\"children\":[]},{\"level\":2,\"title\":\"SpringBoot 是如何实现自动装配的？\",\"slug\":\"springboot-是如何实现自动装配的\",\"children\":[{\"level\":3,\"title\":\"@EnableAutoConfiguration:实现自动装配的核心注解\",\"slug\":\"enableautoconfiguration-实现自动装配的核心注解\",\"children\":[]},{\"level\":3,\"title\":\"AutoConfigurationImportSelector:加载自动装配类\",\"slug\":\"autoconfigurationimportselector-加载自动装配类\",\"children\":[]}]},{\"level\":2,\"title\":\"如何实现一个 Starter\",\"slug\":\"如何实现一个-starter\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"children\":[]}],\"readingTime\":{\"minutes\":7.55,\"words\":2266},\"filePathRelative\":\"code/java/system-design/framework/spring/spring-boot-auto-assembly-principles.md\",\"localizedDate\":\"2021年5月3日\"}")

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
