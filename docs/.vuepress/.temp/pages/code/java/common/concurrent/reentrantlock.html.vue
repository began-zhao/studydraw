<template><div><blockquote>
<p>本文转载自：<a href="https://tech.meituan.com/2019/12/05/aqs-theory-and-apply.html" target="_blank" rel="noopener noreferrer">https://tech.meituan.com/2019/12/05/aqs-theory-and-apply.html<ExternalLinkIcon/></a></p>
<p>作者：美团技术团队</p>
</blockquote>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>Java 中的大部分同步类（Semaphore、ReentrantLock 等）都是基于 AbstractQueuedSynchronizer（简称为 AQS）实现的。AQS 是一种提供了原子式管理同步状态、阻塞和唤醒线程功能以及队列模型的简单框架。本文会从应用层逐渐深入到原理层，并通过 ReentrantLock 的基本特性和 ReentrantLock 与 AQS 的关联，来深入解读 AQS 相关独占锁的知识点，同时采取问答的模式来帮助大家理解 AQS。由于篇幅原因，本篇文章主要阐述 AQS 中独占锁的逻辑和 Sync Queue，不讲述包含共享锁和 Condition Queue 的部分（本篇文章核心为 AQS 原理剖析，只是简单介绍了 ReentrantLock，感兴趣同学可以阅读一下 ReentrantLock 的源码）。</p>
<h2 id="_1-reentrantlock" tabindex="-1"><a class="header-anchor" href="#_1-reentrantlock" aria-hidden="true">#</a> 1 ReentrantLock</h2>
<h3 id="_1-1-reentrantlock-特性概览" tabindex="-1"><a class="header-anchor" href="#_1-1-reentrantlock-特性概览" aria-hidden="true">#</a> 1.1 ReentrantLock 特性概览</h3>
<p>ReentrantLock 意思为可重入锁，指的是一个线程能够对一个临界资源重复加锁。为了帮助大家更好地理解 ReentrantLock 的特性，我们先将 ReentrantLock 跟常用的 Synchronized 进行比较，其特性如下（蓝色部分为本篇文章主要剖析的点）：</p>
<p><img src="https://p0.meituan.net/travelcube/412d294ff5535bbcddc0d979b2a339e6102264.png" alt="img" loading="lazy"></p>
<p>下面通过伪代码，进行更加直观的比较：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// **************************Synchronized的使用方式**************************</span>
<span class="token comment">// 1.用于代码块</span>
<span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 2.用于对象</span>
<span class="token keyword">synchronized</span> <span class="token punctuation">(</span>object<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 3.用于方法</span>
<span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> test <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 4.可重入</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// **************************ReentrantLock的使用方式**************************</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> test <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1.初始化选择公平锁、非公平锁</span>
	<span class="token class-name">ReentrantLock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 2.可用于代码块</span>
	lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token keyword">try</span> <span class="token punctuation">{</span>
			<span class="token comment">// 3.支持多种加锁方式，比较灵活; 具有可重入特性</span>
			<span class="token keyword">if</span><span class="token punctuation">(</span>lock<span class="token punctuation">.</span><span class="token function">tryLock</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
			<span class="token comment">// 4.手动释放锁</span>
			lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
		lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-reentrantlock-与-aqs-的关联" tabindex="-1"><a class="header-anchor" href="#_1-2-reentrantlock-与-aqs-的关联" aria-hidden="true">#</a> 1.2 ReentrantLock 与 AQS 的关联</h3>
<p>通过上文我们已经了解，ReentrantLock 支持公平锁和非公平锁（关于公平锁和非公平锁的原理分析，可参考《<a href="https://mp.weixin.qq.com/s?__biz=MjM5NjQ5MTI5OA==&amp;mid=2651749434&amp;idx=3&amp;sn=5ffa63ad47fe166f2f1a9f604ed10091&amp;chksm=bd12a5778a652c61509d9e718ab086ff27ad8768586ea9b38c3dcf9e017a8e49bcae3df9bcc8&amp;scene=38#wechat_redirect" target="_blank" rel="noopener noreferrer">不可不说的 Java“锁”事<ExternalLinkIcon/></a>》），并且 ReentrantLock 的底层就是由 AQS 来实现的。那么 ReentrantLock 是如何通过公平锁和非公平锁与 AQS 关联起来呢？ 我们着重从这两者的加锁过程来理解一下它们与 AQS 之间的关系（加锁过程中与 AQS 的关联比较明显，解锁流程后续会介绍）。</p>
<p>非公平锁源码中的加锁流程如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.ReentrantLock#NonfairSync</span>

<span class="token comment">// 非公平锁</span>
<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">NonfairSync</span> <span class="token keyword">extends</span> <span class="token class-name">Sync</span> <span class="token punctuation">{</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
	<span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">else</span>
			<span class="token function">acquire</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这块代码的含义为：</p>
<ul>
<li>若通过 CAS 设置变量 State（同步状态）成功，也就是获取锁成功，则将当前线程设置为独占线程。</li>
<li>若通过 CAS 设置变量 State（同步状态）失败，也就是获取锁失败，则进入 Acquire 方法进行后续处理。</li>
</ul>
<p>第一步很好理解，但第二步获取锁失败后，后续的处理策略是怎么样的呢？这块可能会有以下思考：</p>
<ul>
<li>某个线程获取锁失败的后续流程是什么呢？有以下两种可能：</li>
</ul>
<p>(1) 将当前线程获锁结果设置为失败，获取锁流程结束。这种设计会极大降低系统的并发度，并不满足我们实际的需求。所以就需要下面这种流程，也就是 AQS 框架的处理流程。</p>
<p>(2) 存在某种排队等候机制，线程继续等待，仍然保留获取锁的可能，获取锁流程仍在继续。</p>
<ul>
<li>对于问题 1 的第二种情况，既然说到了排队等候机制，那么就一定会有某种队列形成，这样的队列是什么数据结构呢？</li>
<li>处于排队等候机制中的线程，什么时候可以有机会获取锁呢？</li>
<li>如果处于排队等候机制中的线程一直无法获取锁，还是需要一直等待吗，还是有别的策略来解决这一问题？</li>
</ul>
<p>带着非公平锁的这些问题，再看下公平锁源码中获锁的方式：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// java.util.concurrent.locks.ReentrantLock#FairSync

static final class FairSync extends Sync {
  ...
	final void lock() {
		acquire(1);
	}
  ...
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到这块代码，我们可能会存在这种疑问：Lock 函数通过 Acquire 方法进行加锁，但是具体是如何加锁的呢？</p>
<p>结合公平锁和非公平锁的加锁流程，虽然流程上有一定的不同，但是都调用了 Acquire 方法，而 Acquire 方法是 FairSync 和 UnfairSync 的父类 AQS 中的核心方法。</p>
<p>对于上边提到的问题，其实在 ReentrantLock 类源码中都无法解答，而这些问题的答案，都是位于 Acquire 方法所在的类 AbstractQueuedSynchronizer 中，也就是本文的核心——AQS。下面我们会对 AQS 以及 ReentrantLock 和 AQS 的关联做详细介绍（相关问题答案会在 2.3.5 小节中解答）。</p>
<h2 id="_2-aqs" tabindex="-1"><a class="header-anchor" href="#_2-aqs" aria-hidden="true">#</a> 2 AQS</h2>
<p>首先，我们通过下面的架构图来整体了解一下 AQS 框架：</p>
<p><img src="https://p1.meituan.net/travelcube/82077ccf14127a87b77cefd1ccf562d3253591.png" alt="" loading="lazy"></p>
<ul>
<li>上图中有颜色的为 Method，无颜色的为 Attribution。</li>
<li>总的来说，AQS 框架共分为五层，自上而下由浅入深，从 AQS 对外暴露的 API 到底层基础数据。</li>
<li>当有自定义同步器接入时，只需重写第一层所需要的部分方法即可，不需要关注底层具体的实现流程。当自定义同步器进行加锁或者解锁操作时，先经过第一层的 API 进入 AQS 内部方法，然后经过第二层进行锁的获取，接着对于获取锁失败的流程，进入第三层和第四层的等待队列处理，而这些处理方式均依赖于第五层的基础数据提供层。</li>
</ul>
<p>下面我们会从整体到细节，从流程到方法逐一剖析 AQS 框架，主要分析过程如下：</p>
<p><img src="https://p1.meituan.net/travelcube/d2f7f7fffdc30d85d17b44266c3ab05323338.png" alt="" loading="lazy"></p>
<h3 id="_2-1-原理概览" tabindex="-1"><a class="header-anchor" href="#_2-1-原理概览" aria-hidden="true">#</a> 2.1 原理概览</h3>
<p>AQS 核心思想是，如果被请求的共享资源空闲，那么就将当前请求资源的线程设置为有效的工作线程，将共享资源设置为锁定状态；如果共享资源被占用，就需要一定的阻塞等待唤醒机制来保证锁分配。这个机制主要用的是 CLH 队列的变体实现的，将暂时获取不到锁的线程加入到队列中。</p>
<p>CLH：Craig、Landin and Hagersten 队列，是单向链表，AQS 中的队列是 CLH 变体的虚拟双向队列（FIFO），AQS 是通过将每条请求共享资源的线程封装成一个节点来实现锁的分配。</p>
<p>主要原理图如下：</p>
<p><img src="https://p0.meituan.net/travelcube/7132e4cef44c26f62835b197b239147b18062.png" alt="" loading="lazy"></p>
<p>AQS 使用一个 Volatile 的 int 类型的成员变量来表示同步状态，通过内置的 FIFO 队列来完成资源获取的排队工作，通过 CAS 完成对 State 值的修改。</p>
<h4 id="_2-1-1-aqs-数据结构" tabindex="-1"><a class="header-anchor" href="#_2-1-1-aqs-数据结构" aria-hidden="true">#</a> 2.1.1 AQS 数据结构</h4>
<p>先来看下 AQS 中最基本的数据结构——Node，Node 即为上面 CLH 变体队列中的节点。</p>
<p><img src="https://p1.meituan.net/travelcube/960271cf2b5c8a185eed23e98b72c75538637.png" alt="" loading="lazy"></p>
<p>解释一下几个方法和属性值的含义：</p>
<table>
<thead>
<tr>
<th style="text-align:left">方法和属性值</th>
<th style="text-align:left">含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">waitStatus</td>
<td style="text-align:left">当前节点在队列中的状态</td>
</tr>
<tr>
<td style="text-align:left">thread</td>
<td style="text-align:left">表示处于该节点的线程</td>
</tr>
<tr>
<td style="text-align:left">prev</td>
<td style="text-align:left">前驱指针</td>
</tr>
<tr>
<td style="text-align:left">predecessor</td>
<td style="text-align:left">返回前驱节点，没有的话抛出 npe</td>
</tr>
<tr>
<td style="text-align:left">nextWaiter</td>
<td style="text-align:left">指向下一个处于 CONDITION 状态的节点（由于本篇文章不讲述 Condition Queue 队列，这个指针不多介绍）</td>
</tr>
<tr>
<td style="text-align:left">next</td>
<td style="text-align:left">后继指针</td>
</tr>
</tbody>
</table>
<p>线程两种锁的模式：</p>
<table>
<thead>
<tr>
<th style="text-align:left">模式</th>
<th style="text-align:left">含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">SHARED</td>
<td style="text-align:left">表示线程以共享的模式等待锁</td>
</tr>
<tr>
<td style="text-align:left">EXCLUSIVE</td>
<td style="text-align:left">表示线程正在以独占的方式等待锁</td>
</tr>
</tbody>
</table>
<p>waitStatus 有下面几个枚举值：</p>
<table>
<thead>
<tr>
<th style="text-align:left">枚举</th>
<th style="text-align:left">含义</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">0</td>
<td style="text-align:left">当一个 Node 被初始化的时候的默认值</td>
</tr>
<tr>
<td style="text-align:left">CANCELLED</td>
<td style="text-align:left">为 1，表示线程获取锁的请求已经取消了</td>
</tr>
<tr>
<td style="text-align:left">CONDITION</td>
<td style="text-align:left">为-2，表示节点在等待队列中，节点线程等待唤醒</td>
</tr>
<tr>
<td style="text-align:left">PROPAGATE</td>
<td style="text-align:left">为-3，当前线程处在 SHARED 情况下，该字段才会使用</td>
</tr>
<tr>
<td style="text-align:left">SIGNAL</td>
<td style="text-align:left">为-1，表示线程已经准备好了，就等资源释放了</td>
</tr>
</tbody>
</table>
<h4 id="_2-1-2-同步状态-state" tabindex="-1"><a class="header-anchor" href="#_2-1-2-同步状态-state" aria-hidden="true">#</a> 2.1.2 同步状态 State</h4>
<p>在了解数据结构后，接下来了解一下 AQS 的同步状态——State。AQS 中维护了一个名为 state 的字段，意为同步状态，是由 Volatile 修饰的，用于展示当前临界资源的获锁情况。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> state<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面提供了几个访问这个字段的方法：</p>
<table>
<thead>
<tr>
<th style="text-align:left">方法名</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">protected final int getState()</td>
<td style="text-align:left">获取 State 的值</td>
</tr>
<tr>
<td style="text-align:left">protected final void setState(int newState)</td>
<td style="text-align:left">设置 State 的值</td>
</tr>
<tr>
<td style="text-align:left">protected final boolean compareAndSetState(int expect, int update)</td>
<td style="text-align:left">使用 CAS 方式更新 State</td>
</tr>
</tbody>
</table>
<p>这几个方法都是 Final 修饰的，说明子类中无法重写它们。我们可以通过修改 State 字段表示的同步状态来实现多线程的独占模式和共享模式（加锁过程）。</p>
<p><img src="https://p0.meituan.net/travelcube/27605d483e8935da683a93be015713f331378.png" alt="" loading="lazy"></p>
<p><img src="https://p0.meituan.net/travelcube/3f1e1a44f5b7d77000ba4f9476189b2e32806.png" alt="" loading="lazy"></p>
<p>对于我们自定义的同步工具，需要自定义获取同步状态和释放状态的方式，也就是 AQS 架构图中的第一层：API 层。</p>
<h2 id="_2-2-aqs-重要方法与-reentrantlock-的关联" tabindex="-1"><a class="header-anchor" href="#_2-2-aqs-重要方法与-reentrantlock-的关联" aria-hidden="true">#</a> 2.2 AQS 重要方法与 ReentrantLock 的关联</h2>
<p>从架构图中可以得知，AQS 提供了大量用于自定义同步器实现的 Protected 方法。自定义同步器实现的相关方法也只是为了通过修改 State 字段来实现多线程的独占模式或者共享模式。自定义同步器需要实现以下方法（ReentrantLock 需要实现的方法如下，并不是全部）：</p>
<table>
<thead>
<tr>
<th style="text-align:left">方法名</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">protected boolean isHeldExclusively()</td>
<td style="text-align:left">该线程是否正在独占资源。只有用到 Condition 才需要去实现它。</td>
</tr>
<tr>
<td style="text-align:left">protected boolean tryAcquire(int arg)</td>
<td style="text-align:left">独占方式。arg 为获取锁的次数，尝试获取资源，成功则返回 True，失败则返回 False。</td>
</tr>
<tr>
<td style="text-align:left">protected boolean tryRelease(int arg)</td>
<td style="text-align:left">独占方式。arg 为释放锁的次数，尝试释放资源，成功则返回 True，失败则返回 False。</td>
</tr>
<tr>
<td style="text-align:left">protected int tryAcquireShared(int arg)</td>
<td style="text-align:left">共享方式。arg 为获取锁的次数，尝试获取资源。负数表示失败；0 表示成功，但没有剩余可用资源；正数表示成功，且有剩余资源。</td>
</tr>
<tr>
<td style="text-align:left">protected boolean tryReleaseShared(int arg)</td>
<td style="text-align:left">共享方式。arg 为释放锁的次数，尝试释放资源，如果释放后允许唤醒后续等待结点返回 True，否则返回 False。</td>
</tr>
</tbody>
</table>
<p>一般来说，自定义同步器要么是独占方式，要么是共享方式，它们也只需实现 tryAcquire-tryRelease、tryAcquireShared-tryReleaseShared 中的一种即可。AQS 也支持自定义同步器同时实现独占和共享两种方式，如 ReentrantReadWriteLock。ReentrantLock 是独占锁，所以实现了 tryAcquire-tryRelease。</p>
<p>以非公平锁为例，这里主要阐述一下非公平锁与 AQS 之间方法的关联之处，具体每一处核心方法的作用会在文章后面详细进行阐述。</p>
<p><img src="https://p1.meituan.net/travelcube/b8b53a70984668bc68653efe9531573e78636.png" alt="" loading="lazy"></p>
<p>为了帮助大家理解 ReentrantLock 和 AQS 之间方法的交互过程，以非公平锁为例，我们将加锁和解锁的交互流程单独拎出来强调一下，以便于对后续内容的理解。</p>
<p><img src="https://p1.meituan.net/travelcube/7aadb272069d871bdee8bf3a218eed8136919.png" alt="" loading="lazy"></p>
<p>加锁：</p>
<ul>
<li>通过 ReentrantLock 的加锁方法 Lock 进行加锁操作。</li>
<li>会调用到内部类 Sync 的 Lock 方法，由于 Sync#lock 是抽象方法，根据 ReentrantLock 初始化选择的公平锁和非公平锁，执行相关内部类的 Lock 方法，本质上都会执行 AQS 的 Acquire 方法。</li>
<li>AQS 的 Acquire 方法会执行 tryAcquire 方法，但是由于 tryAcquire 需要自定义同步器实现，因此执行了 ReentrantLock 中的 tryAcquire 方法，由于 ReentrantLock 是通过公平锁和非公平锁内部类实现的 tryAcquire 方法，因此会根据锁类型不同，执行不同的 tryAcquire。</li>
<li>tryAcquire 是获取锁逻辑，获取失败后，会执行框架 AQS 的后续逻辑，跟 ReentrantLock 自定义同步器无关。</li>
</ul>
<p>解锁：</p>
<ul>
<li>通过 ReentrantLock 的解锁方法 Unlock 进行解锁。</li>
<li>Unlock 会调用内部类 Sync 的 Release 方法，该方法继承于 AQS。</li>
<li>Release 中会调用 tryRelease 方法，tryRelease 需要自定义同步器实现，tryRelease 只在 ReentrantLock 中的 Sync 实现，因此可以看出，释放锁的过程，并不区分是否为公平锁。</li>
<li>释放成功后，所有处理由 AQS 框架完成，与自定义同步器无关。</li>
</ul>
<p>通过上面的描述，大概可以总结出 ReentrantLock 加锁解锁时 API 层核心方法的映射关系。</p>
<p><img src="https://p0.meituan.net/travelcube/f30c631c8ebbf820d3e8fcb6eee3c0ef18748.png" alt="" loading="lazy"></p>
<h2 id="_2-3-通过-reentrantlock-理解-aqs" tabindex="-1"><a class="header-anchor" href="#_2-3-通过-reentrantlock-理解-aqs" aria-hidden="true">#</a> 2.3 通过 ReentrantLock 理解 AQS</h2>
<p>ReentrantLock 中公平锁和非公平锁在底层是相同的，这里以非公平锁为例进行分析。</p>
<p>在非公平锁中，有一段这样的代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.ReentrantLock</span>

<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">NonfairSync</span> <span class="token keyword">extends</span> <span class="token class-name">Sync</span> <span class="token punctuation">{</span>
	<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
	<span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
			<span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">else</span>
			<span class="token function">acquire</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看一下这个 Acquire 是怎么写的：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">acquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">tryAcquire</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">acquireQueued</span><span class="token punctuation">(</span><span class="token function">addWaiter</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token punctuation">.</span>EXCLUSIVE<span class="token punctuation">)</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token function">selfInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再看一下 tryAcquire 方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">protected</span> <span class="token keyword">boolean</span> <span class="token function">tryAcquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">UnsupportedOperationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，这里只是 AQS 的简单实现，具体获取锁的实现方法是由各自的公平锁和非公平锁单独实现的（以 ReentrantLock 为例）。如果该方法返回了 True，则说明当前线程获取锁成功，就不用往后执行了；如果获取失败，就需要加入到等待队列中。下面会详细解释线程是何时以及怎样被加入进等待队列中的。</p>
<h3 id="_2-3-1-线程加入等待队列" tabindex="-1"><a class="header-anchor" href="#_2-3-1-线程加入等待队列" aria-hidden="true">#</a> 2.3.1 线程加入等待队列</h3>
<h4 id="_2-3-1-1-加入队列的时机" tabindex="-1"><a class="header-anchor" href="#_2-3-1-1-加入队列的时机" aria-hidden="true">#</a> 2.3.1.1 加入队列的时机</h4>
<p>当执行 Acquire(1)时，会通过 tryAcquire 获取锁。在这种情况下，如果获取锁失败，就会调用 addWaiter 加入到等待队列中去。</p>
<h4 id="_2-3-1-2-如何加入队列" tabindex="-1"><a class="header-anchor" href="#_2-3-1-2-如何加入队列" aria-hidden="true">#</a> 2.3.1.2 如何加入队列</h4>
<p>获取锁失败后，会执行 addWaiter(Node.EXCLUSIVE)加入等待队列，具体实现方法如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">addWaiter</span><span class="token punctuation">(</span><span class="token class-name">Node</span> mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">Node</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mode<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// Try the fast path of enq; backup to full enq on failure</span>
	<span class="token class-name">Node</span> pred <span class="token operator">=</span> tail<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>pred <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		node<span class="token punctuation">.</span>prev <span class="token operator">=</span> pred<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetTail</span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			pred<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
			<span class="token keyword">return</span> node<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">enq</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> node<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSetTail</span><span class="token punctuation">(</span><span class="token class-name">Node</span> expect<span class="token punctuation">,</span> <span class="token class-name">Node</span> update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">compareAndSwapObject</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> tailOffset<span class="token punctuation">,</span> expect<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主要的流程如下：</p>
<ul>
<li>通过当前的线程和锁模式新建一个节点。</li>
<li>Pred 指针指向尾节点 Tail。</li>
<li>将 New 中 Node 的 Prev 指针指向 Pred。</li>
<li>通过 compareAndSetTail 方法，完成尾节点的设置。这个方法主要是对 tailOffset 和 Expect 进行比较，如果 tailOffset 的 Node 和 Expect 的 Node 地址是相同的，那么设置 Tail 的值为 Update 的值。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">static</span> <span class="token punctuation">{</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		stateOffset <span class="token operator">=</span> unsafe<span class="token punctuation">.</span><span class="token function">objectFieldOffset</span><span class="token punctuation">(</span><span class="token class-name">AbstractQueuedSynchronizer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">"state"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		headOffset <span class="token operator">=</span> unsafe<span class="token punctuation">.</span><span class="token function">objectFieldOffset</span><span class="token punctuation">(</span><span class="token class-name">AbstractQueuedSynchronizer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">"head"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		tailOffset <span class="token operator">=</span> unsafe<span class="token punctuation">.</span><span class="token function">objectFieldOffset</span><span class="token punctuation">(</span><span class="token class-name">AbstractQueuedSynchronizer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">"tail"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		waitStatusOffset <span class="token operator">=</span> unsafe<span class="token punctuation">.</span><span class="token function">objectFieldOffset</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">"waitStatus"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		nextOffset <span class="token operator">=</span> unsafe<span class="token punctuation">.</span><span class="token function">objectFieldOffset</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">"next"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从 AQS 的静态代码块可以看出，都是获取一个对象的属性相对于该对象在内存当中的偏移量，这样我们就可以根据这个偏移量在对象内存当中找到这个属性。tailOffset 指的是 tail 对应的偏移量，所以这个时候会将 new 出来的 Node 置为当前队列的尾节点。同时，由于是双向链表，也需要将前一个节点指向尾节点。</p>
<ul>
<li>如果 Pred 指针是 Null（说明等待队列中没有元素），或者当前 Pred 指针和 Tail 指向的位置不同（说明被别的线程已经修改），就需要看一下 Enq 的方法。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">enq</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Node</span> t <span class="token operator">=</span> tail<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Must initialize</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetHead</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
				tail <span class="token operator">=</span> head<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			node<span class="token punctuation">.</span>prev <span class="token operator">=</span> t<span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetTail</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				t<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
				<span class="token keyword">return</span> t<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果没有被初始化，需要进行初始化一个头结点出来。但请注意，初始化的头结点并不是当前线程节点，而是调用了无参构造函数的节点。如果经历了初始化或者并发导致队列中有元素，则与之前的方法相同。其实，addWaiter 就是一个在双端链表添加尾节点的操作，需要注意的是，双端链表的头结点是一个无参构造函数的头结点。</p>
<p>总结一下，线程获取锁的时候，过程大体如下：</p>
<ol>
<li>当没有线程获取到锁时，线程 1 获取锁成功。</li>
<li>线程 2 申请锁，但是锁被线程 1 占有。</li>
</ol>
<p><img src="https://p0.meituan.net/travelcube/e9e385c3c68f62c67c8d62ab0adb613921117.png" alt="img" loading="lazy"></p>
<ol>
<li>如果再有线程要获取锁，依次在队列中往后排队即可。</li>
</ol>
<p>回到上边的代码，hasQueuedPredecessors 是公平锁加锁时判断等待队列中是否存在有效节点的方法。如果返回 False，说明当前线程可以争取共享资源；如果返回 True，说明队列中存在有效节点，当前线程必须加入到等待队列中。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.ReentrantLock</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">hasQueuedPredecessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// The correctness of this depends on head being initialized</span>
	<span class="token comment">// before tail and on head.next being accurate if the current</span>
	<span class="token comment">// thread is first in queue.</span>
	<span class="token class-name">Node</span> t <span class="token operator">=</span> tail<span class="token punctuation">;</span> <span class="token comment">// Read fields in reverse initialization order</span>
	<span class="token class-name">Node</span> h <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token class-name">Node</span> s<span class="token punctuation">;</span>
	<span class="token keyword">return</span> h <span class="token operator">!=</span> t <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>s <span class="token operator">=</span> h<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> s<span class="token punctuation">.</span>thread <span class="token operator">!=</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>看到这里，我们理解一下 h != t &amp;&amp; ((s = h.next) == null || s.thread != Thread.currentThread());为什么要判断的头结点的下一个节点？第一个节点储存的数据是什么？</p>
<blockquote>
<p>双向链表中，第一个节点为虚节点，其实并不存储任何信息，只是占位。真正的第一个有数据的节点，是在第二个节点开始的。当 h != t 时： 如果(s = h.next) == null，等待队列正在有线程进行初始化，但只是进行到了 Tail 指向 Head，没有将 Head 指向 Tail，此时队列中有元素，需要返回 True（这块具体见下边代码分析）。 如果(s = h.next) != null，说明此时队列中至少有一个有效节点。如果此时 s.thread == Thread.currentThread()，说明等待队列的第一个有效节点中的线程与当前线程相同，那么当前线程是可以获取资源的；如果 s.thread != Thread.currentThread()，说明等待队列的第一个有效节点线程与当前线程不同，当前线程必须加入进等待队列。</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer#enq</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>t <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// Must initialize</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetHead</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		tail <span class="token operator">=</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
	node<span class="token punctuation">.</span>prev <span class="token operator">=</span> t<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetTail</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
		<span class="token keyword">return</span> t<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>节点入队不是原子操作，所以会出现短暂的 head != tail，此时 Tail 指向最后一个节点，而且 Tail 指向 Head。如果 Head 没有指向 Tail（可见 5、6、7 行），这种情况下也需要将相关线程加入队列中。所以这块代码是为了解决极端情况下的并发问题。</p>
<h4 id="_2-3-1-3-等待队列中线程出队列时机" tabindex="-1"><a class="header-anchor" href="#_2-3-1-3-等待队列中线程出队列时机" aria-hidden="true">#</a> 2.3.1.3 等待队列中线程出队列时机</h4>
<p>回到最初的源码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">acquire</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">tryAcquire</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">acquireQueued</span><span class="token punctuation">(</span><span class="token function">addWaiter</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token punctuation">.</span>EXCLUSIVE<span class="token punctuation">)</span><span class="token punctuation">,</span> arg<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token function">selfInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上文解释了 addWaiter 方法，这个方法其实就是把对应的线程以 Node 的数据结构形式加入到双端队列里，返回的是一个包含该线程的 Node。而这个 Node 会作为参数，进入到 acquireQueued 方法中。acquireQueued 方法可以对排队中的线程进行“获锁”操作。</p>
<p>总的来说，一个线程获取锁失败了，被放入等待队列，acquireQueued 会把放入队列中的线程不断去获取锁，直到获取成功或者不再需要获取（中断）。</p>
<p>下面我们从“何时出队列？”和“如何出队列？”两个方向来分析一下 acquireQueued 源码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">acquireQueued</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Node</span> node<span class="token punctuation">,</span> <span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 标记是否成功拿到资源</span>
	<span class="token keyword">boolean</span> failed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token comment">// 标记等待过程中是否中断过</span>
		<span class="token keyword">boolean</span> interrupted <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token comment">// 开始自旋，要么获取锁，要么中断</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 获取当前节点的前驱节点</span>
			<span class="token keyword">final</span> <span class="token class-name">Node</span> p <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">predecessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 如果p是头结点，说明当前节点在真实数据队列的首部，就尝试获取锁（别忘了头结点是虚节点）</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> head <span class="token operator">&amp;&amp;</span> <span class="token function">tryAcquire</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 获取锁成功，头指针移动到当前node</span>
				<span class="token function">setHead</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
				p<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// help GC</span>
				failed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> interrupted<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 说明p为头节点且当前没有获取到锁（可能是非公平锁被抢占了）或者是p不为头结点，这个时候就要判断当前node是否要被阻塞（被阻塞条件：前驱节点的waitStatus为-1），防止无限循环浪费资源。具体两个方法下面细细分析</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldParkAfterFailedAcquire</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">parkAndCheckInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
				interrupted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>failed<span class="token punctuation">)</span>
			<span class="token function">cancelAcquire</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：setHead 方法是把当前节点置为虚节点，但并没有修改 waitStatus，因为它是一直需要用的数据。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">setHead</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	head <span class="token operator">=</span> node<span class="token punctuation">;</span>
	node<span class="token punctuation">.</span>thread <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	node<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token comment">// 靠前驱节点判断当前线程是否应该被阻塞</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">shouldParkAfterFailedAcquire</span><span class="token punctuation">(</span><span class="token class-name">Node</span> pred<span class="token punctuation">,</span> <span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 获取头结点的节点状态</span>
	<span class="token keyword">int</span> ws <span class="token operator">=</span> pred<span class="token punctuation">.</span>waitStatus<span class="token punctuation">;</span>
	<span class="token comment">// 说明头结点处于唤醒状态</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>ws <span class="token operator">==</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>SIGNAL<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token comment">// 通过枚举值我们知道waitStatus>0是取消状态</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>ws <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">do</span> <span class="token punctuation">{</span>
			<span class="token comment">// 循环向前查找取消节点，把取消节点从队列中剔除</span>
			node<span class="token punctuation">.</span>prev <span class="token operator">=</span> pred <span class="token operator">=</span> pred<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>pred<span class="token punctuation">.</span>waitStatus <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pred<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token comment">// 设置前任节点等待状态为SIGNAL</span>
		<span class="token function">compareAndSetWaitStatus</span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> ws<span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>SIGNAL<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>parkAndCheckInterrupt 主要用于挂起当前线程，阻塞调用栈，返回当前线程的中断状态。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">parkAndCheckInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">interrupted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述方法的流程图如下：</p>
<p><img src="https://p0.meituan.net/travelcube/c124b76dcbefb9bdc778458064703d1135485.png" alt="" loading="lazy"></p>
<p>从上图可以看出，跳出当前循环的条件是当“前置节点是头结点，且当前线程获取锁成功”。为了防止因死循环导致 CPU 资源被浪费，我们会判断前置节点的状态来决定是否要将当前线程挂起，具体挂起流程用流程图表示如下（shouldParkAfterFailedAcquire 流程）：</p>
<p><img src="https://p0.meituan.net/travelcube/9af16e2481ad85f38ca322a225ae737535740.png" alt="" loading="lazy"></p>
<p>从队列中释放节点的疑虑打消了，那么又有新问题了：</p>
<ul>
<li>shouldParkAfterFailedAcquire 中取消节点是怎么生成的呢？什么时候会把一个节点的 waitStatus 设置为-1？</li>
<li>是在什么时间释放节点通知到被挂起的线程呢？</li>
</ul>
<h3 id="_2-3-2-cancelled-状态节点生成" tabindex="-1"><a class="header-anchor" href="#_2-3-2-cancelled-状态节点生成" aria-hidden="true">#</a> 2.3.2 CANCELLED 状态节点生成</h3>
<p>acquireQueued 方法中的 Finally 代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">acquireQueued</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Node</span> node<span class="token punctuation">,</span> <span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">boolean</span> failed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">final</span> <span class="token class-name">Node</span> p <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">predecessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> head <span class="token operator">&amp;&amp;</span> <span class="token function">tryAcquire</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
				failed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
			<span class="token punctuation">}</span>
			<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
	<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>failed<span class="token punctuation">)</span>
			<span class="token function">cancelAcquire</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 cancelAcquire 方法，将 Node 的状态标记为 CANCELLED。接下来，我们逐行来分析这个方法的原理：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">cancelAcquire</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 将无效节点过滤</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token comment">// 设置该节点不关联任何线程，也就是虚节点</span>
	node<span class="token punctuation">.</span>thread <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token class-name">Node</span> pred <span class="token operator">=</span> node<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
  <span class="token comment">// 通过前驱节点，跳过取消状态的node</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>pred<span class="token punctuation">.</span>waitStatus <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
		node<span class="token punctuation">.</span>prev <span class="token operator">=</span> pred <span class="token operator">=</span> pred<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
  <span class="token comment">// 获取过滤后的前驱节点的后继节点</span>
	<span class="token class-name">Node</span> predNext <span class="token operator">=</span> pred<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token comment">// 把当前node的状态设置为CANCELLED</span>
	node<span class="token punctuation">.</span>waitStatus <span class="token operator">=</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>CANCELLED<span class="token punctuation">;</span>
  <span class="token comment">// 如果当前节点是尾节点，将从后往前的第一个非取消状态的节点设置为尾节点</span>
  <span class="token comment">// 更新失败的话，则进入else，如果更新成功，将tail的后继节点设置为null</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>node <span class="token operator">==</span> tail <span class="token operator">&amp;&amp;</span> <span class="token function">compareAndSetTail</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> pred<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">compareAndSetNext</span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> predNext<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span> ws<span class="token punctuation">;</span>
    <span class="token comment">// 如果当前节点不是head的后继节点，1:判断当前节点前驱节点的是否为SIGNAL，2:如果不是，则把前驱节点设置为SINGAL看是否成功</span>
    <span class="token comment">// 如果1和2中有一个为true，再判断当前节点的线程是否为null</span>
    <span class="token comment">// 如果上述条件都满足，把当前节点的前驱节点的后继指针指向当前节点的后继节点</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>pred <span class="token operator">!=</span> head <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>ws <span class="token operator">=</span> pred<span class="token punctuation">.</span>waitStatus<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>SIGNAL <span class="token operator">||</span> <span class="token punctuation">(</span>ws <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compareAndSetWaitStatus</span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> ws<span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">.</span>SIGNAL<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> pred<span class="token punctuation">.</span>thread <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">Node</span> next <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> next<span class="token punctuation">.</span>waitStatus <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
				<span class="token function">compareAndSetNext</span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> predNext<span class="token punctuation">,</span> next<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果当前节点是head的后继节点，或者上述条件不满足，那就唤醒当前节点的后继节点</span>
			<span class="token function">unparkSuccessor</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		node<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span> <span class="token comment">// help GC</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当前的流程：</p>
