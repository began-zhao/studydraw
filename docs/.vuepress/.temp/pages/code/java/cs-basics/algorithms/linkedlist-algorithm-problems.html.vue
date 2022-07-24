<template><div><h2 id="_1-两数相加" tabindex="-1"><a class="header-anchor" href="#_1-两数相加" aria-hidden="true">#</a> 1. 两数相加</h2>
<h3 id="题目描述" tabindex="-1"><a class="header-anchor" href="#题目描述" aria-hidden="true">#</a> 题目描述</h3>
<blockquote>
<p>Leetcode:给定两个非空链表来表示两个非负整数。位数按照逆序方式存储，它们的每个节点只存储单个数字。将两数相加返回一个新的链表。</p>
<p>你可以假设除了数字 0 之外，这两个数字都不会以零开头。</p>
</blockquote>
<p>示例：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析" aria-hidden="true">#</a> 问题分析</h3>
<p>Leetcode官方详细解答地址：</p>
<p><a href="https://leetcode-cn.com/problems/add-two-numbers/solution/" target="_blank" rel="noopener noreferrer">https://leetcode-cn.com/problems/add-two-numbers/solution/<ExternalLinkIcon/></a></p>
<blockquote>
<p>要对头结点进行操作时，考虑创建哑节点dummy，使用dummy-&gt;next表示真正的头节点。这样可以避免处理头节点为空的边界问题。</p>
</blockquote>
<p>我们使用变量来跟踪进位，并从包含最低有效位的表头开始模拟逐
位相加的过程。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-9-20/34910956.jpg" alt="图1，对两数相加方法的可视化: 342 + 465 = 807342+465=807， 每个结点都包含一个数字，并且数字按位逆序存储。" loading="lazy"></p>
<h3 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h3>
<p><strong>我们首先从最低有效位也就是列表 l1和 l2 的表头开始相加。注意需要考虑到进位的情况！</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
 <span class="token comment">//https://leetcode-cn.com/problems/add-two-numbers/description/</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">addTwoNumbers</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> l1<span class="token punctuation">,</span> <span class="token class-name">ListNode</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">ListNode</span> dummyHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> p <span class="token operator">=</span> l1<span class="token punctuation">,</span> q <span class="token operator">=</span> l2<span class="token punctuation">,</span> curr <span class="token operator">=</span> dummyHead<span class="token punctuation">;</span>
    <span class="token comment">//carry 表示进位数</span>
    <span class="token keyword">int</span> carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">||</span> q <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> p<span class="token punctuation">.</span>val <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> <span class="token punctuation">(</span>q <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token operator">?</span> q<span class="token punctuation">.</span>val <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> sum <span class="token operator">=</span> carry <span class="token operator">+</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
        <span class="token comment">//进位数</span>
        carry <span class="token operator">=</span> sum <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token comment">//新节点的数值为sum % 10</span>
        curr<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>sum <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        curr <span class="token operator">=</span> curr<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>q <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> q <span class="token operator">=</span> q<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>carry <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        curr<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>carry<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> dummyHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-翻转链表" tabindex="-1"><a class="header-anchor" href="#_2-翻转链表" aria-hidden="true">#</a> 2. 翻转链表</h2>
<h3 id="题目描述-1" tabindex="-1"><a class="header-anchor" href="#题目描述-1" aria-hidden="true">#</a> 题目描述</h3>
<blockquote>
<p>剑指 offer:输入一个链表，反转链表后，输出链表的所有元素。</p>
</blockquote>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-9-20/81431871.jpg" alt="翻转链表" loading="lazy"></p>
<h3 id="问题分析-1" tabindex="-1"><a class="header-anchor" href="#问题分析-1" aria-hidden="true">#</a> 问题分析</h3>
<p>这道算法题，说直白点就是：如何让后一个节点指向前一个节点！在下面的代码中定义了一个 next 节点，该节点主要是保存要反转到头的那个节点，防止链表 “断裂”。</p>
<h3 id="solution-1" tabindex="-1"><a class="header-anchor" href="#solution-1" aria-hidden="true">#</a> Solution</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ListNode</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> val<span class="token punctuation">;</span>
  <span class="token class-name">ListNode</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * 
 * <span class="token keyword">@author</span> Snailclimb
 * <span class="token keyword">@date</span> 2018年9月19日
 * @Description: TODO
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>

  <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token class-name">ReverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">ListNode</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 保存要反转到头的那个节点</span>
      next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token comment">// 要反转的那个节点指向已经反转的上一个节点(备注:第一次反转的时候会指向null)</span>
      head<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
      <span class="token comment">// 上一个已经反转到头部的节点</span>
      pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
      <span class="token comment">// 一直向链表尾走</span>
      head <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">ListNode</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> d <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> e <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    a<span class="token punctuation">.</span>next <span class="token operator">=</span> b<span class="token punctuation">;</span>
    b<span class="token punctuation">.</span>next <span class="token operator">=</span> c<span class="token punctuation">;</span>
    c<span class="token punctuation">.</span>next <span class="token operator">=</span> d<span class="token punctuation">;</span>
    d<span class="token punctuation">.</span>next <span class="token operator">=</span> e<span class="token punctuation">;</span>
    <span class="token keyword">new</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ReverseList</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
      e <span class="token operator">=</span> e<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>5
