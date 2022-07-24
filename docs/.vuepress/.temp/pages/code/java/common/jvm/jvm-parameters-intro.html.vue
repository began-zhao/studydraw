<template><div><h1 id="最重要的-jvm-参数总结" tabindex="-1"><a class="header-anchor" href="#最重要的-jvm-参数总结" aria-hidden="true">#</a> 最重要的 JVM 参数总结</h1>
<p>本文由翻译自 <a href="https://www.baeldung.com/jvm-parameters" target="_blank" rel="noopener noreferrer">https://www.baeldung.com/jvm-parameters<ExternalLinkIcon/></a>，并对文章进行了大量的完善补充。翻译不易，如需转载请注明出处，作者：<a href="https://www.baeldung.com/author/baeldung/" target="_blank" rel="noopener noreferrer">baeldung<ExternalLinkIcon/></a> 。</p>
<h2 id="_1-概述" tabindex="-1"><a class="header-anchor" href="#_1-概述" aria-hidden="true">#</a> 1.概述</h2>
<p>在本篇文章中，你将掌握最常用的 JVM 参数配置。如果对于下面提到了一些概念比如堆、</p>
<h2 id="_2-堆内存相关" tabindex="-1"><a class="header-anchor" href="#_2-堆内存相关" aria-hidden="true">#</a> 2.堆内存相关</h2>
<blockquote>
<p>Java 虚拟机所管理的内存中最大的一块，Java 堆是所有线程共享的一块内存区域，在虚拟机启动时创建。<strong>此内存区域的唯一目的就是存放对象实例，几乎所有的对象实例以及数组都在这里分配内存。</strong></p>
</blockquote>
<h3 id="_2-1-显式指定堆内存–xms和-xmx" tabindex="-1"><a class="header-anchor" href="#_2-1-显式指定堆内存–xms和-xmx" aria-hidden="true">#</a> 2.1.显式指定堆内存<code v-pre>–Xms</code>和<code v-pre>-Xmx</code></h3>
<p>与性能有关的最常见实践之一是根据应用程序要求初始化堆内存。如果我们需要指定最小和最大堆大小（推荐显示指定大小），以下参数可以帮助你实现：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-Xms&lt;heap size>[unit] 
-Xmx&lt;heap size>[unit]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>heap size</strong> 表示要初始化内存的具体大小。</li>
<li><strong>unit</strong> 表示要初始化内存的单位。单位为***“ g”*** (GB) 、<em><strong>“ m”</strong></em>（MB）、<em><strong>“ k”</strong></em>（KB）。</li>
</ul>
<p>举个栗子🌰，如果我们要为JVM分配最小2 GB和最大5 GB的堆内存大小，我们的参数应该这样来写：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-Xms2G -Xmx5G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-2-显式新生代内存-young-generation" tabindex="-1"><a class="header-anchor" href="#_2-2-显式新生代内存-young-generation" aria-hidden="true">#</a> 2.2.显式新生代内存(Young Generation)</h3>
<p>根据<a href="https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/sizing.html" target="_blank" rel="noopener noreferrer">Oracle官方文档<ExternalLinkIcon/></a>，在堆总可用内存配置完成之后，第二大影响因素是为 <code v-pre>Young Generation</code> 在堆内存所占的比例。默认情况下，YG 的最小大小为 1310 <em>MB</em>，最大大小为<em>无限制</em>。</p>
<p>一共有两种指定 新生代内存(Young Ceneration)大小的方法：</p>
<p><strong>1.通过<code v-pre>-XX:NewSize</code>和<code v-pre>-XX:MaxNewSize</code>指定</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-XX:NewSize=&lt;young size>[unit] 
-XX:MaxNewSize=&lt;young size>[unit]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>举个栗子🌰，如果我们要为 新生代分配 最小256m 的内存，最大 1024m的内存我们的参数应该这样来写：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-XX:NewSize=256m
-XX:MaxNewSize=1024m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.通过<code v-pre>-Xmn&lt;young size&gt;[unit] </code>指定</strong></p>
<p>举个栗子🌰，如果我们要为 新生代分配256m的内存（NewSize与MaxNewSize设为一致），我们的参数应该这样来写：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-Xmn256m 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>GC 调优策略中很重要的一条经验总结是这样说的：</p>
<blockquote>
<p>将新对象预留在新生代，由于 Full GC 的成本远高于 Minor GC，因此尽可能将对象分配在新生代是明智的做法，实际项目中根据 GC 日志分析新生代空间大小分配是否合理，适当通过“-Xmn”命令调节新生代大小，最大限度降低新对象直接进入老年代的情况。</p>
</blockquote>
<p>另外，你还可以通过**<code v-pre>-XX:NewRatio=&lt;int&gt;</code>**来设置新生代和老年代内存的比值。</p>
<p>比如下面的参数就是设置新生代（包括Eden和两个Survivor区）与老年代的比值为1。也就是说：新生代与老年代所占比值为1：1，新生代占整个堆栈的 1/2。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-XX:NewRatio=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-显式指定永久代-元空间的大小" tabindex="-1"><a class="header-anchor" href="#_2-3-显式指定永久代-元空间的大小" aria-hidden="true">#</a> 2.3.显式指定永久代/元空间的大小</h3>
<p><strong>从Java 8开始，如果我们没有指定 Metaspace 的大小，随着更多类的创建，虚拟机会耗尽所有可用的系统内存（永久代并不会出现这种情况）。</strong></p>
<p>JDK 1.8 之前永久代还没被彻底移除的时候通常通过下面这些参数来调节方法区大小</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token operator">-</span>XX<span class="token operator">:</span><span class="token class-name">PermSize</span><span class="token operator">=</span><span class="token class-name">N</span> <span class="token comment">//方法区 (永久代) 初始大小</span>
<span class="token operator">-</span>XX<span class="token operator">:</span><span class="token class-name">MaxPermSize</span><span class="token operator">=</span><span class="token class-name">N</span> <span class="token comment">//方法区 (永久代) 最大大小,超过这个值将会抛出 OutOfMemoryError 异常:java.lang.OutOfMemoryError: PermGen</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>相对而言，垃圾收集行为在这个区域是比较少出现的，但并非数据进入方法区后就“永久存在”了。</p>
<p><strong>JDK 1.8 的时候，方法区（HotSpot 的永久代）被彻底移除了（JDK1.7 就已经开始了），取而代之是元空间，元空间使用的是本地内存。</strong></p>
<p>下面是一些常用参数：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token operator">-</span>XX<span class="token operator">:</span><span class="token class-name">MetaspaceSize</span><span class="token operator">=</span><span class="token class-name">N</span> <span class="token comment">//设置 Metaspace 的初始（和最小大小）</span>
<span class="token operator">-</span>XX<span class="token operator">:</span><span class="token class-name">MaxMetaspaceSize</span><span class="token operator">=</span><span class="token class-name">N</span> <span class="token comment">//设置 Metaspace 的最大大小，如果不指定大小的话，随着更多类的创建，虚拟机会耗尽所有可用的系统内存。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-垃圾收集相关" tabindex="-1"><a class="header-anchor" href="#_3-垃圾收集相关" aria-hidden="true">#</a> 3.垃圾收集相关</h2>
<h3 id="_3-1-垃圾回收器" tabindex="-1"><a class="header-anchor" href="#_3-1-垃圾回收器" aria-hidden="true">#</a> 3.1.垃圾回收器</h3>
<p>为了提高应用程序的稳定性，选择正确的<a href="http://www.oracle.com/webfolder/technetwork/tutorials/obe/java/gc01/index.html" target="_blank" rel="noopener noreferrer">垃圾收集<ExternalLinkIcon/></a>算法至关重要。</p>
<p>JVM具有四种类型的<em>GC</em>实现：</p>
<ul>
<li>串行垃圾收集器</li>
<li>并行垃圾收集器</li>
<li>CMS垃圾收集器</li>
<li>G1垃圾收集器</li>
</ul>
<p>可以使用以下参数声明这些实现：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-XX:+UseSerialGC
-XX:+UseParallelGC
-XX:+UseParNewGC
-XX:+UseG1GC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有关<em>垃圾回收</em>实施的更多详细信息，请参见<a href="https://github.com/Snailclimb/JavaGuide/blob/master/docs/java/jvm/JVM%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.md" target="_blank" rel="noopener noreferrer">此处<ExternalLinkIcon/></a>。</p>
<h3 id="_3-2-gc记录" tabindex="-1"><a class="header-anchor" href="#_3-2-gc记录" aria-hidden="true">#</a> 3.2.GC记录</h3>
<p>为了严格监控应用程序的运行状况，我们应该始终检查JVM的<em>垃圾回收</em>性能。最简单的方法是以人类可读的格式记录<em>GC</em>活动。</p>
<p>使用以下参数，我们可以记录<em>GC</em>活动：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-XX:+UseGCLogFileRotation 
-XX:NumberOfGCLogFiles=&lt; number of log files > 
-XX:GCLogFileSize=&lt; file size >[ unit ]
-Xloggc:/path/to/gc.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="推荐阅读" tabindex="-1"><a class="header-anchor" href="#推荐阅读" aria-hidden="true">#</a> 推荐阅读</h2>
<ul>
<li><a href="https://www.jianshu.com/p/832fc4d4cb53" target="_blank" rel="noopener noreferrer">CMS GC 默认新生代是多大？<ExternalLinkIcon/></a></li>
<li><a href="https://www.cnblogs.com/hongdada/p/10277782.html" target="_blank" rel="noopener noreferrer">CMS GC启动参数优化配置<ExternalLinkIcon/></a></li>
<li><a href="https://tech.meituan.com/2017/12/29/jvm-optimize.html" target="_blank" rel="noopener noreferrer">从实际案例聊聊Java应用的GC优化-美团技术团队<ExternalLinkIcon/></a></li>
<li><a href="https://www.choupangxia.com/2019/11/11/interview-jvm-gc-08/" target="_blank" rel="noopener noreferrer">JVM性能调优详解<ExternalLinkIcon/></a> （2019-11-11）</li>
<li><a href="https://segmentfault.com/a/1190000010603813" target="_blank" rel="noopener noreferrer">JVM参数使用手册<ExternalLinkIcon/></a></li>
</ul>
</div></template>
