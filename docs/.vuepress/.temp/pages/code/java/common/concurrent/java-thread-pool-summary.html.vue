<template><div><h2 id="一-使用线程池的好处" tabindex="-1"><a class="header-anchor" href="#一-使用线程池的好处" aria-hidden="true">#</a> 一 使用线程池的好处</h2>
<blockquote>
<p><strong>池化技术想必大家已经屡见不鲜了，线程池、数据库连接池、Http 连接池等等都是对这个思想的应用。池化技术的思想主要是为了减少每次获取资源的消耗，提高对资源的利用率。</strong></p>
</blockquote>
<p><strong>线程池</strong>提供了一种限制和管理资源（包括执行一个任务）的方式。 每个<strong>线程池</strong>还维护一些基本统计信息，例如已完成任务的数量。</p>
<p>这里借用《Java 并发编程的艺术》提到的来说一下<strong>使用线程池的好处</strong>：</p>
<ul>
<li><strong>降低资源消耗</strong>。通过重复利用已创建的线程降低线程创建和销毁造成的消耗。</li>
<li><strong>提高响应速度</strong>。当任务到达时，任务可以不需要等到线程创建就能立即执行。</li>
<li><strong>提高线程的可管理性</strong>。线程是稀缺资源，如果无限制的创建，不仅会消耗系统资源，还会降低系统的稳定性，使用线程池可以进行统一的分配，调优和监控。</li>
</ul>
<h2 id="二-executor-框架" tabindex="-1"><a class="header-anchor" href="#二-executor-框架" aria-hidden="true">#</a> 二 Executor 框架</h2>
<h3 id="_2-1-简介" tabindex="-1"><a class="header-anchor" href="#_2-1-简介" aria-hidden="true">#</a> 2.1 简介</h3>
<p><code v-pre>Executor</code> 框架是 Java5 之后引进的，在 Java 5 之后，通过 <code v-pre>Executor</code> 来启动线程比使用 <code v-pre>Thread</code> 的 <code v-pre>start</code> 方法更好，除了更易管理，效率更好（用线程池实现，节约开销）外，还有关键的一点：有助于避免 this 逃逸问题。</p>
<blockquote>
<p>补充：this 逃逸是指在构造函数返回之前其他线程就持有该对象的引用. 调用尚未构造完全的对象的方法可能引发令人疑惑的错误。</p>
</blockquote>
<p><code v-pre>Executor</code> 框架不仅包括了线程池的管理，还提供了线程工厂、队列以及拒绝策略等，<code v-pre>Executor</code> 框架让并发编程变得更加简单。</p>
<h3 id="_2-2-executor-框架结构-主要由三大部分组成" tabindex="-1"><a class="header-anchor" href="#_2-2-executor-框架结构-主要由三大部分组成" aria-hidden="true">#</a> 2.2 Executor 框架结构(主要由三大部分组成)</h3>
<h4 id="_1-任务-runnable-callable" tabindex="-1"><a class="header-anchor" href="#_1-任务-runnable-callable" aria-hidden="true">#</a> 1) 任务(<code v-pre>Runnable</code> /<code v-pre>Callable</code>)</h4>
<p>执行任务需要实现的 <strong><code v-pre>Runnable</code> 接口</strong> 或 <strong><code v-pre>Callable</code>接口</strong>。<strong><code v-pre>Runnable</code> 接口</strong>或 <strong><code v-pre>Callable</code> 接口</strong> 实现类都可以被 <strong><code v-pre>ThreadPoolExecutor</code></strong> 或 <strong><code v-pre>ScheduledThreadPoolExecutor</code></strong> 执行。</p>
<h4 id="_2-任务的执行-executor" tabindex="-1"><a class="header-anchor" href="#_2-任务的执行-executor" aria-hidden="true">#</a> 2) 任务的执行(<code v-pre>Executor</code>)</h4>
<p>如下图所示，包括任务执行机制的核心接口 <strong><code v-pre>Executor</code></strong> ，以及继承自 <code v-pre>Executor</code> 接口的 <strong><code v-pre>ExecutorService</code> 接口。<code v-pre>ThreadPoolExecutor</code></strong> 和 <strong><code v-pre>ScheduledThreadPoolExecutor</code></strong> 这两个关键类实现了 <strong>ExecutorService 接口</strong>。</p>
<p><strong>这里提了很多底层的类关系，但是，实际上我们需要更多关注的是 <code v-pre>ThreadPoolExecutor</code> 这个类，这个类在我们实际使用线程池的过程中，使用频率还是非常高的。</strong></p>
<blockquote>
<p><strong>注意：</strong> 通过查看 <code v-pre>ScheduledThreadPoolExecutor</code> 源代码我们发现 <code v-pre>ScheduledThreadPoolExecutor</code> 实际上是继承了 <code v-pre>ThreadPoolExecutor</code> 并实现了 ScheduledExecutorService ，而 <code v-pre>ScheduledExecutorService</code> 又实现了 <code v-pre>ExecutorService</code>，正如我们下面给出的类关系图显示的一样。</p>
</blockquote>
<p><strong><code v-pre>ThreadPoolExecutor</code> 类描述:</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//AbstractExecutorService实现了ExecutorService接口</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadPoolExecutor</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractExecutorService</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>ScheduledThreadPoolExecutor</code> 类描述:</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//ScheduledExecutorService继承ExecutorService接口</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ScheduledThreadPoolExecutor</span>
        <span class="token keyword">extends</span> <span class="token class-name">ThreadPoolExecutor</span>
        <span class="token keyword">implements</span> <span class="token class-name">ScheduledExecutorService</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/code/java/common/concurrent/images/java-thread-pool-summary/任务的执行相关接口.png" alt="任务的执行相关接口" loading="lazy"></p>
