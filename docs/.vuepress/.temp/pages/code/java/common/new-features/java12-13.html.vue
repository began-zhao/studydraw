<template><div><h2 id="java12" tabindex="-1"><a class="header-anchor" href="#java12" aria-hidden="true">#</a> Java12</h2>
<h3 id="string-增强" tabindex="-1"><a class="header-anchor" href="#string-增强" aria-hidden="true">#</a> String 增强</h3>
<p>Java 11 增加了两个的字符串处理方法，如以下所示。</p>
<p><code v-pre>indent()</code> 方法可以实现字符串缩进。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> text <span class="token operator">=</span> <span class="token string">"Java"</span><span class="token punctuation">;</span>
<span class="token comment">// 缩进 4 格</span>
text <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">indent</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
text <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">indent</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>     Java
Java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>transform()</code> 方法可以用来转变指定字符串。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> result <span class="token operator">=</span> <span class="token string">"foo"</span><span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span>input <span class="token operator">-></span> input <span class="token operator">+</span> <span class="token string">" bar"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// foo bar</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="files-增强-文件比较" tabindex="-1"><a class="header-anchor" href="#files-增强-文件比较" aria-hidden="true">#</a> Files 增强（文件比较）</h3>
<p>Java 12 添加了以下方法来比较两个文件：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">mismatch</span><span class="token punctuation">(</span><span class="token class-name">Path</span> path<span class="token punctuation">,</span> <span class="token class-name">Path</span> path2<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>mismatch()</code> 方法用于比较两个文件，并返回第一个不匹配字符的位置，如果文件相同则返回 -1L。</p>
<p>代码示例（两个文件内容相同的情况）：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Path</span> filePath1 <span class="token operator">=</span> <span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">createTempFile</span><span class="token punctuation">(</span><span class="token string">"file1"</span><span class="token punctuation">,</span> <span class="token string">".txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Path</span> filePath2 <span class="token operator">=</span> <span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">createTempFile</span><span class="token punctuation">(</span><span class="token string">"file2"</span><span class="token punctuation">,</span> <span class="token string">".txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">writeString</span><span class="token punctuation">(</span>filePath1<span class="token punctuation">,</span> <span class="token string">"Java 12 Article"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">writeString</span><span class="token punctuation">(</span>filePath2<span class="token punctuation">,</span> <span class="token string">"Java 12 Article"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">long</span> mismatch <span class="token operator">=</span> <span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">mismatch</span><span class="token punctuation">(</span>filePath1<span class="token punctuation">,</span> filePath2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> mismatch<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码示例（两个文件内容不相同的情况）：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Path</span> filePath3 <span class="token operator">=</span> <span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">createTempFile</span><span class="token punctuation">(</span><span class="token string">"file3"</span><span class="token punctuation">,</span> <span class="token string">".txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Path</span> filePath4 <span class="token operator">=</span> <span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">createTempFile</span><span class="token punctuation">(</span><span class="token string">"file4"</span><span class="token punctuation">,</span> <span class="token string">".txt"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">writeString</span><span class="token punctuation">(</span>filePath3<span class="token punctuation">,</span> <span class="token string">"Java 12 Article"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">writeString</span><span class="token punctuation">(</span>filePath4<span class="token punctuation">,</span> <span class="token string">"Java 12 Tutorial"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">long</span> mismatch <span class="token operator">=</span> <span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">mismatch</span><span class="token punctuation">(</span>filePath3<span class="token punctuation">,</span> filePath4<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span> mismatch<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数字格式化工具类" tabindex="-1"><a class="header-anchor" href="#数字格式化工具类" aria-hidden="true">#</a> 数字格式化工具类</h3>
<p><code v-pre>NumberFormat</code> 新增了对复杂的数字进行格式化的支持</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">NumberFormat</span> fmt <span class="token operator">=</span> <span class="token class-name">NumberFormat</span><span class="token punctuation">.</span><span class="token function">getCompactNumberInstance</span><span class="token punctuation">(</span><span class="token class-name">Locale</span><span class="token punctuation">.</span>US<span class="token punctuation">,</span> <span class="token class-name">NumberFormat<span class="token punctuation">.</span>Style</span><span class="token punctuation">.</span>SHORT<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> result <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1K
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="shenandoah-gc" tabindex="-1"><a class="header-anchor" href="#shenandoah-gc" aria-hidden="true">#</a> Shenandoah GC</h3>
<p>Redhat 主导开发的 Pauseless GC 实现，主要目标是 99.9% 的暂停小于 10ms，暂停与堆大小无关等</p>
<p>和 Java11 开源的 ZGC 相比（需要升级到 JDK11 才能使用），Shenandoah GC 有稳定的 JDK8u 版本，在 Java8 占据主要市场份额的今天有更大的可落地性。</p>
<h3 id="g1-收集器优化" tabindex="-1"><a class="header-anchor" href="#g1-收集器优化" aria-hidden="true">#</a> G1 收集器优化</h3>
<p>Java12 为默认的垃圾收集器 G1 带来了两项更新:</p>
<ul>
<li><strong>可中止的混合收集集合</strong> ：JEP344 的实现，为了达到用户提供的停顿时间目标，JEP 344 通过把要被回收的区域集（混合收集集合）拆分为强制和可选部分，使 G1 垃圾回收器能中止垃圾回收过程。 G1 可以中止可选部分的回收以达到停顿时间目标</li>
<li><strong>及时返回未使用的已分配内存</strong> ：JEP346 的实现，增强 G1 GC，以便在空闲时自动将 Java 堆内存返回给操作系统</li>
</ul>
<h3 id="预览新特性" tabindex="-1"><a class="header-anchor" href="#预览新特性" aria-hidden="true">#</a> 预览新特性</h3>
<p>作为预览特性加入，需要在<code v-pre>javac</code>编译和<code v-pre>java</code>运行时增加参数<code v-pre>--enable-preview</code> 。</p>
<h4 id="增强-switch" tabindex="-1"><a class="header-anchor" href="#增强-switch" aria-hidden="true">#</a> 增强 Switch</h4>
<p>传统的 <code v-pre>switch</code> 语法存在容易漏写 <code v-pre>break</code> 的问题，而且从代码整洁性层面来看，多个 break 本质也是一种重复</p>
<p>Java12 增强了 <code v-pre>swtich</code> 表达式，使用类似 lambda 语法条件匹配成功后的执行块，不需要多写 break 。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">switch</span> <span class="token punctuation">(</span>day<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> MONDAY<span class="token punctuation">,</span> FRIDAY<span class="token punctuation">,</span> SUNDAY <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> TUESDAY                <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> THURSDAY<span class="token punctuation">,</span> SATURDAY     <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> WEDNESDAY              <span class="token operator">-></span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="instanceof-模式匹配" tabindex="-1"><a class="header-anchor" href="#instanceof-模式匹配" aria-hidden="true">#</a> instanceof 模式匹配</h4>
<p><code v-pre>instanceof</code> 主要在类型强转前探测对象的具体类型。</p>
<p>之前的版本中，我们需要显示地对对象进行类型转换。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Object</span> obj <span class="token operator">=</span> <span class="token string">"我是字符串"</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token class-name">String</span> str <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span> obj<span class="token punctuation">;</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新版的 <code v-pre>instanceof</code> 可以在判断是否属于具体的类型同时完成转换。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Object</span> obj <span class="token operator">=</span> <span class="token string">"我是字符串"</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>obj <span class="token keyword">instanceof</span> <span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java13" tabindex="-1"><a class="header-anchor" href="#java13" aria-hidden="true">#</a> Java13</h2>
<h3 id="增强-zgc-释放未使用内存" tabindex="-1"><a class="header-anchor" href="#增强-zgc-释放未使用内存" aria-hidden="true">#</a> 增强 ZGC(释放未使用内存)</h3>
<p>在 Java 11 中是实验性的引入的 ZGC 在实际的使用中存在未能主动将未使用的内存释放给操作系统的问题。</p>
<p>ZGC 堆由一组称为 ZPages 的堆区域组成。在 GC 周期中清空 ZPages 区域时，它们将被释放并返回到页面缓存 <strong>ZPageCache</strong> 中，此缓存中的 ZPages 按最近最少使用（LRU）的顺序，并按照大小进行组织。</p>
<p>在 Java 13 中，ZGC 将向操作系统返回被标识为长时间未使用的页面，这样它们将可以被其他进程重用。</p>
<h3 id="socketapi-重构" tabindex="-1"><a class="header-anchor" href="#socketapi-重构" aria-hidden="true">#</a> SocketAPI 重构</h3>
<p>Java Socket API 终于迎来了重大更新！</p>
<p>Java 13 将 Socket API 的底层进行了重写， <code v-pre>NioSocketImpl</code> 是对 <code v-pre>PlainSocketImpl</code> 的直接替代，它使用 <code v-pre>java.util.concurrent</code> 包下的锁而不是同步方法。如果要使用旧实现，请使用 <code v-pre>-Djdk.net.usePlainSocketImpl=true</code>。</p>
<p>并且，在 Java 13 中是默认使用新的 Socket 实现。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">NioSocketImpl</span> <span class="token keyword">extends</span> <span class="token class-name">SocketImpl</span> <span class="token keyword">implements</span> <span class="token class-name">PlatformSocketImpl</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="filesystems" tabindex="-1"><a class="header-anchor" href="#filesystems" aria-hidden="true">#</a> FileSystems</h3>
<p><code v-pre>FileSystems</code> 类中添加了以下三种新方法，以便更容易地使用将文件内容视为文件系统的文件系统提供程序：</p>
<ul>
<li><code v-pre>newFileSystem(Path)</code></li>
<li><code v-pre>newFileSystem(Path, Map&lt;String, ?&gt;)</code></li>
<li><code v-pre>newFileSystem(Path, Map&lt;String, ?&gt;, ClassLoader)</code></li>
</ul>
<h3 id="动态-cds-存档" tabindex="-1"><a class="header-anchor" href="#动态-cds-存档" aria-hidden="true">#</a> 动态 CDS 存档</h3>
<p>Java 13 中对 Java 10 中引入的应用程序类数据共享(AppCDS)进行了进一步的简化、改进和扩展，即：<strong>允许在 Java 应用程序执行结束时动态进行类归档</strong>，具体能够被归档的类包括所有已被加载，但不属于默认基层 CDS 的应用程序类和引用类库中的类。</p>
<p>这提高了应用程序类数据共享（<a href="https://openjdk.java.net/jeps/310" target="_blank" rel="noopener noreferrer">AppCDS<ExternalLinkIcon/></a>）的可用性。无需用户进行试运行来为每个应用程序创建类列表。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ java -XX:ArchiveClassesAtExit<span class="token operator">=</span>my_app_cds.jsa -cp my_app.jar
$ java -XX:SharedArchiveFile<span class="token operator">=</span>my_app_cds.jsa -cp my_app.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="预览新特性-1" tabindex="-1"><a class="header-anchor" href="#预览新特性-1" aria-hidden="true">#</a> 预览新特性</h3>
<h4 id="文本块" tabindex="-1"><a class="header-anchor" href="#文本块" aria-hidden="true">#</a> 文本块</h4>
<p>解决 Java 定义多行字符串时只能通过换行转义或者换行连接符来变通支持的问题，引入<strong>三重双引号</strong>来定义多行文本。</p>
<p>Java 13 支持两个 <code v-pre>&quot;&quot;&quot;</code> 符号中间的任何内容都会被解释为字符串的一部分，包括换行符。</p>
<p>未支持文本块之前的 HTML 写法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> json <span class="token operator">=</span><span class="token string">"{\n"</span> <span class="token operator">+</span>
              <span class="token string">"   \"name\":\"mkyong\",\n"</span> <span class="token operator">+</span>
              <span class="token string">"   \"age\":38\n"</span> <span class="token operator">+</span>
              <span class="token string">"}\n"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>支持文本块之后的 HTML 写法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token class-name">String</span> json <span class="token operator">=</span> <span class="token triple-quoted-string string">"""
                {
                    "name":"mkyong",
                    "age":38
                }
                """</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>未支持文本块之前的 SQL 写法：</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>String query <span class="token operator">=</span> <span class="token string">"SELECT `EMP_ID`, `LAST_NAME` FROM `EMPLOYEE_TB`\n"</span> <span class="token operator">+</span>
               <span class="token string">"WHERE `CITY` = 'INDIANAPOLIS'\n"</span> <span class="token operator">+</span>
               <span class="token string">"ORDER BY `EMP_ID`, `LAST_NAME`;\n"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>支持文本块之后的 SQL 写法：</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>String query <span class="token operator">=</span> <span class="token string">"""
               SELECT `EMP_ID`, `LAST_NAME` FROM `EMPLOYEE_TB`
               WHERE `CITY` = 'INDIANAPOLIS'
               ORDER BY `EMP_ID`, `LAST_NAME`;
               """</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，<code v-pre>String</code> 类新增加了 3 个新的方法来操作文本块：</p>
<ul>
<li><code v-pre>formatted(Object... args)</code> ：它类似于 <code v-pre>String</code> 的<code v-pre>format()</code>方法。添加它是为了支持文本块的格式设置。</li>
<li><code v-pre>stripIndent()</code> ：用于去除文本块中每一行开头和结尾的空格。</li>
<li><code v-pre>translateEscapes()</code> ：转义序列如 <em>“\\t”</em> 转换为 <em>“\t”</em></li>
</ul>
<p>由于文本块是一项预览功能，可以在未来版本中删除，因此这些新方法被标记为弃用。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Deprecated</span><span class="token punctuation">(</span>forRemoval<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">,</span> since<span class="token operator">=</span><span class="token string">"13"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">stripIndent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Deprecated</span><span class="token punctuation">(</span>forRemoval<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">,</span> since<span class="token operator">=</span><span class="token string">"13"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">formatted</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Deprecated</span><span class="token punctuation">(</span>forRemoval<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">,</span> since<span class="token operator">=</span><span class="token string">"13"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">translateEscapes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="增强-switch-引入-yield-关键字到-switch-中" tabindex="-1"><a class="header-anchor" href="#增强-switch-引入-yield-关键字到-switch-中" aria-hidden="true">#</a> 增强 Switch(引入 yield 关键字到 Switch 中)</h4>
<p><code v-pre>Switch</code> 表达式中就多了一个关键字用于跳出 <code v-pre>Switch</code> 块的关键字 <code v-pre>yield</code>，主要用于返回一个值</p>
<p><code v-pre>yield</code>和 <code v-pre>return</code> 的区别在于：<code v-pre>return</code> 会直接跳出当前循环或者方法，而 <code v-pre>yield</code> 只会跳出当前 <code v-pre>Switch</code> 块，同时在使用 <code v-pre>yield</code> 时，需要有 <code v-pre>default</code> 条件</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">descLanguage</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">switch</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">"Java"</span><span class="token operator">:</span> <span class="token keyword">yield</span> <span class="token string">"object-oriented, platform independent and secured"</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">"Ruby"</span><span class="token operator">:</span> <span class="token keyword">yield</span> <span class="token string">"a programmer's best friend"</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span> <span class="token keyword">yield</span> name <span class="token operator">+</span><span class="token string">" is a good language"</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>JDK Project Overview ： &lt;<a href="https://openjdk.java.net/projects/jdk/" target="_blank" rel="noopener noreferrer">https://openjdk.java.net/projects/jdk/<ExternalLinkIcon/></a> &gt;</li>
<li>Oracle Java12 ReleaseNote ：<a href="https://www.oracle.com/java/technologies/javase/12all-relnotes.htm" target="_blank" rel="noopener noreferrer">https://www.oracle.com/java/technologies/javase/12all-relnotes.htm<ExternalLinkIcon/></a></li>
<li>What is new in Java 12：<a href="https://mkyong.com/java/what-is-new-in-java-12/" target="_blank" rel="noopener noreferrer">https://mkyong.com/java/what-is-new-in-java-12/<ExternalLinkIcon/></a></li>
<li>Oracle Java13 ReleaseNote <a href="https://www.oracle.com/technetwork/java/javase/13all-relnotes-5461743.html#NewFeature" target="_blank" rel="noopener noreferrer">https://www.oracle.com/technetwork/java/javase/13all-relnotes-5461743.html#NewFeature<ExternalLinkIcon/></a></li>
<li>New Java13 Features <a href="https://www.baeldung.com/java-13-new-features" target="_blank" rel="noopener noreferrer">https://www.baeldung.com/java-13-new-features<ExternalLinkIcon/></a></li>
<li>Java13 新特性概述 <a href="https://www.ibm.com/developerworks/cn/java/the-new-features-of-Java-13/index.html" target="_blank" rel="noopener noreferrer">https://www.ibm.com/developerworks/cn/java/the-new-features-of-Java-13/index.html<ExternalLinkIcon/></a></li>
</ul>
</div></template>
