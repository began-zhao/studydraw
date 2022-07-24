<template><div><h2 id="map-接口" tabindex="-1"><a class="header-anchor" href="#map-接口" aria-hidden="true">#</a> Map 接口</h2>
<h3 id="hashmap-和-hashtable-的区别" tabindex="-1"><a class="header-anchor" href="#hashmap-和-hashtable-的区别" aria-hidden="true">#</a> HashMap 和 Hashtable 的区别</h3>
<ol>
<li><strong>线程是否安全：</strong> <code v-pre>HashMap</code> 是非线程安全的，<code v-pre>Hashtable</code> 是线程安全的,因为 <code v-pre>Hashtable</code> 内部的方法基本都经过<code v-pre>synchronized</code> 修饰。（如果你要保证线程安全的话就使用 <code v-pre>ConcurrentHashMap</code> 吧！）；</li>
<li><strong>效率：</strong> 因为线程安全的问题，<code v-pre>HashMap</code> 要比 <code v-pre>Hashtable</code> 效率高一点。另外，<code v-pre>Hashtable</code> 基本被淘汰，不要在代码中使用它；</li>
<li><strong>对 Null key 和 Null value 的支持：</strong> <code v-pre>HashMap</code> 可以存储 null 的 key 和 value，但 null 作为键只能有一个，null 作为值可以有多个；Hashtable 不允许有 null 键和 null 值，否则会抛出 <code v-pre>NullPointerException</code>。</li>
<li><strong>初始容量大小和每次扩充容量大小的不同 ：</strong> ① 创建时如果不指定容量初始值，<code v-pre>Hashtable</code> 默认的初始大小为 11，之后每次扩充，容量变为原来的 2n+1。<code v-pre>HashMap</code> 默认的初始化大小为 16。之后每次扩充，容量变为原来的 2 倍。② 创建时如果给定了容量初始值，那么 Hashtable 会直接使用你给定的大小，而 <code v-pre>HashMap</code> 会将其扩充为 2 的幂次方大小（<code v-pre>HashMap</code> 中的<code v-pre>tableSizeFor()</code>方法保证，下面给出了源代码）。也就是说 <code v-pre>HashMap</code> 总是使用 2 的幂作为哈希表的大小,后面会介绍到为什么是 2 的幂次方。</li>
<li><strong>底层数据结构：</strong> JDK1.8 以后的 <code v-pre>HashMap</code> 在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间。Hashtable 没有这样的机制。</li>
</ol>
<p><strong><code v-pre>HashMap</code> 中带有初始容量的构造函数：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
     <span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">,</span> DEFAULT_LOAD_FACTOR<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面这个方法保证了 <code v-pre>HashMap</code> 总是使用 2 的幂作为哈希表的大小。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token doc-comment comment">/**
     * Returns a power of two size for the given target capacity.
     */</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">tableSizeFor</span><span class="token punctuation">(</span><span class="token keyword">int</span> cap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> cap <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">>>></span> <span class="token number">1</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">>>></span> <span class="token number">2</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">>>></span> <span class="token number">4</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">>>></span> <span class="token number">8</span><span class="token punctuation">;</span>
        n <span class="token operator">|=</span> n <span class="token operator">>>></span> <span class="token number">16</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token punctuation">(</span>n <span class="token operator">>=</span> MAXIMUM_CAPACITY<span class="token punctuation">)</span> <span class="token operator">?</span> MAXIMUM_CAPACITY <span class="token operator">:</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hashmap-和-hashset-区别" tabindex="-1"><a class="header-anchor" href="#hashmap-和-hashset-区别" aria-hidden="true">#</a> HashMap 和 HashSet 区别</h3>
