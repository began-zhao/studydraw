<template><div><h2 id="集合概述" tabindex="-1"><a class="header-anchor" href="#集合概述" aria-hidden="true">#</a> 集合概述</h2>
<h3 id="java-集合概览" tabindex="-1"><a class="header-anchor" href="#java-集合概览" aria-hidden="true">#</a> Java 集合概览</h3>
<p>Java 集合， 也叫作容器，主要是由两大接口派生而来：一个是 <code v-pre>Collection</code>接口，主要用于存放单一元素；另一个是 <code v-pre>Map</code> 接口，主要用于存放键值对。对于<code v-pre>Collection</code> 接口，下面又有三个主要的子接口：<code v-pre>List</code>、<code v-pre>Set</code> 和 <code v-pre>Queue</code>。</p>
<p>Java 集合框架如下图所示：</p>
<p><img src="@source/code/java/common/collection/images/java-collection-hierarchy.png" alt="" loading="lazy"></p>
<p>注：图中只列举了主要的继承派生关系，并没有列举所有关系。比方省略了<code v-pre>AbstractList</code>, <code v-pre>NavigableSet</code>等抽象类以及其他的一些辅助类，如想深入了解，可自行查看源码。</p>
<h3 id="说说-list-set-queue-map-四者的区别" tabindex="-1"><a class="header-anchor" href="#说说-list-set-queue-map-四者的区别" aria-hidden="true">#</a> 说说 List, Set, Queue, Map 四者的区别？</h3>
<ul>
<li><code v-pre>List</code>(对付顺序的好帮手): 存储的元素是有序的、可重复的。</li>
<li><code v-pre>Set</code>(注重独一无二的性质): 存储的元素是无序的、不可重复的。</li>
<li><code v-pre>Queue</code>(实现排队功能的叫号机): 按特定的排队规则来确定先后顺序，存储的元素是有序的、可重复的。</li>
<li><code v-pre>Map</code>(用 key 来搜索的专家): 使用键值对（key-value）存储，类似于数学上的函数 y=f(x)，&quot;x&quot; 代表 key，&quot;y&quot; 代表 value，key 是无序的、不可重复的，value 是无序的、可重复的，每个键最多映射到一个值。</li>
</ul>
<h3 id="集合框架底层数据结构总结" tabindex="-1"><a class="header-anchor" href="#集合框架底层数据结构总结" aria-hidden="true">#</a> 集合框架底层数据结构总结</h3>
<p>先来看一下 <code v-pre>Collection</code> 接口下面的集合。</p>
<h4 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> List</h4>
<ul>
<li><code v-pre>Arraylist</code>： <code v-pre>Object[]</code> 数组</li>
<li><code v-pre>Vector</code>：<code v-pre>Object[]</code> 数组</li>
<li><code v-pre>LinkedList</code>： 双向链表(JDK1.6 之前为循环链表，JDK1.7 取消了循环)</li>
</ul>
<h4 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h4>
<ul>
<li><code v-pre>HashSet</code>(无序，唯一): 基于 <code v-pre>HashMap</code> 实现的，底层采用 <code v-pre>HashMap</code> 来保存元素</li>
<li><code v-pre>LinkedHashSet</code>: <code v-pre>LinkedHashSet</code> 是 <code v-pre>HashSet</code> 的子类，并且其内部是通过 <code v-pre>LinkedHashMap</code> 来实现的。有点类似于我们之前说的 <code v-pre>LinkedHashMap</code> 其内部是基于 <code v-pre>HashMap</code> 实现一样，不过还是有一点点区别的</li>
<li><code v-pre>TreeSet</code>(有序，唯一): 红黑树(自平衡的排序二叉树)</li>
</ul>
<h4 id="queue" tabindex="-1"><a class="header-anchor" href="#queue" aria-hidden="true">#</a> Queue</h4>
<ul>
<li><code v-pre>PriorityQueue</code>: <code v-pre>Object[]</code> 数组来实现二叉堆</li>
<li><code v-pre>ArrayQueue</code>: <code v-pre>Object[]</code> 数组 + 双指针</li>
</ul>
<p>再来看看 <code v-pre>Map</code> 接口下面的集合。</p>
<h4 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h4>
<ul>
<li><code v-pre>HashMap</code>： JDK1.8 之前 <code v-pre>HashMap</code> 由数组+链表组成的，数组是 <code v-pre>HashMap</code> 的主体，链表则是主要为了解决哈希冲突而存在的（“拉链法”解决冲突）。JDK1.8 以后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间</li>
<li><code v-pre>LinkedHashMap</code>： <code v-pre>LinkedHashMap</code> 继承自 <code v-pre>HashMap</code>，所以它的底层仍然是基于拉链式散列结构即由数组和链表或红黑树组成。另外，<code v-pre>LinkedHashMap</code> 在上面结构的基础上，增加了一条双向链表，使得上面的结构可以保持键值对的插入顺序。同时通过对链表进行相应的操作，实现了访问顺序相关逻辑。详细可以查看：<a href="https://www.imooc.com/article/22931" target="_blank" rel="noopener noreferrer">《LinkedHashMap 源码详细分析（JDK1.8）》<ExternalLinkIcon/></a></li>
<li><code v-pre>Hashtable</code>： 数组+链表组成的，数组是 <code v-pre>Hashtable</code> 的主体，链表则是主要为了解决哈希冲突而存在的</li>
<li><code v-pre>TreeMap</code>： 红黑树（自平衡的排序二叉树）</li>
</ul>
<h3 id="如何选用集合" tabindex="-1"><a class="header-anchor" href="#如何选用集合" aria-hidden="true">#</a> 如何选用集合?</h3>
<p>主要根据集合的特点来选用，比如我们需要根据键值获取到元素值时就选用 <code v-pre>Map</code> 接口下的集合，需要排序时选择 <code v-pre>TreeMap</code>,不需要排序时就选择 <code v-pre>HashMap</code>,需要保证线程安全就选用 <code v-pre>ConcurrentHashMap</code>。</p>
<p>当我们只需要存放元素值时，就选择实现<code v-pre>Collection</code> 接口的集合，需要保证元素唯一时选择实现 <code v-pre>Set</code> 接口的集合比如 <code v-pre>TreeSet</code> 或 <code v-pre>HashSet</code>，不需要就选择实现 <code v-pre>List</code> 接口的比如 <code v-pre>ArrayList</code> 或 <code v-pre>LinkedList</code>，然后再根据实现这些接口的集合的特点来选用。</p>
<h3 id="为什么要使用集合" tabindex="-1"><a class="header-anchor" href="#为什么要使用集合" aria-hidden="true">#</a> 为什么要使用集合？</h3>
<p>当我们需要保存一组类型相同的数据的时候，我们应该是用一个容器来保存，这个容器就是数组，但是，使用数组存储对象具有一定的弊端，
因为我们在实际开发中，存储的数据的类型是多种多样的，于是，就出现了“集合”，集合同样也是用来存储多个数据的。</p>
<p>数组的缺点是一旦声明之后，长度就不可变了；同时，声明数组时的数据类型也决定了该数组存储的数据的类型；而且，数组存储的数据是有序的、可重复的，特点单一。
但是集合提高了数据存储的灵活性，Java 集合不仅可以用来存储不同类型不同数量的对象，还可以保存具有映射关系的数据。</p>
<h2 id="collection-子接口之-list" tabindex="-1"><a class="header-anchor" href="#collection-子接口之-list" aria-hidden="true">#</a> Collection 子接口之 List</h2>
<h3 id="arraylist-和-vector-的区别" tabindex="-1"><a class="header-anchor" href="#arraylist-和-vector-的区别" aria-hidden="true">#</a> Arraylist 和 Vector 的区别?</h3>
<ul>
<li><code v-pre>ArrayList</code> 是 <code v-pre>List</code> 的主要实现类，底层使用 <code v-pre>Object[ ]</code>存储，适用于频繁的查找工作，线程不安全 ；</li>
<li><code v-pre>Vector</code> 是 <code v-pre>List</code> 的古老实现类，底层使用<code v-pre>Object[ ]</code> 存储，线程安全的。</li>
</ul>
<h3 id="arraylist-与-linkedlist-区别" tabindex="-1"><a class="header-anchor" href="#arraylist-与-linkedlist-区别" aria-hidden="true">#</a> Arraylist 与 LinkedList 区别?</h3>
<ol>
<li><strong>是否保证线程安全：</strong> <code v-pre>ArrayList</code> 和 <code v-pre>LinkedList</code> 都是不同步的，也就是不保证线程安全；</li>
<li><strong>底层数据结构：</strong> <code v-pre>Arraylist</code> 底层使用的是 <strong><code v-pre>Object</code> 数组</strong>；<code v-pre>LinkedList</code> 底层使用的是 <strong>双向链表</strong> 数据结构（JDK1.6 之前为循环链表，JDK1.7 取消了循环。注意双向链表和双向循环链表的区别，下面有介绍到！）</li>
<li><strong>插入和删除是否受元素位置的影响：</strong>
<ul>
<li><code v-pre>ArrayList</code> 采用数组存储，所以插入和删除元素的时间复杂度受元素位置的影响。 比如：执行<code v-pre>add(E e)</code>方法的时候， <code v-pre>ArrayList</code> 会默认在将指定的元素追加到此列表的末尾，这种情况时间复杂度就是 O(1)。但是如果要在指定位置 i 插入和删除元素的话（<code v-pre>add(int index, E element)</code>）时间复杂度就为 O(n-i)。因为在进行上述操作的时候集合中第 i 和第 i 个元素之后的(n-i)个元素都要执行向后位/向前移一位的操作。</li>
<li><code v-pre>LinkedList</code> 采用链表存储，所以，如果是在头尾插入或者删除元素不受元素位置的影响（<code v-pre>add(E e)</code>、<code v-pre>addFirst(E e)</code>、<code v-pre>addLast(E e)</code>、<code v-pre>removeFirst()</code> 、 <code v-pre>removeLast()</code>），时间复杂度为 O(1)，如果是要在指定位置 <code v-pre>i</code> 插入和删除元素的话（<code v-pre>add(int index, E element)</code>，<code v-pre>remove(Object o)</code>）， 时间复杂度为 O(n) ，因为需要先移动到指定位置再插入。</li>
</ul>
</li>
<li><strong>是否支持快速随机访问：</strong> <code v-pre>LinkedList</code> 不支持高效的随机元素访问，而 <code v-pre>ArrayList</code> 支持。快速随机访问就是通过元素的序号快速获取元素对象(对应于<code v-pre>get(int index)</code>方法)。</li>
<li><strong>内存空间占用：</strong> <code v-pre>ArrayList</code> 的空 间浪费主要体现在在 list 列表的结尾会预留一定的容量空间，而 LinkedList 的空间花费则体现在它的每一个元素都需要消耗比 ArrayList 更多的空间（因为要存放直接后继和直接前驱以及数据）。</li>
</ol>
<p>我们在项目中一般是不会使用到 <code v-pre>LinkedList</code> 的，需要用到 <code v-pre>LinkedList</code> 的场景几乎都可以使用  <code v-pre>ArrayList</code>  来代替，并且，性能通常会更好！就连 <code v-pre>LinkedList</code> 的作者约书亚 · 布洛克（Josh Bloch）自己都说从来不会使用 <code v-pre>LinkedList</code> 。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/redisimage-20220412110853807.png" alt="" loading="lazy"></p>
<p>另外，不要下意识地认为 <code v-pre>LinkedList</code>  作为链表就最适合元素增删的场景。我在上面也说了，<code v-pre>LinkedList</code>  仅仅在头尾插入或者删除元素的时候时间复杂度近似 O(1)，其他情况增删元素的时间复杂度都是 O(n) 。</p>
<h4 id="补充内容-双向链表和双向循环链表" tabindex="-1"><a class="header-anchor" href="#补充内容-双向链表和双向循环链表" aria-hidden="true">#</a> 补充内容:双向链表和双向循环链表</h4>
<p><strong>双向链表：</strong> 包含两个指针，一个 prev 指向前一个节点，一个 next 指向后一个节点。</p>
<blockquote>
<p>另外推荐一篇把双向链表讲清楚的文章：<a href="https://juejin.cn/post/6844903648154271757" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903648154271757<ExternalLinkIcon/></a></p>
</blockquote>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/双向链表.png" alt="双向链表" loading="lazy"></p>
<p><strong>双向循环链表：</strong> 最后一个节点的 next 指向 head，而 head 的 prev 指向最后一个节点，构成一个环。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/双向循环链表.png" alt="双向循环链表" loading="lazy"></p>
<h4 id="补充内容-randomaccess-接口" tabindex="-1"><a class="header-anchor" href="#补充内容-randomaccess-接口" aria-hidden="true">#</a> 补充内容:RandomAccess 接口</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">RandomAccess</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>查看源码我们发现实际上 <code v-pre>RandomAccess</code> 接口中什么都没有定义。所以，在我看来 <code v-pre>RandomAccess</code> 接口不过是一个标识罢了。标识什么？ 标识实现这个接口的类具有随机访问功能。</p>
<p>在 <code v-pre>binarySearch（)</code> 方法中，它要判断传入的 list 是否 <code v-pre>RandomAccess</code> 的实例，如果是，调用<code v-pre>indexedBinarySearch()</code>方法，如果不是，那么调用<code v-pre>iteratorBinarySearch()</code>方法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span>
    <span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Comparable</span><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">super</span> <span class="token class-name">T</span><span class="token punctuation">></span><span class="token punctuation">></span></span> list<span class="token punctuation">,</span> <span class="token class-name">T</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>list <span class="token keyword">instanceof</span> <span class="token class-name">RandomAccess</span> <span class="token operator">||</span> list<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&lt;</span>BINARYSEARCH_THRESHOLD<span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">indexedBinarySearch</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            <span class="token keyword">return</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">iteratorBinarySearch</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>ArrayList</code> 实现了 <code v-pre>RandomAccess</code> 接口， 而 <code v-pre>LinkedList</code> 没有实现。为什么呢？我觉得还是和底层数据结构有关！<code v-pre>ArrayList</code> 底层是数组，而 <code v-pre>LinkedList</code> 底层是链表。数组天然支持随机访问，时间复杂度为 O(1)，所以称为快速随机访问。链表需要遍历到特定位置才能访问特定位置的元素，时间复杂度为 O(n)，所以不支持快速随机访问。，<code v-pre>ArrayList</code> 实现了 <code v-pre>RandomAccess</code> 接口，就表明了他具有快速随机访问功能。 <code v-pre>RandomAccess</code> 接口只是标识，并不是说 <code v-pre>ArrayList</code> 实现 <code v-pre>RandomAccess</code> 接口才具有快速随机访问功能的！</p>
