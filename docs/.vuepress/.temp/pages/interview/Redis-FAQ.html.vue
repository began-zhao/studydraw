<template><div><h2 id="一、redis-基础问题" tabindex="-1"><a class="header-anchor" href="#一、redis-基础问题" aria-hidden="true">#</a> 一、Redis 基础问题</h2>
<h3 id="redis是什么" tabindex="-1"><a class="header-anchor" href="#redis是什么" aria-hidden="true">#</a> Redis是什么</h3>
<p>Redis：<strong>REmote DIctionary Server</strong>(远程字典服务器)。</p>
<p>Redis 是一个全开源免费（BSD许可）的，内存中的数据结构存储系统，它可以用作<strong>数据库、缓存和消息中间件</strong>，</p>
<p>和 Memcached 类似，它支持存储的 value 类型相对更多，包括<strong>string(字符串)、list(链表)、set(集合)、zset(sorted set --有序集合)和hash（哈希类型）、bitmap、hyperloglog、GeoHash、streams</strong>。这些数据类型都支持push/pop、add/remove及取交集并集和差集及更丰富的操作，而且这些操作都是原子性的。</p>
<p>Redis 内置了复制（Replication），LUA脚本（Lua scripting）， LRU驱动事件（LRU eviction），事务（Transactions） 和不同级别的磁盘持久化（Persistence），并通过 Redis 哨兵（Sentinel）和自动分区（Cluster）提供高可用性（High Availability）。</p>
<ul>
<li>性能优秀，数据在内存中，读写速度非常快，支持并发10W QPS</li>
<li>单进程单线程，是线程安全的，采用IO多路复用机制</li>
<li>Redis 数据库完全在内存中，使用磁盘仅用于持久性</li>
<li>相比许多键值数据存储，Redis 拥有一套较为丰富的数据类型</li>
<li>操作都是<strong>原子性</strong>：所有 Redis 操作是原子的，这保证了如果两个客户端同时访问的Redis服务器将获得更新后的值</li>
<li>Redis 可以将数据复制到任意数量的从服务器（主从复制，哨兵，高可用）</li>
</ul>
<h3 id="为什么要用缓存-为什么使用-redis" tabindex="-1"><a class="header-anchor" href="#为什么要用缓存-为什么使用-redis" aria-hidden="true">#</a> 为什么要用缓存？为什么使用 Redis？</h3>
<p><strong>提一下现在 Web 应用的现状</strong></p>
<p>在日常的 Web 应用对数据库的访问中，<strong>读操作的次数远超写操作</strong>，比例大概在 <strong>1:9</strong> 到 <strong>3:7</strong>，所以需要读的可能性是比写的可能大得多的。当我们使用 SQL 语句去数据库进行读写操作时，数据库就会 <strong>去磁盘把对应的数据索引取回来</strong>，这是一个相对较慢的过程。</p>
<p><strong>使用 Redis or 使用缓存带来的优势</strong></p>
<p>如果我们把数据放在 Redis 中，也就是直接放在内存之中，让服务端直接去读取内存中的数据，那么这样 <strong>速度</strong> 明显就会快上不少 <em>(高性能)</em>，并且会 <strong>极大减小数据库的压力</strong> <em>(特别是在高并发情况下)</em>。</p>
<p><strong>也要提一下使用缓存的考虑</strong></p>
<p>但是使用内存进行数据存储开销也是比较大的，<strong>限于成本</strong> 的原因，一般我们只是使用 Redis 存储一些 <strong>常用和主要的数据</strong>，比如用户登录的信息等。</p>
<p>一般而言在使用 Redis 进行存储的时候，我们需要从以下几个方面来考虑：</p>
<ul>
<li><strong>业务数据常用吗？命中率如何？</strong> 如果命中率很低，就没有必要写入缓存；</li>
<li><strong>该业务数据是读操作多，还是写操作多？</strong> 如果写操作多，频繁需要写入数据库，也没有必要使用缓存；</li>
<li><strong>业务数据大小如何？</strong> 如果要存储几百兆字节的文件，会给缓存带来很大的压力，这样也没有必要；</li>
</ul>
<p>在考虑了这些问题之后，如果觉得有必要使用缓存，那么就使用它！</p>
<h3 id="用缓存-肯定是因为他快-那-redis-为什么这么快" tabindex="-1"><a class="header-anchor" href="#用缓存-肯定是因为他快-那-redis-为什么这么快" aria-hidden="true">#</a> 用缓存，肯定是因为他快，那 Redis 为什么这么快</h3>
<ul>
<li>
<p><strong>纯内存操作</strong>：读取不需要进行磁盘 I/O，所以比传统数据库要快上不少；<em>(但不要有误区说磁盘就一定慢，例如 Kafka 就是使用磁盘顺序读取但仍然较快)</em></p>
</li>
<li>
<p>用hash table作为键空间，查找任意的key只需O(1)</p>
</li>
<li>
<p><strong>单线程，无锁竞争</strong>：天生的队列模式，避免了因多线程竞争而导致的上下文切换和抢锁的开销</p>
</li>
<li>
<p>事件机制，Redis服务器将所有处理的任务分为两类事件，一类是采用I/O多路复用处理客户端请求的网络事件；一类是处理定时任务的时间事件，包括更新统计信息、清理过期键、持久化、主从同步等；</p>
<ul>
<li>
<p><strong>多路 I/O 复用模型，非阻塞 I/O</strong>：采用多路 I/O 复用技术可以让单个线程高效的处理多个网络连接请求（尽量减少网络 IO 的时间消耗）；</p>
</li>
<li>
<p>Redis 基于 Reactor 模式开发了自己的网络事件处理器，这个处理器被称为文件事件处理器 file event handler。由于这个文件事件处理器是单线程的，所以Redis才叫做单线程的模型，但是它采用IO多路复用机制同时监听多个Socket，并根据Socket上的事件来选择对应的事件处理器进行处理。文件事件处理器的结构包含4个部分，线程模型如下图：
<img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h39bj2lu3fj20hn0apaau.jpg" alt="img" loading="lazy"></p>
</li>
<li>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h39bjv4uz9j215l0g5jvc.jpg" alt="" loading="lazy"></p>
<p>多个 Socket 可能会产生不同的操作，每个操作对应不同的文件事件，但是IO多路复用程序会监听多个Socket，将Socket产生的事件放入队列中排队，事件分派器每次从队列中取出一个事件，把该事件交给对应的事件处理器进行处理。</p>
<p>Redis客户端对服务端的每次调用都经历了发送命令，执行命令，返回结果三个过程。其中执行命令阶段，由于Redis是单线程来处理命令的，所有每一条到达服务端的命令不会立刻执行，所有的命令都会进入一个队列中，然后逐个被执行。并且多个客户端发送的命令的执行顺序是不确定的。但是可以确定的是不会有两条命令被同时执行，不会产生并发问题，这就是Redis的单线程基本模型。</p>
</li>
</ul>
</li>
<li>
<p><strong>高效的数据结构，加上底层做了大量优化</strong>：Redis 对于底层的数据结构和内存占用做了大量的优化，例如不同长度的字符串使用不同的结构体表示，HyperLogLog 的密集型存储结构等等..</p>
</li>
</ul>
<blockquote>
<p><strong>I/O多路复用，I/O就是指的我们网络I/O，多路指多个TCP连接(或多个Channel)，复用指复用一个或少量线程。串起来理解就是很多个网络I/O复用一个或少量的线程来处理这些连接。</strong></p>
</blockquote>
<p>当然这种单线程事件机制也是有缺陷的，由于所有的事件都是串行执行，一旦某个事件比较重就会阻塞其它事件，从而导致整个系统的吞吐率下降。比如某个客户端执行了一个比较重的lua函数、或者使用了诸如keys*、zrange(0,-1)、hgetall等全集合扫描的操作，又或者删除的过期键是个big key，又或者使用了较多内存的redis实例进行bgsave时，都会导致服务器一定程度的阻塞，一般伴随会有相应的慢日志。所以我们在实际使用redis的过程中，必须要给每一次的操作分配合理的时间片。</p>
<ul>
<li>Redis直接自己构建了VM 机制 ，避免调用系统函数的时候，浪费时间去移动和请求</li>
</ul>
<h3 id="redis-属于单线程还是多线程" tabindex="-1"><a class="header-anchor" href="#redis-属于单线程还是多线程" aria-hidden="true">#</a> Redis 属于单线程还是多线程？</h3>
<blockquote>
<p>这道题其实就在考察 Redis 的线程模型（这几乎是 Redis 必问的问题之一）。</p>
</blockquote>
<p>很多初级研发工程师基本都知道 Redis 是单线程的，并且能说出 Redis 单线程的一些优缺点，比如，实现简单，可以在无锁的情况下完成所有操作，不存在死锁和线程切换带来的性能和时间上的开销，但同时单线程也不能发挥多核 CPU 的性能。</p>
<p>很明显，如果你停留在上面的回答思路上，只能勉强及格，因为对于这样一道经典的面试题，你回答得没有亮点，几乎丧失了机会。一个相对完整的思路应该基于 Redis 单线程，补充相关的知识点，比如：</p>
<p>如：</p>
<p>Redis 只有单线程吗？</p>
<p>Redis 是单线程的，主要是指 Redis 的网络 I/O 线程，以及键值的 SET 和 GET 等读写操作都是由一个线程来完成的。但 Redis 的持久化、集群同步等操作，则是由另外的线程来执行的。</p>
<p>Redis 采用单线程为什么还这么快？</p>
<p>一般来说，单线程的处理能力应该要比多线程差才对，但为什么 Redis 还能达到每秒数万级的处理能力呢？主要有如下几个原因。</p>
<p>首先，一个重要的原因是，Redis 的大部分操作都在内存中完成，并且采用了高效的数据结构，比如哈希表和跳表。</p>
<p>其次，因为是单线程模型避免了多线程之间的竞争，省去了多线程切换带来的时间和性能上的开销，而且也不会导致死锁问题。</p>
<p>最后，也是最重要的一点， Redis 采用了 I/O 多路复用机制处理大量的客户端 Socket 请求，这让 Redis 可以高效地进行网络通信，因为基于非阻塞的 I/O 模型，就意味着 I/O 的读写流程不再阻塞。</p>
<p>但是因为 Redis 不同版本的特殊性，所以对于 Redis 的线程模型要分版本来看。</p>
<p>Redis 4.0 版本之前，使用单线程速度快的原因就是上述的几个原因；</p>
<p>Redis 4.0 版本之后，Redis 添加了多线程的支持，但这时的多线程主要体现在大数据的异步删除功能上，例如 unlink key、flushdb async、flushall async 等。</p>
<p>Redis 6.0 版本之后，为了更好地提高 Redis 的性能，新增了多线程 I/O 的读写并发能力，但是在面试中，能把 Redis 6.0 中的多线程模型回答上来的人很少，如果你能在面试中补充 Redis 6.0 多线程的原理，势必会增加面试官对你的认可。</p>
<p>你可以在面试中这样补充：</p>
<p>虽然 Redis 一直是单线程模型，但是在 Redis 6.0 版本之后，也采用了多个 I/O 线程来处理网络请求，这是因为随着网络硬件的性能提升，Redis 的性能瓶颈有时会出现在网络 I/O 的处理上，所以为了提高网络请求处理的并行度，Redis 6.0 对于网络请求采用多线程来处理。但是对于读写命令，Redis 仍然使用单线程来处理。</p>
<blockquote>
<p>很多同学对单线程有些疑问，简单的解释一下 redis 单线程的意思，redis 服务端虽说是单线程，但是可以同时 持有很多connection，每个connection 都可以同时发请求，只不过在 redis 服务端，一个一个的处理每个connection 发过来的request， 通俗点说就是，很多请求都能发过来，（其实是存在每个connection socket 内核缓冲区），一个一个处理。</p>
</blockquote>
<h3 id="为什么早期版本的-redis-选择单线程" tabindex="-1"><a class="header-anchor" href="#为什么早期版本的-redis-选择单线程" aria-hidden="true">#</a> 为什么早期版本的 Redis 选择单线程？</h3>
<p>我们首先要明白，上边的种种分析，都是为了营造一个 Redis 很快的氛围！官方FAQ表示，因为Redis是基于内存的操作，CPU不是Redis的瓶颈，Redis的瓶颈最有可能是机器内存的大小或者网络带宽。既然单线程容易实现，而且CPU不会成为瓶颈，那就顺理成章地采用单线程的方案了（毕竟采用多线程会有很多麻烦！）。</p>
<p>看到这里，你可能会气哭！本以为会有什么重大的技术要点才使得Redis使用单线程就可以这么快，没想到就是一句官方看似糊弄我们的回答！但是，我们已经可以很清楚的解释了为什么Redis这么快，并且正是由于在单线程模式的情况下已经很快了，就没有必要在使用多线程了！</p>
<h4 id="简单总结一下" tabindex="-1"><a class="header-anchor" href="#简单总结一下" aria-hidden="true">#</a> 简单总结一下</h4>
<ol>
<li>使用单线程模型能带来更好的可维护性，方便开发和调试；</li>
<li>使用单线程模型也能并发的处理客户端的请求；</li>
<li>Redis 服务中运行的绝大多数操作的性能瓶颈都不是 CPU；</li>
</ol>
<p>这里我们一直在强调的单线程，只是在处理我们的网络请求的时候只有一个线程来处理，一个正式的 Redis Server 运行的时候肯定是不止一个线程的，这里需要大家明确的注意一下！例如 Redis 进行持久化的时候会以子进程或者子线程的方式执行；</p>
<p>Redis 选择使用单线程模型处理客户端的请求主要还是因为 CPU 不是 Redis 服务器的瓶颈，所以使用多线程模型带来的性能提升并不能抵消它带来的开发成本和维护成本，系统的性能瓶颈也主要在网络 I/O 操作上；而 Redis 引入多线程操作也是出于性能上的考虑，对于一些大键值对的删除操作，通过多线程非阻塞地释放内存空间也能减少对 Redis 主线程阻塞的时间，提高执行的效率。</p>
<p>推荐阅读：<a href="https://draveness.me/whys-the-design-redis-single-thread/" target="_blank" rel="noopener noreferrer">https://draveness.me/whys-the-design-redis-single-thread/<ExternalLinkIcon/></a></p>
<h3 id="redis-和-memcached-的区别" tabindex="-1"><a class="header-anchor" href="#redis-和-memcached-的区别" aria-hidden="true">#</a> Redis 和 Memcached 的区别</h3>
<ol>
<li>存储方式上：memcache 会把数据全部存在内存之中，断电后会挂掉，数据不能超过内存大小。redis 有部分数据存在硬盘上，这样能保证数据的持久性。</li>
<li>数据支持类型上：memcache 对数据类型的支持简单，只支持简单的 key-value，而 redis 支持五种数据类型。</li>
<li>使用底层模型不同：它们之间底层实现方式以及与客户端之间通信的应用协议不一样。redis 直接自己构建了 VM 机制，因为一般的系统调用系统函数的话，会浪费一定的时间去移动和请求。</li>
<li>value 的大小：redis 可以达到 512M，而 memcache 只有 1M。</li>
</ol>
<h3 id="最后总结下-redis-优缺点" tabindex="-1"><a class="header-anchor" href="#最后总结下-redis-优缺点" aria-hidden="true">#</a> 最后总结下 Redis 优缺点</h3>
<p>优点</p>
<ul>
<li><strong>读写性能优异</strong>， Redis能读的速度是 <code v-pre>110000</code> 次/s，写的速度是 <code v-pre>81000</code> 次/s。</li>
<li><strong>支持数据持久化</strong>，支持 AOF 和 RDB 两种持久化方式。</li>
<li><strong>支持事务</strong>，Redis 的所有操作都是原子性的，同时 Redis 还支持对几个操作合并后的原子性执行。</li>
<li><strong>数据结构丰富</strong>，除了支持 string 类型的 value 外还支持 hash、set、zset、list 等数据结构。</li>
<li><strong>支持主从复制</strong>，主机会自动将数据同步到从机，可以进行读写分离。</li>
</ul>
<p>缺点</p>
<ul>
<li>数据库 <strong>容量受到物理内存的限制</strong>，不能用作海量数据的高性能读写，因此 Redis 适合的场景主要局限在较小数据量的高性能操作和运算上。</li>
<li>Redis <strong>不具备自动容错和恢复功能</strong>，主机从机的宕机都会导致前端部分读写请求失败，需要等待机器重启或者手动切换前端的 IP 才能恢复。</li>
<li>主机宕机，宕机前有部分数据未能及时同步到从机，切换 IP 后还会引入数据不一致的问题，降低了 <strong>系统的可用性</strong>。</li>
<li><strong>Redis 较难支持在线扩容</strong>，在集群容量达到上限时在线扩容会变得很复杂。为避免这一问题，运维人员在系统上线时必须确保有足够的空间，这对资源造成了很大的浪费。</li>
</ul>
<h3 id="key-最大是多少-单个实例最多支持多少个key" tabindex="-1"><a class="header-anchor" href="#key-最大是多少-单个实例最多支持多少个key" aria-hidden="true">#</a> key 最大是多少 ，单个实例最多支持多少个key</h3>
<p>一个 key 或是 value 大小最大是 512M</p>
<p>一个单实例的redis最多能支持 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>32</mn></msup></mrow><annotation encoding="application/x-tex">2^{32}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">32</span></span></span></span></span></span></span></span></span></span></span></span> 个键，差不多就是 2.5 亿个，每个 key 中的值也是可以存 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mn>2</mn><mn>32</mn></msup></mrow><annotation encoding="application/x-tex">2^{32}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">32</span></span></span></span></span></span></span></span></span></span></span></span>  行数据，所以服务器的内存才是我们所担心的。</p>
<hr>
<h2 id="二、redis-数据结构问题" tabindex="-1"><a class="header-anchor" href="#二、redis-数据结构问题" aria-hidden="true">#</a> 二、Redis 数据结构问题</h2>
<h3 id="redis-都支持哪些数据类型" tabindex="-1"><a class="header-anchor" href="#redis-都支持哪些数据类型" aria-hidden="true">#</a> Redis 都支持哪些数据类型</h3>
<p>首先在 Redis 内部会使用一个 <strong>RedisObject</strong> 对象来表示所有的 <code v-pre>key</code> 和 <code v-pre>value</code>：</p>
<p><img src="https://cdn.jsdelivr.net/gh/wmyskxz/img/img/妈妈再也不担心我面试被Redis问得脸都绿了/7896890-16511ec4f7f30569.png" alt="" loading="lazy"></p>
<p>Redis 提供了五种基本数据类型，String、Hash、List、Set、Zset(sorted set：有序集合)</p>
<blockquote>
<p>Redis 不是简单的键值存储，它实际上是一个数据结构服务器，支持不同类型的值。</p>
<ul>
<li>String（字符串）：二进制安全字符串</li>
<li>List（列表）：根据插入顺序排序的字符串元素的集合。它们基本上是链表</li>
<li>Hash（字典）：是一个键值对集合。KV模式不变，但V是一个键值对</li>
<li>Set（集合）：唯一，未排序的字符串元素的集合</li>
<li>zset(sorted set：有序集合)：相当于有序的 Set集合，每个字符串元素都与一个称为 <em>score</em> 的浮点值相关联。元素总是按它们的分数排序（eg，找出前10名或后10名）</li>
</ul>
<p>除了支持最 <strong>基础的五种数据类型</strong> 外，还支持一些 <strong>高级数据类型</strong>：</p>
<ul>
<li>Bit arrays （位数组，简称位图 bitMap）：</li>
<li>HyperLogLog（）：这是一个概率数据结构，用于估计集合的基数</li>
<li>Geo</li>
<li>Stream：</li>
</ul>
</blockquote>
<p>由于 Redis 是基于标准 C 写的，只有最基础的数据类型，因此 Redis 为了满足对外使用的 5 种数据类型，开发了属于自己<strong>独有的一套基础数据结构</strong>，使用这些数据结构来实现5种数据类型。</p>
<p>Redis底层的数据结构包括：<strong>简单动态数组SDS、链表、字典、跳跃链表、整数集合、压缩列表、对象。</strong></p>
<p>Redis 为了平衡空间和时间效率，针对 value 的具体类型在底层会采用不同的数据结构来实现，其中哈希表和压缩列表是复用比较多的数据结构，如下图展示了对外数据类型和底层数据结构之间的映射关系：</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1ge0k8do3s3j30im0el7aa.jpg" alt="" loading="lazy"></p>
<h3 id="那你能说说这些数据类型的使用指令吗" tabindex="-1"><a class="header-anchor" href="#那你能说说这些数据类型的使用指令吗" aria-hidden="true">#</a> 那你能说说这些数据类型的使用指令吗？</h3>
<p>String：就是基本的 SET、GET、MSET、MGET、INCR、DECR</p>
<p>List：LPUSH、RPUSH、LRANGE、LINDEX</p>
<p>Hash：HSET、HMSET、HSETNX、HKEYS、HVALS</p>
<p>Set：SADD、SCARD、SDIFF、SREM</p>
<p>SortSet：ZADD、ZCARD、ZCOUNT、ZRANGE</p>
<h3 id="string-是如何实现的" tabindex="-1"><a class="header-anchor" href="#string-是如何实现的" aria-hidden="true">#</a> String 是如何实现的</h3>
<p>Redis 是用 C 语言开发完成的，但在 Redis 字符串中，并没有使用 C 语言中的字符串，而是用一种称为 <strong>SDS</strong>（Simple Dynamic String）的结构体来保存字符串。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gjno8bake1j30rk06dwei.jpg" alt="" loading="lazy"></p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gjno8fzv2ej30d207r3yr.jpg" alt="img" loading="lazy"></p>
<p>String 是 Redis 最基本的类型，你可以理解成与 Memcached一模一样的类型，一个 key 对应一个 value。</p>
<p>String 类型是二进制安全的。意思是 Redis 的 String 可以包含任何数据。比如 jpg 图片或者序列化的对象 。</p>
<p>Redis 的字符串是动态字符串，是可以修改的字符串，<strong>内部结构实现上类似于 Java 的 ArrayList</strong>，采用预分配冗余空间的方式来减少内存的频繁分配，内部为当前字符串实际分配的空间 capacity 一般要高于实际字符串长度 len。当字符串长度小于 1M 时，扩容都是加倍现有的空间，如果超过 1M，扩容时一次只会多扩 1M 的空间。需要注意的是<strong>字符串最大长度为 512M</strong></p>
<p><img src="http://ww1.sinaimg.cn/large/9b9f09a9ly1g9ypoobef5j20fw04pq2p.jpg" alt="" loading="lazy"></p>
<h3 id="redis-的-sds-和-c-中字符串相比有什么优势" tabindex="-1"><a class="header-anchor" href="#redis-的-sds-和-c-中字符串相比有什么优势" aria-hidden="true">#</a> Redis 的 SDS 和 C 中字符串相比有什么优势？</h3>
<p>C 语言使用了一个长度为 <code v-pre>N+1</code> 的字符数组来表示长度为 <code v-pre>N</code> 的字符串，并且字符数组最后一个元素总是 <code v-pre>\0</code>，这种简单的字符串表示方式 <strong>不符合 Redis 对字符串在安全性、效率以及功能方面的要求</strong>。</p>
<p>再来说 C 语言字符串的问题</p>
<p>这样简单的数据结构可能会造成以下一些问题：</p>
<ul>
<li><strong>获取字符串长度为 O(N) 级别的操作</strong> → 因为 C 不保存数组的长度，每次都需要遍历一遍整个数组；</li>
<li>不能很好的杜绝 <strong>缓冲区溢出/内存泄漏</strong> 的问题 → 跟上述问题原因一样，如果执行拼接 or 缩短字符串的操作，如果操作不当就很容易造成上述问题；</li>
<li>C 字符串 <strong>只能保存文本数据</strong> → 因为 C 语言中的字符串必须符合某种编码（比如 ASCII），例如中间出现的 <code v-pre>'\0'</code> 可能会被判定为提前结束的字符串而识别不了；</li>
</ul>
<p><strong>Redis 如何解决的 | SDS 的优势</strong></p>
<p>如果去看 Redis 的源码 <code v-pre>sds.h/sdshdr</code> 文件，你会看到 SDS 完整的实现细节，这里简单来说一下 Redis 如何解决的：</p>
<ol>
<li><strong>多增加 len 表示当前字符串的长度</strong>：这样就可以直接获取长度了，复杂度 O(1)；</li>
<li><strong>自动扩展空间</strong>：当 SDS 需要对字符串进行修改时，首先借助于 <code v-pre>len</code> 和 <code v-pre>alloc</code> 检查空间是否满足修改所需的要求，如果空间不够的话，SDS 会自动扩展空间，避免了像 C 字符串操作中的覆盖情况；</li>
<li><strong>有效降低内存分配次数</strong>：C 字符串在涉及增加或者清除操作时会改变底层数组的大小造成重新分配，SDS 使用了 <strong>空间预分配</strong> 和 <strong>惰性空间释放</strong> 机制，简单理解就是每次在扩展时是成倍的多分配的，在缩容是也是先留着并不正式归还给 OS；</li>
<li><strong>二进制安全</strong>：C 语言字符串只能保存 <code v-pre>ascii</code> 码，对于图片、音频等信息无法保存，SDS 是二进制安全的，写入什么读取就是什么，不做任何过滤和限制；</li>
</ol>
<h3 id="redis的字符串实现-如何保证二进制安全" tabindex="-1"><a class="header-anchor" href="#redis的字符串实现-如何保证二进制安全" aria-hidden="true">#</a> Redis的字符串实现，如何保证二进制安全</h3>
<p>二进制安全的定义</p>
<ol>
<li>非二进制安全：c 中的 strlen 函数，因为它依赖于特殊的字符 ’\0’ 来判断字符串是否结束，所以对于字符串 str = &quot;1234\0123&quot; 来说，strlen(str)=4。</li>
<li>二进制安全：redis实现的 sds（简单动态字符串），因为它不会对任何字符（包括’\0’）进行特殊解释，所以在redis中，strlen(str)=8。</li>
</ol>
<p>二进制安全是一种主要用于字符串操作函数相关的计算机编程术语。其描述的是：<strong>将输入作为原始的、无任何特殊格式意义的数据流。对于每个字符都公平对待，不特殊处理某一个字符</strong>。</p>
<blockquote>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">sdshdr</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> len<span class="token punctuation">;</span><span class="token comment">//buf数组中已经使用的字节的数量，也就是SDS字符串长度</span>
        <span class="token keyword">int</span>  free<span class="token punctuation">;</span><span class="token comment">//buf数组中未使用的字节的数量</span>
        <span class="token keyword">char</span> buf<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//字节数组，字符串就保存在这里面</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>redis 通过定义上述结构体的方式，扩展了C语言底层字符串的缺点，字符串长度的获取时间复杂度从原来的 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mi>N</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(N)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mclose">)</span></span></span></span> 变成了 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span></span></span></span>，另一方面也可以通过free的动态改变来减少内存的分配。需要强调一点的是buf数组不是存储的字符，而是二进制数组，因为C语言字符串中间是不能出现空字符的，而二进制数据中间很有可能会有空字符，所以C语言是二进制不安全的，而redis又是二进制安全。为了存储多种类型的数据，redis就直接把所有数据当作二进制来存储，这样就可以存储媒体文件和字符串，所以SDS虽然叫简单动态字符串，但是它可不只是用来保存字符串。SDS在Redis中是实现字符串对象的工具。当你对该字符串取值时是通过len属性判断实际内容的长度，然后取的值。拼接字符串时是追加到free空间中的。</p>
