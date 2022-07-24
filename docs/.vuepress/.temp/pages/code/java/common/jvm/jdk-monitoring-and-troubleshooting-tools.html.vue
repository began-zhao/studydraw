<template><div><h1 id="jdk-监控和故障处理工具总结" tabindex="-1"><a class="header-anchor" href="#jdk-监控和故障处理工具总结" aria-hidden="true">#</a> JDK 监控和故障处理工具总结</h1>
<h2 id="jdk-命令行工具" tabindex="-1"><a class="header-anchor" href="#jdk-命令行工具" aria-hidden="true">#</a> JDK 命令行工具</h2>
<p>这些命令在 JDK 安装目录下的 bin 目录下：</p>
<ul>
<li><strong><code v-pre>jps</code></strong> (JVM Process Status）: 类似 UNIX 的 <code v-pre>ps</code> 命令。用于查看所有 Java 进程的启动类、传入参数和 Java 虚拟机参数等信息；</li>
<li><strong><code v-pre>jstat</code></strong>（JVM Statistics Monitoring Tool）:  用于收集 HotSpot 虚拟机各方面的运行数据;</li>
<li><strong><code v-pre>jinfo</code></strong> (Configuration Info for Java) : Configuration Info for Java,显示虚拟机配置信息;</li>
<li><strong><code v-pre>jmap</code></strong> (Memory Map for Java) : 生成堆转储快照;</li>
<li><strong><code v-pre>jhat</code></strong> (JVM Heap Dump Browser) : 用于分析 heapdump 文件，它会建立一个 HTTP/HTML 服务器，让用户可以在浏览器上查看分析结果;</li>
<li><strong><code v-pre>jstack</code></strong> (Stack Trace for Java) : 生成虚拟机当前时刻的线程快照，线程快照就是当前虚拟机内每一条线程正在执行的方法堆栈的集合。</li>
</ul>
<h3 id="jps-查看所有-java-进程" tabindex="-1"><a class="header-anchor" href="#jps-查看所有-java-进程" aria-hidden="true">#</a> <code v-pre>jps</code>:查看所有 Java 进程</h3>
<p><code v-pre>jps</code>(JVM Process Status) 命令类似 UNIX 的 <code v-pre>ps</code> 命令。</p>
<p><code v-pre>jps</code>：显示虚拟机执行主类名称以及这些进程的本地虚拟机唯一 ID（Local Virtual Machine Identifier,LVMID）。<code v-pre>jps -q</code> ：只输出进程的本地虚拟机唯一 ID。</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>C:\Users\SnailClimb>jps
7360 NettyClient2
17396
7972 Launcher
16504 Jps
17340 NettyServer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>jps -l</code>:输出主类的全名，如果进程执行的是 Jar 包，输出 Jar 路径。</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>C:\Users\SnailClimb>jps <span class="token operator">-</span>l
7360 firstNettyDemo<span class="token punctuation">.</span>NettyClient2
17396
7972 org<span class="token punctuation">.</span>jetbrains<span class="token punctuation">.</span>jps<span class="token punctuation">.</span>cmdline<span class="token punctuation">.</span>Launcher
16492 sun<span class="token punctuation">.</span>tools<span class="token punctuation">.</span>jps<span class="token punctuation">.</span>Jps
17340 firstNettyDemo<span class="token punctuation">.</span>NettyServer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>jps -v</code>：输出虚拟机进程启动时 JVM 参数。</p>
<p><code v-pre>jps -m</code>：输出传递给 Java 进程 main() 函数的参数。</p>
<h3 id="jstat-监视虚拟机各种运行状态信息" tabindex="-1"><a class="header-anchor" href="#jstat-监视虚拟机各种运行状态信息" aria-hidden="true">#</a> <code v-pre>jstat</code>: 监视虚拟机各种运行状态信息</h3>
<p>jstat（JVM Statistics Monitoring Tool） 使用于监视虚拟机各种运行状态信息的命令行工具。 它可以显示本地或者远程（需要远程主机提供 RMI 支持）虚拟机进程中的类信息、内存、垃圾收集、JIT 编译等运行数据，在没有 GUI，只提供了纯文本控制台环境的服务器上，它将是运行期间定位虚拟机性能问题的首选工具。</p>
<p><strong><code v-pre>jstat</code> 命令使用格式：</strong></p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>jstat <span class="token operator">-</span>&lt;option> <span class="token punctuation">[</span><span class="token operator">-</span>t<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">-</span>h&lt;lines><span class="token punctuation">]</span> &lt;vmid> <span class="token punctuation">[</span>&lt;interval> <span class="token punctuation">[</span>&lt;count><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比如 <code v-pre>jstat -gc -h3 31736 1000 10</code>表示分析进程 id 为 31736 的 gc 情况，每隔 1000ms 打印一次记录，打印 10 次停止，每 3 行后打印指标头部。</p>
<p><strong>常见的 option 如下：</strong></p>
<ul>
<li><code v-pre>jstat -class vmid</code> ：显示 ClassLoader 的相关信息；</li>
<li><code v-pre>jstat -compiler vmid</code> ：显示 JIT 编译的相关信息；</li>
<li><code v-pre>jstat -gc vmid</code> ：显示与 GC 相关的堆信息；</li>
<li><code v-pre>jstat -gccapacity vmid</code> ：显示各个代的容量及使用情况；</li>
<li><code v-pre>jstat -gcnew vmid</code> ：显示新生代信息；</li>
<li><code v-pre>jstat -gcnewcapcacity vmid</code> ：显示新生代大小与使用情况；</li>
<li><code v-pre>jstat -gcold vmid</code> ：显示老年代和永久代的行为统计，从jdk1.8开始,该选项仅表示老年代，因为永久代被移除了；</li>
<li><code v-pre>jstat -gcoldcapacity vmid</code> ：显示老年代的大小；</li>
<li><code v-pre>jstat -gcpermcapacity vmid</code> ：显示永久代大小，从jdk1.8开始,该选项不存在了，因为永久代被移除了；</li>
<li><code v-pre>jstat -gcutil vmid</code> ：显示垃圾收集信息；</li>
</ul>
<p>另外，加上 <code v-pre>-t</code>参数可以在输出信息上加一个 Timestamp 列，显示程序的运行时间。</p>
<h3 id="jinfo-实时地查看和调整虚拟机各项参数" tabindex="-1"><a class="header-anchor" href="#jinfo-实时地查看和调整虚拟机各项参数" aria-hidden="true">#</a> <code v-pre>jinfo</code>: 实时地查看和调整虚拟机各项参数</h3>
<p><code v-pre>jinfo vmid</code> :输出当前 jvm 进程的全部参数和系统属性 (第一部分是系统的属性，第二部分是 JVM 的参数)。</p>
<p><code v-pre>jinfo -flag name vmid</code> :输出对应名称的参数的具体值。比如输出 MaxHeapSize、查看当前 jvm 进程是否开启打印 GC 日志 ( <code v-pre>-XX:PrintGCDetails</code> :详细 GC 日志模式，这两个都是默认关闭的)。</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>C:\Users\SnailClimb>jinfo  <span class="token operator">-</span>flag MaxHeapSize 17340
<span class="token operator">-</span>XX:MaxHeapSize=2124414976
C:\Users\SnailClimb>jinfo  <span class="token operator">-</span>flag PrintGC 17340
<span class="token operator">-</span>XX:<span class="token operator">-</span>PrintGC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 jinfo 可以在不重启虚拟机的情况下，可以动态的修改 jvm 的参数。尤其在线上的环境特别有用,请看下面的例子：</p>
<p><code v-pre>jinfo -flag [+|-]name vmid</code> 开启或者关闭对应名称的参数。</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>C:\Users\SnailClimb>jinfo  <span class="token operator">-</span>flag  PrintGC 17340
<span class="token operator">-</span>XX:<span class="token operator">-</span>PrintGC

C:\Users\SnailClimb>jinfo  <span class="token operator">-</span>flag  <span class="token operator">+</span>PrintGC 17340

C:\Users\SnailClimb>jinfo  <span class="token operator">-</span>flag  PrintGC 17340
<span class="token operator">-</span>XX:<span class="token operator">+</span>PrintGC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jmap-生成堆转储快照" tabindex="-1"><a class="header-anchor" href="#jmap-生成堆转储快照" aria-hidden="true">#</a> <code v-pre>jmap</code>:生成堆转储快照</h3>
<p><code v-pre>jmap</code>（Memory Map for Java）命令用于生成堆转储快照。 如果不使用 <code v-pre>jmap</code> 命令，要想获取 Java 堆转储，可以使用 <code v-pre>“-XX:+HeapDumpOnOutOfMemoryError”</code> 参数，可以让虚拟机在 OOM 异常出现之后自动生成 dump 文件，Linux 命令下可以通过 <code v-pre>kill -3</code> 发送进程退出信号也能拿到 dump 文件。</p>
<p><code v-pre>jmap</code> 的作用并不仅仅是为了获取 dump 文件，它还可以查询 finalizer 执行队列、Java 堆和永久代的详细信息，如空间使用率、当前使用的是哪种收集器等。和<code v-pre>jinfo</code>一样，<code v-pre>jmap</code>有不少功能在 Windows 平台下也是受限制的。</p>
<p>示例：将指定应用程序的堆快照输出到桌面。后面，可以通过 jhat、Visual VM 等工具分析该堆文件。</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>C:\Users\SnailClimb>jmap <span class="token operator">-</span>dump:format=b<span class="token punctuation">,</span>file=C:\Users\SnailClimb\Desktop\heap<span class="token punctuation">.</span>hprof 17340
Dumping heap to C:\Users\SnailClimb\Desktop\heap<span class="token punctuation">.</span>hprof <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
Heap dump file created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jhat-分析-heapdump-文件" tabindex="-1"><a class="header-anchor" href="#jhat-分析-heapdump-文件" aria-hidden="true">#</a> <strong><code v-pre>jhat</code></strong>: 分析 heapdump 文件</h3>
<p><strong><code v-pre>jhat</code></strong> 用于分析 heapdump 文件，它会建立一个 HTTP/HTML 服务器，让用户可以在浏览器上查看分析结果。</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>C:\Users\SnailClimb>jhat C:\Users\SnailClimb\Desktop\heap<span class="token punctuation">.</span>hprof
Reading <span class="token keyword">from</span> C:\Users\SnailClimb\Desktop\heap<span class="token punctuation">.</span>hprof<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
Dump file created Sat May 04 12:30:31 CST 2019
Snapshot read<span class="token punctuation">,</span> resolving<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
Resolving 131419 objects<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
Chasing references<span class="token punctuation">,</span> expect 26 dots<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
Eliminating duplicate references<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
Snapshot resolved<span class="token punctuation">.</span>
Started HTTP server on port 7000
Server is ready<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问 <a href="http://localhost:7000/" target="_blank" rel="noopener noreferrer">http://localhost:7000/<ExternalLinkIcon/></a></p>
<h3 id="jstack-生成虚拟机当前时刻的线程快照" tabindex="-1"><a class="header-anchor" href="#jstack-生成虚拟机当前时刻的线程快照" aria-hidden="true">#</a> <strong><code v-pre>jstack</code></strong> :生成虚拟机当前时刻的线程快照</h3>
<p><code v-pre>jstack</code>（Stack Trace for Java）命令用于生成虚拟机当前时刻的线程快照。线程快照就是当前虚拟机内每一条线程正在执行的方法堆栈的集合.</p>
<p>生成线程快照的目的主要是定位线程长时间出现停顿的原因，如线程间死锁、死循环、请求外部资源导致的长时间等待等都是导致线程长时间停顿的原因。线程出现停顿的时候通过<code v-pre>jstack</code>来查看各个线程的调用堆栈，就可以知道没有响应的线程到底在后台做些什么事情，或者在等待些什么资源。</p>
<p><strong>下面是一个线程死锁的代码。我们下面会通过 <code v-pre>jstack</code> 命令进行死锁检查，输出死锁信息，找到发生死锁的线程。</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeadLockDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> resource1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//资源 1</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> resource2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//资源 2</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"get resource1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"waiting get resource2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"get resource2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">"线程 1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"get resource2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"waiting get resource1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>resource1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"get resource1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">"线程 2"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Thread[线程 1,5,main]get resource1
Thread[线程 2,5,main]get resource2
Thread[线程 1,5,main]waiting get resource2
Thread[线程 2,5,main]waiting get resource1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>线程 A 通过 synchronized (resource1) 获得 resource1 的监视器锁，然后通过<code v-pre> Thread.sleep(1000);</code>让线程 A 休眠 1s 为的是让线程 B 得到执行然后获取到 resource2 的监视器锁。线程 A 和线程 B 休眠结束了都开始企图请求获取对方的资源，然后这两个线程就会陷入互相等待的状态，这也就产生了死锁。</p>
<p><strong>通过 <code v-pre>jstack</code> 命令分析：</strong></p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>C:\Users\SnailClimb>jps
13792 KotlinCompileDaemon
7360 NettyClient2
17396
7972 Launcher
8932 Launcher
9256 DeadLockDemo
10764 Jps
17340 NettyServer

C:\Users\SnailClimb>jstack 9256
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的部分内容如下：</p>
<div class="language-powershell ext-powershell line-numbers-mode"><pre v-pre class="language-powershell"><code>Found one Java-level deadlock:
=============================
<span class="token string">"线程 2"</span>:
  waiting to lock monitor 0x000000000333e668 <span class="token punctuation">(</span>object 0x00000000d5efe1c0<span class="token punctuation">,</span> a java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Object<span class="token punctuation">)</span><span class="token punctuation">,</span>
  which is held by <span class="token string">"线程 1"</span>
<span class="token string">"线程 1"</span>:
  waiting to lock monitor 0x000000000333be88 <span class="token punctuation">(</span>object 0x00000000d5efe1d0<span class="token punctuation">,</span> a java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Object<span class="token punctuation">)</span><span class="token punctuation">,</span>
  which is held by <span class="token string">"线程 2"</span>

Java stack information <span class="token keyword">for</span> the threads listed above:
===================================================
<span class="token string">"线程 2"</span>:
        at DeadLockDemo<span class="token punctuation">.</span>lambda<span class="token variable">$main</span><span class="token variable">$1</span><span class="token punctuation">(</span>DeadLockDemo<span class="token punctuation">.</span>java:31<span class="token punctuation">)</span>
        <span class="token operator">-</span> waiting to lock &lt;0x00000000d5efe1c0> <span class="token punctuation">(</span>a java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Object<span class="token punctuation">)</span>
        <span class="token operator">-</span> locked &lt;0x00000000d5efe1d0> <span class="token punctuation">(</span>a java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Object<span class="token punctuation">)</span>
        at DeadLockDemo$<span class="token variable">$Lambda</span><span class="token variable">$2</span><span class="token operator">/</span>1078694789<span class="token punctuation">.</span>run<span class="token punctuation">(</span>Unknown Source<span class="token punctuation">)</span>
        at java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Thread<span class="token punctuation">.</span>run<span class="token punctuation">(</span>Thread<span class="token punctuation">.</span>java:748<span class="token punctuation">)</span>
<span class="token string">"线程 1"</span>:
        at DeadLockDemo<span class="token punctuation">.</span>lambda<span class="token variable">$main</span><span class="token variable">$0</span><span class="token punctuation">(</span>DeadLockDemo<span class="token punctuation">.</span>java:16<span class="token punctuation">)</span>
        <span class="token operator">-</span> waiting to lock &lt;0x00000000d5efe1d0> <span class="token punctuation">(</span>a java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Object<span class="token punctuation">)</span>
        <span class="token operator">-</span> locked &lt;0x00000000d5efe1c0> <span class="token punctuation">(</span>a java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Object<span class="token punctuation">)</span>
        at DeadLockDemo$<span class="token variable">$Lambda</span><span class="token variable">$1</span><span class="token operator">/</span>1324119927<span class="token punctuation">.</span>run<span class="token punctuation">(</span>Unknown Source<span class="token punctuation">)</span>
        at java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>Thread<span class="token punctuation">.</span>run<span class="token punctuation">(</span>Thread<span class="token punctuation">.</span>java:748<span class="token punctuation">)</span>

Found 1 deadlock<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 <code v-pre>jstack</code> 命令已经帮我们找到发生死锁的线程的具体信息。</p>
<h2 id="jdk-可视化分析工具" tabindex="-1"><a class="header-anchor" href="#jdk-可视化分析工具" aria-hidden="true">#</a> JDK 可视化分析工具</h2>
<h3 id="jconsole-java-监视与管理控制台" tabindex="-1"><a class="header-anchor" href="#jconsole-java-监视与管理控制台" aria-hidden="true">#</a> JConsole:Java 监视与管理控制台</h3>
<p>JConsole 是基于 JMX 的可视化监视、管理工具。可以很方便的监视本地及远程服务器的 java 进程的内存使用情况。你可以在控制台输出<code v-pre>console</code>命令启动或者在 JDK 目录下的 bin 目录找到<code v-pre>jconsole.exe</code>然后双击启动。</p>
<h4 id="连接-jconsole" tabindex="-1"><a class="header-anchor" href="#连接-jconsole" aria-hidden="true">#</a> 连接 Jconsole</h4>
<p><img src="@source/code/java/common/jvm/pictures/jdk监控和故障处理工具总结/1JConsole连接.png" alt="连接 Jconsole" loading="lazy"></p>
<p>如果需要使用 JConsole 连接远程进程，可以在远程 Java 程序启动时加上下面这些参数:</p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">-Djava.rmi.server.hostname</span><span class="token punctuation">=</span><span class="token value attr-value">外网访问 ip 地址 </span>
<span class="token key attr-name">-Dcom.sun.management.jmxremote.port</span><span class="token punctuation">=</span><span class="token value attr-value">60001   //监控的端口号</span>
<span class="token key attr-name">-Dcom.sun.management.jmxremote.authenticate</span><span class="token punctuation">=</span><span class="token value attr-value">false   //关闭认证</span>
<span class="token key attr-name">-Dcom.sun.management.jmxremote.ssl</span><span class="token punctuation">=</span><span class="token value attr-value">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用 JConsole 连接时，远程进程地址如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>外网访问 ip 地址:60001 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看-java-程序概况" tabindex="-1"><a class="header-anchor" href="#查看-java-程序概况" aria-hidden="true">#</a> 查看 Java 程序概况</h4>
<p><img src="@source/code/java/common/jvm/pictures/jdk监控和故障处理工具总结/2查看Java程序概况.png" alt="查看 Java 程序概况 " loading="lazy"></p>
<h4 id="内存监控" tabindex="-1"><a class="header-anchor" href="#内存监控" aria-hidden="true">#</a> 内存监控</h4>
<p>JConsole 可以显示当前内存的详细信息。不仅包括堆内存/非堆内存的整体信息，还可以细化到 eden 区、survivor 区等的使用情况，如下图所示。</p>
<p>点击右边的“执行 GC(G)”按钮可以强制应用程序执行一个 Full GC。</p>
<blockquote>
<ul>
<li><strong>新生代 GC（Minor GC）</strong>:指发生新生代的的垃圾收集动作，Minor GC 非常频繁，回收速度一般也比较快。</li>
<li><strong>老年代 GC（Major GC/Full GC）</strong>:指发生在老年代的 GC，出现了 Major GC 经常会伴随至少一次的 Minor GC（并非绝对），Major GC 的速度一般会比 Minor GC 的慢 10 倍以上。</li>
</ul>
</blockquote>
<p><img src="@source/code/java/common/jvm/pictures/jdk监控和故障处理工具总结/3内存监控.png" alt="内存监控 " loading="lazy"></p>
<h4 id="线程监控" tabindex="-1"><a class="header-anchor" href="#线程监控" aria-hidden="true">#</a> 线程监控</h4>
<p>类似我们前面讲的 <code v-pre>jstack</code> 命令，不过这个是可视化的。</p>
<p>最下面有一个&quot;检测死锁 (D)&quot;按钮，点击这个按钮可以自动为你找到发生死锁的线程以及它们的详细信息 。</p>
<p><img src="@source/code/java/common/jvm/pictures/jdk监控和故障处理工具总结/4线程监控.png" alt="线程监控 " loading="lazy"></p>
<h3 id="visual-vm-多合一故障处理工具" tabindex="-1"><a class="header-anchor" href="#visual-vm-多合一故障处理工具" aria-hidden="true">#</a> Visual VM:多合一故障处理工具</h3>
<p>VisualVM 提供在 Java 虚拟机 (Java Virutal Machine, JVM) 上运行的 Java 应用程序的详细信息。在 VisualVM 的图形用户界面中，您可以方便、快捷地查看多个 Java 应用程序的相关信息。Visual VM 官网：<a href="https://visualvm.github.io/" target="_blank" rel="noopener noreferrer">https://visualvm.github.io/<ExternalLinkIcon/></a> 。Visual VM 中文文档:<a href="https://visualvm.github.io/documentation.html" target="_blank" rel="noopener noreferrer">https://visualvm.github.io/documentation.html<ExternalLinkIcon/></a>。</p>
<p>下面这段话摘自《深入理解 Java 虚拟机》。</p>
<blockquote>
<p>VisualVM（All-in-One Java Troubleshooting Tool）是到目前为止随 JDK 发布的功能最强大的运行监视和故障处理程序，官方在 VisualVM 的软件说明中写上了“All-in-One”的描述字样，预示着他除了运行监视、故障处理外，还提供了很多其他方面的功能，如性能分析（Profiling）。VisualVM 的性能分析功能甚至比起 JProfiler、YourKit 等专业且收费的 Profiling 工具都不会逊色多少，而且 VisualVM 还有一个很大的优点：不需要被监视的程序基于特殊 Agent 运行，因此他对应用程序的实际性能的影响很小，使得他可以直接应用在生产环境中。这个优点是 JProfiler、YourKit 等工具无法与之媲美的。</p>
</blockquote>
<p>VisualVM 基于 NetBeans 平台开发，因此他一开始就具备了插件扩展功能的特性，通过插件扩展支持，VisualVM 可以做到：</p>
<ul>
<li><strong>显示虚拟机进程以及进程的配置、环境信息（jps、jinfo）。</strong></li>
<li><strong>监视应用程序的 CPU、GC、堆、方法区以及线程的信息（jstat、jstack）。</strong></li>
<li><strong>dump 以及分析堆转储快照（jmap、jhat）。</strong></li>
<li><strong>方法级的程序运行性能分析，找到被调用最多、运行时间最长的方法。</strong></li>
<li><strong>离线程序快照：收集程序的运行时配置、线程 dump、内存 dump 等信息建立一个快照，可以将快照发送开发者处进行 Bug 反馈。</strong></li>
<li><strong>其他 plugins 的无限的可能性......</strong></li>
</ul>
<p>这里就不具体介绍 VisualVM 的使用，如果想了解的话可以看:</p>
<ul>
<li><a href="https://visualvm.github.io/documentation.html" target="_blank" rel="noopener noreferrer">https://visualvm.github.io/documentation.html<ExternalLinkIcon/></a></li>
<li><a href="https://www.ibm.com/developerworks/cn/java/j-lo-visualvm/index.html" target="_blank" rel="noopener noreferrer">https://www.ibm.com/developerworks/cn/java/j-lo-visualvm/index.html<ExternalLinkIcon/></a></li>
</ul>
</div></template>
