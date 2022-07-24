<template><div><p>这篇文章主要是想通过一些问题，加深大家对于 Spring 的理解，所以不会涉及太多的代码！</p>
<p>下面的很多问题我自己在使用 Spring 的过程中也并没有注意，自己也是临时查阅了很多资料和书籍补上的。网上也有一些很多关于 Spring 常见问题/面试题整理的文章，我感觉大部分都是互相 copy，而且很多问题也不是很好，有些回答也存在问题。所以，自己花了一周的业余时间整理了一下，希望对大家有帮助。</p>
<h2 id="什么是-spring-框架" tabindex="-1"><a class="header-anchor" href="#什么是-spring-框架" aria-hidden="true">#</a> 什么是 Spring 框架?</h2>
<p>Spring 是一款开源的轻量级 Java 开发框架，旨在提高开发人员的开发效率以及系统的可维护性。</p>
<p>Spring 翻译过来就是春天的意思，可见其目标和使命就是为 Java 程序员带来春天啊！感动！</p>
<blockquote>
<p>题外话 ： 语言的流行通常需要一个杀手级的应用，Spring 就是 Java 生态的一个杀手级的应用框架。</p>
</blockquote>
<p>我们一般说 Spring 框架指的都是 Spring Framework，它是很多模块的集合，使用这些模块可以很方便地协助我们进行开发。</p>
<p>比如说 Spring 自带 IoC（Inverse of Control:控制反转） 和 AOP(Aspect-Oriented Programming:面向切面编程)、可以很方便地对数据库进行访问、可以很方便地集成第三方组件（电子邮件，任务，调度，缓存等等）、对单元测试支持比较好、支持 RESTful Java 应用程序的开发。</p>
<p><img src="https://img-blog.csdnimg.cn/38ef122122de4375abcd27c3de8f60b4.png" alt="" loading="lazy"></p>
<p>Spring 最核心的思想就是不重新造轮子，开箱即用！</p>
<p>Spring 提供的核心功能主要是 IoC 和 AOP。学习 Spring ，一定要把 IoC 和 AOP 的核心思想搞懂！</p>
<ul>
<li>Spring 官网：<a href="https://spring.io/" target="_blank" rel="noopener noreferrer">https://spring.io/<ExternalLinkIcon/></a></li>
<li>Github 地址： <a href="https://github.com/spring-projects/spring-framework" target="_blank" rel="noopener noreferrer">https://github.com/spring-projects/spring-framework<ExternalLinkIcon/></a></li>
</ul>
<h2 id="列举一些重要的-spring-模块" tabindex="-1"><a class="header-anchor" href="#列举一些重要的-spring-模块" aria-hidden="true">#</a> 列举一些重要的 Spring 模块？</h2>
<p>下图对应的是 Spring4.x 版本。目前最新的 5.x 版本中 Web 模块的 Portlet 组件已经被废弃掉，同时增加了用于异步响应式处理的 WebFlux 组件。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/jvme0c60b4606711fc4a0b6faf03230247a.png" alt="Spring主要模块" loading="lazy"></p>
<p><strong>Spring Core</strong></p>
<p>核心模块， Spring 其他所有的功能基本都需要依赖于该模块，主要提供 IoC 依赖注入功能的支持。</p>
<p><strong>Spring Aspects</strong></p>
<p>该模块为与 AspectJ 的集成提供支持。</p>
<p><strong>Spring AOP</strong></p>
<p>提供了面向切面的编程实现。</p>
<p><strong>Spring Data Access/Integration ：</strong></p>
<p>Spring Data Access/Integration 由 5 个模块组成：</p>
<ul>
<li>spring-jdbc : 提供了对数据库访问的抽象 JDBC。不同的数据库都有自己独立的 API 用于操作数据库，而 Java 程序只需要和 JDBC API 交互，这样就屏蔽了数据库的影响。</li>
<li>spring-tx : 提供对事务的支持。</li>
<li>spring-orm : 提供对 Hibernate 等 ORM 框架的支持。</li>
<li>spring-oxm ： 提供对 Castor 等 OXM 框架的支持。</li>
<li>spring-jms : Java 消息服务。</li>
</ul>
<p><strong>Spring Web</strong></p>
<p>Spring Web 由 4 个模块组成：</p>
<ul>
<li>spring-web ：对 Web 功能的实现提供一些最基础的支持。</li>
<li>spring-webmvc ： 提供对 Spring MVC 的实现。</li>
<li>spring-websocket ： 提供了对 WebSocket 的支持，WebSocket 可以让客户端和服务端进行双向通信。</li>
<li>spring-webflux ：提供对 WebFlux 的支持。WebFlux 是 Spring Framework 5.0 中引入的新的响应式框架。与 Spring MVC 不同，它不需要 Servlet API，是完全异步.</li>
</ul>
<p><strong>Spring Test</strong></p>
<p>Spring 团队提倡测试驱动开发（TDD）。有了控制反转 (IoC)的帮助，单元测试和集成测试变得更简单。</p>
<p>Spring 的测试模块对 JUnit（单元测试框架）、TestNG（类似 JUnit）、Mockito（主要用来 Mock 对象）、PowerMock（解决 Mockito 的问题比如无法模拟 final, static， private 方法）等等常用的测试框架支持的都比较好。</p>
<h2 id="spring-spring-mvc-spring-boot-之间什么关系" tabindex="-1"><a class="header-anchor" href="#spring-spring-mvc-spring-boot-之间什么关系" aria-hidden="true">#</a> Spring,Spring MVC,Spring Boot 之间什么关系?</h2>
<p>很多人对 Spring,Spring MVC,Spring Boot 这三者傻傻分不清楚！这里简单介绍一下这三者，其实很简单，没有什么高深的东西。</p>
<p>Spring 包含了多个功能模块（上面刚刚提高过），其中最重要的是 Spring-Core（主要提供 IoC 依赖注入功能的支持） 模块， Spring 中的其他模块（比如 Spring MVC）的功能实现基本都需要依赖于该模块。</p>
<p>下图对应的是 Spring4.x 版本。目前最新的 5.x 版本中 Web 模块的 Portlet 组件已经被废弃掉，同时增加了用于异步响应式处理的 WebFlux 组件。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/jvme0c60b4606711fc4a0b6faf03230247a.png" alt="Spring主要模块" loading="lazy"></p>
<p>Spring MVC 是 Spring 中的一个很重要的模块，主要赋予 Spring 快速构建 MVC 架构的 Web 程序的能力。MVC 是模型(Model)、视图(View)、控制器(Controller)的简写，其核心思想是通过将业务逻辑、数据、显示分离来组织代码。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/image-20210809181452421.png" alt="" loading="lazy"></p>
<p>使用 Spring 进行开发各种配置过于麻烦比如开启某些 Spring 特性时，需要用 XML 或 Java 进行显式配置。于是，Spring Boot 诞生了！</p>
<p>Spring 旨在简化 J2EE 企业应用程序开发。Spring Boot 旨在简化 Spring 开发（减少配置文件，开箱即用！）。</p>
<p>Spring Boot 只是简化了配置，如果你需要构建 MVC 架构的 Web 程序，你还是需要使用 Spring MVC 作为 MVC 框架，只是说 Spring Boot 帮你简化了 Spring MVC 的很多配置，真正做到开箱即用！</p>
<h2 id="spring-ioc-aop" tabindex="-1"><a class="header-anchor" href="#spring-ioc-aop" aria-hidden="true">#</a> Spring IOC &amp; AOP</h2>
<h3 id="谈谈自己对于-spring-ioc-的了解" tabindex="-1"><a class="header-anchor" href="#谈谈自己对于-spring-ioc-的了解" aria-hidden="true">#</a> 谈谈自己对于 Spring IoC 的了解</h3>
<p><strong>IoC（Inverse of Control:控制反转）</strong> 是一种设计思想，而不是一个具体的技术实现。IoC 的思想就是将原本在程序中手动创建对象的控制权，交由 Spring 框架来管理。不过， IoC 并非 Spring 特有，在其他语言中也有应用。</p>
<p><strong>为什么叫控制反转？</strong></p>
<ul>
<li><strong>控制</strong> ：指的是对象创建（实例化、管理）的权力</li>
<li><strong>反转</strong> ：控制权交给外部环境（Spring 框架、IoC 容器）</li>
</ul>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/frc-365faceb5697f04f31399937c059c162.png" alt="" loading="lazy"></p>
<p>将对象之间的相互依赖关系交给 IoC 容器来管理，并由 IoC 容器完成对象的注入。这样可以很大程度上简化应用的开发，把应用从复杂的依赖关系中解放出来。 IoC 容器就像是一个工厂一样，当我们需要创建一个对象的时候，只需要配置好配置文件/注解即可，完全不用考虑对象是如何被创建出来的。</p>
<p>在实际项目中一个 Service 类可能依赖了很多其他的类，假如我们需要实例化这个 Service，你可能要每次都要搞清这个 Service 所有底层类的构造函数，这可能会把人逼疯。如果利用 IoC 的话，你只需要配置好，然后在需要的地方引用就行了，这大大增加了项目的可维护性且降低了开发难度。</p>
<p>在 Spring 中， IoC 容器是 Spring 用来实现 IoC 的载体， IoC 容器实际上就是个 Map（key，value），Map 中存放的是各种对象。</p>
<p>Spring 时代我们一般通过 XML 文件来配置 Bean，后来开发人员觉得 XML 文件来配置不太好，于是 SpringBoot 注解配置就慢慢开始流行起来。</p>
<p>相关阅读：</p>
<ul>
<li><a href="https://javadoop.com/post/spring-ioc" target="_blank" rel="noopener noreferrer">IoC 源码阅读<ExternalLinkIcon/></a></li>
<li><a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247486938&amp;idx=1&amp;sn=c99ef0233f39a5ffc1b98c81e02dfcd4&amp;chksm=cea24211f9d5cb07fa901183ba4d96187820713a72387788408040822ffb2ed575d28e953ce7&amp;token=1736772241&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">面试被问了几百遍的 IoC 和 AOP ，还在傻傻搞不清楚？<ExternalLinkIcon/></a></li>
</ul>
<h3 id="谈谈自己对于-aop-的了解" tabindex="-1"><a class="header-anchor" href="#谈谈自己对于-aop-的了解" aria-hidden="true">#</a> 谈谈自己对于 AOP 的了解</h3>
<p>AOP(Aspect-Oriented Programming:面向切面编程)能够将那些与业务无关，却为业务模块所共同调用的逻辑或责任（例如事务处理、日志管理、权限控制等）封装起来，便于减少系统的重复代码，降低模块间的耦合度，并有利于未来的可拓展性和可维护性。</p>
<p>Spring AOP 就是基于动态代理的，如果要代理的对象，实现了某个接口，那么 Spring AOP 会使用 <strong>JDK Proxy</strong>，去创建代理对象，而对于没有实现接口的对象，就无法使用 JDK Proxy 去进行代理了，这时候 Spring AOP 会使用 <strong>Cglib</strong> 生成一个被代理对象的子类来作为代理，如下图所示：</p>
<p><img src="https://images.xiaozhuanlan.com/photo/2019/926dfc549b06d280a37397f9fd49bf9d.jpg" alt="SpringAOPProcess" loading="lazy"></p>
<p>当然你也可以使用 <strong>AspectJ</strong> ！Spring AOP 已经集成了 AspectJ ，AspectJ 应该算的上是 Java 生态系统中最完整的 AOP 框架了。</p>
<h3 id="spring-aop-和-aspectj-aop-有什么区别" tabindex="-1"><a class="header-anchor" href="#spring-aop-和-aspectj-aop-有什么区别" aria-hidden="true">#</a> Spring AOP 和 AspectJ AOP 有什么区别？</h3>
<p><strong>Spring AOP 属于运行时增强，而 AspectJ 是编译时增强。</strong> Spring AOP 基于代理(Proxying)，而 AspectJ 基于字节码操作(Bytecode Manipulation)。</p>
<p>Spring AOP 已经集成了 AspectJ ，AspectJ 应该算的上是 Java 生态系统中最完整的 AOP 框架了。AspectJ 相比于 Spring AOP 功能更加强大，但是 Spring AOP 相对来说更简单，</p>
<p>如果我们的切面比较少，那么两者性能差异不大。但是，当切面太多的话，最好选择 AspectJ ，它比 Spring AOP 快很多。</p>
<h2 id="spring-bean" tabindex="-1"><a class="header-anchor" href="#spring-bean" aria-hidden="true">#</a> Spring Bean</h2>
<h3 id="什么是-spring-bean" tabindex="-1"><a class="header-anchor" href="#什么是-spring-bean" aria-hidden="true">#</a> 什么是 Spring Bean？</h3>
<p>简单来说，Bean 代指的就是那些被 IoC 容器所管理的对象。</p>
<p>我们需要告诉 IoC 容器帮助我们管理哪些对象，这个是通过配置元数据来定义的。配置元数据可以是 XML 文件、注解或者 Java 配置类。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- Constructor-arg with 'value' attribute --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>constructor-arg</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下图简单地展示了 IoC 容器如何使用配置元数据来管理对象。</p>
<p><img src="https://img-blog.csdnimg.cn/062b422bd7ac4d53afd28fb74b2bc94d.png" alt="" loading="lazy"></p>
<p><code v-pre>org.springframework.beans</code>和 <code v-pre>org.springframework.context</code> 这两个包是 IoC 实现的基础，如果想要研究 IoC 相关的源码的话，可以去看看</p>
<h3 id="将一个类声明为-bean-的注解有哪些" tabindex="-1"><a class="header-anchor" href="#将一个类声明为-bean-的注解有哪些" aria-hidden="true">#</a> 将一个类声明为 Bean 的注解有哪些?</h3>
<ul>
<li><code v-pre>@Component</code> ：通用的注解，可标注任意类为 <code v-pre>Spring</code> 组件。如果一个 Bean 不知道属于哪个层，可以使用<code v-pre>@Component</code> 注解标注。</li>
<li><code v-pre>@Repository</code> : 对应持久层即 Dao 层，主要用于数据库相关操作。</li>
<li><code v-pre>@Service</code> : 对应服务层，主要涉及一些复杂的逻辑，需要用到 Dao 层。</li>
<li><code v-pre>@Controller</code> : 对应 Spring MVC 控制层，主要用户接受用户请求并调用 Service 层返回数据给前端页面。</li>
</ul>
<h3 id="component-和-bean-的区别是什么" tabindex="-1"><a class="header-anchor" href="#component-和-bean-的区别是什么" aria-hidden="true">#</a> @Component 和 @Bean 的区别是什么？</h3>
<ul>
<li><code v-pre>@Component</code> 注解作用于类，而<code v-pre>@Bean</code>注解作用于方法。</li>
<li><code v-pre>@Component</code>通常是通过类路径扫描来自动侦测以及自动装配到 Spring 容器中（我们可以使用 <code v-pre>@ComponentScan</code> 注解定义要扫描的路径从中找出标识了需要装配的类自动装配到 Spring 的 bean 容器中）。<code v-pre>@Bean</code> 注解通常是我们在标有该注解的方法中定义产生这个 bean,<code v-pre>@Bean</code>告诉了 Spring 这是某个类的实例，当我需要用它的时候还给我。</li>
<li><code v-pre>@Bean</code> 注解比 <code v-pre>@Component</code> 注解的自定义性更强，而且很多地方我们只能通过 <code v-pre>@Bean</code> 注解来注册 bean。比如当我们引用第三方库中的类需要装配到 <code v-pre>Spring</code>容器时，则只能通过 <code v-pre>@Bean</code>来实现。</li>
</ul>
<p><code v-pre>@Bean</code>注解使用示例：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AppConfig</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">TransferService</span> <span class="token function">transferService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">TransferServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码相当于下面的 xml 配置</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transferService<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.acme.TransferServiceImpl<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面这个例子是通过 <code v-pre>@Component</code> 无法实现的。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">OneService</span> <span class="token function">getService</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token punctuation">(</span>status<span class="token punctuation">)</span>  <span class="token punctuation">{</span>
        when <span class="token number">1</span><span class="token operator">:</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">serviceImpl1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        when <span class="token number">2</span><span class="token operator">:</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">serviceImpl2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        when <span class="token number">3</span><span class="token operator">:</span>
                <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token function">serviceImpl3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="注入-bean-的注解有哪些" tabindex="-1"><a class="header-anchor" href="#注入-bean-的注解有哪些" aria-hidden="true">#</a> 注入 Bean 的注解有哪些？</h3>
<p>Spring 内置的 <code v-pre>@Autowired</code> 以及 JDK 内置的 <code v-pre>@Resource</code> 和 <code v-pre>@Inject</code> 都可以用于注入 Bean。</p>
<table>
<thead>
<tr>
<th>Annotaion</th>
<th>Package</th>
<th>Source</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>@Autowired</code></td>
<td><code v-pre>org.springframework.bean.factory</code></td>
<td>Spring 2.5+</td>
</tr>
<tr>
<td><code v-pre>@Resource</code></td>
<td><code v-pre>javax.annotation</code></td>
<td>Java JSR-250</td>
</tr>
<tr>
<td><code v-pre>@Inject</code></td>
<td><code v-pre>javax.inject</code></td>
<td>Java JSR-330</td>
</tr>
</tbody>
</table>
<p><code v-pre>@Autowired</code> 和<code v-pre>@Resource</code>使用的比较多一些。</p>
<h3 id="autowired-和-resource-的区别是什么" tabindex="-1"><a class="header-anchor" href="#autowired-和-resource-的区别是什么" aria-hidden="true">#</a> @Autowired 和 @Resource 的区别是什么？</h3>
<p><code v-pre>Autowired</code> 属于 Spring 内置的注解，默认的注入方式为<code v-pre>byType</code>（根据类型进行匹配），也就是说会优先根据接口类型去匹配并注入 Bean （接口的实现类）。</p>
<p><strong>这会有什么问题呢？</strong> 当一个接口存在多个实现类的话，<code v-pre>byType</code>这种方式就无法正确注入对象了，因为这个时候 Spring 会同时找到多个满足条件的选择，默认情况下它自己不知道选择哪一个。</p>
<p>这种情况下，注入方式会变为 <code v-pre>byName</code>（根据名称进行匹配），这个名称通常就是类名（首字母小写）。就比如说下面代码中的 <code v-pre>smsService</code> 就是我这里所说的名称，这样应该比较好理解了吧。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// smsService 就是我们上面所说的名称</span>
<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">SmsService</span> smsService<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>举个例子，<code v-pre>SmsService</code> 接口有两个实现类: <code v-pre>SmsServiceImpl1</code>和 <code v-pre>SmsServiceImpl2</code>，且它们都已经被 Spring 容器所管理。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 报错，byName 和 byType 都无法匹配到 bean</span>
<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">SmsService</span> smsService<span class="token punctuation">;</span>
<span class="token comment">// 正确注入 SmsServiceImpl1 对象对应的 bean</span>
<span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">SmsService</span> smsServiceImpl1<span class="token punctuation">;</span>
<span class="token comment">// 正确注入  SmsServiceImpl1 对象对应的 bean</span>
<span class="token comment">// smsServiceImpl1 就是我们上面所说的名称</span>
<span class="token annotation punctuation">@Autowired</span>
<span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">"smsServiceImpl1"</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">SmsService</span> smsService<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还是建议通过 <code v-pre>@Qualifier</code> 注解来显示指定名称而不是依赖变量的名称。</p>
<p><code v-pre>@Resource</code>属于 JDK 提供的注解，默认注入方式为 <code v-pre>byName</code>。如果无法通过名称匹配到对应的 Bean 的话，注入方式会变为<code v-pre>byType</code>。</p>
<p><code v-pre>@Resource</code> 有两个比较重要且日常开发常用的属性：<code v-pre>name</code>（名称）、<code v-pre>type</code>（类型）。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Resource</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">""</span><span class="token punctuation">;</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> <span class="token function">type</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果仅指定 <code v-pre>name</code> 属性则注入方式为<code v-pre>byName</code>，如果仅指定<code v-pre>type</code>属性则注入方式为<code v-pre>byType</code>，如果同时指定<code v-pre>name</code> 和<code v-pre>type</code>属性（不建议这么做）则注入方式为<code v-pre>byType</code>+<code v-pre>byName</code>。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 报错，byName 和 byType 都无法匹配到 bean</span>
<span class="token annotation punctuation">@Resource</span>
<span class="token keyword">private</span> <span class="token class-name">SmsService</span> smsService<span class="token punctuation">;</span>
<span class="token comment">// 正确注入 SmsServiceImpl1 对象对应的 bean</span>
<span class="token annotation punctuation">@Resource</span>
<span class="token keyword">private</span> <span class="token class-name">SmsService</span> smsServiceImpl1<span class="token punctuation">;</span>
<span class="token comment">// 正确注入 SmsServiceImpl1 对象对应的 bean（比较推荐这种方式）</span>
<span class="token annotation punctuation">@Resource</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"smsServiceImpl1"</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">SmsService</span> smsService<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单总结一下：</p>
<ul>
<li><code v-pre>@Autowired</code> 是 Spring 提供的注解，<code v-pre>@Resource</code> 是 JDK 提供的注解。</li>
<li><code v-pre>Autowired</code> 默认的注入方式为<code v-pre>byType</code>（根据类型进行匹配），<code v-pre>@Resource</code>默认注入方式为 <code v-pre>byName</code>（根据名称进行匹配）。</li>
<li>当一个接口存在多个实现类的情况下，<code v-pre>@Autowired</code> 和<code v-pre>@Resource</code>都需要通过名称才能正确匹配到对应的 Bean。<code v-pre>Autowired</code> 可以通过 <code v-pre>@Qualifier</code> 注解来显示指定名称，<code v-pre>@Resource</code>可以通过 <code v-pre>name</code> 属性来显示指定名称。</li>
</ul>
<h3 id="bean-的作用域有哪些" tabindex="-1"><a class="header-anchor" href="#bean-的作用域有哪些" aria-hidden="true">#</a> Bean 的作用域有哪些?</h3>
<p>Spring 中 Bean 的作用域通常有下面几种：</p>
<ul>
<li><strong>singleton</strong> : 唯一 bean 实例，Spring 中的 bean 默认都是单例的，对单例设计模式的应用。</li>
<li><strong>prototype</strong> : 每次请求都会创建一个新的 bean 实例。</li>
<li><strong>request</strong> : 每一次 HTTP 请求都会产生一个新的 bean，该 bean 仅在当前 HTTP request 内有效。</li>
<li><strong>session</strong> : 每一次来自新 session 的 HTTP 请求都会产生一个新的 bean，该 bean 仅在当前 HTTP session 内有效。</li>
<li><strong>global-session</strong> ： 全局 session 作用域，仅仅在基于 portlet 的 web 应用中才有意义，Spring5 已经没有了。Portlet 是能够生成语义代码(例如：HTML)片段的小型 Java Web 插件。它们基于 portlet 容器，可以像 servlet 一样处理 HTTP 请求。但是，与 servlet 不同，每个 portlet 都有不同的会话。</li>
</ul>
<p><strong>如何配置 bean 的作用域呢？</strong></p>
<p>xml 方式：</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>singleton<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>bean</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>注解方式：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>
<span class="token annotation punctuation">@Scope</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token class-name">ConfigurableBeanFactory</span><span class="token punctuation">.</span>SCOPE_PROTOTYPE<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">personPrototype</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单例-bean-的线程安全问题了解吗" tabindex="-1"><a class="header-anchor" href="#单例-bean-的线程安全问题了解吗" aria-hidden="true">#</a> 单例 Bean 的线程安全问题了解吗？</h3>
<p>大部分时候我们并没有在项目中使用多线程，所以很少有人会关注这个问题。单例 Bean 存在线程问题，主要是因为当多个线程操作同一个对象的时候是存在资源竞争的。</p>
<p>常见的有两种解决办法：</p>
<ol>
<li>在 Bean 中尽量避免定义可变的成员变量。</li>
<li>在类中定义一个 <code v-pre>ThreadLocal</code> 成员变量，将需要的可变成员变量保存在 <code v-pre>ThreadLocal</code> 中（推荐的一种方式）。</li>
</ol>
<p>不过，大部分 Bean 实际都是无状态（没有实例变量）的（比如 Dao、Service），这种情况下， Bean 是线程安全的。</p>
<h3 id="bean-的生命周期了解么" tabindex="-1"><a class="header-anchor" href="#bean-的生命周期了解么" aria-hidden="true">#</a> Bean 的生命周期了解么?</h3>
<blockquote>
<p>下面的内容整理自：<a href="https://yemengying.com/2016/07/14/spring-bean-life-cycle/" target="_blank" rel="noopener noreferrer">https://yemengying.com/2016/07/14/spring-bean-life-cycle/<ExternalLinkIcon/></a> ，除了这篇文章，再推荐一篇很不错的文章 ：<a href="https://www.cnblogs.com/zrtqsk/p/3735273.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/zrtqsk/p/3735273.html<ExternalLinkIcon/></a> 。</p>
</blockquote>
<ul>
<li>Bean 容器找到配置文件中 Spring Bean 的定义。</li>
<li>Bean 容器利用 Java Reflection API 创建一个 Bean 的实例。</li>
<li>如果涉及到一些属性值 利用 <code v-pre>set()</code>方法设置一些属性值。</li>
<li>如果 Bean 实现了 <code v-pre>BeanNameAware</code> 接口，调用 <code v-pre>setBeanName()</code>方法，传入 Bean 的名字。</li>
<li>如果 Bean 实现了 <code v-pre>BeanClassLoaderAware</code> 接口，调用 <code v-pre>setBeanClassLoader()</code>方法，传入 <code v-pre>ClassLoader</code>对象的实例。</li>
<li>如果 Bean 实现了 <code v-pre>BeanFactoryAware</code> 接口，调用 <code v-pre>setBeanFactory()</code>方法，传入 <code v-pre>BeanFactory</code>对象的实例。</li>
<li>与上面的类似，如果实现了其他 <code v-pre>*.Aware</code>接口，就调用相应的方法。</li>
<li>如果有和加载这个 Bean 的 Spring 容器相关的 <code v-pre>BeanPostProcessor</code> 对象，执行<code v-pre>postProcessBeforeInitialization()</code> 方法</li>
<li>如果 Bean 实现了<code v-pre>InitializingBean</code>接口，执行<code v-pre>afterPropertiesSet()</code>方法。</li>
<li>如果 Bean 在配置文件中的定义包含 init-method 属性，执行指定的方法。</li>
<li>如果有和加载这个 Bean 的 Spring 容器相关的 <code v-pre>BeanPostProcessor</code> 对象，执行<code v-pre>postProcessAfterInitialization()</code> 方法</li>
<li>当要销毁 Bean 的时候，如果 Bean 实现了 <code v-pre>DisposableBean</code> 接口，执行 <code v-pre>destroy()</code> 方法。</li>
<li>当要销毁 Bean 的时候，如果 Bean 在配置文件中的定义包含 destroy-method 属性，执行指定的方法。</li>
</ul>
<p>图示：</p>
<p><img src="https://images.xiaozhuanlan.com/photo/2019/24bc2bad3ce28144d60d9e0a2edf6c7f.jpg" alt="Spring Bean 生命周期" loading="lazy"></p>
<p>与之比较类似的中文版本:</p>
<p><img src="https://images.xiaozhuanlan.com/photo/2019/b5d264565657a5395c2781081a7483e1.jpg" alt="Spring Bean 生命周期" loading="lazy"></p>
<h2 id="spring-mvc" tabindex="-1"><a class="header-anchor" href="#spring-mvc" aria-hidden="true">#</a> Spring MVC</h2>
<h3 id="说说自己对于-spring-mvc-了解" tabindex="-1"><a class="header-anchor" href="#说说自己对于-spring-mvc-了解" aria-hidden="true">#</a> 说说自己对于 Spring MVC 了解?</h3>
<p>MVC 是模型(Model)、视图(View)、控制器(Controller)的简写，其核心思想是通过将业务逻辑、数据、显示分离来组织代码。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/image-20210809181452421.png" alt="" loading="lazy"></p>
<p>网上有很多人说 MVC 不是设计模式，只是软件设计规范，我个人更倾向于 MVC 同样是众多设计模式中的一种。<strong><a href="https://github.com/iluwatar/java-design-patterns" target="_blank" rel="noopener noreferrer">java-design-patterns<ExternalLinkIcon/></a></strong> 项目中就有关于 MVC 的相关介绍。</p>
<p><img src="https://img-blog.csdnimg.cn/159b3d3e70dd45e6afa81bf06d09264e.png" alt="" loading="lazy"></p>
<p>想要真正理解 Spring MVC，我们先来看看 Model 1 和 Model 2 这两个没有 Spring MVC 的时代。</p>
<p><strong>Model 1 时代</strong></p>
<p>很多学 Java 后端比较晚的朋友可能并没有接触过 Model 1 时代下的 JavaWeb 应用开发。在 Model1 模式下，整个 Web 应用几乎全部用 JSP 页面组成，只用少量的 JavaBean 来处理数据库连接、访问等操作。</p>
<p>这个模式下 JSP 即是控制层（Controller）又是表现层（View）。显而易见，这种模式存在很多问题。比如控制逻辑和表现逻辑混杂在一起，导致代码重用率极低；再比如前端和后端相互依赖，难以进行测试维护并且开发效率极低。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/mvc-mode1.png" alt="mvc-mode1" loading="lazy"></p>
<p><strong>Model 2 时代</strong></p>
<p>学过 Servlet 并做过相关 Demo 的朋友应该了解“Java Bean(Model)+ JSP（View）+Servlet（Controller） ”这种开发模式，这就是早期的 JavaWeb MVC 开发模式。</p>
<ul>
<li>Model:系统涉及的数据，也就是 dao 和 bean。</li>
<li>View：展示模型中的数据，只是用来展示。</li>
<li>Controller：处理用户请求都发送给 ，返回数据给 JSP 并展示给用户。</li>
</ul>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/mvc-model2.png" alt="" loading="lazy"></p>
<p>Model2 模式下还存在很多问题，Model2 的抽象和封装程度还远远不够，使用 Model2 进行开发时不可避免地会重复造轮子，这就大大降低了程序的可维护性和复用性。</p>
<p>于是，很多 JavaWeb 开发相关的 MVC 框架应运而生比如 Struts2，但是 Struts2 比较笨重。</p>
<p><strong>Spring MVC 时代</strong></p>
<p>随着 Spring 轻量级开发框架的流行，Spring 生态圈出现了 Spring MVC 框架， Spring MVC 是当前最优秀的 MVC 框架。相比于 Struts2 ， Spring MVC 使用更加简单和方便，开发效率更高，并且 Spring MVC 运行速度更快。</p>
<p>MVC 是一种设计模式，Spring MVC 是一款很优秀的 MVC 框架。Spring MVC 可以帮助我们进行更简洁的 Web 层的开发，并且它天生与 Spring 框架集成。Spring MVC 下我们一般把后端项目分为 Service 层（处理业务）、Dao 层（数据库操作）、Entity 层（实体类）、Controller 层(控制层，返回数据给前台页面)。</p>
<h3 id="springmvc-工作原理了解吗" tabindex="-1"><a class="header-anchor" href="#springmvc-工作原理了解吗" aria-hidden="true">#</a> SpringMVC 工作原理了解吗?</h3>
<p><strong>Spring MVC 原理如下图所示：</strong></p>
<blockquote>
<p>SpringMVC 工作原理的图解我没有自己画，直接图省事在网上找了一个非常清晰直观的，原出处不明。</p>
</blockquote>
<p><img src="https://img-blog.csdnimg.cn/img_convert/de6d2b213f112297298f3e223bf08f28.png" alt="" loading="lazy"></p>
<p><strong>流程说明（重要）：</strong></p>
<ol>
<li>客户端（浏览器）发送请求，直接请求到 <code v-pre>DispatcherServlet</code>。</li>
<li><code v-pre>DispatcherServlet</code> 根据请求信息调用 <code v-pre>HandlerMapping</code>，解析请求对应的 <code v-pre>Handler</code>。</li>
<li>解析到对应的 <code v-pre>Handler</code>（也就是我们平常说的 <code v-pre>Controller</code> 控制器）后，开始由 <code v-pre>HandlerAdapter</code> 适配器处理。</li>
<li><code v-pre>HandlerAdapter</code> 会根据 <code v-pre>Handler</code>来调用真正的处理器开处理请求，并处理相应的业务逻辑。</li>
<li>处理器处理完业务后，会返回一个 <code v-pre>ModelAndView</code> 对象，<code v-pre>Model</code> 是返回的数据对象，<code v-pre>View</code> 是个逻辑上的 <code v-pre>View</code>。</li>
<li><code v-pre>ViewResolver</code> 会根据逻辑 <code v-pre>View</code> 查找实际的 <code v-pre>View</code>。</li>
<li><code v-pre>DispaterServlet</code> 把返回的 <code v-pre>Model</code> 传给 <code v-pre>View</code>（视图渲染）。</li>
<li>把 <code v-pre>View</code> 返回给请求者（浏览器）</li>
</ol>
<h2 id="spring-框架中用到了哪些设计模式" tabindex="-1"><a class="header-anchor" href="#spring-框架中用到了哪些设计模式" aria-hidden="true">#</a> Spring 框架中用到了哪些设计模式？</h2>
<p>关于下面一些设计模式的详细介绍，可以看笔主前段时间的原创文章<a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247485303&amp;idx=1&amp;sn=9e4626a1e3f001f9b0d84a6fa0cff04a&amp;chksm=cea248bcf9d5c1aaf48b67cc52bac74eb29d6037848d6cf213b0e5466f2d1fda970db700ba41&amp;token=255050878&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">《面试官:“谈谈 Spring 中都用到了那些设计模式?”。》<ExternalLinkIcon/></a> 。</p>
<ul>
<li><strong>工厂设计模式</strong> : Spring 使用工厂模式通过 <code v-pre>BeanFactory</code>、<code v-pre>ApplicationContext</code> 创建 bean 对象。</li>
<li><strong>代理设计模式</strong> : Spring AOP 功能的实现。</li>
<li><strong>单例设计模式</strong> : Spring 中的 Bean 默认都是单例的。</li>
<li><strong>模板方法模式</strong> : Spring 中 <code v-pre>jdbcTemplate</code>、<code v-pre>hibernateTemplate</code> 等以 Template 结尾的对数据库操作的类，它们就使用到了模板模式。</li>
<li><strong>包装器设计模式</strong> : 我们的项目需要连接多个数据库，而且不同的客户在每次访问中根据需要会去访问不同的数据库。这种模式让我们可以根据客户的需求能够动态切换不同的数据源。</li>
<li><strong>观察者模式:</strong> Spring 事件驱动模型就是观察者模式很经典的一个应用。</li>
<li><strong>适配器模式</strong> : Spring AOP 的增强或通知(Advice)使用到了适配器模式、spring MVC 中也是用到了适配器模式适配<code v-pre>Controller</code>。</li>
<li>......</li>
</ul>
<h2 id="spring-事务" tabindex="-1"><a class="header-anchor" href="#spring-事务" aria-hidden="true">#</a> Spring 事务</h2>
<p>Spring/SpringBoot 模块下专门有一篇是讲 Spring 事务的，总结的非常详细，通俗易懂。</p>
<h3 id="spring-管理事务的方式有几种" tabindex="-1"><a class="header-anchor" href="#spring-管理事务的方式有几种" aria-hidden="true">#</a> Spring 管理事务的方式有几种？</h3>
<ul>
<li><strong>编程式事务</strong> ： 在代码中硬编码(不推荐使用) : 通过 <code v-pre>TransactionTemplate</code>或者 <code v-pre>TransactionManager</code> 手动管理事务，实际应用中很少使用，但是对于你理解 Spring 事务管理原理有帮助。</li>
<li><strong>声明式事务</strong> ： 在 XML 配置文件中配置或者直接基于注解（推荐使用） : 实际是通过 AOP 实现（基于<code v-pre>@Transactional</code> 的全注解方式使用最多）</li>
</ul>
<h3 id="spring-事务中哪几种事务传播行为" tabindex="-1"><a class="header-anchor" href="#spring-事务中哪几种事务传播行为" aria-hidden="true">#</a> Spring 事务中哪几种事务传播行为?</h3>
<p><strong>事务传播行为是为了解决业务层方法之间互相调用的事务问题</strong>。</p>
<p>当事务方法被另一个事务方法调用时，必须指定事务应该如何传播。例如：方法可能继续在现有事务中运行，也可能开启一个新事务，并在自己的事务中运行。</p>
<p>正确的事务传播行为可能的值如下:</p>
<p><strong>1.<code v-pre>TransactionDefinition.PROPAGATION_REQUIRED</code></strong></p>
<p>使用的最多的一个事务传播行为，我们平时经常使用的<code v-pre>@Transactional</code>注解默认使用就是这个事务传播行为。如果当前存在事务，则加入该事务；如果当前没有事务，则创建一个新的事务。</p>
<p><strong><code v-pre>2.TransactionDefinition.PROPAGATION_REQUIRES_NEW</code></strong></p>
<p>创建一个新的事务，如果当前存在事务，则把当前事务挂起。也就是说不管外部方法是否开启事务，<code v-pre>Propagation.REQUIRES_NEW</code>修饰的内部方法会新开启自己的事务，且开启的事务相互独立，互不干扰。</p>
<p><strong>3.<code v-pre>TransactionDefinition.PROPAGATION_NESTED</code></strong></p>
<p>如果当前存在事务，则创建一个事务作为当前事务的嵌套事务来运行；如果当前没有事务，则该取值等价于<code v-pre>TransactionDefinition.PROPAGATION_REQUIRED</code>。</p>
<p><strong>4.<code v-pre>TransactionDefinition.PROPAGATION_MANDATORY</code></strong></p>
<p>如果当前存在事务，则加入该事务；如果当前没有事务，则抛出异常。（mandatory：强制性）</p>
<p>这个使用的很少。</p>
<p>若是错误的配置以下 3 种事务传播行为，事务将不会发生回滚：</p>
<ul>
<li><strong><code v-pre>TransactionDefinition.PROPAGATION_SUPPORTS</code></strong>: 如果当前存在事务，则加入该事务；如果当前没有事务，则以非事务的方式继续运行。</li>
<li><strong><code v-pre>TransactionDefinition.PROPAGATION_NOT_SUPPORTED</code></strong>: 以非事务方式运行，如果当前存在事务，则把当前事务挂起。</li>
<li><strong><code v-pre>TransactionDefinition.PROPAGATION_NEVER</code></strong>: 以非事务方式运行，如果当前存在事务，则抛出异常。</li>
</ul>
<h3 id="spring-事务中的隔离级别有哪几种" tabindex="-1"><a class="header-anchor" href="#spring-事务中的隔离级别有哪几种" aria-hidden="true">#</a> Spring 事务中的隔离级别有哪几种?</h3>
<p>和事务传播行为这块一样，为了方便使用，Spring 也相应地定义了一个枚举类：<code v-pre>Isolation</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Isolation</span> <span class="token punctuation">{</span>

    <span class="token function">DEFAULT</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>ISOLATION_DEFAULT<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">READ_UNCOMMITTED</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>ISOLATION_READ_UNCOMMITTED<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">READ_COMMITTED</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>ISOLATION_READ_COMMITTED<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">REPEATABLE_READ</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>ISOLATION_REPEATABLE_READ<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">SERIALIZABLE</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>ISOLATION_SERIALIZABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>

    <span class="token class-name">Isolation</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面我依次对每一种事务隔离级别进行介绍：</p>
<ul>
<li><strong><code v-pre>TransactionDefinition.ISOLATION_DEFAULT</code></strong> :使用后端数据库默认的隔离级别，MySQL 默认采用的 <code v-pre>REPEATABLE_READ</code> 隔离级别 Oracle 默认采用的 <code v-pre>READ_COMMITTED</code> 隔离级别.</li>
<li><strong><code v-pre>TransactionDefinition.ISOLATION_READ_UNCOMMITTED</code></strong> :最低的隔离级别，使用这个隔离级别很少，因为它允许读取尚未提交的数据变更，<strong>可能会导致脏读、幻读或不可重复读</strong></li>
<li><strong><code v-pre>TransactionDefinition.ISOLATION_READ_COMMITTED</code></strong> : 允许读取并发事务已经提交的数据，<strong>可以阻止脏读，但是幻读或不可重复读仍有可能发生</strong></li>
<li><strong><code v-pre>TransactionDefinition.ISOLATION_REPEATABLE_READ</code></strong> : 对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，<strong>可以阻止脏读和不可重复读，但幻读仍有可能发生。</strong></li>
<li><strong><code v-pre>TransactionDefinition.ISOLATION_SERIALIZABLE</code></strong> : 最高的隔离级别，完全服从 ACID 的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，<strong>该级别可以防止脏读、不可重复读以及幻读</strong>。但是这将严重影响程序的性能。通常情况下也不会用到该级别。</li>
</ul>
<h3 id="transactional-rollbackfor-exception-class-注解了解吗" tabindex="-1"><a class="header-anchor" href="#transactional-rollbackfor-exception-class-注解了解吗" aria-hidden="true">#</a> @Transactional(rollbackFor = Exception.class)注解了解吗？</h3>
<p><code v-pre>Exception</code> 分为运行时异常 <code v-pre>RuntimeException</code> 和非运行时异常。事务管理对于企业应用来说是至关重要的，即使出现异常情况，它也可以保证数据的一致性。</p>
<p>当 <code v-pre>@Transactional</code> 注解作用于类上时，该类的所有 public 方法将都具有该类型的事务属性，同时，我们也可以在方法级别使用该标注来覆盖类级别的定义。如果类或者方法加了这个注解，那么这个类里面的方法抛出异常，就会回滚，数据库里面的数据也会回滚。</p>
<p>在 <code v-pre>@Transactional</code> 注解中如果不配置<code v-pre>rollbackFor</code>属性,那么事务只会在遇到<code v-pre>RuntimeException</code>的时候才会回滚，加上 <code v-pre>rollbackFor=Exception.class</code>,可以让事务在遇到非运行时异常时也回滚。</p>
<h2 id="jpa" tabindex="-1"><a class="header-anchor" href="#jpa" aria-hidden="true">#</a> JPA</h2>
<h3 id="如何使用-jpa-在数据库中非持久化一个字段" tabindex="-1"><a class="header-anchor" href="#如何使用-jpa-在数据库中非持久化一个字段" aria-hidden="true">#</a> 如何使用 JPA 在数据库中非持久化一个字段？</h3>
<p>假如我们有下面一个类：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Entity</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">"USER"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Id</span>
    <span class="token annotation punctuation">@GeneratedValue</span><span class="token punctuation">(</span>strategy <span class="token operator">=</span> <span class="token class-name">GenerationType</span><span class="token punctuation">.</span>AUTO<span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">"ID"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">"USER_NAME"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> userName<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Column</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">"PASSWORD"</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> password<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> secrect<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果我们想让<code v-pre>secrect</code> 这个字段不被持久化，也就是不被数据库存储怎么办？我们可以采用下面几种方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">static</span> <span class="token class-name">String</span> transient1<span class="token punctuation">;</span> <span class="token comment">// not persistent because of static</span>
<span class="token keyword">final</span> <span class="token class-name">String</span> transient2 <span class="token operator">=</span> <span class="token string">"Satish"</span><span class="token punctuation">;</span> <span class="token comment">// not persistent because of final</span>
<span class="token keyword">transient</span> <span class="token class-name">String</span> transient3<span class="token punctuation">;</span> <span class="token comment">// not persistent because of transient</span>
<span class="token annotation punctuation">@Transient</span>
<span class="token class-name">String</span> transient4<span class="token punctuation">;</span> <span class="token comment">// not persistent because of @Transient</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般使用后面两种方式比较多，我个人使用注解的方式比较多。</p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>《Spring 技术内幕》</li>
<li><a href="http://www.cnblogs.com/wmyskxz/p/8820371.html" target="_blank" rel="noopener noreferrer">http://www.cnblogs.com/wmyskxz/p/8820371.html<ExternalLinkIcon/></a></li>
<li><a href="https://www.journaldev.com/2696/spring-interview-questions-and-answers" target="_blank" rel="noopener noreferrer">https://www.journaldev.com/2696/spring-interview-questions-and-answers<ExternalLinkIcon/></a></li>
<li><a href="https://www.edureka.co/blog/interview-questions/spring-interview-questions/" target="_blank" rel="noopener noreferrer">https://www.edureka.co/blog/interview-questions/spring-interview-questions/<ExternalLinkIcon/></a></li>
<li><a href="https://www.cnblogs.com/clwydjgs/p/9317849.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/clwydjgs/p/9317849.html<ExternalLinkIcon/></a></li>
<li><a href="https://howtodoinjava.com/interview-questions/top-spring-interview-questions-with-answers/" target="_blank" rel="noopener noreferrer">https://howtodoinjava.com/interview-questions/top-spring-interview-questions-with-answers/<ExternalLinkIcon/></a></li>
<li><a href="http://www.tomaszezula.com/2014/02/09/spring-series-part-5-component-vs-bean/" target="_blank" rel="noopener noreferrer">http://www.tomaszezula.com/2014/02/09/spring-series-part-5-component-vs-bean/<ExternalLinkIcon/></a></li>
<li><a href="https://stackoverflow.com/questions/34172888/difference-between-bean-and-autowired" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/34172888/difference-between-bean-and-autowired<ExternalLinkIcon/></a></li>
</ul>
</div></template>
