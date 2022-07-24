<template><div><h2 id="认证-authentication-和授权-authorization-的区别是什么" tabindex="-1"><a class="header-anchor" href="#认证-authentication-和授权-authorization-的区别是什么" aria-hidden="true">#</a> 认证 (Authentication) 和授权 (Authorization)的区别是什么？</h2>
<p>这是一个绝大多数人都会混淆的问题。首先先从读音上来认识这两个名词，很多人都会把它俩的读音搞混，所以我建议你先先去查一查这两个单词到底该怎么读，他们的具体含义是什么。</p>
<p>说简单点就是：</p>
<ul>
<li><strong>认证 (Authentication)：</strong> 你是谁。</li>
<li><strong>授权 (Authorization)：</strong> 你有权限干什么。</li>
</ul>
<p>稍微正式点（啰嗦点）的说法就是 ：</p>
<ul>
<li><strong>Authentication（认证）</strong> 是验证您的身份的凭据（例如用户名/用户 ID 和密码），通过这个凭据，系统得以知道你就是你，也就是说系统存在你这个用户。所以，Authentication 被称为身份/用户验证。</li>
<li><strong>Authorization（授权）</strong> 发生在 <strong>Authentication（认证）</strong> 之后。授权嘛，光看意思大家应该就明白，它主要掌管我们访问系统的权限。比如有些特定资源只能具有特定权限的人才能访问比如 admin，有些对系统资源操作比如删除、添加、更新只能特定人才具有。</li>
</ul>
<p>认证 ：</p>
<p><img src="https://img-blog.csdnimg.cn/20210604160908352.png" alt="" loading="lazy"></p>
<p>授权：</p>
<p><img src="https://img-blog.csdnimg.cn/20210604161032412.png" alt="" loading="lazy"></p>
<p>这两个一般在我们的系统中被结合在一起使用，目的就是为了保护我们系统的安全性。</p>
<h2 id="rbac-模型了解吗" tabindex="-1"><a class="header-anchor" href="#rbac-模型了解吗" aria-hidden="true">#</a> RBAC 模型了解吗？</h2>
<p>系统权限控制最常采用的访问控制模型就是 <strong>RBAC 模型</strong> 。</p>
<p><strong>什么是 RBAC 呢？</strong></p>
<p>RBAC 即基于角色的权限访问控制（Role-Based Access Control）。这是一种通过角色关联权限，角色同时又关联用户的授权的方式。</p>
<p>简单地说：一个用户可以拥有若干角色，每一个角色又可以被分配若干权限，这样就构造成“用户-角色-权限” 的授权模型。在这种模型中，用户与角色、角色与权限之间构成了多对多的关系，如下图</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/booksRBAC.png" alt="RBAC" loading="lazy"></p>
<p><strong>在 RBAC 中，权限与角色相关联，用户通过成为适当角色的成员而得到这些角色的权限。这就极大地简化了权限的管理。</strong></p>
<p>本系统的权限设计相关的表如下（一共 5 张表，2 张用户建立表之间的联系）：</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-11/数据库设计-权限.png" alt="" loading="lazy"></p>
<p>通过这个权限模型，我们可以创建不同的角色并为不同的角色分配不同的权限范围（菜单）。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/books权限管理模块.png" alt="" loading="lazy"></p>
<p>通常来说，如果系统对于权限控制要求比较严格的话，一般都会选择使用 RBAC 模型来做权限控制。</p>
<h2 id="什么是-cookie-cookie-的作用是什么" tabindex="-1"><a class="header-anchor" href="#什么是-cookie-cookie-的作用是什么" aria-hidden="true">#</a> 什么是 Cookie ? Cookie 的作用是什么?</h2>
<p><img src="https://img-blog.csdnimg.cn/20210615162505880.png" alt="" loading="lazy"></p>
<p><code v-pre>Cookie</code> 和 <code v-pre>Session</code> 都是用来跟踪浏览器用户身份的会话方式，但是两者的应用场景不太一样。</p>
<p>维基百科是这样定义 <code v-pre>Cookie</code> 的：</p>
<blockquote>
<p><code v-pre>Cookies</code> 是某些网站为了辨别用户身份而储存在用户本地终端上的数据（通常经过加密）。</p>
</blockquote>
<p>简单来说： <strong><code v-pre>Cookie</code> 存放在客户端，一般用来保存用户信息</strong>。</p>
<p>下面是 <code v-pre>Cookie</code> 的一些应用案例：</p>
<ol>
<li>我们在 <code v-pre>Cookie</code> 中保存已经登录过的用户信息，下次访问网站的时候页面可以自动帮你登录的一些基本信息给填了。除此之外，<code v-pre>Cookie</code> 还能保存用户首选项，主题和其他设置信息。</li>
<li>使用 <code v-pre>Cookie</code> 保存 <code v-pre>SessionId</code> 或者 <code v-pre>Token</code> ，向后端发送请求的时候带上 <code v-pre>Cookie</code>，这样后端就能取到 <code v-pre>Session</code> 或者 <code v-pre>Token</code> 了。这样就能记录用户当前的状态了，因为 HTTP 协议是无状态的。</li>
<li><code v-pre>Cookie</code> 还可以用来记录和分析用户行为。举个简单的例子你在网上购物的时候，因为 HTTP 协议是没有状态的，如果服务器想要获取你在某个页面的停留状态或者看了哪些商品，一种常用的实现方式就是将这些信息存放在 <code v-pre>Cookie</code></li>
<li>......</li>
</ol>
<h2 id="如何在项目中使用-cookie-呢" tabindex="-1"><a class="header-anchor" href="#如何在项目中使用-cookie-呢" aria-hidden="true">#</a> 如何在项目中使用 Cookie 呢？</h2>
<p>我这里以 Spring Boot 项目为例。</p>
<p><strong>1)设置 <code v-pre>Cookie</code> 返回给客户端</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/change-username"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">setCookie</span><span class="token punctuation">(</span><span class="token class-name">HttpServletResponse</span> response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 创建一个 cookie</span>
    <span class="token class-name">Cookie</span> cookie <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Cookie</span><span class="token punctuation">(</span><span class="token string">"username"</span><span class="token punctuation">,</span> <span class="token string">"Jovan"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//设置 cookie过期时间</span>
    cookie<span class="token punctuation">.</span><span class="token function">setMaxAge</span><span class="token punctuation">(</span><span class="token number">7</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// expires in 7 days</span>
    <span class="token comment">//添加到 response 中</span>
    response<span class="token punctuation">.</span><span class="token function">addCookie</span><span class="token punctuation">(</span>cookie<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token string">"Username is changed!"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2) 使用 Spring 框架提供的 <code v-pre>@CookieValue</code> 注解获取特定的 cookie 的值</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">readCookie</span><span class="token punctuation">(</span><span class="token annotation punctuation">@CookieValue</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"username"</span><span class="token punctuation">,</span> defaultValue <span class="token operator">=</span> <span class="token string">"Atta"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> username<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"Hey! My username is "</span> <span class="token operator">+</span> username<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3) 读取所有的 <code v-pre>Cookie</code> 值</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/all-cookies"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">readAllCookies</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token class-name">Cookie</span><span class="token punctuation">[</span><span class="token punctuation">]</span> cookies <span class="token operator">=</span> request<span class="token punctuation">.</span><span class="token function">getCookies</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>cookies <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span>cookies<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>c <span class="token operator">-></span> c<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"="</span> <span class="token operator">+</span> c<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token class-name">Collectors</span><span class="token punctuation">.</span><span class="token function">joining</span><span class="token punctuation">(</span><span class="token string">", "</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token string">"No cookies"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多关于如何在 Spring Boot 中使用 <code v-pre>Cookie</code> 的内容可以查看这篇文章：<a href="https://attacomsian.com/blog/cookies-spring-boot" target="_blank" rel="noopener noreferrer">How to use cookies in Spring Boot<ExternalLinkIcon/></a> 。</p>
<h2 id="cookie-和-session-有什么区别" tabindex="-1"><a class="header-anchor" href="#cookie-和-session-有什么区别" aria-hidden="true">#</a> Cookie 和 Session 有什么区别？</h2>
<p><strong><code v-pre>Session</code> 的主要作用就是通过服务端记录用户的状态。</strong> 典型的场景是购物车，当你要添加商品到购物车的时候，系统不知道是哪个用户操作的，因为 HTTP 协议是无状态的。服务端给特定的用户创建特定的 <code v-pre>Session</code> 之后就可以标识这个用户并且跟踪这个用户了。</p>
<p><code v-pre>Cookie</code> 数据保存在客户端(浏览器端)，<code v-pre>Session</code> 数据保存在服务器端。相对来说 <code v-pre>Session</code> 安全性更高。如果使用 <code v-pre>Cookie</code> 的一些敏感信息不要写入 <code v-pre>Cookie</code> 中，最好能将 <code v-pre>Cookie</code> 信息加密然后使用到的时候再去服务器端解密。</p>
<p><strong>那么，如何使用 <code v-pre>Session</code> 进行身份验证？</strong></p>
<h2 id="如何使用-session-cookie-方案进行身份验证" tabindex="-1"><a class="header-anchor" href="#如何使用-session-cookie-方案进行身份验证" aria-hidden="true">#</a> 如何使用 Session-Cookie 方案进行身份验证？</h2>
<p>很多时候我们都是通过 <code v-pre>SessionID</code> 来实现特定的用户，<code v-pre>SessionID</code> 一般会选择存放在 Redis 中。举个例子：</p>
<ol>
<li>用户成功登陆系统，然后返回给客户端具有 <code v-pre>SessionID</code> 的 <code v-pre>Cookie</code> 。</li>
<li>当用户向后端发起请求的时候会把 <code v-pre>SessionID</code> 带上，这样后端就知道你的身份状态了。</li>
</ol>
<p>关于这种认证方式更详细的过程如下：</p>
<p><img src="@source/code/java/system-design/security/images/basis-of-authority-certification/session-cookie.png" alt="" loading="lazy"></p>
<ol>
<li>用户向服务器发送用户名、密码、验证码用于登陆系统。</li>
<li>服务器验证通过后，服务器为用户创建一个 <code v-pre>Session</code>，并将 <code v-pre>Session</code> 信息存储起来。</li>
<li>服务器向用户返回一个 <code v-pre>SessionID</code>，写入用户的 <code v-pre>Cookie</code>。</li>
<li>当用户保持登录状态时，<code v-pre>Cookie</code> 将与每个后续请求一起被发送出去。</li>
<li>服务器可以将存储在 <code v-pre>Cookie</code> 上的 <code v-pre>SessionID</code> 与存储在内存中或者数据库中的 <code v-pre>Session</code> 信息进行比较，以验证用户的身份，返回给用户客户端响应信息的时候会附带用户当前的状态。</li>
</ol>
<p>使用 <code v-pre>Session</code> 的时候需要注意下面几个点：</p>
<ul>
<li>依赖 <code v-pre>Session</code> 的关键业务一定要确保客户端开启了 <code v-pre>Cookie</code>。</li>
<li>注意 <code v-pre>Session</code> 的过期时间。</li>
</ul>
<p>另外，Spring Session 提供了一种跨多个应用程序或实例管理用户会话信息的机制。如果想详细了解可以查看下面几篇很不错的文章：</p>
<ul>
<li><a href="https://codeboje.de/spring-Session-tutorial/" target="_blank" rel="noopener noreferrer">Getting Started with Spring Session<ExternalLinkIcon/></a></li>
<li><a href="https://www.baeldung.com/spring-Session" target="_blank" rel="noopener noreferrer">Guide to Spring Session<ExternalLinkIcon/></a></li>
<li><a href="https://medium.com/@gvnix/sticky-Sessions-with-spring-Session-redis-bdc6f7438cc3" target="_blank" rel="noopener noreferrer">Sticky Sessions with Spring Session &amp; Redis<ExternalLinkIcon/></a></li>
</ul>
<h2 id="多服务器节点下-session-cookie-方案如何做" tabindex="-1"><a class="header-anchor" href="#多服务器节点下-session-cookie-方案如何做" aria-hidden="true">#</a> 多服务器节点下 Session-Cookie 方案如何做？</h2>
<p>Session-Cookie 方案在单体环境是一个非常好的身份认证方案。但是，当服务器水平拓展成多节点时，Session-Cookie 方案就要面临挑战了。</p>
<p>举个例子：假如我们部署了两份相同的服务 A，B，用户第一次登陆的时候 ，Nginx 通过负载均衡机制将用户请求转发到 A 服务器，此时用户的 Session 信息保存在 A 服务器。结果，用户第二次访问的时候 Nginx 将请求路由到 B 服务器，由于 B 服务器没有保存 用户的 Session 信息，导致用户需要重新进行登陆。</p>
<p><strong>我们应该如何避免上面这种情况的出现呢？</strong></p>
<p>有几个方案可供大家参考：</p>
<ol>
<li>某个用户的所有请求都通过特性的哈希策略分配给同一个服务器处理。这样的话，每个服务器都保存了一部分用户的 Session 信息。服务器宕机，其保存的所有 Session 信息就完全丢失了。</li>
<li>每一个服务器保存的 Session 信息都是互相同步的，也就是说每一个服务器都保存了全量的 Session 信息。每当一个服务器的 Session 信息发生变化，我们就将其同步到其他服务器。这种方案成本太大，并且，节点越多时，同步成本也越高。</li>
<li>单独使用一个所有服务器都能访问到的数据节点（比如缓存）来存放 Session 信息。为了保证高可用，数据节点尽量要避免是单点。</li>
</ol>
<h2 id="如果没有-cookie-的话-session-还能用吗" tabindex="-1"><a class="header-anchor" href="#如果没有-cookie-的话-session-还能用吗" aria-hidden="true">#</a> 如果没有 Cookie 的话 Session 还能用吗？</h2>
<p>这是一道经典的面试题！</p>
<p>一般是通过 <code v-pre>Cookie</code> 来保存 <code v-pre>SessionID</code> ，假如你使用了 <code v-pre>Cookie</code> 保存 <code v-pre>SessionID</code> 的方案的话， 如果客户端禁用了 <code v-pre>Cookie</code>，那么 <code v-pre>Session</code> 就无法正常工作。</p>
<p>但是，并不是没有 <code v-pre>Cookie</code> 之后就不能用 <code v-pre>Session</code> 了，比如你可以将 <code v-pre>SessionID</code> 放在请求的 <code v-pre>url</code> 里面<code v-pre>https://javaguide.cn/?Session_id=xxx</code> 。这种方案的话可行，但是安全性和用户体验感降低。当然，为了你也可以对 <code v-pre>SessionID</code> 进行一次加密之后再传入后端。</p>
<h2 id="为什么-cookie-无法防止-csrf-攻击-而-token-可以" tabindex="-1"><a class="header-anchor" href="#为什么-cookie-无法防止-csrf-攻击-而-token-可以" aria-hidden="true">#</a> 为什么 Cookie 无法防止 CSRF 攻击，而 Token 可以？</h2>
<p><strong>CSRF(Cross Site Request Forgery)</strong> 一般被翻译为 <strong>跨站请求伪造</strong> 。那么什么是 <strong>跨站请求伪造</strong> 呢？说简单用你的身份去发送一些对你不友好的请求。举个简单的例子：</p>
<p>小壮登录了某网上银行，他来到了网上银行的帖子区，看到一个帖子下面有一个链接写着“科学理财，年盈利率过万”，小壮好奇的点开了这个链接，结果发现自己的账户少了 10000 元。这是这么回事呢？原来黑客在链接中藏了一个请求，这个请求直接利用小壮的身份给银行发送了一个转账请求,也就是通过你的 Cookie 向银行发出请求。</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code>&lt;a src=http://www.mybank.com/Transfer?bankId=11&amp;money=10000>科学理财，年盈利率过万&lt;/>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面也提到过，进行 <code v-pre>Session</code> 认证的时候，我们一般使用 <code v-pre>Cookie</code> 来存储 <code v-pre>SessionId</code>,当我们登陆后后端生成一个 <code v-pre>SessionId</code> 放在 Cookie 中返回给客户端，服务端通过 Redis 或者其他存储工具记录保存着这个 <code v-pre>SessionId</code>，客户端登录以后每次请求都会带上这个 <code v-pre>SessionId</code>，服务端通过这个 <code v-pre>SessionId</code> 来标示你这个人。如果别人通过 <code v-pre>Cookie</code> 拿到了 <code v-pre>SessionId</code> 后就可以代替你的身份访问系统了。</p>
<p><code v-pre>Session</code> 认证中 <code v-pre>Cookie</code> 中的 <code v-pre>SessionId</code> 是由浏览器发送到服务端的，借助这个特性，攻击者就可以通过让用户误点攻击链接，达到攻击效果。</p>
<p>但是，我们使用 <code v-pre>Token</code> 的话就不会存在这个问题，在我们登录成功获得 <code v-pre>Token</code> 之后，一般会选择存放在 <code v-pre>localStorage</code> （浏览器本地存储）中。然后我们在前端通过某些方式会给每个发到后端的请求加上这个 <code v-pre>Token</code>,这样就不会出现 CSRF 漏洞的问题。因为，即使有个你点击了非法链接发送了请求到服务端，这个非法请求是不会携带 <code v-pre>Token</code> 的，所以这个请求将是非法的。</p>
<p><img src="https://img-blog.csdnimg.cn/20210615161108272.png" alt="" loading="lazy"></p>
<p>需要注意的是：不论是 <code v-pre>Cookie</code> 还是 <code v-pre>Token</code> 都无法避免 <strong>跨站脚本攻击（Cross Site Scripting）XSS</strong> 。</p>
<blockquote>
<p>跨站脚本攻击（Cross Site Scripting）缩写为 CSS 但这会与层叠样式表（Cascading Style Sheets，CSS）的缩写混淆。因此，有人将跨站脚本攻击缩写为 XSS。</p>
</blockquote>
<p>XSS 中攻击者会用各种方式将恶意代码注入到其他用户的页面中。就可以通过脚本盗用信息比如 <code v-pre>Cookie</code> 。</p>
<p>推荐阅读：<a href="https://tech.meituan.com/2018/10/11/fe-security-csrf.html" target="_blank" rel="noopener noreferrer">如何防止 CSRF 攻击？—美团技术团队<ExternalLinkIcon/></a></p>
<h2 id="什么是-token-什么是-jwt" tabindex="-1"><a class="header-anchor" href="#什么是-token-什么是-jwt" aria-hidden="true">#</a> 什么是 Token?什么是 JWT?</h2>
<p>我们在前面的问题中探讨了使用 <code v-pre>Session</code> 来鉴别用户的身份，并且给出了几个 Spring Session 的案例分享。 我们知道 <code v-pre>Session</code> 信息需要保存一份在服务器端。这种方式会带来一些麻烦，比如需要我们保证保存 <code v-pre>Session</code> 信息服务器的可用性、不适合移动端（依赖 <code v-pre>Cookie</code>）等等。</p>
<p><strong>有没有一种不需要自己存放 <code v-pre>Session</code> 信息就能实现身份验证的方式呢？</strong></p>
<p>有的！我们基于 <code v-pre>Token</code>（令牌） 来做身份验证即可！我们这里说的是 Acesss Token，指的是访问资源接口（API）时所需要的凭证，比如说你访问 Github 的一些 API 的时候，需要带上一个 Token 来表明你有权访问。</p>
<p>JWT （JSON Web Token） 是目前最流行的跨域认证解决方案，是一种基于 Token 的认证授权机制。 从 JWT 的全称也可以看出，JWT 本身也是 Token，一种规范化之后的 JSON 结构的 Token。</p>
<p>JWT 由 Header、Payload、Signature（签名） 这三部分组成，本质上就是一段签名的 JSON 格式的数据。由于它是带有签名的，因此接收者可以验证它的真实性。</p>
<p>通过 JWT ，服务器端就不需要保存 <code v-pre>Session</code> 了，只用在客户端保存服务端返回的 <code v-pre>Token</code> 就可以了，扩展性得到提升。</p>
<p>可以看出，<strong>JWT 更符合设计 RESTful API 时的「Stateless（无状态）」原则</strong> 。</p>
<p>下面是 <a href="https://tools.ietf.org/html/rfc7519" target="_blank" rel="noopener noreferrer">RFC 7519<ExternalLinkIcon/></a> 对 JWT 做的较为正式的定义。</p>
<blockquote>
<p>JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure, enabling the claims to be digitally signed or integrity protected with a Message Authentication Code (MAC) and/or encrypted. ——<a href="https://tools.ietf.org/html/rfc7519" target="_blank" rel="noopener noreferrer">JSON Web Token (JWT)<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="什么是-sso" tabindex="-1"><a class="header-anchor" href="#什么是-sso" aria-hidden="true">#</a> 什么是 SSO?</h2>
<p>SSO(Single Sign On)即单点登录说的是用户登陆多个子系统的其中一个就有权访问与其相关的其他系统。举个例子我们在登陆了京东金融之后，我们同时也成功登陆京东的京东超市、京东国际、京东生鲜等子系统。</p>
<p><img src="@source/code/java/system-design/security/images/basis-of-authority-certification/sso.png" alt="sso" loading="lazy"></p>
<h2 id="什么是-oauth-2-0" tabindex="-1"><a class="header-anchor" href="#什么是-oauth-2-0" aria-hidden="true">#</a> 什么是 OAuth 2.0？</h2>
<p>OAuth 是一个行业的标准授权协议，主要用来授权第三方应用获取有限的权限。而 OAuth 2.0 是对 OAuth 1.0 的完全重新设计，OAuth 2.0 更快，更容易实现，OAuth 1.0 已经被废弃。详情请见：<a href="https://tools.ietf.org/html/rfc6749" target="_blank" rel="noopener noreferrer">rfc6749<ExternalLinkIcon/></a>。</p>
<p>实际上它就是一种授权机制，它的最终目的是为第三方应用颁发一个有时效性的令牌 Token，使得第三方应用能够通过该令牌获取相关的资源。</p>
<p>OAuth 2.0 比较常用的场景就是第三方登录，当你的网站接入了第三方登录的时候一般就是使用的 OAuth 2.0 协议。</p>
<p>另外，现在 OAuth 2.0 也常见于支付场景（微信支付、支付宝支付）和开发平台（微信开放平台、阿里开放平台等等）。</p>
<p>微信支付账户相关参数：</p>
<p><img src="@source/code/java/system-design/security/images/basis-of-authority-certification/微信支付-fnglfdlgdfj.jpeg" alt="" loading="lazy"></p>
<p>下图是 <a href="https://api.slack.com/legacy/oauth" target="_blank" rel="noopener noreferrer">Slack OAuth 2.0 第三方登录<ExternalLinkIcon/></a>的示意图：</p>
<p><img src="https://img-blog.csdnimg.cn/20210615151716340.png" alt="" loading="lazy"></p>
<p><strong>推荐阅读：</strong></p>
<ul>
<li><a href="http://www.ruanyifeng.com/blog/2019/04/oauth_design.html" target="_blank" rel="noopener noreferrer">OAuth 2.0 的一个简单解释<ExternalLinkIcon/></a></li>
<li><a href="https://deepzz.com/post/what-is-oauth2-protocol.html" target="_blank" rel="noopener noreferrer">10 分钟理解什么是 OAuth 2.0 协议<ExternalLinkIcon/></a></li>
<li><a href="http://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html" target="_blank" rel="noopener noreferrer">OAuth 2.0 的四种方式<ExternalLinkIcon/></a></li>
<li><a href="http://www.ruanyifeng.com/blog/2019/04/github-oauth.html" target="_blank" rel="noopener noreferrer">GitHub OAuth 第三方登录示例教程<ExternalLinkIcon/></a></li>
</ul>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>不要用 JWT 替代 session 管理（上）：全面了解 Token,JWT,OAuth,SAML,SSO：<a href="https://zhuanlan.zhihu.com/p/38942172" target="_blank" rel="noopener noreferrer">https://zhuanlan.zhihu.com/p/38942172<ExternalLinkIcon/></a></li>
<li>Introduction to JSON Web Tokens：<a href="https://jwt.io/introduction" target="_blank" rel="noopener noreferrer">https://jwt.io/introduction<ExternalLinkIcon/></a></li>
<li>JSON Web Token Claims：<a href="https://auth0.com/docs/secure/tokens/json-web-tokens/json-web-token-claims" target="_blank" rel="noopener noreferrer">https://auth0.com/docs/secure/tokens/json-web-tokens/json-web-token-claims<ExternalLinkIcon/></a></li>
</ul>
</div></template>
