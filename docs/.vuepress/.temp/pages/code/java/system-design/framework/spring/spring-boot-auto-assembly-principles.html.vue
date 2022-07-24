<template><div><h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h1>
<p>每次问到 Spring Boot， 面试官非常喜欢问这个问题：“讲述一下 SpringBoot 自动装配原理？”。</p>
<p>我觉得我们可以从以下几个方面回答：</p>
<ol>
<li>什么是 SpringBoot 自动装配？</li>
<li>SpringBoot 是如何实现自动装配的？如何实现按需加载？</li>
<li>如何实现一个 Starter？</li>
</ol>
<p>篇幅问题，这篇文章并没有深入，小伙伴们也可以直接使用 debug 的方式去看看 SpringBoot 自动装配部分的源代码。</p>
<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2>
<p>使用过 Spring 的小伙伴，一定有被 XML 配置统治的恐惧。即使 Spring 后面引入了基于注解的配置，我们在开启某些 Spring 特性或者引入第三方依赖的时候，还是需要用 XML 或 Java 进行显式配置。</p>
<p>举个例子。没有 Spring Boot 的时候，我们写一个 RestFul Web 服务，还首先需要进行如下配置。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RESTConfiguration</span>
<span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">View</span> <span class="token function">jsonTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">MappingJackson2JsonView</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MappingJackson2JsonView</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        view<span class="token punctuation">.</span><span class="token function">setPrettyPrint</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> view<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ViewResolver</span> <span class="token function">viewResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BeanNameViewResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>spring-servlet.xml</code></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>beans</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/beans<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>context</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/context<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">xmlns:</span>mvc</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/mvc<span class="token punctuation">"</span></span>
    <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
    http://www.springframework.org/schema/context/ http://www.springframework.org/schema/context/spring-context.xsd
    http://www.springframework.org/schema/mvc/ http://www.springframework.org/schema/mvc/spring-mvc.xsd<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">context:</span>component-scan</span> <span class="token attr-name">base-package</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>com.howtodoinjava.demo<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">mvc:</span>annotation-driven</span> <span class="token punctuation">/></span></span>

    <span class="token comment">&lt;!-- JSON Support --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewResolver<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.springframework.web.servlet.view.BeanNameViewResolver<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>bean</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jsonTemplate<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>org.springframework.web.servlet.view.json.MappingJackson2JsonView<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>beans</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是，Spring Boot 项目，我们只需要添加相关依赖，无需配置，通过启动下面的 <code v-pre>main</code> 方法即可。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">DemoApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>并且，我们通过 Spring Boot 的全局配置文件 <code v-pre>application.properties</code>或<code v-pre>application.yml</code>即可对项目进行设置比如更换端口号，配置 JPA 属性等等。</p>
