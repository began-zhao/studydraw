<template><div><h1 id="spring-cloud-入门" tabindex="-1"><a class="header-anchor" href="#spring-cloud-入门" aria-hidden="true">#</a> Spring Cloud 入门</h1>
<blockquote>
<p>本文基于 Spring Cloud Netflix 。Spring Cloud Alibaba 也是非常不错的选择哦！</p>
<p>授权转载自：<a href="https://juejin.im/post/5de2553e5188256e885f4fa3" target="_blank" rel="noopener noreferrer">https://juejin.im/post/5de2553e5188256e885f4fa3<ExternalLinkIcon/></a></p>
</blockquote>
<p>首先我给大家看一张图，如果大家对这张图有些地方不太理解的话，我希望你们看完我这篇文章会恍然大悟。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/spring-cloud总体架构.jpg" alt="Spring Cloud 总体架构" loading="lazy"></p>
<h2 id="什么是-spring-cloud" tabindex="-1"><a class="header-anchor" href="#什么是-spring-cloud" aria-hidden="true">#</a> 什么是 Spring Cloud</h2>
<blockquote>
<p>构建分布式系统不仅复杂而且容易出错。Spring Cloud 为最常见的分布式系统模式提供了一种简单且易于接受的编程模型，帮助开发人员构建有弹性的、可靠的、协调的应用程序。Spring Cloud 构建于 Spring Boot 之上，使得开发者很容易入手并快速应用于生产中。</p>
</blockquote>
<p>官方果然官方，介绍都这么有板有眼的。</p>
<p>我所理解的 <code v-pre>Spring Cloud</code> 就是微服务系统架构的一站式解决方案，在平时我们构建微服务的过程中需要做如 <strong>服务发现注册</strong> 、<strong>配置中心</strong> 、<strong>消息总线</strong> 、<strong>负载均衡</strong> 、<strong>断路器</strong> 、<strong>数据监控</strong> 等操作，而 Spring Cloud 为我们提供了一套简易的编程模型，使我们能在 Spring Boot 的基础上轻松地实现微服务项目的构建。</p>
<h2 id="spring-cloud-的版本" tabindex="-1"><a class="header-anchor" href="#spring-cloud-的版本" aria-hidden="true">#</a> Spring Cloud 的版本</h2>
<p>当然这个只是个题外话。</p>
<p><code v-pre>Spring Cloud</code> 的版本号并不是我们通常见的数字版本号，而是一些很奇怪的单词。这些单词均为英国伦敦地铁站的站名。同时根据字母表的顺序来对应版本时间顺序，比如：最早 的 <code v-pre>Release</code> 版本 <code v-pre>Angel</code>，第二个 <code v-pre>Release</code> 版本 <code v-pre>Brixton</code>（英国地名），然后是 <code v-pre>Camden</code>、 <code v-pre>Dalston</code>、<code v-pre>Edgware</code>、<code v-pre>Finchley</code>、<code v-pre>Greenwich</code>、<code v-pre>Hoxton</code>。</p>
<h2 id="spring-cloud-的服务发现框架——eureka" tabindex="-1"><a class="header-anchor" href="#spring-cloud-的服务发现框架——eureka" aria-hidden="true">#</a> Spring Cloud 的服务发现框架——Eureka</h2>
<blockquote>
<p><code v-pre>Eureka</code>是基于<code v-pre>REST</code>（代表性状态转移）的服务，主要在 <code v-pre>AWS</code> 云中用于定位服务，以实现负载均衡和中间层服务器的故障转移。我们称此服务为<code v-pre>Eureka</code>服务器。Eureka 还带有一个基于 <code v-pre>Java</code> 的客户端组件 <code v-pre>Eureka Client</code>，它使与服务的交互变得更加容易。客户端还具有一个内置的负载平衡器，可以执行基本的循环负载平衡。在 <code v-pre>Netflix</code>，更复杂的负载均衡器将 <code v-pre>Eureka</code> 包装起来，以基于流量，资源使用，错误条件等多种因素提供加权负载均衡，以提供出色的弹性。</p>
</blockquote>
<p>总的来说，<code v-pre>Eureka</code> 就是一个服务发现框架。何为服务，何又为发现呢？</p>
<p>举一个生活中的例子，就比如我们平时租房子找中介的事情。</p>
<p>在没有中介的时候我们需要一个一个去寻找是否有房屋要出租的房东，这显然会非常的费力，一你找凭一个人的能力是找不到很多房源供你选择，再者你也懒得这么找下去(找了这么久，没有合适的只能将就)。<strong>这里的我们就相当于微服务中的 <code v-pre>Consumer</code> ，而那些房东就相当于微服务中的 <code v-pre>Provider</code> 。消费者 <code v-pre>Consumer</code> 需要调用提供者 <code v-pre>Provider</code> 提供的一些服务，就像我们现在需要租他们的房子一样。</strong></p>
<p>但是如果只是租客和房东之间进行寻找的话，他们的效率是很低的，房东找不到租客赚不到钱，租客找不到房东住不了房。所以，后来房东肯定就想到了广播自己的房源信息(比如在街边贴贴小广告)，这样对于房东来说已经完成他的任务(将房源公布出去)，但是有两个问题就出现了。第一、其他不是租客的都能收到这种租房消息，这在现实世界没什么，但是在计算机的世界中就会出现 <strong>资源消耗</strong> 的问题了。第二、租客这样还是很难找到你，试想一下我需要租房，我还需要东一个西一个地去找街边小广告，麻不麻烦？</p>
<p>那怎么办呢？我们当然不会那么傻乎乎的，第一时间就是去找 <strong>中介</strong> 呀，它为我们提供了统一房源的地方，我们消费者只需要跑到它那里去找就行了。而对于房东来说，他们也只需要把房源在中介那里发布就行了。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/4d161e2950414113834f2f0a8fc2c16c-new-imaged17347a0-e653-4830-9542-3d7ae4305b2b.png" alt="" loading="lazy"></p>
<p>那么现在，我们的模式就是这样的了。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/24382ce6bbd44932ac38b1accade12d1-new-image2ff8affc-6f1d-49de-a8c3-801e7bad2b11.png" alt="" loading="lazy"></p>
<p>但是，这个时候还会出现一些问题。</p>
<ol>
<li>房东注册之后如果不想卖房子了怎么办？我们是不是需要让房东 <strong>定期续约</strong> ？如果房东不进行续约是不是要将他们从中介那里的注册列表中 <strong>移除</strong> 。</li>
<li>租客是不是也要进行 <strong>注册</strong> 呢？不然合同乙方怎么来呢？</li>
<li>中介可不可以做 <strong>连锁店</strong> 呢？如果这一个店因为某些不可抗力因素而无法使用，那么我们是否可以换一个连锁店呢？</li>
</ol>
<p>针对上面的问题我们来重新构建一下上面的模式图</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/租房-中介模式图.jpg" alt="租房-中介模式图" loading="lazy"></p>
<p>好了，举完这个🌰我们就可以来看关于 <code v-pre>Eureka</code> 的一些基础概念了，你会发现这东西理解起来怎么这么简单。👊👊👊</p>
<p><strong>服务发现</strong>：其实就是一个“中介”，整个过程中有三个角色：<strong>服务提供者(出租房子的)、服务消费者(租客)、服务中介(房屋中介)</strong>。</p>
<p><strong>服务提供者</strong>： 就是提供一些自己能够执行的一些服务给外界。</p>
<p><strong>服务消费者</strong>： 就是需要使用一些服务的“用户”。</p>
<p><strong>服务中介</strong>： 其实就是服务提供者和服务消费者之间的“桥梁”，服务提供者可以把自己注册到服务中介那里，而服务消费者如需要消费一些服务(使用一些功能)就可以在服务中介中寻找注册在服务中介的服务提供者。</p>
<p><strong>服务注册 Register</strong>：</p>
<p>官方解释：当 <code v-pre>Eureka</code> 客户端向 <code v-pre>Eureka Server</code> 注册时，它提供自身的<strong>元数据</strong>，比如 IP 地址、端口，运行状况指示符 URL，主页等。</p>
<p>结合中介理解：房东 (提供者 <code v-pre>Eureka Client Provider</code>)在中介 (服务器 <code v-pre>Eureka Server</code>) 那里登记房屋的信息，比如面积，价格，地段等等(元数据 <code v-pre>metaData</code>)。</p>
<p><strong>服务续约 Renew</strong>：</p>
<p>官方解释：<strong><code v-pre>Eureka</code> 客户会每隔 30 秒(默认情况下)发送一次心跳来续约</strong>。 通过续约来告知 <code v-pre>Eureka Server</code> 该 <code v-pre>Eureka</code> 客户仍然存在，没有出现问题。 正常情况下，如果 <code v-pre>Eureka Server</code> 在 90 秒没有收到 <code v-pre>Eureka</code> 客户的续约，它会将实例从其注册表中删除。</p>
<p>结合中介理解：房东 (提供者 <code v-pre>Eureka Client Provider</code>) 定期告诉中介 (服务器 <code v-pre>Eureka Server</code>) 我的房子还租(续约) ，中介 (服务器<code v-pre>Eureka Server</code>) 收到之后继续保留房屋的信息。</p>
<p><strong>获取注册列表信息 Fetch Registries</strong>：</p>
<p>官方解释：<code v-pre>Eureka</code> 客户端从服务器获取注册表信息，并将其缓存在本地。客户端会使用该信息查找其他服务，从而进行远程调用。该注册列表信息定期（每 30 秒钟）更新一次。每次返回注册列表信息可能与 <code v-pre>Eureka</code> 客户端的缓存信息不同, <code v-pre>Eureka</code> 客户端自动处理。如果由于某种原因导致注册列表信息不能及时匹配，<code v-pre>Eureka</code> 客户端则会重新获取整个注册表信息。 <code v-pre>Eureka</code> 服务器缓存注册列表信息，整个注册表以及每个应用程序的信息进行了压缩，压缩内容和没有压缩的内容完全相同。<code v-pre>Eureka</code> 客户端和 <code v-pre>Eureka</code> 服务器可以使用 JSON / XML 格式进行通讯。在默认的情况下 <code v-pre>Eureka</code> 客户端使用压缩 <code v-pre>JSON</code> 格式来获取注册列表的信息。</p>
<p>结合中介理解：租客(消费者 <code v-pre>Eureka Client Consumer</code>) 去中介 (服务器 <code v-pre>Eureka Server</code>) 那里获取所有的房屋信息列表 (客户端列表 <code v-pre>Eureka Client List</code>) ，而且租客为了获取最新的信息会定期向中介 (服务器 <code v-pre>Eureka Server</code>) 那里获取并更新本地列表。</p>
<p><strong>服务下线 Cancel</strong>：</p>
<p>官方解释：Eureka 客户端在程序关闭时向 Eureka 服务器发送取消请求。 发送请求后，该客户端实例信息将从服务器的实例注册表中删除。该下线请求不会自动完成，它需要调用以下内容：<code v-pre>DiscoveryManager.getInstance().shutdownComponent();</code></p>
<p>结合中介理解：房东 (提供者 <code v-pre>Eureka Client Provider</code>) 告诉中介 (服务器 <code v-pre>Eureka Server</code>) 我的房子不租了，中介之后就将注册的房屋信息从列表中剔除。</p>
<p><strong>服务剔除 Eviction</strong>：</p>
<p>官方解释：在默认的情况下，<strong>当 Eureka 客户端连续 90 秒(3 个续约周期)没有向 Eureka 服务器发送服务续约，即心跳，Eureka 服务器会将该服务实例从服务注册列表删除</strong>，即服务剔除。</p>
<p>结合中介理解：房东(提供者 <code v-pre>Eureka Client Provider</code>) 会定期联系 中介 (服务器 <code v-pre>Eureka Server</code>) 告诉他我的房子还租(续约)，如果中介 (服务器 <code v-pre>Eureka Server</code>) 长时间没收到提供者的信息，那么中介会将他的房屋信息给下架(服务剔除)。</p>
<p>下面就是 <code v-pre>Netflix</code> 官方给出的 <code v-pre>Eureka</code> 架构图，你会发现和我们前面画的中介图别无二致。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/5d723c49eca1468ab7b89af06743023c-new-imageb8aa3d41-fad4-4b38-add9-c304930ab285.png" alt="Eureka架构图" loading="lazy"></p>
<p>当然，可以充当服务发现的组件有很多：<code v-pre>Zookeeper</code> ，<code v-pre>Consul</code> ， <code v-pre>Eureka</code> 等。</p>
<p>更多关于 <code v-pre>Eureka</code> 的知识(自我保护，初始注册策略等等)可以自己去官网查看，或者查看我的另一篇文章 <a href="https://juejin.im/post/5dd497e3f265da0ba7718018" target="_blank" rel="noopener noreferrer">深入理解 Eureka<ExternalLinkIcon/></a>。</p>
<h2 id="负载均衡之-ribbon" tabindex="-1"><a class="header-anchor" href="#负载均衡之-ribbon" aria-hidden="true">#</a> 负载均衡之 Ribbon</h2>
<h3 id="什么是-resttemplate" tabindex="-1"><a class="header-anchor" href="#什么是-resttemplate" aria-hidden="true">#</a> 什么是 <code v-pre>RestTemplate</code>?</h3>
<p>不是讲 <code v-pre>Ribbon</code> 么？怎么扯到了 <code v-pre>RestTemplate</code> 了？你先别急，听我慢慢道来。</p>
<p>我不听我不听我不听🙉🙉🙉。</p>
<p>我就说一句！<strong><code v-pre>RestTemplate</code>是<code v-pre>Spring</code>提供的一个访问 Http 服务的客户端类</strong>，怎么说呢？就是微服务之间的调用是使用的 <code v-pre>RestTemplate</code> 。比如这个时候我们 消费者 B 需要调用 提供者 A 所提供的服务我们就需要这么写。如我下面的伪代码。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">RestTemplate</span> restTemplate<span class="token punctuation">;</span>
<span class="token comment">// 这里是提供者A的ip地址，但是如果使用了 Eureka 那么就应该是提供者A的名称</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> SERVICE_PROVIDER_A <span class="token operator">=</span> <span class="token string">"http://localhost:8081"</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/judge"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">judge</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Request</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> url <span class="token operator">=</span> SERVICE_PROVIDER_A <span class="token operator">+</span> <span class="token string">"/service1"</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> restTemplate<span class="token punctuation">.</span><span class="token function">postForObject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你对源码感兴趣的话，你会发现上面我们所讲的 <code v-pre>Eureka</code> 框架中的 <strong>注册</strong>、<strong>续约</strong> 等，底层都是使用的 <code v-pre>RestTemplate</code> 。</p>
<h3 id="为什么需要-ribbon" tabindex="-1"><a class="header-anchor" href="#为什么需要-ribbon" aria-hidden="true">#</a> 为什么需要 Ribbon？</h3>
<p><code v-pre>Ribbon</code> 是 <code v-pre>Netflix</code> 公司的一个开源的负载均衡 项目，是一个客户端/进程内负载均衡器，<strong>运行在消费者端</strong>。</p>
<p>我们再举个🌰，比如我们设计了一个秒杀系统，但是为了整个系统的 <strong>高可用</strong> ，我们需要将这个系统做一个集群，而这个时候我们消费者就可以拥有多个秒杀系统的调用途径了，如下图。</p>
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/秒杀系统-ribbon.jpg" style="zoom:50%;" />
<p>如果这个时候我们没有进行一些 <strong>均衡操作</strong> ，如果我们对 <code v-pre>秒杀系统1</code> 进行大量的调用，而另外两个基本不请求，就会导致 <code v-pre>秒杀系统1</code> 崩溃，而另外两个就变成了傀儡，那么我们为什么还要做集群，我们高可用体现的意义又在哪呢？</p>
<p>所以 <code v-pre>Ribbon</code> 出现了，注意我们上面加粗的几个字——<strong>运行在消费者端</strong>。指的是，<code v-pre>Ribbon</code> 是运行在消费者端的负载均衡器，如下图。</p>
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/秒杀系统-ribbon2.jpg" style="zoom:50%;" />
<p>其工作原理就是 <code v-pre>Consumer</code> 端获取到了所有的服务列表之后，在其<strong>内部</strong>使用<strong>负载均衡算法</strong>，进行对多个系统的调用。</p>
<h3 id="nginx-和-ribbon-的对比" tabindex="-1"><a class="header-anchor" href="#nginx-和-ribbon-的对比" aria-hidden="true">#</a> Nginx 和 Ribbon 的对比</h3>
<p>提到 <strong>负载均衡</strong> 就不得不提到大名鼎鼎的 <code v-pre>Nignx</code> 了，而和 <code v-pre>Ribbon</code> 不同的是，它是一种<strong>集中式</strong>的负载均衡器。</p>
<p>何为集中式呢？简单理解就是 <strong>将所有请求都集中起来，然后再进行负载均衡</strong>。如下图。</p>
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/nginx-vs-ribbon1.jpg" style="zoom:50%;" />
<p>我们可以看到 <code v-pre>Nginx</code> 是接收了所有的请求进行负载均衡的，而对于 <code v-pre>Ribbon</code> 来说它是在消费者端进行的负载均衡。如下图。</p>
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/nginx-vs-ribbon2.jpg" style="zoom:50%;" />
<blockquote>
<p>请注意 <code v-pre>Request</code> 的位置，在 <code v-pre>Nginx</code> 中请求是先进入负载均衡器，而在 <code v-pre>Ribbon</code> 中是先在客户端进行负载均衡才进行请求的。</p>
</blockquote>
<h3 id="ribbon-的几种负载均衡算法" tabindex="-1"><a class="header-anchor" href="#ribbon-的几种负载均衡算法" aria-hidden="true">#</a> Ribbon 的几种负载均衡算法</h3>
<p>负载均衡，不管 <code v-pre>Nginx</code> 还是 <code v-pre>Ribbon</code> 都需要其算法的支持，如果我没记错的话 <code v-pre>Nginx</code> 使用的是 轮询和加权轮询算法。而在 <code v-pre>Ribbon</code> 中有更多的负载均衡调度算法，其默认是使用的 <code v-pre>RoundRobinRule</code> 轮询策略。</p>
<ul>
<li><strong><code v-pre>RoundRobinRule</code></strong>：轮询策略。<code v-pre>Ribbon</code> 默认采用的策略。若经过一轮轮询没有找到可用的 <code v-pre>provider</code>，其最多轮询 10 轮。若最终还没有找到，则返回 <code v-pre>null</code>。</li>
<li><strong><code v-pre>RandomRule</code></strong>: 随机策略，从所有可用的 <code v-pre>provider</code> 中随机选择一个。</li>
<li><strong><code v-pre>RetryRule</code></strong>: 重试策略。先按照 <code v-pre>RoundRobinRule</code> 策略获取 <code v-pre>provider</code>，若获取失败，则在指定的时限内重试。默认的时限为 500 毫秒。</li>
</ul>
<p>🐦🐦🐦 还有很多，这里不一一举🌰了，你最需要知道的是默认轮询算法，并且可以更换默认的负载均衡算法，只需要在配置文件中做出修改就行。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">providerName</span><span class="token punctuation">:</span>
  <span class="token key atrule">ribbon</span><span class="token punctuation">:</span>
    <span class="token key atrule">NFLoadBalancerRuleClassName</span><span class="token punctuation">:</span> com.netflix.loadbalancer.RandomRule
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，在 <code v-pre>Ribbon</code> 中你还可以<strong>自定义负载均衡算法</strong>，你只需要实现 <code v-pre>IRule</code> 接口，然后修改配置文件或者自定义 <code v-pre>Java Config</code> 类。</p>
<h2 id="什么是-open-feign" tabindex="-1"><a class="header-anchor" href="#什么是-open-feign" aria-hidden="true">#</a> 什么是 Open Feign</h2>
<p>有了 <code v-pre>Eureka</code> ，<code v-pre>RestTemplate</code> ，<code v-pre>Ribbon</code>， 我们就可以愉快地进行服务间的调用了，但是使用 <code v-pre>RestTemplate</code> 还是不方便，我们每次都要进行这样的调用。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">RestTemplate</span> restTemplate<span class="token punctuation">;</span>
<span class="token comment">// 这里是提供者A的ip地址，但是如果使用了 Eureka 那么就应该是提供者A的名称</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span> SERVICE_PROVIDER_A <span class="token operator">=</span> <span class="token string">"http://localhost:8081"</span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/judge"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">judge</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Request</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> url <span class="token operator">=</span> SERVICE_PROVIDER_A <span class="token operator">+</span> <span class="token string">"/service1"</span><span class="token punctuation">;</span>
    <span class="token comment">// 是不是太麻烦了？？？每次都要 url、请求、返回类型的</span>
    <span class="token keyword">return</span> restTemplate<span class="token punctuation">.</span><span class="token function">postForObject</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样每次都调用 <code v-pre>RestRemplate</code> 的 <code v-pre>API</code> 是否太麻烦，我能不能像<strong>调用原来代码一样进行各个服务间的调用呢？</strong></p>
