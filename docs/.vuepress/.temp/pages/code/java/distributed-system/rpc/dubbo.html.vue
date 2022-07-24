<template><div><h1 id="dubbo知识点-面试题总结" tabindex="-1"><a class="header-anchor" href="#dubbo知识点-面试题总结" aria-hidden="true">#</a> Dubbo知识点&amp;面试题总结</h1>
<p>这篇文章是我根据官方文档以及自己平时的使用情况，对 Dubbo 所做的一个总结。欢迎补充！</p>
<h2 id="rpc基础" tabindex="-1"><a class="header-anchor" href="#rpc基础" aria-hidden="true">#</a> RPC基础</h2>
<h3 id="何为-rpc" tabindex="-1"><a class="header-anchor" href="#何为-rpc" aria-hidden="true">#</a> 何为 RPC?</h3>
<p><strong>RPC（Remote Procedure Call）</strong> 即远程过程调用，通过名字我们就能看出 RPC 关注的是远程调用而非本地调用。</p>
<p><strong>为什么要 RPC  ？</strong> 因为，两个不同的服务器上的服务提供的方法不在一个内存空间，所以，需要通过网络编程才能传递方法调用所需要的参数。并且，方法调用的结果也需要通过网络编程来接收。但是，如果我们自己手动网络编程来实现这个调用过程的话工作量是非常大的，因为，我们需要考虑底层传输方式（TCP还是UDP）、序列化方式等等方面。</p>
<p><strong>RPC 能帮助我们做什么呢？</strong> 简单来说，通过 RPC 可以帮助我们调用远程计算机上某个服务的方法，这个过程就像调用本地方法一样简单。并且！我们不需要了解底层网络编程的具体细节。</p>
<p>举个例子：两个不同的服务 A、B 部署在两台不同的机器上，服务 A 如果想要调用服务 B 中的某个方法的话就可以通过 RPC 来做。</p>
<p>一言蔽之：<strong>RPC 的出现就是为了让你调用远程方法像调用本地方法一样简单。</strong></p>
<h3 id="rpc-的原理是什么" tabindex="-1"><a class="header-anchor" href="#rpc-的原理是什么" aria-hidden="true">#</a> RPC 的原理是什么?</h3>
<p>为了能够帮助小伙伴们理解 RPC 原理，我们可以将整个 RPC的 核心功能看作是下面👇 6 个部分实现的：</p>
<ol>
<li><strong>客户端（服务消费端）</strong> ：调用远程方法的一端。</li>
<li><strong>客户端 Stub（桩）</strong> ： 这其实就是一代理类。代理类主要做的事情很简单，就是把你调用方法、类、方法参数等信息传递到服务端。</li>
<li><strong>网络传输</strong> ： 网络传输就是你要把你调用的方法的信息比如说参数啊这些东西传输到服务端，然后服务端执行完之后再把返回结果通过网络传输给你传输回来。网络传输的实现方式有很多种比如最近基本的 Socket或者性能以及封装更加优秀的 Netty（推荐）。</li>
<li><strong>服务端 Stub（桩）</strong> ：这个桩就不是代理类了。我觉得理解为桩实际不太好，大家注意一下就好。这里的服务端 Stub 实际指的就是接收到客户端执行方法的请求后，去指定对应的方法然后返回结果给客户端的类。</li>
<li><strong>服务端（服务提供端）</strong> ：提供远程方法的一端。</li>
</ol>
<p>具体原理图如下，后面我会串起来将整个RPC的过程给大家说一下。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-12-6/37345851.jpg" alt="RPC原理图" loading="lazy"></p>
<ol>
<li>服务消费端（client）以本地调用的方式调用远程服务；</li>
<li>客户端 Stub（client stub） 接收到调用后负责将方法、参数等组装成能够进行网络传输的消息体（序列化）：<code v-pre>RpcRequest</code>；</li>
<li>客户端 Stub（client stub） 找到远程服务的地址，并将消息发送到服务提供端；</li>
<li>服务端 Stub（桩）收到消息将消息反序列化为Java对象: <code v-pre>RpcRequest</code>；</li>
<li>服务端 Stub（桩）根据<code v-pre>RpcRequest</code>中的类、方法、方法参数等信息调用本地的方法；</li>
<li>服务端 Stub（桩）得到方法执行结果并将组装成能够进行网络传输的消息体：<code v-pre>RpcResponse</code>（序列化）发送至消费方；</li>
<li>客户端 Stub（client stub）接收到消息并将消息反序列化为Java对象:<code v-pre>RpcResponse</code> ，这样也就得到了最终结果。over!</li>
</ol>
<p>相信小伙伴们看完上面的讲解之后，已经了解了 RPC 的原理。</p>
<p>虽然篇幅不多，但是基本把 RPC 框架的核心原理讲清楚了！另外，对于上面的技术细节，我会在后面的章节介绍到。</p>
<p><strong>最后，对于 RPC 的原理，希望小伙伴不单单要理解，还要能够自己画出来并且能够给别人讲出来。因为，在面试中这个问题在面试官问到 RPC 相关内容的时候基本都会碰到。</strong></p>
<h2 id="dubbo基础" tabindex="-1"><a class="header-anchor" href="#dubbo基础" aria-hidden="true">#</a> Dubbo基础</h2>
<h3 id="什么是-dubbo" tabindex="-1"><a class="header-anchor" href="#什么是-dubbo" aria-hidden="true">#</a> 什么是 Dubbo?</h3>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2020-8/427f2168-1930-4c14-8760-415fac8db1d0-20200802184737978.png" alt="" loading="lazy"></p>
<p><a href="https://github.com/apache/dubbo" target="_blank" rel="noopener noreferrer">Apache Dubbo<ExternalLinkIcon/></a> |ˈdʌbəʊ|  是一款高性能、轻量级的开源 Java RPC 框架。</p>
<p>根据 <a href="https://dubbo.apache.org/zh/" target="_blank" rel="noopener noreferrer">Dubbo 官方文档<ExternalLinkIcon/></a>的介绍，Dubbo 提供了六大核心能力</p>
<ol>
<li>面向接口代理的高性能RPC调用。</li>
<li>智能容错和负载均衡。</li>
<li>服务自动注册和发现。</li>
<li>高度可扩展能力。</li>
<li>运行期流量调度。</li>
<li>可视化的服务治理与运维。</li>
</ol>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/源码/dubbo/dubbo提供的六大核心能力.png" alt="Dubbo提供的六大核心能力" loading="lazy"></p>
<p>简单来说就是： <strong>Dubbo 不光可以帮助我们调用远程服务，还提供了一些其他开箱即用的功能比如智能负载均衡。</strong></p>
<p>Dubbo 目前已经有接近 34.4 k 的 Star  。</p>
<p>在 <strong>2020 年度 OSC 中国开源项目</strong> 评选活动中，Dubbo 位列开发框架和基础组件类项目的第7名。相比几年前来说，热度和排名有所下降。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/源码/dubbo/image-20210107153159545.png" alt="" loading="lazy"></p>
<p>Dubbo 是由阿里开源，后来加入了 Apache 。正是由于 Dubbo 的出现，才使得越来越多的公司开始使用以及接受分布式架构。</p>
<h3 id="为什么要用-dubbo" tabindex="-1"><a class="header-anchor" href="#为什么要用-dubbo" aria-hidden="true">#</a> 为什么要用 Dubbo?</h3>
<p>随着互联网的发展，网站的规模越来越大，用户数量越来越多。单一应用架构 、垂直应用架构无法满足我们的需求，这个时候分布式服务架构就诞生了。</p>
<p>分布式服务架构下，系统被拆分成不同的服务比如短信服务、安全服务，每个服务独立提供系统的某个核心服务。</p>
<p>我们可以使用 Java RMI（Java Remote Method Invocation）、Hessian这种支持远程调用的框架来简单地暴露和引用远程服务。但是！当服务越来越多之后，服务调用关系越来越复杂。当应用访问压力越来越大后，负载均衡以及服务监控的需求也迫在眉睫。我们可以用 F5 这类硬件来做负载均衡，但这样增加了成本，并且存在单点故障的风险。</p>
<p>不过，Dubbo 的出现让上述问题得到了解决。<strong>Dubbo 帮助我们解决了什么问题呢？</strong></p>
<ol>
<li><strong>负载均衡</strong> ： 同一个服务部署在不同的机器时该调用哪一台机器上的服务。</li>
<li><strong>服务调用链路生成</strong>  ： 随着系统的发展，服务越来越多，服务间依赖关系变得错踪复杂，甚至分不清哪个应用要在哪个应用之前启动，架构师都不能完整的描述应用的架构关系。Dubbo 可以为我们解决服务之间互相是如何调用的。</li>
<li><strong>服务访问压力以及时长统计、资源调度和治理</strong> ：基于访问压力实时管理集群容量，提高集群利用率。</li>
<li>......</li>
</ol>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-9-26/43050183.jpg" alt="" loading="lazy"></p>
<p>另外，Dubbo 除了能够应用在分布式系统中，也可以应用在现在比较火的微服务系统中。不过，由于 Spring Cloud 在微服务中应用更加广泛，所以，我觉得一般我们提 Dubbo 的话，大部分是分布式系统的情况。</p>
<p><strong>我们刚刚提到了分布式这个概念，下面再给大家介绍一下什么是分布式？为什么要分布式？</strong></p>
<h2 id="分布式基础" tabindex="-1"><a class="header-anchor" href="#分布式基础" aria-hidden="true">#</a> 分布式基础</h2>
<h3 id="什么是分布式" tabindex="-1"><a class="header-anchor" href="#什么是分布式" aria-hidden="true">#</a> 什么是分布式?</h3>
<p>分布式或者说 SOA 分布式重要的就是面向服务，说简单的分布式就是我们把整个系统拆分成不同的服务然后将这些服务放在不同的服务器上减轻单体服务的压力提高并发量和性能。比如电商系统可以简单地拆分成订单系统、商品系统、登录系统等等，拆分之后的每个服务可以部署在不同的机器上，如果某一个服务的访问量比较大的话也可以将这个服务同时部署在多台机器上。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/分布式事务示意图.png" alt="分布式事务示意图" loading="lazy"></p>
<h3 id="为什么要分布式" tabindex="-1"><a class="header-anchor" href="#为什么要分布式" aria-hidden="true">#</a> 为什么要分布式?</h3>
<p>从开发角度来讲单体应用的代码都集中在一起，而分布式系统的代码根据业务被拆分。所以，每个团队可以负责一个服务的开发，这样提升了开发效率。另外，代码根据业务拆分之后更加便于维护和扩展。</p>
<p>另外，我觉得将系统拆分成分布式之后不光便于系统扩展和维护，更能提高整个系统的性能。你想一想嘛？把整个系统拆分成不同的服务/系统，然后每个服务/系统 单独部署在一台服务器上，是不是很大程度上提高了系统性能呢？</p>
<h2 id="dubbo-架构" tabindex="-1"><a class="header-anchor" href="#dubbo-架构" aria-hidden="true">#</a> Dubbo 架构</h2>
<h3 id="dubbo-架构中的核心角色有哪些" tabindex="-1"><a class="header-anchor" href="#dubbo-架构中的核心角色有哪些" aria-hidden="true">#</a> Dubbo 架构中的核心角色有哪些？</h3>
<p><a href="https://dubbo.apache.org/zh/docs/v2.7/dev/design/" target="_blank" rel="noopener noreferrer">官方文档中的框架设计章节<ExternalLinkIcon/></a> 已经介绍的非常详细了，我这里把一些比较重要的点再提一下。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/源码/dubbo/dubbo-relation.jpg" alt="dubbo-relation" loading="lazy"></p>
<p>上述节点简单介绍以及他们之间的关系：</p>
<ul>
<li><strong>Container：</strong> 服务运行容器，负责加载、运行服务提供者。必须。</li>
<li><strong>Provider：</strong> 暴露服务的服务提供方，会向注册中心注册自己提供的服务。必须。</li>
<li><strong>Consumer：</strong> 调用远程服务的服务消费方，会向注册中心订阅自己所需的服务。必须。</li>
<li><strong>Registry：</strong> 服务注册与发现的注册中心。注册中心会返回服务提供者地址列表给消费者。非必须。</li>
<li><strong>Monitor：</strong> 统计服务的调用次数和调用时间的监控中心。服务消费者和提供者会定时发送统计数据到监控中心。 非必须。</li>
</ul>
<h3 id="dubbo-中的-invoker-概念了解么" tabindex="-1"><a class="header-anchor" href="#dubbo-中的-invoker-概念了解么" aria-hidden="true">#</a> Dubbo 中的 Invoker 概念了解么？</h3>
<p><code v-pre>Invoker</code> 是 Dubbo 领域模型中非常重要的一个概念，你如果阅读过 Dubbo 源码的话，你会无数次看到这玩意。就比如下面我要说的负载均衡这块的源码中就有大量 <code v-pre>Invoker</code> 的身影。</p>
<p>简单来说，<code v-pre>Invoker</code> 就是 Dubbo 对远程调用的抽象。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/dubbo_rpc_invoke.jpg" alt="dubbo_rpc_invoke.jpg" loading="lazy"></p>
<p>按照 Dubbo 官方的话来说，<code v-pre>Invoker</code>  分为</p>
<ul>
<li>服务提供 <code v-pre>Invoker</code></li>
<li>服务消费 <code v-pre>Invoker</code></li>
</ul>
<p>假如我们需要调用一个远程方法，我们需要动态代理来屏蔽远程调用的细节吧！我们屏蔽掉的这些细节就依赖对应的 <code v-pre>Invoker</code>  实现， <code v-pre>Invoker</code> 实现了真正的远程服务调用。</p>
<h3 id="dubbo-的工作原理了解么" tabindex="-1"><a class="header-anchor" href="#dubbo-的工作原理了解么" aria-hidden="true">#</a> Dubbo 的工作原理了解么？</h3>
<p>下图是 Dubbo 的整体设计，从下至上分为十层，各层均为单向依赖。</p>
<blockquote>
<p>左边淡蓝背景的为服务消费方使用的接口，右边淡绿色背景的为服务提供方使用的接口，位于中轴线上的为双方都用到的接口。</p>
</blockquote>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/source-code/dubbo/dubbo-framework.jpg" alt="dubbo-framework" loading="lazy"></p>
<ul>
<li><strong>config 配置层</strong>：Dubbo相关的配置。支持代码配置，同时也支持基于 Spring  来做配置，以 <code v-pre>ServiceConfig</code>, <code v-pre>ReferenceConfig</code> 为中心</li>
<li><strong>proxy 服务代理层</strong>：调用远程方法像调用本地的方法一样简单的一个关键，真实调用过程依赖代理类，以 <code v-pre>ServiceProxy</code> 为中心。</li>
<li><strong>registry 注册中心层</strong>：封装服务地址的注册与发现。</li>
<li><strong>cluster 路由层</strong>：封装多个提供者的路由及负载均衡，并桥接注册中心，以 <code v-pre>Invoker</code> 为中心。</li>
<li><strong>monitor 监控层</strong>：RPC 调用次数和调用时间监控，以 <code v-pre>Statistics</code> 为中心。</li>
<li><strong>protocol 远程调用层</strong>：封装 RPC 调用，以 <code v-pre>Invocation</code>, <code v-pre>Result</code> 为中心。</li>
<li><strong>exchange 信息交换层</strong>：封装请求响应模式，同步转异步，以 <code v-pre>Request</code>, <code v-pre>Response</code> 为中心。</li>
<li><strong>transport 网络传输层</strong>：抽象 mina 和 netty 为统一接口，以 <code v-pre>Message</code> 为中心。</li>
<li><strong>serialize 数据序列化层</strong> ：对需要在网络传输的数据进行序列化。</li>
</ul>
<h3 id="dubbo-的-spi-机制了解么-如何扩展-dubbo-中的默认实现" tabindex="-1"><a class="header-anchor" href="#dubbo-的-spi-机制了解么-如何扩展-dubbo-中的默认实现" aria-hidden="true">#</a> Dubbo 的 SPI 机制了解么？ 如何扩展 Dubbo 中的默认实现？</h3>
<p>SPI（Service Provider Interface） 机制被大量用在开源项目中，它可以帮助我们动态寻找服务/功能（比如负载均衡策略）的实现。</p>
<p>SPI 的具体原理是这样的：我们将接口的实现类放在配置文件中，我们在程序运行过程中读取配置文件，通过反射加载实现类。这样，我们可以在运行的时候，动态替换接口的实现类。和 IoC 的解耦思想是类似的。</p>
<p>Java 本身就提供了 SPI 机制的实现。不过，Dubbo 没有直接用，而是对 Java原生的 SPI机制进行了增强，以便更好满足自己的需求。</p>
<p><strong>那我们如何扩展 Dubbo 中的默认实现呢？</strong></p>
<p>比如说我们想要实现自己的负载均衡策略，我们创建对应的实现类 <code v-pre>XxxLoadBalance</code> 实现 <code v-pre>LoadBalance</code> 接口或者 <code v-pre>AbstractLoadBalance</code> 类。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>xxx</span><span class="token punctuation">;</span>
 
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>dubbo<span class="token punctuation">.</span>rpc<span class="token punctuation">.</span>cluster<span class="token punctuation">.</span></span><span class="token class-name">LoadBalance</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>dubbo<span class="token punctuation">.</span>rpc<span class="token punctuation">.</span></span><span class="token class-name">Invoker</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>dubbo<span class="token punctuation">.</span>rpc<span class="token punctuation">.</span></span><span class="token class-name">Invocation</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>dubbo<span class="token punctuation">.</span>rpc<span class="token punctuation">.</span></span><span class="token class-name">RpcException</span></span><span class="token punctuation">;</span> 
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">XxxLoadBalance</span> <span class="token keyword">implements</span> <span class="token class-name">LoadBalance</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">Invoker</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Invoker</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span><span class="token punctuation">></span></span> invokers<span class="token punctuation">,</span> <span class="token class-name">Invocation</span> invocation<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">RpcException</span> <span class="token punctuation">{</span>
        <span class="token comment">// ...</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们将这个实现类的路径写入到<code v-pre>resources</code> 目录下的 <code v-pre>META-INF/dubbo/org.apache.dubbo.rpc.cluster.LoadBalance</code>文件中即可。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>src
 <span class="token operator">|</span><span class="token operator">-</span>main
    <span class="token operator">|</span><span class="token operator">-</span>java
        <span class="token operator">|</span><span class="token operator">-</span>com
            <span class="token operator">|</span><span class="token operator">-</span>xxx
                <span class="token operator">|</span><span class="token operator">-</span><span class="token class-name">XxxLoadBalance</span><span class="token punctuation">.</span>java <span class="token punctuation">(</span>实现<span class="token class-name">LoadBalance</span>接口<span class="token punctuation">)</span>
    <span class="token operator">|</span><span class="token operator">-</span>resources
        <span class="token operator">|</span><span class="token operator">-</span>META<span class="token operator">-</span>INF
            <span class="token operator">|</span><span class="token operator">-</span>dubbo
                <span class="token operator">|</span><span class="token operator">-</span><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>dubbo<span class="token punctuation">.</span>rpc<span class="token punctuation">.</span>cluster<span class="token punctuation">.</span></span>LoadBalance</span> <span class="token punctuation">(</span>纯文本文件，内容为：xxx<span class="token operator">=</span><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>xxx<span class="token punctuation">.</span></span>XxxLoadBalance</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>org.apache.dubbo.rpc.cluster.LoadBalance</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>xxx=com.xxx.XxxLoadBalance
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其他还有很多可供扩展的选择，你可以在<a href="https://dubbo.apache.org/zh/docs/v2.7/dev/impls/" target="_blank" rel="noopener noreferrer">官方文档@SPI扩展实现<ExternalLinkIcon/></a>这里找到。</p>
<p><img src="https://img-blog.csdnimg.cn/20210328091015555.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MzM3Mjcy,size_16,color_FFFFFF,t_70" alt="" loading="lazy"></p>
<h3 id="dubbo-的微内核架构了解吗" tabindex="-1"><a class="header-anchor" href="#dubbo-的微内核架构了解吗" aria-hidden="true">#</a> Dubbo 的微内核架构了解吗？</h3>
<p>Dubbo 采用 微内核（Microkernel） + 插件（Plugin） 模式，简单来说就是微内核架构。微内核只负责组装插件。</p>
<p><strong>何为微内核架构呢？</strong> 《软件架构模式》 这本书是这样介绍的：</p>
<blockquote>
<p>微内核架构模式（有时被称为插件架构模式）是实现基于产品应用程序的一种自然模式。基于产品的应用程序是已经打包好并且拥有不同版本，可作为第三方插件下载的。然后，很多公司也在开发、发布自己内部商业应用像有版本号、说明及可加载插件式的应用软件（这也是这种模式的特征）。微内核系统可让用户添加额外的应用如插件，到核心应用，继而提供了可扩展性和功能分离的用法。</p>
</blockquote>
<p>微内核架构包含两类组件：<strong>核心系统（core system）</strong> 和 <strong>插件模块（plug-in modules）</strong>。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/source-code/dubbo/微内核架构示意图.png" alt="" loading="lazy"></p>
<p>核心系统提供系统所需核心能力，插件模块可以扩展系统的功能。因此， 基于微内核架构的系统，非常易于扩展功能。</p>
<p>我们常见的一些IDE，都可以看作是基于微内核架构设计的。绝大多数 IDE比如IDEA、VSCode都提供了插件来丰富自己的功能。</p>
<p>正是因为Dubbo基于微内核架构，才使得我们可以随心所欲替换Dubbo的功能点。比如你觉得Dubbo 的序列化模块实现的不满足自己要求，没关系啊！你自己实现一个序列化模块就好了啊！</p>
<p>通常情况下，微核心都会采用 Factory、IoC、OSGi 等方式管理插件生命周期。Dubbo 不想依赖 Spring 等 IoC 容器，也不想自己造一个小的 IoC 容器（过度设计），因此采用了一种最简单的 Factory 方式管理插件 ：<strong>JDK 标准的 SPI 扩展机制</strong> （<code v-pre>java.util.ServiceLoader</code>）。</p>
<h3 id="关于dubbo架构的一些自测小问题" tabindex="-1"><a class="header-anchor" href="#关于dubbo架构的一些自测小问题" aria-hidden="true">#</a> 关于Dubbo架构的一些自测小问题</h3>
<h4 id="注册中心的作用了解么" tabindex="-1"><a class="header-anchor" href="#注册中心的作用了解么" aria-hidden="true">#</a> 注册中心的作用了解么？</h4>
<p>注册中心负责服务地址的注册与查找，相当于目录服务，服务提供者和消费者只在启动时与注册中心交互。</p>
<h4 id="服务提供者宕机后-注册中心会做什么" tabindex="-1"><a class="header-anchor" href="#服务提供者宕机后-注册中心会做什么" aria-hidden="true">#</a> 服务提供者宕机后，注册中心会做什么？</h4>
<p>注册中心会立即推送事件通知消费者。</p>
<h4 id="监控中心的作用呢" tabindex="-1"><a class="header-anchor" href="#监控中心的作用呢" aria-hidden="true">#</a> 监控中心的作用呢？</h4>
<p>监控中心负责统计各服务调用次数，调用时间等。</p>
<h4 id="注册中心和监控中心都宕机的话-服务都会挂掉吗" tabindex="-1"><a class="header-anchor" href="#注册中心和监控中心都宕机的话-服务都会挂掉吗" aria-hidden="true">#</a> 注册中心和监控中心都宕机的话，服务都会挂掉吗？</h4>
<p>不会。两者都宕机也不影响已运行的提供者和消费者，消费者在本地缓存了提供者列表。注册中心和监控中心都是可选的，服务消费者可以直连服务提供者。</p>
<h2 id="dubbo-的负载均衡策略" tabindex="-1"><a class="header-anchor" href="#dubbo-的负载均衡策略" aria-hidden="true">#</a> Dubbo 的负载均衡策略</h2>
<h3 id="什么是负载均衡" tabindex="-1"><a class="header-anchor" href="#什么是负载均衡" aria-hidden="true">#</a> 什么是负载均衡？</h3>
<p>先来看一下稍微官方点的解释。下面这段话摘自维基百科对负载均衡的定义：</p>
<blockquote>
<p>负载均衡改善了跨多个计算资源（例如计算机，计算机集群，网络链接，中央处理单元或磁盘驱动）的工作负载分布。负载平衡旨在优化资源使用，最大化吞吐量，最小化响应时间，并避免任何单个资源的过载。使用具有负载平衡而不是单个组件的多个组件可以通过冗余提高可靠性和可用性。负载平衡通常涉及专用软件或硬件。</p>
</blockquote>
<p><strong>上面讲的大家可能不太好理解，再用通俗的话给大家说一下。</strong></p>
<p>我们的系统中的某个服务的访问量特别大，我们将这个服务部署在了多台服务器上，当客户端发起请求的时候，多台服务器都可以处理这个请求。那么，如何正确选择处理该请求的服务器就很关键。假如，你就要一台服务器来处理该服务的请求，那该服务部署在多台服务器的意义就不复存在了。负载均衡就是为了避免单个服务器响应同一请求，容易造成服务器宕机、崩溃等问题，我们从负载均衡的这四个字就能明显感受到它的意义。</p>
<h3 id="dubbo-提供的负载均衡策略有哪些" tabindex="-1"><a class="header-anchor" href="#dubbo-提供的负载均衡策略有哪些" aria-hidden="true">#</a> Dubbo 提供的负载均衡策略有哪些？</h3>
<p>在集群负载均衡时，Dubbo 提供了多种均衡策略，默认为 <code v-pre>random</code> 随机调用。我们还可以自行扩展负载均衡策略（参考Dubbo SPI机制）。</p>
<p>在 Dubbo 中，所有负载均衡实现类均继承自 <code v-pre>AbstractLoadBalance</code>，该类实现了 <code v-pre>LoadBalance</code> 接口，并封装了一些公共的逻辑。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractLoadBalance</span> <span class="token keyword">implements</span> <span class="token class-name">LoadBalance</span> <span class="token punctuation">{</span>

    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">calculateWarmupWeight</span><span class="token punctuation">(</span><span class="token keyword">int</span> uptime<span class="token punctuation">,</span> <span class="token keyword">int</span> warmup<span class="token punctuation">,</span> <span class="token keyword">int</span> weight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">Invoker</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Invoker</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span><span class="token punctuation">></span></span> invokers<span class="token punctuation">,</span> <span class="token class-name">URL</span> url<span class="token punctuation">,</span> <span class="token class-name">Invocation</span> invocation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">Invoker</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">doSelect</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Invoker</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span><span class="token punctuation">></span></span> invokers<span class="token punctuation">,</span> <span class="token class-name">URL</span> url<span class="token punctuation">,</span> <span class="token class-name">Invocation</span> invocation<span class="token punctuation">)</span><span class="token punctuation">;</span>


    <span class="token keyword">int</span> <span class="token function">getWeight</span><span class="token punctuation">(</span><span class="token class-name">Invoker</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> invoker<span class="token punctuation">,</span> <span class="token class-name">Invocation</span> invocation<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>AbstractLoadBalance</code> 的实现类有下面这些：</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/image-20210326105257812.png" alt="" loading="lazy"></p>
<p>官方文档对负载均衡这部分的介绍非常详细，推荐小伙伴们看看，地址：<a href="https://dubbo.apache.org/zh/docs/v2.7/dev/source/loadbalance/#m-zhdocsv27devsourceloadbalance" target="_blank" rel="noopener noreferrer">https://dubbo.apache.org/zh/docs/v2.7/dev/source/loadbalance/#m-zhdocsv27devsourceloadbalance<ExternalLinkIcon/></a> 。</p>
<h4 id="randomloadbalance" tabindex="-1"><a class="header-anchor" href="#randomloadbalance" aria-hidden="true">#</a> RandomLoadBalance</h4>
<p>根据权重随机选择（对加权随机算法的实现）。这是Dubbo默认采用的一种负载均衡策略。</p>
<p><code v-pre> RandomLoadBalance</code> 具体的实现原理非常简单，假如有两个提供相同服务的服务器 S1,S2，S1的权重为7，S2的权重为3。</p>
<p>我们把这些权重值分布在坐标区间会得到：S1-&gt;[0, 7) ，S2-&gt;[7, 10)。我们生成[0, 10) 之间的随机数，随机数落到对应的区间，我们就选择对应的服务器来处理请求。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/ RandomLoadBalance.png" alt="RandomLoadBalance" loading="lazy"></p>
<p><code v-pre>RandomLoadBalance</code> 的源码非常简单，简单花几分钟时间看一下。</p>
<blockquote>
<p>以下源码来自 Dubbo master 分支上的最新的版本 2.7.9。</p>
</blockquote>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RandomLoadBalance</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractLoadBalance</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> NAME <span class="token operator">=</span> <span class="token string">"random"</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">Invoker</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">doSelect</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Invoker</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span><span class="token punctuation">></span></span> invokers<span class="token punctuation">,</span> <span class="token class-name">URL</span> url<span class="token punctuation">,</span> <span class="token class-name">Invocation</span> invocation<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token keyword">int</span> length <span class="token operator">=</span> invokers<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> sameWeight <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> weights <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span> 
        <span class="token keyword">int</span> totalWeight <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">// 下面这个for循环的主要作用就是计算所有该服务的提供者的权重之和 totalWeight（），</span>
        <span class="token comment">// 除此之外，还会检测每个服务提供者的权重是否相同</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> weight <span class="token operator">=</span> <span class="token function">getWeight</span><span class="token punctuation">(</span>invokers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">,</span> invocation<span class="token punctuation">)</span><span class="token punctuation">;</span>
            totalWeight <span class="token operator">+=</span> weight<span class="token punctuation">;</span>
            weights<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> totalWeight<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>sameWeight <span class="token operator">&amp;&amp;</span> totalWeight <span class="token operator">!=</span> weight <span class="token operator">*</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                sameWeight <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>totalWeight <span class="token operator">></span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>sameWeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 随机生成一个 [0, totalWeight) 区间内的数字</span>
            <span class="token keyword">int</span> offset <span class="token operator">=</span> <span class="token class-name">ThreadLocalRandom</span><span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span>totalWeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 判断会落在哪个服务提供者的区间</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>offset <span class="token operator">&lt;</span> weights<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> invokers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
  
        <span class="token keyword">return</span> invokers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">ThreadLocalRandom</span><span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="leastactiveloadbalance" tabindex="-1"><a class="header-anchor" href="#leastactiveloadbalance" aria-hidden="true">#</a> LeastActiveLoadBalance</h4>
<p><code v-pre>LeastActiveLoadBalance</code> 直译过来就是<strong>最小活跃数负载均衡</strong>。</p>
<p>这个名字起得有点不直观，不仔细看官方对活跃数的定义，你压根不知道这玩意是干嘛的。</p>
<p>我这么说吧！初始状态下所有服务提供者的活跃数均为 0（每个服务提供者的中特定方法都对应一个活跃数，我在后面的源码中会提到），每收到一个请求后，对应的服务提供者的活跃数 +1，当这个请求处理完之后，活跃数 -1。</p>
<p>因此，<strong>Dubbo 就认为谁的活跃数越少，谁的处理速度就越快，性能也越好，这样的话，我就优先把请求给活跃数少的服务提供者处理。</strong></p>
<p><strong>如果有多个服务提供者的活跃数相等怎么办？</strong></p>
<p>很简单，那就再走一遍  <code v-pre>RandomLoadBalance</code> 。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">LeastActiveLoadBalance</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractLoadBalance</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> NAME <span class="token operator">=</span> <span class="token string">"leastactive"</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">Invoker</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token function">doSelect</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Invoker</span><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span><span class="token punctuation">></span></span> invokers<span class="token punctuation">,</span> <span class="token class-name">URL</span> url<span class="token punctuation">,</span> <span class="token class-name">Invocation</span> invocation<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> length <span class="token operator">=</span> invokers<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> leastActive <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> leastCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> leastIndexes <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> weights <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> totalWeight <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> firstWeight <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> sameWeight <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token comment">// 这个 for 循环的主要作用是遍历 invokers 列表，找出活跃数最小的 Invoker</span>
        <span class="token comment">// 如果有多个 Invoker 具有相同的最小活跃数，还会记录下这些 Invoker 在 invokers 集合中的下标，并累加它们的权重，比较它们的权重值是否相等</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Invoker</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> invoker <span class="token operator">=</span> invokers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 获取 invoker 对应的活跃(active)数</span>
            <span class="token keyword">int</span> active <span class="token operator">=</span> <span class="token class-name">RpcStatus</span><span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span>invoker<span class="token punctuation">.</span><span class="token function">getUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> invocation<span class="token punctuation">.</span><span class="token function">getMethodName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">int</span> afterWarmup <span class="token operator">=</span> <span class="token function">getWeight</span><span class="token punctuation">(</span>invoker<span class="token punctuation">,</span> invocation<span class="token punctuation">)</span><span class="token punctuation">;</span>
            weights<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> afterWarmup<span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>leastActive <span class="token operator">==</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">||</span> active <span class="token operator">&lt;</span> leastActive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                leastActive <span class="token operator">=</span> active<span class="token punctuation">;</span>
                leastCount <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
                leastIndexes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
                totalWeight <span class="token operator">=</span> afterWarmup<span class="token punctuation">;</span>
                firstWeight <span class="token operator">=</span> afterWarmup<span class="token punctuation">;</span>
                sameWeight <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>active <span class="token operator">==</span> leastActive<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                leastIndexes<span class="token punctuation">[</span>leastCount<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
                totalWeight <span class="token operator">+=</span> afterWarmup<span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>sameWeight <span class="token operator">&amp;&amp;</span> afterWarmup <span class="token operator">!=</span> firstWeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    sameWeight <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
       <span class="token comment">// 如果只有一个 Invoker 具有最小的活跃数，此时直接返回该 Invoker 即可</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>leastCount <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> invokers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>leastIndexes<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 如果有多个 Invoker 具有相同的最小活跃数，但它们之间的权重不同</span>
        <span class="token comment">// 这里的处理方式就和  RandomLoadBalance 一致了</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>sameWeight <span class="token operator">&amp;&amp;</span> totalWeight <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> offsetWeight <span class="token operator">=</span> <span class="token class-name">ThreadLocalRandom</span><span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span>totalWeight<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> leastCount<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">int</span> leastIndex <span class="token operator">=</span> leastIndexes<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
                offsetWeight <span class="token operator">-=</span> weights<span class="token punctuation">[</span>leastIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>offsetWeight <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">return</span> invokers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>leastIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> invokers<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>leastIndexes<span class="token punctuation">[</span><span class="token class-name">ThreadLocalRandom</span><span class="token punctuation">.</span><span class="token function">current</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span>leastCount<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>活跃数是通过 <code v-pre>RpcStatus</code> 中的一个 <code v-pre>ConcurrentMap</code> 保存的，根据 URL 以及服务提供者被调用的方法的名称，我们便可以获取到对应的活跃数。也就是说服务提供者中的每一个方法的活跃数都是互相独立的。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RpcStatus</span> <span class="token punctuation">{</span>
    
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">ConcurrentMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ConcurrentMap</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">RpcStatus</span><span class="token punctuation">></span><span class="token punctuation">></span></span> METHOD_STATISTICS <span class="token operator">=</span>
            <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">ConcurrentMap</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">RpcStatus</span><span class="token punctuation">></span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">RpcStatus</span> <span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token class-name">URL</span> url<span class="token punctuation">,</span> <span class="token class-name">String</span> methodName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> uri <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">toIdentityString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ConcurrentMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">RpcStatus</span><span class="token punctuation">></span></span> map <span class="token operator">=</span> METHOD_STATISTICS<span class="token punctuation">.</span><span class="token function">computeIfAbsent</span><span class="token punctuation">(</span>uri<span class="token punctuation">,</span> k <span class="token operator">-></span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> map<span class="token punctuation">.</span><span class="token function">computeIfAbsent</span><span class="token punctuation">(</span>methodName<span class="token punctuation">,</span> k <span class="token operator">-></span> <span class="token keyword">new</span> <span class="token class-name">RpcStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getActive</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> active<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="consistenthashloadbalance" tabindex="-1"><a class="header-anchor" href="#consistenthashloadbalance" aria-hidden="true">#</a> ConsistentHashLoadBalance</h4>
<p><code v-pre>ConsistentHashLoadBalance</code>  小伙伴们应该也不会陌生，在分库分表、各种集群中就经常使用这个负载均衡策略。</p>
<p><code v-pre>ConsistentHashLoadBalance</code> 即<strong>一致性Hash负载均衡策略</strong>。 <code v-pre>ConsistentHashLoadBalance</code> 中没有权重的概念，具体是哪个服务提供者处理请求是由你的请求的参数决定的，也就是说相同参数的请求总是发到同一个服务提供者。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/consistent-hash-data-incline.jpg" alt="" loading="lazy"></p>
<p>另外，Dubbo 为了避免数据倾斜问题（节点不够分散，大量请求落到同一节点），还引入了虚拟节点的概念。通过虚拟节点可以让节点更加分散，有效均衡各个节点的请求量。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/consistent-hash-invoker.jpg" alt="" loading="lazy"></p>
<p>官方有详细的源码分析：<a href="https://dubbo.apache.org/zh/docs/v2.7/dev/source/loadbalance/#23-consistenthashloadbalance" target="_blank" rel="noopener noreferrer">https://dubbo.apache.org/zh/docs/v2.7/dev/source/loadbalance/#23-consistenthashloadbalance<ExternalLinkIcon/></a> 。这里还有一个相关的 <a href="https://github.com/apache/dubbo/pull/5440" target="_blank" rel="noopener noreferrer">PR#5440<ExternalLinkIcon/></a> 来修复老版本中 ConsistentHashLoadBalance 存在的一些Bug。感兴趣的小伙伴，可以多花点时间研究一下。我这里不多分析了，这个作业留给你们！</p>
<h4 id="roundrobinloadbalance" tabindex="-1"><a class="header-anchor" href="#roundrobinloadbalance" aria-hidden="true">#</a> RoundRobinLoadBalance</h4>
<p>加权轮询负载均衡。</p>
<p>轮询就是把请求依次分配给每个服务提供者。加权轮询就是在轮询的基础上，让更多的请求落到权重更大的服务提供者上。比如假如有两个提供相同服务的服务器 S1,S2，S1的权重为7，S2的权重为3。</p>
<p>如果我们有 10 次请求，那么  7 次会被 S1处理，3次被 S2处理。</p>
<p>但是，如果是 <code v-pre>RandomLoadBalance</code> 的话，很可能存在10次请求有9次都被 S1 处理的情况（概率性问题）。</p>
<p>Dubbo 中的 <code v-pre>RoundRobinLoadBalance</code> 的代码实现被修改重建了好几次，Dubbo-2.6.5 版本的 <code v-pre>RoundRobinLoadBalance</code> 为平滑加权轮询算法。</p>
<h2 id="dubbo序列化协议" tabindex="-1"><a class="header-anchor" href="#dubbo序列化协议" aria-hidden="true">#</a> Dubbo序列化协议</h2>
<h3 id="dubbo-支持哪些序列化方式呢" tabindex="-1"><a class="header-anchor" href="#dubbo-支持哪些序列化方式呢" aria-hidden="true">#</a> Dubbo 支持哪些序列化方式呢？</h3>
<p><img src="https://img-blog.csdnimg.cn/20210328092219640.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MzM3Mjcy,size_16,color_FFFFFF,t_70" alt="" loading="lazy"></p>
<p>Dubbo 支持多种序列化方式：JDK自带的序列化、hessian2、JSON、Kryo、FST、Protostuff，ProtoBuf等等。</p>
<p>Dubbo 默认使用的序列化方式是 hessian2。</p>
<h3 id="谈谈你对这些序列化协议了解" tabindex="-1"><a class="header-anchor" href="#谈谈你对这些序列化协议了解" aria-hidden="true">#</a> 谈谈你对这些序列化协议了解？</h3>
<p>一般我们不会直接使用 JDK 自带的序列化方式。主要原因有两个：</p>
<ol>
<li><strong>不支持跨语言调用</strong> : 如果调用的是其他语言开发的服务的时候就不支持了。</li>
<li><strong>性能差</strong> ：相比于其他序列化框架性能更低，主要原因是序列化之后的字节数组体积较大，导致传输成本加大。</li>
</ol>
<p>JSON 序列化由于性能问题，我们一般也不会考虑使用。</p>
<p>像 Protostuff，ProtoBuf、hessian2这些都是跨语言的序列化方式，如果有跨语言需求的话可以考虑使用。</p>
<p>Kryo和FST这两种序列化方式是 Dubbo 后来才引入的，性能非常好。不过，这两者都是专门针对 Java 语言的。Dubbo 官网的一篇文章中提到说推荐使用 Kryo 作为生产环境的序列化方式。(文章地址：<a href="https://dubbo.apache.org/zh/docs/v2.7/user/references/protocol/rest/" target="_blank" rel="noopener noreferrer">https://dubbo.apache.org/zh/docs/v2.7/user/references/protocol/rest/<ExternalLinkIcon/></a>)</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2020-8/569e541a-22b2-4846-aa07-0ad479f07440.png" alt="" loading="lazy"></p>
<p>Dubbo 官方文档中还有一个关于这些<a href="https://dubbo.apache.org/zh/docs/v2.7/user/serialization/#m-zhdocsv27userserialization" target="_blank" rel="noopener noreferrer">序列化协议的性能对比图<ExternalLinkIcon/></a>可供参考。</p>
<p><img src="https://img-blog.csdnimg.cn/20210328093219609.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0MzM3Mjcy,size_16,color_FFFFFF,t_70" alt="" loading="lazy"></p>
</div></template>
