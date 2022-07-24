<template><div><blockquote>
<p>本文由  <a href="https://github.com/Snailclimb" target="_blank" rel="noopener noreferrer">SnailClimb<ExternalLinkIcon/></a> 和 <a href="https://github.com/csguide-dabai" target="_blank" rel="noopener noreferrer">csguide-dabai<ExternalLinkIcon/></a> （公众号“CS指南”作者）共同完成。</p>
</blockquote>
<h2 id="osi-七层模型" tabindex="-1"><a class="header-anchor" href="#osi-七层模型" aria-hidden="true">#</a> OSI 七层模型</h2>
<p><strong>OSI 七层模型</strong> 是国际标准化组织提出一个网络分层模型，其大体结构以及每一层提供的功能如下图所示：</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/osi七层模型.png" alt="osi七层模型" loading="lazy"></p>
<p>每一层都专注做一件事情，并且每一层都需要使用下一层提供的功能比如传输层需要使用网络层提供的路由和寻址功能，这样传输层才知道把数据传输到哪里去。</p>
<p><strong>OSI 的七层体系结构概念清楚，理论也很完整，但是它比较复杂而且不实用，而且有些功能在多个层中重复出现。</strong></p>
<p>上面这种图可能比较抽象，再来一个比较生动的图片。下面这个图片是我在国外的一个网站上看到的，非常赞！</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/osi七层模型2.png" alt="osi七层模型2" loading="lazy"></p>
<p><strong>既然 OSI 七层模型这么厉害，为什么干不过 TCP/IP 四 层模型呢？</strong></p>
<p>的确，OSI 七层模型当时一直被一些大公司甚至一些国家政府支持。这样的背景下，为什么会失败呢？我觉得主要有下面几方面原因：</p>
<ol>
<li>OSI 的专家缺乏实际经验，他们在完成 OSI 标准时缺乏商业驱动力</li>
<li>OSI 的协议实现起来过分复杂，而且运行效率很低</li>
<li>OSI 制定标准的周期太长，因而使得按 OSI 标准生产的设备无法及时进入市场（20 世纪 90 年代初期，虽然整套的 OSI 国际标准都已经制定出来，但基于 TCP/IP 的互联网已经抢先在全球相当大的范围成功运行了）</li>
<li>OSI 的层次划分不太合理，有些功能在多个层次中重复出现。</li>
</ol>
<p>OSI 七层模型虽然失败了，但是却提供了很多不错的理论基础。为了更好地去了解网络分层，OSI 七层模型还是非常有必要学习的。</p>
<p>最后再分享一个关于 OSI 七层模型非常不错的总结图片！</p>
<p><img src="@source/code/java/cs-basics/network/images/osi&amp;tcp-ip-model/osi-model-detail.png" alt="" loading="lazy"></p>
<h2 id="tcp-ip-四层模型" tabindex="-1"><a class="header-anchor" href="#tcp-ip-四层模型" aria-hidden="true">#</a> TCP/IP 四层模型</h2>
<p><strong>TCP/IP 四层模型</strong> 是目前被广泛采用的一种模型,我们可以将 TCP / IP 模型看作是 OSI 七层模型的精简版本，由以下 4 层组成：</p>
<ol>
<li>应用层</li>
<li>传输层</li>
<li>网络层</li>
<li>网络接口层</li>
</ol>
<p>需要注意的是，我们并不能将 TCP/IP 四层模型 和 OSI 七层模型完全精确地匹配起来，不过可以简单将两者对应起来，如下图所示：</p>
<p><img src="@source/code/java/cs-basics/network/images/osi&amp;tcp-ip-model/TCP-IP-4-model.png" alt="TCP-IP-4-model" loading="lazy"></p>
<h3 id="应用层-application-layer" tabindex="-1"><a class="header-anchor" href="#应用层-application-layer" aria-hidden="true">#</a> 应用层（Application layer）</h3>
<p><strong>应用层位于传输层之上，主要提供两个终端设备上的应用程序之间信息交换的服务，它定义了信息交换的格式，消息会交给下一层传输层来传输。</strong> 我们把应用层交互的数据单元称为报文。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/5971-2-7I1-20220111095024771-20220111201807861.png" alt="" loading="lazy"></p>
<p>应用层协议定义了网络通信规则，对于不同的网络应用需要不同的应用层协议。在互联网中应用层协议很多，如支持 Web 应用的 HTTP 协议，支持电子邮件的 SMTP 协议等等。</p>
<p><img src="@source/code/java/cs-basics/network/images/osi&amp;tcp-ip-model/application-layer.png" alt="application-layer" loading="lazy"></p>
<h3 id="传输层-transport-layer" tabindex="-1"><a class="header-anchor" href="#传输层-transport-layer" aria-hidden="true">#</a> 传输层（Transport layer）</h3>
<p><strong>传输层的主要任务就是负责向两台终端设备进程之间的通信提供通用的数据传输服务。</strong> 应用进程利用该服务传送应用层报文。“通用的”是指并不针对某一个特定的网络应用，而是多种应用可以使用同一个运输层服务。</p>
<p><strong>运输层主要使用以下两种协议：</strong></p>
<ol>
<li><strong>传输控制协议 TCP</strong>（Transmisson Control Protocol）--提供<strong>面向连接</strong>的，<strong>可靠的</strong>数据传输服务。</li>
<li><strong>用户数据协议 UDP</strong>（User Datagram Protocol）--提供<strong>无连接</strong>的，尽最大努力的数据传输服务（<strong>不保证数据传输的可靠性</strong>）。</li>
</ol>
<p><img src="@source/code/java/cs-basics/network/images/osi&amp;tcp-ip-model/transport-layer.png" alt="transport-layer" loading="lazy"></p>
<h3 id="网络层-network-layer" tabindex="-1"><a class="header-anchor" href="#网络层-network-layer" aria-hidden="true">#</a> 网络层（Network layer）</h3>
<p><strong>网络层负责为分组交换网上的不同主机提供通信服务。</strong> 在发送数据时，网络层把运输层产生的报文段或用户数据报封装成分组和包进行传送。在 TCP/IP 体系结构中，由于网络层使用 IP 协议，因此分组也叫 IP 数据报，简称数据报。</p>
<p>⚠️注意 ：<strong>不要把运输层的“用户数据报 UDP”和网络层的“IP 数据报”弄混</strong>。</p>
<p><strong>网络层的还有一个任务就是选择合适的路由，使源主机运输层所传下来的分组，能通过网络层中的路由器找到目的主机。</strong></p>
<p>这里强调指出，网络层中的“网络”二字已经不是我们通常谈到的具体网络，而是指计算机网络体系结构模型中第三层的名称。</p>
<p>互联网是由大量的异构（heterogeneous）网络通过路由器（router）相互连接起来的。互联网使用的网络层协议是无连接的网际协议（Intert Prococol）和许多路由选择协议，因此互联网的网络层也叫做<strong>网际层</strong>或<strong>IP 层</strong>。</p>
<p><img src="@source/code/java/cs-basics/network/images/osi&amp;tcp-ip-model/nerwork-layer.png" alt="" loading="lazy"></p>
<h3 id="网络接口层-network-interface-layer" tabindex="-1"><a class="header-anchor" href="#网络接口层-network-interface-layer" aria-hidden="true">#</a> 网络接口层（Network interface layer）</h3>
<p>我们可以把网络接口层看作是数据链路层和物理层的合体。</p>
<ol>
<li>数据链路层(data link layer)通常简称为链路层（ 两台主机之间的数据传输，总是在一段一段的链路上传送的）。<strong>数据链路层的作用是将网络层交下来的 IP 数据报组装成帧，在两个相邻节点间的链路上传送帧。每一帧包括数据和必要的控制信息（如同步信息，地址信息，差错控制等）。</strong></li>
<li><strong>物理层的作用是实现相邻计算机节点之间比特流的透明传送，尽可能屏蔽掉具体传输介质和物理设备的差异</strong></li>
</ol>
<p><img src="@source/code/java/cs-basics/network/images/osi&amp;tcp-ip-model/network-interface-layer.png" alt="network-interface-layer" loading="lazy"></p>
<h2 id="为什么网络要分层" tabindex="-1"><a class="header-anchor" href="#为什么网络要分层" aria-hidden="true">#</a> 为什么网络要分层？</h2>
<p>在这篇文章的最后，我想聊聊：“为什么网络要分层？”。</p>
<p>说到分层，我们先从我们平时使用框架开发一个后台程序来说，我们往往会按照每一层做不同的事情的原则将系统分为三层（复杂的系统分层会更多）:</p>
<ol>
<li>Repository（数据库操作）</li>
<li>Service（业务操作）</li>
<li>Controller（前后端数据交互）</li>
</ol>
<p><strong>复杂的系统需要分层，因为每一层都需要专注于一类事情。网络分层的原因也是一样，每一层只专注于做一类事情。</strong></p>
<p>好了，再来说回：“为什么网络要分层？”。我觉得主要有 3 方面的原因：</p>
<ol>
<li><strong>各层之间相互独立</strong>：各层之间相互独立，各层之间不需要关心其他层是如何实现的，只需要知道自己如何调用下层提供好的功能就可以了（可以简单理解为接口调用）<strong>。这个和我们对开发时系统进行分层是一个道理。</strong></li>
<li><strong>提高了整体灵活性</strong> ：每一层都可以使用最适合的技术来实现，你只需要保证你提供的功能以及暴露的接口的规则没有改变就行了。<strong>这个和我们平时开发系统的时候要求的高内聚、低耦合的原则也是可以对应上的。</strong></li>
<li><strong>大问题化小</strong> ： 分层可以将复杂的网络间题分解为许多比较小的、界线比较清晰简单的小问题来处理和解决。这样使得复杂的计算机网络系统变得易于设计，实现和标准化。 <strong>这个和我们平时开发的时候，一般会将系统功能分解，然后将复杂的问题分解为容易理解的更小的问题是相对应的，这些较小的问题具有更好的边界（目标和接口）定义。</strong></li>
</ol>
<p>我想到了计算机世界非常非常有名的一句话，这里分享一下：</p>
<blockquote>
<p>计算机科学领域的任何问题都可以通过增加一个间接的中间层来解决，计算机整个体系从上到下都是按照严格的层次结构设计的。</p>
</blockquote>
</div></template>