<p><strong>为什么 Spring Boot 使用起来这么酸爽呢？</strong> 这得益于其自动装配。<strong>自动装配可以说是 Spring Boot 的核心，那究竟什么是自动装配呢？</strong></p>
<h2 id="什么是-springboot-自动装配" tabindex="-1"><a class="header-anchor" href="#什么是-springboot-自动装配" aria-hidden="true">#</a> 什么是 SpringBoot 自动装配？</h2>
<p>我们现在提到自动装配的时候，一般会和 Spring Boot 联系在一起。但是，实际上 Spring Framework 早就实现了这个功能。Spring Boot 只是在其基础上，通过 SPI 的方式，做了进一步优化。</p>
<blockquote>
<p>SpringBoot 定义了一套接口规范，这套规范规定：SpringBoot 在启动时会扫描外部引用 jar 包中的<code v-pre>META-INF/spring.factories</code>文件，将文件中配置的类型信息加载到 Spring 容器（此处涉及到 JVM 类加载机制与 Spring 的容器知识），并执行类中定义的各种操作。对于外部 jar 来说，只需要按照 SpringBoot 定义的标准，就能将自己的功能装置进 SpringBoot。</p>
</blockquote>
<p>没有 Spring Boot 的情况下，如果我们需要引入第三方依赖，需要手动配置，非常麻烦。但是，Spring Boot 中，我们直接引入一个 starter 即可。比如你想要在项目中使用 redis 的话，直接在项目中引入对应的 starter 即可。</p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-data-redis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>引入 starter 之后，我们通过少量注解和一些简单的配置就能使用第三方组件提供的功能了。</p>
<p>在我看来，自动装配可以简单理解为：<strong>通过注解或者一些简单的配置就能在 Spring Boot 的帮助下实现某块功能。</strong></p>
<h2 id="springboot-是如何实现自动装配的" tabindex="-1"><a class="header-anchor" href="#springboot-是如何实现自动装配的" aria-hidden="true">#</a> SpringBoot 是如何实现自动装配的？</h2>
<p>我们先看一下 SpringBoot 的核心注解 <code v-pre>SpringBootApplication</code> 。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Inherited</span>
<span class="token generics"><span class="token punctuation">&lt;</span>1<span class="token punctuation">.</span><span class="token punctuation">></span></span><span class="token annotation punctuation">@SpringBootConfiguration</span>
<span class="token generics"><span class="token punctuation">&lt;</span>2<span class="token punctuation">.</span><span class="token punctuation">></span></span><span class="token annotation punctuation">@ComponentScan</span>
<span class="token generics"><span class="token punctuation">&lt;</span>3<span class="token punctuation">.</span><span class="token punctuation">></span></span><span class="token annotation punctuation">@EnableAutoConfiguration</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">SpringBootApplication</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Configuration</span> <span class="token comment">//实际上它也是一个配置类</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">SpringBootConfiguration</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大概可以把 <code v-pre>@SpringBootApplication</code>看作是 <code v-pre>@Configuration</code>、<code v-pre>@EnableAutoConfiguration</code>、<code v-pre>@ComponentScan</code> 注解的集合。根据 SpringBoot 官网，这三个注解的作用分别是：</p>
<ul>
<li>
<p><code v-pre>@EnableAutoConfiguration</code>：启用 SpringBoot 的自动配置机制</p>
</li>
<li>
<p><code v-pre>@Configuration</code>：允许在上下文中注册额外的 bean 或导入其他配置类</p>
</li>
<li>
<p><code v-pre>@ComponentScan</code>： 扫描被<code v-pre>@Component</code> (<code v-pre>@Service</code>,<code v-pre>@Controller</code>)注解的 bean，注解默认会扫描启动类所在的包下所有的类 ，可以自定义不扫描某些 bean。如下图所示，容器中将排除<code v-pre>TypeExcludeFilter</code>和<code v-pre>AutoConfigurationExcludeFilter</code>。</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bcc73490afbe4c6ba62acde6a94ffdfd~tplv-k3u1fbpfcp-watermark.image" alt="" loading="lazy"></p>
</li>
</ul>
<p><code v-pre>@EnableAutoConfiguration</code> 是实现自动装配的重要注解，我们以这个注解入手。</p>
<h3 id="enableautoconfiguration-实现自动装配的核心注解" tabindex="-1"><a class="header-anchor" href="#enableautoconfiguration-实现自动装配的核心注解" aria-hidden="true">#</a> @EnableAutoConfiguration:实现自动装配的核心注解</h3>
<p><code v-pre>EnableAutoConfiguration</code> 只是一个简单地注解，自动装配核心功能的实现实际是通过 <code v-pre>AutoConfigurationImportSelector</code>类。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@AutoConfigurationPackage</span> <span class="token comment">//作用：将main包下的所有组件注册到容器中</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">AutoConfigurationImportSelector</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//加载自动装配类 xxxAutoconfiguration</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">EnableAutoConfiguration</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> ENABLED_OVERRIDE_PROPERTY <span class="token operator">=</span> <span class="token string">"spring.boot.enableautoconfiguration"</span><span class="token punctuation">;</span>

    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">exclude</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">excludeName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们现在重点分析下<code v-pre>AutoConfigurationImportSelector</code> 类到底做了什么？</p>
