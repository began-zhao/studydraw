<template><div><h2 id="何为反射" tabindex="-1"><a class="header-anchor" href="#何为反射" aria-hidden="true">#</a> 何为反射？</h2>
<p>如果说大家研究过框架的底层原理或者咱们自己写过框架的话，一定对反射这个概念不陌生。</p>
<p>反射之所以被称为框架的灵魂，主要是因为它赋予了我们在运行时分析类以及执行类中方法的能力。</p>
<p>通过反射你可以获取任意一个类的所有属性和方法，你还可以调用这些方法和属性。</p>
<h2 id="反射的应用场景了解么" tabindex="-1"><a class="header-anchor" href="#反射的应用场景了解么" aria-hidden="true">#</a> 反射的应用场景了解么？</h2>
<p>像咱们平时大部分时候都是在写业务代码，很少会接触到直接使用反射机制的场景。</p>
<p>但是，这并不代表反射没有用。相反，正是因为反射，你才能这么轻松地使用各种框架。像 Spring/Spring Boot、MyBatis 等等框架中都大量使用了反射机制。</p>
<p><strong>这些框架中也大量使用了动态代理，而动态代理的实现也依赖反射。</strong></p>
<p>比如下面是通过 JDK 实现动态代理的示例代码，其中就使用了反射类 <code v-pre>Method</code> 来调用指定的方法。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DebugInvocationHandler</span> <span class="token keyword">implements</span> <span class="token class-name">InvocationHandler</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 代理类中的真实对象
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Object</span> target<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">DebugInvocationHandler</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InvocationTargetException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"before method "</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> result <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"after method "</span> <span class="token operator">+</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，像 Java 中的一大利器 <strong>注解</strong> 的实现也用到了反射。</p>
<p>为什么你使用 Spring 的时候 ，一个<code v-pre>@Component</code>注解就声明了一个类为 Spring Bean 呢？为什么你通过一个 <code v-pre>@Value</code>注解就读取到配置文件中的值呢？究竟是怎么起作用的呢？</p>
<p>这些都是因为你可以基于反射分析类，然后获取到类/属性/方法/方法的参数上的注解。你获取到注解之后，就可以做进一步的处理。</p>
<h2 id="谈谈反射机制的优缺点" tabindex="-1"><a class="header-anchor" href="#谈谈反射机制的优缺点" aria-hidden="true">#</a> 谈谈反射机制的优缺点</h2>
<p><strong>优点</strong> ： 可以让咱们的代码更加灵活、为各种框架提供开箱即用的功能提供了便利</p>
<p><strong>缺点</strong> ：让我们在运行时有了分析操作类的能力，这同样也增加了安全问题。比如可以无视泛型参数的安全检查（泛型参数的安全检查发生在编译时）。另外，反射的性能也要稍差点，不过，对于框架来说实际是影响不大的。相关阅读：<a href="https://stackoverflow.com/questions/1392351/java-reflection-why-is-it-so-slow" target="_blank" rel="noopener noreferrer">Java Reflection: Why is it so slow?<ExternalLinkIcon/></a></p>
<h2 id="反射实战" tabindex="-1"><a class="header-anchor" href="#反射实战" aria-hidden="true">#</a> 反射实战</h2>
<h3 id="获取-class-对象的四种方式" tabindex="-1"><a class="header-anchor" href="#获取-class-对象的四种方式" aria-hidden="true">#</a> 获取 Class 对象的四种方式</h3>
<p>如果我们动态获取到这些信息，我们需要依靠 Class 对象。Class 类对象将一个类的方法、变量等信息告诉运行的程序。Java 提供了四种方式获取 Class 对象:</p>
<p><strong>1. 知道具体类的情况下可以使用：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Class</span> alunbarClass <span class="token operator">=</span> <span class="token class-name">TargetObject</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>但是我们一般是不知道具体类的，基本都是通过遍历包下面的类来获取 Class 对象，通过此方式获取 Class 对象不会进行初始化</p>
<p><strong>2. 通过 <code v-pre>Class.forName()</code>传入类的全路径获取：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Class</span> alunbarClass1 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"cn.javaguide.TargetObject"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3. 通过对象实例<code v-pre>instance.getClass()</code>获取：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">TargetObject</span> o <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TargetObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Class</span> alunbarClass2 <span class="token operator">=</span> o<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4. 通过类加载器<code v-pre>xxxClassLoader.loadClass()</code>传入类路径获取:</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ClassLoader</span><span class="token punctuation">.</span><span class="token function">getSystemClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">loadClass</span><span class="token punctuation">(</span><span class="token string">"cn.javaguide.TargetObject"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过类加载器获取 Class 对象不会进行初始化，意味着不进行包括初始化等一系列步骤，静态代码块和静态对象不会得到执行</p>
<h3 id="反射的一些基本操作" tabindex="-1"><a class="header-anchor" href="#反射的一些基本操作" aria-hidden="true">#</a> 反射的一些基本操作</h3>
<ol>
<li>创建一个我们要使用反射操作的类 <code v-pre>TargetObject</code>。</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>javakafei</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TargetObject</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> value<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">TargetObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        value <span class="token operator">=</span> <span class="token string">"Javakafei"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">publicMethod</span><span class="token punctuation">(</span><span class="token class-name">String</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"I love "</span> <span class="token operator">+</span> s<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">privateMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"value is "</span> <span class="token operator">+</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>使用反射操作这个类的方法以及参数</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">cn<span class="token punctuation">.</span>javakafei</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Field</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationTargetException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span><span class="token punctuation">,</span> <span class="token class-name">NoSuchMethodException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalAccessException</span><span class="token punctuation">,</span> <span class="token class-name">InstantiationException</span><span class="token punctuation">,</span> <span class="token class-name">InvocationTargetException</span><span class="token punctuation">,</span> <span class="token class-name">NoSuchFieldException</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 获取 TargetObject 类的 Class 对象并且创建 TargetObject 类实例
         */</span>
        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> targetClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"cn.javakafei.TargetObject"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TargetObject</span> targetObject <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">TargetObject</span><span class="token punctuation">)</span> targetClass<span class="token punctuation">.</span><span class="token function">newInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * 获取 TargetObject 类中定义的所有方法
         */</span>
        <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods <span class="token operator">=</span> targetClass<span class="token punctuation">.</span><span class="token function">getDeclaredMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> method <span class="token operator">:</span> methods<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token doc-comment comment">/**
         * 获取指定方法并调用
         */</span>
        <span class="token class-name">Method</span> publicMethod <span class="token operator">=</span> targetClass<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">"publicMethod"</span><span class="token punctuation">,</span>
                <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        publicMethod<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>targetObject<span class="token punctuation">,</span> <span class="token string">"javakafei"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * 获取指定参数并对参数进行修改
         */</span>
        <span class="token class-name">Field</span> field <span class="token operator">=</span> targetClass<span class="token punctuation">.</span><span class="token function">getDeclaredField</span><span class="token punctuation">(</span><span class="token string">"value"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//为了对类中的参数进行修改我们取消安全检查</span>
        field<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        field<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>targetObject<span class="token punctuation">,</span> <span class="token string">"javakafei"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * 调用 private 方法
         */</span>
        <span class="token class-name">Method</span> privateMethod <span class="token operator">=</span> targetClass<span class="token punctuation">.</span><span class="token function">getDeclaredMethod</span><span class="token punctuation">(</span><span class="token string">"privateMethod"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//为了调用private方法我们取消安全检查</span>
        privateMethod<span class="token punctuation">.</span><span class="token function">setAccessible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        privateMethod<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>targetObject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出内容：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>publicMethod
privateMethod
I love Javakafei
value is Javakafei
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong> : 有读者提到上面代码运行会抛出 <code v-pre>ClassNotFoundException</code> 异常,具体原因是你没有下面把这段代码的包名替换成自己创建的 <code v-pre>TargetObject</code> 所在的包 。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> targetClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"cn.Javakafei.TargetObject"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
