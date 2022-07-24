<template><div><h2 id="mysql-基础" tabindex="-1"><a class="header-anchor" href="#mysql-基础" aria-hidden="true">#</a> MySQL 基础</h2>
<h3 id="关系型数据库介绍" tabindex="-1"><a class="header-anchor" href="#关系型数据库介绍" aria-hidden="true">#</a> 关系型数据库介绍</h3>
<p>顾名思义，关系型数据库就是一种建立在关系模型的基础上的数据库。关系模型表明了数据库中所存储的数据之间的联系（一对一、一对多、多对多）。</p>
<p>关系型数据库中，我们的数据都被存放在了各种表中（比如用户表），表中的每一行就存放着一条数据（比如一个用户的信息）。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/5e3c1a71724a38245aa43b02_99bf70d46cc247be878de9d3a88f0c44.png" alt="" loading="lazy"></p>
<p>大部分关系型数据库都使用 SQL 来操作数据库中的数据。并且，大部分关系型数据库都支持事务的四大特性(ACID)。</p>
<p><strong>有哪些常见的关系型数据库呢？</strong></p>
<p>MySQL、PostgreSQL、Oracle、SQL Server、SQLite（微信本地的聊天记录的存储就是用的 SQLite） ......。</p>
<h3 id="mysql-介绍" tabindex="-1"><a class="header-anchor" href="#mysql-介绍" aria-hidden="true">#</a> MySQL 介绍</h3>
<p><img src="https://img-blog.csdnimg.cn/20210327143351823.png" alt="" loading="lazy"></p>
<p><strong>MySQL 是一种关系型数据库，主要用于持久化存储我们的系统中的一些数据比如用户信息。</strong></p>
<p>由于 MySQL 是开源免费并且比较成熟的数据库，因此，MySQL 被大量使用在各种系统中。任何人都可以在 GPL(General Public License) 的许可下下载并根据个性化的需要对其进行修改。MySQL 的默认端口号是<strong>3306</strong>。</p>
<h2 id="mysql-基础架构" tabindex="-1"><a class="header-anchor" href="#mysql-基础架构" aria-hidden="true">#</a> MySQL 基础架构</h2>
<p>下图是 MySQL 的一个简要架构图，从下图你可以很清晰的看到客户端的一条 SQL 语句在 MySQL 内部是如何执行的。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/13526879-3037b144ed09eb88.png" alt="" loading="lazy"></p>
<p>从上图可以看出， MySQL 主要由下面几部分构成：</p>
<ul>
<li><strong>连接器：</strong> 身份认证和权限相关(登录 MySQL 的时候)。</li>
<li><strong>查询缓存：</strong> 执行查询语句的时候，会先查询缓存（MySQL 8.0 版本后移除，因为这个功能不太实用）。</li>
<li><strong>分析器：</strong> 没有命中缓存的话，SQL 语句就会经过分析器，分析器说白了就是要先看你的 SQL 语句要干嘛，再检查你的 SQL 语句语法是否正确。</li>
<li><strong>优化器：</strong> 按照 MySQL 认为最优的方案去执行。</li>
<li><strong>执行器：</strong> 执行语句，然后从存储引擎返回数据。 执行语句之前会先判断是否有权限，如果没有权限的话，就会报错。</li>
<li><strong>插件式存储引擎</strong> ： 主要负责数据的存储和读取，采用的是插件式架构，支持 InnoDB、MyISAM、Memory 等多种存储引擎。</li>
</ul>
<h2 id="mysql-存储引擎" tabindex="-1"><a class="header-anchor" href="#mysql-存储引擎" aria-hidden="true">#</a> MySQL 存储引擎</h2>
<p>MySQL 核心在于存储引擎，想要深入学习 MySQL，必定要深入研究 MySQL 存储引擎。</p>
<h3 id="mysql-支持哪些存储引擎-默认使用哪个" tabindex="-1"><a class="header-anchor" href="#mysql-支持哪些存储引擎-默认使用哪个" aria-hidden="true">#</a> MySQL 支持哪些存储引擎？默认使用哪个？</h3>
<p>MySQL 支持多种存储引擎，你可以通过 <code v-pre>show engines</code> 命令来查看 MySQL 支持的所有存储引擎。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/mysql/image-20220510105408703.png" alt="查看 MySQL 提供的所有存储引擎" loading="lazy"></p>
<p>从上图我们可以查看出， MySQL 当前默认的存储引擎是 InnoDB。并且，所有的存储引擎中只有 InnoDB 是事务性存储引擎，也就是说只有 InnoDB 支持事务。</p>
<p>我这里使用的 MySQL 版本是 8.x，不同的 MySQL 版本之间可能会有差别。</p>
<p>MySQL 5.5.5 之前，MyISAM 是 MySQL 的默认存储引擎。5.5.5 版本之后，InnoDB 是 MySQL 的默认存储引擎。</p>
<p>你可以通过 <code v-pre>select version()</code> 命令查看你的 MySQL 版本。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> mysql<span class="token operator">></span> <span class="token keyword">select</span> version<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
+-----------+
<span class="token operator">|</span> version<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">|</span>
+-----------+
<span class="token operator">|</span> <span class="token number">8.0</span>.27    <span class="token operator">|</span>
+-----------+
<span class="token number">1</span> row <span class="token keyword">in</span> <span class="token builtin class-name">set</span> <span class="token punctuation">(</span><span class="token number">0.00</span> sec<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以通过 <code v-pre>show variables like '%storage_engine%'</code> 命令直接查看 MySQL 当前默认的存储引擎。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/mysql/image-20220510105837786.png" alt="查看 MySQL 当前默认的存储引擎" loading="lazy"></p>
<p>如果你只想查看数据库中某个表使用的存储引擎的话，可以使用 <code v-pre>show table status from db_name where name='table_name'</code>命令。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/mysql/image-20220510110549140.png" alt="查看表的存储引擎" loading="lazy"></p>
<p>如果你想要深入了解每个存储引擎以及它们之间的区别，推荐你去阅读以下 MySQL 官方文档对应的介绍(面试不会问这么细，了解即可)：</p>
<ul>
<li>InnoDB 存储引擎详细介绍：<a href="https://dev.mysql.com/doc/refman/8.0/en/innodb-storage-engine.html" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/doc/refman/8.0/en/innodb-storage-engine.html<ExternalLinkIcon/></a> 。</li>
<li>其他存储引擎详细介绍：<a href="https://dev.mysql.com/doc/refman/8.0/en/storage-engines.html" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/doc/refman/8.0/en/storage-engines.html<ExternalLinkIcon/></a> 。</li>
</ul>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/mysql/image-20220510155143458.png" alt="" loading="lazy"></p>
<h3 id="mysql-存储引擎架构了解吗" tabindex="-1"><a class="header-anchor" href="#mysql-存储引擎架构了解吗" aria-hidden="true">#</a> MySQL 存储引擎架构了解吗？</h3>
<p>MySQL 存储引擎采用的是插件式架构，支持多种存储引擎，我们甚至可以为不同的数据库表设置不同的存储引擎以适应不同场景的需要。<strong>存储引擎是基于表的，而不是数据库。</strong></p>
<p>并且，你还可以根据 MySQL 定义的存储引擎实现标准接口来编写一个属于自己的存储引擎。这些非官方提供的存储引擎可以称为第三方存储引擎，区别于官方存储引擎。像目前最常用的 InnoDB 其实刚开始就是一个第三方存储引擎，后面由于过于优秀，其被 Oracle 直接收购了。</p>
<p>MySQL 官方文档也有介绍到如何编写一个自定义存储引擎，地址：<a href="https://dev.mysql.com/doc/internals/en/custom-engine.html" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/doc/internals/en/custom-engine.html<ExternalLinkIcon/></a> 。</p>
<h3 id="myisam-和-innodb-的区别是什么" tabindex="-1"><a class="header-anchor" href="#myisam-和-innodb-的区别是什么" aria-hidden="true">#</a> MyISAM 和 InnoDB 的区别是什么？</h3>
<p><img src="https://img-blog.csdnimg.cn/20210327145248960.png" alt="" loading="lazy"></p>
<p>MySQL 5.5 之前，MyISAM 引擎是 MySQL 的默认存储引擎，可谓是风光一时。</p>
<p>虽然，MyISAM 的性能还行，各种特性也还不错（比如全文索引、压缩、空间函数等）。但是，MyISAM 不支持事务和行级锁，而且最大的缺陷就是崩溃后无法安全恢复。</p>
<p>MySQL 5.5.5 之前，MyISAM 是 MySQL 的默认存储引擎。5.5.5 版本之后，InnoDB 是 MySQL 的默认存储引擎。</p>
<p>言归正传！咱们下面还是来简单对比一下两者：</p>
<p><strong>1.是否支持行级锁</strong></p>
<p>MyISAM 只有表级锁(table-level locking)，而 InnoDB 支持行级锁(row-level locking)和表级锁,默认为行级锁。</p>
<p>也就说，MyISAM 一锁就是锁住了整张表，这在并发写的情况下是多么滴憨憨啊！这也是为什么 InnoDB 在并发写的时候，性能更牛皮了！</p>
<p><strong>2.是否支持事务</strong></p>
<p>MyISAM 不提供事务支持。</p>
<p>InnoDB 提供事务支持，实现了 SQL 标准定义了四个隔离级别，具有提交(commit)和回滚(rollback)事务的能力。并且，InnoDB 默认使用的 REPEATABLE-READ（可重读）隔离级别是可以解决幻读问题发生的（基于 MVCC 和 Next-Key Lock）。</p>
<p>关于 MySQL 事务的详细介绍，可以看看我写的这篇文章：<a href="https://javaguide.cn/database/mysql/transaction-isolation-level.html" target="_blank" rel="noopener noreferrer">MySQL 事务隔离级别详解<ExternalLinkIcon/></a>。</p>
<p><strong>3.是否支持外键</strong></p>
<p>MyISAM 不支持，而 InnoDB 支持。</p>
<p>外键对于维护数据一致性非常有帮助，但是对性能有一定的损耗。因此，通常情况下，我们是不建议在实际生产项目中使用外键的，在业务代码中进行约束即可！</p>
<p>阿里的《Java 开发手册》也是明确规定禁止使用外键的。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/mysql/image-20220510090309427.png" alt="" loading="lazy"></p>
<p>不过，在代码中进行约束的话，对程序员的能力要求更高，具体是否要采用外键还是要根据你的项目实际情况而定。</p>
<p>总结：一般我们也是不建议在数据库层面使用外键的，应用层面可以解决。不过，这样会对数据的一致性造成威胁。具体要不要使用外键还是要根据你的项目来决定。</p>
<p><strong>4.是否支持数据库异常崩溃后的安全恢复</strong></p>
<p>MyISAM 不支持，而 InnoDB 支持。</p>
<p>使用 InnoDB 的数据库在异常崩溃后，数据库重新启动的时候会保证数据库恢复到崩溃前的状态。这个恢复的过程依赖于 <code v-pre>redo log</code> 。</p>
<p><strong>5.是否支持 MVCC</strong></p>
<p>MyISAM 不支持，而 InnoDB 支持。</p>
<p>讲真，这个对比有点废话，毕竟 MyISAM 连行级锁都不支持。MVCC 可以看作是行级锁的一个升级，可以有效减少加锁操作，提高性能。</p>
<p><strong>6.索引实现不一样。</strong></p>
<p>虽然 MyISAM 引擎和 InnoDB 引擎都是使用 B+Tree 作为索引结构，但是两者的实现方式不太一样。</p>
<p>InnoDB 引擎中，其数据文件本身就是索引文件。相比 MyISAM，索引文件和数据文件是分离的，其表数据文件本身就是按 B+Tree 组织的一个索引结构，树的叶节点 data 域保存了完整的数据记录。</p>
<p>详细区别，推荐你看看我写的这篇文章：<a href="https://javaguide.cn/database/mysql/mysql-index.html" target="_blank" rel="noopener noreferrer">MySQL 索引详解<ExternalLinkIcon/></a>。</p>
<h3 id="myisam-和-innodb-如何选择" tabindex="-1"><a class="header-anchor" href="#myisam-和-innodb-如何选择" aria-hidden="true">#</a> MyISAM 和 InnoDB 如何选择？</h3>
<p>大多数时候我们使用的都是 InnoDB 存储引擎，在某些读密集的情况下，使用 MyISAM 也是合适的。不过，前提是你的项目不介意 MyISAM 不支持事务、崩溃恢复等缺点（可是~我们一般都会介意啊！）。</p>
<p>《MySQL 高性能》上面有一句话这样写到:</p>
<blockquote>
<p>不要轻易相信“MyISAM 比 InnoDB 快”之类的经验之谈，这个结论往往不是绝对的。在很多我们已知场景中，InnoDB 的速度都可以让 MyISAM 望尘莫及，尤其是用到了聚簇索引，或者需要访问的数据都可以放入内存的应用。</p>
</blockquote>
<p>一般情况下我们选择 InnoDB 都是没有问题的，但是某些情况下你并不在乎可扩展能力和并发能力，也不需要事务支持，也不在乎崩溃后的安全恢复问题的话，选择 MyISAM 也是一个不错的选择。但是一般情况下，我们都是需要考虑到这些问题的。</p>
<p>因此，对于咱们日常开发的业务系统来说，你几乎找不到什么理由再使用 MyISAM 作为自己的 MySQL 数据库的存储引擎。</p>
<h2 id="mysql-查询缓存" tabindex="-1"><a class="header-anchor" href="#mysql-查询缓存" aria-hidden="true">#</a> MySQL 查询缓存</h2>
<p>执行查询语句的时候，会先查询缓存。不过，MySQL 8.0 版本后移除，因为这个功能不太实用</p>
<p><code v-pre>my.cnf</code> 加入以下配置，重启 MySQL 开启查询缓存</p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">query_cache_type</span><span class="token punctuation">=</span><span class="token value attr-value">1</span>
<span class="token key attr-name">query_cache_size</span><span class="token punctuation">=</span><span class="token value attr-value">600000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>MySQL 执行以下命令也可以开启查询缓存</p>
<div class="language-properties ext-properties line-numbers-mode"><pre v-pre class="language-properties"><code><span class="token key attr-name">set</span> <span class="token value attr-value">global  query_cache_type=1;</span>
<span class="token key attr-name">set</span> <span class="token value attr-value">global  query_cache_size=600000;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如上，<strong>开启查询缓存后在同样的查询条件以及数据情况下，会直接在缓存中返回结果</strong>。这里的查询条件包括查询本身、当前要查询的数据库、客户端协议版本号等一些可能影响结果的信息。（<strong>查询缓存不命中的情况：（1）</strong>）因此任何两个查询在任何字符上的不同都会导致缓存不命中。此外，（<strong>查询缓存不命中的情况：（2）</strong>）如果查询中包含任何用户自定义函数、存储函数、用户变量、临时表、MySQL 库中的系统表，其查询结果也不会被缓存。</p>
<p>（<strong>查询缓存不命中的情况：（3）</strong>）<strong>缓存建立之后</strong>，MySQL 的查询缓存系统会跟踪查询中涉及的每张表，如果这些表（数据或结构）发生变化，那么和这张表相关的所有缓存数据都将失效。</p>
<p><strong>缓存虽然能够提升数据库的查询性能，但是缓存同时也带来了额外的开销，每次查询后都要做一次缓存操作，失效后还要销毁。</strong> 因此，开启查询缓存要谨慎，尤其对于写密集的应用来说更是如此。如果开启，要注意合理控制缓存空间大小，一般来说其大小设置为几十 MB 比较合适。此外，<strong>还可以通过 sql_cache 和 sql_no_cache 来控制某个查询语句是否需要缓存：</strong></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">select</span> sql_no_cache <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> usr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="mysql-事务" tabindex="-1"><a class="header-anchor" href="#mysql-事务" aria-hidden="true">#</a> MySQL 事务</h2>
<h3 id="何谓事务" tabindex="-1"><a class="header-anchor" href="#何谓事务" aria-hidden="true">#</a> 何谓事务？</h3>
<p>我们设想一个场景，这个场景中我们需要插入多条相关联的数据到数据库，不幸的是，这个过程可能会遇到下面这些问题：</p>
<ul>
<li>数据库中途突然因为某些原因挂掉了。</li>
<li>客户端突然因为网络原因连接不上数据库了。</li>
<li>并发访问数据库时，多个线程同时写入数据库，覆盖了彼此的更改。</li>
<li>......</li>
</ul>
<p>上面的任何一个问题都可能会导致数据的不一致性。为了保证数据的一致性，系统必须能够处理这些问题。事务就是我们抽象出来简化这些问题的首选机制。事务的概念起源于数据库，目前，已经成为一个比较广泛的概念。</p>
<p><strong>何为事务？</strong> 一言蔽之，<strong>事务是逻辑上的一组操作，要么都执行，要么都不执行。</strong></p>
<p>事务最经典也经常被拿出来说例子就是转账了。假如小明要给小红转账 1000 元，这个转账会涉及到两个关键操作，这两个操作必须都成功或者都失败。</p>
<ol>
<li>将小明的余额减少 1000 元</li>
<li>将小红的余额增加 1000 元。</li>
</ol>
<p>事务会把这两个操作就可以看成逻辑上的一个整体，这个整体包含的操作要么都成功，要么都要失败。这样就不会出现小明余额减少而小红的余额却并没有增加的情况。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/mysql/事务示意图.png" alt="事务示意图" loading="lazy"></p>
<h3 id="何谓数据库事务" tabindex="-1"><a class="header-anchor" href="#何谓数据库事务" aria-hidden="true">#</a> 何谓数据库事务？</h3>
<p>大多数情况下，我们在谈论事务的时候，如果没有特指<strong>分布式事务</strong>，往往指的就是<strong>数据库事务</strong>。</p>
<p>数据库事务在我们日常开发中接触的最多了。如果你的项目属于单体架构的话，你接触到的往往就是数据库事务了。</p>
<p><strong>那数据库事务有什么作用呢？</strong></p>
<p>简单来说，数据库事务可以保证多个对数据库的操作（也就是 SQL 语句）构成一个逻辑上的整体。构成这个逻辑上的整体的这些数据库操作遵循：<strong>要么全部执行成功,要么全部不执行</strong> 。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment"># 开启一个事务</span>
<span class="token keyword">START</span> <span class="token keyword">TRANSACTION</span><span class="token punctuation">;</span>
<span class="token comment"># 多条 SQL 语句</span>
SQL1<span class="token punctuation">,</span>SQL2<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token comment">## 提交事务</span>
<span class="token keyword">COMMIT</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/mysql/数据库事务示意图.png" alt="数据库事务示意图" loading="lazy"></p>
<p>另外，关系型数据库（例如：<code v-pre>MySQL</code>、<code v-pre>SQL Server</code>、<code v-pre>Oracle</code> 等）事务都有 <strong>ACID</strong> 特性：</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/mysql/ACID.png" alt="ACID" loading="lazy"></p>
<ol>
<li><strong>原子性</strong>（<code v-pre>Atomicity</code>） ： 事务是最小的执行单位，不允许分割。事务的原子性确保动作要么全部完成，要么完全不起作用；</li>
<li><strong>一致性</strong>（<code v-pre>Consistency</code>）： 执行事务前后，数据保持一致，例如转账业务中，无论事务是否成功，转账者和收款人的总额应该是不变的；</li>
<li><strong>隔离性</strong>（<code v-pre>Isolation</code>）： 并发访问数据库时，一个用户的事务不被其他事务所干扰，各并发事务之间数据库是独立的；</li>
<li><strong>持久性</strong>（<code v-pre>Durabilily</code>）： 一个事务被提交之后。它对数据库中数据的改变是持久的，即使数据库发生故障也不应该对其有任何影响。</li>
</ol>
<p>🌈 这里要额外补充一点：<strong>只有保证了事务的持久性、原子性、隔离性之后，一致性才能得到保障。也就是说 A、I、D 是手段，C 是目的！</strong> 想必大家也和我一样，被 ACID 这个概念被误导了很久! 我也是看周志明老师的公开课<a href="https://time.geekbang.org/opencourse/intro/100064201" target="_blank" rel="noopener noreferrer">《周志明的软件架构课》<ExternalLinkIcon/></a>才搞清楚的（多看好书！！！）。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/mysql/AID-&gt;C.png" alt="AID-&gt;C" loading="lazy"></p>
<p>另外，DDIA 也就是 <a href="https://book.douban.com/subject/30329536/" target="_blank" rel="noopener noreferrer">《Designing Data-Intensive Application（数据密集型应用系统设计）》<ExternalLinkIcon/></a> 的作者在他的这本书中如是说：</p>
<blockquote>
<p>Atomicity, isolation, and durability are properties of the database, whereas consis‐
tency (in the ACID sense) is a property of the application. The application may rely
on the database’s atomicity and isolation properties in order to achieve consistency,
but it’s not up to the database alone.</p>
<p>翻译过来的意思是：原子性，隔离性和持久性是数据库的属性，而一致性（在 ACID 意义上）是应用程序的属性。应用可能依赖数据库的原子性和隔离属性来实现一致性，但这并不仅取决于数据库。因此，字母 C 不属于 ACID 。</p>
</blockquote>
<p>《Designing Data-Intensive Application（数据密集型应用系统设计）》这本书强推一波，值得读很多遍！豆瓣有接近 90% 的人看了这本书之后给了五星好评。另外，中文翻译版本已经在 Github 开源，地址：<a href="https://github.com/Vonng/ddia" target="_blank" rel="noopener noreferrer">https://github.com/Vonng/ddia<ExternalLinkIcon/></a> 。</p>
<p><img src="https://img-blog.csdnimg.cn/20210526162552353.png" alt="" loading="lazy"></p>
<h3 id="并发事务带来了哪些问题" tabindex="-1"><a class="header-anchor" href="#并发事务带来了哪些问题" aria-hidden="true">#</a> 并发事务带来了哪些问题?</h3>
<p>在典型的应用程序中，多个事务并发运行，经常会操作相同的数据来完成各自的任务（多个用户对同一数据进行操作）。并发虽然是必须的，但可能会导致以下的问题。</p>
<ul>
<li><strong>脏读（Dirty read）:</strong> 当一个事务正在访问数据并且对数据进行了修改，而这种修改还没有提交到数据库中，这时另外一个事务也访问了这个数据，然后使用了这个数据。因为这个数据是还没有提交的数据，那么另外一个事务读到的这个数据是“脏数据”，依据“脏数据”所做的操作可能是不正确的。</li>
<li><strong>丢失修改（Lost to modify）:</strong> 指在一个事务读取一个数据时，另外一个事务也访问了该数据，那么在第一个事务中修改了这个数据后，第二个事务也修改了这个数据。这样第一个事务内的修改结果就被丢失，因此称为丢失修改。 例如：事务 1 读取某表中的数据 A=20，事务 2 也读取 A=20，事务 1 修改 A=A-1，事务 2 也修改 A=A-1，最终结果 A=19，事务 1 的修改被丢失。</li>
<li><strong>不可重复读（Unrepeatable read）:</strong> 指在一个事务内多次读同一数据。在这个事务还没有结束时，另一个事务也访问该数据。那么，在第一个事务中的两次读数据之间，由于第二个事务的修改导致第一个事务两次读取的数据可能不太一样。这就发生了在一个事务内两次读到的数据是不一样的情况，因此称为不可重复读。</li>
<li><strong>幻读（Phantom read）:</strong> 幻读与不可重复读类似。它发生在一个事务（T1）读取了几行数据，接着另一个并发事务（T2）插入了一些数据时。在随后的查询中，第一个事务（T1）就会发现多了一些原本不存在的记录，就好像发生了幻觉一样，所以称为幻读。</li>
</ul>
<p><strong>不可重复读和幻读区别</strong> ：不可重复读的重点是修改比如多次读取一条记录发现其中某些列的值被修改，幻读的重点在于新增或者删除比如多次查询同一条查询语句（DQL）时，记录发现记录增多或减少了。</p>
<h3 id="sql-标准定义了哪些事务隔离级别" tabindex="-1"><a class="header-anchor" href="#sql-标准定义了哪些事务隔离级别" aria-hidden="true">#</a> SQL 标准定义了哪些事务隔离级别?</h3>
<p>SQL 标准定义了四个隔离级别：</p>
<ul>
<li><strong>READ-UNCOMMITTED(读取未提交)</strong> ： 最低的隔离级别，允许读取尚未提交的数据变更，可能会导致脏读、幻读或不可重复读。</li>
<li><strong>READ-COMMITTED(读取已提交)</strong> ： 允许读取并发事务已经提交的数据，可以阻止脏读，但是幻读或不可重复读仍有可能发生。</li>
<li><strong>REPEATABLE-READ(可重复读)</strong> ： 对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，可以阻止脏读和不可重复读，但幻读仍有可能发生。</li>
<li><strong>SERIALIZABLE(可串行化)</strong> ： 最高的隔离级别，完全服从 ACID 的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，该级别可以防止脏读、不可重复读以及幻读。</li>
</ul>
<hr>
<table>
<thead>
<tr>
<th style="text-align:center">隔离级别</th>
<th style="text-align:center">脏读</th>
<th style="text-align:center">不可重复读</th>
<th style="text-align:center">幻读</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">READ-UNCOMMITTED</td>
<td style="text-align:center">√</td>
<td style="text-align:center">√</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center">READ-COMMITTED</td>
<td style="text-align:center">×</td>
<td style="text-align:center">√</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center">REPEATABLE-READ</td>
<td style="text-align:center">×</td>
<td style="text-align:center">×</td>
<td style="text-align:center">√</td>
</tr>
<tr>
<td style="text-align:center">SERIALIZABLE</td>
<td style="text-align:center">×</td>
<td style="text-align:center">×</td>
<td style="text-align:center">×</td>
</tr>
</tbody>
</table>
<h3 id="mysql-的隔离级别是基于锁实现的吗" tabindex="-1"><a class="header-anchor" href="#mysql-的隔离级别是基于锁实现的吗" aria-hidden="true">#</a> MySQL 的隔离级别是基于锁实现的吗？</h3>
<p>MySQL 的隔离级别基于锁和 MVCC 机制共同实现的。</p>
<p>SERIALIZABLE 隔离级别，是通过锁来实现的。除了 SERIALIZABLE 隔离级别，其他的隔离级别都是基于 MVCC 实现。</p>
<p>不过， SERIALIZABLE 之外的其他隔离级别可能也需要用到锁机制，就比如 REPEATABLE-READ 在当前读情况下需要使用加锁读来保证不会出现幻读。</p>
<h3 id="mysql-的默认隔离级别是什么" tabindex="-1"><a class="header-anchor" href="#mysql-的默认隔离级别是什么" aria-hidden="true">#</a> MySQL 的默认隔离级别是什么?</h3>
<p>MySQL InnoDB 存储引擎的默认支持的隔离级别是 <strong>REPEATABLE-READ（可重读）</strong>。我们可以通过<code v-pre>SELECT @@tx_isolation;</code>命令来查看，MySQL 8.0 该命令改为<code v-pre>SELECT @@transaction_isolation;</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> @<span class="token variable">@tx_isolation</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
<span class="token operator">|</span> @<span class="token variable">@tx_isolation</span>  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
<span class="token operator">|</span> <span class="token keyword">REPEATABLE</span><span class="token operator">-</span><span class="token keyword">READ</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于 MySQL 事务隔离级别的详细介绍，可以看看我写的这篇文章：<a href="https://javaguide.cn/database/mysql/transaction-isolation-level.html" target="_blank" rel="noopener noreferrer">MySQL 事务隔离级别详解<ExternalLinkIcon/></a>。</p>
<h2 id="mysql-锁" tabindex="-1"><a class="header-anchor" href="#mysql-锁" aria-hidden="true">#</a> MySQL 锁</h2>
<h3 id="表级锁和行级锁了解吗-有什么区别" tabindex="-1"><a class="header-anchor" href="#表级锁和行级锁了解吗-有什么区别" aria-hidden="true">#</a> 表级锁和行级锁了解吗？有什么区别？</h3>
<p>MyISAM 仅仅支持表级锁(table-level locking)，一锁就锁整张表，这在并发写的情况下性非常差。</p>
<p>InnoDB 不光支持表级锁(table-level locking)，还支持行级锁(row-level locking)，默认为行级锁。行级锁的粒度更小，仅对相关的记录上锁即可（对一行或者多行记录加锁），所以对于并发写入操作来说， InnoDB 的性能更高。</p>
<p><strong>表级锁和行级锁对比</strong> ：</p>
<ul>
<li><strong>表级锁：</strong> MySQL 中锁定粒度最大的一种锁，是针对非索引字段加的锁，对当前操作的整张表加锁，实现简单，资源消耗也比较少，加锁快，不会出现死锁。其锁定粒度最大，触发锁冲突的概率最高，并发度最低，MyISAM 和 InnoDB 引擎都支持表级锁。</li>
<li><strong>行级锁：</strong> MySQL 中锁定粒度最小的一种锁，是针对索引字段加的锁，只针对当前操作的记录进行加锁。 行级锁能大大减少数据库操作的冲突。其加锁粒度最小，并发度高，但加锁的开销也最大，加锁慢，会出现死锁。</li>
</ul>
<h3 id="行级锁的使用有什么注意事项" tabindex="-1"><a class="header-anchor" href="#行级锁的使用有什么注意事项" aria-hidden="true">#</a> 行级锁的使用有什么注意事项？</h3>
<p>InnoDB 的行锁是针对索引字段加的锁，表级锁是针对非索引字段加的锁。当我们执行 <code v-pre>UPDATE</code>、<code v-pre>DELETE</code> 语句时，如果 <code v-pre>WHERE</code>条件中字段没有命中索引或者索引失效的话，就会导致扫描全表对表中的所有记录进行加锁。这个在我们日常工作开发中经常会遇到，一定要多多注意！！！</p>
<p>不过，很多时候即使用了索引也有可能会走全表扫描，这是因为 MySQL 优化器的原因。</p>
<h3 id="共享锁和排他锁呢" tabindex="-1"><a class="header-anchor" href="#共享锁和排他锁呢" aria-hidden="true">#</a> 共享锁和排他锁呢？</h3>
<p>不论是表级锁还是行级锁，都存在共享锁（Share Lock，S 锁）和排他锁（Exclusive Lock，X 锁）这两类：</p>
<ul>
<li><strong>共享锁（S 锁）</strong> ：又称读锁，事务在读取记录的时候获取共享锁，允许多个事务同时获取（锁兼容）。</li>
<li><strong>排他锁（X 锁）</strong> ：又称写锁/独占锁，事务在修改记录的时候获取排他锁，不允许多个事务同时获取。如果一个记录已经被加了排他锁，那其他事务不能再对这条事务加任何类型的锁（锁不兼容）。</li>
</ul>
<p>排他锁与任何的锁都不兼容，共享锁仅和共享锁兼容。</p>
<table>
<thead>
<tr>
<th style="text-align:left"></th>
<th style="text-align:left">S 锁</th>
<th style="text-align:left">X 锁</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">S 锁</td>
<td style="text-align:left">不冲突</td>
<td style="text-align:left">冲突</td>
</tr>
<tr>
<td style="text-align:left">X 锁</td>
<td style="text-align:left">冲突</td>
<td style="text-align:left">冲突</td>
</tr>
</tbody>
</table>
<p>由于 MVCC 的存在，对于一般的 <code v-pre>SELECT</code> 语句，InnoDB 不会加任何锁。不过， 你可以通过以下语句显式加共享锁或排他锁。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token comment"># 共享锁</span>
<span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">LOCK</span> <span class="token operator">IN</span> <span class="token keyword">SHARE</span> <span class="token keyword">MODE</span><span class="token punctuation">;</span>
<span class="token comment"># 排他锁</span>
<span class="token keyword">SELECT</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token keyword">FOR</span> <span class="token keyword">UPDATE</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="意向锁有什么作用" tabindex="-1"><a class="header-anchor" href="#意向锁有什么作用" aria-hidden="true">#</a> 意向锁有什么作用？</h3>
<p>如果需要用到表锁的话，如何判断表中的记录没有行锁呢？一行一行遍历肯定是不行，性能太差。我们需要用到一个叫做意向锁的东东来快速判断是否可以对某个表使用表锁。</p>
<p>意向锁是表级锁，共有两种：</p>
<ul>
<li><strong>意向共享锁（Intention Shared Lock，IS 锁）</strong>：事务有意向对表中的某些加共享锁（S 锁），加共享锁前必须先取得该表的 IS 锁。</li>
<li><strong>意向排他锁（Intention Exclusive Lock，IX 锁）</strong>：事务有意向对表中的某些记录加排他锁（X 锁），加排他锁之前必须先取得该表的 IX 锁。</li>
</ul>
<p>意向锁是有数据引擎自己维护的，用户无法手动操作意向锁，在为数据行加共享 / 排他锁之前，InooDB 会先获取该数据行所在在数据表的对应意向锁。</p>
<p>意向锁之间是互相兼容的。</p>
<table>
<thead>
<tr>
<th></th>
<th>IS 锁</th>
<th>IX 锁</th>
</tr>
</thead>
<tbody>
<tr>
<td>IS 锁</td>
<td>兼容</td>
<td>兼容</td>
</tr>
<tr>
<td>IX 锁</td>
<td>兼容</td>
<td>兼容</td>
</tr>
</tbody>
</table>
<p>意向锁和共享锁和排它锁互斥（这里指的是表级别的共享锁和排他锁，意向锁不会与行级的共享锁和排他锁互斥）。</p>
<table>
<thead>
<tr>
<th></th>
<th>IS 锁</th>
<th>IX 锁</th>
</tr>
</thead>
<tbody>
<tr>
<td>S 锁</td>
<td>兼容</td>
<td>互斥</td>
</tr>
<tr>
<td>X 锁</td>
<td>互斥</td>
<td>互斥</td>
</tr>
</tbody>
</table>
<p>《MySQL 技术内幕 InnoDB 存储引擎》这本书对应的描述应该是笔误了。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/mysql/image-20220511171419081.png" alt="" loading="lazy"></p>
<h3 id="innodb-有哪几类行锁" tabindex="-1"><a class="header-anchor" href="#innodb-有哪几类行锁" aria-hidden="true">#</a> InnoDB 有哪几类行锁？</h3>
<p>MySQL InnoDB 支持三种行锁定方式：</p>
<ul>
<li><strong>记录锁（Record Lock）</strong> ：也被称为记录锁，属于单个行记录上的锁。</li>
<li><strong>间隙锁（Gap Lock）</strong> ：锁定一个范围，不包括记录本身。</li>
<li><strong>临键锁（Next-key Lock）</strong> ：Record Lock+Gap Lock，锁定一个范围，包含记录本身。记录锁只能锁住已经存在的记录，为了避免插入新记录，需要依赖间隙锁。</li>
</ul>
<p>InnoDB 的默认隔离级别 REPEATABLE-READ（可重读）是可以解决幻读问题发生的，主要有下面两种情况：</p>
<ul>
<li><strong>快照读</strong> ：由 MVCC 机制来保证不出现幻读。</li>
<li><strong>当前读</strong> ： 使用 Next-Key Lock 进行加锁来保证不出现幻读。</li>
</ul>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>《高性能 MySQL》第 7 章 MySQL 高级特性</li>
<li>《MySQL 技术内幕 InnoDB 存储引擎》第 6 章 锁</li>
<li>Relational Database：<a href="https://www.omnisci.com/technical-glossary/relational-database" target="_blank" rel="noopener noreferrer">https://www.omnisci.com/technical-glossary/relational-database<ExternalLinkIcon/></a></li>
<li>技术分享 | 隔离级别：正确理解幻读：<a href="https://opensource.actionsky.com/20210818-mysql/" target="_blank" rel="noopener noreferrer">https://opensource.actionsky.com/20210818-mysql/<ExternalLinkIcon/></a></li>
<li>MySQL Server Logs - MySQL 5.7 Reference Manual：<a href="https://dev.mysql.com/doc/refman/5.7/en/server-logs.html" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/doc/refman/5.7/en/server-logs.html<ExternalLinkIcon/></a></li>
<li>Redo Log - MySQL 5.7 Reference Manual：<a href="https://dev.mysql.com/doc/refman/5.7/en/innodb-redo-log.html" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/doc/refman/5.7/en/innodb-redo-log.html<ExternalLinkIcon/></a></li>
<li>深入理解数据库行锁与表锁 <a href="https://zhuanlan.zhihu.com/p/52678870" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/52678870<ExternalLinkIcon/></a></li>
<li>详解 MySQL InnoDB 中意向锁的作用：<a href="https://juejin.cn/post/6844903666332368909" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903666332368909<ExternalLinkIcon/></a></li>
</ul>
</div></template>
