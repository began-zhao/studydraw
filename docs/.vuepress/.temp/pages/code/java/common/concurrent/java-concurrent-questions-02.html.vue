<template><div><h2 id="synchronized-关键字" tabindex="-1"><a class="header-anchor" href="#synchronized-关键字" aria-hidden="true">#</a> synchronized 关键字</h2>
<h3 id="说一说自己对于-synchronized-关键字的了解" tabindex="-1"><a class="header-anchor" href="#说一说自己对于-synchronized-关键字的了解" aria-hidden="true">#</a> 说一说自己对于 synchronized 关键字的了解</h3>
<p><strong><code v-pre>synchronized</code> 关键字解决的是多个线程之间访问资源的同步性，<code v-pre>synchronized</code>关键字可以保证被它修饰的方法或者代码块在任意时刻只能有一个线程执行。</strong></p>
<p>另外，在 Java 早期版本中，<code v-pre>synchronized</code> 属于 <strong>重量级锁</strong>，效率低下。</p>
<p><strong>为什么呢？</strong></p>
<p>因为监视器锁（monitor）是依赖于底层的操作系统的 <code v-pre>Mutex Lock</code> 来实现的，Java 的线程是映射到操作系统的原生线程之上的。如果要挂起或者唤醒一个线程，都需要操作系统帮忙完成，而操作系统实现线程之间的切换时需要从用户态转换到内核态，这个状态之间的转换需要相对比较长的时间，时间成本相对较高。</p>
<p>庆幸的是在 Java 6 之后 Java 官方对从 JVM 层面对 <code v-pre>synchronized</code> 较大优化，所以现在的 <code v-pre>synchronized</code> 锁效率也优化得很不错了。JDK1.6 对锁的实现引入了大量的优化，如自旋锁、适应性自旋锁、锁消除、锁粗化、偏向锁、轻量级锁等技术来减少锁操作的开销。</p>
<p>所以，你会发现目前的话，不论是各种开源框架还是 JDK 源码都大量使用了 <code v-pre>synchronized</code> 关键字。</p>
<h3 id="说说自己是怎么使用-synchronized-关键字" tabindex="-1"><a class="header-anchor" href="#说说自己是怎么使用-synchronized-关键字" aria-hidden="true">#</a> 说说自己是怎么使用 synchronized 关键字</h3>
<p><strong>synchronized 关键字最主要的三种使用方式：</strong></p>
<p><strong>1.修饰实例方法:</strong> 作用于当前对象实例加锁，进入同步代码前要获得 <strong>当前对象实例的锁</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//业务代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.修饰静态方法:</strong> 也就是给当前类加锁，会作用于类的所有对象实例 ，进入同步代码前要获得 <strong>当前 class 的锁</strong>。因为静态成员不属于任何一个实例对象，是类成员（ <em>static 表明这是该类的一个静态资源，不管 new 了多少个对象，只有一份</em>）。所以，如果一个线程 A 调用一个实例对象的非静态 <code v-pre>synchronized</code> 方法，而线程 B 需要调用这个实例对象所属类的静态 <code v-pre>synchronized</code> 方法，是允许的，不会发生互斥现象，<strong>因为访问静态 <code v-pre>synchronized</code> 方法占用的锁是当前类的锁，而访问非静态 <code v-pre>synchronized</code> 方法占用的锁是当前实例对象锁</strong>。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">synchronized</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//业务代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.修饰代码块</strong> ：指定加锁对象，对给定对象/类加锁。<code v-pre>synchronized(this|object)</code> 表示进入同步代码库前要获得<strong>给定对象的锁</strong>。<code v-pre>synchronized(类.class)</code> 表示进入同步代码前要获得 <strong>当前 class 的锁</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">synchronized</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//业务代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>总结：</strong></p>
<ul>
<li><code v-pre>synchronized</code> 关键字加到 <code v-pre>static</code> 静态方法和 <code v-pre>synchronized(class)</code> 代码块上都是是给 Class 类上锁。</li>
<li><code v-pre>synchronized</code> 关键字加到实例方法上是给对象实例上锁。</li>
<li>尽量不要使用 <code v-pre>synchronized(String a)</code> 因为 JVM 中，字符串常量池具有缓存功能！</li>
</ul>
<p>下面我以一个常见的面试题为例讲解一下 <code v-pre>synchronized</code> 关键字的具体使用。</p>
<p>面试中面试官经常会说：“单例模式了解吗？来给我手写一下！给我解释一下双重检验锁方式实现单例模式的原理呗！”</p>
<p><strong>双重校验锁实现对象单例（线程安全）</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> uniqueInstance<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span>  <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getUniqueInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">//先判断对象是否已经实例过，没有实例化过才进入加锁代码</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>uniqueInstance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//类对象加锁</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>uniqueInstance <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    uniqueInstance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> uniqueInstance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，需要注意 <code v-pre>uniqueInstance</code> 采用 <code v-pre>volatile</code> 关键字修饰也是很有必要。</p>
<p><code v-pre>uniqueInstance</code> 采用 <code v-pre>volatile</code> 关键字修饰也是很有必要的， <code v-pre>uniqueInstance = new Singleton();</code> 这段代码其实是分为三步执行：</p>
<ol>
<li>为 <code v-pre>uniqueInstance</code> 分配内存空间</li>
<li>初始化 <code v-pre>uniqueInstance</code></li>
<li>将 <code v-pre>uniqueInstance</code> 指向分配的内存地址</li>
</ol>
<p>但是由于 JVM 具有指令重排的特性，执行顺序有可能变成 1-&gt;3-&gt;2。指令重排在单线程环境下不会出现问题，但是在多线程环境下会导致一个线程获得还没有初始化的实例。例如，线程 T1 执行了 1 和 3，此时 T2 调用 <code v-pre>getUniqueInstance</code>() 后发现 <code v-pre>uniqueInstance</code> 不为空，因此返回 <code v-pre>uniqueInstance</code>，但此时 <code v-pre>uniqueInstance</code> 还未被初始化。</p>
<p>使用 <code v-pre>volatile</code> 可以禁止 JVM 的指令重排，保证在多线程环境下也能正常运行。</p>
<h3 id="构造方法可以使用-synchronized-关键字修饰么" tabindex="-1"><a class="header-anchor" href="#构造方法可以使用-synchronized-关键字修饰么" aria-hidden="true">#</a> 构造方法可以使用 synchronized 关键字修饰么？</h3>
<p>先说结论：<strong>构造方法不能使用 synchronized 关键字修饰。</strong></p>
<p>构造方法本身就属于线程安全的，不存在同步的构造方法一说。</p>
<h3 id="讲一下-synchronized-关键字的底层原理" tabindex="-1"><a class="header-anchor" href="#讲一下-synchronized-关键字的底层原理" aria-hidden="true">#</a> 讲一下 synchronized 关键字的底层原理</h3>
<p><strong>synchronized 关键字底层原理属于 JVM 层面。</strong></p>
<h4 id="synchronized-同步语句块的情况" tabindex="-1"><a class="header-anchor" href="#synchronized-同步语句块的情况" aria-hidden="true">#</a> synchronized 同步语句块的情况</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SynchronizedDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"synchronized 代码块"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 JDK 自带的 <code v-pre>javap</code> 命令查看 <code v-pre>SynchronizedDemo</code> 类的相关字节码信息：首先切换到类的对应目录执行 <code v-pre>javac SynchronizedDemo.java</code> 命令生成编译后的 .class 文件，然后执行<code v-pre>javap -c -s -v -l SynchronizedDemo.class</code>。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/synchronized关键字原理.png" alt="synchronized关键字原理" loading="lazy"></p>
<p>从上面我们可以看出：<strong><code v-pre>synchronized</code> 同步语句块的实现使用的是 <code v-pre>monitorenter</code> 和 <code v-pre>monitorexit</code> 指令，其中 <code v-pre>monitorenter</code> 指令指向同步代码块的开始位置，<code v-pre>monitorexit</code> 指令则指明同步代码块的结束位置。</strong></p>
<p>当执行 <code v-pre>monitorenter</code> 指令时，线程试图获取锁也就是获取 <strong>对象监视器 <code v-pre>monitor</code></strong> 的持有权。</p>
<blockquote>
<p>在 Java 虚拟机(HotSpot)中，Monitor 是基于 C++实现的，由<a href="https://github.com/openjdk-mirror/jdk7u-hotspot/blob/50bdefc3afe944ca74c3093e7448d6b889cd20d1/src/share/vm/runtime/objectMonitor.cpp" target="_blank" rel="noopener noreferrer">ObjectMonitor<ExternalLinkIcon/></a>实现的。每个对象中都内置了一个 <code v-pre>ObjectMonitor</code>对象。</p>
<p>另外，<code v-pre>wait/notify</code>等方法也依赖于<code v-pre>monitor</code>对象，这就是为什么只有在同步的块或者方法中才能调用<code v-pre>wait/notify</code>等方法，否则会抛出<code v-pre>java.lang.IllegalMonitorStateException</code>的异常的原因。</p>
</blockquote>
<p>在执行<code v-pre>monitorenter</code>时，会尝试获取对象的锁，如果锁的计数器为 0 则表示锁可以被获取，获取后将锁计数器设为 1 也就是加 1。</p>
<p><img src="@source/code/java/common/concurrent/images/interview-questions/synchronized-get-lock-code-block.png" alt="执行 monitorenter 获取锁" loading="lazy"></p>
<p>对象锁的的拥有者线程才可以执行 <code v-pre>monitorexit</code> 指令来释放锁。在执行 <code v-pre>monitorexit</code> 指令后，将锁计数器设为 0，表明锁被释放，其他线程可以尝试获取锁。</p>
<p><img src="@source/code/java/common/concurrent/images/interview-questions/synchronized-release-lock-block.png" alt="执行 monitorexit 释放锁" loading="lazy"></p>
<p>如果获取对象锁失败，那当前线程就要阻塞等待，直到锁被另外一个线程释放为止。</p>
<h4 id="synchronized-修饰方法的的情况" tabindex="-1"><a class="header-anchor" href="#synchronized-修饰方法的的情况" aria-hidden="true">#</a> synchronized 修饰方法的的情况</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SynchronizedDemo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"synchronized 方法"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/synchronized关键字原理2.png" alt="synchronized关键字原理" loading="lazy"></p>
<p><code v-pre>synchronized</code> 修饰的方法并没有 <code v-pre>monitorenter</code> 指令和 <code v-pre>monitorexit</code> 指令，取得代之的确实是 <code v-pre>ACC_SYNCHRONIZED</code> 标识，该标识指明了该方法是一个同步方法。JVM 通过该 <code v-pre>ACC_SYNCHRONIZED</code> 访问标志来辨别一个方法是否声明为同步方法，从而执行相应的同步调用。</p>
<p>如果是实例方法，JVM 会尝试获取实例对象的锁。如果是静态方法，JVM 会尝试获取当前 class 的锁。</p>
<h4 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h4>
<p><code v-pre>synchronized</code> 同步语句块的实现使用的是 <code v-pre>monitorenter</code> 和 <code v-pre>monitorexit</code> 指令，其中 <code v-pre>monitorenter</code> 指令指向同步代码块的开始位置，<code v-pre>monitorexit</code> 指令则指明同步代码块的结束位置。</p>
<p><code v-pre>synchronized</code> 修饰的方法并没有 <code v-pre>monitorenter</code> 指令和 <code v-pre>monitorexit</code> 指令，取得代之的确实是 <code v-pre>ACC_SYNCHRONIZED</code> 标识，该标识指明了该方法是一个同步方法。</p>
<p><strong>不过两者的本质都是对对象监视器 monitor 的获取。</strong></p>
<p>相关推荐：<a href="https://tech.youzan.com/javasuo-yu-xian-cheng-de-na-xie-shi/" target="_blank" rel="noopener noreferrer">Java锁与线程的那些事 - 有赞技术团队<ExternalLinkIcon/></a> 。</p>
<p>🧗🏻进阶一下：学有余力的小伙伴可以抽时间详细研究一下对象监视器 <code v-pre>monitor</code>。</p>
<h3 id="说说-jdk1-6-之后的-synchronized-关键字底层做了哪些优化-可以详细介绍一下这些优化吗" tabindex="-1"><a class="header-anchor" href="#说说-jdk1-6-之后的-synchronized-关键字底层做了哪些优化-可以详细介绍一下这些优化吗" aria-hidden="true">#</a> 说说 JDK1.6 之后的 synchronized 关键字底层做了哪些优化，可以详细介绍一下这些优化吗</h3>
<p>JDK1.6 对锁的实现引入了大量的优化，如偏向锁、轻量级锁、自旋锁、适应性自旋锁、锁消除、锁粗化等技术来减少锁操作的开销。</p>
<p>锁主要存在四种状态，依次是：无锁状态、偏向锁状态、轻量级锁状态、重量级锁状态，他们会随着竞争的激烈而逐渐升级。注意锁可以升级不可降级，这种策略是为了提高获得锁和释放锁的效率。</p>
<p>关于这几种优化的详细信息可以查看下面这篇文章：<a href="https://www.cnblogs.com/wuqinglong/p/9945618.html" target="_blank" rel="noopener noreferrer">Java6 及以上版本对 synchronized 的优化<ExternalLinkIcon/></a></p>
<h3 id="谈谈-synchronized-和-reentrantlock-的区别" tabindex="-1"><a class="header-anchor" href="#谈谈-synchronized-和-reentrantlock-的区别" aria-hidden="true">#</a> 谈谈 synchronized 和 ReentrantLock 的区别</h3>
<h4 id="两者都是可重入锁" tabindex="-1"><a class="header-anchor" href="#两者都是可重入锁" aria-hidden="true">#</a> 两者都是可重入锁</h4>
<p><strong>“可重入锁”</strong> 指的是自己可以再次获取自己的内部锁。比如一个线程获得了某个对象的锁，此时这个对象锁还没有释放，当其再次想要获取这个对象的锁的时候还是可以获取的，如果是不可重入锁的话，就会造成死锁。同一个线程每次获取锁，锁的计数器都自增 1，所以要等到锁的计数器下降为 0 时才能释放锁。</p>
<h4 id="synchronized-依赖于-jvm-而-reentrantlock-依赖于-api" tabindex="-1"><a class="header-anchor" href="#synchronized-依赖于-jvm-而-reentrantlock-依赖于-api" aria-hidden="true">#</a> synchronized 依赖于 JVM 而 ReentrantLock 依赖于 API</h4>
<p><code v-pre>synchronized</code> 是依赖于 JVM 实现的，前面我们也讲到了 虚拟机团队在 JDK1.6 为 <code v-pre>synchronized</code> 关键字进行了很多优化，但是这些优化都是在虚拟机层面实现的，并没有直接暴露给我们。<code v-pre>ReentrantLock</code> 是 JDK 层面实现的（也就是 API 层面，需要 lock() 和 unlock() 方法配合 try/finally 语句块来完成），所以我们可以通过查看它的源代码，来看它是如何实现的。</p>
<h4 id="reentrantlock-比-synchronized-增加了一些高级功能" tabindex="-1"><a class="header-anchor" href="#reentrantlock-比-synchronized-增加了一些高级功能" aria-hidden="true">#</a> ReentrantLock 比 synchronized 增加了一些高级功能</h4>
<p>相比<code v-pre>synchronized</code>，<code v-pre>ReentrantLock</code>增加了一些高级功能。主要来说主要有三点：</p>
<ul>
<li><strong>等待可中断</strong> : <code v-pre>ReentrantLock</code>提供了一种能够中断等待锁的线程的机制，通过 <code v-pre>lock.lockInterruptibly()</code> 来实现这个机制。也就是说正在等待的线程可以选择放弃等待，改为处理其他事情。</li>
<li><strong>可实现公平锁</strong> : <code v-pre>ReentrantLock</code>可以指定是公平锁还是非公平锁。而<code v-pre>synchronized</code>只能是非公平锁。所谓的公平锁就是先等待的线程先获得锁。<code v-pre>ReentrantLock</code>默认情况是非公平的，可以通过 <code v-pre>ReentrantLock</code>类的<code v-pre>ReentrantLock(boolean fair)</code>构造方法来制定是否是公平的。</li>
<li><strong>可实现选择性通知（锁可以绑定多个条件）</strong>: <code v-pre>synchronized</code>关键字与<code v-pre>wait()</code>和<code v-pre>notify()</code>/<code v-pre>notifyAll()</code>方法相结合可以实现等待/通知机制。<code v-pre>ReentrantLock</code>类当然也可以实现，但是需要借助于<code v-pre>Condition</code>接口与<code v-pre>newCondition()</code>方法。</li>
</ul>
<blockquote>
<p><code v-pre>Condition</code>是 JDK1.5 之后才有的，它具有很好的灵活性，比如可以实现多路通知功能也就是在一个<code v-pre>Lock</code>对象中可以创建多个<code v-pre>Condition</code>实例（即对象监视器），<strong>线程对象可以注册在指定的<code v-pre>Condition</code>中，从而可以有选择性的进行线程通知，在调度线程上更加灵活。 在使用<code v-pre>notify()/notifyAll()</code>方法进行通知时，被通知的线程是由 JVM 选择的，用<code v-pre>ReentrantLock</code>类结合<code v-pre>Condition</code>实例可以实现“选择性通知”</strong> ，这个功能非常重要，而且是 Condition 接口默认提供的。而<code v-pre>synchronized</code>关键字就相当于整个 Lock 对象中只有一个<code v-pre>Condition</code>实例，所有的线程都注册在它一个身上。如果执行<code v-pre>notifyAll()</code>方法的话就会通知所有处于等待状态的线程这样会造成很大的效率问题，而<code v-pre>Condition</code>实例的<code v-pre>signalAll()</code>方法 只会唤醒注册在该<code v-pre>Condition</code>实例中的所有等待线程。</p>
</blockquote>
<p><strong>如果你想使用上述功能，那么选择 ReentrantLock 是一个不错的选择。性能已不是选择标准</strong></p>
<h2 id="volatile-关键字" tabindex="-1"><a class="header-anchor" href="#volatile-关键字" aria-hidden="true">#</a> volatile 关键字</h2>
<p>我们先要从 <strong>CPU 缓存模型</strong> 说起！</p>
<h3 id="cpu-缓存模型" tabindex="-1"><a class="header-anchor" href="#cpu-缓存模型" aria-hidden="true">#</a> CPU 缓存模型</h3>
<p><strong>为什么要弄一个 CPU 高速缓存呢？</strong></p>
<p>类比我们开发网站后台系统使用的缓存（比如 Redis）是为了解决程序处理速度和访问常规关系型数据库速度不对等的问题。 <strong>CPU 缓存则是为了解决 CPU 处理速度和内存处理速度不对等的问题。</strong></p>
<p>我们甚至可以把 <strong>内存可以看作外存的高速缓存</strong>，程序运行的时候我们把外存的数据复制到内存，由于内存的处理速度远远高于外存，这样提高了处理速度。</p>
<p>总结：<strong>CPU Cache 缓存的是内存数据用于解决 CPU 处理速度和内存不匹配的问题，内存缓存的是硬盘数据用于解决硬盘访问速度过慢的问题。</strong></p>
<p>为了更好地理解，我画了一个简单的 CPU Cache 示意图如下（实际上，现代的 CPU Cache 通常分为三层，分别叫 L1,L2,L3 Cache）:</p>
<p><img src="@source/code/java/common/concurrent/images/interview-questions/cpu-cache.png" alt="cpu-cache" loading="lazy"></p>
<p><strong>CPU Cache 的工作方式：</strong></p>
<p>先复制一份数据到 CPU Cache 中，当 CPU 需要用到的时候就可以直接从 CPU Cache 中读取数据，当运算完成后，再将运算得到的数据写回 Main Memory 中。但是，这样存在 <strong>内存缓存不一致性的问题</strong> ！比如我执行一个 i++操作的话，如果两个线程同时执行的话，假设两个线程从 CPU Cache 中读取的 i=1，两个线程做了 1++运算完之后再写回 Main Memory 之后 i=2，而正确结果应该是 i=3。</p>
<p><strong>CPU 为了解决内存缓存不一致性问题可以通过制定缓存一致协议或者其他手段来解决。</strong></p>
<h3 id="讲一下-jmm-java-内存模型" tabindex="-1"><a class="header-anchor" href="#讲一下-jmm-java-内存模型" aria-hidden="true">#</a> 讲一下 JMM(Java 内存模型)</h3>
<p>Java 内存模型抽象了线程和主内存之间的关系，就比如说线程之间的共享变量必须存储在主内存中。Java 内存模型主要目的是为了屏蔽系统和硬件的差异，避免一套代码在不同的平台下产生的效果不一致。</p>
<p>在 JDK1.2 之前，Java 的内存模型实现总是从<strong>主存</strong>（即共享内存）读取变量，是不需要进行特别的注意的。而在当前的 Java 内存模型下，线程可以把变量保存<strong>本地内存</strong>（比如机器的寄存器）中，而不是直接在主存中进行读写。这就可能造成一个线程在主存中修改了一个变量的值，而另外一个线程还继续使用它在寄存器中的变量值的拷贝，造成<strong>数据的不一致</strong>。</p>
<blockquote>
<ul>
<li><strong>主内存</strong> ：所有线程创建的实例对象都存放在主内存中，不管该实例对象是成员变量还是方法中的本地变量(也称局部变量)</li>
<li><strong>本地内存</strong> ：每个线程都有一个私有的本地内存来存储共享变量的副本，并且，每个线程只能访问自己的本地内存，无法访问其他线程的本地内存。本地内存是 JMM 抽象出来的一个概念，存储了主内存中的共享变量副本。</li>
</ul>
</blockquote>
<p><img src="@source/code/java/common/concurrent/images/interview-questions/jmm.png" alt="JMM(Java 内存模型)" loading="lazy"></p>
<p>要解决这个问题，就需要把变量声明为 <strong><code v-pre>volatile</code></strong> ，这就指示 JVM，这个变量是共享且不稳定的，每次使用它都到主存中进行读取。</p>
<p>所以，<strong><code v-pre>volatile</code> 关键字 除了防止 JVM 的指令重排 ，还有一个重要的作用就是保证变量的可见性。</strong></p>
<p><img src="@source/code/java/common/concurrent/images/interview-questions/jmm2.png" alt="volatile关键字可见性" loading="lazy"></p>
<h3 id="并发编程的三个重要特性" tabindex="-1"><a class="header-anchor" href="#并发编程的三个重要特性" aria-hidden="true">#</a> 并发编程的三个重要特性</h3>
<ol>
<li><strong>原子性</strong> : 一次操作或者多次操作，要么所有的操作全部都得到执行并且不会受到任何因素的干扰而中断，要么都不执行。<code v-pre>synchronized</code> 可以保证代码片段的原子性。</li>
<li><strong>可见性</strong> ：当一个线程对共享变量进行了修改，那么另外的线程都是立即可以看到修改后的最新值。<code v-pre>volatile</code> 关键字可以保证共享变量的可见性。</li>
<li><strong>有序性</strong> ：代码在执行的过程中的先后顺序，Java 在编译器以及运行期间的优化，代码的执行顺序未必就是编写代码时候的顺序。<code v-pre>volatile</code> 关键字可以禁止指令进行重排序优化。</li>
</ol>
<h3 id="说说-synchronized-关键字和-volatile-关键字的区别" tabindex="-1"><a class="header-anchor" href="#说说-synchronized-关键字和-volatile-关键字的区别" aria-hidden="true">#</a> 说说 synchronized 关键字和 volatile 关键字的区别</h3>
<p><code v-pre>synchronized</code> 关键字和 <code v-pre>volatile</code> 关键字是两个互补的存在，而不是对立的存在！</p>
<ul>
<li><strong><code v-pre>volatile</code> 关键字</strong>是线程同步的<strong>轻量级实现</strong>，所以 <strong><code v-pre>volatile </code>性能肯定比<code v-pre>synchronized</code>关键字要好</strong> 。但是 <strong><code v-pre>volatile</code> 关键字只能用于变量而 <code v-pre>synchronized</code> 关键字可以修饰方法以及代码块</strong> 。</li>
<li><strong><code v-pre>volatile</code> 关键字能保证数据的可见性，但不能保证数据的原子性。<code v-pre>synchronized</code> 关键字两者都能保证。</strong></li>
<li><strong><code v-pre>volatile</code>关键字主要用于解决变量在多个线程之间的可见性，而 <code v-pre>synchronized</code> 关键字解决的是多个线程之间访问资源的同步性。</strong></li>
</ul>
<h2 id="threadlocal" tabindex="-1"><a class="header-anchor" href="#threadlocal" aria-hidden="true">#</a> ThreadLocal</h2>
<h3 id="threadlocal-简介" tabindex="-1"><a class="header-anchor" href="#threadlocal-简介" aria-hidden="true">#</a> ThreadLocal 简介</h3>
<p>通常情况下，我们创建的变量是可以被任何一个线程访问并修改的。<strong>如果想实现每一个线程都有自己的专属本地变量该如何解决呢？</strong> JDK 中提供的<code v-pre>ThreadLocal</code>类正是为了解决这样的问题。 <strong><code v-pre>ThreadLocal</code>类主要解决的就是让每个线程绑定自己的值，可以将<code v-pre>ThreadLocal</code>类形象的比喻成存放数据的盒子，盒子中可以存储每个线程的私有数据。</strong></p>
<p><strong>如果你创建了一个<code v-pre>ThreadLocal</code>变量，那么访问这个变量的每个线程都会有这个变量的本地副本，这也是<code v-pre>ThreadLocal</code>变量名的由来。他们可以使用 <code v-pre>get（）</code> 和 <code v-pre>set（）</code> 方法来获取默认值或将其值更改为当前线程所存的副本的值，从而避免了线程安全问题。</strong></p>
<p>再举个简单的例子：</p>
<p>比如有两个人去宝屋收集宝物，这两个共用一个袋子的话肯定会产生争执，但是给他们两个人每个人分配一个袋子的话就不会出现这样的问题。如果把这两个人比作线程的话，那么 ThreadLocal 就是用来避免这两个线程竞争的。</p>
<h3 id="threadlocal-示例" tabindex="-1"><a class="header-anchor" href="#threadlocal-示例" aria-hidden="true">#</a> ThreadLocal 示例</h3>
<p>相信看了上面的解释，大家已经搞懂 ThreadLocal 类是个什么东西了。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Random</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ThreadLocalExample</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>

     <span class="token comment">// SimpleDateFormat 不是线程安全的，所以每个线程都要有自己独立的副本</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SimpleDateFormat</span><span class="token punctuation">></span></span> formatter <span class="token operator">=</span> <span class="token class-name">ThreadLocal</span><span class="token punctuation">.</span><span class="token function">withInitial</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">"yyyyMMdd HHmm"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">ThreadLocalExample</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocalExample</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span> <span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token string">""</span><span class="token operator">+</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            t<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Thread Name= "</span><span class="token operator">+</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" default Formatter = "</span><span class="token operator">+</span>formatter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//formatter pattern is changed here by thread, but it won't reflect to other threads</span>
        formatter<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Thread Name= "</span><span class="token operator">+</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">" formatter = "</span><span class="token operator">+</span>formatter<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toPattern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Thread Name= 0 default Formatter = yyyyMMdd HHmm
