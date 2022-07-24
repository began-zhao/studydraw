<template><div><h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h2>
<p>在分布式系统中，不同的节点进行数据/信息共享是一个基本的需求。</p>
<p>一种比较简单粗暴的方法就是 <strong>集中式发散消息</strong>，简单来说就是一个主节点同时共享最新信息给其他所有节点，比较适合中心化系统。这种方法的缺陷也很明显，节点多的时候不光同步消息的效率低，还太依赖与中心节点，存在单点风险问题。</p>
<p>于是，<strong>分散式发散消息</strong> 的 <strong>Gossip 协议</strong> 就诞生了。</p>
<h2 id="gossip-协议介绍" tabindex="-1"><a class="header-anchor" href="#gossip-协议介绍" aria-hidden="true">#</a> Gossip 协议介绍</h2>
<p>Gossip 直译过来就是闲话、流言蜚语的意思。流言蜚语有什么特点呢？容易被传播且传播速度还快，你传我我传他，然后大家都知道了。</p>
<p><img src="@source/code/java/distributed-system/theorem&amp;algorithm&amp;protocol/images/gossip/gossip.png" alt="" loading="lazy"></p>
<p>Gossip 协议也叫 Epidemic 协议（流行病协议）或者 Epidemic propagation 算法（疫情传播算法），别名很多。不过，这些名字的特点都具有 <strong>随机传播特性</strong> （联想一下病毒传播、癌细胞扩散等生活中常见的情景），这也正是 Gossip 协议最主要的特点。</p>
<p>Gossip 协议最早是在 ACM 上的一篇 1987 年发表的论文 <a href="https://dl.acm.org/doi/10.1145/41840.41841" target="_blank" rel="noopener noreferrer">《Epidemic Algorithms for Replicated Database Maintenance》<ExternalLinkIcon/></a>中被提出的。根据论文标题，我们大概就能知道 Gossip 协议当时提出的主要应用是在分布式数据库系统中各个副本节点同步数据。</p>
<p>正如 Gossip 协议其名一样，这是一种随机且带有传染性的方式将信息传播到整个网络中，并在一定时间内，使得系统内的所有节点数据一致。</p>
<p>在 Gossip 协议下，没有所谓的中心节点，每个节点周期性地随机找一个节点互相同步彼此的信息，理论上来说，各个节点的状态最终会保持一致。</p>
<p>下面我们来对 Gossip 协议的定义做一个总结： <strong>Gossip 协议是一种允许在分布式系统中共享状态的去中心化通信协议，通过这种通信协议，我们可以将信息传播给网络或集群中的所有成员。</strong></p>
<h2 id="gossip-协议应用" tabindex="-1"><a class="header-anchor" href="#gossip-协议应用" aria-hidden="true">#</a> Gossip 协议应用</h2>
<p>1、我们经常使用的分布式缓存 Redis 的官方集群解决方案（3.0 版本引入） Redis Cluster 就是基于 Gossip 协议来实现集群中各个节点数据的最终一致性。</p>
<p><img src="https://img-blog.csdnimg.cn/85fbed524d8342adb054961525c6e257.png" alt="" loading="lazy"></p>
<p>Redis Cluster 中的每个 Redis 节点都维护了一份集群的状态信息，各个节点利用 Gossip 协议传递的信息就是集群的状态信息。</p>
<p>下图就是主从架构的 Redis Cluster 的示意图，图中的虚线代表的就是各个节点之间使用 Gossip 进行通信 ，实线表示主从复制。</p>
<p><img src="@source/code/java/distributed-system/theorem&amp;algorithm&amp;protocol/images/gossip/redis-cluster-gossip.png" alt="" loading="lazy"></p>
<p>2、NoSQL 数据库 Apache Cassandra 集群通过 Gossip 协议来进行动态管理集群节点状态（节点故障检测和恢复）。</p>
<p>3、服务网格解决方案 Consul 使用 Gossip 协议网络内可靠有效地传输新服务和事件的信息。</p>
<p>4、Bitcoin 使用 Gossip 协议来传播交易和区块信息。不过，为了提供更好的隐私保护，CMU 的研究人员提出 <strong>蒲公英协议</strong>。</p>
<p>5、......</p>
<p>还有非常多使用 Gossip 协议的应用，学习 Gossip 协议有助于我们搞清很多技术的底层原理。</p>
<h2 id="gossip-协议消息传播模式" tabindex="-1"><a class="header-anchor" href="#gossip-协议消息传播模式" aria-hidden="true">#</a> Gossip 协议消息传播模式</h2>
<p>Gossip 设计了两种可能的消息传播模式：<strong>反熵（Anti-Entropy）</strong> 和 <strong>传谣（Rumor-Mongering）</strong>。</p>
<h3 id="反熵-anti-entropy" tabindex="-1"><a class="header-anchor" href="#反熵-anti-entropy" aria-hidden="true">#</a> 反熵(Anti-entropy)</h3>
<p>根据维基百科：</p>
<blockquote>
<p>熵的概念最早起源于<a href="https://zh.wikipedia.org/wiki/%E7%89%A9%E7%90%86%E5%AD%A6" target="_blank" rel="noopener noreferrer">物理学<ExternalLinkIcon/></a>，用于度量一个热力学系统的混乱程度。熵最好理解为不确定性的量度而不是确定性的量度，因为越随机的信源的熵越大。</p>
</blockquote>
<p>在这里，你可以把反熵中的熵了解为节点之间数据的混乱程度/差异性，反熵就是指消除不同节点中数据的差异，提升节点间数据的相似度，从而降低熵值。</p>
<p>具体是如何反熵的呢？集群中的节点，每隔段时间就随机选择某个其他节点，然后通过互相交换自己的所有数据来消除两者之间的差异，实现数据的最终一致性。</p>
<p>在实现反熵的时候，主要有推、拉和推拉三种方式：</p>
<ul>
<li>推方式，就是将自己的所有副本数据，推给对方，修复对方副本中的熵。</li>
<li>拉方式，就是拉取对方的所有副本数据，修复自己副本中的熵。</li>
<li>推拉就是同时修复自己副本和对方副本中的熵。</li>
</ul>
<p>伪代码如下：</p>
<p><img src="https://img-blog.csdnimg.cn/20210605165106728.png" alt="" loading="lazy"></p>
<p>在我们实际应用场景中，一般不会采用随机的节点进行反熵，而是需要可以的设计一个闭环。这样的话，我们能够在一个确定的时间范围内实现各个节点数据的最终一致性，而不是基于随机的概率。像 InfluxDB 就是这样来实现反熵的。</p>
<p><img src="@source/code/java/distributed-system/theorem&amp;algorithm&amp;protocol/images/gossip/反熵-闭环.png" alt="" loading="lazy"></p>
<ol>
<li>节点 A 推送数据给节点 B，节点 B 获取到节点 A 中的最新数据。</li>
<li>节点 B 推送数据给 C，节点 C 获取到节点 A，B 中的最新数据。</li>
<li>节点 C 推送数据给 A，节点 A 获取到节点 B，C 中的最新数据。</li>
<li>节点 A 再推送数据给 B 形成闭环，这样节点 B 就获取到节点 C 中的最新数据。</li>
</ol>
<p>虽然反熵很简单实用，但是，节点过多或者节点动态变化的话，反熵就不太适用了。这个时候，我们想要实现最终一致性就要靠 **谣言传播(Rumor mongering) ** 。</p>
<h3 id="谣言传播-rumor-mongering" tabindex="-1"><a class="header-anchor" href="#谣言传播-rumor-mongering" aria-hidden="true">#</a> 谣言传播(Rumor mongering)</h3>
<p>谣言传播指的是分布式系统中的一个节点一旦有了新数据之后，就会变为活跃节点，活跃节点会周期性地联系其他节点向其发送新数据，直到所有的节点都存储了该新数据。</p>
<p>如下图所示（下图来自于<a href="https://managementfromscratch.wordpress.com/2016/04/01/introduction-to-gossip/" target="_blank" rel="noopener noreferrer">INTRODUCTION TO GOSSIP<ExternalLinkIcon/></a> 这篇文章）：</p>
<p>![Gossip 传播示意图](./images/gossip/gossip-rumor- mongering.gif)</p>
<p>伪代码如下：</p>
<p><img src="https://img-blog.csdnimg.cn/20210605170707933.png" alt="" loading="lazy"></p>
<p>谣言传播比较适合节点数量比较多的情况，不过，这种模式下要尽量避免传播的信息包不能太大，避免网络消耗太大。</p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<ul>
<li>反熵（Anti-Entropy）会传播节点的所有数据，而谣言传播（Rumor-Mongering）只会传播节点新增的数据。</li>
<li>我们一般会给反熵设计一个闭环。</li>
<li>谣言传播（Rumor-Mongering）比较适合节点数量比较多或者节点动态变化的场景。</li>
</ul>
<h2 id="gossip-协议优势和缺陷" tabindex="-1"><a class="header-anchor" href="#gossip-协议优势和缺陷" aria-hidden="true">#</a> Gossip 协议优势和缺陷</h2>
<p><strong>优势：</strong></p>
<p>1、相比于其他分布式协议/算法来说，Gossip 协议理解起来非常简单。</p>
<p>2、能够容忍网络上节点的随意地增加或者减少，宕机或者重启，因为 Gossip 协议下这些节点都是平等的，去中心化的。新增加或者重启的节点在理想情况下最终是一定会和其他节点的状态达到一致。</p>
<p>3、速度相对较快。节点数量比较多的情况下，扩散速度比一个主节点向其他节点传播信息要更快（多播）。</p>
<p><strong>缺陷</strong> :</p>
<p>1、消息需要通过多个传播的轮次才能传播到整个网络中，因此，必然会出现各节点状态不一致的情况。毕竟，Gossip 协议强调的是最终一致，至于达到各个节点的状态一致需要多长时间，谁也无从得知。</p>
<p>2、由于拜占庭将军问题，不允许存在恶意节点。</p>
<p>3、可能会出现消息冗余的问题。由于消息传播的随机性，同一个节点可能会重复收到相同的消息。</p>
<h2 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1" aria-hidden="true">#</a> 总结</h2>
<ul>
<li>Gossip 协议是一种允许在分布式系统中共享状态的通信协议，通过这种通信协议，我们可以将信息传播给网络或集群中的所有成员。</li>
<li>Gossip 协议被 Redis 、Apache Cassandra、Consul 等项目应用。</li>
<li>谣言传播（Rumor-Mongering）比较适合节点数量比较多或者节点动态变化的场景。</li>
</ul>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>一万字详解 Redis Cluster Gossip 协议：<a href="https://segmentfault.com/a/1190000038373546" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000038373546<ExternalLinkIcon/></a></li>
<li>《分布式协议与算法实战》</li>
<li>《Redis 设计与实现》</li>
</ul>
</div></template>
