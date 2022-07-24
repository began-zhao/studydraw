<template><div><p><strong>Java 11</strong> 于 2018 年 9 月 25 日正式发布，这是很重要的一个版本！Java 11 和 2017 年 9 月份发布的 Java 9 以及 2018 年 3 月份发布的 Java 10 相比，其最大的区别就是：在长期支持(Long-Term-Support)方面，<strong>Oracle 表示会对 Java 11 提供大力支持，这一支持将会持续至 2026 年 9 月。这是据 Java 8 以后支持的首个长期版本。</strong></p>
<p><img src="https://img-blog.csdnimg.cn/20210603202746605.png" alt="" loading="lazy"></p>
<p><strong>概览（精选了一部分）</strong> ：</p>
<ul>
<li><a href="https://openjdk.java.net/jeps/321" target="_blank" rel="noopener noreferrer">JEP 321：HTTP Client 标准化<ExternalLinkIcon/></a></li>
<li><a href="https://openjdk.java.net/jeps/333" target="_blank" rel="noopener noreferrer">JEP 333：ZGC(可伸缩低延迟垃圾收集器)<ExternalLinkIcon/></a></li>
<li><a href="https://openjdk.java.net/jeps/323" target="_blank" rel="noopener noreferrer">JEP 323：Lambda 参数的局部变量语法<ExternalLinkIcon/></a></li>
<li><a href="https://openjdk.java.net/jeps/330" target="_blank" rel="noopener noreferrer">JEP 330：启动单文件源代码程序<ExternalLinkIcon/></a></li>
</ul>
<h2 id="http-client-标准化" tabindex="-1"><a class="header-anchor" href="#http-client-标准化" aria-hidden="true">#</a> HTTP Client 标准化</h2>
<p>Java 11 对 Java 9 中引入并在 Java 10 中进行了更新的 Http Client API 进行了标准化，在前两个版本中进行孵化的同时，Http Client 几乎被完全重写，并且现在完全支持异步非阻塞。</p>
<p>并且，Java 11 中，Http Client 的包名由 <code v-pre>jdk.incubator.http</code> 改为<code v-pre>java.net.http</code>，该 API 通过 <code v-pre>CompleteableFuture</code> 提供非阻塞请求和响应语义。使用起来也很简单，如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">var</span> request <span class="token operator">=</span> <span class="token class-name">HttpRequest</span><span class="token punctuation">.</span><span class="token function">newBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">uri</span><span class="token punctuation">(</span>URI<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token string">"https://javastack.cn"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">GET</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> client <span class="token operator">=</span> <span class="token class-name">HttpClient</span><span class="token punctuation">.</span><span class="token function">newHttpClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 同步</span>
<span class="token class-name">HttpResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> response <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">HttpResponse<span class="token punctuation">.</span>BodyHandlers</span><span class="token punctuation">.</span><span class="token function">ofString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 异步</span>
client<span class="token punctuation">.</span><span class="token function">sendAsync</span><span class="token punctuation">(</span>request<span class="token punctuation">,</span> <span class="token class-name">HttpResponse<span class="token punctuation">.</span>BodyHandlers</span><span class="token punctuation">.</span><span class="token function">ofString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">thenApply</span><span class="token punctuation">(</span><span class="token class-name">HttpResponse</span><span class="token operator">::</span><span class="token function">body</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">thenAccept</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="string-增强" tabindex="-1"><a class="header-anchor" href="#string-增强" aria-hidden="true">#</a> String 增强</h2>
<p>Java 11 增加了一系列的字符串处理方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//判断字符串是否为空</span>
<span class="token string">" "</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
<span class="token comment">//去除字符串首尾空格</span>
<span class="token string">" Java "</span><span class="token punctuation">.</span><span class="token function">strip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// "Java"</span>
<span class="token comment">//去除字符串首部空格</span>
<span class="token string">" Java "</span><span class="token punctuation">.</span><span class="token function">stripLeading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// "Java "</span>
<span class="token comment">//去除字符串尾部空格</span>
<span class="token string">" Java "</span><span class="token punctuation">.</span><span class="token function">stripTrailing</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// " Java"</span>
<span class="token comment">//重复字符串多少次</span>
<span class="token string">"Java"</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">// "JavaJavaJava"</span>
<span class="token comment">//返回由行终止符分隔的字符串集合。</span>
<span class="token string">"A\nB\nC"</span><span class="token punctuation">.</span><span class="token function">lines</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 3</span>
<span class="token string">"A\nB\nC"</span><span class="token punctuation">.</span><span class="token function">lines</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optional-增强" tabindex="-1"><a class="header-anchor" href="#optional-增强" aria-hidden="true">#</a> Optional 增强</h2>
<p>新增了<code v-pre>empty()</code>方法来判断指定的 <code v-pre>Optional</code> 对象是否为空。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">var</span> op <span class="token operator">=</span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>op<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//判断指定的 Optional 对象是否为空</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="zgc-可伸缩低延迟垃圾收集器" tabindex="-1"><a class="header-anchor" href="#zgc-可伸缩低延迟垃圾收集器" aria-hidden="true">#</a> ZGC(可伸缩低延迟垃圾收集器)</h2>
<p><strong>ZGC 即 Z Garbage Collector</strong>，是一个可伸缩的、低延迟的垃圾收集器。</p>
<p>ZGC 主要为了满足如下目标进行设计：</p>
<ul>
<li>GC 停顿时间不超过 10ms</li>
<li>即能处理几百 MB 的小堆，也能处理几个 TB 的大堆</li>
<li>应用吞吐能力不会下降超过 15%（与 G1 回收算法相比）</li>
<li>方便在此基础上引入新的 GC 特性和利用 colored 针以及 Load barriers 优化奠定基础</li>
<li>当前只支持 Linux/x64 位平台</li>
</ul>
<p>ZGC 目前 <strong>处在实验阶段</strong>，只支持 Linux/x64 平台。</p>
<p>与 CMS 中的 ParNew 和 G1 类似，ZGC 也采用标记-复制算法，不过 ZGC 对该算法做了重大改进。</p>
<p>在 ZGC 中出现 Stop The World 的情况会更少！</p>
<p>详情可以看 ： <a href="https://tech.meituan.com/2020/08/06/new-zgc-practice-in-meituan.html" target="_blank" rel="noopener noreferrer">《新一代垃圾回收器 ZGC 的探索与实践》<ExternalLinkIcon/></a></p>
<h2 id="lambda-参数的局部变量语法" tabindex="-1"><a class="header-anchor" href="#lambda-参数的局部变量语法" aria-hidden="true">#</a> Lambda 参数的局部变量语法</h2>
<p>从 Java 10 开始，便引入了局部变量类型推断这一关键特性。类型推断允许使用关键字 var 作为局部变量的类型而不是实际类型，编译器根据分配给变量的值推断出类型。</p>
<p>Java 10 中对 var 关键字存在几个限制</p>
<ul>
<li>只能用于局部变量上</li>
<li>声明时必须初始化</li>
<li>不能用作方法参数</li>
<li>不能在 Lambda 表达式中使用</li>
</ul>
<p>Java11 开始允许开发者在 Lambda 表达式中使用 var 进行参数声明。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 下面两者是等价的</span>
<span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> consumer <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> consumer <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span> i<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动单文件源代码程序" tabindex="-1"><a class="header-anchor" href="#启动单文件源代码程序" aria-hidden="true">#</a> 启动单文件源代码程序</h2>
<p>这意味着我们可以运行单一文件的 Java 源代码。此功能允许使用 Java 解释器直接执行 Java 源代码。源代码在内存中编译，然后由解释器执行，不需要在磁盘上生成 <code v-pre>.class</code> 文件了。唯一的约束在于所有相关的类必须定义在同一个 Java 文件中。</p>
<p>对于 Java 初学者并希望尝试简单程序的人特别有用，并且能和 jshell 一起使用。一定能程度上增强了使用 Java 来写脚本程序的能力。</p>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<ul>
<li><strong>新的垃圾回收器 Epsilon</strong> ：一个完全消极的 GC 实现，分配有限的内存资源，最大限度的降低内存占用和内存吞吐延迟时间</li>
<li><strong>低开销的 Heap Profiling</strong> ：Java 11 中提供一种低开销的 Java 堆分配采样方法，能够得到堆分配的 Java 对象信息，并且能够通过 JVMTI 访问堆信息</li>
<li><strong>TLS1.3 协议</strong> ：Java 11 中包含了传输层安全性（TLS）1.3 规范（RFC 8446）的实现，替换了之前版本中包含的 TLS，包括 TLS 1.2，同时还改进了其他 TLS 功能，例如 OCSP 装订扩展（RFC 6066，RFC 6961），以及会话散列和扩展主密钥扩展（RFC 7627），在安全性和性能方面也做了很多提升</li>
<li><strong>飞行记录器(Java Flight Recorder)</strong> ：飞行记录器之前是商业版 JDK 的一项分析工具，但在 Java 11 中，其代码被包含到公开代码库中，这样所有人都能使用该功能了。</li>
<li>......</li>
</ul>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>JDK 11 Release Notes：<a href="https://www.oracle.com/java/technologies/javase/11-relnote-issues.html" target="_blank" rel="noopener noreferrer">https://www.oracle.com/java/technologies/javase/11-relnote-issues.html<ExternalLinkIcon/></a></li>
<li>Java 11 – Features and Comparison： <a href="https://www.geeksforgeeks.org/java-11-features-and-comparison/" target="_blank" rel="noopener noreferrer">https://www.geeksforgeeks.org/java-11-features-and-comparison/<ExternalLinkIcon/></a></li>
</ul>
</div></template>
