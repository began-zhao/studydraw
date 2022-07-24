<template><div><h1 id="线性数据结构-数组、链表、栈、队列" tabindex="-1"><a class="header-anchor" href="#线性数据结构-数组、链表、栈、队列" aria-hidden="true">#</a> 线性数据结构 :数组、链表、栈、队列</h1>
<blockquote>
<p>开头还是求点赞，求转发！原创优质公众号，希望大家能让更多人看到我们的文章。</p>
<p>图片都是我们手绘的，可以说非常用心了！</p>
</blockquote>
<h2 id="_1-数组" tabindex="-1"><a class="header-anchor" href="#_1-数组" aria-hidden="true">#</a> 1. 数组</h2>
<p><strong>数组（Array）</strong> 是一种很常见的数据结构。它由相同类型的元素（element）组成，并且是使用一块连续的内存来存储。</p>
<p>我们直接可以利用元素的索引（index）可以计算出该元素对应的存储地址。</p>
<p>数组的特点是：<strong>提供随机访问</strong> 并且容量有限。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>假如数组的长度为 n。
访问：<span class="token class-name">O</span>（<span class="token number">1</span>）<span class="token comment">//访问特定位置的元素</span>
插入：<span class="token class-name">O</span>（n ）<span class="token comment">//最坏的情况发生在插入发生在数组的首部并需要移动所有元素时</span>
删除：<span class="token class-name">O</span>（n）<span class="token comment">//最坏的情况发生在删除数组的开头发生并需要移动第一元素后面所有的元素时</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/数组.png" alt="数组" loading="lazy"></p>
<h2 id="_2-链表" tabindex="-1"><a class="header-anchor" href="#_2-链表" aria-hidden="true">#</a> 2. 链表</h2>
<h3 id="_2-1-链表简介" tabindex="-1"><a class="header-anchor" href="#_2-1-链表简介" aria-hidden="true">#</a> 2.1. 链表简介</h3>
<p><strong>链表（LinkedList）</strong> 虽然是一种线性表，但是并不会按线性的顺序存储数据，使用的不是连续的内存空间来存储数据。</p>
<p>链表的插入和删除操作的复杂度为 O(1) ，只需要知道目标位置元素的上一个元素即可。但是，在查找一个节点或者访问特定位置的节点的时候复杂度为 O(n) 。</p>
<p>使用链表结构可以克服数组需要预先知道数据大小的缺点，链表结构可以充分利用计算机内存空间,实现灵活的内存动态管理。但链表不会节省空间，相比于数组会占用更多的空间，因为链表中每个节点存放的还有指向其他节点的指针。除此之外，链表不具有数组随机读取的优点。</p>
<h3 id="_2-2-链表分类" tabindex="-1"><a class="header-anchor" href="#_2-2-链表分类" aria-hidden="true">#</a> 2.2. 链表分类</h3>
<p><strong>常见链表分类：</strong></p>
<ol>
<li>单链表</li>
<li>双向链表</li>
<li>循环链表</li>
<li>双向循环链表</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>假如链表中有n个元素。
访问：<span class="token class-name">O</span>（n）<span class="token comment">//访问特定位置的元素</span>
插入删除：<span class="token class-name">O</span>（<span class="token number">1</span>）<span class="token comment">//必须要要知道插入元素的位置</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-1-单链表" tabindex="-1"><a class="header-anchor" href="#_2-2-1-单链表" aria-hidden="true">#</a> 2.2.1. 单链表</h4>
<p><strong>单链表</strong> 单向链表只有一个方向，结点只有一个后继指针 next 指向后面的节点。因此，链表这种数据结构通常在物理内存上是不连续的。我们习惯性地把第一个结点叫作头结点，链表通常有一个不保存任何值的 head 节点(头结点)，通过头结点我们可以遍历整个链表。尾结点通常指向 null。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/单链表2.png" alt="单链表" loading="lazy"></p>
<h4 id="_2-2-2-循环链表" tabindex="-1"><a class="header-anchor" href="#_2-2-2-循环链表" aria-hidden="true">#</a> 2.2.2. 循环链表</h4>
<p><strong>循环链表</strong> 其实是一种特殊的单链表，和单链表不同的是循环链表的尾结点不是指向 null，而是指向链表的头结点。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/循环链表2.png" alt="循环链表" loading="lazy"></p>
<h4 id="_2-2-3-双向链表" tabindex="-1"><a class="header-anchor" href="#_2-2-3-双向链表" aria-hidden="true">#</a> 2.2.3. 双向链表</h4>
<p><strong>双向链表</strong> 包含两个指针，一个 prev 指向前一个节点，一个 next 指向后一个节点。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/双向链表.png" alt="双向链表" loading="lazy"></p>
<h4 id="_2-2-4-双向循环链表" tabindex="-1"><a class="header-anchor" href="#_2-2-4-双向循环链表" aria-hidden="true">#</a> 2.2.4. 双向循环链表</h4>
<p><strong>双向循环链表</strong> 最后一个节点的 next 指向 head，而 head 的 prev 指向最后一个节点，构成一个环。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/双向循环链表.png" alt="双向循环链表" loading="lazy"></p>
<h3 id="_2-3-应用场景" tabindex="-1"><a class="header-anchor" href="#_2-3-应用场景" aria-hidden="true">#</a> 2.3. 应用场景</h3>
<ul>
<li>如果需要支持随机访问的话，链表没办法做到。</li>
<li>如果需要存储的数据元素的个数不确定，并且需要经常添加和删除数据的话，使用链表比较合适。</li>
<li>如果需要存储的数据元素的个数确定，并且不需要经常添加和删除数据的话，使用数组比较合适。</li>
</ul>
<h3 id="_2-4-数组-vs-链表" tabindex="-1"><a class="header-anchor" href="#_2-4-数组-vs-链表" aria-hidden="true">#</a> 2.4. 数组 vs 链表</h3>
<ul>
<li>数组支持随机访问，而链表不支持。</li>
<li>数组使用的是连续内存空间对 CPU 的缓存机制友好，链表则相反。</li>
<li>数组的大小固定，而链表则天然支持动态扩容。如果声明的数组过小，需要另外申请一个更大的内存空间存放数组元素，然后将原数组拷贝进去，这个操作是比较耗时的！</li>
</ul>
<h2 id="_3-栈" tabindex="-1"><a class="header-anchor" href="#_3-栈" aria-hidden="true">#</a> 3. 栈</h2>
<h3 id="_3-1-栈简介" tabindex="-1"><a class="header-anchor" href="#_3-1-栈简介" aria-hidden="true">#</a> 3.1. 栈简介</h3>
<p><strong>栈</strong> (stack)只允许在有序的线性数据集合的一端（称为栈顶 top）进行加入数据（push）和移除数据（pop）。因而按照 <strong>后进先出（LIFO, Last In First Out）</strong> 的原理运作。<strong>在栈中，push 和 pop 的操作都发生在栈顶。</strong></p>
<p>栈常用一维数组或链表来实现，用数组实现的栈叫作 <strong>顺序栈</strong> ，用链表实现的栈叫作 <strong>链式栈</strong> 。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>假设堆栈中有n个元素。
访问：<span class="token class-name">O</span>（n）<span class="token comment">//最坏情况</span>
插入删除：<span class="token class-name">O</span>（<span class="token number">1</span>）<span class="token comment">//顶端插入和删除元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/栈.png" alt="栈" loading="lazy"></p>
<h3 id="_3-2-栈的常见应用常见应用场景" tabindex="-1"><a class="header-anchor" href="#_3-2-栈的常见应用常见应用场景" aria-hidden="true">#</a> 3.2. 栈的常见应用常见应用场景</h3>
<p>当我们我们要处理的数据只涉及在一端插入和删除数据，并且满足 <strong>后进先出（LIFO, Last In First Out）</strong> 的特性时，我们就可以使用栈这个数据结构。</p>
<h4 id="_3-2-1-实现浏览器的回退和前进功能" tabindex="-1"><a class="header-anchor" href="#_3-2-1-实现浏览器的回退和前进功能" aria-hidden="true">#</a> 3.2.1. 实现浏览器的回退和前进功能</h4>
<p>我们只需要使用两个栈(Stack1 和 Stack2)和就能实现这个功能。比如你按顺序查看了 1,2,3,4 这四个页面，我们依次把 1,2,3,4 这四个页面压入 Stack1 中。当你想回头看 2 这个页面的时候，你点击回退按钮，我们依次把 4,3 这两个页面从 Stack1 弹出，然后压入 Stack2 中。假如你又想回到页面 3，你点击前进按钮，我们将 3 页面从 Stack2 弹出，然后压入到 Stack1 中。示例图如下:</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/栈实现浏览器倒退和前进.png" alt="栈实现浏览器倒退和前进" loading="lazy"></p>
<h4 id="_3-2-2-检查符号是否成对出现" tabindex="-1"><a class="header-anchor" href="#_3-2-2-检查符号是否成对出现" aria-hidden="true">#</a> 3.2.2. 检查符号是否成对出现</h4>
<blockquote>
<p>给定一个只包括 <code v-pre>'('</code>，<code v-pre>')'</code>，<code v-pre>'{'</code>，<code v-pre>'}'</code>，<code v-pre>'['</code>，<code v-pre>']'</code> 的字符串，判断该字符串是否有效。</p>
<p>有效字符串需满足：</p>
<ol>
<li>左括号必须用相同类型的右括号闭合。</li>
<li>左括号必须以正确的顺序闭合。</li>
</ol>
<p>比如 &quot;()&quot;、&quot;()[]{}&quot;、&quot;{[]}&quot; 都是有效字符串，而 &quot;(]&quot; 、&quot;([)]&quot; 则不是。</p>
</blockquote>
<p>这个问题实际是 Leetcode 的一道题目，我们可以利用栈 <code v-pre>Stack</code> 来解决这个问题。</p>
<ol>
<li>首先我们将括号间的对应规则存放在 <code v-pre>Map</code> 中，这一点应该毋容置疑；</li>
<li>创建一个栈。遍历字符串，如果字符是左括号就直接加入<code v-pre>stack</code>中，否则将<code v-pre>stack</code> 的栈顶元素与这个括号做比较，如果不相等就直接返回 false。遍历结束，如果<code v-pre>stack</code>为空，返回 <code v-pre>true</code>。</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">isValid</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// 括号之间的对应规则</span>
    <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">,</span> <span class="token class-name">Character</span><span class="token punctuation">></span></span> mappings <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">,</span> <span class="token class-name">Character</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    mappings<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token char">')'</span><span class="token punctuation">,</span> <span class="token char">'('</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    mappings<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token char">'}'</span><span class="token punctuation">,</span> <span class="token char">'{'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    mappings<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token char">']'</span><span class="token punctuation">,</span> <span class="token char">'['</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">></span></span> stack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>mappings<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> topElement <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token char">'#'</span> <span class="token operator">:</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>topElement <span class="token operator">!=</span> mappings<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-3-反转字符串" tabindex="-1"><a class="header-anchor" href="#_3-2-3-反转字符串" aria-hidden="true">#</a> 3.2.3. 反转字符串</h4>
