const e=JSON.parse('{"key":"v-6e6d3b98","path":"/code/java/common/concurrent/java-concurrent-questions-02.html","title":"Java \u5E76\u53D1\u5E38\u89C1\u77E5\u8BC6\u70B9&\u9762\u8BD5\u9898\u603B\u7ED3\uFF08\u8FDB\u9636\u7BC7\uFF09","lang":"zh-CN","frontmatter":{"title":"Java \u5E76\u53D1\u5E38\u89C1\u77E5\u8BC6\u70B9&\u9762\u8BD5\u9898\u603B\u7ED3\uFF08\u8FDB\u9636\u7BC7\uFF09","date":"2020-08-19T00:00:00.000Z","category":["Java"],"tag":["Java\u5E76\u53D1"],"summary":"synchronized \u5173\u952E\u5B57 \u8BF4\u4E00\u8BF4\u81EA\u5DF1\u5BF9\u4E8E synchronized \u5173\u952E\u5B57\u7684\u4E86\u89E3 synchronized \u5173\u952E\u5B57\u89E3\u51B3\u7684\u662F\u591A\u4E2A\u7EBF\u7A0B\u4E4B\u95F4\u8BBF\u95EE\u8D44\u6E90\u7684\u540C\u6B65\u6027\uFF0Csynchronized\u5173\u952E\u5B57\u53EF\u4EE5\u4FDD\u8BC1\u88AB\u5B83\u4FEE\u9970\u7684\u65B9\u6CD5\u6216\u8005\u4EE3\u7801\u5757\u5728\u4EFB\u610F\u65F6\u523B\u53EA\u80FD\u6709\u4E00\u4E2A\u7EBF\u7A0B\u6267\u884C\u3002 \u53E6\u5916\uFF0C\u5728 Java \u65E9\u671F\u7248\u672C\u4E2D\uFF0Csynchronized \u5C5E\u4E8E \u91CD\u91CF\u7EA7\u9501\uFF0C\u6548\u7387\u4F4E\u4E0B\u3002 \u4E3A\u4EC0\u4E48\u5462\uFF1F \u56E0\u4E3A\u76D1\u89C6","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/common/concurrent/java-concurrent-questions-02.html"}],["meta",{"property":"og:site_name","content":"\u5496\u98DE\u7684\u535A\u5BA2"}],["meta",{"property":"og:title","content":"Java \u5E76\u53D1\u5E38\u89C1\u77E5\u8BC6\u70B9&\u9762\u8BD5\u9898\u603B\u7ED3\uFF08\u8FDB\u9636\u7BC7\uFF09"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-17T07:31:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Java\u5E76\u53D1"}],["meta",{"property":"article:published_time","content":"2020-08-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-17T07:31:54.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"synchronized \u5173\u952E\u5B57","slug":"synchronized-\u5173\u952E\u5B57","children":[{"level":3,"title":"\u8BF4\u4E00\u8BF4\u81EA\u5DF1\u5BF9\u4E8E synchronized \u5173\u952E\u5B57\u7684\u4E86\u89E3","slug":"\u8BF4\u4E00\u8BF4\u81EA\u5DF1\u5BF9\u4E8E-synchronized-\u5173\u952E\u5B57\u7684\u4E86\u89E3","children":[]},{"level":3,"title":"\u8BF4\u8BF4\u81EA\u5DF1\u662F\u600E\u4E48\u4F7F\u7528 synchronized \u5173\u952E\u5B57","slug":"\u8BF4\u8BF4\u81EA\u5DF1\u662F\u600E\u4E48\u4F7F\u7528-synchronized-\u5173\u952E\u5B57","children":[]},{"level":3,"title":"\u6784\u9020\u65B9\u6CD5\u53EF\u4EE5\u4F7F\u7528 synchronized \u5173\u952E\u5B57\u4FEE\u9970\u4E48\uFF1F","slug":"\u6784\u9020\u65B9\u6CD5\u53EF\u4EE5\u4F7F\u7528-synchronized-\u5173\u952E\u5B57\u4FEE\u9970\u4E48","children":[]},{"level":3,"title":"\u8BB2\u4E00\u4E0B synchronized \u5173\u952E\u5B57\u7684\u5E95\u5C42\u539F\u7406","slug":"\u8BB2\u4E00\u4E0B-synchronized-\u5173\u952E\u5B57\u7684\u5E95\u5C42\u539F\u7406","children":[]},{"level":3,"title":"\u8BF4\u8BF4 JDK1.6 \u4E4B\u540E\u7684 synchronized \u5173\u952E\u5B57\u5E95\u5C42\u505A\u4E86\u54EA\u4E9B\u4F18\u5316\uFF0C\u53EF\u4EE5\u8BE6\u7EC6\u4ECB\u7ECD\u4E00\u4E0B\u8FD9\u4E9B\u4F18\u5316\u5417","slug":"\u8BF4\u8BF4-jdk1-6-\u4E4B\u540E\u7684-synchronized-\u5173\u952E\u5B57\u5E95\u5C42\u505A\u4E86\u54EA\u4E9B\u4F18\u5316-\u53EF\u4EE5\u8BE6\u7EC6\u4ECB\u7ECD\u4E00\u4E0B\u8FD9\u4E9B\u4F18\u5316\u5417","children":[]},{"level":3,"title":"\u8C08\u8C08 synchronized \u548C ReentrantLock \u7684\u533A\u522B","slug":"\u8C08\u8C08-synchronized-\u548C-reentrantlock-\u7684\u533A\u522B","children":[]}]},{"level":2,"title":"volatile \u5173\u952E\u5B57","slug":"volatile-\u5173\u952E\u5B57","children":[{"level":3,"title":"CPU \u7F13\u5B58\u6A21\u578B","slug":"cpu-\u7F13\u5B58\u6A21\u578B","children":[]},{"level":3,"title":"\u8BB2\u4E00\u4E0B JMM(Java \u5185\u5B58\u6A21\u578B)","slug":"\u8BB2\u4E00\u4E0B-jmm-java-\u5185\u5B58\u6A21\u578B","children":[]},{"level":3,"title":"\u5E76\u53D1\u7F16\u7A0B\u7684\u4E09\u4E2A\u91CD\u8981\u7279\u6027","slug":"\u5E76\u53D1\u7F16\u7A0B\u7684\u4E09\u4E2A\u91CD\u8981\u7279\u6027","children":[]},{"level":3,"title":"\u8BF4\u8BF4 synchronized \u5173\u952E\u5B57\u548C volatile \u5173\u952E\u5B57\u7684\u533A\u522B","slug":"\u8BF4\u8BF4-synchronized-\u5173\u952E\u5B57\u548C-volatile-\u5173\u952E\u5B57\u7684\u533A\u522B","children":[]}]},{"level":2,"title":"ThreadLocal","slug":"threadlocal","children":[{"level":3,"title":"ThreadLocal \u7B80\u4ECB","slug":"threadlocal-\u7B80\u4ECB","children":[]},{"level":3,"title":"ThreadLocal \u793A\u4F8B","slug":"threadlocal-\u793A\u4F8B","children":[]},{"level":3,"title":"ThreadLocal \u539F\u7406","slug":"threadlocal-\u539F\u7406","children":[]},{"level":3,"title":"ThreadLocal \u5185\u5B58\u6CC4\u9732\u95EE\u9898","slug":"threadlocal-\u5185\u5B58\u6CC4\u9732\u95EE\u9898","children":[]}]},{"level":2,"title":"\u7EBF\u7A0B\u6C60","slug":"\u7EBF\u7A0B\u6C60","children":[{"level":3,"title":"\u4E3A\u4EC0\u4E48\u8981\u7528\u7EBF\u7A0B\u6C60\uFF1F","slug":"\u4E3A\u4EC0\u4E48\u8981\u7528\u7EBF\u7A0B\u6C60","children":[]},{"level":3,"title":"\u5B9E\u73B0 Runnable \u63A5\u53E3\u548C Callable \u63A5\u53E3\u7684\u533A\u522B","slug":"\u5B9E\u73B0-runnable-\u63A5\u53E3\u548C-callable-\u63A5\u53E3\u7684\u533A\u522B","children":[]},{"level":3,"title":"\u6267\u884C execute()\u65B9\u6CD5\u548C submit()\u65B9\u6CD5\u7684\u533A\u522B\u662F\u4EC0\u4E48\u5462\uFF1F","slug":"\u6267\u884C-execute-\u65B9\u6CD5\u548C-submit-\u65B9\u6CD5\u7684\u533A\u522B\u662F\u4EC0\u4E48\u5462","children":[]},{"level":3,"title":"\u5982\u4F55\u521B\u5EFA\u7EBF\u7A0B\u6C60","slug":"\u5982\u4F55\u521B\u5EFA\u7EBF\u7A0B\u6C60","children":[]},{"level":3,"title":"ThreadPoolExecutor \u7C7B\u5206\u6790","slug":"threadpoolexecutor-\u7C7B\u5206\u6790","children":[]},{"level":3,"title":"\u4E00\u4E2A\u7B80\u5355\u7684\u7EBF\u7A0B\u6C60 Demo","slug":"\u4E00\u4E2A\u7B80\u5355\u7684\u7EBF\u7A0B\u6C60-demo","children":[]},{"level":3,"title":"\u7EBF\u7A0B\u6C60\u539F\u7406\u5206\u6790","slug":"\u7EBF\u7A0B\u6C60\u539F\u7406\u5206\u6790","children":[]}]},{"level":2,"title":"Atomic \u539F\u5B50\u7C7B","slug":"atomic-\u539F\u5B50\u7C7B","children":[{"level":3,"title":"\u4ECB\u7ECD\u4E00\u4E0B Atomic \u539F\u5B50\u7C7B","slug":"\u4ECB\u7ECD\u4E00\u4E0B-atomic-\u539F\u5B50\u7C7B","children":[]},{"level":3,"title":"JUC \u5305\u4E2D\u7684\u539F\u5B50\u7C7B\u662F\u54EA 4 \u7C7B?","slug":"juc-\u5305\u4E2D\u7684\u539F\u5B50\u7C7B\u662F\u54EA-4-\u7C7B","children":[]},{"level":3,"title":"\u8BB2\u8BB2 AtomicInteger \u7684\u4F7F\u7528","slug":"\u8BB2\u8BB2-atomicinteger-\u7684\u4F7F\u7528","children":[]},{"level":3,"title":"\u80FD\u4E0D\u80FD\u7ED9\u6211\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B AtomicInteger \u7C7B\u7684\u539F\u7406","slug":"\u80FD\u4E0D\u80FD\u7ED9\u6211\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B-atomicinteger-\u7C7B\u7684\u539F\u7406","children":[]}]},{"level":2,"title":"AQS","slug":"aqs","children":[{"level":3,"title":"AQS \u4ECB\u7ECD","slug":"aqs-\u4ECB\u7ECD","children":[]},{"level":3,"title":"AQS \u539F\u7406\u5206\u6790","slug":"aqs-\u539F\u7406\u5206\u6790","children":[]},{"level":3,"title":"AQS \u7EC4\u4EF6\u603B\u7ED3","slug":"aqs-\u7EC4\u4EF6\u603B\u7ED3","children":[]},{"level":3,"title":"\u7528\u8FC7 CountDownLatch \u4E48\uFF1F\u4EC0\u4E48\u573A\u666F\u4E0B\u7528\u7684\uFF1F","slug":"\u7528\u8FC7-countdownlatch-\u4E48-\u4EC0\u4E48\u573A\u666F\u4E0B\u7528\u7684","children":[]}]},{"level":2,"title":"Reference","slug":"reference","children":[]}],"git":{"createdTime":1658043114000,"updatedTime":1658043114000,"contributors":[{"name":"begun-zhao","email":"834561898@qq.com","commits":1}]},"readingTime":{"minutes":43.86,"words":13159},"filePathRelative":"code/java/common/concurrent/java-concurrent-questions-02.md","localizedDate":"2020\u5E748\u670819\u65E5"}');export{e as data};