<ul>
<li>获取当前节点的前驱节点，如果前驱节点的状态是 CANCELLED，那就一直往前遍历，找到第一个 waitStatus &lt;= 0 的节点，将找到的 Pred 节点和当前 Node 关联，将当前 Node 设置为 CANCELLED。</li>
<li>根据当前节点的位置，考虑以下三种情况：</li>
</ul>
<p>(1) 当前节点是尾节点。</p>
<p>(2) 当前节点是 Head 的后继节点。</p>
<p>(3) 当前节点不是 Head 的后继节点，也不是尾节点。</p>
<p>根据上述第二条，我们来分析每一种情况的流程。</p>
<p>当前节点是尾节点。</p>
<p><img src="https://p1.meituan.net/travelcube/b845211ced57561c24f79d56194949e822049.png" alt="" loading="lazy"></p>
<p>当前节点是 Head 的后继节点。</p>
<p><img src="https://p1.meituan.net/travelcube/ab89bfec875846e5028a4f8fead32b7117975.png" alt="" loading="lazy"></p>
<p>当前节点不是 Head 的后继节点，也不是尾节点。</p>
<p><img src="https://p0.meituan.net/travelcube/45d0d9e4a6897eddadc4397cf53d6cd522452.png" alt="" loading="lazy"></p>
<p>通过上面的流程，我们对于 CANCELLED 节点状态的产生和变化已经有了大致的了解，但是为什么所有的变化都是对 Next 指针进行了操作，而没有对 Prev 指针进行操作呢？什么情况下会对 Prev 指针进行操作？</p>
<blockquote>
<p>执行 cancelAcquire 的时候，当前节点的前置节点可能已经从队列中出去了（已经执行过 Try 代码块中的 shouldParkAfterFailedAcquire 方法了），如果此时修改 Prev 指针，有可能会导致 Prev 指向另一个已经移除队列的 Node，因此这块变化 Prev 指针不安全。 shouldParkAfterFailedAcquire 方法中，会执行下面的代码，其实就是在处理 Prev 指针。shouldParkAfterFailedAcquire 是获取锁失败的情况下才会执行，进入该方法后，说明共享资源已被获取，当前节点之前的节点都不会出现变化，因此这个时候变更 Prev 指针比较安全。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">do</span> <span class="token punctuation">{</span>
	node<span class="token punctuation">.</span>prev <span class="token operator">=</span> pred <span class="token operator">=</span> pred<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>pred<span class="token punctuation">.</span>waitStatus <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote>
