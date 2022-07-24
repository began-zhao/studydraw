const e=JSON.parse('{"key":"v-0326f310","path":"/code/java/high-performance/message-queue/rocketmq-intro.html","title":"RocketMQ \u5165\u95E8\u603B\u7ED3","lang":"zh-CN","frontmatter":{"title":"RocketMQ \u5165\u95E8\u603B\u7ED3","category":["MQ"],"date":"2021-04-22T00:00:00.000Z","summary":"RocketMQ \u5165\u95E8\u603B\u7ED3 \\" \u6587\u7AE0\u5F88\u957F\uFF0C\u70B9\u8D5E\u518D\u770B\uFF0C\u517B\u6210\u597D\u4E60\u60EF\u{1F60B}\u{1F60B}\u{1F60B}\\" \\"\\" \\" \u672C\u6587\u7531 FrancisQ \u8001\u54E5\u6295\u7A3F\uFF01\\" \u6D88\u606F\u961F\u5217\u626B\u76F2 \u6D88\u606F\u961F\u5217\u987E\u540D\u601D\u4E49\u5C31\u662F\u5B58\u653E\u6D88\u606F\u7684\u961F\u5217\uFF0C\u961F\u5217\u6211\u5C31\u4E0D\u89E3\u91CA\u4E86\uFF0C\u522B\u544A\u8BC9\u6211\u4F60\u8FDE\u961F\u5217\u90FD\u4E0D\u77E5\u9053\u662F\u5565\u5427\uFF1F \u6240\u4EE5\u95EE\u9898\u5E76\u4E0D\u662F\u6D88\u606F\u961F\u5217\u662F\u4EC0\u4E48\uFF0C\u800C\u662F \u6D88\u606F\u961F\u5217\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\uFF1F\u6D88\u606F\u961F\u5217\u80FD\u7528\u6765\u5E72\u4EC0\u4E48\uFF1F\u7528\u5B83\u6765\u5E72\u8FD9\u4E9B\u4E8B\u4F1A\u5E26\u6765\u4EC0\u4E48\u597D\u5904\uFF1F\u6D88\u606F\u961F\u5217\u4F1A\u5E26\u6765\u526F\u4F5C\u7528","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/high-performance/message-queue/rocketmq-intro.html"}],["meta",{"property":"og:site_name","content":"\u5496\u98DE\u7684\u535A\u5BA2"}],["meta",{"property":"og:title","content":"RocketMQ \u5165\u95E8\u603B\u7ED3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-24T06:32:14.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2021-04-22T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-24T06:32:14.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\u6D88\u606F\u961F\u5217\u626B\u76F2","slug":"\u6D88\u606F\u961F\u5217\u626B\u76F2","children":[{"level":3,"title":"\u6D88\u606F\u961F\u5217\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0\uFF1F","slug":"\u6D88\u606F\u961F\u5217\u4E3A\u4EC0\u4E48\u4F1A\u51FA\u73B0","children":[]},{"level":3,"title":"\u6D88\u606F\u961F\u5217\u80FD\u7528\u6765\u5E72\u4EC0\u4E48\uFF1F","slug":"\u6D88\u606F\u961F\u5217\u80FD\u7528\u6765\u5E72\u4EC0\u4E48","children":[]}]},{"level":2,"title":"RocketMQ\u662F\u4EC0\u4E48\uFF1F","slug":"rocketmq\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u961F\u5217\u6A21\u578B\u548C\u4E3B\u9898\u6A21\u578B","slug":"\u961F\u5217\u6A21\u578B\u548C\u4E3B\u9898\u6A21\u578B","children":[{"level":3,"title":"\u961F\u5217\u6A21\u578B","slug":"\u961F\u5217\u6A21\u578B","children":[]},{"level":3,"title":"\u4E3B\u9898\u6A21\u578B","slug":"\u4E3B\u9898\u6A21\u578B","children":[]},{"level":3,"title":"RocketMQ\u4E2D\u7684\u6D88\u606F\u6A21\u578B","slug":"rocketmq\u4E2D\u7684\u6D88\u606F\u6A21\u578B","children":[]}]},{"level":2,"title":"RocketMQ\u7684\u67B6\u6784\u56FE","slug":"rocketmq\u7684\u67B6\u6784\u56FE","children":[]},{"level":2,"title":"\u5982\u4F55\u89E3\u51B3 \u987A\u5E8F\u6D88\u8D39\u3001\u91CD\u590D\u6D88\u8D39","slug":"\u5982\u4F55\u89E3\u51B3-\u987A\u5E8F\u6D88\u8D39\u3001\u91CD\u590D\u6D88\u8D39","children":[{"level":3,"title":"\u987A\u5E8F\u6D88\u8D39","slug":"\u987A\u5E8F\u6D88\u8D39","children":[]},{"level":3,"title":"\u91CD\u590D\u6D88\u8D39","slug":"\u91CD\u590D\u6D88\u8D39","children":[]}]},{"level":2,"title":"\u5206\u5E03\u5F0F\u4E8B\u52A1","slug":"\u5206\u5E03\u5F0F\u4E8B\u52A1","children":[]},{"level":2,"title":"\u6D88\u606F\u5806\u79EF\u95EE\u9898","slug":"\u6D88\u606F\u5806\u79EF\u95EE\u9898","children":[]},{"level":2,"title":"\u56DE\u6EAF\u6D88\u8D39","slug":"\u56DE\u6EAF\u6D88\u8D39","children":[]},{"level":2,"title":"RocketMQ \u7684\u5237\u76D8\u673A\u5236","slug":"rocketmq-\u7684\u5237\u76D8\u673A\u5236","children":[{"level":3,"title":"\u540C\u6B65\u5237\u76D8\u548C\u5F02\u6B65\u5237\u76D8","slug":"\u540C\u6B65\u5237\u76D8\u548C\u5F02\u6B65\u5237\u76D8","children":[]},{"level":3,"title":"\u540C\u6B65\u590D\u5236\u548C\u5F02\u6B65\u590D\u5236","slug":"\u540C\u6B65\u590D\u5236\u548C\u5F02\u6B65\u590D\u5236","children":[]},{"level":3,"title":"\u5B58\u50A8\u673A\u5236","slug":"\u5B58\u50A8\u673A\u5236","children":[]}]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","children":[]}],"git":{"createdTime":1658644334000,"updatedTime":1658644334000,"contributors":[{"name":"begun-zhao","email":"834561898@qq.com","commits":1}]},"readingTime":{"minutes":39.31,"words":11794},"filePathRelative":"code/java/high-performance/message-queue/rocketmq-intro.md","localizedDate":"2021\u5E744\u670822\u65E5"}');export{e as data};