4
3
2
1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-链表中倒数第k个节点" tabindex="-1"><a class="header-anchor" href="#_3-链表中倒数第k个节点" aria-hidden="true">#</a> 3. 链表中倒数第k个节点</h2>
<h3 id="题目描述-2" tabindex="-1"><a class="header-anchor" href="#题目描述-2" aria-hidden="true">#</a> 题目描述</h3>
<blockquote>
<p>剑指offer: 输入一个链表，输出该链表中倒数第k个结点。</p>
</blockquote>
<h3 id="问题分析-2" tabindex="-1"><a class="header-anchor" href="#问题分析-2" aria-hidden="true">#</a> 问题分析</h3>
<blockquote>
<p><strong>链表中倒数第k个节点也就是正数第(L-K+1)个节点，知道了只一点，这一题基本就没问题！</strong></p>
</blockquote>
<p>首先两个节点/指针，一个节点 node1 先开始跑，指针 node1 跑到 k-1 个节点后，另一个节点 node2 开始跑，当 node1 跑到最后时，node2 所指的节点就是倒数第k个节点也就是正数第(L-K+1)个节点。</p>
<h3 id="solution-2" tabindex="-1"><a class="header-anchor" href="#solution-2" aria-hidden="true">#</a> Solution</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">/*
public class ListNode {
    int val;
    ListNode next = null;

    ListNode(int val) {
        this.val = val;
    }
}*/</span>

<span class="token comment">// 时间复杂度O(n),一次遍历即可</span>
<span class="token comment">// https://www.nowcoder.com/practice/529d3ae5a407492994ad2a246518148a?tpId=13&amp;tqId=11167&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token class-name">FindKthToTail</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果链表为空或者k小于等于0</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">||</span> k <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 声明两个指向头结点的节点</span>
    <span class="token class-name">ListNode</span> node1 <span class="token operator">=</span> head<span class="token punctuation">,</span> node2 <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">// 记录节点的个数</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 记录k值，后面要使用</span>
    <span class="token keyword">int</span> index <span class="token operator">=</span> k<span class="token punctuation">;</span>
    <span class="token comment">// p指针先跑，并且记录节点数，当node1节点跑了k-1个节点后，node2节点开始跑，</span>
    <span class="token comment">// 当node1节点跑到最后时，node2节点所指的节点就是倒数第k个节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node1 <span class="token operator">=</span> node1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      count<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node2 <span class="token operator">=</span> node2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      k<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果节点个数小于所求的倒数第k个节点，则返回空</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;</span> index<span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> node2<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-删除链表的倒数第n个节点" tabindex="-1"><a class="header-anchor" href="#_4-删除链表的倒数第n个节点" aria-hidden="true">#</a> 4. 删除链表的倒数第N个节点</h2>
<blockquote>
<p>Leetcode:给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。</p>
</blockquote>
<p><strong>示例：</strong></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>给定一个链表: 1->2->3->4->5, 和 n = 2.

当删除了倒数第二个节点后，链表变为 1->2->3->5.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>说明：</strong></p>
<p>给定的 n 保证是有效的。</p>
<p><strong>进阶：</strong></p>
<p>你能尝试使用一趟扫描实现吗？</p>
<p>该题在 leetcode 上有详细解答，具体可参考 Leetcode.</p>
<h3 id="问题分析-3" tabindex="-1"><a class="header-anchor" href="#问题分析-3" aria-hidden="true">#</a> 问题分析</h3>
<p>我们注意到这个问题可以容易地简化成另一个问题：删除从列表开头数起的第 (L - n + 1)个结点，其中 L是列表的长度。只要我们找到列表的长度 L，这个问题就很容易解决。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-9-20/94354387.jpg" alt="图 1. 删除列表中的第 L - n + 1 个元素" loading="lazy"></p>
<h3 id="solution-3" tabindex="-1"><a class="header-anchor" href="#solution-3" aria-hidden="true">#</a> Solution</h3>
<p><strong>两次遍历法</strong></p>
<p>首先我们将添加一个 <strong>哑结点</strong> 作为辅助，该结点位于列表头部。哑结点用来简化某些极端情况，例如列表中只含有一个结点，或需要删除列表的头部。在第一次遍历中，我们找出列表的长度 L。然后设置一个指向哑结点的指针，并移动它遍历列表，直至它到达第 (L - n) 个结点那里。<strong>我们把第 (L - n)个结点的 next 指针重新链接至第 (L - n + 2)个结点，完成这个算法。</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token comment">// https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/description/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 哑结点，哑结点用来简化某些极端情况，例如列表中只含有一个结点，或需要删除列表的头部</span>
    <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 哑结点指向头结点</span>
    dummy<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">// 保存链表长度</span>
    <span class="token keyword">int</span> length <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> len <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>len <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      length<span class="token operator">++</span><span class="token punctuation">;</span>
      len <span class="token operator">=</span> len<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    length <span class="token operator">=</span> length <span class="token operator">-</span> n<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> target <span class="token operator">=</span> dummy<span class="token punctuation">;</span>
    <span class="token comment">// 找到 L-n 位置的节点</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      target <span class="token operator">=</span> target<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      length<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 把第 (L - n)个结点的 next 指针重新链接至第 (L - n + 2)个结点</span>
    target<span class="token punctuation">.</span>next <span class="token operator">=</span> target<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析：</strong></p>