Thread Name= 0 formatter = yy-M-d ah:mm
Thread Name= 1 default Formatter = yyyyMMdd HHmm
Thread Name= 2 default Formatter = yyyyMMdd HHmm
Thread Name= 1 formatter = yy-M-d ah:mm
Thread Name= 3 default Formatter = yyyyMMdd HHmm
Thread Name= 2 formatter = yy-M-d ah:mm
Thread Name= 4 default Formatter = yyyyMMdd HHmm
Thread Name= 3 formatter = yy-M-d ah:mm
Thread Name= 4 formatter = yy-M-d ah:mm
Thread Name= 5 default Formatter = yyyyMMdd HHmm
Thread Name= 5 formatter = yy-M-d ah:mm
Thread Name= 6 default Formatter = yyyyMMdd HHmm
Thread Name= 6 formatter = yy-M-d ah:mm
Thread Name= 7 default Formatter = yyyyMMdd HHmm
Thread Name= 7 formatter = yy-M-d ah:mm
Thread Name= 8 default Formatter = yyyyMMdd HHmm
Thread Name= 9 default Formatter = yyyyMMdd HHmm
Thread Name= 8 formatter = yy-M-d ah:mm
Thread Name= 9 formatter = yy-M-d ah:mm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从输出中可以看出，Thread-0 已经改变了 formatter 的值，但仍然是 thread-2 默认格式化程序与初始化值相同，其他线程也一样。</p>
<p>上面有一段代码用到了创建 <code v-pre>ThreadLocal</code> 变量的那段代码用到了 Java8 的知识，它等于下面这段代码，如果你写了下面这段代码的话，IDEA 会提示你转换为 Java8 的格式(IDEA 真的不错！)。因为 ThreadLocal 类在 Java 8 中扩展，使用一个新的方法<code v-pre>withInitial()</code>，将 Supplier 功能接口作为参数。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SimpleDateFormat</span><span class="token punctuation">></span></span> formatter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SimpleDateFormat</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token class-name">SimpleDateFormat</span> <span class="token function">initialValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span><span class="token string">"yyyyMMdd HHmm"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="threadlocal-原理" tabindex="-1"><a class="header-anchor" href="#threadlocal-原理" aria-hidden="true">#</a> ThreadLocal 原理</h3>
<p>从 <code v-pre>Thread</code>类源代码入手。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Thread</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
    <span class="token comment">//......</span>
    <span class="token comment">//与此线程有关的ThreadLocal值。由ThreadLocal类维护</span>
    <span class="token class-name">ThreadLocal<span class="token punctuation">.</span>ThreadLocalMap</span> threadLocals <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token comment">//与此线程有关的InheritableThreadLocal值。由InheritableThreadLocal类维护</span>
    <span class="token class-name">ThreadLocal<span class="token punctuation">.</span>ThreadLocalMap</span> inheritableThreadLocals <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">//......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面<code v-pre>Thread</code>类 源代码可以看出<code v-pre>Thread</code> 类中有一个 <code v-pre>threadLocals</code> 和 一个 <code v-pre>inheritableThreadLocals</code> 变量，它们都是 <code v-pre>ThreadLocalMap</code> 类型的变量,我们可以把 <code v-pre>ThreadLocalMap</code> 理解为<code v-pre>ThreadLocal</code> 类实现的定制化的 <code v-pre>HashMap</code>。默认情况下这两个变量都是 null，只有当前线程调用 <code v-pre>ThreadLocal</code> 类的 <code v-pre>set</code>或<code v-pre>get</code>方法时才创建它们，实际上调用这两个方法的时候，我们调用的是<code v-pre>ThreadLocalMap</code>类对应的 <code v-pre>get()</code>、<code v-pre>set()</code>方法。</p>