<h3 id="autoconfigurationimportselector-加载自动装配类" tabindex="-1"><a class="header-anchor" href="#autoconfigurationimportselector-加载自动装配类" aria-hidden="true">#</a> AutoConfigurationImportSelector:加载自动装配类</h3>
<p><code v-pre>AutoConfigurationImportSelector</code>类的继承体系如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AutoConfigurationImportSelector</span> <span class="token keyword">implements</span> <span class="token class-name">DeferredImportSelector</span><span class="token punctuation">,</span> <span class="token class-name">BeanClassLoaderAware</span><span class="token punctuation">,</span> <span class="token class-name">ResourceLoaderAware</span><span class="token punctuation">,</span> <span class="token class-name">BeanFactoryAware</span><span class="token punctuation">,</span> <span class="token class-name">EnvironmentAware</span><span class="token punctuation">,</span> <span class="token class-name">Ordered</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">DeferredImportSelector</span> <span class="token keyword">extends</span> <span class="token class-name">ImportSelector</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ImportSelector</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">selectImports</span><span class="token punctuation">(</span><span class="token class-name">AnnotationMetadata</span> var1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看出，<code v-pre>AutoConfigurationImportSelector</code> 类实现了 <code v-pre>ImportSelector</code>接口，也就实现了这个接口中的 <code v-pre>selectImports</code>方法，该方法主要用于<strong>获取所有符合条件的类的全限定类名，这些类需要被加载到 IoC 容器中</strong>。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> NO_IMPORTS <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">selectImports</span><span class="token punctuation">(</span><span class="token class-name">AnnotationMetadata</span> annotationMetadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// &lt;1>.判断自动装配开关是否打开</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEnabled</span><span class="token punctuation">(</span>annotationMetadata<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> NO_IMPORTS<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">//&lt;2>.获取所有需要装配的bean</span>
            <span class="token class-name">AutoConfigurationMetadata</span> autoConfigurationMetadata <span class="token operator">=</span> <span class="token class-name">AutoConfigurationMetadataLoader</span><span class="token punctuation">.</span><span class="token function">loadMetadata</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>beanClassLoader<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">AutoConfigurationImportSelector<span class="token punctuation">.</span>AutoConfigurationEntry</span> autoConfigurationEntry <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAutoConfigurationEntry</span><span class="token punctuation">(</span>autoConfigurationMetadata<span class="token punctuation">,</span> annotationMetadata<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">toStringArray</span><span class="token punctuation">(</span>autoConfigurationEntry<span class="token punctuation">.</span><span class="token function">getConfigurations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里我们需要重点关注一下<code v-pre>getAutoConfigurationEntry()</code>方法，这个方法主要负责加载自动配置类的。</p>
<p>该方法调用链如下：</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3c1200712655443ca4b38500d615bb70~tplv-k3u1fbpfcp-watermark.image" alt="" loading="lazy"></p>
<p>现在我们结合<code v-pre>getAutoConfigurationEntry()</code>的源码来详细分析一下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">AutoConfigurationEntry</span> EMPTY_ENTRY <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AutoConfigurationEntry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">AutoConfigurationEntry</span> <span class="token function">getAutoConfigurationEntry</span><span class="token punctuation">(</span><span class="token class-name">AutoConfigurationMetadata</span> autoConfigurationMetadata<span class="token punctuation">,</span> <span class="token class-name">AnnotationMetadata</span> annotationMetadata<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//&lt;1>.</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEnabled</span><span class="token punctuation">(</span>annotationMetadata<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> EMPTY_ENTRY<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token comment">//&lt;2>.</span>
            <span class="token class-name">AnnotationAttributes</span> attributes <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAttributes</span><span class="token punctuation">(</span>annotationMetadata<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//&lt;3>.</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> configurations <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getCandidateConfigurations</span><span class="token punctuation">(</span>annotationMetadata<span class="token punctuation">,</span> attributes<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//&lt;4>.</span>
            configurations <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">removeDuplicates</span><span class="token punctuation">(</span>configurations<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Set</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> exclusions <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getExclusions</span><span class="token punctuation">(</span>annotationMetadata<span class="token punctuation">,</span> attributes<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">checkExcludedClasses</span><span class="token punctuation">(</span>configurations<span class="token punctuation">,</span> exclusions<span class="token punctuation">)</span><span class="token punctuation">;</span>
            configurations<span class="token punctuation">.</span><span class="token function">removeAll</span><span class="token punctuation">(</span>exclusions<span class="token punctuation">)</span><span class="token punctuation">;</span>
            configurations <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>configurations<span class="token punctuation">,</span> autoConfigurationMetadata<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">fireAutoConfigurationImportEvents</span><span class="token punctuation">(</span>configurations<span class="token punctuation">,</span> exclusions<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AutoConfigurationImportSelector<span class="token punctuation">.</span>AutoConfigurationEntry</span><span class="token punctuation">(</span>configurations<span class="token punctuation">,</span> exclusions<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第 1 步</strong>:</p>
<p>判断自动装配开关是否打开。默认<code v-pre>spring.boot.enableautoconfiguration=true</code>，可在 <code v-pre>application.properties</code> 或 <code v-pre>application.yml</code> 中设置</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77aa6a3727ea4392870f5cccd09844ab~tplv-k3u1fbpfcp-watermark.image" alt="" loading="lazy"></p>
<p><strong>第 2 步</strong> ：</p>
<p>用于获取<code v-pre>EnableAutoConfiguration</code>注解中的 <code v-pre>exclude</code> 和 <code v-pre>excludeName</code>。</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3d6ec93bbda1453aa08c52b49516c05a~tplv-k3u1fbpfcp-zoom-1.image" alt="" loading="lazy"></p>
<p><strong>第 3 步</strong></p>
<p>获取需要自动装配的所有配置类，读取<code v-pre>META-INF/spring.factories</code></p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>spring-boot/spring-boot-project/spring-boot-autoconfigure/src/main/resources/META-INF/spring.factories
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/58c51920efea4757aa1ec29c6d5f9e36~tplv-k3u1fbpfcp-watermark.image" alt="" loading="lazy"></p>
<p>从下图可以看到这个文件的配置内容都被我们读取到了。<code v-pre>XXXAutoConfiguration</code>的作用就是按需加载组件。</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/94d6e1a060ac41db97043e1758789026~tplv-k3u1fbpfcp-watermark.image" alt="" loading="lazy"></p>
<p>不光是这个依赖下的<code v-pre>META-INF/spring.factories</code>被读取到，所有 Spring Boot Starter 下的<code v-pre>META-INF/spring.factories</code>都会被读取到。</p>
<p>所以，你可以清楚滴看到， druid 数据库连接池的 Spring Boot Starter 就创建了<code v-pre>META-INF/spring.factories</code>文件。</p>
<p>如果，我们自己要创建一个 Spring Boot Starter，这一步是必不可少的。</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68fa66aeee474b0385f94d23bcfe1745~tplv-k3u1fbpfcp-watermark.image" alt="" loading="lazy"></p>
<p><strong>第 4 步</strong> ：</p>
<p>到这里可能面试官会问你:“<code v-pre>spring.factories</code>中这么多配置，每次启动都要全部加载么？”。</p>
<p>很明显，这是不现实的。我们 debug 到后面你会发现，<code v-pre>configurations</code> 的值变小了。</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/267f8231ae2e48d982154140af6437b0~tplv-k3u1fbpfcp-watermark.image" alt="" loading="lazy"></p>
<p>因为，这一步有经历了一遍筛选，<code v-pre>@ConditionalOnXXX</code> 中的所有条件都满足，该类才会生效。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token comment">// 检查相关的类：RabbitTemplate 和 Channel是否存在</span>
<span class="token comment">// 存在才会加载</span>
<span class="token annotation punctuation">@ConditionalOnClass</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token class-name">RabbitTemplate</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">Channel</span><span class="token punctuation">.</span><span class="token keyword">class</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@EnableConfigurationProperties</span><span class="token punctuation">(</span><span class="token class-name">RabbitProperties</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">RabbitAnnotationDrivenConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RabbitAutoConfiguration</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有兴趣的童鞋可以详细了解下 Spring Boot 提供的条件注解</p>
<ul>
<li><code v-pre>@ConditionalOnBean</code>：当容器里有指定 Bean 的条件下</li>
<li><code v-pre>@ConditionalOnMissingBean</code>：当容器里没有指定 Bean 的情况下</li>
<li><code v-pre>@ConditionalOnSingleCandidate</code>：当指定 Bean 在容器中只有一个，或者虽然有多个但是指定首选 Bean</li>
<li><code v-pre>@ConditionalOnClass</code>：当类路径下有指定类的条件下</li>
<li><code v-pre>@ConditionalOnMissingClass</code>：当类路径下没有指定类的条件下</li>
<li><code v-pre>@ConditionalOnProperty</code>：指定的属性是否有指定的值</li>
<li><code v-pre>@ConditionalOnResource</code>：类路径是否有指定的值</li>
<li><code v-pre>@ConditionalOnExpression</code>：基于 SpEL 表达式作为判断条件</li>
<li><code v-pre>@ConditionalOnJava</code>：基于 Java 版本作为判断条件</li>
<li><code v-pre>@ConditionalOnJndi</code>：在 JNDI 存在的条件下差在指定的位置</li>
<li><code v-pre>@ConditionalOnNotWebApplication</code>：当前项目不是 Web 项目的条件下</li>
<li><code v-pre>@ConditionalOnWebApplication</code>：当前项目是 Web 项 目的条件下</li>
</ul>
<h2 id="如何实现一个-starter" tabindex="-1"><a class="header-anchor" href="#如何实现一个-starter" aria-hidden="true">#</a> 如何实现一个 Starter</h2>
<p>光说不练假把式，现在就来撸一个 starter，实现自定义线程池</p>
<p>第一步，创建<code v-pre>threadpool-spring-boot-starter</code>工程</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1ff0ebe7844f40289eb60213af72c5a6~tplv-k3u1fbpfcp-watermark.image" alt="" loading="lazy"></p>
<p>第二步，引入 Spring Boot 相关依赖</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e14254276604f87b261e5a80a354cc0~tplv-k3u1fbpfcp-watermark.image" alt="" loading="lazy"></p>
<p>第三步，创建<code v-pre>ThreadPoolAutoConfiguration</code></p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1843f1d12c5649fba85fd7b4e4a59e39~tplv-k3u1fbpfcp-watermark.image" alt="" loading="lazy"></p>
<p>第四步，在<code v-pre>threadpool-spring-boot-starter</code>工程的 resources 包下创建<code v-pre>META-INF/spring.factories</code>文件</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/97b738321f1542ea8140484d6aaf0728~tplv-k3u1fbpfcp-watermark.image" alt="" loading="lazy"></p>
<p>最后新建工程引入<code v-pre>threadpool-spring-boot-starter</code></p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/edcdd8595a024aba85b6bb20d0e3fed4~tplv-k3u1fbpfcp-watermark.image" alt="" loading="lazy"></p>
<p>测试通过！！！</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9a265eea4de742a6bbdbbaa75f437307~tplv-k3u1fbpfcp-watermark.image" alt="" loading="lazy"></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>Spring Boot 通过<code v-pre>@EnableAutoConfiguration</code>开启自动装配，通过 SpringFactoriesLoader 最终加载<code v-pre>META-INF/spring.factories</code>中的自动配置类实现自动装配，自动配置类其实就是通过<code v-pre>@Conditional</code>按需加载的配置类，想要其生效必须引入<code v-pre>spring-boot-starter-xxx</code>包实现起步依赖</p>
</div></template>
