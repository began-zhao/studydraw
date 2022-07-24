<template><div><p>IO 模型这块确实挺难理解的，需要太多计算机底层知识。写这篇文章用了挺久，就非常希望能把我所知道的讲出来吧!希望朋友们能有收获！为了写这篇文章，还翻看了一下《UNIX 网络编程》这本书，太难了，我滴乖乖！心痛~</p>
<p><em>个人能力有限。如果文章有任何需要补充/完善/修改的地方，欢迎在评论区指出，共同进步！</em></p>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>I/O 一直是很多小伙伴难以理解的一个知识点，这篇文章我会将我所理解的 I/O 讲给你听，希望可以对你有所帮助。</p>
<h2 id="i-o" tabindex="-1"><a class="header-anchor" href="#i-o" aria-hidden="true">#</a> I/O</h2>
<h3 id="何为-i-o" tabindex="-1"><a class="header-anchor" href="#何为-i-o" aria-hidden="true">#</a> 何为 I/O?</h3>
<p>I/O（<strong>I</strong>nput/<strong>O</strong>utpu） 即<strong>输入／输出</strong> 。</p>
<p><strong>我们先从计算机结构的角度来解读一下 I/O。</strong></p>
<p>根据冯.诺依曼结构，计算机结构分为 5 大部分：运算器、控制器、存储器、输入设备、输出设备。</p>
<p><img src="https://img-blog.csdnimg.cn/20190624122126398.jpeg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9pcy1jbG91ZC5ibG9nLmNzZG4ubmV0,size_16,color_FFFFFF,t_70" alt="冯诺依曼体系结构" loading="lazy"></p>
<p>输入设备（比如键盘）和输出设备（比如显示器）都属于外部设备。网卡、硬盘这种既可以属于输入设备，也可以属于输出设备。</p>
<p>输入设备向计算机输入数据，输出设备接收计算机输出的数据。</p>
<p><strong>从计算机结构的视角来看的话， I/O 描述了计算机系统与外部设备之间通信的过程。</strong></p>
<p><strong>我们再先从应用程序的角度来解读一下 I/O。</strong></p>
<p>根据大学里学到的操作系统相关的知识：为了保证操作系统的稳定性和安全性，一个进程的地址空间划分为 <strong>用户空间（User space）</strong> 和 <strong>内核空间（Kernel space ）</strong> 。</p>
<p>像我们平常运行的应用程序都是运行在用户空间，只有内核空间才能进行系统态级别的资源有关的操作，比如文件管理、进程通信、内存管理等等。也就是说，我们想要进行 IO 操作，一定是要依赖内核空间的能力。</p>
<p>并且，用户空间的程序不能直接访问内核空间。</p>
<p>当想要执行 IO 操作时，由于没有执行这些操作的权限，只能发起系统调用请求操作系统帮忙完成。</p>
<p>因此，用户进程想要执行 IO 操作的话，必须通过 <strong>系统调用</strong> 来间接访问内核空间</p>
<p>我们在平常开发过程中接触最多的就是 <strong>磁盘 IO（读写文件）</strong> 和 <strong>网络 IO（网络请求和响应）</strong>。</p>
<p><strong>从应用程序的视角来看的话，我们的应用程序对操作系统的内核发起 IO 调用（系统调用），操作系统负责的内核执行具体的 IO 操作。也就是说，我们的应用程序实际上只是发起了 IO 操作的调用而已，具体 IO 的执行是由操作系统的内核来完成的。</strong></p>
<p>当应用程序发起 I/O 调用后，会经历两个步骤：</p>
<ol>
<li>内核等待 I/O 设备准备好数据</li>
<li>内核将数据从内核空间拷贝到用户空间。</li>
</ol>
<h3 id="有哪些常见的-io-模型" tabindex="-1"><a class="header-anchor" href="#有哪些常见的-io-模型" aria-hidden="true">#</a> 有哪些常见的 IO 模型?</h3>
<p>UNIX 系统下， IO 模型一共有 5 种： <strong>同步阻塞 I/O</strong>、<strong>同步非阻塞 I/O</strong>、<strong>I/O 多路复用</strong>、<strong>信号驱动 I/O</strong> 和<strong>异步 I/O</strong>。</p>
<p>这也是我们经常提到的 5 种 IO 模型。</p>
<h2 id="java-中-3-种常见-io-模型" tabindex="-1"><a class="header-anchor" href="#java-中-3-种常见-io-模型" aria-hidden="true">#</a> Java 中 3 种常见 IO 模型</h2>
<h3 id="bio-blocking-i-o" tabindex="-1"><a class="header-anchor" href="#bio-blocking-i-o" aria-hidden="true">#</a> BIO (Blocking I/O)</h3>
<p><strong>BIO 属于同步阻塞 IO 模型</strong> 。</p>
<p>同步阻塞 IO 模型中，应用程序发起 read 调用后，会一直阻塞，直到内核把数据拷贝到用户空间。</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6a9e704af49b4380bb686f0c96d33b81~tplv-k3u1fbpfcp-watermark.image" alt="图源：《深入拆解Tomcat &amp; Jetty》" loading="lazy"></p>
<p>在客户端连接数量不高的情况下，是没问题的。但是，当面对十万甚至百万级连接的时候，传统的 BIO 模型是无能为力的。因此，我们需要一种更高效的 I/O 处理模型来应对更高的并发量。</p>
<h3 id="nio-non-blocking-new-i-o" tabindex="-1"><a class="header-anchor" href="#nio-non-blocking-new-i-o" aria-hidden="true">#</a> NIO (Non-blocking/New I/O)</h3>
<p>Java 中的 NIO 于 Java 1.4 中引入，对应 <code v-pre>java.nio</code> 包，提供了 <code v-pre>Channel</code> , <code v-pre>Selector</code>，<code v-pre>Buffer</code> 等抽象。NIO 中的 N 可以理解为 Non-blocking，不单纯是 New。它是支持面向缓冲的，基于通道的 I/O 操作方法。 对于高负载、高并发的（网络）应用，应使用 NIO 。</p>
<p>Java 中的 NIO 可以看作是 <strong>I/O 多路复用模型</strong>。也有很多人认为，Java 中的 NIO 属于同步非阻塞 IO 模型。</p>
<p>跟着我的思路往下看看，相信你会得到答案！</p>
<p>我们先来看看 <strong>同步非阻塞 IO 模型</strong>。</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bb174e22dbe04bb79fe3fc126aed0c61~tplv-k3u1fbpfcp-watermark.image" alt="图源：《深入拆解Tomcat &amp; Jetty》" loading="lazy"></p>
<p>同步非阻塞 IO 模型中，应用程序会一直发起 read 调用，等待数据从内核空间拷贝到用户空间的这段时间里，线程依然是阻塞的，直到在内核把数据拷贝到用户空间。</p>
<p>相比于同步阻塞 IO 模型，同步非阻塞 IO 模型确实有了很大改进。通过轮询操作，避免了一直阻塞。</p>
<p>但是，这种 IO 模型同样存在问题：<strong>应用程序不断进行 I/O 系统调用轮询数据是否已经准备好的过程是十分消耗 CPU 资源的。</strong></p>
<p>这个时候，<strong>I/O 多路复用模型</strong> 就上场了。</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88ff862764024c3b8567367df11df6ab~tplv-k3u1fbpfcp-watermark.image" alt="" loading="lazy"></p>
<p>IO 多路复用模型中，线程首先发起 select 调用，询问内核数据是否准备就绪，等内核把数据准备好了，用户线程再发起 read 调用。read 调用的过程（数据从内核空间 -&gt; 用户空间）还是阻塞的。</p>
<blockquote>
<p>目前支持 IO 多路复用的系统调用，有 select，epoll 等等。select 系统调用，目前几乎在所有的操作系统上都有支持。</p>
<ul>
<li><strong>select 调用</strong> ：内核提供的系统调用，它支持一次查询多个系统调用的可用状态。几乎所有的操作系统都支持。</li>
<li><strong>epoll 调用</strong> ：linux 2.6 内核，属于 select 调用的增强版本，优化了 IO 的执行效率。</li>
</ul>
</blockquote>
<p><strong>IO 多路复用模型，通过减少无效的系统调用，减少了对 CPU 资源的消耗。</strong></p>
<p>Java 中的 NIO ，有一个非常重要的<strong>选择器 ( Selector )</strong> 的概念，也可以被称为 <strong>多路复用器</strong>。通过它，只需要一个线程便可以管理多个客户端连接。当客户端数据到了之后，才会为其服务。</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0f483f2437ce4ecdb180134270a00144~tplv-k3u1fbpfcp-watermark.image" alt="" loading="lazy"></p>
<h3 id="aio-asynchronous-i-o" tabindex="-1"><a class="header-anchor" href="#aio-asynchronous-i-o" aria-hidden="true">#</a> AIO (Asynchronous I/O)</h3>
<p>AIO 也就是 NIO 2。Java 7 中引入了 NIO 的改进版 NIO 2,它是异步 IO 模型。</p>
<p>异步 IO 是基于事件和回调机制实现的，也就是应用操作之后会直接返回，不会堵塞在那里，当后台处理完成，操作系统会通知相应的线程进行后续的操作。</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3077e72a1af049559e81d18205b56fd7~tplv-k3u1fbpfcp-watermark.image" alt="" loading="lazy"></p>
<p>目前来说 AIO 的应用还不是很广泛。Netty 之前也尝试使用过 AIO，不过又放弃了。这是因为，Netty 使用了 AIO 之后，在 Linux 系统上的性能并没有多少提升。</p>
<p>最后，来一张图，简单总结一下 Java 中的 BIO、NIO、AIO。</p>
<p><img src="https://images.xiaozhuanlan.com/photo/2020/33b193457c928ae02217480f994814b6.png" alt="" loading="lazy"></p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>《深入拆解 Tomcat &amp; Jetty》</li>
<li>如何完成一次 IO：<a href="https://llc687.top/126.html" target="_blank" rel="noopener noreferrer">https://llc687.top/126.html<ExternalLinkIcon/></a></li>
<li>程序员应该这样理解 IO：<a href="https://www.jianshu.com/p/fa7bdc4f3de7" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/fa7bdc4f3de7<ExternalLinkIcon/></a></li>
<li>10 分钟看懂， Java NIO 底层原理：<a href="https://www.cnblogs.com/crazymakercircle/p/10225159.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/crazymakercircle/p/10225159.html<ExternalLinkIcon/></a></li>
<li>IO 模型知多少 | 理论篇：<a href="https://www.cnblogs.com/sheng-jie/p/how-much-you-know-about-io-models.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/sheng-jie/p/how-much-you-know-about-io-models.html<ExternalLinkIcon/></a></li>
<li>《UNIX 网络编程 卷 1；套接字联网 API 》6.2 节 IO 模型</li>
</ul>
</div></template>
