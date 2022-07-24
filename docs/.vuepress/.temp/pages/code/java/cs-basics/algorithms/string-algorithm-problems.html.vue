<template><div><blockquote>
<p>授权转载！</p>
<ul>
<li>本文作者：wwwxmu</li>
<li>原文地址:<a href="https://www.weiweiblog.cn/13string/" target="_blank" rel="noopener noreferrer">https://www.weiweiblog.cn/13string/<ExternalLinkIcon/></a></li>
</ul>
</blockquote>
<h2 id="_1-kmp-算法" tabindex="-1"><a class="header-anchor" href="#_1-kmp-算法" aria-hidden="true">#</a> 1. KMP 算法</h2>
<p>谈到字符串问题，不得不提的就是 KMP 算法，它是用来解决字符串查找的问题，可以在一个字符串（S）中查找一个子串（W）出现的位置。KMP 算法把字符匹配的时间复杂度缩小到 O(m+n) ,而空间复杂度也只有O(m)。因为“暴力搜索”的方法会反复回溯主串，导致效率低下，而KMP算法可以利用已经部分匹配这个有效信息，保持主串上的指针不回溯，通过修改子串的指针，让模式串尽量地移动到有效的位置。</p>
<p>具体算法细节请参考：</p>
<ul>
<li><strong>字符串匹配的KMP算法:</strong> <a href="http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html" target="_blank" rel="noopener noreferrer">http://www.ruanyifeng.com/blog/2013/05/Knuth–Morris–Pratt_algorithm.html<ExternalLinkIcon/></a></li>
<li><strong>从头到尾彻底理解KMP:</strong> <a href="https://blog.csdn.net/v_july_v/article/details/7041827" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/v_july_v/article/details/7041827<ExternalLinkIcon/></a></li>
<li><strong>如何更好的理解和掌握 KMP 算法?:</strong> <a href="https://www.zhihu.com/question/21923021" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/21923021<ExternalLinkIcon/></a></li>
<li><strong>KMP 算法详细解析:</strong>  <a href="https://blog.sengxian.com/algorithms/kmp" target="_blank" rel="noopener noreferrer">https://blog.sengxian.com/algorithms/kmp<ExternalLinkIcon/></a></li>
<li><strong>图解 KMP 算法:</strong> <a href="http://blog.jobbole.com/76611/" target="_blank" rel="noopener noreferrer">http://blog.jobbole.com/76611/<ExternalLinkIcon/></a></li>
<li><strong>汪都能听懂的KMP字符串匹配算法【双语字幕】:</strong> <a href="https://www.bilibili.com/video/av3246487/?from=search&amp;seid=17173603269940723925" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/av3246487/?from=search&amp;seid=17173603269940723925<ExternalLinkIcon/></a></li>
<li><strong>KMP字符串匹配算法1:</strong> <a href="https://www.bilibili.com/video/av11866460?from=search&amp;seid=12730654434238709250" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/av11866460?from=search&amp;seid=12730654434238709250<ExternalLinkIcon/></a></li>
</ul>
<p><strong>除此之外，再来了解一下BM算法！</strong></p>
<blockquote>
<p>BM算法也是一种精确字符串匹配算法，它采用从右向左比较的方法，同时应用到了两种启发式规则，即坏字符规则 和好后缀规则 ，来决定向右跳跃的距离。基本思路就是从右往左进行字符匹配，遇到不匹配的字符后从坏字符表和好后缀表找一个最大的右移值，将模式串右移继续匹配。
《字符串匹配的KMP算法》:<a href="http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html" target="_blank" rel="noopener noreferrer">http://www.ruanyifeng.com/blog/2013/05/Knuth–Morris–Pratt_algorithm.html<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="_2-替换空格" tabindex="-1"><a class="header-anchor" href="#_2-替换空格" aria-hidden="true">#</a> 2. 替换空格</h2>
<blockquote>
<p>剑指offer：请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。</p>
</blockquote>
<p>这里我提供了两种方法：①常规方法；②利用 API 解决。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//https://www.weiweiblog.cn/replacespace/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>

  <span class="token doc-comment comment">/**
   * 第一种方法：常规方法。利用String.charAt(i)以及String.valueOf(char).equals(" "
   * )遍历字符串并判断元素是否为空格。是则替换为"%20",否则不替换
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">replaceSpace</span><span class="token punctuation">(</span><span class="token class-name">StringBuffer</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> length <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// System.out.println("length=" + length);</span>
    <span class="token class-name">StringBuffer</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">char</span> b <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"%20"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        result<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> result<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 第二种方法：利用API替换掉所用空格，一行代码解决问题
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">replaceSpace2</span><span class="token punctuation">(</span><span class="token class-name">StringBuffer</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">"\\s"</span><span class="token punctuation">,</span> <span class="token string">"%20"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于替换固定字符（比如空格）的情况，第二种方法其实可以使用 <code v-pre>replace</code> 方法替换，性能更好!</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>str<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">,</span><span class="token string">"%20"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_3-最长公共前缀" tabindex="-1"><a class="header-anchor" href="#_3-最长公共前缀" aria-hidden="true">#</a> 3. 最长公共前缀</h2>
<blockquote>
<p>Leetcode:  编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 &quot;&quot;。</p>
</blockquote>
<p>示例 1:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: ["flower","flow","flight"]
输出: "fl"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>思路很简单！先利用Arrays.sort(strs)为数组排序，再将数组第一个元素和最后一个元素的字符从前往后对比即可！</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">replaceSpace</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strs<span class="token punctuation">)</span> <span class="token punctuation">{</span>

		<span class="token comment">// 如果检查值不合法及就返回空串</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">checkStrs</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token string">""</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 数组长度</span>
		<span class="token keyword">int</span> len <span class="token operator">=</span> strs<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token comment">// 用于保存结果</span>
		<span class="token class-name">StringBuilder</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 给字符串数组的元素按照升序排序(包含数字的话，数字会排在前面)</span>
		<span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> m <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> n <span class="token operator">=</span> strs<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> num<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> strs<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				res<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>

		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token punctuation">}</span>

	<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">chechStrs</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>strs <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 遍历strs检查元素值</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> strs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> strs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
					<span class="token keyword">break</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> flag<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 测试</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> strs <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">"customer"</span><span class="token punctuation">,</span> <span class="token string">"car"</span><span class="token punctuation">,</span> <span class="token string">"cat"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token comment">// String[] strs = { "customer", "car", null };//空串</span>
		<span class="token comment">// String[] strs = {};//空串</span>
		<span class="token comment">// String[] strs = null;//空串</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Main</span><span class="token punctuation">.</span><span class="token function">replaceSpace</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// c</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-回文串" tabindex="-1"><a class="header-anchor" href="#_4-回文串" aria-hidden="true">#</a> 4. 回文串</h2>
<h3 id="_4-1-最长回文串" tabindex="-1"><a class="header-anchor" href="#_4-1-最长回文串" aria-hidden="true">#</a> 4.1. 最长回文串</h3>
<blockquote>
<p>LeetCode:  给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。在构造过程中，请注意区分大小写。比如<code v-pre>&quot;Aa&quot;</code>不能当做一个回文字符串。注
意:假设字符串的长度不会超过 1010。</p>
</blockquote>
<blockquote>
<p>回文串：“回文串”是一个正读和反读都一样的字符串，比如“level”或者“noon”等等就是回文串。——百度百科  地址：<a href="https://baike.baidu.com/item/%E5%9B%9E%E6%96%87%E4%B8%B2/1274921?fr=aladdin" target="_blank" rel="noopener noreferrer">https://baike.baidu.com/item/回文串/1274921?fr=aladdin<ExternalLinkIcon/></a></p>
</blockquote>
<p>示例 1:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入:
"abccccdd"

输出:
7

解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们上面已经知道了什么是回文串？现在我们考虑一下可以构成回文串的两种情况：</p>
<ul>
<li>字符出现次数为双数的组合</li>
<li><strong>字符出现次数为偶数的组合+单个字符中出现次数最多且为奇数次的字符</strong> （参见 <strong><a href="https://github.com/Snailclimb/JavaGuide/issues/665" target="_blank" rel="noopener noreferrer">issue665<ExternalLinkIcon/></a></strong> ）</li>
</ul>
<p>统计字符出现的次数即可，双数才能构成回文。因为允许中间一个数单独出现，比如“abcba”，所以如果最后有字母落单，总长度可以加 1。首先将字符串转变为字符数组。然后遍历该数组，判断对应字符是否在hashset中，如果不在就加进去，如果在就让count++，然后移除该字符！这样就能找到出现次数为双数的字符个数。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//https://leetcode-cn.com/problems/longest-palindrome/description/</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span>  <span class="token keyword">int</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 用于存放字符</span>
    <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">></span></span> hashset <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Character</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>hashset<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 如果hashset没有该字符就保存进去</span>
        hashset<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span><span class="token comment">// 如果有,就让count++（说明找到了一个成对的字符），然后把该字符移除</span>
        hashset<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> hashset<span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">?</span> count <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">:</span> count <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-验证回文串" tabindex="-1"><a class="header-anchor" href="#_4-2-验证回文串" aria-hidden="true">#</a> 4.2. 验证回文串</h3>
<blockquote>
<p>LeetCode: 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。 说明：本题中，我们将空字符串定义为有效的回文串。</p>
</blockquote>
<p>示例 1:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: "A man, a plan, a canal: Panama"
输出: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: "race a car"
输出: false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//https://leetcode-cn.com/problems/valid-palindrome/description/</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span>  <span class="token keyword">boolean</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> l <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> r <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">&lt;</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 从头和尾开始向中间遍历</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">isLetterOrDigit</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 字符不是字母和数字的情况</span>
        l<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">isLetterOrDigit</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 字符不是字母和数字的情况</span>
        r<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token comment">// 判断二者是否相等</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        l<span class="token operator">++</span><span class="token punctuation">;</span>
        r<span class="token operator">--</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-最长回文子串" tabindex="-1"><a class="header-anchor" href="#_4-3-最长回文子串" aria-hidden="true">#</a> 4.3. 最长回文子串</h3>
<blockquote>
<p>Leetcode: LeetCode: 最长回文子串 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为1000。</p>
</blockquote>
<p>示例 1：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: "babad"
输出: "bab"
注意: "aba"也是一个有效答案。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例 2：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入: "cbbd"
输出: "bb"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以某个元素为中心，分别计算偶数长度的回文最大长度和奇数长度的回文最大长度。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//https://leetcode-cn.com/problems/longest-palindromic-substring/description/</span>
<span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> index<span class="token punctuation">,</span> len<span class="token punctuation">;</span>

  <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">longestPalindrome</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> s<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token class-name">PalindromeHelper</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">PalindromeHelper</span><span class="token punctuation">(</span>s<span class="token punctuation">,</span> i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> index <span class="token operator">+</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">PalindromeHelper</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">,</span> <span class="token keyword">int</span> l<span class="token punctuation">,</span> <span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>l <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> r <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>l<span class="token punctuation">)</span> <span class="token operator">==</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      l<span class="token operator">--</span><span class="token punctuation">;</span>
      r<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">&lt;</span> r <span class="token operator">-</span> l <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      index <span class="token operator">=</span> l <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      len <span class="token operator">=</span> r <span class="token operator">-</span> l <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-最长回文子序列" tabindex="-1"><a class="header-anchor" href="#_4-4-最长回文子序列" aria-hidden="true">#</a> 4.4. 最长回文子序列</h3>
<blockquote>
<p>LeetCode: 最长回文子序列
给定一个字符串s，找到其中最长的回文子序列。可以假设s的最大长度为1000。
<strong>最长回文子序列和上一题最长回文子串的区别是，子串是字符串中连续的一个序列，而子序列是字符串中保持相对位置的字符序列，例如，&quot;bbbb&quot;可以是字符串&quot;bbbab&quot;的子序列但不是子串。</strong></p>
</blockquote>
<p>给定一个字符串s，找到其中最长的回文子序列。可以假设s的最大长度为1000。</p>
<p>示例 1:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入:
"bbbab"
输出:
4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个可能的最长回文子序列为 &quot;bbbb&quot;。</p>
<p>示例 2:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入:
"cbbd"
输出:
2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个可能的最长回文子序列为 &quot;bb&quot;。</p>
<p><strong>动态规划：</strong>  dp[i][j] = dp[i+1][j-1] + 2 if s.charAt(i) == s.charAt(j) otherwise, dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">longestPalindromeSubseq</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">[</span>len<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">>=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">)</span>
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
                <span class="token keyword">else</span>
                    dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>len<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-括号匹配深度" tabindex="-1"><a class="header-anchor" href="#_5-括号匹配深度" aria-hidden="true">#</a> 5. 括号匹配深度</h2>
<blockquote>
<p>爱奇艺 2018 秋招 Java：
一个合法的括号匹配序列有以下定义:</p>
<ol>
<li>空串&quot;&quot;是一个合法的括号匹配序列</li>
<li>如果&quot;X&quot;和&quot;Y&quot;都是合法的括号匹配序列,&quot;XY&quot;也是一个合法的括号匹配序列</li>
<li>如果&quot;X&quot;是一个合法的括号匹配序列,那么&quot;(X)&quot;也是一个合法的括号匹配序列</li>
<li>每个合法的括号序列都可以由以上规则生成。</li>
</ol>
</blockquote>
<blockquote>
<p>例如: &quot;&quot;,&quot;()&quot;,&quot;()()&quot;,&quot;((()))&quot;都是合法的括号序列
对于一个合法的括号序列我们又有以下定义它的深度:</p>
<ol>
<li>空串&quot;&quot;的深度是0</li>
<li>如果字符串&quot;X&quot;的深度是x,字符串&quot;Y&quot;的深度是y,那么字符串&quot;XY&quot;的深度为max(x,y)</li>
<li>如果&quot;X&quot;的深度是x,那么字符串&quot;(X)&quot;的深度是x+1</li>
</ol>
</blockquote>
<blockquote>
<p>例如: &quot;()()()&quot;的深度是1,&quot;((()))&quot;的深度是3。牛牛现在给你一个合法的括号序列,需要你计算出其深度。</p>
</blockquote>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入描述:
输入包括一个合法的括号序列s,s长度length(2 ≤ length ≤ 50),序列中只包含'('和')'。

输出描述:
输出一个正整数,即这个序列的深度。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入:
(())
输出:
2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Scanner</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * https://www.nowcoder.com/test/8246651/summary
 * 
 * <span class="token keyword">@author</span> Snailclimb
 * <span class="token keyword">@date</span> 2018年9月6日
 * @Description: TODO 求给定合法括号序列的深度
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Scanner</span> sc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">String</span> s <span class="token operator">=</span> sc<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> cnt <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token char">'('</span><span class="token punctuation">)</span>
        cnt<span class="token operator">++</span><span class="token punctuation">;</span>
      <span class="token keyword">else</span>
        cnt<span class="token operator">--</span><span class="token punctuation">;</span>
      max <span class="token operator">=</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> cnt<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    sc<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-把字符串转换成整数" tabindex="-1"><a class="header-anchor" href="#_6-把字符串转换成整数" aria-hidden="true">#</a> 6. 把字符串转换成整数</h2>
<blockquote>
<p>剑指offer:  将一个字符串转换成一个整数(实现Integer.valueOf(string)的功能，但是string不符合数字要求时返回0)，要求不能使用字符串转换整数的库函数。 数值为0或者字符串不是一个合法的数值则返回0。</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//https://www.weiweiblog.cn/strtoint/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token class-name">StrToInt</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chars <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">toCharArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 判断是否存在符号位</span>
    <span class="token keyword">int</span> flag <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>chars<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">'+'</span><span class="token punctuation">)</span>
      flag <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>chars<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token char">'-'</span><span class="token punctuation">)</span>
      flag <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> start <span class="token operator">=</span> flag <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// 保存结果</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Character</span><span class="token punctuation">.</span><span class="token function">isDigit</span><span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment">// 调用Character.isDigit(char)方法判断是否是数字，是返回True，否则False</span>
        <span class="token keyword">int</span> temp <span class="token operator">=</span> chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token char">'0'</span><span class="token punctuation">;</span>
        res <span class="token operator">=</span> res <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> temp<span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
   <span class="token keyword">return</span> flag <span class="token operator">!=</span> <span class="token number">2</span> <span class="token operator">?</span> res <span class="token operator">:</span> <span class="token operator">-</span>res<span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// TODO Auto-generated method stub</span>
    <span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">"-12312312"</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"使用库函数转换："</span> <span class="token operator">+</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token class-name">Main<span class="token punctuation">.</span>StrToInt</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"使用自己写的方法转换："</span> <span class="token operator">+</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
