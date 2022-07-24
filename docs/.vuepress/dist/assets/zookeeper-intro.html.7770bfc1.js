const e=JSON.parse('{"key":"v-f34212ea","path":"/code/java/distributed-system/distributed-process-coordination/zookeeper/zookeeper-intro.html","title":"ZooKeeper \u5B9E\u6218","lang":"zh-CN","frontmatter":{"title":"ZooKeeper \u5B9E\u6218","icon":"ZooKeeper","date":"2020-11-28T00:00:00.000Z","summary":"ZooKeeper \u76F8\u5173\u6982\u5FF5\u603B\u7ED3(\u5165\u95E8) 1. \u524D\u8A00 \u76F8\u4FE1\u5927\u5BB6\u5BF9 ZooKeeper \u5E94\u8BE5\u4E0D\u7B97\u964C\u751F\u3002\u4F46\u662F\u4F60\u771F\u7684\u4E86\u89E3 ZooKeeper \u5230\u5E95\u6709\u5565\u7528\u4E0D\uFF1F\u5982\u679C\u522B\u4EBA/\u9762\u8BD5\u5B98\u8BA9\u4F60\u7ED9\u4ED6\u8BB2\u8BB2\u5BF9\u4E8E ZooKeeper \u7684\u8BA4\u8BC6\uFF0C\u4F60\u80FD\u56DE\u7B54\u5230\u4EC0\u4E48\u5730\u6B65\u5462\uFF1F \u62FF\u6211\u81EA\u5DF1\u6765\u8BF4\u5427\uFF01\u6211\u672C\u4EBA\u66FE\u7ECF\u4F7F\u7528 Dubbo \u6765\u505A\u5206\u5E03\u5F0F\u9879\u76EE\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u4E86 ZooKeeper \u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3\u3002\u4E3A\u4E86\u4FDD\u8BC1\u5206\u5E03\u5F0F\u7CFB","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/code/java/distributed-system/distributed-process-coordination/zookeeper/zookeeper-intro.html"}],["meta",{"property":"og:site_name","content":"\u5496\u98DE\u7684\u535A\u5BA2"}],["meta",{"property":"og:title","content":"ZooKeeper \u5B9E\u6218"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/"}],["meta",{"property":"og:updated_time","content":"2022-07-17T07:31:54.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"ZooKeeper \u5B9E\u6218"}],["meta",{"property":"article:published_time","content":"2020-11-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-17T07:31:54.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. \u524D\u8A00","slug":"_1-\u524D\u8A00","children":[]},{"level":2,"title":"2. ZooKeeper \u4ECB\u7ECD","slug":"_2-zookeeper-\u4ECB\u7ECD","children":[{"level":3,"title":"2.1. ZooKeeper \u7531\u6765","slug":"_2-1-zookeeper-\u7531\u6765","children":[]},{"level":3,"title":"2.2. ZooKeeper \u6982\u89C8","slug":"_2-2-zookeeper-\u6982\u89C8","children":[]},{"level":3,"title":"2.3. ZooKeeper \u7279\u70B9","slug":"_2-3-zookeeper-\u7279\u70B9","children":[]},{"level":3,"title":"2.4. ZooKeeper \u5178\u578B\u5E94\u7528\u573A\u666F","slug":"_2-4-zookeeper-\u5178\u578B\u5E94\u7528\u573A\u666F","children":[]},{"level":3,"title":"2.5. \u6709\u54EA\u4E9B\u8457\u540D\u7684\u5F00\u6E90\u9879\u76EE\u7528\u5230\u4E86 ZooKeeper?","slug":"_2-5-\u6709\u54EA\u4E9B\u8457\u540D\u7684\u5F00\u6E90\u9879\u76EE\u7528\u5230\u4E86-zookeeper","children":[]}]},{"level":2,"title":"3. ZooKeeper \u91CD\u8981\u6982\u5FF5\u89E3\u8BFB","slug":"_3-zookeeper-\u91CD\u8981\u6982\u5FF5\u89E3\u8BFB","children":[{"level":3,"title":"3.1. Data model\uFF08\u6570\u636E\u6A21\u578B\uFF09","slug":"_3-1-data-model-\u6570\u636E\u6A21\u578B","children":[]},{"level":3,"title":"3.2. znode\uFF08\u6570\u636E\u8282\u70B9\uFF09","slug":"_3-2-znode-\u6570\u636E\u8282\u70B9","children":[]},{"level":3,"title":"3.3. \u7248\u672C\uFF08version\uFF09","slug":"_3-3-\u7248\u672C-version","children":[]},{"level":3,"title":"3.4. ACL\uFF08\u6743\u9650\u63A7\u5236\uFF09","slug":"_3-4-acl-\u6743\u9650\u63A7\u5236","children":[]},{"level":3,"title":"3.5. Watcher\uFF08\u4E8B\u4EF6\u76D1\u542C\u5668\uFF09","slug":"_3-5-watcher-\u4E8B\u4EF6\u76D1\u542C\u5668","children":[]},{"level":3,"title":"3.6. \u4F1A\u8BDD\uFF08Session\uFF09","slug":"_3-6-\u4F1A\u8BDD-session","children":[]}]},{"level":2,"title":"4. ZooKeeper \u96C6\u7FA4","slug":"_4-zookeeper-\u96C6\u7FA4","children":[{"level":3,"title":"4.1. ZooKeeper \u96C6\u7FA4\u89D2\u8272","slug":"_4-1-zookeeper-\u96C6\u7FA4\u89D2\u8272","children":[]},{"level":3,"title":"4.2. ZooKeeper \u96C6\u7FA4\u4E2D\u7684\u670D\u52A1\u5668\u72B6\u6001","slug":"_4-2-zookeeper-\u96C6\u7FA4\u4E2D\u7684\u670D\u52A1\u5668\u72B6\u6001","children":[]},{"level":3,"title":"4.3. ZooKeeper \u96C6\u7FA4\u4E3A\u5565\u6700\u597D\u5947\u6570\u53F0\uFF1F","slug":"_4-3-zookeeper-\u96C6\u7FA4\u4E3A\u5565\u6700\u597D\u5947\u6570\u53F0","children":[]},{"level":3,"title":"4.4. ZooKeeper \u9009\u4E3E\u7684\u8FC7\u534A\u673A\u5236\u9632\u6B62\u8111\u88C2","slug":"_4-4-zookeeper-\u9009\u4E3E\u7684\u8FC7\u534A\u673A\u5236\u9632\u6B62\u8111\u88C2","children":[]}]},{"level":2,"title":"5. ZAB \u534F\u8BAE\u548C Paxos \u7B97\u6CD5","slug":"_5-zab-\u534F\u8BAE\u548C-paxos-\u7B97\u6CD5","children":[{"level":3,"title":"5.1. ZAB \u534F\u8BAE\u4ECB\u7ECD","slug":"_5-1-zab-\u534F\u8BAE\u4ECB\u7ECD","children":[]},{"level":3,"title":"5.2. ZAB \u534F\u8BAE\u4E24\u79CD\u57FA\u672C\u7684\u6A21\u5F0F\uFF1A\u5D29\u6E83\u6062\u590D\u548C\u6D88\u606F\u5E7F\u64AD","slug":"_5-2-zab-\u534F\u8BAE\u4E24\u79CD\u57FA\u672C\u7684\u6A21\u5F0F-\u5D29\u6E83\u6062\u590D\u548C\u6D88\u606F\u5E7F\u64AD","children":[]}]},{"level":2,"title":"6. \u603B\u7ED3","slug":"_6-\u603B\u7ED3","children":[]},{"level":2,"title":"7. \u53C2\u8003","slug":"_7-\u53C2\u8003","children":[]}],"git":{"createdTime":1658043114000,"updatedTime":1658043114000,"contributors":[{"name":"begun-zhao","email":"834561898@qq.com","commits":1}]},"readingTime":{"minutes":19.72,"words":5917},"filePathRelative":"code/java/distributed-system/distributed-process-coordination/zookeeper/zookeeper-intro.md","localizedDate":"2020\u5E7411\u670828\u65E5"}');export{e as data};