<p>💡💡💡聪明的小朋友肯定想到了，那就用 <strong>映射</strong> 呀，就像域名和 IP 地址的映射。我们可以将被调用的服务代码映射到消费者端，这样我们就可以 **“无缝开发” **啦。</p>
<blockquote>
<p><code v-pre>OpenFeign</code> 也是运行在消费者端的，使用 <code v-pre>Ribbon</code> 进行负载均衡，所以 <code v-pre>OpenFeign</code> 直接内置了 <code v-pre>Ribbon</code>。</p>
</blockquote>
<p>在导入了 <code v-pre>Open Feign</code> 之后我们就可以进行愉快编写 <code v-pre>Consumer</code> 端代码了。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 使用 @FeignClient 注解来指定提供者的名字</span>
<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"eureka-client-provider"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TestClient</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里一定要注意需要使用的是提供者那端的请求相对路径，这里就相当于映射了</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/provider/xxx"</span><span class="token punctuation">,</span>
    method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span>POST<span class="token punctuation">)</span>
    <span class="token class-name">CommonResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Plan</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">getPlans</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> planGetRequest request<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们在 <code v-pre>Controller</code> 就可以像原来调用 <code v-pre>Service</code> 层代码一样调用它了。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestController</span> <span class="token punctuation">{</span>
    <span class="token comment">// 这里就相当于原来自动注入的 Service</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">TestClient</span> testClient<span class="token punctuation">;</span>
    <span class="token comment">// controller 调用 service 层代码</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"/test"</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span>POST<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">Plan</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> planGetRequest request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> testClient<span class="token punctuation">.</span><span class="token function">getPlans</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="必不可少的-hystrix" tabindex="-1"><a class="header-anchor" href="#必不可少的-hystrix" aria-hidden="true">#</a> 必不可少的 Hystrix</h2>
