const e=JSON.parse('{"key":"v-597d6a1a","path":"/interview/Elasticsearch-FAQ.html","title":"ElasticSearch \u90E8\u5206","lang":"zh-CN","frontmatter":{"title":"ElasticSearch \u90E8\u5206","date":"2020-11-23T00:00:00.000Z","category":["interview"],"summary":"\u76EE\u524D\u7684 ES \u6709 4\u4E2A \u8282\u70B9\u300114\u4E2A\u7D22\u5F15\u3001236\u4E2A\u5206\u7247\u3001\u6587\u6863\u6570 12 \u4EBF \u5199\u53EF\u4EE5\u8FBE\u5230 2 \u4E07 bulk 1000 \u5DE6\u53F3 1\u3001elasticsearch\u4E86\u89E3\u591A\u5C11\uFF0C\u8BF4\u8BF4\u4F60\u4EEC\u516C\u53F8es\u7684\u96C6\u7FA4\u67B6\u6784\uFF0C\u7D22\u5F15\u6570\u636E\u5927\u5C0F\uFF0C\u5206\u7247\u6709\u591A\u5C11\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u8C03\u4F18\u624B\u6BB5 \u3002 \u9762\u8BD5\u5B98 \uFF1A\u60F3\u4E86\u89E3\u5E94\u8058\u8005\u4E4B\u524D\u516C\u53F8\u63A5\u89E6\u7684ES\u4F7F\u7528\u573A\u666F\u3001\u89C4\u6A21\uFF0C\u6709\u6CA1\u6709\u505A\u8FC7\u6BD4\u8F83\u5927\u89C4\u6A21\u7684\u7D22\u5F15\u8BBE\u8BA1\u3001\u89C4\u5212\u3001\u8C03\u4F18\u3002\u89E3\u7B54 \uFF1A\u5982\u5B9E\u7ED3\u5408\u81EA\u5DF1\u7684\u5B9E","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/interview/Elasticsearch-FAQ.html"}],["meta",{"property":"og:site_name","content":"\u5496\u98DE\u7684\u535A\u5BA2"}],["meta",{"property":"og:title","content":"ElasticSearch \u90E8\u5206"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-24T06:32:14.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2020-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-24T06:32:14.000Z"}]]},"excerpt":"","headers":[{"level":3,"title":"1\u3001elasticsearch\u4E86\u89E3\u591A\u5C11\uFF0C\u8BF4\u8BF4\u4F60\u4EEC\u516C\u53F8es\u7684\u96C6\u7FA4\u67B6\u6784\uFF0C\u7D22\u5F15\u6570\u636E\u5927\u5C0F\uFF0C\u5206\u7247\u6709\u591A\u5C11\uFF0C\u4EE5\u53CA\u4E00\u4E9B\u8C03\u4F18\u624B\u6BB5 \u3002","slug":"_1\u3001elasticsearch\u4E86\u89E3\u591A\u5C11-\u8BF4\u8BF4\u4F60\u4EEC\u516C\u53F8es\u7684\u96C6\u7FA4\u67B6\u6784-\u7D22\u5F15\u6570\u636E\u5927\u5C0F-\u5206\u7247\u6709\u591A\u5C11-\u4EE5\u53CA\u4E00\u4E9B\u8C03\u4F18\u624B\u6BB5-\u3002","children":[]},{"level":3,"title":"2\u3001elasticsearch\u7684\u5012\u6392\u7D22\u5F15\u662F\u4EC0\u4E48","slug":"_2\u3001elasticsearch\u7684\u5012\u6392\u7D22\u5F15\u662F\u4EC0\u4E48","children":[]},{"level":3,"title":"3\u3001elasticsearch \u7D22\u5F15\u6570\u636E\u591A\u4E86\u600E\u4E48\u529E\uFF0C\u5982\u4F55\u8C03\u4F18\uFF0C\u90E8\u7F72","slug":"_3\u3001elasticsearch-\u7D22\u5F15\u6570\u636E\u591A\u4E86\u600E\u4E48\u529E-\u5982\u4F55\u8C03\u4F18-\u90E8\u7F72","children":[]},{"level":3,"title":"4\u3001elasticsearch\u662F\u5982\u4F55\u5B9E\u73B0master\u9009\u4E3E\u7684","slug":"_4\u3001elasticsearch\u662F\u5982\u4F55\u5B9E\u73B0master\u9009\u4E3E\u7684","children":[]},{"level":3,"title":"5\u3001\u8BE6\u7EC6\u63CF\u8FF0\u4E00\u4E0BElasticsearch\u7D22\u5F15\u6587\u6863\u7684\u8FC7\u7A0B","slug":"_5\u3001\u8BE6\u7EC6\u63CF\u8FF0\u4E00\u4E0Belasticsearch\u7D22\u5F15\u6587\u6863\u7684\u8FC7\u7A0B","children":[]},{"level":3,"title":"6\u3001\u8BE6\u7EC6\u63CF\u8FF0\u4E00\u4E0BElasticsearch\u641C\u7D22\u7684\u8FC7\u7A0B\uFF1F","slug":"_6\u3001\u8BE6\u7EC6\u63CF\u8FF0\u4E00\u4E0Belasticsearch\u641C\u7D22\u7684\u8FC7\u7A0B","children":[]},{"level":3,"title":"7\u3001Elasticsearch\u5728\u90E8\u7F72\u65F6\uFF0C\u5BF9Linux\u7684\u8BBE\u7F6E\u6709\u54EA\u4E9B\u4F18\u5316\u65B9\u6CD5","slug":"_7\u3001elasticsearch\u5728\u90E8\u7F72\u65F6-\u5BF9linux\u7684\u8BBE\u7F6E\u6709\u54EA\u4E9B\u4F18\u5316\u65B9\u6CD5","children":[]},{"level":3,"title":"8\u3001lucence\u5185\u90E8\u7ED3\u6784\u662F\u4EC0\u4E48\uFF1F","slug":"_8\u3001lucence\u5185\u90E8\u7ED3\u6784\u662F\u4EC0\u4E48","children":[]}],"git":{"createdTime":1658644334000,"updatedTime":1658644334000,"contributors":[{"name":"begun-zhao","email":"834561898@qq.com","commits":1}]},"readingTime":{"minutes":7.76,"words":2327},"filePathRelative":"interview/Elasticsearch-FAQ.md","localizedDate":"2020\u5E7411\u670823\u65E5"}');export{e as data};
