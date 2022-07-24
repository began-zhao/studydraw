import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as n,o as t,c as a,b as i,a as p,e as o,d as s}from"./app.15378688.js";var d="/assets/gossip.276411d6.png",l="/assets/redis-cluster-gossip.acd10106.png",h="/assets/\u53CD\u71B5-\u95ED\u73AF.b8759b45.png";const c={},g=o('<h2 id="\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a> \u80CC\u666F</h2><p>\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\uFF0C\u4E0D\u540C\u7684\u8282\u70B9\u8FDB\u884C\u6570\u636E/\u4FE1\u606F\u5171\u4EAB\u662F\u4E00\u4E2A\u57FA\u672C\u7684\u9700\u6C42\u3002</p><p>\u4E00\u79CD\u6BD4\u8F83\u7B80\u5355\u7C97\u66B4\u7684\u65B9\u6CD5\u5C31\u662F <strong>\u96C6\u4E2D\u5F0F\u53D1\u6563\u6D88\u606F</strong>\uFF0C\u7B80\u5355\u6765\u8BF4\u5C31\u662F\u4E00\u4E2A\u4E3B\u8282\u70B9\u540C\u65F6\u5171\u4EAB\u6700\u65B0\u4FE1\u606F\u7ED9\u5176\u4ED6\u6240\u6709\u8282\u70B9\uFF0C\u6BD4\u8F83\u9002\u5408\u4E2D\u5FC3\u5316\u7CFB\u7EDF\u3002\u8FD9\u79CD\u65B9\u6CD5\u7684\u7F3A\u9677\u4E5F\u5F88\u660E\u663E\uFF0C\u8282\u70B9\u591A\u7684\u65F6\u5019\u4E0D\u5149\u540C\u6B65\u6D88\u606F\u7684\u6548\u7387\u4F4E\uFF0C\u8FD8\u592A\u4F9D\u8D56\u4E0E\u4E2D\u5FC3\u8282\u70B9\uFF0C\u5B58\u5728\u5355\u70B9\u98CE\u9669\u95EE\u9898\u3002</p><p>\u4E8E\u662F\uFF0C<strong>\u5206\u6563\u5F0F\u53D1\u6563\u6D88\u606F</strong> \u7684 <strong>Gossip \u534F\u8BAE</strong> \u5C31\u8BDE\u751F\u4E86\u3002</p><h2 id="gossip-\u534F\u8BAE\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#gossip-\u534F\u8BAE\u4ECB\u7ECD" aria-hidden="true">#</a> Gossip \u534F\u8BAE\u4ECB\u7ECD</h2><p>Gossip \u76F4\u8BD1\u8FC7\u6765\u5C31\u662F\u95F2\u8BDD\u3001\u6D41\u8A00\u871A\u8BED\u7684\u610F\u601D\u3002\u6D41\u8A00\u871A\u8BED\u6709\u4EC0\u4E48\u7279\u70B9\u5462\uFF1F\u5BB9\u6613\u88AB\u4F20\u64AD\u4E14\u4F20\u64AD\u901F\u5EA6\u8FD8\u5FEB\uFF0C\u4F60\u4F20\u6211\u6211\u4F20\u4ED6\uFF0C\u7136\u540E\u5927\u5BB6\u90FD\u77E5\u9053\u4E86\u3002</p><p><img src="'+d+'" alt=""></p><p>Gossip \u534F\u8BAE\u4E5F\u53EB Epidemic \u534F\u8BAE\uFF08\u6D41\u884C\u75C5\u534F\u8BAE\uFF09\u6216\u8005 Epidemic propagation \u7B97\u6CD5\uFF08\u75AB\u60C5\u4F20\u64AD\u7B97\u6CD5\uFF09\uFF0C\u522B\u540D\u5F88\u591A\u3002\u4E0D\u8FC7\uFF0C\u8FD9\u4E9B\u540D\u5B57\u7684\u7279\u70B9\u90FD\u5177\u6709 <strong>\u968F\u673A\u4F20\u64AD\u7279\u6027</strong> \uFF08\u8054\u60F3\u4E00\u4E0B\u75C5\u6BD2\u4F20\u64AD\u3001\u764C\u7EC6\u80DE\u6269\u6563\u7B49\u751F\u6D3B\u4E2D\u5E38\u89C1\u7684\u60C5\u666F\uFF09\uFF0C\u8FD9\u4E5F\u6B63\u662F Gossip \u534F\u8BAE\u6700\u4E3B\u8981\u7684\u7279\u70B9\u3002</p>',8),_=s("Gossip \u534F\u8BAE\u6700\u65E9\u662F\u5728 ACM \u4E0A\u7684\u4E00\u7BC7 1987 \u5E74\u53D1\u8868\u7684\u8BBA\u6587 "),m={href:"https://dl.acm.org/doi/10.1145/41840.41841",target:"_blank",rel:"noopener noreferrer"},u=s("\u300AEpidemic Algorithms for Replicated Database Maintenance\u300B"),G=s("\u4E2D\u88AB\u63D0\u51FA\u7684\u3002\u6839\u636E\u8BBA\u6587\u6807\u9898\uFF0C\u6211\u4EEC\u5927\u6982\u5C31\u80FD\u77E5\u9053 Gossip \u534F\u8BAE\u5F53\u65F6\u63D0\u51FA\u7684\u4E3B\u8981\u5E94\u7528\u662F\u5728\u5206\u5E03\u5F0F\u6570\u636E\u5E93\u7CFB\u7EDF\u4E2D\u5404\u4E2A\u526F\u672C\u8282\u70B9\u540C\u6B65\u6570\u636E\u3002"),f=o('<p>\u6B63\u5982 Gossip \u534F\u8BAE\u5176\u540D\u4E00\u6837\uFF0C\u8FD9\u662F\u4E00\u79CD\u968F\u673A\u4E14\u5E26\u6709\u4F20\u67D3\u6027\u7684\u65B9\u5F0F\u5C06\u4FE1\u606F\u4F20\u64AD\u5230\u6574\u4E2A\u7F51\u7EDC\u4E2D\uFF0C\u5E76\u5728\u4E00\u5B9A\u65F6\u95F4\u5185\uFF0C\u4F7F\u5F97\u7CFB\u7EDF\u5185\u7684\u6240\u6709\u8282\u70B9\u6570\u636E\u4E00\u81F4\u3002</p><p>\u5728 Gossip \u534F\u8BAE\u4E0B\uFF0C\u6CA1\u6709\u6240\u8C13\u7684\u4E2D\u5FC3\u8282\u70B9\uFF0C\u6BCF\u4E2A\u8282\u70B9\u5468\u671F\u6027\u5730\u968F\u673A\u627E\u4E00\u4E2A\u8282\u70B9\u4E92\u76F8\u540C\u6B65\u5F7C\u6B64\u7684\u4FE1\u606F\uFF0C\u7406\u8BBA\u4E0A\u6765\u8BF4\uFF0C\u5404\u4E2A\u8282\u70B9\u7684\u72B6\u6001\u6700\u7EC8\u4F1A\u4FDD\u6301\u4E00\u81F4\u3002</p><p>\u4E0B\u9762\u6211\u4EEC\u6765\u5BF9 Gossip \u534F\u8BAE\u7684\u5B9A\u4E49\u505A\u4E00\u4E2A\u603B\u7ED3\uFF1A <strong>Gossip \u534F\u8BAE\u662F\u4E00\u79CD\u5141\u8BB8\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u5171\u4EAB\u72B6\u6001\u7684\u53BB\u4E2D\u5FC3\u5316\u901A\u4FE1\u534F\u8BAE\uFF0C\u901A\u8FC7\u8FD9\u79CD\u901A\u4FE1\u534F\u8BAE\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u4FE1\u606F\u4F20\u64AD\u7ED9\u7F51\u7EDC\u6216\u96C6\u7FA4\u4E2D\u7684\u6240\u6709\u6210\u5458\u3002</strong></p><h2 id="gossip-\u534F\u8BAE\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#gossip-\u534F\u8BAE\u5E94\u7528" aria-hidden="true">#</a> Gossip \u534F\u8BAE\u5E94\u7528</h2><p>1\u3001\u6211\u4EEC\u7ECF\u5E38\u4F7F\u7528\u7684\u5206\u5E03\u5F0F\u7F13\u5B58 Redis \u7684\u5B98\u65B9\u96C6\u7FA4\u89E3\u51B3\u65B9\u6848\uFF083.0 \u7248\u672C\u5F15\u5165\uFF09 Redis Cluster \u5C31\u662F\u57FA\u4E8E Gossip \u534F\u8BAE\u6765\u5B9E\u73B0\u96C6\u7FA4\u4E2D\u5404\u4E2A\u8282\u70B9\u6570\u636E\u7684\u6700\u7EC8\u4E00\u81F4\u6027\u3002</p><p><img src="https://img-blog.csdnimg.cn/85fbed524d8342adb054961525c6e257.png" alt=""></p><p>Redis Cluster \u4E2D\u7684\u6BCF\u4E2A Redis \u8282\u70B9\u90FD\u7EF4\u62A4\u4E86\u4E00\u4EFD\u96C6\u7FA4\u7684\u72B6\u6001\u4FE1\u606F\uFF0C\u5404\u4E2A\u8282\u70B9\u5229\u7528 Gossip \u534F\u8BAE\u4F20\u9012\u7684\u4FE1\u606F\u5C31\u662F\u96C6\u7FA4\u7684\u72B6\u6001\u4FE1\u606F\u3002</p><p>\u4E0B\u56FE\u5C31\u662F\u4E3B\u4ECE\u67B6\u6784\u7684 Redis Cluster \u7684\u793A\u610F\u56FE\uFF0C\u56FE\u4E2D\u7684\u865A\u7EBF\u4EE3\u8868\u7684\u5C31\u662F\u5404\u4E2A\u8282\u70B9\u4E4B\u95F4\u4F7F\u7528 Gossip \u8FDB\u884C\u901A\u4FE1 \uFF0C\u5B9E\u7EBF\u8868\u793A\u4E3B\u4ECE\u590D\u5236\u3002</p><p><img src="'+l+'" alt=""></p><p>2\u3001NoSQL \u6570\u636E\u5E93 Apache Cassandra \u96C6\u7FA4\u901A\u8FC7 Gossip \u534F\u8BAE\u6765\u8FDB\u884C\u52A8\u6001\u7BA1\u7406\u96C6\u7FA4\u8282\u70B9\u72B6\u6001\uFF08\u8282\u70B9\u6545\u969C\u68C0\u6D4B\u548C\u6062\u590D\uFF09\u3002</p><p>3\u3001\u670D\u52A1\u7F51\u683C\u89E3\u51B3\u65B9\u6848 Consul \u4F7F\u7528 Gossip \u534F\u8BAE\u7F51\u7EDC\u5185\u53EF\u9760\u6709\u6548\u5730\u4F20\u8F93\u65B0\u670D\u52A1\u548C\u4E8B\u4EF6\u7684\u4FE1\u606F\u3002</p><p>4\u3001Bitcoin \u4F7F\u7528 Gossip \u534F\u8BAE\u6765\u4F20\u64AD\u4EA4\u6613\u548C\u533A\u5757\u4FE1\u606F\u3002\u4E0D\u8FC7\uFF0C\u4E3A\u4E86\u63D0\u4F9B\u66F4\u597D\u7684\u9690\u79C1\u4FDD\u62A4\uFF0CCMU \u7684\u7814\u7A76\u4EBA\u5458\u63D0\u51FA <strong>\u84B2\u516C\u82F1\u534F\u8BAE</strong>\u3002</p><p>5\u3001......</p><p>\u8FD8\u6709\u975E\u5E38\u591A\u4F7F\u7528 Gossip \u534F\u8BAE\u7684\u5E94\u7528\uFF0C\u5B66\u4E60 Gossip \u534F\u8BAE\u6709\u52A9\u4E8E\u6211\u4EEC\u641E\u6E05\u5F88\u591A\u6280\u672F\u7684\u5E95\u5C42\u539F\u7406\u3002</p><h2 id="gossip-\u534F\u8BAE\u6D88\u606F\u4F20\u64AD\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#gossip-\u534F\u8BAE\u6D88\u606F\u4F20\u64AD\u6A21\u5F0F" aria-hidden="true">#</a> Gossip \u534F\u8BAE\u6D88\u606F\u4F20\u64AD\u6A21\u5F0F</h2><p>Gossip \u8BBE\u8BA1\u4E86\u4E24\u79CD\u53EF\u80FD\u7684\u6D88\u606F\u4F20\u64AD\u6A21\u5F0F\uFF1A<strong>\u53CD\u71B5\uFF08Anti-Entropy\uFF09</strong> \u548C <strong>\u4F20\u8C23\uFF08Rumor-Mongering\uFF09</strong>\u3002</p><h3 id="\u53CD\u71B5-anti-entropy" tabindex="-1"><a class="header-anchor" href="#\u53CD\u71B5-anti-entropy" aria-hidden="true">#</a> \u53CD\u71B5(Anti-entropy)</h3><p>\u6839\u636E\u7EF4\u57FA\u767E\u79D1\uFF1A</p>',18),b=s("\u71B5\u7684\u6982\u5FF5\u6700\u65E9\u8D77\u6E90\u4E8E"),x={href:"https://zh.wikipedia.org/wiki/%E7%89%A9%E7%90%86%E5%AD%A6",target:"_blank",rel:"noopener noreferrer"},C=s("\u7269\u7406\u5B66"),A=s("\uFF0C\u7528\u4E8E\u5EA6\u91CF\u4E00\u4E2A\u70ED\u529B\u5B66\u7CFB\u7EDF\u7684\u6DF7\u4E71\u7A0B\u5EA6\u3002\u71B5\u6700\u597D\u7406\u89E3\u4E3A\u4E0D\u786E\u5B9A\u6027\u7684\u91CF\u5EA6\u800C\u4E0D\u662F\u786E\u5B9A\u6027\u7684\u91CF\u5EA6\uFF0C\u56E0\u4E3A\u8D8A\u968F\u673A\u7684\u4FE1\u6E90\u7684\u71B5\u8D8A\u5927\u3002"),R=o('<p>\u5728\u8FD9\u91CC\uFF0C\u4F60\u53EF\u4EE5\u628A\u53CD\u71B5\u4E2D\u7684\u71B5\u4E86\u89E3\u4E3A\u8282\u70B9\u4E4B\u95F4\u6570\u636E\u7684\u6DF7\u4E71\u7A0B\u5EA6/\u5DEE\u5F02\u6027\uFF0C\u53CD\u71B5\u5C31\u662F\u6307\u6D88\u9664\u4E0D\u540C\u8282\u70B9\u4E2D\u6570\u636E\u7684\u5DEE\u5F02\uFF0C\u63D0\u5347\u8282\u70B9\u95F4\u6570\u636E\u7684\u76F8\u4F3C\u5EA6\uFF0C\u4ECE\u800C\u964D\u4F4E\u71B5\u503C\u3002</p><p>\u5177\u4F53\u662F\u5982\u4F55\u53CD\u71B5\u7684\u5462\uFF1F\u96C6\u7FA4\u4E2D\u7684\u8282\u70B9\uFF0C\u6BCF\u9694\u6BB5\u65F6\u95F4\u5C31\u968F\u673A\u9009\u62E9\u67D0\u4E2A\u5176\u4ED6\u8282\u70B9\uFF0C\u7136\u540E\u901A\u8FC7\u4E92\u76F8\u4EA4\u6362\u81EA\u5DF1\u7684\u6240\u6709\u6570\u636E\u6765\u6D88\u9664\u4E24\u8005\u4E4B\u95F4\u7684\u5DEE\u5F02\uFF0C\u5B9E\u73B0\u6570\u636E\u7684\u6700\u7EC8\u4E00\u81F4\u6027\u3002</p><p>\u5728\u5B9E\u73B0\u53CD\u71B5\u7684\u65F6\u5019\uFF0C\u4E3B\u8981\u6709\u63A8\u3001\u62C9\u548C\u63A8\u62C9\u4E09\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u63A8\u65B9\u5F0F\uFF0C\u5C31\u662F\u5C06\u81EA\u5DF1\u7684\u6240\u6709\u526F\u672C\u6570\u636E\uFF0C\u63A8\u7ED9\u5BF9\u65B9\uFF0C\u4FEE\u590D\u5BF9\u65B9\u526F\u672C\u4E2D\u7684\u71B5\u3002</li><li>\u62C9\u65B9\u5F0F\uFF0C\u5C31\u662F\u62C9\u53D6\u5BF9\u65B9\u7684\u6240\u6709\u526F\u672C\u6570\u636E\uFF0C\u4FEE\u590D\u81EA\u5DF1\u526F\u672C\u4E2D\u7684\u71B5\u3002</li><li>\u63A8\u62C9\u5C31\u662F\u540C\u65F6\u4FEE\u590D\u81EA\u5DF1\u526F\u672C\u548C\u5BF9\u65B9\u526F\u672C\u4E2D\u7684\u71B5\u3002</li></ul><p>\u4F2A\u4EE3\u7801\u5982\u4E0B\uFF1A</p><p><img src="https://img-blog.csdnimg.cn/20210605165106728.png" alt=""></p><p>\u5728\u6211\u4EEC\u5B9E\u9645\u5E94\u7528\u573A\u666F\u4E2D\uFF0C\u4E00\u822C\u4E0D\u4F1A\u91C7\u7528\u968F\u673A\u7684\u8282\u70B9\u8FDB\u884C\u53CD\u71B5\uFF0C\u800C\u662F\u9700\u8981\u53EF\u4EE5\u7684\u8BBE\u8BA1\u4E00\u4E2A\u95ED\u73AF\u3002\u8FD9\u6837\u7684\u8BDD\uFF0C\u6211\u4EEC\u80FD\u591F\u5728\u4E00\u4E2A\u786E\u5B9A\u7684\u65F6\u95F4\u8303\u56F4\u5185\u5B9E\u73B0\u5404\u4E2A\u8282\u70B9\u6570\u636E\u7684\u6700\u7EC8\u4E00\u81F4\u6027\uFF0C\u800C\u4E0D\u662F\u57FA\u4E8E\u968F\u673A\u7684\u6982\u7387\u3002\u50CF InfluxDB \u5C31\u662F\u8FD9\u6837\u6765\u5B9E\u73B0\u53CD\u71B5\u7684\u3002</p><p><img src="'+h+'" alt=""></p><ol><li>\u8282\u70B9 A \u63A8\u9001\u6570\u636E\u7ED9\u8282\u70B9 B\uFF0C\u8282\u70B9 B \u83B7\u53D6\u5230\u8282\u70B9 A \u4E2D\u7684\u6700\u65B0\u6570\u636E\u3002</li><li>\u8282\u70B9 B \u63A8\u9001\u6570\u636E\u7ED9 C\uFF0C\u8282\u70B9 C \u83B7\u53D6\u5230\u8282\u70B9 A\uFF0CB \u4E2D\u7684\u6700\u65B0\u6570\u636E\u3002</li><li>\u8282\u70B9 C \u63A8\u9001\u6570\u636E\u7ED9 A\uFF0C\u8282\u70B9 A \u83B7\u53D6\u5230\u8282\u70B9 B\uFF0CC \u4E2D\u7684\u6700\u65B0\u6570\u636E\u3002</li><li>\u8282\u70B9 A \u518D\u63A8\u9001\u6570\u636E\u7ED9 B \u5F62\u6210\u95ED\u73AF\uFF0C\u8FD9\u6837\u8282\u70B9 B \u5C31\u83B7\u53D6\u5230\u8282\u70B9 C \u4E2D\u7684\u6700\u65B0\u6570\u636E\u3002</li></ol><p>\u867D\u7136\u53CD\u71B5\u5F88\u7B80\u5355\u5B9E\u7528\uFF0C\u4F46\u662F\uFF0C\u8282\u70B9\u8FC7\u591A\u6216\u8005\u8282\u70B9\u52A8\u6001\u53D8\u5316\u7684\u8BDD\uFF0C\u53CD\u71B5\u5C31\u4E0D\u592A\u9002\u7528\u4E86\u3002\u8FD9\u4E2A\u65F6\u5019\uFF0C\u6211\u4EEC\u60F3\u8981\u5B9E\u73B0\u6700\u7EC8\u4E00\u81F4\u6027\u5C31\u8981\u9760 **\u8C23\u8A00\u4F20\u64AD(Rumor mongering) ** \u3002</p><h3 id="\u8C23\u8A00\u4F20\u64AD-rumor-mongering" tabindex="-1"><a class="header-anchor" href="#\u8C23\u8A00\u4F20\u64AD-rumor-mongering" aria-hidden="true">#</a> \u8C23\u8A00\u4F20\u64AD(Rumor mongering)</h3><p>\u8C23\u8A00\u4F20\u64AD\u6307\u7684\u662F\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u7684\u4E00\u4E2A\u8282\u70B9\u4E00\u65E6\u6709\u4E86\u65B0\u6570\u636E\u4E4B\u540E\uFF0C\u5C31\u4F1A\u53D8\u4E3A\u6D3B\u8DC3\u8282\u70B9\uFF0C\u6D3B\u8DC3\u8282\u70B9\u4F1A\u5468\u671F\u6027\u5730\u8054\u7CFB\u5176\u4ED6\u8282\u70B9\u5411\u5176\u53D1\u9001\u65B0\u6570\u636E\uFF0C\u76F4\u5230\u6240\u6709\u7684\u8282\u70B9\u90FD\u5B58\u50A8\u4E86\u8BE5\u65B0\u6570\u636E\u3002</p>',12),B=s("\u5982\u4E0B\u56FE\u6240\u793A\uFF08\u4E0B\u56FE\u6765\u81EA\u4E8E"),E={href:"https://managementfromscratch.wordpress.com/2016/04/01/introduction-to-gossip/",target:"_blank",rel:"noopener noreferrer"},k=s("INTRODUCTION TO GOSSIP"),v=s(" \u8FD9\u7BC7\u6587\u7AE0\uFF09\uFF1A"),M=o('<p>![Gossip \u4F20\u64AD\u793A\u610F\u56FE](./images/gossip/gossip-rumor- mongering.gif)</p><p>\u4F2A\u4EE3\u7801\u5982\u4E0B\uFF1A</p><p><img src="https://img-blog.csdnimg.cn/20210605170707933.png" alt=""></p><p>\u8C23\u8A00\u4F20\u64AD\u6BD4\u8F83\u9002\u5408\u8282\u70B9\u6570\u91CF\u6BD4\u8F83\u591A\u7684\u60C5\u51B5\uFF0C\u4E0D\u8FC7\uFF0C\u8FD9\u79CD\u6A21\u5F0F\u4E0B\u8981\u5C3D\u91CF\u907F\u514D\u4F20\u64AD\u7684\u4FE1\u606F\u5305\u4E0D\u80FD\u592A\u5927\uFF0C\u907F\u514D\u7F51\u7EDC\u6D88\u8017\u592A\u5927\u3002</p><h3 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h3><ul><li>\u53CD\u71B5\uFF08Anti-Entropy\uFF09\u4F1A\u4F20\u64AD\u8282\u70B9\u7684\u6240\u6709\u6570\u636E\uFF0C\u800C\u8C23\u8A00\u4F20\u64AD\uFF08Rumor-Mongering\uFF09\u53EA\u4F1A\u4F20\u64AD\u8282\u70B9\u65B0\u589E\u7684\u6570\u636E\u3002</li><li>\u6211\u4EEC\u4E00\u822C\u4F1A\u7ED9\u53CD\u71B5\u8BBE\u8BA1\u4E00\u4E2A\u95ED\u73AF\u3002</li><li>\u8C23\u8A00\u4F20\u64AD\uFF08Rumor-Mongering\uFF09\u6BD4\u8F83\u9002\u5408\u8282\u70B9\u6570\u91CF\u6BD4\u8F83\u591A\u6216\u8005\u8282\u70B9\u52A8\u6001\u53D8\u5316\u7684\u573A\u666F\u3002</li></ul><h2 id="gossip-\u534F\u8BAE\u4F18\u52BF\u548C\u7F3A\u9677" tabindex="-1"><a class="header-anchor" href="#gossip-\u534F\u8BAE\u4F18\u52BF\u548C\u7F3A\u9677" aria-hidden="true">#</a> Gossip \u534F\u8BAE\u4F18\u52BF\u548C\u7F3A\u9677</h2><p><strong>\u4F18\u52BF\uFF1A</strong></p><p>1\u3001\u76F8\u6BD4\u4E8E\u5176\u4ED6\u5206\u5E03\u5F0F\u534F\u8BAE/\u7B97\u6CD5\u6765\u8BF4\uFF0CGossip \u534F\u8BAE\u7406\u89E3\u8D77\u6765\u975E\u5E38\u7B80\u5355\u3002</p><p>2\u3001\u80FD\u591F\u5BB9\u5FCD\u7F51\u7EDC\u4E0A\u8282\u70B9\u7684\u968F\u610F\u5730\u589E\u52A0\u6216\u8005\u51CF\u5C11\uFF0C\u5B95\u673A\u6216\u8005\u91CD\u542F\uFF0C\u56E0\u4E3A Gossip \u534F\u8BAE\u4E0B\u8FD9\u4E9B\u8282\u70B9\u90FD\u662F\u5E73\u7B49\u7684\uFF0C\u53BB\u4E2D\u5FC3\u5316\u7684\u3002\u65B0\u589E\u52A0\u6216\u8005\u91CD\u542F\u7684\u8282\u70B9\u5728\u7406\u60F3\u60C5\u51B5\u4E0B\u6700\u7EC8\u662F\u4E00\u5B9A\u4F1A\u548C\u5176\u4ED6\u8282\u70B9\u7684\u72B6\u6001\u8FBE\u5230\u4E00\u81F4\u3002</p><p>3\u3001\u901F\u5EA6\u76F8\u5BF9\u8F83\u5FEB\u3002\u8282\u70B9\u6570\u91CF\u6BD4\u8F83\u591A\u7684\u60C5\u51B5\u4E0B\uFF0C\u6269\u6563\u901F\u5EA6\u6BD4\u4E00\u4E2A\u4E3B\u8282\u70B9\u5411\u5176\u4ED6\u8282\u70B9\u4F20\u64AD\u4FE1\u606F\u8981\u66F4\u5FEB\uFF08\u591A\u64AD\uFF09\u3002</p><p><strong>\u7F3A\u9677</strong> :</p><p>1\u3001\u6D88\u606F\u9700\u8981\u901A\u8FC7\u591A\u4E2A\u4F20\u64AD\u7684\u8F6E\u6B21\u624D\u80FD\u4F20\u64AD\u5230\u6574\u4E2A\u7F51\u7EDC\u4E2D\uFF0C\u56E0\u6B64\uFF0C\u5FC5\u7136\u4F1A\u51FA\u73B0\u5404\u8282\u70B9\u72B6\u6001\u4E0D\u4E00\u81F4\u7684\u60C5\u51B5\u3002\u6BD5\u7ADF\uFF0CGossip \u534F\u8BAE\u5F3A\u8C03\u7684\u662F\u6700\u7EC8\u4E00\u81F4\uFF0C\u81F3\u4E8E\u8FBE\u5230\u5404\u4E2A\u8282\u70B9\u7684\u72B6\u6001\u4E00\u81F4\u9700\u8981\u591A\u957F\u65F6\u95F4\uFF0C\u8C01\u4E5F\u65E0\u4ECE\u5F97\u77E5\u3002</p><p>2\u3001\u7531\u4E8E\u62DC\u5360\u5EAD\u5C06\u519B\u95EE\u9898\uFF0C\u4E0D\u5141\u8BB8\u5B58\u5728\u6076\u610F\u8282\u70B9\u3002</p><p>3\u3001\u53EF\u80FD\u4F1A\u51FA\u73B0\u6D88\u606F\u5197\u4F59\u7684\u95EE\u9898\u3002\u7531\u4E8E\u6D88\u606F\u4F20\u64AD\u7684\u968F\u673A\u6027\uFF0C\u540C\u4E00\u4E2A\u8282\u70B9\u53EF\u80FD\u4F1A\u91CD\u590D\u6536\u5230\u76F8\u540C\u7684\u6D88\u606F\u3002</p><h2 id="\u603B\u7ED3-1" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3-1" aria-hidden="true">#</a> \u603B\u7ED3</h2><ul><li>Gossip \u534F\u8BAE\u662F\u4E00\u79CD\u5141\u8BB8\u5728\u5206\u5E03\u5F0F\u7CFB\u7EDF\u4E2D\u5171\u4EAB\u72B6\u6001\u7684\u901A\u4FE1\u534F\u8BAE\uFF0C\u901A\u8FC7\u8FD9\u79CD\u901A\u4FE1\u534F\u8BAE\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06\u4FE1\u606F\u4F20\u64AD\u7ED9\u7F51\u7EDC\u6216\u96C6\u7FA4\u4E2D\u7684\u6240\u6709\u6210\u5458\u3002</li><li>Gossip \u534F\u8BAE\u88AB Redis \u3001Apache Cassandra\u3001Consul \u7B49\u9879\u76EE\u5E94\u7528\u3002</li><li>\u8C23\u8A00\u4F20\u64AD\uFF08Rumor-Mongering\uFF09\u6BD4\u8F83\u9002\u5408\u8282\u70B9\u6570\u91CF\u6BD4\u8F83\u591A\u6216\u8005\u8282\u70B9\u52A8\u6001\u53D8\u5316\u7684\u573A\u666F\u3002</li></ul><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2><ul><li>\u4E00\u4E07\u5B57\u8BE6\u89E3 Redis Cluster Gossip \u534F\u8BAE\uFF1Ahttps://segmentfault.com/a/1190000038373546</li><li>\u300A\u5206\u5E03\u5F0F\u534F\u8BAE\u4E0E\u7B97\u6CD5\u5B9E\u6218\u300B</li><li>\u300ARedis \u8BBE\u8BA1\u4E0E\u5B9E\u73B0\u300B</li></ul>',19);function N(I,y){const e=n("ExternalLinkIcon");return t(),a("div",null,[g,i("p",null,[_,i("a",m,[u,p(e)]),G]),f,i("blockquote",null,[i("p",null,[b,i("a",x,[C,p(e)]),A])]),R,i("p",null,[B,i("a",E,[k,p(e)]),v]),M])}var S=r(c,[["render",N],["__file","gossip.html.vue"]]);export{S as default};
