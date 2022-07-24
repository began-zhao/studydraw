<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p><code v-pre>MySQL</code> 日志 主要包括错误日志、查询日志、慢查询日志、事务日志、二进制日志几大类。其中，比较重要的还要属二进制日志 <code v-pre>binlog</code>（归档日志）和事务日志 <code v-pre>redo log</code>（重做日志）和 <code v-pre>undo log</code>（回滚日志）。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/01.png" alt="" loading="lazy"></p>
<p>今天就来聊聊 <code v-pre>redo log</code>（重做日志）、<code v-pre>binlog</code>（归档日志）、两阶段提交、<code v-pre>undo log</code> （回滚日志）。</p>
<h2 id="redo-log" tabindex="-1"><a class="header-anchor" href="#redo-log" aria-hidden="true">#</a> redo log</h2>
<p><code v-pre>redo log</code>（重做日志）是<code v-pre>InnoDB</code>存储引擎独有的，它让<code v-pre>MySQL</code>拥有了崩溃恢复能力。</p>
<p>比如 <code v-pre>MySQL</code> 实例挂了或宕机了，重启时，<code v-pre>InnoDB</code>存储引擎会使用<code v-pre>redo log</code>恢复数据，保证数据的持久性与完整性。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/02.png" alt="" loading="lazy"></p>
<p><code v-pre>MySQL</code> 中数据是以页为单位，你查询一条记录，会从硬盘把一页的数据加载出来，加载出来的数据叫数据页，会放入到 <code v-pre>Buffer Pool</code> 中。</p>
<p>后续的查询都是先从 <code v-pre>Buffer Pool</code> 中找，没有命中再去硬盘加载，减少硬盘 <code v-pre>IO</code> 开销，提升性能。</p>
<p>更新表数据的时候，也是如此，发现 <code v-pre>Buffer Pool</code> 里存在要更新的数据，就直接在 <code v-pre>Buffer Pool</code> 里更新。</p>
<p>然后会把“在某个数据页上做了什么修改”记录到重做日志缓存（<code v-pre>redo log buffer</code>）里，接着刷盘到 <code v-pre>redo log</code> 文件里。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/03.png" alt="" loading="lazy"></p>
<blockquote>
<p>图片笔误提示：第 4 步 “清空 redo log buffe 刷盘到 redo 日志中”这句话中的 buffe 应该是 buffer。</p>
</blockquote>
<p>理想情况，事务一提交就会进行刷盘操作，但实际上，刷盘的时机是根据策略来进行的。</p>
<blockquote>
<p>小贴士：每条 redo 记录由“表空间号+数据页号+偏移量+修改数据长度+具体修改的数据”组成</p>
</blockquote>
<h3 id="刷盘时机" tabindex="-1"><a class="header-anchor" href="#刷盘时机" aria-hidden="true">#</a> 刷盘时机</h3>
<p><code v-pre>InnoDB</code> 存储引擎为 <code v-pre>redo log</code> 的刷盘策略提供了 <code v-pre>innodb_flush_log_at_trx_commit</code> 参数，它支持三种策略：</p>
<ul>
<li><strong>0</strong> ：设置为 0 的时候，表示每次事务提交时不进行刷盘操作</li>
<li><strong>1</strong> ：设置为 1 的时候，表示每次事务提交时都将进行刷盘操作（默认值）</li>
<li><strong>2</strong> ：设置为 2 的时候，表示每次事务提交时都只把 redo log buffer 内容写入 page cache</li>
</ul>
<p><code v-pre>innodb_flush_log_at_trx_commit</code> 参数默认为 1 ，也就是说当事务提交时会调用 <code v-pre>fsync</code> 对 redo log 进行刷盘</p>
<p>另外，<code v-pre>InnoDB</code> 存储引擎有一个后台线程，每隔<code v-pre>1</code> 秒，就会把 <code v-pre>redo log buffer</code> 中的内容写到文件系统缓存（<code v-pre>page cache</code>），然后调用 <code v-pre>fsync</code> 刷盘。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/04.png" alt="" loading="lazy"></p>
<p>也就是说，一个没有提交事务的 <code v-pre>redo log</code> 记录，也可能会刷盘。</p>
<p><strong>为什么呢？</strong></p>
<p>因为在事务执行过程 <code v-pre>redo log</code> 记录是会写入<code v-pre>redo log buffer</code> 中，这些 <code v-pre>redo log</code> 记录会被后台线程刷盘。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/05.png" alt="" loading="lazy"></p>
<p>除了后台线程每秒<code v-pre>1</code>次的轮询操作，还有一种情况，当 <code v-pre>redo log buffer</code> 占用的空间即将达到 <code v-pre>innodb_log_buffer_size</code> 一半的时候，后台线程会主动刷盘。</p>
<p>下面是不同刷盘策略的流程图。</p>
<h4 id="innodb-flush-log-at-trx-commit-0" tabindex="-1"><a class="header-anchor" href="#innodb-flush-log-at-trx-commit-0" aria-hidden="true">#</a> innodb_flush_log_at_trx_commit=0</h4>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/06.png" alt="" loading="lazy"></p>
<p>为<code v-pre>0</code>时，如果<code v-pre>MySQL</code>挂了或宕机可能会有<code v-pre>1</code>秒数据的丢失。</p>
<h4 id="innodb-flush-log-at-trx-commit-1" tabindex="-1"><a class="header-anchor" href="#innodb-flush-log-at-trx-commit-1" aria-hidden="true">#</a> innodb_flush_log_at_trx_commit=1</h4>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/07.png" alt="" loading="lazy"></p>
<p>为<code v-pre>1</code>时， 只要事务提交成功，<code v-pre>redo log</code>记录就一定在硬盘里，不会有任何数据丢失。</p>
<p>如果事务执行期间<code v-pre>MySQL</code>挂了或宕机，这部分日志丢了，但是事务并没有提交，所以日志丢了也不会有损失。</p>
<h4 id="innodb-flush-log-at-trx-commit-2" tabindex="-1"><a class="header-anchor" href="#innodb-flush-log-at-trx-commit-2" aria-hidden="true">#</a> innodb_flush_log_at_trx_commit=2</h4>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/09.png" alt="" loading="lazy"></p>
<p>为<code v-pre>2</code>时， 只要事务提交成功，<code v-pre>redo log buffer</code>中的内容只写入文件系统缓存（<code v-pre>page cache</code>）。</p>
<p>如果仅仅只是<code v-pre>MySQL</code>挂了不会有任何数据丢失，但是宕机可能会有<code v-pre>1</code>秒数据的丢失。</p>
<h3 id="日志文件组" tabindex="-1"><a class="header-anchor" href="#日志文件组" aria-hidden="true">#</a> 日志文件组</h3>
<p>硬盘上存储的 <code v-pre>redo log</code> 日志文件不只一个，而是以一个<strong>日志文件组</strong>的形式出现的，每个的<code v-pre>redo</code>日志文件大小都是一样的。</p>
<p>比如可以配置为一组<code v-pre>4</code>个文件，每个文件的大小是 <code v-pre>1GB</code>，整个 <code v-pre>redo log</code> 日志文件组可以记录<code v-pre>4G</code>的内容。</p>
<p>它采用的是环形数组形式，从头开始写，写到末尾又回到头循环写，如下图所示。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/10.png" alt="" loading="lazy"></p>
<p>在个<strong>日志文件组</strong>中还有两个重要的属性，分别是 <code v-pre>write pos、checkpoint</code></p>
<ul>
<li><strong>write pos</strong> 是当前记录的位置，一边写一边后移</li>
<li><strong>checkpoint</strong> 是当前要擦除的位置，也是往后推移</li>
</ul>
<p>每次刷盘 <code v-pre>redo log</code> 记录到<strong>日志文件组</strong>中，<code v-pre>write pos</code> 位置就会后移更新。</p>
<p>每次 <code v-pre>MySQL</code> 加载<strong>日志文件组</strong>恢复数据时，会清空加载过的 <code v-pre>redo log</code> 记录，并把 <code v-pre>checkpoint</code> 后移更新。</p>
<p><code v-pre>write pos</code> 和 <code v-pre>checkpoint</code> 之间的还空着的部分可以用来写入新的 <code v-pre>redo log</code> 记录。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/11.png" alt="" loading="lazy"></p>
<p>如果 <code v-pre>write pos</code> 追上 <code v-pre>checkpoint</code> ，表示<strong>日志文件组</strong>满了，这时候不能再写入新的 <code v-pre>redo log</code> 记录，<code v-pre>MySQL</code> 得停下来，清空一些记录，把 <code v-pre>checkpoint</code> 推进一下。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/12.png" alt="" loading="lazy"></p>
<h3 id="redo-log-小结" tabindex="-1"><a class="header-anchor" href="#redo-log-小结" aria-hidden="true">#</a> redo log 小结</h3>
<p>相信大家都知道 <code v-pre>redo log</code> 的作用和它的刷盘时机、存储形式。</p>
<p>现在我们来思考一个问题： <strong>只要每次把修改后的数据页直接刷盘不就好了，还有 <code v-pre>redo log</code> 什么事？</strong></p>
<p>它们不都是刷盘么？差别在哪里？</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token number">1</span> <span class="token class-name">Byte</span> <span class="token operator">=</span> <span class="token number">8</span>bit
<span class="token number">1</span> KB <span class="token operator">=</span> <span class="token number">1024</span> <span class="token class-name">Byte</span>
<span class="token number">1</span> MB <span class="token operator">=</span> <span class="token number">1024</span> KB
<span class="token number">1</span> GB <span class="token operator">=</span> <span class="token number">1024</span> MB
<span class="token number">1</span> TB <span class="token operator">=</span> <span class="token number">1024</span> GB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实际上，数据页大小是<code v-pre>16KB</code>，刷盘比较耗时，可能就修改了数据页里的几 <code v-pre>Byte</code> 数据，有必要把完整的数据页刷盘吗？</p>
<p>而且数据页刷盘是随机写，因为一个数据页对应的位置可能在硬盘文件的随机位置，所以性能是很差。</p>
<p>如果是写 <code v-pre>redo log</code>，一行记录可能就占几十 <code v-pre>Byte</code>，只包含表空间号、数据页号、磁盘文件偏移
量、更新值，再加上是顺序写，所以刷盘速度很快。</p>
<p>所以用 <code v-pre>redo log</code> 形式记录修改内容，性能会远远超过刷数据页的方式，这也让数据库的并发能力更强。</p>
<blockquote>
<p>其实内存的数据页在一定时机也会刷盘，我们把这称为页合并，讲 <code v-pre>Buffer Pool</code>的时候会对这块细说</p>
</blockquote>
<h2 id="binlog" tabindex="-1"><a class="header-anchor" href="#binlog" aria-hidden="true">#</a> binlog</h2>
<p><code v-pre>redo log</code> 它是物理日志，记录内容是“在某个数据页上做了什么修改”，属于 <code v-pre>InnoDB</code> 存储引擎。</p>
<p>而 <code v-pre>binlog</code> 是逻辑日志，记录内容是语句的原始逻辑，类似于“给 ID=2 这一行的 c 字段加 1”，属于<code v-pre>MySQL Server</code> 层。</p>
<p>不管用什么存储引擎，只要发生了表数据更新，都会产生 <code v-pre>binlog</code> 日志。</p>
<p>那 <code v-pre>binlog</code> 到底是用来干嘛的？</p>
<p>可以说<code v-pre>MySQL</code>数据库的<strong>数据备份、主备、主主、主从</strong>都离不开<code v-pre>binlog</code>，需要依靠<code v-pre>binlog</code>来同步数据，保证数据一致性。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/01-20220305234724956.png" alt="" loading="lazy"></p>
<p><code v-pre>binlog</code>会记录所有涉及更新数据的逻辑操作，并且是顺序写。</p>
<h3 id="记录格式" tabindex="-1"><a class="header-anchor" href="#记录格式" aria-hidden="true">#</a> 记录格式</h3>
<p><code v-pre>binlog</code> 日志有三种格式，可以通过<code v-pre>binlog_format</code>参数指定。</p>
<ul>
<li><strong>statement</strong></li>
<li><strong>row</strong></li>
<li><strong>mixed</strong></li>
</ul>
<p>指定<code v-pre>statement</code>，记录的内容是<code v-pre>SQL</code>语句原文，比如执行一条<code v-pre>update T set update_time=now() where id=1</code>，记录的内容如下。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/02-20220305234738688.png" alt="" loading="lazy"></p>
<p>同步数据时，会执行记录的<code v-pre>SQL</code>语句，但是有个问题，<code v-pre>update_time=now()</code>这里会获取当前系统时间，直接执行会导致与原库的数据不一致。</p>
<p>为了解决这种问题，我们需要指定为<code v-pre>row</code>，记录的内容不再是简单的<code v-pre>SQL</code>语句了，还包含操作的具体数据，记录内容如下。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/03-20220305234742460.png" alt="" loading="lazy"></p>
<p><code v-pre>row</code>格式记录的内容看不到详细信息，要通过<code v-pre>mysqlbinlog</code>工具解析出来。</p>
<p><code v-pre>update_time=now()</code>变成了具体的时间<code v-pre>update_time=1627112756247</code>，条件后面的@1、@2、@3 都是该行数据第 1 个~3 个字段的原始值（<strong>假设这张表只有 3 个字段</strong>）。</p>
<p>这样就能保证同步数据的一致性，通常情况下都是指定为<code v-pre>row</code>，这样可以为数据库的恢复与同步带来更好的可靠性。</p>
<p>但是这种格式，需要更大的容量来记录，比较占用空间，恢复与同步时会更消耗<code v-pre>IO</code>资源，影响执行速度。</p>
<p>所以就有了一种折中的方案，指定为<code v-pre>mixed</code>，记录的内容是前两者的混合。</p>
<p><code v-pre>MySQL</code>会判断这条<code v-pre>SQL</code>语句是否可能引起数据不一致，如果是，就用<code v-pre>row</code>格式，否则就用<code v-pre>statement</code>格式。</p>
<h3 id="写入机制" tabindex="-1"><a class="header-anchor" href="#写入机制" aria-hidden="true">#</a> 写入机制</h3>
<p><code v-pre>binlog</code>的写入时机也非常简单，事务执行过程中，先把日志写到<code v-pre>binlog cache</code>，事务提交的时候，再把<code v-pre>binlog cache</code>写到<code v-pre>binlog</code>文件中。</p>
<p>因为一个事务的<code v-pre>binlog</code>不能被拆开，无论这个事务多大，也要确保一次性写入，所以系统会给每个线程分配一个块内存作为<code v-pre>binlog cache</code>。</p>
<p>我们可以通过<code v-pre>binlog_cache_size</code>参数控制单个线程 binlog cache 大小，如果存储内容超过了这个参数，就要暂存到磁盘（<code v-pre>Swap</code>）。</p>
<p><code v-pre>binlog</code>日志刷盘流程如下</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/04-20220305234747840.png" alt="" loading="lazy"></p>
<ul>
<li><strong>上图的 write，是指把日志写入到文件系统的 page cache，并没有把数据持久化到磁盘，所以速度比较快</strong></li>
<li><strong>上图的 fsync，才是将数据持久化到磁盘的操作</strong></li>
</ul>
<p><code v-pre>write</code>和<code v-pre>fsync</code>的时机，可以由参数<code v-pre>sync_binlog</code>控制，默认是<code v-pre>0</code>。</p>
<p>为<code v-pre>0</code>的时候，表示每次提交事务都只<code v-pre>write</code>，由系统自行判断什么时候执行<code v-pre>fsync</code>。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/05-20220305234754405.png" alt="" loading="lazy"></p>
<p>虽然性能得到提升，但是机器宕机，<code v-pre>page cache</code>里面的 binlog 会丢失。</p>
<p>为了安全起见，可以设置为<code v-pre>1</code>，表示每次提交事务都会执行<code v-pre>fsync</code>，就如同 <strong>redo log 日志刷盘流程</strong> 一样。</p>
<p>最后还有一种折中方式，可以设置为<code v-pre>N(N&gt;1)</code>，表示每次提交事务都<code v-pre>write</code>，但累积<code v-pre>N</code>个事务后才<code v-pre>fsync</code>。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/06-20220305234801592.png" alt="" loading="lazy"></p>
<p>在出现<code v-pre>IO</code>瓶颈的场景里，将<code v-pre>sync_binlog</code>设置成一个比较大的值，可以提升性能。</p>
<p>同样的，如果机器宕机，会丢失最近<code v-pre>N</code>个事务的<code v-pre>binlog</code>日志。</p>
<h2 id="两阶段提交" tabindex="-1"><a class="header-anchor" href="#两阶段提交" aria-hidden="true">#</a> 两阶段提交</h2>
<p><code v-pre>redo log</code>（重做日志）让<code v-pre>InnoDB</code>存储引擎拥有了崩溃恢复能力。</p>
<p><code v-pre>binlog</code>（归档日志）保证了<code v-pre>MySQL</code>集群架构的数据一致性。</p>
<p>虽然它们都属于持久化的保证，但是侧重点不同。</p>
<p>在执行更新语句过程，会记录<code v-pre>redo log</code>与<code v-pre>binlog</code>两块日志，以基本的事务为单位，<code v-pre>redo log</code>在事务执行过程中可以不断写入，而<code v-pre>binlog</code>只有在提交事务时才写入，所以<code v-pre>redo log</code>与<code v-pre>binlog</code>的写入时机不一样。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/01-20220305234816065.png" alt="" loading="lazy"></p>
<p>回到正题，<code v-pre>redo log</code>与<code v-pre>binlog</code>两份日志之间的逻辑不一致，会出现什么问题？</p>
<p>我们以<code v-pre>update</code>语句为例，假设<code v-pre>id=2</code>的记录，字段<code v-pre>c</code>值是<code v-pre>0</code>，把字段<code v-pre>c</code>值更新成<code v-pre>1</code>，<code v-pre>SQL</code>语句为<code v-pre>update T set c=1 where id=2</code>。</p>
<p>假设执行过程中写完<code v-pre>redo log</code>日志后，<code v-pre>binlog</code>日志写期间发生了异常，会出现什么情况呢？</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/02-20220305234828662.png" alt="" loading="lazy"></p>
<p>由于<code v-pre>binlog</code>没写完就异常，这时候<code v-pre>binlog</code>里面没有对应的修改记录。因此，之后用<code v-pre>binlog</code>日志恢复数据时，就会少这一次更新，恢复出来的这一行<code v-pre>c</code>值是<code v-pre>0</code>，而原库因为<code v-pre>redo log</code>日志恢复，这一行<code v-pre>c</code>值是<code v-pre>1</code>，最终数据不一致。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/03-20220305235104445.png" alt="" loading="lazy"></p>
<p>为了解决两份日志之间的逻辑一致问题，<code v-pre>InnoDB</code>存储引擎使用<strong>两阶段提交</strong>方案。</p>
<p>原理很简单，将<code v-pre>redo log</code>的写入拆成了两个步骤<code v-pre>prepare</code>和<code v-pre>commit</code>，这就是<strong>两阶段提交</strong>。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/04-20220305234956774.png" alt="" loading="lazy"></p>
<p>使用<strong>两阶段提交</strong>后，写入<code v-pre>binlog</code>时发生异常也不会有影响，因为<code v-pre>MySQL</code>根据<code v-pre>redo log</code>日志恢复数据时，发现<code v-pre>redo log</code>还处于<code v-pre>prepare</code>阶段，并且没有对应<code v-pre>binlog</code>日志，就会回滚该事务。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/05-20220305234937243.png" alt="" loading="lazy"></p>
<p>再看一个场景，<code v-pre>redo log</code>设置<code v-pre>commit</code>阶段发生异常，那会不会回滚事务呢？</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/06-20220305234907651.png" alt="" loading="lazy"></p>
<p>并不会回滚事务，它会执行上图框住的逻辑，虽然<code v-pre>redo log</code>是处于<code v-pre>prepare</code>阶段，但是能通过事务<code v-pre>id</code>找到对应的<code v-pre>binlog</code>日志，所以<code v-pre>MySQL</code>认为是完整的，就会提交事务恢复数据。</p>
<h2 id="undo-log" tabindex="-1"><a class="header-anchor" href="#undo-log" aria-hidden="true">#</a> undo log</h2>
<blockquote>
<p>这部分内容为 JavaGuide 的补充：</p>
</blockquote>
<p>我们知道如果想要保证事务的原子性，就需要在异常发生时，对已经执行的操作进行<strong>回滚</strong>，在 MySQL 中，恢复机制是通过 <strong>回滚日志（undo log）</strong> 实现的，所有事务进行的修改都会先记录到这个回滚日志中，然后再执行相关的操作。如果执行过程中遇到异常的话，我们直接利用 <strong>回滚日志</strong> 中的信息将数据回滚到修改之前的样子即可！并且，回滚日志会先于数据持久化到磁盘上。这样就保证了即使遇到数据库突然宕机等情况，当用户再次启动数据库的时候，数据库还能够通过查询回滚日志来回滚将之前未完成的事务。</p>
<p>另外，<code v-pre>MVCC</code> 的实现依赖于：<strong>隐藏字段、Read View、undo log</strong>。在内部实现中，<code v-pre>InnoDB</code> 通过数据行的 <code v-pre>DB_TRX_ID</code> 和 <code v-pre>Read View</code> 来判断数据的可见性，如不可见，则通过数据行的 <code v-pre>DB_ROLL_PTR</code> 找到 <code v-pre>undo log</code> 中的历史版本。每个事务读到的数据版本可能是不一样的，在同一个事务中，用户只能看到该事务创建 <code v-pre>Read View</code> 之前已经提交的修改和该事务本身做的修改</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<blockquote>
<p>这部分内容为 JavaGuide 的补充：</p>
</blockquote>
<p>MySQL InnoDB 引擎使用 <strong>redo log(重做日志)</strong> 保证事务的<strong>持久性</strong>，使用 <strong>undo log(回滚日志)</strong> 来保证事务的<strong>原子性</strong>。</p>
<p><code v-pre>MySQL</code>数据库的<strong>数据备份、主备、主主、主从</strong>都离不开<code v-pre>binlog</code>，需要依靠<code v-pre>binlog</code>来同步数据，保证数据一致性。</p>
<h2 id="站在巨人的肩膀上" tabindex="-1"><a class="header-anchor" href="#站在巨人的肩膀上" aria-hidden="true">#</a> 站在巨人的肩膀上</h2>
<ul>
<li>《MySQL 实战 45 讲》</li>
<li>《从零开始带你成为 MySQL 实战优化高手》</li>
<li>《MySQL 是怎样运行的：从根儿上理解 MySQL》</li>
<li>《MySQL 技术 Innodb 存储引擎》</li>
</ul>
<h2 id="mysql-好文推荐" tabindex="-1"><a class="header-anchor" href="#mysql-好文推荐" aria-hidden="true">#</a> MySQL 好文推荐</h2>
<ul>
<li><a href="https://mp.weixin.qq.com/s/R-1km7r0z3oWfwYQV8iiqA" target="_blank" rel="noopener noreferrer">CURD 这么多年，你有了解过 MySQL 的架构设计吗？<ExternalLinkIcon/></a></li>
<li><a href="https://mp.weixin.qq.com/s/7Kab4IQsNcU_bZdbv_MuOg" target="_blank" rel="noopener noreferrer">浅谈 MySQL InnoDB 的内存组件<ExternalLinkIcon/></a></li>
</ul>
</div></template>
