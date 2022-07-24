<template><div><p>开始之前，先来看几道常见的面试题！建议你带着这些问题来看这篇文章：</p>
<ul>
<li>何为 AQS？AQS 原理了解吗？</li>
<li><code v-pre>CountDownLatch</code> 和 <code v-pre>CyclicBarrier</code> 了解吗？两者的区别是什么？</li>
<li>用过 <code v-pre>Semaphore</code> 吗？应用场景了解吗？</li>
<li>......</li>
</ul>
<h2 id="aqs-简单介绍" tabindex="-1"><a class="header-anchor" href="#aqs-简单介绍" aria-hidden="true">#</a> AQS 简单介绍</h2>
<p>AQS 的全称为 <code v-pre>AbstractQueuedSynchronizer</code> ，翻译过来的意思就是抽象队列同步器。这个类在 <code v-pre>java.util.concurrent.locks</code> 包下面。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/Java 程序员必备：并发知识系统总结/AQS.png" alt="enter image description here" loading="lazy"></p>
<p>AQS 就是一个抽象类，主要用来构建锁和同步器。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractQueuedSynchronizer</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractOwnableSynchronizer</span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>AQS 为构建锁和同步器提供了一些通用功能的是实现，因此，使用 AQS 能简单且高效地构造出应用广泛的大量的同步器，比如我们提到的 <code v-pre>ReentrantLock</code>，<code v-pre>Semaphore</code>，其他的诸如 <code v-pre>ReentrantReadWriteLock</code>，<code v-pre>SynchronousQueue</code>，<code v-pre>FutureTask</code>(jdk1.7) 等等皆是基于 AQS 的。</p>
<h2 id="aqs-原理" tabindex="-1"><a class="header-anchor" href="#aqs-原理" aria-hidden="true">#</a> AQS 原理</h2>
<blockquote>
<p>在面试中被问到并发知识的时候，大多都会被问到“请你说一下自己对于 AQS 原理的理解”。下面给大家一个示例供大家参考，面试不是背题，大家一定要加入自己的思想，即使加入不了自己的思想也要保证自己能够通俗的讲出来而不是背出来。</p>
</blockquote>
<p>下面大部分内容其实在 AQS 类注释上已经给出了，不过是英语看着比较吃力一点，感兴趣的话可以看看源码。</p>
<h3 id="aqs-原理概览" tabindex="-1"><a class="header-anchor" href="#aqs-原理概览" aria-hidden="true">#</a> AQS 原理概览</h3>
<p>AQS 核心思想是，如果被请求的共享资源空闲，则将当前请求资源的线程设置为有效的工作线程，并且将共享资源设置为锁定状态。如果被请求的共享资源被占用，那么就需要一套线程阻塞等待以及被唤醒时锁分配的机制，这个机制 AQS 是用 <strong>CLH 队列锁</strong>实现的，即将暂时获取不到锁的线程加入到队列中。</p>
<blockquote>
<p>CLH(Craig,Landin,and Hagersten)队列是一个虚拟的双向队列（虚拟的双向队列即不存在队列实例，仅存在结点之间的关联关系）。AQS 是将每条请求共享资源的线程封装成一个 CLH 锁队列的一个结点（Node）来实现锁的分配。</p>
</blockquote>
<p>看个 AQS(<code v-pre>AbstractQueuedSynchronizer</code>)原理图：</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/Java 程序员必备：并发知识系统总结/CLH.png" alt="enter image description here" loading="lazy"></p>
<p>AQS 使用一个 int 成员变量来表示同步状态，通过内置的 FIFO 队列来完成获取资源线程的排队工作。AQS 使用 CAS 对该同步状态进行原子操作实现对其值的修改。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> state<span class="token punctuation">;</span><span class="token comment">//共享变量，使用volatile修饰保证线程可见性</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>状态信息通过 <code v-pre>protected</code> 类型的<code v-pre>getState()</code>，<code v-pre>setState()</code>，<code v-pre>compareAndSetState()</code> 进行操作</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//返回同步状态的当前值</span>
<span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> state<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 <span class="token comment">// 设置同步状态的值</span>
<span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">setState</span><span class="token punctuation">(</span><span class="token keyword">int</span> newState<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        state <span class="token operator">=</span> newState<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//原子地（CAS操作）将同步状态值设置为给定值update如果当前同步状态的值等于expect（期望值）</span>
<span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token keyword">int</span> expect<span class="token punctuation">,</span> <span class="token keyword">int</span> update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> stateOffset<span class="token punctuation">,</span> expect<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="aqs-对资源的共享方式" tabindex="-1"><a class="header-anchor" href="#aqs-对资源的共享方式" aria-hidden="true">#</a> AQS 对资源的共享方式</h3>
<p>AQS 定义两种资源共享方式</p>
<p><strong>1)Exclusive</strong>（独占）</p>
<p>只有一个线程能执行，如 <code v-pre>ReentrantLock</code>。又可分为公平锁和非公平锁，<code v-pre>ReentrantLock</code> 同时支持两种锁，下面以 <code v-pre>ReentrantLock</code> 对这两种锁的定义做介绍：</p>
<ul>
<li><strong>公平锁</strong> ：按照线程在队列中的排队顺序，先到者先拿到锁</li>
<li><strong>非公平锁</strong> ：当线程要获取锁时，先通过两次 CAS 操作去抢锁，如果没抢到，当前线程再加入到队列中等待唤醒。</li>
</ul>
<blockquote>
<p>说明：下面这部分关于 <code v-pre>ReentrantLock</code> 源代码内容节选自：<a href="https://www.javadoop.com/post/AbstractQueuedSynchronizer-2" target="_blank" rel="noopener noreferrer">https://www.javadoop.com/post/AbstractQueuedSynchronizer-2<ExternalLinkIcon/></a> ，这是一篇很不错文章，推荐阅读。</p>
</blockquote>
<p><strong>下面来看 <code v-pre>ReentrantLock</code> 中相关的源代码：</strong></p>
<p><code v-pre>ReentrantLock</code> 默认采用非公平锁，因为考虑获得更好的性能，通过 <code v-pre>boolean</code> 来决定是否用公平锁（传入 true 用公平锁）。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/** Synchronizer providing all implementation mechanics */</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Sync</span> sync<span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 默认非公平锁</span>
    sync <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NonfairSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> fair<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sync <span class="token operator">=</span> fair <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">FairSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">NonfairSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>ReentrantLock</code> 中公平锁的 <code v-pre>lock</code> 方法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">FairSync</span> <span class="token keyword">extends</span> <span class="token class-name">Sync</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">acquire</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// AbstractQueuedSynchronizer.acquire(int arg)</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">acquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">tryAcquire</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
            <span class="token function">acquireQueued</span><span class="token punctuation">(</span><span class="token function">addWaiter</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token punctuation">.</span>EXCLUSIVE<span class="token punctuation">)</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token function">selfInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">tryAcquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> acquires<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">Thread</span> current <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 1. 和非公平锁相比，这里多了一个判断：是否有线程在等待</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">hasQueuedPredecessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
                <span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> acquires<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">==</span> <span class="token function">getExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> nextc <span class="token operator">=</span> c <span class="token operator">+</span> acquires<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nextc <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Maximum lock count exceeded"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">setState</span><span class="token punctuation">(</span>nextc<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>非公平锁的 <code v-pre>lock</code> 方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">NonfairSync</span> <span class="token keyword">extends</span> <span class="token class-name">Sync</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 2. 和公平锁相比，这里会直接先进行一次CAS，成功就返回了</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            <span class="token function">acquire</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// AbstractQueuedSynchronizer.acquire(int arg)</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">acquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">tryAcquire</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
            <span class="token function">acquireQueued</span><span class="token punctuation">(</span><span class="token function">addWaiter</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token punctuation">.</span>EXCLUSIVE<span class="token punctuation">)</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token function">selfInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">tryAcquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> acquires<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">nonfairTryAcquire</span><span class="token punctuation">(</span>acquires<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * Performs non-fair tryLock.  tryAcquire is implemented in
 * subclasses, but both need nonfair try for trylock method.
 */</span>
<span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">nonfairTryAcquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> acquires<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">Thread</span> current <span class="token operator">=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里没有对阻塞队列进行判断</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> acquires<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span>current<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>current <span class="token operator">==</span> <span class="token function">getExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> nextc <span class="token operator">=</span> c <span class="token operator">+</span> acquires<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>nextc <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// overflow</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"Maximum lock count exceeded"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">setState</span><span class="token punctuation">(</span>nextc<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：公平锁和非公平锁只有两处不同：</p>
<ol>
<li>非公平锁在调用 lock 后，首先就会调用 CAS 进行一次抢锁，如果这个时候恰巧锁没有被占用，那么直接就获取到锁返回了。</li>
<li>非公平锁在 CAS 失败后，和公平锁一样都会进入到 <code v-pre>tryAcquire</code> 方法，在 <code v-pre>tryAcquire</code> 方法中，如果发现锁这个时候被释放了（state == 0），非公平锁会直接 CAS 抢锁，但是公平锁会判断等待队列是否有线程处于等待状态，如果有则不去抢锁，乖乖排到后面。</li>
</ol>
<p>公平锁和非公平锁就这两点区别，如果这两次 CAS 都不成功，那么后面非公平锁和公平锁是一样的，都要进入到阻塞队列等待唤醒。</p>
<p>相对来说，非公平锁会有更好的性能，因为它的吞吐量比较大。当然，非公平锁让获取锁的时间变得更加不确定，可能会导致在阻塞队列中的线程长期处于饥饿状态。</p>
<p><strong>2)Share</strong>（共享）</p>
<p>多个线程可同时执行，如 <code v-pre>Semaphore/CountDownLatch</code>。<code v-pre>Semaphore</code>、<code v-pre>CountDownLatch</code>、 <code v-pre>CyclicBarrier</code>、<code v-pre>ReadWriteLock</code> 我们都会在后面讲到。</p>
<p><code v-pre>ReentrantReadWriteLock</code> 可以看成是组合式，因为 <code v-pre>ReentrantReadWriteLock</code> 也就是读写锁允许多个线程同时对某一资源进行读。</p>
<p>不同的自定义同步器争用共享资源的方式也不同。自定义同步器在实现时只需要实现共享资源 state 的获取与释放方式即可，至于具体线程等待队列的维护（如获取资源失败入队/唤醒出队等），AQS 已经在上层已经帮我们实现好了。</p>
<h3 id="aqs-底层使用了模板方法模式" tabindex="-1"><a class="header-anchor" href="#aqs-底层使用了模板方法模式" aria-hidden="true">#</a> AQS 底层使用了模板方法模式</h3>
<p>同步器的设计是基于模板方法模式的，如果需要自定义同步器一般的方式是这样（模板方法模式很经典的一个应用）：</p>
<ol>
<li>使用者继承 <code v-pre>AbstractQueuedSynchronizer</code> 并重写指定的方法。（这些重写方法很简单，无非是对于共享资源 state 的获取和释放）</li>
<li>将 AQS 组合在自定义同步组件的实现中，并调用其模板方法，而这些模板方法会调用使用者重写的方法。</li>
</ol>
<p>这和我们以往通过实现接口的方式有很大区别，这是模板方法模式很经典的一个运用。</p>
<p><strong>AQS 使用了模板方法模式，自定义同步器时需要重写下面几个 AQS 提供的钩子方法：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">tryAcquire</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token comment">//独占方式。尝试获取资源，成功则返回true，失败则返回false。</span>
<span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">tryRelease</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token comment">//独占方式。尝试释放资源，成功则返回true，失败则返回false。</span>
<span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">tryAcquireShared</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token comment">//共享方式。尝试获取资源。负数表示失败；0表示成功，但没有剩余可用资源；正数表示成功，且有剩余资源。</span>
<span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">tryReleaseShared</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token comment">//共享方式。尝试释放资源，成功则返回true，失败则返回false。</span>
<span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">isHeldExclusively</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment">//该线程是否正在独占资源。只有用到condition才需要去实现它。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>什么是钩子方法呢？</strong> 钩子方法是一种被声明在抽象类中的方法，一般使用 <code v-pre>protected</code> 关键字修饰，它可以是空方法（由子类实现），也可以是默认实现的方法。模板设计模式通过钩子方法控制固定步骤的实现。</p>
<p>篇幅问题，这里就不详细介绍模板方法模式了，不太了解的小伙伴可以看看这篇文章：<a href="https://mp.weixin.qq.com/s/zpScSCktFpnSWHWIQem2jg" target="_blank" rel="noopener noreferrer">用Java8 改造后的模板方法模式真的是 yyds!<ExternalLinkIcon/></a>。</p>
<p>除了上面提到的钩子方法之外，AQS 类中的其他方法都是 <code v-pre>final</code> ，所以无法被其他类重写。</p>
<p>以 <code v-pre>ReentrantLock</code> 为例，state 初始化为 0，表示未锁定状态。A 线程 <code v-pre>lock()</code> 时，会调用 <code v-pre>tryAcquire()</code> 独占该锁并将 <code v-pre>state+1</code> 。此后，其他线程再 <code v-pre>tryAcquire()</code> 时就会失败，直到 A 线程 <code v-pre>unlock()</code> 到 <code v-pre>state=</code>0（即释放锁）为止，其它线程才有机会获取该锁。当然，释放锁之前，A 线程自己是可以重复获取此锁的（state 会累加），这就是可重入的概念。但要注意，获取多少次就要释放多少次，这样才能保证 state 是能回到零态的。</p>
<p>再以 <code v-pre>CountDownLatch</code> 以例，任务分为 N 个子线程去执行，state 也初始化为 N（注意 N 要与线程个数一致）。这 N 个子线程是并行执行的，每个子线程执行完后<code v-pre> countDown()</code> 一次，state 会 CAS(Compare and Swap) 减 1。等到所有子线程都执行完后(即 <code v-pre>state=0</code> )，会 <code v-pre>unpark()</code> 主调用线程，然后主调用线程就会从 <code v-pre>await()</code> 函数返回，继续后余动作。</p>
<p>一般来说，自定义同步器要么是独占方法，要么是共享方式，他们也只需实现<code v-pre>tryAcquire-tryRelease</code>、<code v-pre>tryAcquireShared-tryReleaseShared</code>中的一种即可。但 AQS 也支持自定义同步器同时实现独占和共享两种方式，如<code v-pre>ReentrantReadWriteLock</code>。</p>
<p>推荐两篇 AQS 原理和相关源码分析的文章：</p>
<ul>
<li><a href="https://www.cnblogs.com/waterystone/p/4920797.html" target="_blank" rel="noopener noreferrer">Java并发之AQS详解<ExternalLinkIcon/></a></li>
<li><a href="https://www.cnblogs.com/chengxiao/p/7141160.html" target="_blank" rel="noopener noreferrer">Java并发包基石-AQS详解<ExternalLinkIcon/></a></li>
</ul>
<h2 id="semaphore-信号量" tabindex="-1"><a class="header-anchor" href="#semaphore-信号量" aria-hidden="true">#</a> Semaphore(信号量)</h2>
<p><code v-pre>synchronized</code> 和 <code v-pre>ReentrantLock</code> 都是一次只允许一个线程访问某个资源，<code v-pre>Semaphore</code>(信号量)可以指定多个线程同时访问某个资源。</p>
<p>示例代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 *
 * <span class="token keyword">@author</span> Snailclimb
 * <span class="token keyword">@date</span> 2018年9月30日
 * @Description: 需要一次性拿一个许可的情况
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SemaphoreExample1</span> <span class="token punctuation">{</span>
  <span class="token comment">// 请求的数量</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> threadCount <span class="token operator">=</span> <span class="token number">550</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建一个具有固定线程数量的线程池对象（如果这里线程池的线程数量给太少的话你会发现执行的很慢）</span>
    <span class="token class-name">ExecutorService</span> threadPool <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 一次只能允许执行的线程数量。</span>
    <span class="token keyword">final</span> <span class="token class-name">Semaphore</span> semaphore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Semaphore</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> threadCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">final</span> <span class="token keyword">int</span> threadnum <span class="token operator">=</span> i<span class="token punctuation">;</span>
      threadPool<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span><span class="token comment">// Lambda 表达式的运用</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          semaphore<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 获取一个许可，所以可运行线程数量为20/1=20</span>
          <span class="token function">test</span><span class="token punctuation">(</span>threadnum<span class="token punctuation">)</span><span class="token punctuation">;</span>
          semaphore<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 释放一个许可</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// TODO Auto-generated catch block</span>
          e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    threadPool<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"finish"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> threadnum<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 模拟请求的耗时操作</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"threadnum:"</span> <span class="token operator">+</span> threadnum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 模拟请求的耗时操作</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行 <code v-pre>acquire()</code> 方法阻塞，直到有一个许可证可以获得然后拿走一个许可证；每个 <code v-pre>release</code> 方法增加一个许可证，这可能会释放一个阻塞的 <code v-pre>acquire()</code> 方法。然而，其实并没有实际的许可证这个对象，<code v-pre>Semaphore</code> 只是维持了一个可获得许可证的数量。 <code v-pre>Semaphore</code> 经常用于限制获取某种资源的线程数量。</p>
<p>当然一次也可以一次拿取和释放多个许可，不过一般没有必要这样做：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>semaphore<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 获取5个许可，所以可运行线程数量为20/5=4</span>
<span class="token function">test</span><span class="token punctuation">(</span>threadnum<span class="token punctuation">)</span><span class="token punctuation">;</span>
semaphore<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 释放5个许可</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了 <code v-pre>acquire()</code> 方法之外，另一个比较常用的与之对应的方法是 <code v-pre>tryAcquire()</code> 方法，该方法如果获取不到许可就立即返回 false。</p>
<p><code v-pre>Semaphore</code> 有两种模式，公平模式和非公平模式。</p>
<ul>
<li><strong>公平模式：</strong> 调用 <code v-pre>acquire()</code> 方法的顺序就是获取许可证的顺序，遵循 FIFO；</li>
<li><strong>非公平模式：</strong> 抢占式的。</li>
</ul>
<p><code v-pre>Semaphore</code> 对应的两个构造方法如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>   <span class="token keyword">public</span> <span class="token class-name">Semaphore</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token keyword">permits</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sync <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NonfairSync</span><span class="token punctuation">(</span><span class="token keyword">permits</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Semaphore</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token keyword">permits</span><span class="token punctuation">,</span> <span class="token keyword">boolean</span> fair<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sync <span class="token operator">=</span> fair <span class="token operator">?</span> <span class="token keyword">new</span> <span class="token class-name">FairSync</span><span class="token punctuation">(</span><span class="token keyword">permits</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">NonfairSync</span><span class="token punctuation">(</span><span class="token keyword">permits</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这两个构造方法，都必须提供许可的数量，第二个构造方法可以指定是公平模式还是非公平模式，默认非公平模式。</strong></p>
<p><a href="https://github.com/Snailclimb/JavaGuide/issues/645" target="_blank" rel="noopener noreferrer">issue645 补充内容<ExternalLinkIcon/></a> ：<code v-pre>Semaphore</code> 与 <code v-pre>CountDownLatch</code> 一样，也是共享锁的一种实现。它默认构造 AQS 的 state 为 <code v-pre>permits</code>。当执行任务的线程数量超出 <code v-pre>permits</code>，那么多余的线程将会被放入阻塞队列 Park,并自旋判断 state 是否大于 0。只有当 state 大于 0 的时候，阻塞的线程才能继续执行,此时先前执行任务的线程继续执行 <code v-pre>release()</code> 方法，<code v-pre>release()</code> 方法使得 state 的变量会加 1，那么自旋的线程便会判断成功。
如此，每次只有最多不超过 <code v-pre>permits</code> 数量的线程能自旋成功，便限制了执行任务线程的数量。</p>
<h2 id="countdownlatch-倒计时器" tabindex="-1"><a class="header-anchor" href="#countdownlatch-倒计时器" aria-hidden="true">#</a> CountDownLatch （倒计时器）</h2>
<p><code v-pre>CountDownLatch</code> 允许 <code v-pre>count</code> 个线程阻塞在一个地方，直至所有线程的任务都执行完毕。</p>
<p><code v-pre>CountDownLatch</code> 是共享锁的一种实现,它默认构造 AQS 的 <code v-pre>state</code> 值为 <code v-pre>count</code>。当线程使用 <code v-pre>countDown()</code> 方法时,其实使用了<code v-pre>tryReleaseShared</code>方法以 CAS 的操作来减少 <code v-pre>state</code>,直至 <code v-pre>state</code> 为 0 。当调用 <code v-pre>await()</code> 方法的时候，如果 <code v-pre>state</code> 不为 0，那就证明任务还没有执行完毕，<code v-pre>await()</code> 方法就会一直阻塞，也就是说 <code v-pre>await()</code> 方法之后的语句不会被执行。然后，<code v-pre>CountDownLatch</code> 会自旋 CAS 判断 <code v-pre>state == 0</code>，如果 <code v-pre>state == 0</code> 的话，就会释放所有等待的线程，<code v-pre>await()</code> 方法之后的语句得到执行。</p>
<h3 id="countdownlatch-的两种典型用法" tabindex="-1"><a class="header-anchor" href="#countdownlatch-的两种典型用法" aria-hidden="true">#</a> CountDownLatch 的两种典型用法</h3>
<p><strong>1、某一线程在开始运行前等待 n 个线程执行完毕。</strong></p>
<p>将 <code v-pre>CountDownLatch</code> 的计数器初始化为 n （<code v-pre>new CountDownLatch(n)</code>），每当一个任务线程执行完毕，就将计数器减 1 （<code v-pre>countdownlatch.countDown()</code>），当计数器的值变为 0 时，在 <code v-pre>CountDownLatch 上 await()</code> 的线程就会被唤醒。一个典型应用场景就是启动一个服务时，主线程需要等待多个组件加载完毕，之后再继续执行。</p>
<p><strong>2、实现多个线程开始执行任务的最大并行性。</strong></p>
<p>注意是并行性，不是并发，强调的是多个线程在某一时刻同时开始执行。类似于赛跑，将多个线程放到起点，等待发令枪响，然后同时开跑。做法是初始化一个共享的 <code v-pre>CountDownLatch</code> 对象，将其计数器初始化为 1 （<code v-pre>new CountDownLatch(1)</code>），多个线程在开始执行任务前首先 <code v-pre>coundownlatch.await()</code>，当主线程调用 <code v-pre>countDown()</code> 时，计数器变为 0，多个线程同时被唤醒。</p>
<h3 id="countdownlatch-的使用示例" tabindex="-1"><a class="header-anchor" href="#countdownlatch-的使用示例" aria-hidden="true">#</a> CountDownLatch 的使用示例</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 *
 * <span class="token keyword">@author</span> SnailClimb
 * <span class="token keyword">@date</span> 2018年10月1日
 * @Description: CountDownLatch 使用方法示例
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CountDownLatchExample1</span> <span class="token punctuation">{</span>
  <span class="token comment">// 请求的数量</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> threadCount <span class="token operator">=</span> <span class="token number">550</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建一个具有固定线程数量的线程池对象（如果这里线程池的线程数量给太少的话你会发现执行的很慢）</span>
    <span class="token class-name">ExecutorService</span> threadPool <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token class-name">CountDownLatch</span> countDownLatch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CountDownLatch</span><span class="token punctuation">(</span>threadCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> threadCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">final</span> <span class="token keyword">int</span> threadnum <span class="token operator">=</span> i<span class="token punctuation">;</span>
      threadPool<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span><span class="token comment">// Lambda 表达式的运用</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token function">test</span><span class="token punctuation">(</span>threadnum<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// TODO Auto-generated catch block</span>
          e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
          countDownLatch<span class="token punctuation">.</span><span class="token function">countDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 表示一个请求已经被完成</span>
        <span class="token punctuation">}</span>

      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    countDownLatch<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    threadPool<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"finish"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> threadnum<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 模拟请求的耗时操作</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"threadnum:"</span> <span class="token operator">+</span> threadnum<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 模拟请求的耗时操作</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码中，我们定义了请求的数量为 550，当这 550 个请求被处理完成之后，才会执行<code v-pre>System.out.println(&quot;finish&quot;);</code>。</p>
<p>与 <code v-pre>CountDownLatch</code> 的第一次交互是主线程等待其他线程。主线程必须在启动其他线程后立即调用 <code v-pre>CountDownLatch.await()</code> 方法。这样主线程的操作就会在这个方法上阻塞，直到其他线程完成各自的任务。</p>
<p>其他 N 个线程必须引用闭锁对象，因为他们需要通知 <code v-pre>CountDownLatch</code> 对象，他们已经完成了各自的任务。这种通知机制是通过 <code v-pre>CountDownLatch.countDown()</code>方法来完成的；每调用一次这个方法，在构造函数中初始化的 count 值就减 1。所以当 N 个线程都调 用了这个方法，count 的值等于 0，然后主线程就能通过 <code v-pre>await()</code>方法，恢复执行自己的任务。</p>
<p>再插一嘴：<code v-pre>CountDownLatch</code> 的 <code v-pre>await()</code> 方法使用不当很容易产生死锁，比如我们上面代码中的 for 循环改为：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> threadCount<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就导致 <code v-pre>count</code> 的值没办法等于 0，然后就会导致一直等待。</p>
<h3 id="countdownlatch-的不足" tabindex="-1"><a class="header-anchor" href="#countdownlatch-的不足" aria-hidden="true">#</a> CountDownLatch 的不足</h3>
<p><code v-pre>CountDownLatch</code> 是一次性的，计数器的值只能在构造方法中初始化一次，之后没有任何机制再次对其设置值，当 <code v-pre>CountDownLatch</code> 使用完毕后，它不能再次被使用。</p>
<h3 id="countdownlatch-相常见面试题" tabindex="-1"><a class="header-anchor" href="#countdownlatch-相常见面试题" aria-hidden="true">#</a> CountDownLatch 相常见面试题</h3>
<ul>
<li><code v-pre>CountDownLatch</code> 怎么用？应用场景是什么？</li>
<li><code v-pre>CountDownLatch</code> 和 <code v-pre>CyclicBarrier</code> 的不同之处？</li>
<li><code v-pre>CountDownLatch</code> 类中主要的方法？</li>
</ul>
<h2 id="cyclicbarrier-循环栅栏" tabindex="-1"><a class="header-anchor" href="#cyclicbarrier-循环栅栏" aria-hidden="true">#</a> CyclicBarrier(循环栅栏)</h2>
<p><code v-pre>CyclicBarrier</code> 和 <code v-pre>CountDownLatch</code> 非常类似，它也可以实现线程间的技术等待，但是它的功能比 <code v-pre>CountDownLatch</code> 更加复杂和强大。主要应用场景和 <code v-pre>CountDownLatch</code> 类似。</p>
<blockquote>
<p><code v-pre>CountDownLatch</code> 的实现是基于 AQS 的，而 <code v-pre>CycliBarrier</code> 是基于 <code v-pre>ReentrantLock</code>(<code v-pre>ReentrantLock</code> 也属于 AQS 同步器)和 <code v-pre>Condition</code> 的。</p>
</blockquote>
<p><code v-pre>CyclicBarrier</code> 的字面意思是可循环使用（Cyclic）的屏障（Barrier）。它要做的事情是：让一组线程到达一个屏障（也可以叫同步点）时被阻塞，直到最后一个线程到达屏障时，屏障才会开门，所有被屏障拦截的线程才会继续干活。</p>
<p><code v-pre>CyclicBarrier</code> 默认的构造方法是 <code v-pre>CyclicBarrier(int parties)</code>，其参数表示屏障拦截的线程数量，每个线程调用 <code v-pre>await()</code> 方法告诉 <code v-pre>CyclicBarrier</code> 我已经到达了屏障，然后当前线程被阻塞。</p>
<p>再来看一下它的构造函数：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">CyclicBarrier</span><span class="token punctuation">(</span><span class="token keyword">int</span> parties<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">(</span>parties<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">CyclicBarrier</span><span class="token punctuation">(</span><span class="token keyword">int</span> parties<span class="token punctuation">,</span> <span class="token class-name">Runnable</span> barrierAction<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>parties <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>parties <span class="token operator">=</span> parties<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> parties<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>barrierCommand <span class="token operator">=</span> barrierAction<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，parties 就代表了有拦截的线程的数量，当拦截的线程数量达到这个值的时候就打开栅栏，让所有线程通过。</p>
<h3 id="cyclicbarrier-的应用场景" tabindex="-1"><a class="header-anchor" href="#cyclicbarrier-的应用场景" aria-hidden="true">#</a> CyclicBarrier 的应用场景</h3>
<p><code v-pre>CyclicBarrier</code> 可以用于多线程计算数据，最后合并计算结果的应用场景。比如我们用一个 Excel 保存了用户所有银行流水，每个 Sheet 保存一个帐户近一年的每笔银行流水，现在需要统计用户的日均银行流水，先用多线程处理每个 sheet 里的银行流水，都执行完之后，得到每个 sheet 的日均银行流水，最后，再用 barrierAction 用这些线程的计算结果，计算出整个 Excel 的日均银行流水。</p>
<h3 id="cyclicbarrier-的使用示例" tabindex="-1"><a class="header-anchor" href="#cyclicbarrier-的使用示例" aria-hidden="true">#</a> CyclicBarrier 的使用示例</h3>
<p>示例 1：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 *
 * <span class="token keyword">@author</span> Snailclimb
 * <span class="token keyword">@date</span> 2018年10月1日
 * @Description: 测试 CyclicBarrier 类中带参数的 await() 方法
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CyclicBarrierExample2</span> <span class="token punctuation">{</span>
  <span class="token comment">// 请求的数量</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> threadCount <span class="token operator">=</span> <span class="token number">550</span><span class="token punctuation">;</span>
  <span class="token comment">// 需要同步的线程数量</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">CyclicBarrier</span> cyclicBarrier <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CyclicBarrier</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建线程池</span>
    <span class="token class-name">ExecutorService</span> threadPool <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> threadCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">final</span> <span class="token keyword">int</span> threadNum <span class="token operator">=</span> i<span class="token punctuation">;</span>
      <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      threadPool<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token function">test</span><span class="token punctuation">(</span>threadNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// TODO Auto-generated catch block</span>
          e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">BrokenBarrierException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// TODO Auto-generated catch block</span>
          e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    threadPool<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> threadnum<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">BrokenBarrierException</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"threadnum:"</span> <span class="token operator">+</span> threadnum <span class="token operator">+</span> <span class="token string">"is ready"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
      <span class="token doc-comment comment">/**等待60秒，保证子线程完全执行结束*/</span>
      cyclicBarrier<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"-----CyclicBarrierException------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"threadnum:"</span> <span class="token operator">+</span> threadnum <span class="token operator">+</span> <span class="token string">"is finish"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果，如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>threadnum:0is ready
threadnum:1is ready
threadnum:2is ready
threadnum:3is ready
threadnum:4is ready
threadnum:4is finish
threadnum:0is finish
threadnum:1is finish
threadnum:2is finish
threadnum:3is finish
threadnum:5is ready
threadnum:6is ready
threadnum:7is ready
threadnum:8is ready
threadnum:9is ready
threadnum:9is finish
threadnum:5is finish
threadnum:8is finish
threadnum:7is finish
threadnum:6is finish
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到当线程数量也就是请求数量达到我们定义的 5 个的时候， <code v-pre>await()</code> 方法之后的方法才被执行。</p>
<p>另外，<code v-pre>CyclicBarrier</code> 还提供一个更高级的构造函数 <code v-pre>CyclicBarrier(int parties, Runnable barrierAction)</code>，用于在线程到达屏障时，优先执行 <code v-pre>barrierAction</code>，方便处理更复杂的业务场景。示例代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 *
 * <span class="token keyword">@author</span> SnailClimb
 * <span class="token keyword">@date</span> 2018年10月1日
 * @Description: 新建 CyclicBarrier 的时候指定一个 Runnable
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CyclicBarrierExample3</span> <span class="token punctuation">{</span>
  <span class="token comment">// 请求的数量</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> threadCount <span class="token operator">=</span> <span class="token number">550</span><span class="token punctuation">;</span>
  <span class="token comment">// 需要同步的线程数量</span>
  <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">CyclicBarrier</span> cyclicBarrier <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CyclicBarrier</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"------当线程数达到之后，优先执行------"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建线程池</span>
    <span class="token class-name">ExecutorService</span> threadPool <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newFixedThreadPool</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> threadCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">final</span> <span class="token keyword">int</span> threadNum <span class="token operator">=</span> i<span class="token punctuation">;</span>
      <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      threadPool<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token function">test</span><span class="token punctuation">(</span>threadNum<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// TODO Auto-generated catch block</span>
          e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">BrokenBarrierException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">// TODO Auto-generated catch block</span>
          e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    threadPool<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> threadnum<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">BrokenBarrierException</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"threadnum:"</span> <span class="token operator">+</span> threadnum <span class="token operator">+</span> <span class="token string">"is ready"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    cyclicBarrier<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"threadnum:"</span> <span class="token operator">+</span> threadnum <span class="token operator">+</span> <span class="token string">"is finish"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果，如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>threadnum:0is ready
threadnum:1is ready
threadnum:2is ready
threadnum:3is ready
threadnum:4is ready
------当线程数达到之后，优先执行------
threadnum:4is finish
threadnum:0is finish
threadnum:2is finish
threadnum:1is finish
threadnum:3is finish
threadnum:5is ready
threadnum:6is ready
threadnum:7is ready
threadnum:8is ready
threadnum:9is ready
------当线程数达到之后，优先执行------
threadnum:9is finish
threadnum:5is finish
threadnum:6is finish
threadnum:8is finish
threadnum:7is finish
......
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cyclicbarrier-源码分析" tabindex="-1"><a class="header-anchor" href="#cyclicbarrier-源码分析" aria-hidden="true">#</a> CyclicBarrier 源码分析</h3>
<p>当调用 <code v-pre>CyclicBarrier</code> 对象调用 <code v-pre>await()</code> 方法时，实际上调用的是 <code v-pre>dowait(false, 0L)</code>方法。 <code v-pre>await()</code> 方法就像树立起一个栅栏的行为一样，将线程挡住了，当拦住的线程数量达到 <code v-pre>parties</code> 的值时，栅栏才会打开，线程才得以通过执行。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">BrokenBarrierException</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    	<span class="token keyword">return</span> <span class="token function">dowait</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">0L</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">TimeoutException</span> toe<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   	 <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>toe<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// cannot happen</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>dowait(false, 0L)</code>：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token comment">// 当线程数量或者请求数量达到 count 时 await 之后的方法才会被执行。上面的示例中 count 的值就为 5。</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * Main barrier code, covering the various policies.
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">dowait</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> timed<span class="token punctuation">,</span> <span class="token keyword">long</span> nanos<span class="token punctuation">)</span>
        <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">,</span> <span class="token class-name">BrokenBarrierException</span><span class="token punctuation">,</span>
               <span class="token class-name">TimeoutException</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> lock <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lock<span class="token punctuation">;</span>
        <span class="token comment">// 锁住</span>
        lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">final</span> <span class="token class-name">Generation</span> g <span class="token operator">=</span> generation<span class="token punctuation">;</span>

            <span class="token keyword">if</span> <span class="token punctuation">(</span>g<span class="token punctuation">.</span>broken<span class="token punctuation">)</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">BrokenBarrierException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 如果线程中断了，抛出异常</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">interrupted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">breakBarrier</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// cout减1</span>
            <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token operator">--</span>count<span class="token punctuation">;</span>
            <span class="token comment">// 当 count 数量减为 0 之后说明最后一个线程已经到达栅栏了，也就是达到了可以执行await 方法之后的条件</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// tripped</span>
                <span class="token keyword">boolean</span> ranAction <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token keyword">final</span> <span class="token class-name">Runnable</span> command <span class="token operator">=</span> barrierCommand<span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>command <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                        command<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    ranAction <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                    <span class="token comment">// 将 count 重置为 parties 属性的初始化值</span>
                    <span class="token comment">// 唤醒之前等待的线程</span>
                    <span class="token comment">// 下一波执行开始</span>
                    <span class="token function">nextGeneration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>ranAction<span class="token punctuation">)</span>
                        <span class="token function">breakBarrier</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

            <span class="token comment">// loop until tripped, broken, interrupted, or timed out</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timed<span class="token punctuation">)</span>
                        trip<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nanos <span class="token operator">></span> <span class="token number">0L</span><span class="token punctuation">)</span>
                        nanos <span class="token operator">=</span> trip<span class="token punctuation">.</span><span class="token function">awaitNanos</span><span class="token punctuation">(</span>nanos<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> ie<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>g <span class="token operator">==</span> generation <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span> g<span class="token punctuation">.</span>broken<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token function">breakBarrier</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">throw</span> ie<span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                        <span class="token comment">// We're about to finish waiting even if we had not</span>
                        <span class="token comment">// been interrupted, so this interrupt is deemed to</span>
                        <span class="token comment">// "belong" to subsequent execution.</span>
                        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">interrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>g<span class="token punctuation">.</span>broken<span class="token punctuation">)</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">BrokenBarrierException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>g <span class="token operator">!=</span> generation<span class="token punctuation">)</span>
                    <span class="token keyword">return</span> index<span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>timed <span class="token operator">&amp;&amp;</span> nanos <span class="token operator">&lt;=</span> <span class="token number">0L</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">breakBarrier</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TimeoutException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：<code v-pre>CyclicBarrier</code> 内部通过一个 count 变量作为计数器，count 的初始值为 parties 属性的初始化值，每当一个线程到了栅栏这里了，那么就将计数器减一。如果 count 值为 0 了，表示这是这一代最后一个线程到达栅栏，就尝试执行我们构造方法中输入的任务。</p>
<h3 id="cyclicbarrier-和-countdownlatch-的区别" tabindex="-1"><a class="header-anchor" href="#cyclicbarrier-和-countdownlatch-的区别" aria-hidden="true">#</a> CyclicBarrier 和 CountDownLatch 的区别</h3>
<p>下面这个是国外一个大佬的回答：</p>
<p><code v-pre>CountDownLatch</code> 是计数器，只能使用一次，而 <code v-pre>CyclicBarrier</code> 的计数器提供 <code v-pre>reset</code> 功能，可以多次使用。但是我不那么认为它们之间的区别仅仅就是这么简单的一点。我们来从 jdk 作者设计的目的来看，javadoc 是这么描述它们的：</p>
<blockquote>
<p>CountDownLatch: A synchronization aid that allows one or more threads to wait until a set of operations being performed in other threads completes.(CountDownLatch: 一个或者多个线程，等待其他多个线程完成某件事情之后才能执行；)
CyclicBarrier : A synchronization aid that allows a set of threads to all wait for each other to reach a common barrier point.(CyclicBarrier : 多个线程互相等待，直到到达同一个同步点，再继续一起执行。)</p>
</blockquote>
<p>对于 <code v-pre>CountDownLatch</code> 来说，重点是“一个线程（多个线程）等待”，而其他的 N 个线程在完成“某件事情”之后，可以终止，也可以等待。而对于 <code v-pre>CyclicBarrier</code>，重点是多个线程，在任意一个线程没有完成，所有的线程都必须等待。</p>
<p><code v-pre>CountDownLatch</code> 是计数器，线程完成一个记录一个，只不过计数不是递增而是递减，而 <code v-pre>CyclicBarrier</code> 更像是一个阀门，需要所有线程都到达，阀门才能打开，然后继续执行。</p>
<h3 id="reentrantlock-和-reentrantreadwritelock" tabindex="-1"><a class="header-anchor" href="#reentrantlock-和-reentrantreadwritelock" aria-hidden="true">#</a> ReentrantLock 和 ReentrantReadWriteLock</h3>
<p><code v-pre>ReentrantLock</code> 和 <code v-pre>synchronized</code> 的区别在上面已经讲过了这里就不多做讲解。另外，需要注意的是：读写锁 <code v-pre>ReentrantReadWriteLock</code> 可以保证多个线程可以同时读，所以在读操作远大于写操作的时候，读写锁就非常有用了。</p>
</div></template>