<h3 id="说一说-arraylist-的扩容机制吧" tabindex="-1"><a class="header-anchor" href="#说一说-arraylist-的扩容机制吧" aria-hidden="true">#</a> 说一说 ArrayList 的扩容机制吧</h3>
<p>详见笔主的这篇文章:<a href="https://javaguide.cn/java/collection/arraylist-source-code.html#_3-1-%E5%85%88%E4%BB%8E-arraylist-%E7%9A%84%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E8%AF%B4%E8%B5%B7" target="_blank" rel="noopener noreferrer">ArrayList 扩容机制分析<ExternalLinkIcon/></a></p>
<h2 id="collection-子接口之-set" tabindex="-1"><a class="header-anchor" href="#collection-子接口之-set" aria-hidden="true">#</a> Collection 子接口之 Set</h2>
<h3 id="comparable-和-comparator-的区别" tabindex="-1"><a class="header-anchor" href="#comparable-和-comparator-的区别" aria-hidden="true">#</a> comparable 和 Comparator 的区别</h3>
<ul>
<li><code v-pre>comparable</code> 接口实际上是出自<code v-pre>java.lang</code>包 它有一个 <code v-pre>compareTo(Object obj)</code>方法用来排序</li>
<li><code v-pre>comparator</code>接口实际上是出自 java.util 包它有一个<code v-pre>compare(Object obj1, Object obj2)</code>方法用来排序</li>
</ul>
<p>一般我们需要对一个集合使用自定义排序时，我们就要重写<code v-pre>compareTo()</code>方法或<code v-pre>compare()</code>方法，当我们需要对某一个集合实现两种排序方式，比如一个 song 对象中的歌名和歌手名分别采用一种排序方法的话，我们可以重写<code v-pre>compareTo()</code>方法和使用自制的<code v-pre>Comparator</code>方法或者以两个 Comparator 来实现歌名排序和歌星名排序，第二种代表我们只能使用两个参数版的 <code v-pre>Collections.sort()</code>.</p>
<h4 id="comparator-定制排序" tabindex="-1"><a class="header-anchor" href="#comparator-定制排序" aria-hidden="true">#</a> Comparator 定制排序</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> arrayList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        arrayList<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"原始数组:"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arrayList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// void reverse(List list)：反转</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span>arrayList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Collections.reverse(arrayList):"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arrayList<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// void sort(List list),按自然排序的升序排序</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arrayList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Collections.sort(arrayList):"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arrayList<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 定制排序的用法</span>
        <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>arrayList<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> o1<span class="token punctuation">,</span> <span class="token class-name">Integer</span> o2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> o2<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"定制排序后："</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arrayList<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>原始数组:
[-1, 3, 3, -5, 7, 4, -9, -7]
Collections.reverse(arrayList):
[-7, -9, 4, 7, -5, 3, 3, -1]
Collections.sort(arrayList):
[-9, -7, -5, -1, 3, 3, 4, 7]
定制排序后：
[7, 4, 3, 3, -1, -5, -7, -9]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重写-compareto-方法实现按年龄来排序" tabindex="-1"><a class="header-anchor" href="#重写-compareto-方法实现按年龄来排序" aria-hidden="true">#</a> 重写 compareTo 方法实现按年龄来排序</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// person对象没有实现Comparable接口，所以必须实现，这样才不会出错，才可以使treemap中的数据按顺序排列</span>
<span class="token comment">// 前面一个例子的String类已经默认实现了Comparable接口，详细可以查看String类的API文档，另外其他</span>
<span class="token comment">// 像Integer类等都已经实现了Comparable接口，所以不需要另外实现了</span>
<span class="token keyword">public</span>  <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setAge</span><span class="token punctuation">(</span><span class="token keyword">int</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * T重写compareTo方法实现按年龄来排序
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">Person</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">></span> o<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">&lt;</span> o<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> pdata <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pdata<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"张三"</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"zhangsan"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pdata<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"李四"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"lisi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pdata<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"王五"</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"wangwu"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        pdata<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"小红"</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"xiaohong"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 得到key的值的同时得到key所对应的值</span>
        <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">></span></span> keys <span class="token operator">=</span> pdata<span class="token punctuation">.</span><span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Person</span> key <span class="token operator">:</span> keys<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"-"</span> <span class="token operator">+</span> key<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>5-小红
10-王五
20-李四
30-张三
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="无序性和不可重复性的含义是什么" tabindex="-1"><a class="header-anchor" href="#无序性和不可重复性的含义是什么" aria-hidden="true">#</a> 无序性和不可重复性的含义是什么</h3>
<p>1、什么是无序性？无序性不等于随机性 ，无序性是指存储的数据在底层数组中并非按照数组索引的顺序添加 ，而是根据数据的哈希值决定的。</p>
<p>2、什么是不可重复性？不可重复性是指添加的元素按照 equals()判断时 ，返回 false，需要同时重写 equals()方法和 HashCode()方法。</p>
<h3 id="比较-hashset、linkedhashset-和-treeset-三者的异同" tabindex="-1"><a class="header-anchor" href="#比较-hashset、linkedhashset-和-treeset-三者的异同" aria-hidden="true">#</a> 比较 HashSet、LinkedHashSet 和 TreeSet 三者的异同</h3>
<ul>
<li><code v-pre>HashSet</code>、<code v-pre>LinkedHashSet</code> 和 <code v-pre>TreeSet</code> 都是 <code v-pre>Set</code> 接口的实现类，都能保证元素唯一，并且都不是线程安全的。</li>
<li><code v-pre>HashSet</code>、<code v-pre>LinkedHashSet</code> 和 <code v-pre>TreeSet</code> 的主要区别在于底层数据结构不同。<code v-pre>HashSet</code> 的底层数据结构是哈希表（基于 <code v-pre>HashMap</code> 实现）。<code v-pre>LinkedHashSet</code> 的底层数据结构是链表和哈希表，元素的插入和取出顺序满足 FIFO。<code v-pre>TreeSet</code> 底层数据结构是红黑树，元素是有序的，排序的方式有自然排序和定制排序。</li>
<li>底层数据结构不同又导致这三者的应用场景不同。<code v-pre>HashSet</code> 用于不需要保证元素插入和取出顺序的场景，<code v-pre>LinkedHashSet</code> 用于保证元素的插入和取出顺序满足 FIFO 的场景，<code v-pre>TreeSet</code> 用于支持对元素自定义排序规则的场景。</li>
</ul>
<h2 id="collection-子接口之-queue" tabindex="-1"><a class="header-anchor" href="#collection-子接口之-queue" aria-hidden="true">#</a> Collection 子接口之 Queue</h2>
<h3 id="queue-与-deque-的区别" tabindex="-1"><a class="header-anchor" href="#queue-与-deque-的区别" aria-hidden="true">#</a> Queue 与 Deque 的区别</h3>
<p><code v-pre>Queue</code> 是单端队列，只能从一端插入元素，另一端删除元素，实现上一般遵循 <strong>先进先出（FIFO）</strong> 规则。</p>
<p><code v-pre>Queue</code> 扩展了 <code v-pre>Collection</code> 的接口，根据 <strong>因为容量问题而导致操作失败后处理方式的不同</strong> 可以分为两类方法: 一种在操作失败后会抛出异常，另一种则会返回特殊值。</p>
<table>
<thead>
<tr>
<th><code v-pre>Queue</code> 接口</th>
<th>抛出异常</th>
<th>返回特殊值</th>
</tr>
</thead>
<tbody>
<tr>
<td>插入队尾</td>
<td>add(E e)</td>
<td>offer(E e)</td>
</tr>
<tr>
<td>删除队首</td>
<td>remove()</td>
<td>poll()</td>
</tr>
<tr>
<td>查询队首元素</td>
<td>element()</td>
<td>peek()</td>
</tr>
</tbody>
</table>
<p><code v-pre>Deque</code> 是双端队列，在队列的两端均可以插入或删除元素。</p>
<p><code v-pre>Deque</code> 扩展了 <code v-pre>Queue</code> 的接口, 增加了在队首和队尾进行插入和删除的方法，同样根据失败后处理方式的不同分为两类：</p>
<table>
<thead>
<tr>
<th><code v-pre>Deque</code> 接口</th>
<th>抛出异常</th>
<th>返回特殊值</th>
</tr>
</thead>
<tbody>
<tr>
<td>插入队首</td>
<td>addFirst(E e)</td>
<td>offerFirst(E e)</td>
</tr>
<tr>
<td>插入队尾</td>
<td>addLast(E e)</td>
<td>offerLast(E e)</td>
</tr>
<tr>
<td>删除队首</td>
<td>removeFirst()</td>
<td>pollFirst()</td>
</tr>
<tr>
<td>删除队尾</td>
<td>removeLast()</td>
<td>pollLast()</td>
</tr>
<tr>
<td>查询队首元素</td>
<td>getFirst()</td>
<td>peekFirst()</td>
</tr>
<tr>
<td>查询队尾元素</td>
<td>getLast()</td>
<td>peekLast()</td>
</tr>
</tbody>
</table>
<p>事实上，<code v-pre>Deque</code> 还提供有 <code v-pre>push()</code> 和 <code v-pre>pop()</code> 等其他方法，可用于模拟栈。</p>
<h3 id="arraydeque-与-linkedlist-的区别" tabindex="-1"><a class="header-anchor" href="#arraydeque-与-linkedlist-的区别" aria-hidden="true">#</a> ArrayDeque 与 LinkedList 的区别</h3>
<p><code v-pre>ArrayDeque</code> 和 <code v-pre>LinkedList</code> 都实现了 <code v-pre>Deque</code> 接口，两者都具有队列的功能，但两者有什么区别呢？</p>
<ul>
<li>
<p><code v-pre>ArrayDeque</code> 是基于可变长的数组和双指针来实现，而 <code v-pre>LinkedList</code> 则通过链表来实现。</p>
</li>
<li>
<p><code v-pre>ArrayDeque</code> 不支持存储 <code v-pre>NULL</code> 数据，但 <code v-pre>LinkedList</code> 支持。</p>
</li>
<li>
<p><code v-pre>ArrayDeque</code> 是在 JDK1.6 才被引入的，而<code v-pre>LinkedList</code> 早在 JDK1.2 时就已经存在。</p>
</li>
<li>
<p><code v-pre>ArrayDeque</code> 插入时可能存在扩容过程, 不过均摊后的插入操作依然为 O(1)。虽然 <code v-pre>LinkedList</code> 不需要扩容，但是每次插入数据时均需要申请新的堆空间，均摊性能相比更慢。</p>
</li>
</ul>
<p>从性能的角度上，选用 <code v-pre>ArrayDeque</code> 来实现队列要比 <code v-pre>LinkedList</code> 更好。此外，<code v-pre>ArrayDeque</code> 也可以用于实现栈。</p>
<h3 id="说一说-priorityqueue" tabindex="-1"><a class="header-anchor" href="#说一说-priorityqueue" aria-hidden="true">#</a> 说一说 PriorityQueue</h3>
<p><code v-pre>PriorityQueue</code> 是在 JDK1.5 中被引入的, 其与 <code v-pre>Queue</code> 的区别在于元素出队顺序是与优先级相关的，即总是优先级最高的元素先出队。</p>
<p>这里列举其相关的一些要点：</p>
<ul>
<li><code v-pre>PriorityQueue</code> 利用了二叉堆的数据结构来实现的，底层使用可变长的数组来存储数据</li>
<li><code v-pre>PriorityQueue</code> 通过堆元素的上浮和下沉，实现了在 O(logn) 的时间复杂度内插入元素和删除堆顶元素。</li>
<li><code v-pre>PriorityQueue</code> 是非线程安全的，且不支持存储 <code v-pre>NULL</code> 和 <code v-pre>non-comparable</code> 的对象。</li>
<li><code v-pre>PriorityQueue</code> 默认是小顶堆，但可以接收一个 <code v-pre>Comparator</code> 作为构造参数，从而来自定义元素优先级的先后。</li>
</ul>
<p><code v-pre>PriorityQueue</code> 在面试中可能更多的会出现在手撕算法的时候，典型例题包括堆排序、求第K大的数、带权图的遍历等，所以需要会熟练使用才行。</p>
</div></template>