<h3 id="_2-3-3-如何解锁" tabindex="-1"><a class="header-anchor" href="#_2-3-3-如何解锁" aria-hidden="true">#</a> 2.3.3 如何解锁</h3>
<p>我们已经剖析了加锁过程中的基本流程，接下来再对解锁的基本流程进行分析。由于 ReentrantLock 在解锁的时候，并不区分公平锁和非公平锁，所以我们直接看解锁的源码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.ReentrantLock</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	sync<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，本质释放锁的地方，是通过框架来完成的。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">release</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">tryRelease</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Node</span> h <span class="token operator">=</span> head<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> h<span class="token punctuation">.</span>waitStatus <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
			<span class="token function">unparkSuccessor</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 ReentrantLock 里面的公平锁和非公平锁的父类 Sync 定义了可重入锁的释放锁机制。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.ReentrantLock.Sync</span>

<span class="token comment">// 方法返回当前锁是不是没有被线程持有</span>
<span class="token keyword">protected</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">tryRelease</span><span class="token punctuation">(</span><span class="token keyword">int</span> releases<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 减少可重入次数</span>
	<span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> releases<span class="token punctuation">;</span>
	<span class="token comment">// 当前线程不是持有锁的线程，抛出异常</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token function">getExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalMonitorStateException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">boolean</span> free <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token comment">// 如果持有线程全部释放，将当前独占锁所有线程设置为null，并更新state</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		free <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token function">setExclusiveOwnerThread</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">setState</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> free<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来解释下述源码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">release</span><span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 上边自定义的tryRelease如果返回true，说明该锁没有被任何线程持有</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">tryRelease</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 获取头结点</span>
		<span class="token class-name">Node</span> h <span class="token operator">=</span> head<span class="token punctuation">;</span>
		<span class="token comment">// 头结点不为空并且头结点的waitStatus不是初始化节点情况，解除线程挂起状态</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>h <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> h<span class="token punctuation">.</span>waitStatus <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
			<span class="token function">unparkSuccessor</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的判断条件为什么是 h != null &amp;&amp; h.waitStatus != 0？</p>
