<template><div><p>JDK 提供的这些容器大部分在 <code v-pre>java.util.concurrent</code> 包中。</p>
<ul>
<li><strong><code v-pre>ConcurrentHashMap</code></strong> : 线程安全的 <code v-pre>HashMap</code></li>
<li><strong><code v-pre>CopyOnWriteArrayList</code></strong> : 线程安全的 <code v-pre>List</code>，在读多写少的场合性能非常好，远远好于 <code v-pre>Vector</code>。</li>
<li><strong><code v-pre>ConcurrentLinkedQueue</code></strong> : 高效的并发队列，使用链表实现。可以看做一个线程安全的 <code v-pre>LinkedList</code>，这是一个非阻塞队列。</li>
<li><strong><code v-pre>BlockingQueue</code></strong> : 这是一个接口，JDK 内部通过链表、数组等方式实现了这个接口。表示阻塞队列，非常适合用于作为数据共享的通道。</li>
<li><strong><code v-pre>ConcurrentSkipListMap</code></strong> : 跳表的实现。这是一个 Map，使用跳表的数据结构进行快速查找。</li>
</ul>
<h2 id="concurrenthashmap" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap" aria-hidden="true">#</a> ConcurrentHashMap</h2>
<p>我们知道 <code v-pre>HashMap</code> 不是线程安全的，在并发场景下如果要保证一种可行的方式是使用 <code v-pre>Collections.synchronizedMap()</code> 方法来包装我们的 <code v-pre>HashMap</code>。但这是通过使用一个全局的锁来同步不同线程间的并发访问，因此会带来不可忽视的性能问题。</p>
<p>所以就有了 <code v-pre>HashMap</code> 的线程安全版本—— <code v-pre>ConcurrentHashMap</code> 的诞生。</p>
<p>在 <code v-pre>ConcurrentHashMap</code> 中，无论是读操作还是写操作都能保证很高的性能：在进行读操作时(几乎)不需要加锁，而在写操作时通过锁分段技术只对所操作的段加锁而不影响客户端对其它段的访问。</p>
<h2 id="copyonwritearraylist" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist" aria-hidden="true">#</a> CopyOnWriteArrayList</h2>
<h3 id="copyonwritearraylist-简介" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist-简介" aria-hidden="true">#</a> CopyOnWriteArrayList 简介</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CopyOnWriteArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span>
<span class="token keyword">extends</span> <span class="token class-name">Object</span>
<span class="token keyword">implements</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token class-name">RandomAccess</span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name">Serializable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在很多应用场景中，读操作可能会远远大于写操作。由于读操作根本不会修改原有的数据，因此对于每次读取都进行加锁其实是一种资源浪费。我们应该允许多个线程同时访问 <code v-pre>List</code> 的内部数据，毕竟读取操作是安全的。</p>
<p>这和我们之前在多线程章节讲过 <code v-pre>ReentrantReadWriteLock</code> 读写锁的思想非常类似，也就是读读共享、写写互斥、读写互斥、写读互斥。JDK 中提供了 <code v-pre>CopyOnWriteArrayList</code> 类比相比于在读写锁的思想又更进一步。为了将读取的性能发挥到极致，<code v-pre>CopyOnWriteArrayList</code> 读取是完全不用加锁的，并且更厉害的是：写入也不会阻塞读取操作。只有写入和写入之间需要进行同步等待。这样一来，读操作的性能就会大幅度提升。<strong>那它是怎么做的呢？</strong></p>
<h3 id="copyonwritearraylist-是如何做到的" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist-是如何做到的" aria-hidden="true">#</a> CopyOnWriteArrayList 是如何做到的？</h3>
<p><code v-pre>CopyOnWriteArrayList</code> 类的所有可变操作（add，set 等等）都是通过创建底层数组的新副本来实现的。当 List 需要被修改的时候，我并不修改原有内容，而是对原有数据进行一次复制，将修改的内容写入副本。写完之后，再将修改完的副本替换原来的数据，这样就可以保证写操作不会影响读操作了。</p>
<p>从 <code v-pre>CopyOnWriteArrayList</code> 的名字就能看出 <code v-pre>CopyOnWriteArrayList</code> 是满足 <code v-pre>CopyOnWrite</code> 的。所谓 <code v-pre>CopyOnWrite</code> 也就是说：在计算机，如果你想要对一块内存进行修改时，我们不在原有内存块中进行写操作，而是将内存拷贝一份，在新的内存中进行写操作，写完之后呢，就将指向原来内存指针指向新的内存，原来的内存就可以被回收掉了。</p>
<h3 id="copyonwritearraylist-读取和写入源码简单分析" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist-读取和写入源码简单分析" aria-hidden="true">#</a> CopyOnWriteArrayList 读取和写入源码简单分析</h3>
<h4 id="copyonwritearraylist-读取操作的实现" tabindex="-1"><a class="header-anchor" href="#copyonwritearraylist-读取操作的实现" aria-hidden="true">#</a> CopyOnWriteArrayList 读取操作的实现</h4>
<p>读取操作没有任何同步控制和锁操作，理由就是内部数组 <code v-pre>array</code> 不会发生修改，只会被另外一个 <code v-pre>array</code> 替换，因此可以保证数据安全。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token doc-comment comment">/** The array, accessed only via getArray/setArray. */</span>
    <span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token keyword">volatile</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">E</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">)</span> a<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">final</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> array<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-2-copyonwritearraylist-写入操作的实现" tabindex="-1"><a class="header-anchor" href="#_3-3-2-copyonwritearraylist-写入操作的实现" aria-hidden="true">#</a> 3.3.2 CopyOnWriteArrayList 写入操作的实现</h4>
