<template><div><h1 id="红黑树" tabindex="-1"><a class="header-anchor" href="#红黑树" aria-hidden="true">#</a> 红黑树</h1>
<p><strong>红黑树特点</strong> :</p>
<ol>
<li>每个节点非红即黑；</li>
<li>根节点总是黑色的；</li>
<li>每个叶子节点都是黑色的空节点（NIL节点）；</li>
<li>如果节点是红色的，则它的子节点必须是黑色的（反之不一定）；</li>
<li>从根节点到叶节点或空子节点的每条路径，必须包含相同数目的黑色节点（即相同的黑色高度）。</li>
</ol>
<p><strong>红黑树的应用</strong> ：TreeMap、TreeSet以及JDK1.8的HashMap底层都用到了红黑树。</p>
<p><strong>为什么要用红黑树？</strong> 简单来说红黑树就是为了解决二叉查找树的缺陷，因为二叉查找树在某些情况下会退化成一个线性结构。详细了解可以查看 <a href="https://juejin.im/post/5a27c6946fb9a04509096248#comment" target="_blank" rel="noopener noreferrer">漫画：什么是红黑树？<ExternalLinkIcon/></a>（也介绍到了二叉查找树，非常推荐）</p>
<p><strong>相关阅读</strong> ：<a href="https://zhuanlan.zhihu.com/p/24367771" target="_blank" rel="noopener noreferrer">《红黑树深入剖析及Java实现》<ExternalLinkIcon/></a>（美团点评技术团队）</p>
</div></template>
