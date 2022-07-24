<template><div><h2 id="redis-基础" tabindex="-1"><a class="header-anchor" href="#redis-基础" aria-hidden="true">#</a> Redis 基础</h2>
<h3 id="简单介绍一下-redis" tabindex="-1"><a class="header-anchor" href="#简单介绍一下-redis" aria-hidden="true">#</a> 简单介绍一下 Redis!</h3>
<p>简单来说 <strong>Redis 就是一个使用 C 语言开发的数据库</strong>，不过与传统数据库不同的是 <strong>Redis 的数据是存在内存中的</strong> ，也就是它是内存数据库，所以读写速度非常快，因此 Redis 被广泛应用于缓存方向。</p>
<p>另外，<strong>Redis 除了做缓存之外，也经常用来做分布式锁，甚至是消息队列。</strong></p>
<p><strong>Redis 提供了多种数据类型来支持不同的业务场景。Redis 还支持事务 、持久化、Lua 脚本、多种集群方案。</strong></p>
<h3 id="分布式缓存常见的技术选型方案有哪些" tabindex="-1"><a class="header-anchor" href="#分布式缓存常见的技术选型方案有哪些" aria-hidden="true">#</a> 分布式缓存常见的技术选型方案有哪些？</h3>
<p>分布式缓存的话，使用的比较多的主要是 <strong>Memcached</strong> 和 <strong>Redis</strong>。不过，现在基本没有看过还有项目使用 <strong>Memcached</strong> 来做缓存，都是直接用 <strong>Redis</strong>。</p>
<p>Memcached 是分布式缓存最开始兴起的那会，比较常用的。后来，随着 Redis 的发展，大家慢慢都转而使用更加强大的 Redis 了。</p>
<p>分布式缓存主要解决的是单机缓存的容量受服务器限制并且无法保存通用信息的问题。因为，本地缓存只在当前服务里有效，比如如果你部署了两个相同的服务，他们两者之间的缓存数据是无法共同的。</p>
<h3 id="说一下-redis-和-memcached-的区别和共同点" tabindex="-1"><a class="header-anchor" href="#说一下-redis-和-memcached-的区别和共同点" aria-hidden="true">#</a> 说一下 Redis 和 Memcached 的区别和共同点</h3>
<p>现在公司一般都是用 Redis 来实现缓存，而且 Redis 自身也越来越强大了！不过，了解 Redis 和 Memcached 的区别和共同点，有助于我们在做相应的技术选型的时候，能够做到有理有据！</p>
<p><strong>共同点</strong> ：</p>
<ol>
<li>都是基于内存的数据库，一般都用来当做缓存使用。</li>
<li>都有过期策略。</li>
<li>两者的性能都非常高。</li>
</ol>
<p><strong>区别</strong> ：</p>
<ol>
<li><strong>Redis 支持更丰富的数据类型（支持更复杂的应用场景）</strong>。Redis 不仅仅支持简单的 k/v 类型的数据，同时还提供 list，set，zset，hash 等数据结构的存储。Memcached 只支持最简单的 k/v 数据类型。</li>
<li><strong>Redis 支持数据的持久化，可以将内存中的数据保持在磁盘中，重启的时候可以再次加载进行使用,而 Memcached 把数据全部存在内存之中。</strong></li>
<li><strong>Redis 有灾难恢复机制。</strong> 因为可以把缓存中的数据持久化到磁盘上。</li>
<li><strong>Redis 在服务器内存使用完之后，可以将不用的数据放到磁盘上。但是，Memcached 在服务器内存使用完之后，就会直接报异常。</strong></li>
<li><strong>Memcached 没有原生的集群模式，需要依靠客户端来实现往集群中分片写入数据；但是 Redis 目前是原生支持 cluster 模式的。</strong></li>
<li><strong>Memcached 是多线程，非阻塞 IO 复用的网络模型；Redis 使用单线程的多路 IO 复用模型。</strong> （Redis 6.0 引入了多线程 IO ）</li>
<li><strong>Redis 支持发布订阅模型、Lua 脚本、事务等功能，而 Memcached 不支持。并且，Redis 支持更多的编程语言。</strong></li>
<li><strong>Memcached 过期数据的删除策略只用了惰性删除，而 Redis 同时使用了惰性删除与定期删除。</strong></li>
</ol>
<p>相信看了上面的对比之后，我们已经没有什么理由可以选择使用 Memcached 来作为自己项目的分布式缓存了。</p>
<h3 id="缓存数据的处理流程是怎样的" tabindex="-1"><a class="header-anchor" href="#缓存数据的处理流程是怎样的" aria-hidden="true">#</a> 缓存数据的处理流程是怎样的？</h3>
<p>作为暖男一号，我给大家画了一个草图。</p>
<p><img src="@source/code/java/database/redis/images/redis-all/cache-process.png" alt="正常缓存处理流程" loading="lazy"></p>
<p>简单来说就是:</p>
<ol>
<li>如果用户请求的数据在缓存中就直接返回。</li>
<li>缓存中不存在的话就看数据库中是否存在。</li>
<li>数据库中存在的话就更新缓存中的数据。</li>
<li>数据库中不存在的话就返回空数据。</li>
</ol>
<h3 id="为什么要用-redis-为什么要用缓存" tabindex="-1"><a class="header-anchor" href="#为什么要用-redis-为什么要用缓存" aria-hidden="true">#</a> 为什么要用 Redis/为什么要用缓存？</h3>
<p><em>简单，来说使用缓存主要是为了提升用户体验以及应对更多的用户。</em></p>
<p>下面我们主要从“高性能”和“高并发”这两点来看待这个问题。</p>
<p><img src="@source/code/java/database/redis/images/redis-all/使用缓存之后.png" alt="" loading="lazy"></p>
<p><strong>高性能</strong> ：</p>
<p>对照上面 👆 我画的图。我们设想这样的场景：</p>
<p>假如用户第一次访问数据库中的某些数据的话，这个过程是比较慢，毕竟是从硬盘中读取的。但是，如果说，用户访问的数据属于高频数据并且不会经常改变的话，那么我们就可以很放心地将该用户访问的数据存在缓存中。</p>
<p><strong>这样有什么好处呢？</strong> 那就是保证用户下一次再访问这些数据的时候就可以直接从缓存中获取了。操作缓存就是直接操作内存，所以速度相当快。</p>
<p>不过，要保持数据库和缓存中的数据的一致性。 如果数据库中的对应数据改变的之后，同步改变缓存中相应的数据即可！</p>
<p><strong>高并发：</strong></p>
<p>一般像 MySQL 这类的数据库的 QPS 大概都在 1w 左右（4 核 8g） ，但是使用 Redis 缓存之后很容易达到 10w+，甚至最高能达到 30w+（就单机 redis 的情况，redis 集群的话会更高）。</p>
<blockquote>
<p>QPS（Query Per Second）：服务器每秒可以执行的查询次数；</p>
</blockquote>
<p>由此可见，直接操作缓存能够承受的数据库请求数量是远远大于直接访问数据库的，所以我们可以考虑把数据库中的部分数据转移到缓存中去，这样用户的一部分请求会直接到缓存这里而不用经过数据库。进而，我们也就提高了系统整体的并发。</p>
<h3 id="redis-除了做缓存-还能做什么" tabindex="-1"><a class="header-anchor" href="#redis-除了做缓存-还能做什么" aria-hidden="true">#</a> Redis 除了做缓存，还能做什么？</h3>
<ul>
<li><strong>分布式锁</strong> ： 通过 Redis 来做分布式锁是一种比较常见的方式。通常情况下，我们都是基于 Redisson 来实现分布式锁。相关阅读：<a href="https://mp.weixin.qq.com/s/CbnPRfvq4m1sqo2uKI6qQw" target="_blank" rel="noopener noreferrer">《分布式锁中的王者方案 - Redisson》<ExternalLinkIcon/></a>。</li>
<li><strong>限流</strong> ：一般是通过 Redis + Lua 脚本的方式来实现限流。相关阅读：<a href="https://mp.weixin.qq.com/s/kyFAWH3mVNJvurQDt4vchA" target="_blank" rel="noopener noreferrer">《我司用了 6 年的 Redis 分布式限流器，可以说是非常厉害了！》<ExternalLinkIcon/></a>。</li>
<li><strong>消息队列</strong> ：Redis 自带的 list 数据结构可以作为一个简单的队列使用。Redis 5.0 中增加的 Stream 类型的数据结构更加适合用来做消息队列。它比较类似于 Kafka，有主题和消费组的概念，支持消息持久化以及 ACK 机制。</li>
<li><strong>复杂业务场景</strong> ：通过 Redis 以及 Redis 扩展（比如 Redisson）提供的数据结构，我们可以很方便地完成很多复杂的业务场景比如通过 bitmap 统计活跃用户、通过 sorted set 维护排行榜。</li>
<li>......</li>
</ul>
<h3 id="redis-可以做消息队列么" tabindex="-1"><a class="header-anchor" href="#redis-可以做消息队列么" aria-hidden="true">#</a> Redis 可以做消息队列么？</h3>
<p>Redis 5.0 新增加的一个数据结构 <code v-pre>Stream</code> 可以用来做消息队列，<code v-pre>Stream</code> 支持：</p>
<ul>
<li>发布 / 订阅模式</li>
<li>按照消费者组进行消费</li>
<li>消息持久化（ RDB 和 AOF）</li>
</ul>
<p>不过，和专业的消息队列相比，还是有很多欠缺的地方比如消息丢失和堆积问题不好解决。因此，我们通常建议是不使用 Redis 来做消息队列的，你完全可以选择市面上比较成熟的一些消息队列比如 RocketMQ、Kafka。</p>
<p>相关文章推荐：<a href="https://javakeeper.starfish.ink/data-management/Redis/Redis-MQ.html" target="_blank" rel="noopener noreferrer">Redis 消息队列的三种方案（List、Streams、Pub/Sub）<ExternalLinkIcon/></a>。</p>
<h2 id="redis-常见数据结构" tabindex="-1"><a class="header-anchor" href="#redis-常见数据结构" aria-hidden="true">#</a> Redis 常见数据结构</h2>
<p>你可以自己本机安装 redis 或者通过 redis 官网提供的<a href="https://try.redis.io/" target="_blank" rel="noopener noreferrer">在线 redis 环境<ExternalLinkIcon/></a>。</p>
<p><img src="@source/code/java/database/redis/images/redis-all/try-redis.png" alt="try-redis" loading="lazy"></p>
<h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h3>
<ol>
<li><strong>介绍</strong> ：string 数据结构是简单的 key-value 类型。虽然 Redis 是用 C 语言写的，但是 Redis 并没有使用 C 的字符串表示，而是自己构建了一种 <strong>简单动态字符串</strong>（simple dynamic string，<strong>SDS</strong>）。相比于 C 的原生字符串，Redis 的 SDS 不光可以保存文本数据还可以保存二进制数据，并且获取字符串长度复杂度为 O(1)（C 字符串为 O(N)）,除此之外，Redis 的 SDS API 是安全的，不会造成缓冲区溢出。</li>
<li><strong>常用命令：</strong> <code v-pre>set,get,strlen,exists,decr,incr,setex</code> 等等。</li>
<li><strong>应用场景：</strong> 一般常用在需要计数的场景，比如用户的访问次数、热点文章的点赞转发数量等等。</li>
</ol>
<p>下面我们简单看看它的使用！</p>
<p><strong>普通字符串的基本操作：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> <span class="token builtin class-name">set</span> key value <span class="token comment">#设置 key-value 类型的值</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> get key <span class="token comment"># 根据 key 获得对应的 value</span>
<span class="token string">"value"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> exists key  <span class="token comment"># 判断某个 key 是否存在</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> strlen key <span class="token comment"># 返回 key 所储存的字符串值的长度。</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> del key <span class="token comment"># 删除某个 key 对应的值</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> get key
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>批量设置</strong> :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> mset key1 value1 key2 value2 <span class="token comment"># 批量设置 key-value 类型的值</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> mget key1 key2 <span class="token comment"># 批量获取多个 key 对应的 value</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"value1"</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">"value2"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>计数器（字符串的内容为整数的时候可以使用）：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> <span class="token builtin class-name">set</span> number <span class="token number">1</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> incr number <span class="token comment"># 将 key 中储存的数字值增一</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> get number
<span class="token string">"2"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> decr number <span class="token comment"># 将 key 中储存的数字值减一</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> get number
<span class="token string">"1"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>过期（默认为永不过期）</strong>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> expire key  <span class="token number">60</span> <span class="token comment"># 数据在 60s 后过期</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> setex key <span class="token number">60</span> value <span class="token comment"># 数据在 60s 后过期 (setex:[set] + [ex]pire)</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> ttl key <span class="token comment"># 查看数据还有多久过期</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">56</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> list</h3>
<ol>
<li><strong>介绍</strong> ：<strong>list</strong> 即是 <strong>链表</strong>。链表是一种非常常见的数据结构，特点是易于数据元素的插入和删除并且可以灵活调整链表长度，但是链表的随机访问困难。许多高级编程语言都内置了链表的实现比如 Java 中的 <strong>LinkedList</strong>，但是 C 语言并没有实现链表，所以 Redis 实现了自己的链表数据结构。Redis 的 list 的实现为一个 <strong>双向链表</strong>，即可以支持反向查找和遍历，更方便操作，不过带来了部分额外的内存开销。</li>
<li><strong>常用命令:</strong> <code v-pre>rpush,lpop,lpush,rpop,lrange,llen</code> 等。</li>
<li><strong>应用场景:</strong> 发布与订阅或者说消息队列、慢查询。</li>
</ol>
<p>下面我们简单看看它的使用！</p>
<p><strong>通过 <code v-pre>rpush/lpop</code> 实现队列：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> rpush myList value1 <span class="token comment"># 向 list 的头部（右边）添加元素</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> rpush myList value2 value3 <span class="token comment"># 向list的头部（最右边）添加多个元素</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> lpop myList <span class="token comment"># 将 list的尾部(最左边)元素取出</span>
<span class="token string">"value1"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> lrange myList <span class="token number">0</span> <span class="token number">1</span> <span class="token comment"># 查看对应下标的list列表， 0 为 start,1为 end</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"value2"</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">"value3"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> lrange myList <span class="token number">0</span> -1 <span class="token comment"># 查看列表中的所有元素，-1表示倒数第一</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"value2"</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">"value3"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>通过 <code v-pre>rpush/rpop</code> 实现栈：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> rpush myList2 value1 value2 value3
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> rpop myList2 <span class="token comment"># 将 list的头部(最右边)元素取出</span>
<span class="token string">"value3"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我专门画了一个图方便小伙伴们来理解：</p>
<p><img src="@source/code/java/database/redis/images/redis-all/redis-list.png" alt="redis list" loading="lazy"></p>
<p><strong>通过 <code v-pre>lrange</code> 查看对应下标范围的列表元素：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> rpush myList value1 value2 value3
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> lrange myList <span class="token number">0</span> <span class="token number">1</span> <span class="token comment"># 查看对应下标的list列表， 0 为 start,1为 end</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"value1"</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">"value2"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> lrange myList <span class="token number">0</span> -1 <span class="token comment"># 查看列表中的所有元素，-1表示倒数第一</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"value1"</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">"value2"</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">"value3"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 <code v-pre>lrange</code> 命令，你可以基于 list 实现分页查询，性能非常高！</p>
<p><strong>通过 <code v-pre>llen</code> 查看链表长度：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> llen myList
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> hash</h3>
<ol>
<li><strong>介绍</strong> ：hash 类似于 JDK1.8 前的 HashMap，内部实现也差不多(数组 + 链表)。不过，Redis 的 hash 做了更多优化。另外，hash 是一个 string 类型的 field 和 value 的映射表，<strong>特别适合用于存储对象</strong>，后续操作的时候，你可以直接仅仅修改这个对象中的某个字段的值。 比如我们可以 hash 数据结构来存储用户信息，商品信息等等。</li>
<li><strong>常用命令：</strong> <code v-pre>hset,hmset,hexists,hget,hgetall,hkeys,hvals</code> 等。</li>
<li><strong>应用场景:</strong> 系统中对象数据的存储。</li>
</ol>
<p>下面我们简单看看它的使用！</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> hmset userInfoKey name <span class="token string">"fei"</span> description <span class="token string">"dev"</span> age <span class="token string">"24"</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> hexists userInfoKey name <span class="token comment"># 查看 key 对应的 value中指定的字段是否存在。</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> hget userInfoKey name <span class="token comment"># 获取存储在哈希表中指定字段的值。</span>
<span class="token string">"fei"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> hget userInfoKey age
<span class="token string">"24"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> hgetall userInfoKey <span class="token comment"># 获取在哈希表中指定 key 的所有字段和值</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"name"</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">"fei"</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">"description"</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">"dev"</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">"age"</span>
<span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">"24"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> hkeys userInfoKey <span class="token comment"># 获取 key 列表</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"name"</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">"description"</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">"age"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> hvals userInfoKey <span class="token comment"># 获取 value 列表</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"fei"</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">"dev"</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">"24"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> hset userInfoKey name <span class="token string">"feiGeGe"</span> <span class="token comment"># 修改某个字段对应的值</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> hget userInfoKey name
<span class="token string">"feiGeGe"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h3>
<ol>
<li><strong>介绍 ：</strong> set 类似于 Java 中的 <code v-pre>HashSet</code> 。Redis 中的 set 类型是一种无序集合，集合中的元素没有先后顺序。当你需要存储一个列表数据，又不希望出现重复数据时，set 是一个很好的选择，并且 set 提供了判断某个成员是否在一个 set 集合内的重要接口，这个也是 list 所不能提供的。可以基于 set 轻易实现交集、并集、差集的操作。比如：你可以将一个用户所有的关注人存在一个集合中，将其所有粉丝存在一个集合。Redis 可以非常方便的实现如共同关注、共同粉丝、共同喜好等功能。这个过程也就是求交集的过程。</li>
<li><strong>常用命令：</strong> <code v-pre>sadd,spop,smembers,sismember,scard,sinterstore,sunion</code> 等。</li>
<li><strong>应用场景:</strong> 需要存放的数据不能重复以及需要获取多个数据源交集和并集等场景</li>
</ol>
<p>下面我们简单看看它的使用！</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> sadd mySet value1 value2 <span class="token comment"># 添加元素进去</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> sadd mySet value1 <span class="token comment"># 不允许有重复元素</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> smembers mySet <span class="token comment"># 查看 set 中所有的元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"value1"</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">"value2"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> scard mySet <span class="token comment"># 查看 set 的长度</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> sismember mySet value1 <span class="token comment"># 检查某个元素是否存在set 中，只能接收单个元素</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> sadd mySet2 value2 value3
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> sinterstore mySet3 mySet mySet2 <span class="token comment"># 获取 mySet 和 mySet2 的交集并存放在 mySet3 中</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> smembers mySet3
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"value2"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sorted-set" tabindex="-1"><a class="header-anchor" href="#sorted-set" aria-hidden="true">#</a> sorted set</h3>
<ol>
<li><strong>介绍：</strong> 和 set 相比，sorted set 增加了一个权重参数 score，使得集合中的元素能够按 score 进行有序排列，还可以通过 score 的范围来获取元素的列表。有点像是 Java 中 HashMap 和 TreeSet 的结合体。</li>
<li><strong>常用命令：</strong> <code v-pre>zadd,zcard,zscore,zrange,zrevrange,zrem</code> 等。</li>
<li><strong>应用场景：</strong> 需要对数据根据某个权重进行排序的场景。比如在直播系统中，实时排行信息包含直播间在线用户列表，各种礼物排行榜，弹幕消息（可以理解为按消息维度的消息排行榜）等信息。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> zadd myZset <span class="token number">3.0</span> value1 <span class="token comment"># 添加元素到 sorted set 中 3.0 为权重</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> zadd myZset <span class="token number">2.0</span> value2 <span class="token number">1.0</span> value3 <span class="token comment"># 一次添加多个元素</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> zcard myZset <span class="token comment"># 查看 sorted set 中的元素数量</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> zscore myZset value1 <span class="token comment"># 查看某个 value 的权重</span>
<span class="token string">"3"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> zrange  myZset <span class="token number">0</span> -1 <span class="token comment"># 顺序输出某个范围区间的元素，0 -1 表示输出所有元素</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"value3"</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">"value2"</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">"value1"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> zrange  myZset <span class="token number">0</span> <span class="token number">1</span> <span class="token comment"># 顺序输出某个范围区间的元素，0 为 start  1 为 stop</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"value3"</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">"value2"</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> zrevrange  myZset <span class="token number">0</span> <span class="token number">1</span> <span class="token comment"># 逆序输出某个范围区间的元素，0 为 start  1 为 stop</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">"value1"</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">"value2"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="bitmap" tabindex="-1"><a class="header-anchor" href="#bitmap" aria-hidden="true">#</a> bitmap</h3>
<ol>
<li><strong>介绍：</strong> bitmap 存储的是连续的二进制数字（0 和 1），通过 bitmap, 只需要一个 bit 位来表示某个元素对应的值或者状态，key 就是对应元素本身 。我们知道 8 个 bit 可以组成一个 byte，所以 bitmap 本身会极大的节省储存空间。</li>
<li><strong>常用命令：</strong> <code v-pre>setbit</code> 、<code v-pre>getbit</code> 、<code v-pre>bitcount</code>、<code v-pre>bitop</code></li>
<li><strong>应用场景：</strong> 适合需要保存状态信息（比如是否签到、是否登录...）并需要进一步对这些信息进行分析的场景。比如用户签到情况、活跃用户情况、用户行为统计（比如是否点赞过某个视频）。</li>
</ol>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># SETBIT 会返回之前位的值（默认是 0）这里会生成 7 个位</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> setbit mykey <span class="token number">7</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> setbit mykey <span class="token number">7</span> <span class="token number">0</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> getbit mykey <span class="token number">7</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> setbit mykey <span class="token number">6</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> setbit mykey <span class="token number">8</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token comment"># 通过 bitcount 统计被被设置为 1 的位的数量。</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> bitcount mykey
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>针对上面提到的一些场景，这里进行进一步说明。</p>
<p><strong>使用场景一：用户行为分析</strong>
很多网站为了分析你的喜好，需要研究你点赞过的内容。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 记录你喜欢过 001 号小姐姐</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> setbit beauty_girl_001 uid <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用场景二：统计活跃用户</strong></p>
<p>使用时间作为 key，然后用户 ID 为 offset，如果当日活跃过就设置为 1</p>
<p>那么我该如何计算某几天/月/年的活跃用户呢(暂且约定，统计时间内只要有一天在线就称为活跃)，有请下一个 redis 的命令</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 对一个或多个保存二进制位的字符串 key 进行位元操作，并将结果保存到 destkey 上。</span>
<span class="token comment"># BITOP 命令支持 AND 、 OR 、 NOT 、 XOR 这四种操作中的任意一种参数</span>
BITOP operation destkey key <span class="token punctuation">[</span>key <span class="token punctuation">..</span>.<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化数据：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> setbit <span class="token number">20210308</span> <span class="token number">1</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> setbit <span class="token number">20210308</span> <span class="token number">2</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> setbit <span class="token number">20210309</span> <span class="token number">1</span> <span class="token number">1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>统计 20210308~20210309 总活跃用户数: 1</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> bitop and desk1 <span class="token number">20210308</span> <span class="token number">20210309</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> bitcount desk1
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>统计 20210308~20210309 在线活跃用户数: 2</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> bitop or desk2 <span class="token number">20210308</span> <span class="token number">20210309</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> bitcount desk2
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>使用场景三：用户在线状态</strong></p>
<p>对于获取或者统计用户在线状态，使用 bitmap 是一个节约空间且效率又高的一种方法。</p>
<p>只需要一个 key，然后用户 ID 为 offset，如果在线就设置为 1，不在线就设置为 0。</p>
<h2 id="redis-线程模型" tabindex="-1"><a class="header-anchor" href="#redis-线程模型" aria-hidden="true">#</a> Redis 线程模型</h2>
<h3 id="redis-单线程模型了解吗" tabindex="-1"><a class="header-anchor" href="#redis-单线程模型了解吗" aria-hidden="true">#</a> Redis 单线程模型了解吗？</h3>
<p><strong>Redis 基于 Reactor 模式来设计开发了自己的一套高效的事件处理模型</strong> （Netty 的线程模型也基于 Reactor 模式，Reactor 模式不愧是高性能 IO 的基石），这套事件处理模型对应的是 Redis 中的文件事件处理器（file event handler）。由于文件事件处理器（file event handler）是单线程方式运行的，所以我们一般都说 Redis 是单线程模型。</p>
<p><strong>既然是单线程，那怎么监听大量的客户端连接呢？</strong></p>
<p>Redis 通过<strong>IO 多路复用程序</strong> 来监听来自客户端的大量连接（或者说是监听多个 socket），它会将感兴趣的事件及类型（读、写）注册到内核中并监听每个事件是否发生。</p>
<p>这样的好处非常明显： <strong>I/O 多路复用技术的使用让 Redis 不需要额外创建多余的线程来监听客户端的大量连接，降低了资源的消耗</strong>（和 NIO 中的 <code v-pre>Selector</code> 组件很像）。</p>
<p>另外， Redis 服务器是一个事件驱动程序，服务器需要处理两类事件：1. 文件事件; 2. 时间事件。</p>
<p>时间事件不需要多花时间了解，我们接触最多的还是 <strong>文件事件</strong>（客户端进行读取写入等操作，涉及一系列网络通信）。</p>
<p>《Redis 设计与实现》有一段话是如是介绍文件事件的，我觉得写得挺不错。</p>
<blockquote>
<p>Redis 基于 Reactor 模式开发了自己的网络事件处理器：这个处理器被称为文件事件处理器（file event handler）。文件事件处理器使用 I/O 多路复用（multiplexing）程序来同时监听多个套接字，并根据套接字目前执行的任务来为套接字关联不同的事件处理器。</p>
<p>当被监听的套接字准备好执行连接应答（accept）、读取（read）、写入（write）、关 闭（close）等操作时，与操作相对应的文件事件就会产生，这时文件事件处理器就会调用套接字之前关联好的事件处理器来处理这些事件。</p>
<p><strong>虽然文件事件处理器以单线程方式运行，但通过使用 I/O 多路复用程序来监听多个套接字</strong>，文件事件处理器既实现了高性能的网络通信模型，又可以很好地与 Redis 服务器中其他同样以单线程方式运行的模块进行对接，这保持了 Redis 内部单线程设计的简单性。</p>
</blockquote>
<p>可以看出，文件事件处理器（file event handler）主要是包含 4 个部分：</p>
<ul>
<li>多个 socket（客户端连接）</li>
<li>IO 多路复用程序（支持多个客户端连接的关键）</li>
<li>文件事件分派器（将 socket 关联到相应的事件处理器）</li>
<li>事件处理器（连接应答处理器、命令请求处理器、命令回复处理器）</li>
</ul>
<p><img src="@source/code/java/database/redis/images/redis-all/redis事件处理器.png" alt="" loading="lazy"></p>
<p style="text-align:right; font-size:14px; color:gray">《Redis设计与实现：12章》</p>
<h3 id="redis6-0-之前为什么不使用多线程" tabindex="-1"><a class="header-anchor" href="#redis6-0-之前为什么不使用多线程" aria-hidden="true">#</a> Redis6.0 之前为什么不使用多线程？</h3>
<p>虽然说 Redis 是单线程模型，但是，实际上，<strong>Redis 在 4.0 之后的版本中就已经加入了对多线程的支持。</strong></p>
<p><img src="@source/code/java/database/redis/images/redis-all/redis4.0-more-thread.png" alt="redis4.0 more thread" loading="lazy"></p>
<p>不过，Redis 4.0 增加的多线程主要是针对一些大键值对的删除操作的命令，使用这些命令就会使用主处理之外的其他线程来“异步处理”。</p>
<p>大体上来说，<strong>Redis 6.0 之前主要还是单线程处理。</strong></p>
<p><strong>那，Redis6.0 之前为什么不使用多线程？</strong></p>
<p>我觉得主要原因有下面 3 个：</p>
<ol>
<li>单线程编程容易并且更容易维护；</li>
<li>Redis 的性能瓶颈不在 CPU ，主要在内存和网络；</li>
<li>多线程就会存在死锁、线程上下文切换等问题，甚至会影响性能。</li>
</ol>
<h3 id="redis6-0-之后为何引入了多线程" tabindex="-1"><a class="header-anchor" href="#redis6-0-之后为何引入了多线程" aria-hidden="true">#</a> Redis6.0 之后为何引入了多线程？</h3>
<p><strong>Redis6.0 引入多线程主要是为了提高网络 IO 读写性能</strong>，因为这个算是 Redis 中的一个性能瓶颈（Redis 的瓶颈主要受限于内存和网络）。</p>
<p>虽然，Redis6.0 引入了多线程，但是 Redis 的多线程只是在网络数据的读写这类耗时操作上使用了，执行命令仍然是单线程顺序执行。因此，你也不需要担心线程安全问题。</p>
<p>Redis6.0 的多线程默认是禁用的，只使用主线程。如需开启需要修改 redis 配置文件 <code v-pre>redis.conf</code> ：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>io-threads-do-reads <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开启多线程后，还需要设置线程数，否则是不生效的。同样需要修改 redis 配置文件 <code v-pre>redis.conf</code> :</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>io-threads <span class="token number">4</span> <span class="token comment">#官网建议4核的机器建议设置为2或3个线程，8核的建议设置为6个线程</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>推荐阅读：</p>
<ol>
<li><a href="https://mp.weixin.qq.com/s/FZu3acwK6zrCBZQ_3HoUgw" target="_blank" rel="noopener noreferrer">Redis 6.0 新特性-多线程连环 13 问！<ExternalLinkIcon/></a></li>
<li><a href="https://draveness.me/whys-the-design-redis-single-thread/" target="_blank" rel="noopener noreferrer">为什么 Redis 选择单线程模型<ExternalLinkIcon/></a></li>
</ol>
<h2 id="redis-内存管理" tabindex="-1"><a class="header-anchor" href="#redis-内存管理" aria-hidden="true">#</a> Redis 内存管理</h2>
<h3 id="redis-给缓存数据设置过期时间有啥用" tabindex="-1"><a class="header-anchor" href="#redis-给缓存数据设置过期时间有啥用" aria-hidden="true">#</a> Redis 给缓存数据设置过期时间有啥用？</h3>
<p>一般情况下，我们设置保存的缓存数据的时候都会设置一个过期时间。为什么呢？</p>
<p>因为内存是有限的，如果缓存中的所有数据都是一直保存的话，分分钟直接 Out of memory。</p>
<p>Redis 自带了给缓存数据设置过期时间的功能，比如：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> exp key <span class="token number">60</span> <span class="token comment"># 数据在 60s 后过期</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> setex key <span class="token number">60</span> value <span class="token comment"># 数据在 60s 后过期 (setex:[set] + [ex]pire)</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>></span> ttl key <span class="token comment"># 查看数据还有多久过期</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">56</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：<strong>Redis 中除了字符串类型有自己独有设置过期时间的命令 <code v-pre>setex</code> 外，其他方法都需要依靠 <code v-pre>expire</code> 命令来设置过期时间 。另外， <code v-pre>persist</code> 命令可以移除一个键的过期时间。</strong></p>
<p><strong>过期时间除了有助于缓解内存的消耗，还有什么其他用么？</strong></p>
<p>很多时候，我们的业务场景就是需要某个数据只在某一时间段内存在，比如我们的短信验证码可能只在 1 分钟内有效，用户登录的 token 可能只在 1 天内有效。</p>
<p>如果使用传统的数据库来处理的话，一般都是自己判断过期，这样更麻烦并且性能要差很多。</p>
<h3 id="redis-是如何判断数据是否过期的呢" tabindex="-1"><a class="header-anchor" href="#redis-是如何判断数据是否过期的呢" aria-hidden="true">#</a> Redis 是如何判断数据是否过期的呢？</h3>
<p>Redis 通过一个叫做过期字典（可以看作是 hash 表）来保存数据过期的时间。过期字典的键指向 Redis 数据库中的某个 key(键)，过期字典的值是一个 long long 类型的整数，这个整数保存了 key 所指向的数据库键的过期时间（毫秒精度的 UNIX 时间戳）。</p>
<p><img src="@source/code/java/database/redis/images/redis-all/redis过期时间.png" alt="redis过期字典" loading="lazy"></p>
<p>过期字典是存储在 redisDb 这个结构里的：</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">redisDb</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    dict <span class="token operator">*</span>dict<span class="token punctuation">;</span>     <span class="token comment">//数据库键空间,保存着数据库中所有键值对</span>
    dict <span class="token operator">*</span>expires   <span class="token comment">// 过期字典,保存着键的过期时间</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span> redisDb<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="过期的数据的删除策略了解么" tabindex="-1"><a class="header-anchor" href="#过期的数据的删除策略了解么" aria-hidden="true">#</a> 过期的数据的删除策略了解么？</h3>
<p>如果假设你设置了一批 key 只能存活 1 分钟，那么 1 分钟后，Redis 是怎么对这批 key 进行删除的呢？</p>
<p>常用的过期数据的删除策略就两个（重要！自己造缓存轮子的时候需要格外考虑的东西）：</p>
<ol>
<li><strong>惰性删除</strong> ：只会在取出 key 的时候才对数据进行过期检查。这样对 CPU 最友好，但是可能会造成太多过期 key 没有被删除。</li>
<li><strong>定期删除</strong> ： 每隔一段时间抽取一批 key 执行删除过期 key 操作。并且，Redis 底层会通过限制删除操作执行的时长和频率来减少删除操作对 CPU 时间的影响。</li>
</ol>
<p>定期删除对内存更加友好，惰性删除对 CPU 更加友好。两者各有千秋，所以 Redis 采用的是 <strong>定期删除+惰性/懒汉式删除</strong> 。</p>
<p>但是，仅仅通过给 key 设置过期时间还是有问题的。因为还是可能存在定期删除和惰性删除漏掉了很多过期 key 的情况。这样就导致大量过期 key 堆积在内存里，然后就 Out of memory 了。</p>
<p>怎么解决这个问题呢？答案就是：<strong>Redis 内存淘汰机制。</strong></p>
<h3 id="redis-内存淘汰机制了解么" tabindex="-1"><a class="header-anchor" href="#redis-内存淘汰机制了解么" aria-hidden="true">#</a> Redis 内存淘汰机制了解么？</h3>
<blockquote>
<p>相关问题：MySQL 里有 2000w 数据，Redis 中只存 20w 的数据，如何保证 Redis 中的数据都是热点数据?</p>
</blockquote>
<p>Redis 提供 6 种数据淘汰策略：</p>
<ol>
<li><strong>volatile-lru（least recently used）</strong>：从已设置过期时间的数据集（server.db[i].expires）中挑选最近最少使用的数据淘汰</li>
<li><strong>volatile-ttl</strong>：从已设置过期时间的数据集（server.db[i].expires）中挑选将要过期的数据淘汰</li>
<li><strong>volatile-random</strong>：从已设置过期时间的数据集（server.db[i].expires）中任意选择数据淘汰</li>
<li><strong>allkeys-lru（least recently used）</strong>：当内存不足以容纳新写入数据时，在键空间中，移除最近最少使用的 key（这个是最常用的）</li>
<li><strong>allkeys-random</strong>：从数据集（server.db[i].dict）中任意选择数据淘汰</li>
<li><strong>no-eviction</strong>：禁止驱逐数据，也就是说当内存不足以容纳新写入数据时，新写入操作会报错。这个应该没人使用吧！</li>
</ol>
<p>4.0 版本后增加以下两种：</p>
<ol start="7">
<li><strong>volatile-lfu（least frequently used）</strong>：从已设置过期时间的数据集（server.db[i].expires）中挑选最不经常使用的数据淘汰</li>
<li><strong>allkeys-lfu（least frequently used）</strong>：当内存不足以容纳新写入数据时，在键空间中，移除最不经常使用的 key</li>
</ol>
<h2 id="redis-持久化机制" tabindex="-1"><a class="header-anchor" href="#redis-持久化机制" aria-hidden="true">#</a> Redis 持久化机制</h2>
<h3 id="怎么保证-redis-挂掉之后再重启数据可以进行恢复" tabindex="-1"><a class="header-anchor" href="#怎么保证-redis-挂掉之后再重启数据可以进行恢复" aria-hidden="true">#</a> 怎么保证 Redis 挂掉之后再重启数据可以进行恢复？</h3>
<p>很多时候我们需要持久化数据也就是将内存中的数据写入到硬盘里面，大部分原因是为了之后重用数据（比如重启机器、机器故障之后恢复数据），或者是为了防止系统故障而将数据备份到一个远程位置。</p>
<p>Redis 不同于 Memcached 的很重要一点就是，Redis 支持持久化，而且支持两种不同的持久化操作。<strong>Redis 的一种持久化方式叫快照（snapshotting，RDB），另一种方式是只追加文件（append-only file, AOF）</strong>。这两种方法各有千秋，下面我会详细这两种持久化方法是什么，怎么用，如何选择适合自己的持久化方法。</p>
<h3 id="什么是-rdb-持久化" tabindex="-1"><a class="header-anchor" href="#什么是-rdb-持久化" aria-hidden="true">#</a> 什么是 RDB 持久化？</h3>
<p>Redis 可以通过创建快照来获得存储在内存里面的数据在某个时间点上的副本。Redis 创建快照之后，可以对快照进行备份，可以将快照复制到其他服务器从而创建具有相同数据的服务器副本（Redis 主从结构，主要用来提高 Redis 性能），还可以将快照留在原地以便重启服务器的时候使用。</p>
<p>快照持久化是 Redis 默认采用的持久化方式，在 <code v-pre>redis.conf</code> 配置文件中默认有此下配置：</p>
<div class="language-clojure ext-clojure line-numbers-mode"><pre v-pre class="language-clojure"><code>save <span class="token number">900</span> <span class="token number">1</span>           <span class="token operator">#</span>在<span class="token number">900</span>秒<span class="token punctuation">(</span><span class="token number">15</span>分钟<span class="token punctuation">)</span>之后，如果至少有<span class="token number">1</span>个key发生变化，Redis就会自动触发BGSAVE命令创建快照。

save <span class="token number">300</span> <span class="token number">10</span>          <span class="token operator">#</span>在<span class="token number">300</span>秒<span class="token punctuation">(</span><span class="token number">5</span>分钟<span class="token punctuation">)</span>之后，如果至少有<span class="token number">10</span>个key发生变化，Redis就会自动触发BGSAVE命令创建快照。

save <span class="token number">60</span> <span class="token number">10000</span>        <span class="token operator">#</span>在<span class="token number">60</span>秒<span class="token punctuation">(</span><span class="token number">1</span>分钟<span class="token punctuation">)</span>之后，如果至少有<span class="token number">10000</span>个key发生变化，Redis就会自动触发BGSAVE命令创建快照。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="什么是-aof-持久化" tabindex="-1"><a class="header-anchor" href="#什么是-aof-持久化" aria-hidden="true">#</a> 什么是 AOF 持久化？</h3>
<p>与快照持久化相比，AOF 持久化的实时性更好，因此已成为主流的持久化方案。默认情况下 Redis 没有开启 AOF（append only file）方式的持久化，可以通过 appendonly 参数开启：</p>
<div class="language-conf ext-conf line-numbers-mode"><pre v-pre class="language-conf"><code>appendonly yes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>开启 AOF 持久化后每执行一条会更改 Redis 中的数据的命令，Redis 就会将该命令写入到内存缓存 <code v-pre>server.aof_buf</code> 中，然后再根据 <code v-pre>appendfsync</code> 配置来决定何时将其同步到硬盘中的 AOF 文件。</p>
<p>AOF 文件的保存位置和 RDB 文件的位置相同，都是通过 dir 参数设置的，默认的文件名是 <code v-pre>appendonly.aof</code>。</p>
<p>在 Redis 的配置文件中存在三种不同的 AOF 持久化方式，它们分别是：</p>
<div class="language-conf ext-conf line-numbers-mode"><pre v-pre class="language-conf"><code>appendfsync always    #每次有数据修改发生时都会写入AOF文件,这样会严重降低Redis的速度
appendfsync everysec  #每秒钟同步一次，显式地将多个写命令同步到硬盘
appendfsync no        #让操作系统决定何时进行同步
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了兼顾数据和写入性能，用户可以考虑 <code v-pre>appendfsync everysec</code> 选项 ，让 Redis 每秒同步一次 AOF 文件，Redis 性能几乎没受到任何影响。而且这样即使出现系统崩溃，用户最多只会丢失一秒之内产生的数据。当硬盘忙于执行写入操作的时候，Redis 还会优雅的放慢自己的速度以便适应硬盘的最大写入速度。</p>
<p><strong>相关 issue</strong> ：</p>
<ul>
<li><a href="https://github.com/Snailclimb/JavaGuide/issues/783" target="_blank" rel="noopener noreferrer">Redis 的 AOF 方式 #783<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/Snailclimb/JavaGuide/issues/1439" target="_blank" rel="noopener noreferrer">Redis AOF 重写描述不准确 #1439<ExternalLinkIcon/></a></li>
</ul>
<h3 id="aof-重写了解吗" tabindex="-1"><a class="header-anchor" href="#aof-重写了解吗" aria-hidden="true">#</a> AOF 重写了解吗？</h3>
<p>AOF 重写可以产生一个新的 AOF 文件，这个新的 AOF 文件和原有的 AOF 文件所保存的数据库状态一样，但体积更小。</p>
<p>AOF 重写是一个有歧义的名字，该功能是通过读取数据库中的键值对来实现的，程序无须对现有 AOF 文件进行任何读入、分析或者写入操作。</p>
<p>在执行 <code v-pre>BGREWRITEAOF</code> 命令时，Redis 服务器会维护一个 AOF 重写缓冲区，该缓冲区会在子进程创建新 AOF 文件期间，记录服务器执行的所有写命令。当子进程完成创建新 AOF 文件的工作之后，服务器会将重写缓冲区中的所有内容追加到新 AOF 文件的末尾，使得新的 AOF 文件保存的数据库状态与现有的数据库状态一致。最后，服务器用新的 AOF 文件替换旧的 AOF 文件，以此来完成 AOF 文件重写操作。</p>
<h3 id="redis-4-0-对于持久化机制做了什么优化" tabindex="-1"><a class="header-anchor" href="#redis-4-0-对于持久化机制做了什么优化" aria-hidden="true">#</a> Redis 4.0 对于持久化机制做了什么优化？</h3>
<p>Redis 4.0 开始支持 RDB 和 AOF 的混合持久化（默认关闭，可以通过配置项 <code v-pre>aof-use-rdb-preamble</code> 开启）。</p>
<p>如果把混合持久化打开，AOF 重写的时候就直接把 RDB 的内容写到 AOF 文件开头。这样做的好处是可以结合 RDB 和 AOF 的优点, 快速加载同时避免丢失过多的数据。当然缺点也是有的， AOF 里面的 RDB 部分是压缩格式不再是 AOF 格式，可读性较差。</p>
<p>官方文档地址：<a href="https://redis.io/topics/persistence" target="_blank" rel="noopener noreferrer">https://redis.io/topics/persistence<ExternalLinkIcon/></a></p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksimage-20210807145107290.png" alt="" loading="lazy"></p>
<h2 id="redis-事务" tabindex="-1"><a class="header-anchor" href="#redis-事务" aria-hidden="true">#</a> Redis 事务</h2>
<h3 id="如何使用-redis-事务" tabindex="-1"><a class="header-anchor" href="#如何使用-redis-事务" aria-hidden="true">#</a> 如何使用 Redis 事务？</h3>
<p>Redis 可以通过 <strong><code v-pre>MULTI</code>，<code v-pre>EXEC</code>，<code v-pre>DISCARD</code> 和 <code v-pre>WATCH</code></strong> 等命令来实现事务(transaction)功能。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> MULTI
OK
<span class="token operator">></span> SET <span class="token environment constant">USER</span> <span class="token string">"飞哥"</span>
QUEUED
<span class="token operator">></span> GET <span class="token environment constant">USER</span>
QUEUED
<span class="token operator">></span> EXEC
<span class="token number">1</span><span class="token punctuation">)</span> OK
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">"飞哥"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <a href="https://redis.io/commands/multi" target="_blank" rel="noopener noreferrer"><code v-pre>MULTI</code><ExternalLinkIcon/></a> 命令后可以输入多个命令。Redis 不会立即执行这些命令，而是将它们放到队列，当调用了 <a href="https://redis.io/commands/exec" target="_blank" rel="noopener noreferrer"><code v-pre>EXEC</code><ExternalLinkIcon/></a> 命令将执行所有命令。</p>
<p>这个过程是这样的：</p>
<ol>
<li>开始事务（<code v-pre>MULTI</code>）。</li>
<li>命令入队(批量操作 Redis 的命令，先进先出（FIFO）的顺序执行)。</li>
<li>执行事务(<code v-pre>EXEC</code>)。</li>
</ol>
<p>你也可以通过 <a href="https://redis.io/commands/discard" target="_blank" rel="noopener noreferrer"><code v-pre>DISCARD</code><ExternalLinkIcon/></a> 命令取消一个事务，它会清空事务队列中保存的所有命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> MULTI
OK
<span class="token operator">></span> SET <span class="token environment constant">USER</span> <span class="token string">"飞哥"</span>
QUEUED
<span class="token operator">></span> GET <span class="token environment constant">USER</span>
QUEUED
<span class="token operator">></span> DISCARD
OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><a href="https://redis.io/commands/watch" target="_blank" rel="noopener noreferrer"><code v-pre>WATCH</code><ExternalLinkIcon/></a> 命令用于监听指定的键，当调用 <code v-pre>EXEC</code> 命令执行事务时，如果一个被 <code v-pre>WATCH</code> 命令监视的键被修改的话，整个事务都不会执行，直接返回失败。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">></span> WATCH <span class="token environment constant">USER</span>
OK
<span class="token operator">></span> MULTI
<span class="token operator">></span> SET <span class="token environment constant">USER</span> <span class="token string">"飞哥"</span>
OK
<span class="token operator">></span> GET <span class="token environment constant">USER</span>
飞哥
<span class="token operator">></span> EXEC
ERR EXEC without MULTI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Redis 官网相关介绍 <a href="https://redis.io/topics/transactions" target="_blank" rel="noopener noreferrer">https://redis.io/topics/transactions<ExternalLinkIcon/></a> 如下：</p>
<p><img src="@source/code/java/database/redis/images/redis-all/redis事务.png" alt="redis事务" loading="lazy"></p>
<h3 id="redis-支持原子性吗" tabindex="-1"><a class="header-anchor" href="#redis-支持原子性吗" aria-hidden="true">#</a> Redis 支持原子性吗？</h3>
<p>Redis 的事务和我们平时理解的关系型数据库的事务不同。我们知道事务具有四大特性： <strong>1. 原子性</strong>，<strong>2. 隔离性</strong>，<strong>3. 持久性</strong>，<strong>4. 一致性</strong>。</p>
<ol>
<li><strong>原子性（Atomicity）：</strong> 事务是最小的执行单位，不允许分割。事务的原子性确保动作要么全部完成，要么完全不起作用；</li>
<li><strong>隔离性（Isolation）：</strong> 并发访问数据库时，一个用户的事务不被其他事务所干扰，各并发事务之间数据库是独立的；</li>
<li><strong>持久性（Durability）：</strong> 一个事务被提交之后。它对数据库中数据的改变是持久的，即使数据库发生故障也不应该对其有任何影响。</li>
<li><strong>一致性（Consistency）：</strong> 执行事务前后，数据保持一致，多个事务对同一个数据读取的结果是相同的；</li>
</ol>
<p>Redis 事务在运行错误的情况下，除了执行过程中出现错误的命令外，其他命令都能正常执行。并且，Redis 是不支持回滚（roll back）操作的。因此，Redis 事务其实是不满足原子性的（而且不满足持久性）。</p>
<p>Redis 官网也解释了自己为啥不支持回滚。简单来说就是 Redis 开发者们觉得没必要支持回滚，这样更简单便捷并且性能更好。Redis 开发者觉得即使命令执行错误也应该在开发过程中就被发现而不是生产过程中。</p>
<p><img src="@source/code/java/database/redis/images/redis-all/redis-rollBack.png" alt="redis roll back" loading="lazy"></p>
<p>你可以将 Redis 中的事务就理解为 ：<strong>Redis 事务提供了一种将多个命令请求打包的功能。然后，再按顺序执行打包的所有命令，并且不会被中途打断。</strong></p>
<p>除了不满足原子性之外，事务中的每条命令都会与 Redis 服务器进行网络交互，这是比较浪费资源的行为。明明一次批量执行多个命令就可以了，这种操作实在是看不懂。</p>
<p>因此，Redis 事务是不建议在日常开发中使用的。</p>
<p><strong>相关 issue</strong> :</p>
<ul>
<li><a href="https://github.com/Snailclimb/JavaGuide/issues/452" target="_blank" rel="noopener noreferrer">issue452: 关于 Redis 事务不满足原子性的问题<ExternalLinkIcon/></a> 。</li>
<li><a href="https://github.com/Snailclimb/JavaGuide/issues/491" target="_blank" rel="noopener noreferrer">Issue491:关于 redis 没有事务回滚？<ExternalLinkIcon/></a></li>
</ul>
<h3 id="如何解决-redis-事务的缺陷" tabindex="-1"><a class="header-anchor" href="#如何解决-redis-事务的缺陷" aria-hidden="true">#</a> 如何解决 Redis 事务的缺陷？</h3>
<p>Redis 从 2.6 版本开始支持执行 Lua 脚本，它的功能和事务非常类似。我们可以利用 Lua 脚本来批量执行多条 Redis 命令，这些 Redis 命令会被提交到 Redis 服务器一次性执行完成，大幅减小了网络开销。</p>
<p>一段 Lua 脚本可以视作一条命令执行，一段 Lua 脚本执行过程中不会有其他脚本或 Redis 命令同时执行，保证了操作不会被其他指令插入或打扰。</p>
<p>如果 Lua 脚本运行时出错并中途结束，出错之后的命令是不会被执行的。并且，出错之前执行的命令是无法被撤销的。因此，严格来说，通过 Lua 脚本来批量执行 Redis 命令也是不满足原子性的。</p>
<p>另外，Redis 7.0 新增了 <a href="https://redis.io/docs/manual/programmability/functions-intro/" target="_blank" rel="noopener noreferrer">Redis functions<ExternalLinkIcon/></a> 特性，你可以将 Redis functions 看作是比 Lua 更强大的脚本。</p>
<h2 id="redis-性能优化" tabindex="-1"><a class="header-anchor" href="#redis-性能优化" aria-hidden="true">#</a> Redis 性能优化</h2>
<h3 id="redis-bigkey" tabindex="-1"><a class="header-anchor" href="#redis-bigkey" aria-hidden="true">#</a> Redis bigkey</h3>
<h4 id="什么是-bigkey" tabindex="-1"><a class="header-anchor" href="#什么是-bigkey" aria-hidden="true">#</a> 什么是 bigkey？</h4>
<p>简单来说，如果一个 key 对应的 value 所占用的内存比较大，那这个 key 就可以看作是 bigkey。具体多大才算大呢？有一个不是特别精确的参考标准：string 类型的 value 超过 10 kb，复合类型的 value 包含的元素超过 5000 个（对于复合类型的 value 来说，不一定包含的元素越多，占用的内存就越多）。</p>
<h4 id="bigkey-有什么危害" tabindex="-1"><a class="header-anchor" href="#bigkey-有什么危害" aria-hidden="true">#</a> bigkey 有什么危害？</h4>
<p>除了会消耗更多的内存空间，bigkey 对性能也会有比较大的影响。</p>
<p>因此，我们应该尽量避免写入 bigkey！</p>
<h4 id="如何发现-bigkey" tabindex="-1"><a class="header-anchor" href="#如何发现-bigkey" aria-hidden="true">#</a> 如何发现 bigkey？</h4>
<p><strong>1、使用 Redis 自带的 <code v-pre>--bigkeys</code> 参数来查找。</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># redis-cli -p 6379 --bigkeys</span>