<ul>
<li><strong>时间复杂度 O(L)</strong> ：该算法对列表进行了两次遍历，首先计算了列表的长度 LL 其次找到第 (L - n)(L−n) 个结点。 操作执行了 2L-n2L−n 步，时间复杂度为 O(L)O(L)。</li>
<li><strong>空间复杂度 O(1)</strong> ：我们只用了常量级的额外空间。</li>
</ul>
<p><strong>进阶——一次遍历法：</strong></p>
<blockquote>
<p>链表中倒数第N个节点也就是正数第(L-N+1)个节点。</p>
</blockquote>
<p>其实这种方法就和我们上面第四题找“链表中倒数第k个节点”所用的思想是一样的。<strong>基本思路就是：</strong>  定义两个节点 node1、node2;node1 节点先跑，node1节点 跑到第 n+1 个节点的时候,node2 节点开始跑.当node1 节点跑到最后一个节点时，node2 节点所在的位置就是第 （L-n ） 个节点（L代表总链表长度，也就是倒数第 n+1 个节点）</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * public class ListNode <span class="token punctuation">{</span>
 *     int val;
 *     ListNode next;
 *     ListNode(int x) <span class="token punctuation">{</span> val = x; <span class="token punctuation">}</span>
 * <span class="token punctuation">}</span>
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">removeNthFromEnd</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span> <span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">ListNode</span> dummy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    dummy<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
    <span class="token comment">// 声明两个指向头结点的节点</span>
    <span class="token class-name">ListNode</span> node1 <span class="token operator">=</span> dummy<span class="token punctuation">,</span> node2 <span class="token operator">=</span> dummy<span class="token punctuation">;</span>

    <span class="token comment">// node1 节点先跑，node1节点 跑到第 n 个节点的时候,node2 节点开始跑</span>
    <span class="token comment">// 当node1 节点跑到最后一个节点时，node2 节点所在的位置就是第 （L-n ） 个节点，也就是倒数第 n+1（L代表总链表长度）</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>node1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      node1 <span class="token operator">=</span> node1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> node1 <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        node2 <span class="token operator">=</span> node2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      n<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    node2<span class="token punctuation">.</span>next <span class="token operator">=</span> node2<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

    <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-合并两个排序的链表" tabindex="-1"><a class="header-anchor" href="#_5-合并两个排序的链表" aria-hidden="true">#</a> 5. 合并两个排序的链表</h2>
<h3 id="题目描述-3" tabindex="-1"><a class="header-anchor" href="#题目描述-3" aria-hidden="true">#</a> 题目描述</h3>
<blockquote>
<p>剑指offer:输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。</p>
</blockquote>
<h3 id="问题分析-4" tabindex="-1"><a class="header-anchor" href="#问题分析-4" aria-hidden="true">#</a> 问题分析</h3>
<p>我们可以这样分析:</p>
<ol>
<li>假设我们有两个链表 A,B；</li>
<li>A的头节点A1的值与B的头结点B1的值比较，假设A1小，则A1为头节点；</li>
<li>A2再和B1比较，假设B1小,则，A1指向B1；</li>
<li>A2再和B2比较
就这样循环往复就行了，应该还算好理解。</li>
</ol>
<p>考虑通过递归的方式实现！</p>
<h3 id="solution-4" tabindex="-1"><a class="header-anchor" href="#solution-4" aria-hidden="true">#</a> Solution</h3>
<p><strong>递归版本：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">/*
public class ListNode {
    int val;
    ListNode next = null;

    ListNode(int val) {
        this.val = val;
    }
}*/</span>
<span class="token comment">//https://www.nowcoder.com/practice/d8b6b4358f774294a89de2a6ac4d9337?tpId=13&amp;tqId=11169&amp;tPage=1&amp;rp=1&amp;ru=/ta/coding-interviews&amp;qru=/ta/coding-interviews/question-ranking</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
<span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token class-name">Merge</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> list1<span class="token punctuation">,</span><span class="token class-name">ListNode</span> list2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>list1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">return</span> list2<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>list2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">return</span> list1<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
           list1<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token class-name">Merge</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> list2<span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token keyword">return</span> list1<span class="token punctuation">;</span>
       <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
           list2<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token class-name">Merge</span><span class="token punctuation">(</span>list1<span class="token punctuation">,</span> list2<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token keyword">return</span> list2<span class="token punctuation">;</span>
       <span class="token punctuation">}</span>       
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
