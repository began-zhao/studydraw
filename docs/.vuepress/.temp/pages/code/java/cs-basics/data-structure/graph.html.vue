<template><div><h1 id="图" tabindex="-1"><a class="header-anchor" href="#图" aria-hidden="true">#</a> 图</h1>
<blockquote>
<p>开头还是求点赞，求转发！原创优质公众号，希望大家能让更多人看到我们的文章。</p>
<p>图片都是我们手绘的，可以说非常用心了！</p>
</blockquote>
<p>图是一种较为复杂的非线性结构。 <strong>为啥说其较为复杂呢？</strong></p>
<p>根据前面的内容，我们知道：</p>
<ul>
<li>线性数据结构的元素满足唯一的线性关系，每个元素(除第一个和最后一个外)只有一个直接前趋和一个直接后继。</li>
<li>树形数据结构的元素之间有着明显的层次关系。</li>
</ul>
<p>但是，图形结构的元素之间的关系是任意的。</p>
<p><strong>何为图呢？</strong> 简单来说，图就是由顶点的有穷非空集合和顶点之间的边组成的集合。通常表示为：<strong>G(V,E)</strong>，其中，G表示一个图，V表示顶点的集合，E表示边的集合。</p>
<p>下图所展示的就是图这种数据结构，并且还是一张有向图。</p>
<p><img src="https://img-blog.csdnimg.cn/7f232c9660c54ee1ac182b7c0bf267a3.png" alt="" loading="lazy"></p>
<p>图在我们日常生活中的例子很多！比如我们在社交软件上好友关系就可以用图来表示。</p>
<h2 id="图的基本概念" tabindex="-1"><a class="header-anchor" href="#图的基本概念" aria-hidden="true">#</a> 图的基本概念</h2>
<h3 id="顶点" tabindex="-1"><a class="header-anchor" href="#顶点" aria-hidden="true">#</a> 顶点</h3>
<p>图中的数据元素，我们称之为顶点，图至少有一个顶点（非空有穷集合）</p>
<p>对应到好友关系图，每一个用户就代表一个顶点。</p>
<h3 id="边" tabindex="-1"><a class="header-anchor" href="#边" aria-hidden="true">#</a> 边</h3>
<p>顶点之间的关系用边表示。</p>
<p>对应到好友关系图，两个用户是好友的话，那两者之间就存在一条边。</p>
<h3 id="度" tabindex="-1"><a class="header-anchor" href="#度" aria-hidden="true">#</a> 度</h3>
<p>度表示一个顶点包含多少条边，在有向图中，还分为出度和入度，出度表示从该顶点出去的边的条数，入度表示进入该顶点的边的条数。</p>
<p>对应到好友关系图，度就代表了某个人的好友数量。</p>
<h3 id="无向图和有向图" tabindex="-1"><a class="header-anchor" href="#无向图和有向图" aria-hidden="true">#</a> 无向图和有向图</h3>
<p>边表示的是顶点之间的关系，有的关系是双向的，比如同学关系，A是B的同学，那么B也肯定是A的同学，那么在表示A和B的关系时，就不用关注方向，用不带箭头的边表示，这样的图就是无向图。</p>
<p>有的关系是有方向的，比如父子关系，师生关系，微博的关注关系，A是B的爸爸，但B肯定不是A的爸爸，A关注B，B不一定关注A。在这种情况下，我们就用带箭头的边表示二者的关系，这样的图就是有向图。</p>
<h3 id="无权图和带权图" tabindex="-1"><a class="header-anchor" href="#无权图和带权图" aria-hidden="true">#</a> 无权图和带权图</h3>
<p>对于一个关系，如果我们只关心关系的有无，而不关心关系有多强，那么就可以用无权图表示二者的关系。</p>
<p>对于一个关系，如果我们既关心关系的有无，也关心关系的强度，比如描述地图上两个城市的关系，需要用到距离，那么就用带权图来表示，带权图中的每一条边一个数值表示权值，代表关系的强度。</p>
<p>下图就是一个带权有向图。</p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/带权有向图.png" alt="带权有向图" loading="lazy"></p>
<h2 id="图的存储" tabindex="-1"><a class="header-anchor" href="#图的存储" aria-hidden="true">#</a> 图的存储</h2>
<h3 id="邻接矩阵存储" tabindex="-1"><a class="header-anchor" href="#邻接矩阵存储" aria-hidden="true">#</a> 邻接矩阵存储</h3>
<p>邻接矩阵将图用二维矩阵存储，是一种较为直观的表示方式。</p>
<p>如果第i个顶点和第j个顶点之间有关系，且关系权值为n，则 <code v-pre>A[i][j]=n</code> 。</p>
<p>在无向图中，我们只关心关系的有无，所以当顶点i和顶点j有关系时，<code v-pre>A[i][j]</code>=1，当顶点i和顶点j没有关系时，<code v-pre>A[i][j]</code>=0。如下图所示：</p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/无向图的邻接矩阵存储.png" alt="无向图的邻接矩阵存储" loading="lazy"></p>
<p>值得注意的是：<strong>无向图的邻接矩阵是一个对称矩阵，因为在无向图中，顶点i和顶点j有关系，则顶点j和顶点i必有关系。</strong></p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/有向图的邻接矩阵存储.png" alt="有向图的邻接矩阵存储" loading="lazy"></p>
<p>邻接矩阵存储的方式优点是简单直接（直接使用一个二维数组即可），并且，在获取两个定点之间的关系的时候也非常高效（直接获取指定位置的数组元素的值即可）。但是，这种存储方式的缺点也比较明显，那就是比较浪费空间，</p>
<h3 id="邻接表存储" tabindex="-1"><a class="header-anchor" href="#邻接表存储" aria-hidden="true">#</a> 邻接表存储</h3>
<p>针对上面邻接矩阵比较浪费内存空间的问题，诞生了图的另外一种存储方法—<strong>邻接表</strong> 。</p>
<p>邻接链表使用一个链表来存储某个顶点的所有后继相邻顶点。对于图中每个顶点Vi，把所有邻接于Vi的顶点Vj链成一个单链表，这个单链表称为顶点Vi的 <strong>邻接表</strong>。如下图所示：</p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/无向图的邻接表存储.png" alt="无向图的邻接表存储" loading="lazy"></p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/有向图的邻接表存储.png" alt="有向图的邻接表存储" loading="lazy"></p>
<p>大家可以数一数邻接表中所存储的元素的个数以及图中边的条数，你会发现：</p>
<ul>
<li>在无向图中，邻接表元素个数等于边的条数的两倍，如左图所示的无向图中，边的条数为7，邻接表存储的元素个数为14。</li>
<li>在有向图中，邻接表元素个数等于边的条数，如右图所示的有向图中，边的条数为8，邻接表存储的元素个数为8。</li>
</ul>
<h2 id="图的搜索" tabindex="-1"><a class="header-anchor" href="#图的搜索" aria-hidden="true">#</a> 图的搜索</h2>
<h3 id="广度优先搜索" tabindex="-1"><a class="header-anchor" href="#广度优先搜索" aria-hidden="true">#</a> 广度优先搜索</h3>
<p>广度优先搜索就像水面上的波纹一样一层一层向外扩展，如下图所示：</p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/广度优先搜索图示.png" alt="广度优先搜索图示" loading="lazy"></p>
<p><strong>广度优先搜索的具体实现方式用到了之前所学过的线性数据结构——队列</strong> 。具体过程如下图所示：</p>
<p><strong>第1步：</strong></p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/广度优先搜索1.png" alt="广度优先搜索1" loading="lazy"></p>
<p><strong>第2步：</strong></p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/广度优先搜索2.png" alt="广度优先搜索2" loading="lazy"></p>
<p><strong>第3步：</strong></p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/广度优先搜索3.png" alt="广度优先搜索3" loading="lazy"></p>
<p><strong>第4步：</strong></p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/广度优先搜索4.png" alt="广度优先搜索4" loading="lazy"></p>
<p><strong>第5步：</strong></p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/广度优先搜索5.png" alt="广度优先搜索5" loading="lazy"></p>
<p><strong>第6步：</strong></p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/广度优先搜索6.png" alt="广度优先搜索6" loading="lazy"></p>
<h3 id="深度优先搜索" tabindex="-1"><a class="header-anchor" href="#深度优先搜索" aria-hidden="true">#</a> 深度优先搜索</h3>
<p>深度优先搜索就是“一条路走到黑”，从源顶点开始，一直走到没有后继节点，才回溯到上一顶点，然后继续“一条路走到黑”，如下图所示：</p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/深度优先搜索图示.png" alt="深度优先搜索图示" loading="lazy"></p>
<p><strong>和广度优先搜索类似，深度优先搜索的具体实现用到了另一种线性数据结构——栈</strong> 。具体过程如下图所示：</p>
<p><strong>第1步：</strong></p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/深度优先搜索1.png" alt="深度优先搜索1" loading="lazy"></p>
<p><strong>第2步：</strong></p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/深度优先搜索2.png" alt="深度优先搜索1" loading="lazy"></p>
<p><strong>第3步：</strong></p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/深度优先搜索3.png" alt="深度优先搜索1" loading="lazy"></p>
<p><strong>第4步：</strong></p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/深度优先搜索4.png" alt="深度优先搜索1" loading="lazy"></p>
<p><strong>第5步：</strong></p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/深度优先搜索5.png" alt="深度优先搜索1" loading="lazy"></p>
<p><strong>第6步：</strong></p>
<p><img src="@source/code/java/cs-basics/data-structure/pictures/图/深度优先搜索6.png" alt="深度优先搜索1" loading="lazy"></p>
</div></template>
