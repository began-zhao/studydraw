<template><div><h2 id="何为限流-为什么要限流" tabindex="-1"><a class="header-anchor" href="#何为限流-为什么要限流" aria-hidden="true">#</a> 何为限流？为什么要限流？</h2>
<p>针对软件系统来说，限流就是对请求的速率进行限制，避免瞬时的大量请求击垮软件系统。毕竟，软件系统的处理能力是有限的。如果说超过了其处理能力的范围，软件系统可能直接就挂掉了。</p>
<p>限流可能会导致用户的请求无法被正确处理，不过，这往往也是权衡了软件系统的稳定性之后得到的最优解。</p>
<p>现实生活中，处处都有限流的实际应用，就比如排队买票是为了避免大量用户涌入购票而导致售票员无法处理。</p>
<p><img src="https://img-blog.csdnimg.cn/f9f17071fc4d489d85d2a234fb298df1.png" alt="排队示意图" loading="lazy"></p>
<h2 id="常见限流算法" tabindex="-1"><a class="header-anchor" href="#常见限流算法" aria-hidden="true">#</a> 常见限流算法</h2>
<p>简单介绍 4 种非常好理解并且容易实现的限流算法！</p>
<blockquote>
<p>图片来源于 InfoQ 的一篇文章<a href="https://www.infoq.cn/article/Qg2tX8fyw5Vt-f3HH673" target="_blank" rel="noopener noreferrer">《分布式服务限流实战，已经为你排好坑了》<ExternalLinkIcon/></a>。</p>
</blockquote>
<h3 id="固定窗口计数器算法" tabindex="-1"><a class="header-anchor" href="#固定窗口计数器算法" aria-hidden="true">#</a> 固定窗口计数器算法</h3>
<p>固定窗口其实就是时间窗口。<strong>固定窗口计数器算法</strong> 规定了我们单位时间处理的请求数量。</p>
<p>假如我们规定系统中某个接口 1 分钟只能访问 33 次的话，使用固定窗口计数器算法的实现思路如下：</p>
<ul>
<li>给定一个变量 <code v-pre>counter</code> 来记录当前接口处理的请求数量，初始值为 0（代表接口当前 1 分钟内还未处理请求）。</li>
<li>1 分钟之内每处理一个请求之后就将 <code v-pre>counter+1</code> ，当 <code v-pre>counter=33</code> 之后（也就是说在这 1 分钟内接口已经被访问 33 次的话），后续的请求就会被全部拒绝。</li>
<li>等到 1 分钟结束后，将 <code v-pre>counter</code> 重置 0，重新开始计数。</li>
</ul>
<p><strong>这种限流算法无法保证限流速率，因而无法保证突然激增的流量。</strong></p>
<p>就比如说我们限制某个接口 1 分钟只能访问 1000 次，该接口的 QPS 为 500，前 55s 这个接口 1 个请求没有接收，后 1s 突然接收了 1000 个请求。然后，在当前场景下，这 1000 个请求在 1s 内是没办法被处理的，系统直接就被瞬时的大量请求给击垮了。</p>
<p><img src="https://static001.infoq.cn/resource/image/8d/15/8ded7a2b90e1482093f92fff555b3615.png" alt="固定窗口计数器算法" loading="lazy"></p>
<h3 id="滑动窗口计数器算法" tabindex="-1"><a class="header-anchor" href="#滑动窗口计数器算法" aria-hidden="true">#</a> 滑动窗口计数器算法</h3>
<p><strong>滑动窗口计数器算法</strong> 算的上是固定窗口计数器算法的升级版。</p>
<p>滑动窗口计数器算法相比于固定窗口计数器算法的优化在于：<strong>它把时间以一定比例分片</strong> 。</p>
<p>例如我们的接口限流每分钟处理 60 个请求，我们可以把 1 分钟分为 60 个窗口。每隔 1 秒移动一次，每个窗口一秒只能处理 不大于 <code v-pre>60(请求数)/60（窗口数）</code> 的请求， 如果当前窗口的请求计数总和超过了限制的数量的话就不再处理其他请求。</p>
<p>很显然， <strong>当滑动窗口的格子划分的越多，滑动窗口的滚动就越平滑，限流的统计就会越精确。</strong></p>
<p><img src="https://static001.infoq.cn/resource/image/ae/15/ae4d3cd14efb8dc7046d691c90264715.png" alt="滑动窗口计数器算法" loading="lazy"></p>
<h3 id="漏桶算法" tabindex="-1"><a class="header-anchor" href="#漏桶算法" aria-hidden="true">#</a> 漏桶算法</h3>
<p>我们可以把发请求的动作比作成注水到桶中，我们处理请求的过程可以比喻为漏桶漏水。我们往桶中以任意速率流入水，以一定速率流出水。当水超过桶流量则丢弃，因为桶容量是不变的，保证了整体的速率。</p>
<p>如果想要实现这个算法的话也很简单，准备一个队列用来保存请求，然后我们定期从队列中拿请求来执行就好了（和消息队列削峰/限流的思想是一样的）。</p>
<p><img src="https://static001.infoq.cn/resource/image/75/03/75938d1010138ce66e38c6ed0392f103.png" alt="漏桶算法" loading="lazy"></p>
<h3 id="令牌桶算法" tabindex="-1"><a class="header-anchor" href="#令牌桶算法" aria-hidden="true">#</a> 令牌桶算法</h3>
<p>令牌桶算法也比较简单。和漏桶算法算法一样，我们的主角还是桶（这限流算法和桶过不去啊）。不过现在桶里装的是令牌了，请求在被处理之前需要拿到一个令牌，请求处理完毕之后将这个令牌丢弃（删除）。我们根据限流大小，按照一定的速率往桶里添加令牌。如果桶装满了，就不能继续往里面继续添加令牌了。</p>
<p><img src="https://static001.infoq.cn/resource/image/ec/93/eca0e5eaa35dac938c673fecf2ec9a93.png" alt="令牌桶算法" loading="lazy"></p>
<h2 id="单机限流" tabindex="-1"><a class="header-anchor" href="#单机限流" aria-hidden="true">#</a> 单机限流</h2>
<p>单机限流可以直接使用 Google Guava 自带的限流工具类 <code v-pre>RateLimiter</code> 。 <code v-pre>RateLimiter</code> 基于令牌桶算法，可以应对突发流量。</p>
<blockquote>
<p>Guava 地址：<a href="https://github.com/google/guava" target="_blank" rel="noopener noreferrer">https://github.com/google/guava<ExternalLinkIcon/></a></p>
</blockquote>
<p>除了最基本的令牌桶算法(平滑突发限流)实现之外，Guava 的<code v-pre>RateLimiter</code>还提供了 <strong>平滑预热限流</strong> 的算法实现。</p>
<p>平滑突发限流就是按照指定的速率放令牌到桶里，而平滑预热限流会有一段预热时间，预热时间之内，速率会逐渐提升到配置的速率。</p>
<p>我们下面通过两个简单的小例子来详细了解吧！</p>
<p>我们直接在项目中引入 Guava 相关的依赖即可使用。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>com.google.guava<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>guava<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>31.0.1-jre<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个简单的 Guava 平滑突发限流的 Demo。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>common<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">RateLimiter</span></span><span class="token punctuation">;</span>

