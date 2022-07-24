<template><div><h2 id="序列化和反序列化相关概念" tabindex="-1"><a class="header-anchor" href="#序列化和反序列化相关概念" aria-hidden="true">#</a> 序列化和反序列化相关概念</h2>
<h3 id="什么是序列化-什么是反序列化" tabindex="-1"><a class="header-anchor" href="#什么是序列化-什么是反序列化" aria-hidden="true">#</a> 什么是序列化?什么是反序列化?</h3>
<p>如果我们需要持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象，这些场景都需要用到序列化。</p>
<p>简单来说：</p>
<ul>
<li><strong>序列化</strong>： 将数据结构或对象转换成二进制字节流的过程</li>
<li><strong>反序列化</strong>：将在序列化过程中所生成的二进制字节流的过程转换成数据结构或者对象的过程</li>
</ul>
<p>对于 Java 这种面向对象编程语言来说，我们序列化的都是对象（Object）也就是实例化后的类(Class)，但是在 C++这种半面向对象的语言中，struct(结构体)定义的是数据结构类型，而 class 对应的是对象类型。</p>
<p>维基百科是如是介绍序列化的：</p>
<blockquote>
<p><strong>序列化</strong>（serialization）在计算机科学的数据处理中，是指将数据结构或对象状态转换成可取用格式（例如存成文件，存于缓冲，或经由网络中发送），以留待后续在相同或另一台计算机环境中，能恢复原先状态的过程。依照序列化格式重新获取字节的结果时，可以利用它来产生与原始对象相同语义的副本。对于许多对象，像是使用大量引用的复杂对象，这种序列化重建的过程并不容易。面向对象中的对象序列化，并不概括之前原始对象所关系的函数。这种过程也称为对象编组（marshalling）。从一系列字节提取数据结构的反向操作，是反序列化（也称为解编组、deserialization、unmarshalling）。</p>
</blockquote>
<p>综上：<strong>序列化的主要目的是通过网络传输对象或者说是将对象存储到文件系统、数据库、内存中。</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2020-8/a478c74d-2c48-40ae-9374-87aacf05188c.png" alt="" loading="lazy"></p>
<p style="text-align:right;font-size:13px;color:gray">https://www.corejavaguru.com/java/serialization/interview-questions-1</p>
<h3 id="实际开发中有哪些用到序列化和反序列化的场景" tabindex="-1"><a class="header-anchor" href="#实际开发中有哪些用到序列化和反序列化的场景" aria-hidden="true">#</a> 实际开发中有哪些用到序列化和反序列化的场景？</h3>
<ol>
<li>对象在进行网络传输（比如远程方法调用 RPC 的时候）之前需要先被序列化，接收到序列化的对象之后需要再进行反序列化；</li>
<li>将对象存储到文件中的时候需要进行序列化，将对象从文件中读取出来需要进行反序列化。</li>
<li>将对象存储到缓存数据库（如 Redis）时需要用到序列化，将对象从缓存数据库中读取出来需要反序列化。</li>
</ol>
<h3 id="序列化协议对应于-tcp-ip-4-层模型的哪一层" tabindex="-1"><a class="header-anchor" href="#序列化协议对应于-tcp-ip-4-层模型的哪一层" aria-hidden="true">#</a> 序列化协议对应于 TCP/IP 4 层模型的哪一层？</h3>
<p>我们知道网络通信的双方必须要采用和遵守相同的协议。TCP/IP 四层模型是下面这样的，序列化协议属于哪一层呢？</p>
<ol>
<li>应用层</li>
<li>传输层</li>
<li>网络层</li>
<li>网络接口层</li>
</ol>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2020-8/6ecb84cd-4227-4c7b-a2e8-b77054604400-20200802201216504.png" alt="TCP/IP 4层模型" loading="lazy"></p>
<p>如上图所示，OSI 七层协议模型中，表示层做的事情主要就是对应用层的用户数据进行处理转换为二进制流。反过来的话，就是将二进制流转换成应用层的用户数据。这不就对应的是序列化和反序列化么？</p>
<p>因为，OSI 七层协议模型中的应用层、表示层和会话层对应的都是 TCP/IP 四层模型中的应用层，所以序列化协议属于 TCP/IP 协议应用层的一部分。</p>
<h2 id="常见序列化协议对比" tabindex="-1"><a class="header-anchor" href="#常见序列化协议对比" aria-hidden="true">#</a> 常见序列化协议对比</h2>
<p>JDK 自带的序列化方式一般不会用 ，因为序列化效率低并且部分版本有安全漏洞。比较常用的序列化协议有 hessian、kyro、protostuff。</p>
<p>下面提到的都是基于二进制的序列化协议，像 JSON 和 XML 这种属于文本类序列化方式。虽然 JSON 和 XML 可读性比较好，但是性能较差，一般不会选择。</p>
<h3 id="jdk-自带的序列化方式" tabindex="-1"><a class="header-anchor" href="#jdk-自带的序列化方式" aria-hidden="true">#</a> JDK 自带的序列化方式</h3>
<p>JDK 自带的序列化，只需实现 <code v-pre>java.io.Serializable</code>接口即可。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@Getter</span>
<span class="token annotation punctuation">@Builder</span>
<span class="token annotation punctuation">@ToString</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RpcRequest</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1905122041950251207L</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> requestId<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> interfaceName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> methodName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> parameters<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> paramTypes<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">RpcMessageTypeEnum</span> rpcMessageTypeEnum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>序列化号 serialVersionUID 属于版本控制的作用。序列化的时候 serialVersionUID 也会被写入二级制序列，当反序列化时会检查 serialVersionUID 是否和当前类的 serialVersionUID 一致。如果 serialVersionUID 不一致则会抛出 <code v-pre>InvalidClassException</code> 异常。强烈推荐每个序列化类都手动指定其 <code v-pre>serialVersionUID</code>，如果不手动指定，那么编译器会动态生成默认的序列化号</p>
</blockquote>
<p>我们很少或者说几乎不会直接使用这个序列化方式，主要原因有两个：</p>
<ol>
<li><strong>不支持跨语言调用</strong> : 如果调用的是其他语言开发的服务的时候就不支持了。</li>
<li><strong>性能差</strong> ：相比于其他序列化框架性能更低，主要原因是序列化之后的字节数组体积较大，导致传输成本加大。</li>
</ol>
<h3 id="kryo" tabindex="-1"><a class="header-anchor" href="#kryo" aria-hidden="true">#</a> Kryo</h3>
<p>Kryo 是一个高性能的序列化/反序列化工具，由于其变长存储特性并使用了字节码生成机制，拥有较高的运行速度和较小的字节码体积。</p>
<p>另外，Kryo 已经是一种非常成熟的序列化实现了，已经在 Twitter、Groupon、Yahoo 以及多个著名开源项目（如 Hive、Storm）中广泛的使用。</p>
<p><a href="https://github.com/Snailclimb/guide-rpc-framework" target="_blank" rel="noopener noreferrer">guide-rpc-framework<ExternalLinkIcon/></a> 就是使用的 kyro 进行序列化，序列化和反序列化相关的代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * Kryo serialization class, Kryo serialization efficiency is very high, but only compatible with Java language
 *
 * <span class="token keyword">@author</span> shuang.kou
 * <span class="token keyword">@createTime</span> 2020年05月13日 19:29:00
 */</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KryoSerializer</span> <span class="token keyword">implements</span> <span class="token class-name">Serializer</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * Because Kryo is not thread safe. So, use ThreadLocal to store Kryo objects
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ThreadLocal</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Kryo</span><span class="token punctuation">></span></span> kryoThreadLocal <span class="token operator">=</span> <span class="token class-name">ThreadLocal</span><span class="token punctuation">.</span><span class="token function">withInitial</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token punctuation">{</span>
        <span class="token class-name">Kryo</span> kryo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Kryo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kryo<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">RpcResponse</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        kryo<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">RpcRequest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> kryo<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">serialize</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">ByteArrayOutputStream</span> byteArrayOutputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayOutputStream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token class-name">Output</span> output <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Output</span><span class="token punctuation">(</span>byteArrayOutputStream<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Kryo</span> kryo <span class="token operator">=</span> kryoThreadLocal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// Object->byte:将对象序列化为byte数组</span>
            kryo<span class="token punctuation">.</span><span class="token function">writeObject</span><span class="token punctuation">(</span>output<span class="token punctuation">,</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
            kryoThreadLocal<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> output<span class="token punctuation">.</span><span class="token function">toBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SerializeException</span><span class="token punctuation">(</span><span class="token string">"Serialization failed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token class-name">T</span> <span class="token function">deserialize</span><span class="token punctuation">(</span><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes<span class="token punctuation">,</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> clazz<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">ByteArrayInputStream</span> byteArrayInputStream <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ByteArrayInputStream</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
             <span class="token class-name">Input</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Input</span><span class="token punctuation">(</span>byteArrayInputStream<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">Kryo</span> kryo <span class="token operator">=</span> kryoThreadLocal<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// byte->Object:从byte数组中反序列化出对对象</span>
            <span class="token class-name">Object</span> o <span class="token operator">=</span> kryo<span class="token punctuation">.</span><span class="token function">readObject</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> clazz<span class="token punctuation">)</span><span class="token punctuation">;</span>
            kryoThreadLocal<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> clazz<span class="token punctuation">.</span><span class="token function">cast</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">SerializeException</span><span class="token punctuation">(</span><span class="token string">"Deserialization failed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Github 地址：<a href="https://github.com/EsotericSoftware/kryo" target="_blank" rel="noopener noreferrer">https://github.com/EsotericSoftware/kryo<ExternalLinkIcon/></a> 。</p>
<h3 id="protobuf" tabindex="-1"><a class="header-anchor" href="#protobuf" aria-hidden="true">#</a> Protobuf</h3>
<p>Protobuf 出自于 Google，性能还比较优秀，也支持多种语言，同时还是跨平台的。就是在使用中过于繁琐，因为你需要自己定义 IDL 文件和生成对应的序列化代码。这样虽然不然灵活，但是，另一方面导致 protobuf 没有序列化漏洞的风险。</p>
<blockquote>
<p>Protobuf 包含序列化格式的定义、各种语言的库以及一个 IDL 编译器。正常情况下你需要定义 proto 文件，然后使用 IDL 编译器编译成你需要的语言</p>
</blockquote>
<p>一个简单的 proto 文件如下：</p>
<div class="language-protobuf ext-protobuf line-numbers-mode"><pre v-pre class="language-protobuf"><code><span class="token comment">// protobuf的版本</span>
<span class="token keyword">syntax</span> <span class="token operator">=</span> <span class="token string">"proto3"</span><span class="token punctuation">;</span>
<span class="token comment">// SearchRequest会被编译成不同的编程语言的相应对象，比如Java中的class、Go中的struct</span>
<span class="token keyword">message</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  <span class="token comment">//string类型字段</span>
  <span class="token builtin">string</span> name <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token comment">// int 类型字段</span>
  <span class="token builtin">int32</span> age <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Github 地址：<a href="https://github.com/protocolbuffers/protobuf" target="_blank" rel="noopener noreferrer">https://github.com/protocolbuffers/protobuf<ExternalLinkIcon/></a>。</p>
<h3 id="protostuff" tabindex="-1"><a class="header-anchor" href="#protostuff" aria-hidden="true">#</a> ProtoStuff</h3>
<p>由于 Protobuf 的易用性，它的哥哥 Protostuff 诞生了。</p>
<p>protostuff 基于 Google protobuf，但是提供了更多的功能和更简易的用法。虽然更加易用，但是不代表 ProtoStuff 性能更差。</p>
<p>Github 地址：<a href="https://github.com/protostuff/protostuff" target="_blank" rel="noopener noreferrer">https://github.com/protostuff/protostuff<ExternalLinkIcon/></a>。</p>
<h3 id="hessian" tabindex="-1"><a class="header-anchor" href="#hessian" aria-hidden="true">#</a> hessian</h3>
<p>hessian 是一个轻量级的,自定义描述的二进制 RPC 协议。hessian 是一个比较老的序列化实现了，并且同样也是跨语言的。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2020-8/8613ec4c-bde5-47bf-897e-99e0f90b9fa3.png" alt="" loading="lazy"></p>
<p>dubbo RPC 默认启用的序列化方式是 hessian2 ,但是，Dubbo 对 hessian2 进行了修改，不过大体结构还是差不多。</p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>Kryo 是专门针对 Java 语言序列化方式并且性能非常好，如果你的应用是专门针对 Java 语言的话可以考虑使用，并且 Dubbo 官网的一篇文章中提到说推荐使用 Kryo 作为生产环境的序列化方式。(文章地址：<a href="https://dubbo.apache.org/zh/docs/v2.7/user/references/protocol/rest/" target="_blank" rel="noopener noreferrer">https://dubbo.apache.org/zh/docs/v2.7/user/references/protocol/rest/<ExternalLinkIcon/></a>)</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2020-8/569e541a-22b2-4846-aa07-0ad479f07440.png" alt="" loading="lazy"></p>
<p>像 Protobuf、 ProtoStuff、hessian 这类都是跨语言的序列化方式，如果有跨语言需求的话可以考虑使用。</p>
<p>除了我上面介绍到的序列化方式的话，还有像 Thrift，Avro 这些。</p>
<h2 id="其他推荐阅读" tabindex="-1"><a class="header-anchor" href="#其他推荐阅读" aria-hidden="true">#</a> 其他推荐阅读</h2>
<ul>
<li>美团技术团队-序列化和反序列化：<a href="https://tech.meituan.com/2015/02/26/serialization-vs-deserialization.html" target="_blank" rel="noopener noreferrer">https://tech.meituan.com/2015/02/26/serialization-vs-deserialization.html<ExternalLinkIcon/></a></li>
<li>在 Dubbo 中使用高效的 Java 序列化（Kryo 和 FST）: <a href="https://dubbo.apache.org/zh/docs/v3.0/references/serializations/serialization/" target="_blank" rel="noopener noreferrer">https://dubbo.apache.org/zh/docs/v3.0/references/serializations/serialization/<ExternalLinkIcon/></a></li>
</ul>
</div></template>