<blockquote>
<p>h == null Head 还没初始化。初始情况下，head == null，第一个节点入队，Head 会被初始化一个虚拟节点。所以说，这里如果还没来得及入队，就会出现 head == null 的情况。</p>
<p>h != null &amp;&amp; waitStatus == 0 表明后继节点对应的线程仍在运行中，不需要唤醒。</p>
<p>h != null &amp;&amp; waitStatus &lt; 0 表明后继节点可能被阻塞了，需要唤醒。</p>
</blockquote>
<p>再看一下 unparkSuccessor 方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">unparkSuccessor</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 获取头结点waitStatus</span>
	<span class="token keyword">int</span> ws <span class="token operator">=</span> node<span class="token punctuation">.</span>waitStatus<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>ws <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token function">compareAndSetWaitStatus</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> ws<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 获取当前节点的下一个节点</span>
	<span class="token class-name">Node</span> s <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token comment">// 如果下个节点是null或者下个节点被cancelled，就找到队列最开始的非cancelled的节点</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> s<span class="token punctuation">.</span>waitStatus <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		s <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token comment">// 就从尾部节点开始找，到队首，找到队列第一个waitStatus&lt;0的节点。</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Node</span> t <span class="token operator">=</span> tail<span class="token punctuation">;</span> t <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> t <span class="token operator">!=</span> node<span class="token punctuation">;</span> t <span class="token operator">=</span> t<span class="token punctuation">.</span>prev<span class="token punctuation">)</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>t<span class="token punctuation">.</span>waitStatus <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
				s <span class="token operator">=</span> t<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 如果当前节点的下个节点不为空，而且状态&lt;=0，就把当前节点unpark</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>s <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
		<span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">unpark</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>thread<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么要从后往前找第一个非 Cancelled 的节点呢？原因如下。</p>