<p><strong>简单总结：</strong> 二进制安全的意思就是，只关心二进制化的字符串，不关心具体格式，只会严格的按照二进制的数据存取，不会妄图以某种特殊格式解析数据。</p>
<p>Redis的简单动态字符串SDS对比C语言的字符串char*，有以下特性：</p>
<ul>
<li>可以在 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>O</mi><mo stretchy="false">(</mo><mn>1</mn><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">O(1)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord">1</span><span class="mclose">)</span></span></span></span> 的时间复杂度得到字符串的长度</li>
<li>可以高效的执行append追加字符串操作</li>
</ul>
<p>SDS通过判断当前字符串空余的长度与需要追加的字符串长度，如果空余长度大于等于需要追加的字符串长度，那么直接追加即可，这样就减少了重新分配内存操作；否则，先用sdsMakeRoomFor函数对SDS进行扩展，按照一定的机制来决定扩展的内存大小，然后再执行追加操作，扩展后多余的空间不释放，方便下次再次追加字符串，这样做的代价就是浪费了一些内存，但是在Redis字符串追加操作很频繁的情况下，这种机制能很高效的完成追加字符串的操作。</p>
</blockquote>
<h3 id="说说-list" tabindex="-1"><a class="header-anchor" href="#说说-list" aria-hidden="true">#</a> 说说 List</h3>
<p>Redis 列表是简单的字符串列表，按照插入顺序排序。你可以添加一个元素到列表的头部（左边）或者尾部（右边）。</p>
<p><strong>Redis 的列表相当于 Java 语言里面的 LinkedList，注意它是链表而不是数组</strong>。这意味着 list 的插入和删除操作非常快，时间复杂度为 O(1)，但是索引定位很慢，时间复杂度为 O(n)。</p>
<p><strong>Redis 的列表结构常用来做异步队列使用</strong>。将需要延后处理的任务结构体序列化成字符串塞进 Redis 的列表，另一个线程从这个列表中轮询数据进行处理。</p>
<p>在版本3.2之前，Redis 列表list使用两种数据结构作为底层实现：</p>
<ul>
<li>压缩列表ziplist</li>
<li>双向链表linkedlist</li>
</ul>
<p>因为双向链表占用的内存比压缩列表要多， 所以当创建新的列表键时， 列表会优先考虑使用压缩列表， 并且在有需要的时候， 才从压缩列表实现转换到双向链表实现。</p>
<blockquote>
<p>创建新列表时 redis 默认使用 redis_encoding_ziplist 编码， 当以下任意一个条件被满足时， 列表会被转换成 redis_encoding_linkedlist 编码：</p>
<ul>
<li>试图往列表新添加一个字符串值，且这个字符串的长度超过 server.list_max_ziplist_value （默认值为 64 ）。</li>
<li>ziplist 包含的节点超过 server.list_max_ziplist_entries （默认值为 512 ）。</li>
</ul>
<p>注意：这两个条件是可以修改的，在 redis.conf 中：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>list-max-ziplist-value 64 
list-max-ziplist-entries 512 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="双向链表linkedlist" tabindex="-1"><a class="header-anchor" href="#双向链表linkedlist" aria-hidden="true">#</a> <strong>双向链表linkedlist</strong></h5>
<p>当链表entry数据超过512、或单个value 长度超过64，底层就会转化成linkedlist编码；
linkedlist是标准的双向链表，Node节点包含prev和next指针，可以进行双向遍历；
还保存了 head 和 tail 两个指针，因此，对链表的表头和表尾进行插入的复杂度都为 (1) —— 这是高效实现 LPUSH 、 RPOP、 RPOPLPUSH 等命令的关键。
linkedlist比较简单，我们重点来分析ziplist。</p>
<h5 id="压缩列表ziplist" tabindex="-1"><a class="header-anchor" href="#压缩列表ziplist" aria-hidden="true">#</a> 压缩列表ziplist</h5>
<p>压缩列表 ziplist 是为 Redis 节约内存而开发的。</p>
<p>Redis官方对于ziplist的定义是（出自ziplist.c的文件头部注释）：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/* The ziplist is a specially encoded dually linked list that is designed
 * to be very memory efficient. It stores both strings and integer values,
 * where integers are encoded as actual integers instead of a series of
 * characters. It allows push and pop operations on either side of the list
 * in O(1) time. However, because every operation requires a reallocation of
 * the memory used by the ziplist, the actual complexity is related to the
 * amount of memory used by the ziplist.
 *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ziplist 是由一系列特殊编码的内存块构成的列表(像内存连续的数组，但每个元素长度不同)， 一个 ziplist 可以包含多个节点（entry）。
ziplist 将表中每一项存放在前后连续的地址空间内，每一项因占用的空间不同，而采用变长编码。</p>
<p><strong>ziplist 是一个特殊的双向链表</strong>
特殊之处在于：没有维护双向指针:prev next；而是存储上一个 entry的长度和当前entry的长度，通过长度推算下一个元素在什么地方。
牺牲读取的性能，获得高效的存储空间，因为(简短字符串的情况)存储指针比存储entry长度 更费内存。这是典型的“时间换空间”。</p>
<h5 id="redis3-2-list的新实现quicklist" tabindex="-1"><a class="header-anchor" href="#redis3-2-list的新实现quicklist" aria-hidden="true">#</a> Redis3.2+ list的新实现quickList</h5>
<p>可以认为quickList，是ziplist和linkedlist二者的结合；quickList将二者的优点结合起来。</p>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h39t4naywkj20ok0gh0tz.jpg" alt="img" loading="lazy"></p>
<p>quickList就是一个标准的双向链表的配置，有head 有tail;
每一个节点是一个quicklistNode，包含prev和next指针。
每一个quicklistNode 包含 一个ziplist，*zp 压缩链表里存储键值。
所以quicklist是对ziplist进行一次封装，使用小块的ziplist来既保证了少使用内存，也保证了性能。</p>
</blockquote>
<h3 id="字典hash是如何实现的-rehash-了解吗" tabindex="-1"><a class="header-anchor" href="#字典hash是如何实现的-rehash-了解吗" aria-hidden="true">#</a> 字典Hash是如何实现的？Rehash 了解吗？</h3>
<p><strong>Redis</strong> 中的字典相当于 Java 中的 <strong>HashMap</strong>，内部实现也差不多类似，都是通过 <strong>“数组 + 链表”</strong> 的 <strong>链地址法</strong> 来解决部分哈希冲突，同时这样的结构也吸收了两种不同数据结构的优点。</p>
<p>字典结构内部包含 <strong>两个 hashtable</strong>，通常情况下只有一个 <code v-pre>hashtable</code> 有值，但是在字典扩容缩容时，需要分配新的 <code v-pre>hashtable</code>，然后进行 <strong>渐进式搬迁</strong> <em>(rehash)</em>，这时候两个 <code v-pre>hashtable</code> 分别存储旧的和新的 <code v-pre>hashtable</code>，待搬迁结束后，旧的将被删除，新的 <code v-pre>hashtable</code> 取而代之。</p>
<p><strong>扩缩容的条件</strong></p>
<p>正常情况下，当 hash 表中 <strong>元素的个数等于第一维数组（第一个hashtable）的长度时</strong>，就会开始扩容，扩容的新数组是 <strong>原数组大小的 2 倍</strong>。不过如果 Redis 正在做 <code v-pre>bgsave(持久化命令)</code>，为了减少内存过多分离，Redis 尽量不去扩容，但是如果 hash 表非常满了，<strong>达到了第一维数组长度的 5 倍了</strong>，这个时候就会 <strong>强制扩容</strong>。</p>
<p>当 hash 表因为元素逐渐被删除变得越来越稀疏时，Redis 会对 hash 表进行缩容来减少 hash 表的第一维数组空间占用。所用的条件是 <strong>元素个数低于数组长度的 10%</strong>，缩容不会考虑 Redis 是否在做 <code v-pre>bgsave</code></p>
<h3 id="说说-zset-吧" tabindex="-1"><a class="header-anchor" href="#说说-zset-吧" aria-hidden="true">#</a> 说说 Zset 吧</h3>
<p><strong>它类似于 Java 的 SortedSet 和 HashMap 的结合体</strong>，一方面它是一个 set，保证了内部 value 的唯一性，另一方面它可以给每个 value 赋予一个 score，代表这个 value 的排序权重。它的内部实现用的是一种叫做「跳跃列表」的数据结构。</p>
<p>Redis 正是通过 score 来为集合中的成员进行从小到大的排序。Zset 的成员是唯一的，但 score 却可以重复。</p>
<h3 id="跳跃表是如何实现的-原理" tabindex="-1"><a class="header-anchor" href="#跳跃表是如何实现的-原理" aria-hidden="true">#</a> 跳跃表是如何实现的？原理？</h3>
<p><img src="https://redisbook.readthedocs.io/en/latest/_images/skiplist.png" alt="" loading="lazy"></p>
<p>从图中可以看到， 跳跃表主要由以下部分构成：</p>
<ul>
<li>表头（head）：负责维护跳跃表的节点指针。</li>
<li>跳跃表节点：保存着元素值，以及多个层。</li>
<li>层：保存着指向其他元素的指针。高层的指针越过的元素数量大于等于低层的指针，为了提高查找的效率，程序总是从高层先开始访问，然后随着元素值范围的缩小，慢慢降低层次。</li>
<li>表尾：全部由 <code v-pre>NULL</code> 组成，表示跳跃表的末尾。</li>
</ul>
<h3 id="除了5种基本数据类型-还知道其他数据结构不" tabindex="-1"><a class="header-anchor" href="#除了5种基本数据类型-还知道其他数据结构不" aria-hidden="true">#</a> 除了5种基本数据类型，还知道其他数据结构不</h3>
<h4 id="bitmaps-位图" tabindex="-1"><a class="header-anchor" href="#bitmaps-位图" aria-hidden="true">#</a> Bitmaps（位图）</h4>
<p>位图不是实际的数据类型，而是在 String 类型上定义的一组面向位的操作。可以看作是 byte 数组。我们可以使用普通的 get/set 直接获取和设置整个位图的内容，也可以使用位图操作 getbit/setbit 等将 byte 数组看成「位数组」来处理。</p>
<p>一般用于：各种实时分析；存储与对象 ID 相关的布尔信息</p>
<h4 id="hyperloglog" tabindex="-1"><a class="header-anchor" href="#hyperloglog" aria-hidden="true">#</a> HyperLogLog</h4>
<p>HyperLogLog是一种概率数据结构，用于对唯一事物进行计数（从技术上讲，这是指估计集合的基数）</p>
<p><a href="https://www.wmyskxz.com/2020/03/02/reids-4-shen-qi-de-hyperloglog-jie-jue-tong-ji-wen-ti/" target="_blank" rel="noopener noreferrer">https://www.wmyskxz.com/2020/03/02/reids-4-shen-qi-de-hyperloglog-jie-jue-tong-ji-wen-ti/<ExternalLinkIcon/></a></p>
<h3 id="这些都会-那你能说说-redis-使用场景不-你们项目中是怎么用的" tabindex="-1"><a class="header-anchor" href="#这些都会-那你能说说-redis-使用场景不-你们项目中是怎么用的" aria-hidden="true">#</a> 这些都会，那你能说说 Redis 使用场景不，你们项目中是怎么用的</h3>
<p>在 Redis 中，常用的 5 种数据结构和应用场景如下：</p>
<ul>
<li>
<p><strong>String</strong>：缓存、计数器、分布式锁等。</p>
<ul>
<li>什么是计数器，如电商网站商品的浏览量、视频网站视频的播放数等。为了保证数据实时效，每次浏览都得+1，并发量高时如果每次都请求数据库操作无疑会对数据库提出挑战。Redis提供的incr命令来实现计数器功能，内存操作，性能非常好，非常适用于这些计数场景。</li>
<li>在很多互联网公司中都使用了分布式技术，分布式技术带来的技术挑战是对同一个资源的并发访问，如全局ID、减库存、秒杀等场景，并发量不大的场景可以使用数据库的悲观锁、乐观锁来实现，但在并发量高的场合中，利用数据库锁来控制资源的并发访问是不太理想的，大大影响了数据库的性能。可以利用Redis的setnx功能来编写分布式的锁，如果设置返回1说明获取锁成功，否则获取锁失败，实际应用中要考虑的细节要更多。</li>
</ul>
</li>
<li>
<p><strong>List</strong>：链表、队列、微博关注人时间轴列表等。</p>
<ul>
<li>Redis列表结构，LPUSH可以在列表头部插入一个内容ID作为关键字，LTRIM可用来限制列表的数量，这样列表永远为N个ID，无需查询最新的列表，直接根据ID去到对应的内容页即可。</li>
</ul>
</li>
<li>
<p><strong>Hash</strong>：用户信息、Hash 表等。</p>
</li>
<li>
<p><strong>Set</strong>：<strong>社交网络</strong></p>
<ul>
<li>点赞、踩、关注/被关注、共同好友等是社交网站的基本功能，社交网站的访问量通常来说比较大，而且传统的关系数据库类型不适合存储这种类型的数据，Redis提供的哈希、集合等数据结构能很方便的的实现这些功能。</li>
</ul>
</li>
<li>
<p><strong>Zset</strong>：访问量排行榜、点击量排行榜等</p>
</li>
</ul>
<p>还有一些，比如：</p>
<ul>
<li>
<p>取最新N个数据的操作</p>
</li>
<li>
<p>需要精确设定过期时间的应用</p>
</li>
<li>
<p>Uniq操作,获取某段时间所有数据排重值</p>
</li>
<li>
<p>实时系统,反垃圾系统</p>
</li>
<li>
<p>Pub/Sub构建实时消息系统</p>
</li>
<li>
<p>构建队列系统</p>
</li>
<li>
<p><strong>分布式会话</strong></p>
</li>
</ul>
<p>集群模式下，在应用不多的情况下一般使用容器自带的session复制功能就能满足，当应用增多相对复杂的系统中，一般都会搭建以Redis等内存数据库为中心的session服务，session不再由容器管理，而是由session服务及内存数据库管理。</p>
<hr>
<h2 id="三、redis持久化问题" tabindex="-1"><a class="header-anchor" href="#三、redis持久化问题" aria-hidden="true">#</a> 三、Redis持久化问题</h2>
<h3 id="你对-redis-的持久化机制了解吗-能讲一下吗" tabindex="-1"><a class="header-anchor" href="#你对-redis-的持久化机制了解吗-能讲一下吗" aria-hidden="true">#</a> 你对 Redis 的持久化机制了解吗？能讲一下吗？</h3>
<blockquote>
<p>或者不会这么直白的问，而是问 Redis 是如何实现数据不丢失的?</p>
</blockquote>
<p>Redis 的数据全部在内存里，如果突然宕机，数据就会全部丢失，因此必须有一种机制来保证 Redis 的数据不会因为故障而丢失，这种机制就是 Redis 的持久化机制，它会将内存中的数据库状态 <strong>保存到磁盘</strong> 中。</p>
<blockquote>
<p>回答思路：先说明 Redis 有几种持久化的方式，然后分析 AOF 和 RDB 的原理以及存在的问题，最后分析一下 Redis 4.0 版本之后的持久化机制。</p>
</blockquote>
<h3 id="解释一下持久化发生了什么" tabindex="-1"><a class="header-anchor" href="#解释一下持久化发生了什么" aria-hidden="true">#</a> 解释一下持久化发生了什么</h3>
<p>我们来稍微考虑一下 <strong>Redis</strong> 作为一个 <strong>“内存数据库”</strong> 要做的关于持久化的事情。通常来说，从客户端发起请求开始，到服务器真实地写入磁盘，需要发生如下几件事情：</p>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h399cx05ogj21rn0u0q67.jpg" alt="" loading="lazy"></p>
<p><strong>详细版</strong> 的文字描述大概就是下面这样：</p>
<ol>
<li>客户端向数据库 <strong>发送写命令</strong> <em>(数据在客户端的内存中)</em></li>
<li>数据库 <strong>接收</strong> 到客户端的 <strong>写请求</strong> <em>(数据在服务器的内存中)</em></li>
<li>数据库 <strong>调用系统 API</strong> 将数据写入磁盘 <em>(数据在内核缓冲区中)</em></li>
<li>操作系统将 <strong>写缓冲区</strong> 传输到 <strong>磁盘控制器</strong> <em>(数据在磁盘缓存中)</em></li>
<li>操作系统的磁盘控制器将数据 <strong>写入实际的物理媒介</strong> 中 <em>(数据在磁盘中)</em></li>
</ol>
<h3 id="redis-持久化的方式有哪写" tabindex="-1"><a class="header-anchor" href="#redis-持久化的方式有哪写" aria-hidden="true">#</a> Redis 持久化的方式有哪写</h3>
<p>Redis有两种持久化的方式：快照（RDB文件）和追加式文件（AOF文件)</p>
<blockquote>
<p>RDB：在不同的时间点将 redis 的数据生成的快照同步到磁盘等介质上，内存到硬盘的快照，定期更新。缺点:耗时，耗性能(fork+io 操作)，易丢失数据。</p>
<p>AOF：将redis所执行过的所有指令都记录下来，在下次redis重启时，只需要执行指令就可以了，写日志。缺点:体积大，恢复速度慢。</p>
</blockquote>
<h4 id="rdb-redis-database" tabindex="-1"><a class="header-anchor" href="#rdb-redis-database" aria-hidden="true">#</a> RDB（Redis DataBase）</h4>
<p><strong>在指定的时间间隔内将内存中的数据集快照写入磁盘</strong>，也就是行话讲的 Snapshot 快照，它恢复时是将快照文件直接读到内存里。</p>
<p>Redis会单独创建（fork）一个子进程来进行持久化，会先将数据写入到一个临时文件中，待持久化过程都结束了，再用这个临时文件替换上次持久化好的文件。整个过程中，主进程是不进行任何 IO 操作的，这就确保了极高的性能，如果需要进行大规模数据的恢复，且对于数据恢复的完整性不是非常敏感，那 RDB 方式要比 AOF 方式更加的高效。RDB的缺点是最后一次持久化后的数据可能丢失。</p>
<blockquote>
<p>What ? Redis 不是单进程的吗?</p>
</blockquote>
<p>Redis 使用操作系统的多进程 COW(Copy On Write) 机制来实现快照持久化， fork 是类Unix操作系统上<strong>创建进程</strong>的主要方法。COW(Copy On Write)是计算机编程中使用的一种优化策略。</p>
<p>fork 的作用是复制一个与当前进程一样的进程。新进程的所有数据（变量、环境变量、程序计数器等）数值都和原进程一致，但是是一个全新的进程，并作为原进程的子进程。 子进程读取数据，然后序列化写到磁盘中。</p>
<p>rdb 默认保存的是 <strong>dump.rdb</strong> 文件</p>
<p>你可以对 Redis 进行设置， 让它在“ N 秒内数据集至少有 M 个改动”这一条件被满足时， 自动保存一次数据集。</p>
<p>你也可以通过调用 <a href="http://redisdoc.com/server/save.html#save" target="_blank" rel="noopener noreferrer">SAVE<ExternalLinkIcon/></a> 或者 <a href="http://redisdoc.com/server/bgsave.html#bgsave" target="_blank" rel="noopener noreferrer">BGSAVE<ExternalLinkIcon/></a> ， 手动让 Redis 进行数据集保存操作。</p>
<p>比如说， 以下设置会让 Redis 在满足“ 60 秒内有至少有 1000 个键被改动”这一条件时， 自动保存一次数据集：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>save <span class="token number">60</span> <span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="rdb-做快照时会阻塞线程吗" tabindex="-1"><a class="header-anchor" href="#rdb-做快照时会阻塞线程吗" aria-hidden="true">#</a> RDB 做快照时会阻塞线程吗？</h3>
<p>因为 Redis 的单线程模型决定了它所有操作都要尽量避免阻塞主线程，所以对于 RDB 快照也不例外，这关系到是否会降低 Redis 的性能。</p>
<p>为了解决这个问题，Redis 提供了两个命令来生成 RDB 快照文件，分别是 save 和 bgsave。save 命令在主线程中执行，会导致阻塞。而 bgsave 命令则会创建一个子进程，用于写入 RDB 文件的操作，避免了对主线程的阻塞，这也是 Redis RDB 的默认配置。</p>
<h3 id="rdb-做快照的时候数据能修改吗" tabindex="-1"><a class="header-anchor" href="#rdb-做快照的时候数据能修改吗" aria-hidden="true">#</a> RDB 做快照的时候数据能修改吗？</h3>
<p>它利用了 bgsave 的子进程，具体操作如下：</p>
<p>如果主线程执行读操作，则主线程和 bgsave 子进程互相不影响；</p>
<p>如果主线程执行写操作，则被修改的数据会复制一份副本，然后 bgsave 子进程会把该副本数据写入 RDB 文件，在这个过程中，主线程仍然可以直接修改原来的数据。</p>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNly1gv8w2ru8pjj60my08njrv02.jpg" alt="" loading="lazy"></p>
<h4 id="aof-append-only-file" tabindex="-1"><a class="header-anchor" href="#aof-append-only-file" aria-hidden="true">#</a> AOF（Append Only File）</h4>
<p>以日志的形式来记录每个写操作，将 Redis 执行过的所有写指令记录下来(读操作不记录)，只许追加文件但不可以改写文件，redis 启动之初会读取该文件重新构建数据，也就是「重放」。换言之，redis 重启的话就根据日志文件的内容将写指令从前到后执行一次以完成数据的恢复工作。</p>
<p>AOF 默认保存的是 **appendonly.aof ** 文件</p>
<h3 id="aof-日志是如何实现的" tabindex="-1"><a class="header-anchor" href="#aof-日志是如何实现的" aria-hidden="true">#</a> AOF 日志是如何实现的？</h3>
<p>通常情况下，关系型数据库（如 MySQL）的日志都是“写前日志”（Write Ahead Log, WAL），也就是说，在实际写数据之前，先把修改的数据记到日志文件中，以便当出现故障时进行恢复，比如 MySQL 的 redo log（重做日志），记录的就是修改后的数据。</p>
<p>而 AOF 里记录的是 Redis 收到的每一条命令，这些命令是以文本形式保存的，不同的是，Redis 的 AOF 日志的记录顺序与传统关系型数据库正好相反，它是写后日志，“写后”是指 Redis 要先执行命令，把数据写入内存，然后再记录日志到文件。</p>
<p><img src="https://tva1.sinaimg.cn/large/008i3skNly1gv8w2zoad0j60cj063wem02.jpg" alt="" loading="lazy"></p>
<p>那么面试的考察点来了：Reids 为什么先执行命令，在把数据写入日志呢？为了方便你理解，我整理了关键的记忆点：</p>
<ul>
<li>
<p>因为 ，Redis 在写入日志之前，不对命令进行语法检查；</p>
</li>
<li>
<p>所以，只记录执行成功的命令，避免了出现记录错误命令的情况；</p>
</li>
<li>
<p>并且，在命令执行完之后再记录，不会阻塞当前的写操作。</p>
</li>
</ul>
<p>当然，这样做也会带来风险（这一点你也要在面试中给出解释）。</p>
<ul>
<li>
<p>数据可能会丢失： 如果 Redis 刚执行完命令，此时发生故障宕机，会导致这条命令存在丢失的风险。</p>
</li>
<li>
<p>可能阻塞其他操作： 虽然 AOF 是写后日志，避免阻塞当前命令的执行，但因为 AOF 日志也是在主线程中执行，所以当 Redis 把日志文件写入磁盘的时候，还是会阻塞后续的操作无法执行。</p>
</li>
</ul>
<h3 id="rdb-和-aof-各自有什么优缺点" tabindex="-1"><a class="header-anchor" href="#rdb-和-aof-各自有什么优缺点" aria-hidden="true">#</a> RDB 和 AOF 各自有什么优缺点？</h3>
<p><strong>RDB | 优点</strong></p>
<ol>
<li>只有一个文件 <code v-pre>dump.rdb</code>，<strong>方便持久化</strong>。</li>
<li><strong>容灾性好</strong>，一个文件可以保存到安全的磁盘。</li>
<li><strong>性能最大化</strong>，<code v-pre>fork</code> 子进程来完成写操作，让主进程继续处理命令，所以使 IO 最大化。使用单独子进程来进行持久化，主进程不会进行任何 IO 操作，保证了 Redis 的高性能</li>
<li>相对于数据集大时，比 AOF 的 <strong>启动效率</strong> 更高。</li>
</ol>
<p><strong>RDB | 缺点</strong></p>
<ol>
<li><strong>数据安全性低</strong>。RDB 是间隔一段时间进行持久化，如果持久化之间 Redis 发生故障，会发生数据丢失。所以这种方式更适合数据要求不严谨的时候；</li>
</ol>
<p><strong>AOF | 优点</strong></p>
<ol>
<li><strong>数据安全</strong>，aof 持久化可以配置 <code v-pre>appendfsync</code> 属性，有 <code v-pre>always</code>，每进行一次命令操作就记录到 aof 文件中一次。</li>
<li>通过 append 模式写文件，即使中途服务器宕机，可以通过 redis-check-aof 工具解决数据一致性问题。</li>
<li>AOF 机制的 rewrite 模式。AOF 文件没被 rewrite 之前（文件过大时会对命令 进行合并重写），可以删除其中的某些命令（比如误操作的 flushall）</li>
</ol>
<p><strong>AOF | 缺点</strong></p>
<ol>
<li>AOF 文件比 RDB <strong>文件大</strong>，且 <strong>恢复速度慢</strong>。</li>
<li><strong>数据集大</strong> 的时候，比 rdb <strong>启动效率低</strong>。</li>
</ol>
<h3 id="aof-如果文件越来愈大-怎么办" tabindex="-1"><a class="header-anchor" href="#aof-如果文件越来愈大-怎么办" aria-hidden="true">#</a> aof 如果文件越来愈大 怎么办？</h3>
<p><strong>rewrite（AOF 重写）</strong></p>
<ul>
<li>是什么：AOF采用文件追加方式，文件会越来越大为避免出现此种情况，新增了重写机制，当 AOF 文件的大小超过所设定的阈值时，Redis就会启动 AOF 文件的内容压缩，只保留可以恢复数据的最小指令集，可以使用命令<code v-pre>bgrewriteaof</code>，这个操作相当于对AOF文件“瘦身”。</li>
<li>重写原理：AOF 文件持续增长而过大时，会 fork 出一条新进程来将文件重写(也是先写临时文件最后再rename)，遍历新进程的内存中数据，每条记录有一条的 Set 语句。重写 aof 文件的操作，并没有读取旧的aof文件，而是将整个内存中的数据库内容用命令的方式重写了一个新的 aof 文件，这点和快照有点类似</li>
<li>触发机制：Redis 会记录上次重写时的 AOF 大小，默认配置是当 AOF 文件大小是上次 rewrite 后大小的一倍且文件大于64M 时触发</li>
</ul>
<h3 id="fork耗时问题定位" tabindex="-1"><a class="header-anchor" href="#fork耗时问题定位" aria-hidden="true">#</a> fork耗时问题定位</h3>
<p><strong>Fork操作</strong></p>
<p>当Redis做RDB或AOF重写时，一个必不可少的操作就是执行fork操作创建子进程，对于大多数操作系统来说fork是个重量级操作</p>
<p>虽然fork创建的子进程不需要拷贝父进程的物理内存空间，但是会复制父进程的空间内存页表。例如对于10GB的Redis进程，需要复制大约20MB的内存页表，因此fork 操作耗时跟进程总内存量息息相关，如果使用虚拟化技术，特别是Xen虚拟 机，fork操作会更耗时</p>
<ul>
<li>在做 RDB 或 AOF 重写时, fork 是必不可少的</li>
<li>对于大多数操作系统来说, fork 是个重量级错误</li>
<li>fork 会复制符进程的空间内存页表</li>
<li>如果使用虚拟化技术, 特别是 Xen 虚拟机, fork 操作会更耗时</li>
</ul>
<p><strong>fork 耗时问题定位</strong>:</p>
<ul>
<li>高流量的 Redis 实例 ops 可达5万以上</li>
<li>正常情况 fork 耗时应该是每 GB 消耗 20ms 左右</li>
<li>可以用 info stats 命令查看 latest_fork_usec 指标, 获取最近一次 fork 操作耗时, 单位微秒</li>
</ul>
<p><strong>如何改善 fork 操作的耗时</strong>:</p>
<ul>
<li>优先使用物理机或者高效支持 fork 操作的虚拟化技术, 避免使用 Xen</li>
<li>控制 Redis 实例最大可用内存, fork 耗时跟内存量成正比, 线上建议每个 Redis 实例内存控制在 10GB 以内</li>
<li>合理配置 Linux 内存分配策略, 避免物理内存不足导致 fork 失败, 具体细节见12.1节 “Linux 配置优化”</li>
<li>降低 fork 操作的频率, 如适度放宽 AOF 自动触发时机, 避免不必要的全量复制等</li>
</ul>
<h3 id="两种持久化方式如何选择" tabindex="-1"><a class="header-anchor" href="#两种持久化方式如何选择" aria-hidden="true">#</a> 两种持久化方式如何选择？</h3>
<ul>
<li>RDB 持久化方式能够在指定的时间间隔能对你的数据进行快照存储</li>
<li>AOF 持久化方式记录每次对服务器写的操作,当服务器重启的时候会重新执行这些命令来恢复原始的数据，AOF命令以 redis 协议追加保存每次写的操作到文件末尾。Redis还能对AOF文件进行后台重写（<strong>bgrewriteaof</strong>）,使得 AOF 文件的体积不至于过大</li>
<li>只做缓存：如果你只希望你的数据在服务器运行的时候存在,你也可以不使用任何持久化方式。</li>
<li>同时开启两种持久化方式
<ul>
<li>在这种情况下,当 redis 重启的时候会优先载入 AOF 文件来恢复原始的数据,因为在通常情况下 AOF 文件保存的数据集要比 RDB 文件保存的数据集要完整。</li>
<li>RDB 的数据不实时，同时使用两者时服务器重启也只会找 AOF 文件。那要不要只使用AOF 呢？建议不要，因为 RDB 更适合用于备份数据库(AOF 在不断变化不好备份)，快速重启，而且不会有 AOF 可能潜在的bug，留着作为一个万一的手段。</li>
</ul>
</li>
</ul>
<p>Redis4.0 之后有了混合持久化的功能，将 bgsave 的全量 和 aof 的增量做了融合处理，这样既保证了恢复的效率又兼顾了数据的安全性。bgsave 的 原理，fork 和 cow, fork 是指 redis 通过创建子进程来进行 bgsave 操作，cow 指的是 copy on write，子进程创建后，父子进程共享数据段，父进程继续提供读写服务，写脏的页面数据 会逐渐和子进程分离开来。</p>
<hr>
<h2 id="四、redis事务问题" tabindex="-1"><a class="header-anchor" href="#四、redis事务问题" aria-hidden="true">#</a> 四、Redis事务问题</h2>
<h3 id="redis事务的概念" tabindex="-1"><a class="header-anchor" href="#redis事务的概念" aria-hidden="true">#</a> Redis事务的概念？</h3>
<p>Redis 事务的本质是通过MULTI、EXEC、WATCH等一组命令的集合。事务支持一次执行多个命令，一个事务中所有命令都会被序列化。在事务执行过程，会按照顺序串行化执行队列中的命令，其他客户端提交的命令请求不会插入到事务执行命令序列中。</p>
<p>总结说：redis事务就是一次性、顺序性、排他性的执行一个队列中的一系列命令。</p>
<p><a href="http://redisdoc.com/transaction/multi.html#multi" target="_blank" rel="noopener noreferrer">MULTI<ExternalLinkIcon/></a> 命令用于开启一个事务，它总是返回 OK 。</p>
<p><a href="http://redisdoc.com/transaction/multi.html#multi" target="_blank" rel="noopener noreferrer">MULTI<ExternalLinkIcon/></a> 执行之后， 客户端可以继续向服务器发送任意多条命令， 这些命令不会立即被执行， 而是被放到一个队列中， 当 <a href="http://redisdoc.com/transaction/exec.html#exec" target="_blank" rel="noopener noreferrer">EXEC<ExternalLinkIcon/></a> 命令被调用时， 所有队列中的命令才会被执行。</p>
<p>另一方面， 通过调用 <a href="http://redisdoc.com/transaction/discard.html#discard" target="_blank" rel="noopener noreferrer">DISCARD<ExternalLinkIcon/></a> ， 客户端可以清空事务队列， 并放弃执行事务。</p>
<p><a href="http://redisdoc.com/transaction/watch.html#watch" target="_blank" rel="noopener noreferrer">WATCH<ExternalLinkIcon/></a> 使得 <a href="http://redisdoc.com/transaction/exec.html#exec" target="_blank" rel="noopener noreferrer">EXEC<ExternalLinkIcon/></a> 命令需要有条件地执行： 事务只能在所有被监视键都没有被修改的前提下执行， 如果这个前提不能满足的话，事务就不会被执行。</p>
<h3 id="redis事务的三个阶段、三特性" tabindex="-1"><a class="header-anchor" href="#redis事务的三个阶段、三特性" aria-hidden="true">#</a> Redis事务的三个阶段、三特性</h3>
<p><strong>三阶段</strong></p>
<ol>
<li>
<p>开启：以MULTI开始一个事务</p>
</li>
<li>
<p>入队：将多个命令入队到事务中，接到这些命令并不会立即执行，而是放到等待执行的事务队列里面</p>
</li>
<li>
<p>执行：由EXEC命令触发事务</p>
</li>
</ol>
<p><strong>三特性</strong></p>
<ol>
<li>
<p>单独的隔离操作：事务中的所有命令都会序列化、按顺序地执行。事务在执行的过程中，不会被其他客户端发送来的命令请求所打断。</p>
</li>
<li>
<p><strong>没有隔离级别的概念</strong>：队列中的命令没有提交之前都不会实际的被执行，因为事务提交前任何指令都不会被实际执行，也就不存在”事务内的查询要看到事务里的更新，在事务外查询不能看到”这个让人万分头痛的问题</p>
</li>
<li>
<p>不保证原子性：redis同一个事务中如果有一条命令执行失败，其后的命令仍然会被执行，没有回滚</p>
</li>
</ol>
<h3 id="redis事务支持隔离性吗" tabindex="-1"><a class="header-anchor" href="#redis事务支持隔离性吗" aria-hidden="true">#</a> Redis事务支持隔离性吗？</h3>
<p>Redis 是单进程程序，并且它保证在执行事务时，不会对事务进行中断，事务可以运行直到执行完所有事务队列中的命令为止。因此，<strong>Redis 的事务是总是带有隔离性的</strong>。</p>
<h3 id="redis事务保证原子性吗-支持回滚吗" tabindex="-1"><a class="header-anchor" href="#redis事务保证原子性吗-支持回滚吗" aria-hidden="true">#</a> Redis事务保证原子性吗，支持回滚吗？</h3>
<p>Redis中，单条命令是原子性执行的，但<strong>事务不保证原子性，且没有回滚</strong>。事务中任意命令执行失败，其余的命令仍会被执行。</p>
<ol>
<li><strong>如果在一个事务中的命令出现错误，那么所有的命令都不会执行</strong>；</li>
<li><strong>如果在一个事务中出现运行错误，那么正确的命令会被执行</strong>。</li>
</ol>
<hr>
<h2 id="五、redis-集群问题" tabindex="-1"><a class="header-anchor" href="#五、redis-集群问题" aria-hidden="true">#</a> 五、Redis 集群问题</h2>
<blockquote>
<p>redis单节点存在单点故障问题，为了解决单点问题，一般都需要对redis配置从节点，然后使用哨兵来监听主节点的存活状态，如果主节点挂掉，从节点能继续提供缓存功能</p>
</blockquote>
<h3 id="主从同步了解吗" tabindex="-1"><a class="header-anchor" href="#主从同步了解吗" aria-hidden="true">#</a> 主从同步了解吗？</h3>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h39958n10aj225s0oggnk.jpg" alt="img" loading="lazy"></p>
<p><strong>主从复制</strong>，是指将一台 Redis 服务器的数据，复制到其他的 Redis 服务器。前者称为 <strong>主节点(master)</strong>，后者称为 <strong>从节点(slave)</strong>。且数据的复制是 <strong>单向</strong> 的，只能由主节点到从节点。Redis 主从复制支持 <strong>主从同步</strong> 和 <strong>从从同步</strong> 两种，后者是 Redis 后续版本新增的功能，以减轻主节点的同步负担。</p>
<h4 id="主从复制主要的作用" tabindex="-1"><a class="header-anchor" href="#主从复制主要的作用" aria-hidden="true">#</a> 主从复制主要的作用</h4>
<ul>
<li><strong>数据冗余：</strong> 主从复制实现了数据的热备份，是持久化之外的一种数据冗余方式。</li>
<li><strong>故障恢复：</strong> 当主节点出现问题时，可以由从节点提供服务，实现快速的故障恢复 <em>(实际上是一种服务的冗余)</em>。</li>
<li><strong>负载均衡：</strong> 在主从复制的基础上，配合读写分离，可以由主节点提供写服务，由从节点提供读服务 <em>（即写 Redis 数据时应用连接主节点，读 Redis 数据时应用连接从节点）</em>，分担服务器负载。尤其是在写少读多的场景下，通过多个从节点分担读负载，可以大大提高 Redis 服务器的并发量。</li>
<li><strong>高可用基石：</strong> 除了上述作用以外，主从复制还是哨兵和集群能够实施的 <strong>基础</strong>，因此说主从复制是 Redis 高可用的基础。</li>
</ul>
<h4 id="实现原理" tabindex="-1"><a class="header-anchor" href="#实现原理" aria-hidden="true">#</a> 实现原理</h4>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3995cjdrjj21o00u0td4.jpg" alt="" loading="lazy"></p>
<p>为了节省篇幅，我把主要的步骤都 <strong>浓缩</strong> 在了上图中，其实也可以 <strong>简化成三个阶段：准备阶段-数据同步阶段-命令传播阶段</strong>。</p>
<blockquote>
<p>redis2.8 之前使用<code v-pre>sync[runId][offset]</code>同步命令，redis2.8 之后使用<code v-pre>psync[runId][offset]</code>命令。两者不同在于，sync 命令仅支持全量复制过程，psync 支持全量和部分复制</p>
</blockquote>
<p>主从复制实现：主节点将自己内存中的数据做一份快照，将快照发给从节点，从节点将数据恢复到内存中。之后再每次增加新数据的时候，主节点以类似于 mysql 的二进制日志方式将语句发送给从节点，从节点拿到主节点发送过来的语句进行重放。</p>
<h3 id="那主从复制会存在哪些问题呢" tabindex="-1"><a class="header-anchor" href="#那主从复制会存在哪些问题呢" aria-hidden="true">#</a> 那主从复制会存在哪些问题呢？</h3>
<ol>
<li>一旦主节点宕机，从节点晋升为主节点，同时需要修改应用方的主节点地址，还需要命令所有从节点去复制新的主节点，整个过程需要人工干预</li>
<li>主节点的写能力受到单机的限制</li>
<li>主节点的存储能力受到单机的限制</li>
<li>原生复制的弊端在早期的版本中也会比较突出，比如：redis 复制中断后，从节点会发起 psync。此时如果同步不成功，则会进行全量同步，主库执行全量备份的同时，可能会造成毫秒或秒级的卡顿</li>
</ol>
<p>那比较主流的解决方案是什么呢？哨兵</p>
<h3 id="什么是哨兵" tabindex="-1"><a class="header-anchor" href="#什么是哨兵" aria-hidden="true">#</a> 什么是哨兵</h3>
<p><img src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TzlTcnXg26t1Dia266foajMic89F6770xHiaYPJN48zJR2LB8A6aP3VfIgC0vVxibVlYicy2gwiaqXdSrPw/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" loading="lazy"></p>
<p><em>上图</em> 展示了一个典型的哨兵架构图，它由两部分组成，哨兵节点和数据节点：</p>
<ul>
<li><strong>哨兵节点：</strong> 哨兵系统由一个或多个哨兵节点组成，<strong>哨兵节点是特殊的 Redis 节点，不存储数据</strong>；</li>
<li><strong>数据节点：</strong> 主节点和从节点都是数据节点；</li>
</ul>
<p><strong>哨兵的介绍</strong></p>
<p>sentinel，中文名是哨兵。哨兵是 redis 集群机构中非常重要的一个组件，主要有以下功能：</p>
<ol>
<li>集群监控：负责监控 redis master 和 slave 进程是否正常工作。</li>
<li>消息通知：如果某个 redis 实例有故障，那么哨兵负责发送消息作为报警通知给管理员。</li>
<li>故障转移：如果 master node 挂掉了，会自动转移到 slave node 上。</li>
<li>配置中心：如果故障转移发生了，通知 client 客户端新的 master 地址。</li>
</ol>
<p>哨兵用于实现 redis 集群的高可用，本身也是分布式的，作为一个哨兵集群去运行，互相协同工作。</p>
<p><strong>哨兵的核心知识</strong></p>
<ol>
<li>哨兵至少需要 3 个实例，来保证自己的健壮性。</li>
<li>哨兵 + redis 主从的部署架构，是不保证数据零丢失的，只能保证 redis 集群的高可用性。</li>
<li>对于哨兵 + redis 主从这种复杂的部署架构，尽量在测试环境和生产环境，都进行充足的测试和演练。</li>
</ol>
<h3 id="那你能说下哨兵的工作原理吗" tabindex="-1"><a class="header-anchor" href="#那你能说下哨兵的工作原理吗" aria-hidden="true">#</a> 那你能说下哨兵的工作原理吗？</h3>
<p><img src="https://mmbiz.qpic.cn/mmbiz_png/iaIdQfEric9TzlTcnXg26t1Dia266foajMicV4uRLib3FmS9KibcSMycB36MwicA3GTygLnQTl3VkAGb8mPE47pLzcz0g/640?wx_fmt=png&amp;tp=webp&amp;wxfrom=5&amp;wx_lazy=1&amp;wx_co=1" alt="" loading="lazy"></p>
<ol>
<li>每个 Sentinel 节点都需要定期执行以下任务：每个 Sentinel 以每秒一次的频率，向它所知的主服务器、从服务器以及其他的 Sentinel 实例发送一个 PING 命令。</li>
<li>如果一个实例距离最后一次有效回复 PING 命令的时间超过<code v-pre>down-after-milliseconds</code>所指定的值，那么这个实例会被 Sentinel 标记为主观下线</li>
<li>如果一个主服务器被标记为主观下线，那么正在监视这个服务器的所有 Sentinel 节点，要以每秒一次的频率确认主服务器的确进入了主观下线状态</li>
<li>如果一个主服务器被标记为主观下线，并且有足够数量的 Sentinel（至少要达到配置文件指定的数量）在指定的时间范围内同意这一判断，那么这个主服务器被标记为客观下线</li>
<li>一般情况下，每个 Sentinel 会以每 10 秒一次的频率向它已知的所有主服务器和从服务器发送 INFO 命令，当一个主服务器被标记为客观下线时，Sentinel 向下线主服务器的所有从服务器发送 INFO 命令的频率，会从 10 秒一次改为每秒一次</li>
<li>Sentinel 和其他 Sentinel 协商客观下线的主节点的状态，如果处于 SDOWN 状态，则投票自动选出新的主节点，将剩余从节点指向新的主节点进行数据复制</li>
<li>当没有足够数量的 Sentinel 同意主服务器下线时，主服务器的客观下线状态就会被移除。当主服务器重新向 Sentinel 的 PING 命令返回有效回复时，主服务器的主观下线状态就会被移除</li>
</ol>
<h3 id="新的主服务器是怎样被挑选出来的" tabindex="-1"><a class="header-anchor" href="#新的主服务器是怎样被挑选出来的" aria-hidden="true">#</a> 新的主服务器是怎样被挑选出来的？</h3>
<p><strong>故障转移操作的第一步</strong> 要做的就是在已下线主服务器属下的所有从服务器中，挑选出一个状态良好、数据完整的从服务器，然后向这个从服务器发送 <code v-pre>slaveof no one</code> 命令，将这个从服务器转换为主服务器。但是这个从服务器是怎么样被挑选出来的呢？</p>
<p>简单来说 Sentinel 使用以下规则来选择新的主服务器：</p>
<ol>
<li>在失效主服务器属下的从服务器当中， 那些被标记为主观下线、已断线、或者最后一次回复 PING 命令的时间大于五秒钟的从服务器都会被 <strong>淘汰</strong>。</li>
<li>在失效主服务器属下的从服务器当中， 那些与失效主服务器连接断开的时长超过 down-after 选项指定的时长十倍的从服务器都会被 <strong>淘汰</strong>。</li>
<li>在 <strong>经历了以上两轮淘汰之后</strong> 剩下来的从服务器中， 我们选出 <strong>复制偏移量（replication offset）最大</strong> 的那个 <strong>从服务器</strong> 作为新的主服务器；如果复制偏移量不可用，或者从服务器的复制偏移量相同，那么 <strong>带有最小运行 ID</strong> 的那个从服务器成为新的主服务器。</li>
</ol>
<p>Redis Sentinal 着眼于高可用，在 master 宕机时会自动将 slave 提升为 master，继续提供服务。</p>
<p>Redis Cluster 着眼于扩展性，在单个 redis 内存不足时，使用 Cluster 进行分片存储。</p>
<h3 id="redis-集群使用过吗-原理" tabindex="-1"><a class="header-anchor" href="#redis-集群使用过吗-原理" aria-hidden="true">#</a> Redis 集群使用过吗？原理？</h3>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h39986k3zcj21y00u0ju6.jpg" alt="" loading="lazy"></p>
<p><em>上图</em> 展示了 <strong>Redis Cluster</strong> 典型的架构图，集群中的每一个 Redis 节点都 <strong>互相两两相连</strong>，客户端任意 <strong>直连</strong> 到集群中的 <strong>任意一台</strong>，就可以对其他 Redis 节点进行 <strong>读写</strong> 的操作。</p>
<h4 id="基本原理" tabindex="-1"><a class="header-anchor" href="#基本原理" aria-hidden="true">#</a> 基本原理</h4>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3998a82pyj21y00u0tan.jpg" alt="img" loading="lazy"></p>
<p>Redis 集群中内置了 <code v-pre>16384</code> 个哈希槽。当客户端连接到 Redis 集群之后，会同时得到一份关于这个 <strong>集群的配置信息</strong>，当客户端具体对某一个 <code v-pre>key</code> 值进行操作时，会计算出它的一个 Hash 值，然后把结果对 <code v-pre>16384</code> <strong>求余数</strong>，这样每个 <code v-pre>key</code> 都会对应一个编号在 <code v-pre>0-16383</code> 之间的哈希槽，Redis 会根据节点数量 <strong>大致均等</strong> 的将哈希槽映射到不同的节点。</p>
<p>再结合集群的配置信息就能够知道这个 <code v-pre>key</code> 值应该存储在哪一个具体的 Redis 节点中，如果不属于自己管，那么就会使用一个特殊的 <code v-pre>MOVED</code> 命令来进行一个跳转，告诉客户端去连接这个节点以获取数据：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>GET x
-MOVED <span class="token number">3999</span> <span class="token number">127.0</span>.0.1:6381
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>MOVED</code> 指令第一个参数 <code v-pre>3999</code> 是 <code v-pre>key</code> 对应的槽位编号，后面是目标节点地址，<code v-pre>MOVED</code> 命令前面有一个减号，表示这是一个错误的消息。客户端在收到 <code v-pre>MOVED</code> 指令后，就立即纠正本地的 <strong>槽位映射表</strong>，那么下一次再访问 <code v-pre>key</code> 时就能够到正确的地方去获取了。</p>
<blockquote>
<p>redis-cluster 分片原理：Cluster 中有一个 16384 长度的槽(虚拟槽)，编号分别为 0-16383。 每个 Master 节点都会负责一部分的槽，当有某个 key 被映射到某个 Master 负责的槽，那么这个 Master 负责为这个 key 提供服务，至于哪个 Master 节点负责哪个槽，可以由用户指定，也可以在初始化的时候自动生成，只有 Master 才拥有槽的所有权。Master 节点维护着一个 16384/8 字节的位序列，Master 节点用 bit 来标识对于某个槽自己是否拥有。比如对于编号为 1 的槽，Master 只要判断序列的第二位(索引从 0 开始)是不是为 1 即可。 这种结构很容易添加或者删除节点。比如如果我想新添加个节点 D, 我需要从节点 A、B、 C 中的部分槽到 D 上。</p>
</blockquote>
<h4 id="集群的主要作用" tabindex="-1"><a class="header-anchor" href="#集群的主要作用" aria-hidden="true">#</a> 集群的主要作用</h4>
<ol>
<li><strong>数据分区：</strong> 数据分区 <em>(或称数据分片)</em> 是集群最核心的功能。集群将数据分散到多个节点，<strong>一方面</strong> 突破了 Redis 单机内存大小的限制，<strong>存储容量大大增加</strong>；<strong>另一方面</strong> 每个主节点都可以对外提供读服务和写服务，<strong>大大提高了集群的响应能力</strong>。Redis 单机内存大小受限问题，在介绍持久化和主从复制时都有提及，例如，如果单机内存太大，<code v-pre>bgsave</code> 和 <code v-pre>bgrewriteaof</code> 的 <code v-pre>fork</code> 操作可能导致主进程阻塞，主从环境下主机切换时可能导致从节点长时间无法提供服务，全量复制阶段主节点的复制缓冲区可能溢出……</li>
<li><strong>高可用：</strong> 集群支持主从复制和主节点的 <strong>自动故障转移</strong> <em>（与哨兵类似）</em>，当任一节点发生故障时，集群仍然可以对外提供服务。</li>
</ol>
<h3 id="集群中数据如何分区" tabindex="-1"><a class="header-anchor" href="#集群中数据如何分区" aria-hidden="true">#</a> 集群中数据如何分区？</h3>
<p>Redis 采用方案三。</p>
<h4 id="方案一-哈希值-节点数" tabindex="-1"><a class="header-anchor" href="#方案一-哈希值-节点数" aria-hidden="true">#</a> 方案一：哈希值 % 节点数</h4>
<p>哈希取余分区思路非常简单：计算 <code v-pre>key</code> 的 hash 值，然后对节点数量进行取余，从而决定数据映射到哪个节点上。</p>
<p>不过该方案最大的问题是，<strong>当新增或删减节点时</strong>，节点数量发生变化，系统中所有的数据都需要 <strong>重新计算映射关系</strong>，引发大规模数据迁移。</p>
<h4 id="方案二-一致性哈希分区" tabindex="-1"><a class="header-anchor" href="#方案二-一致性哈希分区" aria-hidden="true">#</a> 方案二：一致性哈希分区</h4>
<p>一致性哈希算法将 <strong>整个哈希值空间</strong> 组织成一个虚拟的圆环，范围是 <em>[0 - 2^32 - 1]</em>，对于每一个数据，根据 <code v-pre>key</code> 计算 hash 值，确数据在环上的位置，然后从此位置沿顺时针行走，找到的第一台服务器就是其应该映射到的服务器：</p>
<p><img src="https://cdn.jsdelivr.net/gh/wmyskxz/img/img/妈妈再也不担心我面试被Redis问得脸都绿了/7896890-40e8a2c096c8da92.png" alt="" loading="lazy"></p>
<p>与哈希取余分区相比，一致性哈希分区将 <strong>增减节点的影响限制在相邻节点</strong>。以上图为例，如果在 <code v-pre>node1</code> 和 <code v-pre>node2</code> 之间增加 <code v-pre>node5</code>，则只有 <code v-pre>node2</code> 中的一部分数据会迁移到 <code v-pre>node5</code>；如果去掉 <code v-pre>node2</code>，则原 <code v-pre>node2</code> 中的数据只会迁移到 <code v-pre>node4</code> 中，只有 <code v-pre>node4</code> 会受影响。</p>
<p>一致性哈希分区的主要问题在于，当 <strong>节点数量较少</strong> 时，增加或删减节点，<strong>对单个节点的影响可能很大</strong>，造成数据的严重不平衡。还是以上图为例，如果去掉 <code v-pre>node2</code>，<code v-pre>node4</code> 中的数据由总数据的 <code v-pre>1/4</code> 左右变为 <code v-pre>1/2</code> 左右，与其他节点相比负载过高。</p>
<h4 id="方案三-带有虚拟节点的一致性哈希分区" tabindex="-1"><a class="header-anchor" href="#方案三-带有虚拟节点的一致性哈希分区" aria-hidden="true">#</a> 方案三：带有虚拟节点的一致性哈希分区</h4>
<p>该方案在 <strong>一致性哈希分区的基础上</strong>，引入了 <strong>虚拟节点</strong> 的概念。Redis 集群使用的便是该方案，其中的虚拟节点称为 <strong>槽（slot）</strong>。槽是介于数据和实际节点之间的虚拟概念，每个实际节点包含一定数量的槽，每个槽包含哈希值在一定范围内的数据。</p>
<p>在使用了槽的一致性哈希分区中，<strong>槽是数据管理和迁移的基本单位</strong>。槽 <strong>解耦</strong> 了 <strong>数据和实际节点</strong> 之间的关系，增加或删除节点对系统的影响很小。仍以上图为例，系统中有 <code v-pre>4</code> 个实际节点，假设为其分配 <code v-pre>16</code> 个槽(0-15)；</p>
<ul>
<li>槽 0-3 位于 node1；4-7 位于 node2；以此类推….</li>
</ul>
<p>如果此时删除 <code v-pre>node2</code>，只需要将槽 4-7 重新分配即可，例如槽 4-5 分配给 <code v-pre>node1</code>，槽 6 分配给 <code v-pre>node3</code>，槽 7 分配给 <code v-pre>node4</code>；可以看出删除 <code v-pre>node2</code> 后，数据在其他节点的分布仍然较为均衡。</p>
<h3 id="节点之间的通信机制了解吗" tabindex="-1"><a class="header-anchor" href="#节点之间的通信机制了解吗" aria-hidden="true">#</a> 节点之间的通信机制了解吗？</h3>
<p>集群的建立离不开节点之间的通信，假如我们启动六个集群节点之后通过 <code v-pre>redis-cli</code> 命令帮助我们搭建起来了集群，实际上背后每个集群之间的两两连接是通过了 <code v-pre>CLUSTER MEET  </code> 命令发送 <code v-pre>MEET</code> 消息完成的，下面我们展开详细说说。</p>
<h4 id="两个端口" tabindex="-1"><a class="header-anchor" href="#两个端口" aria-hidden="true">#</a> 两个端口</h4>
<p>在 <strong>哨兵系统</strong> 中，节点分为 <strong>数据节点</strong> 和 <strong>哨兵节点</strong>：前者存储数据，后者实现额外的控制功能。在 <strong>集群</strong> 中，没有数据节点与非数据节点之分：<strong>所有的节点都存储数据，也都参与集群状态的维护</strong>。为此，集群中的每个节点，都提供了两个 TCP 端口：</p>
<ul>
<li><strong>普通端口：</strong> 即我们在前面指定的端口 <em>(7000等)</em>。普通端口主要用于为客户端提供服务 <em>（与单机节点类似）</em>；但在节点间数据迁移时也会使用。</li>
<li><strong>集群端口：</strong> 端口号是普通端口 + 10000 <em>（10000是固定值，无法改变）</em>，如 <code v-pre>7000</code> 节点的集群端口为 <code v-pre>17000</code>。<strong>集群端口只用于节点之间的通信</strong>，如搭建集群、增减节点、故障转移等操作时节点间的通信；不要使用客户端连接集群接口。为了保证集群可以正常工作，在配置防火墙时，要同时开启普通端口和集群端口。</li>
</ul>
<h4 id="gossip-协议" tabindex="-1"><a class="header-anchor" href="#gossip-协议" aria-hidden="true">#</a> Gossip 协议</h4>
<p>节点间通信，按照通信协议可以分为几种类型：单对单、广播、Gossip 协议等。重点是广播和 Gossip 的对比。</p>
<ul>
<li>广播是指向集群内所有节点发送消息。<strong>优点</strong> 是集群的收敛速度快(集群收敛是指集群内所有节点获得的集群信息是一致的)，<strong>缺点</strong> 是每条消息都要发送给所有节点，CPU、带宽等消耗较大。</li>
<li>Gossip 协议的特点是：在节点数量有限的网络中，<strong>每个节点都 “随机” 的与部分节点通信</strong> （并不是真正的随机，而是根据特定的规则选择通信的节点），经过一番杂乱无章的通信，每个节点的状态很快会达到一致。Gossip 协议的 <strong>优点</strong>有负载 (比广播) 低、去中心化、容错性高 <em>(因为通信有冗余)</em> 等；<strong>缺点</strong> 主要是集群的收敛速度慢。</li>
</ul>
<h4 id="消息类型" tabindex="-1"><a class="header-anchor" href="#消息类型" aria-hidden="true">#</a> 消息类型</h4>
<p>集群中的节点采用 <strong>固定频率（每秒10次）</strong> 的 <strong>定时任务</strong> 进行通信相关的工作：判断是否需要发送消息及消息类型、确定接收节点、发送消息等。如果集群状态发生了变化，如增减节点、槽状态变更，通过节点间的通信，所有节点会很快得知整个集群的状态，使集群收敛。</p>
<p>节点间发送的消息主要分为 <code v-pre>5</code> 种：<code v-pre>meet 消息</code>、<code v-pre>ping 消息</code>、<code v-pre>pong 消息</code>、<code v-pre>fail 消息</code>、<code v-pre>publish 消息</code>。不同的消息类型，通信协议、发送的频率和时机、接收节点的选择等是不同的：</p>
<ul>
<li><strong>MEET 消息：</strong> 在节点握手阶段，当节点收到客户端的 <code v-pre>CLUSTER MEET</code> 命令时，会向新加入的节点发送 <code v-pre>MEET</code> 消息，请求新节点加入到当前集群；新节点收到 MEET 消息后会回复一个 <code v-pre>PONG</code> 消息。</li>
<li><strong>PING 消息：</strong> 集群里每个节点每秒钟会选择部分节点发送 <code v-pre>PING</code> 消息，接收者收到消息后会回复一个 <code v-pre>PONG</code> 消息。<strong>PING 消息的内容是自身节点和部分其他节点的状态信息</strong>，作用是彼此交换信息，以及检测节点是否在线。<code v-pre>PING</code> 消息使用 Gossip 协议发送，接收节点的选择兼顾了收敛速度和带宽成本，<strong>具体规则如下</strong>：(1)随机找 5 个节点，在其中选择最久没有通信的 1 个节点；(2)扫描节点列表，选择最近一次收到 <code v-pre>PONG</code> 消息时间大于 <code v-pre>cluster_node_timeout / 2</code> 的所有节点，防止这些节点长时间未更新。</li>
<li><strong>PONG消息：</strong> <code v-pre>PONG</code> 消息封装了自身状态数据。可以分为两种：<strong>第一种</strong> 是在接到 <code v-pre>MEET/PING</code> 消息后回复的 <code v-pre>PONG</code> 消息；<strong>第二种</strong> 是指节点向集群广播 <code v-pre>PONG</code> 消息，这样其他节点可以获知该节点的最新信息，例如故障恢复后新的主节点会广播 <code v-pre>PONG</code> 消息。</li>
<li><strong>FAIL 消息：</strong> 当一个主节点判断另一个主节点进入 <code v-pre>FAIL</code> 状态时，会向集群广播这一 <code v-pre>FAIL</code> 消息；接收节点会将这一 <code v-pre>FAIL</code> 消息保存起来，便于后续的判断。</li>
<li><strong>PUBLISH 消息：</strong> 节点收到 <code v-pre>PUBLISH</code> 命令后，会先执行该命令，然后向集群广播这一消息，接收节点也会执行该 <code v-pre>PUBLISH</code> 命令。</li>
</ul>
<h3 id="集群数据如何存储的有了解吗" tabindex="-1"><a class="header-anchor" href="#集群数据如何存储的有了解吗" aria-hidden="true">#</a> 集群数据如何存储的有了解吗？</h3>
<p>节点需要专门的数据结构来存储集群的状态。所谓集群的状态，是一个比较大的概念，包括：集群是否处于上线状态、集群中有哪些节点、节点是否可达、节点的主从状态、槽的分布……</p>
<p>节点为了存储集群状态而提供的数据结构中，最关键的是 <code v-pre>clusterNode</code> 和 <code v-pre>clusterState</code> 结构：前者记录了一个节点的状态，后者记录了集群作为一个整体的状态。</p>
<h4 id="clusternode-结构" tabindex="-1"><a class="header-anchor" href="#clusternode-结构" aria-hidden="true">#</a> clusterNode 结构</h4>
<p><code v-pre>clusterNode</code> 结构保存了 <strong>一个节点的当前状态</strong>，包括创建时间、节点 id、ip 和端口号等。每个节点都会用一个 <code v-pre>clusterNode</code> 结构记录自己的状态，并为集群内所有其他节点都创建一个 <code v-pre>clusterNode</code> 结构来记录节点状态。</p>
<p>下面列举了 <code v-pre>clusterNode</code> 的部分字段，并说明了字段的含义和作用：</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">clusterNode</span> <span class="token punctuation">{</span>
    <span class="token comment">//节点创建时间</span>
    <span class="token class-name">mstime_t</span> ctime<span class="token punctuation">;</span>
    <span class="token comment">//节点id</span>
    <span class="token keyword">char</span> name<span class="token punctuation">[</span>REDIS_CLUSTER_NAMELEN<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">//节点的ip和端口号</span>
    <span class="token keyword">char</span> ip<span class="token punctuation">[</span>REDIS_IP_STR_LEN<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> port<span class="token punctuation">;</span>
    <span class="token comment">//节点标识：整型，每个bit都代表了不同状态，如节点的主从状态、是否在线、是否在握手等</span>
    <span class="token keyword">int</span> flags<span class="token punctuation">;</span>
    <span class="token comment">//配置纪元：故障转移时起作用，类似于哨兵的配置纪元</span>
    <span class="token class-name">uint64_t</span> configEpoch<span class="token punctuation">;</span>
    <span class="token comment">//槽在该节点中的分布：占用16384/8个字节，16384个比特；每个比特对应一个槽：比特值为1，则该比特对应的槽在节点中；比特值为0，则该比特对应的槽不在节点中</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">char</span> slots<span class="token punctuation">[</span><span class="token number">16384</span><span class="token operator">/</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token comment">//节点中槽的数量</span>
    <span class="token keyword">int</span> numslots<span class="token punctuation">;</span>
    …………
<span class="token punctuation">}</span> clusterNode<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了上述字段，<code v-pre>clusterNode</code> 还包含节点连接、主从复制、故障发现和转移需要的信息等。</p>
<h4 id="clusterstate-结构" tabindex="-1"><a class="header-anchor" href="#clusterstate-结构" aria-hidden="true">#</a> clusterState 结构</h4>
<p><code v-pre>clusterState</code> 结构保存了在当前节点视角下，集群所处的状态。主要字段包括：</p>
<div class="language-c ext-c line-numbers-mode"><pre v-pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">clusterState</span> <span class="token punctuation">{</span>
    <span class="token comment">//自身节点</span>
    clusterNode <span class="token operator">*</span>myself<span class="token punctuation">;</span>
    <span class="token comment">//配置纪元</span>
    <span class="token class-name">uint64_t</span> currentEpoch<span class="token punctuation">;</span>
    <span class="token comment">//集群状态：在线还是下线</span>
    <span class="token keyword">int</span> state<span class="token punctuation">;</span>
    <span class="token comment">//集群中至少包含一个槽的节点数量</span>
    <span class="token keyword">int</span> size<span class="token punctuation">;</span>
    <span class="token comment">//哈希表，节点名称->clusterNode节点指针</span>
    dict <span class="token operator">*</span>nodes<span class="token punctuation">;</span>
    <span class="token comment">//槽分布信息：数组的每个元素都是一个指向clusterNode结构的指针；如果槽还没有分配给任何节点，则为NULL</span>
    clusterNode <span class="token operator">*</span>slots<span class="token punctuation">[</span><span class="token number">16384</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    …………
<span class="token punctuation">}</span> clusterState<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除此之外，<code v-pre>clusterState</code> 还包括故障转移、槽迁移等需要的信息。</p>
<h3 id="redis集群最大节点个数是多少" tabindex="-1"><a class="header-anchor" href="#redis集群最大节点个数是多少" aria-hidden="true">#</a> Redis集群最大节点个数是多少？</h3>
<p>16384</p>
<h3 id="redis集群会有写操作丢失吗-为什么" tabindex="-1"><a class="header-anchor" href="#redis集群会有写操作丢失吗-为什么" aria-hidden="true">#</a> Redis集群会有写操作丢失吗？为什么？</h3>
<p>Redis并不能保证数据的强一致性，这意味这在实际中集群在特定的条件下可能会丢失写操作。</p>
<h3 id="redis集群之间是如何复制的" tabindex="-1"><a class="header-anchor" href="#redis集群之间是如何复制的" aria-hidden="true">#</a> Redis集群之间是如何复制的？</h3>
<p>异步复制</p>
<h3 id="redis是单线程的-如何提高多核cpu的利用率" tabindex="-1"><a class="header-anchor" href="#redis是单线程的-如何提高多核cpu的利用率" aria-hidden="true">#</a> Redis是单线程的，如何提高多核CPU的利用率？</h3>
<p>可以在同一个服务器部署多个Redis的实例，并把他们当作不同的服务器来使用，在某些时候，无论如何一个服务器是不够的， 所以，如果你想使用多个CPU，你可以考虑一下分片（shard）。</p>
<h3 id="为什么要做redis分区" tabindex="-1"><a class="header-anchor" href="#为什么要做redis分区" aria-hidden="true">#</a> 为什么要做Redis分区？</h3>
<p>分区可以让Redis管理更大的内存，Redis将可以使用所有机器的内存。如果没有分区，你最多只能使用一台机器的内存。分区使Redis的计算能力通过简单地增加计算机得到成倍提升，Redis的网络带宽也会随着计算机和网卡的增加而成倍增长。</p>
<h3 id="有哪些redis分区实现方案" tabindex="-1"><a class="header-anchor" href="#有哪些redis分区实现方案" aria-hidden="true">#</a> 有哪些Redis分区实现方案？</h3>
<ol>
<li>
<p>客户端分区就是在客户端就已经决定数据会被存储到哪个redis节点或者从哪个redis节点读取。大多数客户端已经实现了客户端分区。</p>
</li>
<li>
<p>代理分区 意味着客户端将请求发送给代理，然后代理决定去哪个节点写数据或者读数据。代理根据分区规则决定请求哪些Redis实例，然后根据Redis的响应结果返回给客户端。redis和memcached的一种代理实现就是Twemproxy</p>
</li>
<li>
<p>查询路由(Query routing) 的意思是客户端随机地请求任意一个redis实例，然后由Redis将请求转发给正确的Redis节点。Redis Cluster实现了一种混合形式的查询路由，但并不是直接将请求从一个redis节点转发到另一个redis节点，而是在客户端的帮助下直接redirected到正确的redis节点。</p>
</li>
</ol>
<h3 id="redis分区有什么缺点" tabindex="-1"><a class="header-anchor" href="#redis分区有什么缺点" aria-hidden="true">#</a> Redis分区有什么缺点？</h3>
<ol>
<li>
<p>涉及多个key的操作通常不会被支持。例如你不能对两个集合求交集，因为他们可能被存储到不同的Redis实例（实际上这种情况也有办法，但是不能直接使用交集指令）。</p>
</li>
<li>
<p>同时操作多个key,则不能使用Redis事务.</p>
</li>
<li>
<p>分区使用的粒度是key，不能使用一个非常长的排序key存储一个数据集</p>
</li>
<li>
<p>当使用分区的时候，数据处理会非常复杂，例如为了备份你必须从不同的Redis实例和主机同时收集RDB / AOF文件。</p>
</li>
<li>
<p>分区时动态扩容或缩容可能非常复杂。Redis集群在运行时增加或者删除Redis节点，能做到最大程度对用户透明地数据再平衡，但其他一些客户端分区或者代理分区方法则不支持这种特性。然而，有一种预分片的技术也可以较好的解决这个问题。</p>
</li>
</ol>
<h3 id="redis-的高可用" tabindex="-1"><a class="header-anchor" href="#redis-的高可用" aria-hidden="true">#</a> Redis 的高可用</h3>
<p>Redis的高可用，主要通过主从复制机制以及Sentinel集群来实现。</p>
<ol>
<li>主从复制 分为两个阶段，首先，当从服务器发起SYNC命令后，主服务器会生成最新的RDB文件发送给从服务器，并使用一个缓冲区来记录从此刻开始主服务器执行的所有写命令；待RDB文件传输完之后，再将该缓冲区的数据再发送给从服务器，这样就完成了复制。旧的Redis版本有个缺陷是，如果在第二个阶段发生失败，需要从第一个阶段重新开始同步，而这个阶段的操作会消耗大量的CPU、内存和磁盘I/O以及网络带宽资源，太过耗费资源。所以从2.8版本开始，实现了部分重同步，通过主从服务器各维护一个复制偏移量来实现。</li>
<li>Sentinel 由一个或多个Sentinel实例组成的哨兵系统，可以监视任意多个主从服务器，并完成Failover的操作。Sentinal其实是一个运行在特殊模式下的Redis服务器，运行期间，会与各服务器建立网络连接，以检测服务器的状态；同时会与其它Sentinel服务器创建连接，完成信息交换，比如发现某个主服务器心跳异常时，会互相询问心跳结果，当超过一定数量时即可判定为客观下线；一旦主服务器被判定为客观下线状态，那么Sentinel集群会通过raft协议选举，选出一个Leader来执行Failover。</li>
<li>Failover 一般来说，会先选出优先级最高的从服务器，然后再从中选出复制偏移量最大的实例，作为新的主服务器；最后将其它从和旧的主都切换为新主的从。</li>
</ol>
<p>当从服务器有2个或者多个时，Redis的主从架构可以有两种形式。一种是，所有的从服务器直接挂在主服务器上，这种模式的优点是，所有从服务器复制的延迟相对较低，而缺点在于加大了主服务器的复制压力；另一种形式，是采用级联的方式，S1从M复制，S2从S1复制，以此类推，这种模式的优点是，将主服务器的复制压力分摊到多个服务器上，而缺点在于越处于级联下游的从实例，复制延迟就越大。</p>
<p>从主从复制模式可以看出，Redis的数据只能保证最终一致，不能保证强一致性。</p>
<h3 id="redis的扩展性" tabindex="-1"><a class="header-anchor" href="#redis的扩展性" aria-hidden="true">#</a> Redis的扩展性</h3>
<p>读扩展，基于主从架构，可以很好的平行扩展读的能力。写扩展，主要受限于主服务器的硬件资源的限制，一是单个实例内存容量受限，二是一个实例只使用到CPU一个核。下面讨论基于多套主从架构Redis实例的集群实现，目前主要有以下几种方案：</p>
<ol>
<li>客户端分片 实现方案，业务进程通过对key进行hash来分片，用Sentinel做failover。优点：运维简单，每个实例独立部署；可使用lua脚本，业务进程执行的key均hash到同一个分片即可；缺点：一旦重新分片，由于数据无法自动迁移，部分数据需要回源；</li>
<li>Redis集群 是官方提供的分布式数据库方案，通过分片实现数据共享，并提供复制和failover。按照16384个槽位进行分片，且实例之间共享分片视图。优点：当发生重新分片时，数据可以自动迁移；缺点：客户端需要升级到支持集群协议的版本；客户端需要感知分片实例，最坏的情况，每个key需要一次重定向；不支持lua脚本；不支持pipeline；</li>
<li>Codis 是由豌豆荚团队开源的一款分布式组件，它将分布式的逻辑从Redis集群剥离出来，交由几个组件来完成，与数据的读写解耦。Codis proxy负责分片和聚合，dashboard作为管理后台，zookeeper做配置管理，Sentinel做failover。优点：底层透明，客户端兼容性好；重新分片时，数据可自动迁移；支持pipeline；支持lua脚本，业务进程保证执行的key均hash到同一个分片即可；缺点：运维较为复杂；引入了中间层；</li>
</ol>
<hr>
<h2 id="六、redis-内存相关问题" tabindex="-1"><a class="header-anchor" href="#六、redis-内存相关问题" aria-hidden="true">#</a> 六、Redis 内存相关问题</h2>
<h3 id="redis-过期键的删除策略" tabindex="-1"><a class="header-anchor" href="#redis-过期键的删除策略" aria-hidden="true">#</a> Redis 过期键的删除策略？</h3>
<p>先抛开 Redis 想一下几种可能的删除策略：</p>
<ol>
<li><strong>定时删除</strong>:在设置键的过期时间的同时，创建一个定时器 timer. 让定时器在键的过期时间来临时，立即执行对键的删除操作。</li>
<li><strong>惰性删除</strong>:放任键过期不管，但是每次从键空间中获取键时，都检查取得的键是否过期，如果过期的话，就删除该键;如果没有过期，就返回该键。</li>
<li><strong>定期删除</strong>:每隔一段时间程序就对数据库进行一次检查，删除里面的过期键。至于要删除多少过期键，以及要检查多少个数据库，则由算法决定。</li>
</ol>
<p>在上述的三种策略中定时删除和定期删除属于不同时间粒度的 <strong>主动删除</strong>，惰性删除属于 <strong>被动删除</strong>。</p>
<h4 id="三种策略都有各自的优缺点" tabindex="-1"><a class="header-anchor" href="#三种策略都有各自的优缺点" aria-hidden="true">#</a> 三种策略都有各自的优缺点</h4>
<ol>
<li>定时删除对内存使用率有优势，但是对 CPU 不友好；</li>
<li>惰性删除对内存不友好，如果某些键值对一直不被使用，那么会造成一定量的内存浪费；</li>
<li>定期删除是定时删除和惰性删除的折中。</li>
</ol>
<h4 id="redis-中的实现" tabindex="-1"><a class="header-anchor" href="#redis-中的实现" aria-hidden="true">#</a> Redis 中的实现</h4>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h399goa6myj20dm05uaa3.jpg" alt="" loading="lazy"></p>
<p>Reids 采用的是 <strong>惰性删除和定时删除</strong> 的结合，一般来说可以借助最小堆来实现定时器，不过 Redis 的设计考虑到时间事件的有限种类和数量，使用了无序链表存储时间事件，这样如果在此基础上实现定时删除，就意味着 <code v-pre>O(N)</code> 遍历获取最近需要删除的数据。</p>
<p>实现过期键惰性删除策略的核心是 <code v-pre>db.c/expireIfNeeded</code> 函数 —— 所有命令在读取或写入数据库之前，程序都会调用 <code v-pre>expireIfNeeded</code> 对输入键进行检查， 并将过期键删除：</p>
<p><img src="https://redisbook.readthedocs.io/en/latest/_images/graphviz-efb7f7ae1a793feea33285531dfe0023f3017b90.svg" alt=" " loading="lazy"></p>
<p>比如说， <code v-pre>GET</code> 命令的执行流程可以用下图来表示：</p>
<p><img src="https://redisbook.readthedocs.io/en/latest/_images/graphviz-acca43b0dd583eb92a1ce7193dc6b9bb14e9c0f9.svg" alt=" " loading="lazy"></p>
<p><code v-pre>expireIfNeeded</code> 的作用是， 如果输入键已经过期的话， 那么将键、键的值、键保存在 <code v-pre>expires</code> 字典中的过期时间都删除掉。</p>
<p>对过期键的定期删除由 <code v-pre>redis.c/activeExpireCycle</code> 函执行： 每当 Redis 的例行处理程序 <code v-pre>serverCron</code> 执行时， <code v-pre>activeExpireCycle</code> 都会被调用 —— 这个函数在规定的时间限制内， 尽可能地遍历各个数据库的 <code v-pre>expires</code> 字典， 随机地检查一部分键的过期时间， 并删除其中的过期键。</p>
<h3 id="redis-的淘汰策略有哪些" tabindex="-1"><a class="header-anchor" href="#redis-的淘汰策略有哪些" aria-hidden="true">#</a> Redis 的淘汰策略有哪些？</h3>
<h4 id="redis-有六种淘汰策略" tabindex="-1"><a class="header-anchor" href="#redis-有六种淘汰策略" aria-hidden="true">#</a> Redis 有六种淘汰策略</h4>
<p>为了保证 Redis 的安全稳定运行，设置了一个 max-memory 的阈值，那么当内存用量到达阈值，新写入的键值对无法写入，此时就需要内存淘汰机制，在 Redis 的配置中有几种淘汰策略可以选择，详细如下：</p>
<table>
<thead>
<tr>
<th>策略</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>volatile-lru</td>
<td>从已设置过期时间的 KV 集中优先对最近最少使用(less recently used)的数据淘汰</td>
</tr>
<tr>
<td>volitile-ttl</td>
<td>从已设置过期时间的 KV 集中优先对剩余时间短(time to live)的数据淘汰</td>
</tr>
<tr>
<td>volitile-random</td>
<td>从已设置过期时间的 KV 集中随机选择数据淘汰</td>
</tr>
<tr>
<td>allkeys-lru</td>
<td>从所有 KV 集中优先对最近最少使用(less recently used)的数据淘汰</td>
</tr>
<tr>
<td>allKeys-random</td>
<td>从所有 KV 集中随机选择数据淘汰</td>
</tr>
<tr>
<td>noeviction</td>
<td>不淘汰策略，若超过最大内存，返回错误信息</td>
</tr>
</tbody>
</table>
<p><strong>4.0 版本后增加以下两种</strong></p>
<ul>
<li>volatile-lfu：从已设置过期时间的数据集(server.db[i].expires)中挑选最不经常使用的数据淘汰</li>
<li>allkeys-lfu：当内存不足以容纳新写入数据时，在键空间中，移除最不经常使用的 key</li>
</ul>
<h3 id="redis-内存满了怎么办" tabindex="-1"><a class="header-anchor" href="#redis-内存满了怎么办" aria-hidden="true">#</a> Redis 内存满了怎么办</h3>
<ol>
<li>增加内存；</li>
<li>使用内存淘汰策略（redis设置配置文件的*<strong>maxmemory</strong>参数，可以控制其最大可用内存大小，可以通过配置 <strong>maxmemory-policy</strong> 设置淘汰策略）</li>
<li>集群</li>
</ol>
<h3 id="redis-线程模型" tabindex="-1"><a class="header-anchor" href="#redis-线程模型" aria-hidden="true">#</a> Redis 线程模型</h3>
<p>Redis 基于 Reactor 模式开发了网络事件处理器，这个处理器被称为文件事件处理器（file event handler）。它的组成结构为4部分：多个套接字、IO多路复用程序、文件事件分派器、事件处理器。因为文件事件分派器队列的消费是单线程的，所以 Redis 才叫单线程模型。</p>
<p>文件事件处理器使用 I/O 多路复用（multiplexing）程序来同时监听多个套接字，并根据套接字目前执行的任务来为套接字关联不同的事件处理器。</p>
<p>当被监听的套接字准备好执行连接应答（accept）、读取（read）、写入（write）、关闭（close）等操作时， 与操作相对应的文件事件就会产生，这时文件事件处理器就会调用套接字之前关联好的事件处理器来处理这些事件。</p>
<p>虽然文件事件处理器以单线程方式运行， 但通过使用 I/O 多路复用程序来监听多个套接字，文件事件处理器既实现了高性能的网络通信模型， 又可以很好地与 redis 服务器中其他同样以单线程方式运行的模块进行对接， 这保持了 Redis 内部单线程设计的简单性。</p>
<p>参考：<a href="https://www.cnblogs.com/barrywxx/p/8570821.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/barrywxx/p/8570821.html<ExternalLinkIcon/></a></p>
<h3 id="redis-内存模型" tabindex="-1"><a class="header-anchor" href="#redis-内存模型" aria-hidden="true">#</a> Redis 内存模型</h3>
<p>Redis 内存主要可以分为：数据部分、Redis进程本身、缓冲区内存、内存碎片这四个部分。Redis 默认通过jemalloc 来分配内存。</p>
<ul>
<li>
<p><strong>数据内存</strong>：数据内存用来存储Redis的键值对、慢查询日志等，是主要占用内存的部分，这部分内存会统计在used_memory中</p>
</li>
<li>
<p><strong>Redis进程内存</strong>：Redis进程本身也会占用一部分内存，这部分内存不是jemalloc分配，不会统计在used_memory中。执行RDB和AOF时创建的子进程也会占用内存，但也不会统计在used_memory中。</p>
</li>
<li>
<p><strong>缓冲内存</strong>：</p>
<p>缓冲内存包括：</p>
<ul>
<li>客户端缓冲区：存储客户端连接的输入和输出缓冲</li>
<li>复制积压缓冲区：用于PSYNC的部分复制功能</li>
<li>AOF缓冲区：AOF操作时，保存最近写入的命令。</li>
</ul>
<p>这部分内存由jemalloc分配，会被统计在used_memory中</p>
</li>
<li>
<p><strong>内存碎片</strong>：Redis在分配和回收物理内存的过程中会产生内存碎片，这部分不会统计在used_memory中。内存碎片太多的话可以通过安全重启方式减少内存碎片，重启之后Redis会使用RDB或者AOF恢复数据，内存会被重排。</p>
</li>
</ul>
<hr>
<h2 id="七、redis-缓存异常问题" tabindex="-1"><a class="header-anchor" href="#七、redis-缓存异常问题" aria-hidden="true">#</a> 七、Redis 缓存异常问题</h2>
<h3 id="redis常见性能问题和解决方案" tabindex="-1"><a class="header-anchor" href="#redis常见性能问题和解决方案" aria-hidden="true">#</a> Redis常见性能问题和解决方案？</h3>
<ol>
<li>Master 最好不要做任何持久化工作，包括内存快照和 AOF 日志文件，特别是不要启用内存快照做持久化。</li>
<li>如果数据比较关键，某个 Slave 开启 AOF 备份数据，策略为每秒同步一次。</li>
<li>为了主从复制的速度和连接的稳定性，Slave 和 Master 最好在同一个局域网内。</li>
<li>尽量避免在压力较大的主库上增加从库。</li>
<li>Master 调用 BGREWRITEAOF 重写 AOF 文件，AOF 在重写的时候会占大量的 CPU 和内存资源，导致服务 load 过高，出现短暂服务暂停现象。</li>
<li>为了 Master 的稳定性，主从复制不要用图状结构，用单向链表结构更稳定，即主从关系为：Master&lt;–Slave1&lt;–Slave2&lt;–Slave3…，这样的结构也方便解决单点故障问题，实现 Slave 对 Master 的替换，也即，如果 Master 挂了，可以立马启用 Slave1 做 Master，其他不变。</li>
</ol>
<h3 id="如何保证缓存与数据库双写时的数据一致性" tabindex="-1"><a class="header-anchor" href="#如何保证缓存与数据库双写时的数据一致性" aria-hidden="true">#</a> 如何保证缓存与数据库双写时的数据一致性？</h3>
<p>你只要用缓存，就可能会涉及到缓存与数据库双存储双写，你只要是双写，就一定会有数据一致性的问题，那么你如何解决一致性问题？</p>
<p>一般来说，就是如果你的系统不是严格要求缓存+数据库必须一致性的话，缓存可以稍微的跟数据库偶尔有不一致的情况，最好不要做这个方案，读请求和写请求串行化，串到一个内存队列里去，这样就可以保证一定不会出现不一致的情况。</p>
<p>串行化之后，就会导致系统的吞吐量会大幅度的降低，用比正常情况下多几倍的机器去支撑线上的一个请求。</p>
<p>操作缓存的时候我们都是采取<strong>删除缓存</strong>策略的，原因如下：</p>
<ol>
<li>高并发环境下，无论是先操作数据库还是后操作数据库而言，如果加上更新缓存，那就<strong>更加容易</strong>导致数据库与缓存数据不一致问题。(删除缓存<strong>直接和简单</strong>很多)</li>
<li>如果每次更新了数据库，都要更新缓存【这里指的是频繁更新的场景，这会耗费一定的性能】，倒不如直接删除掉。等再次读取时，缓存里没有，那我到数据库找，在数据库找到再写到缓存里边(体现<strong>懒加载</strong>)</li>
</ol>
<p>这里就又有个问题：是先更新数据库，再删除缓存，还是先删除缓存，再更新数据库呢</p>
<h4 id="先更新数据库-再删除缓存" tabindex="-1"><a class="header-anchor" href="#先更新数据库-再删除缓存" aria-hidden="true">#</a> 先更新数据库，再删除缓存</h4>
<p>正常的情况是这样的：</p>
<ul>
<li>先操作数据库，成功；</li>
<li>再删除缓存，也成功；</li>
</ul>
<p>如果原子性被破坏了：</p>
<ul>
<li>第一步成功(操作数据库)，第二步失败(删除缓存)，会导致<strong>数据库里是新数据，而缓存里是旧数据</strong>。</li>
<li>如果第一步(操作数据库)就失败了，我们可以直接返回错误(Exception)，不会出现数据不一致。</li>
</ul>
<p>如果在高并发的场景下，出现数据库与缓存数据不一致的<strong>概率特别低</strong>，也不是没有：</p>
<ul>
<li>缓存<strong>刚好</strong>失效</li>
<li>线程A查询数据库，得一个旧值</li>
<li>线程B将新值写入数据库</li>
<li>线程B删除缓存</li>
<li>线程A将查到的旧值写入缓存</li>
</ul>
<h4 id="先删除缓存-再更新数据库" tabindex="-1"><a class="header-anchor" href="#先删除缓存-再更新数据库" aria-hidden="true">#</a> 先删除缓存，再更新数据库</h4>
<p>正常情况是这样的：</p>
<ul>
<li>先删除缓存，成功；</li>
<li>再更新数据库，也成功；</li>
</ul>
<p>如果原子性被破坏了：</p>
<ul>
<li>第一步成功(删除缓存)，第二步失败(更新数据库)，数据库和缓存的数据还是一致的。</li>
<li>如果第一步(删除缓存)就失败了，我们可以直接返回错误(Exception)，数据库和缓存的数据还是一致的。</li>
</ul>
<p>看起来是很美好，但是我们在并发场景下分析一下，就知道还是有问题的了：</p>
<ul>
<li>线程A删除了缓存</li>
<li>线程B查询，发现缓存已不存在</li>
<li>线程B去数据库查询得到旧值</li>
<li>线程B将旧值写入缓存</li>
<li>线程A将新值写入数据库</li>
</ul>
<p>所以也会导致数据库和缓存不一致的问题。但是我们一般选择这种</p>
<p>推荐阅读：</p>
<p><a href="https://mp.weixin.qq.com/s/3Fmv7h5p2QDtLxc9n1dp5A" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/3Fmv7h5p2QDtLxc9n1dp5A<ExternalLinkIcon/></a></p>
<p><a href="https://zhuanlan.zhihu.com/p/48334686" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/48334686<ExternalLinkIcon/></a></p>
<h3 id="使用缓存会出现什么问题" tabindex="-1"><a class="header-anchor" href="#使用缓存会出现什么问题" aria-hidden="true">#</a> 使用缓存会出现什么问题？</h3>
<h4 id="缓存雪崩" tabindex="-1"><a class="header-anchor" href="#缓存雪崩" aria-hidden="true">#</a> 缓存雪崩</h4>
<p><mark>缓存雪崩是指缓存同一时间大面积的失效</mark>，所以，后面的请求都会落到数据库上，造成数据库短时间内承受大量请求而崩掉。</p>
<p><strong>解决方案</strong></p>
<ol>
<li>
<p>缓存数据的过期时间设置随机，防止同一时间大量数据过期现象发生。</p>
</li>
<li>
<p>一般并发量不是特别多的时候，使用最多的解决方案是加锁排队(key上锁，其他线程不能访问，假设在高并发下，缓存重建期间key是锁着的，这是过来1000个请求999个都在阻塞的。同样会导致用户等待超时，这是个治标不治本的方法！)。</p>
</li>
<li>
<p>给每一个缓存数据增加相应的缓存标记，记录缓存的是否失效，如果缓存标记失效，则更新数据缓存。</p>
</li>
</ol>
<h4 id="缓存穿透" tabindex="-1"><a class="header-anchor" href="#缓存穿透" aria-hidden="true">#</a> 缓存穿透</h4>
<p><mark>缓存穿透是指缓存和数据库中都没有的数据</mark>，导致所有的请求都落到数据库上，造成数据库短时间内承受大量请求而崩掉。</p>
<p><strong>解决方案</strong></p>
<ol>
<li>
<p>接口层增加校验，如用户鉴权校验，id做基础校验，id&lt;=0的直接拦截；</p>
</li>
<li>
<p>从缓存取不到的数据，在数据库中也没有取到，这时也可以将key-value对写为key-null，缓存有效时间可以设置短点，如30秒（设置太长会导致正常情况也没法使用）。这样可以防止攻击用户反复用同一个id暴力攻击</p>
</li>
<li>
<p>采用布隆过滤器，将所有可能存在的数据哈希到一个足够大的 bitmap 中，一个一定不存在的数据会被这个 bitmap 拦截掉，从而避免了对底层存储系统的查询压力。</p>
</li>
</ol>
<h4 id="缓存击穿" tabindex="-1"><a class="header-anchor" href="#缓存击穿" aria-hidden="true">#</a> 缓存击穿</h4>
<p><mark>缓存击穿是指缓存中没有但数据库中有的数据</mark>（一般是缓存时间到期），这时由于并发用户特别多，同时读缓存没读到数据，又同时去数据库去取数据，引起数据库压力瞬间增大，造成过大压力。</p>
<p>缓存击穿是指一个 Key 非常热点，在不停地扛着大量的请求，大并发集中对这一个点进行访问，当这个 Key 在失效的瞬间，持续的大并发直接落到了数据库上，就在这个 Key 的点上击穿了缓存</p>
<blockquote>
<p><strong>和缓存雪崩不同的是，缓存击穿指并发查同一条数据，缓存雪崩是不同数据都过期了，很多数据都查不到从而查数据库。</strong></p>
</blockquote>
<p><strong>解决方案</strong></p>
<ol>
<li>
<p>热点数据永远不过期：物理不过期，但逻辑过期(后台异步线程去刷新)</p>
</li>
<li>
<p>使用互斥锁：当缓存失效时，不立即去load db，先使用如 Redis 的 setnx 去设置一个互斥锁，当操作成功返回时再进行 load db 的操作并回设缓存，否则重试 get 缓存的 方法</p>
</li>
</ol>
<h4 id="缓存预热" tabindex="-1"><a class="header-anchor" href="#缓存预热" aria-hidden="true">#</a> 缓存预热</h4>
<p>缓存预热就是系统上线后，将相关的缓存数据直接加载到缓存系统。这样就可以避免在用户请求的时候，先查询数据库，然后再将数据缓存的问题！用户直接查询事先被预热的缓存数据！</p>
<p><strong>解决方案</strong></p>
<ol>
<li>
<p>直接写个缓存刷新页面，上线时手工操作一下；</p>
</li>
<li>
<p>数据量不大，可以在项目启动的时候自动进行加载；</p>
</li>
<li>
<p>定时刷新缓存；</p>
</li>
</ol>
<h4 id="缓存降级" tabindex="-1"><a class="header-anchor" href="#缓存降级" aria-hidden="true">#</a> 缓存降级</h4>
<p>当访问量剧增、服务出现问题（如响应时间慢或不响应）或非核心服务影响到核心流程的性能时，仍然需要保证服务还是可用的，即使是有损服务。系统可以根据一些关键数据进行自动降级，也可以配置开关实现人工降级。</p>
<p><strong>缓存降级的最终目的是保证核心服务可用，即使是有损的。而且有些服务是无法降级的（如加入购物车、结算）。</strong></p>
<p>在进行降级之前要对系统进行梳理，看看系统是不是可以丢卒保帅；从而梳理出哪些必须誓死保护，哪些可降级；比如可以参考日志级别设置预案：</p>
<ol>
<li>
<p>一般：比如有些服务偶尔因为网络抖动或者服务正在上线而超时，可以自动降级；</p>
</li>
<li>
<p>警告：有些服务在一段时间内成功率有波动（如在95~100%之间），可以自动降级或人工降级，并发送告警；</p>
</li>
<li>
<p>错误：比如可用率低于90%，或者数据库连接池被打爆了，或者访问量突然猛增到系统能承受的最大阀值，此时可以根据情况自动降级或者人工降级；</p>
</li>
<li>
<p>严重错误：比如因为特殊原因数据错误了，此时需要紧急人工降级。</p>
</li>
</ol>
<p>服务降级的目的，是为了防止 Redis 服务故障，导致数据库跟着一起发生雪崩问题。因此，对于不重要的缓存数据，可以采取服务降级策略，例如一个比较常见的做法就是，Redis出现问题，不去数据库查询，而是直接返回默认值给用户。</p>
<h4 id="缓存热点key" tabindex="-1"><a class="header-anchor" href="#缓存热点key" aria-hidden="true">#</a> 缓存热点key</h4>
<p>缓存中的一个Key(比如一个促销商品)，在某个时间点过期的时候，恰好在这个时间点对这个Key有大量的并发请求过来，这些请求发现缓存过期一般都会从后端DB加载数据并回设到缓存，这个时候大并发的请求可能会瞬间把后端DB压垮。</p>
<p><strong>解决方案</strong></p>
<ol>
<li>对缓存查询加锁，如果KEY不存在，就加锁，然后查DB入缓存，然后解锁；</li>
<li>其他进程如果发现有锁就等待，然后等解锁后返回数据或者进入DB查询</li>
</ol>
<h3 id="redis-大-key-和-热-key-问题" tabindex="-1"><a class="header-anchor" href="#redis-大-key-和-热-key-问题" aria-hidden="true">#</a> Redis 大 key 和 热 Key 问题</h3>
<blockquote>
<p><a href="https://help.aliyun.com/document_detail/353223.html" target="_blank" rel="noopener noreferrer">https://help.aliyun.com/document_detail/353223.html<ExternalLinkIcon/></a></p>
</blockquote>
<p>Redis的过程中，如果未能及时发现并处理 Big keys（下文称为“大Key”）与 Hotkeys（下文称为“热Key”），可能会导致服务性能下降、用户体验变差，甚至引发大面积故障</p>
<h4 id="大key" tabindex="-1"><a class="header-anchor" href="#大key" aria-hidden="true">#</a> 大Key</h4>
<p>通常以Key的大小和Key中成员的数量来综合判定，例如：</p>
<ul>
<li>Key本身的数据量过大：一个String类型的Key，它的值为5 MB。</li>
<li>Key中的成员数过多：一个ZSET类型的Key，它的成员数量为10,000个。</li>
<li>Key中成员的数据量过大：一个Hash类型的Key，它的成员数量虽然只有1,000个但这些成员的Value（值）总大小为100 MB。</li>
</ul>
<h5 id="引发的问题" tabindex="-1"><a class="header-anchor" href="#引发的问题" aria-hidden="true">#</a> 引发的问题</h5>
<ul>
<li>客户端执行命令的时长变慢。</li>
<li>Redis内存达到<strong>maxmemory</strong>参数定义的上限引发操作阻塞或重要的Key被逐出，甚至引发内存溢出（Out Of Memory）。</li>
<li>集群架构下，某个数据分片的内存使用率远超其他数据分片，无法使数据分片的内存资源达到均衡。</li>
<li>对大Key执行读请求，会使Redis实例的带宽使用率被占满，导致自身服务变慢，同时易波及相关的服务。</li>
<li>对大Key执行删除操作，易造成主库较长时间的阻塞，进而可能引发同步中断或主从切换。</li>
</ul>
<h5 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h5>
<ul>
<li>在不适用的场景下使用Redis，易造成Key的value过大，如使用String类型的Key存放大体积二进制文件型数据；</li>
<li>业务上线前规划设计不足，没有对Key中的成员进行合理的拆分，造成个别Key中的成员数量过多；</li>
<li>未定期清理无效数据，造成如HASH类型Key中的成员持续不断地增加；</li>
<li>使用LIST类型Key的业务消费侧发生代码故障，造成对应Key的成员只增不减。</li>
</ul>
<h4 id="热key" tabindex="-1"><a class="header-anchor" href="#热key" aria-hidden="true">#</a> 热Key</h4>
<p>通常以其接收到的Key被请求频率来判定，例如：</p>
<ul>
<li>QPS集中在特定的Key：Redis实例的总QPS（每秒查询率）为10,000，而其中一个Key的每秒访问量达到了7,000。</li>
<li>带宽使用率集中在特定的Key：对一个拥有上千个成员且总大小为1 MB的HASH Key每秒发送大量的<strong>HGETALL</strong>操作请求。</li>
<li>CPU使用时间占比集中在特定的Key：对一个拥有数万个成员的Key（ZSET类型）每秒发送大量的<strong>ZRANGE</strong>操作请求。</li>
</ul>
<h5 id="引发的问题-1" tabindex="-1"><a class="header-anchor" href="#引发的问题-1" aria-hidden="true">#</a> 引发的问题</h5>
<ul>
<li>占用大量的CPU资源，影响其他请求并导致整体性能降低。</li>
<li>集群架构下，产生访问倾斜，即某个数据分片被大量访问，而其他数据分片处于空闲状态，可能引起该数据分片的连接数被耗尽，新的连接建立请求被拒绝等问题。</li>
<li>在抢购或秒杀场景下，可能因商品对应库存Key的请求量过大，超出Redis处理能力造成超卖。</li>
<li>热Key的请求压力数量超出Redis的承受能力易造成缓存击穿，即大量请求将被直接指向后端的存储层，导致存储访问量激增甚至宕机，从而影响其他业务。</li>
</ul>
<h5 id="原因-1" tabindex="-1"><a class="header-anchor" href="#原因-1" aria-hidden="true">#</a> 原因</h5>
<ul>
<li>预期外的访问量陡增，如突然出现的爆款商品、访问量暴涨的热点新闻、直播间某主播搞活动带来的大量刷屏点赞、游戏中某区域发生多个工会之间的战斗涉及大量玩家等。</li>
</ul>
<h3 id="找出大-key-和-热-key-并解决" tabindex="-1"><a class="header-anchor" href="#找出大-key-和-热-key-并解决" aria-hidden="true">#</a> 找出大 Key 和 热 Key 并解决</h3>
<p>Redis提供多种方案帮助您轻松找出大Key与热Key。</p>
<ul>
<li>实时 Top Key 统计</li>
<li>通过 redis-cli 的 bigkeys 和 hotkeys 参数查找</li>
<li>通过内置命令对目标 key 分析（比如 String 类型，通过 STRLEN 查看字节数）</li>
<li>业务层定位 key (对业务层加访问记录并异步汇总分析)</li>
<li>通过 <code v-pre>MONITOR</code> 命令找出热 Key</li>
</ul>
<h3 id="优化大-key-和-热-key" tabindex="-1"><a class="header-anchor" href="#优化大-key-和-热-key" aria-hidden="true">#</a> 优化大 Key 和 热 Key</h3>
<h4 id="大-key" tabindex="-1"><a class="header-anchor" href="#大-key" aria-hidden="true">#</a> 大 Key</h4>
<ul>
<li>
<p>对大Key进行拆分</p>
<p>例如将含有数万成员的一个HASH Key拆分为多个HASH Key，并确保每个Key的成员数量在合理范围。在Redis集群架构中，拆分大Key能对数据分片间的内存平衡起到显著作用</p>
</li>
<li>
<p>对大Key进行清理</p>
</li>
<li>
<p>监控Redis的内存水位</p>
</li>
<li>
<p>对过期数据进行定期清理</p>
</li>
</ul>
<h4 id="热-key" tabindex="-1"><a class="header-anchor" href="#热-key" aria-hidden="true">#</a> 热 Key</h4>
<ul>
<li>在Redis集群架构中对热Key进行复制</li>
<li>在Redis集群架构中对热Key进行复制</li>
</ul>
<hr>
<h2 id="八、分布式相关问题" tabindex="-1"><a class="header-anchor" href="#八、分布式相关问题" aria-hidden="true">#</a> 八、分布式相关问题</h2>
<h3 id="redis实现分布式锁" tabindex="-1"><a class="header-anchor" href="#redis实现分布式锁" aria-hidden="true">#</a> Redis实现分布式锁</h3>
<p>默认指定大家用的是 Redis 2.6.12 及更高的版本，就不再去讲 <code v-pre>setnx</code>、<code v-pre>expire</code> 这种了，直接 <code v-pre>set</code> 命令加锁</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">set</span> key value<span class="token punctuation">[</span>expiration EX seconds<span class="token operator">|</span>PX milliseconds<span class="token punctuation">]</span> <span class="token punctuation">[</span>NX<span class="token operator">|</span>XX<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p><em>SET</em> 命令的行为可以通过一系列参数来修改</p>
<ul>
<li><code v-pre>EX second</code> ：设置键的过期时间为 <code v-pre>second</code> 秒。 <code v-pre>SET key value EX second</code> 效果等同于 <code v-pre>SETEX key second value</code> 。</li>
<li><code v-pre>PX millisecond</code> ：设置键的过期时间为 <code v-pre>millisecond</code> 毫秒。 <code v-pre>SET key value PX millisecond</code> 效果等同于 <code v-pre>PSETEX key millisecond value</code> 。</li>
<li><code v-pre>NX</code> ：只在键不存在时，才对键进行设置操作。 <code v-pre>SET key value NX</code> 效果等同于 <code v-pre>SETNX key value</code> 。</li>
<li><code v-pre>XX</code> ：只在键已经存在时，才对键进行设置操作。</li>
</ul>
</blockquote>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>SET resource_name my_random_value NX PX <span class="token number">30000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这条指令的意思：当 key——resource_name 不存在时创建这样的 key，设值为 my_random_value，并设置过期时间 30000 毫秒。</p>
<p>别看这干了两件事，因为 Redis 是单线程的，这一条指令不会被打断，所以是原子性的操作。</p>
<p>Redis 实现分布式锁的主要步骤：</p>
<ol>
<li>指定一个 key 作为锁标记，存入 Redis 中，指定一个 <strong>唯一的标识</strong> 作为 value。</li>
<li>当 key 不存在时才能设置值，确保同一时间只有一个客户端进程获得锁，满足 <strong>互斥性</strong> 特性。</li>
<li>设置一个过期时间，防止因系统异常导致没能删除这个 key，满足 <strong>防死锁</strong> 特性。</li>
<li>当处理完业务之后需要清除这个 key 来释放锁，清除 key 时需要校验 value 值，需要满足 <strong>解铃还须系铃人</strong> 。</li>
</ol>
<p>设置一个随机值的意思是在解锁时候判断 key 的值和我们存储的随机数是不是一样，一样的话，才是自己的锁，直接 <code v-pre>del</code> 解锁就行。</p>
<p>当然这个两个操作要保证原子性，所以 Redis 给出了一段 lua 脚本（Redis 服务器会单线程原子性执行 lua 脚本，保证 lua 脚本在处理的过程中不会被任意其它请求打断。）：</p>
<div class="language-lua ext-lua line-numbers-mode"><pre v-pre class="language-lua"><code><span class="token keyword">if</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">"get"</span><span class="token punctuation">,</span>KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> ARGV<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">then</span>
    <span class="token keyword">return</span> redis<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">"del"</span><span class="token punctuation">,</span>KEYS<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">else</span>
    <span class="token keyword">return</span> <span class="token number">0</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="上述-redis-分布式锁的缺点" tabindex="-1"><a class="header-anchor" href="#上述-redis-分布式锁的缺点" aria-hidden="true">#</a> 上述 Redis 分布式锁的缺点</h3>
<p>其实上面那种方案最大的问题，就是如果你对某个 redis master 实例，写入了 myLock 这种锁 key 的 value，此时会异步复制给对应的 master slave 实例。但是这个过程中一旦发生 redis m aster 宕机，主备切换，redis slave 变为了 redis master。</p>
<p>接着就会导致，客户端 2 来尝试加锁的时候，在新的 redis master 上完成了加锁，而客户端 1 也以为自己成功加了锁。此时就会导致多个客户端对一个分布式锁完成了加锁。这时系统在业 务语义上一定会出现问题，导致各种脏数据的产生。</p>
<h3 id="zk-实现分布式锁的思路" tabindex="-1"><a class="header-anchor" href="#zk-实现分布式锁的思路" aria-hidden="true">#</a> zk 实现分布式锁的思路</h3>
<ol>
<li>客户端对某个方法加锁时，在 zk 上的与该方法对应的指定节点的目录下，生成一个唯一 的瞬时有序节点 node1;</li>
<li>客户端获取该路径下所有已经创建的子节点，如果发现自己创建的 node1 的序号是最小 的，就认为这个客户端获得了锁。</li>
<li>如果发现 node1 不是最小的，则监听比自己创建节点序号小的最大的节点，进入等待。</li>
<li>获取锁后，处理完逻辑，删除自己创建的 node1 即可。</li>
</ol>
<h3 id="如何解决-redis-的并发竞争-key-问题" tabindex="-1"><a class="header-anchor" href="#如何解决-redis-的并发竞争-key-问题" aria-hidden="true">#</a> 如何解决 Redis 的并发竞争 Key 问题</h3>
<p>所谓 Redis 的并发竞争 Key 的问题也就是多个系统同时对一个 key 进行操作，但是最后执行的顺序和我们期望的顺序不同，这样也就导致了结果的不同！</p>
<p>推荐一种方案：分布式锁（zookeeper 和 redis 都可以实现分布式锁）。（如果不存在 Redis 的并发竞争 Key 问题，不要使用分布式锁，这样会影响性能）</p>
<p>基于zookeeper临时有序节点可以实现的分布式锁。大致思想为：每个客户端对某个方法加锁时，在zookeeper上的与该方法对应的指定节点的目录下，生成一个唯一的瞬时有序节点。 判断是否获取锁的方式很简单，只需要判断有序节点中序号最小的一个。 当释放锁的时候，只需将这个瞬时节点删除即可。同时，其可以避免服务宕机导致的锁无法释放，而产生的死锁问题。完成业务流程后，删除对应的子节点释放锁。</p>
<p>在实践中，当然是从以可靠性为主。所以首推Zookeeper。</p>
<p>参考：<a href="https://www.jianshu.com/p/8bddd381de06" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/8bddd381de06<ExternalLinkIcon/></a></p>
<h3 id="分布式redis是前期做还是后期规模上来了再做好-为什么" tabindex="-1"><a class="header-anchor" href="#分布式redis是前期做还是后期规模上来了再做好-为什么" aria-hidden="true">#</a> 分布式Redis是前期做还是后期规模上来了再做好？为什么？</h3>
<p>既然Redis是如此的轻量（单实例只使用1M内存），为防止以后的扩容，最好的办法就是一开始就启动较多实例。即便你只有一台服务器，你也可以一开始就让Redis以分布式的方式运行，使用分区，在同一台服务器上启动多个实例。</p>
<p>一开始就多设置几个Redis实例，例如32或者64个实例，对大多数用户来说这操作起来可能比较麻烦，但是从长久来看做这点牺牲是值得的。</p>
<p>这样的话，当你的数据不断增长，需要更多的Redis服务器时，你需要做的就是仅仅将Redis实例从一台服务迁移到另外一台服务器而已（而不用考虑重新分区的问题）。一旦你添加了另一台服务器，你需要将你一半的Redis实例从第一台机器迁移到第二台机器。</p>
<h3 id="什么是-redlock" tabindex="-1"><a class="header-anchor" href="#什么是-redlock" aria-hidden="true">#</a> 什么是 RedLock</h3>
<p>Redis 官方站提出了一种权威的基于 Redis 实现分布式锁的方式名叫 Redlock，此种方式比原先的单节点的方法更安全。它可以保证以下特性：</p>
<p>安全特性：互斥访问，即永远只有一个 client 能拿到锁
避免死锁：最终 client 都可能拿到锁，不会出现死锁的情况，即使原本锁住某资源的 client crash 了或者出现了网络分区
容错性：只要大部分 Redis 节点存活就可以正常提供服务</p>
<hr>
<h2 id="十、其他问题" tabindex="-1"><a class="header-anchor" href="#十、其他问题" aria-hidden="true">#</a> 十、其他问题</h2>
<h3 id="使用redis做过异步队列吗-是如何实现的" tabindex="-1"><a class="header-anchor" href="#使用redis做过异步队列吗-是如何实现的" aria-hidden="true">#</a> 使用Redis做过异步队列吗，是如何实现的</h3>
<p>使用 list 类型保存数据信息，rpush 生产消息，lpop 消费消息，当 lpop 没有消息时，可以 sleep 一段时间，然后再检查有没有信息，如果不想 sleep 的话，可以使用 blpop，在没有信息的时候，会一直阻塞，直到信息的到来。redis 可以通过 pub/sub 主题订阅模式实现一个生产者，多个消费者，当然也存在一定的缺点，当消费者下线时，生产的消息会丢失。</p>
<h3 id="redis如何实现延时队列" tabindex="-1"><a class="header-anchor" href="#redis如何实现延时队列" aria-hidden="true">#</a> Redis如何实现延时队列</h3>
<p>使用 sortedset，使用时间戳做 score，消息内容作为 key，调用 zadd 来生产消息，消费者使用 zrangbyscore 获取 n 秒之前的数据做轮询处理。</p>
<h3 id="redis如何做内存优化" tabindex="-1"><a class="header-anchor" href="#redis如何做内存优化" aria-hidden="true">#</a> Redis如何做内存优化？</h3>
<p>尽可能使用散列表（hashes），散列表（是说散列表里面存储的数少）使用的内存非常小，所以你应该尽可能的将你的数据模型抽象到一个散列表里面。比如你的web系统中有一个用户对象，不要为这个用户的名称，姓氏，邮箱，密码设置单独的key，而是应该把这个用户的所有信息存储到一张散列表里面。</p>
<h3 id="redis-使用误区" tabindex="-1"><a class="header-anchor" href="#redis-使用误区" aria-hidden="true">#</a> Redis 使用误区</h3>
<p><strong>键过大</strong></p>
<p>Redis的key是string类型，最大可以是512MB，那么实际中是不是也可以这样用呢？答案是否定的，redis将key保存在一个全局的hashtable，如果key过大，一是占用过多的内存，二是计算hash和字符串比较都会更耗时；一般建议key的大小不超过2kB。</p>
<p><strong>Big key</strong></p>
<p>或者说是big value，这会导致删除key的操作比较耗时，会阻塞主线程。比如有些同学喜欢用集合类的对象，动辄上百万的元素。对于这类超大集合，一般有两种优化方案，一是采取分片的方式，将每个集合分片控制在较小的范围内，比如小于1000个元素；二是起一个异步任务，对集合中的元素分批进行老化。</p>
<p><strong>全集合扫描</strong></p>
<p>比如在业务代码使用了keys*，hgetall，zrange(0, -1)等返回集合中所有元素，这些都属于阻塞操作，一般考虑用scan，hscan等迭代操作代替。</p>
<p><strong>单个实例内存过大</strong></p>
<p>内存过大有什么问题呢？上文中在讲到持久化的时候其实有说到，无论是生成RDB文件，还是AOF重写，都是要对整个实例的内存数据进行扫描，非常消耗CPU和磁盘资源；当使用Backgroud方式创建子进程时也会涉及到内存空间的拷贝，即便使用了COW机制，也会占用相当的内存开销。另外，在主从复制的第一阶段，save、传输和加载RDB文件的开销，也会随着RDB文件的变大而变大。当单个实例达到瓶颈时，更好的解决方案应该是采用集群方案。</p>
<p><strong>大量key同时过期</strong></p>
<p>redis删除过期键采用了惰性删除和定期删除相结合的策略，惰性删除则是在每次GET/SET操作时去删，定期删除，则是在时间事件中，从整个key空间随机取样，直到过期键比率小于25%，如果同时有大量key过期的话，极可能导致主线程阻塞。一般可以通过做散列来优化处理。</p>
<h3 id="redis-中的管道有什么用" tabindex="-1"><a class="header-anchor" href="#redis-中的管道有什么用" aria-hidden="true">#</a> Redis 中的管道有什么用?</h3>
<p>一次请求/响应服务器能实现处理新的请求即使旧的请求还未被响应。这样就可以将多个命令发送到服务器，而不用等待回复，最后在一个步骤中读取该答复。</p>
<p>这就是管道(pipelining)，是一种几十年来广泛使用的技术。例如许多 POP3 协议已经实现支持这个功 能，大大加快了从服务器下载新邮件的过程。</p>
<h3 id="假如-redis-里面有-1-亿个-key-其中有-10w-个-key-是以某个固定的已知的前缀开头的-如-果将它们全部找出来" tabindex="-1"><a class="header-anchor" href="#假如-redis-里面有-1-亿个-key-其中有-10w-个-key-是以某个固定的已知的前缀开头的-如-果将它们全部找出来" aria-hidden="true">#</a> 假如 Redis 里面有 <strong>1</strong> 亿个 key，其中有 10w 个 key 是以某个固定的已知的前缀开头的，如 果将它们全部找出来?</h3>
<p>使用 keys 指令可以扫出指定模式的 key 列表。</p>
<p>对方接着追问:如果这个 redis 正在给线上的业务提供服务，那使用 keys 指令会有什么问题?</p>
<p>这个时候你要回答 redis 关键的一个特性：redis 的单线程的。keys 指令会导致线程阻塞一段时间，线上服务会停顿，直到指令执行完毕，服务才能恢复。这个时候可以使用 scan 指 令，scan 指令可以无阻塞的提取出指定模式的 key 列表，但是会有一定的重复概率，在客 户端做一次去重就可以了，但是整体所花费的时间会比直接用 keys 指令长。</p>
<h2 id="references" tabindex="-1"><a class="header-anchor" href="#references" aria-hidden="true">#</a> References</h2>
<p><a href="https://juejin.im/post/6844904017387077640" target="_blank" rel="noopener noreferrer">https://juejin.im/post/6844904017387077640<ExternalLinkIcon/></a></p>
<p><a href="https://www.wmyskxz.com/2020/03/25/dong-yi-dian-python-xi-lie-kuai-su-ru-men-1/#toc-heading-22" target="_blank" rel="noopener noreferrer">https://www.wmyskxz.com/2020/03/25/dong-yi-dian-python-xi-lie-kuai-su-ru-men-1/#toc-heading-22<ExternalLinkIcon/></a></p>
<p><a href="https://mp.weixin.qq.com/s/f9N13fnyTtnu2D5sKZiu9w" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/f9N13fnyTtnu2D5sKZiu9w<ExternalLinkIcon/></a></p>
<p><a href="https://blog.csdn.net/ThinkWon/article/details/103522351/" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/ThinkWon/article/details/103522351/<ExternalLinkIcon/></a></p>
</div></template>
