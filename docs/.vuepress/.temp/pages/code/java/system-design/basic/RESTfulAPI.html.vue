<template><div><p><img src="https://img-blog.csdnimg.cn/2021050713553862.png" alt="" loading="lazy"></p>
<p>大家好，我是咖飞！</p>
<p>这篇文章简单聊聊后端程序员必备的 RESTful API 相关的知识。</p>
<p>开始正式介绍 RESTful API 之前，我们需要首先搞清 ：<strong>API 到底是什么？</strong></p>
<h2 id="何为-api" tabindex="-1"><a class="header-anchor" href="#何为-api" aria-hidden="true">#</a> 何为 API？</h2>
<p><img src="https://img-blog.csdnimg.cn/20210507153833945.png" alt="" loading="lazy"></p>
<p><strong>API（Application Programming Interface）</strong> 翻译过来是应用程序编程接口的意思。</p>
<p>我们在进行后端开发的时候，主要的工作就是为前端或者其他后端服务提供 API 比如查询用户数据的 API 。</p>
<p><img src="https://img-blog.csdnimg.cn/20210507130629538.png" alt="" loading="lazy"></p>
<p>但是， API 不仅仅代表后端系统暴露的接口，像框架中提供的方法也属于 API 的范畴。</p>
<p>为了方便大家理解，我再列举几个例子 🌰：</p>
<ol>
<li>你通过某电商网站搜索某某商品，电商网站的前端就调用了后端提供了搜索商品相关的 API。</li>
<li>你使用 JDK 开发 Java 程序，想要读取用户的输入的话，你就需要使用 JDK 提供的 IO 相关的 API。</li>
<li>......</li>
</ol>
<p>你可以把 API 理解为程序与程序之间通信的桥梁，其本质就是一个函数而已。另外，API 的使用也不是没有章法的，它的规则由（比如数据输入和输出的格式）API 提供方制定。</p>
<h2 id="何为-restful-api" tabindex="-1"><a class="header-anchor" href="#何为-restful-api" aria-hidden="true">#</a> 何为 RESTful API？</h2>
<p><strong>RESTful API</strong> 经常也被叫做 <strong>REST API</strong>，它是基于 REST 构建的 API。这个 REST 到底是什么，我们后文在讲，涉及到的概念比较多。</p>
<p>如果你看 RESTful API 相关的文章的话一般都比较晦涩难懂，主要是因为 REST 涉及到的一些概念比较难以理解。但是，实际上，我们平时开发用到的 RESTful API 的知识非常简单也很容易概括！</p>
<p>举个例子，如果我给你下面两个 API 你是不是立马能知道它们是干什么用的！这就是 RESTful API 的强大之处！</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET    /classes：列出所有班级
POST   /classes：新建一个班级
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>RESTful API 可以让你看到 URL+Http Method 就知道这个 URL 是干什么的，让你看到了 HTTP 状态码（status code）就知道请求结果如何。</strong></p>
<p>像咱们在开发过程中设计 API 的时候也应该至少要满足 RESTful API 的最基本的要求（比如接口中尽量使用名词，使用 <code v-pre>POST</code> 请求创建资源，<code v-pre>DELETE</code> 请求删除资源等等，示例：<code v-pre>GET /notes/id</code>：获取某个指定 id 的笔记的信息）。</p>
<h2 id="解读-rest" tabindex="-1"><a class="header-anchor" href="#解读-rest" aria-hidden="true">#</a> 解读 REST</h2>
<p><strong>REST</strong> 是 <code v-pre>REpresentational State Transfer</code> 的缩写。这个词组的翻译过来就是“<strong>表现层状态转化</strong>”。</p>
<p>这样理解起来甚是晦涩，实际上 REST 的全称是 <strong>Resource Representational State Transfer</strong> ，直白地翻译过来就是 <strong>“资源”在网络传输中以某种“表现形式”进行“状态转移”</strong> 。如果还是不能继续理解，请继续往下看，相信下面的讲解一定能让你理解到底啥是 REST 。</p>
<p>我们分别对上面涉及到的概念进行解读，以便加深理解，实际上你不需要搞懂下面这些概念，也能看懂我下一部分要介绍到的内容。不过，为了更好地能跟别人扯扯 “RESTful API”我建议你还是要好好理解一下！</p>
<ul>
<li><strong>资源（Resource）</strong> ：我们可以把真实的对象数据称为资源。一个资源既可以是一个集合，也可以是单个个体。比如我们的班级 classes 是代表一个集合形式的资源，而特定的 class 代表单个个体资源。每一种资源都有特定的 URI（统一资源标识符）与之对应，如果我们需要获取这个资源，访问这个 URI 就可以了，比如获取特定的班级：<code v-pre>/class/12</code>。另外，资源也可以包含子资源，比如 <code v-pre>/classes/classId/teachers</code>：列出某个指定班级的所有老师的信息</li>
<li><strong>表现形式（Representational）</strong>：&quot;资源&quot;是一种信息实体，它可以有多种外在表现形式。我们把&quot;资源&quot;具体呈现出来的形式比如 <code v-pre>json</code>，<code v-pre>xml</code>，<code v-pre>image</code>,<code v-pre>txt</code> 等等叫做它的&quot;表现层/表现形式&quot;。</li>
<li><strong>状态转移（State Transfer）</strong> ：大家第一眼看到这个词语一定会很懵逼？内心 BB：这尼玛是啥啊？ 大白话来说 REST 中的状态转移更多地描述的服务器端资源的状态，比如你通过增删改查（通过 HTTP 动词实现）引起资源状态的改变。ps:互联网通信协议 HTTP 协议，是一个无状态协议，所有的资源状态都保存在服务器端。</li>
</ul>
<p>综合上面的解释，我们总结一下什么是 RESTful 架构：</p>
<ol>
<li>每一个 URI 代表一种资源；</li>
<li>客户端和服务器之间，传递这种资源的某种表现形式比如 <code v-pre>json</code>，<code v-pre>xml</code>，<code v-pre>image</code>,<code v-pre>txt</code> 等等；</li>
<li>客户端通过特定的 HTTP 动词，对服务器端资源进行操作，实现&quot;表现层状态转化&quot;。</li>
</ol>
<h2 id="restful-api-规范" tabindex="-1"><a class="header-anchor" href="#restful-api-规范" aria-hidden="true">#</a> RESTful API 规范</h2>
<p><img src="https://img-blog.csdnimg.cn/20210507154007779.png" alt="" loading="lazy"></p>
<h3 id="动作" tabindex="-1"><a class="header-anchor" href="#动作" aria-hidden="true">#</a> 动作</h3>
<ul>
<li><code v-pre>GET</code>：请求从服务器获取特定资源。举个例子：<code v-pre>GET /classes</code>（获取所有班级）</li>
<li><code v-pre>POST</code> ：在服务器上创建一个新的资源。举个例子：<code v-pre>POST /classes</code>（创建班级）</li>
<li><code v-pre>PUT</code> ：更新服务器上的资源（客户端提供更新后的整个资源）。举个例子：<code v-pre>PUT /classes/12</code>（更新编号为 12 的班级）</li>
<li><code v-pre>DELETE</code> ：从服务器删除特定的资源。举个例子：<code v-pre>DELETE /classes/12</code>（删除编号为 12 的班级）</li>
<li><code v-pre>PATCH</code> ：更新服务器上的资源（客户端提供更改的属性，可以看做作是部分更新），使用的比较少，这里就不举例子了。</li>
</ul>
<h3 id="路径-接口命名" tabindex="-1"><a class="header-anchor" href="#路径-接口命名" aria-hidden="true">#</a> 路径（接口命名）</h3>
<p>路径又称&quot;终点&quot;（endpoint），表示 API 的具体网址。实际开发中常见的规范如下：</p>
<ol>
<li><strong>网址中不能有动词，只能有名词，API 中的名词也应该使用复数。</strong> 因为 REST 中的资源往往和数据库中的表对应，而数据库中的表都是同种记录的&quot;集合&quot;（collection）。如果 API 调用并不涉及资源（如计算，翻译等操作）的话，可以用动词。比如：<code v-pre>GET /calculate?param1=11&amp;param2=33</code> 。</li>
<li><strong>不用大写字母，建议用中杠 - 不用下杠 _</strong> 。比如邀请码写成 <code v-pre>invitation-code</code>而不是 <s>invitation_code</s> 。</li>
<li><strong>善用版本化 API</strong>。当我们的 API 发生了重大改变而不兼容前期版本的时候，我们可以通过 URL 来实现版本化，比如 <code v-pre>http://api.example.com/v1</code>、<code v-pre>http://apiv1.example.com</code> 。版本不必非要是数字，只是数字用的最多，日期、季节都可以作为版本标识符，项目团队达成共识就可。</li>
<li><strong>接口尽量使用名词，避免使用动词。</strong> RESTful API 操作（HTTP Method）的是资源（名词）而不是动作（动词）。</li>
</ol>
<p>Talk is cheap！来举个实际的例子来说明一下吧！现在有这样一个 API 提供班级（class）的信息，还包括班级中的学生和教师的信息，则它的路径应该设计成下面这样。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET    /classes：列出所有班级
POST   /classes：新建一个班级
GET    /classes/{classId}：获取某个指定班级的信息
PUT    /classes/{classId}：更新某个指定班级的信息（一般倾向整体更新）
PATCH  /classes/{classId}：更新某个指定班级的信息（一般倾向部分更新）
DELETE /classes/{classId}：删除某个班级
GET    /classes/{classId}/teachers：列出某个指定班级的所有老师的信息
GET    /classes/{classId}/students：列出某个指定班级的所有学生的信息
DELETE /classes/{classId}/teachers/{ID}：删除某个指定班级下的指定的老师的信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反例：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>/getAllclasses
/createNewclass
/deleteAllActiveclasses
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>理清资源的层次结构，比如业务针对的范围是学校，那么学校会是一级资源:<code v-pre>/schools</code>，老师: <code v-pre>/schools/teachers</code>，学生: <code v-pre>/schools/students</code> 就是二级资源。</p>
<h3 id="过滤信息-filtering" tabindex="-1"><a class="header-anchor" href="#过滤信息-filtering" aria-hidden="true">#</a> 过滤信息（Filtering）</h3>
<p>如果我们在查询的时候需要添加特定条件的话，建议使用 url 参数的形式。比如我们要查询 state 状态为 active 并且 name 为 guidegege 的班级：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET    /classes?state=active&amp;name=guidegege
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>比如我们要实现分页查询：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>GET    /classes?page=1&amp;size=10 //指定第1页，每页10个数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="状态码-status-codes" tabindex="-1"><a class="header-anchor" href="#状态码-status-codes" aria-hidden="true">#</a> 状态码（Status Codes）</h3>
<p><strong>状态码范围：</strong></p>
<table>
<thead>
<tr>
<th>2xx：成功</th>
<th>3xx：重定向</th>
<th>4xx：客户端错误</th>
<th>5xx：服务器错误</th>
</tr>
</thead>
<tbody>
<tr>
<td>200 成功</td>
<td>301 永久重定向</td>
<td>400 错误请求</td>
<td>500 服务器错误</td>
</tr>
<tr>
<td>201 创建</td>
<td>304 资源未修改</td>
<td>401 未授权</td>
<td>502 网关错误</td>
</tr>
<tr>
<td></td>
<td></td>
<td>403 禁止访问</td>
<td>504 网关超时</td>
</tr>
<tr>
<td></td>
<td></td>
<td>404 未找到</td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td>405 请求方法不对</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="restful-的极致-hateoas" tabindex="-1"><a class="header-anchor" href="#restful-的极致-hateoas" aria-hidden="true">#</a> RESTful 的极致 HATEOAS</h2>
<blockquote>
<p><strong>RESTful 的极致是 hateoas ，但是这个基本不会在实际项目中用到。</strong></p>
</blockquote>
<p>上面是 RESTful API 最基本的东西，也是我们平时开发过程中最容易实践到的。实际上，RESTful API 最好做到 Hypermedia，即返回结果中提供链接，连向其他 API 方法，使得用户不查文档，也知道下一步应该做什么。</p>
<p>比如，当用户向 <code v-pre>api.example.com</code> 的根目录发出请求，会得到这样一个返回结果</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span><span class="token string-property property">"link"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token string-property property">"rel"</span><span class="token operator">:</span>   <span class="token string">"collection https://www.example.com/classes"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"href"</span><span class="token operator">:</span>  <span class="token string">"https://api.example.com/classes"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"title"</span><span class="token operator">:</span> <span class="token string">"List of classes"</span><span class="token punctuation">,</span>
  <span class="token string-property property">"type"</span><span class="token operator">:</span>  <span class="token string">"application/vnd.yourformat+json"</span>
