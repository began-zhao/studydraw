const e=JSON.parse('{"key":"v-5d1d4cff","path":"/code/java/database/mysql/some-thoughts-on-database-storage-time.html","title":"MySQL\u6570\u636E\u5E93\u65F6\u95F4\u7C7B\u578B\u6570\u636E\u5B58\u50A8\u5EFA\u8BAE","lang":"zh-CN","frontmatter":{"title":"MySQL\u6570\u636E\u5E93\u65F6\u95F4\u7C7B\u578B\u6570\u636E\u5B58\u50A8\u5EFA\u8BAE","date":"2020-12-21T00:00:00.000Z","category":["\u6570\u636E\u5E93"],"tag":["MySQL"],"summary":"\u6211\u4EEC\u5E73\u65F6\u5F00\u53D1\u4E2D\u4E0D\u53EF\u907F\u514D\u7684\u5C31\u662F\u8981\u5B58\u50A8\u65F6\u95F4\uFF0C\u6BD4\u5982\u6211\u4EEC\u8981\u8BB0\u5F55\u64CD\u4F5C\u8868\u4E2D\u8FD9\u6761\u8BB0\u5F55\u7684\u65F6\u95F4\u3001\u8BB0\u5F55\u8F6C\u8D26\u7684\u4EA4\u6613\u65F6\u95F4\u3001\u8BB0\u5F55\u51FA\u53D1\u65F6\u95F4\u7B49\u7B49\u3002\u4F60\u4F1A\u53D1\u73B0\u65F6\u95F4\u8FD9\u4E2A\u4E1C\u897F\u4E0E\u6211\u4EEC\u5F00\u53D1\u7684\u8054\u7CFB\u8FD8\u662F\u975E\u5E38\u7D27\u5BC6\u7684\uFF0C\u7528\u7684\u597D\u4E0E\u4E0D\u597D\u4F1A\u7ED9\u6211\u4EEC\u7684\u4E1A\u52A1\u751A\u81F3\u529F\u80FD\u5E26\u6765\u5F88\u5927\u7684\u5F71\u54CD\u3002\u6240\u4EE5\uFF0C\u6211\u4EEC\u6709\u5FC5\u8981\u91CD\u65B0\u51FA\u53D1\uFF0C\u597D\u597D\u8BA4\u8BC6\u4E00\u4E0B\u8FD9\u4E2A\u4E1C\u897F\u3002 \u8FD9\u662F\u4E00\u7BC7\u77ED\u5C0F\u7CBE\u608D\u7684\u6587\u7AE0\uFF0C\u4ED4\u7EC6\u9605\u8BFB\u4E00\u5B9A\u80FD\u5B66\u5230\u4E0D\u5C11\u4E1C\u897F\uFF01 1.\u5207\u8BB0\u4E0D\u8981\u7528\u5B57\u7B26\u4E32\u5B58\u50A8\u65E5\u671F \u6211\u8BB0\u5F97\u6211","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/database/mysql/some-thoughts-on-database-storage-time.html"}],["meta",{"property":"og:site_name","content":"\u5496\u98DE\u7684\u535A\u5BA2"}],["meta",{"property":"og:title","content":"MySQL\u6570\u636E\u5E93\u65F6\u95F4\u7C7B\u578B\u6570\u636E\u5B58\u50A8\u5EFA\u8BAE"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-17T07:31:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2020-12-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-17T07:31:54.000Z"}]]},"excerpt":"","headers":[{"level":3,"title":"1.\u5207\u8BB0\u4E0D\u8981\u7528\u5B57\u7B26\u4E32\u5B58\u50A8\u65E5\u671F","slug":"_1-\u5207\u8BB0\u4E0D\u8981\u7528\u5B57\u7B26\u4E32\u5B58\u50A8\u65E5\u671F","children":[]},{"level":3,"title":"2.Datetime \u548C Timestamp \u4E4B\u95F4\u6289\u62E9","slug":"_2-datetime-\u548C-timestamp-\u4E4B\u95F4\u6289\u62E9","children":[]},{"level":3,"title":"3 \u518D\u770B MySQL \u65E5\u671F\u7C7B\u578B\u5B58\u50A8\u7A7A\u95F4","slug":"_3-\u518D\u770B-mysql-\u65E5\u671F\u7C7B\u578B\u5B58\u50A8\u7A7A\u95F4","children":[]},{"level":3,"title":"4.\u6570\u503C\u578B\u65F6\u95F4\u6233\u662F\u66F4\u597D\u7684\u9009\u62E9\u5417\uFF1F","slug":"_4-\u6570\u503C\u578B\u65F6\u95F4\u6233\u662F\u66F4\u597D\u7684\u9009\u62E9\u5417","children":[]},{"level":3,"title":"5.\u603B\u7ED3","slug":"_5-\u603B\u7ED3","children":[]}],"git":{"createdTime":1658043114000,"updatedTime":1658043114000,"contributors":[{"name":"begun-zhao","email":"834561898@qq.com","commits":1}]},"readingTime":{"minutes":5.35,"words":1606},"filePathRelative":"code/java/database/mysql/some-thoughts-on-database-storage-time.md","localizedDate":"2020\u5E7412\u670821\u65E5"}');export{e as data};
