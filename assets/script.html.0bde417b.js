const e=JSON.parse('{"key":"v-b48b13b2","path":"/linux/bash/script.html","title":"Bash \u811A\u672C\u5165\u95E8","lang":"zh-CN","frontmatter":{"title":"Bash \u811A\u672C\u5165\u95E8","icon":"code","date":"2019-02-14T00:00:00.000Z","author":"\u5496\u98DE","category":["Linux"],"tag":["Bash"],"copyright":"\u672C\u6559\u7A0B\u91C7\u7528<a href=\\"https://creativecommons.org/licenses/by-sa/3.0/deed.zh\\" rel=\\"noopener noreferrer\\" target=\\"_blank\\">\u77E5\u8BC6\u5171\u4EAB \u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 3.0\u534F\u8BAE</a>","summary":"\u811A\u672C(script)\u5C31\u662F\u5305\u542B\u4E00\u7CFB\u5217\u547D\u4EE4\u7684\u4E00\u4E2A\u6587\u672C\u6587\u4EF6\u3002Shell \u8BFB\u53D6\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u4F9D\u6B21\u6267\u884C\u91CC\u9762\u7684\u6240\u6709\u547D\u4EE4\uFF0C\u5C31\u597D\u50CF\u8FD9\u4E9B\u547D\u4EE4\u76F4\u63A5\u8F93\u5165\u5230\u547D\u4EE4\u884C\u4E00\u6837\u3002\u6240\u6709\u80FD\u591F\u5728\u547D\u4EE4\u884C\u5B8C\u6210\u7684\u4EFB\u52A1\uFF0C\u90FD\u80FD\u591F\u7528\u811A\u672C\u5B8C\u6210\u3002\\n\u811A\u672C\u7684\u597D\u5904\u662F\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5728\u7279\u5B9A\u573A\u5408\u81EA\u52A8\u8C03\u7528\uFF0C\u6BD4\u5982\u7CFB\u7EDF\u542F\u52A8\u6216\u5173\u95ED\u65F6\u81EA\u52A8\u6267\u884C\u811A\u672C\u3002\\n","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/linux/bash/script.html"}],["meta",{"property":"og:site_name","content":"\u5496\u98DE\u7684\u535A\u5BA2"}],["meta",{"property":"og:title","content":"Bash \u811A\u672C\u5165\u95E8"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-24T06:32:14.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"\u5496\u98DE"}],["meta",{"property":"article:tag","content":"Bash"}],["meta",{"property":"article:published_time","content":"2019-02-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-24T06:32:14.000Z"}]]},"excerpt":"<p>\u811A\u672C(script)\u5C31\u662F\u5305\u542B\u4E00\u7CFB\u5217\u547D\u4EE4\u7684\u4E00\u4E2A\u6587\u672C\u6587\u4EF6\u3002Shell \u8BFB\u53D6\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u4F9D\u6B21\u6267\u884C\u91CC\u9762\u7684\u6240\u6709\u547D\u4EE4\uFF0C\u5C31\u597D\u50CF\u8FD9\u4E9B\u547D\u4EE4\u76F4\u63A5\u8F93\u5165\u5230\u547D\u4EE4\u884C\u4E00\u6837\u3002\u6240\u6709\u80FD\u591F\u5728\u547D\u4EE4\u884C\u5B8C\u6210\u7684\u4EFB\u52A1\uFF0C\u90FD\u80FD\u591F\u7528\u811A\u672C\u5B8C\u6210\u3002</p>\\n<p>\u811A\u672C\u7684\u597D\u5904\u662F\u53EF\u4EE5\u91CD\u590D\u4F7F\u7528\uFF0C\u4E5F\u53EF\u4EE5\u6307\u5B9A\u5728\u7279\u5B9A\u573A\u5408\u81EA\u52A8\u8C03\u7528\uFF0C\u6BD4\u5982\u7CFB\u7EDF\u542F\u52A8\u6216\u5173\u95ED\u65F6\u81EA\u52A8\u6267\u884C\u811A\u672C\u3002</p>\\n","headers":[{"level":2,"title":"Shebang \u884C","slug":"shebang-\u884C","children":[]},{"level":2,"title":"\u6267\u884C\u6743\u9650\u548C\u8DEF\u5F84","slug":"\u6267\u884C\u6743\u9650\u548C\u8DEF\u5F84","children":[]},{"level":2,"title":"env \u547D\u4EE4","slug":"env-\u547D\u4EE4","children":[]},{"level":2,"title":"\u6CE8\u91CA","slug":"\u6CE8\u91CA","children":[]},{"level":2,"title":"\u811A\u672C\u53C2\u6570","slug":"\u811A\u672C\u53C2\u6570","children":[]},{"level":2,"title":"shift \u547D\u4EE4","slug":"shift-\u547D\u4EE4","children":[]},{"level":2,"title":"getopts \u547D\u4EE4","slug":"getopts-\u547D\u4EE4","children":[]},{"level":2,"title":"\u914D\u7F6E\u9879\u53C2\u6570\u7EC8\u6B62\u7B26 --","slug":"\u914D\u7F6E\u9879\u53C2\u6570\u7EC8\u6B62\u7B26","children":[]},{"level":2,"title":"exit \u547D\u4EE4","slug":"exit-\u547D\u4EE4","children":[]},{"level":2,"title":"\u547D\u4EE4\u6267\u884C\u7ED3\u679C","slug":"\u547D\u4EE4\u6267\u884C\u7ED3\u679C","children":[]},{"level":2,"title":"source \u547D\u4EE4","slug":"source-\u547D\u4EE4","children":[]},{"level":2,"title":"\u522B\u540D\uFF0Calias \u547D\u4EE4","slug":"\u522B\u540D-alias-\u547D\u4EE4","children":[]},{"level":2,"title":"\u53C2\u8003\u94FE\u63A5","slug":"\u53C2\u8003\u94FE\u63A5","children":[]}],"git":{"createdTime":1658644334000,"updatedTime":1658644334000,"contributors":[{"name":"begun-zhao","email":"834561898@qq.com","commits":1}]},"readingTime":{"minutes":12.6,"words":3779},"filePathRelative":"linux/bash/script.md","localizedDate":"2019\u5E742\u670814\u65E5"}');export{e as data};