<h3 id="什么是-hystrix-之熔断和降级" tabindex="-1"><a class="header-anchor" href="#什么是-hystrix-之熔断和降级" aria-hidden="true">#</a> 什么是 Hystrix 之熔断和降级</h3>
<blockquote>
<p>在分布式环境中，不可避免地会有许多服务依赖项中的某些失败。Hystrix 是一个库，可通过添加等待时间容限和容错逻辑来帮助您控制这些分布式服务之间的交互。Hystrix 通过隔离服务之间的访问点，停止服务之间的级联故障并提供后备选项来实现此目的，所有这些都可以提高系统的整体弹性。</p>
</blockquote>
<p>总体来说 <code v-pre>Hystrix</code> 就是一个能进行 <strong>熔断</strong> 和 <strong>降级</strong> 的库，通过使用它能提高整个系统的弹性。</p>
<p>那么什么是 熔断和降级 呢？再举个🌰，此时我们整个微服务系统是这样的。服务 A 调用了服务 B，服务 B 再调用了服务 C，但是因为某些原因，服务 C 顶不住了，这个时候大量请求会在服务 C 阻塞。</p>
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/Hystrix1.jpg" style="zoom:50%;" />
<p>服务 C 阻塞了还好，毕竟只是一个系统崩溃了。但是请注意这个时候因为服务 C 不能返回响应，那么服务 B 调用服务 C 的的请求就会阻塞，同理服务 B 阻塞了，那么服务 A 也会阻塞崩溃。</p>
<blockquote>
<p>请注意，为什么阻塞会崩溃。因为这些请求会消耗占用系统的线程、IO 等资源，消耗完你这个系统服务器不就崩了么。</p>
</blockquote>
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/Hystrix2.jpg" style="zoom:50%;" />
<p>这就叫 <strong>服务雪崩</strong>。妈耶，上面两个 <strong>熔断</strong> 和 <strong>降级</strong> 你都没给我解释清楚，你现在又给我扯什么 <strong>服务雪崩</strong> ？😫😫😫</p>
<p>别急，听我慢慢道来。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/513d7e7f6d574fd799195d05556f4aa7-new-image9265b6bd-41ca-4e62-86f3-4341e5bdbe6c.png" alt="" loading="lazy"></p>
<p>不听我也得讲下去！</p>
<p>所谓 <strong>熔断</strong> 就是服务雪崩的一种有效解决方案。当指定时间窗内的请求失败率达到设定阈值时，系统将通过 <strong>断路器</strong> 直接将此请求链路断开。</p>
<p>也就是我们上面服务 B 调用服务 C 在指定时间窗内，调用的失败率到达了一定的值，那么 <code v-pre>Hystrix</code> 则会自动将 服务 B 与 C 之间的请求都断了，以免导致服务雪崩现象。</p>
<p>其实这里所讲的 <strong>熔断</strong> 就是指的 <code v-pre>Hystrix</code> 中的 <strong>断路器模式</strong> ，你可以使用简单的 <code v-pre>@HystrixCommand</code> 注解来标注某个方法，这样 <code v-pre>Hystrix</code> 就会使用 <strong>断路器</strong> 来“包装”这个方法，每当调用时间超过指定时间时(默认为 1000ms)，断路器将会中断对这个方法的调用。</p>
<p>当然你可以对这个注解的很多属性进行设置，比如设置超时时间，像这样。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@HystrixCommand</span><span class="token punctuation">(</span>
    commandProperties <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"execution.isolation.thread.timeoutInMilliseconds"</span><span class="token punctuation">,</span>value <span class="token operator">=</span> <span class="token string">"1200"</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Xxx</span><span class="token punctuation">></span></span> <span class="token function">getXxxx</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...省略代码逻辑</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，我查阅了一些博客，发现他们都将 <strong>熔断</strong> 和 <strong>降级</strong> 的概念混淆了，以我的理解，<strong>降级是为了更好的用户体验，当一个方法调用异常时，通过执行另一种代码逻辑来给用户友好的回复</strong>。这也就对应着 <code v-pre>Hystrix</code> 的 <strong>后备处理</strong> 模式。你可以通过设置 <code v-pre>fallbackMethod</code> 来给一个方法设置备用的代码逻辑。比如这个时候有一个热点新闻出现了，我们会推荐给用户查看详情，然后用户会通过 id 去查询新闻的详情，但是因为这条新闻太火了(比如最近什么*易对吧)，大量用户同时访问可能会导致系统崩溃，那么我们就进行 <strong>服务降级</strong> ，一些请求会做一些降级处理比如当前人数太多请稍后查看等等。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 指定了后备方法调用</span>
<span class="token annotation punctuation">@HystrixCommand</span><span class="token punctuation">(</span>fallbackMethod <span class="token operator">=</span> <span class="token string">"getHystrixNews"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/get/news"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">News</span> <span class="token function">getNews</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 调用新闻系统的获取新闻api 代码逻辑省略</span>
<span class="token punctuation">}</span>
<span class="token comment">//</span>
<span class="token keyword">public</span> <span class="token class-name">News</span> <span class="token function">getHystrixNews</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 做服务降级</span>
    <span class="token comment">// 返回当前人数太多，请稍后查看</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="什么是-hystrix-之其他" tabindex="-1"><a class="header-anchor" href="#什么是-hystrix-之其他" aria-hidden="true">#</a> 什么是 Hystrix 之其他</h3>
<p>我在阅读 《Spring 微服务实战》这本书的时候还接触到了一个 <strong>舱壁模式</strong> 的概念。在不使用舱壁模式的情况下，服务 A 调用服务 B，这种调用默认的是 <strong>使用同一批线程来执行</strong> 的，而在一个服务出现性能问题的时候，就会出现所有线程被刷爆并等待处理工作，同时阻塞新请求，最终导致程序崩溃。而舱壁模式会将远程资源调用隔离在他们自己的线程池中，以便可以控制单个表现不佳的服务，而不会使该程序崩溃。</p>
<p>具体其原理我推荐大家自己去了解一下，本篇文章中对 <strong>舱壁模式</strong> 不做过多解释。当然还有 <strong><code v-pre>Hystrix</code> 仪表盘</strong>，它是<strong>用来实时监控 <code v-pre>Hystrix</code> 的各项指标信息的</strong>，这里我将这个问题也抛出去，希望有不了解的可以自己去搜索一下。</p>
<h2 id="微服务网关——zuul" tabindex="-1"><a class="header-anchor" href="#微服务网关——zuul" aria-hidden="true">#</a> 微服务网关——Zuul</h2>
<blockquote>
<p>ZUUL 是从设备和 web 站点到 Netflix 流应用后端的所有请求的前门。作为边界服务应用，ZUUL 是为了实现动态路由、监视、弹性和安全性而构建的。它还具有根据情况将请求路由到多个 Amazon Auto Scaling Groups（亚马逊自动缩放组，亚马逊的一种云计算方式） 的能力</p>
</blockquote>
<p>在上面我们学习了 <code v-pre>Eureka</code> 之后我们知道了 <em>服务提供者</em> 是 <em>消费者</em> 通过 <code v-pre>Eureka Server</code> 进行访问的，即 <code v-pre>Eureka Server</code> 是 <em>服务提供者</em> 的统一入口。那么整个应用中存在那么多 <em>消费者</em> 需要用户进行调用，这个时候用户该怎样访问这些 <em>消费者工程</em> 呢？当然可以像之前那样直接访问这些工程。但这种方式没有统一的消费者工程调用入口，不便于访问与管理，而 Zuul 就是这样的一个对于 <em>消费者</em> 的统一入口。</p>
<blockquote>
<p>如果学过前端的肯定都知道 Router 吧，比如 Flutter 中的路由，Vue，React 中的路由，用了 Zuul 你会发现在路由功能方面和前端配置路由基本是一个理。😄 我偶尔撸撸 Flutter。</p>
</blockquote>
<p>大家对网关应该很熟吧，简单来讲网关是系统唯一对外的入口，介于客户端与服务器端之间，用于对请求进行<strong>鉴权</strong>、<strong>限流</strong>、 <strong>路由</strong>、<strong>监控</strong>等功能。</p>
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/zuul-sj22o93nfdsjkdsf.jpg" style="zoom:50%;" />
<p>没错，网关有的功能，<code v-pre>Zuul</code> 基本都有。而 <code v-pre>Zuul</code> 中最关键的就是 <strong>路由和过滤器</strong> 了，在官方文档中 <code v-pre>Zuul</code> 的标题就是</p>
<blockquote>
<p>Router and Filter : Zuul</p>
</blockquote>
<h3 id="zuul-的路由功能" tabindex="-1"><a class="header-anchor" href="#zuul-的路由功能" aria-hidden="true">#</a> Zuul 的路由功能</h3>
<h4 id="简单配置" tabindex="-1"><a class="header-anchor" href="#简单配置" aria-hidden="true">#</a> 简单配置</h4>
<p>本来想给你们复制一些代码，但是想了想，因为各个代码配置比较零散，看起来也比较零散，我决定还是给你们画个图来解释吧。</p>
<blockquote>
<p>请不要因为我这么好就给我点赞 👍 。 疯狂暗示。</p>
</blockquote>
<p>比如这个时候我们已经向 <code v-pre>Eureka Server</code> 注册了两个 <code v-pre>Consumer</code> 、三个 <code v-pre>Provicer</code> ，这个时候我们再加个 <code v-pre>Zuul</code> 网关应该变成这样子了。</p>
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/zuul-sj22o93nfdsjkdsf2312.jpg" style="zoom:50%;" />
<p>emmm，信息量有点大，我来解释一下。关于前面的知识我就不解释了😐。</p>
<p>首先，<code v-pre>Zuul</code> 需要向 <code v-pre>Eureka</code> 进行注册，注册有啥好处呢？</p>
<p>你傻呀，<code v-pre>Consumer</code> 都向 <code v-pre>Eureka Server</code> 进行注册了，我网关是不是只要注册就能拿到所有 <code v-pre>Consumer</code> 的信息了？</p>
<p>拿到信息有什么好处呢？</p>
<p>我拿到信息我是不是可以获取所有的 <code v-pre>Consumer</code> 的元数据(名称，ip，端口)？</p>
<p>拿到这些元数据有什么好处呢？拿到了我们是不是直接可以做<strong>路由映射</strong>？比如原来用户调用 <code v-pre>Consumer1</code> 的接口 <code v-pre>localhost:8001/studentInfo/update</code> 这个请求，我们是不是可以这样进行调用了呢？<code v-pre>localhost:9000/consumer1/studentInfo/update</code> 呢？你这样是不是恍然大悟了？</p>
<blockquote>
<p>这里的 url 为了让更多人看懂所以没有使用 restful 风格。</p>
</blockquote>
<p>上面的你理解了，那么就能理解关于 <code v-pre>Zuul</code> 最基本的配置了，看下面。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9000</span>
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">service-url</span><span class="token punctuation">:</span>
      <span class="token comment"># 这里只要注册 Eureka 就行了</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>9997/eureka
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在启动类上加入 <code v-pre>@EnableZuulProxy</code> 注解就行了。没错，就是那么简单😃。</p>
<h4 id="统一前缀" tabindex="-1"><a class="header-anchor" href="#统一前缀" aria-hidden="true">#</a> 统一前缀</h4>
<p>这个很简单，就是我们可以在前面加一个统一的前缀，比如我们刚刚调用的是 <code v-pre>localhost:9000/consumer1/studentInfo/update</code>，这个时候我们在 <code v-pre>yaml</code> 配置文件中添加如下。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">zuul</span><span class="token punctuation">:</span>
  <span class="token key atrule">prefix</span><span class="token punctuation">:</span> /zuul
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们就需要通过 <code v-pre>localhost:9000/zuul/consumer1/studentInfo/update</code> 来进行访问了。</p>
<h4 id="路由策略配置" tabindex="-1"><a class="header-anchor" href="#路由策略配置" aria-hidden="true">#</a> 路由策略配置</h4>
<p>你会发现前面的访问方式(直接使用服务名)，需要将微服务名称暴露给用户，会存在安全性问题。所以，可以自定义路径来替代微服务名称，即自定义路由策略。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">zuul</span><span class="token punctuation">:</span>
  <span class="token key atrule">routes</span><span class="token punctuation">:</span>
    <span class="token key atrule">consumer1</span><span class="token punctuation">:</span> /FrancisQ1/<span class="token important">**</span>
    <span class="token key atrule">consumer2</span><span class="token punctuation">:</span> /FrancisQ2/<span class="token important">**</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候你就可以使用 ``localhost:9000/zuul/FrancisQ1/studentInfo/update` 进行访问了。</p>
<h4 id="服务名屏蔽" tabindex="-1"><a class="header-anchor" href="#服务名屏蔽" aria-hidden="true">#</a> 服务名屏蔽</h4>
<p>这个时候你别以为你好了，你可以试试，在你配置完路由策略之后使用微服务名称还是可以访问的，这个时候你需要将服务名屏蔽。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">zuul</span><span class="token punctuation">:</span>
  <span class="token key atrule">ignore-services</span><span class="token punctuation">:</span> <span class="token string">"*"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="路径屏蔽" tabindex="-1"><a class="header-anchor" href="#路径屏蔽" aria-hidden="true">#</a> 路径屏蔽</h4>
<p><code v-pre>Zuul</code> 还可以指定屏蔽掉的路径 URI，即只要用户请求中包含指定的 URI 路径，那么该请求将无法访问到指定的服务。通过该方式可以限制用户的权限。</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">zuul</span><span class="token punctuation">:</span>
  <span class="token key atrule">ignore-patterns</span><span class="token punctuation">:</span> <span class="token important">**/auto/**</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样关于 auto 的请求我们就可以过滤掉了。</p>
<blockquote>
<p>** 代表匹配多级任意路径</p>
<p>*代表匹配一级任意路径</p>
</blockquote>
<h4 id="敏感请求头屏蔽" tabindex="-1"><a class="header-anchor" href="#敏感请求头屏蔽" aria-hidden="true">#</a> 敏感请求头屏蔽</h4>
<p>默认情况下，像 <code v-pre>Cookie</code>、<code v-pre>Set-Cookie</code> 等敏感请求头信息会被 <code v-pre>zuul</code> 屏蔽掉，我们可以将这些默认屏蔽去掉，当然，也可以添加要屏蔽的请求头。</p>
<h3 id="zuul-的过滤功能" tabindex="-1"><a class="header-anchor" href="#zuul-的过滤功能" aria-hidden="true">#</a> Zuul 的过滤功能</h3>
<p>如果说，路由功能是 <code v-pre>Zuul</code> 的基操的话，那么<strong>过滤器</strong>就是 <code v-pre>Zuul</code>的利器了。毕竟所有请求都经过网关(Zuul)，那么我们可以进行各种过滤，这样我们就能实现 <strong>限流</strong>，<strong>灰度发布</strong>，<strong>权限控制</strong> 等等。</p>
<h4 id="简单实现一个请求时间日志打印" tabindex="-1"><a class="header-anchor" href="#简单实现一个请求时间日志打印" aria-hidden="true">#</a> 简单实现一个请求时间日志打印</h4>
<p>要实现自己定义的 <code v-pre>Filter</code> 我们只需要继承 <code v-pre>ZuulFilter</code> 然后将这个过滤器类以 <code v-pre>@Component</code> 注解加入 Spring 容器中就行了。</p>
<p>在给你们看代码之前我先给你们解释一下关于过滤器的一些注意点。</p>
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/zuul-sj22o93nfdsjkdsf2312244.jpg" style="zoom:50%;" />
<p>过滤器类型：<code v-pre>Pre</code>、<code v-pre>Routing</code>、<code v-pre>Post</code>。前置<code v-pre>Pre</code>就是在请求之前进行过滤，<code v-pre>Routing</code>路由过滤器就是我们上面所讲的路由策略，而<code v-pre>Post</code>后置过滤器就是在 <code v-pre>Response</code> 之前进行过滤的过滤器。你可以观察上图结合着理解，并且下面我会给出相应的注释。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 加入Spring容器</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PreRequestFilter</span> <span class="token keyword">extends</span> <span class="token class-name">ZuulFilter</span> <span class="token punctuation">{</span>
    <span class="token comment">// 返回过滤器类型 这里是前置过滤器</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">filterType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">FilterConstants</span><span class="token punctuation">.</span>PRE_TYPE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 指定过滤顺序 越小越先执行，这里第一个执行</span>
    <span class="token comment">// 当然不是只真正第一个 在Zuul内置中有其他过滤器会先执行</span>
    <span class="token comment">// 那是写死的 比如 SERVLET_DETECTION_FILTER_ORDER = -3</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">filterOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 什么时候该进行过滤</span>
    <span class="token comment">// 这里我们可以进行一些判断，这样我们就可以过滤掉一些不符合规定的请求等等</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">shouldFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 如果过滤器允许通过则怎么进行处理</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ZuulException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 这里我设置了全局的RequestContext并记录了请求开始时间</span>
        <span class="token class-name">RequestContext</span> ctx <span class="token operator">=</span> <span class="token class-name">RequestContext</span><span class="token punctuation">.</span><span class="token function">getCurrentContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"startTime"</span><span class="token punctuation">,</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// lombok的日志</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token comment">// 加入 Spring 容器</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccessLogFilter</span> <span class="token keyword">extends</span> <span class="token class-name">ZuulFilter</span> <span class="token punctuation">{</span>
    <span class="token comment">// 指定该过滤器的过滤类型</span>
    <span class="token comment">// 此时是后置过滤器</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">filterType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">FilterConstants</span><span class="token punctuation">.</span>POST_TYPE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// SEND_RESPONSE_FILTER_ORDER 是最后一个过滤器</span>
    <span class="token comment">// 我们此过滤器在它之前执行</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">filterOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">FilterConstants</span><span class="token punctuation">.</span>SEND_RESPONSE_FILTER_ORDER <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">shouldFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 过滤时执行的策略</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ZuulException</span> <span class="token punctuation">{</span>
        <span class="token class-name">RequestContext</span> context <span class="token operator">=</span> <span class="token class-name">RequestContext</span><span class="token punctuation">.</span><span class="token function">getCurrentContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">HttpServletRequest</span> request <span class="token operator">=</span> context<span class="token punctuation">.</span><span class="token function">getRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 从RequestContext获取原先的开始时间 并通过它计算整个时间间隔</span>
        <span class="token class-name">Long</span> startTime <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Long</span><span class="token punctuation">)</span> context<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"startTime"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 这里我可以获取HttpServletRequest来获取URI并且打印出来</span>
        <span class="token class-name">String</span> uri <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getRequestURI</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">long</span> duration <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startTime<span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"uri: "</span> <span class="token operator">+</span> uri <span class="token operator">+</span> <span class="token string">", duration: "</span> <span class="token operator">+</span> duration <span class="token operator">/</span> <span class="token number">100</span> <span class="token operator">+</span> <span class="token string">"ms"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面就简单实现了请求时间日志打印功能，你有没有感受到 <code v-pre>Zuul</code> 过滤功能的强大了呢？</p>
<p>没有？好的、那我们再来。</p>
<h4 id="令牌桶限流" tabindex="-1"><a class="header-anchor" href="#令牌桶限流" aria-hidden="true">#</a> 令牌桶限流</h4>
<p>当然不仅仅是令牌桶限流方式，<code v-pre>Zuul</code> 只要是限流的活它都能干，这里我只是简单举个🌰。</p>
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/zuui-令牌桶限流.jpg" alt="令牌桶限流" style="zoom:50%;" />
<p>我先来解释一下什么是 <strong>令牌桶限流</strong> 吧。</p>
<p>首先我们会有个桶，如果里面没有满那么就会以一定 <strong>固定的速率</strong> 会往里面放令牌，一个请求过来首先要从桶中获取令牌，如果没有获取到，那么这个请求就拒绝，如果获取到那么就放行。很简单吧，啊哈哈、</p>
<p>下面我们就通过 <code v-pre>Zuul</code> 的前置过滤器来实现一下令牌桶限流。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>lgq<span class="token punctuation">.</span>zuul<span class="token punctuation">.</span>filter</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>common<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">RateLimiter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>zuul<span class="token punctuation">.</span></span><span class="token class-name">ZuulFilter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>zuul<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">RequestContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>zuul<span class="token punctuation">.</span>exception<span class="token punctuation">.</span></span><span class="token class-name">ZuulException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>zuul<span class="token punctuation">.</span>filters<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">FilterConstants</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RouteFilter</span> <span class="token keyword">extends</span> <span class="token class-name">ZuulFilter</span> <span class="token punctuation">{</span>
    <span class="token comment">// 定义一个令牌桶，每秒产生2个令牌，即每秒最多处理2个请求</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">RateLimiter</span> RATE_LIMITER <span class="token operator">=</span> <span class="token class-name">RateLimiter</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">filterType</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">FilterConstants</span><span class="token punctuation">.</span>PRE_TYPE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">filterOrder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ZuulException</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"放行"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">shouldFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RequestContext</span> context <span class="token operator">=</span> <span class="token class-name">RequestContext</span><span class="token punctuation">.</span><span class="token function">getCurrentContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>RATE_LIMITER<span class="token punctuation">.</span><span class="token function">tryAcquire</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">"访问量超载"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 指定当前请求未通过过滤</span>
            context<span class="token punctuation">.</span><span class="token function">setSendZuulResponse</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 向客户端返回响应码429，请求数量过多</span>
            context<span class="token punctuation">.</span><span class="token function">setResponseStatusCode</span><span class="token punctuation">(</span><span class="token number">429</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样我们就能将请求数量控制在一秒两个，有没有觉得很酷？</p>
<h3 id="关于-zuul-的其他" tabindex="-1"><a class="header-anchor" href="#关于-zuul-的其他" aria-hidden="true">#</a> 关于 Zuul 的其他</h3>
<p><code v-pre>Zuul</code> 的过滤器的功能肯定不止上面我所实现的两种，它还可以实现 <strong>权限校验</strong>，包括我上面提到的 <strong>灰度发布</strong> 等等。</p>
<p>当然，<code v-pre>Zuul</code> 作为网关肯定也存在 <strong>单点问题</strong> ，如果我们要保证 <code v-pre>Zuul</code> 的高可用，我们就需要进行 <code v-pre>Zuul</code> 的集群配置，这个时候可以借助额外的一些负载均衡器比如 <code v-pre>Nginx</code> 。</p>
<h2 id="spring-cloud-配置管理——config" tabindex="-1"><a class="header-anchor" href="#spring-cloud-配置管理——config" aria-hidden="true">#</a> Spring Cloud 配置管理——Config</h2>
<h3 id="为什么要使用进行配置管理" tabindex="-1"><a class="header-anchor" href="#为什么要使用进行配置管理" aria-hidden="true">#</a> 为什么要使用进行配置管理？</h3>
<p>当我们的微服务系统开始慢慢地庞大起来，那么多 <code v-pre>Consumer</code> 、<code v-pre>Provider</code> 、<code v-pre>Eureka Server</code> 、<code v-pre>Zuul</code> 系统都会持有自己的配置，这个时候我们在项目运行的时候可能需要更改某些应用的配置，如果我们不进行配置的统一管理，我们只能<strong>去每个应用下一个一个寻找配置文件然后修改配置文件再重启应用</strong>。</p>
<p>首先对于分布式系统而言我们就不应该去每个应用下去分别修改配置文件，再者对于重启应用来说，服务无法访问所以直接抛弃了可用性，这是我们更不愿见到的。</p>
<p>那么有没有一种方法<strong>既能对配置文件统一地进行管理，又能在项目运行时动态修改配置文件呢？</strong></p>
<p>那就是我今天所要介绍的 <code v-pre>Spring Cloud Config</code> 。</p>
<blockquote>
<p>能进行配置管理的框架不止 <code v-pre>Spring Cloud Config</code> 一种，大家可以根据需求自己选择（<code v-pre>disconf</code>，阿波罗等等）。而且对于 <code v-pre>Config</code> 来说有些地方实现的不是那么尽人意。</p>
</blockquote>
<h3 id="config-是什么" tabindex="-1"><a class="header-anchor" href="#config-是什么" aria-hidden="true">#</a> Config 是什么</h3>
<blockquote>
<p><code v-pre>Spring Cloud Config</code> 为分布式系统中的外部化配置提供服务器和客户端支持。使用 <code v-pre>Config</code> 服务器，可以在中心位置管理所有环境中应用程序的外部属性。</p>
</blockquote>
<p>简单来说，<code v-pre>Spring Cloud Config</code> 就是能将各个 应用/系统/模块 的配置文件存放到 <strong>统一的地方然后进行管理</strong>(Git 或者 SVN)。</p>
<p>你想一下，我们的应用是不是只有启动的时候才会进行配置文件的加载，那么我们的 <code v-pre>Spring Cloud Config</code> 就暴露出一个接口给启动应用来获取它所想要的配置文件，应用获取到配置文件然后再进行它的初始化工作。就如下图。</p>
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/config-ksksks.jpg" style="zoom:50%;" />
<p>当然这里你肯定还会有一个疑问，如果我在应用运行时去更改远程配置仓库(Git)中的对应配置文件，那么依赖于这个配置文件的已启动的应用会不会进行其相应配置的更改呢？</p>
<p>答案是不会的。</p>
<p>什么？那怎么进行动态修改配置文件呢？这不是出现了 <strong>配置漂移</strong> 吗？你个渣男😡，你又骗我！</p>
<p>别急嘛，你可以使用 <code v-pre>Webhooks</code> ，这是 <code v-pre>github</code> 提供的功能，它能确保远程库的配置文件更新后客户端中的配置信息也得到更新。</p>
<p>噢噢，这还差不多。我去查查怎么用。</p>
<p>慢着，听我说完，<code v-pre>Webhooks</code> 虽然能解决，但是你了解一下会发现它根本不适合用于生产环境，所以基本不会使用它的。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/1ada747175704ecba3507074847002d0-new-imagee5249fee-c5ee-4472-9983-f1bd5801387c.png" alt="" loading="lazy"></p>
<p>而一般我们会使用 <code v-pre>Bus</code> 消息总线 + <code v-pre>Spring Cloud Config</code> 进行配置的动态刷新。</p>
<h2 id="引出-spring-cloud-bus" tabindex="-1"><a class="header-anchor" href="#引出-spring-cloud-bus" aria-hidden="true">#</a> 引出 Spring Cloud Bus</h2>
<blockquote>
<p>用于将服务和服务实例与分布式消息系统链接在一起的事件总线。在集群中传播状态更改很有用（例如配置更改事件）。</p>
</blockquote>
<p>你可以简单理解为 <code v-pre>Spring Cloud Bus</code> 的作用就是<strong>管理和广播分布式系统中的消息</strong>，也就是消息引擎系统中的广播模式。当然作为 <strong>消息总线</strong> 的 <code v-pre>Spring Cloud Bus</code> 可以做很多事而不仅仅是客户端的配置刷新功能。</p>
<p>而拥有了 <code v-pre>Spring Cloud Bus</code> 之后，我们只需要创建一个简单的请求，并且加上 <code v-pre>@ResfreshScope</code> 注解就能进行配置的动态修改了，下面我画了张图供你理解。</p>
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/springcloud-bus-s213dsfsd.jpg" style="zoom:50%;" />
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这篇文章中我带大家初步了解了 <code v-pre>Spring Cloud</code> 的各个组件，他们有</p>
<ul>
<li><code v-pre>Eureka</code> 服务发现框架</li>
<li><code v-pre>Ribbon</code> 进程内负载均衡器</li>
<li><code v-pre>Open Feign</code> 服务调用映射</li>
<li><code v-pre>Hystrix</code> 服务降级熔断器</li>
<li><code v-pre>Zuul</code> 微服务网关</li>
<li><code v-pre>Config</code> 微服务统一配置中心</li>
<li><code v-pre>Bus</code> 消息总线</li>
</ul>
<p>如果你能这个时候能看懂文首那张图，也就说明了你已经对 <code v-pre>Spring Cloud</code> 微服务有了一定的架构认识。</p>
</div></template>
