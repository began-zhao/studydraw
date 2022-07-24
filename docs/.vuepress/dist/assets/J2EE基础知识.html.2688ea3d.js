const e=JSON.parse('{"key":"v-35091a0f","path":"/code/java/system-design/J2EE%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html","title":"J2EE \u57FA\u7840\u77E5\u8BC6","lang":"zh-CN","frontmatter":{"title":"J2EE \u57FA\u7840\u77E5\u8BC6","date":"2021-05-21T00:00:00.000Z","summary":"\u70B9\u51FB\u5173\u6CE8\u516C\u4F17\u53F7\u53CA\u65F6\u83B7\u53D6\u7B14\u4E3B\u6700\u65B0\u66F4\u65B0\u6587\u7AE0\uFF0C\u5E76\u53EF\u514D\u8D39\u9886\u53D6\u672C\u6587\u6863\u914D\u5957\u7684\u300AJava\u9762\u8BD5\u7A81\u51FB\u300B\u4EE5\u53CAJava\u5DE5\u7A0B\u5E08\u5FC5\u5907\u5B66\u4E60\u8D44\u6E90\u3002\\rServlet\u603B\u7ED3; \\r\u9610\u8FF0Servlet\u548CCGI\u7684\u533A\u522B?; \\rCGI\u7684\u4E0D\u8DB3\u4E4B\u5904:; \\rServlet\u7684\u4F18\u70B9\uFF1A; \\rServlet\u63A5\u53E3\u4E2D\u6709\u54EA\u4E9B\u65B9\u6CD5\u53CAServlet\u751F\u547D\u5468\u671F\u63A2\u79D8; \\rget\u548Cpost\u8BF7\u6C42\u7684\u533A\u522B; \\r\u4EC0\u4E48\u60C5\u51B5\u4E0B\u8C03\u7528doGet\\\\(\\\\","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/system-design/J2EE%E5%9F%BA%E7%A1%80%E7%9F%A5%E8%AF%86.html"}],["meta",{"property":"og:site_name","content":"\u5496\u98DE\u7684\u535A\u5BA2"}],["meta",{"property":"og:title","content":"J2EE \u57FA\u7840\u77E5\u8BC6"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-17T07:31:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2021-05-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-17T07:31:54.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Servlet\u603B\u7ED3","slug":"servlet\u603B\u7ED3","children":[]},{"level":2,"title":"\u9610\u8FF0Servlet\u548CCGI\u7684\u533A\u522B?","slug":"\u9610\u8FF0servlet\u548Ccgi\u7684\u533A\u522B","children":[{"level":3,"title":"CGI\u7684\u4E0D\u8DB3\u4E4B\u5904:","slug":"cgi\u7684\u4E0D\u8DB3\u4E4B\u5904","children":[]},{"level":3,"title":"Servlet\u7684\u4F18\u70B9:","slug":"servlet\u7684\u4F18\u70B9","children":[]}]},{"level":2,"title":"Servlet\u63A5\u53E3\u4E2D\u6709\u54EA\u4E9B\u65B9\u6CD5\u53CAServlet\u751F\u547D\u5468\u671F\u63A2\u79D8","slug":"servlet\u63A5\u53E3\u4E2D\u6709\u54EA\u4E9B\u65B9\u6CD5\u53CAservlet\u751F\u547D\u5468\u671F\u63A2\u79D8","children":[]},{"level":2,"title":"get\u548Cpost\u8BF7\u6C42\u7684\u533A\u522B","slug":"get\u548Cpost\u8BF7\u6C42\u7684\u533A\u522B","children":[]},{"level":2,"title":"\u4EC0\u4E48\u60C5\u51B5\u4E0B\u8C03\u7528doGet()\u548CdoPost()","slug":"\u4EC0\u4E48\u60C5\u51B5\u4E0B\u8C03\u7528doget-\u548Cdopost","children":[]},{"level":2,"title":"\u8F6C\u53D1(Forward)\u548C\u91CD\u5B9A\u5411(Redirect)\u7684\u533A\u522B","slug":"\u8F6C\u53D1-forward-\u548C\u91CD\u5B9A\u5411-redirect-\u7684\u533A\u522B","children":[]},{"level":2,"title":"\u81EA\u52A8\u5237\u65B0(Refresh)","slug":"\u81EA\u52A8\u5237\u65B0-refresh","children":[]},{"level":2,"title":"Servlet\u4E0E\u7EBF\u7A0B\u5B89\u5168","slug":"servlet\u4E0E\u7EBF\u7A0B\u5B89\u5168","children":[]},{"level":2,"title":"JSP\u548CServlet\u662F\u4EC0\u4E48\u5173\u7CFB","slug":"jsp\u548Cservlet\u662F\u4EC0\u4E48\u5173\u7CFB","children":[]},{"level":2,"title":"JSP\u5DE5\u4F5C\u539F\u7406","slug":"jsp\u5DE5\u4F5C\u539F\u7406","children":[]},{"level":2,"title":"JSP\u6709\u54EA\u4E9B\u5185\u7F6E\u5BF9\u8C61\u3001\u4F5C\u7528\u5206\u522B\u662F\u4EC0\u4E48","slug":"jsp\u6709\u54EA\u4E9B\u5185\u7F6E\u5BF9\u8C61\u3001\u4F5C\u7528\u5206\u522B\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"Request\u5BF9\u8C61\u7684\u4E3B\u8981\u65B9\u6CD5\u6709\u54EA\u4E9B","slug":"request\u5BF9\u8C61\u7684\u4E3B\u8981\u65B9\u6CD5\u6709\u54EA\u4E9B","children":[]},{"level":2,"title":"request.getAttribute()\u548C request.getParameter()\u6709\u4F55\u533A\u522B","slug":"request-getattribute-\u548C-request-getparameter-\u6709\u4F55\u533A\u522B","children":[]},{"level":2,"title":"include\u6307\u4EE4include\u7684\u884C\u4E3A\u7684\u533A\u522B","slug":"include\u6307\u4EE4include\u7684\u884C\u4E3A\u7684\u533A\u522B","children":[]},{"level":2,"title":"JSP\u4E5D\u5927\u5185\u7F6E\u5BF9\u8C61\uFF0C\u4E03\u5927\u52A8\u4F5C\uFF0C\u4E09\u5927\u6307\u4EE4","slug":"jsp\u4E5D\u5927\u5185\u7F6E\u5BF9\u8C61-\u4E03\u5927\u52A8\u4F5C-\u4E09\u5927\u6307\u4EE4","children":[]},{"level":2,"title":"\u8BB2\u89E3JSP\u4E2D\u7684\u56DB\u79CD\u4F5C\u7528\u57DF","slug":"\u8BB2\u89E3jsp\u4E2D\u7684\u56DB\u79CD\u4F5C\u7528\u57DF","children":[]},{"level":2,"title":"\u5982\u4F55\u5B9E\u73B0JSP\u6216Servlet\u7684\u5355\u7EBF\u7A0B\u6A21\u5F0F","slug":"\u5982\u4F55\u5B9E\u73B0jsp\u6216servlet\u7684\u5355\u7EBF\u7A0B\u6A21\u5F0F","children":[]},{"level":2,"title":"\u5B9E\u73B0\u4F1A\u8BDD\u8DDF\u8E2A\u7684\u6280\u672F\u6709\u54EA\u4E9B","slug":"\u5B9E\u73B0\u4F1A\u8BDD\u8DDF\u8E2A\u7684\u6280\u672F\u6709\u54EA\u4E9B","children":[]},{"level":2,"title":"Cookie\u548CSession\u7684\u7684\u533A\u522B","slug":"cookie\u548Csession\u7684\u7684\u533A\u522B","children":[]},{"level":2,"title":"\u516C\u4F17\u53F7","slug":"\u516C\u4F17\u53F7","children":[]}],"git":{"createdTime":1658043114000,"updatedTime":1658043114000,"contributors":[{"name":"begun-zhao","email":"834561898@qq.com","commits":1}]},"readingTime":{"minutes":18.58,"words":5574},"filePathRelative":"code/java/system-design/J2EE\u57FA\u7840\u77E5\u8BC6.md","localizedDate":"2021\u5E745\u670821\u65E5"}');export{e as data};