<p>之前的 addWaiter 方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">private</span> <span class="token class-name">Node</span> <span class="token function">addWaiter</span><span class="token punctuation">(</span><span class="token class-name">Node</span> mode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">Node</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mode<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// Try the fast path of enq; backup to full enq on failure</span>
	<span class="token class-name">Node</span> pred <span class="token operator">=</span> tail<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>pred <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		node<span class="token punctuation">.</span>prev <span class="token operator">=</span> pred<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetTail</span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			pred<span class="token punctuation">.</span>next <span class="token operator">=</span> node<span class="token punctuation">;</span>
			<span class="token keyword">return</span> node<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">enq</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> node<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们从这里可以看到，节点入队并不是原子操作，也就是说，node.prev = pred; compareAndSetTail(pred, node) 这两个地方可以看作 Tail 入队的原子操作，但是此时 pred.next = node;还没执行，如果这个时候执行了 unparkSuccessor 方法，就没办法从前往后找了，所以需要从后往前找。还有一点原因，在产生 CANCELLED 状态节点的时候，先断开的是 Next 指针，Prev 指针并未断开，因此也是必须要从后往前遍历才能够遍历完全部的 Node。</p>
<p>综上所述，如果是从前往后找，由于极端情况下入队的非原子操作和 CANCELLED 节点产生过程中断开 Next 指针的操作，可能会导致无法遍历所有的节点。所以，唤醒对应的线程后，对应的线程就会继续往下执行。继续执行 acquireQueued 方法以后，中断如何处理？</p>
<h3 id="_2-3-4-中断恢复后的执行流程" tabindex="-1"><a class="header-anchor" href="#_2-3-4-中断恢复后的执行流程" aria-hidden="true">#</a> 2.3.4 中断恢复后的执行流程</h3>
<p>唤醒后，会执行 return Thread.interrupted();，这个函数返回的是当前执行线程的中断状态，并清除。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">parkAndCheckInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">interrupted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再回到 acquireQueued 代码，当 parkAndCheckInterrupt 返回 True 或者 False 的时候，interrupted 的值不同，但都会执行下次循环。如果这个时候获取锁成功，就会把当前 interrupted 返回。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">acquireQueued</span><span class="token punctuation">(</span><span class="token keyword">final</span> <span class="token class-name">Node</span> node<span class="token punctuation">,</span> <span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">boolean</span> failed <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token keyword">try</span> <span class="token punctuation">{</span>
		<span class="token keyword">boolean</span> interrupted <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">final</span> <span class="token class-name">Node</span> p <span class="token operator">=</span> node<span class="token punctuation">.</span><span class="token function">predecessor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">==</span> head <span class="token operator">&amp;&amp;</span> <span class="token function">tryAcquire</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">setHead</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
				p<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// help GC</span>
				failed <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> interrupted<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">shouldParkAfterFailedAcquire</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> node<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">parkAndCheckInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
				interrupted <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
	<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>failed<span class="token punctuation">)</span>
			<span class="token function">cancelAcquire</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 acquireQueued 为 True，就会执行 selfInterrupt 方法。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">selfInterrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">interrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该方法其实是为了中断线程。但为什么获取了锁以后还要中断线程呢？这部分属于 Java 提供的协作式中断知识内容，感兴趣同学可以查阅一下。这里简单介绍一下：</p>
