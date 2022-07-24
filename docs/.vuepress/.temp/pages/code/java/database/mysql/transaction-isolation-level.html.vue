<template><div><blockquote>
<p>本文由 <a href="https://github.com/Snailclimb" target="_blank" rel="noopener noreferrer">SnailClimb<ExternalLinkIcon/></a> 和 <a href="https://github.com/guang19" target="_blank" rel="noopener noreferrer">guang19<ExternalLinkIcon/></a> 共同完成。</p>
</blockquote>
<h2 id="事务隔离级别-图文详解" tabindex="-1"><a class="header-anchor" href="#事务隔离级别-图文详解" aria-hidden="true">#</a> 事务隔离级别(图文详解)</h2>
<h3 id="什么是事务" tabindex="-1"><a class="header-anchor" href="#什么是事务" aria-hidden="true">#</a> 什么是事务?</h3>
<p>事务是逻辑上的一组操作，要么都执行，要么都不执行。</p>
<p>事务最经典也经常被拿出来说例子就是转账了。假如小明要给小红转账 1000 元，这个转账会涉及到两个关键操作就是：将小明的余额减少 1000 元，将小红的余额增加 1000 元。万一在这两个操作之间突然出现错误比如银行系统崩溃，导致小明余额减少而小红的余额没有增加，这样就不对了。事务就是保证这两个关键操作要么都成功，要么都要失败。</p>
<h3 id="事务的特性-acid" tabindex="-1"><a class="header-anchor" href="#事务的特性-acid" aria-hidden="true">#</a> 事务的特性(ACID)</h3>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/事务特性.png" alt="事务的特性" loading="lazy"></p>
<ol>
<li><strong>原子性：</strong> 事务是最小的执行单位，不允许分割。事务的原子性确保动作要么全部完成，要么完全不起作用；</li>
<li><strong>一致性：</strong> 执行事务前后，数据保持一致，例如转账业务中，无论事务是否成功，转账者和收款人的总额应该是不变的；</li>
<li><strong>隔离性：</strong> 并发访问数据库时，一个用户的事务不被其他事务所干扰，各并发事务之间数据库是独立的；</li>
<li><strong>持久性：</strong> 一个事务被提交之后。它对数据库中数据的改变是持久的，即使数据库发生故障也不应该对其有任何影响。</li>
</ol>
<h3 id="并发事务带来的问题" tabindex="-1"><a class="header-anchor" href="#并发事务带来的问题" aria-hidden="true">#</a> 并发事务带来的问题</h3>
<p>在典型的应用程序中，多个事务并发运行，经常会操作相同的数据来完成各自的任务（多个用户对统一数据进行操作）。并发虽然是必须的，但可能会导致以下的问题。</p>
<ul>
<li><strong>脏读（Dirty read）:</strong> 当一个事务正在访问数据并且对数据进行了修改，而这种修改还没有提交到数据库中，这时另外一个事务也访问了这个数据，然后使用了这个数据。因为这个数据是还没有提交的数据，那么另外一个事务读到的这个数据是“脏数据”，依据“脏数据”所做的操作可能是不正确的。</li>
<li><strong>丢失修改（Lost to modify）:</strong> 指在一个事务读取一个数据时，另外一个事务也访问了该数据，那么在第一个事务中修改了这个数据后，第二个事务也修改了这个数据。这样第一个事务内的修改结果就被丢失，因此称为丢失修改。 例如：事务 1 读取某表中的数据 A=20，事务 2 也读取 A=20，事务 1 修改 A=A-1，事务 2 也修改 A=A-1，最终结果 A=19，事务 1 的修改被丢失。</li>
<li><strong>不可重复读（Unrepeatableread）:</strong> 指在一个事务内多次读同一数据。在这个事务还没有结束时，另一个事务也访问该数据。那么，在第一个事务中的两次读数据之间，由于第二个事务的修改导致第一个事务两次读取的数据可能不太一样。这就发生了在一个事务内两次读到的数据是不一样的情况，因此称为不可重复读。</li>
<li><strong>幻读（Phantom read）:</strong> 幻读与不可重复读类似。它发生在一个事务（T1）读取了几行数据，接着另一个并发事务（T2）插入了一些数据时。在随后的查询中，第一个事务（T1）就会发现多了一些原本不存在的记录，就好像发生了幻觉一样，所以称为幻读。</li>
</ul>
<p><strong>不可重复度和幻读区别：</strong></p>
<p>不可重复读的重点是修改，幻读的重点在于新增或者删除。</p>
<p>例 1（同样的条件, 你读取过的数据, 再次读取出来发现值不一样了 ）：事务 1 中的 A 先生读取自己的工资为 1000 的操作还没完成，事务 2 中的 B 先生就修改了 A 的工资为 2000，导 致 A 再读自己的工资时工资变为 2000；这就是不可重复读。</p>
<p>例 2（同样的条件, 第 1 次和第 2 次读出来的记录数不一样 ）：假某工资单表中工资大于 3000 的有 4 人，事务 1 读取了所有工资大于 3000 的人，共查到 4 条记录，这时事务 2 又插入了一条工资大于 3000 的记录，事务 1 再次读取时查到的记录就变为了 5 条，这样就导致了幻读。</p>
<h3 id="事务隔离级别" tabindex="-1"><a class="header-anchor" href="#事务隔离级别" aria-hidden="true">#</a> 事务隔离级别</h3>
<p><strong>SQL 标准定义了四个隔离级别：</strong></p>
<ul>
<li><strong>READ-UNCOMMITTED(读取未提交)：</strong> 最低的隔离级别，允许读取尚未提交的数据变更，<strong>可能会导致脏读、幻读或不可重复读</strong>。</li>
<li><strong>READ-COMMITTED(读取已提交)：</strong> 允许读取并发事务已经提交的数据，<strong>可以阻止脏读，但是幻读或不可重复读仍有可能发生</strong>。</li>
<li><strong>REPEATABLE-READ(可重复读)：</strong> 对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，<strong>可以阻止脏读和不可重复读，但幻读仍有可能发生</strong>。</li>
<li><strong>SERIALIZABLE(可串行化)：</strong> 最高的隔离级别，完全服从 ACID 的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，<strong>该级别可以防止脏读、不可重复读以及幻读</strong>。</li>
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
<p>MySQL InnoDB 存储引擎的默认支持的隔离级别是 <strong>REPEATABLE-READ（可重读）</strong>。我们可以通过<code v-pre>SELECT @@tx_isolation;</code>命令来查看，MySQL 8.0 该命令改为<code v-pre>SELECT @@transaction_isolation;</code></p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code>mysql<span class="token operator">></span> <span class="token keyword">SELECT</span> @<span class="token variable">@tx_isolation</span><span class="token punctuation">;</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
<span class="token operator">|</span> @<span class="token variable">@tx_isolation</span>  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
<span class="token operator">|</span> <span class="token keyword">REPEATABLE</span><span class="token operator">-</span><span class="token keyword">READ</span> <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面对 SQL 标准定义了四个隔离级别的介绍可以看出，标准的 SQL 隔离级别定义里，REPEATABLE-READ(可重复读)是不可以防止幻读的。</p>
<p>但是！InnoDB 实现的 REPEATABLE-READ 隔离级别其实是可以解决幻读问题发生的，主要有下面两种情况：</p>
<ul>
<li><strong>快照读</strong> ：由 MVCC 机制来保证不出现幻读。</li>
<li><strong>当前读</strong> ： 使用 Next-Key Lock 进行加锁来保证不出现幻读，Next-Key Lock 是行锁（Record Lock）和间隙锁（Gap Lock）的结合，行锁只能锁住已经存在的行，为了避免插入新行，需要依赖间隙锁。</li>
</ul>
<p>因为隔离级别越低，事务请求的锁越少，所以大部分数据库系统的隔离级别都是 <strong>READ-COMMITTED</strong> ，但是你要知道的是 InnoDB 存储引擎默认使用 <strong>REPEATABLE-READ</strong> 并不会有任何性能损失。</p>
<p>InnoDB 存储引擎在分布式事务的情况下一般会用到 SERIALIZABLE 隔离级别。</p>
<p>《MySQL 技术内幕：InnoDB 存储引擎(第 2 版)》7.7 章这样写到：</p>
<blockquote>
<p>InnoDB 存储引擎提供了对 XA 事务的支持，并通过 XA 事务来支持分布式事务的实现。分布式事务指的是允许多个独立的事务资源（transactional resources）参与到一个全局的事务中。事务资源通常是关系型数据库系统，但也可以是其他类型的资源。全局事务要求在其中的所有参与的事务要么都提交，要么都回滚，这对于事务原有的 ACID 要求又有了提高。另外，在使用分布式事务时，InnoDB 存储引擎的事务隔离级别必须设置为 SERIALIZABLE。</p>
</blockquote>
<h3 id="实际情况演示" tabindex="-1"><a class="header-anchor" href="#实际情况演示" aria-hidden="true">#</a> 实际情况演示</h3>
<p>在下面我会使用 2 个命令行 mysql ，模拟多线程（多事务）对同一份数据的脏读问题。</p>
<p>MySQL 命令行的默认配置中事务都是自动提交的，即执行 SQL 语句后就会马上执行 COMMIT 操作。如果要显式地开启一个事务需要使用命令：<code v-pre>START TRANSACTION</code>。</p>
<p>我们可以通过下面的命令来设置隔离级别。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">SET</span> <span class="token punctuation">[</span><span class="token keyword">SESSION</span><span class="token operator">|</span><span class="token keyword">GLOBAL</span><span class="token punctuation">]</span> <span class="token keyword">TRANSACTION</span> <span class="token keyword">ISOLATION</span> <span class="token keyword">LEVEL</span> <span class="token punctuation">[</span><span class="token keyword">READ</span> <span class="token keyword">UNCOMMITTED</span><span class="token operator">|</span><span class="token keyword">READ</span> <span class="token keyword">COMMITTED</span><span class="token operator">|</span><span class="token keyword">REPEATABLE</span> <span class="token keyword">READ</span><span class="token operator">|</span><span class="token keyword">SERIALIZABLE</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们再来看一下我们在下面实际操作中使用到的一些并发控制语句:</p>
<ul>
<li><code v-pre>START TRANSACTION</code> |<code v-pre>BEGIN</code>：显式地开启一个事务。</li>
<li><code v-pre>COMMIT</code>：提交事务，使得对数据库做的所有修改成为永久性。</li>
<li><code v-pre>ROLLBACK</code>：回滚会结束用户的事务，并撤销正在进行的所有未提交的修改。</li>
</ul>
<h4 id="脏读-读未提交" tabindex="-1"><a class="header-anchor" href="#脏读-读未提交" aria-hidden="true">#</a> 脏读(读未提交)</h4>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-31-1脏读(读未提交)实例.jpg" alt="" loading="lazy"></p>
<h4 id="避免脏读-读已提交" tabindex="-1"><a class="header-anchor" href="#避免脏读-读已提交" aria-hidden="true">#</a> 避免脏读(读已提交)</h4>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-31-2读已提交实例.jpg" alt="" loading="lazy"></p>
<h4 id="不可重复读" tabindex="-1"><a class="header-anchor" href="#不可重复读" aria-hidden="true">#</a> 不可重复读</h4>
<p>还是刚才上面的读已提交的图，虽然避免了读未提交，但是却出现了，一个事务还没有结束，就发生了 不可重复读问题。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-32-1不可重复读实例.jpg" alt="" loading="lazy"></p>
<h4 id="可重复读" tabindex="-1"><a class="header-anchor" href="#可重复读" aria-hidden="true">#</a> 可重复读</h4>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-33-2可重复读.jpg" alt="" loading="lazy"></p>
<h4 id="幻读" tabindex="-1"><a class="header-anchor" href="#幻读" aria-hidden="true">#</a> 幻读</h4>
<h5 id="演示幻读出现的情况" tabindex="-1"><a class="header-anchor" href="#演示幻读出现的情况" aria-hidden="true">#</a> 演示幻读出现的情况</h5>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/database/phantom_read.png" alt="" loading="lazy"></p>
<p>sql 脚本 1 在第一次查询工资为 500 的记录时只有一条，sql 脚本 2 插入了一条工资为 500 的记录，提交之后；sql 脚本 1 在同一个事务中再次使用当前读查询发现出现了两条工资为 500 的记录这种就是幻读。</p>
<p>幻读和不可重复读有些相似之处 ，但是不可重复读的重点是修改，幻读的重点在于新增或者删除。</p>
<h5 id="解决幻读的方法" tabindex="-1"><a class="header-anchor" href="#解决幻读的方法" aria-hidden="true">#</a> 解决幻读的方法</h5>
<p>解决幻读的方式有很多，但是它们的核心思想就是一个事务在操作某张表数据的时候，另外一个事务不允许新增或者删除这张表中的数据了。解决幻读的方式主要有以下几种：</p>
<ol>
<li>将事务隔离级别调整为 <code v-pre>SERIALIZABLE</code></li>
<li>在可重复读的事务级别下，给事务操作的这张表添加表锁</li>
<li>在可重复读的事务级别下，给事务操作的这张表添加 <code v-pre>Next-Key Locks</code></li>
</ol>
<blockquote>
<p>说明：<code v-pre>Next-Key Locks</code> 相当于 行锁 + 间隙锁</p>
</blockquote>
<h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h3>
<ul>
<li>《MySQL 技术内幕：InnoDB 存储引擎》</li>
<li><a href="https://dev.mysql.com/doc/refman/5.7/en/" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/doc/refman/5.7/en/<ExternalLinkIcon/></a></li>
<li><a href="https://tech.youzan.com/seven-questions-about-the-lock-of-mysql/" target="_blank" rel="noopener noreferrer">Mysql 锁：灵魂七拷问<ExternalLinkIcon/></a></li>
<li><a href="https://tech.meituan.com/2014/08/20/innodb-lock.html" target="_blank" rel="noopener noreferrer">Innodb 中的事务隔离级别和锁的关系<ExternalLinkIcon/></a></li>
</ul>
</div></template>
