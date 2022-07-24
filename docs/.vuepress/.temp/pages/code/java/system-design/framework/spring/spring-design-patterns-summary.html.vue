<template><div><p>JDK 中用到了哪些设计模式?Spring 中用到了哪些设计模式?这两个问题，在面试中比较常见。我在网上搜索了一下关于 Spring 中设计模式的讲解几乎都是千篇一律，而且大部分都年代久远。所以，花了几天时间自己总结了一下，由于我的个人能力有限，文中如有任何错误各位都可以指出。另外，文章篇幅有限，对于设计模式以及一些源码的解读我只是一笔带过，这篇文章的主要目的是回顾一下 Spring 中的设计模式。</p>
<p>Design Patterns(设计模式) 表示面向对象软件开发中最好的计算机编程实践。 Spring 框架中广泛使用了不同类型的设计模式，下面我们来看看到底有哪些设计模式?</p>
<h2 id="控制反转-ioc-和依赖注入-di" tabindex="-1"><a class="header-anchor" href="#控制反转-ioc-和依赖注入-di" aria-hidden="true">#</a> 控制反转(IoC)和依赖注入(DI)</h2>
<p><strong>IoC(Inversion of Control,控制反转)</strong> 是Spring 中一个非常非常重要的概念，它不是什么技术，而是一种解耦的设计思想。它的主要目的是借助于“第三方”(Spring 中的 IOC 容器) 实现具有依赖关系的对象之间的解耦(IOC容器管理对象，你只管使用即可)，从而降低代码之间的耦合度。<strong>IOC 是一个原则，而不是一个模式，以下模式（但不限于）实现了IoC原则。</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/ioc-patterns.png" alt="ioc-patterns" loading="lazy"></p>
<p><strong>Spring IOC 容器就像是一个工厂一样，当我们需要创建一个对象的时候，只需要配置好配置文件/注解即可，完全不用考虑对象是如何被创建出来的。</strong> IOC 容器负责创建对象，将对象连接在一起，配置这些对象，并从创建中处理这些对象的整个生命周期，直到它们被完全销毁。</p>
<p>在实际项目中一个 Service 类如果有几百甚至上千个类作为它的底层，我们需要实例化这个 Service，你可能要每次都要搞清这个 Service 所有底层类的构造函数，这可能会把人逼疯。如果利用 IOC 的话，你只需要配置好，然后在需要的地方引用就行了，这大大增加了项目的可维护性且降低了开发难度。关于Spring IOC 的理解，推荐看这一下知乎的一个回答：<a href="https://www.zhihu.com/question/23277575/answer/169698662" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/23277575/answer/169698662<ExternalLinkIcon/></a>  ，非常不错。</p>
<p><strong>控制反转怎么理解呢?</strong> 举个例子：&quot;对象a 依赖了对象 b，当对象 a 需要使用 对象 b的时候必须自己去创建。但是当系统引入了 IOC 容器后， 对象a 和对象 b 之前就失去了直接的联系。这个时候，当对象 a 需要使用 对象 b的时候， 我们可以指定 IOC 容器去创建一个对象b注入到对象 a 中&quot;。 对象 a 获得依赖对象 b 的过程,由主动行为变为了被动行为，控制权反转，这就是控制反转名字的由来。</p>
<p><strong>DI(Dependecy Inject,依赖注入)是实现控制反转的一种设计模式，依赖注入就是将实例变量传入到一个对象中去。</strong></p>
<h2 id="工厂设计模式" tabindex="-1"><a class="header-anchor" href="#工厂设计模式" aria-hidden="true">#</a> 工厂设计模式</h2>
<p>Spring使用工厂模式可以通过 <code v-pre>BeanFactory</code> 或 <code v-pre>ApplicationContext</code> 创建 bean 对象。</p>
<p><strong>两者对比：</strong></p>
<ul>
<li><code v-pre>BeanFactory</code> ：延迟注入(使用到某个 bean 的时候才会注入),相比于<code v-pre>ApplicationContext</code> 来说会占用更少的内存，程序启动速度更快。</li>
<li><code v-pre>ApplicationContext</code> ：容器启动的时候，不管你用没用到，一次性创建所有 bean 。<code v-pre>BeanFactory</code> 仅提供了最基本的依赖注入支持，<code v-pre> ApplicationContext</code> 扩展了 <code v-pre>BeanFactory</code> ,除了有<code v-pre>BeanFactory</code>的功能还有额外更多功能，所以一般开发人员使用<code v-pre> ApplicationContext</code>会更多。</li>
</ul>
<p>ApplicationContext的三个实现类：</p>
<ol>
<li><code v-pre>ClassPathXmlApplication</code>：把上下文文件当成类路径资源。</li>
<li><code v-pre>FileSystemXmlApplication</code>：从文件系统中的 XML 文件载入上下文定义信息。</li>
<li><code v-pre>XmlWebApplicationContext</code>：从Web系统中的XML文件载入上下文定义信息。</li>
</ol>
<p>Example:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">FileSystemXmlApplicationContext</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">ApplicationContext</span> context <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileSystemXmlApplicationContext</span><span class="token punctuation">(</span>
				<span class="token string">"C:/work/IOC Containers/springframework.applicationcontext/src/main/resources/bean-factory-config.xml"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
		<span class="token class-name">HelloApplicationContext</span> obj <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">HelloApplicationContext</span><span class="token punctuation">)</span> context<span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span><span class="token string">"helloApplicationContext"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		obj<span class="token punctuation">.</span><span class="token function">getMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单例设计模式" tabindex="-1"><a class="header-anchor" href="#单例设计模式" aria-hidden="true">#</a> 单例设计模式</h2>
<p>在我们的系统中，有一些对象其实我们只需要一个，比如说：线程池、缓存、对话框、注册表、日志对象、充当打印机、显卡等设备驱动程序的对象。事实上，这一类对象只能有一个实例，如果制造出多个实例就可能会导致一些问题的产生，比如：程序的行为异常、资源使用过量、或者不一致性的结果。</p>
<p><strong>使用单例模式的好处:</strong></p>
<ul>
<li>对于频繁使用的对象，可以省略创建对象所花费的时间，这对于那些重量级对象而言，是非常可观的一笔系统开销；</li>
<li>由于 new 操作的次数减少，因而对系统内存的使用频率也会降低，这将减轻 GC 压力，缩短 GC 停顿时间。</li>
</ul>
<p><strong>Spring 中 bean 的默认作用域就是 singleton(单例)的。</strong> 除了 singleton 作用域，Spring 中 bean 还有下面几种作用域：</p>
<ul>
<li>prototype : 每次请求都会创建一个新的 bean 实例。</li>
<li>request : 每一次HTTP请求都会产生一个新的bean，该bean仅在当前HTTP request内有效。</li>
<li>session : 每一次HTTP请求都会产生一个新的 bean，该bean仅在当前 HTTP session 内有效。</li>
<li>global-session： 全局session作用域，仅仅在基于portlet的web应用中才有意义，Spring5已经没有了。Portlet是能够生成语义代码(例如：HTML)片段的小型Java Web插件。它们基于portlet容器，可以像servlet一样处理HTTP请求。但是，与 servlet 不同，每个 portlet 都有不同的会话</li>
</ul>
<p><strong>Spring 实现单例的方式：</strong></p>
<ul>
<li>xml : <code v-pre>&lt;bean id=&quot;userService&quot; class=&quot;top.snailclimb.UserService&quot; scope=&quot;singleton&quot;/&gt;</code></li>
<li>注解：<code v-pre>@Scope(value = &quot;singleton&quot;)</code></li>
</ul>
<p><strong>Spring 通过 <code v-pre>ConcurrentHashMap</code> 实现单例注册表的特殊方式实现单例模式。Spring 实现单例的核心代码如下</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 通过 ConcurrentHashMap（线程安全） 实现单例注册表</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span> singletonObjects <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcurrentHashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">64</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getSingleton</span><span class="token punctuation">(</span><span class="token class-name">String</span> beanName<span class="token punctuation">,</span> <span class="token class-name">ObjectFactory</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> singletonFactory<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Assert</span><span class="token punctuation">.</span><span class="token function">notNull</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> <span class="token string">"'beanName' must not be null"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>singletonObjects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 检查缓存中是否存在实例  </span>
            <span class="token class-name">Object</span> singletonObject <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>singletonObjects<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>beanName<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>singletonObject <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">//...省略了很多代码</span>
                <span class="token keyword">try</span> <span class="token punctuation">{</span>
                    singletonObject <span class="token operator">=</span> singletonFactory<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">//...省略了很多代码</span>
                <span class="token comment">// 如果实例对象在不存在，我们注册到单例注册表中。</span>
                <span class="token function">addSingleton</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> singletonObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span>singletonObject <span class="token operator">!=</span> NULL_OBJECT <span class="token operator">?</span> singletonObject <span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//将对象添加到单例注册表</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">addSingleton</span><span class="token punctuation">(</span><span class="token class-name">String</span> beanName<span class="token punctuation">,</span> <span class="token class-name">Object</span> singletonObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>singletonObjects<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>singletonObjects<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span>beanName<span class="token punctuation">,</span> <span class="token punctuation">(</span>singletonObject <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> singletonObject <span class="token operator">:</span> NULL_OBJECT<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代理设计模式" tabindex="-1"><a class="header-anchor" href="#代理设计模式" aria-hidden="true">#</a> 代理设计模式</h2>
<h3 id="代理模式在-aop-中的应用" tabindex="-1"><a class="header-anchor" href="#代理模式在-aop-中的应用" aria-hidden="true">#</a> 代理模式在 AOP 中的应用</h3>
<p>AOP(Aspect-Oriented Programming:面向切面编程)能够将那些与业务无关，<strong>却为业务模块所共同调用的逻辑或责任（例如事务处理、日志管理、权限控制等）封装起来</strong>，便于<strong>减少系统的重复代码</strong>，<strong>降低模块间的耦合度</strong>，并<strong>有利于未来的可拓展性和可维护性</strong>。</p>
<p><strong>Spring AOP 就是基于动态代理的</strong>，如果要代理的对象，实现了某个接口，那么Spring AOP会使用<strong>JDK Proxy</strong>，去创建代理对象，而对于没有实现接口的对象，就无法使用 JDK Proxy 去进行代理了，这时候Spring AOP会使用 <strong>Cglib</strong> 生成一个被代理对象的子类来作为代理，如下图所示：</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/SpringAOPProcess.jpg" alt="SpringAOPProcess" loading="lazy"></p>
<p>当然你也可以使用 AspectJ ,Spring AOP 已经集成了AspectJ  ，AspectJ  应该算的上是 Java 生态系统中最完整的 AOP 框架了。</p>
<p>使用 AOP 之后我们可以把一些通用功能抽象出来，在需要用到的地方直接使用即可，这样大大简化了代码量。我们需要增加新功能时也方便，这样也提高了系统扩展性。日志功能、事务管理等等场景都用到了 AOP 。</p>
<h3 id="spring-aop-和-aspectj-aop-有什么区别" tabindex="-1"><a class="header-anchor" href="#spring-aop-和-aspectj-aop-有什么区别" aria-hidden="true">#</a> Spring AOP 和 AspectJ AOP 有什么区别?</h3>
<p><strong>Spring AOP 属于运行时增强，而 AspectJ 是编译时增强。</strong> Spring AOP 基于代理(Proxying)，而 AspectJ 基于字节码操作(Bytecode Manipulation)。</p>
<p>Spring AOP 已经集成了 AspectJ  ，AspectJ  应该算的上是 Java 生态系统中最完整的 AOP 框架了。AspectJ  相比于 Spring AOP 功能更加强大，但是 Spring AOP 相对来说更简单，</p>
<p>如果我们的切面比较少，那么两者性能差异不大。但是，当切面太多的话，最好选择 AspectJ ，它比Spring AOP 快很多。</p>
<h2 id="模板方法" tabindex="-1"><a class="header-anchor" href="#模板方法" aria-hidden="true">#</a> 模板方法</h2>
<p>模板方法模式是一种行为设计模式，它定义一个操作中的算法的骨架，而将一些步骤延迟到子类中。 模板方法使得子类可以不改变一个算法的结构即可重定义该算法的某些特定步骤的实现方式。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Template</span> <span class="token punctuation">{</span>
    <span class="token comment">//这是我们的模板方法</span>
    <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token class-name">TemplateMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">PrimitiveOperation1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
        <span class="token class-name">PrimitiveOperation2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PrimitiveOperation3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">protected</span> <span class="token keyword">void</span>  <span class="token class-name">PrimitiveOperation1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//当前类实现</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">//被子类实现的方法</span>
    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token class-name">PrimitiveOperation2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token class-name">PrimitiveOperation3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TemplateImpl</span> <span class="token keyword">extends</span> <span class="token class-name">Template</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">PrimitiveOperation2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//当前类实现</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">PrimitiveOperation3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//当前类实现</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Spring 中 <code v-pre>jdbcTemplate</code>、<code v-pre>hibernateTemplate</code> 等以 Template 结尾的对数据库操作的类，它们就使用到了模板模式。一般情况下，我们都是使用继承的方式来实现模板模式，但是 Spring 并没有使用这种方式，而是使用Callback 模式与模板方法模式配合，既达到了代码复用的效果，同时增加了灵活性。</p>
<h2 id="观察者模式" tabindex="-1"><a class="header-anchor" href="#观察者模式" aria-hidden="true">#</a> 观察者模式</h2>
<p>观察者模式是一种对象行为型模式。它表示的是一种对象与对象之间具有依赖关系，当一个对象发生改变的时候，这个对象所依赖的对象也会做出反应。Spring 事件驱动模型就是观察者模式很经典的一个应用。Spring 事件驱动模型非常有用，在很多场景都可以解耦我们的代码。比如我们每次添加商品的时候都需要重新更新商品索引，这个时候就可以利用观察者模式来解决这个问题。</p>
<h3 id="spring-事件驱动模型中的三种角色" tabindex="-1"><a class="header-anchor" href="#spring-事件驱动模型中的三种角色" aria-hidden="true">#</a> Spring 事件驱动模型中的三种角色</h3>
<h4 id="事件角色" tabindex="-1"><a class="header-anchor" href="#事件角色" aria-hidden="true">#</a> 事件角色</h4>
<p><code v-pre>ApplicationEvent</code> (<code v-pre>org.springframework.context</code>包下)充当事件的角色,这是一个抽象类，它继承了<code v-pre>java.util.EventObject</code>并实现了 <code v-pre>java.io.Serializable</code>接口。</p>
<p>Spring 中默认存在以下事件，他们都是对 <code v-pre>ApplicationContextEvent</code> 的实现(继承自<code v-pre>ApplicationContextEvent</code>)：</p>
<ul>
<li><code v-pre>ContextStartedEvent</code>：<code v-pre>ApplicationContext</code> 启动后触发的事件;</li>
<li><code v-pre>ContextStoppedEvent</code>：<code v-pre>ApplicationContext</code> 停止后触发的事件;</li>
<li><code v-pre>ContextRefreshedEvent</code>：<code v-pre>ApplicationContext</code> 初始化或刷新完成后触发的事件;</li>
<li><code v-pre>ContextClosedEvent</code>：<code v-pre>ApplicationContext</code> 关闭后触发的事件。</li>
</ul>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/ApplicationEvent-Subclass.png" alt="ApplicationEvent-Subclass" loading="lazy"></p>
<h4 id="事件监听者角色" tabindex="-1"><a class="header-anchor" href="#事件监听者角色" aria-hidden="true">#</a> 事件监听者角色</h4>
<p><code v-pre>ApplicationListener</code> 充当了事件监听者角色，它是一个接口，里面只定义了一个 <code v-pre>onApplicationEvent（）</code>方法来处理<code v-pre>ApplicationEvent</code>。<code v-pre>ApplicationListener</code>接口类源码如下，可以看出接口定义看出接口中的事件只要实现了 <code v-pre>ApplicationEvent</code>就可以了。所以，在 Spring中我们只要实现 <code v-pre>ApplicationListener</code> 接口的 <code v-pre>onApplicationEvent()</code> 方法即可完成监听事件</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">EventListener</span></span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ApplicationListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span> <span class="token keyword">extends</span> <span class="token class-name">ApplicationEvent</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">EventListener</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">onApplicationEvent</span><span class="token punctuation">(</span><span class="token class-name">E</span> var1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="事件发布者角色" tabindex="-1"><a class="header-anchor" href="#事件发布者角色" aria-hidden="true">#</a> 事件发布者角色</h4>
<p><code v-pre>ApplicationEventPublisher</code> 充当了事件的发布者，它也是一个接口。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ApplicationEventPublisher</span> <span class="token punctuation">{</span>
    <span class="token keyword">default</span> <span class="token keyword">void</span> <span class="token function">publishEvent</span><span class="token punctuation">(</span><span class="token class-name">ApplicationEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">publishEvent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">)</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">void</span> <span class="token function">publishEvent</span><span class="token punctuation">(</span><span class="token class-name">Object</span> var1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>ApplicationEventPublisher</code> 接口的<code v-pre>publishEvent（）</code>这个方法在<code v-pre>AbstractApplicationContext</code>类中被实现，阅读这个方法的实现，你会发现实际上事件真正是通过<code v-pre>ApplicationEventMulticaster</code>来广播出去的。具体内容过多，就不在这里分析了，后面可能会单独写一篇文章提到。</p>
<h3 id="spring-的事件流程总结" tabindex="-1"><a class="header-anchor" href="#spring-的事件流程总结" aria-hidden="true">#</a> Spring 的事件流程总结</h3>
<ol>
<li>定义一个事件: 实现一个继承自 <code v-pre>ApplicationEvent</code>，并且写相应的构造函数；</li>
<li>定义一个事件监听者：实现 <code v-pre>ApplicationListener</code> 接口，重写 <code v-pre>onApplicationEvent()</code> 方法；</li>
<li>使用事件发布者发布消息:  可以通过 <code v-pre>ApplicationEventPublisher  </code> 的 <code v-pre>publishEvent()</code> 方法发布消息。</li>
</ol>
<p>Example:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 定义一个事件,继承自ApplicationEvent并且写相应的构造函数</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoEvent</span> <span class="token keyword">extends</span> <span class="token class-name">ApplicationEvent</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token number">1L</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> message<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">DemoEvent</span><span class="token punctuation">(</span><span class="token class-name">Object</span> source<span class="token punctuation">,</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>message <span class="token operator">=</span> message<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
         <span class="token keyword">return</span> message<span class="token punctuation">;</span>
          <span class="token punctuation">}</span>

    
<span class="token comment">// 定义一个事件监听者,实现ApplicationListener接口，重写 onApplicationEvent() 方法；</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoListener</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationListener</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">DemoEvent</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>

    <span class="token comment">//使用onApplicationEvent接收消息</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">onApplicationEvent</span><span class="token punctuation">(</span><span class="token class-name">DemoEvent</span> event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> msg <span class="token operator">=</span> event<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"接收到的信息是："</span><span class="token operator">+</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
<span class="token comment">// 发布事件，可以通过ApplicationEventPublisher  的 publishEvent() 方法发布消息。</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DemoPublisher</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">publish</span><span class="token punctuation">(</span><span class="token class-name">String</span> message<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//发布事件</span>
        applicationContext<span class="token punctuation">.</span><span class="token function">publishEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DemoEvent</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当调用 <code v-pre>DemoPublisher </code> 的 <code v-pre>publish()</code> 方法的时候，比如 <code v-pre>demoPublisher.publish(&quot;你好&quot;)</code> ，控制台就会打印出:<code v-pre>接收到的信息是：你好</code> 。</p>
<h2 id="适配器模式" tabindex="-1"><a class="header-anchor" href="#适配器模式" aria-hidden="true">#</a> 适配器模式</h2>
<p>适配器模式(Adapter Pattern) 将一个接口转换成客户希望的另一个接口，适配器模式使接口不兼容的那些类可以一起工作，其别名为包装器(Wrapper)。</p>
<h3 id="spring-aop中的适配器模式" tabindex="-1"><a class="header-anchor" href="#spring-aop中的适配器模式" aria-hidden="true">#</a> spring AOP中的适配器模式</h3>
<p>我们知道 Spring AOP 的实现是基于代理模式，但是 Spring AOP 的增强或通知(Advice)使用到了适配器模式，与之相关的接口是<code v-pre>AdvisorAdapter </code> 。Advice 常用的类型有：<code v-pre>BeforeAdvice</code>（目标方法调用前,前置通知）、<code v-pre>AfterAdvice</code>（目标方法调用后,后置通知）、<code v-pre>AfterReturningAdvice</code>(目标方法执行结束后，return之前)等等。每个类型Advice（通知）都有对应的拦截器:<code v-pre>MethodBeforeAdviceInterceptor</code>、<code v-pre>AfterReturningAdviceAdapter</code>、<code v-pre>AfterReturningAdviceInterceptor</code>。Spring预定义的通知要通过对应的适配器，适配成 <code v-pre>MethodInterceptor</code>接口(方法拦截器)类型的对象（如：<code v-pre>MethodBeforeAdviceInterceptor</code> 负责适配 <code v-pre>MethodBeforeAdvice</code>）。</p>
<h3 id="spring-mvc中的适配器模式" tabindex="-1"><a class="header-anchor" href="#spring-mvc中的适配器模式" aria-hidden="true">#</a> spring MVC中的适配器模式</h3>
<p>在Spring MVC中，<code v-pre>DispatcherServlet</code> 根据请求信息调用 <code v-pre>HandlerMapping</code>，解析请求对应的 <code v-pre>Handler</code>。解析到对应的 <code v-pre>Handler</code>（也就是我们平常说的 <code v-pre>Controller</code> 控制器）后，开始由<code v-pre>HandlerAdapter</code> 适配器处理。<code v-pre>HandlerAdapter</code> 作为期望接口，具体的适配器实现类用于对目标类进行适配，<code v-pre>Controller</code> 作为需要适配的类。</p>
<p><strong>为什么要在 Spring MVC 中使用适配器模式？</strong> Spring MVC 中的 <code v-pre>Controller</code> 种类众多，不同类型的 <code v-pre>Controller</code> 通过不同的方法来对请求进行处理。如果不利用适配器模式的话，<code v-pre>DispatcherServlet</code> 直接获取对应类型的 <code v-pre>Controller</code>，需要的自行来判断，像下面这段代码一样：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>mappedHandler<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">MultiActionController</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
   <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">MultiActionController</span><span class="token punctuation">)</span>mappedHandler<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>xxx  
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>mappedHandler<span class="token punctuation">.</span><span class="token function">getHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">instanceof</span> <span class="token class-name">XXX</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>  
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>  
<span class="token punctuation">}</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如我们再增加一个 <code v-pre>Controller</code>类型就要在上面代码中再加入一行 判断语句，这种形式就使得程序难以维护，也违反了设计模式中的开闭原则 – 对扩展开放，对修改关闭。</p>
<h2 id="装饰者模式" tabindex="-1"><a class="header-anchor" href="#装饰者模式" aria-hidden="true">#</a> 装饰者模式</h2>
<p>装饰者模式可以动态地给对象添加一些额外的属性或行为。相比于使用继承，装饰者模式更加灵活。简单点儿说就是当我们需要修改原有的功能，但我们又不愿直接去修改原有的代码时，设计一个Decorator套在原有代码外面。其实在 JDK 中就有很多地方用到了装饰者模式，比如 <code v-pre>InputStream</code>家族，<code v-pre>InputStream</code> 类下有 <code v-pre>FileInputStream</code> (读取文件)、<code v-pre>BufferedInputStream</code> (增加缓存,使读取文件速度大大提升)等子类都在不修改<code v-pre>InputStream</code> 代码的情况下扩展了它的功能。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/Decorator.jpg" alt="装饰者模式示意图" loading="lazy"></p>
<p>Spring 中配置 DataSource 的时候，DataSource 可能是不同的数据库和数据源。我们能否根据客户的需求在少修改原有类的代码下动态切换不同的数据源？这个时候就要用到装饰者模式(这一点我自己还没太理解具体原理)。Spring 中用到的包装器模式在类名上含有 <code v-pre>Wrapper</code>或者 <code v-pre>Decorator</code>。这些类基本上都是动态地给一个对象添加一些额外的职责</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>Spring 框架中用到了哪些设计模式？</p>
<ul>
<li><strong>工厂设计模式</strong> : Spring使用工厂模式通过 <code v-pre>BeanFactory</code>、<code v-pre>ApplicationContext</code> 创建 bean 对象。</li>
<li><strong>代理设计模式</strong> : Spring AOP 功能的实现。</li>
<li><strong>单例设计模式</strong> : Spring 中的 Bean 默认都是单例的。</li>
<li><strong>模板方法模式</strong> : Spring 中 <code v-pre>jdbcTemplate</code>、<code v-pre>hibernateTemplate</code> 等以 Template 结尾的对数据库操作的类，它们就使用到了模板模式。</li>
<li><strong>包装器设计模式</strong> : 我们的项目需要连接多个数据库，而且不同的客户在每次访问中根据需要会去访问不同的数据库。这种模式让我们可以根据客户的需求能够动态切换不同的数据源。</li>
<li><strong>观察者模式:</strong> Spring 事件驱动模型就是观察者模式很经典的一个应用。</li>
<li><strong>适配器模式</strong> :Spring AOP 的增强或通知(Advice)使用到了适配器模式、spring MVC 中也是用到了适配器模式适配<code v-pre>Controller</code>。</li>
<li>......</li>
</ul>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>《Spring技术内幕》</li>
<li><a href="https://blog.eduonix.com/java-programming-2/learn-design-patterns-used-spring-framework/" target="_blank" rel="noopener noreferrer">https://blog.eduonix.com/java-programming-2/learn-design-patterns-used-spring-framework/<ExternalLinkIcon/></a></li>
<li><a href="http://blog.yeamin.top/2018/03/27/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F-Spring%E5%8D%95%E4%BE%8B%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E5%88%86%E6%9E%90/" target="_blank" rel="noopener noreferrer">http://blog.yeamin.top/2018/03/27/单例模式-Spring单例实现原理分析/<ExternalLinkIcon/></a></li>
<li><a href="https://www.tutorialsteacher.com/ioc/inversion-of-control" target="_blank" rel="noopener noreferrer">https://www.tutorialsteacher.com/ioc/inversion-of-control<ExternalLinkIcon/></a></li>
<li><a href="https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/observer.html" target="_blank" rel="noopener noreferrer">https://design-patterns.readthedocs.io/zh_CN/latest/behavioral_patterns/observer.html<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/5a8eb261f265da4e9e307230" target="_blank" rel="noopener noreferrer">https://juejin.im/post/5a8eb261f265da4e9e307230<ExternalLinkIcon/></a></li>
<li><a href="https://juejin.im/post/5ba28986f265da0abc2b6084" target="_blank" rel="noopener noreferrer">https://juejin.im/post/5ba28986f265da0abc2b6084<ExternalLinkIcon/></a></li>
</ul>
<h2 id="公众号" tabindex="-1"><a class="header-anchor" href="#公众号" aria-hidden="true">#</a> 公众号</h2>
<p>如果大家想要实时关注我更新的文章以及分享的干货的话，可以关注我的公众号。</p>
<p><strong>《Java面试突击》:</strong> 由本文档衍生的专为面试而生的《Java面试突击》V2.0 PDF 版本<a href="#%E5%85%AC%E4%BC%97%E5%8F%B7">公众号</a>后台回复 <strong>&quot;Java面试突击&quot;</strong> 即可免费领取！</p>
<p><strong>Java工程师必备学习资源:</strong> 一些Java工程师常用学习资源公众号后台回复关键字 <strong>“1”</strong> 即可免费无套路获取。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/167598cd2e17b8ec.png" alt="我的公众号" loading="lazy"></p>
</div></template>
