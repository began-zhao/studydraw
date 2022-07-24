const e=JSON.parse('{"key":"v-74ff903d","path":"/code/java/common/concurrent/atomic-classes.html","title":"Atomic \u539F\u5B50\u7C7B\u603B\u7ED3","lang":"zh-CN","frontmatter":{"title":"Atomic \u539F\u5B50\u7C7B\u603B\u7ED3","date":"2020-08-19T00:00:00.000Z","category":["Java"],"tag":["Java\u5E76\u53D1"],"summary":"Atomic \u539F\u5B50\u7C7B\u4ECB\u7ECD Atomic \u7FFB\u8BD1\u6210\u4E2D\u6587\u662F\u539F\u5B50\u7684\u610F\u601D\u3002\u5728\u5316\u5B66\u4E0A\uFF0C\u6211\u4EEC\u77E5\u9053\u539F\u5B50\u662F\u6784\u6210\u4E00\u822C\u7269\u8D28\u7684\u6700\u5C0F\u5355\u4F4D\uFF0C\u5728\u5316\u5B66\u53CD\u5E94\u4E2D\u662F\u4E0D\u53EF\u5206\u5272\u7684\u3002\u5728\u6211\u4EEC\u8FD9\u91CC Atomic \u662F\u6307\u4E00\u4E2A\u64CD\u4F5C\u662F\u4E0D\u53EF\u4E2D\u65AD\u7684\u3002\u5373\u4F7F\u662F\u5728\u591A\u4E2A\u7EBF\u7A0B\u4E00\u8D77\u6267\u884C\u7684\u65F6\u5019\uFF0C\u4E00\u4E2A\u64CD\u4F5C\u4E00\u65E6\u5F00\u59CB\uFF0C\u5C31\u4E0D\u4F1A\u88AB\u5176\u4ED6\u7EBF\u7A0B\u5E72\u6270\u3002 \u6240\u4EE5\uFF0C\u6240\u8C13\u539F\u5B50\u7C7B\u8BF4\u7B80\u5355\u70B9\u5C31\u662F\u5177\u6709\u539F\u5B50/\u539F\u5B50\u64CD\u4F5C\u7279\u5F81\u7684\u7C7B\u3002 \u5E76\u53D1\u5305 java.util.concu","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/common/concurrent/atomic-classes.html"}],["meta",{"property":"og:site_name","content":"\u5496\u98DE\u7684\u535A\u5BA2"}],["meta",{"property":"og:title","content":"Atomic \u539F\u5B50\u7C7B\u603B\u7ED3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-17T07:31:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Java\u5E76\u53D1"}],["meta",{"property":"article:published_time","content":"2020-08-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-17T07:31:54.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Atomic \u539F\u5B50\u7C7B\u4ECB\u7ECD","slug":"atomic-\u539F\u5B50\u7C7B\u4ECB\u7ECD","children":[]},{"level":2,"title":"\u57FA\u672C\u7C7B\u578B\u539F\u5B50\u7C7B","slug":"\u57FA\u672C\u7C7B\u578B\u539F\u5B50\u7C7B","children":[{"level":3,"title":"\u57FA\u672C\u7C7B\u578B\u539F\u5B50\u7C7B\u4ECB\u7ECD","slug":"\u57FA\u672C\u7C7B\u578B\u539F\u5B50\u7C7B\u4ECB\u7ECD","children":[]},{"level":3,"title":"AtomicInteger \u5E38\u89C1\u65B9\u6CD5\u4F7F\u7528","slug":"atomicinteger-\u5E38\u89C1\u65B9\u6CD5\u4F7F\u7528","children":[]},{"level":3,"title":"\u57FA\u672C\u6570\u636E\u7C7B\u578B\u539F\u5B50\u7C7B\u7684\u4F18\u52BF","slug":"\u57FA\u672C\u6570\u636E\u7C7B\u578B\u539F\u5B50\u7C7B\u7684\u4F18\u52BF","children":[]},{"level":3,"title":"AtomicInteger \u7EBF\u7A0B\u5B89\u5168\u539F\u7406\u7B80\u5355\u5206\u6790","slug":"atomicinteger-\u7EBF\u7A0B\u5B89\u5168\u539F\u7406\u7B80\u5355\u5206\u6790","children":[]}]},{"level":2,"title":"\u6570\u7EC4\u7C7B\u578B\u539F\u5B50\u7C7B","slug":"\u6570\u7EC4\u7C7B\u578B\u539F\u5B50\u7C7B","children":[{"level":3,"title":"\u6570\u7EC4\u7C7B\u578B\u539F\u5B50\u7C7B\u4ECB\u7ECD","slug":"\u6570\u7EC4\u7C7B\u578B\u539F\u5B50\u7C7B\u4ECB\u7ECD","children":[]},{"level":3,"title":"AtomicIntegerArray \u5E38\u89C1\u65B9\u6CD5\u4F7F\u7528","slug":"atomicintegerarray-\u5E38\u89C1\u65B9\u6CD5\u4F7F\u7528","children":[]}]},{"level":2,"title":"\u5F15\u7528\u7C7B\u578B\u539F\u5B50\u7C7B","slug":"\u5F15\u7528\u7C7B\u578B\u539F\u5B50\u7C7B","children":[{"level":3,"title":"\u5F15\u7528\u7C7B\u578B\u539F\u5B50\u7C7B\u4ECB\u7ECD","slug":"\u5F15\u7528\u7C7B\u578B\u539F\u5B50\u7C7B\u4ECB\u7ECD","children":[]},{"level":3,"title":"AtomicReference \u7C7B\u4F7F\u7528\u793A\u4F8B","slug":"atomicreference-\u7C7B\u4F7F\u7528\u793A\u4F8B","children":[]},{"level":3,"title":"AtomicStampedReference \u7C7B\u4F7F\u7528\u793A\u4F8B","slug":"atomicstampedreference-\u7C7B\u4F7F\u7528\u793A\u4F8B","children":[]},{"level":3,"title":"AtomicMarkableReference \u7C7B\u4F7F\u7528\u793A\u4F8B","slug":"atomicmarkablereference-\u7C7B\u4F7F\u7528\u793A\u4F8B","children":[]}]},{"level":2,"title":"\u5BF9\u8C61\u7684\u5C5E\u6027\u4FEE\u6539\u7C7B\u578B\u539F\u5B50\u7C7B","slug":"\u5BF9\u8C61\u7684\u5C5E\u6027\u4FEE\u6539\u7C7B\u578B\u539F\u5B50\u7C7B","children":[{"level":3,"title":"\u5BF9\u8C61\u7684\u5C5E\u6027\u4FEE\u6539\u7C7B\u578B\u539F\u5B50\u7C7B\u4ECB\u7ECD","slug":"\u5BF9\u8C61\u7684\u5C5E\u6027\u4FEE\u6539\u7C7B\u578B\u539F\u5B50\u7C7B\u4ECB\u7ECD","children":[]},{"level":3,"title":"AtomicIntegerFieldUpdater \u7C7B\u4F7F\u7528\u793A\u4F8B","slug":"atomicintegerfieldupdater-\u7C7B\u4F7F\u7528\u793A\u4F8B","children":[]}]},{"level":2,"title":"Reference","slug":"reference","children":[]}],"git":{"createdTime":1658043114000,"updatedTime":1658043114000,"contributors":[{"name":"begun-zhao","email":"834561898@qq.com","commits":1}]},"readingTime":{"minutes":11.39,"words":3416},"filePathRelative":"code/java/common/concurrent/atomic-classes.md","localizedDate":"2020\u5E748\u670819\u65E5"}');export{e as data};
