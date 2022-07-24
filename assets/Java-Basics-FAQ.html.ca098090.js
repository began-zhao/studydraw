const e=JSON.parse('{"key":"v-89d8cc72","path":"/interview/Java-Basics-FAQ.html","title":"Java \u57FA\u7840\u90E8\u5206","lang":"zh-CN","frontmatter":{"title":"Java \u57FA\u7840\u90E8\u5206","date":"2020-11-23T00:00:00.000Z","category":["interview"],"summary":"JDK\u548CJRE\u3001 JVM JDK\uFF08Java Development Kit\uFF09\u662F Java \u5F00\u53D1\u5DE5\u5177\u5305\uFF0C\u5305\u62EC\u4E86 Java \u8FD0\u884C\u73AF\u5883 JRE\u3001Java \u5DE5\u5177\u548C Java \u57FA\u7840\u7C7B\u5E93\u3002; JRE\uFF08Java Runtime Environment\uFF09\u662F\u8FD0\u884C Java \u7A0B\u5E8F\u6240\u5FC5\u987B\u7684\u73AF\u5883\u7684\u96C6\u5408\uFF0C\u5305\u542B JVM \u6807\u51C6\u5B9E\u73B0\u53CA Java \u6838\u5FC3\u7C7B\u5E93\u3002; JVM\uFF08Java Virtua","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/interview/Java-Basics-FAQ.html"}],["meta",{"property":"og:site_name","content":"\u5496\u98DE\u7684\u535A\u5BA2"}],["meta",{"property":"og:title","content":"Java \u57FA\u7840\u90E8\u5206"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-24T06:32:14.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2020-11-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-24T06:32:14.000Z"}]]},"excerpt":"","headers":[{"level":3,"title":"JDK\u548CJRE\u3001 JVM","slug":"jdk\u548Cjre\u3001-jvm","children":[]},{"level":3,"title":"Class \u548C Object \u7684\u533A\u522B","slug":"class-\u548C-object-\u7684\u533A\u522B","children":[]},{"level":3,"title":"\u5BF9\u6BD4 Exception \u548C Error\uFF0C\u53E6\u5916\uFF0C\u8FD0\u884C\u65F6\u5F02\u5E38\u4E0E\u4E00\u822C\u5F02\u5E38\u6709\u4EC0\u4E48\u533A\u522B\uFF1F","slug":"\u5BF9\u6BD4-exception-\u548C-error-\u53E6\u5916-\u8FD0\u884C\u65F6\u5F02\u5E38\u4E0E\u4E00\u822C\u5F02\u5E38\u6709\u4EC0\u4E48\u533A\u522B","children":[]},{"level":3,"title":"\u7C7B\u548C\u5BF9\u8C61\u7684\u533A\u522B","slug":"\u7C7B\u548C\u5BF9\u8C61\u7684\u533A\u522B","children":[]},{"level":3,"title":"\u4F60\u662F\u5982\u4F55\u7406\u89E3\u9762\u5411\u5BF9\u8C61\u7684","slug":"\u4F60\u662F\u5982\u4F55\u7406\u89E3\u9762\u5411\u5BF9\u8C61\u7684","children":[]},{"level":3,"title":"\u6784\u9020\u65B9\u6CD5\u548C\u666E\u901A\u65B9\u6CD5\u7684\u533A\u522B","slug":"\u6784\u9020\u65B9\u6CD5\u548C\u666E\u901A\u65B9\u6CD5\u7684\u533A\u522B","children":[]},{"level":3,"title":"\u4F5C\u7528\u57DFpublic\uFF0Cprivate\uFF0Cprotected\uFF0C\u4EE5\u53CA\u4E0D\u5199\u65F6\u7684\u533A\u522B","slug":"\u4F5C\u7528\u57DFpublic-private-protected-\u4EE5\u53CA\u4E0D\u5199\u65F6\u7684\u533A\u522B","children":[]},{"level":3,"title":"Integer\u4E0E int \u7684\u533A\u522B","slug":"integer\u4E0E-int-\u7684\u533A\u522B","children":[]},{"level":3,"title":"int float short double long char \u5360\u5B57\u8282\u6570\uFF1F","slug":"int-float-short-double-long-char-\u5360\u5B57\u8282\u6570","children":[]},{"level":3,"title":"\u57FA\u672C\u7C7B\u578B\u548C\u5305\u88C5\u7C7B\u578B\u7684\u533A\u522B","slug":"\u57FA\u672C\u7C7B\u578B\u548C\u5305\u88C5\u7C7B\u578B\u7684\u533A\u522B","children":[]},{"level":3,"title":"&\u548C&&\u7684\u533A\u522B","slug":"\u548C-\u7684\u533A\u522B","children":[]},{"level":3,"title":"\u5168\u5C40\u53D8\u91CF\u3001\u5C40\u90E8\u53D8\u91CF\u3001\u9759\u6001\u53D8\u91CF\u548C\u5B9E\u4F8B\u53D8\u91CF\u7684\u533A\u522B","slug":"\u5168\u5C40\u53D8\u91CF\u3001\u5C40\u90E8\u53D8\u91CF\u3001\u9759\u6001\u53D8\u91CF\u548C\u5B9E\u4F8B\u53D8\u91CF\u7684\u533A\u522B","children":[]},{"level":3,"title":"\u7C7B\u53D8\u91CF\u4E0E\u5B9E\u4F8B\u53D8\u91CF\u7684\u533A\u522B","slug":"\u7C7B\u53D8\u91CF\u4E0E\u5B9E\u4F8B\u53D8\u91CF\u7684\u533A\u522B","children":[]},{"level":3,"title":"\\"==\\"\u548Cequals\u533A\u522B","slug":"\u548Cequals\u533A\u522B","children":[]},{"level":3,"title":"String s = new String(\\"xyz\\");\u521B\u5EFA\u4E86\u51E0\u4E2AString Object? \u4E8C\u8005\u4E4B\u95F4\u6709\u4EC0\u4E48\u533A\u522B\uFF1F","slug":"string-s-new-string-xyz-\u521B\u5EFA\u4E86\u51E0\u4E2Astring-object-\u4E8C\u8005\u4E4B\u95F4\u6709\u4EC0\u4E48\u533A\u522B","children":[]},{"level":3,"title":"String \u548CStringBuffer\u7684\u533A\u522B","slug":"string-\u548Cstringbuffer\u7684\u533A\u522B","children":[]},{"level":3,"title":"final, finally, finalize\u7684\u533A\u522B","slug":"final-finally-finalize\u7684\u533A\u522B","children":[]},{"level":3,"title":"Java\u4E2Dfinally\u8BED\u53E5\u5757\u7684\u6DF1\u5EA6\u89E3\u6790(try catch finally\u7684\u6267\u884C\u987A\u5E8F)","slug":"java\u4E2Dfinally\u8BED\u53E5\u5757\u7684\u6DF1\u5EA6\u89E3\u6790-try-catch-finally\u7684\u6267\u884C\u987A\u5E8F","children":[]},{"level":3,"title":"Overload\u548COverride\u7684\u533A\u522B","slug":"overload\u548Coverride\u7684\u533A\u522B","children":[]},{"level":3,"title":"ceil\u3001floor\u3001round\u7684\u533A\u522B","slug":"ceil\u3001floor\u3001round\u7684\u533A\u522B","children":[]},{"level":3,"title":"\u62BD\u8C61\u7C7B\u548C\u63A5\u53E3\u7684\u5BF9\u6BD4","slug":"\u62BD\u8C61\u7C7B\u548C\u63A5\u53E3\u7684\u5BF9\u6BD4","children":[]},{"level":3,"title":"Java\u4E2D\u7684\u5F02\u5E38\u5904\u7406\u673A\u5236\u7684\u7B80\u5355\u539F\u7406\u548C\u5E94\u7528","slug":"java\u4E2D\u7684\u5F02\u5E38\u5904\u7406\u673A\u5236\u7684\u7B80\u5355\u539F\u7406\u548C\u5E94\u7528","children":[]},{"level":3,"title":"\u4EC0\u4E48\u662Fjava\u5E8F\u5217\u5316\uFF0C\u5982\u4F55\u5B9E\u73B0java\u5E8F\u5217\u5316\uFF1F\u6216\u8005\u8BF7\u89E3\u91CASerializable\u63A5\u53E3\u7684\u4F5C\u7528","slug":"\u4EC0\u4E48\u662Fjava\u5E8F\u5217\u5316-\u5982\u4F55\u5B9E\u73B0java\u5E8F\u5217\u5316-\u6216\u8005\u8BF7\u89E3\u91CAserializable\u63A5\u53E3\u7684\u4F5C\u7528","children":[]},{"level":3,"title":"java\u4E2D\u6709\u51E0\u79CD\u7C7B\u578B\u7684\u6D41\uFF1FJDK\u4E3A\u6BCF\u79CD\u7C7B\u578B\u7684\u6D41\u63D0\u4F9B\u4E86\u4E00\u4E9B\u62BD\u8C61\u7C7B\u4EE5\u4F9B\u7EE7\u627F\uFF0C\u8BF7\u8BF4\u51FA\u4ED6\u4EEC\u5206\u522B\u662F\u54EA\u4E9B\u7C7B\uFF1F","slug":"java\u4E2D\u6709\u51E0\u79CD\u7C7B\u578B\u7684\u6D41-jdk\u4E3A\u6BCF\u79CD\u7C7B\u578B\u7684\u6D41\u63D0\u4F9B\u4E86\u4E00\u4E9B\u62BD\u8C61\u7C7B\u4EE5\u4F9B\u7EE7\u627F-\u8BF7\u8BF4\u51FA\u4ED6\u4EEC\u5206\u522B\u662F\u54EA\u4E9B\u7C7B","children":[]},{"level":3,"title":"\u5B57\u8282\u6D41\u4E0E\u5B57\u7B26\u6D41\u7684\u533A\u522B","slug":"\u5B57\u8282\u6D41\u4E0E\u5B57\u7B26\u6D41\u7684\u533A\u522B","children":[]},{"level":3,"title":"\u83B7\u5F97\u4E00\u4E2A\u7C7B\u7684\u7C7B\u5BF9\u8C61\u6709\u54EA\u4E9B\u65B9\u5F0F\uFF1F","slug":"\u83B7\u5F97\u4E00\u4E2A\u7C7B\u7684\u7C7B\u5BF9\u8C61\u6709\u54EA\u4E9B\u65B9\u5F0F","children":[]},{"level":3,"title":"\u5982\u4F55\u901A\u8FC7\u53CD\u5C04\u521B\u5EFA\u5BF9\u8C61\uFF1F","slug":"\u5982\u4F55\u901A\u8FC7\u53CD\u5C04\u521B\u5EFA\u5BF9\u8C61","children":[]},{"level":3,"title":"break ,continue ,return \u7684\u533A\u522B\u53CA\u4F5C\u7528","slug":"break-continue-return-\u7684\u533A\u522B\u53CA\u4F5C\u7528","children":[]},{"level":3,"title":"hashCode \u4E0E equals (\u91CD\u8981)","slug":"hashcode-\u4E0E-equals-\u91CD\u8981","children":[]},{"level":3,"title":"\u4E3A\u4EC0\u4E48\u91CD\u5199\u4E86equals()\uFF0C\u8FD8\u8981\u91CD\u5199hashCode()\uFF1F","slug":"\u4E3A\u4EC0\u4E48\u91CD\u5199\u4E86equals-\u8FD8\u8981\u91CD\u5199hashcode","children":[]},{"level":3,"title":"BIO,NIO,AIO \u6709\u4EC0\u4E48\u533A\u522B?","slug":"bio-nio-aio-\u6709\u4EC0\u4E48\u533A\u522B","children":[]},{"level":2,"title":"\u53CD\u5C04","slug":"\u53CD\u5C04","children":[{"level":3,"title":"\u4EC0\u4E48\u662F\u53CD\u5C04\u673A\u5236\uFF1F","slug":"\u4EC0\u4E48\u662F\u53CD\u5C04\u673A\u5236","children":[]},{"level":3,"title":"\u53CD\u5C04\u673A\u5236\u4F18\u7F3A\u70B9","slug":"\u53CD\u5C04\u673A\u5236\u4F18\u7F3A\u70B9","children":[]},{"level":3,"title":"\u53CD\u5C04\u673A\u5236\u7684\u5E94\u7528\u573A\u666F\u6709\u54EA\u4E9B\uFF1F","slug":"\u53CD\u5C04\u673A\u5236\u7684\u5E94\u7528\u573A\u666F\u6709\u54EA\u4E9B","children":[]},{"level":3,"title":"Java\u83B7\u53D6\u53CD\u5C04\u7684\u4E09\u79CD\u65B9\u6CD5","slug":"java\u83B7\u53D6\u53CD\u5C04\u7684\u4E09\u79CD\u65B9\u6CD5","children":[]},{"level":3,"title":"\u53CD\u5C04\u7684\u539F\u7406","slug":"\u53CD\u5C04\u7684\u539F\u7406","children":[]},{"level":3,"title":"\u6CE8\u89E3\u7684\u539F\u7406","slug":"\u6CE8\u89E3\u7684\u539F\u7406","children":[]}]},{"level":2,"title":"Java \u7248\u672C\u5DEE\u5F02","slug":"java-\u7248\u672C\u5DEE\u5F02","children":[{"level":3,"title":"lambda \u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u5916\u90E8\u53D8\u91CF\uFF0C\u4E3A\u4EC0\u4E48\u8981 final\uFF1F","slug":"lambda-\u8868\u8FBE\u5F0F\u4E2D\u4F7F\u7528\u5916\u90E8\u53D8\u91CF-\u4E3A\u4EC0\u4E48\u8981-final","children":[]}]}],"git":{"createdTime":1658644334000,"updatedTime":1658644334000,"contributors":[{"name":"begun-zhao","email":"834561898@qq.com","commits":1}]},"readingTime":{"minutes":31.18,"words":9355},"filePathRelative":"interview/Java-Basics-FAQ.md","localizedDate":"2020\u5E7411\u670823\u65E5"}');export{e as data};
