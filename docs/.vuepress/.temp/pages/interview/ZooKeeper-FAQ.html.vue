<template><div><h2 id="谈下你对-zookeeper-的认识" tabindex="-1"><a class="header-anchor" href="#谈下你对-zookeeper-的认识" aria-hidden="true">#</a> 谈下你对 Zookeeper 的认识？</h2>
<p>ZooKeeper 是一个分布式的，开放源码的分布式应用程序协调服务。它是一个为分布式应用提供一致性服务的软件，提供的功能包括：配置维护、域名服务、分布式同步、组服务等。</p>
<p>ZooKeeper 的目标就是封装好复杂易出错的关键服务，将简单易用的接口和性能高效、功能稳定的系统提供给用户。</p>
<hr>
<h2 id="zookeeper-都有哪些功能" tabindex="-1"><a class="header-anchor" href="#zookeeper-都有哪些功能" aria-hidden="true">#</a> Zookeeper 都有哪些功能？</h2>
<ol>
<li>
<p>集群管理：监控节点存活状态、运行请求等；</p>
</li>
<li>
<p>主节点选举：主节点挂掉了之后可以从备用的节点开始新一轮选主，主节点选举说的就是这个选举的过程，使用 Zookeeper 可以协助完成这个过程；</p>
</li>
<li>
<p>分布式锁：Zookeeper 提供两种锁：独占锁、共享锁。独占锁即一次只能有一个线程使用资源，共享锁是读锁共享，读写互斥，即可以有多线线程同时读同一个资源，如果要使用写锁也只能有一个线程使用。Zookeeper 可以对分布式锁进行控制。</p>
</li>
<li>
<p>命名服务：在分布式系统中，通过使用命名服务，客户端应用能够根据指定名字来获取资源或服务的地址，提供者等信息。</p>
</li>
<li>
<p>统一配置管理：分布式环境下，配置文件管理和同步是一个常见问题，一个集群中，所有节点的配置信息是一致的，比如 Hadoop 集群、集群中的数据库配置信息等全局配置</p>
</li>
</ol>
<hr>
<h2 id="zookeeper负载均衡和nginx负载均衡区别" tabindex="-1"><a class="header-anchor" href="#zookeeper负载均衡和nginx负载均衡区别" aria-hidden="true">#</a> zookeeper负载均衡和nginx负载均衡区别</h2>
<p>Nginx是著名的反向代理服务器，zk是分布式协调服务框架，都可以做负载均衡</p>
<p>zk的负载均衡是可以调控，nginx只是能调权重，其他需要可控的都需要自己写插件；</p>
<p>但是nginx的吞吐量比zk大很多，应该说按业务选择用哪种方式</p>
<hr>
<h2 id="一致性协议2pc、3pc" tabindex="-1"><a class="header-anchor" href="#一致性协议2pc、3pc" aria-hidden="true">#</a> 一致性协议2PC、3PC？</h2>
<h3 id="_2pc" tabindex="-1"><a class="header-anchor" href="#_2pc" aria-hidden="true">#</a> 2PC</h3>
<p><strong>阶段一：提交事务请求（”投票阶段“）</strong></p>
<p>当要执行一个分布式事务的时候，事务发起者首先向协调者发起事务请求，然后协调者会给所有参与者发送 <code v-pre>prepare</code> 请求（其中包括事务内容）告诉参与者你们需要执行事务了，如果能执行我发的事务内容那么就先执行但不提交，执行后请给我回复。然后参与者收到 <code v-pre>prepare</code> 消息后，他们会开始执行事务（但不提交），并将 <code v-pre>Undo</code> 和 <code v-pre>Redo</code> 信息记入事务日志中，之后参与者就向协调者反馈是否准备好了</p>
<p><strong>阶段二：执行事务提交</strong></p>
<p>协调者根据各参与者的反馈情况决定最终是否可以提交事务，如果反馈都是Yes，发送提交<code v-pre>commit</code>请求，参与者提交成功后返回 <code v-pre>Ack</code> 消息，协调者接收后就完成了。如果反馈是No 或者超时未反馈，发送 <code v-pre>Rollback</code> 请求，利用阶段一记录表的 <code v-pre>Undo</code> 信息执行回滚，并反馈给协调者<code v-pre>Ack</code> ，中断消息</p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gclosfvncqj30hs09j0td.jpg" alt="" loading="lazy"></p>
<p>优点：原理简单、实现方便。</p>
<p>缺点：</p>
<ul>
<li><strong>单点故障问题</strong>，如果协调者挂了那么整个系统都处于不可用的状态了</li>
<li><strong>阻塞问题</strong>，即当协调者发送 <code v-pre>prepare</code> 请求，参与者收到之后如果能处理那么它将会进行事务的处理但并不提交，这个时候会一直占用着资源不释放，如果此时协调者挂了，那么这些资源都不会再释放了，这会极大影响性能</li>
<li><strong>数据不一致问题</strong>，比如当第二阶段，协调者只发送了一部分的 <code v-pre>commit</code> 请求就挂了，那么也就意味着，收到消息的参与者会进行事务的提交，而后面没收到的则不会进行事务提交，那么这时候就会产生数据不一致性问题</li>
</ul>
<h3 id="_3pc" tabindex="-1"><a class="header-anchor" href="#_3pc" aria-hidden="true">#</a> 3PC</h3>
<p>3PC，是 Three-Phase-Comimit 的缩写，即「<strong>三阶段提交</strong>」，是二阶段的改进版，将二阶段提交协议的“提交事务请求”过程一分为二。</p>
<p><strong>阶段一：CanCommit</strong></p>
<p>协调者向所有参与者发送 <code v-pre>CanCommit</code> 请求，参与者收到请求后会根据自身情况查看是否能执行事务，如果可以则返回 YES 响应并进入预备状态，否则返回 NO</p>
<p><strong>阶段二：PreCommit</strong></p>
<p>协调者根据参与者返回的响应来决定是否可以进行下面的 <code v-pre>PreCommit</code> 操作。如果上面参与者返回的都是 YES，那么协调者将向所有参与者发送 <code v-pre>PreCommit</code> 预提交请求，<strong>参与者收到预提交请求后，会进行事务的执行操作，并将 Undo 和 Redo 信息写入事务日志中</strong> ，最后如果参与者顺利执行了事务则给协调者返回成功的 <code v-pre>Ack</code> 响应。如果在第一阶段协调者收到了 <strong>任何一个 NO</strong> 的信息，或者 <strong>在一定时间内</strong> 并没有收到全部的参与者的响应，那么就会中断事务，它会向所有参与者发送中断请求 <code v-pre>abort</code>，参与者收到中断请求之后会立即中断事务，或者在一定时间内没有收到协调者的请求，它也会中断事务</p>
<p><strong>阶段三：DoCommit</strong></p>
<p>这个阶段其实和 <code v-pre>2PC</code> 的第二阶段差不多，如果协调者收到了所有参与者在 <code v-pre>PreCommit</code> 阶段的 YES 响应，那么协调者将会给所有参与者发送 <code v-pre>DoCommit</code> 请求，<strong>参与者收到 DoCommit 请求后则会进行事务的提交工作</strong>，完成后则会给协调者返回响应，协调者收到所有参与者返回的事务提交成功的响应之后则完成事务。若协调者在 <code v-pre>PreCommit</code> 阶段 <strong>收到了任何一个 NO 或者在一定时间内没有收到所有参与者的响应</strong> ，那么就会进行中断请求的发送，参与者收到中断请求后则会 <strong>通过上面记录的回滚日志</strong> 来进行事务的回滚操作，并向协调者反馈回滚状况，协调者收到参与者返回的消息后，中断事务。</p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gclot2rul3j30j60cpgmo.jpg" alt="" loading="lazy"></p>
<p>降低了参与者的阻塞范围，且能在单点故障后继续达成一致。</p>
<p>但是最重要的一致性并没有得到根本的解决，比如在 <code v-pre>PreCommit</code> 阶段，当一个参与者收到了请求之后其他参与者和协调者挂了或者出现了网络分区，这个时候收到消息的参与者都会进行事务提交，这就会出现数据不一致性问题。</p>
<hr>
<h2 id="讲一讲-paxos-算法" tabindex="-1"><a class="header-anchor" href="#讲一讲-paxos-算法" aria-hidden="true">#</a> 讲一讲 Paxos 算法？</h2>
<p><code v-pre>Paxos</code> 算法是基于<strong>消息传递且具有高度容错特性的一致性算法</strong>，是目前公认的解决分布式一致性问题最有效的算法之一，<strong>其解决的问题就是在分布式系统中如何就某个值（决议）达成一致</strong> 。</p>
<p>在 <code v-pre>Paxos</code> 中主要有三个角色，分别为 <code v-pre>Proposer提案者</code>、<code v-pre>Acceptor表决者</code>、<code v-pre>Learner学习者</code>。<code v-pre>Paxos</code> 算法和 <code v-pre>2PC</code> 一样，也有两个阶段，分别为 <code v-pre>Prepare</code> 和 <code v-pre>accept</code> 阶段。</p>
<p>在具体的实现中，一个进程可能同时充当多种角色。比如一个进程可能既是 Proposer 又是 Acceptor 又是Learner。Proposer 负责提出提案，Acceptor 负责对提案作出裁决（accept与否），learner 负责学习提案结果。</p>
<p>还有一个很重要的概念叫「<strong>提案</strong>」（Proposal）。最终要达成一致的 value 就在提案里。只要 Proposer 发的提案被半数以上的 Acceptor 接受，Proposer 就认为该提案里的 value 被选定了。Acceptor 告诉 Learner 哪个 value 被选定，Learner 就认为那个 value 被选定。</p>
<p><strong>阶段一：prepare 阶段</strong></p>
<ol>
<li>
<p><code v-pre>Proposer</code> 负责提出 <code v-pre>proposal</code>，每个提案者在提出提案时都会首先获取到一个 <strong>具有全局唯一性的、递增的提案编号N</strong>，即在整个集群中是唯一的编号 N，然后将该编号赋予其要提出的提案，在<strong>第一阶段是只将提案编号发送给所有的表决者</strong>。</p>
</li>
<li>
<p>如果一个 Acceptor 收到一个编号为 N 的 Prepare 请求，如果小于它已经响应过的请求，则拒绝，不回应或回复error。若 N 大于该 Acceptor 已经响应过的所有 Prepare 请求的编号（maxN），那么它就会将它<strong>已经批准过的编号最大的提案</strong>（如果有的话，如果还没有的accept提案的话返回{pok，null，null}）作为响应反馈给 Proposer，同时该 Acceptor 承诺不再接受任何编号小于 N 的提案</p>
<p>eg：假定一个 Acceptor 已经响应过的所有 Prepare 请求对应的提案编号分别是1、2、...5和7，那么该 Acceptor 在接收到一个编号为8的 Prepare 请求后，就会将 7 的提案作为响应反馈给 Proposer。</p>
</li>
</ol>
<p><strong>阶段二：accept 阶段</strong></p>
<ol>
<li>如果一个 Proposer 收到半数以上 Acceptor 对其发出的编号为 N 的 Prepare 请求的响应，那么它就会发送一个针对 [N,V] 提案的 Accept 请求半数以上的 Acceptor。注意：V 就是收到的响应中编号最大的提案的 value，如果响应中不包含任何提案，那么 V 就由 Proposer 自己决定</li>
<li>如果 Acceptor 收到一个针对编号为N的提案的Accept请求，只要该 Acceptor 没有对编号大于 N 的 Prepare 请求做出过响应，它就通过该提案。如果N小于 Acceptor 以及响应的 prepare 请求，则拒绝，不回应或回复error（当proposer没有收到过半的回应，那么他会重新进入第一阶段，递增提案号，重新提出prepare请求）</li>
<li>最后是 Learner 获取通过的提案（有多种方式）</li>
</ol>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gcloyv70qsj30sg0lc0ve.jpg" alt="" loading="lazy"></p>
<p><strong><code v-pre>paxos</code> 算法的死循环问题</strong></p>
<p>其实就有点类似于两个人吵架，小明说我是对的，小红说我才是对的，两个人据理力争的谁也不让谁🤬🤬。</p>
<p>比如说，此时提案者 P1 提出一个方案 M1，完成了 <code v-pre>Prepare</code> 阶段的工作，这个时候 <code v-pre>acceptor</code> 则批准了 M1，但是此时提案者 P2 同时也提出了一个方案 M2，它也完成了 <code v-pre>Prepare</code> 阶段的工作。然后 P1 的方案已经不能在第二阶段被批准了（因为 <code v-pre>acceptor</code> 已经批准了比 M1 更大的 M2），所以 P1 自增方案变为 M3 重新进入 <code v-pre>Prepare</code> 阶段，然后 <code v-pre>acceptor</code> ，又批准了新的 M3 方案，它又不能批准 M2 了，这个时候 M2 又自增进入 <code v-pre>Prepare</code> 阶段。。。</p>
<p>就这样无休无止的永远提案下去，这就是 <code v-pre>paxos</code> 算法的死循环问题。</p>
<h2 id="谈下你对-zab-协议的了解" tabindex="-1"><a class="header-anchor" href="#谈下你对-zab-协议的了解" aria-hidden="true">#</a> 谈下你对 ZAB 协议的了解？</h2>
<p>ZAB（Zookeeper Atomic Broadcast） 协议是为分布式协调服务 Zookeeper 专门设计的一种支持<strong>崩溃恢复的原子广播协议</strong>。</p>
<p>在 Zookeeper 中，主要依赖 ZAB 协议来实现分布式数据一致性，基于该协议，ZooKeeper 实现了一种主备模式的系统架构来保持集群中各副本之间数据的一致性。</p>
<p>尽管 ZAB 不是 Paxos 的实现，但是 ZAB 也参考了一些 Paxos 的一些设计思想，比如：</p>
<ul>
<li>leader 向 follows 提出提案(proposal)</li>
<li>leader 需要在达到法定数量(半数以上)的 follows 确认之后才会进行 commit</li>
<li>每一个 proposal 都有一个纪元(epoch)号，类似于 Paxos 中的选票(ballot)</li>
</ul>
<p><code v-pre>ZAB</code> 中有三个主要的角色，<code v-pre>Leader 领导者</code>、<code v-pre>Follower跟随者</code>、<code v-pre>Observer观察者</code> 。</p>
<ul>
<li><code v-pre>Leader</code> ：集群中 <strong>唯一的写请求处理者</strong> ，能够发起投票（投票也是为了进行写请求）。</li>
<li><code v-pre>Follower</code>：能够接收客户端的请求，如果是读请求则可以自己处理，<strong>如果是写请求则要转发给 Leader 。在选举过程中会参与投票，有选举权和被选举权 。</strong></li>
<li><strong>Observer ：就是没有选举权和被选举权的 Follower 。</strong></li>
</ul>
<p>在 ZAB 协议中对 zkServer(即上面我们说的三个角色的总称) 还有两种模式的定义，分别是消息广播和崩溃恢复</p>
<p><strong>消息广播模式</strong></p>
<p><img src="http://file.sunwaiting.com/zab_broadcast.png" alt="ZAB广播" loading="lazy"></p>
<ol>
<li>Leader从客户端收到一个事务请求（如果是集群中其他机器接收到客户端的事务请求，会直接转发给 Leader 服务器）</li>
<li>Leader 服务器生成一个对应的事务 Proposal，并为这个事务生成一个全局递增的唯一的ZXID（通过其 ZXID 来进行排序保证顺序性）</li>
<li>Leader 将这个事务发送给所有的 Follows 节点</li>
<li>Follower 节点将收到的事务请求加入到历史队列(Leader 会为每个 Follower 分配一个单独的队列先进先出，顺序保证消息的因果关系)中，并发送 ack 给 Leader</li>
<li>当 Leader 收到超过半数 Follower 的 ack 消息，Leader会广播一个 commit 消息</li>
<li>当 Follower 收到 commit 请求时，会判断该事务的 ZXID 是不是比历史队列中的任何事务的 ZXID 都小，如果是则提交，如果不是则等待比它更小的事务的 commit</li>
</ol>
<p><img src="http://file.sunwaiting.com/zab_commit_1.png" alt="zab commit流程" loading="lazy"></p>
<p><strong>崩溃恢复模式</strong></p>
<p>ZAB 的原子广播协议在正常情况下运行良好，但天有不测风云，一旦 Leader 服务器挂掉或者由于网络原因导致与半数的 Follower 的服务器失去联系，那么就会进入崩溃恢复模式。整个恢复过程结束后需要选举出一个新的 Leader 服务器。</p>
<p>恢复模式大致可以分为四个阶段：<strong>选举、发现、同步、广播</strong></p>
<ol>
<li>当 leader 崩溃后，集群进入选举阶段，开始选举出潜在的新 leader(一般为集群中拥有最大 ZXID 的节点)</li>
<li>进入发现阶段，follower 与潜在的新 leader 进行沟通，如果发现超过法定人数的 follower 同意，则潜在的新leader 将 epoc h加1，进入新的纪元。新的 leader 产生</li>
<li>集群间进行数据同步，保证集群中各个节点的事务一致</li>
<li>集群恢复到广播模式，开始接受客户端的写请求</li>
</ol>
<hr>
<h2 id="zookeeper-怎么保证主从节点的状态同步-或者说同步流程是什么样的" tabindex="-1"><a class="header-anchor" href="#zookeeper-怎么保证主从节点的状态同步-或者说同步流程是什么样的" aria-hidden="true">#</a> Zookeeper 怎么保证主从节点的状态同步？或者说同步流程是什么样的</h2>
<p>Zookeeper 的核心是原子广播机制，这个机制保证了各个 server 之间的同步。实现这个机制的协议叫做 Zab 协议。Zab 协议有两种模式，它们分别是恢复模式和广播模式。同上</p>
<hr>
<h2 id="集群中为什么要有主节点" tabindex="-1"><a class="header-anchor" href="#集群中为什么要有主节点" aria-hidden="true">#</a> 集群中为什么要有主节点？</h2>
<p>在分布式环境中，有些业务逻辑只需要集群中的某一台机器进行执行，其他的机器可以共享这个结果，这样可以大大减少重复计算，提高性能，于是就需要进行 leader 选举。</p>
<hr>
<h2 id="集群中有-3-台服务器-其中一个节点宕机-这个时候-zookeeper-还可以使用吗" tabindex="-1"><a class="header-anchor" href="#集群中有-3-台服务器-其中一个节点宕机-这个时候-zookeeper-还可以使用吗" aria-hidden="true">#</a> 集群中有 3 台服务器，其中一个节点宕机，这个时候 Zookeeper 还可以使用吗？</h2>
<p>可以继续使用，单数服务器只要没超过一半的服务器宕机就可以继续使用。</p>
<p>集群规则为 2N+1 台，N &gt;0，即最少需要 3 台。</p>
<h2 id="zookeeper-宕机如何处理" tabindex="-1"><a class="header-anchor" href="#zookeeper-宕机如何处理" aria-hidden="true">#</a> Zookeeper 宕机如何处理？</h2>
<p>Zookeeper 本身也是集群，推荐配置不少于 3 个服务器。Zookeeper 自身也要保证当一个节点宕机时，其他节点会继续提供服务。如果是一个 Follower 宕机，还有 2 台服务器提供访问，因为 Zookeeper 上的数据是有多个副本的，数据并不会丢失；如果是一个 Leader 宕机，Zookeeper 会选举出新的 Leader。</p>
<p>Zookeeper 集群的机制是只要超过半数的节点正常，集群就能正常提供服务。只有在 Zookeeper 节点挂得太多，只剩一半或不到一半节点能工作，集群才失效。所以：</p>
<p>3 个节点的 cluster 可以挂掉 1 个节点(leader 可以得到 2 票 &gt; 1.5)</p>
<p>2 个节点的 cluster 就不能挂掉任何1个节点了(leader 可以得到 1 票 &lt;= 1)</p>
<hr>
<h2 id="说下四种类型的数据节点-znode" tabindex="-1"><a class="header-anchor" href="#说下四种类型的数据节点-znode" aria-hidden="true">#</a> 说下四种类型的数据节点 Znode？</h2>
<ol>
<li>
<p>PERSISTENT：持久节点，除非手动删除，否则节点一直存在于 Zookeeper 上。</p>
</li>
<li>
<p>EPHEMERAL：临时节点，临时节点的生命周期与客户端会话绑定，一旦客户端会话失效（客户端与 Zookeeper连接断开不一定会话失效），那么这个客户端创建的所有临时节点都会被移除。</p>
</li>
<li>
<p>PERSISTENT_SEQUENTIAL：持久顺序节点，基本特性同持久节点，只是增加了顺序属性，节点名后边会追加一个由父节点维护的自增整型数字。</p>
</li>
<li>
<p>EPHEMERAL_SEQUENTIAL：临时顺序节点，基本特性同临时节点，增加了顺序属性，节点名后边会追加一个由父节点维护的自增整型数字。</p>
</li>
</ol>
<hr>
<h2 id="zookeeper选举机制" tabindex="-1"><a class="header-anchor" href="#zookeeper选举机制" aria-hidden="true">#</a> Zookeeper选举机制</h2>
<ol>
<li>首先对比zxid。zxid大的服务器优先作为Leader</li>
<li>若zxid相同，比如初始化的时候，每个Server的zxid都为0，就会比较myid，myid大的选出来做Leader。</li>
</ol>
<p><strong>服务器初始化时选举</strong></p>
<blockquote>
<p>目前有3台服务器，每台服务器均没有数据，它们的编号分别是1,2,3按编号依次启动，它们的选择举过程如下：</p>
</blockquote>
<ol>
<li>Server1启动，给自己投票（1,0），然后发投票信息，由于其它机器还没有启动所以它收不到反馈信息，Server1的状态一直属于Looking。</li>
<li>Server2启动，给自己投票（2,0），同时与之前启动的Server1交换结果，由于Server2的编号大所以Server2胜出，<strong>但此时投票数正好大于半数</strong>，所以Server2成为领导者，Server1成为小弟。</li>
<li>Server3启动，给自己投票（3,0），同时与之前启动的Server1,Server2换信息，尽管Server3的编号大，但之前Server2已经胜出，所以Server3只能成为小弟。</li>
<li>当确定了Leader之后，每个Server更新自己的状态，Leader将状态更新为Leading，Follower将状态更新为Following。</li>
</ol>
<p><strong>服务器运行期间的选举</strong></p>
<blockquote>
<p>zookeeper运行期间，如果有新的Server加入，或者非Leader的Server宕机，那么Leader将会同步数据到新Server或者寻找其他备用Server替代宕机的Server。若Leader宕机，此时集群暂停对外服务，开始在内部选举新的Leader。假设当前集群中有Server1、Server2、Server3三台服务器，Server2为当前集群的Leader，由于意外情况，Server2宕机了，便开始进入选举状态。过程如下</p>
</blockquote>
<ol>
<li>变更状态。其他的非Observer服务器将自己的状态改变为Looking，开始进入Leader选举。</li>
<li>每个Server发出一个投票（myid，zxid），由于此集群已经运行过，所以每个Server上的zxid可能不同。假设Server1的zxid为100，Server3的为99，第一轮投票中，Server1和Server3都投自己，票分别为（1，100）,（3,99）,将自己的票发送给集群中所有机器。</li>
<li>每个Server接收接收来自其他Server的投票，接下来的步骤与启动时步骤相同。</li>
</ol>
<h2 id="_1-zookeeper-是什么" tabindex="-1"><a class="header-anchor" href="#_1-zookeeper-是什么" aria-hidden="true">#</a> 1. ZooKeeper 是什么？</h2>
<p>ZooKeeper 是一个开源的分布式协调服务。它是一个为分布式应用提供一致性服务的软件，分布式应用程序可以基于 Zookeeper 实现诸如数据发布/订阅、负载均衡、命名服务、分布式协调/通知、集群管理、Master 选举、分布式锁和分布式队列等功能。</p>
<p>ZooKeeper 的目标就是封装好复杂易出错的关键服务，将简单易用的接口和性能高效、功能稳定的系统提供给用户。</p>
<p>Zookeeper 保证了如下分布式一致性特性：</p>
<ol>
<li>顺序一致性</li>
<li>原子性</li>
<li>单一视图（全局数据一致）</li>
<li>可靠性</li>
<li>实时性（最终一致性）</li>
</ol>
<p>客户端的读请求可以被集群中的任意一台机器处理，如果读请求在节点上注册了监听器，这个监听器也是由所连接的 zookeeper 机器来处理。对于写请求，这些请求会同时发给其他 zookeeper 机器并且达成一致后，请求才会返回成功。因此，随着 zookeeper 的集群机器增多，读请求的吞吐会提高但是写请求的吞吐会下降。</p>
<p>有序性是 zookeeper 中非常重要的一个特性，所有的更新都是全局有序的，每个更新都有一个唯一的时间戳，这个时间戳称为 zxid（Zookeeper Transaction Id）。而读请求只会相对于更新有序，也就是读请求的返回结果中会带有这个zookeeper 最新的 zxid。</p>
<h2 id="_2-zookeeper-提供了什么" tabindex="-1"><a class="header-anchor" href="#_2-zookeeper-提供了什么" aria-hidden="true">#</a> 2. ZooKeeper 提供了什么？</h2>
<ul>
<li>文件系统</li>
<li>通知机制</li>
</ul>
<h2 id="_3-zookeeper-文件系统" tabindex="-1"><a class="header-anchor" href="#_3-zookeeper-文件系统" aria-hidden="true">#</a> 3. Zookeeper 文件系统</h2>
<p>Zookeeper 提供一个多层级的节点命名空间（节点称为 znode）。与文件系统不同的是，这些节点都可以设置关联的数据，而文件系统中只有文件节点可以存放数据而目录节点不行。</p>
<p>Zookeeper 为了保证高吞吐和低延迟，在内存中维护了这个树状的目录结构，这种特性使得 Zookeeper 不能用于存放大量的数据，每个节点的存放数据上限为1M。</p>
<h2 id="_4-zookeeper-怎么保证主从节点的状态同步" tabindex="-1"><a class="header-anchor" href="#_4-zookeeper-怎么保证主从节点的状态同步" aria-hidden="true">#</a> 4. Zookeeper 怎么保证主从节点的状态同步？</h2>
<p>Zookeeper 的核心是原子广播机制，这个机制保证了各个 server 之间的同步。实现这个机制的协议叫做 Zab 协议。Zab 协议有两种模式，它们分别是恢复模式和广播模式。</p>
<p>1、恢复模式</p>
<p>当服务启动或者在领导者崩溃后，Zab 就进入了恢复模式，当领导者被选举出来，且大多数 server 完成了和 leader 的状态同步以后，恢复模式就结束了。状态同步保证了 leader 和 server 具有相同的系统状态。</p>
<p>2、广播模式</p>
<p>一旦 leader 已经和多数的 follower 进行了状态同步后，它就可以开始广播消息了，即进入广播状态。这时候当一个 server 加入 ZooKeeper 服务中，它会在恢复模式下启动，发现 leader，并和 leader 进行状态同步。待到同步结束，它也参与消息广播。ZooKeeper 服务一直维持在 Broadcast 状态，直到 leader 崩溃了或者 leader 失去了大部分的 followers 支持。</p>
<h2 id="_5-四种类型的数据节点-znode" tabindex="-1"><a class="header-anchor" href="#_5-四种类型的数据节点-znode" aria-hidden="true">#</a> 5. 四种类型的数据节点 Znode</h2>
<ol>
<li>
<p>PERSISTENT-<strong>持久节点</strong></p>
<p>除非手动删除，否则节点一直存在于 Zookeeper 上</p>
</li>
<li>
<p>EPHEMERAL-<strong>临时节点</strong></p>
<p>临时节点的生命周期与客户端会话绑定，一旦客户端会话失效（客户端与zookeeper 连接断开不一定会话失效），那么这个客户端创建的所有临时节点都会被移除。</p>
</li>
<li>
<p>PERSISTENT_SEQUENTIAL**-持久顺序节点**</p>
<p>基本特性同持久节点，只是增加了顺序属性，节点名后边会追加一个由父节点维护的自增整型数字。</p>
</li>
<li>
<p>EPHEMERAL_SEQUENTIAL-<strong>临时顺序节点</strong></p>
<p>基本特性同临时节点，增加了顺序属性，节点名后边会追加一个由父节点维护的自增整型数字。</p>
</li>
</ol>
<h2 id="_6-zookeeper-watcher-机制-–-数据变更通知" tabindex="-1"><a class="header-anchor" href="#_6-zookeeper-watcher-机制-–-数据变更通知" aria-hidden="true">#</a> 6. Zookeeper Watcher 机制 – 数据变更通知</h2>
<p>Zookeeper 允许客户端向服务端的某个 Znode 注册一个 Watcher 监听，当服务端的一些指定事件触发了这个 Watcher，服务端会向指定客户端发送一个事件通知来实现分布式的通知功能，然后客户端根据 Watcher 通知状态和事件类型做出业务上的改变。</p>
<p>工作机制：</p>
<p>（1）客户端注册 watcher</p>
<p>（2）服务端处理 watcher</p>
<p>（3）客户端回调 watcher</p>
<p>Watcher 特性总结：</p>
<p>（1）一次性</p>
<p>无论是服务端还是客户端，一旦一个 Watcher 被 触 发 ，Zookeeper 都会将其从相应的存储中移除。这样的设计有效的减轻了服务端的压力，不然对于更新非常频繁的节点，服务端会不断的向客户端发送事件通知，无论对于网络还是服务端的压力都非常大。</p>
<p>（2）客户端串行执行</p>
<p>客户端 Watcher 回调的过程是一个串行同步的过程。</p>
<p>（3）轻量</p>
<p>3.1、Watcher 通知非常简单，只会告诉客户端发生了事件，而不会说明事件的具体内容。</p>
<p>3.2、客户端向服务端注册 Watcher 的时候，并不会把客户端真实的 Watcher 对象实体传递到服务端，仅仅是在客户端请求中使用 boolean 类型属性进行了标记。</p>
<p>（4）watcher event 异步发送 watcher 的通知事件从 server 发送到 client 是异步的，这就存在一个问题，不同的客户端和服务器之间通过 socket 进行通信，由于网络延迟或其他因素导致客户端在不通的时刻监听到事件，由于 Zookeeper 本身提供了 ordering guarantee，即客户端监听事件后，才会感知它所监视 znode发生了变化。所以我们使用 Zookeeper 不能期望能够监控到节点每次的变化。Zookeeper 只能保证最终的一致性，而无法保证强一致性。</p>
<p>（5）注册 watcher getData、exists、getChildren</p>
<p>（6）触发 watcher create、delete、setData</p>
<p>（7）当一个客户端连接到一个新的服务器上时，watch 将会被以任意会话事件触发。当与一个服务器失去连接的时候，是无法接收到 watch 的。而当 client 重新连接时，如果需要的话，所有先前注册过的 watch，都会被重新注册。通常这是完全透明的。只有在一个特殊情况下，watch 可能会丢失：对于一个未创建的 znode的 exist watch，如果在客户端断开连接期间被创建了，并且随后在客户端连接上之前又删除了，这种情况下，这个 watch 事件可能会被丢失。</p>
<h2 id="_7-客户端注册-watcher-实现" tabindex="-1"><a class="header-anchor" href="#_7-客户端注册-watcher-实现" aria-hidden="true">#</a> 7. 客户端注册 Watcher 实现</h2>
<p>（1）调用 getData()/getChildren()/exist()三个 API，传入 Watcher 对象</p>
<p>（2）标记请求 request，封装 Watcher 到 WatchRegistration</p>
<p>（3）封装成 Packet 对象，发服务端发送 request</p>
<p>（4）收到服务端响应后，将 Watcher 注册到 ZKWatcherManager 中进行管理</p>
<p>（5）请求返回，完成注册。</p>
<h2 id="_8-服务端处理-watcher-实现" tabindex="-1"><a class="header-anchor" href="#_8-服务端处理-watcher-实现" aria-hidden="true">#</a> 8. 服务端处理 Watcher 实现</h2>
<p>（1）服务端接收 Watcher 并存储</p>
<p>接收到客户端请求，处理请求判断是否需要注册 Watcher，需要的话将数据节点的节点路径和 ServerCnxn（ServerCnxn 代表一个客户端和服务端的连接，实现了 Watcher 的 process 接口，此时可以看成一个 Watcher 对象）存储在WatcherManager 的 WatchTable 和 watch2Paths 中去。</p>
<p>（2）Watcher 触发</p>
<p>以服务端接收到 setData() 事务请求触发 NodeDataChanged 事件为例：</p>
<p>2.1 封装 WatchedEvent</p>
<p>将通知状态（SyncConnected）、事件类型（NodeDataChanged）以及节点路径封装成一个 WatchedEvent 对象</p>
<p>2.2 查询 Watcher</p>
<p>从 WatchTable 中根据节点路径查找 Watcher</p>
<p>2.3 没找到；说明没有客户端在该数据节点上注册过 Watcher</p>
<p>2.4 找到；提取并从 WatchTable 和 Watch2Paths 中删除对应 Watcher（从这里可以看出 Watcher 在服务端是一次性的，触发一次就失效了）</p>
<p>（3）调用 process 方法来触发 Watcher</p>
<p>这里 process 主要就是通过 ServerCnxn 对应的 TCP 连接发送 Watcher 事件通知。</p>
<h2 id="_9-客户端回调-watcher" tabindex="-1"><a class="header-anchor" href="#_9-客户端回调-watcher" aria-hidden="true">#</a> 9. 客户端回调 Watcher</h2>
<p>客户端 SendThread 线程接收事件通知，交由 EventThread 线程回调 Watcher。</p>
<p>客户端的 Watcher 机制同样是一次性的，一旦被触发后，该 Watcher 就失效了。</p>
<h2 id="_10-acl-权限控制机制" tabindex="-1"><a class="header-anchor" href="#_10-acl-权限控制机制" aria-hidden="true">#</a> 10. ACL 权限控制机制</h2>
<p>UGO（User/Group/Others）</p>
<p>目前在 Linux/Unix 文件系统中使用，也是使用最广泛的权限控制方式。是一种粗粒度的文件系统权限控制模式。</p>
<p>ACL（Access Control List）访问控制列表</p>
<p>包括三个方面：</p>
<p>权限模式（Scheme）</p>
<p>（1）IP：从 IP 地址粒度进行权限控制</p>
<p>（2）Digest：最常用，用类似于 username:password 的权限标识来进行权限配置，便于区分不同应用来进行权限控制</p>
<p>（3）World：最开放的权限控制方式，是一种特殊的 digest 模式，只有一个权限标识“world:anyone”</p>
<p>（4）Super：超级用户</p>
<p>授权对象</p>
<p>授权对象指的是权限赋予的用户或一个指定实体，例如 IP 地址或是机器灯。</p>
<p>权限 Permission</p>
<p>（1）CREATE：数据节点创建权限，允许授权对象在该 Znode 下创建子节点</p>
<p>（2）DELETE：子节点删除权限，允许授权对象删除该数据节点的子节点</p>
<p>（3）READ：数据节点的读取权限，允许授权对象访问该数据节点并读取其数据内容或子节点列表等</p>
<p>（4）WRITE：数据节点更新权限，允许授权对象对该数据节点进行更新操作</p>
<p>（5）ADMIN：数据节点管理权限，允许授权对象对该数据节点进行 ACL 相关设置操作</p>
<h2 id="_11-chroot-特性" tabindex="-1"><a class="header-anchor" href="#_11-chroot-特性" aria-hidden="true">#</a> 11. Chroot 特性</h2>
<p>3.2.0 版本后，添加了 Chroot 特性，该特性允许每个客户端为自己设置一个命名空间。如果一个客户端设置了 Chroot，那么该客户端对服务器的任何操作，都将会被限制在其自己的命名空间下。</p>
<p>通过设置 Chroot，能够将一个客户端应用于 Zookeeper 服务端的一颗子树相对应，在那些多个应用公用一个 Zookeeper 进群的场景下，对实现不同应用间的相互隔离非常有帮助。</p>
<h2 id="_12-会话管理" tabindex="-1"><a class="header-anchor" href="#_12-会话管理" aria-hidden="true">#</a> 12. 会话管理</h2>
<p>分桶策略：将类似的会话放在同一区块中进行管理，以便于 Zookeeper 对会话进行不同区块的隔离处理以及同一区块的统一处理。</p>
<p>分配原则：每个会话的“下次超时时间点”（ExpirationTime）</p>
<p>计算公式：</p>
<p>ExpirationTime_ = currentTime + sessionTimeout</p>
<p>ExpirationTime = (ExpirationTime_ / ExpirationInrerval + 1) *</p>
<p>ExpirationInterval , ExpirationInterval 是指 Zookeeper 会话超时检查时间间隔，默认 tickTime</p>
<h2 id="_13-服务器角色" tabindex="-1"><a class="header-anchor" href="#_13-服务器角色" aria-hidden="true">#</a> 13. 服务器角色</h2>
<p>Leader</p>
<p>（1）事务请求的唯一调度和处理者，保证集群事务处理的顺序性</p>
<p>（2）集群内部各服务的调度者</p>
<p>Follower</p>
<p>（1）处理客户端的非事务请求，转发事务请求给 Leader 服务器</p>
<p>（2）参与事务请求 Proposal 的投票</p>
<p>（3）参与 Leader 选举投票</p>
<p>Observer</p>
<p>（1）3.0 版本以后引入的一个服务器角色，在不影响集群事务处理能力的基础上提升集群的非事务处理能力</p>
<p>（2）处理客户端的非事务请求，转发事务请求给 Leader 服务器</p>
<p>（3）不参与任何形式的投票</p>
<h2 id="_14-zookeeper-下-server-工作状态" tabindex="-1"><a class="header-anchor" href="#_14-zookeeper-下-server-工作状态" aria-hidden="true">#</a> 14. Zookeeper 下 Server 工作状态</h2>
<p>服务器具有四种状态，分别是 LOOKING、FOLLOWING、LEADING、OBSERVING。</p>
<p>（1）LOOKING：寻 找 Leader 状态。当服务器处于该状态时，它会认为当前集群中没有 Leader，因此需要进入 Leader 选举状态。</p>
<p>（2）FOLLOWING：跟随者状态。表明当前服务器角色是 Follower。</p>
<p>（3）LEADING：领导者状态。表明当前服务器角色是 Leader。</p>
<p>（4）OBSERVING：观察者状态。表明当前服务器角色是 Observer。</p>
<h2 id="_15-数据同步" tabindex="-1"><a class="header-anchor" href="#_15-数据同步" aria-hidden="true">#</a> 15. 数据同步</h2>
<p>整个集群完成 Leader 选举之后，Learner（Follower 和 Observer 的统称）回向Leader 服务器进行注册。当 Learner 服务器想 Leader 服务器完成注册后，进入数据同步环节。</p>
<p>数据同步流程：（均以消息传递的方式进行）</p>
<p>Learner 向 Leader 注册</p>
<p>数据同步</p>
<p>同步确认</p>
<p>Zookeeper 的数据同步通常分为四类：</p>
<p>（1）直接差异化同步（DIFF 同步）</p>
<p>（2）先回滚再差异化同步（TRUNC+DIFF 同步）</p>
<p>（3）仅回滚同步（TRUNC 同步）</p>
<p>（4）全量同步（SNAP 同步）</p>
<p>在进行数据同步前，Leader 服务器会完成数据同步初始化：</p>
<p>peerLastZxid：</p>
<p>· 从 learner 服务器注册时发送的 ACKEPOCH 消息中提取 lastZxid（该Learner 服务器最后处理的 ZXID）</p>
<p>minCommittedLog：</p>
<p>· Leader 服务器 Proposal 缓存队列 committedLog 中最小 ZXIDmaxCommittedLog：</p>
<p>· Leader 服务器 Proposal 缓存队列 committedLog 中最大 ZXID直接差异化同步（DIFF 同步）</p>
<p>· 场景：peerLastZxid 介于 minCommittedLog 和 maxCommittedLog之间先回滚再差异化同步（TRUNC+DIFF 同步）</p>
<p>· 场景：当新的 Leader 服务器发现某个 Learner 服务器包含了一条自己没有的事务记录，那么就需要让该 Learner 服务器进行事务回滚–回滚到 Leader服务器上存在的，同时也是最接近于 peerLastZxid 的 ZXID仅回滚同步（TRUNC 同步）</p>
<p>· 场景：peerLastZxid 大于 maxCommittedLog</p>
<p>全量同步（SNAP 同步）</p>
<p>· 场景一：peerLastZxid 小于 minCommittedLog</p>
<p>· 场景二：Leader 服务器上没有 Proposal 缓存队列且 peerLastZxid 不等于 lastProcessZxid</p>
<h2 id="_16-zookeeper-是如何保证事务的顺序一致性的" tabindex="-1"><a class="header-anchor" href="#_16-zookeeper-是如何保证事务的顺序一致性的" aria-hidden="true">#</a> 16. zookeeper 是如何保证事务的顺序一致性的？</h2>
<p>zookeeper 采用了全局递增的事务 Id 来标识，所有的 proposal（提议）都在被提出的时候加上了 zxid，zxid 实际上是一个 64 位的数字，高 32 位是 epoch（ 时期; 纪元; 世; 新时代）用来标识 leader 周期，如果有新的 leader 产生出来，epoch会自增，低 32 位用来递增计数。当新产生 proposal 的时候，会依据数据库的两阶段过程，首先会向其他的 server 发出事务执行请求，如果超过半数的机器都能执行并且能够成功，那么就会开始执行。</p>
<h2 id="_17-分布式集群中为什么会有-master主节点" tabindex="-1"><a class="header-anchor" href="#_17-分布式集群中为什么会有-master主节点" aria-hidden="true">#</a> 17. 分布式集群中为什么会有 Master主节点？</h2>
<p>在分布式环境中，有些业务逻辑只需要集群中的某一台机器进行执行，其他的机器可以共享这个结果，这样可以大大减少重复计算，提高性能，于是就需要进行 leader 选举。</p>
<h2 id="_18-zk-节点宕机如何处理" tabindex="-1"><a class="header-anchor" href="#_18-zk-节点宕机如何处理" aria-hidden="true">#</a> 18. zk 节点宕机如何处理？</h2>
<p>Zookeeper 本身也是集群，推荐配置不少于 3 个服务器。Zookeeper 自身也要保证当一个节点宕机时，其他节点会继续提供服务。</p>
<p>如果是一个 Follower 宕机，还有 2 台服务器提供访问，因为 Zookeeper 上的数据是有多个副本的，数据并不会丢失；</p>
<p>如果是一个 Leader 宕机，Zookeeper 会选举出新的 Leader。</p>
<p>ZK 集群的机制是只要超过半数的节点正常，集群就能正常提供服务。只有在 ZK节点挂得太多，只剩一半或不到一半节点能工作，集群才失效。</p>
<p>所以</p>
<p>3 个节点的 cluster 可以挂掉 1 个节点(leader 可以得到 2 票&gt;1.5)</p>
<p>2 个节点的 cluster 就不能挂掉任何 1 个节点了(leader 可以得到 1 票&lt;=1)</p>
<h2 id="_19-zookeeper-负载均衡和-nginx-负载均衡区别" tabindex="-1"><a class="header-anchor" href="#_19-zookeeper-负载均衡和-nginx-负载均衡区别" aria-hidden="true">#</a> 19. zookeeper 负载均衡和 nginx 负载均衡区别</h2>
<p>zk 的负载均衡是可以调控，nginx 只是能调权重，其他需要可控的都需要自己写插件；但是 nginx 的吞吐量比 zk 大很多，应该说按业务选择用哪种方式。</p>
<h2 id="_20-zookeeper-有哪几种几种部署模式" tabindex="-1"><a class="header-anchor" href="#_20-zookeeper-有哪几种几种部署模式" aria-hidden="true">#</a> 20. Zookeeper 有哪几种几种部署模式？</h2>
<p>Zookeeper 有三种部署模式：</p>
<ol>
<li>单机部署：一台集群上运行；</li>
<li>集群部署：多台集群运行；</li>
<li>伪集群部署：一台集群启动多个 Zookeeper 实例运行。</li>
</ol>
<h2 id="_21-集群最少要几台机器-集群规则是怎样的-集群中有-3-台服务器-其中一个节点宕机-这个时候-zookeeper-还可以使用吗" tabindex="-1"><a class="header-anchor" href="#_21-集群最少要几台机器-集群规则是怎样的-集群中有-3-台服务器-其中一个节点宕机-这个时候-zookeeper-还可以使用吗" aria-hidden="true">#</a> 21. 集群最少要几台机器，集群规则是怎样的？集群中有 3 台服务器，其中一个节点宕机，这个时候 Zookeeper 还可以使用吗？</h2>
<p>集群规则为 2N+1 台，N&gt;0，即 3 台。可以继续使用，单数服务器只要没超过一半的服务器宕机就可以继续使用。</p>
<h2 id="_22-集群支持动态添加机器吗" tabindex="-1"><a class="header-anchor" href="#_22-集群支持动态添加机器吗" aria-hidden="true">#</a> 22. 集群支持动态添加机器吗？</h2>
<p>其实就是水平扩容了，Zookeeper 在这方面不太好。两种方式：</p>
<p>全部重启：关闭所有 Zookeeper 服务，修改配置之后启动。不影响之前客户端的会话。</p>
<p>逐个重启：在过半存活即可用的原则下，一台机器重启不影响整个集群对外提供服务。这是比较常用的方式。</p>
<p>3.5 版本开始支持动态扩容。</p>
<h2 id="_23-zookeeper-对节点的-watch-监听通知是永久的吗-为什么不是永久的" tabindex="-1"><a class="header-anchor" href="#_23-zookeeper-对节点的-watch-监听通知是永久的吗-为什么不是永久的" aria-hidden="true">#</a> 23. Zookeeper 对节点的 watch 监听通知是永久的吗？为什么不是永久的?</h2>
<p>不是。官方声明：一个 Watch 事件是一个一次性的触发器，当被设置了 Watch的数据发生了改变的时候，则服务器将这个改变发送给设置了 Watch 的客户端，以便通知它们。</p>
<p>为什么不是永久的，举个例子，如果服务端变动频繁，而监听的客户端很多情况下，每次变动都要通知到所有的客户端，给网络和服务器造成很大压力。</p>
<p>一般是客户端执行 getData(“/节点 A”,true)，如果节点 A 发生了变更或删除，客户端会得到它的 watch 事件，但是在之后节点 A 又发生了变更，而客户端又没有设置 watch 事件，就不再给客户端发送。</p>
<p>在实际应用中，很多情况下，我们的客户端不需要知道服务端的每一次变动，我只要最新的数据即可。</p>
<h2 id="_24-zookeeper-的-java-客户端都有哪些" tabindex="-1"><a class="header-anchor" href="#_24-zookeeper-的-java-客户端都有哪些" aria-hidden="true">#</a> 24. Zookeeper 的 java 客户端都有哪些？</h2>
<p>java 客户端：zk 自带的 zkclient 及 Apache 开源的 Curator。</p>
<h2 id="_25-chubby-是什么-和-zookeeper-比你怎么看" tabindex="-1"><a class="header-anchor" href="#_25-chubby-是什么-和-zookeeper-比你怎么看" aria-hidden="true">#</a> 25. chubby 是什么，和 zookeeper 比你怎么看？</h2>
<p>chubby 是 google 的，完全实现 paxos 算法，不开源。zookeeper 是 chubby的开源实现，使用 zab 协议，paxos 算法的变种。</p>
<h2 id="_26-说几个-zookeeper-常用的命令。" tabindex="-1"><a class="header-anchor" href="#_26-说几个-zookeeper-常用的命令。" aria-hidden="true">#</a> 26. 说几个 zookeeper 常用的命令。</h2>
<p>常用命令：ls get set create delete 等。</p>
<h2 id="_27-zab-和-paxos-算法的联系与区别" tabindex="-1"><a class="header-anchor" href="#_27-zab-和-paxos-算法的联系与区别" aria-hidden="true">#</a> 27. ZAB 和 Paxos 算法的联系与区别？</h2>
<p>相同点：</p>
<p>（1）两者都存在一个类似于 Leader 进程的角色，由其负责协调多个 Follower 进程的运行</p>
<p>（2）Leader 进程都会等待超过半数的 Follower 做出正确的反馈后，才会将一个提案进行提交</p>
<p>（3）ZAB 协议中，每个 Proposal 中都包含一个 epoch 值来代表当前的 Leader周期，Paxos 中名字为 Ballot</p>
<p>不同点：</p>
<p>ZAB 用来构建高可用的分布式数据主备系统（Zookeeper），Paxos 是用来构建分布式一致性状态机系统。</p>
<h2 id="zookeeper-的典型应用场景" tabindex="-1"><a class="header-anchor" href="#zookeeper-的典型应用场景" aria-hidden="true">#</a> Zookeeper 的典型应用场景</h2>
<p>Zookeeper 是一个典型的发布/订阅模式的分布式数据管理与协调框架，开发人员可以使用它来进行分布式数据的发布和订阅。</p>
<p>通过对 Zookeeper 中丰富的数据节点进行交叉使用，配合 Watcher 事件通知机制，可以非常方便的构建一系列分布式应用中年都会涉及的核心功能，如：</p>
<ol>
<li>数据发布/订阅</li>
<li>负载均衡</li>
<li>命名服务</li>
<li>分布式协调/通知</li>
<li>集群管理</li>
<li>Master 选举</li>
<li>分布式锁</li>
<li>分布式队列</li>
</ol>
<h4 id="数据发布-订阅" tabindex="-1"><a class="header-anchor" href="#数据发布-订阅" aria-hidden="true">#</a> 数据发布/订阅</h4>
<p><strong>数据发布/订阅（Publish/Subscribe）系统</strong>，即所谓的配置中心，顾名思义就是发布者将数据发布到ZooKeeper的一个或一系列节点上，供订阅者进行数据订阅，进而达到动态获取数据的目的，实现配置信息的集中式管理和数据的动态更新。</p>
<p>**发布/订阅系统一般有两种设计模式，**分别是推（Push）模式和拉（Pull）模式。在推模式中，服务端主动将数据更新发送给所有订阅的客户端；而拉模式则是由客户端主动发起请求来获取最新数据，通常客户端都采用定时进行轮询拉取的方式。</p>
<p><strong>ZooKeeper 采用的是推拉相结合的方式</strong>：客户端向服务端注册自己需要关注的节点，一旦该节点的数据发生变更，那么服务端就会向相应的客户端发送Watcher事件通知，客户端接收到这个消息通知之后，需要主动到服务端获取最新的数据</p>
<h4 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h4>
<p>使用Zookeeper实现负载均衡原理，服务器端将启动的服务注册到，zk注册中心上，采用临时节点。客户端从zk节点上获取最新服务节点信息，本地使用负载均衡算法，随机分配服务器。</p>
<h4 id="分布式通知和协调" tabindex="-1"><a class="header-anchor" href="#分布式通知和协调" aria-hidden="true">#</a> 分布式通知和协调</h4>
<p>对于系统调度来说：操作人员发送通知实际是通过控制台改变某个节点的状态，然后 zk 将这些变化发送给注册了这个节点的 watcher 的所有客户端。</p>
<p>对于执行情况汇报：每个工作进程都在某个目录下创建一个临时节点。并携带工作的进度数据，这样汇总的进程可以监控目录子节点的变化获得工作进度的实时的全局情况。</p>
<h4 id="zk-的命名服务-文件系统" tabindex="-1"><a class="header-anchor" href="#zk-的命名服务-文件系统" aria-hidden="true">#</a> zk 的命名服务（文件系统）</h4>
<p>命名服务是指通过指定的名字来获取资源或者服务的地址，利用 zk 创建一个全局的路径，即是唯一的路径，这个路径就可以作为一个名字，指向集群中的集群，提供的服务的地址，或者一个远程的对象等等。</p>
<h4 id="zookeeper-集群管理" tabindex="-1"><a class="header-anchor" href="#zookeeper-集群管理" aria-hidden="true">#</a> Zookeeper 集群管理</h4>
<p>所谓集群管理无在乎两点：是否有机器退出和加入、选举 master。</p>
<p>对于第一点，所有机器约定在父目录下创建临时目录节点，然后监听父目录节点的子节点变化消息。一旦有机器挂掉，该机器与 zookeeper 的连接断开，其所创建的临时目录节点被删除，所有其他机器都收到通知：某个兄弟目录被删除，于是，所有人都知道：它上船了。</p>
<p>新机器加入也是类似，所有机器收到通知：新兄弟目录加入，highcount 又有了，对于第二点，我们稍微改变一下，所有机器创建临时顺序编号目录节点，每次选取编号最小的机器作为 master 就好。</p>
<h4 id="zookeeper-分布式锁" tabindex="-1"><a class="header-anchor" href="#zookeeper-分布式锁" aria-hidden="true">#</a> Zookeeper 分布式锁</h4>
<p>有了 zookeeper 的一致性文件系统，锁的问题变得容易。锁服务可以分为两类，一个是保持独占，另一个是控制时序。</p>
<p>对于第一类，我们将 zookeeper 上的一个 znode 看作是一把锁，通过 createznode 的方式来实现。所有客户端都去创建 /distribute_lock 节点，最终成功创建的那个客户端也即拥有了这把锁。用完删除掉自己创建的 distribute_lock 节点就释放出锁。</p>
<p>对于第二类， /distribute_lock 已经预先存在，所有客户端在它下面创建临时顺序编号目录节点，和选 master 一样，编号最小的获得锁，用完删除，依次方便。</p>
<h4 id="zookeeper-队列管理" tabindex="-1"><a class="header-anchor" href="#zookeeper-队列管理" aria-hidden="true">#</a> Zookeeper 队列管理</h4>
<p>两种类型的队列：</p>
<ol>
<li>
<p>同步队列，当一个队列的成员都聚齐时，这个队列才可用，否则一直等待所有成员到达。</p>
</li>
<li>
<p>队列按照 FIFO 方式进行入队和出队操作。</p>
</li>
</ol>
<p>第一类，在约定目录下创建临时目录节点，监听节点数目是否是我们要求的数目。</p>
<p>第二类，和分布式锁服务中的控制时序场景基本原理一致，入列有编号，出列按编号。在特定的目录下创建 PERSISTENT_SEQUENTIAL 节点，创建成功时Watcher 通知等待的队列，队列删除序列号最小的节点用以消费。此场景下Zookeeper 的 znode 用于消息存储，znode 存储的数据就是消息队列中的消息内容，SEQUENTIAL 序列号就是消息的编号，按序取出即可。由于创建的节点是持久化的，所以不必担心队列消息的丢失问题。</p>
<h2 id="zookeeper-都有哪些功能-1" tabindex="-1"><a class="header-anchor" href="#zookeeper-都有哪些功能-1" aria-hidden="true">#</a> Zookeeper 都有哪些功能？</h2>
<ol>
<li>集群管理：监控节点存活状态、运行请求等；</li>
<li>主节点选举：主节点挂掉了之后可以从备用的节点开始新一轮选主，主节点选举说的就是这个选举的过程，使用 Zookeeper 可以协助完成这个过程；</li>
<li>分布式锁：Zookeeper 提供两种锁：独占锁、共享锁。独占锁即一次只能有一个线程使用资源，共享锁是读锁共享，读写互斥，即可以有多线线程同时读同一个资源，如果要使用写锁也只能有一个线程使用。Zookeeper 可以对分布式锁进行控制。</li>
<li>命名服务：在分布式系统中，通过使用命名服务，客户端应用能够根据指定名字来获取资源或服务的地址，提供者等信息。</li>
</ol>
<h2 id="_30-说一下-zookeeper-的通知机制" tabindex="-1"><a class="header-anchor" href="#_30-说一下-zookeeper-的通知机制" aria-hidden="true">#</a> 30. 说一下 Zookeeper 的通知机制？</h2>
<p>client 端会对某个 znode 建立一个 watcher 事件，当该 znode 发生变化时，这些 client 会收到 zk 的通知，然后 client 可以根据 znode 变化来做出业务上的改变等。</p>
<h2 id="_31-zookeeper-和-dubbo-的关系" tabindex="-1"><a class="header-anchor" href="#_31-zookeeper-和-dubbo-的关系" aria-hidden="true">#</a> 31. Zookeeper 和 Dubbo 的关系？</h2>
<p>Zookeeper的作用：</p>
<p>zookeeper用来注册服务和进行负载均衡，哪一个服务由哪一个机器来提供必需让调用者知道，简单来说就是ip地址和服务名称的对应关系。当然也可以通过硬编码的方式把这种对应关系在调用方业务代码中实现，但是如果提供服务的机器挂掉调用者无法知晓，如果不更改代码会继续请求挂掉的机器提供服务。zookeeper通过心跳机制可以检测挂掉的机器并将挂掉机器的ip和服务对应关系从列表中删除。至于支持高并发，简单来说就是横向扩展，在不更改代码的情况通过添加机器来提高运算能力。通过添加新的机器向zookeeper注册服务，服务的提供者多了能服务的客户就多了。</p>
<p>dubbo：</p>
<p>是管理中间层的工具，在业务层到数据仓库间有非常多服务的接入和服务提供者需要调度，dubbo提供一个框架解决这个问题。
注意这里的dubbo只是一个框架，至于你架子上放什么是完全取决于你的，就像一个汽车骨架，你需要配你的轮子引擎。这个框架中要完成调度必须要有一个分布式的注册中心，储存所有服务的元数据，你可以用zk，也可以用别的，只是大家都用zk。</p>
<p>zookeeper和dubbo的关系：</p>
<p>Dubbo 的将注册中心进行抽象，它可以外接不同的存储媒介给注册中心提供服务，有 ZooKeeper，Memcached，Redis 等。</p>
<p>引入了 ZooKeeper 作为存储媒介，也就把 ZooKeeper 的特性引进来。首先是负载均衡，单注册中心的承载能力是有限的，在流量达到一定程度的时 候就需要分流，负载均衡就是为了分流而存在的，一个 ZooKeeper 群配合相应的 Web 应用就可以很容易达到负载均衡；资源同步，单单有负载均衡还不 够，节点之间的数据和资源需要同步，ZooKeeper 集群就天然具备有这样的功能；命名服务，将树状结构用于维护全局的服务地址列表，服务提供者在启动 的时候，向 ZooKeeper 上的指定节点 /dubbo/${serviceName}/providers 目录下写入自己的 URL 地址，这个操作就完成了服务的发布。 其他特性还有 Mast 选举，分布式锁等。</p>
<p><img src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly91c2VyLWdvbGQtY2RuLnhpdHUuaW8vMjAxOS8xMC8zMS8xNmUyMTliYzc3MDA5OGRm?x-oss-process=image/format,png" alt="img" loading="lazy"></p>
<h3 id="zk-是-cp-还是-ap" tabindex="-1"><a class="header-anchor" href="#zk-是-cp-还是-ap" aria-hidden="true">#</a> zk 是 CP 还是 AP</h3>
<p>zk的ap和cp是从不同的角度分析的。</p>
<p>从一个读写请求分析，保证了可用性（不用阻塞等待全部follwer同步完成），保证不了数据的一致性，所以是ap。</p>
<p>但是从zk架构分析，zk在leader选举期间，会暂停对外提供服务（为啥会暂停，因为zk依赖leader来保证数据一致性)，所以丢失了可用性，保证了一致性，即cp。</p>
<p>再细点话，这个c不是强一致性，而是最终一致性。即上面的写案例，数据最终会同步到一致，只是时间问题。</p>
<p>综上，zk广义上来说是cp，狭义上是ap。</p>
</div></template>