<p>将字符串中的每个字符先入栈再出栈就可以了。</p>
<h4 id="_3-2-4-维护函数调用" tabindex="-1"><a class="header-anchor" href="#_3-2-4-维护函数调用" aria-hidden="true">#</a> 3.2.4. 维护函数调用</h4>
<p>最后一个被调用的函数必须先完成执行，符合栈的 <strong>后进先出（LIFO, Last In First Out）</strong> 特性。</p>
<h3 id="_3-3-栈的实现" tabindex="-1"><a class="header-anchor" href="#_3-3-栈的实现" aria-hidden="true">#</a> 3.3. 栈的实现</h3>
<p>栈既可以通过数组实现，也可以通过链表来实现。不管基于数组还是链表，入栈、出栈的时间复杂度都为 O(1)。</p>
<p>下面我们使用数组来实现一个栈，并且这个栈具有<code v-pre>push()</code>、<code v-pre>pop()</code>（返回栈顶元素并出栈）、<code v-pre>peek()</code> （返回栈顶元素不出栈）、<code v-pre>isEmpty()</code>、<code v-pre>size()</code>这些基本的方法。</p>
<blockquote>
<p>提示：每次入栈之前先判断栈的容量是否够用，如果不够用就用<code v-pre>Arrays.copyOf()</code>进行扩容；</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyStack</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> storage<span class="token punctuation">;</span><span class="token comment">//存放栈中元素的数组</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> capacity<span class="token punctuation">;</span><span class="token comment">//栈的容量</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> count<span class="token punctuation">;</span><span class="token comment">//栈中元素数量</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> GROW_FACTOR <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

    <span class="token comment">//不带初始容量的构造方法。默认容量为8</span>
    <span class="token keyword">public</span> <span class="token class-name">MyStack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>capacity <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>storage<span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//带初始容量的构造方法</span>
    <span class="token keyword">public</span> <span class="token class-name">MyStack</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"Capacity too small."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">this</span><span class="token punctuation">.</span>capacity <span class="token operator">=</span> initialCapacity<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>storage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>initialCapacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//入栈</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> capacity<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">ensureCapacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        storage<span class="token punctuation">[</span>count<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//确保容量大小</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">ensureCapacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> newCapacity <span class="token operator">=</span> capacity <span class="token operator">*</span> GROW_FACTOR<span class="token punctuation">;</span>
        storage <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">copyOf</span><span class="token punctuation">(</span>storage<span class="token punctuation">,</span> newCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        capacity <span class="token operator">=</span> newCapacity<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//返回栈顶元素并出栈</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"Stack is empty."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        count<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> storage<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//返回栈顶元素不出栈</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">"Stack is empty."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> storage<span class="token punctuation">[</span>count<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//判断栈是否为空</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//返回栈中元素的个数</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> count<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>验证</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">MyStack</span> myStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyStack</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
myStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myStack<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//8</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myStack<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//8</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">8</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>myStack<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
myStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//报错：java.lang.IllegalArgumentException: Stack is empty.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-队列" tabindex="-1"><a class="header-anchor" href="#_4-队列" aria-hidden="true">#</a> 4. 队列</h2>
<h3 id="_4-1-队列简介" tabindex="-1"><a class="header-anchor" href="#_4-1-队列简介" aria-hidden="true">#</a> 4.1. 队列简介</h3>
<p><strong>队列</strong> 是 <strong>先进先出( FIFO，First In, First Out)</strong> 的线性表。在具体应用中通常用链表或者数组来实现，用数组实现的队列叫作 <strong>顺序队列</strong> ，用链表实现的队列叫作 <strong>链式队列</strong> 。<strong>队列只允许在后端（rear）进行插入操作也就是 入队 enqueue，在前端（front）进行删除操作也就是出队 dequeue</strong></p>
<p>队列的操作方式和堆栈类似，唯一的区别在于队列只允许新数据在后端进行添加。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>假设队列中有n个元素。
访问：<span class="token class-name">O</span>（n）<span class="token comment">//最坏情况</span>
插入删除：<span class="token class-name">O</span>（<span class="token number">1</span>）<span class="token comment">//后端插入前端删除元素</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/队列.png" alt="队列" loading="lazy"></p>
<h3 id="_4-2-队列分类" tabindex="-1"><a class="header-anchor" href="#_4-2-队列分类" aria-hidden="true">#</a> 4.2. 队列分类</h3>
<h4 id="_4-2-1-单队列" tabindex="-1"><a class="header-anchor" href="#_4-2-1-单队列" aria-hidden="true">#</a> 4.2.1. 单队列</h4>
<p>单队列就是常见的队列, 每次添加元素时，都是添加到队尾。单队列又分为 <strong>顺序队列（数组实现）</strong> 和 <strong>链式队列（链表实现）</strong>。</p>
<p><strong>顺序队列存在“假溢出”的问题也就是明明有位置却不能添加的情况。</strong></p>
<p>假设下图是一个顺序队列，我们将前两个元素 1,2 出队，并入队两个元素 7,8。当进行入队、出队操作的时候，front 和 rear 都会持续往后移动，当 rear 移动到最后的时候,我们无法再往队列中添加数据，即使数组中还有空余空间，这种现象就是 <strong>”假溢出“</strong> 。除了假溢出问题之外，如下图所示，当添加元素 8 的时候，rear 指针移动到数组之外（越界）。</p>
<blockquote>
<p>为了避免当只有一个元素的时候，队头和队尾重合使处理变得麻烦，所以引入两个指针，front 指针指向对头元素，rear 指针指向队列最后一个元素的下一个位置，这样当 front 等于 rear 时，此队列不是还剩一个元素，而是空队列。——From 《大话数据结构》</p>
</blockquote>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/顺序队列假溢出1.png" alt="顺序队列假溢出" loading="lazy"></p>
<h4 id="_4-2-2-循环队列" tabindex="-1"><a class="header-anchor" href="#_4-2-2-循环队列" aria-hidden="true">#</a> 4.2.2. 循环队列</h4>
<p>循环队列可以解决顺序队列的假溢出和越界问题。解决办法就是：从头开始，这样也就会形成头尾相接的循环，这也就是循环队列名字的由来。</p>
<p>还是用上面的图，我们将 rear 指针指向数组下标为 0 的位置就不会有越界问题了。当我们再向队列中添加元素的时候， rear 向后移动。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/循环队列.png" alt="循环队列" loading="lazy"></p>
<p>顺序队列中，我们说 <code v-pre>front==rear</code> 的时候队列为空，循环队列中则不一样，也可能为满，如上图所示。解决办法有两种：</p>
<ol>
<li>可以设置一个标志变量 <code v-pre>flag</code>,当 <code v-pre>front==rear</code> 并且 <code v-pre>flag=0</code> 的时候队列为空，当<code v-pre>front==rear</code> 并且 <code v-pre>flag=1</code> 的时候队列为满。</li>
<li>队列为空的时候就是 <code v-pre>front==rear</code> ，队列满的时候，我们保证数组还有一个空闲的位置，rear 就指向这个空闲位置，如下图所示，那么现在判断队列是否为满的条件就是： <code v-pre>(rear+1) % QueueSize= front</code> 。</li>
</ol>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/循环队列-堆满.png" alt="循环队列-队满" loading="lazy"></p>
<h3 id="_4-3-常见应用场景" tabindex="-1"><a class="header-anchor" href="#_4-3-常见应用场景" aria-hidden="true">#</a> 4.3. 常见应用场景</h3>
<p>当我们需要按照一定顺序来处理数据的时候可以考虑使用队列这个数据结构。</p>
<ul>
<li><strong>阻塞队列：</strong> 阻塞队列可以看成在队列基础上加了阻塞操作的队列。当队列为空的时候，出队操作阻塞，当队列满的时候，入队操作阻塞。使用阻塞队列我们可以很容易实现“生产者 - 消费者“模型。</li>
<li><strong>线程池中的请求/任务队列：</strong> 线程池中没有空闲线程时，新的任务请求线程资源时，线程池该如何处理呢？答案是将这些请求放在队列中，当有空闲线程的时候，会循环中反复从队列中获取任务来执行。队列分为无界队列(基于链表)和有界队列(基于数组)。无界队列的特点就是可以一直入列，除非系统资源耗尽，比如 ：<code v-pre>FixedThreadPool</code> 使用无界队列 <code v-pre>LinkedBlockingQueue</code>。但是有界队列就不一样了，当队列满的话后面再有任务/请求就会拒绝，在 Java 中的体现就是会抛出<code v-pre>java.util.concurrent.RejectedExecutionException</code> 异常。</li>
<li>Linux 内核进程队列（按优先级排队）</li>
<li>现实生活中的派对，播放器上的播放列表;</li>
<li>消息队列</li>
<li>等等......</li>
</ul>
</div></template>
