import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as a,e as c}from"./app.15378688.js";const r={},n=c('<p>\u770B\u5230\u5F88\u591A\u5C0F\u4F19\u4F34\u7B80\u5386\u4E0A\u5199\u4E86\u201C<strong>\u719F\u7EC3\u4F7F\u7528\u7F13\u5B58</strong>\u201D\uFF0C\u4F46\u662F\u88AB\u6211\u95EE\u5230\u201C<strong>\u7F13\u5B58\u5E38\u7528\u76843\u79CD\u8BFB\u5199\u7B56\u7565</strong>\u201D\u7684\u65F6\u5019\u5374\u4E00\u8138\u61F5\u903C\u3002</p><p>\u5728\u6211\u770B\u6765\uFF0C\u9020\u6210\u8FD9\u4E2A\u95EE\u9898\u7684\u539F\u56E0\u662F\u6211\u4EEC\u5728\u5B66\u4E60 Redis \u7684\u65F6\u5019\uFF0C\u53EF\u80FD\u53EA\u662F\u7B80\u5355\u4E86\u5199\u4E00\u4E9B Demo\uFF0C\u5E76\u6CA1\u6709\u53BB\u5173\u6CE8\u7F13\u5B58\u7684\u8BFB\u5199\u7B56\u7565\uFF0C\u6216\u8005\u8BF4\u538B\u6839\u4E0D\u77E5\u9053\u8FD9\u56DE\u4E8B\u3002</p><p>\u4F46\u662F\uFF0C\u641E\u61C23\u79CD\u5E38\u89C1\u7684\u7F13\u5B58\u8BFB\u5199\u7B56\u7565\u5BF9\u4E8E\u5B9E\u9645\u5DE5\u4F5C\u4E2D\u4F7F\u7528\u7F13\u5B58\u4EE5\u53CA\u9762\u8BD5\u4E2D\u88AB\u95EE\u5230\u7F13\u5B58\u90FD\u662F\u975E\u5E38\u6709\u5E2E\u52A9\u7684\uFF01</p><p>\u4E0B\u9762\u6211\u4F1A\u7B80\u5355\u4ECB\u7ECD\u4E00\u4E0B\u81EA\u5DF1\u5BF9\u4E8E\u8FD9 3 \u79CD\u7F13\u5B58\u8BFB\u5199\u7B56\u7565\u7684\u7406\u89E3\u3002</p><p>\u53E6\u5916\uFF0C<strong>\u8FD93 \u79CD\u7F13\u5B58\u8BFB\u5199\u7B56\u7565\u5404\u6709\u4F18\u52A3\uFF0C\u4E0D\u5B58\u5728\u6700\u4F73\uFF0C\u9700\u8981\u6211\u4EEC\u6839\u636E\u5177\u4F53\u7684\u4E1A\u52A1\u573A\u666F\u9009\u62E9\u66F4\u9002\u5408\u7684\u3002</strong></p><p><em>\u4E2A\u4EBA\u80FD\u529B\u6709\u9650\u3002\u5982\u679C\u6587\u7AE0\u6709\u4EFB\u4F55\u9700\u8981\u8865\u5145/\u5B8C\u5584/\u4FEE\u6539\u7684\u5730\u65B9\uFF0C\u6B22\u8FCE\u5728\u8BC4\u8BBA\u533A\u6307\u51FA\uFF0C\u5171\u540C\u8FDB\u6B65\uFF01\u2014\u2014\u7231\u4F60\u4EEC\u7684 Guide \u54E5</em></p><h3 id="cache-aside-pattern-\u65C1\u8DEF\u7F13\u5B58\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#cache-aside-pattern-\u65C1\u8DEF\u7F13\u5B58\u6A21\u5F0F" aria-hidden="true">#</a> Cache Aside Pattern\uFF08\u65C1\u8DEF\u7F13\u5B58\u6A21\u5F0F\uFF09</h3><p><strong>Cache Aside Pattern \u662F\u6211\u4EEC\u5E73\u65F6\u4F7F\u7528\u6BD4\u8F83\u591A\u7684\u4E00\u4E2A\u7F13\u5B58\u8BFB\u5199\u6A21\u5F0F\uFF0C\u6BD4\u8F83\u9002\u5408\u8BFB\u8BF7\u6C42\u6BD4\u8F83\u591A\u7684\u573A\u666F\u3002</strong></p><p>Cache Aside Pattern \u4E2D\u670D\u52A1\u7AEF\u9700\u8981\u540C\u65F6\u7EF4\u7CFB DB \u548C cache\uFF0C\u5E76\u4E14\u662F\u4EE5 DB \u7684\u7ED3\u679C\u4E3A\u51C6\u3002</p><p>\u4E0B\u9762\u6211\u4EEC\u6765\u770B\u4E00\u4E0B\u8FD9\u4E2A\u7B56\u7565\u6A21\u5F0F\u4E0B\u7684\u7F13\u5B58\u8BFB\u5199\u6B65\u9AA4\u3002</p><p><strong>\u5199</strong> \uFF1A</p><ul><li>\u5148\u66F4\u65B0 DB</li><li>\u7136\u540E\u76F4\u63A5\u5220\u9664 cache \u3002</li></ul><p>\u7B80\u5355\u753B\u4E86\u4E00\u5F20\u56FE\u5E2E\u52A9\u5927\u5BB6\u7406\u89E3\u5199\u7684\u6B65\u9AA4\u3002</p><p><img src="https://img-blog.csdnimg.cn/img_convert/5687fe759a1dac9ed9554d27e3a23b6d.png" alt=""></p><p><strong>\u8BFB</strong> :</p><ul><li>\u4ECE cache \u4E2D\u8BFB\u53D6\u6570\u636E\uFF0C\u8BFB\u53D6\u5230\u5C31\u76F4\u63A5\u8FD4\u56DE</li><li>cache\u4E2D\u8BFB\u53D6\u4E0D\u5230\u7684\u8BDD\uFF0C\u5C31\u4ECE DB \u4E2D\u8BFB\u53D6\u6570\u636E\u8FD4\u56DE</li><li>\u518D\u628A\u6570\u636E\u653E\u5230 cache \u4E2D\u3002</li></ul><p>\u7B80\u5355\u753B\u4E86\u4E00\u5F20\u56FE\u5E2E\u52A9\u5927\u5BB6\u7406\u89E3\u8BFB\u7684\u6B65\u9AA4\u3002</p><p><img src="https://img-blog.csdnimg.cn/img_convert/a8c18b5f5b1aed03234bcbbd8c173a87.png" alt=""></p><p>\u4F60\u4EC5\u4EC5\u4E86\u89E3\u4E86\u4E0A\u9762\u8FD9\u4E9B\u5185\u5BB9\u7684\u8BDD\u662F\u8FDC\u8FDC\u4E0D\u591F\u7684\uFF0C\u6211\u4EEC\u8FD8\u8981\u641E\u61C2\u5176\u4E2D\u7684\u539F\u7406\u3002</p><p>\u6BD4\u5982\u8BF4\u9762\u8BD5\u5B98\u5F88\u53EF\u80FD\u4F1A\u8FFD\u95EE\uFF1A\u201C<strong>\u5728\u5199\u6570\u636E\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u4EE5\u5148\u5220\u9664 cache \uFF0C\u540E\u66F4\u65B0 DB \u4E48\uFF1F</strong>\u201D</p><p><strong>\u7B54\u6848\uFF1A</strong> \u90A3\u80AF\u5B9A\u662F\u4E0D\u884C\u7684\uFF01\u56E0\u4E3A\u8FD9\u6837\u53EF\u80FD\u4F1A\u9020\u6210<strong>\u6570\u636E\u5E93\uFF08DB\uFF09\u548C\u7F13\u5B58\uFF08Cache\uFF09\u6570\u636E\u4E0D\u4E00\u81F4</strong>\u7684\u95EE\u9898\u3002\u4E3A\u4EC0\u4E48\u5462\uFF1F\u6BD4\u5982\u8BF4\u8BF7\u6C421 \u5148\u5199\u6570\u636EA\uFF0C\u8BF7\u6C422\u968F\u540E\u8BFB\u6570\u636EA\u7684\u8BDD\u5C31\u5F88\u6709\u53EF\u80FD\u4EA7\u751F\u6570\u636E\u4E0D\u4E00\u81F4\u6027\u7684\u95EE\u9898\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u53EF\u4EE5\u7B80\u5355\u63CF\u8FF0\u4E3A\uFF1A</p><blockquote><p>\u8BF7\u6C421\u5148\u628Acache\u4E2D\u7684A\u6570\u636E\u5220\u9664 -&gt; \u8BF7\u6C422\u4ECEDB\u4E2D\u8BFB\u53D6\u6570\u636E-&gt;\u8BF7\u6C421\u518D\u628ADB\u4E2D\u7684A\u6570\u636E\u66F4\u65B0\u3002</p></blockquote><p>\u5F53\u4F60\u8FD9\u6837\u56DE\u7B54\u4E4B\u540E\uFF0C\u9762\u8BD5\u5B98\u53EF\u80FD\u4F1A\u7D27\u63A5\u7740\u5C31\u8FFD\u95EE\uFF1A\u201C<strong>\u5728\u5199\u6570\u636E\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5148\u66F4\u65B0DB\uFF0C\u540E\u5220\u9664cache\u5C31\u6CA1\u6709\u95EE\u9898\u4E86\u4E48\uFF1F</strong>\u201D</p><p><strong>\u7B54\u6848\uFF1A</strong> \u7406\u8BBA\u4E0A\u6765\u8BF4\u8FD8\u662F\u53EF\u80FD\u4F1A\u51FA\u73B0\u6570\u636E\u4E0D\u4E00\u81F4\u6027\u7684\u95EE\u9898\uFF0C\u4E0D\u8FC7\u6982\u7387\u975E\u5E38\u5C0F\uFF0C\u56E0\u4E3A\u7F13\u5B58\u7684\u5199\u5165\u901F\u5EA6\u662F\u6BD4\u6570\u636E\u5E93\u7684\u5199\u5165\u901F\u5EA6\u5FEB\u5F88\u591A\uFF01</p><p>\u6BD4\u5982\u8BF7\u6C421\u5148\u8BFB\u6570\u636E A\uFF0C\u8BF7\u6C422\u968F\u540E\u5199\u6570\u636EA\uFF0C\u5E76\u4E14\u6570\u636EA\u4E0D\u5728\u7F13\u5B58\u4E2D\u7684\u8BDD\u4E5F\u6709\u53EF\u80FD\u4EA7\u751F\u6570\u636E\u4E0D\u4E00\u81F4\u6027\u7684\u95EE\u9898\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u53EF\u4EE5\u7B80\u5355\u63CF\u8FF0\u4E3A\uFF1A</p><blockquote><p>\u8BF7\u6C421\u4ECEDB\u8BFB\u6570\u636EA-&gt;\u8BF7\u6C422\u5199\u66F4\u65B0\u6570\u636E A \u5230\u6570\u636E\u5E93\u5E76\u628A\u5220\u9664cache\u4E2D\u7684A\u6570\u636E-&gt;\u8BF7\u6C421\u5C06\u6570\u636EA\u5199\u5165cache\u3002</p></blockquote><p>\u73B0\u5728\u6211\u4EEC\u518D\u6765\u5206\u6790\u4E00\u4E0B <strong>Cache Aside Pattern \u7684\u7F3A\u9677</strong>\u3002</p><p><strong>\u7F3A\u96771\uFF1A\u9996\u6B21\u8BF7\u6C42\u6570\u636E\u4E00\u5B9A\u4E0D\u5728 cache \u7684\u95EE\u9898</strong></p><p>\u89E3\u51B3\u529E\u6CD5\uFF1A\u53EF\u4EE5\u5C06\u70ED\u70B9\u6570\u636E\u53EF\u4EE5\u63D0\u524D\u653E\u5165cache \u4E2D\u3002</p><p><strong>\u7F3A\u96772\uFF1A\u5199\u64CD\u4F5C\u6BD4\u8F83\u9891\u7E41\u7684\u8BDD\u5BFC\u81F4cache\u4E2D\u7684\u6570\u636E\u4F1A\u88AB\u9891\u7E41\u88AB\u5220\u9664\uFF0C\u8FD9\u6837\u4F1A\u5F71\u54CD\u7F13\u5B58\u547D\u4E2D\u7387 \u3002</strong></p><p>\u89E3\u51B3\u529E\u6CD5\uFF1A</p><ul><li>\u6570\u636E\u5E93\u548C\u7F13\u5B58\u6570\u636E\u5F3A\u4E00\u81F4\u573A\u666F \uFF1A\u66F4\u65B0DB\u7684\u65F6\u5019\u540C\u6837\u66F4\u65B0cache\uFF0C\u4E0D\u8FC7\u6211\u4EEC\u9700\u8981\u52A0\u4E00\u4E2A\u9501/\u5206\u5E03\u5F0F\u9501\u6765\u4FDD\u8BC1\u66F4\u65B0cache\u7684\u65F6\u5019\u4E0D\u5B58\u5728\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\u3002</li><li>\u53EF\u4EE5\u77ED\u6682\u5730\u5141\u8BB8\u6570\u636E\u5E93\u548C\u7F13\u5B58\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u573A\u666F \uFF1A\u66F4\u65B0DB\u7684\u65F6\u5019\u540C\u6837\u66F4\u65B0cache\uFF0C\u4F46\u662F\u7ED9\u7F13\u5B58\u52A0\u4E00\u4E2A\u6BD4\u8F83\u77ED\u7684\u8FC7\u671F\u65F6\u95F4\uFF0C\u8FD9\u6837\u7684\u8BDD\u5C31\u53EF\u4EE5\u4FDD\u8BC1\u5373\u4F7F\u6570\u636E\u4E0D\u4E00\u81F4\u7684\u8BDD\u5F71\u54CD\u4E5F\u6BD4\u8F83\u5C0F\u3002</li></ul><h3 id="read-write-through-pattern-\u8BFB\u5199\u7A7F\u900F" tabindex="-1"><a class="header-anchor" href="#read-write-through-pattern-\u8BFB\u5199\u7A7F\u900F" aria-hidden="true">#</a> Read/Write Through Pattern\uFF08\u8BFB\u5199\u7A7F\u900F\uFF09</h3><p>Read/Write Through Pattern \u4E2D\u670D\u52A1\u7AEF\u628A cache \u89C6\u4E3A\u4E3B\u8981\u6570\u636E\u5B58\u50A8\uFF0C\u4ECE\u4E2D\u8BFB\u53D6\u6570\u636E\u5E76\u5C06\u6570\u636E\u5199\u5165\u5176\u4E2D\u3002cache \u670D\u52A1\u8D1F\u8D23\u5C06\u6B64\u6570\u636E\u8BFB\u53D6\u548C\u5199\u5165 DB\uFF0C\u4ECE\u800C\u51CF\u8F7B\u4E86\u5E94\u7528\u7A0B\u5E8F\u7684\u804C\u8D23\u3002</p><p>\u8FD9\u79CD\u7F13\u5B58\u8BFB\u5199\u7B56\u7565\u5C0F\u4F19\u4F34\u4EEC\u5E94\u8BE5\u4E5F\u53D1\u73B0\u4E86\u5728\u5E73\u65F6\u5728\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u975E\u5E38\u5C11\u89C1\u3002\u629B\u53BB\u6027\u80FD\u65B9\u9762\u7684\u5F71\u54CD\uFF0C\u5927\u6982\u7387\u662F\u56E0\u4E3A\u6211\u4EEC\u7ECF\u5E38\u4F7F\u7528\u7684\u5206\u5E03\u5F0F\u7F13\u5B58 Redis \u5E76\u6CA1\u6709\u63D0\u4F9B cache \u5C06\u6570\u636E\u5199\u5165DB\u7684\u529F\u80FD\u3002</p><p><strong>\u5199\uFF08Write Through\uFF09\uFF1A</strong></p><ul><li>\u5148\u67E5 cache\uFF0Ccache \u4E2D\u4E0D\u5B58\u5728\uFF0C\u76F4\u63A5\u66F4\u65B0 DB\u3002</li><li>cache \u4E2D\u5B58\u5728\uFF0C\u5219\u5148\u66F4\u65B0 cache\uFF0C\u7136\u540E cache \u670D\u52A1\u81EA\u5DF1\u66F4\u65B0 DB\uFF08<strong>\u540C\u6B65\u66F4\u65B0 cache \u548C DB</strong>\uFF09\u3002</li></ul><p>\u7B80\u5355\u753B\u4E86\u4E00\u5F20\u56FE\u5E2E\u52A9\u5927\u5BB6\u7406\u89E3\u5199\u7684\u6B65\u9AA4\u3002</p><p><img src="https://img-blog.csdnimg.cn/20210201100340808.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MzM3Mjcy,size_16,color_FFFFFF,t_70" alt=""></p><p><strong>\u8BFB(Read Through)\uFF1A</strong></p><ul><li>\u4ECE cache \u4E2D\u8BFB\u53D6\u6570\u636E\uFF0C\u8BFB\u53D6\u5230\u5C31\u76F4\u63A5\u8FD4\u56DE \u3002</li><li>\u8BFB\u53D6\u4E0D\u5230\u7684\u8BDD\uFF0C\u5148\u4ECE DB \u52A0\u8F7D\uFF0C\u5199\u5165\u5230 cache \u540E\u8FD4\u56DE\u54CD\u5E94\u3002</li></ul><p>\u7B80\u5355\u753B\u4E86\u4E00\u5F20\u56FE\u5E2E\u52A9\u5927\u5BB6\u7406\u89E3\u8BFB\u7684\u6B65\u9AA4\u3002</p><p><img src="https://img-blog.csdnimg.cn/img_convert/9ada757c78614934aca11306f334638d.png" alt=""></p><p>Read-Through Pattern \u5B9E\u9645\u53EA\u662F\u5728 Cache-Aside Pattern \u4E4B\u4E0A\u8FDB\u884C\u4E86\u5C01\u88C5\u3002\u5728 Cache-Aside Pattern \u4E0B\uFF0C\u53D1\u751F\u8BFB\u8BF7\u6C42\u7684\u65F6\u5019\uFF0C\u5982\u679C cache \u4E2D\u4E0D\u5B58\u5728\u5BF9\u5E94\u7684\u6570\u636E\uFF0C\u662F\u7531\u5BA2\u6237\u7AEF\u81EA\u5DF1\u8D1F\u8D23\u628A\u6570\u636E\u5199\u5165 cache\uFF0C\u800C Read-Through Pattern \u5219\u662F cache \u670D\u52A1\u81EA\u5DF1\u6765\u5199\u5165\u7F13\u5B58\u7684\uFF0C\u8FD9\u5BF9\u5BA2\u6237\u7AEF\u662F\u900F\u660E\u7684\u3002</p><p>\u548C Cache Aside Pattern \u4E00\u6837\uFF0C Read-Through Pattern \u4E5F\u6709\u9996\u6B21\u8BF7\u6C42\u6570\u636E\u4E00\u5B9A\u4E0D\u518D cache \u7684\u95EE\u9898\uFF0C\u5BF9\u4E8E\u70ED\u70B9\u6570\u636E\u53EF\u4EE5\u63D0\u524D\u653E\u5165\u7F13\u5B58\u4E2D\u3002</p><h3 id="write-behind-pattern-\u5F02\u6B65\u7F13\u5B58\u5199\u5165" tabindex="-1"><a class="header-anchor" href="#write-behind-pattern-\u5F02\u6B65\u7F13\u5B58\u5199\u5165" aria-hidden="true">#</a> Write Behind Pattern\uFF08\u5F02\u6B65\u7F13\u5B58\u5199\u5165\uFF09</h3><p>Write Behind Pattern \u548C Read/Write Through Pattern \u5F88\u76F8\u4F3C\uFF0C\u4E24\u8005\u90FD\u662F\u7531 cache \u670D\u52A1\u6765\u8D1F\u8D23 cache \u548C DB \u7684\u8BFB\u5199\u3002</p><p>\u4F46\u662F\uFF0C\u4E24\u4E2A\u53C8\u6709\u5F88\u5927\u7684\u4E0D\u540C\uFF1A<strong>Read/Write Through \u662F\u540C\u6B65\u66F4\u65B0 cache \u548C DB\uFF0C\u800C Write Behind Caching \u5219\u662F\u53EA\u66F4\u65B0\u7F13\u5B58\uFF0C\u4E0D\u76F4\u63A5\u66F4\u65B0 DB\uFF0C\u800C\u662F\u6539\u4E3A\u5F02\u6B65\u6279\u91CF\u7684\u65B9\u5F0F\u6765\u66F4\u65B0 DB\u3002</strong></p><p>\u5F88\u660E\u663E\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u5BF9\u6570\u636E\u4E00\u81F4\u6027\u5E26\u6765\u4E86\u66F4\u5927\u7684\u6311\u6218\uFF0C\u6BD4\u5982cache\u6570\u636E\u53EF\u80FD\u8FD8\u6CA1\u5F02\u6B65\u66F4\u65B0DB\u7684\u8BDD\uFF0Ccache\u670D\u52A1\u53EF\u80FD\u5C31\u5C31\u6302\u6389\u4E86\u3002</p><p>\u8FD9\u79CD\u7B56\u7565\u5728\u6211\u4EEC\u5E73\u65F6\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u4E5F\u975E\u5E38\u975E\u5E38\u5C11\u89C1\uFF0C\u4F46\u662F\u4E0D\u4EE3\u8868\u5B83\u7684\u5E94\u7528\u573A\u666F\u5C11\uFF0C\u6BD4\u5982\u6D88\u606F\u961F\u5217\u4E2D\u6D88\u606F\u7684\u5F02\u6B65\u5199\u5165\u78C1\u76D8\u3001MySQL \u7684 InnoDB Buffer Pool \u673A\u5236\u90FD\u7528\u5230\u4E86\u8FD9\u79CD\u7B56\u7565\u3002</p><p>Write Behind Pattern \u4E0B DB \u7684\u5199\u6027\u80FD\u975E\u5E38\u9AD8\uFF0C\u975E\u5E38\u9002\u5408\u4E00\u4E9B\u6570\u636E\u7ECF\u5E38\u53D8\u5316\u53C8\u5BF9\u6570\u636E\u4E00\u81F4\u6027\u8981\u6C42\u6CA1\u90A3\u4E48\u9AD8\u7684\u573A\u666F\uFF0C\u6BD4\u5982\u6D4F\u89C8\u91CF\u3001\u70B9\u8D5E\u91CF\u3002</p>',51),p=[n];function h(i,o){return t(),a("div",null,p)}var d=e(r,[["render",h],["__file","3-commonly-used-cache-read-and-write-strategies.html.vue"]]);export{d as default};