<ol>
<li>当中断线程被唤醒时，并不知道被唤醒的原因，可能是当前线程在等待中被中断，也可能是释放了锁以后被唤醒。因此我们通过 Thread.interrupted()方法检查中断标记（该方法返回了当前线程的中断状态，并将当前线程的中断标识设置为 False），并记录下来，如果发现该线程被中断过，就再中断一次。</li>
<li>线程在等待资源的过程中被唤醒，唤醒后还是会不断地去尝试获取锁，直到抢到锁为止。也就是说，在整个流程中，并不响应中断，只是记录中断记录。最后抢到锁返回了，那么如果被中断过的话，就需要补充一次中断。</li>
</ol>
<p>这里的处理方式主要是运用线程池中基本运作单元 Worder 中的 runWorker，通过 Thread.interrupted()进行额外的判断处理，感兴趣的同学可以看下 ThreadPoolExecutor 源码。</p>
<h3 id="_2-3-5-小结" tabindex="-1"><a class="header-anchor" href="#_2-3-5-小结" aria-hidden="true">#</a> 2.3.5 小结</h3>
<p>我们在 1.3 小节中提出了一些问题，现在来回答一下。</p>
<blockquote>
<p>Q：某个线程获取锁失败的后续流程是什么呢？</p>
<p>A：存在某种排队等候机制，线程继续等待，仍然保留获取锁的可能，获取锁流程仍在继续。</p>
<p>Q：既然说到了排队等候机制，那么就一定会有某种队列形成，这样的队列是什么数据结构呢？</p>
<p>A：是 CLH 变体的 FIFO 双端队列。</p>
<p>Q：处于排队等候机制中的线程，什么时候可以有机会获取锁呢？</p>
<p>A：可以详细看下 2.3.1.3 小节。</p>
<p>Q：如果处于排队等候机制中的线程一直无法获取锁，需要一直等待么？还是有别的策略来解决这一问题？</p>
<p>A：线程所在节点的状态会变成取消状态，取消状态的节点会从队列中释放，具体可见 2.3.2 小节。</p>
<p>Q：Lock 函数通过 Acquire 方法进行加锁，但是具体是如何加锁的呢？</p>
<p>A：AQS 的 Acquire 会调用 tryAcquire 方法，tryAcquire 由各个自定义同步器实现，通过 tryAcquire 完成加锁过程。</p>
</blockquote>
<h2 id="_3-aqs-应用" tabindex="-1"><a class="header-anchor" href="#_3-aqs-应用" aria-hidden="true">#</a> 3 AQS 应用</h2>
<h3 id="_3-1-reentrantlock-的可重入应用" tabindex="-1"><a class="header-anchor" href="#_3-1-reentrantlock-的可重入应用" aria-hidden="true">#</a> 3.1 ReentrantLock 的可重入应用</h3>
<p>ReentrantLock 的可重入性是 AQS 很好的应用之一，在了解完上述知识点以后，我们很容易得知 ReentrantLock 实现可重入的方法。在 ReentrantLock 里面，不管是公平锁还是非公平锁，都有一段逻辑。</p>
<p>公平锁：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.ReentrantLock.FairSync#tryAcquire</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">hasQueuedPredecessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> acquires<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>非公平锁：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.ReentrantLock.Sync#nonfairTryAcquire</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> acquires<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面这两段都可以看到，有一个同步状态 State 来控制整体可重入的情况。State 是 Volatile 修饰的，用于保证一定的可见性和有序性。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer</span>

