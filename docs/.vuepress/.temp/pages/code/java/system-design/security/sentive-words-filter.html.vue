<template><div><p>系统需要对用户输入的文本进行敏感词过滤如色情、政治、暴力相关的词汇。</p>
<p>敏感词过滤用的使用比较多的 <strong>Trie 树算法</strong> 和 <strong>DFA 算法</strong>。</p>
<h2 id="算法实现" tabindex="-1"><a class="header-anchor" href="#算法实现" aria-hidden="true">#</a> 算法实现</h2>
<h3 id="trie-树" tabindex="-1"><a class="header-anchor" href="#trie-树" aria-hidden="true">#</a> Trie 树</h3>
<p><strong>Trie 树</strong> 也称为字典树、单词查找树，哈系树的一种变种，通常被用于字符串匹配，用来解决在一组字符串集合中快速查找某个字符串的问题。像浏览器搜索的关键词提示一般就是基于 Trie 树来做的。</p>
<p><img src="@source/code/java/system-design/security/images/sentive-words-filter/brower-trie.png" alt="" loading="lazy"></p>
<p>假如我们的敏感词库中有以下敏感词：</p>
<ul>
<li>高清有码</li>
<li>高清 AV</li>
<li>东京冷</li>
<li>东京热</li>
</ul>
<p>我们构造出来的敏感词 Trie 树就是下面这样的：</p>
<p><img src="@source/code/java/system-design/security/images/sentive-words-filter/trie.png" alt="" loading="lazy"></p>
<p>当我们要查找对应的字符串“东京热”的话，我们会把这个字符串切割成单个的字符“东”、“京”、“热”，然后我们从 Trie 树的根节点开始匹配。</p>
<p>可以看出， <strong>Trie 树的核心原理其实很简单，就是通过公共前缀来提高字符串匹配效率。</strong></p>
<p><a href="https://mvnrepository.com/artifact/org.apache.commons/commons-collections4" target="_blank" rel="noopener noreferrer">Apache Commons Collecions<ExternalLinkIcon/></a> 这个库中就有 Trie 树实现：</p>
<p><img src="@source/code/java/system-design/security/images/sentive-words-filter/common-collections-trie.png" alt="" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Trie</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">></span></span> trie <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PatriciaTrie</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
trie<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"Abigail"</span><span class="token punctuation">,</span> <span class="token string">"student"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
trie<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"Abi"</span><span class="token punctuation">,</span> <span class="token string">"doctor"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
trie<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"Annabel"</span><span class="token punctuation">,</span> <span class="token string">"teacher"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
trie<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"Christina"</span><span class="token punctuation">,</span> <span class="token string">"student"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
trie<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"Chris"</span><span class="token punctuation">,</span> <span class="token string">"doctor"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Assertions</span><span class="token punctuation">.</span><span class="token function">assertTrue</span><span class="token punctuation">(</span>trie<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span><span class="token string">"Abigail"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">"{Abi=doctor, Abigail=student}"</span><span class="token punctuation">,</span> trie<span class="token punctuation">.</span><span class="token function">prefixMap</span><span class="token punctuation">(</span><span class="token string">"Abi"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">assertEquals</span><span class="token punctuation">(</span><span class="token string">"{Chris=doctor, Christina=student}"</span><span class="token punctuation">,</span> trie<span class="token punctuation">.</span><span class="token function">prefixMap</span><span class="token punctuation">(</span><span class="token string">"Chr"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Aho-Corasick（AC）自动机是一种建立在 Trie 树上的一种改进算法，是一种多模式匹配算法，由贝尔实验室的研究人员 Alfred V. Aho 和 Margaret J.Corasick 发明。</p>
<p>AC 自动机算法使用 Trie 树来存放模式串的前缀，通过失败匹配指针（失配指针）来处理匹配失败的跳转。</p>
<p>相关阅读：<a href="https://zhuanlan.zhihu.com/p/146369212" target="_blank" rel="noopener noreferrer">地铁十分钟 | AC 自动机<ExternalLinkIcon/></a></p>
<h3 id="dfa" tabindex="-1"><a class="header-anchor" href="#dfa" aria-hidden="true">#</a> DFA</h3>
<p><strong>DFA</strong>（Deterministic Finite Automata)即确定有穷自动机，与之对应的是 NFA（Non-Deterministic Finite Automata，有穷自动机)。</p>
<p>关于 DFA 的详细介绍可以看这篇文章：<a href="https://zhuanlan.zhihu.com/p/30009083" target="_blank" rel="noopener noreferrer">有穷自动机 DFA&amp;NFA (学习笔记) - 小蜗牛的文章 - 知乎<ExternalLinkIcon/></a> 。</p>
<p><a href="https://hutool.cn/docs/#/dfa/%E6%A6%82%E8%BF%B0" target="_blank" rel="noopener noreferrer">Hutool<ExternalLinkIcon/></a> 提供了 DFA 算法的实现：</p>
<p><img src="@source/code/java/system-design/security/images/sentive-words-filter/hutool-dfa.png" alt="" loading="lazy"></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">WordTree</span> wordTree <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WordTree</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
wordTree<span class="token punctuation">.</span><span class="token function">addWord</span><span class="token punctuation">(</span><span class="token string">"大"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
wordTree<span class="token punctuation">.</span><span class="token function">addWord</span><span class="token punctuation">(</span><span class="token string">"大憨憨"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
wordTree<span class="token punctuation">.</span><span class="token function">addWord</span><span class="token punctuation">(</span><span class="token string">"憨憨"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> text <span class="token operator">=</span> <span class="token string">"那人真是个大憨憨！"</span><span class="token punctuation">;</span>
<span class="token comment">// 获得第一个匹配的关键字</span>
<span class="token class-name">String</span> matchStr <span class="token operator">=</span> wordTree<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>matchStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 标准匹配，匹配到最短关键词，并跳过已经匹配的关键词</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> matchStrList <span class="token operator">=</span> wordTree<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>matchStrList<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//匹配到最长关键词，跳过已经匹配的关键词</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> matchStrList2 <span class="token operator">=</span> wordTree<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>matchStrList2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>大
[大, 憨憨]
[大, 大憨憨]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开源项目" tabindex="-1"><a class="header-anchor" href="#开源项目" aria-hidden="true">#</a> 开源项目</h2>
<ul>
<li><a href="https://github.com/toolgood/ToolGood.Words" target="_blank" rel="noopener noreferrer">ToolGood.Words<ExternalLinkIcon/></a> ：一款高性能敏感词(非法词/脏字)检测过滤组件，附带繁体简体互换，支持全角半角互换，汉字转拼音，模糊搜索等功能。</li>
<li><a href="https://github.com/hooj0/sensitive-words-filter" target="_blank" rel="noopener noreferrer">sensitive-words-filter<ExternalLinkIcon/></a> ：敏感词过滤项目，提供 TTMP、DFA、DAT、hash bucket、Tire 算法支持过滤。可以支持文本的高亮、过滤、判词、替换的接口支持。</li>
</ul>
<h2 id="论文" tabindex="-1"><a class="header-anchor" href="#论文" aria-hidden="true">#</a> 论文</h2>
<ul>
<li><a href="https://patents.google.com/patent/CN101964000B" target="_blank" rel="noopener noreferrer">一种敏感词自动过滤管理系统<ExternalLinkIcon/></a></li>
<li><a href="https://patents.google.com/patent/CN103714160A/zh" target="_blank" rel="noopener noreferrer">一种网络游戏中敏感词过滤方法及系统<ExternalLinkIcon/></a></li>
</ul>
</div></template>
