<template><div><h1 id="rocketmq常见问题" tabindex="-1"><a class="header-anchor" href="#rocketmq常见问题" aria-hidden="true">#</a> RocketMQ常见问题</h1>
<p>本文来自读者 <a href="https://github.com/Snailclimb/JavaGuide/pull/291" target="_blank" rel="noopener noreferrer">PR<ExternalLinkIcon/></a>。</p>
<h2 id="_1-单机版消息中心" tabindex="-1"><a class="header-anchor" href="#_1-单机版消息中心" aria-hidden="true">#</a> 1 单机版消息中心</h2>
<p>一个消息中心，最基本的需要支持多生产者、多消费者，例如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Scratch</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 实际中会有 nameserver 服务来找到 broker 具体位置以及 broker 主从信息</span>
        <span class="token class-name">Broker</span> broker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Broker</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Producer</span> producer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Producer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        producer1<span class="token punctuation">.</span><span class="token function">connectBroker</span><span class="token punctuation">(</span>broker<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Producer</span> producer2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Producer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        producer2<span class="token punctuation">.</span><span class="token function">connectBroker</span><span class="token punctuation">(</span>broker<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Consumer</span> consumer1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Consumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        consumer1<span class="token punctuation">.</span><span class="token function">connectBroker</span><span class="token punctuation">(</span>broker<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Consumer</span> consumer2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Consumer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        consumer2<span class="token punctuation">.</span><span class="token function">connectBroker</span><span class="token punctuation">(</span>broker<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            producer1<span class="token punctuation">.</span><span class="token function">asyncSendMsg</span><span class="token punctuation">(</span><span class="token string">"producer1 send msg"</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            producer2<span class="token punctuation">.</span><span class="token function">asyncSendMsg</span><span class="token punctuation">(</span><span class="token string">"producer2 send msg"</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"broker has msg:"</span> <span class="token operator">+</span> broker<span class="token punctuation">.</span><span class="token function">getAllMagByDisk</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"consumer1 consume msg："</span> <span class="token operator">+</span> consumer1<span class="token punctuation">.</span><span class="token function">syncPullMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"consumer2 consume msg："</span> <span class="token operator">+</span> consumer2<span class="token punctuation">.</span><span class="token function">syncPullMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Producer</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Broker</span> broker<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">connectBroker</span><span class="token punctuation">(</span><span class="token class-name">Broker</span> broker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>broker <span class="token operator">=</span> broker<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">asyncSendMsg</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>broker <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"please connect broker first"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
            broker<span class="token punctuation">.</span><span class="token function">sendMsg</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Consumer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Broker</span> broker<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">connectBroker</span><span class="token punctuation">(</span><span class="token class-name">Broker</span> broker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>broker <span class="token operator">=</span> broker<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">syncPullMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> broker<span class="token punctuation">.</span><span class="token function">getMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Broker</span> <span class="token punctuation">{</span>

    <span class="token comment">// 对应 RocketMQ 中 MessageQueue，默认情况下 1 个 Topic 包含 4 个 MessageQueue</span>
    <span class="token keyword">private</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> messageQueue <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LinkedBlockingQueue</span><span class="token punctuation">(</span><span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 实际发送消息到 broker 服务器使用 Netty 发送</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sendMsg</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            messageQueue<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 实际会同步或异步落盘，异步落盘使用的定时任务定时扫描落盘</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> messageQueue<span class="token punctuation">.</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getAllMagByDisk</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token string">"\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        messageQueue<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEachRemaining</span><span class="token punctuation">(</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
            sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>msg <span class="token operator">+</span> <span class="token string">"\n"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sb<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题：</p>
<ol>
<li>没有实现真正执行消息存储落盘</li>
<li>没有实现 NameServer 去作为注册中心，定位服务</li>
<li>使用 LinkedBlockingQueue 作为消息队列，注意，参数是无限大，在真正 RocketMQ 也是如此是无限大，理论上不会出现对进来的数据进行抛弃，但是会有内存泄漏问题（阿里巴巴开发手册也因为这个问题，建议我们使用自制线程池）</li>
<li>没有使用多个队列（即多个 LinkedBlockingQueue），RocketMQ 的顺序消息是通过生产者和消费者同时使用同一个 MessageQueue 来实现，但是如果我们只有一个 MessageQueue，那我们天然就支持顺序消息</li>
<li>没有使用 MappedByteBuffer 来实现文件映射从而使消息数据落盘非常的快（实际 RocketMQ 使用的是 FileChannel+DirectBuffer）</li>
</ol>
<h2 id="_2-分布式消息中心" tabindex="-1"><a class="header-anchor" href="#_2-分布式消息中心" aria-hidden="true">#</a> 2 分布式消息中心</h2>
<h3 id="_2-1-问题与解决" tabindex="-1"><a class="header-anchor" href="#_2-1-问题与解决" aria-hidden="true">#</a> 2.1 问题与解决</h3>
<h4 id="_2-1-1-消息丢失的问题" tabindex="-1"><a class="header-anchor" href="#_2-1-1-消息丢失的问题" aria-hidden="true">#</a> 2.1.1 消息丢失的问题</h4>
<ol>
<li>当你系统需要保证百分百消息不丢失，你可以使用生产者每发送一个消息，Broker 同步返回一个消息发送成功的反馈消息</li>
<li>即每发送一个消息，同步落盘后才返回生产者消息发送成功，这样只要生产者得到了消息发送生成的返回，事后除了硬盘损坏，都可以保证不会消息丢失</li>
<li>但是这同时引入了一个问题，同步落盘怎么才能快？</li>
</ol>
<h4 id="_2-1-2-同步落盘怎么才能快" tabindex="-1"><a class="header-anchor" href="#_2-1-2-同步落盘怎么才能快" aria-hidden="true">#</a> 2.1.2 同步落盘怎么才能快</h4>
<ol>
<li>使用 FileChannel + DirectBuffer 池，使用堆外内存，加快内存拷贝</li>
<li>使用数据和索引分离，当消息需要写入时，使用 commitlog 文件顺序写，当需要定位某个消息时，查询index 文件来定位，从而减少文件IO随机读写的性能损耗</li>
</ol>
<h4 id="_2-1-3-消息堆积的问题" tabindex="-1"><a class="header-anchor" href="#_2-1-3-消息堆积的问题" aria-hidden="true">#</a> 2.1.3 消息堆积的问题</h4>
<ol>
<li>后台定时任务每隔72小时，删除旧的没有使用过的消息信息</li>
<li>根据不同的业务实现不同的丢弃任务，具体参考线程池的 AbortPolicy，例如FIFO/LRU等（RocketMQ没有此策略）</li>
<li>消息定时转移，或者对某些重要的 TAG 型（支付型）消息真正落库</li>
</ol>
<h4 id="_2-1-4-定时消息的实现" tabindex="-1"><a class="header-anchor" href="#_2-1-4-定时消息的实现" aria-hidden="true">#</a> 2.1.4 定时消息的实现</h4>
<ol>
<li>实际 RocketMQ 没有实现任意精度的定时消息，它只支持某些特定的时间精度的定时消息</li>
<li>实现定时消息的原理是：创建特定时间精度的 MessageQueue，例如生产者需要定时1s之后被消费者消费，你只需要将此消息发送到特定的 Topic，例如：MessageQueue-1 表示这个 MessageQueue 里面的消息都会延迟一秒被消费，然后 Broker 会在 1s 后发送到消费者消费此消息，使用 newSingleThreadScheduledExecutor 实现</li>
</ol>
<h4 id="_2-1-5-顺序消息的实现" tabindex="-1"><a class="header-anchor" href="#_2-1-5-顺序消息的实现" aria-hidden="true">#</a> 2.1.5 顺序消息的实现</h4>
<ol>
<li>与定时消息同原理，生产者生产消息时指定特定的 MessageQueue ，消费者消费消息时，消费特定的 MessageQueue，其实单机版的消息中心在一个 MessageQueue 就天然支持了顺序消息</li>
<li>注意：同一个 MessageQueue 保证里面的消息是顺序消费的前提是：消费者是串行的消费该 MessageQueue，因为就算 MessageQueue 是顺序的，但是当并行消费时，还是会有顺序问题，但是串行消费也同时引入了两个问题：</li>
</ol>
<blockquote>
<ol>
<li>引入锁来实现串行</li>
<li>前一个消费阻塞时后面都会被阻塞</li>
</ol>
</blockquote>
<h4 id="_2-1-6-分布式消息的实现" tabindex="-1"><a class="header-anchor" href="#_2-1-6-分布式消息的实现" aria-hidden="true">#</a> 2.1.6 分布式消息的实现</h4>
<ol>
<li>需要前置知识：2PC</li>
<li>RocketMQ4.3 起支持，原理为2PC，即两阶段提交，prepared-&gt;commit/rollback</li>
<li>生产者发送事务消息，假设该事务消息 Topic 为 Topic1-Trans，Broker 得到后首先更改该消息的 Topic 为 Topic1-Prepared，该 Topic1-Prepared 对消费者不可见。然后定时回调生产者的本地事务A执行状态，根据本地事务A执行状态，来是否将该消息修改为 Topic1-Commit 或 Topic1-Rollback，消费者就可以正常找到该事务消息或者不执行等</li>
</ol>
<blockquote>
<p>注意，就算是事务消息最后回滚了也不会物理删除，只会逻辑删除该消息</p>
</blockquote>
<h4 id="_2-1-7-消息的-push-实现" tabindex="-1"><a class="header-anchor" href="#_2-1-7-消息的-push-实现" aria-hidden="true">#</a> 2.1.7 消息的 push 实现</h4>
<ol>
<li>注意，RocketMQ 已经说了自己会有低延迟问题，其中就包括这个消息的 push 延迟问题</li>
<li>因为这并不是真正的将消息主动的推送到消费者，而是 Broker 定时任务每5s将消息推送到消费者</li>
<li>pull模式需要我们手动调用consumer拉消息，而push模式则只需要我们提供一个listener即可实现对消息的监听，而实际上，RocketMQ的push模式是基于pull模式实现的，它没有实现真正的push。</li>
<li>push方式里，consumer把轮询过程封装了，并注册MessageListener监听器，取到消息后，唤醒MessageListener的consumeMessage()来消费，对用户而言，感觉消息是被推送过来的。</li>
</ol>
<h4 id="_2-1-8-消息重复发送的避免" tabindex="-1"><a class="header-anchor" href="#_2-1-8-消息重复发送的避免" aria-hidden="true">#</a> 2.1.8 消息重复发送的避免</h4>
<ol>
<li>RocketMQ 会出现消息重复发送的问题，因为在网络延迟的情况下，这种问题不可避免的发生，如果非要实现消息不可重复发送，那基本太难，因为网络环境无法预知，还会使程序复杂度加大，因此默认允许消息重复发送</li>
<li>RocketMQ 让使用者在消费者端去解决该问题，即需要消费者端在消费消息时支持幂等性的去消费消息</li>
<li>最简单的解决方案是每条消费记录有个消费状态字段，根据这个消费状态字段来判断是否消费或者使用一个集中式的表，来存储所有消息的消费状态，从而避免重复消费</li>
<li>具体实现可以查询关于消息幂等消费的解决方案</li>
</ol>
<h4 id="_2-1-9-广播消费与集群消费" tabindex="-1"><a class="header-anchor" href="#_2-1-9-广播消费与集群消费" aria-hidden="true">#</a> 2.1.9 广播消费与集群消费</h4>
<ol>
<li>消息消费区别：广播消费，订阅该 Topic 的消息者们都会消费<strong>每个</strong>消息。集群消费，订阅该 Topic 的消息者们只会有一个去消费<strong>某个</strong>消息</li>
<li>消息落盘区别：具体表现在消息消费进度的保存上。广播消费，由于每个消费者都独立的去消费每个消息，因此每个消费者各自保存自己的消息消费进度。而集群消费下，订阅了某个 Topic，而旗下又有多个 MessageQueue，每个消费者都可能会去消费不同的 MessageQueue，因此总体的消费进度保存在 Broker 上集中的管理</li>
</ol>
<h4 id="_2-1-10-rocketmq-不使用-zookeeper-作为注册中心的原因-以及自制的-nameserver-优缺点" tabindex="-1"><a class="header-anchor" href="#_2-1-10-rocketmq-不使用-zookeeper-作为注册中心的原因-以及自制的-nameserver-优缺点" aria-hidden="true">#</a> 2.1.10 RocketMQ 不使用 ZooKeeper 作为注册中心的原因，以及自制的 NameServer 优缺点？</h4>
<ol>
<li>ZooKeeper 作为支持顺序一致性的中间件，在某些情况下，它为了满足一致性，会丢失一定时间内的可用性，RocketMQ 需要注册中心只是为了发现组件地址，在某些情况下，RocketMQ 的注册中心可以出现数据不一致性，这同时也是 NameServer 的缺点，因为 NameServer 集群间互不通信，它们之间的注册信息可能会不一致</li>
<li>另外，当有新的服务器加入时，NameServer 并不会立马通知到 Producer，而是由 Producer 定时去请求 NameServer 获取最新的 Broker/Consumer 信息（这种情况是通过 Producer 发送消息时，负载均衡解决）</li>
</ol>
<h4 id="_2-1-11-其它" tabindex="-1"><a class="header-anchor" href="#_2-1-11-其它" aria-hidden="true">#</a> 2.1.11 其它</h4>
<p><img src="https://leran2deeplearnjavawebtech.oss-cn-beijing.aliyuncs.com/somephoto/RocketMQ流程.png" alt="" loading="lazy"></p>
<p>加分项咯</p>
<ol>
<li>包括组件通信间使用 Netty 的自定义协议</li>
<li>消息重试负载均衡策略（具体参考 Dubbo 负载均衡策略）</li>
<li>消息过滤器（Producer 发送消息到 Broker，Broker 存储消息信息，Consumer 消费时请求 Broker 端从磁盘文件查询消息文件时,在 Broker 端就使用过滤服务器进行过滤）</li>
<li>Broker 同步双写和异步双写中 Master 和 Slave 的交互</li>
<li>Broker 在 4.5.0 版本更新中引入了基于 Raft 协议的多副本选举，之前这是商业版才有的特性 <a href="http://rocketmq.apache.org/release_notes/release-notes-4.5.0/" target="_blank" rel="noopener noreferrer">ISSUE-1046<ExternalLinkIcon/></a></li>
</ol>
<h2 id="_3-参考" tabindex="-1"><a class="header-anchor" href="#_3-参考" aria-hidden="true">#</a> 3 参考</h2>
<ol>
<li>《RocketMQ技术内幕》：<a href="https://blog.csdn.net/prestigeding/article/details/85233529" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/prestigeding/article/details/85233529<ExternalLinkIcon/></a></li>
<li>关于 RocketMQ 对 MappedByteBuffer 的一点优化：<a href="https://lishoubo.github.io/2017/09/27/MappedByteBuffer%E7%9A%84%E4%B8%80%E7%82%B9%E4%BC%98%E5%8C%96/" target="_blank" rel="noopener noreferrer">https://lishoubo.github.io/2017/09/27/MappedByteBuffer的一点优化/<ExternalLinkIcon/></a></li>
<li>十分钟入门RocketMQ：<a href="https://developer.aliyun.com/article/66101" target="_blank" rel="noopener noreferrer">https://developer.aliyun.com/article/66101<ExternalLinkIcon/></a></li>
<li>分布式事务的种类以及 RocketMQ 支持的分布式消息：<a href="https://www.infoq.cn/article/2018/08/rocketmq-4.3-release" target="_blank" rel="noopener noreferrer">https://www.infoq.cn/article/2018/08/rocketmq-4.3-release<ExternalLinkIcon/></a></li>
<li>滴滴出行基于RocketMQ构建企业级消息队列服务的实践：<a href="https://yq.aliyun.com/articles/664608" target="_blank" rel="noopener noreferrer">https://yq.aliyun.com/articles/664608<ExternalLinkIcon/></a></li>
<li>基于《RocketMQ技术内幕》源码注释：<a href="https://github.com/LiWenGu/awesome-rocketmq" target="_blank" rel="noopener noreferrer">https://github.com/LiWenGu/awesome-rocketmq<ExternalLinkIcon/></a></li>
</ol>
</div></template>
