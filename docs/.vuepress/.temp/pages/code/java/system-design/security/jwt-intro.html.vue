<template><div><h2 id="什么是-jwt" tabindex="-1"><a class="header-anchor" href="#什么是-jwt" aria-hidden="true">#</a> 什么是 JWT?</h2>
<p>JWT （JSON Web Token） 是目前最流行的跨域认证解决方案，是一种基于 Token 的认证授权机制。 从 JWT 的全称可以看出，JWT 本身也是 Token，一种规范化之后的 JSON 结构的 Token。</p>
<p>JWT 自身包含了身份验证所需要的所有信息，因此，我们的服务器不需要存储 Session 信息。这显然增加了系统的可用性和伸缩性，大大减轻了服务端的压力。</p>
<p>可以看出，<strong>JWT 更符合设计 RESTful API 时的「Stateless（无状态）」原则</strong> 。</p>
<p>并且， 使用 JWT 认证可以有效避免 CSRF 攻击，因为 JWT 一般是存在在 localStorage 中，使用 JWT 进行身份验证的过程中是不会涉及到 Cookie 的。</p>
<p>我在 <RouterLink to="/code/java/system-design/security/advantages&amp;disadvantages-of-jwt.html">JWT 优缺点分析</RouterLink>这篇文章中有详细介绍到使用 JWT 做身份认证的优势和劣势。</p>
<p>下面是 <a href="https://tools.ietf.org/html/rfc7519" target="_blank" rel="noopener noreferrer">RFC 7519<ExternalLinkIcon/></a> 对 JWT 做的较为正式的定义。</p>
<blockquote>
<p>JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted. ——<a href="https://tools.ietf.org/html/rfc7519" target="_blank" rel="noopener noreferrer">JSON Web Token (JWT)<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="jwt-由哪些部分组成" tabindex="-1"><a class="header-anchor" href="#jwt-由哪些部分组成" aria-hidden="true">#</a> JWT 由哪些部分组成？</h2>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/system-design/jwt/jwt-composition.png" alt="此图片来源于：https://supertokens.com/blog/oauth-vs-jwt" loading="lazy"></p>
<p>JWT 本质上就是一组字串，通过（<code v-pre>.</code>）切分成三个为 Base64 编码的部分：</p>
<ul>
<li><strong>Header</strong> : 描述 JWT 的元数据，定义了生成签名的算法以及 <code v-pre>Token</code> 的类型。</li>
<li><strong>Payload</strong> : 用来存放实际需要传递的数据</li>
<li><strong>Signature（签名）</strong> ：服务器通过 Payload、Header 和一个密钥(Secret)使用 Header 里面指定的签名算法（默认是 HMAC SHA256）生成。</li>
</ul>
<p>JWT 通常是这样的：<code v-pre>xxxxx.yyyyy.zzzzz</code>。</p>
<p>示例：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以在 <a href="https://jwt.io/" target="_blank" rel="noopener noreferrer">jwt.io<ExternalLinkIcon/></a> 这个网站上对其 JWT 进行解码，解码之后得到的就是 Header、Payload、Signature 这三部分。</p>
<p>Header 和 Payload 都是 JSON 格式的数据，Signature 由 Payload、Header 和 Secret(密钥)通过特定的计算公式和加密算法得到。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/system-design/jwt/jwt.io.png" alt="" loading="lazy"></p>
<h3 id="header" tabindex="-1"><a class="header-anchor" href="#header" aria-hidden="true">#</a> Header</h3>
<p>Header 通常由两部分组成：</p>
<ul>
<li><code v-pre>typ</code>（Type）：令牌类型，也就是 JWT。</li>
<li><code v-pre>alg</code>（Algorithm） ：签名算法，比如 HS256。</li>
</ul>
<p>示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"alg"</span><span class="token operator">:</span> <span class="token string">"HS256"</span><span class="token punctuation">,</span>
  <span class="token property">"typ"</span><span class="token operator">:</span> <span class="token string">"JWT"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JSON 形式的 Header 被转换成 Base64 编码，成为 JWT 的第一部分。</p>
<h3 id="payload" tabindex="-1"><a class="header-anchor" href="#payload" aria-hidden="true">#</a> Payload</h3>
<p>Payload 也是 JSON 格式数据，其中包含了 Claims(声明，包含 JWT 的相关信息)。</p>
<p>Claims 分为三种类型：</p>
<ul>
<li><strong>Registered Claims（注册声明）</strong> ：预定义的一些声明，建议使用，但不是强制性的。</li>
<li><strong>Public Claims（公有声明）</strong> ：JWT 签发方可以自定义的声明，但是为了避免冲突，应该在 <a href="https://www.iana.org/assignments/jwt/jwt.xhtml" target="_blank" rel="noopener noreferrer">IANA JSON Web Token Registry<ExternalLinkIcon/></a> 中定义它们。</li>
<li><strong>Private Claims（私有声明）</strong> ：JWT 签发方因为项目需要而自定义的声明，更符合实际项目场景使用。</li>
</ul>
<p>下面是一些常见的注册声明：</p>
<ul>
<li><code v-pre>iss</code>（issuer）：JWT 签发方。</li>
<li><code v-pre>iat</code>（issued at time）：JWT 签发时间。</li>
<li><code v-pre>sub</code>（subject）：JWT 主题。</li>
<li><code v-pre>aud</code>（audience）：JWT 接收方。</li>
<li><code v-pre>exp</code>（expiration time）：JWT 的过期时间。</li>
<li><code v-pre>nbf</code>（not before time）：JWT 生效时间，早于该定义的时间的 JWT 不能被接受处理。</li>
<li><code v-pre>jti</code>（JWT ID）：JWT 唯一标识。</li>
</ul>
<p>示例：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"uid"</span><span class="token operator">:</span> <span class="token string">"ff1212f5-d8d1-4496-bf41-d2dda73de19a"</span><span class="token punctuation">,</span>
  <span class="token property">"sub"</span><span class="token operator">:</span> <span class="token string">"1234567890"</span><span class="token punctuation">,</span>
  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"John Doe"</span><span class="token punctuation">,</span>
  <span class="token property">"exp"</span><span class="token operator">:</span> <span class="token number">15323232</span><span class="token punctuation">,</span>
  <span class="token property">"iat"</span><span class="token operator">:</span> <span class="token number">1516239022</span><span class="token punctuation">,</span>
  <span class="token property">"scope"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"admin"</span><span class="token punctuation">,</span> <span class="token string">"user"</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Payload 部分默认是不加密的，<strong>一定不要将隐私信息存放在 Payload 当中！！！</strong></p>
