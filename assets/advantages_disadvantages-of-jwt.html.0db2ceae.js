import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as p,b as s,a as e,d as n,e as i,r as c}from"./app.b9e78213.js";const l={},r=n("\u5728 "),d={href:"https://javaguide.cn/system-design/security/jwt-intro.html",target:"_blank",rel:"noopener noreferrer"},u=n("JWT \u57FA\u672C\u6982\u5FF5\u8BE6\u89E3"),h=n("\u8FD9\u7BC7\u6587\u7AE0\u4E2D\uFF0C\u6211\u4ECB\u7ECD\u4E86\uFF1A"),k=i(`<ul><li>\u4EC0\u4E48\u662F JWT?</li><li>JWT \u7531\u54EA\u4E9B\u90E8\u5206\u7EC4\u6210\uFF1F</li><li>\u5982\u4F55\u57FA\u4E8E JWT \u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1\uFF1F</li><li>JWT \u5982\u4F55\u9632\u6B62 Token \u88AB\u7BE1\u6539\uFF1F</li><li>\u5982\u4F55\u52A0\u5F3A JWT \u7684\u5B89\u5168\u6027\uFF1F</li></ul><p>\u8FD9\u7BC7\u6587\u7AE0\uFF0C\u6211\u4EEC\u4E00\u8D77\u63A2\u8BA8\u4E00\u4E0B JWT \u8EAB\u4EFD\u8BA4\u8BC1\u7684\u4F18\u7F3A\u70B9\u4EE5\u53CA\u5E38\u89C1\u95EE\u9898\u7684\u89E3\u51B3\u529E\u6CD5\u3002</p><h2 id="jwt-\u7684\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#jwt-\u7684\u4F18\u52BF" aria-hidden="true">#</a> JWT \u7684\u4F18\u52BF</h2><p>\u76F8\u6BD4\u4E8E Session \u8BA4\u8BC1\u7684\u65B9\u5F0F\u6765\u8BF4\uFF0C\u4F7F\u7528 JWT \u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1\u4E3B\u8981\u6709\u4E0B\u9762 4 \u4E2A\u4F18\u52BF\u3002</p><h3 id="\u65E0\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u65E0\u72B6\u6001" aria-hidden="true">#</a> \u65E0\u72B6\u6001</h3><p>JWT \u81EA\u8EAB\u5305\u542B\u4E86\u8EAB\u4EFD\u9A8C\u8BC1\u6240\u9700\u8981\u7684\u6240\u6709\u4FE1\u606F\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u7684\u670D\u52A1\u5668\u4E0D\u9700\u8981\u5B58\u50A8 Session \u4FE1\u606F\u3002\u8FD9\u663E\u7136\u589E\u52A0\u4E86\u7CFB\u7EDF\u7684\u53EF\u7528\u6027\u548C\u4F38\u7F29\u6027\uFF0C\u5927\u5927\u51CF\u8F7B\u4E86\u670D\u52A1\u7AEF\u7684\u538B\u529B\u3002</p><p>\u4E0D\u8FC7\uFF0C\u4E5F\u6B63\u662F\u7531\u4E8E JWT \u7684\u65E0\u72B6\u6001\uFF0C\u4E5F\u5BFC\u81F4\u4E86\u5B83\u6700\u5927\u7684\u7F3A\u70B9\uFF1A<strong>\u4E0D\u53EF\u63A7\uFF01</strong></p><p>\u5C31\u6BD4\u5982\u8BF4\uFF0C\u6211\u4EEC\u60F3\u8981\u5728 JWT \u6709\u6548\u671F\u5185\u5E9F\u5F03\u4E00\u4E2A JWT \u6216\u8005\u66F4\u6539\u5B83\u7684\u6743\u9650\u7684\u8BDD\uFF0C\u5E76\u4E0D\u4F1A\u7ACB\u5373\u751F\u6548\uFF0C\u901A\u5E38\u9700\u8981\u7B49\u5230\u6709\u6548\u671F\u8FC7\u540E\u624D\u53EF\u4EE5\u3002\u518D\u6BD4\u5982\u8BF4\uFF0C\u5F53\u7528\u6237 Logout \u7684\u8BDD\uFF0CJWT \u4E5F\u8FD8\u6709\u6548\u3002\u9664\u975E\uFF0C\u6211\u4EEC\u5728\u540E\u7AEF\u589E\u52A0\u989D\u5916\u7684\u5904\u7406\u903B\u8F91\u6BD4\u5982\u5C06\u5931\u6548\u7684 JWT \u5B58\u50A8\u8D77\u6765\uFF0C\u540E\u7AEF\u5148\u9A8C\u8BC1 JWT \u662F\u5426\u6709\u6548\u518D\u8FDB\u884C\u5904\u7406\u3002\u5177\u4F53\u7684\u89E3\u51B3\u529E\u6CD5\uFF0C\u6211\u4EEC\u4F1A\u5728\u540E\u9762\u7684\u5185\u5BB9\u4E2D\u8BE6\u7EC6\u4ECB\u7ECD\u5230\uFF0C\u8FD9\u91CC\u53EA\u662F\u7B80\u5355\u63D0\u4E00\u4E0B\u3002</p><h3 id="\u6709\u6548\u907F\u514D\u4E86-csrf-\u653B\u51FB" tabindex="-1"><a class="header-anchor" href="#\u6709\u6548\u907F\u514D\u4E86-csrf-\u653B\u51FB" aria-hidden="true">#</a> \u6709\u6548\u907F\u514D\u4E86 CSRF \u653B\u51FB</h3><p><strong>CSRF\uFF08Cross Site Request Forgery\uFF09</strong> \u4E00\u822C\u88AB\u7FFB\u8BD1\u4E3A <strong>\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020</strong>\uFF0C\u5C5E\u4E8E\u7F51\u7EDC\u653B\u51FB\u9886\u57DF\u8303\u56F4\u3002\u76F8\u6BD4\u4E8E SQL \u811A\u672C\u6CE8\u5165\u3001XSS \u7B49\u5B89\u5168\u653B\u51FB\u65B9\u5F0F\uFF0CCSRF \u7684\u77E5\u540D\u5EA6\u5E76\u6CA1\u6709\u5B83\u4EEC\u9AD8\u3002\u4F46\u662F\uFF0C\u5B83\u7684\u786E\u662F\u6211\u4EEC\u5F00\u53D1\u7CFB\u7EDF\u65F6\u5FC5\u987B\u8981\u8003\u8651\u7684\u5B89\u5168\u9690\u60A3\u3002\u5C31\u8FDE\u4E1A\u5185\u6280\u672F\u6807\u6746 Google \u7684\u4EA7\u54C1 Gmail \u4E5F\u66FE\u5728 2007 \u5E74\u7684\u65F6\u5019\u7206\u51FA\u8FC7 CSRF \u6F0F\u6D1E\uFF0C\u8FD9\u7ED9 Gmail \u7684\u7528\u6237\u9020\u6210\u4E86\u5F88\u5927\u7684\u635F\u5931\u3002</p><p><strong>\u90A3\u4E48\u7A76\u7ADF\u4EC0\u4E48\u662F\u8DE8\u7AD9\u8BF7\u6C42\u4F2A\u9020\u5462\uFF1F</strong> \u7B80\u5355\u6765\u8BF4\u5C31\u662F\u7528\u4F60\u7684\u8EAB\u4EFD\u53BB\u505A\u4E00\u4E9B\u4E0D\u597D\u7684\u4E8B\u60C5\uFF08\u53D1\u9001\u4E00\u4E9B\u5BF9\u4F60\u4E0D\u53CB\u597D\u7684\u8BF7\u6C42\u6BD4\u5982\u6076\u610F\u8F6C\u8D26\uFF09\u3002</p><p>\u4E3E\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A\u5C0F\u58EE\u767B\u5F55\u4E86\u67D0\u7F51\u4E0A\u94F6\u884C\uFF0C\u4ED6\u6765\u5230\u4E86\u7F51\u4E0A\u94F6\u884C\u7684\u5E16\u5B50\u533A\uFF0C\u770B\u5230\u4E00\u4E2A\u5E16\u5B50\u4E0B\u9762\u6709\u4E00\u4E2A\u94FE\u63A5\u5199\u7740\u201C\u79D1\u5B66\u7406\u8D22\uFF0C\u5E74\u76C8\u5229\u7387\u8FC7\u4E07\u201D\uFF0C\u5C0F\u58EE\u597D\u5947\u7684\u70B9\u5F00\u4E86\u8FD9\u4E2A\u94FE\u63A5\uFF0C\u7ED3\u679C\u53D1\u73B0\u81EA\u5DF1\u7684\u8D26\u6237\u5C11\u4E86 10000 \u5143\u3002\u8FD9\u662F\u8FD9\u4E48\u56DE\u4E8B\u5462\uFF1F\u539F\u6765\u9ED1\u5BA2\u5728\u94FE\u63A5\u4E2D\u85CF\u4E86\u4E00\u4E2A\u8BF7\u6C42\uFF0C\u8FD9\u4E2A\u8BF7\u6C42\u76F4\u63A5\u5229\u7528\u5C0F\u58EE\u7684\u8EAB\u4EFD\u7ED9\u94F6\u884C\u53D1\u9001\u4E86\u4E00\u4E2A\u8F6C\u8D26\u8BF7\u6C42\uFF0C\u4E5F\u5C31\u662F\u901A\u8FC7\u4F60\u7684 Cookie \u5411\u94F6\u884C\u53D1\u51FA\u8BF7\u6C42\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.mybank.com/Transfer?bankId=11&amp;money=10000<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u79D1\u5B66\u7406\u8D22\uFF0C\u5E74\u76C8\u5229\u7387\u8FC7\u4E07<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CSRF \u653B\u51FB\u9700\u8981\u4F9D\u8D56 Cookie \uFF0CSession \u8BA4\u8BC1\u4E2D Cookie \u4E2D\u7684 <code>SessionID</code> \u662F\u7531\u6D4F\u89C8\u5668\u53D1\u9001\u5230\u670D\u52A1\u7AEF\u7684\uFF0C\u53EA\u8981\u53D1\u51FA\u8BF7\u6C42\uFF0CCookie \u5C31\u4F1A\u88AB\u643A\u5E26\u3002\u501F\u52A9\u8FD9\u4E2A\u7279\u6027\uFF0C\u5373\u4F7F\u9ED1\u5BA2\u65E0\u6CD5\u83B7\u53D6\u4F60\u7684 <code>SessionID</code>\uFF0C\u53EA\u8981\u8BA9\u4F60\u8BEF\u70B9\u653B\u51FB\u94FE\u63A5\uFF0C\u5C31\u53EF\u4EE5\u8FBE\u5230\u653B\u51FB\u6548\u679C\u3002</p><p>\u53E6\u5916\uFF0C\u5E76\u4E0D\u662F\u5FC5\u987B\u70B9\u51FB\u94FE\u63A5\u624D\u53EF\u4EE5\u8FBE\u5230\u653B\u51FB\u6548\u679C\uFF0C\u5F88\u591A\u65F6\u5019\uFF0C\u53EA\u8981\u4F60\u6253\u5F00\u4E86\u67D0\u4E2A\u9875\u9762\uFF0CCSRF \u653B\u51FB\u5C31\u4F1A\u53D1\u751F\u3002</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.mybank.com/Transfer?bankId=11&amp;money=10000<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u90A3\u4E3A\u4EC0\u4E48 JWT \u4E0D\u4F1A\u5B58\u5728\u8FD9\u79CD\u95EE\u9898\u5462\uFF1F</strong></p><p>\u4E00\u822C\u60C5\u51B5\u4E0B\u6211\u4EEC\u4F7F\u7528 JWT \u7684\u8BDD\uFF0C\u5728\u6211\u4EEC\u767B\u5F55\u6210\u529F\u83B7\u5F97 JWT \u4E4B\u540E\uFF0C\u4E00\u822C\u4F1A\u9009\u62E9\u5B58\u653E\u5728 localStorage \u4E2D\u3002\u524D\u7AEF\u7684\u6BCF\u4E00\u4E2A\u8BF7\u6C42\u540E\u7EED\u90FD\u4F1A\u9644\u5E26\u4E0A\u8FD9\u4E2A JWT\uFF0C\u6574\u4E2A\u8FC7\u7A0B\u538B\u6839\u4E0D\u4F1A\u6D89\u53CA\u5230 Cookie\u3002\u56E0\u6B64\uFF0C\u5373\u4F7F\u4F60\u70B9\u51FB\u4E86\u975E\u6CD5\u94FE\u63A5\u53D1\u9001\u4E86\u8BF7\u6C42\u5230\u670D\u52A1\u7AEF\uFF0C\u8FD9\u4E2A\u975E\u6CD5\u8BF7\u6C42\u4E5F\u662F\u4E0D\u4F1A\u643A\u5E26 JWT \u7684\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u8BF7\u6C42\u5C06\u662F\u975E\u6CD5\u7684\u3002</p><p>\u603B\u7ED3\u6765\u8BF4\u5C31\u4E00\u53E5\u8BDD\uFF1A<strong>\u4F7F\u7528 JWT \u8FDB\u884C\u8EAB\u4EFD\u9A8C\u8BC1\u4E0D\u9700\u8981\u4F9D\u8D56 Cookie \uFF0C\u56E0\u6B64\u53EF\u4EE5\u907F\u514D CSRF \u653B\u51FB\u3002</strong></p><p>\u4E0D\u8FC7\uFF0C\u8FD9\u6837\u4E5F\u4F1A\u5B58\u5728 XSS \u653B\u51FB\u7684\u98CE\u9669\u3002\u4E3A\u4E86\u907F\u514D XSS \u653B\u51FB\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u5C06 JWT \u5B58\u50A8\u5728\u6807\u8BB0\u4E3A<code>httpOnly</code> \u7684 Cookie \u4E2D\u3002\u4F46\u662F\uFF0C\u8FD9\u6837\u53C8\u5BFC\u81F4\u4E86\u4F60\u5FC5\u987B\u81EA\u5DF1\u63D0\u4F9B CSRF \u4FDD\u62A4\uFF0C\u56E0\u6B64\uFF0C\u5B9E\u9645\u9879\u76EE\u4E2D\u6211\u4EEC\u901A\u5E38\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u505A\u3002</p><p>\u5E38\u89C1\u7684\u907F\u514D XSS \u653B\u51FB\u7684\u65B9\u5F0F\u662F\u8FC7\u6EE4\u6389\u8BF7\u6C42\u4E2D\u5B58\u5728 XSS \u653B\u51FB\u98CE\u9669\u7684\u53EF\u7591\u5B57\u7B26\u4E32\u3002</p><p>\u5728 Spring \u9879\u76EE\u4E2D\uFF0C\u6211\u4EEC\u4E00\u822C\u662F\u901A\u8FC7\u521B\u5EFA XSS \u8FC7\u6EE4\u5668\u6765\u5B9E\u73B0\u7684\u3002</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token class-name">Ordered</span><span class="token punctuation">.</span>HIGHEST_PRECEDENCE<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XSSFilter</span> <span class="token keyword">implements</span> <span class="token class-name">Filter</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doFilter</span><span class="token punctuation">(</span><span class="token class-name">ServletRequest</span> request<span class="token punctuation">,</span> <span class="token class-name">ServletResponse</span> response<span class="token punctuation">,</span>
      <span class="token class-name">FilterChain</span> chain<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">,</span> <span class="token class-name">ServletException</span> <span class="token punctuation">{</span>
        <span class="token class-name">XSSRequestWrapper</span> wrappedRequest <span class="token operator">=</span>
          <span class="token keyword">new</span> <span class="token class-name">XSSRequestWrapper</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span><span class="token punctuation">)</span> request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        chain<span class="token punctuation">.</span><span class="token function">doFilter</span><span class="token punctuation">(</span>wrappedRequest<span class="token punctuation">,</span> response<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// other methods</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9002\u5408\u79FB\u52A8\u7AEF\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u9002\u5408\u79FB\u52A8\u7AEF\u5E94\u7528" aria-hidden="true">#</a> \u9002\u5408\u79FB\u52A8\u7AEF\u5E94\u7528</h3><p>\u4F7F\u7528 Session \u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1\u7684\u8BDD\uFF0C\u9700\u8981\u4FDD\u5B58\u4E00\u4EFD\u4FE1\u606F\u5728\u670D\u52A1\u5668\u7AEF\uFF0C\u800C\u4E14\u8FD9\u79CD\u65B9\u5F0F\u4F1A\u4F9D\u8D56\u5230 Cookie\uFF08\u9700\u8981 Cookie \u4FDD\u5B58 <code>SessionId</code>\uFF09\uFF0C\u6240\u4EE5\u4E0D\u9002\u5408\u79FB\u52A8\u7AEF\u3002</p><p>\u4F46\u662F\uFF0C\u4F7F\u7528 JWT \u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1\u5C31\u4E0D\u4F1A\u5B58\u5728\u8FD9\u79CD\u95EE\u9898\uFF0C\u56E0\u4E3A\u53EA\u8981 JWT \u53EF\u4EE5\u88AB\u5BA2\u6237\u7AEF\u5B58\u50A8\u5C31\u80FD\u591F\u4F7F\u7528\uFF0C\u800C\u4E14 JWT \u8FD8\u53EF\u4EE5\u8DE8\u8BED\u8A00\u4F7F\u7528\u3002</p><h3 id="\u5355\u70B9\u767B\u5F55\u53CB\u597D" tabindex="-1"><a class="header-anchor" href="#\u5355\u70B9\u767B\u5F55\u53CB\u597D" aria-hidden="true">#</a> \u5355\u70B9\u767B\u5F55\u53CB\u597D</h3><p>\u4F7F\u7528 Session \u8FDB\u884C\u8EAB\u4EFD\u8BA4\u8BC1\u7684\u8BDD\uFF0C\u5B9E\u73B0\u5355\u70B9\u767B\u5F55\uFF0C\u9700\u8981\u6211\u4EEC\u628A\u7528\u6237\u7684 Session \u4FE1\u606F\u4FDD\u5B58\u5728\u4E00\u53F0\u7535\u8111\u4E0A\uFF0C\u5E76\u4E14\u8FD8\u4F1A\u9047\u5230\u5E38\u89C1\u7684 Cookie \u8DE8\u57DF\u7684\u95EE\u9898\u3002\u4F46\u662F\uFF0C\u4F7F\u7528 JWT \u8FDB\u884C\u8BA4\u8BC1\u7684\u8BDD\uFF0C JWT \u88AB\u4FDD\u5B58\u5728\u5BA2\u6237\u7AEF\uFF0C\u4E0D\u4F1A\u5B58\u5728\u8FD9\u4E9B\u95EE\u9898\u3002</p><h2 id="jwt-\u8EAB\u4EFD\u8BA4\u8BC1\u5E38\u89C1\u95EE\u9898\u53CA\u89E3\u51B3\u529E\u6CD5" tabindex="-1"><a class="header-anchor" href="#jwt-\u8EAB\u4EFD\u8BA4\u8BC1\u5E38\u89C1\u95EE\u9898\u53CA\u89E3\u51B3\u529E\u6CD5" aria-hidden="true">#</a> JWT \u8EAB\u4EFD\u8BA4\u8BC1\u5E38\u89C1\u95EE\u9898\u53CA\u89E3\u51B3\u529E\u6CD5</h2><h3 id="\u6CE8\u9500\u767B\u5F55\u7B49\u573A\u666F\u4E0B-jwt-\u8FD8\u6709\u6548" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u9500\u767B\u5F55\u7B49\u573A\u666F\u4E0B-jwt-\u8FD8\u6709\u6548" aria-hidden="true">#</a> \u6CE8\u9500\u767B\u5F55\u7B49\u573A\u666F\u4E0B JWT \u8FD8\u6709\u6548</h3><p>\u4E0E\u4E4B\u7C7B\u4F3C\u7684\u5177\u4F53\u76F8\u5173\u573A\u666F\u6709\uFF1A</p><ul><li>\u9000\u51FA\u767B\u5F55;</li><li>\u4FEE\u6539\u5BC6\u7801;</li><li>\u670D\u52A1\u7AEF\u4FEE\u6539\u4E86\u67D0\u4E2A\u7528\u6237\u5177\u6709\u7684\u6743\u9650\u6216\u8005\u89D2\u8272\uFF1B</li><li>\u7528\u6237\u7684\u5E10\u6237\u88AB\u5C01\u7981/\u5220\u9664\uFF1B</li><li>\u7528\u6237\u88AB\u670D\u52A1\u7AEF\u5F3A\u5236\u6CE8\u9500\uFF1B</li><li>\u7528\u6237\u88AB\u8E22\u4E0B\u7EBF\uFF1B</li><li>......</li></ul><p>\u8FD9\u4E2A\u95EE\u9898\u4E0D\u5B58\u5728\u4E8E Session \u8BA4\u8BC1\u65B9\u5F0F\u4E2D\uFF0C\u56E0\u4E3A\u5728 Session \u8BA4\u8BC1\u65B9\u5F0F\u4E2D\uFF0C\u9047\u5230\u8FD9\u79CD\u60C5\u51B5\u7684\u8BDD\u670D\u52A1\u7AEF\u5220\u9664\u5BF9\u5E94\u7684 Session \u8BB0\u5F55\u5373\u53EF\u3002\u4F46\u662F\uFF0C\u4F7F\u7528 JWT \u8BA4\u8BC1\u7684\u65B9\u5F0F\u5C31\u4E0D\u597D\u89E3\u51B3\u4E86\u3002\u6211\u4EEC\u4E5F\u8BF4\u8FC7\u4E86\uFF0CJWT \u4E00\u65E6\u6D3E\u53D1\u51FA\u53BB\uFF0C\u5982\u679C\u540E\u7AEF\u4E0D\u589E\u52A0\u5176\u4ED6\u903B\u8F91\u7684\u8BDD\uFF0C\u5B83\u5728\u5931\u6548\u4E4B\u524D\u90FD\u662F\u6709\u6548\u7684\u3002</p><p>\u90A3\u6211\u4EEC\u5982\u4F55\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u5462\uFF1F\u67E5\u9605\u4E86\u5F88\u591A\u8D44\u6599\uFF0C\u6211\u7B80\u5355\u603B\u7ED3\u4E86\u4E0B\u9762 4 \u79CD\u65B9\u6848\uFF1A</p><p><strong>1\u3001\u5C06 JWT \u5B58\u5165\u5185\u5B58\u6570\u636E\u5E93</strong></p><p>\u5C06 JWT \u5B58\u5165 DB \u4E2D\uFF0CRedis \u5185\u5B58\u6570\u636E\u5E93\u5728\u8FD9\u91CC\u662F\u4E0D\u9519\u7684\u9009\u62E9\u3002\u5982\u679C\u9700\u8981\u8BA9\u67D0\u4E2A JWT \u5931\u6548\u5C31\u76F4\u63A5\u4ECE Redis \u4E2D\u5220\u9664\u8FD9\u4E2A JWT \u5373\u53EF\u3002\u4F46\u662F\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4\u6BCF\u6B21\u4F7F\u7528 JWT \u53D1\u9001\u8BF7\u6C42\u90FD\u8981\u5148\u4ECE DB \u4E2D\u67E5\u8BE2 JWT \u662F\u5426\u5B58\u5728\u7684\u6B65\u9AA4\uFF0C\u800C\u4E14\u8FDD\u80CC\u4E86 JWT \u7684\u65E0\u72B6\u6001\u539F\u5219\u3002</p><p><strong>2\u3001\u9ED1\u540D\u5355\u673A\u5236</strong></p><p>\u548C\u4E0A\u9762\u7684\u65B9\u5F0F\u7C7B\u4F3C\uFF0C\u4F7F\u7528\u5185\u5B58\u6570\u636E\u5E93\u6BD4\u5982 Redis \u7EF4\u62A4\u4E00\u4E2A\u9ED1\u540D\u5355\uFF0C\u5982\u679C\u60F3\u8BA9\u67D0\u4E2A JWT \u5931\u6548\u7684\u8BDD\u5C31\u76F4\u63A5\u5C06\u8FD9\u4E2A JWT \u52A0\u5165\u5230 <strong>\u9ED1\u540D\u5355</strong> \u5373\u53EF\u3002\u7136\u540E\uFF0C\u6BCF\u6B21\u4F7F\u7528 JWT \u8FDB\u884C\u8BF7\u6C42\u7684\u8BDD\u90FD\u4F1A\u5148\u5224\u65AD\u8FD9\u4E2A JWT \u662F\u5426\u5B58\u5728\u4E8E\u9ED1\u540D\u5355\u4E2D\u3002</p><p>\u524D\u4E24\u79CD\u65B9\u6848\u7684\u6838\u5FC3\u5728\u4E8E\u5C06\u6709\u6548\u7684 JWT \u5B58\u50A8\u8D77\u6765\u6216\u8005\u5C06\u6307\u5B9A\u7684 JWT \u62C9\u5165\u9ED1\u540D\u5355\u3002</p><p>\u867D\u7136\u8FD9\u4E24\u79CD\u65B9\u6848\u90FD\u8FDD\u80CC\u4E86 JWT \u7684\u65E0\u72B6\u6001\u539F\u5219\uFF0C\u4F46\u662F\u4E00\u822C\u5B9E\u9645\u9879\u76EE\u4E2D\u6211\u4EEC\u901A\u5E38\u8FD8\u662F\u4F1A\u4F7F\u7528\u8FD9\u4E24\u79CD\u65B9\u6848\u3002</p><p><strong>3\u3001\u4FEE\u6539\u5BC6\u94A5 (Secret)</strong> :</p><p>\u6211\u4EEC\u4E3A\u6BCF\u4E2A\u7528\u6237\u90FD\u521B\u5EFA\u4E00\u4E2A\u4E13\u5C5E\u5BC6\u94A5\uFF0C\u5982\u679C\u6211\u4EEC\u60F3\u8BA9\u67D0\u4E2A JWT \u5931\u6548\uFF0C\u6211\u4EEC\u76F4\u63A5\u4FEE\u6539\u5BF9\u5E94\u7528\u6237\u7684\u5BC6\u94A5\u5373\u53EF\u3002\u4F46\u662F\uFF0C\u8FD9\u6837\u76F8\u6BD4\u4E8E\u524D\u4E24\u79CD\u5F15\u5165\u5185\u5B58\u6570\u636E\u5E93\u5E26\u6765\u4E86\u5371\u5BB3\u66F4\u5927\uFF1A</p><ul><li>\u5982\u679C\u670D\u52A1\u662F\u5206\u5E03\u5F0F\u7684\uFF0C\u5219\u6BCF\u6B21\u53D1\u51FA\u65B0\u7684 JWT \u65F6\u90FD\u5FC5\u987B\u5728\u591A\u53F0\u673A\u5668\u540C\u6B65\u5BC6\u94A5\u3002\u4E3A\u6B64\uFF0C\u4F60\u9700\u8981\u5C06\u5BC6\u94A5\u5B58\u50A8\u5728\u6570\u636E\u5E93\u6216\u5176\u4ED6\u5916\u90E8\u670D\u52A1\u4E2D\uFF0C\u8FD9\u6837\u548C Session \u8BA4\u8BC1\u5C31\u6CA1\u592A\u5927\u533A\u522B\u4E86\u3002</li><li>\u5982\u679C\u7528\u6237\u540C\u65F6\u5728\u4E24\u4E2A\u6D4F\u89C8\u5668\u6253\u5F00\u7CFB\u7EDF\uFF0C\u6216\u8005\u5728\u624B\u673A\u7AEF\u4E5F\u6253\u5F00\u4E86\u7CFB\u7EDF\uFF0C\u5982\u679C\u5B83\u4ECE\u4E00\u4E2A\u5730\u65B9\u5C06\u8D26\u53F7\u9000\u51FA\uFF0C\u90A3\u4E48\u5176\u4ED6\u5730\u65B9\u90FD\u8981\u91CD\u65B0\u8FDB\u884C\u767B\u5F55\uFF0C\u8FD9\u662F\u4E0D\u53EF\u53D6\u7684\u3002</li></ul><p><strong>4\u3001\u4FDD\u6301\u4EE4\u724C\u7684\u6709\u6548\u671F\u9650\u77ED\u5E76\u7ECF\u5E38\u8F6E\u6362</strong></p><p>\u5F88\u7B80\u5355\u7684\u4E00\u79CD\u65B9\u5F0F\u3002\u4F46\u662F\uFF0C\u4F1A\u5BFC\u81F4\u7528\u6237\u767B\u5F55\u72B6\u6001\u4E0D\u4F1A\u88AB\u6301\u4E45\u8BB0\u5F55\uFF0C\u800C\u4E14\u9700\u8981\u7528\u6237\u7ECF\u5E38\u767B\u5F55\u3002</p><p>\u53E6\u5916\uFF0C\u5BF9\u4E8E\u4FEE\u6539\u5BC6\u7801\u540E JWT \u8FD8\u6709\u6548\u95EE\u9898\u7684\u89E3\u51B3\u8FD8\u662F\u6BD4\u8F83\u5BB9\u6613\u7684\u3002\u8BF4\u4E00\u79CD\u6211\u89C9\u5F97\u6BD4\u8F83\u597D\u7684\u65B9\u5F0F\uFF1A<strong>\u4F7F\u7528\u7528\u6237\u7684\u5BC6\u7801\u7684\u54C8\u5E0C\u503C\u5BF9 JWT \u8FDB\u884C\u7B7E\u540D\u3002\u56E0\u6B64\uFF0C\u5982\u679C\u5BC6\u7801\u66F4\u6539\uFF0C\u5219\u4EFB\u4F55\u5148\u524D\u7684\u4EE4\u724C\u5C06\u81EA\u52A8\u65E0\u6CD5\u9A8C\u8BC1\u3002</strong></p><h3 id="jwt-\u7684\u7EED\u7B7E\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#jwt-\u7684\u7EED\u7B7E\u95EE\u9898" aria-hidden="true">#</a> JWT \u7684\u7EED\u7B7E\u95EE\u9898</h3><p>JWT \u6709\u6548\u671F\u4E00\u822C\u90FD\u5EFA\u8BAE\u8BBE\u7F6E\u7684\u4E0D\u592A\u957F\uFF0C\u90A3\u4E48 JWT \u8FC7\u671F\u540E\u5982\u4F55\u8BA4\u8BC1\uFF0C\u5982\u4F55\u5B9E\u73B0\u52A8\u6001\u5237\u65B0 JWT\uFF0C\u907F\u514D\u7528\u6237\u7ECF\u5E38\u9700\u8981\u91CD\u65B0\u767B\u5F55\uFF1F</p><p>\u6211\u4EEC\u5148\u6765\u770B\u770B\u5728 Session \u8BA4\u8BC1\u4E2D\u4E00\u822C\u7684\u505A\u6CD5\uFF1A<strong>\u5047\u5982 Session \u7684\u6709\u6548\u671F 30 \u5206\u949F\uFF0C\u5982\u679C 30 \u5206\u949F\u5185\u7528\u6237\u6709\u8BBF\u95EE\uFF0C\u5C31\u628A Session \u6709\u6548\u671F\u5EF6\u957F 30 \u5206\u949F\u3002</strong></p><p>JWT \u8BA4\u8BC1\u7684\u8BDD\uFF0C\u6211\u4EEC\u5E94\u8BE5\u5982\u4F55\u89E3\u51B3\u7EED\u7B7E\u95EE\u9898\u5462\uFF1F\u67E5\u9605\u4E86\u5F88\u591A\u8D44\u6599\uFF0C\u6211\u7B80\u5355\u603B\u7ED3\u4E86\u4E0B\u9762 4 \u79CD\u65B9\u6848\uFF1A</p><p><strong>1\u3001\u7C7B\u4F3C\u4E8E Session \u8BA4\u8BC1\u4E2D\u7684\u505A\u6CD5</strong></p><p>\u8FD9\u79CD\u65B9\u6848\u6EE1\u8DB3\u4E8E\u5927\u90E8\u5206\u573A\u666F\u3002\u5047\u8BBE\u670D\u52A1\u7AEF\u7ED9\u7684 JWT \u6709\u6548\u671F\u8BBE\u7F6E\u4E3A 30 \u5206\u949F\uFF0C\u670D\u52A1\u7AEF\u6BCF\u6B21\u8FDB\u884C\u6821\u9A8C\u65F6\uFF0C\u5982\u679C\u53D1\u73B0 JWT \u7684\u6709\u6548\u671F\u9A6C\u4E0A\u5FEB\u8FC7\u671F\u4E86\uFF0C\u670D\u52A1\u7AEF\u5C31\u91CD\u65B0\u751F\u6210 JWT \u7ED9\u5BA2\u6237\u7AEF\u3002\u5BA2\u6237\u7AEF\u6BCF\u6B21\u8BF7\u6C42\u90FD\u68C0\u67E5\u65B0\u65E7 JWT\uFF0C\u5982\u679C\u4E0D\u4E00\u81F4\uFF0C\u5219\u66F4\u65B0\u672C\u5730\u7684 JWT\u3002\u8FD9\u79CD\u505A\u6CD5\u7684\u95EE\u9898\u662F\u4EC5\u4EC5\u5728\u5FEB\u8FC7\u671F\u7684\u65F6\u5019\u8BF7\u6C42\u624D\u4F1A\u66F4\u65B0 JWT ,\u5BF9\u5BA2\u6237\u7AEF\u4E0D\u662F\u5F88\u53CB\u597D\u3002</p><p><strong>2\u3001\u6BCF\u6B21\u8BF7\u6C42\u90FD\u8FD4\u56DE\u65B0 JWT</strong></p><p>\u8FD9\u79CD\u65B9\u6848\u7684\u7684\u601D\u8DEF\u5F88\u7B80\u5355\uFF0C\u4F46\u662F\uFF0C\u5F00\u9500\u4F1A\u6BD4\u8F83\u5927\uFF0C\u5C24\u5176\u662F\u5728\u670D\u52A1\u7AEF\u8981\u5B58\u50A8\u7EF4\u62A4 JWT \u7684\u60C5\u51B5\u4E0B\u3002</p><p><strong>3\u3001JWT \u6709\u6548\u671F\u8BBE\u7F6E\u5230\u534A\u591C</strong></p><p>\u8FD9\u79CD\u65B9\u6848\u662F\u4E00\u79CD\u6298\u8877\u7684\u65B9\u6848\uFF0C\u4FDD\u8BC1\u4E86\u5927\u90E8\u5206\u7528\u6237\u767D\u5929\u53EF\u4EE5\u6B63\u5E38\u767B\u5F55\uFF0C\u9002\u7528\u4E8E\u5BF9\u5B89\u5168\u6027\u8981\u6C42\u4E0D\u9AD8\u7684\u7CFB\u7EDF\u3002</p><p><strong>4\u3001\u7528\u6237\u767B\u5F55\u8FD4\u56DE\u4E24\u4E2A JWT</strong></p><p>\u7B2C\u4E00\u4E2A\u662F accessJWT \uFF0C\u5B83\u7684\u8FC7\u671F\u65F6\u95F4 JWT \u672C\u8EAB\u7684\u8FC7\u671F\u65F6\u95F4\u6BD4\u5982\u534A\u4E2A\u5C0F\u65F6\uFF0C\u53E6\u5916\u4E00\u4E2A\u662F refreshJWT \u5B83\u7684\u8FC7\u671F\u65F6\u95F4\u66F4\u957F\u4E00\u70B9\u6BD4\u5982\u4E3A 1 \u5929\u3002\u5BA2\u6237\u7AEF\u767B\u5F55\u540E\uFF0C\u5C06 accessJWT \u548C refreshJWT \u4FDD\u5B58\u5728\u672C\u5730\uFF0C\u6BCF\u6B21\u8BBF\u95EE\u5C06 accessJWT \u4F20\u7ED9\u670D\u52A1\u7AEF\u3002\u670D\u52A1\u7AEF\u6821\u9A8C accessJWT \u7684\u6709\u6548\u6027\uFF0C\u5982\u679C\u8FC7\u671F\u7684\u8BDD\uFF0C\u5C31\u5C06 refreshJWT \u4F20\u7ED9\u670D\u52A1\u7AEF\u3002\u5982\u679C\u6709\u6548\uFF0C\u670D\u52A1\u7AEF\u5C31\u751F\u6210\u65B0\u7684 accessJWT \u7ED9\u5BA2\u6237\u7AEF\u3002\u5426\u5219\uFF0C\u5BA2\u6237\u7AEF\u5C31\u91CD\u65B0\u767B\u5F55\u5373\u53EF\u3002</p><p>\u8FD9\u79CD\u65B9\u6848\u7684\u4E0D\u8DB3\u662F\uFF1A</p><ul><li>\u9700\u8981\u5BA2\u6237\u7AEF\u6765\u914D\u5408\uFF1B</li><li>\u7528\u6237\u6CE8\u9500\u7684\u65F6\u5019\u9700\u8981\u540C\u65F6\u4FDD\u8BC1\u4E24\u4E2A JWT \u90FD\u65E0\u6548\uFF1B</li><li>\u91CD\u65B0\u8BF7\u6C42\u83B7\u53D6 JWT \u7684\u8FC7\u7A0B\u4E2D\u4F1A\u6709\u77ED\u6682 JWT \u4E0D\u53EF\u7528\u7684\u60C5\u51B5\uFF08\u53EF\u4EE5\u901A\u8FC7\u5728\u5BA2\u6237\u7AEF\u8BBE\u7F6E\u5B9A\u65F6\u5668\uFF0C\u5F53 accessJWT \u5FEB\u8FC7\u671F\u7684\u65F6\u5019\uFF0C\u63D0\u524D\u53BB\u901A\u8FC7 refreshJWT \u83B7\u53D6\u65B0\u7684 accessJWT\uFF09\u3002</li></ul><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>JWT \u5176\u4E2D\u4E00\u4E2A\u5F88\u91CD\u8981\u7684\u4F18\u52BF\u662F\u65E0\u72B6\u6001\uFF0C\u4F46\u5B9E\u9645\u4E0A\uFF0C\u6211\u4EEC\u60F3\u8981\u5728\u5B9E\u9645\u9879\u76EE\u4E2D\u5408\u7406\u4F7F\u7528 JWT \u7684\u8BDD\uFF0C\u4E5F\u8FD8\u662F\u9700\u8981\u4FDD\u5B58 JWT \u4FE1\u606F\u3002</p><p>JWT \u4E5F\u4E0D\u662F\u94F6\u5F39\uFF0C\u4E5F\u6709\u5F88\u591A\u7F3A\u9677\uFF0C\u5177\u4F53\u662F\u9009\u62E9 JWT \u8FD8\u662F Session \u65B9\u6848\u8FD8\u662F\u8981\u770B\u9879\u76EE\u7684\u5177\u4F53\u9700\u6C42\u3002\u4E07\u4E07\u4E0D\u53EF\u5C2C\u5439 JWT\uFF0C\u800C\u770B\u4E0D\u8D77\u5176\u4ED6\u8EAB\u4EFD\u8BA4\u8BC1\u65B9\u6848\u3002</p>`,63),T=n("\u53E6\u5916\uFF0C\u4E0D\u7528 JWT \u76F4\u63A5\u4F7F\u7528\u666E\u901A\u7684 Token(\u968F\u673A\u751F\u6210\uFF0C\u4E0D\u5305\u542B\u5177\u4F53\u7684\u4FE1\u606F) \u7ED3\u5408 Redis \u6765\u505A\u8EAB\u4EFD\u8BA4\u8BC1\u4E5F\u662F\u53EF\u4EE5\u7684\u3002\u6211\u5728 "),W={href:"https://javaguide.cn/open-source-project/",target:"_blank",rel:"noopener noreferrer"},g=n("\u300C\u4F18\u8D28\u5F00\u6E90\u9879\u76EE\u63A8\u8350\u300D"),J=n("\u7B2C 8 \u671F\u63A8\u8350\u8FC7\u7684 "),m={href:"https://github.com/dromara/sa-JWT",target:"_blank",rel:"noopener noreferrer"},_=n("Sa-Token"),v=n(" \u8FD9\u4E2A\u9879\u76EE\u662F\u4E00\u4E2A\u6BD4\u8F83\u5B8C\u5584\u7684 \u57FA\u4E8E JWT \u7684\u8EAB\u4EFD\u8BA4\u8BC1\u89E3\u51B3\u65B9\u6848\uFF0C\u652F\u6301\u81EA\u52A8\u7EED\u7B7E\u3001\u8E22\u4EBA\u4E0B\u7EBF\u3001\u8D26\u53F7\u5C01\u7981\u3001\u540C\u7AEF\u4E92\u65A5\u767B\u5F55\u7B49\u529F\u80FD\uFF0C\u611F\u5174\u8DA3\u7684\u670B\u53CB\u53EF\u4EE5\u770B\u770B\u3002"),S=s("p",null,[s("img",{src:"https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/system-design/jwt/image-20220609170714725.png",alt:"",loading:"lazy"})],-1),b=s("h2",{id:"\u53C2\u8003",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u53C2\u8003","aria-hidden":"true"},"#"),n(" \u53C2\u8003")],-1),f=n("JWT \u8D85\u8BE6\u7EC6\u5206\u6790\uFF1A"),w={href:"https://learnku.com/articles/17883",target:"_blank",rel:"noopener noreferrer"},C=n("https://learnku.com/articles/17883"),j=n("How to log out when using JWT\uFF1A"),R={href:"https://medium.com/devgorilla/how-to-log-out-when-using-jwt-a8c7823e8a6",target:"_blank",rel:"noopener noreferrer"},x=n("https://medium.com/devgorilla/how-to-log-out-when-using-jwt-a8c7823e8a6"),y=n("CSRF protection with JSON Web JWTs\uFF1A"),q={href:"https://medium.com/@agungsantoso/csrf-protection-with-json-web-JWTs-83e0f2fcbcc",target:"_blank",rel:"noopener noreferrer"},F=n("https://medium.com/@agungsantoso/csrf-protection-with-json-web-JWTs-83e0f2fcbcc"),E=n("Invalidating JSON Web JWTs\uFF1A"),I={href:"https://stackoverflow.com/questions/21978658/invalidating-json-web-JWTs",target:"_blank",rel:"noopener noreferrer"},X=n("https://stackoverflow.com/questions/21978658/invalidating-json-web-JWTs");function O(N,B){const a=c("ExternalLinkIcon");return o(),p("div",null,[s("p",null,[r,s("a",d,[u,e(a)]),h]),k,s("p",null,[T,s("a",W,[g,e(a)]),J,s("a",m,[_,e(a)]),v]),S,b,s("ul",null,[s("li",null,[f,s("a",w,[C,e(a)])]),s("li",null,[j,s("a",R,[x,e(a)])]),s("li",null,[y,s("a",q,[F,e(a)])]),s("li",null,[E,s("a",I,[X,e(a)])])])])}var H=t(l,[["render",O],["__file","advantages&disadvantages-of-jwt.html.vue"]]);export{H as default};
