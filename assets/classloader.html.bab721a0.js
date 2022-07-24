const e=JSON.parse('{"key":"v-808fc0c8","path":"/code/java/common/jvm/classloader.html","title":"\u7C7B\u52A0\u8F7D\u5668\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"title":"\u7C7B\u52A0\u8F7D\u5668\u8BE6\u89E3","category":["Java"],"date":"2020-09-21T00:00:00.000Z","tag":["JVM"],"summary":"\u7C7B\u52A0\u8F7D\u5668\u8BE6\u89E3 \u56DE\u987E\u4E00\u4E0B\u7C7B\u52A0\u8F7D\u8FC7\u7A0B \u7C7B\u52A0\u8F7D\u8FC7\u7A0B\uFF1A\u52A0\u8F7D->\u8FDE\u63A5->\u521D\u59CB\u5316\u3002\u8FDE\u63A5\u8FC7\u7A0B\u53C8\u53EF\u5206\u4E3A\u4E09\u6B65\uFF1A\u9A8C\u8BC1->\u51C6\u5907->\u89E3\u6790\u3002 \u4E00\u4E2A\u975E\u6570\u7EC4\u7C7B\u7684\u52A0\u8F7D\u9636\u6BB5\uFF08\u52A0\u8F7D\u9636\u6BB5\u83B7\u53D6\u7C7B\u7684\u4E8C\u8FDB\u5236\u5B57\u8282\u6D41\u7684\u52A8\u4F5C\uFF09\u662F\u53EF\u63A7\u6027\u6700\u5F3A\u7684\u9636\u6BB5\uFF0C\u8FD9\u4E00\u6B65\u6211\u4EEC\u53EF\u4EE5\u53BB\u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668\u53BB\u63A7\u5236\u5B57\u8282\u6D41\u7684\u83B7\u53D6\u65B9\u5F0F\uFF08\u91CD\u5199\u4E00\u4E2A\u7C7B\u52A0\u8F7D\u5668\u7684 loadClass() \u65B9\u6CD5\uFF09\u3002\u6570\u7EC4\u7C7B\u578B\u4E0D\u901A\u8FC7\u7C7B\u52A0\u8F7D\u5668\u521B\u5EFA\uFF0C\u5B83\u7531 Java \u865A\u62DF\u673A\u76F4\u63A5\u521B\u5EFA","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/common/jvm/classloader.html"}],["meta",{"property":"og:site_name","content":"\u5496\u98DE\u7684\u535A\u5BA2"}],["meta",{"property":"og:title","content":"\u7C7B\u52A0\u8F7D\u5668\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-24T06:32:14.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:published_time","content":"2020-09-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-24T06:32:14.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u56DE\u987E\u4E00\u4E0B\u7C7B\u52A0\u8F7D\u8FC7\u7A0B","slug":"\u56DE\u987E\u4E00\u4E0B\u7C7B\u52A0\u8F7D\u8FC7\u7A0B","children":[]},{"level":2,"title":"\u7C7B\u52A0\u8F7D\u5668\u603B\u7ED3","slug":"\u7C7B\u52A0\u8F7D\u5668\u603B\u7ED3","children":[]},{"level":2,"title":"\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B","slug":"\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B","children":[{"level":3,"title":"\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u4ECB\u7ECD","slug":"\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u4ECB\u7ECD","children":[]},{"level":3,"title":"\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u5B9E\u73B0\u6E90\u7801\u5206\u6790","slug":"\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u5B9E\u73B0\u6E90\u7801\u5206\u6790","children":[]},{"level":3,"title":"\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u7684\u597D\u5904","slug":"\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u7684\u597D\u5904","children":[]},{"level":3,"title":"\u5982\u679C\u6211\u4EEC\u4E0D\u60F3\u7528\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u600E\u4E48\u529E\uFF1F","slug":"\u5982\u679C\u6211\u4EEC\u4E0D\u60F3\u7528\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B\u600E\u4E48\u529E","children":[]}]},{"level":2,"title":"\u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668","slug":"\u81EA\u5B9A\u4E49\u7C7B\u52A0\u8F7D\u5668","children":[]},{"level":2,"title":"\u63A8\u8350\u9605\u8BFB","slug":"\u63A8\u8350\u9605\u8BFB","children":[]}],"git":{"createdTime":1658644334000,"updatedTime":1658644334000,"contributors":[{"name":"begun-zhao","email":"834561898@qq.com","commits":1}]},"readingTime":{"minutes":4.78,"words":1435},"filePathRelative":"code/java/common/jvm/classloader.md","localizedDate":"2020\u5E749\u670821\u65E5"}');export{e as data};