<p>如果你看过 <code v-pre>HashSet</code> 源码的话就应该知道：<code v-pre>HashSet</code> 底层就是基于 <code v-pre>HashMap</code> 实现的。（<code v-pre>HashSet</code> 的源码非常非常少，因为除了 <code v-pre>clone()</code>、<code v-pre>writeObject()</code>、<code v-pre>readObject()</code>是 <code v-pre>HashSet</code> 自己不得不实现之外，其他方法都是直接调用 <code v-pre>HashMap</code> 中的方法。</p>
<table>
<thead>
<tr>
<th style="text-align:center"><code v-pre>HashMap</code></th>
<th style="text-align:center"><code v-pre>HashSet</code></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">实现了 <code v-pre>Map</code> 接口</td>
<td style="text-align:center">实现 <code v-pre>Set</code> 接口</td>
</tr>
<tr>
<td style="text-align:center">存储键值对</td>
<td style="text-align:center">仅存储对象</td>
</tr>
<tr>
<td style="text-align:center">调用 <code v-pre>put()</code>向 map 中添加元素</td>
<td style="text-align:center">调用 <code v-pre>add()</code>方法向 <code v-pre>Set</code> 中添加元素</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>HashMap</code> 使用键（Key）计算 <code v-pre>hashcode</code></td>
<td style="text-align:center"><code v-pre>HashSet</code> 使用成员对象来计算 <code v-pre>hashcode</code> 值，对于两个对象来说 <code v-pre>hashcode</code> 可能相同，所以<code v-pre>equals()</code>方法用来判断对象的相等性</td>
</tr>
</tbody>
</table>
<h3 id="hashmap-和-treemap-区别" tabindex="-1"><a class="header-anchor" href="#hashmap-和-treemap-区别" aria-hidden="true">#</a> HashMap 和 TreeMap 区别</h3>
<p><code v-pre>TreeMap</code> 和<code v-pre>HashMap</code> 都继承自<code v-pre>AbstractMap</code> ，但是需要注意的是<code v-pre>TreeMap</code>它还实现了<code v-pre>NavigableMap</code>接口和<code v-pre>SortedMap</code> 接口。</p>
<p><img src="@source/code/java/common/collection/images/TreeMap继承结构.png" alt="" loading="lazy"></p>
<p>实现 <code v-pre>NavigableMap</code> 接口让 <code v-pre>TreeMap</code> 有了对集合内元素的搜索的能力。</p>
<p>实现<code v-pre>SortedMap</code>接口让 <code v-pre>TreeMap</code> 有了对集合中的元素根据键排序的能力。默认是按 key 的升序排序，不过我们也可以指定排序的比较器。示例代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> shuang.kou
 * <span class="token keyword">@createTime</span> 2020年06月15日 17:02:00
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> age<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> age<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> treeMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Comparator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">compare</span><span class="token punctuation">(</span><span class="token class-name">Person</span> person1<span class="token punctuation">,</span> <span class="token class-name">Person</span> person2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> num <span class="token operator">=</span> person1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> person2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        treeMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"person1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        treeMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"person2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        treeMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">35</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"person3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        treeMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"person4"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        treeMap<span class="token punctuation">.</span><span class="token function">entrySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>personStringEntry <span class="token operator">-></span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>personStringEntry<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>person1
person4
person2
person3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，<code v-pre>TreeMap</code> 中的元素已经是按照 <code v-pre>Person</code> 的 age 字段的升序来排列了。</p>
<p>上面，我们是通过传入匿名内部类的方式实现的，你可以将代码替换成 Lambda 表达式实现的方式：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> treeMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>person1<span class="token punctuation">,</span> person2<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> num <span class="token operator">=</span> person1<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> person2<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">compare</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>综上，相比于<code v-pre>HashMap</code>来说 <code v-pre>TreeMap</code> 主要多了对集合中的元素根据键排序的能力以及对集合内元素的搜索的能力。</strong></p>
<h3 id="hashset-如何检查重复" tabindex="-1"><a class="header-anchor" href="#hashset-如何检查重复" aria-hidden="true">#</a> HashSet 如何检查重复</h3>
<p>以下内容摘自我的 Java 启蒙书《Head first java》第二版：</p>
<p>当你把对象加入<code v-pre>HashSet</code>时，<code v-pre>HashSet</code> 会先计算对象的<code v-pre>hashcode</code>值来判断对象加入的位置，同时也会与其他加入的对象的 <code v-pre>hashcode</code> 值作比较，如果没有相符的 <code v-pre>hashcode</code>，<code v-pre>HashSet</code> 会假设对象没有重复出现。但是如果发现有相同 <code v-pre>hashcode</code> 值的对象，这时会调用<code v-pre>equals()</code>方法来检查 <code v-pre>hashcode</code> 相等的对象是否真的相同。如果两者相同，<code v-pre>HashSet</code> 就不会让加入操作成功。</p>
<p>在openjdk8中，<code v-pre>HashSet</code>的<code v-pre>add()</code>方法只是简单的调用了<code v-pre>HashMap</code>的<code v-pre>put()</code>方法，并且判断了一下返回值以确保是否有重复元素。直接看一下<code v-pre>HashSet</code>中的源码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// Returns: true if this set did not already contain the specified element</span>
<span class="token comment">// 返回值：当set中没有包含add的元素时返回真</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> PRESENT<span class="token punctuation">)</span><span class="token operator">==</span><span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而在<code v-pre>HashMap</code>的<code v-pre>putVal()</code>方法中也能看到如下说明：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// Returns : previous value, or null if none</span>
<span class="token comment">// 返回值：如果插入位置没有元素返回null，否则返回上一个元素</span>
<span class="token keyword">final</span> <span class="token class-name">V</span> <span class="token function">putVal</span><span class="token punctuation">(</span><span class="token keyword">int</span> hash<span class="token punctuation">,</span> <span class="token class-name">K</span> key<span class="token punctuation">,</span> <span class="token class-name">V</span> value<span class="token punctuation">,</span> <span class="token keyword">boolean</span> onlyIfAbsent<span class="token punctuation">,</span>
                   <span class="token keyword">boolean</span> evict<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也就是说，在openjdk8中，实际上无论<code v-pre>HashSet</code>中是否已经存在了某元素，<code v-pre>HashSet</code>都会直接插入，只是会在<code v-pre>add()</code>方法的返回值处告诉我们插入前是否存在相同元素。</p>
<p><strong><code v-pre>hashCode()</code>与 <code v-pre>equals()</code> 的相关规定：</strong></p>
<ol>
<li>如果两个对象相等，则 <code v-pre>hashcode</code> 一定也是相同的</li>
<li>两个对象相等,对两个 <code v-pre>equals()</code> 方法返回 true</li>
<li>两个对象有相同的 <code v-pre>hashcode</code> 值，它们也不一定是相等的</li>
<li>综上，<code v-pre>equals()</code> 方法被覆盖过，则 <code v-pre>hashCode()</code> 方法也必须被覆盖</li>
<li><code v-pre>hashCode()</code>的默认行为是对堆上的对象产生独特值。如果没有重写 <code v-pre>hashCode()</code>，则该 class 的两个对象无论如何都不会相等（即使这两个对象指向相同的数据）。</li>
</ol>
<p><strong>==与 equals 的区别</strong></p>
<p>对于基本类型来说，== 比较的是值是否相等；</p>
<p>对于引用类型来说，== 比较的是两个引用是否指向同一个对象地址（两者在内存中存放的地址（堆内存地址）是否指向同一个地方）；</p>
<p>对于引用类型（包括包装类型）来说，equals 如果没有被重写，对比它们的地址是否相等；如果 equals()方法被重写（例如 String），则比较的是地址里的内容。</p>
<h3 id="hashmap-的底层实现" tabindex="-1"><a class="header-anchor" href="#hashmap-的底层实现" aria-hidden="true">#</a> HashMap 的底层实现</h3>
<h4 id="jdk1-8-之前" tabindex="-1"><a class="header-anchor" href="#jdk1-8-之前" aria-hidden="true">#</a> JDK1.8 之前</h4>
<p>JDK1.8 之前 <code v-pre>HashMap</code> 底层是 <strong>数组和链表</strong> 结合在一起使用也就是 <strong>链表散列</strong>。<strong>HashMap 通过 key 的 hashCode 经过扰动函数处理过后得到 hash 值，然后通过 (n - 1) &amp; hash 判断当前元素存放的位置（这里的 n 指的是数组的长度），如果当前位置存在元素的话，就判断该元素与要存入的元素的 hash 值以及 key 是否相同，如果相同的话，直接覆盖，不相同就通过拉链法解决冲突。</strong></p>
<p><strong>所谓扰动函数指的就是 HashMap 的 hash 方法。使用 hash 方法也就是扰动函数是为了防止一些实现比较差的 hashCode() 方法 换句话说使用扰动函数之后可以减少碰撞。</strong></p>
<p><strong>JDK 1.8 HashMap 的 hash 方法源码:</strong></p>
<p>JDK 1.8 的 hash 方法 相比于 JDK 1.7 hash 方法更加简化，但是原理不变。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span> h<span class="token punctuation">;</span>
      <span class="token comment">// key.hashCode()：返回散列值也就是hashcode</span>
      <span class="token comment">// ^ ：按位异或</span>
      <span class="token comment">// >>>:无符号右移，忽略符号位，空位都以0补齐</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>key <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> <span class="token punctuation">(</span>h <span class="token operator">=</span> key<span class="token punctuation">.</span><span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">16</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对比一下 JDK1.7 的 HashMap 的 hash 方法源码.</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">hash</span><span class="token punctuation">(</span><span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// This function ensures that hashCodes that differ only by</span>
    <span class="token comment">// constant multiples at each bit position have a bounded</span>
    <span class="token comment">// number of collisions (approximately 8 at default load factor).</span>

    h <span class="token operator">^=</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> h <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">^</span> <span class="token punctuation">(</span>h <span class="token operator">>>></span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比于 JDK1.8 的 hash 方法 ，JDK 1.7 的 hash 方法的性能会稍差一点点，因为毕竟扰动了 4 次。</p>
<p>所谓 <strong>“拉链法”</strong> 就是：将链表和数组相结合。也就是说创建一个链表数组，数组中每一格就是一个链表。若遇到哈希冲突，则将冲突的值加到链表中即可。</p>
<p><img src="@source/code/java/common/collection/images/jdk1.8之前的内部结构-HashMap.png" alt="jdk1.8之前的内部结构-HashMap" loading="lazy"></p>
<h4 id="jdk1-8-之后" tabindex="-1"><a class="header-anchor" href="#jdk1-8-之后" aria-hidden="true">#</a> JDK1.8 之后</h4>
<p>相比于之前的版本， JDK1.8 之后在解决哈希冲突时有了较大的变化，当链表长度大于阈值（默认为 8）（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行数组扩容，而不是转换为红黑树）时，将链表转化为红黑树，以减少搜索时间。</p>
<p><img src="@source/code/java/common/collection/images/jdk1.8之后的内部结构-HashMap.png" alt="jdk1.8之后的内部结构-HashMap" loading="lazy"></p>
<blockquote>
<p>TreeMap、TreeSet 以及 JDK1.8 之后的 HashMap 底层都用到了红黑树。红黑树就是为了解决二叉查找树的缺陷，因为二叉查找树在某些情况下会退化成一个线性结构。</p>
</blockquote>
<h3 id="hashmap-的长度为什么是-2-的幂次方" tabindex="-1"><a class="header-anchor" href="#hashmap-的长度为什么是-2-的幂次方" aria-hidden="true">#</a> HashMap 的长度为什么是 2 的幂次方</h3>
<p>为了能让 HashMap 存取高效，尽量较少碰撞，也就是要尽量把数据分配均匀。我们上面也讲到了过了，Hash 值的范围值-2147483648 到 2147483647，前后加起来大概 40 亿的映射空间，只要哈希函数映射得比较均匀松散，一般应用是很难出现碰撞的。但问题是一个 40 亿长度的数组，内存是放不下的。所以这个散列值是不能直接拿来用的。用之前还要先做对数组的长度取模运算，得到的余数才能用来要存放的位置也就是对应的数组下标。这个数组下标的计算方法是“ <code v-pre>(n - 1) &amp; hash</code>”。（n 代表数组长度）。这也就解释了 HashMap 的长度为什么是 2 的幂次方。</p>
<p><strong>这个算法应该如何设计呢？</strong></p>
<p>我们首先可能会想到采用%取余的操作来实现。但是，重点来了：<strong>“取余(%)操作中如果除数是 2 的幂次则等价于与其除数减一的与(&amp;)操作（也就是说 hash%length==hash&amp;(length-1)的前提是 length 是 2 的 n 次方；）。”</strong> 并且 <strong>采用二进制位操作 &amp;，相对于%能够提高运算效率，这就解释了 HashMap 的长度为什么是 2 的幂次方。</strong></p>
<h3 id="hashmap-多线程操作导致死循环问题" tabindex="-1"><a class="header-anchor" href="#hashmap-多线程操作导致死循环问题" aria-hidden="true">#</a> HashMap 多线程操作导致死循环问题</h3>
<p>主要原因在于并发下的 Rehash 会造成元素之间会形成一个循环链表。不过，jdk 1.8 后解决了这个问题，但是还是不建议在多线程下使用 HashMap,因为多线程下使用 HashMap 还是会存在其他问题比如数据丢失。并发环境下推荐使用 ConcurrentHashMap 。</p>
<p>详情请查看：<a href="https://coolshell.cn/articles/9606.html" target="_blank" rel="noopener noreferrer">https://coolshell.cn/articles/9606.html<ExternalLinkIcon/></a></p>
<h3 id="hashmap-有哪几种常见的遍历方式" tabindex="-1"><a class="header-anchor" href="#hashmap-有哪几种常见的遍历方式" aria-hidden="true">#</a> HashMap 有哪几种常见的遍历方式?</h3>
<p><a href="https://mp.weixin.qq.com/s/zQBN3UvJDhRTKP6SzcZFKw" target="_blank" rel="noopener noreferrer">HashMap 的 7 种遍历方式与性能分析！<ExternalLinkIcon/></a></p>
<h3 id="concurrenthashmap-和-hashtable-的区别" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap-和-hashtable-的区别" aria-hidden="true">#</a> ConcurrentHashMap 和 Hashtable 的区别</h3>
<p><code v-pre>ConcurrentHashMap</code> 和 <code v-pre>Hashtable</code> 的区别主要体现在实现线程安全的方式上不同。</p>
<ul>
<li><strong>底层数据结构：</strong> JDK1.7 的 <code v-pre>ConcurrentHashMap</code> 底层采用 <strong>分段的数组+链表</strong> 实现，JDK1.8 采用的数据结构跟 <code v-pre>HashMap1.8</code> 的结构一样，数组+链表/红黑二叉树。<code v-pre>Hashtable</code> 和 JDK1.8 之前的 <code v-pre>HashMap</code> 的底层数据结构类似都是采用 <strong>数组+链表</strong> 的形式，数组是 HashMap 的主体，链表则是主要为了解决哈希冲突而存在的；</li>
<li><strong>实现线程安全的方式（重要）：</strong> ① <strong>在 JDK1.7 的时候，<code v-pre>ConcurrentHashMap</code>（分段锁）</strong> 对整个桶数组进行了分割分段(<code v-pre>Segment</code>)，每一把锁只锁容器其中一部分数据，多线程访问容器里不同数据段的数据，就不会存在锁竞争，提高并发访问率。 <strong>到了 JDK1.8 的时候已经摒弃了 <code v-pre>Segment</code> 的概念，而是直接用 <code v-pre>Node</code> 数组+链表+红黑树的数据结构来实现，并发控制使用 <code v-pre>synchronized</code> 和 CAS 来操作。（JDK1.6 以后 对 <code v-pre>synchronized</code> 锁做了很多优化）</strong> 整个看起来就像是优化过且线程安全的 <code v-pre>HashMap</code>，虽然在 JDK1.8 中还能看到 <code v-pre>Segment</code> 的数据结构，但是已经简化了属性，只是为了兼容旧版本；② <strong><code v-pre>Hashtable</code>(同一把锁)</strong> :使用 <code v-pre>synchronized</code> 来保证线程安全，效率非常低下。当一个线程访问同步方法时，其他线程也访问同步方法，可能会进入阻塞或轮询状态，如使用 put 添加元素，另一个线程不能使用 put 添加元素，也不能使用 get，竞争会越来越激烈效率越低。</li>
</ul>
<p><strong>两者的对比图：</strong></p>
<p><strong>Hashtable:</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/HashTable全表锁.png" alt="Hashtable全表锁" loading="lazy"></p>
<p style="text-align:right;font-size:13px;color:gray">https://www.cnblogs.com/chengxiao/p/6842045.html></p>
<p><strong>JDK1.7 的 ConcurrentHashMap：</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/ConcurrentHashMap分段锁.jpg" alt="JDK1.7的ConcurrentHashMap" loading="lazy"></p>
<p style="text-align:right;font-size:13px;color:gray">https://www.cnblogs.com/chengxiao/p/6842045.html></p>
<p><strong>JDK1.8 的 ConcurrentHashMap：</strong></p>
<p><img src="@source/code/java/common/collection/images/java8_concurrenthashmap.png" alt="Java8 ConcurrentHashMap 存储结构（图片来自 javadoop）" loading="lazy"></p>
<p>JDK1.8 的 <code v-pre>ConcurrentHashMap</code> 不再是 <strong>Segment 数组 + HashEntry 数组 + 链表</strong>，而是 <strong>Node 数组 + 链表 / 红黑树</strong>。不过，Node 只能用于链表的情况，红黑树的情况需要使用 <strong><code v-pre>TreeNode</code></strong>。当冲突链表达到一定长度时，链表会转换成红黑树。</p>
<h3 id="concurrenthashmap-线程安全的具体实现方式-底层具体实现" tabindex="-1"><a class="header-anchor" href="#concurrenthashmap-线程安全的具体实现方式-底层具体实现" aria-hidden="true">#</a> ConcurrentHashMap 线程安全的具体实现方式/底层具体实现</h3>
<h4 id="jdk1-7-上面有示意图" tabindex="-1"><a class="header-anchor" href="#jdk1-7-上面有示意图" aria-hidden="true">#</a> JDK1.7（上面有示意图）</h4>
<p>首先将数据分为一段一段的存储，然后给每一段数据配一把锁，当一个线程占用锁访问其中一个段数据时，其他段的数据也能被其他线程访问。</p>
<p><strong><code v-pre>ConcurrentHashMap</code> 是由 <code v-pre>Segment</code> 数组结构和 <code v-pre>HashEntry</code> 数组结构组成</strong>。</p>
<p>Segment 继承了 <code v-pre>ReentrantLock</code>,所以 <code v-pre>Segment</code> 是一种可重入锁，扮演锁的角色。<code v-pre>HashEntry</code> 用于存储键值对数据。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Segment</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">ReentrantLock</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>一个 <code v-pre>ConcurrentHashMap</code> 里包含一个 <code v-pre>Segment</code> 数组。<code v-pre>Segment</code> 的结构和 <code v-pre>HashMap</code> 类似，是一种数组和链表结构，一个 <code v-pre>Segment</code> 包含一个 <code v-pre>HashEntry</code> 数组，每个 <code v-pre>HashEntry</code> 是一个链表结构的元素，每个 <code v-pre>Segment</code> 守护着一个 <code v-pre>HashEntry</code> 数组里的元素，当对 <code v-pre>HashEntry</code> 数组的数据进行修改时，必须首先获得对应的 <code v-pre>Segment</code> 的锁。</p>
<h4 id="jdk1-8-上面有示意图" tabindex="-1"><a class="header-anchor" href="#jdk1-8-上面有示意图" aria-hidden="true">#</a> JDK1.8 （上面有示意图）</h4>
<p><code v-pre>ConcurrentHashMap</code> 取消了 <code v-pre>Segment</code> 分段锁，采用 CAS 和 <code v-pre>synchronized</code> 来保证并发安全。数据结构跟 HashMap1.8 的结构类似，数组+链表/红黑二叉树。Java 8 在链表长度超过一定阈值（8）时将链表（寻址时间复杂度为 O(N)）转换为红黑树（寻址时间复杂度为 O(log(N))）</p>
<p><code v-pre>synchronized</code> 只锁定当前链表或红黑二叉树的首节点，这样只要 hash 不冲突，就不会产生并发，效率又提升 N 倍。</p>
<h2 id="collections-工具类" tabindex="-1"><a class="header-anchor" href="#collections-工具类" aria-hidden="true">#</a> Collections 工具类</h2>
<p>Collections 工具类常用方法:</p>
<ol>
<li>排序</li>
<li>查找,替换操作</li>
<li>同步控制(不推荐，需要线程安全的集合类型时请考虑使用 JUC 包下的并发集合)</li>
</ol>
<h3 id="排序操作" tabindex="-1"><a class="header-anchor" href="#排序操作" aria-hidden="true">#</a> 排序操作</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">void</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">)</span><span class="token comment">//反转</span>
<span class="token keyword">void</span> <span class="token function">shuffle</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">)</span><span class="token comment">//随机排序</span>
<span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">)</span><span class="token comment">//按自然排序的升序排序</span>
<span class="token keyword">void</span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">Comparator</span> c<span class="token punctuation">)</span><span class="token comment">//定制排序，由Comparator控制排序逻辑</span>
<span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token keyword">int</span> i <span class="token punctuation">,</span> <span class="token keyword">int</span> j<span class="token punctuation">)</span><span class="token comment">//交换两个索引位置的元素</span>
<span class="token keyword">void</span> <span class="token function">rotate</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token keyword">int</span> distance<span class="token punctuation">)</span><span class="token comment">//旋转。当distance为正数时，将list后distance个元素整体移到前面。当distance为负数时，将 list的前distance个元素整体移到后面</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找-替换操作" tabindex="-1"><a class="header-anchor" href="#查找-替换操作" aria-hidden="true">#</a> 查找,替换操作</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">Object</span> key<span class="token punctuation">)</span><span class="token comment">//对List进行二分查找，返回索引，注意List必须是有序的</span>
<span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token class-name">Collection</span> coll<span class="token punctuation">)</span><span class="token comment">//根据元素的自然顺序，返回最大的元素。 类比int min(Collection coll)</span>
<span class="token keyword">int</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token class-name">Collection</span> coll<span class="token punctuation">,</span> <span class="token class-name">Comparator</span> c<span class="token punctuation">)</span><span class="token comment">//根据定制排序，返回最大元素，排序规则由Comparatator类控制。类比int min(Collection coll, Comparator c)</span>
<span class="token keyword">void</span> <span class="token function">fill</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">Object</span> obj<span class="token punctuation">)</span><span class="token comment">//用指定的元素代替指定list中的所有元素</span>
<span class="token keyword">int</span> <span class="token function">frequency</span><span class="token punctuation">(</span><span class="token class-name">Collection</span> c<span class="token punctuation">,</span> <span class="token class-name">Object</span> o<span class="token punctuation">)</span><span class="token comment">//统计元素出现次数</span>
<span class="token keyword">int</span> <span class="token function">indexOfSubList</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">List</span> target<span class="token punctuation">)</span><span class="token comment">//统计target在list中第一次出现的索引，找不到则返回-1，类比int lastIndexOfSubList(List source, list target)</span>
<span class="token keyword">boolean</span> <span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token class-name">List</span> list<span class="token punctuation">,</span> <span class="token class-name">Object</span> oldVal<span class="token punctuation">,</span> <span class="token class-name">Object</span> newVal<span class="token punctuation">)</span><span class="token comment">//用新元素替换旧元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="同步控制" tabindex="-1"><a class="header-anchor" href="#同步控制" aria-hidden="true">#</a> 同步控制</h3>
<p><code v-pre>Collections</code> 提供了多个<code v-pre>synchronizedXxx()</code>方法·，该方法可以将指定集合包装成线程同步的集合，从而解决多线程并发访问集合时的线程安全问题。</p>
<p>我们知道 <code v-pre>HashSet</code>，<code v-pre>TreeSet</code>，<code v-pre>ArrayList</code>,<code v-pre>LinkedList</code>,<code v-pre>HashMap</code>,<code v-pre>TreeMap</code> 都是线程不安全的。<code v-pre>Collections</code> 提供了多个静态方法可以把他们包装成线程同步的集合。</p>
<p><strong>最好不要用下面这些方法，效率非常低，需要线程安全的集合类型时请考虑使用 JUC 包下的并发集合。</strong></p>
<p>方法如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">synchronizedCollection</span><span class="token punctuation">(</span><span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span>  c<span class="token punctuation">)</span> <span class="token comment">//返回指定 collection 支持的同步（线程安全的）collection。</span>
<span class="token function">synchronizedList</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> list<span class="token punctuation">)</span><span class="token comment">//返回指定列表支持的同步（线程安全的）List。</span>
<span class="token function">synchronizedMap</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">></span></span> m<span class="token punctuation">)</span> <span class="token comment">//返回由指定映射支持的同步（线程安全的）Map。</span>
<span class="token function">synchronizedSet</span><span class="token punctuation">(</span><span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> s<span class="token punctuation">)</span> <span class="token comment">//返回指定 set 支持的同步（线程安全的）set。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
