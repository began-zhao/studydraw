<template><div><h2 id="_1-arraylist-简介" tabindex="-1"><a class="header-anchor" href="#_1-arraylist-简介" aria-hidden="true">#</a> 1. ArrayList 简介</h2>
<p><code v-pre>ArrayList</code> 的底层是数组队列，相当于动态数组。与 Java 中的数组相比，它的容量能动态增长。在添加大量元素前，应用程序可以使用<code v-pre>ensureCapacity</code>操作来增加 <code v-pre>ArrayList</code> 实例的容量。这可以减少递增式再分配的数量。</p>
<p><code v-pre>ArrayList</code>继承于 <strong><code v-pre>AbstractList</code></strong> ，实现了 <strong><code v-pre>List</code></strong>, <strong><code v-pre>RandomAccess</code></strong>, <strong><code v-pre>Cloneable</code></strong>, <strong><code v-pre>java.io.Serializable</code></strong> 这些接口。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span>
        <span class="token keyword">implements</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token class-name">RandomAccess</span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">{</span>

  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>RandomAccess</code> 是一个标志接口，表明实现这个这个接口的 List 集合是支持<strong>快速随机访问</strong>的。在 <code v-pre>ArrayList</code> 中，我们即可以通过元素的序号快速获取元素对象，这就是快速随机访问。</li>
<li><code v-pre>ArrayList</code> 实现了 <strong><code v-pre>Cloneable</code> 接口</strong> ，即覆盖了函数<code v-pre>clone()</code>，能被克隆。</li>
<li><code v-pre>ArrayList</code> 实现了 <code v-pre>java.io.Serializable</code>接口，这意味着<code v-pre>ArrayList</code>支持序列化，能通过序列化去传输。</li>
</ul>
<h3 id="_1-1-arraylist-和-vector-的区别" tabindex="-1"><a class="header-anchor" href="#_1-1-arraylist-和-vector-的区别" aria-hidden="true">#</a> 1.1. Arraylist 和 Vector 的区别?</h3>
<ol>
<li><code v-pre>ArrayList</code> 是 <code v-pre>List</code> 的主要实现类，底层使用 <code v-pre>Object[ ]</code>存储，适用于频繁的查找工作，线程不安全 ；</li>
<li><code v-pre>Vector</code> 是 <code v-pre>List</code> 的古老实现类，底层使用 <code v-pre>Object[ ]</code>存储，线程安全的。</li>
</ol>
<h3 id="_1-2-arraylist-与-linkedlist-区别" tabindex="-1"><a class="header-anchor" href="#_1-2-arraylist-与-linkedlist-区别" aria-hidden="true">#</a> 1.2. Arraylist 与 LinkedList 区别?</h3>
<ol>
<li><strong>是否保证线程安全：</strong> <code v-pre>ArrayList</code> 和 <code v-pre>LinkedList</code> 都是不同步的，也就是不保证线程安全；</li>
<li><strong>底层数据结构：</strong> <code v-pre>Arraylist</code> 底层使用的是 <strong><code v-pre>Object</code> 数组</strong>；<code v-pre>LinkedList</code> 底层使用的是 <strong>双向链表</strong> 数据结构（JDK1.6 之前为循环链表，JDK1.7 取消了循环。注意双向链表和双向循环链表的区别，下面有介绍到！）</li>
<li><strong>插入和删除是否受元素位置的影响：</strong> ① <strong><code v-pre>ArrayList</code> 采用数组存储，所以插入和删除元素的时间复杂度受元素位置的影响。</strong> 比如：执行<code v-pre>add(E e)</code>方法的时候， <code v-pre>ArrayList</code> 会默认在将指定的元素追加到此列表的末尾，这种情况时间复杂度就是 O(1)。但是如果要在指定位置 i 插入和删除元素的话（<code v-pre>add(int index, E element)</code>）时间复杂度就为 O(n-i)。因为在进行上述操作的时候集合中第 i 和第 i 个元素之后的(n-i)个元素都要执行向后位/向前移一位的操作。 ② <strong><code v-pre>LinkedList</code> 采用链表存储，所以对于<code v-pre>add(E e)</code>方法的插入，删除元素时间复杂度不受元素位置的影响，近似 O(1)，如果是要在指定位置<code v-pre>i</code>插入和删除元素的话（<code v-pre>(add(int index, E element)</code>） 时间复杂度近似为<code v-pre>o(n))</code>因为需要先移动到指定位置再插入。</strong></li>
<li><strong>是否支持快速随机访问：</strong> <code v-pre>LinkedList</code> 不支持高效的随机元素访问，而 <code v-pre>ArrayList</code> 支持。快速随机访问就是通过元素的序号快速获取元素对象(对应于<code v-pre>get(int index)</code>方法)。</li>
<li><strong>内存空间占用：</strong> <code v-pre>ArrayList</code> 的空 间浪费主要体现在在 list 列表的结尾会预留一定的容量空间，而 <code v-pre>LinkedList</code> 的空间花费则体现在它的每一个元素都需要消耗比 <code v-pre>ArrayList</code> 更多的空间（因为要存放直接后继和直接前驱以及数据）。</li>
</ol>
<h2 id="_2-arraylist-核心源码解读" tabindex="-1"><a class="header-anchor" href="#_2-arraylist-核心源码解读" aria-hidden="true">#</a> 2. ArrayList 核心源码解读</h2>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">java<span class="token punctuation">.</span>util</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Consumer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">Predicate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>function<span class="token punctuation">.</span></span><span class="token class-name">UnaryOperator</span></span><span class="token punctuation">;</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span>
        <span class="token keyword">implements</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token class-name">RandomAccess</span><span class="token punctuation">,</span> <span class="token class-name">Cloneable</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">8683452581122892189L</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 默认初始容量大小
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> DEFAULT_CAPACITY <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 空数组（用于空实例）。
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> EMPTY_ELEMENTDATA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

     <span class="token comment">//用于默认大小空实例的共享空数组实例。</span>
      <span class="token comment">//我们把它从EMPTY_ELEMENTDATA数组中区分出来，以知道在添加第一个元素时容量需要增加多少。</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> DEFAULTCAPACITY_EMPTY_ELEMENTDATA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 保存ArrayList数据的数组
     */</span>
    <span class="token keyword">transient</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> elementData<span class="token punctuation">;</span> <span class="token comment">// non-private to simplify nested class access</span>

    <span class="token doc-comment comment">/**
     * ArrayList 所包含的元素个数
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> size<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 带初始容量参数的构造函数（用户可以在创建ArrayList对象时自己指定集合的初始大小）
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//如果传入的参数大于0，创建initialCapacity大小的数组</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>elementData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>initialCapacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">//如果传入的参数等于0，创建空数组</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>elementData <span class="token operator">=</span> EMPTY_ELEMENTDATA<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//其他情况，抛出异常</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"Illegal Capacity: "</span><span class="token operator">+</span>
                                               initialCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *默认无参构造函数
     *DEFAULTCAPACITY_EMPTY_ELEMENTDATA 为0.初始化为10，也就是说初始其实是空数组 当添加第一个元素的时候数组容量才变成10
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>elementData <span class="token operator">=</span> DEFAULTCAPACITY_EMPTY_ELEMENTDATA<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 构造一个包含指定集合的元素的列表，按照它们由集合的迭代器返回的顺序。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">></span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//将指定集合转换为数组</span>
        elementData <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//如果elementData数组的长度不为0</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>size <span class="token operator">=</span> elementData<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 如果elementData不是Object类型数据（c.toArray可能返回的不是Object类型的数组所以加上下面的语句用于判断）</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>elementData<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                <span class="token comment">//将原来不是Object类型的elementData数组的内容，赋值给新的Object类型的elementData数组</span>
                elementData <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> size<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// 其他情况，用空数组代替</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>elementData <span class="token operator">=</span> EMPTY_ELEMENTDATA<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 修改这个ArrayList实例的容量是列表的当前大小。 应用程序可以使用此操作来最小化ArrayList实例的存储。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">trimToSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        modCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>size <span class="token operator">&lt;</span> elementData<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            elementData <span class="token operator">=</span> <span class="token punctuation">(</span>size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
              <span class="token operator">?</span> EMPTY_ELEMENTDATA
              <span class="token operator">:</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token comment">//下面是ArrayList的扩容机制</span>
<span class="token comment">//ArrayList的扩容机制提高了性能，如果每次只扩充一个，</span>
<span class="token comment">//那么频繁的插入会导致频繁的拷贝，降低性能，而ArrayList的扩容机制避免了这种情况。</span>
    <span class="token doc-comment comment">/**
     * 如有必要，增加此ArrayList实例的容量，以确保它至少能容纳元素的数量
     * <span class="token keyword">@param</span>   <span class="token parameter">minCapacity</span>   所需的最小容量
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">ensureCapacity</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//如果是true，minExpand的值为0，如果是false,minExpand的值为10</span>
        <span class="token keyword">int</span> minExpand <span class="token operator">=</span> <span class="token punctuation">(</span>elementData <span class="token operator">!=</span> DEFAULTCAPACITY_EMPTY_ELEMENTDATA<span class="token punctuation">)</span>
            <span class="token comment">// any size if not default element table</span>
            <span class="token operator">?</span> <span class="token number">0</span>
            <span class="token comment">// larger than default for default empty table. It's already</span>
            <span class="token comment">// supposed to be at default size.</span>
            <span class="token operator">:</span> DEFAULT_CAPACITY<span class="token punctuation">;</span>
        <span class="token comment">//如果最小容量大于已有的最大容量</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>minCapacity <span class="token operator">></span> minExpand<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">ensureExplicitCapacity</span><span class="token punctuation">(</span>minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
   <span class="token comment">//1.得到最小扩容量</span>
   <span class="token comment">//2.通过最小容量扩容</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>elementData <span class="token operator">==</span> DEFAULTCAPACITY_EMPTY_ELEMENTDATA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token comment">// 获取“默认的容量”和“传入参数”两者之间的最大值</span>
            minCapacity <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>DEFAULT_CAPACITY<span class="token punctuation">,</span> minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">ensureExplicitCapacity</span><span class="token punctuation">(</span>minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token comment">//判断是否需要扩容</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">ensureExplicitCapacity</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        modCount<span class="token operator">++</span><span class="token punctuation">;</span>

        <span class="token comment">// overflow-conscious code</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>minCapacity <span class="token operator">-</span> elementData<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token comment">//调用grow方法进行扩容，调用此方法代表已经开始扩容了</span>
            <span class="token function">grow</span><span class="token punctuation">(</span>minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 要分配的最大数组大小
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> MAX_ARRAY_SIZE <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE <span class="token operator">-</span> <span class="token number">8</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * ArrayList扩容的核心方法。
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">grow</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// oldCapacity为旧容量，newCapacity为新容量</span>
        <span class="token keyword">int</span> oldCapacity <span class="token operator">=</span> elementData<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">//将oldCapacity 右移一位，其效果相当于oldCapacity /2，</span>
        <span class="token comment">//我们知道位运算的速度远远快于整除运算，整句运算式的结果就是将新容量更新为旧容量的1.5倍，</span>
        <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> oldCapacity <span class="token operator">+</span> <span class="token punctuation">(</span>oldCapacity <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//然后检查新容量是否大于最小需要容量，若还是小于最小需要容量，那么就把最小需要容量当作数组的新容量，</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">-</span> minCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            newCapacity <span class="token operator">=</span> minCapacity<span class="token punctuation">;</span>
        <span class="token comment">//再检查新容量是否超出了ArrayList所定义的最大容量，</span>
        <span class="token comment">//若超出了，则调用hugeCapacity()来比较minCapacity和 MAX_ARRAY_SIZE，</span>
        <span class="token comment">//如果minCapacity大于MAX_ARRAY_SIZE，则新容量则为Interger.MAX_VALUE，否则，新容量大小则为 MAX_ARRAY_SIZE。</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">-</span> MAX_ARRAY_SIZE <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
            newCapacity <span class="token operator">=</span> <span class="token function">hugeCapacity</span><span class="token punctuation">(</span>minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// minCapacity is usually close to size, so this is a win:</span>
        elementData <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//比较minCapacity和 MAX_ARRAY_SIZE</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">hugeCapacity</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>minCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// overflow</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">OutOfMemoryError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>minCapacity <span class="token operator">></span> MAX_ARRAY_SIZE<span class="token punctuation">)</span> <span class="token operator">?</span>
            <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE <span class="token operator">:</span>
            MAX_ARRAY_SIZE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *返回此列表中的元素数。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 如果此列表不包含元素，则返回 true 。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//注意=和==的区别</span>
        <span class="token keyword">return</span> size <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 如果此列表包含指定的元素，则返回true 。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">contains</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//indexOf()方法：返回此列表中指定元素的首次出现的索引，如果此列表不包含此元素，则为-1</span>
        <span class="token keyword">return</span> <span class="token function">indexOf</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *返回此列表中指定元素的首次出现的索引，如果此列表不包含此元素，则为-1
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>elementData<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
                <span class="token comment">//equals()方法比较</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>o<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>elementData<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回此列表中指定元素的最后一次出现的索引，如果此列表不包含元素，则返回-1。.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> size<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>elementData<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> size<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>o<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>elementData<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span> i<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回此ArrayList实例的浅拷贝。 （元素本身不被复制。）
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> v <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">)</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//Arrays.copyOf功能是实现数组的复制，返回复制后的数组。参数是被复制的数组和复制的长度</span>
            v<span class="token punctuation">.</span>elementData <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
            v<span class="token punctuation">.</span>modCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> v<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">CloneNotSupportedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 这不应该发生，因为我们是可以克隆的</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">InternalError</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *以正确的顺序（从第一个到最后一个元素）返回一个包含此列表中所有元素的数组。
     *返回的数组将是“安全的”，因为该列表不保留对它的引用。 （换句话说，这个方法必须分配一个新的数组）。
     *因此，调用者可以自由地修改返回的数组。 此方法充当基于阵列和基于集合的API之间的桥梁。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 以正确的顺序返回一个包含此列表中所有元素的数组（从第一个到最后一个元素）;
     *返回的数组的运行时类型是指定数组的运行时类型。 如果列表适合指定的数组，则返回其中。
     *否则，将为指定数组的运行时类型和此列表的大小分配一个新数组。
     *如果列表适用于指定的数组，其余空间（即数组的列表数量多于此元素），则紧跟在集合结束后的数组中的元素设置为null 。
     *（这仅在调用者知道列表不包含任何空元素的情况下才能确定列表的长度。）
     */</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toArray</span><span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> size<span class="token punctuation">)</span>
            <span class="token comment">// 新建一个运行时类型的数组，但是ArrayList数组的内容</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">T</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> size<span class="token punctuation">,</span> a<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//调用System提供的arraycopy()方法实现数组之间的复制</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>length <span class="token operator">></span> size<span class="token punctuation">)</span>
            a<span class="token punctuation">[</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// Positional Access Operations</span>

    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"unchecked"</span><span class="token punctuation">)</span>
    <span class="token class-name">E</span> <span class="token function">elementData</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">)</span> elementData<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回此列表中指定位置的元素。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">rangeCheck</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token function">elementData</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 用指定的元素替换此列表中指定位置的元素。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token class-name">E</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//对index进行界限检查</span>
        <span class="token function">rangeCheck</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">E</span> oldValue <span class="token operator">=</span> <span class="token function">elementData</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        elementData<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
        <span class="token comment">//返回原来在这个位置的元素</span>
        <span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将指定的元素追加到此列表的末尾。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span>size <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Increments modCount!!</span>
        <span class="token comment">//这里看到ArrayList添加元素的实质就相当于为数组赋值</span>
        elementData<span class="token punctuation">[</span>size<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 在此列表中的指定位置插入指定的元素。
     *先调用 rangeCheckForAdd 对index进行界限检查；然后调用 ensureCapacityInternal 方法保证capacity足够大；
     *再将从index开始之后的所有成员后移一个位置；将element插入index位置；最后size加1。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token class-name">E</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">rangeCheckForAdd</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span>size <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Increments modCount!!</span>
        <span class="token comment">//arraycopy()这个实现数组之间复制的方法一定要看一下，下面就用到了arraycopy()方法实现数组自己复制自己</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> index<span class="token punctuation">,</span> elementData<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
                         size <span class="token operator">-</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        elementData<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 删除该列表中指定位置的元素。 将任何后续元素移动到左侧（从其索引中减去一个元素）。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">rangeCheck</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>

        modCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token class-name">E</span> oldValue <span class="token operator">=</span> <span class="token function">elementData</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">int</span> numMoved <span class="token operator">=</span> size <span class="token operator">-</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>numMoved <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> elementData<span class="token punctuation">,</span> index<span class="token punctuation">,</span>
                             numMoved<span class="token punctuation">)</span><span class="token punctuation">;</span>
        elementData<span class="token punctuation">[</span><span class="token operator">--</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// clear to let GC do its work</span>
      <span class="token comment">//从列表中删除的元素</span>
        <span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 从列表中删除指定元素的第一个出现（如果存在）。 如果列表不包含该元素，则它不会更改。
     *返回true，如果此列表包含指定的元素
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">remove</span><span class="token punctuation">(</span><span class="token class-name">Object</span> o<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>o <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>elementData<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">fastRemove</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>o<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>elementData<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token function">fastRemove</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*
     * Private remove method that skips bounds checking and does not
     * return the value removed.
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">fastRemove</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        modCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> numMoved <span class="token operator">=</span> size <span class="token operator">-</span> index <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>numMoved <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> elementData<span class="token punctuation">,</span> index<span class="token punctuation">,</span>
                             numMoved<span class="token punctuation">)</span><span class="token punctuation">;</span>
        elementData<span class="token punctuation">[</span><span class="token operator">--</span>size<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// clear to let GC do its work</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 从列表中删除所有元素。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        modCount<span class="token operator">++</span><span class="token punctuation">;</span>

        <span class="token comment">// 把数组中所有的元素的值设为null</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            elementData<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        size <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 按指定集合的Iterator返回的顺序将指定集合中的所有元素追加到此列表的末尾。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">addAll</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">></span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> numNew <span class="token operator">=</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span>size <span class="token operator">+</span> numNew<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Increments modCount</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> elementData<span class="token punctuation">,</span> size<span class="token punctuation">,</span> numNew<span class="token punctuation">)</span><span class="token punctuation">;</span>
        size <span class="token operator">+=</span> numNew<span class="token punctuation">;</span>
        <span class="token keyword">return</span> numNew <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 将指定集合中的所有元素插入到此列表中，从指定的位置开始。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">addAll</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">></span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">rangeCheckForAdd</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> numNew <span class="token operator">=</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span>size <span class="token operator">+</span> numNew<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Increments modCount</span>

        <span class="token keyword">int</span> numMoved <span class="token operator">=</span> size <span class="token operator">-</span> index<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>numMoved <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> index<span class="token punctuation">,</span> elementData<span class="token punctuation">,</span> index <span class="token operator">+</span> numNew<span class="token punctuation">,</span>
                             numMoved<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> elementData<span class="token punctuation">,</span> index<span class="token punctuation">,</span> numNew<span class="token punctuation">)</span><span class="token punctuation">;</span>
        size <span class="token operator">+=</span> numNew<span class="token punctuation">;</span>
        <span class="token keyword">return</span> numNew <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 从此列表中删除所有索引为fromIndex （含）和toIndex之间的元素。
     *将任何后续元素移动到左侧（减少其索引）。
     */</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">removeRange</span><span class="token punctuation">(</span><span class="token keyword">int</span> fromIndex<span class="token punctuation">,</span> <span class="token keyword">int</span> toIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        modCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> numMoved <span class="token operator">=</span> size <span class="token operator">-</span> toIndex<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> toIndex<span class="token punctuation">,</span> elementData<span class="token punctuation">,</span> fromIndex<span class="token punctuation">,</span>
                         numMoved<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// clear to let GC do its work</span>
        <span class="token keyword">int</span> newSize <span class="token operator">=</span> size <span class="token operator">-</span> <span class="token punctuation">(</span>toIndex<span class="token operator">-</span>fromIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> newSize<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            elementData<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        size <span class="token operator">=</span> newSize<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 检查给定的索引是否在范围内。
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">rangeCheck</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">>=</span> size<span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IndexOutOfBoundsException</span><span class="token punctuation">(</span><span class="token function">outOfBoundsMsg</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * add和addAll使用的rangeCheck的一个版本
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">rangeCheckForAdd</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">></span> size <span class="token operator">||</span> index <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IndexOutOfBoundsException</span><span class="token punctuation">(</span><span class="token function">outOfBoundsMsg</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回IndexOutOfBoundsException细节信息
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> <span class="token function">outOfBoundsMsg</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"Index: "</span><span class="token operator">+</span>index<span class="token operator">+</span><span class="token string">", Size: "</span><span class="token operator">+</span>size<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 从此列表中删除指定集合中包含的所有元素。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">removeAll</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//如果此列表被修改则返回true</span>
        <span class="token keyword">return</span> <span class="token function">batchRemove</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 仅保留此列表中包含在指定集合中的元素。
     *换句话说，从此列表中删除其中不包含在指定集合中的所有元素。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">retainAll</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">requireNonNull</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">batchRemove</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token doc-comment comment">/**
     * 从列表中的指定位置开始，返回列表中的元素（按正确顺序）的列表迭代器。
     *指定的索引表示初始调用将返回的第一个元素为next 。 初始调用previous将返回指定索引减1的元素。
     *返回的列表迭代器是fail-fast 。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ListIterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token function">listIterator</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> index <span class="token operator">></span> size<span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IndexOutOfBoundsException</span><span class="token punctuation">(</span><span class="token string">"Index: "</span><span class="token operator">+</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ListItr</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *返回列表中的列表迭代器（按适当的顺序）。
     *返回的列表迭代器是fail-fast 。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ListIterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token function">listIterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ListItr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *以正确的顺序返回该列表中的元素的迭代器。
     *返回的迭代器是fail-fast 。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Iterator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Itr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-arraylist-扩容机制分析" tabindex="-1"><a class="header-anchor" href="#_3-arraylist-扩容机制分析" aria-hidden="true">#</a> 3. ArrayList 扩容机制分析</h2>
<h3 id="_3-1-先从-arraylist-的构造函数说起" tabindex="-1"><a class="header-anchor" href="#_3-1-先从-arraylist-的构造函数说起" aria-hidden="true">#</a> 3.1. 先从 ArrayList 的构造函数说起</h3>
<p><strong>（JDK8）ArrayList 有三种方式来初始化，构造方法源码如下：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>   <span class="token doc-comment comment">/**
     * 默认初始容量大小
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> DEFAULT_CAPACITY <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>


    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> DEFAULTCAPACITY_EMPTY_ELEMENTDATA <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     *默认构造函数，使用初始容量10构造一个空列表(无参数构造)
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>elementData <span class="token operator">=</span> DEFAULTCAPACITY_EMPTY_ELEMENTDATA<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 带初始容量参数的构造函数。（用户自己指定容量）
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//初始容量大于0</span>
            <span class="token comment">//创建initialCapacity大小的数组</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>elementData <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>initialCapacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">//初始容量等于0</span>
            <span class="token comment">//创建空数组</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>elementData <span class="token operator">=</span> EMPTY_ELEMENTDATA<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">//初始容量小于0，抛出异常</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"Illegal Capacity: "</span><span class="token operator">+</span>
                                               initialCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>


   <span class="token doc-comment comment">/**
    *构造包含指定collection元素的列表，这些元素利用该集合的迭代器按顺序返回
    *如果指定的集合为null，throws NullPointerException。
    */</span>
     <span class="token keyword">public</span> <span class="token class-name">ArrayList</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">E</span><span class="token punctuation">></span></span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        elementData <span class="token operator">=</span> c<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>size <span class="token operator">=</span> elementData<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// c.toArray might (incorrectly) not return Object[] (see 6260652)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>elementData<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
                elementData <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> size<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">// replace with empty array.</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>elementData <span class="token operator">=</span> EMPTY_ELEMENTDATA<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>细心的同学一定会发现 ：<strong>以无参数构造方法创建 <code v-pre>ArrayList</code> 时，实际上初始化赋值的是一个空数组。当真正对数组进行添加元素操作时，才真正分配容量。即向数组中添加第一个元素时，数组容量扩为 10。</strong> 下面在我们分析 ArrayList 扩容时会讲到这一点内容！</p>
<blockquote>
<p>补充：JDK6 new 无参构造的 <code v-pre>ArrayList</code> 对象时，直接创建了长度是 10 的 <code v-pre>Object[]</code> 数组 elementData 。</p>
</blockquote>
<h3 id="_3-2-一步一步分析-arraylist-扩容机制" tabindex="-1"><a class="header-anchor" href="#_3-2-一步一步分析-arraylist-扩容机制" aria-hidden="true">#</a> 3.2. 一步一步分析 ArrayList 扩容机制</h3>
<p>这里以无参构造函数创建的 ArrayList 为例分析</p>
<h4 id="_3-2-1-先来看-add-方法" tabindex="-1"><a class="header-anchor" href="#_3-2-1-先来看-add-方法" aria-hidden="true">#</a> 3.2.1. 先来看 <code v-pre>add</code> 方法</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 将指定的元素追加到此列表的末尾。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//添加元素之前，先调用ensureCapacityInternal方法</span>
        <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span>size <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Increments modCount!!</span>
        <span class="token comment">//这里看到ArrayList添加元素的实质就相当于为数组赋值</span>
        elementData<span class="token punctuation">[</span>size<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> e<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>注意</strong> ：JDK11 移除了 <code v-pre>ensureCapacityInternal()</code> 和 <code v-pre>ensureExplicitCapacity()</code> 方法</p>
</blockquote>
<h4 id="_3-2-2-再来看看-ensurecapacityinternal-方法" tabindex="-1"><a class="header-anchor" href="#_3-2-2-再来看看-ensurecapacityinternal-方法" aria-hidden="true">#</a> 3.2.2. 再来看看 <code v-pre>ensureCapacityInternal()</code> 方法</h4>
<p>（JDK7）可以看到 <code v-pre>add</code> 方法 首先调用了<code v-pre>ensureCapacityInternal(size + 1)</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>   <span class="token comment">//得到最小扩容量</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>elementData <span class="token operator">==</span> DEFAULTCAPACITY_EMPTY_ELEMENTDATA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token comment">// 获取默认的容量和传入参数的较大值</span>
            minCapacity <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>DEFAULT_CAPACITY<span class="token punctuation">,</span> minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token function">ensureExplicitCapacity</span><span class="token punctuation">(</span>minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>当 要 add 进第 1 个元素时，minCapacity 为 1，在 Math.max()方法比较后，minCapacity 为 10。</strong></p>
<blockquote>
<p>此处和后续 JDK8 代码格式化略有不同，核心代码基本一样。</p>
</blockquote>
<h4 id="_3-2-3-ensureexplicitcapacity-方法" tabindex="-1"><a class="header-anchor" href="#_3-2-3-ensureexplicitcapacity-方法" aria-hidden="true">#</a> 3.2.3. <code v-pre>ensureExplicitCapacity()</code> 方法</h4>
<p>如果调用 <code v-pre>ensureCapacityInternal()</code> 方法就一定会进入（执行）这个方法，下面我们来研究一下这个方法的源码！</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>  <span class="token comment">//判断是否需要扩容</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">ensureExplicitCapacity</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        modCount<span class="token operator">++</span><span class="token punctuation">;</span>

        <span class="token comment">// overflow-conscious code</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>minCapacity <span class="token operator">-</span> elementData<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token comment">//调用grow方法进行扩容，调用此方法代表已经开始扩容了</span>
            <span class="token function">grow</span><span class="token punctuation">(</span>minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们来仔细分析一下：</p>
<ul>
<li>当我们要 add 进第 1 个元素到 ArrayList 时，elementData.length 为 0 （因为还是一个空的 list），因为执行了 <code v-pre>ensureCapacityInternal()</code> 方法 ，所以 minCapacity 此时为 10。此时，<code v-pre>minCapacity - elementData.length &gt; 0</code>成立，所以会进入 <code v-pre>grow(minCapacity)</code> 方法。</li>
<li>当 add 第 2 个元素时，minCapacity 为 2，此时 e lementData.length(容量)在添加第一个元素后扩容成 10 了。此时，<code v-pre>minCapacity - elementData.length &gt; 0</code> 不成立，所以不会进入 （执行）<code v-pre>grow(minCapacity)</code> 方法。</li>
<li>添加第 3、4···到第 10 个元素时，依然不会执行 grow 方法，数组容量都为 10。</li>
</ul>
<p>直到添加第 11 个元素，minCapacity(为 11)比 elementData.length（为 10）要大。进入 grow 方法进行扩容。</p>
<h4 id="_3-2-4-grow-方法" tabindex="-1"><a class="header-anchor" href="#_3-2-4-grow-方法" aria-hidden="true">#</a> 3.2.4. <code v-pre>grow()</code> 方法</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 要分配的最大数组大小
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> MAX_ARRAY_SIZE <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE <span class="token operator">-</span> <span class="token number">8</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * ArrayList扩容的核心方法。
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">grow</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// oldCapacity为旧容量，newCapacity为新容量</span>
        <span class="token keyword">int</span> oldCapacity <span class="token operator">=</span> elementData<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">//将oldCapacity 右移一位，其效果相当于oldCapacity /2，</span>
        <span class="token comment">//我们知道位运算的速度远远快于整除运算，整句运算式的结果就是将新容量更新为旧容量的1.5倍，</span>
        <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> oldCapacity <span class="token operator">+</span> <span class="token punctuation">(</span>oldCapacity <span class="token operator">>></span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//然后检查新容量是否大于最小需要容量，若还是小于最小需要容量，那么就把最小需要容量当作数组的新容量，</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">-</span> minCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
            newCapacity <span class="token operator">=</span> minCapacity<span class="token punctuation">;</span>
       <span class="token comment">// 如果新容量大于 MAX_ARRAY_SIZE,进入(执行) `hugeCapacity()` 方法来比较 minCapacity 和 MAX_ARRAY_SIZE，</span>
       <span class="token comment">//如果minCapacity大于最大容量，则新容量则为`Integer.MAX_VALUE`，否则，新容量大小则为 MAX_ARRAY_SIZE 即为 `Integer.MAX_VALUE - 8`。</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>newCapacity <span class="token operator">-</span> MAX_ARRAY_SIZE <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span>
            newCapacity <span class="token operator">=</span> <span class="token function">hugeCapacity</span><span class="token punctuation">(</span>minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// minCapacity is usually close to size, so this is a win:</span>
        elementData <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>int newCapacity = oldCapacity + (oldCapacity &gt;&gt; 1),所以 ArrayList 每次扩容之后容量都会变为原来的 1.5 倍左右（oldCapacity 为偶数就是 1.5 倍，否则是 1.5 倍左右）！</strong> 奇偶不同，比如 ：10+10/2 = 15, 33+33/2=49。如果是奇数的话会丢掉小数.</p>
<blockquote>
<p>&quot;&gt;&gt;&quot;（移位运算符）：&gt;&gt;1 右移一位相当于除 2，右移 n 位相当于除以 2 的 n 次方。这里 oldCapacity 明显右移了 1 位所以相当于 oldCapacity /2。对于大数据的 2 进制运算,位移运算符比那些普通运算符的运算要快很多,因为程序仅仅移动一下而已,不去计算,这样提高了效率,节省了资源</p>
</blockquote>
<p><strong>我们再来通过例子探究一下<code v-pre>grow()</code> 方法 ：</strong></p>
<ul>
<li>当 add 第 1 个元素时，oldCapacity 为 0，经比较后第一个 if 判断成立，newCapacity = minCapacity(为 10)。但是第二个 if 判断不会成立，即 newCapacity 不比 MAX_ARRAY_SIZE 大，则不会进入 <code v-pre>hugeCapacity</code> 方法。数组容量为 10，add 方法中 return true,size 增为 1。</li>
<li>当 add 第 11 个元素进入 grow 方法时，newCapacity 为 15，比 minCapacity（为 11）大，第一个 if 判断不成立。新容量没有大于数组最大 size，不会进入 hugeCapacity 方法。数组容量扩为 15，add 方法中 return true,size 增为 11。</li>
<li>以此类推······</li>
</ul>
<p><strong>这里补充一点比较重要，但是容易被忽视掉的知识点：</strong></p>
<ul>
<li>java 中的 <code v-pre>length</code>属性是针对数组说的,比如说你声明了一个数组,想知道这个数组的长度则用到了 length 这个属性.</li>
<li>java 中的 <code v-pre>length()</code> 方法是针对字符串说的,如果想看这个字符串的长度则用到 <code v-pre>length()</code> 这个方法.</li>
<li>java 中的 <code v-pre>size()</code> 方法是针对泛型集合说的,如果想看这个泛型有多少个元素,就调用此方法来查看!</li>
</ul>
<h4 id="_3-2-5-hugecapacity-方法。" tabindex="-1"><a class="header-anchor" href="#_3-2-5-hugecapacity-方法。" aria-hidden="true">#</a> 3.2.5. <code v-pre>hugeCapacity()</code> 方法。</h4>
<p>从上面 <code v-pre>grow()</code> 方法源码我们知道： 如果新容量大于 MAX_ARRAY_SIZE,进入(执行) <code v-pre>hugeCapacity()</code> 方法来比较 minCapacity 和 MAX_ARRAY_SIZE，如果 minCapacity 大于最大容量，则新容量则为<code v-pre>Integer.MAX_VALUE</code>，否则，新容量大小则为 MAX_ARRAY_SIZE 即为 <code v-pre>Integer.MAX_VALUE - 8</code>。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">hugeCapacity</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>minCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// overflow</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">OutOfMemoryError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//对minCapacity和MAX_ARRAY_SIZE进行比较</span>
        <span class="token comment">//若minCapacity大，将Integer.MAX_VALUE作为新数组的大小</span>
        <span class="token comment">//若MAX_ARRAY_SIZE大，将MAX_ARRAY_SIZE作为新数组的大小</span>
        <span class="token comment">//MAX_ARRAY_SIZE = Integer.MAX_VALUE - 8;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>minCapacity <span class="token operator">></span> MAX_ARRAY_SIZE<span class="token punctuation">)</span> <span class="token operator">?</span>
            <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE <span class="token operator">:</span>
            MAX_ARRAY_SIZE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-system-arraycopy-和-arrays-copyof-方法" tabindex="-1"><a class="header-anchor" href="#_3-3-system-arraycopy-和-arrays-copyof-方法" aria-hidden="true">#</a> 3.3. <code v-pre>System.arraycopy()</code> 和 <code v-pre>Arrays.copyOf()</code>方法</h3>
<p>阅读源码的话，我们就会发现 ArrayList 中大量调用了这两个方法。比如：我们上面讲的扩容操作以及<code v-pre>add(int index, E element)</code>、<code v-pre>toArray()</code> 等方法中都用到了该方法！</p>
<h4 id="_3-3-1-system-arraycopy-方法" tabindex="-1"><a class="header-anchor" href="#_3-3-1-system-arraycopy-方法" aria-hidden="true">#</a> 3.3.1. <code v-pre>System.arraycopy()</code> 方法</h4>
<p>源码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token comment">// 我们发现 arraycopy 是一个 native 方法,接下来我们解释一下各个参数的具体意义</span>
    <span class="token doc-comment comment">/**
    *   复制数组
    * <span class="token keyword">@param</span> <span class="token parameter">src</span> 源数组
    * <span class="token keyword">@param</span> <span class="token parameter">srcPos</span> 源数组中的起始位置
    * <span class="token keyword">@param</span> <span class="token parameter">dest</span> 目标数组
    * <span class="token keyword">@param</span> <span class="token parameter">destPos</span> 目标数组中的起始位置
    * <span class="token keyword">@param</span> <span class="token parameter">length</span> 要复制的数组元素的数量
    */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">arraycopy</span><span class="token punctuation">(</span><span class="token class-name">Object</span> src<span class="token punctuation">,</span>  <span class="token keyword">int</span>  srcPos<span class="token punctuation">,</span>
                                        <span class="token class-name">Object</span> dest<span class="token punctuation">,</span> <span class="token keyword">int</span> destPos<span class="token punctuation">,</span>
                                        <span class="token keyword">int</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>场景：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * 在此列表中的指定位置插入指定的元素。
     *先调用 rangeCheckForAdd 对index进行界限检查；然后调用 ensureCapacityInternal 方法保证capacity足够大；
     *再将从index开始之后的所有成员后移一个位置；将element插入index位置；最后size加1。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> index<span class="token punctuation">,</span> <span class="token class-name">E</span> element<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">rangeCheckForAdd</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span>size <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// Increments modCount!!</span>
        <span class="token comment">//arraycopy()方法实现数组自己复制自己</span>
        <span class="token comment">//elementData:源数组;index:源数组中的起始位置;elementData：目标数组；index + 1：目标数组中的起始位置； size - index：要复制的数组元素的数量；</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> index<span class="token punctuation">,</span> elementData<span class="token punctuation">,</span> index <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> size <span class="token operator">-</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        elementData<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> element<span class="token punctuation">;</span>
        size<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们写一个简单的方法测试以下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArraycopyTest</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// TODO Auto-generated method stub</span>
		<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
		a<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> a<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token number">99</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>0 1 99 2 3 0 0 0 0 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-3-2-arrays-copyof-方法" tabindex="-1"><a class="header-anchor" href="#_3-3-2-arrays-copyof-方法" aria-hidden="true">#</a> 3.3.2. <code v-pre>Arrays.copyOf()</code>方法</h4>
<p>源码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">copyOf</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> original<span class="token punctuation">,</span> <span class="token keyword">int</span> newLength<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    	<span class="token comment">// 申请一个新的数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> copy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>newLength<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token comment">// 调用System.arraycopy,将源数组中的数据进行拷贝,并返回新的数组</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">arraycopy</span><span class="token punctuation">(</span>original<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> copy<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span>
                         <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>original<span class="token punctuation">.</span>length<span class="token punctuation">,</span> newLength<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> copy<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>场景：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>   <span class="token doc-comment comment">/**
     以正确的顺序返回一个包含此列表中所有元素的数组（从第一个到最后一个元素）; 返回的数组的运行时类型是指定数组的运行时类型。
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//elementData：要复制的数组；size：要复制的长度</span>
        <span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>elementData<span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>个人觉得使用 <code v-pre>Arrays.copyOf()</code>方法主要是为了给原有数组扩容，测试代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArrayscopyOfTest</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
		a<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> b <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"b.length"</span><span class="token operator">+</span>b<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-3-3-两者联系和区别" tabindex="-1"><a class="header-anchor" href="#_3-3-3-两者联系和区别" aria-hidden="true">#</a> 3.3.3. 两者联系和区别</h4>
<p><strong>联系：</strong></p>
<p>看两者源代码可以发现 <code v-pre>copyOf()</code>内部实际调用了 <code v-pre>System.arraycopy()</code> 方法</p>
<p><strong>区别：</strong></p>
<p><code v-pre>arraycopy()</code> 需要目标数组，将原数组拷贝到你自己定义的数组里或者原数组，而且可以选择拷贝的起点和长度以及放入新数组中的位置 <code v-pre>copyOf()</code> 是系统自动在内部新建一个数组，并返回该数组。</p>
<h3 id="_3-4-ensurecapacity方法" tabindex="-1"><a class="header-anchor" href="#_3-4-ensurecapacity方法" aria-hidden="true">#</a> 3.4. <code v-pre>ensureCapacity</code>方法</h3>
<p>ArrayList 源码中有一个 <code v-pre>ensureCapacity</code> 方法不知道大家注意到没有，这个方法 ArrayList 内部没有被调用过，所以很显然是提供给用户调用的，那么这个方法有什么作用呢？</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token doc-comment comment">/**
    如有必要，增加此 ArrayList 实例的容量，以确保它至少可以容纳由minimum capacity参数指定的元素数。
     *
     * <span class="token keyword">@param</span>   <span class="token parameter">minCapacity</span>   所需的最小容量
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">ensureCapacity</span><span class="token punctuation">(</span><span class="token keyword">int</span> minCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> minExpand <span class="token operator">=</span> <span class="token punctuation">(</span>elementData <span class="token operator">!=</span> DEFAULTCAPACITY_EMPTY_ELEMENTDATA<span class="token punctuation">)</span>
            <span class="token comment">// any size if not default element table</span>
            <span class="token operator">?</span> <span class="token number">0</span>
            <span class="token comment">// larger than default for default empty table. It's already</span>
            <span class="token comment">// supposed to be at default size.</span>
            <span class="token operator">:</span> DEFAULT_CAPACITY<span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>minCapacity <span class="token operator">></span> minExpand<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">ensureExplicitCapacity</span><span class="token punctuation">(</span>minCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>最好在 add 大量元素之前用 <code v-pre>ensureCapacity</code> 方法，以减少增量重新分配的次数</strong></p>
<p>我们通过下面的代码实际测试以下这个方法的效果：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EnsureCapacityTest</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token class-name">N</span> <span class="token operator">=</span> <span class="token number">10000000</span><span class="token punctuation">;</span>
		<span class="token keyword">long</span> startTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">N</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">long</span> endTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"使用ensureCapacity方法前："</span><span class="token operator">+</span><span class="token punctuation">(</span>endTime <span class="token operator">-</span> startTime<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>使用ensureCapacity方法前：2158
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EnsureCapacityTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token class-name">N</span> <span class="token operator">=</span> <span class="token number">10000000</span><span class="token punctuation">;</span>
        list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> startTime1 <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        list<span class="token punctuation">.</span><span class="token function">ensureCapacity</span><span class="token punctuation">(</span><span class="token class-name">N</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">N</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">long</span> endTime1 <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"使用ensureCapacity方法后："</span><span class="token operator">+</span><span class="token punctuation">(</span>endTime1 <span class="token operator">-</span> startTime1<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>使用ensureCapacity方法后：1773
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过运行结果，我们可以看出向 ArrayList 添加大量元素之前最好先使用<code v-pre>ensureCapacity</code> 方法，以减少增量重新分配的次数。</p>
</div></template>