<p>JSON 形式的 Payload 被转换成 Base64 编码，成为 JWT 的第二部分。</p>
<h3 id="signature" tabindex="-1"><a class="header-anchor" href="#signature" aria-hidden="true">#</a> Signature</h3>
<p>Signature 部分是对前两部分的签名，作用是防止 JWT（主要是 payload） 被篡改。</p>
<p>这个签名的生成需要用到：</p>
<ul>
<li>Header + Payload。</li>
<li>存放在服务端的密钥(一定不要泄露出去)。</li>
<li>签名算法。</li>
</ul>
<p>签名的计算公式如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>算出签名以后，把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用&quot;点&quot;（<code v-pre>.</code>）分隔，这个字符串就是 JWT 。</p>
<h2 id="如何基于-jwt-进行身份验证" tabindex="-1"><a class="header-anchor" href="#如何基于-jwt-进行身份验证" aria-hidden="true">#</a> 如何基于 JWT 进行身份验证？</h2>
<p>在基于 JWT 进行身份验证的的应用程序中，服务器通过 Payload、Header 和 Secret(密钥)创建 JWT 并将 JWT 发送给客户端。客户端接收到 JWT 之后，会将其保存在 Cookie 或者 localStorage 里面，以后客户端发出的所有请求都会携带这个令牌。</p>
<p><img src="@source/code/java/system-design/security/images/basis-of-authority-certification/jwt.png" alt="jwt" loading="lazy"></p>
<p>简化后的步骤如下：</p>
<ol>
<li>用户向服务器发送用户名、密码以及验证码用于登陆系统。</li>
<li>如果用户用户名、密码以及验证码校验正确的话，服务端会返回已经签名的 Token，也就是 JWT。</li>
<li>用户以后每次向后端发请求都在 Header 中带上这个 JWT 。</li>
<li>服务端检查 JWT 并从中获取用户相关信息。</li>
</ol>
<p>两点建议：</p>
<ol>
<li>建议将 JWT 存放在 localStorage 中，放在 Cookie 中会有 CSRF 风险。</li>
<li>请求服务端并携带 JWT 的常见做法是将其放在 HTTP Header 的 <code v-pre>Authorization</code> 字段中（<code v-pre>Authorization: Bearer Token</code>）。</li>
</ol>
<p><strong><a href="https://github.com/Snailclimb/spring-security-jwt-guide" target="_blank" rel="noopener noreferrer">spring-security-jwt-guide<ExternalLinkIcon/></a></strong> 就是一个基于 JWT 来做身份认证的简单案例，感兴趣的可以看看。</p>
<h2 id="如何防止-jwt-被篡改" tabindex="-1"><a class="header-anchor" href="#如何防止-jwt-被篡改" aria-hidden="true">#</a> 如何防止 JWT 被篡改？</h2>
<p>有了签名之后，即使 JWT 被泄露或者解惑，黑客也没办法同时篡改 Signature 、Header 、Payload。</p>
<p>这是为什么呢？因为服务端拿到 JWT 之后，会解析出其中包含的 Header、Payload 以及 Signature 。服务端会根据 Header、Payload、密钥再次生成一个 Signature。拿新生成的 Signature 和 JWT 中的 Signature 作对比，如果一样就说明 Header 和 Payload 没有被修改。</p>
<p>不过，如果服务端的秘钥也被泄露的话，黑客就可以同时篡改 Signature 、Header 、Payload 了。黑客直接修改了 Header 和 Payload 之后，再重新生成一个 Signature 就可以了。</p>
<p><strong>密钥一定保管好，一定不要泄露出去。JWT 安全的核心在于签名，签名安全的核心在密钥。</strong></p>
<h2 id="如何加强-jwt-的安全性" tabindex="-1"><a class="header-anchor" href="#如何加强-jwt-的安全性" aria-hidden="true">#</a> 如何加强 JWT 的安全性？</h2>
<ol>
<li>使用安全系数高的加密算法。</li>
<li>使用成熟的开源库，没必要造轮子。</li>
<li>JWT 存放在 localStorage 中而不是 Cookie 中，避免 CSRF 风险。</li>
<li>一定不要将隐私信息存放在 Payload 当中。</li>
<li>密钥一定保管好，一定不要泄露出去。JWT 安全的核心在于签名，签名安全的核心在密钥。</li>
<li>Payload 要加入 <code v-pre>exp</code> （JWT 的过期时间），永久有效的 JWT 不合理。并且，JWT 的过期时间不易过长。</li>
<li>......</li>
</ol>
</div></template>