<h4 id="_3-异步计算的结果-future" tabindex="-1"><a class="header-anchor" href="#_3-异步计算的结果-future" aria-hidden="true">#</a> 3) 异步计算的结果(<code v-pre>Future</code>)</h4>
<p><strong><code v-pre>Future</code></strong> 接口以及 <code v-pre>Future</code> 接口的实现类 <strong><code v-pre>FutureTask</code></strong> 类都可以代表异步计算的结果。</p>
<p>当我们把 <strong><code v-pre>Runnable</code>接口</strong> 或 <strong><code v-pre>Callable</code> 接口</strong> 的实现类提交给 <strong><code v-pre>ThreadPoolExecutor</code></strong> 或 <strong><code v-pre>ScheduledThreadPoolExecutor</code></strong> 执行。（调用 <code v-pre>submit()</code> 方法时会返回一个 <strong><code v-pre>FutureTask</code></strong> 对象）</p>
<h3 id="_2-3-executor-框架的使用示意图" tabindex="-1"><a class="header-anchor" href="#_2-3-executor-框架的使用示意图" aria-hidden="true">#</a> 2.3 Executor 框架的使用示意图</h3>
<p><img src="@source/code/java/common/concurrent/images/java-thread-pool-summary/Executor框架的使用示意图.png" alt="Executor 框架的使用示意图" loading="lazy"></p>
<ol>
<li><strong>主线程首先要创建实现 <code v-pre>Runnable</code> 或者 <code v-pre>Callable</code> 接口的任务对象。</strong></li>
<li><strong>把创建完成的实现 <code v-pre>Runnable</code>/<code v-pre>Callable</code>接口的 对象直接交给 <code v-pre>ExecutorService</code> 执行</strong>: <code v-pre>ExecutorService.execute（Runnable command）</code>）或者也可以把 <code v-pre>Runnable</code> 对象或<code v-pre>Callable</code> 对象提交给 <code v-pre>ExecutorService</code> 执行（<code v-pre>ExecutorService.submit（Runnable task）</code>或 <code v-pre>ExecutorService.submit（Callable &lt;T&gt; task）</code>）。</li>
<li><strong>如果执行 <code v-pre>ExecutorService.submit（…）</code>，<code v-pre>ExecutorService</code> 将返回一个实现<code v-pre>Future</code>接口的对象</strong>（我们刚刚也提到过了执行 <code v-pre>execute()</code>方法和 <code v-pre>submit()</code>方法的区别，<code v-pre>submit()</code>会返回一个 <code v-pre>FutureTask 对象）。由于 FutureTask</code> 实现了 <code v-pre>Runnable</code>，我们也可以创建 <code v-pre>FutureTask</code>，然后直接交给 <code v-pre>ExecutorService</code> 执行。</li>
<li><strong>最后，主线程可以执行 <code v-pre>FutureTask.get()</code>方法来等待任务执行完成。主线程也可以执行 <code v-pre>FutureTask.cancel（boolean mayInterruptIfRunning）</code>来取消此任务的执行。</strong></li>
</ol>
<h2 id="三-重要-threadpoolexecutor-类简单介绍" tabindex="-1"><a class="header-anchor" href="#三-重要-threadpoolexecutor-类简单介绍" aria-hidden="true">#</a> 三 (重要)ThreadPoolExecutor 类简单介绍</h2>
<p><strong>线程池实现类 <code v-pre>ThreadPoolExecutor</code> 是 <code v-pre>Executor</code> 框架最核心的类。</strong></p>
<h3 id="_3-1-threadpoolexecutor-类分析" tabindex="-1"><a class="header-anchor" href="#_3-1-threadpoolexecutor-类分析" aria-hidden="true">#</a> 3.1 ThreadPoolExecutor 类分析</h3>
<p><code v-pre>ThreadPoolExecutor</code> 类中提供的四个构造方法。我们来看最长的那个，其余三个都是在这个构造方法的基础上产生（其他几个构造方法说白点都是给定某些默认参数的构造方法比如默认制定拒绝策略是什么）。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 用给定的初始参数创建一个新的ThreadPoolExecutor。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token keyword">int</span> corePoolSize<span class="token punctuation">,</span><span class="token comment">//线程池的核心线程数量</span>
                              <span class="token keyword">int</span> maximumPoolSize<span class="token punctuation">,</span><span class="token comment">//线程池的最大线程数</span>
                              <span class="token keyword">long</span> keepAliveTime<span class="token punctuation">,</span><span class="token comment">//当线程数大于核心线程数时，多余的空闲线程存活的最长时间</span>
                              <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">,</span><span class="token comment">//时间单位</span>
                              <span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">></span></span> workQueue<span class="token punctuation">,</span><span class="token comment">//任务队列，用来储存等待执行任务的队列</span>
                              <span class="token class-name">ThreadFactory</span> threadFactory<span class="token punctuation">,</span><span class="token comment">//线程工厂，用来创建线程，一般默认即可</span>
                              <span class="token class-name">RejectedExecutionHandler</span> handler<span class="token comment">//拒绝策略，当提交的任务过多而不能及时处理时，我们可以定制策略来处理任务</span>
                               <span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>corePoolSize <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span>
            maximumPoolSize <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span>
            maximumPoolSize <span class="token operator">&lt;</span> corePoolSize <span class="token operator">||</span>
            keepAliveTime <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>workQueue <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> threadFactory <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> handler <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>corePoolSize <span class="token operator">=</span> corePoolSize<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>maximumPoolSize <span class="token operator">=</span> maximumPoolSize<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>workQueue <span class="token operator">=</span> workQueue<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>keepAliveTime <span class="token operator">=</span> unit<span class="token punctuation">.</span><span class="token function">toNanos</span><span class="token punctuation">(</span>keepAliveTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>threadFactory <span class="token operator">=</span> threadFactory<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>handler <span class="token operator">=</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面这些对创建非常重要，在后面使用线程池的过程中你一定会用到！所以，务必拿着小本本记清楚。</p>
<p><strong><code v-pre>ThreadPoolExecutor</code> 3 个最重要的参数：</strong></p>
<ul>
<li><strong><code v-pre>corePoolSize</code> :</strong> 核心线程数线程数定义了最小可以同时运行的线程数量。</li>
<li><strong><code v-pre>maximumPoolSize</code> :</strong> 当队列中存放的任务达到队列容量的时候，当前可以同时运行的线程数量变为最大线程数。</li>
<li><strong><code v-pre>workQueue</code>:</strong> 当新任务来的时候会先判断当前运行的线程数量是否达到核心线程数，如果达到的话，新任务就会被存放在队列中。</li>
</ul>
<p><code v-pre>ThreadPoolExecutor</code>其他常见参数 :</p>
<ol>
<li><strong><code v-pre>keepAliveTime</code></strong>:当线程池中的线程数量大于 <code v-pre>corePoolSize</code> 的时候，如果这时没有新的任务提交，核心线程外的线程不会立即销毁，而是会等待，直到等待的时间超过了 <code v-pre>keepAliveTime</code>才会被回收销毁；</li>
<li><strong><code v-pre>unit</code></strong> : <code v-pre>keepAliveTime</code> 参数的时间单位。</li>
<li><strong><code v-pre>threadFactory</code></strong> :executor 创建新线程的时候会用到。</li>
<li><strong><code v-pre>handler</code></strong> :饱和策略。关于饱和策略下面单独介绍一下。</li>
</ol>
<p>下面这张图可以加深你对线程池中各个参数的相互关系的理解（图片来源：《Java 性能调优实战》）：</p>
<p><img src="@source/code/java/common/concurrent/images/java-thread-pool-summary/线程池各个参数之间的关系.png" alt="线程池各个参数的关系" loading="lazy"></p>
<p><strong><code v-pre>ThreadPoolExecutor</code> 饱和策略定义:</strong></p>
<p>如果当前同时运行的线程数量达到最大线程数量并且队列也已经被放满了任务时，<code v-pre>ThreadPoolTaskExecutor</code> 定义一些策略:</p>
<ul>
<li><strong><code v-pre>ThreadPoolExecutor.AbortPolicy</code></strong> ：抛出 <code v-pre>RejectedExecutionException</code>来拒绝新任务的处理。</li>
<li><strong><code v-pre>ThreadPoolExecutor.CallerRunsPolicy</code></strong> ：调用执行自己的线程运行任务，也就是直接在调用<code v-pre>execute</code>方法的线程中运行(<code v-pre>run</code>)被拒绝的任务，如果执行程序已关闭，则会丢弃该任务。因此这种策略会降低对于新任务提交速度，影响程序的整体性能。如果您的应用程序可以承受此延迟并且你要求任何一个任务请求都要被执行的话，你可以选择这个策略。</li>
<li><strong><code v-pre>ThreadPoolExecutor.DiscardPolicy</code></strong> ：不处理新任务，直接丢弃掉。</li>
<li><strong><code v-pre>ThreadPoolExecutor.DiscardOldestPolicy</code></strong> ： 此策略将丢弃最早的未处理的任务请求。</li>
</ul>
<p>举个例子：</p>
<blockquote>
<p>Spring 通过 <code v-pre>ThreadPoolTaskExecutor</code> 或者我们直接通过 <code v-pre>ThreadPoolExecutor</code> 的构造函数创建线程池的时候，当我们不指定 <code v-pre>RejectedExecutionHandler</code> 饱和策略的话来配置线程池的时候默认使用的是 <code v-pre>ThreadPoolExecutor.AbortPolicy</code>。在默认情况下，<code v-pre>ThreadPoolExecutor</code> 将抛出 <code v-pre>RejectedExecutionException</code> 来拒绝新来的任务 ，这代表你将丢失对这个任务的处理。 对于可伸缩的应用程序，建议使用 <code v-pre>ThreadPoolExecutor.CallerRunsPolicy</code>。当最大池被填满时，此策略为我们提供可伸缩队列。（这个直接查看 <code v-pre>ThreadPoolExecutor</code> 的构造函数源码就可以看出，比较简单的原因，这里就不贴代码了。）</p>
</blockquote>
<h3 id="_3-2-推荐使用-threadpoolexecutor-构造函数创建线程池" tabindex="-1"><a class="header-anchor" href="#_3-2-推荐使用-threadpoolexecutor-构造函数创建线程池" aria-hidden="true">#</a> 3.2 推荐使用 <code v-pre>ThreadPoolExecutor</code> 构造函数创建线程池</h3>
<p>在《阿里巴巴 Java 开发手册》“并发处理”这一章节，明确指出线程资源必须通过线程池提供，不允许在应用中自行显式创建线程。</p>
<p><strong>为什么呢？</strong></p>
<blockquote>
<p>使用线程池的好处是减少在创建和销毁线程上所消耗的时间以及系统资源开销，解决资源不足的问题。如果不使用线程池，有可能会造成系统创建大量同类线程而导致消耗完内存或者“过度切换”的问题。</p>
</blockquote>
<p>另外，《阿里巴巴 Java 开发手册》中强制线程池不允许使用 <code v-pre>Executors</code> 去创建，而是通过 <code v-pre>ThreadPoolExecutor</code> 构造函数的方式，这样的处理方式让写的同学更加明确线程池的运行规则，规避资源耗尽的风险</p>
<blockquote>
<p><code v-pre>Executors</code> 返回线程池对象的弊端如下(后文会详细介绍到)：</p>
<ul>
<li><strong><code v-pre>FixedThreadPool</code> 和 <code v-pre>SingleThreadExecutor</code></strong> ： 允许请求的队列长度为 <code v-pre>Integer.MAX_VALUE</code>,可能堆积大量的请求，从而导致 OOM。</li>
<li><strong><code v-pre>CachedThreadPool</code> 和 <code v-pre>ScheduledThreadPool</code></strong> ： 允许创建的线程数量为 <code v-pre>Integer.MAX_VALUE</code> ，可能会创建大量线程，从而导致 OOM。</li>
</ul>
</blockquote>
<p><strong>方式一：通过<code v-pre>ThreadPoolExecutor</code>构造函数实现（推荐）</strong>
<img src="@source/code/java/common/concurrent/images/java-thread-pool-summary/threadpoolexecutor构造函数.png" alt="通过构造方法实现" loading="lazy"></p>
<p><strong>方式二：通过 <code v-pre>Executor</code> 框架的工具类 <code v-pre>Executors</code> 来实现</strong>
我们可以创建三种类型的 <code v-pre>ThreadPoolExecutor</code>：</p>
<ul>
<li><code v-pre>FixedThreadPool</code></li>
<li><code v-pre>SingleThreadExecutor</code></li>
<li>CachedThreadPool</li>
</ul>
<p>对应 Executors 工具类中的方法如图所示：</p>
<p><img src="@source/code/java/common/concurrent/images/java-thread-pool-summary/Executors工具类.png" alt="通过Executor 框架的工具类Executors来实现" loading="lazy"></p>
<h2 id="四-threadpoolexecutor-使用-原理分析" tabindex="-1"><a class="header-anchor" href="#四-threadpoolexecutor-使用-原理分析" aria-hidden="true">#</a> 四 ThreadPoolExecutor 使用+原理分析</h2>
<p>我们上面讲解了 <code v-pre>Executor</code>框架以及 <code v-pre>ThreadPoolExecutor</code> 类，下面让我们实战一下，来通过写一个 <code v-pre>ThreadPoolExecutor</code> 的小 Demo 来回顾上面的内容。</p>
<h3 id="_4-1-示例代码-runnable-threadpoolexecutor" tabindex="-1"><a class="header-anchor" href="#_4-1-示例代码-runnable-threadpoolexecutor" aria-hidden="true">#</a> 4.1 示例代码:<code v-pre>Runnable</code>+<code v-pre>ThreadPoolExecutor</code></h3>
<p>首先创建一个 <code v-pre>Runnable</code> 接口的实现类（当然也可以是 <code v-pre>Callable</code> 接口，我们上面也说了两者的区别。）</p>
<p><code v-pre>MyRunnable.java</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 这是一个简单的Runnable类，需要大约5秒钟来执行其任务。
 * <span class="token keyword">@author</span> shuang.kou
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyRunnable</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> command<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>command <span class="token operator">=</span> s<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" Start. Time = "</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">processCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" End. Time = "</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">processCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>command<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编写测试程序，我们这里以阿里巴巴推荐的使用 <code v-pre>ThreadPoolExecutor</code> 构造函数自定义参数的方式来创建线程池。</p>
<p><code v-pre>ThreadPoolExecutorDemo.java</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ArrayBlockingQueue</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ThreadPoolExecutor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadPoolExecutorDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> CORE_POOL_SIZE <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> MAX_POOL_SIZE <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> QUEUE_CAPACITY <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Long</span> KEEP_ALIVE_TIME <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//使用阿里巴巴推荐的创建线程池的方式</span>
        <span class="token comment">//通过ThreadPoolExecutor构造函数自定义参数创建</span>
        <span class="token class-name">ThreadPoolExecutor</span> executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span>
                CORE_POOL_SIZE<span class="token punctuation">,</span>
                MAX_POOL_SIZE<span class="token punctuation">,</span>
                KEEP_ALIVE_TIME<span class="token punctuation">,</span>
                <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>QUEUE_CAPACITY<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor<span class="token punctuation">.</span>CallerRunsPolicy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//创建WorkerThread对象（WorkerThread类实现了Runnable 接口）</span>
            <span class="token class-name">Runnable</span> worker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyRunnable</span><span class="token punctuation">(</span><span class="token string">""</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//执行Runnable</span>
            executor<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>worker<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//终止线程池</span>
        executor<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>executor<span class="token punctuation">.</span><span class="token function">isTerminated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Finished all threads"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到我们上面的代码指定了：</p>
<ol>
<li><code v-pre>corePoolSize</code>: 核心线程数为 5。</li>
<li><code v-pre>maximumPoolSize</code> ：最大线程数 10</li>
<li><code v-pre>keepAliveTime</code> : 等待时间为 1L。</li>
<li><code v-pre>unit</code>: 等待时间的单位为 TimeUnit.SECONDS。</li>
<li><code v-pre>workQueue</code>：任务队列为 <code v-pre>ArrayBlockingQueue</code>，并且容量为 100;</li>
<li><code v-pre>handler</code>:饱和策略为 <code v-pre>CallerRunsPolicy</code>。</li>
</ol>
<p><strong>Output：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>pool-1-thread-3 Start. Time = Sun Apr 12 11:14:37 CST 2020
pool-1-thread-5 Start. Time = Sun Apr 12 11:14:37 CST 2020
pool-1-thread-2 Start. Time = Sun Apr 12 11:14:37 CST 2020
pool-1-thread-1 Start. Time = Sun Apr 12 11:14:37 CST 2020
pool-1-thread-4 Start. Time = Sun Apr 12 11:14:37 CST 2020
pool-1-thread-3 End. Time = Sun Apr 12 11:14:42 CST 2020
pool-1-thread-4 End. Time = Sun Apr 12 11:14:42 CST 2020
pool-1-thread-1 End. Time = Sun Apr 12 11:14:42 CST 2020
pool-1-thread-5 End. Time = Sun Apr 12 11:14:42 CST 2020
pool-1-thread-1 Start. Time = Sun Apr 12 11:14:42 CST 2020
pool-1-thread-2 End. Time = Sun Apr 12 11:14:42 CST 2020
pool-1-thread-5 Start. Time = Sun Apr 12 11:14:42 CST 2020
pool-1-thread-4 Start. Time = Sun Apr 12 11:14:42 CST 2020
pool-1-thread-3 Start. Time = Sun Apr 12 11:14:42 CST 2020
pool-1-thread-2 Start. Time = Sun Apr 12 11:14:42 CST 2020
pool-1-thread-1 End. Time = Sun Apr 12 11:14:47 CST 2020
pool-1-thread-4 End. Time = Sun Apr 12 11:14:47 CST 2020
pool-1-thread-5 End. Time = Sun Apr 12 11:14:47 CST 2020
pool-1-thread-3 End. Time = Sun Apr 12 11:14:47 CST 2020
pool-1-thread-2 End. Time = Sun Apr 12 11:14:47 CST 2020

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-线程池原理分析" tabindex="-1"><a class="header-anchor" href="#_4-2-线程池原理分析" aria-hidden="true">#</a> 4.2 线程池原理分析</h3>
<p>承接 4.1 节，我们通过代码输出结果可以看出：<strong>线程池首先会先执行 5 个任务，然后这些任务有任务被执行完的话，就会去拿新的任务执行。</strong> 大家可以先通过上面讲解的内容，分析一下到底是咋回事？（自己独立思考一会）</p>
<p>现在，我们就分析上面的输出内容来简单分析一下线程池原理。</p>
<p><strong>为了搞懂线程池的原理，我们需要首先分析一下 <code v-pre>execute</code>方法。</strong> 在 4.1 节中的 Demo 中我们使用 <code v-pre>executor.execute(worker)</code>来提交一个任务到线程池中去，这个方法非常重要，下面我们来看看它的源码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>   <span class="token comment">// 存放线程池的运行状态 (runState) 和线程池内有效线程的数量 (workerCount)</span>
   <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">AtomicInteger</span> ctl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token function">ctlOf</span><span class="token punctuation">(</span>RUNNING<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">workerCountOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> c <span class="token operator">&amp;</span> CAPACITY<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//任务队列</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">></span></span> workQueue<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果任务为null，则抛出异常。</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>command <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// ctl 中保存的线程池当前的一些状态信息</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> ctl<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//  下面会涉及到 3 步 操作</span>
        <span class="token comment">// 1.首先判断当前线程池中之行的任务数量是否小于 corePoolSize</span>
        <span class="token comment">// 如果小于的话，通过addWorker(command, true)新建一个线程，并将任务(command)添加到该线程中；然后，启动该线程从而执行任务。</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">workerCountOf</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">&lt;</span> corePoolSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">addWorker</span><span class="token punctuation">(</span>command<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            c <span class="token operator">=</span> ctl<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 2.如果当前之行的任务数量大于等于 corePoolSize 的时候就会走到这里</span>
        <span class="token comment">// 通过 isRunning 方法判断线程池状态，线程池处于 RUNNING 状态并且队列可以加入任务，该任务才会被加入进去</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isRunning</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> workQueue<span class="token punctuation">.</span><span class="token function">offer</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> recheck <span class="token operator">=</span> ctl<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 再次获取线程池状态，如果线程池状态不是 RUNNING 状态就需要从任务队列中移除任务，并尝试判断线程是否全部执行完毕。同时执行拒绝策略。</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isRunning</span><span class="token punctuation">(</span>recheck<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">remove</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token function">reject</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 如果当前线程池为空就新创建一个线程并执行。</span>
            <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">workerCountOf</span><span class="token punctuation">(</span>recheck<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token function">addWorker</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//3. 通过addWorker(command, false)新建一个线程，并将任务(command)添加到该线程中；然后，启动该线程从而执行任务。</span>
        <span class="token comment">//如果addWorker(command, false)执行失败，则通过reject()执行相应的拒绝策略的内容。</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">addWorker</span><span class="token punctuation">(</span>command<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token function">reject</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过下图可以更好的对上面这 3 步做一个展示，下图是我为了省事直接从网上找到，原地址不明。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/图解线程池实现原理.png" alt="图解线程池实现原理" loading="lazy"></p>
<p><strong><code v-pre>addWorker</code> 这个方法主要用来创建新的工作线程，如果返回 true 说明创建和启动工作线程成功，否则的话返回的就是 false。</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token comment">// 全局锁，并发操作必备</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> mainLock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 跟踪线程池的最大大小，只有在持有全局锁mainLock的前提下才能访问此集合</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> largestPoolSize<span class="token punctuation">;</span>
    <span class="token comment">// 工作线程集合，存放线程池中所有的（活跃的）工作线程，只有在持有全局锁mainLock的前提下才能访问此集合</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Worker</span><span class="token punctuation">></span></span> workers <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//获取线程池状态</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">runStateOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> c<span class="token punctuation">)</span>     <span class="token punctuation">{</span> <span class="token keyword">return</span> c <span class="token operator">&amp;</span> <span class="token operator">~</span>CAPACITY<span class="token punctuation">;</span> <span class="token punctuation">}</span>
    <span class="token comment">//判断线程池的状态是否为 Running</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isRunning</span><span class="token punctuation">(</span><span class="token keyword">int</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> c <span class="token operator">&lt;</span> SHUTDOWN<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 添加新的工作线程到线程池
     * <span class="token keyword">@param</span> <span class="token parameter">firstTask</span> 要执行
     * <span class="token keyword">@param</span> <span class="token parameter">core</span>参数为true的话表示使用线程池的基本大小，为false使用线程池最大大小
     * <span class="token keyword">@return</span> 添加成功就返回true否则返回false
     */</span>
   <span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">addWorker</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> firstTask<span class="token punctuation">,</span> <span class="token keyword">boolean</span> core<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        retry<span class="token operator">:</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//这两句用来获取线程池的状态</span>
            <span class="token keyword">int</span> c <span class="token operator">=</span> ctl<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> rs <span class="token operator">=</span> <span class="token function">runStateOf</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// Check if queue empty only if necessary.</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>rs <span class="token operator">>=</span> SHUTDOWN <span class="token operator">&amp;&amp;</span>
                <span class="token operator">!</span> <span class="token punctuation">(</span>rs <span class="token operator">==</span> SHUTDOWN <span class="token operator">&amp;&amp;</span>
                   firstTask <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
                   <span class="token operator">!</span> workQueue<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
               <span class="token comment">//获取线程池中工作的线程的数量</span>
                <span class="token keyword">int</span> wc <span class="token operator">=</span> <span class="token function">workerCountOf</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// core参数为true的话表明队列也满了，线程池大小变为 maximumPoolSize</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>wc <span class="token operator">>=</span> CAPACITY <span class="token operator">||</span>
                    wc <span class="token operator">>=</span> <span class="token punctuation">(</span>core <span class="token operator">?</span> corePoolSize <span class="token operator">:</span> maximumPoolSize<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
               <span class="token comment">//原子操作将workcount的数量加1</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndIncrementWorkerCount</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token keyword">break</span> retry<span class="token punctuation">;</span>
                <span class="token comment">// 如果线程的状态改变了就再次执行上述操作</span>
                c <span class="token operator">=</span> ctl<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">runStateOf</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">!=</span> rs<span class="token punctuation">)</span>
                    <span class="token keyword">continue</span> retry<span class="token punctuation">;</span>
                <span class="token comment">// else CAS failed due to workerCount change; retry inner loop</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 标记工作线程是否启动成功</span>
        <span class="token keyword">boolean</span> workerStarted <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token comment">// 标记工作线程是否创建成功</span>
        <span class="token keyword">boolean</span> workerAdded <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token class-name">Worker</span> w <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>

            w <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Worker</span><span class="token punctuation">(</span>firstTask<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">final</span> <span class="token class-name">Thread</span> t <span class="token operator">=</span> w<span class="token punctuation">.</span>thread<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token comment">// 加锁</span>
                <span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> mainLock <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>mainLock<span class="token punctuation">;</span>
                mainLock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                   <span class="token comment">//获取线程池状态</span>
                    <span class="token keyword">int</span> rs <span class="token operator">=</span> <span class="token function">runStateOf</span><span class="token punctuation">(</span>ctl<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                   <span class="token comment">//rs &lt; SHUTDOWN 如果线程池状态依然为RUNNING,并且线程的状态是存活的话，就会将工作线程添加到工作线程集合中</span>
                  <span class="token comment">//(rs=SHUTDOWN &amp;&amp; firstTask == null)如果线程池状态小于STOP，也就是RUNNING或者SHUTDOWN状态下，同时传入的任务实例firstTask为null，则需要添加到工作线程集合和启动新的Worker</span>
                   <span class="token comment">// firstTask == null证明只新建线程而不执行任务</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>rs <span class="token operator">&lt;</span> SHUTDOWN <span class="token operator">||</span>
                        <span class="token punctuation">(</span>rs <span class="token operator">==</span> SHUTDOWN <span class="token operator">&amp;&amp;</span> firstTask <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token punctuation">.</span><span class="token function">isAlive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// precheck that t is startable</span>
                            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalThreadStateException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        workers<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>
                       <span class="token comment">//更新当前工作线程的最大容量</span>
                        <span class="token keyword">int</span> s <span class="token operator">=</span> workers<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">></span> largestPoolSize<span class="token punctuation">)</span>
                            largestPoolSize <span class="token operator">=</span> s<span class="token punctuation">;</span>
                      <span class="token comment">// 工作线程是否启动成功</span>
                        workerAdded <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 释放锁</span>
                    mainLock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">//// 如果成功添加工作线程，则调用Worker内部的线程实例t的Thread#start()方法启动真实的线程实例</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>workerAdded<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    t<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                  <span class="token comment">/// 标记线程启动成功</span>
                    workerStarted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
           <span class="token comment">// 线程启动失败，需要从工作线程中移除对应的Worker</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span> workerStarted<span class="token punctuation">)</span>
                <span class="token function">addWorkerFailed</span><span class="token punctuation">(</span>w<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> workerStarted<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多关于线程池源码分析的内容推荐这篇文章：硬核干货：<a href="https://www.throwx.cn/2020/08/23/java-concurrency-thread-pool-executor/" target="_blank" rel="noopener noreferrer">4W字从源码上分析JUC线程池ThreadPoolExecutor的实现原理<ExternalLinkIcon/></a></p>
<p>现在，让我们在回到 4.1 节我们写的 Demo， 现在应该是不是很容易就可以搞懂它的原理了呢？</p>
<p>没搞懂的话，也没关系，可以看看我的分析：</p>
<blockquote>
<p>我们在代码中模拟了 10 个任务，我们配置的核心线程数为 5 、等待队列容量为 100 ，所以每次只可能存在 5 个任务同时执行，剩下的 5 个任务会被放到等待队列中去。当前的 5 个任务中如果有任务被执行完了，线程池就会去拿新的任务执行。</p>
</blockquote>
<h3 id="_4-3-几个常见的对比" tabindex="-1"><a class="header-anchor" href="#_4-3-几个常见的对比" aria-hidden="true">#</a> 4.3 几个常见的对比</h3>
<h4 id="_4-3-1-runnable-vs-callable" tabindex="-1"><a class="header-anchor" href="#_4-3-1-runnable-vs-callable" aria-hidden="true">#</a> 4.3.1 <code v-pre>Runnable</code> vs <code v-pre>Callable</code></h4>
<p><code v-pre>Runnable</code>自 Java 1.0 以来一直存在，但<code v-pre>Callable</code>仅在 Java 1.5 中引入,目的就是为了来处理<code v-pre>Runnable</code>不支持的用例。<strong><code v-pre>Runnable</code> 接口</strong>不会返回结果或抛出检查异常，但是 <strong><code v-pre>Callable</code> 接口</strong>可以。所以，如果任务不需要返回结果或抛出异常推荐使用 <strong><code v-pre>Runnable</code> 接口</strong>，这样代码看起来会更加简洁。</p>
<p>工具类 <code v-pre>Executors</code> 可以实现将 <code v-pre>Runnable</code> 对象转换成 <code v-pre>Callable</code> 对象。（<code v-pre>Executors.callable(Runnable task)</code> 或 <code v-pre>Executors.callable(Runnable task, Object result)</code>）。</p>
<p><code v-pre>Runnable.java</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
   <span class="token doc-comment comment">/**
    * 被线程执行，没有返回值也无法抛出异常
    */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Callable.java</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 计算结果，或在无法这样做时抛出异常。
     * <span class="token keyword">@return</span> 计算得出的结果
     * <span class="token keyword">@throws</span> 如果无法计算结果，则抛出异常
     */</span>
    <span class="token class-name">V</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-2-execute-vs-submit" tabindex="-1"><a class="header-anchor" href="#_4-3-2-execute-vs-submit" aria-hidden="true">#</a> 4.3.2 <code v-pre>execute()</code> vs <code v-pre>submit()</code></h4>
<ul>
<li><code v-pre>execute()</code>方法用于提交不需要返回值的任务，所以无法判断任务是否被线程池执行成功与否；</li>
<li><code v-pre>submit()</code>方法用于提交需要返回值的任务。线程池会返回一个 <code v-pre>Future</code> 类型的对象，通过这个 <code v-pre>Future</code> 对象可以判断任务是否执行成功，并且可以通过 <code v-pre>Future</code> 的 <code v-pre>get()</code>方法来获取返回值，<code v-pre>get()</code>方法会阻塞当前线程直到任务完成，而使用 <code v-pre>get（long timeout，TimeUnit unit）</code>方法的话，如果在 <code v-pre>timeout</code> 时间内任务还没有执行完，就会抛出 <code v-pre>java.util.concurrent.TimeoutException</code>。</li>
</ul>
<p>这里只是为了演示使用，推荐使用 <code v-pre>ThreadPoolExecutor</code> 构造方法来创建线程池。</p>
<p>示例1：使用 <code v-pre>get() </code>方法获取返回值。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ExecutorService</span> executorService <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> submit <span class="token operator">=</span> executorService<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token string">"abc"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> s <span class="token operator">=</span> submit<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
executorService<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>abc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例2：使用 <code v-pre>get（long timeout，TimeUnit unit） </code>方法获取返回值。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ExecutorService</span> executorService <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> submit <span class="token operator">=</span> executorService<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token string">"abc"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">String</span> s <span class="token operator">=</span> submit<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
executorService<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Exception in thread "main" java.util.concurrent.TimeoutException
	at java.util.concurrent.FutureTask.get(FutureTask.java:205)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-3-3-shutdown-vsshutdownnow" tabindex="-1"><a class="header-anchor" href="#_4-3-3-shutdown-vsshutdownnow" aria-hidden="true">#</a> 4.3.3 <code v-pre>shutdown()</code>VS<code v-pre>shutdownNow()</code></h4>
<ul>
<li><strong><code v-pre>shutdown（）</code></strong> :关闭线程池，线程池的状态变为 <code v-pre>SHUTDOWN</code>。线程池不再接受新任务了，但是队列里的任务得执行完毕。</li>
<li><strong><code v-pre>shutdownNow（）</code></strong> :关闭线程池，线程的状态变为 <code v-pre>STOP</code>。线程池会终止当前正在运行的任务，并停止处理排队的任务并返回正在等待执行的 List。</li>
</ul>
<h4 id="_4-3-2-isterminated-vs-isshutdown" tabindex="-1"><a class="header-anchor" href="#_4-3-2-isterminated-vs-isshutdown" aria-hidden="true">#</a> 4.3.2 <code v-pre>isTerminated()</code> VS <code v-pre>isShutdown()</code></h4>
<ul>
<li><strong><code v-pre>isShutDown</code></strong> 当调用 <code v-pre>shutdown()</code> 方法后返回为 true。</li>
<li><strong><code v-pre>isTerminated</code></strong> 当调用 <code v-pre>shutdown()</code> 方法后，并且所有提交的任务完成后返回为 true</li>
</ul>
<h3 id="_4-4-加餐-callable-threadpoolexecutor示例代码" tabindex="-1"><a class="header-anchor" href="#_4-4-加餐-callable-threadpoolexecutor示例代码" aria-hidden="true">#</a> 4.4 加餐:<code v-pre>Callable</code>+<code v-pre>ThreadPoolExecutor</code>示例代码</h3>
<p><code v-pre>MyCallable.java</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">Callable</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyCallable</span> <span class="token keyword">implements</span> <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">call</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//返回执行当前 Callable 的线程名字</span>
        <span class="token keyword">return</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>CallableDemo.java</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ArrayBlockingQueue</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">Callable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ExecutionException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">Future</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">ThreadPoolExecutor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CallableDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> CORE_POOL_SIZE <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> MAX_POOL_SIZE <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> QUEUE_CAPACITY <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Long</span> KEEP_ALIVE_TIME <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">//使用阿里巴巴推荐的创建线程池的方式</span>
        <span class="token comment">//通过ThreadPoolExecutor构造函数自定义参数创建</span>
        <span class="token class-name">ThreadPoolExecutor</span> executor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span>
                CORE_POOL_SIZE<span class="token punctuation">,</span>
                MAX_POOL_SIZE<span class="token punctuation">,</span>
                KEEP_ALIVE_TIME<span class="token punctuation">,</span>
                <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>QUEUE_CAPACITY<span class="token punctuation">)</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor<span class="token punctuation">.</span>CallerRunsPolicy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Future</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span></span> futureList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Callable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> callable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyCallable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//提交任务到线程池</span>
            <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> future <span class="token operator">=</span> executor<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span>callable<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//将返回值 future 添加到 list，我们可以通过 future 获得 执行 Callable 得到的返回值</span>
            futureList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>future<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> fut <span class="token operator">:</span> futureList<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"::"</span> <span class="token operator">+</span> fut<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> <span class="token operator">|</span> <span class="token class-name">ExecutionException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//关闭线程池</span>
        executor<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Wed Nov 13 13:40:41 CST 2019::pool-1-thread-1
Wed Nov 13 13:40:42 CST 2019::pool-1-thread-2
Wed Nov 13 13:40:42 CST 2019::pool-1-thread-3
Wed Nov 13 13:40:42 CST 2019::pool-1-thread-4
Wed Nov 13 13:40:42 CST 2019::pool-1-thread-5
Wed Nov 13 13:40:42 CST 2019::pool-1-thread-3
Wed Nov 13 13:40:43 CST 2019::pool-1-thread-2
Wed Nov 13 13:40:43 CST 2019::pool-1-thread-1
Wed Nov 13 13:40:43 CST 2019::pool-1-thread-4
Wed Nov 13 13:40:43 CST 2019::pool-1-thread-5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五-几种常见的线程池详解" tabindex="-1"><a class="header-anchor" href="#五-几种常见的线程池详解" aria-hidden="true">#</a> 五 几种常见的线程池详解</h2>
<h3 id="_5-1-fixedthreadpool" tabindex="-1"><a class="header-anchor" href="#_5-1-fixedthreadpool" aria-hidden="true">#</a> 5.1 FixedThreadPool</h3>
<h4 id="_5-1-1-介绍" tabindex="-1"><a class="header-anchor" href="#_5-1-1-介绍" aria-hidden="true">#</a> 5.1.1 介绍</h4>
<p><code v-pre>FixedThreadPool</code> 被称为可重用固定线程数的线程池。通过 Executors 类中的相关源代码来看一下相关实现：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>   <span class="token doc-comment comment">/**
     * 创建一个可重用固定数量线程的线程池
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ExecutorService</span> <span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token keyword">int</span> nThreads<span class="token punctuation">,</span> <span class="token class-name">ThreadFactory</span> threadFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span>nThreads<span class="token punctuation">,</span> nThreads<span class="token punctuation">,</span>
                                      <span class="token number">0L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>MILLISECONDS<span class="token punctuation">,</span>
                                      <span class="token keyword">new</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                      threadFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外还有一个 <code v-pre>FixedThreadPool</code> 的实现方法，和上面的类似，所以这里不多做阐述：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ExecutorService</span> <span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token keyword">int</span> nThreads<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span>nThreads<span class="token punctuation">,</span> nThreads<span class="token punctuation">,</span>
                                      <span class="token number">0L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>MILLISECONDS<span class="token punctuation">,</span>
                                      <span class="token keyword">new</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>从上面源代码可以看出新创建的 <code v-pre>FixedThreadPool</code> 的 <code v-pre>corePoolSize</code> 和 <code v-pre>maximumPoolSize</code> 都被设置为 nThreads，这个 nThreads 参数是我们使用的时候自己传递的。</strong></p>
<h4 id="_5-1-2-执行任务过程介绍" tabindex="-1"><a class="header-anchor" href="#_5-1-2-执行任务过程介绍" aria-hidden="true">#</a> 5.1.2 执行任务过程介绍</h4>
<p><code v-pre>FixedThreadPool</code> 的 <code v-pre>execute()</code> 方法运行示意图（该图片来源：《Java 并发编程的艺术》）：</p>
<p><img src="@source/code/java/common/concurrent/images/java-thread-pool-summary/FixedThreadPool.png" alt="FixedThreadPool的execute()方法运行示意图" loading="lazy"></p>
<p><strong>上图说明：</strong></p>
<ol>
<li>如果当前运行的线程数小于 corePoolSize， 如果再来新任务的话，就创建新的线程来执行任务；</li>
<li>当前运行的线程数等于 corePoolSize 后， 如果再来新任务的话，会将任务加入 <code v-pre>LinkedBlockingQueue</code>；</li>
<li>线程池中的线程执行完 手头的任务后，会在循环中反复从 <code v-pre>LinkedBlockingQueue</code> 中获取任务来执行；</li>
</ol>
<h4 id="_5-1-3-为什么不推荐使用fixedthreadpool" tabindex="-1"><a class="header-anchor" href="#_5-1-3-为什么不推荐使用fixedthreadpool" aria-hidden="true">#</a> 5.1.3 为什么不推荐使用<code v-pre>FixedThreadPool</code>？</h4>
<p><strong><code v-pre>FixedThreadPool</code> 使用无界队列 <code v-pre>LinkedBlockingQueue</code>（队列的容量为 Integer.MAX_VALUE）作为线程池的工作队列会对线程池带来如下影响 ：</strong></p>
<ol>
<li>当线程池中的线程数达到 <code v-pre>corePoolSize</code> 后，新任务将在无界队列中等待，因此线程池中的线程数不会超过 corePoolSize；</li>
<li>由于使用无界队列时 <code v-pre>maximumPoolSize</code> 将是一个无效参数，因为不可能存在任务队列满的情况。所以，通过创建 <code v-pre>FixedThreadPool</code>的源码可以看出创建的 <code v-pre>FixedThreadPool</code> 的 <code v-pre>corePoolSize</code> 和 <code v-pre>maximumPoolSize</code> 被设置为同一个值。</li>
<li>由于 1 和 2，使用无界队列时 <code v-pre>keepAliveTime</code> 将是一个无效参数；</li>
<li>运行中的 <code v-pre>FixedThreadPool</code>（未执行 <code v-pre>shutdown()</code>或 <code v-pre>shutdownNow()</code>）不会拒绝任务，在任务比较多的时候会导致 OOM（内存溢出）。</li>
</ol>
<h3 id="_5-2-singlethreadexecutor-详解" tabindex="-1"><a class="header-anchor" href="#_5-2-singlethreadexecutor-详解" aria-hidden="true">#</a> 5.2 SingleThreadExecutor 详解</h3>
<h4 id="_5-2-1-介绍" tabindex="-1"><a class="header-anchor" href="#_5-2-1-介绍" aria-hidden="true">#</a> 5.2.1 介绍</h4>
<p><code v-pre>SingleThreadExecutor</code> 是只有一个线程的线程池。下面看看<strong>SingleThreadExecutor 的实现：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>   <span class="token doc-comment comment">/**
     *返回只有一个线程的线程池
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ExecutorService</span> <span class="token function">newSingleThreadExecutor</span><span class="token punctuation">(</span><span class="token class-name">ThreadFactory</span> threadFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">FinalizableDelegatedExecutorService</span>
            <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span>
                                    <span class="token number">0L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>MILLISECONDS<span class="token punctuation">,</span>
                                    <span class="token keyword">new</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                    threadFactory<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ExecutorService</span> <span class="token function">newSingleThreadExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">FinalizableDelegatedExecutorService</span>
            <span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span>
                                    <span class="token number">0L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>MILLISECONDS<span class="token punctuation">,</span>
                                    <span class="token keyword">new</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面源代码可以看出新创建的 <code v-pre>SingleThreadExecutor</code> 的 <code v-pre>corePoolSize</code> 和 <code v-pre>maximumPoolSize</code> 都被设置为 1.其他参数和 <code v-pre>FixedThreadPool</code> 相同。</p>
<h4 id="_5-2-2-执行任务过程介绍" tabindex="-1"><a class="header-anchor" href="#_5-2-2-执行任务过程介绍" aria-hidden="true">#</a> 5.2.2 执行任务过程介绍</h4>
<p><code v-pre>SingleThreadExecutor</code> 的运行示意图（该图片来源：《Java 并发编程的艺术》）：
<img src="@source/code/java/common/concurrent/images/java-thread-pool-summary/SingleThreadExecutor.png" alt="SingleThreadExecutor的运行示意图" loading="lazy"></p>
<p><strong>上图说明</strong> :</p>
<ol>
<li>如果当前运行的线程数少于 <code v-pre>corePoolSize</code>，则创建一个新的线程执行任务；</li>
<li>当前线程池中有一个运行的线程后，将任务加入 <code v-pre>LinkedBlockingQueue</code></li>
<li>线程执行完当前的任务后，会在循环中反复从<code v-pre>LinkedBlockingQueue</code> 中获取任务来执行；</li>
</ol>
<h4 id="_5-2-3-为什么不推荐使用singlethreadexecutor" tabindex="-1"><a class="header-anchor" href="#_5-2-3-为什么不推荐使用singlethreadexecutor" aria-hidden="true">#</a> 5.2.3 为什么不推荐使用<code v-pre>SingleThreadExecutor</code>？</h4>
<p><code v-pre>SingleThreadExecutor</code> 使用无界队列 <code v-pre>LinkedBlockingQueue</code> 作为线程池的工作队列（队列的容量为 Intger.MAX_VALUE）。<code v-pre>SingleThreadExecutor</code> 使用无界队列作为线程池的工作队列会对线程池带来的影响与 <code v-pre>FixedThreadPool</code> 相同。说简单点就是可能会导致 OOM，</p>
<h3 id="_5-3-cachedthreadpool-详解" tabindex="-1"><a class="header-anchor" href="#_5-3-cachedthreadpool-详解" aria-hidden="true">#</a> 5.3 CachedThreadPool 详解</h3>
<h4 id="_5-3-1-介绍" tabindex="-1"><a class="header-anchor" href="#_5-3-1-介绍" aria-hidden="true">#</a> 5.3.1 介绍</h4>
<p><code v-pre>CachedThreadPool</code> 是一个会根据需要创建新线程的线程池。下面通过源码来看看 <code v-pre>CachedThreadPool</code> 的实现：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 创建一个线程池，根据需要创建新线程，但会在先前构建的线程可用时重用它。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ExecutorService</span> <span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token class-name">ThreadFactory</span> threadFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">,</span>
                                      <span class="token number">60L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">,</span>
                                      <span class="token keyword">new</span> <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                      threadFactory<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">ExecutorService</span> <span class="token function">newCachedThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">,</span>
                                      <span class="token number">60L</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">,</span>
                                      <span class="token keyword">new</span> <span class="token class-name">SynchronousQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>CachedThreadPool</code> 的<code v-pre>corePoolSize</code> 被设置为空（0），<code v-pre>maximumPoolSize</code>被设置为 <code v-pre>Integer.MAX.VALUE</code>，即它是无界的，这也就意味着如果主线程提交任务的速度高于 <code v-pre>maximumPool</code> 中线程处理任务的速度时，<code v-pre>CachedThreadPool</code> 会不断创建新的线程。极端情况下，这样会导致耗尽 cpu 和内存资源。</p>
<h4 id="_5-3-2-执行任务过程介绍" tabindex="-1"><a class="header-anchor" href="#_5-3-2-执行任务过程介绍" aria-hidden="true">#</a> 5.3.2 执行任务过程介绍</h4>
<p><code v-pre>CachedThreadPool</code> 的 <code v-pre>execute()</code> 方法的执行示意图（该图片来源：《Java 并发编程的艺术》）：
<img src="@source/code/java/common/concurrent/images/java-thread-pool-summary/CachedThreadPool-execute.png" alt="CachedThreadPool的execute()方法的执行示意图" loading="lazy"></p>
<p><strong>上图说明：</strong></p>
<ol>
<li>首先执行 <code v-pre>SynchronousQueue.offer(Runnable task)</code> 提交任务到任务队列。如果当前 <code v-pre>maximumPool</code> 中有闲线程正在执行 <code v-pre>SynchronousQueue.poll(keepAliveTime,TimeUnit.NANOSECONDS)</code>，那么主线程执行 offer 操作与空闲线程执行的 <code v-pre>poll</code> 操作配对成功，主线程把任务交给空闲线程执行，<code v-pre>execute()</code>方法执行完成，否则执行下面的步骤 2；</li>
<li>当初始 <code v-pre>maximumPool</code> 为空，或者 <code v-pre>maximumPool</code> 中没有空闲线程时，将没有线程执行 <code v-pre>SynchronousQueue.poll(keepAliveTime,TimeUnit.NANOSECONDS)</code>。这种情况下，步骤 1 将失败，此时 <code v-pre>CachedThreadPool</code> 会创建新线程执行任务，execute 方法执行完成；</li>
</ol>
<h4 id="_5-3-3-为什么不推荐使用cachedthreadpool" tabindex="-1"><a class="header-anchor" href="#_5-3-3-为什么不推荐使用cachedthreadpool" aria-hidden="true">#</a> 5.3.3 为什么不推荐使用<code v-pre>CachedThreadPool</code>？</h4>
<p><code v-pre>CachedThreadPool</code>允许创建的线程数量为 <code v-pre>Integer.MAX_VALUE</code> ，可能会创建大量线程，从而导致 OOM。</p>
<h2 id="六-scheduledthreadpoolexecutor-详解" tabindex="-1"><a class="header-anchor" href="#六-scheduledthreadpoolexecutor-详解" aria-hidden="true">#</a> 六 ScheduledThreadPoolExecutor 详解</h2>
<p><strong><code v-pre>ScheduledThreadPoolExecutor</code> 主要用来在给定的延迟后运行任务，或者定期执行任务。</strong> 这个在实际项目中基本不会被用到，也不推荐使用，大家只需要简单了解一下它的思想即可。</p>
<h3 id="_6-1-简介" tabindex="-1"><a class="header-anchor" href="#_6-1-简介" aria-hidden="true">#</a> 6.1 简介</h3>
<p><code v-pre>ScheduledThreadPoolExecutor</code> 使用的任务队列 <code v-pre>DelayQueue</code> 封装了一个 <code v-pre>PriorityQueue</code>，<code v-pre>PriorityQueue</code> 会对队列中的任务进行排序，执行所需时间短的放在前面先被执行(<code v-pre>ScheduledFutureTask</code> 的 <code v-pre>time</code> 变量小的先执行)，如果执行所需时间相同则先提交的任务将被先执行(<code v-pre>ScheduledFutureTask</code> 的 <code v-pre>squenceNumber</code> 变量小的先执行)。</p>
<p><strong><code v-pre>ScheduledThreadPoolExecutor</code> 和 <code v-pre>Timer</code> 的比较：</strong></p>
<ul>
<li><code v-pre>Timer</code> 对系统时钟的变化敏感，<code v-pre>ScheduledThreadPoolExecutor</code>不是；</li>
<li><code v-pre>Timer</code> 只有一个执行线程，因此长时间运行的任务可以延迟其他任务。 <code v-pre>ScheduledThreadPoolExecutor</code> 可以配置任意数量的线程。 此外，如果你想（通过提供 ThreadFactory），你可以完全控制创建的线程;</li>
<li>在<code v-pre>TimerTask</code> 中抛出的运行时异常会杀死一个线程，从而导致 <code v-pre>Timer</code> 死机:-( ...即计划任务将不再运行。<code v-pre>ScheduledThreadExecutor</code> 不仅捕获运行时异常，还允许您在需要时处理它们（通过重写 <code v-pre>afterExecute</code> 方法<code v-pre>ThreadPoolExecutor</code>）。抛出异常的任务将被取消，但其他任务将继续运行。</li>
</ul>
<p><strong>综上，在 JDK1.5 之后，你没有理由再使用 Timer 进行任务调度了。</strong></p>
<h3 id="_6-2-运行机制" tabindex="-1"><a class="header-anchor" href="#_6-2-运行机制" aria-hidden="true">#</a> 6.2 运行机制</h3>
<p><img src="@source/code/java/common/concurrent/images/java-thread-pool-summary/ScheduledThreadPoolExecutor机制.png" alt="ScheduledThreadPoolExecutor运行机制" loading="lazy"></p>
<p><strong><code v-pre>ScheduledThreadPoolExecutor</code> 的执行主要分为两大部分：</strong></p>
<ol>
<li>当调用 <code v-pre>ScheduledThreadPoolExecutor</code> 的 <strong><code v-pre>scheduleAtFixedRate()</code></strong> 方法或者 <strong><code v-pre>scheduleWithFixedDelay()</code></strong> 方法时，会向 <code v-pre>ScheduledThreadPoolExecutor</code> 的 <strong><code v-pre>DelayQueue</code></strong> 添加一个实现了 <strong><code v-pre>RunnableScheduledFuture</code></strong> 接口的 <strong><code v-pre>ScheduledFutureTask</code></strong> 。</li>
<li>线程池中的线程从 <code v-pre>DelayQueue</code> 中获取 <code v-pre>ScheduledFutureTask</code>，然后执行任务。</li>
</ol>
<p><strong><code v-pre>ScheduledThreadPoolExecutor</code> 为了实现周期性的执行任务，对 <code v-pre>ThreadPoolExecutor</code>做了如下修改：</strong></p>
<ul>
<li>使用 <strong><code v-pre>DelayQueue</code></strong> 作为任务队列；</li>
<li>获取任务的方不同</li>
<li>执行周期任务后，增加了额外的处理</li>
</ul>
<h3 id="_6-3-scheduledthreadpoolexecutor-执行周期任务的步骤" tabindex="-1"><a class="header-anchor" href="#_6-3-scheduledthreadpoolexecutor-执行周期任务的步骤" aria-hidden="true">#</a> 6.3 ScheduledThreadPoolExecutor 执行周期任务的步骤</h3>
<p><img src="@source/code/java/common/concurrent/images/java-thread-pool-summary/ScheduledThreadPoolExecutor执行周期任务步骤.png" alt="ScheduledThreadPoolExecutor执行周期任务的步骤" loading="lazy"></p>
<ol>
<li>线程 1 从 <code v-pre>DelayQueue</code> 中获取已到期的 <code v-pre>ScheduledFutureTask（DelayQueue.take()）</code>。到期任务是指 <code v-pre>ScheduledFutureTask</code>的 time 大于等于当前系统的时间；</li>
<li>线程 1 执行这个 <code v-pre>ScheduledFutureTask</code>；</li>
<li>线程 1 修改 <code v-pre>ScheduledFutureTask</code> 的 time 变量为下次将要被执行的时间；</li>
<li>线程 1 把这个修改 time 之后的 <code v-pre>ScheduledFutureTask</code> 放回 <code v-pre>DelayQueue</code> 中（<code v-pre>DelayQueue.add()</code>)。</li>
</ol>
<h2 id="七-线程池大小确定" tabindex="-1"><a class="header-anchor" href="#七-线程池大小确定" aria-hidden="true">#</a> 七 线程池大小确定</h2>
<p><strong>线程池数量的确定一直是困扰着程序员的一个难题，大部分程序员在设定线程池大小的时候就是随心而定。</strong></p>
<p>很多人甚至可能都会觉得把线程池配置过大一点比较好！我觉得这明显是有问题的。就拿我们生活中非常常见的一例子来说：<strong>并不是人多就能把事情做好，增加了沟通交流成本。你本来一件事情只需要 3 个人做，你硬是拉来了 6 个人，会提升做事效率嘛？我想并不会。</strong> 线程数量过多的影响也是和我们分配多少人做事情一样，对于多线程这个场景来说主要是增加了<strong>上下文切换</strong>成本。不清楚什么是上下文切换的话，可以看我下面的介绍。</p>
<blockquote>
<p>上下文切换：</p>
<p>多线程编程中一般线程的个数都大于 CPU 核心的个数，而一个 CPU 核心在任意时刻只能被一个线程使用，为了让这些线程都能得到有效执行，CPU 采取的策略是为每个线程分配时间片并轮转的形式。当一个线程的时间片用完的时候就会重新处于就绪状态让给其他线程使用，这个过程就属于一次上下文切换。概括来说就是：当前任务在执行完 CPU 时间片切换到另一个任务之前会先保存自己的状态，以便下次再切换回这个任务时，可以再加载这个任务的状态。<strong>任务从保存到再加载的过程就是一次上下文切换</strong>。</p>
<p>上下文切换通常是计算密集型的。也就是说，它需要相当可观的处理器时间，在每秒几十上百次的切换中，每次切换都需要纳秒量级的时间。所以，上下文切换对系统来说意味着消耗大量的 CPU 时间，事实上，可能是操作系统中时间消耗最大的操作。</p>
<p>Linux 相比与其他操作系统（包括其他类 Unix 系统）有很多的优点，其中有一项就是，其上下文切换和模式切换的时间消耗非常少。</p>
</blockquote>
<p><strong>类比于现实世界中的人类通过合作做某件事情，我们可以肯定的一点是线程池大小设置过大或者过小都会有问题，合适的才是最好。</strong></p>
<p><strong>如果我们设置的线程池数量太小的话，如果同一时间有大量任务/请求需要处理，可能会导致大量的请求/任务在任务队列中排队等待执行，甚至会出现任务队列满了之后任务/请求无法处理的情况，或者大量任务堆积在任务队列导致 OOM。这样很明显是有问题的！ CPU 根本没有得到充分利用。</strong></p>
<p><strong>但是，如果我们设置线程数量太大，大量线程可能会同时在争取 CPU 资源，这样会导致大量的上下文切换，从而增加线程的执行时间，影响了整体执行效率。</strong></p>
<p>有一个简单并且适用面比较广的公式：</p>
<ul>
<li><strong>CPU 密集型任务(N+1)：</strong> 这种任务消耗的主要是 CPU 资源，可以将线程数设置为 N（CPU 核心数）+1，比 CPU 核心数多出来的一个线程是为了防止线程偶发的缺页中断，或者其它原因导致的任务暂停而带来的影响。一旦任务暂停，CPU 就会处于空闲状态，而在这种情况下多出来的一个线程就可以充分利用 CPU 的空闲时间。</li>
<li><strong>I/O 密集型任务(2N)：</strong> 这种任务应用起来，系统会用大部分的时间来处理 I/O 交互，而线程在处理 I/O 的时间段内不会占用 CPU 来处理，这时就可以将 CPU 交出给其它线程使用。因此在 I/O 密集型任务的应用中，我们可以多配置一些线程，具体的计算方法是 2N。</li>
</ul>
<p><strong>如何判断是 CPU 密集任务还是 IO 密集任务？</strong></p>
<p>CPU 密集型简单理解就是利用 CPU 计算能力的任务比如你在内存中对大量数据进行排序。但凡涉及到网络读取，文件读取这类都是 IO 密集型，这类任务的特点是 CPU 计算耗费时间相比于等待 IO 操作完成的时间来说很少，大部分时间都花在了等待 IO 操作完成上。</p>
<h2 id="八-参考" tabindex="-1"><a class="header-anchor" href="#八-参考" aria-hidden="true">#</a> 八 参考</h2>
<ul>
<li>《Java 并发编程的艺术》</li>
<li><a href="https://www.journaldev.com/2340/java-scheduler-scheduledexecutorservice-scheduledthreadpoolexecutor-example" title="Java Scheduler ScheduledExecutorService ScheduledThreadPoolExecutor Example" target="_blank" rel="noopener noreferrer">Java Scheduler ScheduledExecutorService ScheduledThreadPoolExecutor Example<ExternalLinkIcon/></a></li>
<li><a href="https://examples.javacodegeeks.com/core-java/util/concurrent/scheduledthreadpoolexecutor/java-util-concurrent-scheduledthreadpoolexecutor-example/" title="java.util.concurrent.ScheduledThreadPoolExecutor Example" target="_blank" rel="noopener noreferrer">java.util.concurrent.ScheduledThreadPoolExecutor Example<ExternalLinkIcon/></a></li>
<li><a href="https://www.journaldev.com/1069/threadpoolexecutor-java-thread-pool-example-executorservice" title="ThreadPoolExecutor – Java Thread Pool Example" target="_blank" rel="noopener noreferrer">ThreadPoolExecutor – Java Thread Pool Example<ExternalLinkIcon/></a></li>
</ul>
<h2 id="九-其他推荐阅读" tabindex="-1"><a class="header-anchor" href="#九-其他推荐阅读" aria-hidden="true">#</a> 九 其他推荐阅读</h2>
<ul>
<li><a href="https://www.cnblogs.com/warehouse/p/10720781.html" title="Java并发（三）线程池原理" target="_blank" rel="noopener noreferrer">Java 并发（三）线程池原理<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/crossoverJie/JCSprout/blob/master/MD/ThreadPoolExecutor.md" title="如何优雅的使用和理解线程池" target="_blank" rel="noopener noreferrer">如何优雅的使用和理解线程池<ExternalLinkIcon/></a></li>
</ul>
</div></template>
