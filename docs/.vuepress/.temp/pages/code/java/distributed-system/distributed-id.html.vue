<template><div><h2 id="分布式-id-介绍" tabindex="-1"><a class="header-anchor" href="#分布式-id-介绍" aria-hidden="true">#</a> 分布式 ID 介绍</h2>
<h3 id="何为-id" tabindex="-1"><a class="header-anchor" href="#何为-id" aria-hidden="true">#</a> 何为 ID？</h3>
<p>日常开发中，我们需要对系统中的各种数据使用 ID 唯一表示，比如用户 ID 对应且仅对应一个人，商品 ID 对应且仅对应一件商品，订单 ID 对应且仅对应一个订单。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/up-79beb853b8319f850638c9708f83039dfda.png" alt="" loading="lazy"></p>
<p>我们现实生活中也有各种 ID，比如身份证 ID 对应且仅对应一个人、地址 ID 对应且仅对应</p>
<p>简单来说，<strong>ID 就是数据的唯一标识</strong>。</p>
<h3 id="何为分布式-id" tabindex="-1"><a class="header-anchor" href="#何为分布式-id" aria-hidden="true">#</a> 何为分布式 ID？</h3>
<p>分布式 ID 是分布式系统下的 ID。分布式 ID 不存在与现实生活中，属于计算机系统中的一个概念。</p>
<p>我简单举一个分库分表的例子。</p>
<p>我司的一个项目，使用的是单机 MySQL 。但是，没想到的是，项目上线一个月之后，随着使用人数越来越多，整个系统的数据量将越来越大。</p>
<p>单机 MySQL 已经没办法支撑了，需要进行分库分表（推荐 Sharding-JDBC）。</p>
<p>在分库之后， 数据遍布在不同服务器上的数据库，数据库的自增主键已经没办法满足生成的主键唯一了。<strong>我们如何为不同的数据节点生成全局唯一主键呢？</strong></p>
<p><img src="https://oscimg.oschina.net/oscnet/up-d78d9d5362c71f4713a090baf7ec65d2b6d.png" alt="" loading="lazy"></p>
<p>这个时候就需要生成<strong>分布式 ID</strong>了。</p>
<h3 id="分布式-id-需要满足哪些要求" tabindex="-1"><a class="header-anchor" href="#分布式-id-需要满足哪些要求" aria-hidden="true">#</a> 分布式 ID 需要满足哪些要求?</h3>
<p><img src="https://img-blog.csdnimg.cn/20210610082309988.png" alt="" loading="lazy"></p>
<p>分布式 ID 作为分布式系统中必不可少的一环，很多地方都要用到分布式 ID。</p>
<p>一个最基本的分布式 ID 需要满足下面这些要求：</p>
<ul>
<li><strong>全局唯一</strong> ：ID 的全局唯一性肯定是首先要满足的！</li>
<li><strong>高性能</strong> ： 分布式 ID 的生成速度要快，对本地资源消耗要小。</li>
<li><strong>高可用</strong> ：生成分布式 ID 的服务要保证可用性无限接近于 100%。</li>
<li><strong>方便易用</strong> ：拿来即用，使用方便，快速接入！</li>
</ul>
<p>除了这些之外，一个比较好的分布式 ID 还应保证：</p>
<ul>
<li><strong>安全</strong> ：ID 中不包含敏感信息。</li>
<li><strong>有序递增</strong> ：如果要把 ID 存放在数据库的话，ID 的有序性可以提升数据库写入速度。并且，很多时候 ，我们还很有可能会直接通过 ID 来进行排序。</li>
<li><strong>有具体的业务含义</strong> ：生成的 ID 如果能有具体的业务含义，可以让定位问题以及开发更透明化（通过 ID 就能确定是哪个业务）。</li>
<li><strong>独立部署</strong> ：也就是分布式系统单独有一个发号器服务，专门用来生成分布式 ID。这样就生成 ID 的服务可以和业务相关的服务解耦。不过，这样同样带来了网络调用消耗增加的问题。总的来说，如果需要用到分布式 ID 的场景比较多的话，独立部署的发号器服务还是很有必要的。</li>
</ul>
<h2 id="分布式-id-常见解决方案" tabindex="-1"><a class="header-anchor" href="#分布式-id-常见解决方案" aria-hidden="true">#</a> 分布式 ID 常见解决方案</h2>
<h3 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库" aria-hidden="true">#</a> 数据库</h3>
<h4 id="数据库主键自增" tabindex="-1"><a class="header-anchor" href="#数据库主键自增" aria-hidden="true">#</a> 数据库主键自增</h4>
<p>这种方式就比较简单直白了，就是通过关系型数据库的自增主键产生来唯一的 ID。</p>
<p><img src="https://img-blog.csdnimg.cn/20210610081957287.png" alt="" loading="lazy"></p>
<p>以 MySQL 举例，我们通过下面的方式即可。</p>
<p><strong>1.创建一个数据库表。</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>sequence_id<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>stub<span class="token punctuation">`</span></span> <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">DEFAULT</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">UNIQUE</span> <span class="token keyword">KEY</span> <span class="token identifier"><span class="token punctuation">`</span>stub<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>stub<span class="token punctuation">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>stub</code> 字段无意义，只是为了占位，便于我们插入或者修改数据。并且，给 <code v-pre>stub</code> 字段创建了唯一索引，保证其唯一性。</p>
<p><strong>2.通过 <code v-pre>replace into</code> 来插入数据。</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>BEGIN<span class="token punctuation">;</span>
REPLACE <span class="token class-name">INTO</span> sequence_id <span class="token punctuation">(</span>stub<span class="token punctuation">)</span> VALUES <span class="token punctuation">(</span><span class="token char">'stub'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">SELECT</span> <span class="token function">LAST_INSERT_ID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
COMMIT<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入数据这里，我们没有使用 <code v-pre>insert into</code> 而是使用 <code v-pre>replace into</code> 来插入数据，具体步骤是这样的：</p>
<p>1)第一步： 尝试把数据插入到表中。</p>
<p>2)第二步： 如果主键或唯一索引字段出现重复数据错误而插入失败时，先从表中删除含有重复关键字值的冲突行，然后再次尝试把数据插入到表中。</p>
<p>这种方式的优缺点也比较明显：</p>
<ul>
<li><strong>优点</strong> ：实现起来比较简单、ID 有序递增、存储消耗空间小</li>
<li><strong>缺点</strong> ： 支持的并发量不大、存在数据库单点问题（可以使用数据库集群解决，不过增加了复杂度）、ID 没有具体业务含义、安全问题（比如根据订单 ID 的递增规律就能推算出每天的订单量，商业机密啊！ ）、每次获取 ID 都要访问一次数据库（增加了对数据库的压力，获取速度也慢）</li>
</ul>
<h4 id="数据库号段模式" tabindex="-1"><a class="header-anchor" href="#数据库号段模式" aria-hidden="true">#</a> 数据库号段模式</h4>
<p>数据库主键自增这种模式，每次获取 ID 都要访问一次数据库，ID 需求比较大的时候，肯定是不行的。</p>
<p>如果我们可以批量获取，然后存在在内存里面，需要用到的时候，直接从内存里面拿就舒服了！这也就是我们说的 <strong>基于数据库的号段模式来生成分布式 ID。</strong></p>
<p>数据库的号段模式也是目前比较主流的一种分布式 ID 生成方式。像滴滴开源的<a href="https://github.com/didi/tinyid/wiki/tinyid%E5%8E%9F%E7%90%86%E4%BB%8B%E7%BB%8D" target="_blank" rel="noopener noreferrer">Tinyid<ExternalLinkIcon/></a> 就是基于这种方式来做的。不过，TinyId 使用了双号段缓存、增加多 db 支持等方式来进一步优化。</p>
<p>以 MySQL 举例，我们通过下面的方式即可。</p>
<p><strong>1.创建一个数据库表。</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>sequence_id_generator<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>current_max_id<span class="token punctuation">`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'当前最大id'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>step<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'号段的长度'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>version<span class="token punctuation">`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'版本号'</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>biz_type<span class="token punctuation">`</span></span>    <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">COMMENT</span> <span class="token string">'业务类型'</span><span class="token punctuation">,</span>
   <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8mb4<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>current_max_id</code> 字段和<code v-pre>step</code>字段主要用于获取批量 ID，获取的批量 id 为： <code v-pre>current_max_id ~ current_max_id+step</code>。</p>
<p><img src="https://img-blog.csdnimg.cn/20210610081149228.png" alt="" loading="lazy"></p>
<p><code v-pre>version</code> 字段主要用于解决并发问题（乐观锁）,<code v-pre>biz_type</code> 主要用于表示业务类型。</p>
<p><strong>2.先插入一行数据。</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>sequence_id_generator<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>current_max_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>step<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>version<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>biz_type<span class="token punctuation">`</span></span><span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
	<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">101</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.通过 SELECT 获取指定业务下的批量唯一 ID</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">`</span>current_max_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>step<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>version<span class="token punctuation">`</span></span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>sequence_id_generator<span class="token punctuation">`</span></span> <span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">`</span>biz_type<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token number">101</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>id	current_max_id	step	version	biz_type
