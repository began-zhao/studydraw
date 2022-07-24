<template><div><h1 id="「直击面试」——-java-集合-你肯定也会被问到这些" tabindex="-1"><a class="header-anchor" href="#「直击面试」——-java-集合-你肯定也会被问到这些" aria-hidden="true">#</a> 「直击面试」—— Java 集合，你肯定也会被问到这些</h1>
<p>作为一位小菜 ”一面面试官“，面试过程中，我肯定会问 Java 集合的内容，同时作为求职者，也肯定会被问到集合，所以整理下 Java 集合面试题</p>
<p><img src="https://i02piccdn.sogoucdn.com/fe487f455e5b1eb6" alt="" loading="lazy"></p>
<blockquote>
<p>说说常见的集合有哪些吧？</p>
<p>HashMap说一下，其中的Key需要重写hashCode()和equals()吗？</p>
<p>HashMap中key和value可以为null吗？允许几个为null呀？</p>
<p>HashMap线程安全吗?ConcurrentHashMap和hashTable有什么区别？</p>
<p>List和Set说一下，现在有一个ArrayList，对其中的所有元素按照某一属性大小排序，应该怎么做？</p>
<p>ArrayList 和 Vector 的区别</p>
<p>list 可以删除吗，遍历的时候可以删除吗，为什么</p>
</blockquote>
<p>面向对象语言对事物的体现都是以对象的形式，所以为了方便对多个对象的操作，需要将对象进行存储，集合就是存储对象最常用的一种方式，也叫容器。</p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gdp03vldkkg30hv0gzwet.gif" alt="" loading="lazy"></p>
<p>从上面的集合框架图可以看到，Java 集合框架主要包括两种类型的容器</p>
<ul>
<li>一种是集合（Collection），存储一个元素集合</li>
<li>另一种是图（Map），存储键/值对映射。</li>
</ul>
<p>Collection 接口又有 3 种子类型，List、Set 和 Queue，再下面是一些抽象类，最后是具体实现类，常用的有 ArrayList、LinkedList、HashSet、LinkedHashSet、HashMap、LinkedHashMap 等等。</p>
<p>集合框架是一个用来代表和操纵集合的统一架构。所有的集合框架都包含如下内容：</p>
<ul>
<li>
<p><strong>接口</strong>：是代表集合的抽象数据类型。例如 Collection、List、Set、Map 等。之所以定义多个接口，是为了以不同的方式操作集合对象</p>
</li>
<li>
<p><strong>实现（类）</strong>：是集合接口的具体实现。从本质上讲，它们是可重复使用的数据结构，例如：ArrayList、LinkedList、HashSet、HashMap。</p>
</li>
<li>
<p><strong>算法</strong>：是实现集合接口的对象里的方法执行的一些有用的计算，例如：搜索和排序。这些算法被称为多态，那是因为相同的方法可以在相似的接口上有着不同的实现。</p>
</li>
</ul>
<hr>
<h2 id="说说常用的集合有哪些吧" tabindex="-1"><a class="header-anchor" href="#说说常用的集合有哪些吧" aria-hidden="true">#</a> 说说常用的集合有哪些吧？</h2>
<blockquote>
<p>Collection 有什么子接口、有哪些具体的实现</p>
</blockquote>
<p>Map 接口和 Collection 接口是所有集合框架的父接口：</p>
<ol>
<li>Collection接口的子接口包括：Set、List、Queue</li>
<li>List是有序的允许有重复元素的 Collection，实现类主要有：ArrayList、LinkedList、Stack以及Vector等</li>
<li>Set是一种不包含重复元素且无序的Collection，实现类主要有：HashSet、TreeSet、LinkedHashSet等</li>
<li>Map没有继承Collection接口，Map提供key到value的映射。实现类主要有：HashMap、TreeMap、Hashtable、ConcurrentHashMap 以及 Properties 等</li>
</ol>
<h2 id="arraylist-和-vector-的区别" tabindex="-1"><a class="header-anchor" href="#arraylist-和-vector-的区别" aria-hidden="true">#</a> ArrayList 和 Vector 的区别</h2>
<p>相同点：</p>
<ul>
<li>
<p>ArrayList 和 Vector 都是继承了相同的父类和实现了相同的接口（都实现了List，有序、允许重复和null）</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">extends</span> <span class="token class-name">AbstractList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span>
        <span class="token keyword">implements</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token class-name">RandomAccess</span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>底层都是数组（Object[]）实现的</p>
