<template><div><h2 id="应用层有哪些常见的协议" tabindex="-1"><a class="header-anchor" href="#应用层有哪些常见的协议" aria-hidden="true">#</a> 应用层有哪些常见的协议？</h2>
<h3 id="http-超文本传输协议" tabindex="-1"><a class="header-anchor" href="#http-超文本传输协议" aria-hidden="true">#</a> HTTP:超文本传输协议</h3>
<p><strong>超文本传输协议（HTTP，HyperText Transfer Protocol)</strong> 主要是为 Web 浏览器与 Web 服务器之间的通信而设计的。当我们使用浏览器浏览网页的时候，我们网页就是通过 HTTP 请求进行加载的，整个过程如下图所示。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/450px-HTTP-Header.png" alt="" loading="lazy"></p>
<p>HTTP 协是基于 TCP协议，发送 HTTP 请求之前首先要建立 TCP 连接也就是要经历 3 次握手。目前使用的 HTTP 协议大部分都是 1.1。在 1.1 的协议里面，默认是开启了 Keep-Alive 的，这样的话建立的连接就可以在多次请求中被复用了。</p>
<p>另外， HTTP 协议是”无状态”的协议，它无法记录客户端用户的状态，一般我们都是通过 Session 来记录客户端用户的状态。</p>
<h3 id="smtp-简单邮件传输-发送-协议" tabindex="-1"><a class="header-anchor" href="#smtp-简单邮件传输-发送-协议" aria-hidden="true">#</a> SMTP:简单邮件传输(发送)协议</h3>
<p><strong>简单邮件传输(发送)协议（SMTP，Simple Mail Transfer Protocol）</strong> 基于 TCP 协议，用来发送电子邮件。</p>
<p>注意⚠️：<strong>接受邮件的协议不是 SMTP 而是 POP3 协议。</strong></p>
<p>SMTP 协议这块涉及的内容比较多，下面这两个问题比较重要：</p>
<ol>
<li>电子邮件的发送过程</li>
<li>如何判断邮箱是真正存在的？</li>
</ol>
<p><strong>电子邮件的发送过程？</strong></p>
<p>比如我的邮箱是“dabai@cszhinan.com”，我要向“xiaoma@qq.com”发送邮件，整个过程可以简单分为下面几步：</p>
<ol>
<li>通过 <strong>SMTP</strong>  协议，我将我写好的邮件交给163邮箱服务器（邮局）。</li>
<li>163邮箱服务器发现我发送的邮箱是qq邮箱，然后它使用 SMTP协议将我的邮件转发到 qq邮箱服务器。</li>
<li>qq邮箱服务器接收邮件之后就通知邮箱为“xiaoma@qq.com”的用户来收邮件，然后用户就通过 <strong>POP3/IMAP</strong> 协议将邮件取出。</li>
</ol>
<p><strong>如何判断邮箱是真正存在的？</strong></p>
<p>很多场景(比如邮件营销)下面我们需要判断我们要发送的邮箱地址是否真的存在，这个时候我们可以利用 SMTP 协议来检测：</p>
<ol>
<li>查找邮箱域名对应的  SMTP 服务器地址</li>
<li>尝试与服务器建立连接</li>
<li>连接成功后尝试向需要验证的邮箱发送邮件</li>
<li>根据返回结果判定邮箱地址的真实性</li>
</ol>
<p>推荐几个在线邮箱是否有效检测工具：</p>
<ol>
<li><a href="https://verify-email.org/" target="_blank" rel="noopener noreferrer">https://verify-email.org/<ExternalLinkIcon/></a></li>
<li><a href="http://tool.chacuo.net/mailverify" target="_blank" rel="noopener noreferrer">http://tool.chacuo.net/mailverify<ExternalLinkIcon/></a></li>
<li><a href="https://www.emailcamel.com/" target="_blank" rel="noopener noreferrer">https://www.emailcamel.com/<ExternalLinkIcon/></a></li>
</ol>
<h3 id="pop3-imap-邮件接收的协议" tabindex="-1"><a class="header-anchor" href="#pop3-imap-邮件接收的协议" aria-hidden="true">#</a> POP3/IMAP:邮件接收的协议</h3>
<p>这两个协议没必要多做阐述，只需要了解 <strong>POP3 和 IMAP 两者都是负责邮件接收的协议</strong>即可。另外，需要注意不要将这两者和 SMTP 协议搞混淆了。<strong>SMTP 协议只负责邮件的发送，真正负责接收的协议是POP3/IMAP。</strong></p>
<p>IMAP 协议相比于POP3更新一点，为用户提供的可选功能也更多一点,几乎所有现代电子邮件客户端和服务器都支持IMAP。大部分网络邮件服务提供商都支持POP3和IMAP。</p>
<h3 id="ftp-文件传输协议" tabindex="-1"><a class="header-anchor" href="#ftp-文件传输协议" aria-hidden="true">#</a> FTP:文件传输协议</h3>
<p><strong>FTP 协议</strong> 主要提供文件传输服务，基于 TCP 实现可靠的传输。使用 FTP 传输文件的好处是可以屏蔽操作系统和文件存储方式。</p>
<p>FTP 是基于客户—服务器（C/S）模型而设计的，在客户端与 FTP 服务器之间建立两个连接。如果我们要基于 FTP 协议开发一个文件传输的软件的话，首先需要搞清楚 FTP 的原理。关于 FTP 的原理，很多书籍上已经描述的非常详细了：</p>
<blockquote>
<p>FTP 的独特的优势同时也是与其它客户服务器程序最大的不同点就在于它在两台通信的主机之间使用了两条 TCP 连接（其它客户服务器应用程序一般只有一条 TCP 连接）：</p>
<ol>
<li>控制连接：用于传送控制信息（命令和响应）</li>
<li>数据连接：用于数据传送；</li>
</ol>
<p>这种将命令和数据分开传送的思想大大提高了 FTP 的效率。</p>
</blockquote>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/计算机网络总结/ftp.png" alt="FTP工作过程" loading="lazy"></p>
<h3 id="telnet-远程登陆协议" tabindex="-1"><a class="header-anchor" href="#telnet-远程登陆协议" aria-hidden="true">#</a> Telnet:远程登陆协议</h3>
<p><strong>Telnet 协议</strong> 通过一个终端登陆到其他服务器，建立在可靠的传输协议 TCP 之上。Telnet 协议的最大缺点之一是所有数据（包括用户名和密码）均以明文形式发送，这有潜在的安全风险。这就是为什么如今很少使用Telnet并被一种称为SSH的非常安全的协议所取代的主要原因。</p>
<h3 id="ssh-安全的网络传输协议" tabindex="-1"><a class="header-anchor" href="#ssh-安全的网络传输协议" aria-hidden="true">#</a> SSH:安全的网络传输协议</h3>
<p><strong>SSH（ Secure Shell）</strong> 是目前较可靠，专为远程登录会话和其他网络服务提供安全性的协议。利用 SSH 协议可以有效防止远程管理过程中的信息泄露问题。SSH  建立在可靠的传输协议 TCP 之上。</p>
<p><strong>Telnet 和 SSH 之间的主要区别在于 SSH 协议会对传输的数据进行加密保证数据安全性。</strong></p>
<h2 id="tcp-三次握手和四次挥手-面试常客" tabindex="-1"><a class="header-anchor" href="#tcp-三次握手和四次挥手-面试常客" aria-hidden="true">#</a> TCP 三次握手和四次挥手(面试常客)</h2>
<p>为了准确无误地把数据送达目标处，TCP 协议采用了三次握手策略。</p>
<h3 id="tcp-三次握手漫画图解" tabindex="-1"><a class="header-anchor" href="#tcp-三次握手漫画图解" aria-hidden="true">#</a> TCP 三次握手漫画图解</h3>
<p>如下图所示，下面的两个机器人通过 3 次握手确定了对方能正确接收和发送消息(图片来源：《图解 HTTP》)。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019/7/三次握手.png" alt="TCP三次握手" loading="lazy"></p>
<p><strong>简单示意图：</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019/7/三次握手2.png" alt="TCP三次握手" loading="lazy"></p>
<ul>
<li>客户端–发送带有 SYN 标志的数据包–一次握手–服务端</li>
<li>服务端–发送带有 SYN/ACK 标志的数据包–二次握手–客户端</li>
<li>客户端–发送带有带有 ACK 标志的数据包–三次握手–服务端</li>
</ul>
<p><strong>详细示意图（图片来源不详）</strong></p>
<p><img src="https://img-blog.csdnimg.cn/img_convert/0c9f470819684156cfdc27c682db4def.png" alt="" loading="lazy"></p>
<h3 id="为什么要三次握手" tabindex="-1"><a class="header-anchor" href="#为什么要三次握手" aria-hidden="true">#</a> 为什么要三次握手</h3>
<p><strong>三次握手的目的是建立可靠的通信信道，说到通讯，简单来说就是数据的发送与接收，而三次握手最主要的目的就是双方确认自己与对方的发送与接收是正常的。</strong></p>
<p>第一次握手：Client 什么都不能确认；Server 确认了对方发送正常，自己接收正常</p>
<p>第二次握手：Client 确认了：自己发送、接收正常，对方发送、接收正常；Server 确认了：对方发送正常，自己接收正常</p>
<p>第三次握手：Client 确认了：自己发送、接收正常，对方发送、接收正常；Server 确认了：自己发送、接收正常，对方发送、接收正常</p>
<p>所以三次握手就能确认双方收发功能都正常，缺一不可。</p>
<h3 id="第-2-次握手传回了-ack-为什么还要传回-syn" tabindex="-1"><a class="header-anchor" href="#第-2-次握手传回了-ack-为什么还要传回-syn" aria-hidden="true">#</a> 第 2 次握手传回了 ACK，为什么还要传回 SYN？</h3>
<p>接收端传回发送端所发送的 ACK 是为了告诉客户端，我接收到的信息确实就是你所发送的信号了，这表明从客户端到服务端的通信是正常的。而回传 SYN 则是为了建立并确认从服务端到客户端的通信。”</p>
<blockquote>
<p>SYN 同步序列编号(Synchronize Sequence Numbers) 是 TCP/IP 建立连接时使用的握手信号。在客户机和服务器之间建立正常的 TCP 网络连接时，客户机首先发出一个 SYN 消息，服务器使用 SYN-ACK 应答表示接收到了这个消息，最后客户机再以 ACK(Acknowledgement）消息响应。这样在客户机和服务器之间才能建立起可靠的 TCP 连接，数据才可以在客户机和服务器之间传递。</p>
</blockquote>
<h3 id="为什么要四次挥手" tabindex="-1"><a class="header-anchor" href="#为什么要四次挥手" aria-hidden="true">#</a> 为什么要四次挥手</h3>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019/7/TCP四次挥手.png" alt="TCP四次挥手" loading="lazy"></p>
<p>断开一个 TCP 连接则需要“四次挥手”：</p>
<ul>
<li>客户端-发送一个 FIN，用来关闭客户端到服务器的数据传送</li>
<li>服务器-收到这个 FIN，它发回一 个 ACK，确认序号为收到的序号加 1 。和 SYN 一样，一个 FIN 将占用一个序号</li>
<li>服务器-关闭与客户端的连接，发送一个 FIN 给客户端</li>
<li>客户端-发回 ACK 报文确认，并将确认序号设置为收到序号加 1</li>
</ul>
<p>任何一方都可以在数据传送结束后发出连接释放的通知，待对方确认后进入半关闭状态。当另一方也没有数据再发送的时候，则发出连接释放通知，对方确认后就完全关闭了 TCP 连接。</p>
<p>举个例子：A 和 B 打电话，通话即将结束后，A 说“我没啥要说的了”，B 回答“我知道了”，但是 B 可能还会有要说的话，A 不能要求 B 跟着自己的节奏结束通话，于是 B 可能又巴拉巴拉说了一通，最后 B 说“我说完了”，A 回答“知道了”，这样通话才算结束。</p>
<p>上面讲的比较概括，推荐一篇讲的比较细致的文章：<a href="https://blog.csdn.net/qzcsu/article/details/72861891" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qzcsu/article/details/72861891<ExternalLinkIcon/></a></p>
<h2 id="tcp-udp-协议的区别" tabindex="-1"><a class="header-anchor" href="#tcp-udp-协议的区别" aria-hidden="true">#</a> TCP, UDP 协议的区别</h2>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/tcp-vs-udp.jpg" alt="TCP、UDP协议的区别" loading="lazy"></p>
<p>UDP 在传送数据之前不需要先建立连接，远地主机在收到 UDP 报文后，不需要给出任何确认。虽然 UDP 不提供可靠交付，但在某些情况下 UDP 却是一种最有效的工作方式（一般用于即时通信），比如： QQ 语音、 QQ 视频 、直播等等</p>
<p>TCP 提供面向连接的服务。在传送数据之前必须先建立连接，数据传送结束后要释放连接。 TCP 不提供广播或多播服务。由于 TCP 要提供可靠的，面向连接的传输服务（TCP 的可靠体现在 TCP 在传递数据之前，会有三次握手来建立连接，而且在数据传递时，有确认、窗口、重传、拥塞控制机制，在数据传完后，还会断开连接用来节约系统资源），这难以避免增加了许多开销，如确认，流量控制，计时器以及连接管理等。这不仅使协议数据单元的首部增大很多，还要占用许多处理机资源。TCP 一般用于文件传输、发送和接收邮件、远程登录等场景。</p>
<h2 id="tcp-协议如何保证可靠传输" tabindex="-1"><a class="header-anchor" href="#tcp-协议如何保证可靠传输" aria-hidden="true">#</a> TCP 协议如何保证可靠传输</h2>
<ol>
<li>应用数据被分割成 TCP 认为最适合发送的数据块。</li>
<li>TCP 给发送的每一个包进行编号，接收方对数据包进行排序，把有序数据传送给应用层。</li>
<li><strong>校验和：</strong> TCP 将保持它首部和数据的检验和。这是一个端到端的检验和，目的是检测数据在传输过程中的任何变化。如果收到段的检验和有差错，TCP 将丢弃这个报文段和不确认收到此报文段。</li>
<li>TCP 的接收端会丢弃重复的数据。</li>
<li><strong>流量控制：</strong> TCP 连接的每一方都有固定大小的缓冲空间，TCP 的接收端只允许发送端发送接收端缓冲区能接纳的数据。当接收方来不及处理发送方的数据，能提示发送方降低发送的速率，防止包丢失。TCP 使用的流量控制协议是可变大小的滑动窗口协议。 （TCP 利用滑动窗口实现流量控制）</li>
<li><strong>拥塞控制：</strong> 当网络拥塞时，减少数据的发送。</li>
<li><strong>ARQ 协议：</strong> 也是为了实现可靠传输的，它的基本原理就是每发完一个分组就停止发送，等待对方确认。在收到确认后再发下一个分组。</li>
<li><strong>超时重传：</strong> 当 TCP 发出一个段后，它启动一个定时器，等待目的端确认收到这个报文段。如果不能及时收到一个确认，将重发这个报文段。</li>
</ol>
<h3 id="arq-协议" tabindex="-1"><a class="header-anchor" href="#arq-协议" aria-hidden="true">#</a> ARQ 协议</h3>
<p><strong>自动重传请求</strong>（Automatic Repeat-reQuest，ARQ）是 OSI 模型中数据链路层和传输层的错误纠正协议之一。它通过使用确认和超时这两个机制，在不可靠服务的基础上实现可靠的信息传输。如果发送方在发送后一段时间之内没有收到确认帧，它通常会重新发送。ARQ 包括停止等待 ARQ 协议和连续 ARQ 协议。</p>
<h4 id="停止等待-arq-协议" tabindex="-1"><a class="header-anchor" href="#停止等待-arq-协议" aria-hidden="true">#</a> 停止等待 ARQ 协议</h4>
<p>停止等待协议是为了实现可靠传输的，它的基本原理就是每发完一个分组就停止发送，等待对方确认（回复 ACK）。如果过了一段时间（超时时间后），还是没有收到 ACK 确认，说明没有发送成功，需要重新发送，直到收到确认后再发下一个分组。</p>
<p>在停止等待协议中，若接收方收到重复分组，就丢弃该分组，但同时还要发送确认。</p>
<p><strong>优缺点：</strong></p>
<ul>
<li><strong>优点：</strong> 简单</li>
<li><strong>缺点：</strong> 信道利用率低，等待时间长</li>
</ul>
<p><strong>1) 无差错情况:</strong></p>
<p>发送方发送分组, 接收方在规定时间内收到, 并且回复确认. 发送方再次发送。</p>
<p><strong>2) 出现差错情况（超时重传）:</strong></p>
<p>停止等待协议中超时重传是指只要超过一段时间仍然没有收到确认，就重传前面发送过的分组（认为刚才发送过的分组丢失了）。因此每发送完一个分组需要设置一个超时计时器，其重传时间应比数据在分组传输的平均往返时间更长一些。这种自动重传方式常称为 <strong>自动重传请求 ARQ</strong> 。另外在停止等待协议中若收到重复分组，就丢弃该分组，但同时还要发送确认。<strong>连续 ARQ 协议</strong> 可提高信道利用率。发送维持一个发送窗口，凡位于发送窗口内的分组可连续发送出去，而不需要等待对方确认。接收方一般采用累积确认，对按序到达的最后一个分组发送确认，表明到这个分组位置的所有分组都已经正确收到了。</p>
<p><strong>3) 确认丢失和确认迟到</strong></p>
<ul>
<li><strong>确认丢失</strong> ：确认消息在传输过程丢失。当 A 发送 M1 消息，B 收到后，B 向 A 发送了一个 M1 确认消息，但却在传输过程中丢失。而 A 并不知道，在超时计时过后，A 重传 M1 消息，B 再次收到该消息后采取以下两点措施：1. 丢弃这个重复的 M1 消息，不向上层交付。 2. 向 A 发送确认消息。（不会认为已经发送过了，就不再发送。A 能重传，就证明 B 的确认消息丢失）。</li>
<li><strong>确认迟到</strong> ：确认消息在传输过程中迟到。A 发送 M1 消息，B 收到并发送确认。在超时时间内没有收到确认消息，A 重传 M1 消息，B 仍然收到并继续发送确认消息（B 收到了 2 份 M1）。此时 A 收到了 B 第二次发送的确认消息。接着发送其他数据。过了一会，A 收到了 B 第一次发送的对 M1 的确认消息（A 也收到了 2 份确认消息）。处理如下：1. A 收到重复的确认后，直接丢弃。2. B 收到重复的 M1 后，也直接丢弃重复的 M1。</li>
</ul>
<h4 id="连续-arq-协议" tabindex="-1"><a class="header-anchor" href="#连续-arq-协议" aria-hidden="true">#</a> 连续 ARQ 协议</h4>
<p>连续 ARQ 协议可提高信道利用率。发送方维持一个发送窗口，凡位于发送窗口内的分组可以连续发送出去，而不需要等待对方确认。接收方一般采用累积确认，对按序到达的最后一个分组发送确认，表明到这个分组为止的所有分组都已经正确收到了。</p>
<p><strong>优缺点：</strong></p>
<ul>
<li><strong>优点：</strong> 信道利用率高，容易实现，即使确认丢失，也不必重传。</li>
<li><strong>缺点：</strong> 不能向发送方反映出接收方已经正确收到的所有分组的信息。 比如：发送方发送了 5 条 消息，中间第三条丢失（3 号），这时接收方只能对前两个发送确认。发送方无法知道后三个分组的下落，而只好把后三个全部重传一次。这也叫 Go-Back-N（回退 N），表示需要退回来重传已经发送过的 N 个消息。</li>
</ul>
<h3 id="滑动窗口和流量控制" tabindex="-1"><a class="header-anchor" href="#滑动窗口和流量控制" aria-hidden="true">#</a> 滑动窗口和流量控制</h3>
<p><strong>TCP 利用滑动窗口实现流量控制。流量控制是为了控制发送方发送速率，保证接收方来得及接收。</strong> 接收方发送的确认报文中的窗口字段可以用来控制发送方窗口大小，从而影响发送方的发送速率。将窗口字段设置为 0，则发送方不能发送数据。</p>
<h3 id="拥塞控制" tabindex="-1"><a class="header-anchor" href="#拥塞控制" aria-hidden="true">#</a> 拥塞控制</h3>
<p>在某段时间，若对网络中某一资源的需求超过了该资源所能提供的可用部分，网络的性能就要变坏。这种情况就叫拥塞。拥塞控制就是为了防止过多的数据注入到网络中，这样就可以使网络中的路由器或链路不致过载。拥塞控制所要做的都有一个前提，就是网络能够承受现有的网络负荷。拥塞控制是一个全局性的过程，涉及到所有的主机，所有的路由器，以及与降低网络传输性能有关的所有因素。相反，流量控制往往是点对点通信量的控制，是个端到端的问题。流量控制所要做到的就是抑制发送端发送数据的速率，以便使接收端来得及接收。</p>
<p>为了进行拥塞控制，TCP 发送方要维持一个 <strong>拥塞窗口(cwnd)</strong> 的状态变量。拥塞控制窗口的大小取决于网络的拥塞程度，并且动态变化。发送方让自己的发送窗口取为拥塞窗口和接收方的接受窗口中较小的一个。</p>
<p>TCP 的拥塞控制采用了四种算法，即 <strong>慢开始</strong> 、 <strong>拥塞避免</strong> 、<strong>快重传</strong> 和 <strong>快恢复</strong>。在网络层也可以使路由器采用适当的分组丢弃策略（如主动队列管理 AQM），以减少网络拥塞的发生。</p>
<ul>
<li><strong>慢开始：</strong> 慢开始算法的思路是当主机开始发送数据时，如果立即把大量数据字节注入到网络，那么可能会引起网络阻塞，因为现在还不知道网络的符合情况。经验表明，较好的方法是先探测一下，即由小到大逐渐增大发送窗口，也就是由小到大逐渐增大拥塞窗口数值。cwnd 初始值为 1，每经过一个传播轮次，cwnd 加倍。</li>
<li><strong>拥塞避免：</strong> 拥塞避免算法的思路是让拥塞窗口 cwnd 缓慢增大，即每经过一个往返时间 RTT 就把发送方的 cwnd 加 1。</li>
<li><strong>快重传与快恢复：</strong>
在 TCP/IP 中，快速重传和恢复（fast retransmit and recovery，FRR）是一种拥塞控制算法，它能快速恢复丢失的数据包。没有 FRR，如果数据包丢失了，TCP 将会使用定时器来要求传输暂停。在暂停的这段时间内，没有新的或复制的数据包被发送。有了 FRR，如果接收机接收到一个不按顺序的数据段，它会立即给发送机发送一个重复确认。如果发送机接收到三个重复确认，它会假定确认件指出的数据段丢失了，并立即重传这些丢失的数据段。有了 FRR，就不会因为重传时要求的暂停被耽误。 　当有单独的数据包丢失时，快速重传和恢复（FRR）能最有效地工作。当有多个数据信息包在某一段很短的时间内丢失时，它则不能很有效地工作。</li>
</ul>
<h2 id="在浏览器中输入-url-地址-显示主页的过程-面试常客" tabindex="-1"><a class="header-anchor" href="#在浏览器中输入-url-地址-显示主页的过程-面试常客" aria-hidden="true">#</a> 在浏览器中输入 url 地址 -&gt;&gt; 显示主页的过程(面试常客)</h2>
<p>百度好像最喜欢问这个问题。</p>
<blockquote>
<p>打开一个网页，整个过程会使用哪些协议？</p>
</blockquote>
<p>图解（图片来源：《图解 HTTP》）：</p>
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/url输入到展示出来的过程.jpg" style="zoom:50%; " />
<blockquote>
<p>上图有一个错误，请注意，是 OSPF 不是 OPSF。 OSPF（Open Shortest Path First，ospf）开放最短路径优先协议, 是由 Internet 工程任务组开发的路由选择协议</p>
</blockquote>
<p>总体来说分为以下几个过程:</p>
<ol>
<li>DNS 解析</li>
<li>TCP 连接</li>
<li>发送 HTTP 请求</li>
<li>服务器处理请求并返回 HTTP 报文</li>
<li>浏览器解析渲染页面</li>
<li>连接结束</li>
</ol>
<p>具体可以参考下面这篇文章：</p>
<ul>
<li><a href="https://segmentfault.com/a/1190000006879700" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000006879700<ExternalLinkIcon/></a></li>
</ul>
<h2 id="状态码" tabindex="-1"><a class="header-anchor" href="#状态码" aria-hidden="true">#</a> 状态码</h2>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019/7/状态码.png" alt="状态码" loading="lazy"></p>
<h2 id="各种协议与-http-协议之间的关系" tabindex="-1"><a class="header-anchor" href="#各种协议与-http-协议之间的关系" aria-hidden="true">#</a> 各种协议与 HTTP 协议之间的关系</h2>
<p>一般面试官会通过这样的问题来考察你对计算机网络知识体系的理解。</p>
<p>图片来源：《图解 HTTP》</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019/7/各种协议与HTTP协议之间的关系.png" alt="各种协议与HTTP协议之间的关系" loading="lazy"></p>
<h2 id="http-是不保存状态的协议-如何保存用户状态" tabindex="-1"><a class="header-anchor" href="#http-是不保存状态的协议-如何保存用户状态" aria-hidden="true">#</a> HTTP 是不保存状态的协议, 如何保存用户状态?</h2>
<p>HTTP 是一种不保存状态，即无状态（stateless）协议。也就是说 HTTP 协议自身不对请求和响应之间的通信状态进行保存。那么我们保存用户状态呢？Session 机制的存在就是为了解决这个问题，Session 的主要作用就是通过服务端记录用户的状态。典型的场景是购物车，当你要添加商品到购物车的时候，系统不知道是哪个用户操作的，因为 HTTP 协议是无状态的。服务端给特定的用户创建特定的 Session 之后就可以标识这个用户并且跟踪这个用户了（一般情况下，服务器会在一定时间内保存这个 Session，过了时间限制，就会销毁这个 Session）。</p>
<p>在服务端保存 Session 的方法很多，最常用的就是内存和数据库(比如是使用内存数据库 redis 保存)。既然 Session 存放在服务器端，那么我们如何实现 Session 跟踪呢？大部分情况下，我们都是通过在 Cookie 中附加一个 Session ID 来方式来跟踪。</p>
<p><strong>Cookie 被禁用怎么办?</strong></p>
<p>最常用的就是利用 URL 重写把 Session ID 直接附加在 URL 路径的后面。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/HTTP是无状态的.png" alt="HTTP是无状态协议" loading="lazy"></p>
<h2 id="cookie-的作用是什么-和-session-有什么区别" tabindex="-1"><a class="header-anchor" href="#cookie-的作用是什么-和-session-有什么区别" aria-hidden="true">#</a> Cookie 的作用是什么? 和 Session 有什么区别？</h2>
<p>Cookie 和 Session 都是用来跟踪浏览器用户身份的会话方式，但是两者的应用场景不太一样。</p>
<p><strong>Cookie 一般用来保存用户信息</strong> 比如 ① 我们在 Cookie 中保存已经登录过的用户信息，下次访问网站的时候页面可以自动帮你把登录的一些基本信息给填了；② 一般的网站都会有保持登录，也就是说下次你再访问网站的时候就不需要重新登录了，这是因为用户登录的时候我们可以存放了一个 Token 在 Cookie 中，下次登录的时候只需要根据 Token 值来查找用户即可(为了安全考虑，重新登录一般要将 Token 重写)；③ 登录一次网站后访问网站其他页面不需要重新登录。<strong>Session 的主要作用就是通过服务端记录用户的状态。</strong> 典型的场景是购物车，当你要添加商品到购物车的时候，系统不知道是哪个用户操作的，因为 HTTP 协议是无状态的。服务端给特定的用户创建特定的 Session 之后就可以标识这个用户并且跟踪这个用户了。</p>
<p>Cookie 数据保存在客户端(浏览器端)，Session 数据保存在服务器端。</p>
<p>Cookie 存储在客户端中，而 Session 存储在服务器上，相对来说 Session 安全性更高。如果要在 Cookie 中存储一些敏感信息，不要直接写入 Cookie 中，最好能将 Cookie 信息加密，然后使用到的时候再去服务器端解密。</p>
<h2 id="uri-和-url-的区别是什么" tabindex="-1"><a class="header-anchor" href="#uri-和-url-的区别是什么" aria-hidden="true">#</a> URI 和 URL 的区别是什么?</h2>
<ul>
<li>URI(Uniform Resource Identifier) 是统一资源标志符，可以唯一标识一个资源。</li>
<li>URL(Uniform Resource Locator) 是统一资源定位符，可以提供该资源的路径。它是一种具体的 URI，即 URL 可以用来标识一个资源，而且还指明了如何 locate 这个资源。</li>
</ul>
<p>URI 的作用像身份证号一样，URL 的作用更像家庭住址一样。URL 是一种具体的 URI，它不仅唯一标识资源，而且还提供了定位该资源的信息。</p>
<h2 id="建议" tabindex="-1"><a class="header-anchor" href="#建议" aria-hidden="true">#</a> 建议</h2>
<p>非常推荐大家看一下 《图解 HTTP》 这本书，这本书页数不多，但是内容很是充实，不管是用来系统的掌握网络方面的一些知识还是说纯粹为了应付面试都有很大帮助。下面的一些文章只是参考。大二学习这门课程的时候，我们使用的教材是 《计算机网络第七版》（谢希仁编著），不推荐大家看这本教材，书非常厚而且知识偏理论，不确定大家能不能心平气和的读完。</p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li><a href="https://blog.csdn.net/qq_16209077/article/details/52718250" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_16209077/article/details/52718250<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/zixiaomuwu/article/details/60965466" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/zixiaomuwu/article/details/60965466<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/turn__back/article/details/73743641" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/turn__back/article/details/73743641<ExternalLinkIcon/></a></li>
<li><a href="https://mp.weixin.qq.com/s/GICbiyJpINrHZ41u_4zT-A?" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/GICbiyJpINrHZ41u_4zT-A?<ExternalLinkIcon/></a></li>
</ul>
</div></template>