<span class="token comment"># Scanning the entire keyspace to find biggest keys as well as</span>
<span class="token comment"># average sizes per key type.  You can use -i 0.1 to sleep 0.1 sec</span>
<span class="token comment"># per 100 SCAN commands (not usually needed).</span>

<span class="token punctuation">[</span>00.00%<span class="token punctuation">]</span> Biggest string found so far <span class="token string">'"ballcat:oauth:refresh_auth:f6cdb384-9a9d-4f2f-af01-dc3f28057c20"'</span> with <span class="token number">4437</span> bytes
<span class="token punctuation">[</span>00.00%<span class="token punctuation">]</span> Biggest list   found so far <span class="token string">'"my-list"'</span> with <span class="token number">17</span> items

-------- summary -------

Sampled <span class="token number">5</span> keys <span class="token keyword">in</span> the keyspace<span class="token operator">!</span>
Total key length <span class="token keyword">in</span> bytes is <span class="token number">264</span> <span class="token punctuation">(</span>avg len <span class="token number">52.80</span><span class="token punctuation">)</span>

Biggest   list found <span class="token string">'"my-list"'</span> has <span class="token number">17</span> items
Biggest string found <span class="token string">'"ballcat:oauth:refresh_auth:f6cdb384-9a9d-4f2f-af01-dc3f28057c20"'</span> has <span class="token number">4437</span> bytes

