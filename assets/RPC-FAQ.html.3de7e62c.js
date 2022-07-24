import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{o as r,c as i,e}from"./app.b9e78213.js";const t={},a=e('<h3 id="\u4EC0\u4E48\u662F-rpc" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-rpc" aria-hidden="true">#</a> \u4EC0\u4E48\u662F RPC \uFF1F</h3><ul><li>RPC (Remote Procedure Call)\u5373<strong>\u8FDC\u7A0B\u8FC7\u7A0B\u8C03\u7528</strong>\uFF0C\u662F\u5206\u5E03\u5F0F\u7CFB\u7EDF\u5E38\u89C1\u7684\u4E00\u79CD\u901A\u4FE1\u65B9\u6CD5\u3002\u5B83\u5141\u8BB8\u7A0B\u5E8F\u8C03\u7528\u53E6\u4E00\u4E2A\u5730\u5740\u7A7A\u95F4\uFF08\u901A\u5E38\u662F\u5171\u4EAB\u7F51\u7EDC\u7684\u53E6\u4E00\u53F0\u673A\u5668\u4E0A\uFF09\u7684\u8FC7\u7A0B\u6216\u51FD\u6570\uFF0C\u800C\u4E0D\u7528\u7A0B\u5E8F\u5458\u663E\u5F0F\u7F16\u7801\u8FD9\u4E2A\u8FDC\u7A0B\u8C03\u7528\u7684\u7EC6\u8282\u3002</li><li>\u9664 RPC \u4E4B\u5916\uFF0C\u5E38\u89C1\u7684\u591A\u7CFB\u7EDF\u6570\u636E\u4EA4\u4E92\u65B9\u6848\u8FD8\u6709\u5206\u5E03\u5F0F\u6D88\u606F\u961F\u5217\u3001HTTP \u8BF7\u6C42\u8C03\u7528\u3001\u6570\u636E\u5E93\u548C\u5206\u5E03\u5F0F\u7F13\u5B58\u7B49\u3002</li><li>\u5176\u4E2D RPC \u548C HTTP \u8C03\u7528\u662F\u6CA1\u6709\u7ECF\u8FC7\u4E2D\u95F4\u4EF6\u7684\uFF0C\u5B83\u4EEC\u662F\u7AEF\u5230\u7AEF\u7CFB\u7EDF\u7684\u76F4\u63A5\u6570\u636E\u4EA4\u4E92\u3002</li></ul><p><strong>\u7B80\u5355\u7684\u8BF4</strong></p><ul><li>RPC\u5C31\u662F\u4ECE\u4E00\u53F0\u673A\u5668\uFF08\u5BA2\u6237\u7AEF\uFF09\u4E0A\u901A\u8FC7\u53C2\u6570\u4F20\u9012\u7684\u65B9\u5F0F\u8C03\u7528\u53E6\u4E00\u53F0\u673A\u5668\uFF08\u670D\u52A1\u5668\uFF09\u4E0A\u7684\u4E00\u4E2A\u51FD\u6570\u6216\u65B9\u6CD5\uFF08\u53EF\u4EE5\u7EDF\u79F0\u4E3A\u670D\u52A1\uFF09\u5E76\u5F97\u5230\u8FD4\u56DE\u7684\u7ED3\u679C\u3002</li><li>RPC\u4F1A\u9690\u85CF\u5E95\u5C42\u7684\u901A\u8BAF\u7EC6\u8282\uFF08\u4E0D\u9700\u8981\u76F4\u63A5\u5904\u7406Socket\u901A\u8BAF\u6216Http\u901A\u8BAF\uFF09\u3002</li><li>\u5BA2\u6237\u7AEF\u53D1\u8D77\u8BF7\u6C42\uFF0C\u670D\u52A1\u5668\u8FD4\u56DE\u54CD\u5E94\uFF08\u7C7B\u4F3C\u4E8EHttp\u7684\u5DE5\u4F5C\u65B9\u5F0F\uFF09RPC\u5728\u4F7F\u7528\u5F62\u5F0F\u4E0A\u50CF\u8C03\u7528\u672C\u5730\u51FD\u6570\uFF08\u6216\u65B9\u6CD5\uFF09\u4E00\u6837\u53BB\u8C03\u7528\u8FDC\u7A0B\u7684\u51FD\u6570\uFF08\u6216\u65B9\u6CD5\uFF09\u3002</li></ul><h3 id="\u4E3A\u4EC0\u4E48\u6211\u4EEC\u8981\u7528rpc" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u6211\u4EEC\u8981\u7528rpc" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48\u6211\u4EEC\u8981\u7528RPC?</h3><p>RPC \u7684\u4E3B\u8981\u76EE\u6807\u662F\u8BA9\u6784\u5EFA\u5206\u5E03\u5F0F\u5E94\u7528\u66F4\u5BB9\u6613\uFF0C\u5728\u63D0\u4F9B\u5F3A\u5927\u7684\u8FDC\u7A0B\u8C03\u7528\u80FD\u529B\u65F6\u4E0D\u635F\u5931\u672C\u5730\u8C03\u7528\u7684\u8BED\u4E49\u7B80\u6D01\u6027\u3002\u4E3A\u5B9E\u73B0\u8BE5\u76EE\u6807\uFF0CRPC \u6846\u67B6\u9700\u63D0\u4F9B\u4E00\u79CD\u900F\u660E\u8C03\u7528\u673A\u5236\u8BA9\u4F7F\u7528\u8005\u4E0D\u5FC5\u663E\u5F0F\u7684\u533A\u5206\u672C\u5730\u8C03\u7528\u548C\u8FDC\u7A0B\u8C03\u7528</p><h3 id="rpc\u9700\u8981\u89E3\u51B3\u7684\u4E09\u4E2A\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#rpc\u9700\u8981\u89E3\u51B3\u7684\u4E09\u4E2A\u95EE\u9898" aria-hidden="true">#</a> RPC\u9700\u8981\u89E3\u51B3\u7684\u4E09\u4E2A\u95EE\u9898</h3><p>RPC\u8981\u8FBE\u5230\u7684\u76EE\u6807\uFF1A\u8FDC\u7A0B\u8C03\u7528\u65F6\uFF0C\u8981\u80FD\u591F\u50CF\u672C\u5730\u8C03\u7528\u4E00\u6837\u65B9\u4FBF\uFF0C\u8BA9\u8C03\u7528\u8005\u611F\u77E5\u4E0D\u5230\u8FDC\u7A0B\u8C03\u7528\u7684\u903B\u8F91\u3002</p><ul><li><strong>Call ID\u6620\u5C04</strong>\u3002\u6211\u4EEC\u600E\u4E48\u544A\u8BC9\u8FDC\u7A0B\u673A\u5668\u6211\u4EEC\u8981<strong>\u8C03\u7528\u54EA\u4E2A\u51FD\u6570\u5462</strong>\uFF1F\u5728\u672C\u5730\u8C03\u7528\u4E2D\uFF0C\u51FD\u6570\u4F53\u662F\u76F4\u63A5\u901A\u8FC7\u51FD\u6570\u6307\u9488\u6765\u6307\u5B9A\u7684\uFF0C\u6211\u4EEC\u8C03\u7528\u5177\u4F53\u51FD\u6570\uFF0C\u7F16\u8BD1\u5668\u5C31\u81EA\u52A8\u5E2E\u6211\u4EEC\u8C03\u7528\u5B83\u76F8\u5E94\u7684\u51FD\u6570\u6307\u9488\u3002\u4F46\u662F\u5728\u8FDC\u7A0B\u8C03\u7528\u4E2D\uFF0C\u662F\u65E0\u6CD5\u8C03\u7528\u51FD\u6570\u6307\u9488\u7684\uFF0C\u56E0\u4E3A\u4E24\u4E2A\u8FDB\u7A0B\u7684\u5730\u5740\u7A7A\u95F4\u662F\u5B8C\u5168\u4E0D\u4E00\u6837\u3002\u6240\u4EE5\uFF0C\u5728RPC\u4E2D\uFF0C<strong>\u6240\u6709\u7684\u51FD\u6570\u90FD\u5FC5\u987B\u6709\u81EA\u5DF1\u7684\u4E00\u4E2AID</strong>\u3002\u8FD9\u4E2AID\u5728\u6240\u6709\u8FDB\u7A0B\u4E2D\u90FD\u662F\u552F\u4E00\u786E\u5B9A\u7684\u3002\u5BA2\u6237\u7AEF\u5728\u505A\u8FDC\u7A0B\u8FC7\u7A0B\u8C03\u7528\u65F6\uFF0C\u5FC5\u987B\u9644\u4E0A\u8FD9\u4E2AID\u3002\u7136\u540E\u6211\u4EEC\u8FD8\u9700\u8981\u5728\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u5206\u522B\u7EF4\u62A4\u4E00\u4E2A {\u51FD\u6570 &lt;--&gt; Call ID} \u7684\u5BF9\u5E94\u8868\u3002\u4E24\u8005\u7684\u8868\u4E0D\u4E00\u5B9A\u9700\u8981\u5B8C\u5168\u76F8\u540C\uFF0C\u4F46\u76F8\u540C\u7684\u51FD\u6570\u5BF9\u5E94\u7684Call ID\u5FC5\u987B\u76F8\u540C\u3002\u5F53\u5BA2\u6237\u7AEF\u9700\u8981\u8FDB\u884C\u8FDC\u7A0B\u8C03\u7528\u65F6\uFF0C\u5B83\u5C31\u67E5\u4E00\u4E0B\u8FD9\u4E2A\u8868\uFF0C\u627E\u51FA\u76F8\u5E94\u7684Call ID\uFF0C\u7136\u540E\u628A\u5B83\u4F20\u7ED9\u670D\u52A1\u7AEF\uFF0C\u670D\u52A1\u7AEF\u4E5F\u901A\u8FC7\u67E5\u8868\uFF0C\u6765\u786E\u5B9A\u5BA2\u6237\u7AEF\u9700\u8981\u8C03\u7528\u7684\u51FD\u6570\uFF0C\u7136\u540E\u6267\u884C\u76F8\u5E94\u51FD\u6570\u7684\u4EE3\u7801\u3002</li><li><strong>\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316</strong>\u3002\u5BA2\u6237\u7AEF\u600E\u4E48\u628A\u53C2\u6570\u503C\u4F20\u7ED9\u8FDC\u7A0B\u7684\u51FD\u6570\u5462\uFF1F\u5728\u672C\u5730\u8C03\u7528\u4E2D\uFF0C\u6211\u4EEC\u53EA\u9700\u8981\u628A\u53C2\u6570\u538B\u5230\u6808\u91CC\uFF0C\u7136\u540E\u8BA9\u51FD\u6570\u81EA\u5DF1\u53BB\u6808\u91CC\u8BFB\u5C31\u884C\u3002\u4F46\u662F\u5728\u8FDC\u7A0B\u8FC7\u7A0B\u8C03\u7528\u65F6\uFF0C\u5BA2\u6237\u7AEF\u8DDF\u670D\u52A1\u7AEF\u662F\u4E0D\u540C\u7684\u8FDB\u7A0B\uFF0C<strong>\u4E0D\u80FD\u901A\u8FC7\u5185\u5B58\u6765\u4F20\u9012\u53C2\u6570</strong>\u3002\u751A\u81F3\u6709\u65F6\u5019\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u4F7F\u7528\u7684\u90FD<strong>\u4E0D\u662F\u540C\u4E00\u79CD\u8BED\u8A00</strong>\uFF08\u6BD4\u5982\u670D\u52A1\u7AEF\u7528C++\uFF0C\u5BA2\u6237\u7AEF\u7528Java\u6216\u8005Python\uFF09\u3002\u8FD9\u65F6\u5019\u5C31\u9700\u8981\u5BA2\u6237\u7AEF\u628A\u53C2\u6570\u5148\u8F6C\u6210\u4E00\u4E2A\u5B57\u8282\u6D41\uFF0C\u4F20\u7ED9\u670D\u52A1\u7AEF\u540E\uFF0C\u518D\u628A\u5B57\u8282\u6D41\u8F6C\u6210\u81EA\u5DF1\u80FD\u8BFB\u53D6\u7684\u683C\u5F0F\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u53EB\u5E8F\u5217\u5316\u548C\u53CD\u5E8F\u5217\u5316\u3002\u540C\u7406\uFF0C\u4ECE\u670D\u52A1\u7AEF\u8FD4\u56DE\u7684\u503C\u4E5F\u9700\u8981\u5E8F\u5217\u5316\u53CD\u5E8F\u5217\u5316\u7684\u8FC7\u7A0B\u3002</li><li><strong>\u7F51\u7EDC\u4F20\u8F93</strong>\u3002\u8FDC\u7A0B\u8C03\u7528\u5F80\u5F80\u662F\u57FA\u4E8E\u7F51\u7EDC\u7684\uFF0C\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u662F\u901A\u8FC7\u7F51\u7EDC\u8FDE\u63A5\u7684\u3002\u6240\u6709\u7684\u6570\u636E\u90FD\u9700\u8981\u901A\u8FC7\u7F51\u7EDC\u4F20\u8F93\uFF0C\u56E0\u6B64\u5C31\u9700\u8981\u6709\u4E00\u4E2A\u7F51\u7EDC\u4F20\u8F93\u5C42\u3002\u7F51\u7EDC\u4F20\u8F93\u5C42\u9700\u8981\u628ACall ID\u548C\u5E8F\u5217\u5316\u540E\u7684\u53C2\u6570\u5B57\u8282\u6D41\u4F20\u7ED9\u670D\u52A1\u7AEF\uFF0C\u7136\u540E\u518D\u628A\u5E8F\u5217\u5316\u540E\u7684\u8C03\u7528\u7ED3\u679C\u4F20\u56DE\u5BA2\u6237\u7AEF\u3002\u53EA\u8981\u80FD\u5B8C\u6210\u8FD9\u4E24\u8005\u7684\uFF0C\u90FD\u53EF\u4EE5\u4F5C\u4E3A\u4F20\u8F93\u5C42\u4F7F\u7528\u3002\u56E0\u6B64\uFF0C\u5B83\u6240\u4F7F\u7528\u7684\u534F\u8BAE\u5176\u5B9E\u662F\u4E0D\u9650\u7684\uFF0C\u80FD\u5B8C\u6210\u4F20\u8F93\u5C31\u884C\u3002\u5C3D\u7BA1\u5927\u90E8\u5206RPC\u6846\u67B6\u90FD\u4F7F\u7528TCP\u534F\u8BAE\uFF0C\u4F46\u5176\u5B9EUDP\u4E5F\u53EF\u4EE5\uFF0C\u800CgRPC\u5E72\u8106\u5C31\u7528\u4E86HTTP2\u3002Java\u7684Netty\u4E5F\u5C5E\u4E8E\u8FD9\u5C42\u7684\u4E1C\u897F\u3002</li></ul><h3 id="\u5B9E\u73B0\u9AD8\u53EF\u7528rpc\u6846\u67B6\u9700\u8981\u8003\u8651\u5230\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u9AD8\u53EF\u7528rpc\u6846\u67B6\u9700\u8981\u8003\u8651\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a> \u5B9E\u73B0\u9AD8\u53EF\u7528RPC\u6846\u67B6\u9700\u8981\u8003\u8651\u5230\u7684\u95EE\u9898</h3><ul><li>\u65E2\u7136\u7CFB\u7EDF\u91C7\u7528\u5206\u5E03\u5F0F\u67B6\u6784\uFF0C\u90A3\u4E00\u4E2A\u670D\u52A1\u52BF\u5FC5\u4F1A\u6709\u591A\u4E2A\u5B9E\u4F8B\uFF0C\u8981\u89E3\u51B3<strong>\u5982\u4F55\u83B7\u53D6\u5B9E\u4F8B\u7684\u95EE\u9898</strong>\u3002\u6240\u4EE5\u9700\u8981\u4E00\u4E2A\u670D\u52A1\u6CE8\u518C\u4E2D\u5FC3\uFF0C\u6BD4\u5982\u5728Dubbo\u4E2D\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528Zookeeper\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3\uFF0C\u5728\u8C03\u7528\u65F6\uFF0C\u4ECEZookeeper\u83B7\u53D6\u670D\u52A1\u7684\u5B9E\u4F8B\u5217\u8868\uFF0C\u518D\u4ECE\u4E2D\u9009\u62E9\u4E00\u4E2A\u8FDB\u884C\u8C03\u7528\uFF1B</li><li>\u5982\u4F55\u9009\u62E9\u5B9E\u4F8B\u5462\uFF1F\u5C31\u8981\u8003\u8651\u8D1F\u8F7D\u5747\u8861\uFF0C\u4F8B\u5982dubbo\u63D0\u4F9B\u4E864\u79CD\u8D1F\u8F7D\u5747\u8861\u7B56\u7565\uFF1B</li><li>\u5982\u679C\u6BCF\u6B21\u90FD\u53BB\u6CE8\u518C\u4E2D\u5FC3\u67E5\u8BE2\u5217\u8868\uFF0C\u6548\u7387\u5F88\u4F4E\uFF0C\u90A3\u4E48\u5C31\u8981\u52A0\u7F13\u5B58\uFF1B</li><li>\u5BA2\u6237\u7AEF\u603B\u4E0D\u80FD\u6BCF\u6B21\u8C03\u7528\u5B8C\u90FD\u7B49\u7740\u670D\u52A1\u7AEF\u8FD4\u56DE\u6570\u636E\uFF0C\u6240\u4EE5\u5C31\u8981\u652F\u6301\u5F02\u6B65\u8C03\u7528\uFF1B</li><li>\u670D\u52A1\u7AEF\u7684\u63A5\u53E3\u4FEE\u6539\u4E86\uFF0C\u8001\u7684\u63A5\u53E3\u8FD8\u6709\u4EBA\u5728\u7528\uFF0C\u8FD9\u5C31\u9700\u8981\u7248\u672C\u63A7\u5236\uFF1B</li><li>\u670D\u52A1\u7AEF\u603B\u4E0D\u80FD\u6BCF\u6B21\u63A5\u5230\u8BF7\u6C42\u90FD\u9A6C\u4E0A\u542F\u52A8\u4E00\u4E2A\u7EBF\u7A0B\u53BB\u5904\u7406\uFF0C\u4E8E\u662F\u5C31\u9700\u8981\u7EBF\u7A0B\u6C60\uFF1B</li></ul><h3 id="\u4E00\u6B21\u5B8C\u6574\u7684-rpc-\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u4E00\u6B21\u5B8C\u6574\u7684-rpc-\u6D41\u7A0B" aria-hidden="true">#</a> \u4E00\u6B21\u5B8C\u6574\u7684 RPC \u6D41\u7A0B</h3><p><strong>\u56E0\u4E3A RPC \u662F\u8FDC\u7A0B\u8C03\u7528\uFF0C\u9996\u5148\u4F1A\u6D89\u53CA\u7F51\u7EDC\u901A\u4FE1\uFF0C</strong> \u53C8\u56E0\u4E3A RPC \u7528\u4E8E\u4E1A\u52A1\u7CFB\u7EDF\u4E4B\u95F4\u7684\u6570\u636E\u4EA4\u4E92\uFF0C\u8981\u4FDD\u8BC1\u6570\u636E\u4F20\u8F93\u7684\u53EF\u9760\u6027\uFF0C\u6240\u4EE5\u5B83\u4E00\u822C\u9ED8\u8BA4\u91C7\u7528 TCP \u6765\u5B9E\u73B0\u7F51\u7EDC\u6570\u636E\u4F20\u8F93\u3002</p><p>\u7F51\u7EDC\u4F20\u8F93\u7684\u6570\u636E\u5FC5\u987B\u662F\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u53EF\u662F\u5728 RPC \u6846\u67B6\u4E2D\uFF0C\u8C03\u7528\u65B9\u8BF7\u6C42\u7684\u51FA\u5165\u53C2\u6570\u90FD\u662F\u5BF9\u8C61\uFF0C\u5BF9\u8C61\u4E0D\u80FD\u76F4\u63A5\u5728\u7F51\u7EDC\u4E2D\u4F20\u8F93\uFF0C\u6240\u4EE5\u9700\u8981\u63D0\u524D\u628A\u5BF9\u8C61\u8F6C\u6210\u53EF\u4F20\u8F93\u7684\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u8F6C\u6362\u7B97\u6CD5\u8FD8\u8981\u53EF\u9006\uFF0C<strong>\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u53EB\u201C\u5E8F\u5217\u5316\u201D\u548C\u201C\u53CD\u5E8F\u5217\u5316\u201D\u3002</strong></p><p>\u53E6\u5916\uFF0C\u5728\u7F51\u7EDC\u4F20\u8F93\u4E2D\uFF0CRPC \u4E0D\u4F1A\u628A\u8BF7\u6C42\u53C2\u6570\u7684\u6240\u6709\u4E8C\u8FDB\u5236\u6570\u636E\u4E00\u8D77\u53D1\u9001\u5230\u670D\u52A1\u63D0\u4F9B\u65B9\u673A\u5668\u4E0A\uFF0C\u800C\u662F\u62C6\u5206\u6210\u597D\u51E0\u4E2A\u6570\u636E\u5305\uFF08\u6216\u8005\u628A\u597D\u51E0\u4E2A\u6570\u636E\u5305\u5C01\u88C5\u6210\u4E00\u4E2A\u6570\u636E\u5305\uFF09\uFF0C\u6240\u4EE5\u670D\u52A1\u63D0\u4F9B\u65B9\u53EF\u80FD\u4E00\u6B21\u83B7\u53D6\u591A\u4E2A\u6216\u534A\u4E2A\u6570\u636E\u5305\uFF0C\u8FD9\u4E5F\u5C31\u662F\u7F51\u7EDC\u4F20\u8F93\u4E2D\u7684\u7C98\u5305\u548C\u534A\u5305\u95EE\u9898\u3002<strong>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u9700\u8981\u63D0\u524D\u7EA6\u5B9A\u4F20\u8F93\u6570\u636E\u7684\u683C\u5F0F\uFF0C\u5373\u201CRPC \u534F\u8BAE\u201D\u3002</strong> \u5927\u591A\u6570\u7684\u534F\u8BAE\u4F1A\u5206\u6210\u6570\u636E\u5934\u548C\u6D88\u606F\u4F53\uFF1A</p><ul><li>\u6570\u636E\u5934\u4E00\u822C\u7528\u4E8E\u8EAB\u4EFD\u8BC6\u522B\uFF0C\u5305\u62EC\u534F\u8BAE\u6807\u8BC6\u3001\u6570\u636E\u5927\u5C0F\u3001\u8BF7\u6C42\u7C7B\u578B\u3001\u5E8F\u5217\u5316\u7C7B\u578B\u7B49\u4FE1\u606F\uFF1B</li><li>\u6D88\u606F\u4F53\u4E3B\u8981\u662F\u8BF7\u6C42\u7684\u4E1A\u52A1\u53C2\u6570\u4FE1\u606F\u548C\u6269\u5C55\u5C5E\u6027\u7B49\u3002</li></ul><p>\u5728\u786E\u5B9A\u597D\u201C RPC \u534F\u8BAE\u201D\u540E\uFF0C\u4E00\u6B21\u5B8C\u6574\u7684 RPC \u8C03\u7528\u4F1A\u7ECF\u8FC7\u8FD9\u6837\u51E0\u4E2A\u6B65\u9AA4\uFF1A</p><ul><li>\u8C03\u7528\u65B9\u6301\u7EED\u628A\u8BF7\u6C42\u53C2\u6570\u5BF9\u8C61\u5E8F\u5217\u5316\u6210\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u7ECF\u8FC7 TCP \u4F20\u8F93\u5230\u670D\u52A1\u63D0\u4F9B\u65B9\uFF1B</li><li>\u670D\u52A1\u63D0\u4F9B\u65B9\u4ECE TCP \u901A\u9053\u91CC\u9762\u63A5\u6536\u5230\u4E8C\u8FDB\u5236\u6570\u636E\uFF1B</li><li>\u6839\u636E RPC \u534F\u8BAE\uFF0C\u670D\u52A1\u63D0\u4F9B\u65B9\u5C06\u4E8C\u8FDB\u5236\u6570\u636E\u5206\u5272\u51FA\u4E0D\u540C\u7684\u8BF7\u6C42\u6570\u636E\uFF0C\u7ECF\u8FC7\u53CD\u5E8F\u5217\u5316\u5C06\u4E8C\u8FDB\u5236\u6570\u636E\u9006\u5411\u8FD8\u539F\u51FA\u8BF7\u6C42\u5BF9\u8C61\uFF0C\u627E\u5230\u5BF9\u5E94\u7684\u5B9E\u73B0\u7C7B\uFF0C\u5B8C\u6210\u771F\u6B63\u7684\u65B9\u6CD5\u8C03\u7528\uFF1B</li><li>\u7136\u540E\u670D\u52A1\u63D0\u4F9B\u65B9\u518D\u628A\u6267\u884C\u7ED3\u679C\u5E8F\u5217\u5316\u540E\uFF0C\u56DE\u5199\u5230\u5BF9\u5E94\u7684 TCP \u901A\u9053\u91CC\u9762\uFF1B</li><li>\u8C03\u7528\u65B9\u83B7\u53D6\u5230\u5E94\u7B54\u7684\u6570\u636E\u5305\u540E\uFF0C\u518D\u53CD\u5E8F\u5217\u5316\u6210\u5E94\u7B54\u5BF9\u8C61\u3002</li></ul><p>\u8FD9\u6837\u8C03\u7528\u65B9\u5C31\u5B8C\u6210\u4E86\u4E00\u6B21 RPC \u8C03\u7528\u3002</p><p><img src="https://learn.lianglianglee.com/\u4E13\u680F/\u67B6\u6784\u8BBE\u8BA1\u9762\u8BD5\u7CBE\u8BB2/assets/Ciqc1GABbyeAWysgAAGQtM8Kx4Q574.png" alt="Lark20210115-183000.png" loading="lazy"></p><h4 id="\u5982\u4F55\u63D0\u5347\u7F51\u7EDC\u901A\u4FE1\u6027\u80FD" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u63D0\u5347\u7F51\u7EDC\u901A\u4FE1\u6027\u80FD" aria-hidden="true">#</a> \u5982\u4F55\u63D0\u5347\u7F51\u7EDC\u901A\u4FE1\u6027\u80FD</h4><p>\u5982\u4F55\u63D0\u5347 RPC \u7684\u7F51\u7EDC\u901A\u4FE1\u6027\u80FD\uFF0C\u8FD9\u53E5\u8BDD\u7FFB\u8BD1\u4E00\u4E0B\u5C31\u662F\uFF1A\u4E00\u4E2A RPC \u6846\u67B6\u5982\u4F55\u9009\u62E9\u9AD8\u6027\u80FD\u7684\u7F51\u7EDC\u7F16\u7A0B I/O \u6A21\u578B\uFF1F\u8FD9\u6837\u4E00\u6765\uFF0C\u548C I/O \u6A21\u578B\u76F8\u5173\u7684\u77E5\u8BC6\u70B9\u5C31\u662F\u4F60\u9700\u8981\u638C\u63E1\u7684\u4E86\u3002</p><p>\u5BF9\u4E8E RPC \u7F51\u7EDC\u901A\u4FE1\u95EE\u9898\uFF0C\u4F60\u9996\u5148\u8981\u638C\u63E1\u7F51\u7EDC\u7F16\u7A0B\u4E2D\u7684\u4E94\u4E2A I/O \u6A21\u578B\uFF1A</p><ul><li><p>\u540C\u6B65\u963B\u585E I/O\uFF08BIO\uFF09</p></li><li><p>\u540C\u6B65\u975E\u963B\u585E I/O</p></li><li><p>I/O \u591A\u8DEF\u590D\u7528\uFF08NIO\uFF09</p></li><li><p>\u4FE1\u53F7\u9A71\u52A8</p></li><li><p>\u4EE5\u53CA\u5F02\u6B65 I/O\uFF08AIO\uFF09</p></li></ul><p>\u4F46\u5728\u5B9E\u9645\u5F00\u53D1\u5DE5\u4F5C\uFF0C\u6700\u4E3A\u5E38\u7528\u7684\u662F BIO \u548C NIO\uFF08\u8FD9\u4E24\u4E2A I/O \u6A21\u578B\u4E5F\u662F\u9762\u8BD5\u4E2D\u9762\u8BD5\u5B98\u6700\u5E38\u8003\u5BDF\u5019\u9009\u4EBA\u7684\uFF09\u3002</p><p>NIO \u6BD4 BIO \u63D0\u9AD8\u4E86\u670D\u52A1\u7AEF\u5DE5\u4F5C\u7EBF\u7A0B\u7684\u5229\u7528\u7387\uFF0C\u5E76\u589E\u52A0\u4E86\u4E00\u4E2A\u8C03\u5EA6\u8005\uFF0C\u6765\u5B9E\u73B0 Socket \u8FDE\u63A5\u4E0E Socket \u6570\u636E\u8BFB\u5199\u4E4B\u95F4\u7684\u5206\u79BB\u3002</p><p>\u5728\u76EE\u524D\u4E3B\u6D41\u7684 RPC \u6846\u67B6\u4E2D\uFF0C\u5E7F\u6CDB\u4F7F\u7528\u7684\u4E5F\u662F I/O \u591A\u8DEF\u590D\u7528\u6A21\u578B\uFF0CLinux \u7CFB\u7EDF\u4E2D\u7684 select\u3001poll\u3001epoll\u7B49\u7CFB\u7EDF\u8C03\u7528\u90FD\u662F I/O \u591A\u8DEF\u590D\u7528\u7684\u673A\u5236\u3002</p><p>\u5728\u9762\u8BD5\u4E2D\uFF0C\u5BF9\u4E8E\u9AD8\u7EA7\u7814\u53D1\u5DE5\u7A0B\u5E08\u7684\u8003\u5BDF\uFF0C\u8FD8\u4F1A\u6709\u4E24\u4E2A\u6280\u672F\u6269\u5C55\u8003\u6838\u70B9\u3002</p><p>Reactor \u6A21\u578B\uFF08\u5373\u53CD\u5E94\u5806\u6A21\u5F0F\uFF09\uFF0C\u4EE5\u53CA Reactor \u7684 3 \u79CD\u7EBF\u7A0B\u6A21\u578B\uFF0C\u5206\u522B\u662F\u5355\u7EBF\u7A0B Reactor \u7EBF\u7A0B\u6A21\u578B\u3001\u591A\u7EBF\u7A0B Reactor \u7EBF\u7A0B\u6A21\u578B\uFF0C\u4EE5\u53CA\u4E3B\u4ECE Reactor \u7EBF\u7A0B\u6A21\u578B\u3002</p><p>Java \u4E2D\u7684\u9AD8\u6027\u80FD\u7F51\u7EDC\u7F16\u7A0B\u6846\u67B6 Netty\u3002</p><p>\u53EF\u4EE5\u8FD9\u4E48\u8BF4\uFF0C\u5728\u9AD8\u6027\u80FD\u7F51\u7EDC\u7F16\u7A0B\u4E2D\uFF0C\u5927\u591A\u6570\u90FD\u662F\u57FA\u4E8E Reactor \u6A21\u5F0F\uFF0C\u5176\u4E2D\u6700\u4E3A\u5178\u578B\u7684\u662F Java \u7684 Netty \u6846\u67B6\uFF0C\u800C Reactor \u6A21\u5F0F\u662F\u57FA\u4E8E I/O \u591A\u8DEF\u590D\u7528\u7684\uFF0C\u6240\u4EE5\uFF0C\u5BF9\u4E8E Reactor \u548C Netty \u7684\u8003\u5BDF\u4E5F\u662F\u907F\u514D\u4E0D\u4E86\u7684\u3002</p>',31),o=[a];function p(n,s){return r(),i("div",null,o)}var h=l(t,[["render",p],["__file","RPC-FAQ.html.vue"]]);export{h as default};