<p><code v-pre>CopyOnWriteArrayList</code> 写入操作 <code v-pre>add()</code>方法在添加集合的时候加了锁，保证了同步，避免了多线程写的时候会 copy 出多个副本出来。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * Appends the specified element to the end of this list.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">e</span> element to be appended to this list
     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token boolean">true</span></span></span><span class="token punctuation">}</span> (as specified by <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Collection</span><span class="token punctuation">#</span><span class="token field">add</span></span><span class="token punctuation">}</span>)
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> lock <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lock<span class="token punctuation">;</span>
        lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//加锁</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> elements <span class="token operator">=</span> <span class="token function">getArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> len <span class="token operator">=</span> elements<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
            <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newElements <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elements<span class="token punctuation">,</span> len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//拷贝新数组</span>
            newElements<span class="token punctuation">[</span>len<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
            <span class="token function">setArray</span><span class="token punctuation">(</span>newElements<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//释放锁</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="concurrentlinkedqueue" tabindex="-1"><a class="header-anchor" href="#concurrentlinkedqueue" aria-hidden="true">#</a> ConcurrentLinkedQueue</h2>
<p>Java 提供的线程安全的 <code v-pre>Queue</code> 可以分为<strong>阻塞队列</strong>和<strong>非阻塞队列</strong>，其中阻塞队列的典型例子是 <code v-pre>BlockingQueue</code>，非阻塞队列的典型例子是 <code v-pre>ConcurrentLinkedQueue</code>，在实际应用中要根据实际需要选用阻塞队列或者非阻塞队列。 <strong>阻塞队列可以通过加锁来实现，非阻塞队列可以通过 CAS 操作实现。</strong></p>
<p>从名字可以看出，<code v-pre>ConcurrentLinkedQueue</code>这个队列使用链表作为其数据结构．<code v-pre>ConcurrentLinkedQueue</code> 应该算是在高并发环境中性能最好的队列了。它之所有能有很好的性能，是因为其内部复杂的实现。</p>
<p><code v-pre>ConcurrentLinkedQueue</code> 内部代码我们就不分析了，大家知道 <code v-pre>ConcurrentLinkedQueue</code> 主要使用 CAS 非阻塞算法来实现线程安全就好了。</p>
<p><code v-pre>ConcurrentLinkedQueue</code> 适合在对性能要求相对较高，同时对队列的读写存在多个线程同时进行的场景，即如果对队列加锁的成本较高则适合使用无锁的 <code v-pre>ConcurrentLinkedQueue</code> 来替代。</p>
<h2 id="blockingqueue" tabindex="-1"><a class="header-anchor" href="#blockingqueue" aria-hidden="true">#</a> BlockingQueue</h2>
<h3 id="blockingqueue-简介" tabindex="-1"><a class="header-anchor" href="#blockingqueue-简介" aria-hidden="true">#</a> BlockingQueue 简介</h3>
<p>上面我们己经提到了 <code v-pre>ConcurrentLinkedQueue</code> 作为高性能的非阻塞队列。下面我们要讲到的是阻塞队列——<code v-pre>BlockingQueue</code>。阻塞队列（<code v-pre>BlockingQueue</code>）被广泛使用在“生产者-消费者”问题中，其原因是 <code v-pre>BlockingQueue</code> 提供了可阻塞的插入和移除的方法。当队列容器已满，生产者线程会被阻塞，直到队列未满；当队列容器为空时，消费者线程会被阻塞，直至队列非空时为止。</p>
<p><code v-pre>BlockingQueue</code> 是一个接口，继承自 <code v-pre>Queue</code>，所以其实现类也可以作为 <code v-pre>Queue</code> 的实现来使用，而 <code v-pre>Queue</code> 又继承自 <code v-pre>Collection</code> 接口。下面是 <code v-pre>BlockingQueue</code> 的相关实现类：</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-12-9/51622268.jpg" alt="BlockingQueue 的实现类" loading="lazy"></p>
<p>下面主要介绍一下 3 个常见的 <code v-pre>BlockingQueue</code> 的实现类：<code v-pre>ArrayBlockingQueue</code>、<code v-pre>LinkedBlockingQueue</code> 、<code v-pre>PriorityBlockingQueue</code> 。</p>
<h3 id="arrayblockingqueue" tabindex="-1"><a class="header-anchor" href="#arrayblockingqueue" aria-hidden="true">#</a> ArrayBlockingQueue</h3>
<p><code v-pre>ArrayBlockingQueue</code> 是 <code v-pre>BlockingQueue</code> 接口的有界队列实现类，底层采用数组来实现。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span>
<span class="token keyword">extends</span> <span class="token class-name">AbstractQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span>
<span class="token keyword">implements</span> <span class="token class-name">BlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token class-name">Serializable</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>ArrayBlockingQueue</code> 一旦创建，容量不能改变。其并发控制采用可重入锁 <code v-pre>ReentrantLock</code> ，不管是插入操作还是读取操作，都需要获取到锁才能进行操作。当队列容量满时，尝试将元素放入队列将导致操作阻塞;尝试从一个空队列中取一个元素也会同样阻塞。</p>
<p><code v-pre>ArrayBlockingQueue</code> 默认情况下不能保证线程访问队列的公平性，所谓公平性是指严格按照线程等待的绝对时间顺序，即最先等待的线程能够最先访问到 <code v-pre>ArrayBlockingQueue</code>。而非公平性则是指访问 <code v-pre>ArrayBlockingQueue</code> 的顺序不是遵守严格的时间顺序，有可能存在，当 <code v-pre>ArrayBlockingQueue</code> 可以被访问时，长时间阻塞的线程依然无法访问到 <code v-pre>ArrayBlockingQueue</code>。如果保证公平性，通常会降低吞吐量。如果需要获得公平性的 <code v-pre>ArrayBlockingQueue</code>，可采用如下代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> blockingQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="linkedblockingqueue" tabindex="-1"><a class="header-anchor" href="#linkedblockingqueue" aria-hidden="true">#</a> LinkedBlockingQueue</h3>
<p><code v-pre>LinkedBlockingQueue</code> 底层基于<strong>单向链表</strong>实现的阻塞队列，可以当做无界队列也可以当做有界队列来使用，同样满足 FIFO 的特性，与 <code v-pre>ArrayBlockingQueue</code> 相比起来具有更高的吞吐量，为了防止 <code v-pre>LinkedBlockingQueue</code> 容量迅速增，损耗大量内存。通常在创建 <code v-pre>LinkedBlockingQueue</code> 对象时，会指定其大小，如果未指定，容量等于 <code v-pre>Integer.MAX_VALUE</code> 。</p>
<p><strong>相关构造方法:</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token doc-comment comment">/**
     *某种意义上的无界队列
     * Creates a <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">LinkedBlockingQueue</span></span></span><span class="token punctuation">}</span> with a capacity of
     * <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">Integer</span><span class="token punctuation">#</span><span class="token field">MAX_VALUE</span></span><span class="token punctuation">}</span>.
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *有界队列
     * Creates a <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token class-name">LinkedBlockingQueue</span></span></span><span class="token punctuation">}</span> with the given (fixed) capacity.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">capacity</span> the capacity of this queue
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IllegalArgumentException</span></span> if <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java">capacity</span></span><span class="token punctuation">}</span> is not greater
     *         than zero
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>capacity <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>capacity <span class="token operator">=</span> capacity<span class="token punctuation">;</span>
        last <span class="token operator">=</span> head <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="priorityblockingqueue" tabindex="-1"><a class="header-anchor" href="#priorityblockingqueue" aria-hidden="true">#</a> PriorityBlockingQueue</h3>
<p><code v-pre>PriorityBlockingQueue</code> 是一个支持优先级的无界阻塞队列。默认情况下元素采用自然顺序进行排序，也可以通过自定义类实现 <code v-pre>compareTo()</code> 方法来指定元素排序规则，或者初始化时通过构造器参数 <code v-pre>Comparator</code> 来指定排序规则。</p>
<p><code v-pre>PriorityBlockingQueue</code> 并发控制采用的是可重入锁 <code v-pre>ReentrantLock</code>，队列为无界队列（<code v-pre>ArrayBlockingQueue</code> 是有界队列，<code v-pre>LinkedBlockingQueue</code> 也可以通过在构造函数中传入 <code v-pre>capacity</code> 指定队列最大的容量，但是 <code v-pre>PriorityBlockingQueue</code> 只能指定初始的队列大小，后面插入元素的时候，<strong>如果空间不够的话会自动扩容</strong>）。</p>
<p>简单地说，它就是 <code v-pre>PriorityQueue</code> 的线程安全版本。不可以插入 null 值，同时，插入队列的对象必须是可比较大小的（comparable），否则报 <code v-pre>ClassCastException</code> 异常。它的插入操作 put 方法不会 block，因为它是无界队列（take 方法在队列为空的时候会阻塞）。</p>
<p><strong>推荐文章：</strong> <a href="https://javadoop.com/post/java-concurrent-queue" target="_blank" rel="noopener noreferrer">《解读 Java 并发队列 BlockingQueue》<ExternalLinkIcon/></a></p>
<h2 id="concurrentskiplistmap" tabindex="-1"><a class="header-anchor" href="#concurrentskiplistmap" aria-hidden="true">#</a> ConcurrentSkipListMap</h2>
<p>下面这部分内容参考了极客时间专栏<a href="https://time.geekbang.org/column/intro/126?code=zl3GYeAsRI4rEJIBNu5B/km7LSZsPDlGWQEpAYw5Vu0=&amp;utm_term=SPoster" title="《数据结构与算法之美》" target="_blank" rel="noopener noreferrer">《数据结构与算法之美》<ExternalLinkIcon/></a>以及《实战 Java 高并发程序设计》。</p>
<p>为了引出 <code v-pre>ConcurrentSkipListMap</code>，先带着大家简单理解一下跳表。</p>
<p>对于一个单链表，即使链表是有序的，如果我们想要在其中查找某个数据，也只能从头到尾遍历链表，这样效率自然就会很低，跳表就不一样了。跳表是一种可以用来快速查找的数据结构，有点类似于平衡树。它们都可以对元素进行快速的查找。但一个重要的区别是：对平衡树的插入和删除往往很可能导致平衡树进行一次全局的调整。而对跳表的插入和删除只需要对整个数据结构的局部进行操作即可。这样带来的好处是：在高并发的情况下，你会需要一个全局锁来保证整个平衡树的线程安全。而对于跳表，你只需要部分锁即可。这样，在高并发环境下，你就可以拥有更好的性能。而就查询的性能而言，跳表的时间复杂度也是 <strong>O(logn)</strong> 所以在并发数据结构中，JDK 使用跳表来实现一个 Map。</p>
<p>跳表的本质是同时维护了多个链表，并且链表是分层的，</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-12-9/93666217.jpg" alt="2级索引跳表" loading="lazy"></p>
<p>最低层的链表维护了跳表内所有的元素，每上面一层链表都是下面一层的子集。</p>
<p>跳表内的所有链表的元素都是排序的。查找时，可以从顶级链表开始找。一旦发现被查找的元素大于当前链表中的取值，就会转入下一层链表继续找。这也就是说在查找过程中，搜索是跳跃式的。如上图所示，在跳表中查找元素 18。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-12-9/32005738.jpg" alt="在跳表中查找元素18" loading="lazy"></p>
<p>查找 18 的时候原来需要遍历 18 次，现在只需要 7 次即可。针对链表长度比较大的时候，构建索引查找效率的提升就会非常明显。</p>
<p>从上面很容易看出，<strong>跳表是一种利用空间换时间的算法。</strong></p>
<p>使用跳表实现 <code v-pre>Map</code> 和使用哈希算法实现 <code v-pre>Map</code> 的另外一个不同之处是：哈希并不会保存元素的顺序，而跳表内所有的元素都是排序的。因此在对跳表进行遍历时，你会得到一个有序的结果。所以，如果你的应用需要有序性，那么跳表就是你不二的选择。JDK 中实现这一数据结构的类是 <code v-pre>ConcurrentSkipListMap</code>。</p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>《实战 Java 高并发程序设计》</li>
<li><a href="https://javadoop.com/post/java-concurrent-queue" target="_blank" rel="noopener noreferrer">https://javadoop.com/post/java-concurrent-queue<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/5aeebd02518825672f19c546" target="_blank" rel="noopener noreferrer">https://juejin.im/post/5aeebd02518825672f19c546<ExternalLinkIcon/></a></li>
</ul>
</div></template>