<span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> state<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来看 State 这个字段主要的过程：</p>
<ol>
<li>State 初始化的时候为 0，表示没有任何线程持有锁。</li>
<li>当有线程持有该锁时，值就会在原来的基础上+1，同一个线程多次获得锁是，就会多次+1，这里就是可重入的概念。</li>
<li>解锁也是对这个字段-1，一直到 0，此线程对锁释放。</li>
</ol>
<h3 id="_3-2-juc-中的应用场景" tabindex="-1"><a class="header-anchor" href="#_3-2-juc-中的应用场景" aria-hidden="true">#</a> 3.2 JUC 中的应用场景</h3>
<p>除了上边 ReentrantLock 的可重入性的应用，AQS 作为并发编程的框架，为很多其他同步工具提供了良好的解决方案。下面列出了 JUC 中的几种同步工具，大体介绍一下 AQS 的应用场景：</p>
<table>
<thead>
<tr>
<th style="text-align:left">同步工具</th>
<th style="text-align:left">同步工具与 AQS 的关联</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">ReentrantLock</td>
<td style="text-align:left">使用 AQS 保存锁重复持有的次数。当一个线程获取锁时，ReentrantLock 记录当前获得锁的线程标识，用于检测是否重复获取，以及错误线程试图解锁操作时异常情况的处理。</td>
</tr>
<tr>
<td style="text-align:left">Semaphore</td>
<td style="text-align:left">使用 AQS 同步状态来保存信号量的当前计数。tryRelease 会增加计数，acquireShared 会减少计数。</td>
</tr>
<tr>
<td style="text-align:left">CountDownLatch</td>
<td style="text-align:left">使用 AQS 同步状态来表示计数。计数为 0 时，所有的 Acquire 操作（CountDownLatch 的 await 方法）才可以通过。</td>
</tr>
<tr>
<td style="text-align:left">ReentrantReadWriteLock</td>
<td style="text-align:left">使用 AQS 同步状态中的 16 位保存写锁持有的次数，剩下的 16 位用于保存读锁的持有次数。</td>
</tr>
<tr>
<td style="text-align:left">ThreadPoolExecutor</td>
<td style="text-align:left">Worker 利用 AQS 同步状态实现对独占线程变量的设置（tryAcquire 和 tryRelease）。</td>
</tr>
</tbody>
</table>
<h3 id="_3-3-自定义同步工具" tabindex="-1"><a class="header-anchor" href="#_3-3-自定义同步工具" aria-hidden="true">#</a> 3.3 自定义同步工具</h3>
<p>了解 AQS 基本原理以后，按照上面所说的 AQS 知识点，自己实现一个同步工具。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LeeLock</span>  <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Sync</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractQueuedSynchronizer</span> <span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">protected</span> <span class="token keyword">boolean</span> tryAcquire <span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">compareAndSetState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">protected</span> <span class="token keyword">boolean</span> tryRelease <span class="token punctuation">(</span><span class="token keyword">int</span> arg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">setState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">protected</span> <span class="token keyword">boolean</span> isHeldExclusively <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token function">getState</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">Sync</span> sync <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Sync</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> lock <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sync<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> unlock <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        sync<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过我们自己定义的 Lock 完成一定的同步功能。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LeeMain</span> <span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">LeeLock</span> leeLock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LeeLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> main <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>

        <span class="token class-name">Runnable</span> runnable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Runnable</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> run <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    leeLock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        count<span class="token operator">++</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                    leeLock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> thread1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>runnable<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Thread</span> thread2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>runnable<span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread1<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread2<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码每次运行结果都会是 20000。通过简单的几行代码就能实现同步功能，这就是 AQS 的强大之处。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>我们日常开发中使用并发的场景太多，但是对并发内部的基本框架原理了解的人却不多。由于篇幅原因，本文仅介绍了可重入锁 ReentrantLock 的原理和 AQS 原理，希望能够成为大家了解 AQS 和 ReentrantLock 等同步器的“敲门砖”。</p>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>
<ul>
<li>Lea D. The java. util. concurrent synchronizer framework[J]. Science of Computer Programming, 2005, 58(3): 293-309.</li>
<li>《Java 并发编程实战》</li>
<li><a href="https://tech.meituan.com/2018/11/15/java-lock.html" target="_blank" rel="noopener noreferrer">不可不说的 Java“锁”事<ExternalLinkIcon/></a></li>
</ul>
</div></template>
