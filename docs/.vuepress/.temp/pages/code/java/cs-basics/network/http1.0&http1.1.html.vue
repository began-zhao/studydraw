<template><div><blockquote>
<p>本文由  <a href="https://github.com/Snailclimb" target="_blank" rel="noopener noreferrer">SnailClimb<ExternalLinkIcon/></a> 和 <a href="https://github.com/csguide-dabai" target="_blank" rel="noopener noreferrer">csguide-dabai<ExternalLinkIcon/></a> （公众号“CS指南”作者）共同完成。</p>
</blockquote>
<p>这篇文章会从下面几个维度来对比 HTTP 1.0 和 HTTP 1.1：</p>
<ul>
<li>响应状态码</li>
<li>缓存处理</li>
<li>连接方式</li>
<li>Host头处理</li>
<li>带宽优化</li>
</ul>
<h2 id="响应状态码" tabindex="-1"><a class="header-anchor" href="#响应状态码" aria-hidden="true">#</a> 响应状态码</h2>
<p>HTTP/1.0仅定义了16种状态码。HTTP/1.1中新加入了大量的状态码，光是错误响应状态码就新增了24种。比如说，<code v-pre>100 (Continue)</code>——在请求大资源前的预热请求，<code v-pre>206 (Partial Content)</code>——范围请求的标识码，<code v-pre>409 (Conflict)</code>——请求与当前资源的规定冲突，<code v-pre>410 (Gone)</code>——资源已被永久转移，而且没有任何已知的转发地址。</p>
<h2 id="缓存处理" tabindex="-1"><a class="header-anchor" href="#缓存处理" aria-hidden="true">#</a> 缓存处理</h2>
<p>缓存技术通过避免用户与源服务器的频繁交互，节约了大量的网络带宽，降低了用户接收信息的延迟。</p>
<h3 id="http-1-0" tabindex="-1"><a class="header-anchor" href="#http-1-0" aria-hidden="true">#</a> HTTP/1.0</h3>
<p>HTTP/1.0提供的缓存机制非常简单。服务器端使用<code v-pre>Expires</code>标签来标志（时间）一个响应体，在<code v-pre>Expires</code>标志时间内的请求，都会获得该响应体缓存。服务器端在初次返回给客户端的响应体中，有一个<code v-pre>Last-Modified</code>标签，该标签标记了被请求资源在服务器端的最后一次修改。在请求头中，使用<code v-pre>If-Modified-Since</code>标签，该标签标志一个时间，意为客户端向服务器进行问询：“该时间之后，我要请求的资源是否有被修改过？”通常情况下，请求头中的<code v-pre>If-Modified-Since</code>的值即为上一次获得该资源时，响应体中的<code v-pre>Last-Modified</code>的值。</p>
<p>如果服务器接收到了请求头，并判断<code v-pre>If-Modified-Since</code>时间后，资源确实没有修改过，则返回给客户端一个<code v-pre>304 not modified</code>响应头，表示”缓冲可用，你从浏览器里拿吧！”。</p>
<p>如果服务器判断<code v-pre>If-Modified-Since</code>时间后，资源被修改过，则返回给客户端一个<code v-pre>200 OK</code>的响应体，并附带全新的资源内容，表示”你要的我已经改过的，给你一份新的”。</p>
<p><img src="@source/code/java/cs-basics/network/images/http&amp;https/HTTP1.0cache1.png" alt="HTTP1.0cache1" loading="lazy"></p>
<p><img src="@source/code/java/cs-basics/network/images/http&amp;https/HTTP1.0cache2.png" alt="HTTP1.0cache2" loading="lazy"></p>
<h3 id="http-1-1" tabindex="-1"><a class="header-anchor" href="#http-1-1" aria-hidden="true">#</a> HTTP/1.1</h3>
<p>HTTP/1.1的缓存机制在HTTP/1.0的基础上，大大增加了灵活性和扩展性。基本工作原理和HTTP/1.0保持不变，而是增加了更多细致的特性。其中，请求头中最常见的特性就是<code v-pre>Cache-Control</code>，详见MDN Web文档 <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control" target="_blank" rel="noopener noreferrer">Cache-Control<ExternalLinkIcon/></a>.</p>
<h2 id="连接方式" tabindex="-1"><a class="header-anchor" href="#连接方式" aria-hidden="true">#</a> 连接方式</h2>
<p><strong>HTTP/1.0 默认使用短连接</strong> ，也就是说，客户端和服务器每进行一次 HTTP 操作，就建立一次连接，任务结束就中断连接。当客户端浏览器访问的某个 HTML 或其他类型的 Web 页中包含有其他的 Web 资源（如 JavaScript 文件、图像文件、CSS 文件等），每遇到这样一个 Web 资源，浏览器就会重新建立一个TCP连接，这样就会导致有大量的“握手报文”和“挥手报文”占用了带宽。</p>
<p><strong>为了解决 HTTP/1.0 存在的资源浪费的问题， HTTP/1.1 优化为默认长连接模式 。</strong> 采用长连接模式的请求报文会通知服务端：“我向你请求连接，并且连接成功建立后，请不要关闭”。因此，该TCP连接将持续打开，为后续的客户端-服务端的数据交互服务。也就是说在使用长连接的情况下，当一个网页打开完成后，客户端和服务器之间用于传输 HTTP 数据的 TCP 连接不会关闭，客户端再次访问这个服务器时，会继续使用这一条已经建立的连接。</p>
<p>如果 TCP 连接一直保持的话也是对资源的浪费，因此，一些服务器软件（如 Apache）还会支持超时时间的时间。在超时时间之内没有新的请求达到，TCP 连接才会被关闭。</p>
<p>有必要说明的是，HTTP/1.0仍提供了长连接选项，即在请求头中加入<code v-pre>Connection: Keep-alive</code>。同样的，在HTTP/1.1中，如果不希望使用长连接选项，也可以在请求头中加入<code v-pre>Connection: close</code>，这样会通知服务器端：“我不需要长连接，连接成功后即可关闭”。</p>
<p><strong>HTTP 协议的长连接和短连接，实质上是 TCP 协议的长连接和短连接。</strong></p>
<p><strong>实现长连接需要客户端和服务端都支持长连接。</strong></p>
<h2 id="host头处理" tabindex="-1"><a class="header-anchor" href="#host头处理" aria-hidden="true">#</a> Host头处理</h2>
<p>域名系统（DNS）允许多个主机名绑定到同一个IP地址上，但是HTTP/1.0并没有考虑这个问题，假设我们有一个资源URL是<a href="http://example1.org/home.html%EF%BC%8CHTTP/1.0%E7%9A%84%E8%AF%B7%E6%B1%82%E6%8A%A5%E6%96%87%E4%B8%AD%EF%BC%8C%E5%B0%86%E4%BC%9A%E8%AF%B7%E6%B1%82%E7%9A%84%E6%98%AF%60GET" target="_blank" rel="noopener noreferrer">http://example1.org/home.html，HTTP/1.0的请求报文中，将会请求的是`GET<ExternalLinkIcon/></a> /home.html HTTP/1.0`.也就是不会加入主机名。这样的报文送到服务器端，服务器是理解不了客户端想请求的真正网址。</p>
<p>因此，HTTP/1.1在请求头中加入了<code v-pre>Host</code>字段。加入<code v-pre>Host</code>字段的报文头部将会是:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET /home.html HTTP/1.1
Host: example1.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，服务器端就可以确定客户端想要请求的真正的网址了。</p>
<h2 id="带宽优化" tabindex="-1"><a class="header-anchor" href="#带宽优化" aria-hidden="true">#</a> 带宽优化</h2>
<h3 id="范围请求" tabindex="-1"><a class="header-anchor" href="#范围请求" aria-hidden="true">#</a> 范围请求</h3>
<p>HTTP/1.1引入了范围请求（range request）机制，以避免带宽的浪费。当客户端想请求一个文件的一部分，或者需要继续下载一个已经下载了部分但被终止的文件，HTTP/1.1可以在请求中加入<code v-pre>Range</code>头部，以请求（并只能请求字节型数据）数据的一部分。服务器端可以忽略<code v-pre>Range</code>头部，也可以返回若干<code v-pre>Range</code>响应。</p>
<p>如果一个响应包含部分数据的话，那么将带有<code v-pre>206 (Partial Content)</code>状态码。该状态码的意义在于避免了HTTP/1.0代理缓存错误地把该响应认为是一个完整的数据响应，从而把他当作为一个请求的响应缓存。</p>
<p>在范围响应中，<code v-pre>Content-Range</code>头部标志指示出了该数据块的偏移量和数据块的长度。</p>
<h3 id="状态码100" tabindex="-1"><a class="header-anchor" href="#状态码100" aria-hidden="true">#</a> 状态码100</h3>
<p>HTTP/1.1中新加入了状态码<code v-pre>100</code>。该状态码的使用场景为，存在某些较大的文件请求，服务器可能不愿意响应这种请求，此时状态码<code v-pre>100</code>可以作为指示请求是否会被正常响应，过程如下图：</p>
<p><img src="@source/code/java/cs-basics/network/images/http&amp;https/HTTP1.1continue1.png" alt="HTTP1.1continue1" loading="lazy"></p>
<p><img src="@source/code/java/cs-basics/network/images/http&amp;https/HTTP1.1continue2.png" alt="HTTP1.1continue2" loading="lazy"></p>
<p>然而在HTTP/1.0中，并没有<code v-pre>100 (Continue)</code>状态码，要想触发这一机制，可以发送一个<code v-pre>Expect</code>头部，其中包含一个<code v-pre>100-continue</code>的值。</p>
<h3 id="压缩" tabindex="-1"><a class="header-anchor" href="#压缩" aria-hidden="true">#</a> 压缩</h3>
<p>许多格式的数据在传输时都会做预压缩处理。数据的压缩可以大幅优化带宽的利用。然而，HTTP/1.0对数据压缩的选项提供的不多，不支持压缩细节的选择，也无法区分端到端（end-to-end）压缩或者是逐跳（hop-by-hop）压缩。</p>
<p>HTTP/1.1则对内容编码（content-codings）和传输编码（transfer-codings）做了区分。内容编码总是端到端的，传输编码总是逐跳的。</p>
<p>HTTP/1.0包含了<code v-pre>Content-Encoding</code>头部，对消息进行端到端编码。HTTP/1.1加入了<code v-pre>Transfer-Encoding</code>头部，可以对消息进行逐跳传输编码。HTTP/1.1还加入了<code v-pre>Accept-Encoding</code>头部，是客户端用来指示他能处理什么样的内容编码。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ol>
<li><strong>连接方式</strong> : HTTP 1.0 为短连接，HTTP 1.1 支持长连接。</li>
<li><strong>状态响应码</strong> : HTTP/1.1中新加入了大量的状态码，光是错误响应状态码就新增了24种。比如说，<code v-pre>100 (Continue)</code>——在请求大资源前的预热请求，<code v-pre>206 (Partial Content)</code>——范围请求的标识码，<code v-pre>409 (Conflict)</code>——请求与当前资源的规定冲突，<code v-pre>410 (Gone)</code>——资源已被永久转移，而且没有任何已知的转发地址。</li>
<li><strong>缓存处理</strong> : 在 HTTP1.0 中主要使用 header 里的 If-Modified-Since,Expires 来做为缓存判断的标准，HTTP1.1 则引入了更多的缓存控制策略例如 Entity tag，If-Unmodified-Since, If-Match, If-None-Match 等更多可供选择的缓存头来控制缓存策略。</li>
<li><strong>带宽优化及网络连接的使用</strong> :HTTP1.0 中，存在一些浪费带宽的现象，例如客户端只是需要某个对象的一部分，而服务器却将整个对象送过来了，并且不支持断点续传功能，HTTP1.1 则在请求头引入了 range 头域，它允许只请求资源的某个部分，即返回码是 206（Partial Content），这样就方便了开发者自由的选择以便于充分利用带宽和连接。</li>
<li><strong>Host头处理</strong> : HTTP/1.1在请求头中加入了<code v-pre>Host</code>字段。</li>
</ol>
<h2 id="参考资料" tabindex="-1"><a class="header-anchor" href="#参考资料" aria-hidden="true">#</a> 参考资料</h2>
<p><a href="http://www.ra.ethz.ch/cdstore/www8/data/2136/pdf/pd1.pdf" target="_blank" rel="noopener noreferrer">Key differences between HTTP/1.0 and HTTP/1.1<ExternalLinkIcon/></a></p>
</div></template>
