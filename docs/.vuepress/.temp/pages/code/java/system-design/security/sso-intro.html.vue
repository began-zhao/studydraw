<template><div><blockquote>
<p>本文授权转载自 ： <a href="https://ken.io/note/sso-design-implement" target="_blank" rel="noopener noreferrer">https://ken.io/note/sso-design-implement<ExternalLinkIcon/></a> 作者：<a href="http://ken.io" target="_blank" rel="noopener noreferrer">ken.io<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2>
<h3 id="_1、sso说明" tabindex="-1"><a class="header-anchor" href="#_1、sso说明" aria-hidden="true">#</a> 1、SSO说明</h3>
<p>SSO英文全称Single Sign On，单点登录。SSO是在多个应用系统中，用户只需要登录一次就可以访问所有相互信任的应用系统。<a href="https://baike.baidu.com/item/SSO/3451380" target="_blank" rel="noopener noreferrer">https://baike.baidu.com/item/SSO/3451380<ExternalLinkIcon/></a></p>
<p>例如访问在网易账号中心（<a href="https://reg.163.com/" target="_blank" rel="noopener noreferrer">https://reg.163.com/<ExternalLinkIcon/></a> ）登录之后
访问以下站点都是登录状态</p>
<ul>
<li>网易直播 <a href="https://v.163.com/" target="_blank" rel="noopener noreferrer">https://v.163.com<ExternalLinkIcon/></a></li>
<li>网易博客 <a href="https://blog.163.com/" target="_blank" rel="noopener noreferrer">https://blog.163.com<ExternalLinkIcon/></a></li>
<li>网易花田 <a href="https://love.163.com/" target="_blank" rel="noopener noreferrer">https://love.163.com<ExternalLinkIcon/></a></li>
<li>网易考拉 <a href="https://www.kaola.com/" target="_blank" rel="noopener noreferrer">https://www.kaola.com<ExternalLinkIcon/></a></li>
<li>网易Lofter <a href="http://www.lofter.com/" target="_blank" rel="noopener noreferrer">http://www.lofter.com<ExternalLinkIcon/></a></li>
</ul>
<h3 id="_2、单点登录系统的好处" tabindex="-1"><a class="header-anchor" href="#_2、单点登录系统的好处" aria-hidden="true">#</a> 2、单点登录系统的好处</h3>
<ol>
<li><strong>用户角度</strong> :用户能够做到一次登录多次使用，无需记录多套用户名和密码，省心。</li>
<li><strong>系统管理员角度</strong> : 管理员只需维护好一个统一的账号中心就可以了，方便。</li>
<li><strong>新系统开发角度:</strong> 新系统开发时只需直接对接统一的账号中心即可，简化开发流程，省时。</li>
</ol>
<h3 id="_3、设计目标" tabindex="-1"><a class="header-anchor" href="#_3、设计目标" aria-hidden="true">#</a> 3、设计目标</h3>
<p>本篇文章也主要是为了探讨如何设计&amp;实现一个SSO系统</p>
<p>以下为需要实现的核心功能：</p>
<ul>
<li>单点登录</li>
<li>单点登出</li>
<li>支持跨域单点登录</li>
<li>支持跨域单点登出</li>
</ul>
<h2 id="二、sso设计与实现" tabindex="-1"><a class="header-anchor" href="#二、sso设计与实现" aria-hidden="true">#</a> 二、SSO设计与实现</h2>
<h3 id="_1、核心应用与依赖" tabindex="-1"><a class="header-anchor" href="#_1、核心应用与依赖" aria-hidden="true">#</a> 1、核心应用与依赖</h3>
<p><img src="https://img.ken.io/blog/sso/sso-system.png-kblb.png" alt="单点登录（SSO）设计" loading="lazy"></p>
<table>
<thead>
<tr>
<th>应用/模块/对象</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>前台站点</td>
<td>需要登录的站点</td>
</tr>
<tr>
<td>SSO站点-登录</td>
<td>提供登录的页面</td>
</tr>
<tr>
<td>SSO站点-登出</td>
<td>提供注销登录的入口</td>
</tr>
<tr>
<td>SSO服务-登录</td>
<td>提供登录服务</td>
</tr>
<tr>
<td>SSO服务-登录状态</td>
<td>提供登录状态校验/登录信息查询的服务</td>
</tr>
<tr>
<td>SSO服务-登出</td>
<td>提供用户注销登录的服务</td>
</tr>
<tr>
<td>数据库</td>
<td>存储用户账户信息</td>
</tr>
<tr>
<td>缓存</td>
<td>存储用户的登录信息，通常使用Redis</td>
</tr>
</tbody>
</table>
<h3 id="_2、用户登录状态的存储与校验" tabindex="-1"><a class="header-anchor" href="#_2、用户登录状态的存储与校验" aria-hidden="true">#</a> 2、用户登录状态的存储与校验</h3>
<p>常见的Web框架对于<a href="https://ken.io/note/session-principle-skill" target="_blank" rel="noopener noreferrer">Session<ExternalLinkIcon/></a>的实现都是生成一个SessionId存储在浏览器Cookie中。然后将Session内容存储在服务器端内存中，这个 <a href="http://ken.io" target="_blank" rel="noopener noreferrer">ken.io<ExternalLinkIcon/></a> 在之前<a href="https://ken.io/note/session-principle-skill" target="_blank" rel="noopener noreferrer">Session工作原理<ExternalLinkIcon/></a>中也提到过。整体也是借鉴这个思路。
用户登录成功之后，生成AuthToken交给客户端保存。如果是浏览器，就保存在Cookie中。如果是手机App就保存在App本地缓存中。本篇主要探讨基于Web站点的SSO。
用户在浏览需要登录的页面时，客户端将AuthToken提交给SSO服务校验登录状态/获取用户登录信息</p>
<p>对于登录信息的存储，建议采用Redis，使用Redis集群来存储登录信息，既可以保证高可用，又可以线性扩充。同时也可以让SSO服务满足负载均衡/可伸缩的需求。</p>
<table>
<thead>
<tr>
<th>对象</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>AuthToken</td>
<td>直接使用UUID/GUID即可，如果有验证AuthToken合法性需求，可以将UserName+时间戳加密生成，服务端解密之后验证合法性</td>
</tr>
<tr>
<td>登录信息</td>
<td>通常是将UserId，UserName缓存起来</td>
</tr>
</tbody>
</table>
<h3 id="_3、用户登录-登录校验" tabindex="-1"><a class="header-anchor" href="#_3、用户登录-登录校验" aria-hidden="true">#</a> 3、用户登录/登录校验</h3>
<ul>
<li>登录时序图</li>
</ul>
<p><img src="https://img.ken.io/blog/sso/sso-login-sequence.png-kbrb.png" alt="SSO系统设计-登录时序图" loading="lazy"></p>
<p>按照上图，用户登录后AuthToken保存在Cookie中。 <a href="http://domain=test.com" target="_blank" rel="noopener noreferrer">domain=test.com<ExternalLinkIcon/></a>
浏览器会将domain设置成 .test.com，
这样访问所有*.test.com的web站点，都会将AuthToken携带到服务器端。
然后通过SSO服务，完成对用户状态的校验/用户登录信息的获取</p>
<ul>
<li>登录信息获取/登录状态校验</li>
</ul>
<p><img src="https://img.ken.io/blog/sso/sso-logincheck-sequence.png-kbrb.png" alt="SSO系统设计-登录信息获取/登录状态校验" loading="lazy"></p>
<h3 id="_4、用户登出" tabindex="-1"><a class="header-anchor" href="#_4、用户登出" aria-hidden="true">#</a> 4、用户登出</h3>
<p>用户登出时要做的事情很简单：</p>
<ol>
<li>服务端清除缓存（Redis）中的登录状态</li>
<li>客户端清除存储的AuthToken</li>
</ol>
<ul>
<li>登出时序图</li>
</ul>
<p><img src="https://img.ken.io/blog/sso/sso-logout-sequence.png-kbrb.png" alt="SSO系统设计-用户登出" loading="lazy"></p>
<h3 id="_5、跨域登录、登出" tabindex="-1"><a class="header-anchor" href="#_5、跨域登录、登出" aria-hidden="true">#</a> 5、跨域登录、登出</h3>
<p>前面提到过，核心思路是客户端存储AuthToken，服务器端通过Redis存储登录信息。由于客户端是将AuthToken存储在Cookie中的。所以跨域要解决的问题，就是如何解决Cookie的跨域读写问题。</p>
<p>解决跨域的核心思路就是：</p>
<ul>
<li>登录完成之后通过回调的方式，将AuthToken传递给主域名之外的站点，该站点自行将AuthToken保存在当前域下的Cookie中。</li>
<li>登出完成之后通过回调的方式，调用非主域名站点的登出页面，完成设置Cookie中的AuthToken过期的操作。</li>
<li>跨域登录（主域名已登录）</li>
</ul>
<p><img src="https://img.ken.io/blog/sso/sso-crossdomain-login-loggedin-sequence.png-kbrb.png" alt="SSO系统设计-跨域登录（主域名已登录）" loading="lazy"></p>
<ul>
<li>跨域登录（主域名未登录）</li>
</ul>
<p><img src="https://img.ken.io/blog/sso/sso-crossdomain-login-unlogin-sequence.png-kbrb.png" alt="SSO系统设计-跨域登录（主域名未登录）" loading="lazy"></p>
<ul>
<li>跨域登出</li>
</ul>
<p><img src="https://img.ken.io/blog/sso/sso-crossdomain-logout-sequence.png-kbrb.png" alt="SSO系统设计-跨域登出" loading="lazy"></p>
<h2 id="三、备注" tabindex="-1"><a class="header-anchor" href="#三、备注" aria-hidden="true">#</a> 三、备注</h2>
<ul>
<li>关于方案</li>
</ul>
<p>这次设计方案更多是提供实现思路。如果涉及到APP用户登录等情况，在访问SSO服务时，增加对APP的签名验证就好了。当然，如果有无线网关，验证签名不是问题。</p>
<ul>
<li>关于时序图</li>
</ul>
<p>时序图中并没有包含所有场景，ken.io只列举了核心/主要场景，另外对于一些不影响理解思路的消息能省就省了。</p>
</div></template>
