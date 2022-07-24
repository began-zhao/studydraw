<template><div><h1 id="java-定时任务详解" tabindex="-1"><a class="header-anchor" href="#java-定时任务详解" aria-hidden="true">#</a> Java 定时任务详解</h1>
<h2 id="为什么需要定时任务" tabindex="-1"><a class="header-anchor" href="#为什么需要定时任务" aria-hidden="true">#</a> 为什么需要定时任务？</h2>
<p>我们来看一下几个非常常见的业务场景：</p>
<ol>
<li>某系统凌晨要进行数据备份。</li>
<li>某电商平台，用户下单半个小时未支付的情况下需要自动取消订单。</li>
<li>某媒体聚合平台，每 10 分钟动态抓取某某网站的数据为自己所用。</li>
<li>某博客平台，支持定时发送文章。</li>
<li>某基金平台，每晚定时计算用户当日收益情况并推送给用户最新的数据。</li>
<li>......</li>
</ol>
<p>这些场景往往都要求我们在某个特定的时间去做某个事情。</p>
<h2 id="单机定时任务技术选型" tabindex="-1"><a class="header-anchor" href="#单机定时任务技术选型" aria-hidden="true">#</a> 单机定时任务技术选型</h2>
<h3 id="timer" tabindex="-1"><a class="header-anchor" href="#timer" aria-hidden="true">#</a> Timer</h3>
<p><code v-pre>java.util.Timer</code>是 JDK 1.3 开始就已经支持的一种定时任务的实现方式。</p>
<p><code v-pre>Timer</code> 内部使用一个叫做 <code v-pre>TaskQueue</code> 的类存放定时任务，它是一个基于最小堆实现的优先级队列。<code v-pre>TaskQueue</code> 会按照任务距离下一次执行时间的大小将任务排序，保证在堆顶的任务最先执行。这样在需要执行任务时，每次只需要取出堆顶的任务运行即可！</p>
<p><code v-pre>Timer</code> 使用起来比较简单，通过下面的方式我们就能创建一个 1s 之后执行的定时任务。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 示例代码：</span>
<span class="token class-name">TimerTask</span> task <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TimerTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"当前时间: "</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"n"</span> <span class="token operator">+</span>
                <span class="token string">"线程名称: "</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"当前时间: "</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"n"</span> <span class="token operator">+</span>
        <span class="token string">"线程名称: "</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Timer</span> timer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Timer</span><span class="token punctuation">(</span><span class="token string">"Timer"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> delay <span class="token operator">=</span> <span class="token number">1000L</span><span class="token punctuation">;</span>
timer<span class="token punctuation">.</span><span class="token function">schedule</span><span class="token punctuation">(</span>task<span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">//输出：</span>
当前时间<span class="token operator">:</span> <span class="token class-name">Fri</span> <span class="token class-name">May</span> <span class="token number">28</span> <span class="token number">15</span><span class="token operator">:</span><span class="token number">18</span><span class="token operator">:</span><span class="token number">47</span> CST <span class="token number">2021</span>n线程名称<span class="token operator">:</span> main
当前时间<span class="token operator">:</span> <span class="token class-name">Fri</span> <span class="token class-name">May</span> <span class="token number">28</span> <span class="token number">15</span><span class="token operator">:</span><span class="token number">18</span><span class="token operator">:</span><span class="token number">48</span> CST <span class="token number">2021</span>n线程名称<span class="token operator">:</span> <span class="token class-name">Timer</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过其缺陷较多，比如一个 <code v-pre>Timer</code> 一个线程，这就导致 <code v-pre>Timer</code> 的任务的执行只能串行执行，一个任务执行时间过长的话会影响其他任务（性能非常差），再比如发生异常时任务直接停止（<code v-pre>Timer</code> 只捕获了 <code v-pre>InterruptedException</code> ）。</p>
<p><code v-pre>Timer</code> 类上的有一段注释是这样写的：</p>
<div class="language-JAVA ext-JAVA line-numbers-mode"><pre v-pre class="language-JAVA"><code> * This class does not offer real-time guarantees: it schedules
 * tasks using the &lt;tt&gt;Object.wait(long)&lt;/tt&gt; method.
 *Java 5.0 introduced the {@code java.util.concurrent} package and
 * one of the concurrency utilities therein is the {@link
 * java.util.concurrent.ScheduledThreadPoolExecutor
 * ScheduledThreadPoolExecutor} which is a thread pool for repeatedly
 * executing tasks at a given rate or delay.  It is effectively a more
 * versatile replacement for the {@code Timer}/{@code TimerTask}
 * combination, as it allows multiple service threads, accepts various
 * time units, and doesn't require subclassing {@code TimerTask} (just
 * implement {@code Runnable}).  Configuring {@code
 * ScheduledThreadPoolExecutor} with one thread makes it equivalent to
 * {@code Timer}.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大概的意思就是： <code v-pre>ScheduledThreadPoolExecutor</code> 支持多线程执行定时任务并且功能更强大，是 <code v-pre>Timer</code> 的替代品。</p>
<h3 id="scheduledexecutorservice" tabindex="-1"><a class="header-anchor" href="#scheduledexecutorservice" aria-hidden="true">#</a> ScheduledExecutorService</h3>
<p><code v-pre>ScheduledExecutorService</code> 是一个接口，有多个实现类，比较常用的是 <code v-pre>ScheduledThreadPoolExecutor</code> 。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/20210607154324712.png" alt="" loading="lazy"></p>
<p><code v-pre>ScheduledThreadPoolExecutor</code> 本身就是一个线程池，支持任务并发执行。并且，其内部使用 <code v-pre>DelayQueue</code> 作为任务队列。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 示例代码：</span>
<span class="token class-name">TimerTask</span> repeatedTask <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TimerTask</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@SneakyThrows</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"当前时间: "</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"n"</span> <span class="token operator">+</span>
                <span class="token string">"线程名称: "</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"当前时间: "</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"n"</span> <span class="token operator">+</span>
        <span class="token string">"线程名称: "</span> <span class="token operator">+</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">ScheduledExecutorService</span> executor <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newScheduledThreadPool</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> delay  <span class="token operator">=</span> <span class="token number">1000L</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> period <span class="token operator">=</span> <span class="token number">1000L</span><span class="token punctuation">;</span>
executor<span class="token punctuation">.</span><span class="token function">scheduleAtFixedRate</span><span class="token punctuation">(</span>repeatedTask<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> period<span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span>delay <span class="token operator">+</span> period <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
executor<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//输出：</span>
当前时间<span class="token operator">:</span> <span class="token class-name">Fri</span> <span class="token class-name">May</span> <span class="token number">28</span> <span class="token number">15</span><span class="token operator">:</span><span class="token number">40</span><span class="token operator">:</span><span class="token number">46</span> CST <span class="token number">2021</span>n线程名称<span class="token operator">:</span> main
当前时间<span class="token operator">:</span> <span class="token class-name">Fri</span> <span class="token class-name">May</span> <span class="token number">28</span> <span class="token number">15</span><span class="token operator">:</span><span class="token number">40</span><span class="token operator">:</span><span class="token number">47</span> CST <span class="token number">2021</span>n线程名称<span class="token operator">:</span> pool<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>thread<span class="token operator">-</span><span class="token number">1</span>
当前时间<span class="token operator">:</span> <span class="token class-name">Fri</span> <span class="token class-name">May</span> <span class="token number">28</span> <span class="token number">15</span><span class="token operator">:</span><span class="token number">40</span><span class="token operator">:</span><span class="token number">48</span> CST <span class="token number">2021</span>n线程名称<span class="token operator">:</span> pool<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>thread<span class="token operator">-</span><span class="token number">1</span>
当前时间<span class="token operator">:</span> <span class="token class-name">Fri</span> <span class="token class-name">May</span> <span class="token number">28</span> <span class="token number">15</span><span class="token operator">:</span><span class="token number">40</span><span class="token operator">:</span><span class="token number">49</span> CST <span class="token number">2021</span>n线程名称<span class="token operator">:</span> pool<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>thread<span class="token operator">-</span><span class="token number">2</span>
当前时间<span class="token operator">:</span> <span class="token class-name">Fri</span> <span class="token class-name">May</span> <span class="token number">28</span> <span class="token number">15</span><span class="token operator">:</span><span class="token number">40</span><span class="token operator">:</span><span class="token number">50</span> CST <span class="token number">2021</span>n线程名称<span class="token operator">:</span> pool<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>thread<span class="token operator">-</span><span class="token number">2</span>
当前时间<span class="token operator">:</span> <span class="token class-name">Fri</span> <span class="token class-name">May</span> <span class="token number">28</span> <span class="token number">15</span><span class="token operator">:</span><span class="token number">40</span><span class="token operator">:</span><span class="token number">51</span> CST <span class="token number">2021</span>n线程名称<span class="token operator">:</span> pool<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>thread<span class="token operator">-</span><span class="token number">2</span>
当前时间<span class="token operator">:</span> <span class="token class-name">Fri</span> <span class="token class-name">May</span> <span class="token number">28</span> <span class="token number">15</span><span class="token operator">:</span><span class="token number">40</span><span class="token operator">:</span><span class="token number">52</span> CST <span class="token number">2021</span>n线程名称<span class="token operator">:</span> pool<span class="token operator">-</span><span class="token number">1</span><span class="token operator">-</span>thread<span class="token operator">-</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不论是使用 <code v-pre>Timer</code> 还是 <code v-pre>ScheduledExecutorService</code> 都无法使用 Cron 表达式指定任务执行的具体时间。</p>
<h3 id="spring-task" tabindex="-1"><a class="header-anchor" href="#spring-task" aria-hidden="true">#</a> Spring Task</h3>
<p><img src="https://img-blog.csdnimg.cn/20210528145056880.png" alt="" loading="lazy"></p>
<p>我们直接通过 Spring 提供的 <code v-pre>@Scheduled</code> 注解即可定义定时任务，非常方便！</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * cron：使用Cron表达式。　每分钟的1，2秒运行
 */</span>
<span class="token annotation punctuation">@Scheduled</span><span class="token punctuation">(</span>cron <span class="token operator">=</span> <span class="token string">"1-2 * * * * ? "</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reportCurrentTimeWithCronExpression</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"Cron Expression: The time is now {}"</span><span class="token punctuation">,</span> dateFormat<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我在大学那会做的一个 SSM 的企业级项目，就是用的 Spring Task 来做的定时任务。</p>
<p>并且，Spring Task 还是支持 <strong>Cron 表达式</strong> 的。Cron 表达式主要用于定时作业(定时任务)系统定义执行时间或执行频率的表达式，非常厉害，你可以通过 Cron 表达式进行设置定时任务每天或者每个月什么时候执行等等操作。咱们要学习定时任务的话，Cron 表达式是一定是要重点关注的。推荐一个在线 Cron 表达式生成器：<a href="http://cron.qqe2.com/" target="_blank" rel="noopener noreferrer">http://cron.qqe2.com/<ExternalLinkIcon/></a> 。</p>
<p>但是，Spring 自带的定时调度只支持单机，并且提供的功能比较单一。之前写过一篇文章:<a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247485563&amp;idx=1&amp;sn=7419341f04036a10b141b74624a3f8c9&amp;chksm=cea247b0f9d5cea6440759e6d49b4e77d06f4c99470243a10c1463834e873ca90266413fbc92&amp;token=2133161636&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">《5 分钟搞懂如何在 Spring Boot 中 Schedule Tasks》<ExternalLinkIcon/></a> ，不了解的小伙伴可以参考一下。</p>
<p>Spring Task 底层是基于 JDK 的 <code v-pre>ScheduledThreadPoolExecutor</code> 线程池来实现的。</p>
<p><strong>优缺点总结：</strong></p>
<ul>
<li>优点： 简单，轻量，支持 Cron 表达式</li>
<li>缺点 ：功能单一</li>
</ul>
<h3 id="时间轮" tabindex="-1"><a class="header-anchor" href="#时间轮" aria-hidden="true">#</a> 时间轮</h3>
<p>Kafka、Dubbo、ZooKeeper、Netty 、Caffeine 、Akka 中都有对时间轮的实现。</p>
<p>时间轮简单来说就是一个环形的队列（底层一般基于数组实现），队列中的每一个元素（时间格）都可以存放一个定时任务列表。</p>
<p>时间轮中的每个时间格代表了时间轮的基本时间跨度或者说时间精度，加入时间一秒走一个时间格的话，那么这个时间轮的最高精度就是 1 秒（也就是说 3 s 和 3.9s 会在同一个时间格中）。</p>
<p>下图是一个有 12 个时间格的时间轮，转完一圈需要 12 s。当我们需要新建一个 3s 后执行的定时任务，只需要将定时任务放在下标为 3 的时间格中即可。当我们需要新建一个 9s 后执行的定时任务，只需要将定时任务放在下标为 9 的时间格中即可。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/20210607171334861.png" alt="" loading="lazy"></p>
<p>那当我们需要创建一个 13s 后执行的定时任务怎么办呢？这个时候可以引入一叫做 <strong>圈数/轮数</strong> 的概念，也就是说这个任务还是放在下标为 3 的时间格中， 不过它的圈数为 2 。</p>
<p>除了增加圈数这种方法之外，还有一种 <strong>多层次时间轮</strong> （类似手表），Kafka 采用的就是这种方案。</p>
<p>针对下图的时间轮，我来举一个例子便于大家理解。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/20210607193042151.png" alt="" loading="lazy"></p>
<p>上图的时间轮，第 1 层的时间精度为 1 ，第 2 层的时间精度为 20 ，第 3 层的时间精度为 400。假如我们需要添加一个 350s 后执行的任务 A 的话（当前时间是 0s），这个任务会被放在第 2 层（因为第二层的时间跨度为 20*20=400&gt;350）的第 350/20=17 个时间格子。</p>
<p>当第一层转了 17 圈之后，时间过去了 340s ，第 2 层的指针此时来到第 17 个时间格子。此时，第 2 层第 17 个格子的任务会被移动到第 1 层。</p>
<p>任务 A 当前是 10s 之后执行，因此它会被移动到第 1 层的第 10 个时间格子。</p>
<p>这里在层与层之间的移动也叫做时间轮的升降级。参考手表来理解就好！</p>
<p><img src="https://img-blog.csdnimg.cn/20210607195206797.png" alt="" loading="lazy"></p>
<p><strong>时间轮比较适合任务数量比较多的定时任务场景，它的任务写入和执行的时间复杂度都是 0（1）。</strong></p>
<h2 id="分布式定时任务技术选型" tabindex="-1"><a class="header-anchor" href="#分布式定时任务技术选型" aria-hidden="true">#</a> 分布式定时任务技术选型</h2>
<p>上面提到的一些定时任务的解决方案都是在单机下执行的，适用于比较简单的定时任务场景比如每天凌晨备份一次数据。</p>
<p>如果我们需要一些高级特性比如支持任务在分布式场景下的分片和高可用的话，我们就需要用到分布式任务调度框架了。</p>
<p>通常情况下，一个定时任务的执行往往涉及到下面这些角色：</p>
<ul>
<li><strong>任务</strong> ： 首先肯定是要执行的任务，这个任务就是具体的业务逻辑比如定时发送文章。</li>
<li><strong>调度器</strong> ：其次是调度中心，调度中心主要负责任务管理，会分配任务给执行器。</li>
<li><strong>执行器</strong> ： 最后就是执行器，执行器接收调度器分派的任务并执行。</li>
</ul>
<h3 id="quartz" tabindex="-1"><a class="header-anchor" href="#quartz" aria-hidden="true">#</a> Quartz</h3>
<p><img src="https://img-blog.csdnimg.cn/2021052814502425.png" alt="" loading="lazy"></p>
<p>一个很火的开源任务调度框架，完全由<code v-pre>Java</code>写成。<code v-pre>Quartz</code> 可以说是 Java 定时任务领域的老大哥或者说参考标准，其他的任务调度框架基本都是基于 <code v-pre>Quartz</code> 开发的，比如当当网的<code v-pre>elastic-job</code>就是基于<code v-pre>quartz</code>二次开发之后的分布式调度解决方案。</p>
<p>使用 <code v-pre>Quartz</code> 可以很方便地与 <code v-pre>Spring</code> 集成，并且支持动态添加任务和集群。但是，<code v-pre>Quartz</code> 使用起来也比较麻烦，API 繁琐。</p>
<p>并且，<code v-pre>Quzrtz</code> 并没有内置 UI 管理控制台，不过你可以使用 <a href="https://github.com/zhaopeiym/quartzui" target="_blank" rel="noopener noreferrer">quartzui<ExternalLinkIcon/></a> 这个开源项目来解决这个问题。</p>
<p>另外，<code v-pre>Quartz</code> 虽然也支持分布式任务。但是，它是在数据库层面，通过数据库的锁机制做的，有非常多的弊端比如系统侵入性严重、节点负载不均衡。有点伪分布式的味道。</p>
<p><strong>优缺点总结：</strong></p>
<ul>
<li>优点： 可以与 <code v-pre>Spring</code> 集成，并且支持动态添加任务和集群。</li>
<li>缺点 ：分布式支持不友好，没有内置 UI 管理控制台、使用麻烦（相比于其他同类型框架来说）</li>
</ul>
<h3 id="elastic-job" tabindex="-1"><a class="header-anchor" href="#elastic-job" aria-hidden="true">#</a> Elastic-Job</h3>
<p><img src="https://img-blog.csdnimg.cn/20210528144508114.png" alt="" loading="lazy"></p>
<p><code v-pre>Elastic-Job</code> 是当当网开源的一个基于<code v-pre>Quartz</code>和<code v-pre>ZooKeeper</code>的分布式调度解决方案，由两个相互独立的子项目 <code v-pre>Elastic-Job-Lite</code> 和 <code v-pre>Elastic-Job-Cloud</code> 组成，一般我们只要使用 <code v-pre>Elastic-Job-Lite</code> 就好。</p>
<p><code v-pre>ElasticJob</code> 支持任务在分布式场景下的分片和高可用、任务可视化管理等功能。</p>
<p><img src="https://img-blog.csdnimg.cn/20210608080437356.png" alt="" loading="lazy"></p>
<p>ElasticJob-Lite 的架构设计如下图所示：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-a8f63f828666d43009d5d3497bcbd2cfb61.png" alt="" loading="lazy"></p>
<p>从上图可以看出，<code v-pre>Elastic-Job</code> 没有调度中心这一概念，而是使用 <code v-pre>ZooKeeper</code> 作为注册中心，注册中心负责协调分配任务到不同的节点上。</p>
<p>Elastic-Job 中的定时调度都是由执行器自行触发，这种设计也被称为去中心化设计（调度和处理都是执行器单独完成）。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ElasticJobConf</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"dayJob"</span><span class="token punctuation">,</span> cron <span class="token operator">=</span> <span class="token string">"0/10 * * * * ?"</span><span class="token punctuation">,</span> shardingTotalCount <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span>
        shardingItemParameters <span class="token operator">=</span> <span class="token string">"0=AAAA,1=BBBB"</span><span class="token punctuation">,</span> description <span class="token operator">=</span> <span class="token string">"简单任务"</span><span class="token punctuation">,</span> failover <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestJob</span> <span class="token keyword">implements</span> <span class="token class-name">SimpleJob</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">ShardingContext</span> shardingContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"TestJob任务名：【{}】, 片数：【{}】, param=【{}】"</span><span class="token punctuation">,</span> shardingContext<span class="token punctuation">.</span><span class="token function">getJobName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> shardingContext<span class="token punctuation">.</span><span class="token function">getShardingTotalCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                shardingContext<span class="token punctuation">.</span><span class="token function">getShardingParameter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>相关地址：</strong></p>
<ul>
<li>Github 地址：<a href="https://github.com/apache/shardingsphere-elasticjob%E3%80%82" target="_blank" rel="noopener noreferrer">https://github.com/apache/shardingsphere-elasticjob。<ExternalLinkIcon/></a></li>
<li>官方网站：<a href="https://shardingsphere.apache.org/elasticjob/index_zh.html" target="_blank" rel="noopener noreferrer">https://shardingsphere.apache.org/elasticjob/index_zh.html<ExternalLinkIcon/></a> 。</li>
</ul>
<p><strong>优缺点总结：</strong></p>
<ul>
<li>优点 ：可以与 <code v-pre>Spring</code> 集成、支持分布式、支持集群、性能不错</li>
<li>缺点 ：依赖了额外的中间件比如 Zookeeper（复杂度增加，可靠性降低、维护成本变高）</li>
</ul>
<h3 id="xxl-job" tabindex="-1"><a class="header-anchor" href="#xxl-job" aria-hidden="true">#</a> XXL-JOB</h3>
<p><img src="https://img-blog.csdnimg.cn/20210528144611728.png" alt="" loading="lazy"></p>
<p><code v-pre>XXL-JOB</code> 于 2015 年开源，是一款优秀的轻量级分布式任务调度框架，支持任务可视化管理、弹性扩容缩容、任务失败重试和告警、任务分片等功能，</p>
<p><img src="https://img-blog.csdnimg.cn/20210608080550433.png" alt="" loading="lazy"></p>
<p>根据 <code v-pre>XXL-JOB</code> 官网介绍，其解决了很多 <code v-pre>Quartz</code> 的不足。</p>
<p><img src="https://img-blog.csdnimg.cn/20210607202503193.png" alt="" loading="lazy"></p>
<p><code v-pre>XXL-JOB</code> 的架构设计如下图所示：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-b8ecc6acf651f112c4dfae98243d72adea3.png" alt="" loading="lazy"></p>
<p>从上图可以看出，<code v-pre>XXL-JOB</code> 由 <strong>调度中心</strong> 和 <strong>执行器</strong> 两大部分组成。调度中心主要负责任务管理、执行器管理以及日志管理。执行器主要是接收调度信号并处理。另外，调度中心进行任务调度时，是通过自研 RPC 来实现的。</p>
<p>不同于 <code v-pre>Elastic-Job</code> 的去中心化设计， <code v-pre>XXL-JOB</code> 的这种设计也被称为中心化设计（调度中心调度多个执行器执行任务）。</p>
<p>和 <code v-pre>Quzrtz</code> 类似 <code v-pre>XXL-JOB</code> 也是基于数据库锁调度任务，存在性能瓶颈。不过，一般在任务量不是特别大的情况下，没有什么影响的，可以满足绝大部分公司的要求。</p>
<p>不要被 <code v-pre>XXL-JOB</code> 的架构图给吓着了，实际上，我们要用 <code v-pre>XXL-JOB</code> 的话，只需要重写 <code v-pre>IJobHandler</code> 自定义任务执行逻辑就可以了，非常易用！</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@JobHandler</span><span class="token punctuation">(</span>value<span class="token operator">=</span><span class="token string">"myApiJobHandler"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyApiJobHandler</span> <span class="token keyword">extends</span> <span class="token class-name">IJobHandler</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">ReturnT</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">String</span> param<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token comment">//......</span>
        <span class="token keyword">return</span> <span class="token class-name">ReturnT</span><span class="token punctuation">.</span>SUCCESS<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还可以直接基于注解定义任务。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@XxlJob</span><span class="token punctuation">(</span><span class="token string">"myAnnotationJobHandler"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ReturnT</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">myAnnotationJobHandler</span><span class="token punctuation">(</span><span class="token class-name">String</span> param<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
  <span class="token comment">//......</span>
  <span class="token keyword">return</span> <span class="token class-name">ReturnT</span><span class="token punctuation">.</span>SUCCESS<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://img-blog.csdnimg.cn/20210607200728212.png" alt="" loading="lazy"></p>
<p><strong>相关地址：</strong></p>
<ul>
<li>Github 地址：<a href="https://github.com/xuxueli/xxl-job/%E3%80%82" target="_blank" rel="noopener noreferrer">https://github.com/xuxueli/xxl-job/。<ExternalLinkIcon/></a></li>
<li>官方介绍：<a href="https://www.xuxueli.com/xxl-job/" target="_blank" rel="noopener noreferrer">https://www.xuxueli.com/xxl-job/<ExternalLinkIcon/></a> 。</li>
</ul>
<p><strong>优缺点总结：</strong></p>
<ul>
<li>优点：开箱即用（学习成本比较低）、与 Spring 集成、支持分布式、支持集群、内置了 UI 管理控制台。</li>
<li>缺点：不支持动态添加任务（如果一定想要动态创建任务也是支持的，参见：<a href="https://github.com/xuxueli/xxl-job/issues/277" target="_blank" rel="noopener noreferrer">xxl-job issue277<ExternalLinkIcon/></a>）。</li>
</ul>
<h3 id="powerjob" tabindex="-1"><a class="header-anchor" href="#powerjob" aria-hidden="true">#</a> PowerJob</h3>
<p><img src="https://img-blog.csdnimg.cn/20210528145009701.png" alt="" loading="lazy"></p>
<p>非常值得关注的一个分布式任务调度框架，分布式任务调度领域的新星。目前，已经有很多公司接入比如 OPPO、京东、中通、思科。</p>
<p>这个框架的诞生也挺有意思的，PowerJob 的作者当时在阿里巴巴实习过，阿里巴巴那会使用的是内部自研的 SchedulerX（阿里云付费产品）。实习期满之后，PowerJob 的作者离开了阿里巴巴。想着说自研一个 SchedulerX，防止哪天 SchedulerX 满足不了需求，于是 PowerJob 就诞生了。</p>
<p>更多关于 PowerJob 的故事，小伙伴们可以去看看 PowerJob 作者的视频 <a href="https://www.bilibili.com/video/BV1SK411A7F3/" target="_blank" rel="noopener noreferrer">《我和我的任务调度中间件》<ExternalLinkIcon/></a>。简单点概括就是：“游戏没啥意思了，我要扛起了新一代分布式任务调度与计算框架的大旗！”。</p>
<p>由于 SchedulerX 属于人民币产品，我这里就不过多介绍。PowerJob 官方也对比过其和 QuartZ、XXL-JOB 以及 SchedulerX。</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-795f5e9b0d875063717b1ee6a08f2ff1c01.png" alt="" loading="lazy"></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这篇文章中，我主要介绍了：</p>
<ul>
<li><strong>定时任务的相关概念</strong> ：为什么需要定时任务、定时任务中的核心角色、分布式定时任务。</li>
<li><strong>定时任务的技术选型</strong> ： XXL-JOB 2015 年推出，已经经过了很多年的考验。XXL-JOB 轻量级，并且使用起来非常简单。虽然存在性能瓶颈，但是，在绝大多数情况下，对于企业的基本需求来说是没有影响的。PowerJob 属于分布式任务调度领域里的新星，其稳定性还有待继续考察。ElasticJob 由于在架构设计上是基于 Zookeeper ，而 XXL-JOB 是基于数据库，性能方面的话，ElasticJob 略胜一筹。</li>
</ul>
<p>这篇文章并没有介绍到实际使用，但是，并不代表实际使用不重要。我在写这篇文章之前，已经动手写过相应的 Demo。像 Quartz，我在大学那会就用过。不过，当时用的是 Spring 。为了能够更好地体验，我自己又在 Spring Boot 上实际体验了一下。如果你并没有实际使用某个框架，就直接说它并不好用的话，是站不住脚的。</p>
<p>最后，这篇文章要感谢艿艿的帮助，写这篇文章的时候向艿艿询问过一些问题。推荐一篇艿艿写的偏实战类型的硬核文章：<a href="https://mp.weixin.qq.com/s?__biz=MzUzMTA2NTU2Ng==&amp;mid=2247490679&amp;idx=1&amp;sn=25374dbdcca95311d41be5d7b7db454d&amp;chksm=fa4963c6cd3eead055bb9cd10cca13224bb35d0f7373a27aa22a55495f71e24b8273a7603314&amp;scene=27#wechat_redirect" target="_blank" rel="noopener noreferrer">《Spring Job？Quartz？XXL-Job？年轻人才做选择，艿艿全莽~》<ExternalLinkIcon/></a> 。</p>
</div></template>
