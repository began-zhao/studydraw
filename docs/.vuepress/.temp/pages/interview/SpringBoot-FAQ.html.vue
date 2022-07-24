<template><div><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h2>
<h3 id="说说-spring-boot-和-spring-的关系" tabindex="-1"><a class="header-anchor" href="#说说-spring-boot-和-spring-的关系" aria-hidden="true">#</a> 说说 Spring Boot 和 Spring 的关系</h3>
<p>spring boot 我理解就是把 spring spring mvc spring data jpa 等等的一些常用的常用的基础框架组合起来，提供默认的配置，然后提供可插拔的设计，就是各种 starter ，来方便开发者使用这一系列的技术，套用官方的一句话， spring 家族发展到今天，已经很庞大了，作为一个开发者，如果想要使用 spring 家族一系列的技术，需要一个一个的搞配置，然后还有个版本兼容性问题，其实挺麻烦的，偶尔也会有小坑出现，其实蛮影响开发进度， spring boot 就是来解决这个问题，提供了一个解决方案吧，可以先不关心如何配置，可以快速的启动开发，进行业务逻辑编写，各种需要的技术，加入 starter 就配置好了，直接使用，可以说追求开箱即用的效果吧.</p>
<p>如果说 Spring 是一个家族，其实就是；它包含 spring core, spring mvc，spring boot与spring Cloud 等等；</p>
<p>那 spring boot 就像是这个家族中的大管家</p>
<h3 id="什么是-spring-boot" tabindex="-1"><a class="header-anchor" href="#什么是-spring-boot" aria-hidden="true">#</a> 什么是 Spring Boot？</h3>
<p>Spring Boot 是 Spring 开源组织下的子项目，是 Spring 组件一站式解决方案，主要是简化了使用 Spring 的难度，简省了繁重的配置，提供了各种启动器，开发者能快速上手。</p>
<h3 id="spring-boot-有哪些优点" tabindex="-1"><a class="header-anchor" href="#spring-boot-有哪些优点" aria-hidden="true">#</a> Spring Boot 有哪些优点？</h3>
<p>Spring Boot 主要有如下优点：</p>
<ol>
<li>容易上手，提升开发效率，为 Spring 开发提供一个更快、更广泛的入门体验。</li>
<li>开箱即用，远离繁琐的配置。</li>
<li>提供了一系列大型项目通用的非业务性功能，例如：内嵌服务器、安全管理、运行数据监控、运行状况检查和外部化配置等。</li>
<li>没有代码生成，也不需要XML配置。</li>
<li>避免大量的 Maven 导入和各种版本冲突。</li>
</ol>
<h3 id="spring-boot-的核心注解是哪个-它主要由哪几个注解组成的" tabindex="-1"><a class="header-anchor" href="#spring-boot-的核心注解是哪个-它主要由哪几个注解组成的" aria-hidden="true">#</a> Spring Boot 的核心注解是哪个？它主要由哪几个注解组成的？</h3>
<p>启动类上面的注解是@SpringBootApplication，它也是 Spring Boot 的核心注解，主要组合包含了以下 3 个注解：</p>
<p>@SpringBootConfiguration：组合了 @Configuration 注解，实现配置文件的功能。</p>
<p>@EnableAutoConfiguration：打开自动配置的功能，也可以关闭某个自动配置的选项，如关闭数据源自动配置功能： @SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })。</p>
<p>@ComponentScan：Spring组件扫描。</p>
<h3 id="说说spring-boot-启动原理" tabindex="-1"><a class="header-anchor" href="#说说spring-boot-启动原理" aria-hidden="true">#</a> 说说Spring Boot 启动原理</h3>
<p>SpringBoot 将所有的常见开发功能，分成了一个个场景启动器（starter），这样我们需要开发什么功能，就导入什么场景启动器依赖即可</p>
<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2>
<h3 id="什么是-javaconfig" tabindex="-1"><a class="header-anchor" href="#什么是-javaconfig" aria-hidden="true">#</a> 什么是 JavaConfig？</h3>
<p>Spring JavaConfig 是 Spring 社区的产品，它提供了配置 Spring IoC 容器的纯 Java 方法。因此它有助于避免使用 XML 配置。使用 JavaConfig 的优点在于：</p>
<ol>
<li>
<p>面向对象的配置。由于配置被定义为 JavaConfig 中的类，因此用户可以充分利用 Java 中的面向对象功能。一个配置类可以继承另一个，重写它的@Bean 方法等。</p>
</li>
<li>
<p>减少或消除 XML 配置。基于依赖注入原则的外化配置的好处已被证明。但是，许多开发人员不希望在 XML 和 Java 之间来回切换。JavaConfig 为开发人员提供了一种纯 Java 方法来配置与 XML 配置概念相似的 Spring 容器。从技术角度来讲，只使用 JavaConfig 配置类来配置容器是可行的，但实际上很多人认为将JavaConfig 与 XML 混合匹配是理想的。</p>
</li>
<li>
<p>类型安全和重构友好。JavaConfig 提供了一种类型安全的方法来配置 Spring容器。由于 Java 5.0 对泛型的支持，现在可以按类型而不是按名称检索 bean，不需要任何强制转换或基于字符串的查找。</p>
</li>
</ol>
<h3 id="spring-boot-自动配置原理是什么" tabindex="-1"><a class="header-anchor" href="#spring-boot-自动配置原理是什么" aria-hidden="true">#</a> Spring Boot 自动配置原理是什么？</h3>
<p>注解 @EnableAutoConfiguration, @Configuration, @ConditionalOnClass 就是自动配置的核心，</p>
<p>@EnableAutoConfiguration 给容器导入META-INF/spring.factories 里定义的自动配置类。</p>
<p>筛选有效的自动配置类。</p>
<p>每一个自动配置类结合对应的 xxxProperties.java 读取配置文件进行自动配置功能</p>
<h3 id="你如何理解-spring-boot-配置加载顺序" tabindex="-1"><a class="header-anchor" href="#你如何理解-spring-boot-配置加载顺序" aria-hidden="true">#</a> 你如何理解 Spring Boot 配置加载顺序？</h3>
<p>在 Spring Boot 里面，可以使用以下几种方式来加载配置。</p>
<p>1）properties文件；</p>
<p>2）YAML文件；</p>
<p>3）系统环境变量；</p>
<p>4）命令行参数；</p>
<p>等等……</p>
<h3 id="什么是-yaml" tabindex="-1"><a class="header-anchor" href="#什么是-yaml" aria-hidden="true">#</a> 什么是 YAML？</h3>
<p>YAML 是一种人类可读的数据序列化语言。它通常用于配置文件。与属性文件相比，如果我们想要在配置文件中添加复杂的属性，YAML 文件就更加结构化，而且更少混淆。可以看出 YAML 具有分层配置数据。</p>
<h3 id="yaml-配置的优势在哪里" tabindex="-1"><a class="header-anchor" href="#yaml-配置的优势在哪里" aria-hidden="true">#</a> YAML 配置的优势在哪里 ?</h3>
<p>YAML 现在可以算是非常流行的一种配置文件格式了，无论是前端还是后端，都可以见到 YAML 配置。那么 YAML 配置和传统的 properties 配置相比到底有哪些优势呢？</p>
<ol>
<li>配置有序，在一些特殊的场景下，配置有序很关键</li>
<li>支持数组，数组中的元素可以是基本数据类型也可以是对象</li>
<li>简洁</li>
</ol>
<p>相比 properties 配置文件，YAML 还有一个缺点，就是不支持 @PropertySource 注解导入自定义的 YAML 配置。</p>
<h3 id="spring-boot-是否可以使用-xml-配置" tabindex="-1"><a class="header-anchor" href="#spring-boot-是否可以使用-xml-配置" aria-hidden="true">#</a> Spring Boot 是否可以使用 XML 配置 ?</h3>
<p>Spring Boot 推荐使用 Java 配置而非 XML 配置，但是 Spring Boot 中也可以使用 XML 配置，通过 @ImportResource 注解可以引入一个 XML 配置。</p>
<h3 id="spring-boot-核心配置文件是什么-bootstrap-properties-和-application-properties-有何区别" tabindex="-1"><a class="header-anchor" href="#spring-boot-核心配置文件是什么-bootstrap-properties-和-application-properties-有何区别" aria-hidden="true">#</a> spring boot 核心配置文件是什么？bootstrap.properties 和 application.properties 有何区别 ?</h3>
<p>单纯做 Spring Boot 开发，可能不太容易遇到 bootstrap.properties 配置文件，但是在结合 Spring Cloud 时，这个配置就会经常遇到了，特别是在需要加载一些远程配置文件的时侯。</p>
<p>spring boot 核心的两个配置文件：</p>
<ul>
<li>bootstrap (. yml 或者 . properties)：boostrap 由父 ApplicationContext 加载的，比 applicaton 优先加载，配置在应用程序上下文的引导阶段生效。一般来说我们在 Spring Cloud Config 或者 Nacos 中会用到它。且 boostrap 里面的属性不能被覆盖；</li>
<li>application (. yml 或者 . properties)： 由ApplicatonContext 加载，用于 spring boot 项目的自动化配置。</li>
</ul>
<h3 id="什么是-spring-profiles" tabindex="-1"><a class="header-anchor" href="#什么是-spring-profiles" aria-hidden="true">#</a> 什么是 Spring Profiles？</h3>
<p>Spring Profiles 允许用户根据配置文件（dev，test，prod 等）来注册 bean。因此，当应用程序在开发中运行时，只有某些 bean 可以加载，而在 PRODUCTION中，某些其他 bean 可以加载。假设我们的要求是 Swagger 文档仅适用于 QA 环境，并且禁用所有其他文档。这可以使用配置文件来完成。Spring Boot 使得使用配置文件非常简单。</p>
<h3 id="如何在自定义端口上运行-spring-boot-应用程序" tabindex="-1"><a class="header-anchor" href="#如何在自定义端口上运行-spring-boot-应用程序" aria-hidden="true">#</a> 如何在自定义端口上运行 Spring Boot 应用程序？</h3>
<p>为了在自定义端口上运行 Spring Boot 应用程序，您可以在application.properties 中指定端口。server.port = 8090</p>
<h2 id="安全" tabindex="-1"><a class="header-anchor" href="#安全" aria-hidden="true">#</a> 安全</h2>
<h3 id="如何实现-spring-boot-应用程序的安全性" tabindex="-1"><a class="header-anchor" href="#如何实现-spring-boot-应用程序的安全性" aria-hidden="true">#</a> 如何实现 Spring Boot 应用程序的安全性？</h3>
<p>为了实现 Spring Boot 的安全性，我们使用 spring-boot-starter-security 依赖项，并且必须添加安全配置。它只需要很少的代码。配置类将必须扩展WebSecurityConfigurerAdapter 并覆盖其方法。</p>
<h3 id="比较一下-spring-security-和-shiro-各自的优缺点" tabindex="-1"><a class="header-anchor" href="#比较一下-spring-security-和-shiro-各自的优缺点" aria-hidden="true">#</a> 比较一下 Spring Security 和 Shiro 各自的优缺点 ?</h3>
<p>由于 Spring Boot 官方提供了大量的非常方便的开箱即用的 Starter ，包括 Spring Security 的 Starter ，使得在 Spring Boot 中使用 Spring Security 变得更加容易，甚至只需要添加一个依赖就可以保护所有的接口，所以，如果是 Spring Boot 项目，一般选择 Spring Security 。当然这只是一个建议的组合，单纯从技术上来说，无论怎么组合，都是没有问题的。Shiro 和 Spring Security 相比，主要有如下一些特点：</p>
<ol>
<li>Spring Security 是一个重量级的安全管理框架；Shiro 则是一个轻量级的安全管理框架</li>
<li>Spring Security 概念复杂，配置繁琐；Shiro 概念简单、配置简单</li>
<li>Spring Security 功能强大；Shiro 功能简单</li>
</ol>
<h3 id="spring-boot-中如何解决跨域问题" tabindex="-1"><a class="header-anchor" href="#spring-boot-中如何解决跨域问题" aria-hidden="true">#</a> Spring Boot 中如何解决跨域问题 ?</h3>
<p>跨域可以在前端通过 JSONP 来解决，但是 JSONP 只可以发送 GET 请求，无法发送其他类型的请求，在 RESTful 风格的应用中，就显得非常鸡肋，因此我们推荐在后端通过 （CORS，Cross-origin resource sharing） 来解决跨域问题。这种解决方案并非 Spring Boot 特有的，在传统的 SSM 框架中，就可以通过 CORS 来解决跨域问题，只不过之前我们是在 XML 文件中配置 CORS ，现在可以通过实现WebMvcConfigurer接口然后重写addCorsMappings方法解决跨域问题。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addCorsMappings</span><span class="token punctuation">(</span><span class="token class-name">CorsRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        registry<span class="token punctuation">.</span><span class="token function">addMapping</span><span class="token punctuation">(</span><span class="token string">"/**"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">allowedOrigins</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">allowCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token string">"GET"</span><span class="token punctuation">,</span> <span class="token string">"POST"</span><span class="token punctuation">,</span> <span class="token string">"PUT"</span><span class="token punctuation">,</span> <span class="token string">"DELETE"</span><span class="token punctuation">,</span> <span class="token string">"OPTIONS"</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">maxAge</span><span class="token punctuation">(</span><span class="token number">3600</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token number">12345678910111213</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>项目中前后端分离部署，所以需要解决跨域的问题。
我们使用cookie存放用户登录的信息，在spring拦截器进行权限控制，当权限不符合时，直接返回给用户固定的json结果。
当用户登录以后，正常使用；当用户退出登录状态时或者token过期时，由于拦截器和跨域的顺序有问题，出现了跨域的现象。
我们知道一个http请求，先走filter，到达servlet后才进行拦截器的处理，如果我们把cors放在filter里，就可以优先于权限拦截器执行。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">CorsFilter</span> <span class="token function">corsFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">CorsConfiguration</span> corsConfiguration <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CorsConfiguration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        corsConfiguration<span class="token punctuation">.</span><span class="token function">addAllowedOrigin</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        corsConfiguration<span class="token punctuation">.</span><span class="token function">addAllowedHeader</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        corsConfiguration<span class="token punctuation">.</span><span class="token function">addAllowedMethod</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        corsConfiguration<span class="token punctuation">.</span><span class="token function">setAllowCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">UrlBasedCorsConfigurationSource</span> urlBasedCorsConfigurationSource <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UrlBasedCorsConfigurationSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        urlBasedCorsConfigurationSource<span class="token punctuation">.</span><span class="token function">registerCorsConfiguration</span><span class="token punctuation">(</span><span class="token string">"/**"</span><span class="token punctuation">,</span> corsConfiguration<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CorsFilter</span><span class="token punctuation">(</span>urlBasedCorsConfigurationSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token number">12345678910111213141516</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="什么是-csrf-攻击" tabindex="-1"><a class="header-anchor" href="#什么是-csrf-攻击" aria-hidden="true">#</a> 什么是 CSRF 攻击？</h3>
<p>CSRF 代表跨站请求伪造。这是一种攻击，迫使最终用户在当前通过身份验证的Web 应用程序上执行不需要的操作。CSRF 攻击专门针对状态改变请求，而不是数据窃取，因为攻击者无法查看对伪造请求的响应。</p>
<h2 id="监视器" tabindex="-1"><a class="header-anchor" href="#监视器" aria-hidden="true">#</a> 监视器</h2>
<h3 id="spring-boot-中的监视器是什么" tabindex="-1"><a class="header-anchor" href="#spring-boot-中的监视器是什么" aria-hidden="true">#</a> Spring Boot 中的监视器是什么？</h3>
<p>Spring boot actuator 是 spring 启动框架中的重要功能之一。Spring boot 监视器可帮助您访问生产环境中正在运行的应用程序的当前状态。有几个指标必须在生产环境中进行检查和监控。即使一些外部应用程序可能正在使用这些服务来向相关人员触发警报消息。监视器模块公开了一组可直接作为 HTTP URL 访问的REST 端点来检查状态。</p>
<h3 id="如何在-spring-boot-中禁用-actuator-端点安全性" tabindex="-1"><a class="header-anchor" href="#如何在-spring-boot-中禁用-actuator-端点安全性" aria-hidden="true">#</a> 如何在 Spring Boot 中禁用 Actuator 端点安全性？</h3>
<p>默认情况下，所有敏感的 HTTP 端点都是安全的，只有具有 ACTUATOR 角色的用户才能访问它们。安全性是使用标准的 HttpServletRequest.isUserInRole 方法实施的。 我们可以使用来禁用安全性。只有在执行机构端点在防火墙后访问时，才建议禁用安全性。</p>
<h3 id="我们如何监视所有-spring-boot-微服务" tabindex="-1"><a class="header-anchor" href="#我们如何监视所有-spring-boot-微服务" aria-hidden="true">#</a> 我们如何监视所有 Spring Boot 微服务？</h3>
<p>Spring Boot 提供监视器端点以监控各个微服务的度量。这些端点对于获取有关应用程序的信息（如它们是否已启动）以及它们的组件（如数据库等）是否正常运行很有帮助。但是，使用监视器的一个主要缺点或困难是，我们必须单独打开应用程序的知识点以了解其状态或健康状况。想象一下涉及 50 个应用程序的微服务，管理员将不得不击中所有 50 个应用程序的执行终端。为了帮助我们处理这种情况，我们将使用位于的开源项目。 它建立在 Spring Boot Actuator 之上，它提供了一个 Web UI，使我们能够可视化多个应用程序的度量。</p>
<h2 id="整合第三方项目" tabindex="-1"><a class="header-anchor" href="#整合第三方项目" aria-hidden="true">#</a> 整合第三方项目</h2>
<h3 id="什么是-websockets" tabindex="-1"><a class="header-anchor" href="#什么是-websockets" aria-hidden="true">#</a> 什么是 WebSockets？</h3>
<p>WebSocket 是一种计算机通信协议，通过单个 TCP 连接提供全双工通信信道。</p>
<p>1、WebSocket 是双向的 -使用 WebSocket 客户端或服务器可以发起消息发送。</p>
<p>2、WebSocket 是全双工的 -客户端和服务器通信是相互独立的。</p>
<p>3、单个 TCP 连接 -初始连接使用 HTTP，然后将此连接升级到基于套接字的连接。然后这个单一连接用于所有未来的通信</p>
<p>4、Light -与 http 相比，WebSocket 消息数据交换要轻得多。</p>
<h3 id="什么是-spring-data" tabindex="-1"><a class="header-anchor" href="#什么是-spring-data" aria-hidden="true">#</a> 什么是 Spring Data ?</h3>
<p>Spring Data 是 Spring 的一个子项目。用于简化数据库访问，支持NoSQL 和 关系数据存储。其主要目标是使数据库的访问变得方便快捷。Spring Data 具有如下特点：</p>
<p>SpringData 项目支持 NoSQL 存储：</p>
<ol>
<li>MongoDB （文档数据库）</li>
<li>Neo4j（图形数据库）</li>
<li>Redis（键/值存储）</li>
<li>Hbase（列族数据库）</li>
</ol>
<p>SpringData 项目所支持的关系数据存储技术：</p>
<ol>
<li>JDBC</li>
<li>JPA</li>
</ol>
<p>Spring Data Jpa 致力于减少数据访问层 (DAO) 的开发量. 开发者唯一要做的，就是声明持久层的接口，其他都交给 Spring Data JPA 来帮你完成！Spring Data JPA 通过规范方法的名字，根据符合规范的名字来确定方法需要实现什么样的逻辑。</p>
<h3 id="什么是-spring-batch" tabindex="-1"><a class="header-anchor" href="#什么是-spring-batch" aria-hidden="true">#</a> 什么是 Spring Batch？</h3>
<p>Spring Boot Batch 提供可重用的函数，这些函数在处理大量记录时非常重要，包括日志/跟踪，事务管理，作业处理统计信息，作业重新启动，跳过和资源管理。它还提供了更先进的技术服务和功能，通过优化和分区技术，可以实现极高批量和高性能批处理作业。简单以及复杂的大批量批处理作业可以高度可扩展的方式利用框架处理重要大量的信息。</p>
<h3 id="什么是-freemarker-模板" tabindex="-1"><a class="header-anchor" href="#什么是-freemarker-模板" aria-hidden="true">#</a> 什么是 FreeMarker 模板？</h3>
<p>FreeMarker 是一个基于 Java 的模板引擎，最初专注于使用 MVC 软件架构进行动态网页生成。使用 Freemarker 的主要优点是表示层和业务层的完全分离。程序员可以处理应用程序代码，而设计人员可以处理 html 页面设计。最后使用freemarker 可以将这些结合起来，给出最终的输出页面。</p>
<h3 id="如何集成-spring-boot-和-activemq" tabindex="-1"><a class="header-anchor" href="#如何集成-spring-boot-和-activemq" aria-hidden="true">#</a> 如何集成 Spring Boot 和 ActiveMQ？</h3>
<p>对于集成 Spring Boot 和 ActiveMQ，我们使用依赖关系。 它只需要很少的配置，并且不需要样板代码。</p>
<h3 id="什么是-apache-kafka" tabindex="-1"><a class="header-anchor" href="#什么是-apache-kafka" aria-hidden="true">#</a> 什么是 Apache Kafka？</h3>
<p>Apache Kafka 是一个分布式发布 - 订阅消息系统。它是一个可扩展的，容错的发布 - 订阅消息系统，它使我们能够构建分布式应用程序。这是一个 Apache 顶级项目。Kafka 适合离线和在线消息消费。</p>
<h3 id="什么是-swagger-你用-spring-boot-实现了它吗" tabindex="-1"><a class="header-anchor" href="#什么是-swagger-你用-spring-boot-实现了它吗" aria-hidden="true">#</a> 什么是 Swagger？你用 Spring Boot 实现了它吗？</h3>
<p>Swagger 广泛用于可视化 API，使用 Swagger UI 为前端开发人员提供在线沙箱。Swagger 是用于生成 RESTful Web 服务的可视化表示的工具，规范和完整框架实现。它使文档能够以与服务器相同的速度更新。当通过 Swagger 正确定义时，消费者可以使用最少量的实现逻辑来理解远程服务并与其进行交互。因此，Swagger消除了调用服务时的猜测。</p>
<h3 id="前后端分离-如何维护接口文档" tabindex="-1"><a class="header-anchor" href="#前后端分离-如何维护接口文档" aria-hidden="true">#</a> 前后端分离，如何维护接口文档 ?</h3>
<p>前后端分离开发日益流行，大部分情况下，我们都是通过 Spring Boot 做前后端分离开发，前后端分离一定会有接口文档，不然会前后端会深深陷入到扯皮中。一个比较笨的方法就是使用 word 或者 md 来维护接口文档，但是效率太低，接口一变，所有人手上的文档都得变。在 Spring Boot 中，这个问题常见的解决方案是 Swagger ，使用 Swagger 我们可以快速生成一个接口文档网站，接口一旦发生变化，文档就会自动更新，所有开发工程师访问这一个在线网站就可以获取到最新的接口文档，非常方便。</p>
<h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>
<h3 id="如何重新加载-spring-boot-上的更改-而无需重新启动服务器-spring-boot项目如何热部署" tabindex="-1"><a class="header-anchor" href="#如何重新加载-spring-boot-上的更改-而无需重新启动服务器-spring-boot项目如何热部署" aria-hidden="true">#</a> 如何重新加载 Spring Boot 上的更改，而无需重新启动服务器？Spring Boot项目如何热部署？</h3>
<p>这可以使用 DEV 工具来实现。通过这种依赖关系，您可以节省任何更改，嵌入式tomcat 将重新启动。Spring Boot 有一个开发工具（DevTools）模块，它有助于提高开发人员的生产力。Java 开发人员面临的一个主要挑战是将文件更改自动部署到服务器并自动重启服务器。开发人员可以重新加载 Spring Boot 上的更改，而无需重新启动服务器。这将消除每次手动部署更改的需要。Spring Boot 在发布它的第一个版本时没有这个功能。这是开发人员最需要的功能。DevTools 模块完全满足开发人员的需求。该模块将在生产环境中被禁用。它还提供 H2 数据库控制台以更好地测试应用程序。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-devtools<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
1234
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="您使用了哪些-starter-maven-依赖项" tabindex="-1"><a class="header-anchor" href="#您使用了哪些-starter-maven-依赖项" aria-hidden="true">#</a> 您使用了哪些 starter maven 依赖项？</h3>
<p>使用了下面的一些依赖项</p>
<p>spring-boot-starter-activemq</p>
<p>spring-boot-starter-security</p>
<p>这有助于增加更少的依赖关系，并减少版本的冲突。</p>
<h3 id="spring-boot-中的-starter-到底是什么" tabindex="-1"><a class="header-anchor" href="#spring-boot-中的-starter-到底是什么" aria-hidden="true">#</a> Spring Boot 中的 starter 到底是什么 ?</h3>
<p>首先，这个 Starter 并非什么新的技术点，基本上还是基于 Spring 已有功能来实现的。首先它提供了一个自动化配置类，一般命名为 <code v-pre>XXXAutoConfiguration</code> ，在这个配置类中通过条件注解来决定一个配置是否生效（条件注解就是 Spring 中原本就有的），然后它还会提供一系列的默认配置，也允许开发者根据实际情况自定义相关配置，然后通过类型安全的属性注入将这些配置属性注入进来，新注入的属性会代替掉默认属性。正因为如此，很多第三方框架，我们只需要引入依赖就可以直接使用了。当然，开发者也可以自定义 Starter</p>
<h3 id="spring-boot-starter-parent-有什么用" tabindex="-1"><a class="header-anchor" href="#spring-boot-starter-parent-有什么用" aria-hidden="true">#</a> spring-boot-starter-parent 有什么用 ?</h3>
<p>我们都知道，新创建一个 Spring Boot 项目，默认都是有 parent 的，这个 parent 就是 spring-boot-starter-parent ，spring-boot-starter-parent 主要有如下作用：</p>
<ol>
<li>定义了 Java 编译版本为 1.8 。</li>
<li>使用 UTF-8 格式编码。</li>
<li>继承自 spring-boot-dependencies，这个里边定义了依赖的版本，也正是因为继承了这个依赖，所以我们在写依赖时才不需要写版本号。</li>
<li>执行打包操作的配置。</li>
<li>自动化的资源过滤。</li>
<li>自动化的插件配置。</li>
<li>针对 application.properties 和 application.yml 的资源过滤，包括通过 profile 定义的不同环境的配置文件，例如 application-dev.properties 和 application-dev.yml。</li>
</ol>
<h3 id="spring-boot-打成的-jar-和普通的-jar-有什么区别" tabindex="-1"><a class="header-anchor" href="#spring-boot-打成的-jar-和普通的-jar-有什么区别" aria-hidden="true">#</a> Spring Boot 打成的 jar 和普通的 jar 有什么区别 ?</h3>
<p>Spring Boot 项目最终打包成的 jar 是可执行 jar ，这种 jar 可以直接通过 <code v-pre>java -jar xxx.jar</code> 命令来运行，这种 jar 不可以作为普通的 jar 被其他项目依赖，即使依赖了也无法使用其中的类。</p>
<p>Spring Boot 的 jar 无法被其他项目依赖，主要还是他和普通 jar 的结构不同。普通的 jar 包，解压后直接就是包名，包里就是我们的代码，而 Spring Boot 打包成的可执行 jar 解压后，在 <code v-pre>\BOOT-INF\classes</code> 目录下才是我们的代码，因此无法被直接引用。如果非要引用，可以在 pom.xml 文件中增加配置，将 Spring Boot 项目打包成两个 jar ，一个可执行，一个可引用。</p>
<h3 id="运行-spring-boot-有哪几种方式" tabindex="-1"><a class="header-anchor" href="#运行-spring-boot-有哪几种方式" aria-hidden="true">#</a> 运行 Spring Boot 有哪几种方式？</h3>
<p>1）打包用命令或者放到容器中运行</p>
<p>2）用 Maven/ Gradle 插件运行</p>
<p>3）直接执行 main 方法运行</p>
<h3 id="spring-boot-需要独立的容器运行吗" tabindex="-1"><a class="header-anchor" href="#spring-boot-需要独立的容器运行吗" aria-hidden="true">#</a> Spring Boot 需要独立的容器运行吗？</h3>
<p>可以不需要，内置了 Tomcat/ Jetty 等容器。</p>
<h3 id="开启-spring-boot-特性有哪几种方式" tabindex="-1"><a class="header-anchor" href="#开启-spring-boot-特性有哪几种方式" aria-hidden="true">#</a> 开启 Spring Boot 特性有哪几种方式？</h3>
<p>1）继承spring-boot-starter-parent项目</p>
<p>2）导入spring-boot-dependencies项目依赖</p>
<h3 id="如何使用-spring-boot-实现异常处理" tabindex="-1"><a class="header-anchor" href="#如何使用-spring-boot-实现异常处理" aria-hidden="true">#</a> 如何使用 Spring Boot 实现异常处理？</h3>
<p>Spring 提供了一种使用 ControllerAdvice 处理异常的非常有用的方法。 我们通过实现一个 ControlerAdvice 类，来处理控制器类抛出的所有异常。</p>
<h3 id="如何使用-spring-boot-实现分页和排序" tabindex="-1"><a class="header-anchor" href="#如何使用-spring-boot-实现分页和排序" aria-hidden="true">#</a> 如何使用 Spring Boot 实现分页和排序？</h3>
<p>使用 Spring Boot 实现分页非常简单。使用 Spring Data-JPA 可以实现将可分页的传递给存储库方法。</p>
<h3 id="微服务中如何实现-session-共享" tabindex="-1"><a class="header-anchor" href="#微服务中如何实现-session-共享" aria-hidden="true">#</a> 微服务中如何实现 session 共享 ?</h3>
<p>在微服务中，一个完整的项目被拆分成多个不相同的独立的服务，各个服务独立部署在不同的服务器上，各自的 session 被从物理空间上隔离开了，但是经常，我们需要在不同微服务之间共享 session ，常见的方案就是 Spring Session + Redis 来实现 session 共享。将所有微服务的 session 统一保存在 Redis 上，当各个微服务对 session 有相关的读写操作时，都去操作 Redis 上的 session 。这样就实现了 session 共享，Spring Session 基于 Spring 中的代理过滤器实现，使得 session 的同步操作对开发人员而言是透明的，非常简便。</p>
<h3 id="spring-boot-中如何实现定时任务" tabindex="-1"><a class="header-anchor" href="#spring-boot-中如何实现定时任务" aria-hidden="true">#</a> Spring Boot 中如何实现定时任务 ?</h3>
<p>定时任务也是一个常见的需求，Spring Boot 中对于定时任务的支持主要还是来自 Spring 框架。</p>
<p>在 Spring Boot 中使用定时任务主要有两种不同的方式，一个就是使用 Spring 中的 @Scheduled 注解，另一个则是使用第三方框架 Quartz。</p>
<p>使用 Spring 中的 @Scheduled 的方式主要通过 @Scheduled 注解来实现。</p>
<p>使用 Quartz ，则按照 Quartz 的方式，定义 Job 和 Trigger 即可。</p>
</div></template>
