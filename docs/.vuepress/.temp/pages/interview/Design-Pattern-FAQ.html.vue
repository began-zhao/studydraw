<template><div><blockquote>
<p>使用UML类图画出原型模式核心角色</p>
<p>原型设计模式的深拷贝和浅拷贝是什么，并写出深拷贝的两种方式的源码(重写 clone 方法实现深拷贝、使用序列化来实现深拷贝</p>
<p>设计模式的七大原则</p>
<p>在 Spring 框架中哪里使用到原型模式，并对源码进行分析</p>
<p>介绍解释器设计模式是什么?</p>
</blockquote>
<h3 id="_1-什么是设计模式-你是否在你的代码里面使用过任何设计模式" tabindex="-1"><a class="header-anchor" href="#_1-什么是设计模式-你是否在你的代码里面使用过任何设计模式" aria-hidden="true">#</a> 1. 什么是设计模式？你是否在你的代码里面使用过任何设计模式？</h3>
<p>软件设计模式（Software Design Pattern），又称设计模式，是指在软件开发中，经过验证的，用于解决在特定环境下、重复出现的、特定问题的<strong>解决方案</strong>。</p>
<h3 id="_2-请列举出在-jdk-中几个常用的设计模式" tabindex="-1"><a class="header-anchor" href="#_2-请列举出在-jdk-中几个常用的设计模式" aria-hidden="true">#</a> 2. 请列举出在 JDK 中几个常用的设计模式？</h3>
<p>单例模式（Singleton pattern）用于 Runtime，Calendar 和其他的一些类中。</p>
<p>工厂模式（Factory pattern）被用于各种不可变的类如 Boolean，像 Boolean.valueOf</p>
<p>观察者模式（Observer pattern）被用于 Swing 和很多的事件监听中。</p>
<p>装饰器设计模式（Decorator design pattern）被用于多个 Java IO 类中。</p>
<h3 id="_3-java-中什么叫单例设计模式-请用-java-写出线程安全的单例模式" tabindex="-1"><a class="header-anchor" href="#_3-java-中什么叫单例设计模式-请用-java-写出线程安全的单例模式" aria-hidden="true">#</a> 3. Java 中什么叫单例设计模式？请用 Java 写出线程安全的单例模式</h3>
<p>单例模式重点在于在整个系统上共享一些创建时较耗资源的对象。整个应用中只维护一个特定类实例，它被所有组件共同使用。Java.lang.Runtime 是单例模式的经典例子。从 Java5 开始你可以使用枚举（enum）来实现线程安全的单例。</p>
<h3 id="单例模式的-7-种写法-懒汉-2-种-枚举-饿汉-2-种-静态内部类-双重校验锁-推荐-。" tabindex="-1"><a class="header-anchor" href="#单例模式的-7-种写法-懒汉-2-种-枚举-饿汉-2-种-静态内部类-双重校验锁-推荐-。" aria-hidden="true">#</a> 单例模式的 7 种写法：懒汉 2 种，枚举，饿汉 2 种，静态内部类，双重校验锁（推荐）。</h3>
<ul>
<li>懒汉式：懒加载，线程不安全</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> singleton<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>singleton <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            singleton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> singleton<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>懒汉式线程安全版：同步效率低</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> singleton<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>singleton <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            singleton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> singleton<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>饿汉式：</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> singleton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> singleton<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>饿汉式变种：</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> singleton<span class="token punctuation">;</span>
    <span class="token keyword">static</span>
    <span class="token punctuation">{</span>
        singleton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> singleton<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>静态内部类方式：利用 JVM 的加载机制，当使用到 SingletonHolder 才会进行初始化。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SingletonHolder</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton</span> singleton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">SingletonHolder</span><span class="token punctuation">.</span>singleton<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>枚举：</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Singletons</span>
<span class="token punctuation">{</span>
    INSTANCE<span class="token punctuation">;</span>
    <span class="token comment">// 此处表示单例对象里面的各种方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Method</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>双重校验锁：</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span>
<span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">volatile</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> singleton<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>singleton <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token class-name">Singleton</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>singleton <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                    singleton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> singleton<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-在-java-中-什么叫观察者设计模式-observer-design-pattern" tabindex="-1"><a class="header-anchor" href="#_4-在-java-中-什么叫观察者设计模式-observer-design-pattern" aria-hidden="true">#</a> 4. 在 Java 中，什么叫观察者设计模式（observer design pattern ）？</h3>
<p>观察者模式是基于对象的状态变化和观察者的通讯，以便他们作出相应的操作。简单的例子就是一个天气系统，当天气变化时必须在展示给公众的视图中进行反映。这个视图对象是一个主体，而不同的视图是观察者。</p>
<h3 id="_5-使用工厂模式最主要的好处是什么-在哪里使用" tabindex="-1"><a class="header-anchor" href="#_5-使用工厂模式最主要的好处是什么-在哪里使用" aria-hidden="true">#</a> 5. 使用工厂模式最主要的好处是什么？在哪里使用？</h3>
<p>各模式的理解：
简单工厂：把对象的创建放到一个工厂类中，通过参数来创建不同的对象。
工厂方法：每种产品由一种工厂来创建。（每次增加一个产品时，都需要增加一个具体类和对象实现工厂）
抽象工厂：对工厂方法的改进，一个产品族对应一个工厂</p>
<p>面向接口编程：设计模式的一个重要原则是 针对接口编程，不要依赖实现类。工厂模式遵循了这一个原则。
开闭原则（Open-Closed Principle,OCP） “Software entities should be open for extension,but closed for modification”。翻译过来就是：“软件实体应当对扩展开放，对修改关闭”。这句话说得略微有点专业，我们把它讲得更通俗一点，也就是：软件系统中包含的各种组件，例如模块（Modules）、类（Classes）以及功能（Functions）等等，应该在不修改现有代码的基础上，引入新功能。开闭原则中“开”，是指对于组件功能的扩展是开放的，是允许对其进行功能扩展的；开闭原则中“闭”，是指对于原有代码的修改是封闭的，即不应该修改原有的代码。</p>
<p>使用工厂的理由：
A.把对象的创建集中在一个地方(工厂中),在增加新的对象类型的时候,只需要改变工厂方法;否则在应用中四处散布对象创建逻辑,如果创建方法改变时则需要四处修改，维护量增加.
B.应用的场合是新的对象类型很可能经常被添加进来.
C.你所关心的仅仅是工厂方法返回的接口方法,不必关心实现细节</p>
<h3 id="_6-举一个用-java-实现的装饰模式-decorator-design-pattern-它是作用于对象层次还是类层次" tabindex="-1"><a class="header-anchor" href="#_6-举一个用-java-实现的装饰模式-decorator-design-pattern-它是作用于对象层次还是类层次" aria-hidden="true">#</a> 6. 举一个用 Java 实现的装饰模式(decorator design pattern) ？它是作用于对象层次还是类层次？</h3>
<p>装饰模式增加强了单个对象的能力。Java IO 到处都使用了装饰模式，典型例子就是 Buffered 系列类如 BufferedReader 和 BufferedWriter，它们增强了 Reader 和 Writer 对象，以实现提升性能的 Buffer 层次的读取和写入。</p>
<p>动态地给一个对象增加一些额外的职责，就增加对象功能来说，装饰模式比生成子类实现更为灵活。装饰模式是一种对象结构型模式。装饰模式是一种用于替代继承的技术,使用对象之间的关联关系取代类之间的继承关系。在装饰模式中引入了装饰类，在装饰类中既可以调用待装饰的原有类的方法，还可以增加新的方法，以扩充原有类的功能。
装饰原有对象、在不改变原有对象的情况下扩展增强新功能/新特征.。当不能采用继承的方式对系统进行扩展或者采用继承不利于系统扩展和维护时可以使用装饰模式。</p>
<h3 id="_7-在-java-中-为什么不允许从静态方法中访问非静态变量" tabindex="-1"><a class="header-anchor" href="#_7-在-java-中-为什么不允许从静态方法中访问非静态变量" aria-hidden="true">#</a> 7. 在 Java 中，为什么不允许从静态方法中访问非静态变量？</h3>
<p>Java 中不能从静态上下文访问非静态数据只是因为非静态变量是跟具体的对象实例关联的，而静态的却没有和任何实例关联。</p>
<h3 id="_8-设计一个-atm-机-请说出你的设计思路" tabindex="-1"><a class="header-anchor" href="#_8-设计一个-atm-机-请说出你的设计思路" aria-hidden="true">#</a> 8. 设计一个 ATM 机，请说出你的设计思路？</h3>
<p>比如设计金融系统来说，必须知道它们应该在任何情况下都能够正常工作。不管是断电还是其他情况，ATM 应该保持正确的状态（事务） , 想想 加锁（locking）、事务（transaction）、错误条件（error condition）、边界条件（boundary condition） 等等。尽管你不能想到具体的设计，但如果你可以指出非功能性需求，提出一些问题，想到关于边界条件，这些都会是很好的。</p>
<h3 id="_9-在-java-中-什么时候用重载-什么时候用重写" tabindex="-1"><a class="header-anchor" href="#_9-在-java-中-什么时候用重载-什么时候用重写" aria-hidden="true">#</a> 9. 在 Java 中，什么时候用重载，什么时候用重写？</h3>
<p>如果你看到一个类的不同实现有着不同的方式来做同一件事，那么就应该用重写（overriding），而重载（overloading）是用不同的输入做同一件事。在 Java 中，重载的方法签名不同，而重写并不是。</p>
<h3 id="_10-举例说明什么情况下会更倾向于使用抽象类而不是接口" tabindex="-1"><a class="header-anchor" href="#_10-举例说明什么情况下会更倾向于使用抽象类而不是接口" aria-hidden="true">#</a> 10. 举例说明什么情况下会更倾向于使用抽象类而不是接口？</h3>
<p>接口和抽象类都遵循”面向接口而不是实现编码”设计原则，它可以增加代码的灵活性，可以适应不断变化的需求。下面有几个点可以帮助你回答这个问题：</p>
<p>在 Java 中，你只能继承一个类，但可以实现多个接口。所以一旦你继承了一个类，你就失去了继承其他类的机会了。</p>
<p>接口通常被用来表示附属描述或行为如：Runnable、Clonable、Serializable 等等，因此当你使用抽象类来表示行为时，你的类就不能同时是 Runnable 和 Clonable(注：这里的意思是指如果把 Runnable 等实现为抽象类的情况)，因为在 Java 中你不能继承两个类，但当你使用接口时，你的类就可以同时拥有多个不同的行为。</p>
<p>在一些对时间要求比较高的应用中，倾向于使用抽象类，它会比接口稍快一点。</p>
<p>如果希望把一系列行为都规范在类继承层次内，并且可以更好地在同一个地方进行编码，那么抽象类是一个更好的选择。有时，接口和抽象类可以一起使用，接口中定义函数，而在抽象类中定义默认的实现。</p>
<h3 id="spring-当中用到了哪些设计模式" tabindex="-1"><a class="header-anchor" href="#spring-当中用到了哪些设计模式" aria-hidden="true">#</a> Spring 当中用到了哪些设计模式？</h3>
<ul>
<li>模板方法模式：例如 jdbcTemplate，通过封装固定的数据库访问比如获取 connection、获取 statement，关闭 connection、关闭 statement 等
然后将特殊的 SQL 操作交给用户自己实现。</li>
<li>策略模式：Spring 在初始化对象的时候，可以选择单例或者原型模式。</li>
<li>简单工厂：Spring 中的 BeanFactory 就是简单工厂模式的体现，根据传入一个唯一的标识来获得 bean 对象。</li>
<li>工厂方法模式：一般情况下，应用程序有自己的工厂对象来创建 bean，如果将应用程序自己的工厂对象交给 Spring 管理， 那么 Spring 管理的就不是普通的 bean，而是工厂 Bean。</li>
<li>单例模式：保证全局只有唯一一个对象。</li>
<li>适配器模式：SpringAOP 的 Advice 有如下：BeforeAdvice、AfterAdvice、AfterAdvice，而需要将这些增强转为 aop 框架所需的
对应的拦截器 MethodBeforeAdviceInterceptor、AfterReturningAdviceInterceptor、ThrowsAdviceInterceptor。</li>
<li>代理模式：Spring 的 Proxy 模式在 aop 中有体现，比如 JdkDynamicAopProxy 和 Cglib2AopProxy。</li>
<li>装饰者模式：如 HttpServletRequestWrapper，自定义请求包装器包装请求，将字符编码转换的工作添加到 getParameter()方法中。</li>
<li>观察者模式：如启动初始化 Spring 时的 ApplicationListener 监听器。</li>
</ul>
<h3 id="在工作中遇到过哪些设计模式-是如何应用的" tabindex="-1"><a class="header-anchor" href="#在工作中遇到过哪些设计模式-是如何应用的" aria-hidden="true">#</a> 在工作中遇到过哪些设计模式，是如何应用的</h3>
<ul>
<li>工厂模式（生产题型）。</li>
<li>策略模式（进行判题）。</li>
<li>模板方法模式（阅卷、判断题目信息是否正确，如条件 1,2,3，三个条件分别由子类实现），</li>
<li>建造者模式（组装试卷生成器）</li>
<li>状态模式（根据试卷类型进行不同抽题）</li>
<li>适配器模式（适配其他微服务，类似防腐层）</li>
<li>外观模式（将一些使用较工具类封装简单一点）</li>
<li>代理模式（AOP 切面编程）</li>
<li>责任链模式（推送、日志等额外操作）</li>
<li>组合模式（无限层级的知识点）</li>
</ul>
<h3 id="简述一下你了解的-java-设计模式-总结" tabindex="-1"><a class="header-anchor" href="#简述一下你了解的-java-设计模式-总结" aria-hidden="true">#</a> 简述一下你了解的 Java 设计模式（总结）</h3>
<p>标星号的为常用设计模式</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>★单例模式：保证某个类只能有一个唯一实例，并提供一个全局的访问点。
★简单工厂：一个工厂类根据传入的参数决定创建出那一种产品类的实例。
工厂方法：定义一个创建对象的接口，让子类决定实例化那个类。
抽象工厂：创建一组相关或依赖对象族，比如创建一组配套的汉堡可乐鸡翅。
★建造者模式：封装一个复杂对象的构建过程，并可以按步骤构造，最后再build。
★原型模式：通过复制现有的实例来创建新的实例，减少创建对象成本（字段需要复杂计算或者创建成本高）。
 
★适配器模式：将一个类的方法接口转换成我们希望的另外一个接口。
★组合模式：将对象组合成树形结构以表示“部分-整体”的层次结构。（无限层级的知识点树）
★装饰模式：动态的给对象添加新的功能。
★代理模式：为对象提供一个代理以增强对象内的方法。
亨元（蝇量）模式：通过共享技术来有效的支持大量细粒度的对象（Integer中的少量缓存）。
★外观模式：对外提供一个统一的方法，来访问子系统中的一群接口。
桥接模式：将抽象部分和它的实现部分分离，使它们都可以独立的变化（比如插座和充电器，他们之间相插是固定的，
但是至于插座是插在220V还是110V，充电器是充手机还是pad可以自主选择）。
 
★模板方法模式：定义一个算法步骤，每个小步骤由子类各自实现。
解释器模式：给定一个语言，定义它的文法的一种表示，并定义一个解释器。
★策略模式：定义一系列算法，把他们封装起来，并且使它们可以相互替换。
★状态模式：允许一个对象根据其内部状态改变而改变它的行为。
★观察者模式：被观测的对象发生改变时通知它的所有观察者。
备忘录模式：保存一个对象的某个状态，以便在适当的时候恢复对象。
中介者模式：许多对象利用中介者来进行交互，将网状的对象关系变为星状的（最少知识原则）。
命令模式：将命令请求封装为一个对象，可用于操作的撤销或重做。
访问者模式：某种物体的使用方式是不一样的，将不同的使用方式交给访问者，而不是给这个物体。（例如对铜的使用，造币厂
造硬币。雕刻厂造铜像，不应该把造硬币和造铜像的功能交给铜自己实现，这样才能解耦）
★责任链模式：避免请求发送者与接收者耦合在一起，让多个对象都有可能接收请求，将这些对象连接成一条链，
并且沿着这条链传递请求，直到有对象处理它为止。
迭代器模式：一种遍历访问聚合对象中各个元素的方法，不暴露该对象的内部结构。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
