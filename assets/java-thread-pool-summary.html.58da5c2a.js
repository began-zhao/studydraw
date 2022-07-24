const e=JSON.parse('{"key":"v-95c0b698","path":"/code/java/common/concurrent/java-thread-pool-summary.html","title":"Java \u7EBF\u7A0B\u6C60\u8BE6\u89E3","lang":"zh-CN","frontmatter":{"title":"Java \u7EBF\u7A0B\u6C60\u8BE6\u89E3","date":"2020-08-21T00:00:00.000Z","category":["Java"],"tag":["Java\u5E76\u53D1"],"summary":"\u4E00 \u4F7F\u7528\u7EBF\u7A0B\u6C60\u7684\u597D\u5904 \\" \u6C60\u5316\u6280\u672F\u60F3\u5FC5\u5927\u5BB6\u5DF2\u7ECF\u5C61\u89C1\u4E0D\u9C9C\u4E86\uFF0C\u7EBF\u7A0B\u6C60\u3001\u6570\u636E\u5E93\u8FDE\u63A5\u6C60\u3001Http \u8FDE\u63A5\u6C60\u7B49\u7B49\u90FD\u662F\u5BF9\u8FD9\u4E2A\u601D\u60F3\u7684\u5E94\u7528\u3002\u6C60\u5316\u6280\u672F\u7684\u601D\u60F3\u4E3B\u8981\u662F\u4E3A\u4E86\u51CF\u5C11\u6BCF\u6B21\u83B7\u53D6\u8D44\u6E90\u7684\u6D88\u8017\uFF0C\u63D0\u9AD8\u5BF9\u8D44\u6E90\u7684\u5229\u7528\u7387\u3002\\" \u7EBF\u7A0B\u6C60\u63D0\u4F9B\u4E86\u4E00\u79CD\u9650\u5236\u548C\u7BA1\u7406\u8D44\u6E90\uFF08\u5305\u62EC\u6267\u884C\u4E00\u4E2A\u4EFB\u52A1\uFF09\u7684\u65B9\u5F0F\u3002 \u6BCF\u4E2A\u7EBF\u7A0B\u6C60\u8FD8\u7EF4\u62A4\u4E00\u4E9B\u57FA\u672C\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u4F8B\u5982\u5DF2\u5B8C\u6210\u4EFB\u52A1\u7684\u6570\u91CF\u3002 \u8FD9\u91CC\u501F\u7528\u300AJava \u5E76\u53D1\u7F16\u7A0B\u7684\u827A\u672F\u300B\u63D0\u5230\u7684\u6765\u8BF4\u4E00","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/common/concurrent/java-thread-pool-summary.html"}],["meta",{"property":"og:site_name","content":"\u5496\u98DE\u7684\u535A\u5BA2"}],["meta",{"property":"og:title","content":"Java \u7EBF\u7A0B\u6C60\u8BE6\u89E3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/"}],["meta",{"property":"og:updated_time","content":"2022-07-24T06:32:14.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Java \u7EBF\u7A0B\u6C60\u8BE6\u89E3"}],["meta",{"property":"article:tag","content":"Java\u5E76\u53D1"}],["meta",{"property":"article:published_time","content":"2020-08-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-24T06:32:14.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u4E00 \u4F7F\u7528\u7EBF\u7A0B\u6C60\u7684\u597D\u5904","slug":"\u4E00-\u4F7F\u7528\u7EBF\u7A0B\u6C60\u7684\u597D\u5904","children":[]},{"level":2,"title":"\u4E8C Executor \u6846\u67B6","slug":"\u4E8C-executor-\u6846\u67B6","children":[{"level":3,"title":"2.1 \u7B80\u4ECB","slug":"_2-1-\u7B80\u4ECB","children":[]},{"level":3,"title":"2.2 Executor \u6846\u67B6\u7ED3\u6784(\u4E3B\u8981\u7531\u4E09\u5927\u90E8\u5206\u7EC4\u6210)","slug":"_2-2-executor-\u6846\u67B6\u7ED3\u6784-\u4E3B\u8981\u7531\u4E09\u5927\u90E8\u5206\u7EC4\u6210","children":[]},{"level":3,"title":"2.3 Executor \u6846\u67B6\u7684\u4F7F\u7528\u793A\u610F\u56FE","slug":"_2-3-executor-\u6846\u67B6\u7684\u4F7F\u7528\u793A\u610F\u56FE","children":[]}]},{"level":2,"title":"\u4E09 (\u91CD\u8981)ThreadPoolExecutor \u7C7B\u7B80\u5355\u4ECB\u7ECD","slug":"\u4E09-\u91CD\u8981-threadpoolexecutor-\u7C7B\u7B80\u5355\u4ECB\u7ECD","children":[{"level":3,"title":"3.1 ThreadPoolExecutor \u7C7B\u5206\u6790","slug":"_3-1-threadpoolexecutor-\u7C7B\u5206\u6790","children":[]},{"level":3,"title":"3.2 \u63A8\u8350\u4F7F\u7528 ThreadPoolExecutor \u6784\u9020\u51FD\u6570\u521B\u5EFA\u7EBF\u7A0B\u6C60","slug":"_3-2-\u63A8\u8350\u4F7F\u7528-threadpoolexecutor-\u6784\u9020\u51FD\u6570\u521B\u5EFA\u7EBF\u7A0B\u6C60","children":[]}]},{"level":2,"title":"\u56DB ThreadPoolExecutor \u4F7F\u7528+\u539F\u7406\u5206\u6790","slug":"\u56DB-threadpoolexecutor-\u4F7F\u7528-\u539F\u7406\u5206\u6790","children":[{"level":3,"title":"4.1 \u793A\u4F8B\u4EE3\u7801:Runnable+ThreadPoolExecutor","slug":"_4-1-\u793A\u4F8B\u4EE3\u7801-runnable-threadpoolexecutor","children":[]},{"level":3,"title":"4.2 \u7EBF\u7A0B\u6C60\u539F\u7406\u5206\u6790","slug":"_4-2-\u7EBF\u7A0B\u6C60\u539F\u7406\u5206\u6790","children":[]},{"level":3,"title":"4.3 \u51E0\u4E2A\u5E38\u89C1\u7684\u5BF9\u6BD4","slug":"_4-3-\u51E0\u4E2A\u5E38\u89C1\u7684\u5BF9\u6BD4","children":[]},{"level":3,"title":"4.4 \u52A0\u9910:Callable+ThreadPoolExecutor\u793A\u4F8B\u4EE3\u7801","slug":"_4-4-\u52A0\u9910-callable-threadpoolexecutor\u793A\u4F8B\u4EE3\u7801","children":[]}]},{"level":2,"title":"\u4E94 \u51E0\u79CD\u5E38\u89C1\u7684\u7EBF\u7A0B\u6C60\u8BE6\u89E3","slug":"\u4E94-\u51E0\u79CD\u5E38\u89C1\u7684\u7EBF\u7A0B\u6C60\u8BE6\u89E3","children":[{"level":3,"title":"5.1 FixedThreadPool","slug":"_5-1-fixedthreadpool","children":[]},{"level":3,"title":"5.2 SingleThreadExecutor \u8BE6\u89E3","slug":"_5-2-singlethreadexecutor-\u8BE6\u89E3","children":[]},{"level":3,"title":"5.3 CachedThreadPool \u8BE6\u89E3","slug":"_5-3-cachedthreadpool-\u8BE6\u89E3","children":[]}]},{"level":2,"title":"\u516D ScheduledThreadPoolExecutor \u8BE6\u89E3","slug":"\u516D-scheduledthreadpoolexecutor-\u8BE6\u89E3","children":[{"level":3,"title":"6.1 \u7B80\u4ECB","slug":"_6-1-\u7B80\u4ECB","children":[]},{"level":3,"title":"6.2 \u8FD0\u884C\u673A\u5236","slug":"_6-2-\u8FD0\u884C\u673A\u5236","children":[]},{"level":3,"title":"6.3 ScheduledThreadPoolExecutor \u6267\u884C\u5468\u671F\u4EFB\u52A1\u7684\u6B65\u9AA4","slug":"_6-3-scheduledthreadpoolexecutor-\u6267\u884C\u5468\u671F\u4EFB\u52A1\u7684\u6B65\u9AA4","children":[]}]},{"level":2,"title":"\u4E03 \u7EBF\u7A0B\u6C60\u5927\u5C0F\u786E\u5B9A","slug":"\u4E03-\u7EBF\u7A0B\u6C60\u5927\u5C0F\u786E\u5B9A","children":[]},{"level":2,"title":"\u516B \u53C2\u8003","slug":"\u516B-\u53C2\u8003","children":[]},{"level":2,"title":"\u4E5D \u5176\u4ED6\u63A8\u8350\u9605\u8BFB","slug":"\u4E5D-\u5176\u4ED6\u63A8\u8350\u9605\u8BFB","children":[]}],"git":{"createdTime":1658644334000,"updatedTime":1658644334000,"contributors":[{"name":"begun-zhao","email":"834561898@qq.com","commits":1}]},"readingTime":{"minutes":29.74,"words":8921},"filePathRelative":"code/java/common/concurrent/java-thread-pool-summary.md","localizedDate":"2020\u5E748\u670821\u65E5"}');export{e as data};