<span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码表示，文档中有一个 <code v-pre>link</code> 属性，用户读取这个属性就知道下一步该调用什么 API 了。<code v-pre>rel</code> 表示这个 API 与当前网址的关系（collection 关系，并给出该 collection 的网址），<code v-pre>href</code> 表示 API 的路径，title 表示 API 的标题，<code v-pre>type</code> 表示返回类型 <code v-pre>Hypermedia API</code> 的设计被称为<a href="http://en.wikipedia.org/wiki/HATEOAS" target="_blank" rel="noopener noreferrer">HATEOAS<ExternalLinkIcon/></a>。</p>
<p>在 Spring 中有一个叫做 HATEOAS 的 API 库，通过它我们可以更轻松的创建出符合 HATEOAS 设计的 API。相关文章：</p>
<ul>
<li><a href="https://blog.aisensiy.me/2017/06/04/spring-boot-and-hateoas/" target="_blank" rel="noopener noreferrer">在 Spring Boot 中使用 HATEOAS<ExternalLinkIcon/></a></li>
<li><a href="https://spring.io/guides/tutorials/rest/" target="_blank" rel="noopener noreferrer">Building REST services with Spring<ExternalLinkIcon/></a> (Spring 官网 )</li>
<li><a href="https://www.baeldung.com/spring-hateoas-tutorial" target="_blank" rel="noopener noreferrer">An Intro to Spring HATEOAS<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/spring-projects/spring-hateoas-examples/tree/master/hypermedia" target="_blank" rel="noopener noreferrer">spring-hateoas-examples<ExternalLinkIcon/></a></li>
<li><a href="https://spring.io/projects/spring-hateoas#learn" target="_blank" rel="noopener noreferrer">Spring HATEOAS<ExternalLinkIcon/></a> (Spring 官网 )</li>
</ul>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>
<p><a href="https://RESTfulapi.net/" target="_blank" rel="noopener noreferrer">https://RESTfulapi.net/<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.ruanyifeng.com/blog/2014/05/restful_api.html" target="_blank" rel="noopener noreferrer">https://www.ruanyifeng.com/blog/2014/05/restful_api.html<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://juejin.im/entry/59e460c951882542f578f2f0" target="_blank" rel="noopener noreferrer">https://juejin.im/entry/59e460c951882542f578f2f0<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://phauer.com/2016/testing-RESTful-services-java-best-practices/" target="_blank" rel="noopener noreferrer">https://phauer.com/2016/testing-RESTful-services-java-best-practices/<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://www.seobility.net/en/wiki/REST_API" target="_blank" rel="noopener noreferrer">https://www.seobility.net/en/wiki/REST_API<ExternalLinkIcon/></a></p>
</li>
<li>
<p><a href="https://dev.to/duomly/rest-api-vs-graphql-comparison-3j6g" target="_blank" rel="noopener noreferrer">https://dev.to/duomly/rest-api-vs-graphql-comparison-3j6g<ExternalLinkIcon/></a></p>
</li>
</ul>
</div></template>