<p><code v-pre>ThreadLocal</code>类的<code v-pre>set()</code>方法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token class-name">T</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Thread</span> t <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ThreadLocalMap</span> map <span class="token operator">=</span> <span class="token function">getMap</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>map <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token function">createMap</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">ThreadLocalMap</span> <span class="token function">getMap</span><span class="token punctuation">(</span><span class="token class-name">Thread</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> t<span class="token punctuation">.</span>threadLocals<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面这些内容，我们足以通过猜测得出结论：<strong>最终的变量是放在了当前线程的 <code v-pre>ThreadLocalMap</code> 中，并不是存在 <code v-pre>ThreadLocal</code> 上，<code v-pre>ThreadLocal</code> 可以理解为只是<code v-pre>ThreadLocalMap</code>的封装，传递了变量值。</strong> <code v-pre>ThrealLocal</code> 类中可以通过<code v-pre>Thread.currentThread()</code>获取到当前线程对象后，直接通过<code v-pre>getMap(Thread t)</code>可以访问到该线程的<code v-pre>ThreadLocalMap</code>对象。</p>
<p><strong>每个<code v-pre>Thread</code>中都具备一个<code v-pre>ThreadLocalMap</code>，而<code v-pre>ThreadLocalMap</code>可以存储以<code v-pre>ThreadLocal</code>为 key ，Object 对象为 value 的键值对。</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ThreadLocalMap</span><span class="token punctuation">(</span><span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> firstKey<span class="token punctuation">,</span> <span class="token class-name">Object</span> firstValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如我们在同一个线程中声明了两个 <code v-pre>ThreadLocal</code> 对象的话， <code v-pre>Thread</code>内部都是使用仅有的那个<code v-pre>ThreadLocalMap</code> 存放数据的，<code v-pre>ThreadLocalMap</code>的 key 就是 <code v-pre>ThreadLocal</code>对象，value 就是 <code v-pre>ThreadLocal</code> 对象调用<code v-pre>set</code>方法设置的值。</p>
<p><img src="@source/code/java/common/concurrent/images/threadlocal数据结构.png" alt="ThreadLocal数据结构" loading="lazy"></p>
<p><code v-pre>ThreadLocalMap</code>是<code v-pre>ThreadLocal</code>的静态内部类。</p>
<p><img src="@source/code/java/common/concurrent/images/ThreadLocal内部类.png" alt="ThreadLocal内部类" loading="lazy"></p>
<h3 id="threadlocal-内存泄露问题" tabindex="-1"><a class="header-anchor" href="#threadlocal-内存泄露问题" aria-hidden="true">#</a> ThreadLocal 内存泄露问题</h3>
<p><code v-pre>ThreadLocalMap</code> 中使用的 key 为 <code v-pre>ThreadLocal</code> 的弱引用,而 value 是强引用。所以，如果 <code v-pre>ThreadLocal</code> 没有被外部强引用的情况下，在垃圾回收的时候，key 会被清理掉，而 value 不会被清理掉。这样一来，<code v-pre>ThreadLocalMap</code> 中就会出现 key 为 null 的 Entry。假如我们不做任何措施的话，value 永远无法被 GC 回收，这个时候就可能会产生内存泄露。ThreadLocalMap 实现中已经考虑了这种情况，在调用 <code v-pre>set()</code>、<code v-pre>get()</code>、<code v-pre>remove()</code> 方法的时候，会清理掉 key 为 null 的记录。使用完 <code v-pre>ThreadLocal</code>方法后 最好手动调用<code v-pre>remove()</code>方法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Entry</span> <span class="token keyword">extends</span> <span class="token class-name">WeakReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ThreadLocal</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** The value associated with this ThreadLocal. */</span>
    <span class="token class-name">Object</span> value<span class="token punctuation">;</span>

    <span class="token class-name">Entry</span><span class="token punctuation">(</span><span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> k<span class="token punctuation">,</span> <span class="token class-name">Object</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span>
        value <span class="token operator">=</span> v<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>弱引用介绍：</strong></p>
<blockquote>
<p>如果一个对象只具有弱引用，那就类似于<strong>可有可无的生活用品</strong>。弱引用与软引用的区别在于：只具有弱引用的对象拥有更短暂的生命周期。在垃圾回收器线程扫描它 所管辖的内存区域的过程中，一旦发现了只具有弱引用的对象，不管当前内存空间足够与否，都会回收它的内存。不过，由于垃圾回收器是一个优先级很低的线程， 因此不一定会很快发现那些只具有弱引用的对象。</p>
<p>弱引用可以和一个引用队列（ReferenceQueue）联合使用，如果弱引用所引用的对象被垃圾回收，Java 虚拟机就会把这个弱引用加入到与之关联的引用队列中。</p>
</blockquote>
<h2 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池" aria-hidden="true">#</a> 线程池</h2>
<h3 id="为什么要用线程池" tabindex="-1"><a class="header-anchor" href="#为什么要用线程池" aria-hidden="true">#</a> 为什么要用线程池？</h3>
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
<h3 id="实现-runnable-接口和-callable-接口的区别" tabindex="-1"><a class="header-anchor" href="#实现-runnable-接口和-callable-接口的区别" aria-hidden="true">#</a> 实现 Runnable 接口和 Callable 接口的区别</h3>
<p><code v-pre>Runnable</code>自 Java 1.0 以来一直存在，但<code v-pre>Callable</code>仅在 Java 1.5 中引入,目的就是为了来处理<code v-pre>Runnable</code>不支持的用例。<strong><code v-pre>Runnable</code> 接口</strong> 不会返回结果或抛出检查异常，但是 <strong><code v-pre>Callable</code> 接口</strong> 可以。所以，如果任务不需要返回结果或抛出异常推荐使用 <strong><code v-pre>Runnable</code> 接口</strong> ，这样代码看起来会更加简洁。</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行-execute-方法和-submit-方法的区别是什么呢" tabindex="-1"><a class="header-anchor" href="#执行-execute-方法和-submit-方法的区别是什么呢" aria-hidden="true">#</a> 执行 execute()方法和 submit()方法的区别是什么呢？</h3>
<ol>
<li><strong><code v-pre>execute()</code>方法用于提交不需要返回值的任务，所以无法判断任务是否被线程池执行成功与否；</strong></li>
<li><strong><code v-pre>submit()</code>方法用于提交需要返回值的任务。线程池会返回一个 <code v-pre>Future</code> 类型的对象，通过这个 <code v-pre>Future</code> 对象可以判断任务是否执行成功</strong>，并且可以通过 <code v-pre>Future</code> 的 <code v-pre>get()</code>方法来获取返回值，<code v-pre>get()</code>方法会阻塞当前线程直到任务完成，而使用 <code v-pre>get(long timeout，TimeUnit unit)</code>方法则会阻塞当前线程一段时间后立即返回，这时候有可能任务没有执行完。</li>
</ol>
<p>我们以 <strong><code v-pre>AbstractExecutorService</code> 接口</strong> 中的一个 <code v-pre>submit</code> 方法为例子来看看源代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> <span class="token function">submit</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> task<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>task <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">RunnableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">></span></span> ftask <span class="token operator">=</span> <span class="token function">newTaskFor</span><span class="token punctuation">(</span>task<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">execute</span><span class="token punctuation">(</span>ftask<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> ftask<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面方法调用的 <code v-pre>newTaskFor</code> 方法返回了一个 <code v-pre>FutureTask</code> 对象。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">RunnableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">newTaskFor</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> runnable<span class="token punctuation">,</span> <span class="token class-name">T</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">FutureTask</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>runnable<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们再来看看<code v-pre>execute()</code>方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何创建线程池" tabindex="-1"><a class="header-anchor" href="#如何创建线程池" aria-hidden="true">#</a> 如何创建线程池</h3>
<p>《阿里巴巴 Java 开发手册》中强制线程池不允许使用 Executors 去创建，而是通过 ThreadPoolExecutor 的方式，这样的处理方式让写的同学更加明确线程池的运行规则，规避资源耗尽的风险</p>
<blockquote>
<p>Executors 返回线程池对象的弊端如下：</p>
<ul>
<li><strong>FixedThreadPool 和 SingleThreadExecutor</strong> ： 允许请求的队列长度为 Integer.MAX_VALUE ，可能堆积大量的请求，从而导致 OOM。</li>
<li><strong>CachedThreadPool 和 ScheduledThreadPool</strong> ： 允许创建的线程数量为 Integer.MAX_VALUE ，可能会创建大量线程，从而导致 OOM。</li>
</ul>
</blockquote>
<p><strong>方式一：通过构造方法实现</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/ThreadPoolExecutor构造方法.png" alt="ThreadPoolExecutor构造方法" loading="lazy"></p>
<p><strong>方式二：通过 Executor 框架的工具类 Executors 来实现</strong></p>
<p>我们可以创建三种类型的 ThreadPoolExecutor：</p>
<ul>
<li><strong>FixedThreadPool</strong> ： 该方法返回一个固定线程数量的线程池。该线程池中的线程数量始终不变。当有一个新的任务提交时，线程池中若有空闲线程，则立即执行。若没有，则新的任务会被暂存在一个任务队列中，待有线程空闲时，便处理在任务队列中的任务。</li>
<li><strong>SingleThreadExecutor：</strong> 方法返回一个只有一个线程的线程池。若多余一个任务被提交到该线程池，任务会被保存在一个任务队列中，待线程空闲，按先入先出的顺序执行队列中的任务。</li>
<li><strong>CachedThreadPool：</strong> 该方法返回一个可根据实际情况调整线程数量的线程池。线程池的线程数量不确定，但若有空闲线程可以复用，则会优先使用可复用的线程。若所有线程均在工作，又有新的任务提交，则会创建新的线程处理任务。所有线程在当前任务执行完毕后，将返回线程池进行复用。</li>
</ul>
<p>对应 Executors 工具类中的方法如图所示：</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/Executor框架的工具类.png" alt="Executor框架的工具类" loading="lazy"></p>
<h3 id="threadpoolexecutor-类分析" tabindex="-1"><a class="header-anchor" href="#threadpoolexecutor-类分析" aria-hidden="true">#</a> ThreadPoolExecutor 类分析</h3>
<p><code v-pre>ThreadPoolExecutor</code> 类中提供的四个构造方法。我们来看最长的那个，其余三个都是在这个构造方法的基础上产生（其他几个构造方法说白点都是给定某些默认参数的构造方法比如默认制定拒绝策略是什么），这里就不贴代码讲了，比较简单。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 用给定的初始参数创建一个新的ThreadPoolExecutor。
 */</span>
<span class="token keyword">public</span> <span class="token class-name">ThreadPoolExecutor</span><span class="token punctuation">(</span><span class="token keyword">int</span> corePoolSize<span class="token punctuation">,</span>
                      <span class="token keyword">int</span> maximumPoolSize<span class="token punctuation">,</span>
                      <span class="token keyword">long</span> keepAliveTime<span class="token punctuation">,</span>
                      <span class="token class-name">TimeUnit</span> unit<span class="token punctuation">,</span>
                      <span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">></span></span> workQueue<span class="token punctuation">,</span>
                      <span class="token class-name">ThreadFactory</span> threadFactory<span class="token punctuation">,</span>
                      <span class="token class-name">RejectedExecutionHandler</span> handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>下面这些对创建 非常重要，在后面使用线程池的过程中你一定会用到！所以，务必拿着小本本记清楚。</strong></p>
<h4 id="threadpoolexecutor构造函数重要参数分析" tabindex="-1"><a class="header-anchor" href="#threadpoolexecutor构造函数重要参数分析" aria-hidden="true">#</a> <code v-pre>ThreadPoolExecutor</code>构造函数重要参数分析</h4>
<p><strong><code v-pre>ThreadPoolExecutor</code> 3 个最重要的参数：</strong></p>
<ul>
<li><strong><code v-pre>corePoolSize</code> :</strong> 核心线程数定义了最小可以同时运行的线程数量。</li>
<li><strong><code v-pre>maximumPoolSize</code> :</strong> 当队列中存放的任务达到队列容量的时候，当前可以同时运行的线程数量变为最大线程数。</li>
<li><strong><code v-pre>workQueue</code>:</strong> 当新任务来的时候会先判断当前运行的线程数量是否达到核心线程数，如果达到的话，新任务就会被存放在队列中。</li>
</ul>
<p><code v-pre>ThreadPoolExecutor</code>其他常见参数:</p>
<ol>
<li><strong><code v-pre>keepAliveTime</code></strong>:当线程池中的线程数量大于 <code v-pre>corePoolSize</code> 的时候，如果这时没有新的任务提交，核心线程外的线程不会立即销毁，而是会等待，直到等待的时间超过了 <code v-pre>keepAliveTime</code>才会被回收销毁；</li>
<li><strong><code v-pre>unit</code></strong> : <code v-pre>keepAliveTime</code> 参数的时间单位。</li>
<li><strong><code v-pre>threadFactory</code></strong> :executor 创建新线程的时候会用到。</li>
<li><strong><code v-pre>handler</code></strong> :饱和策略。关于饱和策略下面单独介绍一下。</li>
</ol>
<h4 id="threadpoolexecutor-饱和策略" tabindex="-1"><a class="header-anchor" href="#threadpoolexecutor-饱和策略" aria-hidden="true">#</a> <code v-pre>ThreadPoolExecutor</code> 饱和策略</h4>
<p><strong><code v-pre>ThreadPoolExecutor</code> 饱和策略定义:</strong></p>
<p>如果当前同时运行的线程数量达到最大线程数量并且队列也已经被放满了任务时，<code v-pre>ThreadPoolTaskExecutor</code> 定义一些策略:</p>
<ul>
<li><strong><code v-pre>ThreadPoolExecutor.AbortPolicy</code>：</strong> 抛出 <code v-pre>RejectedExecutionException</code>来拒绝新任务的处理。</li>
<li><strong><code v-pre>ThreadPoolExecutor.CallerRunsPolicy</code>：</strong> 调用执行自己的线程运行任务，也就是直接在调用<code v-pre>execute</code>方法的线程中运行(<code v-pre>run</code>)被拒绝的任务，如果执行程序已关闭，则会丢弃该任务。因此这种策略会降低对于新任务提交速度，影响程序的整体性能。如果您的应用程序可以承受此延迟并且你要求任何一个任务请求都要被执行的话，你可以选择这个策略。</li>
<li><strong><code v-pre>ThreadPoolExecutor.DiscardPolicy</code>：</strong> 不处理新任务，直接丢弃掉。</li>
<li><strong><code v-pre>ThreadPoolExecutor.DiscardOldestPolicy</code>：</strong> 此策略将丢弃最早的未处理的任务请求。</li>
</ul>
<p>举个例子： Spring 通过 <code v-pre>ThreadPoolTaskExecutor</code> 或者我们直接通过 <code v-pre>ThreadPoolExecutor</code> 的构造函数创建线程池的时候，当我们不指定 <code v-pre>RejectedExecutionHandler</code> 饱和策略的话来配置线程池的时候默认使用的是 <code v-pre>ThreadPoolExecutor.AbortPolicy</code>。在默认情况下，<code v-pre>ThreadPoolExecutor</code> 将抛出 <code v-pre>RejectedExecutionException</code> 来拒绝新来的任务 ，这代表你将丢失对这个任务的处理。 对于可伸缩的应用程序，建议使用 <code v-pre>ThreadPoolExecutor.CallerRunsPolicy</code>。当最大池被填满时，此策略为我们提供可伸缩队列。（这个直接查看 <code v-pre>ThreadPoolExecutor</code> 的构造函数源码就可以看出，比较简单的原因，这里就不贴代码了）</p>
<h3 id="一个简单的线程池-demo" tabindex="-1"><a class="header-anchor" href="#一个简单的线程池-demo" aria-hidden="true">#</a> 一个简单的线程池 Demo</h3>
<p>为了让大家更清楚上面的面试题中的一些概念，我写了一个简单的线程池 Demo。</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到我们上面的代码指定了：</p>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="线程池原理分析" tabindex="-1"><a class="header-anchor" href="#线程池原理分析" aria-hidden="true">#</a> 线程池原理分析</h3>
<p>承接 4.6 节，我们通过代码输出结果可以看出：<strong>线程池首先会先执行 5 个任务，然后这些任务有任务被执行完的话，就会去拿新的任务执行。</strong> 大家可以先通过上面讲解的内容，分析一下到底是咋回事？（自己独立思考一会）</p>
<p>现在，我们就分析上面的输出内容来简单分析一下线程池原理。</p>
<p><strong>为了搞懂线程池的原理，我们需要首先分析一下 <code v-pre>execute</code>方法。</strong> 在 4.6 节中的 Demo 中我们使用 <code v-pre>executor.execute(worker)</code>来提交一个任务到线程池中去，这个方法非常重要，下面我们来看看它的源码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 存放线程池的运行状态 (runState) 和线程池内有效线程的数量 (workerCount)</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">AtomicInteger</span> ctl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token function">ctlOf</span><span class="token punctuation">(</span>RUNNING<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">workerCountOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> c <span class="token operator">&amp;</span> CAPACITY<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Runnable</span><span class="token punctuation">></span></span> workQueue<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">execute</span><span class="token punctuation">(</span><span class="token class-name">Runnable</span> command<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果任务为null，则抛出异常。</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>command <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ctl 中保存的线程池当前的一些状态信息</span>
    <span class="token keyword">int</span> c <span class="token operator">=</span> ctl<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">//  下面会涉及到 3 步 操作</span>
    <span class="token comment">// 1.首先判断当前线程池中执行的任务数量是否小于 corePoolSize</span>
    <span class="token comment">// 如果小于的话，通过addWorker(command, true)新建一个线程，并将任务(command)添加到该线程中；然后，启动该线程从而执行任务。</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">workerCountOf</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span> <span class="token operator">&lt;</span> corePoolSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">addWorker</span><span class="token punctuation">(</span>command<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        c <span class="token operator">=</span> ctl<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2.如果当前执行的任务数量大于等于 corePoolSize 的时候就会走到这里</span>
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
<p><img src="@source/code/java/common/concurrent/images/java-thread-pool-summary/图解线程池实现原理.png" alt="图解线程池实现原理" loading="lazy"></p>
<p>现在，让我们在回到 4.6 节我们写的 Demo， 现在是不是很容易就可以搞懂它的原理了呢？</p>
<p>没搞懂的话，也没关系，可以看看我的分析：</p>
<blockquote>
<p>我们在代码中模拟了 10 个任务，我们配置的核心线程数为 5 、等待队列容量为 100 ，所以每次只可能存在 5 个任务同时执行，剩下的 5 个任务会被放到等待队列中去。当前的5个任务中如果有任务被执行完了，线程池就会去拿新的任务执行。</p>
</blockquote>
<h2 id="atomic-原子类" tabindex="-1"><a class="header-anchor" href="#atomic-原子类" aria-hidden="true">#</a> Atomic 原子类</h2>
<h3 id="介绍一下-atomic-原子类" tabindex="-1"><a class="header-anchor" href="#介绍一下-atomic-原子类" aria-hidden="true">#</a> 介绍一下 Atomic 原子类</h3>
<p><code v-pre>Atomic</code> 翻译成中文是原子的意思。在化学上，我们知道原子是构成一般物质的最小单位，在化学反应中是不可分割的。在我们这里 Atomic 是指一个操作是不可中断的。即使是在多个线程一起执行的时候，一个操作一旦开始，就不会被其他线程干扰。</p>
<p>所以，所谓原子类说简单点就是具有原子/原子操作特征的类。</p>
<p>并发包 <code v-pre>java.util.concurrent</code> 的原子类都存放在<code v-pre>java.util.concurrent.atomic</code>下,如下图所示。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/JUC原子类概览.png" alt="JUC原子类概览" loading="lazy"></p>
<h3 id="juc-包中的原子类是哪-4-类" tabindex="-1"><a class="header-anchor" href="#juc-包中的原子类是哪-4-类" aria-hidden="true">#</a> JUC 包中的原子类是哪 4 类?</h3>
<p><strong>基本类型</strong></p>
<p>使用原子的方式更新基本类型</p>
<ul>
<li><code v-pre>AtomicInteger</code>：整型原子类</li>
<li><code v-pre>AtomicLong</code>：长整型原子类</li>
<li><code v-pre>AtomicBoolean</code>：布尔型原子类</li>
</ul>
<p><strong>数组类型</strong></p>
<p>使用原子的方式更新数组里的某个元素</p>
<ul>
<li><code v-pre>AtomicIntegerArray</code>：整型数组原子类</li>
<li><code v-pre>AtomicLongArray</code>：长整型数组原子类</li>
<li><code v-pre>AtomicReferenceArray</code>：引用类型数组原子类</li>
</ul>
<p><strong>引用类型</strong></p>
<ul>
<li><code v-pre>AtomicReference</code>：引用类型原子类</li>
<li><code v-pre>AtomicStampedReference</code>：原子更新带有版本号的引用类型。该类将整数值与引用关联起来，可用于解决原子的更新数据和数据的版本号，可以解决使用 CAS 进行原子更新时可能出现的 ABA 问题。</li>
<li><code v-pre>AtomicMarkableReference</code> ：原子更新带有标记位的引用类型</li>
</ul>
<p><strong>对象的属性修改类型</strong></p>
<ul>
<li><code v-pre>AtomicIntegerFieldUpdater</code>：原子更新整型字段的更新器</li>
<li><code v-pre>AtomicLongFieldUpdater</code>：原子更新长整型字段的更新器</li>
<li><code v-pre>AtomicReferenceFieldUpdater</code>：原子更新引用类型字段的更新器</li>
</ul>
<h3 id="讲讲-atomicinteger-的使用" tabindex="-1"><a class="header-anchor" href="#讲讲-atomicinteger-的使用" aria-hidden="true">#</a> 讲讲 AtomicInteger 的使用</h3>
<p><strong>AtomicInteger 类常用方法</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//获取当前的值</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> newValue<span class="token punctuation">)</span><span class="token comment">//获取当前的值，并设置新的值</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//获取当前的值，并自增</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndDecrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//获取当前的值，并自减</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndAdd</span><span class="token punctuation">(</span><span class="token keyword">int</span> delta<span class="token punctuation">)</span> <span class="token comment">//获取当前的值，并加上预期的值</span>
<span class="token keyword">boolean</span> <span class="token function">compareAndSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> expect<span class="token punctuation">,</span> <span class="token keyword">int</span> update<span class="token punctuation">)</span> <span class="token comment">//如果输入的数值等于预期值，则以原子方式将该值设置为输入值（update）</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">lazySet</span><span class="token punctuation">(</span><span class="token keyword">int</span> newValue<span class="token punctuation">)</span><span class="token comment">//最终设置为newValue,使用 lazySet 设置之后可能导致其他线程在之后的一小段时间内还是可以读到旧的值。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>AtomicInteger 类的使用示例</strong></p>
<p>使用 AtomicInteger 之后，不用对 increment() 方法加锁也可以保证线程安全。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">AtomicIntegerTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">AtomicInteger</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//使用AtomicInteger之后，不需要对该方法加锁，也可以实现线程安全。</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        count<span class="token punctuation">.</span><span class="token function">incrementAndGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="能不能给我简单介绍一下-atomicinteger-类的原理" tabindex="-1"><a class="header-anchor" href="#能不能给我简单介绍一下-atomicinteger-类的原理" aria-hidden="true">#</a> 能不能给我简单介绍一下 AtomicInteger 类的原理</h3>
<p>AtomicInteger 线程安全原理简单分析</p>
<p>AtomicInteger 类的部分源码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// setup to use Unsafe.compareAndSwapInt for updates（更新操作时提供“比较并替换”的作用）</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Unsafe</span> unsafe <span class="token operator">=</span> <span class="token class-name">Unsafe</span><span class="token punctuation">.</span><span class="token function">getUnsafe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> valueOffset<span class="token punctuation">;</span>

<span class="token keyword">static</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        valueOffset <span class="token operator">=</span> unsafe<span class="token punctuation">.</span>objectFieldOffset
            <span class="token punctuation">(</span><span class="token class-name">AtomicInteger</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">"value"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>AtomicInteger 类主要利用 CAS (compare and swap) + volatile 和 native 方法来保证原子操作，从而避免 synchronized 的高开销，执行效率大为提升。</p>
<p>CAS 的原理是拿期望的值和原本的一个值作比较，如果相同则更新成新的值。UnSafe 类的 objectFieldOffset() 方法是一个本地方法，这个方法是用来拿到“原来的值”的内存地址，返回值是 valueOffset。另外 value 是一个 volatile 变量，在内存中可见，因此 JVM 可以保证任何时刻任何线程总能拿到该变量的最新值。</p>
<p>关于 Atomic 原子类这部分更多内容可以查看我的这篇文章：并发编程面试必备：<a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247484834&amp;idx=1&amp;sn=7d3835091af8125c13fc6db765f4c5bd&amp;source=41#wechat_redirect" target="_blank" rel="noopener noreferrer">JUC 中的 Atomic 原子类总结<ExternalLinkIcon/></a></p>
<h2 id="aqs" tabindex="-1"><a class="header-anchor" href="#aqs" aria-hidden="true">#</a> AQS</h2>
<h3 id="aqs-介绍" tabindex="-1"><a class="header-anchor" href="#aqs-介绍" aria-hidden="true">#</a> AQS 介绍</h3>
<p>AQS 的全称为（<code v-pre>AbstractQueuedSynchronizer</code>），这个类在<code v-pre>java.util.concurrent.locks</code>包下面。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/AQS类.png" alt="AQS类" loading="lazy"></p>
<p>AQS 是一个用来构建锁和同步器的框架，使用 AQS 能简单且高效地构造出大量应用广泛的同步器，比如我们提到的 <code v-pre>ReentrantLock</code>，<code v-pre>Semaphore</code>，其他的诸如 <code v-pre>ReentrantReadWriteLock</code>，<code v-pre>SynchronousQueue</code>，<code v-pre>FutureTask</code> 等等皆是基于 AQS 的。当然，我们自己也能利用 AQS 非常轻松容易地构造出符合我们自己需求的同步器。</p>
<h3 id="aqs-原理分析" tabindex="-1"><a class="header-anchor" href="#aqs-原理分析" aria-hidden="true">#</a> AQS 原理分析</h3>
<p>AQS 原理这部分参考了部分博客，在 6.2 节末尾放了链接。</p>
<blockquote>
<p>在面试中被问到并发知识的时候，大多都会被问到“请你说一下自己对于 AQS 原理的理解”。下面给大家一个示例供大家参加，面试不是背题，大家一定要加入自己的思想，即使加入不了自己的思想也要保证自己能够通俗的讲出来而不是背出来。</p>
</blockquote>
<p>下面大部分内容其实在 AQS 类注释上已经给出了，不过是英语看着比较吃力一点，感兴趣的话可以看看源码。</p>
<h4 id="aqs-原理概览" tabindex="-1"><a class="header-anchor" href="#aqs-原理概览" aria-hidden="true">#</a> AQS 原理概览</h4>
<p><strong>AQS 核心思想是，如果被请求的共享资源空闲，则将当前请求资源的线程设置为有效的工作线程，并且将共享资源设置为锁定状态。如果被请求的共享资源被占用，那么就需要一套线程阻塞等待以及被唤醒时锁分配的机制，这个机制 AQS 是用 CLH 队列锁实现的，即将暂时获取不到锁的线程加入到队列中。</strong></p>
<blockquote>
<p>CLH(Craig,Landin and Hagersten)队列是一个虚拟的双向队列（虚拟的双向队列即不存在队列实例，仅存在结点之间的关联关系）。AQS 是将每条请求共享资源的线程封装成一个 CLH 锁队列的一个结点（Node）来实现锁的分配。</p>
</blockquote>
<p>看个 AQS(AbstractQueuedSynchronizer)原理图：</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/AQS原理图.png" alt="AQS原理图" loading="lazy"></p>
<p>AQS 使用一个 int 成员变量来表示同步状态，通过内置的 FIFO 队列来完成获取资源线程的排队工作。AQS 使用 CAS 对该同步状态进行原子操作实现对其值的修改。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> state<span class="token punctuation">;</span><span class="token comment">//共享变量，使用volatile修饰保证线程可见性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>状态信息通过 protected 类型的 getState，setState，compareAndSetState 进行操作</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>
<span class="token comment">//返回同步状态的当前值</span>
<span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> state<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//设置同步状态的值</span>
<span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">int</span> newState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    state <span class="token operator">=</span> newState<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//原子地（CAS操作）将同步状态值设置为给定值update如果当前同步状态的值等于expect（期望值）</span>
<span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token keyword">int</span> expect<span class="token punctuation">,</span> <span class="token keyword">int</span> update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> stateOffset<span class="token punctuation">,</span> expect<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="aqs-对资源的共享方式" tabindex="-1"><a class="header-anchor" href="#aqs-对资源的共享方式" aria-hidden="true">#</a> AQS 对资源的共享方式</h4>
<p><strong>AQS 定义两种资源共享方式</strong></p>
<ul>
<li><strong>Exclusive</strong>（独占）：只有一个线程能执行，如 <code v-pre>ReentrantLock</code>。又可分为公平锁和非公平锁：
<ul>
<li>公平锁：按照线程在队列中的排队顺序，先到者先拿到锁</li>
<li>非公平锁：当线程要获取锁时，无视队列顺序直接去抢锁，谁抢到就是谁的</li>
</ul>
</li>
<li><strong>Share</strong>（共享）：多个线程可同时执行，如<code v-pre> CountDownLatch</code>、<code v-pre>Semaphore</code>、 <code v-pre>CyclicBarrier</code>、<code v-pre>ReadWriteLock</code> 我们都会在后面讲到。</li>
</ul>
<p><code v-pre>ReentrantReadWriteLock</code> 可以看成是组合式，因为 <code v-pre>ReentrantReadWriteLock</code> 也就是读写锁允许多个线程同时对某一资源进行读。</p>
<p>不同的自定义同步器争用共享资源的方式也不同。自定义同步器在实现时只需要实现共享资源 state 的获取与释放方式即可，至于具体线程等待队列的维护（如获取资源失败入队/唤醒出队等），AQS 已经在顶层实现好了。</p>
<h4 id="aqs-底层使用了模板方法模式" tabindex="-1"><a class="header-anchor" href="#aqs-底层使用了模板方法模式" aria-hidden="true">#</a> AQS 底层使用了模板方法模式</h4>
<p>同步器的设计是基于模板方法模式的，如果需要自定义同步器一般的方式是这样（模板方法模式很经典的一个应用）：</p>
<ol>
<li>使用者继承 <code v-pre>AbstractQueuedSynchronizer</code> 并重写指定的方法。（这些重写方法很简单，无非是对于共享资源 state 的获取和释放）</li>
<li>将 AQS 组合在自定义同步组件的实现中，并调用其模板方法，而这些模板方法会调用使用者重写的方法。</li>
</ol>
<p>这和我们以往通过实现接口的方式有很大区别，这是模板方法模式很经典的一个运用。</p>
<p><strong>AQS 使用了模板方法模式，自定义同步器时需要重写下面几个 AQS 提供的钩子方法：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">tryAcquire</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token comment">//独占方式。尝试获取资源，成功则返回true，失败则返回false。</span>
<span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">tryRelease</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token comment">//独占方式。尝试释放资源，成功则返回true，失败则返回false。</span>
<span class="token keyword">protected</span> <span class="token keyword">int</span> <span class="token function">tryAcquireShared</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token comment">//共享方式。尝试获取资源。负数表示失败；0表示成功，但没有剩余可用资源；正数表示成功，且有剩余资源。</span>
<span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">tryReleaseShared</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token comment">//共享方式。尝试释放资源，成功则返回true，失败则返回false。</span>
<span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">isHeldExclusively</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//该线程是否正在独占资源。只有用到condition才需要去实现它。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>什么是钩子方法呢？</strong> 钩子方法是一种被声明在抽象类中的方法，它可以是空方法（由子类实现），也可以是默认实现的方法。模板设计模式通过钩子方法控制固定步骤的实现。</p>
<p>除了上面提到的钩子方法之外，AQS 类中的其他方法都是 <code v-pre>final</code> ，所以无法被其他类重写。</p>
<p>以 <code v-pre>ReentrantLock</code> 为例，state 初始化为 0，表示未锁定状态。A 线程 <code v-pre>lock()</code> 时，会调用 <code v-pre>tryAcquire()</code> 独占该锁并将 <code v-pre>state+1</code> 。此后，其他线程再 <code v-pre>tryAcquire()</code> 时就会失败，直到 A 线程 <code v-pre>unlock()</code> 到 <code v-pre>state=</code>0（即释放锁）为止，其它线程才有机会获取该锁。当然，释放锁之前，A 线程自己是可以重复获取此锁的（state 会累加），这就是可重入的概念。但要注意，获取多少次就要释放多少次，这样才能保证 state 是能回到零态的。</p>
<p>再以 <code v-pre>CountDownLatch</code> 以例，任务分为 N 个子线程去执行，state 也初始化为 N（注意 N 要与线程个数一致）。这 N 个子线程是并行执行的，每个子线程执行完后<code v-pre> countDown()</code> 一次，state 会 CAS(Compare and Swap) 减 1。等到所有子线程都执行完后(即 <code v-pre>state=0</code> )，会 <code v-pre>unpark()</code> 主调用线程，然后主调用线程就会从 <code v-pre>await()</code> 函数返回，继续后余动作。</p>
<p>一般来说，自定义同步器要么是独占方法，要么是共享方式，他们也只需实现<code v-pre>tryAcquire-tryRelease</code>、<code v-pre>tryAcquireShared-tryReleaseShared</code>中的一种即可。但 AQS 也支持自定义同步器同时实现独占和共享两种方式，如<code v-pre>ReentrantReadWriteLock</code>。</p>
<p>推荐两篇 AQS 原理和相关源码分析的文章：</p>
<ul>
<li><a href="https://www.cnblogs.com/waterystone/p/4920797.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/waterystone/p/4920797.html<ExternalLinkIcon/></a></li>
<li><a href="https://www.cnblogs.com/chengxiao/archive/2017/07/24/7141160.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/chengxiao/archive/2017/07/24/7141160.html<ExternalLinkIcon/></a></li>
</ul>
<h3 id="aqs-组件总结" tabindex="-1"><a class="header-anchor" href="#aqs-组件总结" aria-hidden="true">#</a> AQS 组件总结</h3>
<ul>
<li><strong><code v-pre>Semaphore</code>(信号量)-允许多个线程同时访问：</strong> <code v-pre>synchronized</code> 和 <code v-pre>ReentrantLock</code> 都是一次只允许一个线程访问某个资源，<code v-pre>Semaphore</code>(信号量)可以指定多个线程同时访问某个资源。</li>
<li><strong><code v-pre>CountDownLatch </code>（倒计时器）：</strong>  <code v-pre>CountDownLatch</code> 是一个同步工具类，用来协调多个线程之间的同步。这个工具通常用来控制线程等待，它可以让某一个线程等待直到倒计时结束，再开始执行。</li>
<li><strong><code v-pre>CyclicBarrier</code>(循环栅栏)：</strong> <code v-pre>CyclicBarrier</code> 和 <code v-pre>CountDownLatch</code> 非常类似，它也可以实现线程间的技术等待，但是它的功能比 <code v-pre>CountDownLatch</code> 更加复杂和强大。主要应用场景和 <code v-pre>CountDownLatch</code> 类似。<code v-pre>CyclicBarrier</code> 的字面意思是可循环使用（<code v-pre>Cyclic</code>）的屏障（<code v-pre>Barrier</code>）。它要做的事情是，让一组线程到达一个屏障（也可以叫同步点）时被阻塞，直到最后一个线程到达屏障时，屏障才会开门，所有被屏障拦截的线程才会继续干活。<code v-pre>CyclicBarrier</code> 默认的构造方法是 <code v-pre>CyclicBarrier(int parties)</code>，其参数表示屏障拦截的线程数量，每个线程调用 <code v-pre>await()</code> 方法告诉 <code v-pre>CyclicBarrier</code> 我已经到达了屏障，然后当前线程被阻塞。</li>
</ul>
<h3 id="用过-countdownlatch-么-什么场景下用的" tabindex="-1"><a class="header-anchor" href="#用过-countdownlatch-么-什么场景下用的" aria-hidden="true">#</a> 用过 CountDownLatch 么？什么场景下用的？</h3>
<p><code v-pre>CountDownLatch</code> 的作用就是 允许 count 个线程阻塞在一个地方，直至所有线程的任务都执行完毕。之前在项目中，有一个使用多线程读取多个文件处理的场景，我用到了 <code v-pre>CountDownLatch</code> 。具体场景是下面这样的：</p>
<p>我们要读取处理 6 个文件，这 6 个任务都是没有执行顺序依赖的任务，但是我们需要返回给用户的时候将这几个文件的处理的结果进行统计整理。</p>
<p>为此我们定义了一个线程池和 count 为 6 的<code v-pre>CountDownLatch</code>对象 。使用线程池处理读取任务，每一个线程处理完之后就将 count-1，调用<code v-pre>CountDownLatch</code>对象的 <code v-pre>await()</code>方法，直到所有文件读取完之后，才会接着执行后面的逻辑。</p>
<p>伪代码是下面这样的：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CountDownLatchExample1</span> <span class="token punctuation">{</span>
    <span class="token comment">// 处理文件的数量</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> threadCount <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 创建一个具有固定线程数量的线程池对象（推荐使用构造方法创建）</span>
        <span class="token class-name">ExecutorService</span> threadPool <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">final</span> <span class="token class-name">CountDownLatch</span> countDownLatch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CountDownLatch</span><span class="token punctuation">(</span>threadCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> threadCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">final</span> <span class="token keyword">int</span> threadnum <span class="token operator">=</span> i<span class="token punctuation">;</span>
            threadPool<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token comment">//处理文件的业务操作</span>
                    <span class="token comment">//......</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                    <span class="token comment">//表示一个文件已经被完成</span>
                    countDownLatch<span class="token punctuation">.</span><span class="token function">countDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        countDownLatch<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        threadPool<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"finish"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>有没有可以改进的地方呢？</strong></p>
<p>可以使用 <code v-pre>CompletableFuture</code> 类来改进！Java8 的 <code v-pre>CompletableFuture</code> 提供了很多对多线程友好的方法，使用它可以很方便地为我们编写多线程程序，什么异步、串行、并行或者等待所有线程执行完任务什么的都非常方便。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">></span></span> task1 <span class="token operator">=</span>
    <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token punctuation">{</span>
        <span class="token comment">//自定义业务操作</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">></span></span> task6 <span class="token operator">=</span>
    <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">supplyAsync</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">-></span><span class="token punctuation">{</span>
    <span class="token comment">//自定义业务操作</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">></span></span> headerFuture<span class="token operator">=</span><span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">allOf</span><span class="token punctuation">(</span>task1<span class="token punctuation">,</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span>task6<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
    headerFuture<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//......</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"all done. "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码还可以继续优化，当任务过多的时候，把每一个 task 都列出来不太现实，可以考虑通过循环来添加任务。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//文件夹位置</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> filePaths <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span>
<span class="token comment">// 异步处理所有文件</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CompletableFuture</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span></span> fileFutures <span class="token operator">=</span> filePaths<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>filePath <span class="token operator">-></span> <span class="token function">doSomeThing</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 将他们合并起来</span>
<span class="token class-name">CompletableFuture</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Void</span><span class="token punctuation">></span></span> allFutures <span class="token operator">=</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">.</span><span class="token function">allOf</span><span class="token punctuation">(</span>
    fileFutures<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CompletableFuture</span><span class="token punctuation">[</span>fileFutures<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>
<ul>
<li>《深入理解 Java 虚拟机》</li>
<li>《实战 Java 高并发程序设计》</li>
<li>《Java 并发编程的艺术》</li>
<li><a href="https://www.cnblogs.com/waterystone/p/4920797.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/waterystone/p/4920797.html<ExternalLinkIcon/></a></li>
<li><a href="https://www.cnblogs.com/chengxiao/archive/2017/07/24/7141160.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/chengxiao/archive/2017/07/24/7141160.html<ExternalLinkIcon/></a></li>
<li><a href="https://www.journaldev.com/1076/java-threadlocal-example" target="_blank" rel="noopener noreferrer">https://www.journaldev.com/1076/java-threadlocal-example<ExternalLinkIcon/></a></li>
</ul>
</div></template>