<span class="token number">1</span> lists with <span class="token number">17</span> items <span class="token punctuation">(</span><span class="token number">20.00</span>% of keys, avg size <span class="token number">17.00</span><span class="token punctuation">)</span>
<span class="token number">0</span> hashs with <span class="token number">0</span> fields <span class="token punctuation">(</span>00.00% of keys, avg size <span class="token number">0.00</span><span class="token punctuation">)</span>
<span class="token number">4</span> strings with <span class="token number">4831</span> bytes <span class="token punctuation">(</span><span class="token number">80.00</span>% of keys, avg size <span class="token number">1207.75</span><span class="token punctuation">)</span>
<span class="token number">0</span> streams with <span class="token number">0</span> entries <span class="token punctuation">(</span>00.00% of keys, avg size <span class="token number">0.00</span><span class="token punctuation">)</span>
<span class="token number">0</span> sets with <span class="token number">0</span> members <span class="token punctuation">(</span>00.00% of keys, avg size <span class="token number">0.00</span><span class="token punctuation">)</span>
<span class="token number">0</span> zsets with <span class="token number">0</span> members <span class="token punctuation">(</span>00.00% of keys, avg size <span class="token number">0.00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从这个命令的运行结果，我们可以看出：这个命令会扫描(Scan) Redis 中的所有 key ，会对 Redis 的性能有一点影响。并且，这种方式只能找出每种数据结构 top 1 bigkey（占用内存最大的 string 数据类型，包含元素最多的复合数据类型）。</p>
<p><strong>2、分析 RDB 文件</strong></p>
<p>通过分析 RDB 文件来找出 big key。这种方案的前提是你的 Redis 采用的是 RDB 持久化。</p>
<p>网上有现成的代码/工具可以直接拿来使用：</p>
<ul>
<li><a href="https://github.com/sripathikrishnan/redis-rdb-tools" target="_blank" rel="noopener noreferrer">redis-rdb-tools<ExternalLinkIcon/></a> ：Python 语言写的用来分析 Redis 的 RDB 快照文件用的工具</li>
<li><a href="https://github.com/weiyanwei412/rdb_bigkeys" target="_blank" rel="noopener noreferrer">rdb_bigkeys<ExternalLinkIcon/></a> : Go 语言写的用来分析 Redis 的 RDB 快照文件用的工具，性能更好。</li>
</ul>
<h3 id="大量-key-集中过期问题" tabindex="-1"><a class="header-anchor" href="#大量-key-集中过期问题" aria-hidden="true">#</a> 大量 key 集中过期问题</h3>
<p>我在上面提到过：对于过期 key，Redis 采用的是 <strong>定期删除+惰性/懒汉式删除</strong> 策略。</p>
<p>定期删除执行过程中，如果突然遇到大量过期 key 的话，客户端请求必须等待定期清理过期 key 任务线程执行完成，因为这个这个定期任务线程是在 Redis 主线程中执行的。这就导致客户端请求没办法被及时处理，响应速度会比较慢。</p>
<p>如何解决呢？下面是两种常见的方法：</p>
<ol>
<li>给 key 设置随机过期时间。</li>
<li>开启 lazy-free（惰性删除/延迟释放） 。lazy-free 特性是 Redis 4.0 开始引入的，指的是让 Redis 采用异步方式延迟释放 key 使用的内存，将该操作交给单独的子线程处理，避免阻塞主线程。</li>
</ol>
<p>个人建议不管是否开启 lazy-free，我们都尽量给 key 设置随机过期时间。</p>
<h2 id="redis-生产问题" tabindex="-1"><a class="header-anchor" href="#redis-生产问题" aria-hidden="true">#</a> Redis 生产问题</h2>
<h3 id="缓存穿透" tabindex="-1"><a class="header-anchor" href="#缓存穿透" aria-hidden="true">#</a> 缓存穿透</h3>
<h4 id="什么是缓存穿透" tabindex="-1"><a class="header-anchor" href="#什么是缓存穿透" aria-hidden="true">#</a> 什么是缓存穿透？</h4>
<p>缓存穿透说简单点就是大量请求的 key 根本不存在于缓存中，导致请求直接到了数据库上，根本没有经过缓存这一层。举个例子：某个黑客故意制造我们缓存中不存在的 key 发起大量请求，导致大量请求落到数据库。</p>
<h4 id="缓存穿透情况的处理流程是怎样的" tabindex="-1"><a class="header-anchor" href="#缓存穿透情况的处理流程是怎样的" aria-hidden="true">#</a> 缓存穿透情况的处理流程是怎样的？</h4>
<p>如下图所示，用户的请求最终都要跑到数据库中查询一遍。</p>
<p><img src="https://img-blog.csdnimg.cn/6358650a9bf742838441d636430c90b9.png" alt="缓存穿透情况" loading="lazy"></p>
<h4 id="有哪些解决办法" tabindex="-1"><a class="header-anchor" href="#有哪些解决办法" aria-hidden="true">#</a> 有哪些解决办法？</h4>
<p>最基本的就是首先做好参数校验，一些不合法的参数请求直接抛出异常信息返回给客户端。比如查询的数据库 id 不能小于 0、传入的邮箱格式不对的时候直接返回错误消息给客户端等等。</p>
<p><strong>1）缓存无效 key</strong></p>
<p>如果缓存和数据库都查不到某个 key 的数据就写一个到 Redis 中去并设置过期时间，具体命令如下： <code v-pre>SET key value EX 10086</code> 。这种方式可以解决请求的 key 变化不频繁的情况，如果黑客恶意攻击，每次构建不同的请求 key，会导致 Redis 中缓存大量无效的 key 。很明显，这种方案并不能从根本上解决此问题。如果非要用这种方式来解决穿透问题的话，尽量将无效的 key 的过期时间设置短一点比如 1 分钟。</p>
<p>另外，这里多说一嘴，一般情况下我们是这样设计 key 的： <code v-pre>表名:列名:主键名:主键值</code> 。</p>
<p>如果用 Java 代码展示的话，差不多是下面这样的：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getObjectInclNullById</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 从缓存中获取数据</span>
    <span class="token class-name">Object</span> cacheValue <span class="token operator">=</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 缓存为空</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cacheValue <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 从数据库中获取</span>
        <span class="token class-name">Object</span> storageValue <span class="token operator">=</span> storage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 缓存空对象</span>
        cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> storageValue<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果存储数据为空，需要设置一个过期时间(300秒)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>storageValue <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 必须设置过期时间，否则有被攻击的风险</span>
            cache<span class="token punctuation">.</span><span class="token function">expire</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> storageValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> cacheValue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2）布隆过滤器</strong></p>
<p>布隆过滤器是一个非常神奇的数据结构，通过它我们可以非常方便地判断一个给定数据是否存在于海量数据中。我们需要的就是判断 key 是否合法，有没有感觉布隆过滤器就是我们想要找的那个“人”。</p>
<p>具体是这样做的：把所有可能存在的请求的值都存放在布隆过滤器中，当用户请求过来，先判断用户发来的请求的值是否存在于布隆过滤器中。不存在的话，直接返回请求参数错误信息给客户端，存在的话才会走下面的流程。</p>
<p>加入布隆过滤器之后的缓存处理流程图如下。</p>
<p><img src="@source/code/java/database/redis/images/redis-all/加入布隆过滤器后的缓存处理流程.png" alt="" loading="lazy"></p>
<p>但是，需要注意的是布隆过滤器可能会存在误判的情况。总结来说就是： <strong>布隆过滤器说某个元素存在，小概率会误判。布隆过滤器说某个元素不在，那么这个元素一定不在。</strong></p>
<p><em>为什么会出现误判的情况呢? 我们还要从布隆过滤器的原理来说！</em></p>
<p>我们先来看一下，<strong>当一个元素加入布隆过滤器中的时候，会进行哪些操作：</strong></p>
<ol>
<li>使用布隆过滤器中的哈希函数对元素值进行计算，得到哈希值（有几个哈希函数得到几个哈希值）。</li>
<li>根据得到的哈希值，在位数组中把对应下标的值置为 1。</li>
</ol>
<p>我们再来看一下，<strong>当我们需要判断一个元素是否存在于布隆过滤器的时候，会进行哪些操作：</strong></p>
<ol>
<li>对给定元素再次进行相同的哈希计算；</li>
<li>得到值之后判断位数组中的每个元素是否都为 1，如果值都为 1，那么说明这个值在布隆过滤器中，如果存在一个值不为 1，说明该元素不在布隆过滤器中。</li>
</ol>
<p>然后，一定会出现这样一种情况：<strong>不同的字符串可能哈希出来的位置相同。</strong> （可以适当增加位数组大小或者调整我们的哈希函数来降低概率）</p>
<p>更多关于布隆过滤器的内容可以看我的这篇原创：<a href="https://javaguide.cn/cs-basics/data-structure/bloom-filter/" target="_blank" rel="noopener noreferrer">《不了解布隆过滤器？一文给你整的明明白白！》<ExternalLinkIcon/></a> ，强烈推荐，个人感觉网上应该找不到总结的这么明明白白的文章了。</p>
<h3 id="缓存雪崩" tabindex="-1"><a class="header-anchor" href="#缓存雪崩" aria-hidden="true">#</a> 缓存雪崩</h3>
<h4 id="什么是缓存雪崩" tabindex="-1"><a class="header-anchor" href="#什么是缓存雪崩" aria-hidden="true">#</a> 什么是缓存雪崩？</h4>
<p>我发现缓存雪崩这名字起的有点意思，哈哈。</p>
<p>实际上，缓存雪崩描述的就是这样一个简单的场景：<strong>缓存在同一时间大面积的失效，后面的请求都直接落到了数据库上，造成数据库短时间内承受大量请求。</strong> 这就好比雪崩一样，摧枯拉朽之势，数据库的压力可想而知，可能直接就被这么多请求弄宕机了。</p>
<p>举个例子：系统的缓存模块出了问题比如宕机导致不可用。造成系统的所有访问，都要走数据库。</p>
<p>还有一种缓存雪崩的场景是：<strong>有一些被大量访问数据（热点缓存）在某一时刻大面积失效，导致对应的请求直接落到了数据库上。</strong> 这样的情况，有下面几种解决办法：</p>
<p>举个例子 ：秒杀开始 12 个小时之前，我们统一存放了一批商品到 Redis 中，设置的缓存过期时间也是 12 个小时，那么秒杀开始的时候，这些秒杀的商品的访问直接就失效了。导致的情况就是，相应的请求直接就落到了数据库上，就像雪崩一样可怕。</p>
<h4 id="有哪些解决办法-1" tabindex="-1"><a class="header-anchor" href="#有哪些解决办法-1" aria-hidden="true">#</a> 有哪些解决办法？</h4>
<p><strong>针对 Redis 服务不可用的情况：</strong></p>
<ol>
<li>采用 Redis 集群，避免单机出现问题整个缓存服务都没办法使用。</li>
<li>限流，避免同时处理大量的请求。</li>
</ol>
<p><strong>针对热点缓存失效的情况：</strong></p>
<ol>
<li>设置不同的失效时间比如随机设置缓存的失效时间。</li>
<li>缓存永不失效。</li>
</ol>
<h3 id="如何保证缓存和数据库数据的一致性" tabindex="-1"><a class="header-anchor" href="#如何保证缓存和数据库数据的一致性" aria-hidden="true">#</a> 如何保证缓存和数据库数据的一致性？</h3>
<p>细说的话可以扯很多，但是我觉得其实没太大必要（小声 BB：很多解决方案我也没太弄明白）。我个人觉得引入缓存之后，如果为了短时间的不一致性问题，选择让系统设计变得更加复杂的话，完全没必要。</p>
<p>下面单独对 <strong>Cache Aside Pattern（旁路缓存模式）</strong> 来聊聊。</p>
<p>Cache Aside Pattern 中遇到写请求是这样的：更新 DB，然后直接删除 cache 。</p>
<p>如果更新数据库成功，而删除缓存这一步失败的情况的话，简单说两个解决方案：</p>
<ol>
<li><strong>缓存失效时间变短（不推荐，治标不治本）</strong> ：我们让缓存数据的过期时间变短，这样的话缓存就会从数据库中加载数据。另外，这种解决办法对于先操作缓存后操作数据库的场景不适用。</li>
<li><strong>增加 cache 更新重试机制（常用）</strong>： 如果 cache 服务当前不可用导致缓存删除失败的话，我们就隔一段时间进行重试，重试次数可以自己定。如果多次重试还是失败的话，我们可以把当前更新失败的 key 存入队列中，等缓存服务可用之后，再将缓存中对应的 key 删除即可。</li>
</ol>
<p>相关文章推荐：<a href="https://mp.weixin.qq.com/s?__biz=MzIyOTYxNDI5OA==&amp;mid=2247487312&amp;idx=1&amp;sn=fa19566f5729d6598155b5c676eee62d&amp;chksm=e8beb8e5dfc931f3e35655da9da0b61c79f2843101c130cf38996446975014f958a6481aacf1&amp;scene=178&amp;cur_album_id=1699766580538032128#rd" target="_blank" rel="noopener noreferrer">缓存和数据库一致性问题，看这篇就够了 - 水滴与银弹<ExternalLinkIcon/></a></p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>《Redis 开发与运维》</li>
<li>《Redis 设计与实现》</li>
<li>Redis 命令总结：<a href="http://Redisdoc.com/string/set.html" target="_blank" rel="noopener noreferrer">http://Redisdoc.com/string/set.html<ExternalLinkIcon/></a></li>
<li>通俗易懂的 Redis 数据结构基础教程：<a href="https://juejin.im/post/5b53ee7e5188251aaa2d2e16" target="_blank" rel="noopener noreferrer">https://juejin.im/post/5b53ee7e5188251aaa2d2e16<ExternalLinkIcon/></a></li>
<li>WHY Redis choose single thread (vs multi threads): <a href="https://medium.com/@jychen7/sharing-redis-single-thread-vs-multi-threads-5870bd44d153" target="_blank" rel="noopener noreferrer">https://medium.com/@jychen7/sharing-redis-single-thread-vs-multi-threads-5870bd44d153<ExternalLinkIcon/></a></li>
</ul>
</div></template>