<span class="token comment">/*
*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RateLimiterDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1s 放 5 个令牌到桶里也就是 0.2s 放 1个令牌到桶里</span>
        <span class="token class-name">RateLimiter</span> rateLimiter <span class="token operator">=</span> <span class="token class-name">RateLimiter</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">double</span> sleepingTime <span class="token operator">=</span> rateLimiter<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"get 1 tokens: %ss%n"</span><span class="token punctuation">,</span> sleepingTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>get <span class="token number">1</span> tokens: <span class="token number">0</span>.0s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.188413s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.197811s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.198316s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.19864s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.199363s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.193997s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.199623s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.199357s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.195676s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个简单的 Guava 平滑预热限流的 Demo。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>google<span class="token punctuation">.</span>common<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">RateLimiter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 
 * <span class="token keyword">@date</span> 2021/10/08 19:12
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RateLimiterDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1s 放 5 个令牌到桶里也就是 0.2s 放 1个令牌到桶里</span>
        <span class="token comment">// 预热时间为3s,也就说刚开始的 3s 内发牌速率会逐渐提升到 0.2s 放 1 个令牌到桶里</span>
        <span class="token class-name">RateLimiter</span> rateLimiter <span class="token operator">=</span> <span class="token class-name">RateLimiter</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">double</span> sleepingTime <span class="token operator">=</span> rateLimiter<span class="token punctuation">.</span><span class="token function">acquire</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">"get 1 tokens: %sds%n"</span><span class="token punctuation">,</span> sleepingTime<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>get <span class="token number">1</span> tokens: <span class="token number">0</span>.0s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.561919s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.516931s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.463798s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.41286s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.356172s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.300489s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.252545s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.203996s
get <span class="token number">1</span> tokens: <span class="token number">0</span>.198359s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，<strong>Bucket4j</strong> 是一个非常不错的基于令牌/漏桶算法的限流库。</p>
<blockquote>
<p>Bucket4j 地址：<a href="https://github.com/vladimir-bukhtoyarov/bucket4j" target="_blank" rel="noopener noreferrer">https://github.com/vladimir-bukhtoyarov/bucket4j<ExternalLinkIcon/></a></p>
</blockquote>
<p>相对于，Guava 的限流工具类来说，Bucket4j 提供的限流功能更加全面。不仅支持单机限流和分布式限流，还可以集成监控，搭配 Prometheus 和 Grafana 使用。</p>
<p>不过，毕竟 Guava 也只是一个功能全面的工具类库，其提供的开箱即用的限流功能在很多单机场景下还是比较实用的。</p>
<p>Spring Cloud Gateway 中自带的单机限流的早期版本就是基于 Bucket4j 实现的。后来，替换成了 <strong>Resilience4j</strong>。</p>
<p>Resilience4j 是一个轻量级的容错组件，其灵感来自于 Hystrix。自<a href="https://github.com/Netflix/Hystrix/commit/a7df971cbaddd8c5e976b3cc5f14013fe6ad00e6" target="_blank" rel="noopener noreferrer">Netflix 宣布不再积极开发 Hystrix<ExternalLinkIcon/></a> 之后，Spring 官方和 Netflix 都更推荐使用 Resilience4j 来做限流熔断。</p>
<blockquote>
<p>Resilience4j 地址: <a href="https://github.com/resilience4j/resilience4j" target="_blank" rel="noopener noreferrer">https://github.com/resilience4j/resilience4j<ExternalLinkIcon/></a></p>
</blockquote>
<p>一般情况下，为了保证系统的高可用，项目的限流和熔断都是要一起做的。</p>
<p>Resilience4j 不仅提供限流，还提供了熔断、负载保护、自动重试等保障系统高可用开箱即用的功能。并且，Resilience4j 的生态也更好，很多网关都使用 Resilience4j 来做限流熔断的。</p>
<p>因此，在绝大部分场景下 Resilience4j 或许会是更好的选择。如果是一些比较简单的限流场景的话，Guava 或者 Bucket4j 也是不错的选择。</p>
<h2 id="分布式限流" tabindex="-1"><a class="header-anchor" href="#分布式限流" aria-hidden="true">#</a> 分布式限流</h2>
<p>分布式限流常见的方案：</p>
<ul>
<li><strong>借助中间件架限流</strong> ：可以借助 Sentinel 或者使用 Redis 来自己实现对应的限流逻辑。</li>
<li><strong>网关层限流</strong> ：比较常用的一种方案，直接在网关层把限流给安排上了。不过，通常网关层限流通常也需要借助到中间件/框架。就比如 Spring Cloud Gateway 的分布式限流实现<code v-pre>RedisRateLimiter</code>就是基于 Redis+Lua 来实现的，再比如 Spring Cloud Gateway 还可以整合 Sentinel 来做限流。</li>
</ul>
<p>如果你要基于 Redis 来手动实现限流逻辑的话，建议配合 Lua 脚本来做。</p>
<p>网上也有很多现成的脚本供你参考，就比如 Apache 网关项目 ShenYu 的 RateLimiter 限流插件就基于 Redis + Lua 实现了令牌桶算法/并发令牌桶算法、漏桶算法、滑动窗口算法。</p>
<blockquote>
<p>ShenYu 地址: <a href="https://github.com/apache/incubator-shenyu" target="_blank" rel="noopener noreferrer">https://github.com/apache/incubator-shenyu<ExternalLinkIcon/></a></p>
</blockquote>
<p><img src="https://img-blog.csdnimg.cn/e1e2a75f489e4854990dabe3b6cec522.png" alt="" loading="lazy"></p>
<h2 id="相关阅读" tabindex="-1"><a class="header-anchor" href="#相关阅读" aria-hidden="true">#</a> 相关阅读</h2>
<ul>
<li>服务治理之轻量级熔断框架 Resilience4j ：<a href="https://xie.infoq.cn/article/14786e571c1a4143ad1ef8f19" target="_blank" rel="noopener noreferrer">https://xie.infoq.cn/article/14786e571c1a4143ad1ef8f19<ExternalLinkIcon/></a></li>
<li>超详细的 Guava RateLimiter 限流原理解析：<a href="https://cloud.tencent.com/developer/article/1408819" target="_blank" rel="noopener noreferrer">https://cloud.tencent.com/developer/article/1408819<ExternalLinkIcon/></a></li>
<li>实战 Spring Cloud Gateway 之限流篇 👍：<a href="https://www.aneasystone.com/archives/2020/08/spring-cloud-gateway-current-limiting.html" target="_blank" rel="noopener noreferrer">https://www.aneasystone.com/archives/2020/08/spring-cloud-gateway-current-limiting.html<ExternalLinkIcon/></a></li>
</ul>
</div></template>