</li>
<li>
<p>初始默认长度都为<strong>10</strong></p>
</li>
</ul>
<p>不同点：</p>
<ul>
<li>
<p>同步性：Vector 中的 public 方法多数添加了 synchronized 关键字、以确保方法同步、也即是 Vector 线程安全、ArrayList 线程不安全</p>
</li>
<li>
<p>性能：Vector 存在 synchronized 的锁等待情况、需要等待释放锁这个过程、所以性能相对较差</p>
</li>
<li>
<p>扩容大小：ArrayList 在底层数组不够用时在原来的基础上扩展 0.5 倍，Vector 默认是扩展 1 倍</p>
<p>扩容机制，扩容方法其实就是新创建一个数组，然后将旧数组的元素都复制到新数组里面。其底层的扩容方法都在 <strong>grow()</strong> 中（基于JDK8）</p>
<ul>
<li>
<p>ArrayList 的 grow()，在满足扩容条件时、ArrayList以<strong>1.5</strong> 倍的方式在扩容（oldCapacity &gt;&gt; <strong>1</strong> ，右移运算，相当于除以 2，结果为二分之一的 oldCapacity）</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">grow</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// overflow-conscious code</span>
    <span class="token keyword">int</span> oldCapacity <span class="token operator">=</span> elementData<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token comment">//newCapacity = oldCapacity + O.5*oldCapacity,此处扩容0.5倍</span>
    <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> oldCapacity <span class="token operator">+</span> <span class="token punctuation">(</span>oldCapacity <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> 
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">-</span> minCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        newCapacity <span class="token operator">=</span> minCapacity<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">-</span> MAX_ARRAY_SIZE <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
        newCapacity <span class="token operator">=</span> <span class="token function">hugeCapacity</span><span class="token punctuation">(</span>minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// minCapacity is usually close to size, so this is a win:</span>
    elementData <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Vector 的 grow()，Vector 比 ArrayList多一个属性，扩展因子capacityIncrement，可以扩容大小。当扩容容量增量大于<strong>0</strong>时、新数组长度为原数组长度**+<strong>扩容容量增量、否则新数组长度为原数组长度的</strong>2**倍</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">grow</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// overflow-conscious code</span>
    <span class="token keyword">int</span> oldCapacity <span class="token operator">=</span> elementData<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token comment">//</span>
    <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> oldCapacity <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>capacityIncrement <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span>
                                     capacityIncrement <span class="token operator">:</span> oldCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">-</span> minCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        newCapacity <span class="token operator">=</span> minCapacity<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">-</span> MAX_ARRAY_SIZE <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
        newCapacity <span class="token operator">=</span> <span class="token function">hugeCapacity</span><span class="token punctuation">(</span>minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    elementData <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<h2 id="arraylist-与-linkedlist-区别" tabindex="-1"><a class="header-anchor" href="#arraylist-与-linkedlist-区别" aria-hidden="true">#</a> ArrayList 与 LinkedList 区别</h2>
<ul>
<li>是否保证线程安全： ArrayList 和 LinkedList 都是不同步的，也就是不保证线程安全；</li>
<li><strong>底层数据结构</strong>： Arraylist 底层使用的是 Object 数组；LinkedList 底层使用的是<strong>双向循环链表</strong>数据结构；</li>
<li><strong>插入和删除是否受元素位置的影响：</strong>
<ul>
<li><strong>ArrayList 采用数组存储，所以插入和删除元素的时间复杂度受元素位置的影响。</strong> 比如：执行 <code v-pre>add(E e)</code>方法的时候， ArrayList 会默认在将指定的元素追加到此列表的末尾，这种情况时间复杂度就是O(1)。但是如果要在指定位置 i 插入和删除元素的话（ <code v-pre>add(intindex,E element)</code>）时间复杂度就为 O(n-i)。因为在进行上述操作的时候集合中第 i 和第 i 个元素之后的(n-i)个元素都要执行向后位/向前移一位的操作。</li>
<li><strong>LinkedList 采用链表存储，所以插入，删除元素时间复杂度不受元素位置的影响，都是近似 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span></span></span></span>，而数组为近似 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>n</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(n)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal">n</span><span class="mclose">)</span></span></span></span>。</strong></li>
<li>ArrayList 一般应用于查询较多但插入以及删除较少情况，如果插入以及删除较多则建议使用 LinkedList</li>
</ul>
</li>
<li><strong>是否支持快速随机访问</strong>： LinkedList 不支持高效的随机元素访问，而 ArrayList 实现了 RandomAccess 接口，所以有随机访问功能。快速随机访问就是通过元素的序号快速获取元素对象(对应于 <code v-pre>get(intindex)</code>方法)。</li>
<li><strong>内存空间占用</strong>： ArrayList 的空间浪费主要体现在在 list 列表的结尾会预留一定的容量空间，而 LinkedList 的空间花费则体现在它的每一个元素都需要消耗比 ArrayList 更多的空间（因为要存放直接后继和直接前驱以及数据）。</li>
</ul>
<p>高级工程师的我，可不得看看源码，具体分析下：</p>
<ul>
<li>
<p>ArrayList 工作原理其实很简单，底层是动态数组，每次创建一个 ArrayList 实例时会分配一个初始容量（没有指定初始容量的话，默认是 10），以 add 方法为例，如果没有指定初始容量，当执行 add 方法，先判断当前数组是否为空，如果为空则给保存对象的数组分配一个最小容量，默认为 10。当添加大容量元素时，会先增加数组的大小，以提高添加的效率；</p>
</li>
<li>
<p>LinkedList 是有序并且支持元素重复的集合，底层是基于双向链表的，即每个节点既包含指向其后继的引用也包括指向其前驱的引用。链表无容量限制，但双向链表本身使用了更多空间，也需要额外的链表指针操作。按下标访问元素 <code v-pre>get(i)/set(i,e)</code> 要悲剧的遍历链表将指针移动到位(如果i&gt;数组大小的一半，会从末尾移起)。插入、删除元素时修改前后节点的指针即可，但还是要遍历部分链表的指针才能移动到下标所指的位置，只有在链表两头的操作<code v-pre>add()</code>， <code v-pre>addFirst()</code>，<code v-pre>removeLast()</code>或用 <code v-pre>iterator()</code> 上的 <code v-pre>remove()</code> 能省掉指针的移动。此外 LinkedList 还实现了 Deque（继承自Queue接口）接口，可以当做队列使用。</p>
</li>
</ul>
<p>不会囊括所有方法，只是为了学习，记录思想。</p>
<p>ArrayList 和 LinkedList 两者都实现了 List 接口</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span>
        <span class="token keyword">implements</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token class-name">RandomAccess</span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LinkedList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span>
    <span class="token keyword">extends</span> <span class="token class-name">AbstractSequentialList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span>
    <span class="token keyword">implements</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token class-name">Deque</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造器" tabindex="-1"><a class="header-anchor" href="#构造器" aria-hidden="true">#</a> 构造器</h3>
<p>ArrayList 提供了 3 个构造器，①无参构造器 ②带初始容量构造器 ③参数为集合构造器</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span>
        <span class="token keyword">implements</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token class-name">RandomAccess</span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">{</span>
   
<span class="token keyword">public</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">// 创建初始容量的数组</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>elementData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>initialCapacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">this</span><span class="token punctuation">.</span>elementData <span class="token operator">=</span> EMPTY_ELEMENTDATA<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
   <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"Illegal Capacity: "</span><span class="token operator">+</span>initialCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 默认为空数组</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>elementData <span class="token operator">=</span> DEFAULTCAPACITY_EMPTY_ELEMENTDATA<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
    
<span class="token keyword">public</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">></span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//...}       </span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>LinkedList 提供了 2 个构造器，因为基于链表，所以也就没有初始化大小，也没有扩容的机制，就是一直在前面或者后面插插插~~</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">LinkedList</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">></span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">addAll</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// LinkedList 既然作为链表，那么肯定会有节点</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token class-name">E</span> item<span class="token punctuation">;</span>
    <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> next<span class="token punctuation">;</span>
    <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> prev<span class="token punctuation">;</span>

    <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> prev<span class="token punctuation">,</span> <span class="token class-name">E</span> element<span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>item <span class="token operator">=</span> element<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> prev<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插入" tabindex="-1"><a class="header-anchor" href="#插入" aria-hidden="true">#</a> 插入</h3>
<p><strong>ArrayList</strong>:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 确保数组的容量，保证可以添加该元素</span>
    <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span>size <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Increments modCount!!</span>
    <span class="token comment">// 将该元素放入数组中</span>
    elementData<span class="token punctuation">[</span>size<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果数组是空的，那么会初始化该数组</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>elementData <span class="token operator">==</span> DEFAULTCAPACITY_EMPTY_ELEMENTDATA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// DEFAULT_CAPACITY 为 10,所以调用无参默认 ArrayList 构造方法初始化的话，默认的数组容量为 10</span>
        minCapacity <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>DEFAULT_CAPACITY<span class="token punctuation">,</span> minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">ensureExplicitCapacity</span><span class="token punctuation">(</span>minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">ensureExplicitCapacity</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    modCount<span class="token operator">++</span><span class="token punctuation">;</span>

    <span class="token comment">// 确保数组的容量，如果不够的话，调用 grow 方法扩容</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>minCapacity <span class="token operator">-</span> elementData<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token function">grow</span><span class="token punctuation">(</span>minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//扩容具体的方法</span>
<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">grow</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当前数组的容量</span>
    <span class="token keyword">int</span> oldCapacity <span class="token operator">=</span> elementData<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token comment">// 新数组扩容为原来容量的 1.5 倍</span>
    <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> oldCapacity <span class="token operator">+</span> <span class="token punctuation">(</span>oldCapacity <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果新数组扩容容量还是比最少需要的容量还要小的话，就设置扩充容量为最小需要的容量</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">-</span> minCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        newCapacity <span class="token operator">=</span> minCapacity<span class="token punctuation">;</span>
    <span class="token comment">//判断新数组容量是否已经超出最大数组范围，MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">-</span> MAX_ARRAY_SIZE <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
        newCapacity <span class="token operator">=</span> <span class="token function">hugeCapacity</span><span class="token punctuation">(</span>minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// minCapacity is usually close to size, so this is a win:</span>
    <span class="token comment">// 复制元素到新的数组中</span>
    elementData <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然也可以插入指定位置，还有一个重载的方法 <code v-pre>add(int index, E element)</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token class-name">E</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断 index 有没有超出索引的范围</span>
    <span class="token function">rangeCheckForAdd</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 和之前的操作是一样的，都是保证数组的容量足够</span>
    <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span>size <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Increments modCount!!</span>
    <span class="token comment">// 将指定位置及其后面数据向后移动一位</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> index<span class="token punctuation">,</span> elementData<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
                     size <span class="token operator">-</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将该元素添加到指定的数组位置</span>
    elementData<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
    <span class="token comment">// ArrayList 的大小改变</span>
    size<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到每次插入指定位置都要移动元素，效率较低。</p>
<p>再来看 <strong>LinkedList</strong> 的插入，也有插入末尾，插入指定位置两种，由于基于链表，肯定得先有个 Node</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token class-name">E</span> item<span class="token punctuation">;</span>
    <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> next<span class="token punctuation">;</span>
    <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> prev<span class="token punctuation">;</span>

    <span class="token class-name">Node</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> prev<span class="token punctuation">,</span> <span class="token class-name">E</span> element<span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>item <span class="token operator">=</span> element<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> prev<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 直接往队尾加元素</span>
    <span class="token function">linkLast</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">linkLast</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 保存原来链表尾部节点，last 是全局变量，用来表示队尾元素</span>
    <span class="token keyword">final</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> l <span class="token operator">=</span> last<span class="token punctuation">;</span>
    <span class="token comment">// 为该元素 e 新建一个节点</span>
    <span class="token keyword">final</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> e<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将新节点设为队尾</span>
    last <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token comment">// 如果原来的队尾元素为空，那么说明原来的整个列表是空的，就把新节点赋值给头结点</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>l <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        first <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token keyword">else</span>
    <span class="token comment">// 原来尾结点的后面为新生成的结点</span>
        l<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token comment">// 节点数 +1</span>
    size<span class="token operator">++</span><span class="token punctuation">;</span>
    modCount<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token class-name">E</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 检查 index 有没有超出索引范围</span>
    <span class="token function">checkPositionIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果追加到尾部，那么就跟 add(E e) 一样了</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> size<span class="token punctuation">)</span>
        <span class="token function">linkLast</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span>
    <span class="token comment">// 否则就是插在其他位置</span>
     <span class="token function">linkBefore</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> <span class="token function">node</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//linkBefore方法中调用了这个node方法，类似二分查找的优化</span>
<span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token function">node</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// assert isElementIndex(index);</span>
    <span class="token comment">// 如果 index 在前半段，从前往后遍历获取 node</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token punctuation">(</span>size <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> x <span class="token operator">=</span> first<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> index<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            x <span class="token operator">=</span> x<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">return</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果 index 在后半段，从后往前遍历获取 node</span>
        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> x <span class="token operator">=</span> last<span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> size <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">></span> index<span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>
            x <span class="token operator">=</span> x<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
        <span class="token keyword">return</span> x<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">linkBefore</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> succ<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// assert succ != null;</span>
    <span class="token comment">// 保存 index 节点的前节点</span>
    <span class="token keyword">final</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> pred <span class="token operator">=</span> succ<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
    <span class="token comment">// 新建一个目标节点</span>
    <span class="token keyword">final</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> newNode <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>pred<span class="token punctuation">,</span> e<span class="token punctuation">,</span> succ<span class="token punctuation">)</span><span class="token punctuation">;</span>
    succ<span class="token punctuation">.</span>prev <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token comment">// 如果是在开头处插入的话</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>pred <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        first <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        pred<span class="token punctuation">.</span>next <span class="token operator">=</span> newNode<span class="token punctuation">;</span>
    size<span class="token operator">++</span><span class="token punctuation">;</span>
    modCount<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取" tabindex="-1"><a class="header-anchor" href="#获取" aria-hidden="true">#</a> 获取</h3>
<p><strong>ArrayList</strong> 的 get() 方法很简单，就是在数组中返回指定位置的元素即可，所以效率很高</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 检查 index 有没有超出索引的范围</span>
    <span class="token function">rangeCheck</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 返回指定位置的元素</span>
    <span class="token keyword">return</span> <span class="token function">elementData</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>LinkedList</strong> 的 get() 方法，就是在内部调用了上边看到的 node() 方法，判断在前半段还是在后半段，然后遍历得到即可。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">checkElementIndex</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">node</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">.</span>item<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="hash冲突及解决办法" tabindex="-1"><a class="header-anchor" href="#hash冲突及解决办法" aria-hidden="true">#</a> Hash冲突及解决办法</h2>
<p>解决哈希冲突的方法一般有：开放定址法、链地址法（拉链法）、再哈希法、建立公共溢出区等方法。</p>
<blockquote>
<ul>
<li>开放定址法：从发生冲突的那个单元起，按照一定的次序，从哈希表中找到一个空闲的单元。然后把发生冲突的元素存入到该单元的一种方法。开放定址法需要的表长度要大于等于所需要存放的元素。</li>
<li>链接地址法（拉链法）：是将哈希值相同的元素构成一个同义词的单链表，并将单链表的头指针存放在哈希表的第i个单元中，查找、插入和删除主要在同义词链表中进行。（链表法适用于经常进行插入和删除的情况）</li>
<li>再哈希法：就是同时构造多个不同的哈希函数： Hi = RHi(key)   i= 1,2,3 … k; 当H1 = RH1(key)  发生冲突时，再用H2 = RH2(key) 进行计算，直到冲突不再产生，这种方法不易产生聚集，但是增加了计算时间</li>
<li>建立公共溢出区：将哈希表分为公共表和溢出表，当溢出发生时，将所有溢出数据统一放到溢出区</li>
</ul>
</blockquote>
<h2 id="hashmap的底层实现" tabindex="-1"><a class="header-anchor" href="#hashmap的底层实现" aria-hidden="true">#</a> HashMap的底层实现</h2>
<blockquote>
<p>什么时候会使用HashMap？他有什么特点？</p>
<p>你知道HashMap的工作原理吗？</p>
<p>你知道get和put的原理吗？equals()和hashCode()的都有什么作用？</p>
<p>你知道hash的实现吗？为什么要这样实现？</p>
<p>如果HashMap的大小超过了负载因子(load factor)定义的容量，怎么办？</p>
</blockquote>
<p>HashMap 在 JDK 7 和 JDK8 中的实现方式略有不同。分开记录。</p>
<p>深入 HahsMap 之前，先要了解的概念</p>
<ol>
<li>
<p>initialCapacity：初始容量。指的是 HashMap 集合初始化的时候自身的容量。可以在构造方法中指定；如果不指定的话，总容量默认值是 16 。需要注意的是初始容量必须是 2 的幂次方。（<strong>1.7中，已知HashMap中将要存放的KV个数的时候，设置一个合理的初始化容量可以有效的提高性能</strong>）</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> DEFAULT_INITIAL_CAPACITY <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">4</span><span class="token punctuation">;</span> <span class="token comment">// aka 16</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>size：当前 HashMap 中已经存储着的键值对数量，即 <code v-pre>HashMap.size()</code> 。</p>
</li>
<li>
<p>loadFactor：加载因子。所谓的加载因子就是 HashMap (当前的容量/总容量) 到达一定值的时候，HashMap 会实施扩容。加载因子也可以通过构造方法中指定，默认的值是 0.75 。举个例子，假设有一个 HashMap 的初始容量为 16 ，那么扩容的阀值就是 0.75 * 16 = 12 。也就是说，在你打算存入第 13 个值的时候，HashMap 会先执行扩容。</p>
</li>
<li>
<p>threshold：扩容阀值。即 扩容阀值 = HashMap 总容量 * 加载因子（默认是12）。当前 HashMap 的容量大于或等于扩容阀值的时候就会去执行扩容。扩容的容量为当前 HashMap 总容量的两倍。比如，当前 HashMap 的总容量为 16 ，那么扩容之后为 32 。</p>
</li>
<li>
<p>table：Entry 数组。我们都知道 HashMap 内部存储 key/value 是通过 Entry 这个介质来实现的。而 table 就是 Entry 数组。</p>
</li>
</ol>
<h3 id="jdk1-7-实现" tabindex="-1"><a class="header-anchor" href="#jdk1-7-实现" aria-hidden="true">#</a> JDK1.7 实现</h3>
<p>JDK1.7 中 HashMap 由 <strong>数组+链表</strong> 组成（<strong>“链表散列”</strong> 即数组和链表的结合体），数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的（HashMap 采用 <strong>“拉链法也就是链地址法”</strong> 解决冲突），如果定位到的数组位置不含链表（当前 entry 的 next 指向 null ），那么对于查找，添加等操作很快，仅需一次寻址即可；如果定位到的数组包含链表，对于添加操作，其时间复杂度依然为 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span></span></span></span>，因为最新的 Entry 会插入链表头部，即需要简单改变引用链即可，而对于查找操作来讲，此时就需要遍历链表，然后通过 key 对象的 equals 方法逐一比对查找。</p>
<blockquote>
<p>所谓 <strong>“拉链法”</strong> 就是将链表和数组相结合。也就是说创建一个链表数组，数组中每一格就是一个链表。若遇到哈希冲突，则将冲突的值加到链表中即可。</p>
</blockquote>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gdx45a2fbbj31dz0oaacx.jpg" alt="" loading="lazy"></p>
<h4 id="源码解析" tabindex="-1"><a class="header-anchor" href="#源码解析" aria-hidden="true">#</a> 源码解析</h4>
<h5 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h5>
<p>《阿里巴巴 Java 开发手册》推荐集合初始化时，指定集合初始值大小。（说明：HashMap 使用HashMap(int initialCapacity) 初始化）建议原因： <a href="https://www.zhihu.com/question/314006228/answer/611170521" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/314006228/answer/611170521<ExternalLinkIcon/></a></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 默认的构造方法使用的都是默认的初始容量和加载因子</span>
<span class="token comment">// DEFAULT_INITIAL_CAPACITY = 16，DEFAULT_LOAD_FACTOR = 0.75f</span>
<span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">(</span>DEFAULT_INITIAL_CAPACITY<span class="token punctuation">,</span> DEFAULT_LOAD_FACTOR<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 可以指定初始容量，并且使用默认的加载因子</span>
<span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">,</span> DEFAULT_LOAD_FACTOR<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对初始容量的值判断</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"Illegal initial capacity: "</span> <span class="token operator">+</span>
                                           initialCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">></span> MAXIMUM_CAPACITY<span class="token punctuation">)</span>
        initialCapacity <span class="token operator">=</span> MAXIMUM_CAPACITY<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>loadFactor <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span>loadFactor<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"Illegal load factor: "</span> <span class="token operator">+</span>
                                           loadFactor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置加载因子</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>loadFactor <span class="token operator">=</span> loadFactor<span class="token punctuation">;</span>
    threshold <span class="token operator">=</span> initialCapacity<span class="token punctuation">;</span>
    <span class="token comment">// 空方法</span>
    <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">V</span><span class="token punctuation">></span></span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>m<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> DEFAULT_LOAD_FACTOR<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
                DEFAULT_INITIAL_CAPACITY<span class="token punctuation">)</span><span class="token punctuation">,</span> DEFAULT_LOAD_FACTOR<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">inflateTable</span><span class="token punctuation">(</span>threshold<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">putAllForCreate</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HashMap 的前 3 个构造方法最后都会去调用 <code v-pre>HashMap(int initialCapacity, float loadFactor)</code> 。在其内部去设置初始容量和加载因子。而最后的 <code v-pre>init()</code> 是空方法，主要给子类实现，比如LinkedHashMap。</p>
<h5 id="put-方法" tabindex="-1"><a class="header-anchor" href="#put-方法" aria-hidden="true">#</a> put() 方法</h5>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果 table 数组为空时先创建数组，并且设置扩容阀值</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>table <span class="token operator">==</span> EMPTY_TABLE<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">inflateTable</span><span class="token punctuation">(</span>threshold<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果 key 为空时，调用 putForNullKey 方法特殊处理</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token function">putForNullKey</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 计算 key 的哈希值</span>
    <span class="token keyword">int</span> hash <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 根据计算出来的哈希值和当前数组的长度计算在数组中的索引</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">indexFor</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 先遍历该数组索引下的整条链表</span>
    <span class="token comment">// 如果该 key 之前已经在 HashMap 中存储了的话，直接替换对应的 value 值即可</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e <span class="token operator">=</span> table<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> k<span class="token punctuation">;</span>
       <span class="token comment">//先判断hash值是否一样，如果一样，再判断key是否一样，不同对象的hash值可能一样</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">V</span> oldValue <span class="token operator">=</span> e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
            e<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
            e<span class="token punctuation">.</span><span class="token function">recordAccess</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    modCount<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果该 key 之前没有被存储过，那么就进入 addEntry 方法</span>
    <span class="token function">addEntry</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">addEntry</span><span class="token punctuation">(</span><span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">,</span> <span class="token keyword">int</span> bucketIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 当前容量大于或等于扩容阀值的时候，会执行扩容</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>size <span class="token operator">>=</span> threshold<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> table<span class="token punctuation">[</span>bucketIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 扩容为原来容量的两倍</span>
        <span class="token function">resize</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 重新计算哈希值</span>
        hash <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> key<span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// 重新得到在新数组中的索引</span>
        bucketIndex <span class="token operator">=</span> <span class="token function">indexFor</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 创建节点</span>
    <span class="token function">createEntry</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> bucketIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//扩容，创建了一个新的数组，然后把数据全部复制过去，再把新数组的引用赋给 table</span>
<span class="token keyword">void</span> <span class="token function">resize</span><span class="token punctuation">(</span><span class="token keyword">int</span> newCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> oldTable <span class="token operator">=</span> table<span class="token punctuation">;</span>  <span class="token comment">//引用扩容前的Entry数组</span>
    <span class="token keyword">int</span> oldCapacity <span class="token operator">=</span> oldTable<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldCapacity <span class="token operator">==</span> MAXIMUM_CAPACITY<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//扩容前的数组大小如果已经达到最大(2^30)了</span>
        threshold <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">;</span>  <span class="token comment">//修改阈值为int的最大值(2^31-1)，这样以后就不会扩容了</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 创建新的 entry 数组</span>
    <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newTable <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token punctuation">[</span>newCapacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">// 将旧 entry 数组中的数据复制到新 entry 数组中</span>
    <span class="token function">transfer</span><span class="token punctuation">(</span>newTable<span class="token punctuation">,</span> <span class="token function">initHashSeedAsNeeded</span><span class="token punctuation">(</span>newCapacity<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 将新数组的引用赋给 table</span>
    table <span class="token operator">=</span> newTable<span class="token punctuation">;</span>
    <span class="token comment">// 计算新的扩容阀值</span>
    threshold <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>newCapacity <span class="token operator">*</span> loadFactor<span class="token punctuation">,</span> MAXIMUM_CAPACITY <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newTable<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> src <span class="token operator">=</span> table<span class="token punctuation">;</span>                   <span class="token comment">//src引用了旧的Entry数组</span>
     <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> newTable<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
     <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> src<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//遍历旧的Entry数组</span>
         <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e <span class="token operator">=</span> src<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>             <span class="token comment">//取得旧Entry数组的每个元素</span>
         <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
             src<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span><span class="token comment">//释放旧Entry数组的对象引用（for循环后，旧的Entry数组不再引用任何对象）</span>
             <span class="token keyword">do</span> <span class="token punctuation">{</span>
                 <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> next <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
                 <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">indexFor</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//！！重新计算每个元素在数组中的位置</span>
                 e<span class="token punctuation">.</span>next <span class="token operator">=</span> newTable<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//标记[1]</span>
                 newTable<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>      <span class="token comment">//将元素放在数组上</span>
                 e <span class="token operator">=</span> next<span class="token punctuation">;</span>             <span class="token comment">//访问下一个Entry链上的元素</span>
             <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
     <span class="token punctuation">}</span>
<span class="token punctuation">}</span> 

<span class="token keyword">void</span> <span class="token function">createEntry</span><span class="token punctuation">(</span><span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">,</span> <span class="token keyword">int</span> bucketIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">// 取出table中下标为bucketIndex的Entry</span>
    <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e <span class="token operator">=</span> table<span class="token punctuation">[</span>bucketIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token comment">// 利用key、value来构建新的Entry</span>
   <span class="token comment">// 并且之前存放在table[bucketIndex]处的Entry作为新Entry的next</span>
   <span class="token comment">// 把新创建的Entry放到table[bucketIndex]位置</span>
    table<span class="token punctuation">[</span>bucketIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 当前 HashMap 的容量加 1</span>
    size<span class="token operator">++</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后的 <code v-pre>createEntry()</code> 方法就说明了当 hash 冲突时，采用的拉链法来解决 hash 冲突的，并且是把新元素插入到单链表的表头。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gdx45xr0x5j31hl0u0ncd.jpg" alt="" loading="lazy"></p>
<h5 id="get-方法" tabindex="-1"><a class="header-anchor" href="#get-方法" aria-hidden="true">#</a> get() 方法</h5>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果 key 是空的，就调用 getForNullKey 方法特殊处理</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token function">getForNullKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 获取 key 相对应的 entry </span>
    <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> entry <span class="token operator">=</span> <span class="token function">getEntry</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token keyword">null</span> <span class="token operator">==</span> entry <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> entry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">//找到对应 key 的数组索引，然后遍历链表查找即可</span>
<span class="token keyword">final</span> <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token function">getEntry</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 计算 key 的哈希值</span>
    <span class="token keyword">int</span> hash <span class="token operator">=</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 得到数组的索引，然后遍历链表，查看是否有相同 key 的 Entry</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e <span class="token operator">=</span> table<span class="token punctuation">[</span><span class="token function">indexFor</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> table<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
         e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
         e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span> k<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span>
            <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> e<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 没有的话，返回 null</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk1-8-实现" tabindex="-1"><a class="header-anchor" href="#jdk1-8-实现" aria-hidden="true">#</a> JDK1.8 实现</h3>
<p>JDK 1.7 中，如果哈希碰撞过多，拉链过长，极端情况下，所有值都落入了同一个桶内，这就退化成了一个链表。通过 key 值查找要遍历链表，效率较低。 JDK1.8 在解决哈希冲突时有了较大的变化，<strong>当链表长度大于阈值（默认为8）时，将链表转化为红黑树</strong>，以减少搜索时间。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gdx468uknnj31650ogjth.jpg" alt="" loading="lazy"></p>
<p>TreeMap、TreeSet 以及 JDK1.8 之后的 HashMap 底层都用到了红黑树。红黑树就是为了解决二叉查找树的缺陷，因为二叉查找树在某些情况下会退化成一个线性结构。</p>
<h4 id="源码解析-1" tabindex="-1"><a class="header-anchor" href="#源码解析-1" aria-hidden="true">#</a> 源码解析</h4>
<h5 id="构造方法-1" tabindex="-1"><a class="header-anchor" href="#构造方法-1" aria-hidden="true">#</a> 构造方法</h5>
<p>JDK8 构造方法改动不是很大</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>loadFactor <span class="token operator">=</span> DEFAULT_LOAD_FACTOR<span class="token punctuation">;</span> <span class="token comment">// all other fields defaulted</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">,</span> DEFAULT_LOAD_FACTOR<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"Illegal initial capacity: "</span> <span class="token operator">+</span>
                                       initialCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">></span> MAXIMUM_CAPACITY<span class="token punctuation">)</span>
    initialCapacity <span class="token operator">=</span> MAXIMUM_CAPACITY<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>loadFactor <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span>loadFactor<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"Illegal load factor: "</span> <span class="token operator">+</span>
                                       loadFactor<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>loadFactor <span class="token operator">=</span> loadFactor<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>threshold <span class="token operator">=</span> <span class="token function">tableSizeFor</span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">V</span><span class="token punctuation">></span></span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>loadFactor <span class="token operator">=</span> DEFAULT_LOAD_FACTOR<span class="token punctuation">;</span>
  <span class="token function">putMapEntries</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="确定哈希桶数组索引位置-hash-函数的实现" tabindex="-1"><a class="header-anchor" href="#确定哈希桶数组索引位置-hash-函数的实现" aria-hidden="true">#</a> 确定哈希桶数组索引位置（hash 函数的实现）</h5>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//方法一：</span>
<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//jdk1.8 &amp; jdk1.7</span>
 <span class="token keyword">int</span> h<span class="token punctuation">;</span>
 <span class="token comment">// h = key.hashCode() 为第一步 取hashCode值</span>
 <span class="token comment">// h ^ (h >>> 16)  为第二步 高位参与运算</span>
 <span class="token keyword">return</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token punctuation">(</span>h <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//方法二：</span>
<span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">indexFor</span><span class="token punctuation">(</span><span class="token keyword">int</span> h<span class="token punctuation">,</span> <span class="token keyword">int</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//jdk1.7的源码，jdk1.8没有提取这个方法，而是放在了其他方法中，比如 put 的p = tab[i = (n - 1) &amp; hash]</span>
 <span class="token keyword">return</span> h <span class="token operator">&amp;</span> <span class="token punctuation">(</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//第三步 取模运算</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>HashMap 定位数组索引位置，直接决定了 hash 方法的离散性能。Hash 算法本质上就是三步：<strong>取key的hashCode值、高位运算、取模运算</strong>。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gdwv5m4g4sj30ga09cdfy.jpg" alt="hash" loading="lazy"></p>
<blockquote>
<p>为什么要这样呢？</p>
</blockquote>
<h3 id="hashmap-的长度为什么是-2-的幂次方" tabindex="-1"><a class="header-anchor" href="#hashmap-的长度为什么是-2-的幂次方" aria-hidden="true">#</a> HashMap 的长度为什么是 2 的幂次方?</h3>
<p>目的当然是为了减少哈希碰撞，使 table 里的数据分布的更均匀。</p>
<ol>
<li>
<p>HashMap 中桶数组的大小 length 总是 2 的幂，此时，<code v-pre>h &amp; (table.length -1)</code> 等价于对 length 取模 <code v-pre>h%length</code>。但取模的计算效率没有位运算高，所以这是一个优化。假设 <code v-pre>h = 185</code>，<code v-pre>table.length-1 = 15(0x1111)</code>，其实散列真正生效的只是低 4bit 的有效位，所以很容易碰撞。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gdx46gac50j30m8037mxf.jpg" alt="img" loading="lazy"></p>
</li>
<li>
<p>图中的 hash 是由键的 hashCode 产生。计算余数时，由于 n 比较小，hash 只有低 4 位参与了计算，高位的计算可以认为是无效的。这样导致了计算结果只与低位信息有关，高位数据没发挥作用。为了处理这个缺陷，我们可以把上图中的 hash 高 4 位数据与低 4 位数据进行异或运算，即 <code v-pre>hash ^ (hash &gt;&gt;&gt; 4)</code>。通过这种方式，让高位数据与低位数据进行异或，以此加大低位信息的随机性，变相的让高位数据参与到计算中。此时的计算过程如下：</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gdx46jwezjj30m804cjrw.jpg" alt="img" loading="lazy"></p>
<p>在 Java 中，hashCode 方法产生的 hash 是 int 类型，32 位宽。前16位为高位，后16位为低位，所以要右移16位，即 <code v-pre>hash ^ (hash &gt;&gt;&gt; 16)</code> 。这样还增加了 hash 的复杂度，进而影响 hash 的分布性。</p>
</li>
</ol>
<p><strong>HashMap 的长度为什么是 2 的幂次方？</strong></p>
<p>为了能让 HashMap 存取高效，尽量减少碰撞，也就是要尽量把数据分配均匀，Hash值的范围是 -2147483648 到 2147483647，前后加起来有 40 亿的映射空间，只要哈希函数映射的比较均匀松散，一般应用是很难出现碰撞的，但一个问题是 40 亿的数组内存是放不下的。所以这个散列值是不能直接拿来用的。用之前需要先对数组长度取模运算，得到余数才能用来存放位置也就是对应的数组小标。这个数组下标的计算方法是 <code v-pre>(n-1)&amp;hash</code>，n 代表数组长度。</p>
<p>这个算法应该如何设计呢？</p>
<p>我们首先可能会想到采用%取余的操作来实现。但是，重点来了。</p>
<p><strong>取余操作中如果除数是2的幂次则等价于其除数减一的与操作</strong>，也就是说 <code v-pre>hash%length=hash&amp;(length-1)</code>，但前提是 length 是 2 的 n 次方，并且采用 &amp; 运算比 % 运算效率高，这也就解释了 HashMap 的长度为什么是 2 的幂次方。</p>
<h5 id="get-方法-1" tabindex="-1"><a class="header-anchor" href="#get-方法-1" aria-hidden="true">#</a> get() 方法</h5>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>e <span class="token operator">=</span> <span class="token function">getNode</span><span class="token punctuation">(</span><span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">final</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token function">getNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab<span class="token punctuation">;</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> first<span class="token punctuation">,</span> e<span class="token punctuation">;</span> <span class="token keyword">int</span> n<span class="token punctuation">;</span> <span class="token class-name">K</span> k<span class="token punctuation">;</span>
  <span class="token comment">//定位键值对所在桶的位置</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>tab <span class="token operator">=</span> table<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
      <span class="token punctuation">(</span>first <span class="token operator">=</span> tab<span class="token punctuation">[</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> hash<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 直接命中</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>first<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span> <span class="token comment">// always check first node</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> first<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> first<span class="token punctuation">;</span>
    <span class="token comment">// 未命中</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e <span class="token operator">=</span> first<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 如果 first 是 TreeNode 类型，则调用黑红树查找方法</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token keyword">instanceof</span> <span class="token class-name">TreeNode</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>first<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTreeNode</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">do</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在链表中查找</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span>
            <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> e<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="put-方法-1" tabindex="-1"><a class="header-anchor" href="#put-方法-1" aria-hidden="true">#</a> put() 方法</h5>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gdx470vyzej311c0u0120.jpg" alt="" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 对key的hashCode()做hash</span>
  <span class="token keyword">return</span> <span class="token function">putVal</span><span class="token punctuation">(</span><span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">final</span> <span class="token class-name">V</span> <span class="token function">putVal</span><span class="token punctuation">(</span><span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">,</span> <span class="token keyword">boolean</span> onlyIfAbsent<span class="token punctuation">,</span>
               <span class="token keyword">boolean</span> evict<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab<span class="token punctuation">;</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> p<span class="token punctuation">;</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> i<span class="token punctuation">;</span>
  <span class="token comment">// tab为空则创建</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>tab <span class="token operator">=</span> table<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token punctuation">(</span>n <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
    n <span class="token operator">=</span> <span class="token punctuation">(</span>tab <span class="token operator">=</span> <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token comment">// 计算index，并对null做处理</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>p <span class="token operator">=</span> tab<span class="token punctuation">[</span>i <span class="token operator">=</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> hash<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    tab<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">newNode</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e<span class="token punctuation">;</span> <span class="token class-name">K</span> k<span class="token punctuation">;</span>
    <span class="token comment">// 节点key存在，直接覆盖value</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> p<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      e <span class="token operator">=</span> p<span class="token punctuation">;</span>
    <span class="token comment">// 判断该链为红黑树</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token keyword">instanceof</span> <span class="token class-name">TreeNode</span><span class="token punctuation">)</span>
      e <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putTreeVal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> tab<span class="token punctuation">,</span> hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token comment">//该链为链表</span>
      <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> binCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">;</span> <span class="token operator">++</span>binCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          p<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">newNode</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">//链表长度大于8转换为红黑树进行处理</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>binCount <span class="token operator">>=</span> TREEIFY_THRESHOLD <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// -1 for 1st</span>
            <span class="token function">treeifyBin</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> hash<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//key已经存在直接覆盖value</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span>
            <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token keyword">break</span><span class="token punctuation">;</span>
        p <span class="token operator">=</span> e<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// existing mapping for key</span>
      <span class="token class-name">V</span> oldValue <span class="token operator">=</span> e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>onlyIfAbsent <span class="token operator">||</span> oldValue <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        e<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
      <span class="token function">afterNodeAccess</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token operator">++</span>modCount<span class="token punctuation">;</span>
  <span class="token comment">// 超过最大容量 就扩容</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>size <span class="token operator">></span> threshold<span class="token punctuation">)</span>
    <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">afterNodeInsertion</span><span class="token punctuation">(</span>evict<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>HashMap 的 put 方法的具体流程？</p>
</blockquote>
<p>①.判断键值对数组table[i]是否为空或为null，否则执行resize()进行扩容；</p>
<p>②.根据键值key计算hash值得到插入的数组索引i，如果table[i]==null，直接新建节点添加，转向⑥，如果table[i]不为空，转向③；</p>
<p>③.判断table[i]的首个元素是否和key一样，如果相同直接覆盖value，否则转向④，这里的相同指的是hashCode以及equals；</p>
<p>④.判断table[i] 是否为treeNode，即table[i] 是否是红黑树，如果是红黑树，则直接在树中插入键值对，否则转向⑤；</p>
<p>⑤.遍历table[i]，判断链表长度是否大于8（还会判断数组长度是否大于等于64），大于8的话把链表转换为红黑树，在红黑树中执行插入操作，否则进行链表的插入操作；遍历过程中若发现key已经存在直接覆盖value即可；</p>
<p>⑥.插入成功后，判断实际存在的键值对数量size是否超多了最大容量threshold，如果超过，进行扩容。</p>
<h5 id="resize-扩容" tabindex="-1"><a class="header-anchor" href="#resize-扩容" aria-hidden="true">#</a> resize() 扩容</h5>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> oldTab <span class="token operator">=</span> table<span class="token punctuation">;</span>
  <span class="token keyword">int</span> oldCap <span class="token operator">=</span> <span class="token punctuation">(</span>oldTab <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> oldTab<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
  <span class="token keyword">int</span> oldThr <span class="token operator">=</span> threshold<span class="token punctuation">;</span>
  <span class="token keyword">int</span> newCap<span class="token punctuation">,</span> newThr <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>oldCap <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 超过最大值就不再扩充了，就只好随你碰撞了</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>oldCap <span class="token operator">>=</span> MAXIMUM_CAPACITY<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//修改阈值为int的最大值(2^31-1)，这样以后就不会扩容了</span>
      threshold <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">;</span>
      <span class="token keyword">return</span> oldTab<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
     <span class="token comment">// 没超过最大值，就扩充为原来的2倍</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>newCap <span class="token operator">=</span> oldCap <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> MAXIMUM_CAPACITY <span class="token operator">&amp;&amp;</span>
             oldCap <span class="token operator">>=</span> DEFAULT_INITIAL_CAPACITY<span class="token punctuation">)</span>
      newThr <span class="token operator">=</span> oldThr <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// double threshold</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>oldThr <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// initial capacity was placed in threshold</span>
    newCap <span class="token operator">=</span> oldThr<span class="token punctuation">;</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>               <span class="token comment">// zero initial threshold signifies using defaults</span>
    newCap <span class="token operator">=</span> DEFAULT_INITIAL_CAPACITY<span class="token punctuation">;</span>
    newThr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span>DEFAULT_LOAD_FACTOR <span class="token operator">*</span> DEFAULT_INITIAL_CAPACITY<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 计算新的resize上限</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>newThr <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">float</span> ft <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span>newCap <span class="token operator">*</span> loadFactor<span class="token punctuation">;</span>
    newThr <span class="token operator">=</span> <span class="token punctuation">(</span>newCap <span class="token operator">&lt;</span> MAXIMUM_CAPACITY <span class="token operator">&amp;&amp;</span> ft <span class="token operator">&lt;</span> <span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">)</span>MAXIMUM_CAPACITY <span class="token operator">?</span>
              <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>ft <span class="token operator">:</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  threshold <span class="token operator">=</span> newThr<span class="token punctuation">;</span>
  <span class="token comment">// 开始复制到新的数组</span>
  <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"rawtypes"</span><span class="token punctuation">,</span><span class="token string">"unchecked"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> newTab <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">[</span>newCap<span class="token punctuation">]</span><span class="token punctuation">;</span>
  table <span class="token operator">=</span> newTab<span class="token punctuation">;</span>
  <span class="token comment">// 把每个bucket都移动到新的buckets中</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>oldTab <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//  循环遍历旧的 table 数组</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> oldCap<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e <span class="token operator">=</span> oldTab<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        oldTab<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">//  如果该桶只有一个元素，那么直接复制</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>next <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
          newTab<span class="token punctuation">[</span>e<span class="token punctuation">.</span>hash <span class="token operator">&amp;</span> <span class="token punctuation">(</span>newCap <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
        <span class="token comment">// 如果是红黑树，那么对红黑树进行拆分</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token keyword">instanceof</span> <span class="token class-name">TreeNode</span><span class="token punctuation">)</span>
          <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>e<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> newTab<span class="token punctuation">,</span> j<span class="token punctuation">,</span> oldCap<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//  遍历链表，将原链表节点分成lo和hi两个链表</span>
         <span class="token comment">// 其中 lo 表示在原来的桶位置，hi 表示在新的桶位置</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span> <span class="token comment">// preserve order  链表优化重hash的代码块</span>
          <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> loHead <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> loTail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
          <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> hiHead <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> hiTail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
          <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> next<span class="token punctuation">;</span>
          <span class="token keyword">do</span> <span class="token punctuation">{</span>
            <span class="token comment">// 原索引</span>
            next <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">&amp;</span> oldCap<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>loTail <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                loHead <span class="token operator">=</span> e<span class="token punctuation">;</span>
              <span class="token keyword">else</span>
                loTail<span class="token punctuation">.</span>next <span class="token operator">=</span> e<span class="token punctuation">;</span>
              loTail <span class="token operator">=</span> e<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 原索引+oldCap</span>
            <span class="token keyword">else</span> <span class="token punctuation">{</span>
              <span class="token keyword">if</span> <span class="token punctuation">(</span>hiTail <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                hiHead <span class="token operator">=</span> e<span class="token punctuation">;</span>
              <span class="token keyword">else</span>
                hiTail<span class="token punctuation">.</span>next <span class="token operator">=</span> e<span class="token punctuation">;</span>
              hiTail <span class="token operator">=</span> e<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e <span class="token operator">=</span> next<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token comment">// 原索引放到bucket里</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>loTail <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            loTail<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            newTab<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> loHead<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
          <span class="token comment">// 原索引+oldCap放到bucket里</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>hiTail <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            hiTail<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            newTab<span class="token punctuation">[</span>j <span class="token operator">+</span> oldCap<span class="token punctuation">]</span> <span class="token operator">=</span> hiHead<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> newTab<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hashmap的扩容操作是怎么实现的" tabindex="-1"><a class="header-anchor" href="#hashmap的扩容操作是怎么实现的" aria-hidden="true">#</a> HashMap的扩容操作是怎么实现的？</h3>
<ol>
<li>在 jdk1.8 中，resize 方法是在 HashMap 中的键值对大于阀值时或者初始化时，就调用 resize 方法进行扩容；</li>
<li>每次扩展的时候，都是扩展 2 倍；</li>
<li>扩展后 Node 对象的位置要么在原位置，要么移动到原偏移量两倍的位置。</li>
</ol>
<p>在 <code v-pre>putVal()</code> 中，我们看到在这个函数里面使用到了2次 <code v-pre>resize()</code> 方法，<code v-pre>resize()</code> 方法表示在进行第一次初始化时会对其进行扩容，或者当该数组的实际大小大于其扩容阈值（第一次为0.75 * 16 = 12），这个时候在扩容的同时也会伴随的桶上面的元素进行重新分发，这也是JDK1.8版本的一个优化的地方，在1.7中，扩容之后需要重新去计算其Hash值，根据Hash值对其进行分发，但在1.8 版本中，则是根据在同一个桶的位置中进行判断(e.hash &amp; oldCap)是否为0，重新进行hash分配后，该元素的位置要么停留在原始位置，要么移动到原始位置+增加的数组大小这个位置上</p>
<h5 id="链表树化" tabindex="-1"><a class="header-anchor" href="#链表树化" aria-hidden="true">#</a> 链表树化</h5>
<p>当桶中链表长度超过 TREEIFY_THRESHOLD（默认为8）时，就会调用 treeifyBin 方法进行树化操作。但此时并不一定会树化，因为在 treeifyBin 方法中还会判断 HashMap 的容量是否大于等于 64。如果容量大于等于 64，那么进行树化，否则优先进行扩容。</p>
<p>为什么树化还要判断整体容量是否大于 64 呢？</p>
<p>当桶数组容量比较小时，键值对节点 hash 的碰撞率可能会比较高，进而导致链表长度较长，从而导致查询效率低下。这时候我们有两种选择，一种是扩容，让哈希碰撞率低一些。另一种是树化，提高查询效率。</p>
<p>如果我们采用扩容，那么我们需要做的就是做一次链表数据的复制。而如果我们采用树化，那么我们需要将链表转化成红黑树。到这里，貌似没有什么太大的区别，但我们让场景继续延伸下去。当插入的数据越来越多，我们会发现需要转化成树的链表越来越多。</p>
<p>到了一定容量，我们就需要进行扩容了。这个时候我们有许多树化的红黑树，在扩容之时，我们需要将许多的红黑树拆分成链表，这是一个挺大的成本。而如果我们在容量小的时候就进行扩容，那么需要树化的链表就越少，我们扩容的成本也就越低。</p>
<p>接下来我们看看链表树化是怎么做的：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">treeifyBin</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab<span class="token punctuation">,</span> <span class="token keyword">int</span> hash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">,</span> index<span class="token punctuation">;</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e<span class="token punctuation">;</span>
    <span class="token comment">// 1. 容量小于 MIN_TREEIFY_CAPACITY，优先扩容</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>tab <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token punctuation">(</span>n <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">&lt;</span> MIN_TREEIFY_CAPACITY<span class="token punctuation">)</span>
        <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 2. 桶不为空，那么进行树化操作</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e <span class="token operator">=</span> tab<span class="token punctuation">[</span>index <span class="token operator">=</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> hash<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> hd <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> tl <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.1 先将链表转成 TreeNode 表示的双向链表</span>
        <span class="token keyword">do</span> <span class="token punctuation">{</span>
            <span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> p <span class="token operator">=</span> <span class="token function">replacementTreeNode</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>tl <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                hd <span class="token operator">=</span> p<span class="token punctuation">;</span>
            <span class="token keyword">else</span> <span class="token punctuation">{</span>
                p<span class="token punctuation">.</span>prev <span class="token operator">=</span> tl<span class="token punctuation">;</span>
                tl<span class="token punctuation">.</span>next <span class="token operator">=</span> p<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            tl <span class="token operator">=</span> p<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2.2 将 TreeNode 表示的双向链表树化</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>tab<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> hd<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            hd<span class="token punctuation">.</span><span class="token function">treeify</span><span class="token punctuation">(</span>tab<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到链表树化的整体思路也比较清晰。首先将链表转成 TreeNode 表示的双向链表，之后再调用 <code v-pre>treeify()</code> 方法进行树化操作。那么我们继续看看 <code v-pre>treeify()</code> 方法的实现。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">treeify</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> root <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 1. 遍历双向 TreeNode 链表，将 TreeNode 节点一个个插入</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> x <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">,</span> next<span class="token punctuation">;</span> x <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> x <span class="token operator">=</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        next <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>x<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        x<span class="token punctuation">.</span>left <span class="token operator">=</span> x<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">// 2. 如果 root 节点为空，那么直接将 x 节点设置为根节点</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            x<span class="token punctuation">.</span>parent <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
            x<span class="token punctuation">.</span>red <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            root <span class="token operator">=</span> x<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">K</span> k <span class="token operator">=</span> x<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
            <span class="token keyword">int</span> h <span class="token operator">=</span> x<span class="token punctuation">.</span>hash<span class="token punctuation">;</span>
            <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> kc <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>            
            <span class="token comment">// 3. 如果 root 节点不为空，那么进行比较并在合适的地方插入</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> p <span class="token operator">=</span> root<span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> dir<span class="token punctuation">,</span> ph<span class="token punctuation">;</span>
                <span class="token class-name">K</span> pk <span class="token operator">=</span> p<span class="token punctuation">.</span>key<span class="token punctuation">;</span>
                <span class="token comment">// 4. 计算 dir 值，-1 表示要从左子树查找插入点，1表示从右子树</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>ph <span class="token operator">=</span> p<span class="token punctuation">.</span>hash<span class="token punctuation">)</span> <span class="token operator">></span> h<span class="token punctuation">)</span>
                    dir <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>ph <span class="token operator">&lt;</span> h<span class="token punctuation">)</span>
                    dir <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>kc <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
                          <span class="token punctuation">(</span>kc <span class="token operator">=</span> <span class="token function">comparableClassFor</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">||</span>
                         <span class="token punctuation">(</span>dir <span class="token operator">=</span> <span class="token function">compareComparables</span><span class="token punctuation">(</span>kc<span class="token punctuation">,</span> k<span class="token punctuation">,</span> pk<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
                    dir <span class="token operator">=</span> <span class="token function">tieBreakOrder</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> pk<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> xp <span class="token operator">=</span> p<span class="token punctuation">;</span>
                <span class="token comment">// 5. 如果查找到一个 p 点，这个点是叶子节点</span>
                <span class="token comment">// 那么这个就是插入位置</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>p <span class="token operator">=</span> <span class="token punctuation">(</span>dir <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> p<span class="token punctuation">.</span>left <span class="token operator">:</span> p<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    x<span class="token punctuation">.</span>parent <span class="token operator">=</span> xp<span class="token punctuation">;</span>   
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>dir <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
                        xp<span class="token punctuation">.</span>left <span class="token operator">=</span> x<span class="token punctuation">;</span>
                    <span class="token keyword">else</span>
                        xp<span class="token punctuation">.</span>right <span class="token operator">=</span> x<span class="token punctuation">;</span>
                    <span class="token comment">// 做插入后的动平衡</span>
                    root <span class="token operator">=</span> <span class="token function">balanceInsertion</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 6.将 root 节点移动到链表头</span>
    <span class="token function">moveRootToFront</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> root<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面代码可以看到，treeify() 方法其实就是将双向 TreeNode 链表进一步树化成红黑树。其中大致的步骤为：</p>
<ul>
<li>遍历 TreeNode 双向链表，将 TreeNode 节点一个个插入</li>
<li>如果 root 节点为空，那么表示红黑树现在为空，直接将该节点作为根节点。否则需要查找到合适的位置去插入 TreeNode 节点。</li>
<li>通过比较与 root 节点的位置，不断寻找最合适的点。如果最终该节点的叶子节点为空，那么该节点 p 就是插入节点的父节点。接着，将 x 节点的 parent 引用指向 xp 节点，xp 节点的左子节点或右子节点指向 x 节点。</li>
<li>接着，调用 balanceInsertion 做一次动态平衡。</li>
<li>最后，调用 moveRootToFront 方法将 root 节点移动到链表头。</li>
</ul>
<p>关于 balanceInsertion() 动平衡可以参考红黑树的插入动平衡，这里暂不深入讲解。最后我们继续看看 moveRootToFront 方法。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token keyword">void</span> <span class="token function">moveRootToFront</span><span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab<span class="token punctuation">,</span> <span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> root<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> tab <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> root<span class="token punctuation">.</span>hash<span class="token punctuation">;</span>
        <span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> first <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>tab<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果插入红黑树的 root 节点不是链表的第一个元素</span>
        <span class="token comment">// 那么将 root 节点取出来，插在 first 节点前面</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">!=</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> rn<span class="token punctuation">;</span>
            tab<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> root<span class="token punctuation">;</span>
            <span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> rp <span class="token operator">=</span> root<span class="token punctuation">.</span>prev<span class="token punctuation">;</span>
            <span class="token comment">// 下面的两个 if 语句，做的事情是将 root 节点取出来</span>
            <span class="token comment">// 让 root 节点的前继指向其后继节点</span>
            <span class="token comment">// 让 root 节点的后继指向其前继节点</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>rn <span class="token operator">=</span> root<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>rn<span class="token punctuation">)</span><span class="token punctuation">.</span>prev <span class="token operator">=</span> rp<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>rp <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                rp<span class="token punctuation">.</span>next <span class="token operator">=</span> rn<span class="token punctuation">;</span>
            <span class="token comment">// 这里直接让 root 节点插入到 first 节点前方</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                first<span class="token punctuation">.</span>prev <span class="token operator">=</span> root<span class="token punctuation">;</span>
            root<span class="token punctuation">.</span>next <span class="token operator">=</span> first<span class="token punctuation">;</span>
            root<span class="token punctuation">.</span>prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">assert</span> <span class="token function">checkInvariants</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="红黑树拆分" tabindex="-1"><a class="header-anchor" href="#红黑树拆分" aria-hidden="true">#</a> 红黑树拆分</h5>
<p>扩容后，普通节点需要重新映射，红黑树节点也不例外。按照一般的思路，我们可以先把红黑树转成链表，之后再重新映射链表即可。但因为红黑树插入的时候，TreeNode 保存了元素插入的顺序，所以直接可以按照插入顺序还原成链表。这样就避免了将红黑树转成链表后再进行哈希映射，无形中提高了效率。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">split</span><span class="token punctuation">(</span><span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> map<span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token keyword">int</span> bit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> b <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token comment">// Relink into lo and hi lists, preserving order</span>
    <span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> loHead <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> loTail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> hiHead <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> hiTail <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> lc <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> hc <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 1. 将红黑树当成是一个 TreeNode 组成的双向链表</span>
    <span class="token comment">// 按照链表扩容一样，分别放入 loHead 和 hiHead 开头的链表中</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e <span class="token operator">=</span> b<span class="token punctuation">,</span> next<span class="token punctuation">;</span> e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> e <span class="token operator">=</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        next <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>e<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        e<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">// 1.1. 扩容后的位置不变，还是原来的位置，该节点放入 loHead 链表</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">&amp;</span> bit<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>prev <span class="token operator">=</span> loTail<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                loHead <span class="token operator">=</span> e<span class="token punctuation">;</span>
            <span class="token keyword">else</span>
                loTail<span class="token punctuation">.</span>next <span class="token operator">=</span> e<span class="token punctuation">;</span>
            loTail <span class="token operator">=</span> e<span class="token punctuation">;</span>
            <span class="token operator">++</span>lc<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 1.2 扩容后的位置改变了，放入 hiHead 链表</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>prev <span class="token operator">=</span> hiTail<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                hiHead <span class="token operator">=</span> e<span class="token punctuation">;</span>
            <span class="token keyword">else</span>
                hiTail<span class="token punctuation">.</span>next <span class="token operator">=</span> e<span class="token punctuation">;</span>
            hiTail <span class="token operator">=</span> e<span class="token punctuation">;</span>
            <span class="token operator">++</span>hc<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 2. 对 loHead 和 hiHead 进行树化或链表化</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>loHead <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 2.1 如果链表长度小于阈值，那就链表化，否则树化</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>lc <span class="token operator">&lt;=</span> UNTREEIFY_THRESHOLD<span class="token punctuation">)</span>
            tab<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> loHead<span class="token punctuation">.</span><span class="token function">untreeify</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            tab<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> loHead<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>hiHead <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// (else is already treeified)</span>
                loHead<span class="token punctuation">.</span><span class="token function">treeify</span><span class="token punctuation">(</span>tab<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>hiHead <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>hc <span class="token operator">&lt;=</span> UNTREEIFY_THRESHOLD<span class="token punctuation">)</span>
            tab<span class="token punctuation">[</span>index <span class="token operator">+</span> bit<span class="token punctuation">]</span> <span class="token operator">=</span> hiHead<span class="token punctuation">.</span><span class="token function">untreeify</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
            tab<span class="token punctuation">[</span>index <span class="token operator">+</span> bit<span class="token punctuation">]</span> <span class="token operator">=</span> hiHead<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>loHead <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                hiHead<span class="token punctuation">.</span><span class="token function">treeify</span><span class="token punctuation">(</span>tab<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的代码我们知道红黑树的扩容也和链表的转移是一样的，不同的是其转化成 hiHead 和 loHead 之后，会根据链表长度选择拆分成链表还是继承维持红黑树的结构。</p>
<h5 id="红黑树链化" tabindex="-1"><a class="header-anchor" href="#红黑树链化" aria-hidden="true">#</a> 红黑树链化</h5>
<p>我们在说到红黑树拆分的时候说到，红黑树结构在扩容的时候如果长度低于阈值，那么就会将其转化成链表。其实现代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token function">untreeify</span><span class="token punctuation">(</span><span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> map<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> hd <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">,</span> tl <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> q <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> q <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> q <span class="token operator">=</span> q<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> p <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">replacementNode</span><span class="token punctuation">(</span>q<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tl <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            hd <span class="token operator">=</span> p<span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            tl<span class="token punctuation">.</span>next <span class="token operator">=</span> p<span class="token punctuation">;</span>
        tl <span class="token operator">=</span> p<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> hd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为红黑树中包含了插入元素的顺序，所以当我们将红黑树拆分成两个链表 hiHead 和 loHead 时，其还是保持着原来的顺序的。所以此时我们只需要循环遍历一遍，然后将 TreeNode 节点换成 Node 节点即可。</p>
<h3 id="为什么jdk1-8中hashmap从头插入改成尾插入" tabindex="-1"><a class="header-anchor" href="#为什么jdk1-8中hashmap从头插入改成尾插入" aria-hidden="true">#</a> 为什么JDK1.8中HashMap从头插入改成尾插入</h3>
<p>JDK1.7中扩容时，每个元素的rehash之后，都会插入到新数组对应索引的链表头，所以这就导致原链表顺序为A-&gt;B-&gt;C，扩容之后，rehash之后的链表可能为C-&gt;B-&gt;A，元素的顺序发生了变化。在并发场景下，<strong>扩容时</strong>可能会出现循环链表的情况。而JDK1.8从头插入改成尾插入元素的顺序不变，避免出现循环链表的情况</p>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h38x7ejwejj20u00bjmxd.jpg" alt="" loading="lazy"></p>
<blockquote>
<p>在扩容时，头插法会改变链表中元素原本的顺序，以至于在并发场景下导致链表成环的问题，而尾插法，在扩容时会保持链表元素原本的顺序，就不会出现链表成环的问题</p>
<h3 id="死循环执行步骤1" tabindex="-1"><a class="header-anchor" href="#死循环执行步骤1" aria-hidden="true">#</a> 死循环执行步骤1</h3>
<p>死循环是因为并发 HashMap 扩容导致的，并发扩容的第一步，线程 T1 和线程 T2 要对 HashMap 进行扩容操作，此时 T1 和 T2 指向的是链表的头结点元素 A，而 T1 和 T2 的下一个节点，也就是 T1.next 和 T2.next 指向的是 B 节点，如下图所示：</p>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h38x6z1svnj20ps0ingm2.jpg" alt="" loading="lazy"></p>
<h3 id="死循环执行步骤2" tabindex="-1"><a class="header-anchor" href="#死循环执行步骤2" aria-hidden="true">#</a> 死循环执行步骤2</h3>
<p>死循环的第二步操作是，线程 T2 时间片用完进入休眠状态，而线程 T1 开始执行扩容操作，一直到线程 T1 扩容完成后，线程 T2 才被唤醒，扩容之后的场景如下图所示：图片从上图可知线程 T1 执行之后，因为是头插法，所以 HashMap 的顺序已经发生了改变，但线程 T2 对于发生的一切是不可知的，所以它的指向元素依然没变，如上图展示的那样，T2 指向的是 A 元素，T2.next 指向的节点是 B 元素。</p>
<h3 id="死循环执行步骤3" tabindex="-1"><a class="header-anchor" href="#死循环执行步骤3" aria-hidden="true">#</a> 死循环执行步骤3</h3>
<p>当线程 T1 执行完，而线程 T2 恢复执行时，死循环就建立了，如下图所示：</p>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h38x6gq48cj20rw0iwwew.jpg" alt="" loading="lazy"></p>
<p>因为 T1 执行完扩容之后 B 节点的下一个节点是 A，而 T2 线程指向的首节点是 A，第二个节点是 B，这个顺序刚好和 T1 扩完容完之后的节点顺序是相反的。T1 执行完之后的顺序是 B 到 A，而 T2 的顺序是 A 到 B，这样 A 节点和 B 节点就形成死循环了，这就是 HashMap 死循环导致的原因。</p>
</blockquote>
<h3 id="hashmap-为什么线程不安全" tabindex="-1"><a class="header-anchor" href="#hashmap-为什么线程不安全" aria-hidden="true">#</a> HashMap 为什么线程不安全</h3>
<ol>
<li>
<p>put 的时候导致的多线程数据不一致。
这个问题比较好想象，比如有两个线程 A 和 B，首先 A 希望插入一个 key-value 对到 HashMap 中，首先计算记录所要落到的桶的索引坐标，然后获取到该桶里面的链表头结点，此时线程 A 的时间片用完了，而此时线程 B 被调度得以执行，和线程 A 一样执行，只不过线程 B 成功将记录插到了桶里面，假设线程 A 插入的记录计算出来的桶索引和线程 B 要插入的记录计算出来的桶索引是一样的，那么当线程 B 成功插入之后，线程 A 再次被调度运行时，它依然持有过期的链表头但是它对此一无所知，以至于它认为它应该这样做，如此一来就覆盖了线程 B 插入的记录，这样线程 B 插入的记录就凭空消失了，造成了数据不一致的行为。</p>
</li>
<li>
<p>另外一个比较明显的线程不安全的问题是 HashMap 的 get 操作可能因为 resize 而引起死循环（cpu100%），具体分析如下：</p>
<p>下面的代码是resize的核心内容：</p>
</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">transfer</span><span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newTable<span class="token punctuation">,</span> <span class="token keyword">boolean</span> rehash<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
        <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> newTable<span class="token punctuation">.</span>length<span class="token punctuation">;</span>  
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e <span class="token operator">:</span> table<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
  
            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token keyword">null</span> <span class="token operator">!=</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                <span class="token class-name">Entry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> next <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">;</span>           
                <span class="token keyword">if</span> <span class="token punctuation">(</span>rehash<span class="token punctuation">)</span> <span class="token punctuation">{</span>  
                    e<span class="token punctuation">.</span>hash <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token operator">==</span> e<span class="token punctuation">.</span>key <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token function">hash</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>  
                <span class="token punctuation">}</span>  
                <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token function">indexFor</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>   
                e<span class="token punctuation">.</span>next <span class="token operator">=</span> newTable<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>  
                newTable<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>  
                e <span class="token operator">=</span> next<span class="token punctuation">;</span>  
            <span class="token punctuation">}</span> 
        <span class="token punctuation">}</span>  
    <span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体原因如上题</p>
<h3 id="hashmap-jdk1-7-vs-jdk1-8" tabindex="-1"><a class="header-anchor" href="#hashmap-jdk1-7-vs-jdk1-8" aria-hidden="true">#</a> HashMap：JDK1.7 VS JDK1.8</h3>
<p>JDK1.8主要解决或优化了以下问题：</p>
<ul>
<li>resize 扩容优化</li>
<li>引入了红黑树，目的是避免单条链表过长而影响查询效率</li>
<li>解决了多线程死循环问题，但仍是非线程安全的，多线程时可能会造成数据丢失问题</li>
</ul>
<table>
<thead>
<tr>
<th>不同</th>
<th>JDK 1.7</th>
<th>JDK 1.8</th>
</tr>
</thead>
<tbody>
<tr>
<td>存储结构</td>
<td>数组 + 链表</td>
<td>数组 + 链表 + 红黑树</td>
</tr>
<tr>
<td>初始化方式</td>
<td>单独函数：inflateTable()</td>
<td>直接集成到了扩容函数resize()中</td>
</tr>
<tr>
<td>hash值计算方式</td>
<td>扰动处理 = 9次扰动 = 4次位运算 + 5次异或运算</td>
<td>扰动处理 = 2次扰动 = 1次位运算 + 1次异或运算</td>
</tr>
<tr>
<td>存放数据的规则</td>
<td>无冲突时，存放数组；冲突时，存放链表</td>
<td>无冲突时，存放数组；冲突 &amp; 链表长度 &lt; 8：存放单链表；冲突 &amp; 链表长度 &gt; 8：树化并存放红黑树</td>
</tr>
<tr>
<td>插入数据方式</td>
<td>头插法（先将原位置的数据移到后1位，再插入数据到该位置）</td>
<td>尾插法（直接插入到链表尾部/红黑树）</td>
</tr>
<tr>
<td>扩容后存储位置的计算方式</td>
<td>全部按照原来方法进行计算（即hashCode -&gt;&gt; 扰动函数 -&gt;&gt; (h&amp;length-1)）</td>
<td>按照扩容后的规律计算（即扩容后的位置=原位置 or 原位置 + 旧容量</td>
</tr>
</tbody>
</table>
<hr>
<h2 id="hashtable" tabindex="-1"><a class="header-anchor" href="#hashtable" aria-hidden="true">#</a> Hashtable</h2>
<p>Hashtable 和 HashMap 都是散列表，也是用”拉链法“实现的哈希表。保存数据和 JDK7 中的 HashMap 一样，是 Entity 对象，只是 Hashtable 中的几乎所有的 public 方法都是 synchronized 的，而有些方法也是在内部通过 synchronized 代码块来实现，效率肯定会降低。且 put() 方法不允许空值。</p>
<h3 id="hashmap-和-hashtable-的区别" tabindex="-1"><a class="header-anchor" href="#hashmap-和-hashtable-的区别" aria-hidden="true">#</a> HashMap 和 Hashtable 的区别</h3>
<ol>
<li>
<p><strong>线程是否安全：</strong> HashMap 是非线程安全的，HashTable 是线程安全的；HashTable 内部的方法基本都经过 <code v-pre>synchronized</code> 修饰。（如果你要保证线程安全的话就使用 ConcurrentHashMap 吧！）；</p>
</li>
<li>
<p><strong>效率：</strong> 因为线程安全的问题，HashMap 要比 HashTable 效率高一点。另外，HashTable 基本被淘汰，不要在代码中使用它；</p>
</li>
<li>
<p><strong>对Null key 和Null value的支持：</strong> HashMap 中，null 可以作为键，这样的键只有一个，可以有一个或多个键所对应的值为 null。。但是在 HashTable 中 put 进的键值只要有一个 null，直接抛出 NullPointerException。</p>
</li>
<li>
<p><strong>初始容量大小和每次扩充容量大小的不同 ：</strong></p>
<p>① 创建时如果不指定容量初始值，Hashtable 默认的初始大小为11，之后每次扩充，容量变为原来的2n+1。HashMap 默认的初始化大小为16。之后每次扩充，容量变为原来的2倍。</p>
<p>② 创建时如果给定了容量初始值，那么 Hashtable 会直接使用你给定的大小，而 HashMap 会将其扩充为2的幂次方大小。也就是说 HashMap 总是使用2的幂次方作为哈希表的大小,后面会介绍到为什么是2的幂次方。</p>
</li>
<li>
<p><strong>底层数据结构：</strong> JDK1.8 以后的 HashMap 在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为8）时，将链表转化为红黑树，以减少搜索时间。Hashtable 没有这样的机制。</p>
</li>
<li>
<p>HashMap的迭代器（<code v-pre>Iterator</code>）是fail-fast迭代器，但是 Hashtable的迭代器（<code v-pre>enumerator</code>）不是 fail-fast的。如果有其它线程对HashMap进行的添加/删除元素，将会抛出<code v-pre>ConcurrentModificationException</code>，但迭代器本身的<code v-pre>remove</code>方法移除元素则不会抛出异常。这条同样也是 Enumeration 和 Iterator 的区别。</p>
</li>
</ol>
<h4 id="了解过-linkedhashmap、treemap-吗" tabindex="-1"><a class="header-anchor" href="#了解过-linkedhashmap、treemap-吗" aria-hidden="true">#</a> 了解过 LinkedHashMap、TreeMap 吗</h4>
<p>LinkedHashMap属于HashMap的子类，与HashMap的区别在于LinkedHashMap保存了记录插入的顺序。TreeMap 实现了 SortedMap接口，TreeMap 有能力对插入的记录根据 key 排序，默认按照升序排序，也可以自定义比较项，在使用 TreeMap 的时候，key 应当实现 Comparable。</p>
<blockquote>
<p>虽然 LinkedHashMap 和 TreeMap 都可以保证某种顺序，但二者还是非常不同的。</p>
<ul>
<li>LinkedHashMap 通常提供的是遍历顺序符合插入顺序，它的实现是通过为条目（键值对）维护一个双向链表。注意，通过特定构造函数，我们可以创建反映访问顺序的实例，所谓的 put、get、compute 等，都算作“访问”。</li>
<li>对于 TreeMap，它的整体顺序是由键的顺序关系决定的，通过 Comparator 或 Comparable（自然顺序）来决定。</li>
</ul>
</blockquote>
<h2 id="concurrenthashmap" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap" aria-hidden="true">#</a> ConcurrentHashMap</h2>
<p>HashMap 在多线程情况下，在 put 的时候，插入的元素超过了容量（由负载因子决定）的范围就会触发扩容操作，就是 resize，这个会重新将原数组的内容重新 hash 到新的扩容数组中，在多线程的环境下，存在同时其他的元素也在进行 put 操作，如果 hash 值相同，可能出现同时在同一数组下用链表表示，造成<strong>闭环</strong>，导致在 get 时会出现死循环，所以 HashMap 是线程不安全的。(可参考：<a href="https://www.jianshu.com/p/e2f75c8cce01%EF%BC%89" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/e2f75c8cce01）<ExternalLinkIcon/></a></p>
<p>Hashtable，是线程安全的，它在所有涉及到多线程操作的都加上了 synchronized 关键字来锁住整个 table，这就意味着所有的线程都在竞争一把锁，在多线程的环境下，它是安全的，但是无疑是效率低下的。</p>
<h3 id="jdk1-7-实现-1" tabindex="-1"><a class="header-anchor" href="#jdk1-7-实现-1" aria-hidden="true">#</a> JDK1.7 实现</h3>
<p>Hashtable 容器在竞争激烈的并发环境下表现出效率低下的原因，是因为所有访问 Hashtable 的线程都必须竞争同一把锁，那假如容器里有多把锁，每一把锁用于锁容器其中一部分数据，那么当多线程访问容器里不同数据段的数据时，线程间就不会存在锁竞争，这就是 ConcurrentHashMap 所使用的锁分段技术。</p>
<p>在 JDK1.7 版本中，ConcurrentHashMap 的数据结构是由一个 Segment 数组和多个 HashEntry 组成。Segment 数组的意义就是将一个大的 table 分割成多个小的 table 来进行加锁。每一个 Segment 元素存储的是 HashEntry 数组+链表，这个和 HashMap 的数据存储结构一样。</p>
<p><img src="https://cdn.jsdelivr.net/gh/Jstarfish/picBed/others/concurrenthashmap-1.7-segment.jpg" alt="" loading="lazy"></p>
<p>ConcurrentHashMap 类中包含两个静态内部类 HashEntry 和 Segment。
HashEntry 用来封装映射表的键值对，Segment 用来充当锁的角色，每个 Segment 对象守护整个散列映射表的若干个桶。每个桶是由若干个 HashEntry 对象链接起来的链表。一个 ConcurrentHashMap 实例中包含由若干个 Segment 对象组成的数组。每个 Segment 守护着一个 HashEntry 数组里的元素，当对 HashEntry 数组的数据进行修改时，必须首先获得它对应的 Segment 锁。</p>
<h4 id="segment-类" tabindex="-1"><a class="header-anchor" href="#segment-类" aria-hidden="true">#</a> Segment 类</h4>
<p>Segment 类继承于 ReentrantLock 类，从而使得 Segment 对象能充当可重入锁的角色。一个 Segment 就是一个子哈希表，Segment 里维护了一个 HashEntry 数组，并发环境下，对于不同 Segment 的数据进行操作是不用考虑锁竞争的。</p>
<p>从源码可以看到，Segment 内部类和我们上边看到的 HashMap 很相似。也有负载因子，阈值等各种属性。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Segment</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">ReentrantLock</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
  
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> MAX_SCAN_RETRIES <span class="token operator">=</span>
    <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">availableProcessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token number">64</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">transient</span> <span class="token keyword">volatile</span> <span class="token class-name">HashEntry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> table<span class="token punctuation">;</span>
  <span class="token keyword">transient</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span>
  <span class="token keyword">transient</span> <span class="token keyword">int</span> modCount<span class="token punctuation">;</span>  <span class="token comment">//记录修改次数</span>
  <span class="token keyword">transient</span> <span class="token keyword">int</span> threshold<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">;</span>

  <span class="token class-name">Segment</span><span class="token punctuation">(</span><span class="token keyword">float</span> lf<span class="token punctuation">,</span> <span class="token keyword">int</span> threshold<span class="token punctuation">,</span> <span class="token class-name">HashEntry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>loadFactor <span class="token operator">=</span> lf<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>threshold <span class="token operator">=</span> threshold<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>table <span class="token operator">=</span> tab<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">//put 方法会有加锁操作，</span>
  <span class="token keyword">final</span> <span class="token class-name">V</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">,</span> <span class="token keyword">boolean</span> onlyIfAbsent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">HashEntry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> node <span class="token operator">=</span> <span class="token function">tryLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span>
                <span class="token function">scanAndLockForPut</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> hash<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>
  <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">rehash</span><span class="token punctuation">(</span><span class="token class-name">HashEntry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token class-name">HashEntry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token function">scanAndLockForPut</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 		<span class="token comment">//...</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">scanAndLock</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">,</span> <span class="token keyword">int</span> hash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 		<span class="token comment">//...</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">final</span> <span class="token class-name">V</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">,</span> <span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">V</span> oldValue<span class="token punctuation">,</span> <span class="token class-name">V</span> newValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  	<span class="token comment">//...</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">final</span> <span class="token class-name">V</span> <span class="token function">replace</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hashentry-类" tabindex="-1"><a class="header-anchor" href="#hashentry-类" aria-hidden="true">#</a> HashEntry 类</h4>
<p>HashEntry 是目前最小的逻辑处理单元。一个 ConcurrentHashMap 维护一个 Segment 数组，一个 Segment 维护一个 HashEntry 数组。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">HashEntry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
  <span class="token keyword">final</span> <span class="token keyword">int</span> hash<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">K</span> key<span class="token punctuation">;</span>
  <span class="token keyword">volatile</span> <span class="token class-name">V</span> value<span class="token punctuation">;</span>   <span class="token comment">// value 为 volatie 类型，保证可见</span>
  <span class="token keyword">volatile</span> <span class="token class-name">HashEntry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> next<span class="token punctuation">;</span>
	<span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="concurrenthashmap-类" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap-类" aria-hidden="true">#</a> ConcurrentHashMap 类</h4>
<p>默认的情况下，每个 ConcurrentHashMap 类会创建16个并发的 segment，每个 segment 里面包含多个 Hash表，每个 Hash 链都是由 HashEntry 节点组成的。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">></span></span>
        <span class="token keyword">implements</span> <span class="token class-name">ConcurrentMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span> <span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
  <span class="token comment">//默认初始容量为 16，即初始默认为 16 个桶</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> DEFAULT_INITIAL_CAPACITY <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">float</span> DEFAULT_LOAD_FACTOR <span class="token operator">=</span> <span class="token number">0.75f</span><span class="token punctuation">;</span>
  <span class="token comment">//默认并发级别为 16。该值表示当前更新线程的估计数</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> DEFAULT_CONCURRENCY_LEVEL <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span>
  
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> MAXIMUM_CAPACITY <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">30</span><span class="token punctuation">;</span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> MIN_SEGMENT_TABLE_CAPACITY <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>  
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> MAX_SEGMENTS <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">16</span><span class="token punctuation">;</span> <span class="token comment">// slightly conservative  </span>
  <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> RETRIES_BEFORE_LOCK <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token keyword">int</span> segmentMask<span class="token punctuation">;</span>  <span class="token comment">//段掩码,主要为了定位Segment</span>
  <span class="token keyword">final</span> <span class="token keyword">int</span> segmentShift<span class="token punctuation">;</span>
  <span class="token keyword">final</span> <span class="token class-name">Segment</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> segments<span class="token punctuation">;</span>   <span class="token comment">//主干就是这个分段锁数组</span>
  
  <span class="token comment">//构造器</span>
  <span class="token keyword">public</span> <span class="token class-name">ConcurrentHashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span>
                             <span class="token keyword">float</span> loadFactor<span class="token punctuation">,</span> <span class="token keyword">int</span> concurrencyLevel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>loadFactor <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> initialCapacity <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> concurrencyLevel <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
       <span class="token comment">//MAX_SEGMENTS 为1&lt;&lt;16=65536，也就是最大并发数为65536</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>concurrencyLevel <span class="token operator">></span> MAX_SEGMENTS<span class="token punctuation">)</span>
            concurrencyLevel <span class="token operator">=</span> MAX_SEGMENTS<span class="token punctuation">;</span>
        <span class="token comment">// 2的sshif次方等于ssize，例:ssize=16,sshift=4;ssize=32,sshif=5</span>
        <span class="token keyword">int</span> sshift <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// ssize 为segments数组长度，根据concurrentLevel计算得出</span>
        <span class="token keyword">int</span> ssize <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>ssize <span class="token operator">&lt;</span> concurrencyLevel<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token operator">++</span>sshift<span class="token punctuation">;</span>
            ssize <span class="token operator">&lt;&lt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>segmentShift <span class="token operator">=</span> <span class="token number">32</span> <span class="token operator">-</span> sshift<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>segmentMask <span class="token operator">=</span> ssize <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">></span> MAXIMUM_CAPACITY<span class="token punctuation">)</span>
            initialCapacity <span class="token operator">=</span> MAXIMUM_CAPACITY<span class="token punctuation">;</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> initialCapacity <span class="token operator">/</span> ssize<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">*</span> ssize <span class="token operator">&lt;</span> initialCapacity<span class="token punctuation">)</span>
            <span class="token operator">++</span>c<span class="token punctuation">;</span>
        <span class="token keyword">int</span> cap <span class="token operator">=</span> MIN_SEGMENT_TABLE_CAPACITY<span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>cap <span class="token operator">&lt;</span> c<span class="token punctuation">)</span>
            cap <span class="token operator">&lt;&lt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建segments数组并初始化第一个Segment，其余的Segment延迟初始化</span>
        <span class="token class-name">Segment</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> s0 <span class="token operator">=</span>
            <span class="token keyword">new</span> <span class="token class-name">Segment</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>loadFactor<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span>cap <span class="token operator">*</span> loadFactor<span class="token punctuation">)</span><span class="token punctuation">,</span>
                             <span class="token punctuation">(</span><span class="token class-name">HashEntry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token keyword">new</span> <span class="token class-name">HashEntry</span><span class="token punctuation">[</span>cap<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Segment</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> ss <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Segment</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token keyword">new</span> <span class="token class-name">Segment</span><span class="token punctuation">[</span>ssize<span class="token punctuation">]</span><span class="token punctuation">;</span>
        UNSAFE<span class="token punctuation">.</span><span class="token function">putOrderedObject</span><span class="token punctuation">(</span>ss<span class="token punctuation">,</span> SBASE<span class="token punctuation">,</span> s0<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ordered write of segments[0]</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>segments <span class="token operator">=</span> ss<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="put-方法-2" tabindex="-1"><a class="header-anchor" href="#put-方法-2" aria-hidden="true">#</a> put() 方法</h4>
<ol>
<li><strong>定位segment并确保定位的Segment已初始化</strong></li>
<li><strong>调用 Segment的 put 方法。</strong></li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Segment</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> s<span class="token punctuation">;</span>
  <span class="token comment">//concurrentHashMap不允许key/value为空</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//hash函数对key的hashCode重新散列，避免差劲的不合理的hashcode，保证散列均匀</span>
  <span class="token keyword">int</span> hash <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//返回的hash值无符号右移segmentShift位与段掩码进行位运算，定位segment</span>
  <span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token punctuation">(</span>hash <span class="token operator">>>></span> segmentShift<span class="token punctuation">)</span> <span class="token operator">&amp;</span> segmentMask<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Segment</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>UNSAFE<span class="token punctuation">.</span>getObject          <span class="token comment">// nonvolatile; recheck</span>
       <span class="token punctuation">(</span>segments<span class="token punctuation">,</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;&lt;</span> SSHIFT<span class="token punctuation">)</span> <span class="token operator">+</span> SBASE<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">//  in ensureSegment</span>
    s <span class="token operator">=</span> <span class="token function">ensureSegment</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> hash<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="get-方法-2" tabindex="-1"><a class="header-anchor" href="#get-方法-2" aria-hidden="true">#</a> get() 方法</h4>
<p><strong>get方法无需加锁，由于其中涉及到的共享变量都使用volatile修饰，volatile可以保证内存可见性，所以不会读取到过期数据</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Segment</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> s<span class="token punctuation">;</span> <span class="token comment">// manually integrate access methods to reduce overhead</span>
  <span class="token class-name">HashEntry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab<span class="token punctuation">;</span>
  <span class="token keyword">int</span> h <span class="token operator">=</span> <span class="token function">hash</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">long</span> u <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>h <span class="token operator">>>></span> segmentShift<span class="token punctuation">)</span> <span class="token operator">&amp;</span> segmentMask<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> SSHIFT<span class="token punctuation">)</span> <span class="token operator">+</span> SBASE<span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>s <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Segment</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>UNSAFE<span class="token punctuation">.</span><span class="token function">getObjectVolatile</span><span class="token punctuation">(</span>segments<span class="token punctuation">,</span> u<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span>
      <span class="token punctuation">(</span>tab <span class="token operator">=</span> s<span class="token punctuation">.</span>table<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">HashEntry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HashEntry</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">)</span> UNSAFE<span class="token punctuation">.</span>getObjectVolatile
         <span class="token punctuation">(</span>tab<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">long</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">(</span>tab<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> h<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> TSHIFT<span class="token punctuation">)</span> <span class="token operator">+</span> TBASE<span class="token punctuation">)</span><span class="token punctuation">;</span>
         e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">K</span> k<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> h <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jdk1-8-实现-1" tabindex="-1"><a class="header-anchor" href="#jdk1-8-实现-1" aria-hidden="true">#</a> JDK1.8  实现</h3>
<p><img src="https://cdn.jsdelivr.net/gh/Jstarfish/picBed/others/concurrenthashmap-1.8.jpg" alt="" loading="lazy"></p>
<p>ConcurrentHashMap 在 JDK8 中进行了巨大改动，光是代码量就从1000多行增加到6000行！1.8 摒弃了<code v-pre>Segment</code>(锁段)的概念，采用了 <code v-pre>CAS + synchronized</code> 来保证并发的安全性。</p>
<p>可以看到，和 HashMap 1.8 的数据结构很像。底层数据结构改变为采用<strong>数组+链表+红黑树</strong>的数据形式。</p>
<h4 id="和hashmap1-8相同的一些地方" tabindex="-1"><a class="header-anchor" href="#和hashmap1-8相同的一些地方" aria-hidden="true">#</a> 和HashMap1.8相同的一些地方</h4>
<ul>
<li>底层数据结构一致</li>
<li>HashMap初始化是在第一次put元素的时候进行的，而不是init</li>
<li>HashMap的底层数组长度总是为2的整次幂</li>
<li>默认树化的阈值为 8，而链表化的阈值为 6（当低于这个阈值时，红黑树转成链表）</li>
<li>hash算法也很类似，但多了一步<code v-pre>&amp; HASH_BITS</code>，该步是为了消除最高位上的负符号，hash的负在ConcurrentHashMap中有特殊意义表示在<strong>扩容或者是树节点</strong></li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> HASH_BITS <span class="token operator">=</span> <span class="token number">0x7fffffff</span><span class="token punctuation">;</span> <span class="token comment">// usable bits of normal node hash</span>

<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">spread</span><span class="token punctuation">(</span><span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>h <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> HASH_BITS<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="一些关键属性" tabindex="-1"><a class="header-anchor" href="#一些关键属性" aria-hidden="true">#</a> 一些关键属性</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> MAXIMUM_CAPACITY <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token number">30</span><span class="token punctuation">;</span> <span class="token comment">//数组最大大小 同HashMap</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> DEFAULT_CAPACITY <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span><span class="token comment">//数组默认大小</span>

<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> MAX_ARRAY_SIZE <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE <span class="token operator">-</span> <span class="token number">8</span><span class="token punctuation">;</span> <span class="token comment">//数组可能最大值，需要与toArray（）相关方法关联</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> DEFAULT_CONCURRENCY_LEVEL <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span> <span class="token comment">//兼容旧版保留的值，默认线程并发度，类似信号量</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">float</span> LOAD_FACTOR <span class="token operator">=</span> <span class="token number">0.75f</span><span class="token punctuation">;</span><span class="token comment">//默认map扩容比例，实际用(n &lt;&lt; 1) - (n >>> 1)代替了更高效</span>

<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> TREEIFY_THRESHOLD <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span> <span class="token comment">// 链表转树阀值，大于8时</span>

<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> UNTREEIFY_THRESHOLD <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span> <span class="token comment">//树转链表阀值，小于等于6（tranfer时，lc、hc=0两个计数器分别++记录原bin、新binTreeNode数量，&lt;=UNTREEIFY_THRESHOLD 则untreeify(lo)）。【仅在扩容tranfer时才可能树转链表】</span>

<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> MIN_TREEIFY_CAPACITY <span class="token operator">=</span> <span class="token number">64</span><span class="token punctuation">;</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> MIN_TRANSFER_STRIDE <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span><span class="token comment">//扩容转移时的最小数组分组大小</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> RESIZE_STAMP_BITS <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span><span class="token comment">//本类中没提供修改的方法 用来根据n生成位置一个类似时间戳的功能</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> MAX_RESIZERS <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token punctuation">(</span><span class="token number">32</span> <span class="token operator">-</span> RESIZE_STAMP_BITS<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 2^15-1，help resize的最大线程数</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> RESIZE_STAMP_SHIFT <span class="token operator">=</span> <span class="token number">32</span> <span class="token operator">-</span> RESIZE_STAMP_BITS<span class="token punctuation">;</span> <span class="token comment">// 32-16=16，sizeCtl中记录size大小的偏移量</span>

<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> MOVED <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// hash for forwarding nodes（forwarding nodes的hash值）、标示位</span>

<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> TREEBIN <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// hash for roots of trees（树根节点的hash值）</span>

<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> RESERVED <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">;</span> <span class="token comment">// ReservationNode的hash值</span>

<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> HASH_BITS <span class="token operator">=</span> <span class="token number">0x7fffffff</span><span class="token punctuation">;</span> <span class="token comment">// 用在计算hash时进行安位与计算消除负hash</span>

<span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> NCPU <span class="token operator">=</span> <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">availableProcessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 可用处理器数量</span>

<span class="token comment">/* ---------------- Fields -------------- */</span>

<span class="token keyword">transient</span> <span class="token keyword">volatile</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> table<span class="token punctuation">;</span> <span class="token comment">//装载Node的数组，作为ConcurrentHashMap的数据容器，采用懒加载的方式，直到第一次插入数据的时候才会进行初始化操作，数组的大小总是为2的幂次方。</span>

<span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token keyword">volatile</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> nextTable<span class="token punctuation">;</span> <span class="token comment">//扩容时使用，平时为null，只有在扩容的时候才为非null</span>

<span class="token doc-comment comment">/**
* 实际上保存的是hashmap中的元素个数  利用CAS锁进行更新但它并不用返回当前hashmap的元素个数 
*/</span>
<span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token keyword">volatile</span> <span class="token keyword">long</span> baseCount<span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
*该属性用来控制table数组的大小，根据是否初始化和是否正在扩容有几种情况：
*当值为负数时：如果为-1表示正在初始化，如果为-N则表示当前正有N-1个线程进行扩容操作；
*当值为正数时：如果当前数组为null的话表示table在初始化过程中，sizeCtl表示为需要新建数组的长度；若已经初始化了，表示当前数据容器（table数组）可用容量也可以理解成临界值（插入节点数超过了该临界值就需要扩容），具体指为数组的长度n 乘以 加载因子loadFactor；当值为0时，即数组长度为默认初始值。
*/</span>
<span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> sizeCtl<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="put-方法-3" tabindex="-1"><a class="header-anchor" href="#put-方法-3" aria-hidden="true">#</a> put() 方法</h4>
<ol>
<li>首先会判断 key、value是否为空，如果为空就抛异常！</li>
<li><code v-pre>spread()</code>方法获取hash，减小hash冲突</li>
<li>判断是否初始化table数组，没有的话调用<code v-pre>initTable()</code>方法进行初始化</li>
<li>判断是否能直接将新值插入到table数组中</li>
<li>判断当前是否在扩容，<code v-pre>MOVED</code>为-1说明当前ConcurrentHashMap正在进行扩容操作，正在扩容的话就进行协助扩容</li>
<li>当table[i]为链表的头结点，在链表中插入新值，通过synchronized (f)的方式进行加锁以实现线程安全性。
<ol>
<li>在链表中如果找到了与待插入的键值对的key相同的节点，就直接覆盖</li>
<li>如果没有找到的话，就直接将待插入的键值对追加到链表的末尾</li>
</ol>
</li>
<li>当table[i]为红黑树的根节点，在红黑树中插入新值/覆盖旧值</li>
<li>根据当前节点个数进行调整，否需要转换成红黑树(个数大于等于8，就会调用<code v-pre>treeifyBin</code>方法将tabel[i]<code v-pre>第i个散列桶</code>拉链转换成红黑树)</li>
<li>对当前容量大小进行检查，如果超过了临界值（实际大小*加载因子）就进行扩容</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">V</span> <span class="token function">putVal</span><span class="token punctuation">(</span><span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">,</span> <span class="token keyword">boolean</span> onlyIfAbsent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// key 和 value 均不允许为 null</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> value <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">NullPointerException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 根据 key 计算出 hash 值</span>
    <span class="token keyword">int</span> hash <span class="token operator">=</span> <span class="token function">spread</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> binCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab <span class="token operator">=</span> table<span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> f<span class="token punctuation">;</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> i<span class="token punctuation">,</span> fh<span class="token punctuation">;</span>
         <span class="token comment">// 判断是否需要进行初始化</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>tab <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> <span class="token punctuation">(</span>n <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            tab <span class="token operator">=</span> <span class="token function">initTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// f 即为当前 key 定位出的 Node，如果为空表示当前位置可以写入数据，利用 CAS 尝试写入，失败则自旋保证成功</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>f <span class="token operator">=</span> <span class="token function">tabAt</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> i <span class="token operator">=</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> hash<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">casTabAt</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
                         <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>                   <span class="token comment">// no lock when adding to empty bin</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 如果当前位置的 hashcode == MOVED == -1,则需要进行扩容</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>fh <span class="token operator">=</span> f<span class="token punctuation">.</span>hash<span class="token punctuation">)</span> <span class="token operator">==</span> MOVED<span class="token punctuation">)</span>
            tab <span class="token operator">=</span> <span class="token function">helpTransfer</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> f<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果都不满足，则利用 synchronized 锁写入数据</span>
        <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">// 剩下情况又分两种，插入链表、插入红黑树</span>
            <span class="token class-name">V</span> oldVal <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
          <span class="token comment">//采用同步内置锁实现并发控制</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>f<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">tabAt</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> i<span class="token punctuation">)</span> <span class="token operator">==</span> f<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 如果 fh=f.hash >=0，当前为链表，在链表中插入新的键值对</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>fh <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        binCount <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                      <span class="token comment">//遍历链表，如果找到对应的 node 节点，修改 value,否则直接在链表尾部加入节点</span>
                        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e <span class="token operator">=</span> f<span class="token punctuation">;</span><span class="token punctuation">;</span> <span class="token operator">++</span>binCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            <span class="token class-name">K</span> ek<span class="token punctuation">;</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span>
                                <span class="token punctuation">(</span><span class="token punctuation">(</span>ek <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span>
                                 <span class="token punctuation">(</span>ek <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>ek<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                oldVal <span class="token operator">=</span> e<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
                                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>onlyIfAbsent<span class="token punctuation">)</span>
                                    e<span class="token punctuation">.</span>val <span class="token operator">=</span> value<span class="token punctuation">;</span>
                                <span class="token keyword">break</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span>
                            <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> pred <span class="token operator">=</span> e<span class="token punctuation">;</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                                pred<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span>
                                                          value<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                                <span class="token keyword">break</span><span class="token punctuation">;</span>
                            <span class="token punctuation">}</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                    <span class="token comment">// 当前为红黑树，将新的键值对插入到红黑树中</span>
                    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>f <span class="token keyword">instanceof</span> <span class="token class-name">TreeBin</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> p<span class="token punctuation">;</span>
                        binCount <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>p <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">TreeBin</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">)</span>f<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putTreeVal</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span>
                                                       value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            oldVal <span class="token operator">=</span> p<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
                            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>onlyIfAbsent<span class="token punctuation">)</span>
                                p<span class="token punctuation">.</span>val <span class="token operator">=</span> value<span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 插入完键值对后再根据实际大小看是否需要转换成红黑树</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>binCount <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>binCount <span class="token operator">>=</span> TREEIFY_THRESHOLD<span class="token punctuation">)</span>
                    <span class="token function">treeifyBin</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>oldVal <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span> oldVal<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 对当前容量大小进行检查，如果超过了临界值（实际大小*加载因子）就需要扩容 </span>
    <span class="token function">addCount</span><span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> binCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以发现 JDK8 中的实现也是<strong>锁分离</strong>的思想，只是锁住的是一个Node，而不是JDK7中的Segment，而锁住Node之前的操作是无锁的并且也是线程安全的，建立在之前提到的原子操作上。</p>
<h4 id="get-方法-3" tabindex="-1"><a class="header-anchor" href="#get-方法-3" aria-hidden="true">#</a> get() 方法</h4>
<p>get方法无需加锁，由于其中涉及到的共享变量都使用volatile修饰，volatile可以保证内存可见性，所以不会读取到过期数据</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> tab<span class="token punctuation">;</span> <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> e<span class="token punctuation">,</span> p<span class="token punctuation">;</span> <span class="token keyword">int</span> n<span class="token punctuation">,</span> eh<span class="token punctuation">;</span> <span class="token class-name">K</span> ek<span class="token punctuation">;</span>
  <span class="token keyword">int</span> h <span class="token operator">=</span> <span class="token function">spread</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 判断数组是否为空</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>tab <span class="token operator">=</span> table<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>n <span class="token operator">=</span> tab<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
      <span class="token punctuation">(</span>e <span class="token operator">=</span> <span class="token function">tabAt</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> h<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断node 节点第一个元素是不是要找的，如果是直接返回</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>eh <span class="token operator">=</span> e<span class="token punctuation">.</span>hash<span class="token punctuation">)</span> <span class="token operator">==</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>ek <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>ek <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>ek<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> e<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// // hash小于0,说明是特殊节点（TreeBin或ForwardingNode）调用find</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>eh <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>p <span class="token operator">=</span> e<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>h<span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> p<span class="token punctuation">.</span>val <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 不是上面的情况,那就是链表了,遍历链表</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> h <span class="token operator">&amp;&amp;</span>
          <span class="token punctuation">(</span><span class="token punctuation">(</span>ek <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>ek <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>ek<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> e<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="两个对象值相同-x-equals-y-true-但却可有不同的-hash-code-这句话对不对" tabindex="-1"><a class="header-anchor" href="#两个对象值相同-x-equals-y-true-但却可有不同的-hash-code-这句话对不对" aria-hidden="true">#</a> 两个对象值相同 (x.equals(y) == true)，但却可有不同的 hash code，这句话对不对?</h3>
<p>正确</p>
<p>如果此对象重写了equals方法，那么可能出现这两个对象的equals相同，而hashcode不同。因此可以说它是对的。 但是，如果此对象继承Object，没有重写equals方法，那么就使用Object的equals方法，Object对象的equals方法默认是用==实现的，那么如果equals相同，hashcode一定相同。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EqualsTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">A</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">B</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//true</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">","</span> <span class="token operator">+</span> b<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	<span class="token comment">//1086865489,452372241</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hashtable-和-concurrenthashmap-的区别" tabindex="-1"><a class="header-anchor" href="#hashtable-和-concurrenthashmap-的区别" aria-hidden="true">#</a> Hashtable 和 ConcurrentHashMap 的区别</h3>
<p>ConcurrentHashMap 和 Hashtable 的区别主要体现在实现线程安全的方式上不同。</p>
<ul>
<li><strong>底层数据结构：</strong> JDK1.7 的 ConcurrentHashMap 底层采用 <strong>分段的数组+链表</strong> 实现，JDK1.8 采用的数据结构和 HashMap1.8 的结构类似，<strong>数组+链表/红黑二叉树</strong>。Hashtable 和 JDK1.8 之前的 HashMap 的底层数据结构类似都是采用 <strong>数组+链表</strong> 的形式，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的；</li>
<li><strong>实现线程安全的方式（重要）</strong> ：
<ul>
<li><strong>在 JDK1.7 的时候，ConcurrentHashMap（分段锁）</strong> 对整个桶数组进行了分割分段(Segment)，每一把锁只锁容器其中一部分数据，多线程访问容器里不同数据段的数据，就不会存在锁竞争，提高并发访问率。（默认分配16个Segment，比Hashtable效率提高16倍。） <strong>到了 JDK1.8 的时候已经摒弃了Segment的概念，而是直接用 Node 数组+链表/红黑树的数据结构来实现，并发控制使用 synchronized 和 CAS 来操作。（JDK1.6以后 对 synchronized锁做了很多优化）</strong> 整个看起来就像是优化过且线程安全的 HashMap，虽然在 JDK1.8 中还能看到 Segment 的数据结构，但是已经简化了属性，只是为了兼容旧版本；</li>
<li>Hashtable(同一把锁) ：使用 synchronized 来保证线程安全，效率非常低下。当一个线程访问同步方法时，其他线程也访问同步方法，可能会进入阻塞或轮询状态，如使用 put 添加元素，另一个线程不能使用 put 添加元素，也不能使用 get，竞争越激烈效率越低。</li>
</ul>
</li>
</ul>
<h2 id="java快速失败-fail-fast-和安全失败-fail-safe-区别" tabindex="-1"><a class="header-anchor" href="#java快速失败-fail-fast-和安全失败-fail-safe-区别" aria-hidden="true">#</a> Java快速失败（fail-fast）和安全失败（fail-safe）区别</h2>
<h3 id="快速失败-fail—fast" tabindex="-1"><a class="header-anchor" href="#快速失败-fail—fast" aria-hidden="true">#</a> 快速失败（fail—fast）</h3>
<p>在用迭代器遍历一个集合对象时，如果遍历过程中对集合对象的内容进行了修改（增加、删除、修改），则会抛出 <code v-pre>ConcurrentModificationException</code>。</p>
<p>原理：迭代器在遍历时直接访问集合中的内容，并且在遍历过程中使用一个 modCount 变量。集合在被遍历期间如果内容发生变化，就会改变 modCount 的值。每当迭代器使用 hashNext()/next() 遍历下一个元素之前，都会检测 modCount 变量是否为 expectedmodCount 值，是的话就返回遍历；否则抛出异常，终止遍历。</p>
<p>注意：这里异常的抛出条件是检测到 modCount！=expectedmodCount 这个条件。如果集合发生变化时修改modCount 值刚好又设置为了 expectedmodCount 值，则异常不会抛出。因此，不能依赖于这个异常是否抛出而进行并发操作的编程，这个异常只建议用于检测并发修改的 bug。</p>
<p>场景：<code v-pre>java.util</code> 包下的集合类都是快速失败的，不能在多线程下发生并发修改（迭代过程中被修改）。</p>
<h3 id="安全失败-fail—safe" tabindex="-1"><a class="header-anchor" href="#安全失败-fail—safe" aria-hidden="true">#</a> 安全失败（fail—safe）</h3>
<p>采用安全失败机制的集合容器，在遍历时不是直接在集合内容上访问的，而是先复制原有集合内容，在拷贝的集合上进行遍历。</p>
<p>原理：由于迭代时是对原集合的拷贝进行遍历，所以在遍历过程中对原集合所作的修改并不能被迭代器检测到，所以不会触发 <code v-pre>Concurrent Modification Exception</code>。</p>
<p>缺点：基于拷贝内容的优点是避免了 <code v-pre>Concurrent Modification Exception</code>，但同样地，迭代器并不能访问到修改后的内容，即：迭代器遍历的是开始遍历那一刻拿到的集合拷贝，在遍历期间原集合发生的修改迭代器是不知道的。</p>
<p>场景：<code v-pre>java.util.concurrent</code> 包下的容器都是安全失败，可以在多线程下并发使用，并发修改。</p>
<p><strong>快速失败和安全失败是对迭代器而言的</strong>。</p>
<p>快速失败：当在迭代一个集合的时候，如果有另外一个线程在修改这个集合，就会抛出<code v-pre>ConcurrentModification</code>异常，<code v-pre>java.util</code> 下都是快速失败。</p>
<p>安全失败：在迭代时候会在集合二层做一个拷贝，所以在修改集合上层元素不会影响下层。在 <code v-pre>java.util.concurrent</code> 下都是安全失败</p>
<h3 id="如何避免fail-fast" tabindex="-1"><a class="header-anchor" href="#如何避免fail-fast" aria-hidden="true">#</a> 如何避免<strong>fail-fast</strong> ？</h3>
<ul>
<li>在单线程的遍历过程中，如果要进行 remove 操作，可以调用迭代器 ListIterator 的 remove 方法而不是集合类的 remove方法。看看 ArrayList 中迭代器的 remove 方法的源码，该方法不能指定元素删除，只能 remove 当前遍历元素。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>lastRet <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">checkForComodification</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">SubList</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>lastRet<span class="token punctuation">)</span><span class="token punctuation">;</span>
        cursor <span class="token operator">=</span> lastRet<span class="token punctuation">;</span>
        lastRet <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        expectedModCount <span class="token operator">=</span> <span class="token class-name">ArrayList</span><span class="token punctuation">.</span><span class="token keyword">this</span><span class="token punctuation">.</span>modCount<span class="token punctuation">;</span>  <span class="token comment">//</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IndexOutOfBoundsException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentModificationException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>使用并发包(<code v-pre>java.util.concurrent</code>)中的类来代替 ArrayList 和 hashMap
<ul>
<li>CopyOnWriterArrayList 代替 ArrayList</li>
<li>ConcurrentHashMap 代替 HashMap</li>
</ul>
</li>
</ul>
<h2 id="iterator-和-enumeration-区别" tabindex="-1"><a class="header-anchor" href="#iterator-和-enumeration-区别" aria-hidden="true">#</a> Iterator 和 Enumeration 区别</h2>
<p>在 Java 集合中，我们通常都通过 “Iterator(迭代器)” 或 “Enumeration(枚举类)” 去遍历集合。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Enumeration</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token keyword">boolean</span> <span class="token function">hasMoreElements</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">E</span> <span class="token function">nextElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token keyword">boolean</span> <span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">E</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>函数接口不同</strong>，Enumeration**只有2个函数接口。<strong>通过Enumeration，我们只能读取集合的数据，而不能对数据进行修改。Iterator</strong>只有3个函数接口。**Iterator除了能读取集合的数据之外，也能数据进行删除操作。</li>
<li><strong>Iterator支持 fail-fast机制，而Enumeration不支持</strong>。Enumeration 是 JDK 1.0 添加的接口。使用到它的函数包括 Vector、Hashtable 等类，这些类都是 JDK 1.0中加入的，Enumeration 存在的目的就是为它们提供遍历接口。Enumeration 本身并没有支持同步，而在 Vector、Hashtable 实现 Enumeration 时，添加了同步。
而 Iterator 是 JDK 1.2 才添加的接口，它也是为了 HashMap、ArrayList 等集合提供遍历接口。Iterator 是支持 fail-fast 机制的：当多个线程对同一个集合的内容进行操作时，就可能会产生 fail-fast 事件</li>
</ul>
<h3 id="collection-和-collections-的区别" tabindex="-1"><a class="header-anchor" href="#collection-和-collections-的区别" aria-hidden="true">#</a> Collection 和 Collections 的区别</h3>
<ul>
<li>
<p>Collection 是集合类的上级接口, 继承与它的接口主要是 set 和 list。</p>
</li>
<li>
<p>Collections 类是针对集合类的一个帮助类. 它提供一系列的静态方法对各种集合的搜索， 排序，线程安全化等操作。</p>
</li>
</ul>
<h2 id="comparable-和-comparator-接口有何区别" tabindex="-1"><a class="header-anchor" href="#comparable-和-comparator-接口有何区别" aria-hidden="true">#</a> Comparable 和 Comparator 接口有何区别？</h2>
<p>Java 中对集合对象或者数组对象排序，有两种实现方式：</p>
<ul>
<li>
<p>对象实现 Comparable 接口</p>
<ul>
<li>
<p>Comparable 在 <code v-pre>java.lang</code> 包下，是一个接口，内部只有一个方法 <code v-pre>compareTo()</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token class-name">T</span> o<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>Comparable 可以让实现它的类的对象进行比较，具体的比较规则是按照 compareTo 方法中的规则进行。这种顺序称为 <strong>自然顺序</strong>。</p>
</li>
<li>
<p>实现了 Comparable 接口的 List 或则数组可以使用 <code v-pre>Collections.sort()</code> 或者 <code v-pre>Arrays.sort()</code> 方法进行排序</p>
</li>
</ul>
</li>
<li>
<p>定义比较器，实现 Comparator接口</p>
<ul>
<li>
<p>Comparator 在 <code v-pre>java.util</code> 包下，也是一个接口，JDK 1.8 以前只有两个方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">T</span> lhs<span class="token punctuation">,</span> <span class="token class-name">T</span> rhs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> object<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
</ul>
<p><strong>comparable 相当于内部比较器。comparator 相当于外部比较器</strong></p>
<p>区别：</p>
<ul>
<li>
<p>Comparator 位于 <code v-pre>java.util</code> 包下，而 Comparable 位于 <code v-pre>java.lang</code> 包下</p>
</li>
<li>
<p>Comparable 接口的实现是在类的内部（如 String、Integer已经实现了 Comparable 接口，自己就可以完成比较大小操作），Comparator 接口的实现是在类的外部（可以理解为一个是自已完成比较，一个是外部程序实现比较）</p>
</li>
<li>
<p>实现 Comparable 接口要重写 compareTo 方法, 在 compareTo 方法里面实现比较。一个已经实现Comparable 的类的对象或数据，可以通过 **Collections.sort(list) 或者 Arrays.sort(arr)**实现排序。通过 <strong>Collections.sort(list,Collections.reverseOrder())</strong> 对list进行倒序排列。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gdzefrcjolj30ui0u0dm0.jpg" alt="" loading="lazy"></p>
</li>
<li>
<p>实现Comparator需要重写 compare 方法</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gdzefws30uj311s0t643v.jpg" alt="" loading="lazy"></p>
</li>
</ul>
<h2 id="hashset" tabindex="-1"><a class="header-anchor" href="#hashset" aria-hidden="true">#</a> HashSet</h2>
<p>HashSet 是用来存储没有重复元素的集合类，并且它是无序的。HashSet 内部实现是基于 HashMap ，实现了 Set 接口。</p>
<p>从 HahSet 提供的构造器可以看出，除了最后一个 HashSet 的构造方法外，其他所有内部就是去创建一个 HashMap 。没有其他的操作。而最后一个构造方法不是 public 的，所以不对外公开。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gdzeqxhvj3j311s0ka787.jpg" alt="" loading="lazy"></p>
<h3 id="hashset如何检查重复" tabindex="-1"><a class="header-anchor" href="#hashset如何检查重复" aria-hidden="true">#</a> HashSet如何检查重复</h3>
<p>HashSet 的底层其实就是 HashMap，只不过我们 <strong>HashSet 是实现了 Set 接口并且把数据作为 K 值，而 V 值一直使用一个相同的虚值来保存</strong>，HashMap的 K 值本身就不允许重复，并且在 HashMap 中如果 K/V 相同时，会用新的 V 覆盖掉旧的 V，然后返回旧的 V。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gdzeyvg5h0j311s0jen0n.jpg" alt="" loading="lazy"></p>
<h3 id="iterater-和-listiterator-之间有什么区别" tabindex="-1"><a class="header-anchor" href="#iterater-和-listiterator-之间有什么区别" aria-hidden="true">#</a> Iterater 和 ListIterator 之间有什么区别？</h3>
<ul>
<li>我们可以使用 Iterator来遍历 Set 和 List 集合，而 ListIterator 只能遍历List</li>
<li>ListIterator有add方法，可以向List中添加对象，而Iterator不能</li>
<li>ListIterator和Iterator都有hasNext()和next()方法，可以实现顺序向后遍历，但是ListIterator有hasPrevious()和previous()方法，可以实现逆向（顺序向前）遍历。Iterator不可以</li>
<li>ListIterator可以定位当前索引的位置，nextIndex()和previousIndex()可以实现。Iterator没有此功能</li>
<li>都可实现删除操作，但是 ListIterator可以实现对象的修改，set()方法可以实现。Iterator仅能遍历，不能修改</li>
</ul>
<img src="https://static01.imgkr.com/temp/ef920406f7274d06a9b203b6b03e3171.png" style="zoom:50%;" />
<h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>
<p>所有内容都是基于源码阅读和各种大佬之前总结的知识整理而来，输入并输出，奥利给。</p>
<ul>
<li>
<p><a href="https://www.javatpoint.com/java-arraylist" target="_blank" rel="noopener noreferrer">https://www.javatpoint.com/java-arraylist<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.runoob.com/java/java-collections.html" target="_blank" rel="noopener noreferrer">https://www.runoob.com/java/java-collections.html<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.javazhiyin.com/21717.html" target="_blank" rel="noopener noreferrer">https://www.javazhiyin.com/21717.html<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://yuqirong.me/2018/01/31/LinkedList%E5%86%85%E9%83%A8%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90/" target="_blank" rel="noopener noreferrer">https://yuqirong.me/2018/01/31/LinkedList内部原理解析/<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://youzhixueyuan.com/the-underlying-structure-and-principle-of-hashmap.html" target="_blank" rel="noopener noreferrer">https://youzhixueyuan.com/the-underlying-structure-and-principle-of-hashmap.html<ExternalLinkIcon/></a></p>
</li>
<li>
<p>《HashMap源码详细分析》<a href="http://www.tianxiaobo.com/2018/01/18/HashMap-%E6%BA%90%E7%A0%81%E8%AF%A6%E7%BB%86%E5%88%86%E6%9E%90-JDK1-8/" target="_blank" rel="noopener noreferrer">http://www.tianxiaobo.com/2018/01/18/HashMap-源码详细分析-JDK1-8/<ExternalLinkIcon/></a></p>
</li>
<li>
<p>《ConcurrentHashMap1.7源码分析》<a href="https://www.cnblogs.com/chengxiao/p/6842045.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/chengxiao/p/6842045.html<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="http://www.justdojava.com/2019/12/18/java-collection-15.1/" target="_blank" rel="noopener noreferrer">http://www.justdojava.com/2019/12/18/java-collection-15.1/<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>