1	0	100	0	101
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.不够用的话，更新之后重新 SELECT 即可。</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">UPDATE</span> sequence_id_generator <span class="token keyword">SET</span> current_max_id <span class="token operator">=</span> <span class="token number">0</span><span class="token operator">+</span><span class="token number">100</span><span class="token punctuation">,</span> version<span class="token operator">=</span>version<span class="token operator">+</span><span class="token number">1</span> <span class="token keyword">WHERE</span> version <span class="token operator">=</span> <span class="token number">0</span>  <span class="token operator">AND</span> <span class="token identifier"><span class="token punctuation">`</span>biz_type<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token number">101</span>
<span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">`</span>current_max_id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>step<span class="token punctuation">`</span></span><span class="token punctuation">,</span><span class="token identifier"><span class="token punctuation">`</span>version<span class="token punctuation">`</span></span> <span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">`</span>sequence_id_generator<span class="token punctuation">`</span></span> <span class="token keyword">where</span> <span class="token identifier"><span class="token punctuation">`</span>biz_type<span class="token punctuation">`</span></span> <span class="token operator">=</span> <span class="token number">101</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>id	current_max_id	step	version	biz_type
1	100	100	1	101
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>相比于数据库主键自增的方式，<strong>数据库的号段模式对于数据库的访问次数更少，数据库压力更小。</strong></p>
<p>另外，为了避免单点问题，你可以从使用主从模式来提高可用性。</p>
<p><strong>数据库号段模式的优缺点:</strong></p>
<ul>
<li><strong>优点</strong> ：ID 有序递增、存储消耗空间小</li>
<li><strong>缺点</strong> ：存在数据库单点问题（可以使用数据库集群解决，不过增加了复杂度）、ID 没有具体业务含义、安全问题（比如根据订单 ID 的递增规律就能推算出每天的订单量，商业机密啊！ ）</li>
</ul>
<h4 id="nosql" tabindex="-1"><a class="header-anchor" href="#nosql" aria-hidden="true">#</a> NoSQL</h4>
<p><img src="https://img-blog.csdnimg.cn/2021061008245858.png" alt="" loading="lazy"></p>
<p>一般情况下，NoSQL 方案使用 Redis 多一些。我们通过 Redis 的 <code v-pre>incr</code> 命令即可实现对 id 原子顺序递增。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> <span class="token builtin class-name">set</span> sequence_id_biz_type <span class="token number">1</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> incr sequence_id_biz_type
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> get sequence_id_biz_type
<span class="token string">"2"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了提高可用性和并发，我们可以使用 Redis Cluster。Redis Cluster 是 Redis 官方提供的 Redis 集群解决方案（3.0+版本）。</p>
<p>除了 Redis Cluster 之外，你也可以使用开源的 Redis 集群方案<a href="https://github.com/CodisLabs/codis" target="_blank" rel="noopener noreferrer">Codis<ExternalLinkIcon/></a> （大规模集群比如上百个节点的时候比较推荐）。</p>
<p>除了高可用和并发之外，我们知道 Redis 基于内存，我们需要持久化数据，避免重启机器或者机器故障后数据丢失。Redis 支持两种不同的持久化方式：<strong>快照（snapshotting，RDB）</strong>、<strong>只追加文件（append-only file, AOF）</strong>。 并且，Redis 4.0 开始支持 <strong>RDB 和 AOF 的混合持久化</strong>（默认关闭，可以通过配置项 <code v-pre>aof-use-rdb-preamble</code> 开启）。</p>
<p>关于 Redis 持久化，我这里就不过多介绍。不了解这部分内容的小伙伴，可以看看 <a href="https://snailclimb.gitee.io/javaguide/#/docs/database/Redis/redis-all" target="_blank" rel="noopener noreferrer">JavaGuide 对于 Redis 知识点的总结<ExternalLinkIcon/></a>。</p>
<p><strong>Redis 方案的优缺点：</strong></p>
<ul>
<li><strong>优点</strong> ： 性能不错并且生成的 ID 是有序递增的</li>
<li><strong>缺点</strong> ： 和数据库主键自增方案的缺点类似</li>
</ul>
<p>除了 Redis 之外，MongoDB ObjectId 经常也会被拿来当做分布式 ID 的解决方案。</p>
<p><img src="https://img-blog.csdnimg.cn/20210207103320582.png" alt="" loading="lazy"></p>
<p>MongoDB ObjectId 一共需要 12 个字节存储：</p>
<ul>
<li>0~3：时间戳</li>
<li>3~6： 代表机器 ID</li>
<li>7~8：机器进程 ID</li>
<li>9~11 ：自增值</li>
</ul>
<p><strong>MongoDB 方案的优缺点：</strong></p>
<ul>
<li><strong>优点</strong> ： 性能不错并且生成的 ID 是有序递增的</li>
<li><strong>缺点</strong> ： 需要解决重复 ID 问题（当机器时间不对的情况下，可能导致会产生重复 ID） 、有安全性问题（ID 生成有规律性）</li>
</ul>
<h3 id="算法" tabindex="-1"><a class="header-anchor" href="#算法" aria-hidden="true">#</a> 算法</h3>
<h4 id="uuid" tabindex="-1"><a class="header-anchor" href="#uuid" aria-hidden="true">#</a> UUID</h4>
<p>UUID 是 Universally Unique Identifier（通用唯一标识符） 的缩写。UUID 包含 32 个 16 进制数字（8-4-4-4-12）。</p>
<p>JDK 就提供了现成的生成 UUID 的方法，一行代码就行了。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//输出示例：cb4a9ede-fa5e-4585-b9bb-d60bce986eaa</span>
UUID<span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://tools.ietf.org/html/rfc4122" target="_blank" rel="noopener noreferrer">RFC 4122<ExternalLinkIcon/></a> 中关于 UUID 的示例是这样的：</p>
<p><img src="https://img-blog.csdnimg.cn/20210202110824430.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MzM3Mjcy,size_16,color_FFFFFF,t_70" alt="" loading="lazy"></p>
<p>我们这里重点关注一下这个 Version(版本)，不同的版本对应的 UUID 的生成规则是不同的。</p>
<p>5 种不同的 Version(版本)值分别对应的含义（参考<a href="https://zh.wikipedia.org/wiki/%E9%80%9A%E7%94%A8%E5%94%AF%E4%B8%80%E8%AF%86%E5%88%AB%E7%A0%81" target="_blank" rel="noopener noreferrer">维基百科对于 UUID 的介绍<ExternalLinkIcon/></a>）：</p>
<ul>
<li><strong>版本 1</strong> : UUID 是根据时间和节点 ID（通常是 MAC 地址）生成；</li>
<li><strong>版本 2</strong> : UUID 是根据标识符（通常是组或用户 ID）、时间和节点 ID 生成；</li>
<li><strong>版本 3、版本 5</strong> : 版本 5 - 确定性 UUID 通过散列（hashing）名字空间（namespace）标识符和名称生成；</li>
<li><strong>版本 4</strong> : UUID 使用<a href="https://zh.wikipedia.org/wiki/%E9%9A%8F%E6%9C%BA%E6%80%A7" target="_blank" rel="noopener noreferrer">随机性<ExternalLinkIcon/></a>或<a href="https://zh.wikipedia.org/wiki/%E4%BC%AA%E9%9A%8F%E6%9C%BA%E6%80%A7" target="_blank" rel="noopener noreferrer">伪随机性<ExternalLinkIcon/></a>生成。</li>
</ul>
<p>下面是 Version 1 版本下生成的 UUID 的示例：</p>
<p><img src="https://img-blog.csdnimg.cn/20210202113013477.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MzM3Mjcy,size_16,color_FFFFFF,t_70" alt="" loading="lazy"></p>
<p>JDK 中通过 <code v-pre>UUID</code> 的 <code v-pre>randomUUID()</code> 方法生成的 UUID 的版本默认为 4。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">UUID</span> uuid <span class="token operator">=</span> UUID<span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> version <span class="token operator">=</span> uuid<span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，Variant(变体)也有 4 种不同的值，这种值分别对应不同的含义。这里就不介绍了，貌似平时也不怎么需要关注。</p>
<p>需要用到的时候，去看看维基百科对于 UUID 的 Variant(变体) 相关的介绍即可。</p>
<p>从上面的介绍中可以看出，UUID 可以保证唯一性，因为其生成规则包括 MAC 地址、时间戳、名字空间（Namespace）、随机或伪随机数、时序等元素，计算机基于这些规则生成的 UUID 是肯定不会重复的。</p>
<p>虽然，UUID 可以做到全局唯一性，但是，我们一般很少会使用它。</p>
<p>比如使用 UUID 作为 MySQL 数据库主键的时候就非常不合适：</p>
<ul>
<li>数据库主键要尽量越短越好，而 UUID 的消耗的存储空间比较大（32 个字符串，128 位）。</li>
<li>UUID 是无顺序的，InnoDB 引擎下，数据库主键的无序性会严重影响数据库性能。</li>
</ul>
<p>最后，我们再简单分析一下 <strong>UUID 的优缺点</strong> （面试的时候可能会被问到的哦！） :</p>
<ul>
<li><strong>优点</strong> ：生成速度比较快、简单易用</li>
<li><strong>缺点</strong> ： 存储消耗空间大（32 个字符串，128 位） 、 不安全（基于 MAC 地址生成 UUID 的算法会造成 MAC 地址泄露)、无序（非自增）、没有具体业务含义、需要解决重复 ID 问题（当机器时间不对的情况下，可能导致会产生重复 ID）</li>
</ul>
<h4 id="snowflake-雪花算法" tabindex="-1"><a class="header-anchor" href="#snowflake-雪花算法" aria-hidden="true">#</a> Snowflake(雪花算法)</h4>
<p>Snowflake 是 Twitter 开源的分布式 ID 生成算法。Snowflake 由 64 bit 的二进制数字组成，这 64bit 的二进制被分成了几部分，每一部分存储的数据都有特定的含义：</p>
<ul>
<li><strong>第 0 位</strong>： 符号位（标识正负），始终为 0，没有用，不用管。</li>
<li><strong>第 1~41 位</strong> ：一共 41 位，用来表示时间戳，单位是毫秒，可以支撑 2 ^41 毫秒（约 69 年）</li>
<li><strong>第 42~52 位</strong> ：一共 10 位，一般来说，前 5 位表示机房 ID，后 5 位表示机器 ID（实际项目中可以根据实际情况调整）。这样就可以区分不同集群/机房的节点。</li>
<li><strong>第 53~64 位</strong> ：一共 12 位，用来表示序列号。 序列号为自增值，代表单台机器每毫秒能够产生的最大 ID 数(2^12 = 4096),也就是说单台机器每毫秒最多可以生成 4096 个 唯一 ID。</li>
</ul>
<p><img src="https://oscimg.oschina.net/oscnet/up-a7e54a77b5ab1d9fa16d5ae3a3c50c5aee9.png" alt="" loading="lazy"></p>
<p>如果你想要使用 Snowflake 算法的话，一般不需要你自己再造轮子。有很多基于 Snowflake 算法的开源实现比如美团 的 Leaf、百度的 UidGenerator，并且这些开源实现对原有的 Snowflake 算法进行了优化。</p>
<p>另外，在实际项目中，我们一般也会对 Snowflake 算法进行改造，最常见的就是在 Snowflake 算法生成的 ID 中加入业务类型信息。</p>
<p>我们再来看看 Snowflake 算法的优缺点 ：</p>
<ul>
<li><strong>优点</strong> ：生成速度比较快、生成的 ID 有序递增、比较灵活（可以对 Snowflake 算法进行简单的改造比如加入业务 ID）</li>
<li><strong>缺点</strong> ： 需要解决重复 ID 问题（依赖时间，当机器时间不对的情况下，可能导致会产生重复 ID）。</li>
</ul>
<h3 id="开源框架" tabindex="-1"><a class="header-anchor" href="#开源框架" aria-hidden="true">#</a> 开源框架</h3>
<h4 id="uidgenerator-百度" tabindex="-1"><a class="header-anchor" href="#uidgenerator-百度" aria-hidden="true">#</a> UidGenerator(百度)</h4>
<p><a href="https://github.com/baidu/uid-generator" target="_blank" rel="noopener noreferrer">UidGenerator<ExternalLinkIcon/></a> 是百度开源的一款基于 Snowflake(雪花算法)的唯一 ID 生成器。</p>
<p>不过，UidGenerator 对 Snowflake(雪花算法)进行了改进，生成的唯一 ID 组成如下。</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-ad5b9dd0077a949db923611b2450277e406.png" alt="" loading="lazy"></p>
<p>可以看出，和原始 Snowflake(雪花算法)生成的唯一 ID 的组成不太一样。并且，上面这些参数我们都可以自定义。</p>
<p>UidGenerator 官方文档中的介绍如下：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-358b1a4cddb3675018b8595f66ece9cae88.png" alt="" loading="lazy"></p>
<p>自 18 年后，UidGenerator 就基本没有再维护了，我这里也不过多介绍。想要进一步了解的朋友，可以看看 <a href="https://github.com/baidu/uid-generator/blob/master/README.zh_cn.md" target="_blank" rel="noopener noreferrer">UidGenerator 的官方介绍<ExternalLinkIcon/></a>。</p>
<h4 id="leaf-美团" tabindex="-1"><a class="header-anchor" href="#leaf-美团" aria-hidden="true">#</a> Leaf(美团)</h4>
<p><strong><a href="https://github.com/Meituan-Dianping/Leaf" target="_blank" rel="noopener noreferrer">Leaf<ExternalLinkIcon/></a></strong> 是美团开源的一个分布式 ID 解决方案 。这个项目的名字 Leaf（树叶） 起源于德国哲学家、数学家莱布尼茨的一句话： “There are no two identical leaves in the world”（世界上没有两片相同的树叶） 。这名字起得真心挺不错的，有点文艺青年那味了！</p>
<p><img src="https://img-blog.csdnimg.cn/20210422145229617.png" alt="" loading="lazy"></p>
<p>Leaf 提供了 <strong>号段模式</strong> 和 <strong>Snowflake(雪花算法)</strong> 这两种模式来生成分布式 ID。并且，它支持双号段，还解决了雪花 ID 系统时钟回拨问题。不过，时钟问题的解决需要弱依赖于 Zookeeper 。</p>
<p>Leaf 的诞生主要是为了解决美团各个业务线生成分布式 ID 的方法多种多样以及不可靠的问题。</p>
<p>Leaf 对原有的号段模式进行改进，比如它这里增加了双号段避免获取 DB 在获取号段的时候阻塞请求获取 ID 的线程。简单来说，就是我一个号段还没用完之前，我自己就主动提前去获取下一个号段（图片来自于美团官方文章：<a href="https://tech.meituan.com/2017/04/21/mt-leaf.html" target="_blank" rel="noopener noreferrer">《Leaf——美团点评分布式 ID 生成系统》<ExternalLinkIcon/></a>）。</p>
<p><img src="https://img-blog.csdnimg.cn/20210422144846724.png" alt="" loading="lazy"></p>
<p>根据项目 README 介绍，在 4C8G VM 基础上，通过公司 RPC 方式调用，QPS 压测结果近 5w/s，TP999 1ms。</p>
<h4 id="tinyid-滴滴" tabindex="-1"><a class="header-anchor" href="#tinyid-滴滴" aria-hidden="true">#</a> Tinyid(滴滴)</h4>
<p><a href="https://github.com/didi/tinyid" target="_blank" rel="noopener noreferrer">Tinyid<ExternalLinkIcon/></a> 是滴滴开源的一款基于数据库号段模式的唯一 ID 生成器。</p>
<p>数据库号段模式的原理我们在上面已经介绍过了。<strong>Tinyid 有哪些亮点呢？</strong></p>
<p>为了搞清楚这个问题，我们先来看看基于数据库号段模式的简单架构方案。（图片来自于 Tinyid 的官方 wiki:<a href="https://github.com/didi/tinyid/wiki/tinyid%E5%8E%9F%E7%90%86%E4%BB%8B%E7%BB%8D" target="_blank" rel="noopener noreferrer">《Tinyid 原理介绍》<ExternalLinkIcon/></a>）</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-4afc0e45c0c86ba5ad645d023dce11e53c2.png" alt="" loading="lazy"></p>
<p>在这种架构模式下，我们通过 HTTP 请求向发号器服务申请唯一 ID。负载均衡 router 会把我们的请求送往其中的一台 tinyid-server。</p>
<p>这种方案有什么问题呢？在我看来（Tinyid 官方 wiki 也有介绍到），主要由下面这 2 个问题：</p>
<ul>
<li>获取新号段的情况下，程序获取唯一 ID 的速度比较慢。</li>
<li>需要保证 DB 高可用，这个是比较麻烦且耗费资源的。</li>
</ul>
<p>除此之外，HTTP 调用也存在网络开销。</p>
<p>Tinyid 的原理比较简单，其架构如下图所示：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-53f74cd615178046d6c04fe50513fee74ce.png" alt="" loading="lazy"></p>
<p>相比于基于数据库号段模式的简单架构方案，Tinyid 方案主要做了下面这些优化：</p>
<ul>
<li><strong>双号段缓存</strong> ：为了避免在获取新号段的情况下，程序获取唯一 ID 的速度比较慢。 Tinyid 中的号段在用到一定程度的时候，就会去异步加载下一个号段，保证内存中始终有可用号段。</li>
<li><strong>增加多 db 支持</strong> ：支持多个 DB，并且，每个 DB 都能生成唯一 ID，提高了可用性。</li>
<li><strong>增加 tinyid-client</strong> ：纯本地操作，无 HTTP 请求消耗，性能和可用性都有很大提升。</li>
</ul>
<p>Tinyid 的优缺点这里就不分析了，结合数据库号段模式的优缺点和 Tinyid 的原理就能知道。</p>
<h2 id="分布式-id-生成方案总结" tabindex="-1"><a class="header-anchor" href="#分布式-id-生成方案总结" aria-hidden="true">#</a> 分布式 ID 生成方案总结</h2>
<p>这篇文章中，我基本上已经把最常见的分布式 ID 生成方案都总结了一波。</p>
<p>除了上面介绍的方式之外，像 ZooKeeper 这类中间件也可以帮助我们生成唯一 ID。<strong>没有银弹，一定要结合实际项目来选择最适合自己的方案。</strong></p>
</div></template>
