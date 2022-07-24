<template><div><h3 id="_0-前言" tabindex="-1"><a class="header-anchor" href="#_0-前言" aria-hidden="true">#</a> 0.前言</h3>
<p>可以毫不夸张地说，这篇文章介绍的 Spring/SpringBoot 常用注解基本已经涵盖你工作中遇到的大部分常用的场景。对于每一个注解我都说了具体用法，掌握搞懂，使用 SpringBoot 来开发项目基本没啥大问题了！</p>
<p><strong>为什么要写这篇文章？</strong></p>
<p>最近看到网上有一篇关于 SpringBoot 常用注解的文章被转载的比较多，我看了文章内容之后属实觉得质量有点低，并且有点会误导没有太多实际使用经验的人（这些人又占据了大多数）。所以，自己索性花了大概 两天时间简单总结一下了。</p>
<p><strong>因为我个人的能力和精力有限，如果有任何不对或者需要完善的地方，请帮忙指出！感激不尽！</strong></p>
<h3 id="_1-springbootapplication" tabindex="-1"><a class="header-anchor" href="#_1-springbootapplication" aria-hidden="true">#</a> 1. <code v-pre>@SpringBootApplication</code></h3>
<p>这里先单独拎出<code v-pre>@SpringBootApplication</code> 注解说一下，虽然我们一般不会主动去使用它。</p>
<p><em>这个注解是 Spring Boot 项目的基石，创建 SpringBoot 项目之后会默认在主类加上。</em></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SpringSecurityJwtGuideApplication</span> <span class="token punctuation">{</span>
      <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">SpringSecurityJwtGuideApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以把 <code v-pre>@SpringBootApplication</code>看作是 <code v-pre>@Configuration</code>、<code v-pre>@EnableAutoConfiguration</code>、<code v-pre>@ComponentScan</code> 注解的集合。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure</span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@SpringBootConfiguration</span>
<span class="token annotation punctuation">@EnableAutoConfiguration</span>
<span class="token annotation punctuation">@ComponentScan</span><span class="token punctuation">(</span>excludeFilters <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token annotation punctuation">@Filter</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">FilterType</span><span class="token punctuation">.</span>CUSTOM<span class="token punctuation">,</span> classes <span class="token operator">=</span> <span class="token class-name">TypeExcludeFilter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token annotation punctuation">@Filter</span><span class="token punctuation">(</span>type <span class="token operator">=</span> <span class="token class-name">FilterType</span><span class="token punctuation">.</span>CUSTOM<span class="token punctuation">,</span> classes <span class="token operator">=</span> <span class="token class-name">AutoConfigurationExcludeFilter</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">SpringBootApplication</span> <span class="token punctuation">{</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>

<span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot</span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">SpringBootConfiguration</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据 SpringBoot 官网，这三个注解的作用分别是：</p>
<ul>
<li><code v-pre>@EnableAutoConfiguration</code>：启用 SpringBoot 的自动配置机制</li>
<li><code v-pre>@ComponentScan</code>： 扫描被<code v-pre>@Component</code> (<code v-pre>@Repository</code>,<code v-pre>@Service</code>,<code v-pre>@Controller</code>)注解的 bean，注解默认会扫描该类所在的包下所有的类。</li>
<li><code v-pre>@Configuration</code>：允许在 Spring 上下文中注册额外的 bean 或导入其他配置类</li>
</ul>
<h3 id="_2-spring-bean-相关" tabindex="-1"><a class="header-anchor" href="#_2-spring-bean-相关" aria-hidden="true">#</a> 2. Spring Bean 相关</h3>
<h4 id="_2-1-autowired" tabindex="-1"><a class="header-anchor" href="#_2-1-autowired" aria-hidden="true">#</a> 2.1. <code v-pre>@Autowired</code></h4>
<p>自动导入对象到类中，被注入进的类同样要被 Spring 容器管理比如：Service 类注入到 Controller 类中。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/users"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserController</span> <span class="token punctuation">{</span>
   <span class="token annotation punctuation">@Autowired</span>
   <span class="token keyword">private</span> <span class="token class-name">UserService</span> userService<span class="token punctuation">;</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-component-repository-service-controller" tabindex="-1"><a class="header-anchor" href="#_2-2-component-repository-service-controller" aria-hidden="true">#</a> 2.2. <code v-pre>@Component</code>,<code v-pre>@Repository</code>,<code v-pre>@Service</code>, <code v-pre>@Controller</code></h4>
<p>我们一般使用 <code v-pre>@Autowired</code> 注解让 Spring 容器帮我们自动装配 bean。要想把类标识成可用于 <code v-pre>@Autowired</code> 注解自动装配的 bean 的类,可以采用以下注解实现：</p>
<ul>
<li><code v-pre>@Component</code> ：通用的注解，可标注任意类为 <code v-pre>Spring</code> 组件。如果一个 Bean 不知道属于哪个层，可以使用<code v-pre>@Component</code> 注解标注。</li>
<li><code v-pre>@Repository</code> : 对应持久层即 Dao 层，主要用于数据库相关操作。</li>
<li><code v-pre>@Service</code> : 对应服务层，主要涉及一些复杂的逻辑，需要用到 Dao 层。</li>
<li><code v-pre>@Controller</code> : 对应 Spring MVC 控制层，主要用于接受用户请求并调用 Service 层返回数据给前端页面。</li>
</ul>
<h4 id="_2-3-restcontroller" tabindex="-1"><a class="header-anchor" href="#_2-3-restcontroller" aria-hidden="true">#</a> 2.3. <code v-pre>@RestController</code></h4>
<p><code v-pre>@RestController</code>注解是<code v-pre>@Controller</code>和<code v-pre>@ResponseBody</code>的合集,表示这是个控制器 bean,并且是将函数的返回值直接填入 HTTP 响应体中,是 REST 风格的控制器。</p>
<p><em>现在都是前后端分离，说实话我已经很久没有用过<code v-pre>@Controller</code>。如果你的项目太老了的话，就当我没说。</em></p>
<p>单独使用 <code v-pre>@Controller</code> 不加 <code v-pre>@ResponseBody</code>的话一般是用在要返回一个视图的情况，这种情况属于比较传统的 Spring MVC 的应用，对应于前后端不分离的情况。<code v-pre>@Controller</code> +<code v-pre>@ResponseBody</code> 返回 JSON 或 XML 形式数据</p>
<p>关于<code v-pre>@RestController</code> 和 <code v-pre>@Controller</code>的对比，请看这篇文章：<a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247485544&amp;idx=1&amp;sn=3cc95b88979e28fe3bfe539eb421c6d8&amp;chksm=cea247a3f9d5ceb5e324ff4b8697adc3e828ecf71a3468445e70221cce768d1e722085359907&amp;token=1725092312&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">@RestController vs @Controller<ExternalLinkIcon/></a>。</p>
<h4 id="_2-4-scope" tabindex="-1"><a class="header-anchor" href="#_2-4-scope" aria-hidden="true">#</a> 2.4. <code v-pre>@Scope</code></h4>
<p>声明 Spring Bean 的作用域，使用方法:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token annotation punctuation">@Scope</span><span class="token punctuation">(</span><span class="token string">"singleton"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">personSingleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>四种常见的 Spring Bean 的作用域：</strong></p>
<ul>
<li>singleton : 唯一 bean 实例，Spring 中的 bean 默认都是单例的。</li>
<li>prototype : 每次请求都会创建一个新的 bean 实例。</li>
<li>request : 每一次 HTTP 请求都会产生一个新的 bean，该 bean 仅在当前 HTTP request 内有效。</li>
<li>session : 每一个 HTTP Session 会产生一个新的 bean，该 bean 仅在当前 HTTP session 内有效。</li>
</ul>
<h4 id="_2-5-configuration" tabindex="-1"><a class="header-anchor" href="#_2-5-configuration" aria-hidden="true">#</a> 2.5. <code v-pre>@Configuration</code></h4>
<p>一般用来声明配置类，可以使用 <code v-pre>@Component</code>注解替代，不过使用<code v-pre>@Configuration</code>注解声明配置类更加语义化。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">TransferService</span> <span class="token function">transferService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TransferServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-处理常见的-http-请求类型" tabindex="-1"><a class="header-anchor" href="#_3-处理常见的-http-请求类型" aria-hidden="true">#</a> 3. 处理常见的 HTTP 请求类型</h3>
<p><strong>5 种常见的请求类型:</strong></p>
<ul>
<li><strong>GET</strong> ：请求从服务器获取特定资源。举个例子：<code v-pre>GET /users</code>（获取所有学生）</li>
<li><strong>POST</strong> ：在服务器上创建一个新的资源。举个例子：<code v-pre>POST /users</code>（创建学生）</li>
<li><strong>PUT</strong> ：更新服务器上的资源（客户端提供更新后的整个资源）。举个例子：<code v-pre>PUT /users/12</code>（更新编号为 12 的学生）</li>
<li><strong>DELETE</strong> ：从服务器删除特定的资源。举个例子：<code v-pre>DELETE /users/12</code>（删除编号为 12 的学生）</li>
<li><strong>PATCH</strong> ：更新服务器上的资源（客户端提供更改的属性，可以看做作是部分更新），使用的比较少，这里就不举例子了。</li>
</ul>
<h4 id="_3-1-get-请求" tabindex="-1"><a class="header-anchor" href="#_3-1-get-请求" aria-hidden="true">#</a> 3.1. GET 请求</h4>
<p><code v-pre>@GetMapping(&quot;users&quot;)</code> 等价于<code v-pre>@RequestMapping(value=&quot;/users&quot;,method=RequestMethod.GET)</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/users"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span><span class="token punctuation">></span></span> <span class="token function">getAllUsers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> userRepository<span class="token punctuation">.</span><span class="token function">findAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-post-请求" tabindex="-1"><a class="header-anchor" href="#_3-2-post-请求" aria-hidden="true">#</a> 3.2. POST 请求</h4>
<p><code v-pre>@PostMapping(&quot;users&quot;)</code> 等价于<code v-pre>@RequestMapping(value=&quot;/users&quot;,method=RequestMethod.POST)</code></p>
<p>关于<code v-pre>@RequestBody</code>注解的使用，在下面的“前后端传值”这块会讲到。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/users"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">createUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Valid</span> <span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">UserCreateRequest</span> userCreateRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">return</span> userRespository<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>userCreateRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-3-put-请求" tabindex="-1"><a class="header-anchor" href="#_3-3-put-请求" aria-hidden="true">#</a> 3.3. PUT 请求</h4>
<p><code v-pre>@PutMapping(&quot;/users/{userId}&quot;)</code> 等价于<code v-pre>@RequestMapping(value=&quot;/users/{userId}&quot;,method=RequestMethod.PUT)</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@PutMapping</span><span class="token punctuation">(</span><span class="token string">"/users/{userId}"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">></span></span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"userId"</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> userId<span class="token punctuation">,</span>
  <span class="token annotation punctuation">@Valid</span> <span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">UserUpdateRequest</span> userUpdateRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-4-delete-请求" tabindex="-1"><a class="header-anchor" href="#_3-4-delete-请求" aria-hidden="true">#</a> 3.4. <strong>DELETE 请求</strong></h4>
<p><code v-pre>@DeleteMapping(&quot;/users/{userId}&quot;)</code>等价于<code v-pre>@RequestMapping(value=&quot;/users/{userId}&quot;,method=RequestMethod.DELETE)</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@DeleteMapping</span><span class="token punctuation">(</span><span class="token string">"/users/{userId}"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResponseEntity</span> <span class="token function">deleteUser</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"userId"</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> userId<span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-5-patch-请求" tabindex="-1"><a class="header-anchor" href="#_3-5-patch-请求" aria-hidden="true">#</a> 3.5. <strong>PATCH 请求</strong></h4>
<p>一般实际项目中，我们都是 PUT 不够用了之后才用 PATCH 请求去更新数据。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>  <span class="token annotation punctuation">@PatchMapping</span><span class="token punctuation">(</span><span class="token string">"/profile"</span><span class="token punctuation">)</span>
  <span class="token keyword">public</span> <span class="token class-name">ResponseEntity</span> <span class="token function">updateStudent</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">StudentUpdateRequest</span> studentUpdateRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        studentRepository<span class="token punctuation">.</span><span class="token function">updateDetail</span><span class="token punctuation">(</span>studentUpdateRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">ResponseEntity</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-前后端传值" tabindex="-1"><a class="header-anchor" href="#_4-前后端传值" aria-hidden="true">#</a> 4. 前后端传值</h3>
<p><strong>掌握前后端传值的正确姿势，是你开始 CRUD 的第一步！</strong></p>
<h4 id="_4-1-pathvariable-和-requestparam" tabindex="-1"><a class="header-anchor" href="#_4-1-pathvariable-和-requestparam" aria-hidden="true">#</a> 4.1. <code v-pre>@PathVariable</code> 和 <code v-pre>@RequestParam</code></h4>
<p><code v-pre>@PathVariable</code>用于获取路径参数，<code v-pre>@RequestParam</code>用于获取查询参数。</p>
<p>举个简单的例子：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/klasses/{klassId}/teachers"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Teacher</span><span class="token punctuation">></span></span> <span class="token function">getKlassRelatedTeachers</span><span class="token punctuation">(</span>
         <span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"klassId"</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> klassId<span class="token punctuation">,</span>
         <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"type"</span><span class="token punctuation">,</span> required <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span> <span class="token class-name">String</span> type <span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们请求的 url 是：<code v-pre>/klasses/123456/teachers?type=web</code></p>
<p>那么我们服务获取到的数据就是：<code v-pre>klassId=123456,type=web</code>。</p>
<h4 id="_4-2-requestbody" tabindex="-1"><a class="header-anchor" href="#_4-2-requestbody" aria-hidden="true">#</a> 4.2. <code v-pre>@RequestBody</code></h4>
<p>用于读取 Request 请求（可能是 POST,PUT,DELETE,GET 请求）的 body 部分并且<strong>Content-Type 为 application/json</strong> 格式的数据，接收到数据之后会自动将数据绑定到 Java 对象上去。系统会使用<code v-pre>HttpMessageConverter</code>或者自定义的<code v-pre>HttpMessageConverter</code>将请求的 body 中的 json 字符串转换为 java 对象。</p>
<p>我用一个简单的例子来给演示一下基本使用！</p>
<p>我们有一个注册的接口：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/sign-up"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResponseEntity</span> <span class="token function">signUp</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token annotation punctuation">@Valid</span> <span class="token class-name">UserRegisterRequest</span> userRegisterRequest<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  userService<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>userRegisterRequest<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token class-name">ResponseEntity</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>UserRegisterRequest</code>对象：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UserRegisterRequest</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@NotBlank</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@NotBlank</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@NotBlank</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> fullName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们发送 post 请求到这个接口，并且 body 携带 JSON 数据：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">"userName"</span><span class="token operator">:</span><span class="token string">"coder"</span><span class="token punctuation">,</span><span class="token property">"fullName"</span><span class="token operator">:</span><span class="token string">"shuangkou"</span><span class="token punctuation">,</span><span class="token property">"password"</span><span class="token operator">:</span><span class="token string">"123456"</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样我们的后端就可以直接把 json 格式的数据映射到我们的 <code v-pre>UserRegisterRequest</code> 类上。</p>
<p><img src="@source/code/java/system-design/framework/spring/images/spring-annotations/@RequestBody.png" alt="" loading="lazy"></p>
<p>👉 需要注意的是：<strong>一个请求方法只可以有一个<code v-pre>@RequestBody</code>，但是可以有多个<code v-pre>@RequestParam</code>和<code v-pre>@PathVariable</code></strong>。 如果你的方法必须要用两个 <code v-pre>@RequestBody</code>来接受数据的话，大概率是你的数据库设计或者系统设计出问题了！</p>
<h3 id="_5-读取配置信息" tabindex="-1"><a class="header-anchor" href="#_5-读取配置信息" aria-hidden="true">#</a> 5. 读取配置信息</h3>
<p><strong>很多时候我们需要将一些常用的配置信息比如阿里云 oss、发送短信、微信认证的相关配置信息等等放到配置文件中。</strong></p>
<p><strong>下面我们来看一下 Spring 为我们提供了哪些方式帮助我们从配置文件中读取这些配置信息。</strong></p>
<p>我们的数据源<code v-pre>application.yml</code>内容如下：</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">wuhan2020</span><span class="token punctuation">:</span> 2020年初武汉爆发了新型冠状病毒，疫情严重，但是，我相信一切都会过去！武汉加油！中国加油！

<span class="token key atrule">my-profile</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> CC
  <span class="token key atrule">email</span><span class="token punctuation">:</span> SENDIM@OUTLOOK.com

<span class="token key atrule">library</span><span class="token punctuation">:</span>
  <span class="token key atrule">location</span><span class="token punctuation">:</span> 湖北武汉加油中国加油
  <span class="token key atrule">books</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 天才基本法
      <span class="token key atrule">description</span><span class="token punctuation">:</span> 二十二岁的林朝夕在父亲确诊阿尔茨海默病这天，得知自己暗恋多年的校园男神裴之即将出国深造的消息——对方考取的学校，恰是父亲当年为她放弃的那所。
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 时间的秩序
      <span class="token key atrule">description</span><span class="token punctuation">:</span> 为什么我们记得过去，而非未来？时间“流逝”意味着什么？是我们存在于时间之内，还是时间存在于我们之中？卡洛·罗韦利用诗意的文字，邀请我们思考这一亘古难题——时间的本质。
    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 了不起的我
      <span class="token key atrule">description</span><span class="token punctuation">:</span> 如何养成一个新习惯？如何让心智变得更成熟？如何拥有高质量的关系？ 如何走出人生的艰难时刻？
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-value-常用" tabindex="-1"><a class="header-anchor" href="#_5-1-value-常用" aria-hidden="true">#</a> 5.1. <code v-pre>@Value</code>(常用)</h4>
<p>使用 <code v-pre>@Value(&quot;${property}&quot;)</code> 读取比较简单的配置信息：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${wuhan2020}"</span><span class="token punctuation">)</span>
<span class="token class-name">String</span> wuhan2020<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-2-configurationproperties-常用" tabindex="-1"><a class="header-anchor" href="#_5-2-configurationproperties-常用" aria-hidden="true">#</a> 5.2. <code v-pre>@ConfigurationProperties</code>(常用)</h4>
<p>通过<code v-pre>@ConfigurationProperties</code>读取配置信息并与 bean 绑定。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">"library"</span><span class="token punctuation">)</span>
<span class="token keyword">class</span> <span class="token class-name">LibraryProperties</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@NotEmpty</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> location<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Book</span><span class="token punctuation">></span></span> books<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Setter</span>
    <span class="token annotation punctuation">@Getter</span>
    <span class="token annotation punctuation">@ToString</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Book</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> name<span class="token punctuation">;</span>
        <span class="token class-name">String</span> description<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  省略getter<span class="token operator">/</span>setter
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以像使用普通的 Spring bean 一样，将其注入到类中使用。</p>
<h4 id="_5-3-propertysource-不常用" tabindex="-1"><a class="header-anchor" href="#_5-3-propertysource-不常用" aria-hidden="true">#</a> 5.3. <code v-pre>@PropertySource</code>（不常用）</h4>
<p><code v-pre>@PropertySource</code>读取指定 properties 文件</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@PropertySource</span><span class="token punctuation">(</span><span class="token string">"classpath:website.properties"</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">WebSite</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">"${url}"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> url<span class="token punctuation">;</span>

  省略getter<span class="token operator">/</span>setter
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多内容请查看我的这篇文章：<a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247486181&amp;idx=2&amp;sn=10db0ae64ef501f96a5b0dbc4bd78786&amp;chksm=cea2452ef9d5cc384678e456427328600971180a77e40c13936b19369672ca3e342c26e92b50&amp;token=816772476&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">《10 分钟搞定 SpringBoot 如何优雅读取配置文件？》<ExternalLinkIcon/></a> 。</p>
<h3 id="_6-参数校验" tabindex="-1"><a class="header-anchor" href="#_6-参数校验" aria-hidden="true">#</a> 6. 参数校验</h3>
<p><strong>数据的校验的重要性就不用说了，即使在前端对数据进行校验的情况下，我们还是要对传入后端的数据再进行一遍校验，避免用户绕过浏览器直接通过一些 HTTP 工具直接向后端请求一些违法数据。</strong></p>
<p><strong>JSR(Java Specification Requests）</strong> 是一套 JavaBean 参数校验的标准，它定义了很多常用的校验注解，我们可以直接将这些注解加在我们 JavaBean 的属性上面，这样就可以在需要校验的时候进行校验了，非常方便！</p>
<p>校验的时候我们实际用的是 <strong>Hibernate Validator</strong> 框架。Hibernate Validator 是 Hibernate 团队最初的数据校验框架，Hibernate Validator 4.x 是 Bean Validation 1.0（JSR 303）的参考实现，Hibernate Validator 5.x 是 Bean Validation 1.1（JSR 349）的参考实现，目前最新版的 Hibernate Validator 6.x 是 Bean Validation 2.0（JSR 380）的参考实现。</p>
<p>SpringBoot 项目的 spring-boot-starter-web 依赖中已经有 hibernate-validator 包，不需要引用相关依赖。如下图所示（通过 idea 插件—Maven Helper 生成）：</p>
<p><strong>注</strong>：更新版本的 spring-boot-starter-web 依赖中不再有 hibernate-validator 包（如2.3.11.RELEASE），需要自己引入 <code v-pre>spring-boot-starter-validation</code> 依赖。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2021/03/c7bacd12-1c1a-4e41-aaaf-4cad840fc073.png" alt="" loading="lazy"></p>
<p>非 SpringBoot 项目需要自行引入相关依赖包，这里不多做讲解，具体可以查看我的这篇文章：《<a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247485783&amp;idx=1&amp;sn=a407f3b75efa17c643407daa7fb2acd6&amp;chksm=cea2469cf9d5cf8afbcd0a8a1c9cc4294d6805b8e01bee6f76bb2884c5bc15478e91459def49&amp;token=292197051&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">如何在 Spring/Spring Boot 中做参数校验？你需要了解的都在这里！<ExternalLinkIcon/></a>》。</p>
<p>👉 需要注意的是： <strong>所有的注解，推荐使用 JSR 注解，即<code v-pre>javax.validation.constraints</code>，而不是<code v-pre>org.hibernate.validator.constraints</code></strong></p>
<h4 id="_6-1-一些常用的字段验证的注解" tabindex="-1"><a class="header-anchor" href="#_6-1-一些常用的字段验证的注解" aria-hidden="true">#</a> 6.1. 一些常用的字段验证的注解</h4>
<ul>
<li><code v-pre>@NotEmpty</code> 被注释的字符串的不能为 null 也不能为空</li>
<li><code v-pre>@NotBlank</code> 被注释的字符串非 null，并且必须包含一个非空白字符</li>
<li><code v-pre>@Null</code> 被注释的元素必须为 null</li>
<li><code v-pre>@NotNull</code> 被注释的元素必须不为 null</li>
<li><code v-pre>@AssertTrue</code> 被注释的元素必须为 true</li>
<li><code v-pre>@AssertFalse</code> 被注释的元素必须为 false</li>
<li><code v-pre>@Pattern(regex=,flag=)</code>被注释的元素必须符合指定的正则表达式</li>
<li><code v-pre>@Email</code> 被注释的元素必须是 Email 格式。</li>
<li><code v-pre>@Min(value)</code>被注释的元素必须是一个数字，其值必须大于等于指定的最小值</li>
<li><code v-pre>@Max(value)</code>被注释的元素必须是一个数字，其值必须小于等于指定的最大值</li>
<li><code v-pre>@DecimalMin(value)</code>被注释的元素必须是一个数字，其值必须大于等于指定的最小值</li>
<li><code v-pre>@DecimalMax(value)</code> 被注释的元素必须是一个数字，其值必须小于等于指定的最大值</li>
<li><code v-pre>@Size(max=, min=)</code>被注释的元素的大小必须在指定的范围内</li>
<li><code v-pre>@Digits(integer, fraction)</code>被注释的元素必须是一个数字，其值必须在可接受的范围内</li>
<li><code v-pre>@Past</code>被注释的元素必须是一个过去的日期</li>
<li><code v-pre>@Future</code> 被注释的元素必须是一个将来的日期</li>
<li>......</li>
</ul>
<h4 id="_6-2-验证请求体-requestbody" tabindex="-1"><a class="header-anchor" href="#_6-2-验证请求体-requestbody" aria-hidden="true">#</a> 6.2. 验证请求体(RequestBody)</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@NotNull</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">"classId 不能为空"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> classId<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Size</span><span class="token punctuation">(</span>max <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@NotNull</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">"name 不能为空"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Pattern</span><span class="token punctuation">(</span>regexp <span class="token operator">=</span> <span class="token string">"((^Man$|^Woman$|^UGM$))"</span><span class="token punctuation">,</span> message <span class="token operator">=</span> <span class="token string">"sex 值不在可选范围"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@NotNull</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">"sex 不能为空"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> sex<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Email</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">"email 格式不正确"</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@NotNull</span><span class="token punctuation">(</span>message <span class="token operator">=</span> <span class="token string">"email 不能为空"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在需要验证的参数上加上了<code v-pre>@Valid</code>注解，如果验证失败，它将抛出<code v-pre>MethodArgumentNotValidException</code>。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/api"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersonController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span><span class="token string">"/person"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Person</span><span class="token punctuation">></span></span> <span class="token function">getPerson</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token annotation punctuation">@Valid</span> <span class="token class-name">Person</span> person<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">ResponseEntity</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-3-验证请求参数-path-variables-和-request-parameters" tabindex="-1"><a class="header-anchor" href="#_6-3-验证请求参数-path-variables-和-request-parameters" aria-hidden="true">#</a> 6.3. 验证请求参数(Path Variables 和 Request Parameters)</h4>
<p><strong>一定一定不要忘记在类上加上 <code v-pre>@Validated</code> 注解了，这个参数可以告诉 Spring 去校验方法参数。</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">"/api"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Validated</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PersonController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">"/person/{id}"</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> <span class="token function">getPersonByID</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Valid</span> <span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token annotation punctuation">@Max</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">,</span>message <span class="token operator">=</span> <span class="token string">"超过 id 的范围了"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">ResponseEntity</span><span class="token punctuation">.</span><span class="token function">ok</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">body</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多关于如何在 Spring 项目中进行参数校验的内容，请看《<a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247485783&amp;idx=1&amp;sn=a407f3b75efa17c643407daa7fb2acd6&amp;chksm=cea2469cf9d5cf8afbcd0a8a1c9cc4294d6805b8e01bee6f76bb2884c5bc15478e91459def49&amp;token=292197051&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">如何在 Spring/Spring Boot 中做参数校验？你需要了解的都在这里！<ExternalLinkIcon/></a>》这篇文章。</p>
<h3 id="_7-全局处理-controller-层异常" tabindex="-1"><a class="header-anchor" href="#_7-全局处理-controller-层异常" aria-hidden="true">#</a> 7. 全局处理 Controller 层异常</h3>
<p>介绍一下我们 Spring 项目必备的全局处理 Controller 层异常。</p>
<p><strong>相关注解：</strong></p>
<ol>
<li><code v-pre>@ControllerAdvice</code> :注解定义全局异常处理类</li>
<li><code v-pre>@ExceptionHandler</code> :注解声明异常处理方法</li>
</ol>
<p>如何使用呢？拿我们在第 5 节参数校验这块来举例子。如果方法参数不对的话就会抛出<code v-pre>MethodArgumentNotValidException</code>，我们来处理这个异常。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@ControllerAdvice</span>
<span class="token annotation punctuation">@ResponseBody</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GlobalExceptionHandler</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 请求参数异常处理
     */</span>
    <span class="token annotation punctuation">@ExceptionHandler</span><span class="token punctuation">(</span><span class="token class-name">MethodArgumentNotValidException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> <span class="token function">handleMethodArgumentNotValidException</span><span class="token punctuation">(</span><span class="token class-name">MethodArgumentNotValidException</span> ex<span class="token punctuation">,</span> <span class="token class-name">HttpServletRequest</span> request<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多关于 Spring Boot 异常处理的内容，请看我的这两篇文章：</p>
<ol>
<li><a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247485568&amp;idx=2&amp;sn=c5ba880fd0c5d82e39531fa42cb036ac&amp;chksm=cea2474bf9d5ce5dcbc6a5f6580198fdce4bc92ef577579183a729cb5d1430e4994720d59b34&amp;token=2133161636&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">SpringBoot 处理异常的几种常见姿势<ExternalLinkIcon/></a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247486379&amp;idx=2&amp;sn=48c29ae65b3ed874749f0803f0e4d90e&amp;chksm=cea24460f9d5cd769ed53ad7e17c97a7963a89f5350e370be633db0ae8d783c3a3dbd58c70f8&amp;token=1054498516&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">使用枚举简单封装一个优雅的 Spring Boot 全局异常处理！<ExternalLinkIcon/></a></li>
</ol>
<h3 id="_8-jpa-相关" tabindex="-1"><a class="header-anchor" href="#_8-jpa-相关" aria-hidden="true">#</a> 8. JPA 相关</h3>
<h4 id="_8-1-创建表" tabindex="-1"><a class="header-anchor" href="#_8-1-创建表" aria-hidden="true">#</a> 8.1. 创建表</h4>
<p><code v-pre>@Entity</code>声明一个类对应一个数据库实体。</p>
<p><code v-pre>@Table</code> 设置表名</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Entity</span>
<span class="token annotation punctuation">@Table</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"role"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Role</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span>
    <span class="token annotation punctuation">@GeneratedValue</span><span class="token punctuation">(</span>strategy <span class="token operator">=</span> <span class="token class-name">GenerationType</span><span class="token punctuation">.</span>IDENTITY<span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> description<span class="token punctuation">;</span>
    省略getter<span class="token operator">/</span>setter<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-2-创建主键" tabindex="-1"><a class="header-anchor" href="#_8-2-创建主键" aria-hidden="true">#</a> 8.2. 创建主键</h4>
<p><code v-pre>@Id</code> ：声明一个字段为主键。</p>
<p>使用<code v-pre>@Id</code>声明之后，我们还需要定义主键的生成策略。我们可以使用 <code v-pre>@GeneratedValue</code> 指定主键生成策略。</p>
<p><strong>1.通过 <code v-pre>@GeneratedValue</code>直接使用 JPA 内置提供的四种主键生成策略来指定主键生成策略。</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Id</span>
<span class="token annotation punctuation">@GeneratedValue</span><span class="token punctuation">(</span>strategy <span class="token operator">=</span> <span class="token class-name">GenerationType</span><span class="token punctuation">.</span>IDENTITY<span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>JPA 使用枚举定义了 4 种常见的主键生成策略，如下：</p>
<p><em>枚举替代常量的一种用法</em></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">GenerationType</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 使用一个特定的数据库表格来保存主键
     * 持久化引擎通过关系数据库的一张特定的表格来生成主键,
     */</span>
    TABLE<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     *在某些数据库中,不支持主键自增长,比如Oracle、PostgreSQL其提供了一种叫做"序列(sequence)"的机制生成主键
     */</span>
    SEQUENCE<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * 主键自增长
     */</span>
    IDENTITY<span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     *把主键生成策略交给持久化引擎(persistence engine),
     *持久化引擎会根据数据库在以上三种主键生成 策略中选择其中一种
     */</span>
    AUTO
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@GeneratedValue</code>注解默认使用的策略是<code v-pre>GenerationType.AUTO</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">GeneratedValue</span> <span class="token punctuation">{</span>

    <span class="token class-name">GenerationType</span> <span class="token function">strategy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> AUTO<span class="token punctuation">;</span>
    <span class="token class-name">String</span> <span class="token function">generator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般使用 MySQL 数据库的话，使用<code v-pre>GenerationType.IDENTITY</code>策略比较普遍一点（分布式系统的话需要另外考虑使用分布式 ID）。</p>
<p><strong>2.通过 <code v-pre>@GenericGenerator</code>声明一个主键策略，然后 <code v-pre>@GeneratedValue</code>使用这个策略</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Id</span>
<span class="token annotation punctuation">@GeneratedValue</span><span class="token punctuation">(</span>generator <span class="token operator">=</span> <span class="token string">"IdentityIdGenerator"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@GenericGenerator</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"IdentityIdGenerator"</span><span class="token punctuation">,</span> strategy <span class="token operator">=</span> <span class="token string">"identity"</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>等价于：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Id</span>
<span class="token annotation punctuation">@GeneratedValue</span><span class="token punctuation">(</span>strategy <span class="token operator">=</span> <span class="token class-name">GenerationType</span><span class="token punctuation">.</span>IDENTITY<span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>jpa 提供的主键生成策略有如下几种：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DefaultIdentifierGeneratorFactory</span>
		<span class="token keyword">implements</span> <span class="token class-name">MutableIdentifierGeneratorFactory</span><span class="token punctuation">,</span> <span class="token class-name">Serializable</span><span class="token punctuation">,</span> <span class="token class-name">ServiceRegistryAwareService</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">"deprecation"</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token class-name">DefaultIdentifierGeneratorFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">register</span><span class="token punctuation">(</span> <span class="token string">"uuid2"</span><span class="token punctuation">,</span> <span class="token class-name">UUIDGenerator</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">register</span><span class="token punctuation">(</span> <span class="token string">"guid"</span><span class="token punctuation">,</span> <span class="token class-name">GUIDGenerator</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// can be done with UUIDGenerator + strategy</span>
		<span class="token function">register</span><span class="token punctuation">(</span> <span class="token string">"uuid"</span><span class="token punctuation">,</span> <span class="token class-name">UUIDHexGenerator</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>			<span class="token comment">// "deprecated" for new use</span>
		<span class="token function">register</span><span class="token punctuation">(</span> <span class="token string">"uuid.hex"</span><span class="token punctuation">,</span> <span class="token class-name">UUIDHexGenerator</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">)</span><span class="token punctuation">;</span> 	<span class="token comment">// uuid.hex is deprecated</span>
		<span class="token function">register</span><span class="token punctuation">(</span> <span class="token string">"assigned"</span><span class="token punctuation">,</span> <span class="token class-name">Assigned</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">register</span><span class="token punctuation">(</span> <span class="token string">"identity"</span><span class="token punctuation">,</span> <span class="token class-name">IdentityGenerator</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">register</span><span class="token punctuation">(</span> <span class="token string">"select"</span><span class="token punctuation">,</span> <span class="token class-name">SelectGenerator</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">register</span><span class="token punctuation">(</span> <span class="token string">"sequence"</span><span class="token punctuation">,</span> <span class="token class-name">SequenceStyleGenerator</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">register</span><span class="token punctuation">(</span> <span class="token string">"seqhilo"</span><span class="token punctuation">,</span> <span class="token class-name">SequenceHiLoGenerator</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">register</span><span class="token punctuation">(</span> <span class="token string">"increment"</span><span class="token punctuation">,</span> <span class="token class-name">IncrementGenerator</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">register</span><span class="token punctuation">(</span> <span class="token string">"foreign"</span><span class="token punctuation">,</span> <span class="token class-name">ForeignGenerator</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">register</span><span class="token punctuation">(</span> <span class="token string">"sequence-identity"</span><span class="token punctuation">,</span> <span class="token class-name">SequenceIdentityGenerator</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">register</span><span class="token punctuation">(</span> <span class="token string">"enhanced-sequence"</span><span class="token punctuation">,</span> <span class="token class-name">SequenceStyleGenerator</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">register</span><span class="token punctuation">(</span> <span class="token string">"enhanced-table"</span><span class="token punctuation">,</span> <span class="token class-name">TableGenerator</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">register</span><span class="token punctuation">(</span><span class="token class-name">String</span> strategy<span class="token punctuation">,</span> <span class="token class-name">Class</span> generatorClass<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		LOG<span class="token punctuation">.</span><span class="token function">debugf</span><span class="token punctuation">(</span> <span class="token string">"Registering IdentifierGenerator strategy [%s] -> [%s]"</span><span class="token punctuation">,</span> strategy<span class="token punctuation">,</span> generatorClass<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">final</span> <span class="token class-name">Class</span> previous <span class="token operator">=</span> generatorStrategyToClassNameMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span> strategy<span class="token punctuation">,</span> generatorClass <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span> previous <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
			LOG<span class="token punctuation">.</span><span class="token function">debugf</span><span class="token punctuation">(</span> <span class="token string">"    - overriding [%s]"</span><span class="token punctuation">,</span> previous<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-3-设置字段类型" tabindex="-1"><a class="header-anchor" href="#_8-3-设置字段类型" aria-hidden="true">#</a> 8.3. 设置字段类型</h4>
<p><code v-pre>@Column</code> 声明字段。</p>
<p><strong>示例：</strong></p>
<p>设置属性 userName 对应的数据库字段名为 user_name，长度为 32，非空</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"user_name"</span><span class="token punctuation">,</span> nullable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> length<span class="token operator">=</span><span class="token number">32</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>设置字段类型并且加默认值，这个还是挺常用的。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>columnDefinition <span class="token operator">=</span> <span class="token string">"tinyint(1) default 1"</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">Boolean</span> enabled<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-4-指定不持久化特定字段" tabindex="-1"><a class="header-anchor" href="#_8-4-指定不持久化特定字段" aria-hidden="true">#</a> 8.4. 指定不持久化特定字段</h4>
<p><code v-pre>@Transient</code> ：声明不需要与数据库映射的字段，在保存的时候不需要保存进数据库 。</p>
<p>如果我们想让<code v-pre>secrect</code> 这个字段不被持久化，可以使用 <code v-pre>@Transient</code>关键字声明。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Entity</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">"USER"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>

    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token annotation punctuation">@Transient</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> secrect<span class="token punctuation">;</span> <span class="token comment">// not persistent because of @Transient</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了 <code v-pre>@Transient</code>关键字声明， 还可以采用下面几种方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token class-name">String</span> secrect<span class="token punctuation">;</span> <span class="token comment">// not persistent because of static</span>
<span class="token keyword">final</span> <span class="token class-name">String</span> secrect <span class="token operator">=</span> <span class="token string">"Satish"</span><span class="token punctuation">;</span> <span class="token comment">// not persistent because of final</span>
<span class="token keyword">transient</span> <span class="token class-name">String</span> secrect<span class="token punctuation">;</span> <span class="token comment">// not persistent because of transient</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般使用注解的方式比较多。</p>
<h4 id="_8-5-声明大字段" tabindex="-1"><a class="header-anchor" href="#_8-5-声明大字段" aria-hidden="true">#</a> 8.5. 声明大字段</h4>
<p><code v-pre>@Lob</code>:声明某个字段为大字段。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Lob</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> content<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>更详细的声明：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Lob</span>
<span class="token comment">//指定 Lob 类型数据的获取策略， FetchType.EAGER 表示非延迟加载，而 FetchType.LAZY 表示延迟加载 ；</span>
<span class="token annotation punctuation">@Basic</span><span class="token punctuation">(</span>fetch <span class="token operator">=</span> <span class="token class-name">FetchType</span><span class="token punctuation">.</span>EAGER<span class="token punctuation">)</span>
<span class="token comment">//columnDefinition 属性指定数据表对应的 Lob 字段类型</span>
<span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"content"</span><span class="token punctuation">,</span> columnDefinition <span class="token operator">=</span> <span class="token string">"LONGTEXT NOT NULL"</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> content<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-6-创建枚举类型的字段" tabindex="-1"><a class="header-anchor" href="#_8-6-创建枚举类型的字段" aria-hidden="true">#</a> 8.6. 创建枚举类型的字段</h4>
<p>可以使用枚举类型的字段，不过枚举字段要用<code v-pre>@Enumerated</code>注解修饰。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Gender</span> <span class="token punctuation">{</span>
    <span class="token function">MALE</span><span class="token punctuation">(</span><span class="token string">"男性"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">FEMALE</span><span class="token punctuation">(</span><span class="token string">"女性"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> value<span class="token punctuation">;</span>
    <span class="token class-name">Gender</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span><span class="token punctuation">{</span>
        value<span class="token operator">=</span>str<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Entity</span>
<span class="token annotation punctuation">@Table</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"role"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Role</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Id</span>
    <span class="token annotation punctuation">@GeneratedValue</span><span class="token punctuation">(</span>strategy <span class="token operator">=</span> <span class="token class-name">GenerationType</span><span class="token punctuation">.</span>IDENTITY<span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> description<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Enumerated</span><span class="token punctuation">(</span><span class="token class-name">EnumType</span><span class="token punctuation">.</span>STRING<span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Gender</span> gender<span class="token punctuation">;</span>
    省略getter<span class="token operator">/</span>setter<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据库里面对应存储的是 MALE/FEMALE。</p>
<h4 id="_8-7-增加审计功能" tabindex="-1"><a class="header-anchor" href="#_8-7-增加审计功能" aria-hidden="true">#</a> 8.7. 增加审计功能</h4>
<p>只要继承了 <code v-pre>AbstractAuditBase</code>的类都会默认加上下面四个字段。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@MappedSuperclass</span>
<span class="token annotation punctuation">@EntityListeners</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">AuditingEntityListener</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractAuditBase</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@CreatedDate</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>updatable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@JsonIgnore</span>
    <span class="token keyword">private</span> <span class="token class-name">Instant</span> createdAt<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@LastModifiedDate</span>
    <span class="token annotation punctuation">@JsonIgnore</span>
    <span class="token keyword">private</span> <span class="token class-name">Instant</span> updatedAt<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@CreatedBy</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>updatable <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@JsonIgnore</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> createdBy<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@LastModifiedBy</span>
    <span class="token annotation punctuation">@JsonIgnore</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> updatedBy<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们对应的审计功能对应地配置类可能是下面这样的（Spring Security 项目）:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>
<span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableJpaAuditing</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AuditSecurityConfiguration</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">AuditorAware</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> <span class="token function">auditorAware</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-></span> <span class="token class-name">Optional</span><span class="token punctuation">.</span><span class="token function">ofNullable</span><span class="token punctuation">(</span><span class="token class-name">SecurityContextHolder</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">SecurityContext</span><span class="token operator">::</span><span class="token function">getAuthentication</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token class-name">Authentication</span><span class="token operator">::</span><span class="token function">isAuthenticated</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">Authentication</span><span class="token operator">::</span><span class="token function">getName</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单介绍一下上面涉及到的一些注解：</p>
<ol>
<li>
<p><code v-pre>@CreatedDate</code>: 表示该字段为创建时间字段，在这个实体被 insert 的时候，会设置值</p>
</li>
<li>
<p><code v-pre>@CreatedBy</code> :表示该字段为创建人，在这个实体被 insert 的时候，会设置值</p>
<p><code v-pre>@LastModifiedDate</code>、<code v-pre>@LastModifiedBy</code>同理。</p>
</li>
</ol>
<p><code v-pre>@EnableJpaAuditing</code>：开启 JPA 审计功能。</p>
<h4 id="_8-8-删除-修改数据" tabindex="-1"><a class="header-anchor" href="#_8-8-删除-修改数据" aria-hidden="true">#</a> 8.8. 删除/修改数据</h4>
<p><code v-pre>@Modifying</code> 注解提示 JPA 该操作是修改操作,注意还要配合<code v-pre>@Transactional</code>注解使用。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Repository</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserRepository</span> <span class="token keyword">extends</span> <span class="token class-name">JpaRepository</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Modifying</span>
    <span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>rollbackFor <span class="token operator">=</span> <span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
    <span class="token keyword">void</span> <span class="token function">deleteByUserName</span><span class="token punctuation">(</span><span class="token class-name">String</span> userName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_8-9-关联关系" tabindex="-1"><a class="header-anchor" href="#_8-9-关联关系" aria-hidden="true">#</a> 8.9. 关联关系</h4>
<ul>
<li><code v-pre>@OneToOne</code> 声明一对一关系</li>
<li><code v-pre>@OneToMany</code> 声明一对多关系</li>
<li><code v-pre>@ManyToOne</code> 声明多对一关系</li>
<li><code v-pre>@ManyToMany</code> 声明多对多关系</li>
</ul>
<p>更多关于 Spring Boot JPA 的文章请看我的这篇文章：<a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247485689&amp;idx=1&amp;sn=061b32c2222869932be5631fb0bb5260&amp;chksm=cea24732f9d5ce24a356fb3675170e7843addbfcc79ee267cfdb45c83fc7e90babf0f20d22e1&amp;token=292197051&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">一文搞懂如何在 Spring Boot 正确中使用 JPA<ExternalLinkIcon/></a> 。</p>
<h3 id="_9-事务-transactional" tabindex="-1"><a class="header-anchor" href="#_9-事务-transactional" aria-hidden="true">#</a> 9. 事务 <code v-pre>@Transactional</code></h3>
<p>在要开启事务的方法上使用<code v-pre>@Transactional</code>注解即可!</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>rollbackFor <span class="token operator">=</span> <span class="token class-name">Exception</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们知道 Exception 分为运行时异常 RuntimeException 和非运行时异常。在<code v-pre>@Transactional</code>注解中如果不配置<code v-pre>rollbackFor</code>属性,那么事务只会在遇到<code v-pre>RuntimeException</code>的时候才会回滚,加上<code v-pre>rollbackFor=Exception.class</code>,可以让事务在遇到非运行时异常时也回滚。</p>
<p><code v-pre>@Transactional</code> 注解一般可以作用在<code v-pre>类</code>或者<code v-pre>方法</code>上。</p>
<ul>
<li><strong>作用于类</strong>：当把<code v-pre>@Transactional</code> 注解放在类上时，表示所有该类的 public 方法都配置相同的事务属性信息。</li>
<li><strong>作用于方法</strong>：当类配置了<code v-pre>@Transactional</code>，方法也配置了<code v-pre>@Transactional</code>，方法的事务会覆盖类的事务配置信息。</li>
</ul>
<p>更多关于 Spring 事务的内容请查看我的这篇文章：<RouterLink to="/code/java/system-design/framework/spring/spring-transaction.html">可能是最漂亮的 Spring 事务管理详解</RouterLink> 。</p>
<h3 id="_10-json-数据处理" tabindex="-1"><a class="header-anchor" href="#_10-json-数据处理" aria-hidden="true">#</a> 10. json 数据处理</h3>
<h4 id="_10-1-过滤-json-数据" tabindex="-1"><a class="header-anchor" href="#_10-1-过滤-json-数据" aria-hidden="true">#</a> 10.1. 过滤 json 数据</h4>
<p><strong><code v-pre>@JsonIgnoreProperties</code> 作用在类上用于过滤掉特定字段不返回或者不解析。</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//生成json时将userRoles属性过滤</span>
<span class="token annotation punctuation">@JsonIgnoreProperties</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">"userRoles"</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> fullName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserRole</span><span class="token punctuation">></span></span> userRoles <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>@JsonIgnore</code>一般用于类的属性上，作用和上面的<code v-pre>@JsonIgnoreProperties</code> 一样。</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> fullName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>
   <span class="token comment">//生成json时将userRoles属性过滤</span>
    <span class="token annotation punctuation">@JsonIgnore</span>
    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">UserRole</span><span class="token punctuation">></span></span> userRoles <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-2-格式化-json-数据" tabindex="-1"><a class="header-anchor" href="#_10-2-格式化-json-数据" aria-hidden="true">#</a> 10.2. 格式化 json 数据</h4>
<p><code v-pre>@JsonFormat</code>一般用来格式化 json 数据。</p>
<p>比如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@JsonFormat</span><span class="token punctuation">(</span>shape<span class="token operator">=</span><span class="token class-name">JsonFormat<span class="token punctuation">.</span>Shape</span><span class="token punctuation">.</span>STRING<span class="token punctuation">,</span> pattern<span class="token operator">=</span><span class="token string">"yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"</span><span class="token punctuation">,</span> timezone<span class="token operator">=</span><span class="token string">"GMT"</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">Date</span> date<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_10-3-扁平化对象" tabindex="-1"><a class="header-anchor" href="#_10-3-扁平化对象" aria-hidden="true">#</a> 10.3. 扁平化对象</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Getter</span>
<span class="token annotation punctuation">@Setter</span>
<span class="token annotation punctuation">@ToString</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Account</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Location</span> location<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">PersonInfo</span> personInfo<span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Getter</span>
  <span class="token annotation punctuation">@Setter</span>
  <span class="token annotation punctuation">@ToString</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Location</span> <span class="token punctuation">{</span>
     <span class="token keyword">private</span> <span class="token class-name">String</span> provinceName<span class="token punctuation">;</span>
     <span class="token keyword">private</span> <span class="token class-name">String</span> countyName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token annotation punctuation">@Getter</span>
  <span class="token annotation punctuation">@Setter</span>
  <span class="token annotation punctuation">@ToString</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">PersonInfo</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> fullName<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>未扁平化之前：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"location"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"provinceName"</span><span class="token operator">:</span><span class="token string">"湖北"</span><span class="token punctuation">,</span>
        <span class="token property">"countyName"</span><span class="token operator">:</span><span class="token string">"武汉"</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">"personInfo"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"userName"</span><span class="token operator">:</span> <span class="token string">"coder1234"</span><span class="token punctuation">,</span>
        <span class="token property">"fullName"</span><span class="token operator">:</span> <span class="token string">"shaungkou"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用<code v-pre>@JsonUnwrapped</code> 扁平对象之后：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Getter</span>
<span class="token annotation punctuation">@Setter</span>
<span class="token annotation punctuation">@ToString</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Account</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@JsonUnwrapped</span>
    <span class="token keyword">private</span> <span class="token class-name">Location</span> location<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@JsonUnwrapped</span>
    <span class="token keyword">private</span> <span class="token class-name">PersonInfo</span> personInfo<span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"provinceName"</span><span class="token operator">:</span><span class="token string">"湖北"</span><span class="token punctuation">,</span>
  <span class="token property">"countyName"</span><span class="token operator">:</span><span class="token string">"武汉"</span><span class="token punctuation">,</span>
  <span class="token property">"userName"</span><span class="token operator">:</span> <span class="token string">"coder1234"</span><span class="token punctuation">,</span>
  <span class="token property">"fullName"</span><span class="token operator">:</span> <span class="token string">"shaungkou"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-测试相关" tabindex="-1"><a class="header-anchor" href="#_11-测试相关" aria-hidden="true">#</a> 11. 测试相关</h3>
<p><strong><code v-pre>@ActiveProfiles</code>一般作用于测试类上， 用于声明生效的 Spring 配置文件。</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span><span class="token punctuation">(</span>webEnvironment <span class="token operator">=</span> RANDOM_PORT<span class="token punctuation">)</span>
<span class="token annotation punctuation">@ActiveProfiles</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">TestBase</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>@Test</code>声明一个方法为测试方法</strong></p>
<p><strong><code v-pre>@Transactional</code>被声明的测试方法的数据会回滚，避免污染测试数据。</strong></p>
<p><strong><code v-pre>@WithMockUser</code> Spring Security 提供的，用来模拟一个真实用户，并且可以赋予权限。</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token annotation punctuation">@Transactional</span>
    <span class="token annotation punctuation">@WithMockUser</span><span class="token punctuation">(</span>username <span class="token operator">=</span> <span class="token string">"user-id-18163138155"</span><span class="token punctuation">,</span> authorities <span class="token operator">=</span> <span class="token string">"ROLE_TEACHER"</span><span class="token punctuation">)</span>
    <span class="token keyword">void</span> <span class="token function">should_import_student_success</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>暂时总结到这里吧！虽然花了挺长时间才写完，不过可能还是会一些常用的注解的被漏掉，所以，我将文章也同步到了 Github 上去，Github 地址： 欢迎完善！</em></p>
</div></template>
