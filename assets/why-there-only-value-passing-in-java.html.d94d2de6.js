import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c as t,b as n,a as e,e as o,d as c,r as l}from"./app.b9e78213.js";var i="/assets/java-value-passing-01.13573be4.png",u="/assets/java-value-passing-02.56cd0601.png",r="/assets/java-value-passing-03.7d64c8e9.png";const d={},k=o(`<p>\u5F00\u59CB\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u6765\u641E\u61C2\u4E0B\u9762\u8FD9\u4E24\u4E2A\u6982\u5FF5\uFF1A</p><ul><li>\u5F62\u53C2&amp;\u5B9E\u53C2</li><li>\u503C\u4F20\u9012&amp;\u5F15\u7528\u4F20\u9012</li></ul><h2 id="\u5F62\u53C2-\u5B9E\u53C2" tabindex="-1"><a class="header-anchor" href="#\u5F62\u53C2-\u5B9E\u53C2" aria-hidden="true">#</a> \u5F62\u53C2&amp;\u5B9E\u53C2</h2><p>\u65B9\u6CD5\u7684\u5B9A\u4E49\u53EF\u80FD\u4F1A\u7528\u5230 <strong>\u53C2\u6570</strong>\uFF08\u6709\u53C2\u7684\u65B9\u6CD5\uFF09\uFF0C\u53C2\u6570\u5728\u7A0B\u5E8F\u8BED\u8A00\u4E2D\u5206\u4E3A\uFF1A</p><ul><li><strong>\u5B9E\u53C2\uFF08\u5B9E\u9645\u53C2\u6570\uFF09</strong> \uFF1A\u7528\u4E8E\u4F20\u9012\u7ED9\u51FD\u6570/\u65B9\u6CD5\u7684\u53C2\u6570\uFF0C\u5FC5\u987B\u6709\u786E\u5B9A\u7684\u503C\u3002</li><li><strong>\u5F62\u53C2\uFF08\u5F62\u5F0F\u53C2\u6570\uFF09</strong> \uFF1A\u7528\u4E8E\u5B9A\u4E49\u51FD\u6570/\u65B9\u6CD5\uFF0C\u63A5\u6536\u5B9E\u53C2\uFF0C\u4E0D\u9700\u8981\u6709\u786E\u5B9A\u7684\u503C\u3002</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">String</span> hello <span class="token operator">=</span> <span class="token string">&quot;Hello!&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// hello \u4E3A\u5B9E\u53C2</span>
<span class="token function">sayHello</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// str \u4E3A\u5F62\u53C2</span>
<span class="token keyword">void</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u503C\u4F20\u9012-\u5F15\u7528\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u503C\u4F20\u9012-\u5F15\u7528\u4F20\u9012" aria-hidden="true">#</a> \u503C\u4F20\u9012&amp;\u5F15\u7528\u4F20\u9012</h2><p>\u7A0B\u5E8F\u8BBE\u8BA1\u8BED\u8A00\u5C06\u5B9E\u53C2\u4F20\u9012\u7ED9\u65B9\u6CD5\uFF08\u6216\u51FD\u6570\uFF09\u7684\u65B9\u5F0F\u5206\u4E3A\u4E24\u79CD\uFF1A</p><ul><li><strong>\u503C\u4F20\u9012</strong> \uFF1A\u65B9\u6CD5\u63A5\u6536\u7684\u662F\u5B9E\u53C2\u503C\u7684\u62F7\u8D1D\uFF0C\u4F1A\u521B\u5EFA\u526F\u672C\u3002</li><li><strong>\u5F15\u7528\u4F20\u9012</strong> \uFF1A\u65B9\u6CD5\u63A5\u6536\u7684\u76F4\u63A5\u662F\u5B9E\u53C2\u6240\u5F15\u7528\u7684\u5BF9\u8C61\u5728\u5806\u4E2D\u7684\u5730\u5740\uFF0C\u4E0D\u4F1A\u521B\u5EFA\u526F\u672C\uFF0C\u5BF9\u5F62\u53C2\u7684\u4FEE\u6539\u5C06\u5F71\u54CD\u5230\u5B9E\u53C2\u3002</li></ul><p>\u5F88\u591A\u7A0B\u5E8F\u8BBE\u8BA1\u8BED\u8A00\uFF08\u6BD4\u5982 C++\u3001 Pascal )\u63D0\u4F9B\u4E86\u4E24\u79CD\u53C2\u6570\u4F20\u9012\u7684\u65B9\u5F0F\uFF0C\u4E0D\u8FC7\uFF0C\u5728 Java \u4E2D\u53EA\u6709\u503C\u4F20\u9012\u3002</p><h2 id="\u4E3A\u4EC0\u4E48-java-\u53EA\u6709\u503C\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u4E3A\u4EC0\u4E48-java-\u53EA\u6709\u503C\u4F20\u9012" aria-hidden="true">#</a> \u4E3A\u4EC0\u4E48 Java \u53EA\u6709\u503C\u4F20\u9012\uFF1F</h2><p><strong>\u4E3A\u4EC0\u4E48\u8BF4 Java \u53EA\u6709\u503C\u4F20\u9012\u5462\uFF1F</strong> \u4E0D\u9700\u8981\u592A\u591A\u5E9F\u8BDD\uFF0C\u6211\u901A\u8FC7 3 \u4E2A\u4F8B\u5B50\u6765\u7ED9\u5927\u5BB6\u8BC1\u660E\u3002</p><h3 id="\u6848\u4F8B1-\u4F20\u9012\u57FA\u672C\u7C7B\u578B\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B1-\u4F20\u9012\u57FA\u672C\u7C7B\u578B\u53C2\u6570" aria-hidden="true">#</a> \u6848\u4F8B1\uFF1A\u4F20\u9012\u57FA\u672C\u7C7B\u578B\u53C2\u6570</h3><p>\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num1 = &quot;</span> <span class="token operator">+</span> num1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;num2 = &quot;</span> <span class="token operator">+</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp <span class="token operator">=</span> a<span class="token punctuation">;</span>
    a <span class="token operator">=</span> b<span class="token punctuation">;</span>
    b <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;a = &quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;b = &quot;</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>a = 20
b = 10
num1 = 10
num2 = 20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u6790\uFF1A</p><p>\u5728 <code>swap()</code> \u65B9\u6CD5\u4E2D\uFF0C<code>a</code>\u3001<code>b</code> \u7684\u503C\u8FDB\u884C\u4EA4\u6362\uFF0C\u5E76\u4E0D\u4F1A\u5F71\u54CD\u5230 <code>num1</code>\u3001<code>num2</code>\u3002\u56E0\u4E3A\uFF0C<code>a</code>\u3001<code>b</code> \u7684\u503C\uFF0C\u53EA\u662F\u4ECE <code>num1</code>\u3001<code>num2</code> \u7684\u590D\u5236\u8FC7\u6765\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0Ca\u3001b \u76F8\u5F53\u4E8E <code>num1</code>\u3001<code>num2</code> \u7684\u526F\u672C\uFF0C\u526F\u672C\u7684\u5185\u5BB9\u65E0\u8BBA\u600E\u4E48\u4FEE\u6539\uFF0C\u90FD\u4E0D\u4F1A\u5F71\u54CD\u5230\u539F\u4EF6\u672C\u8EAB\u3002</p><p><img src="`+i+`" alt="\u57FA\u672C\u6570\u636E\u7C7B\u578B\u53C2\u6570" loading="lazy"></p><p>\u901A\u8FC7\u4E0A\u9762\u4F8B\u5B50\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u77E5\u9053\u4E86\u4E00\u4E2A\u65B9\u6CD5\u4E0D\u80FD\u4FEE\u6539\u4E00\u4E2A\u57FA\u672C\u6570\u636E\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u800C\u5BF9\u8C61\u5F15\u7528\u4F5C\u4E3A\u53C2\u6570\u5C31\u4E0D\u4E00\u6837\uFF0C\u8BF7\u770B\u6848\u4F8B2\u3002</p><h3 id="\u6848\u4F8B2-\u4F20\u9012\u5F15\u7528\u7C7B\u578B\u53C2\u65701" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B2-\u4F20\u9012\u5F15\u7528\u7C7B\u578B\u53C2\u65701" aria-hidden="true">#</a> \u6848\u4F8B2\uFF1A\u4F20\u9012\u5F15\u7528\u7C7B\u578B\u53C2\u65701</h3><p>\u4EE3\u7801\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">change</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u5C06\u6570\u7EC4\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\u53D8\u4E3A0</span>
      array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1
0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u6790\uFF1A</p><p><img src="`+u+`" alt="\u5F15\u7528\u6570\u636E\u7C7B\u578B\u53C2\u65701" loading="lazy"></p><p>\u770B\u4E86\u8FD9\u4E2A\u6848\u4F8B\u5F88\u591A\u4EBA\u80AF\u5B9A\u89C9\u5F97 Java \u5BF9\u5F15\u7528\u7C7B\u578B\u7684\u53C2\u6570\u91C7\u7528\u7684\u662F\u5F15\u7528\u4F20\u9012\u3002</p><p>\u5B9E\u9645\u4E0A\uFF0C\u5E76\u4E0D\u662F\u7684\uFF0C\u8FD9\u91CC\u4F20\u9012\u7684\u8FD8\u662F\u503C\uFF0C\u4E0D\u8FC7\uFF0C\u8FD9\u4E2A\u503C\u662F\u5B9E\u53C2\u7684\u5730\u5740\u7F62\u4E86\uFF01</p><p>\u4E5F\u5C31\u662F\u8BF4 <code>change</code> \u65B9\u6CD5\u7684\u53C2\u6570\u62F7\u8D1D\u7684\u662F <code>arr</code> \uFF08\u5B9E\u53C2\uFF09\u7684\u5730\u5740\uFF0C\u56E0\u6B64\uFF0C\u5B83\u548C <code>arr</code> \u6307\u5411\u7684\u662F\u540C\u4E00\u4E2A\u6570\u7EC4\u5BF9\u8C61\u3002\u8FD9\u4E5F\u5C31\u8BF4\u660E\u4E86\u4E3A\u4EC0\u4E48\u65B9\u6CD5\u5185\u90E8\u5BF9\u5F62\u53C2\u7684\u4FEE\u6539\u4F1A\u5F71\u54CD\u5230\u5B9E\u53C2\u3002</p><p>\u4E3A\u4E86\u66F4\u5F3A\u6709\u529B\u5730\u53CD\u9A73 Java \u5BF9\u5F15\u7528\u7C7B\u578B\u7684\u53C2\u6570\u91C7\u7528\u7684\u4E0D\u662F\u5F15\u7528\u4F20\u9012\uFF0C\u6211\u4EEC\u518D\u6765\u770B\u4E0B\u9762\u8FD9\u4E2A\u6848\u4F8B\uFF01</p><h3 id="\u6848\u4F8B3-\u4F20\u9012\u5F15\u7528\u7C7B\u578B\u53C2\u65702" tabindex="-1"><a class="header-anchor" href="#\u6848\u4F8B3-\u4F20\u9012\u5F15\u7528\u7C7B\u578B\u53C2\u65702" aria-hidden="true">#</a> \u6848\u4F8B3 \uFF1A\u4F20\u9012\u5F15\u7528\u7C7B\u578B\u53C2\u65702</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
   <span class="token comment">// \u7701\u7565\u6784\u9020\u51FD\u6570\u3001Getter&amp;Setter\u65B9\u6CD5</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Person</span> xiaoZhang <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u5F20&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Person</span> xiaoLi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;\u5C0F\u674E&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>xiaoZhang<span class="token punctuation">,</span> xiaoLi<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;xiaoZhang:&quot;</span> <span class="token operator">+</span> xiaoZhang<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;xiaoLi:&quot;</span> <span class="token operator">+</span> xiaoLi<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token class-name">Person</span> person1<span class="token punctuation">,</span> <span class="token class-name">Person</span> person2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Person</span> temp <span class="token operator">=</span> person1<span class="token punctuation">;</span>
    person1 <span class="token operator">=</span> person2<span class="token punctuation">;</span>
    person2 <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;person1:&quot;</span> <span class="token operator">+</span> person1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;person2:&quot;</span> <span class="token operator">+</span> person2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>person1:\u5C0F\u674E
person2:\u5C0F\u5F20
xiaoZhang:\u5C0F\u5F20
xiaoLi:\u5C0F\u674E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u6790\uFF1A</p><p>\u600E\u4E48\u56DE\u4E8B\uFF1F\uFF1F\uFF1F\u4E24\u4E2A\u5F15\u7528\u7C7B\u578B\u7684\u5F62\u53C2\u4E92\u6362\u5E76\u6CA1\u6709\u5F71\u54CD\u5B9E\u53C2\u554A\uFF01</p><p><code>swap</code> \u65B9\u6CD5\u7684\u53C2\u6570 <code>person1</code> \u548C <code>person2</code> \u53EA\u662F\u62F7\u8D1D\u7684\u5B9E\u53C2 <code>xiaoZhang</code> \u548C <code>xiaoLi</code> \u7684\u5730\u5740\u3002\u56E0\u6B64\uFF0C <code>person1</code> \u548C <code>person2</code> \u7684\u4E92\u6362\u53EA\u662F\u62F7\u8D1D\u7684\u4E24\u4E2A\u5730\u5740\u7684\u4E92\u6362\u7F62\u4E86\uFF0C\u5E76\u4E0D\u4F1A\u5F71\u54CD\u5230\u5B9E\u53C2 <code>xiaoZhang</code> \u548C <code>xiaoLi</code> \u3002</p><p><img src="`+r+'" alt="\u5F15\u7528\u6570\u636E\u7C7B\u578B\u53C2\u65702" loading="lazy"></p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>Java \u4E2D\u5C06\u5B9E\u53C2\u4F20\u9012\u7ED9\u65B9\u6CD5\uFF08\u6216\u51FD\u6570\uFF09\u7684\u65B9\u5F0F\u662F <strong>\u503C\u4F20\u9012</strong> \uFF1A</p><ul><li>\u5982\u679C\u53C2\u6570\u662F\u57FA\u672C\u7C7B\u578B\u7684\u8BDD\uFF0C\u5F88\u7B80\u5355\uFF0C\u4F20\u9012\u7684\u5C31\u662F\u57FA\u672C\u7C7B\u578B\u7684\u5B57\u9762\u91CF\u503C\u7684\u62F7\u8D1D\uFF0C\u4F1A\u521B\u5EFA\u526F\u672C\u3002</li><li>\u5982\u679C\u53C2\u6570\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u4F20\u9012\u7684\u5C31\u662F\u5B9E\u53C2\u6240\u5F15\u7528\u7684\u5BF9\u8C61\u5728\u5806\u4E2D\u5730\u5740\u503C\u7684\u62F7\u8D1D\uFF0C\u540C\u6837\u4E5F\u4F1A\u521B\u5EFA\u526F\u672C\u3002</li></ul><h2 id="\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a> \u53C2\u8003</h2>',44),v=n("li",null,"\u300AJava \u6838\u5FC3\u6280\u672F\u5377 \u2160\u300B\u57FA\u7840\u77E5\u8BC6\u7B2C\u5341\u7248\u7B2C\u56DB\u7AE0 4.5 \u5C0F\u8282",-1),m={href:"https://www.zhihu.com/question/31203609/answer/576030121",target:"_blank",rel:"noopener noreferrer"},b=c("Java \u5230\u5E95\u662F\u503C\u4F20\u9012\u8FD8\u662F\u5F15\u7528\u4F20\u9012\uFF1F - Hollis\u7684\u56DE\u7B54 - \u77E5\u4E4E");function g(h,y){const s=l("ExternalLinkIcon");return p(),t("div",null,[k,n("ul",null,[v,n("li",null,[n("a",m,[b,e(s)])])])])}var x=a(d,[["render",g],["__file","why-there-only-value-passing-in-java.html.vue"]]);export{x as default};
