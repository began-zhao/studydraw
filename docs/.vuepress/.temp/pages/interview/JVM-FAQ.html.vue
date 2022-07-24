<template><div><p>请谈谈你对 OOM 的认识？</p>
<blockquote>
<p>GC 垃圾回收算法和垃圾收集器的关系？分别是什么请你谈谈？</p>
<p>怎么查看服务器默认的垃圾收集器是哪个？生产上如何配置垃圾收集器的？谈谈你对垃圾收集器的理解？</p>
<p>G1 垃圾收集器？</p>
<p>生产环境服务器变慢，诊断思路和性能评估谈谈？</p>
<p>假如生产环境出现 CPU 占用过高，请谈谈你的分析思路和定位</p>
</blockquote>
<h2 id="一、类加载子系统" tabindex="-1"><a class="header-anchor" href="#一、类加载子系统" aria-hidden="true">#</a> 一、类加载子系统</h2>
<h3 id="_1、类加载机制-类加载过程" tabindex="-1"><a class="header-anchor" href="#_1、类加载机制-类加载过程" aria-hidden="true">#</a> 1、类加载机制？类加载过程</h3>
<p>Java 语言是一种具有动态性的解释型语言，类(Class)只有被加载到 JVM 后才能运行。当运行指定程序时，JVM 会将编译生成的 .class 文件按照需求和一定的规则加载到内存中，并组织成为一个完整的 Java 应用程序。这个加载过程是由类加载器完成，具体来说，就是由 ClassLoader 和它的子类来实现的。类加载器本身也是一个类，其实质是把类文件从硬盘读取到内存中。</p>
<p>类的加载方式分为<strong>隐式加载和显示加载</strong>。隐式加载指的是程序在使用 new 等方式创建对象时，会隐式地调用类的加载器把对应的类 加载到 JVM 中。显示加载指的是通过直接调用 <code v-pre>class.forName()</code> 方法来把所需的类加载到 JVM 中。</p>
<p>任何一个工程项目都是由许多类组成的，当程序启动时，只把需要的类加载到 JVM 中，其他类只有被使用到的时候才会被加载，采用这种方法一方面可以加快加载速度，另一方面可以节约程序运行时对内存的开销。此外，在 Java 语言中，每个类或接口都对应一个 .class 文件，这些文件可以被看成是一个个可以被动态加载的单元，因此当只有部分类被修改时，只需要重新编译变化的类即可， 而不需要重新编译所有文件，因此加快了编译速度。</p>
<p>Java 虚拟机把描述类的数据从 Class 文件加载到内存，并对数据进行校验、转换解析和初始化，最终形成可以被虚拟机直接使用的 Java 类型，这就是虚拟机的加载机制。</p>
<p>类从被加载到虚拟机内存中开始，到卸载出内存为止，它的整个生命周期包括：<strong>加载、验证、准备、解析、初始化、使用和卸载</strong>七个阶段。(验证、准备和解析又统称为连接，为了支持Java语言的<strong>运行时绑定</strong>，所以<strong>解析阶段也可以是在初始化之后进行的</strong>。以上顺序都只是说开始的顺序，实际过程中是交叉的混合式进行的，加载过程中可能就已经开始验证了)</p>
<p><img src="https://tva1.sinaimg.cn/large/0082zybply1gbnxhplvkrj30yi0d60ty.jpg" alt="jvm-class-load" loading="lazy"></p>
<h3 id="_2、什么是类加载器-类加载器有哪些-这些类加载器都加载哪些文件" tabindex="-1"><a class="header-anchor" href="#_2、什么是类加载器-类加载器有哪些-这些类加载器都加载哪些文件" aria-hidden="true">#</a> 2、什么是类加载器，类加载器有哪些？这些类加载器都加载哪些文件？</h3>
<p>类加载器就是做上边提到的类加载过程的一个东西~</p>
<p>类加载器的任务是根据一个类的全限定名来读取此类的二进制字节流到 JVM 中，然后转换为一个与目标类对应的 java.lang.Class 对象实例</p>
<h5 id="启动类加载器-引导类加载器-bootstrap-classloader" tabindex="-1"><a class="header-anchor" href="#启动类加载器-引导类加载器-bootstrap-classloader" aria-hidden="true">#</a> 启动类加载器（引导类加载器，Bootstrap ClassLoader）</h5>
<ul>
<li>这个类加载使用 C/C++ 语言实现，嵌套在 JVM 内部</li>
<li>它用来加载 Java 的核心库（<code v-pre>JAVA_HOME/jre/lib/rt.jar</code>、<code v-pre>resource.jar</code>或<code v-pre>sun.boot.class.path</code>路径下的内容），用于提供 JVM 自身需要的类</li>
<li>并不继承自 <code v-pre>java.lang.ClassLoader</code>，没有父加载器</li>
<li>加载扩展类和应用程序类加载器，并指定为他们的父类加载器</li>
<li>出于安全考虑，Bootstrap 启动类加载器只加载名为java、Javax、sun等开头的类</li>
</ul>
<h5 id="扩展类加载器-extension-classloader" tabindex="-1"><a class="header-anchor" href="#扩展类加载器-extension-classloader" aria-hidden="true">#</a> 扩展类加载器（Extension ClassLoader）</h5>
<ul>
<li>Java 语言编写，由<code v-pre>sun.misc.Launcher$ExtClassLoader</code>实现</li>
<li>派生于 ClassLoader</li>
<li>父类加载器为启动类加载器</li>
<li>从 <code v-pre>java.ext.dirs</code> 系统属性所指定的目录中加载类库，或从 JDK 的安装目录的<code v-pre>jre/lib/ext</code> 子目录（扩展目录）下加载类库。如果用户创建的 JAR 放在此目录下，也会自动由扩展类加载器加载</li>
</ul>
<h5 id="应用程序类加载器-也叫系统类加载器-appclassloader" tabindex="-1"><a class="header-anchor" href="#应用程序类加载器-也叫系统类加载器-appclassloader" aria-hidden="true">#</a> 应用程序类加载器（也叫系统类加载器，AppClassLoader）</h5>
<ul>
<li>Java 语言编写，由 <code v-pre>sun.misc.Lanucher$AppClassLoader</code> 实现</li>
<li>派生于 ClassLoader</li>
<li>父类加载器为扩展类加载器</li>
<li>它负责加载环境变量<code v-pre>classpath</code>或系统属性<code v-pre> java.class.path</code> 指定路径下的类库</li>
<li>该类加载是<strong>程序中默认的类加载器</strong>，一般来说，Java 应用的类都是由它来完成加载的</li>
<li>通过 <code v-pre>ClassLoader#getSystemClassLoader()</code> 方法可以获取到该类加载器</li>
</ul>
<h5 id="用户自定义类加载器" tabindex="-1"><a class="header-anchor" href="#用户自定义类加载器" aria-hidden="true">#</a> 用户自定义类加载器</h5>
<p>在 Java 的日常应用程序开发中，类的加载几乎是由 3 种类加载器相互配合执行的，在必要时，我们还可以自定义类加载器，来定制类的加载方式</p>
<h3 id="_3、为什么要自定义类加载器" tabindex="-1"><a class="header-anchor" href="#_3、为什么要自定义类加载器" aria-hidden="true">#</a> 3、为什么要自定义类加载器？</h3>
<ul>
<li>隔离加载类</li>
<li>修改类加载的方式</li>
<li>扩展加载源（可以从数据库、云端等指定来源加载类）</li>
<li>防止源码泄露（Java 代码容易被反编译，如果加密后，自定义加载器加载类的时候就可以先解密，再加载）</li>
</ul>
<h3 id="_4、多线程的情况下-类的加载为什么不会出现重复加载的情况" tabindex="-1"><a class="header-anchor" href="#_4、多线程的情况下-类的加载为什么不会出现重复加载的情况" aria-hidden="true">#</a> 4、多线程的情况下，类的加载为什么不会出现重复加载的情况？</h3>
<p>双亲委派</p>
<h3 id="_5、自定义了一个string-那么会加载哪个string" tabindex="-1"><a class="header-anchor" href="#_5、自定义了一个string-那么会加载哪个string" aria-hidden="true">#</a> 5、自定义了一个String，那么会加载哪个String？</h3>
<p>针对 java.*开头的类，jvm 的实现中已经保证了必须由 bootstrp 来加载</p>
<h3 id="_6、什么是双亲委派机制-它有啥优势" tabindex="-1"><a class="header-anchor" href="#_6、什么是双亲委派机制-它有啥优势" aria-hidden="true">#</a> 6、什么是双亲委派机制？它有啥优势？</h3>
<p><img src="https://tva1.sinaimg.cn/large/0082zybply1gbo5vegwfuj30rs0lv45n.jpg" alt="img" loading="lazy"></p>
<p>Java 虚拟机对 class 文件采用的是<strong>按需加载</strong>的方式，也就是说当需要使用该类的时候才会将它的 class 文件加载到内存生成 class 对象。而且加载某个类的 class 文件时，Java 虚拟机采用的是双亲委派模式，即把请求交给父类处理，它是一种任务委派模式。</p>
<p>简单说就是当类加载器（Class-Loader）试图加载某个类型的时候，除非父加载器找不到相应类型，否则尽量将这个任务代理给当前加载器的父加载器去做。使用委派模型的目的是避免重复加载 Java 类型。</p>
<blockquote>
<p><strong>工作过程</strong></p>
<ul>
<li>如果一个类加载器收到了类加载请求，它并不会自己先去加载，而是把这个请求委托给父类的加载器去执行；</li>
<li>如果父类加载器还存在其父类加载器，则进一步向上委托，依次递归，请求最终将到达顶层的启动类加载器；</li>
<li>如果父类加载器可以完成类加载任务，就成功返回，倘若父类加载器无法完成此加载任务，子加载器才会尝试自己去加载，这就是双亲委派模式</li>
</ul>
<p><strong>优势</strong></p>
<ul>
<li><strong>避免类的重复加载</strong>，JVM 中区分不同类，不仅仅是根据类名，相同的 class 文件被不同的 ClassLoader 加载就属于两个不同的类（比如，Java中的Object类，无论哪一个类加载器要加载这个类，最终都是委派给处于模型最顶端的启动类加载器进行加载，如果不采用双亲委派模型，由各个类加载器自己去加载的话，系统中会存在多种不同的 Object 类）</li>
<li><strong>保护程序安全，防止核心 API 被随意篡改</strong>，避免用户自己编写的类动态替换 Java 的一些核心类，比如我们自定义类：<code v-pre>java.lang.String</code></li>
</ul>
</blockquote>
<h3 id="在多线程的情况下-类的加载为什么不会出现重复加载的情况" tabindex="-1"><a class="header-anchor" href="#在多线程的情况下-类的加载为什么不会出现重复加载的情况" aria-hidden="true">#</a> 在多线程的情况下，类的加载为什么不会出现重复加载的情况？</h3>
<p><strong>三个类加载器的关系，不是父子关系，是组合关系。</strong></p>
<p>看看类加载器的加载类的方法loadClass</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> <span class="token function">loadClass</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">,</span> <span class="token keyword">boolean</span> resolve<span class="token punctuation">)</span>
  <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span>
<span class="token punctuation">{</span>
  <span class="token comment">//看，这里有锁</span>
  <span class="token keyword">synchronized</span> <span class="token punctuation">(</span><span class="token function">getClassLoadingLock</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// First, check if the class has already been loaded</span>
    <span class="token comment">//去看看类是否被加载过，如果被加载过，就立即返回</span>
    <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> c <span class="token operator">=</span> <span class="token function">findLoadedClass</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">long</span> t0 <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token comment">//这里通过是否有parent来区分启动类加载器和其他2个类加载器</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>parent <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">//先尝试请求父类加载器去加载类，父类加载器加载不到，再去尝试自己加载类</span>
          c <span class="token operator">=</span> parent<span class="token punctuation">.</span><span class="token function">loadClass</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token comment">//启动类加载器加载类，本质是调用c++的方法</span>
          c <span class="token operator">=</span> <span class="token function">findBootstrapClassOrNull</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">ClassNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// ClassNotFoundException thrown if class not found</span>
        <span class="token comment">// from the non-null parent class loader</span>
      <span class="token punctuation">}</span>
      <span class="token comment">//如果父类加载器加载不到类，子类加载器再尝试自己加载</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// If still not found, then invoke findClass in order</span>
        <span class="token comment">// to find the class.</span>
        <span class="token keyword">long</span> t1 <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">nanoTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//加载类</span>
        c <span class="token operator">=</span> <span class="token function">findClass</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// this is the defining class loader; record the stats</span>
        <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>PerfCounter</span><span class="token punctuation">.</span><span class="token function">getParentDelegationTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addTime</span><span class="token punctuation">(</span>t1 <span class="token operator">-</span> t0<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>PerfCounter</span><span class="token punctuation">.</span><span class="token function">getFindClassTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addElapsedTimeFrom</span><span class="token punctuation">(</span>t1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name"><span class="token namespace">sun<span class="token punctuation">.</span>misc<span class="token punctuation">.</span></span>PerfCounter</span><span class="token punctuation">.</span><span class="token function">getFindClasses</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">resolveClass</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> c<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结一下loadClass方法的大概逻辑：</p>
<ol>
<li>首先加锁，防止多线程的情况下，重复加载同一个类</li>
<li>当加载类的时候，先请求其父类加载器去加载类，如果父类加载器无法加载类时，才自己尝试去加载类。</li>
</ol>
<p><img src="https://uploadfiles.nowcoder.com/files/20210318/9603430_1616033889317/154ad50dc8dd4b109ab5e2100c63fe66.png" alt="图片摘自网络" loading="lazy"></p>
<p>上面的源码解析，可以回答问题：在多线程的情况下，类的加载为什么不会出现重复加载的情况？</p>
<h3 id="_7、可以打破双亲委派机制吗" tabindex="-1"><a class="header-anchor" href="#_7、可以打破双亲委派机制吗" aria-hidden="true">#</a> 7、可以打破双亲委派机制吗？</h3>
<ul>
<li>双亲委派模型并不是一个强制性的约束模型，而是 Java 设计者推荐给开发者的类加载器实现方式，可以“被破坏”，只要我们自定义类加载器，<strong>重写 <code v-pre>loadClass()</code> 方法</strong>，指定新的加载逻辑就破坏了，重写 <code v-pre>findClass()</code> 方法不会破坏双亲委派。</li>
<li>双亲委派模型有一个问题：顶层 ClassLoader，无法加载底层 ClassLoader 的类。典型例子 JNDI、JDBC，所以加入了线程上下文类加载器（Thread Context ClassLoader），可以通过 <code v-pre>Thread.setContextClassLoaser()</code>设置该类加载器，然后顶层 ClassLoader 再使用 <code v-pre>Thread.getContextClassLoader()</code> 获得底层的 ClassLoader 进行加载。</li>
<li>Tomcat 中使用了自定 ClassLoader，并且也破坏了双亲委托机制。每个应用使用 WebAppClassloader 进行单独加载，他首先使用 WebAppClassloader 进行类加载，如果加载不了再委托父加载器去加载，这样可以保证每个应用中的类不冲突。每个 tomcat 中可以部署多个项目，每个项目中存在很多相同的 class 文件（很多相同的jar包），他们加载到 jvm 中可以做到互不干扰。</li>
<li>利用破坏双亲委派来实现<strong>代码热替换</strong>（每次修改类文件，不需要重启服务）。因为一个 Class 只能被一个 ClassLoader 加载一次，否则会报 <code v-pre>java.lang.LinkageError</code>。当我们想要实现代码热部署时，可以每次都 new 一个自定义的 ClassLoader 来加载新的 Class文件。JSP 的实现动态修改就是使用此特性实现。</li>
</ul>
<hr>
<h2 id="二、内存结构" tabindex="-1"><a class="header-anchor" href="#二、内存结构" aria-hidden="true">#</a> 二、内存结构</h2>
<h3 id="_8、java-内存结构-jvm-内存区域的划分" tabindex="-1"><a class="header-anchor" href="#_8、java-内存结构-jvm-内存区域的划分" aria-hidden="true">#</a> 8、Java 内存结构？| JVM 内存区域的划分</h3>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h32xbsrx0bj20ku09474n.jpg" alt="1.png" loading="lazy"></p>
<p>通常可以把 JVM 内存区域分为下面几个方面，其中，有的区域是以线程为单位，而有的区域则是整个 JVM 进程唯一的。</p>
<p>首先，<strong>程序计数器</strong>（PC，Program Counter Register）。在 JVM 规范中，每个线程都有它自己的程序计数器，并且任何时间一个线程都只有一个方法在执行，也就是所谓的当前方法。程序计数器会存储当前线程正在执行的 Java 方法的 JVM 指令地址；或者，如果是在执行本地方法，则是未指定值（undefined）。</p>
<p>第二，<strong>Java 虚拟机栈</strong>（Java Virtual Machine Stack），早期也叫 Java 栈。每个线程在创建时都会创建一个虚拟机栈，其内部保存一个个的栈帧（Stack Frame），对应着一次次的 Java 方法调用。</p>
<p>前面谈程序计数器时，提到了当前方法；同理，在一个时间点，对应的只会有一个活动的栈帧，通常叫作当前帧，方法所在的类叫作当前类。如果在该方法中调用了其他方法，对应的新的栈帧会被创建出来，成为新的当前帧，一直到它返回结果或者执行结束。JVM 直接对 Java 栈的操作只有两个，就是对栈帧的压栈和出栈。</p>
<p>栈帧中存储着局部变量表、操作数（operand）栈、动态链接、方法正常退出或者异常退出的定义等。</p>
<p>第三，<strong>堆</strong>（Heap），它是 Java 内存管理的核心区域，用来放置 Java 对象实例，几乎所有创建的 Java 对象实例都是被直接分配在堆上。堆被所有的线程共享，在虚拟机启动时，我们指定的“Xmx”之类参数就是用来指定最大堆空间等指标。</p>
<p>理所当然，堆也是垃圾收集器重点照顾的区域，所以堆内空间还会被不同的垃圾收集器进行进一步的细分，最有名的就是新生代、老年代的划分。</p>
<p>第四，<strong>方法区</strong>（Method Area）。这也是所有线程共享的一块内存区域，用于存储所谓的元（Meta）数据，例如类结构信息，以及对应的运行时常量池、字段、方法代码等。</p>
<p>由于早期的 Hotspot JVM 实现，很多人习惯于将方法区称为永久代（Permanent Generation）。Oracle JDK 8 中将永久代移除，同时增加了元数据区（Metaspace）。</p>
<p>第五，<strong>运行时常量池</strong>（Run-Time Constant Pool），这是方法区的一部分。如果仔细分析过反编译的类文件结构，你能看到版本号、字段、方法、超类、接口等各种信息，还有一项信息就是常量池。Java 的常量池可以存放各种常量信息，不管是编译期生成的各种字面量，还是需要在运行时决定的符号引用，所以它比一般语言的符号表存储的信息更加宽泛。</p>
<p>第六，<strong>本地方法栈</strong>（Native Method Stack）。它和 Java 虚拟机栈是非常相似的，支持对本地方法的调用，也是每个线程都会创建一个。在 Oracle Hotspot JVM 中，本地方法栈和 Java 虚拟机栈是在同一块儿区域，这完全取决于技术实现的决定，并未在规范中强制。</p>
<blockquote>
<ul>
<li>直接内存（Direct Memory）区域， Direct Buffer 所直接分配的内存，也是个容易出现问题的地方。尽管，在 JVM 工程师的眼中，并不认为它是 JVM 内部内存的一部分，也并未体现 JVM 内存模型中。</li>
<li>JVM 本身是个本地程序，还需要其他的内存去完成各种基本任务，比如，JIT Compiler 在运行时对热点方法进行编译，就会将编译后的方法储存在 Code Cache 里面；GC 等功能需要运行在本地线程之中，类似部分都需要占用内存空间。这些是实现 JVM JIT 等功能的需要，但规范中并不涉及。</li>
</ul>
</blockquote>
<h3 id="_9、1-7和1-8中jvm内存结构的区别" tabindex="-1"><a class="header-anchor" href="#_9、1-7和1-8中jvm内存结构的区别" aria-hidden="true">#</a> 9、1.7和1.8中jvm内存结构的区别</h3>
<p>在 Java8 中，永久代被移除，被一个称为元空间的区域代替，元空间的本质和永久代类似，都是方法区的实现。</p>
<p>元空间（Java8）和永久代（Java7）之间最大的区别就是：永久代使用的 JVM 的堆内存，Java8 以后的元空间并不在虚拟机中而是使用本机物理内存。</p>
<p>因此，默认情况下，元空间的大小仅受本地内存限制。类的元数据放入 natice memory，字符串池和类的静态变量放入堆中。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gfwrx0a1jqj30ol0ck754.jpg" alt="img" loading="lazy"></p>
<h3 id="_10、jvm-堆内部结构-jvm-堆内存为什么要分成新生代-老年代-持久代" tabindex="-1"><a class="header-anchor" href="#_10、jvm-堆内部结构-jvm-堆内存为什么要分成新生代-老年代-持久代" aria-hidden="true">#</a> 10、JVM 堆内部结构？ |  JVM 堆内存为什么要分成新生代，老年代，持久代</h3>
<p><img src="https://static001.geekbang.org/resource/image/72/89/721e97abc93449fbdb4c071f7b3b5289.png" alt="" loading="lazy"></p>
<ol>
<li>
<p>新生代</p>
<p>新生代是大部分对象创建和销毁的区域，在通常的 Java 应用中，绝大部分对象生命周期都是很短暂的。其内部又分为 Eden 区域，作为对象初始分配的区域；两个 Survivor，有时候也叫 from、to 区域，被用来放置从 Minor GC 中保留下来的对象。</p>
<ul>
<li>
<p>JVM 会随意选取一个 Survivor 区域作为“to”，然后会在 GC 过程中进行区域间拷贝，也就是将 Eden 中存活下来的对象和 from 区域的对象，拷贝到这个“to”区域。这种设计主要是为了防止内存的碎片化，并进一步清理无用对象。</p>
</li>
<li>
<p>从内存模型而不是垃圾收集的角度，对 Eden 区域继续进行划分，Hotspot JVM 还有一个概念叫做 Thread Local Allocation Buffer（TLAB），据我所知所有 OpenJDK 衍生出来的 JVM 都提供了 TLAB 的设计。这是 JVM 为每个线程分配的一个私有缓存区域，否则，多线程同时分配内存时，为避免操作同一地址，可能需要使用加锁等机制，进而影响分配速度，你可以参考下面的示意图。从图中可以看出，TLAB 仍然在堆上，它是分配在 Eden 区域内的。其内部结构比较直观易懂，start、end 就是起始地址，top（指针）则表示已经分配到哪里了。所以我们分配新对象，JVM 就会移动 top，当 top 和 end 相遇时，即表示该缓存已满，JVM 会试图再从 Eden 里分配一块儿。</p>
<p><img src="https://static001.geekbang.org/resource/image/f5/bd/f546839e98ea5d43b595235849b0f2bd.png" alt="" loading="lazy"></p>
<ol start="2">
<li>
<p>老年代</p>
<p>放置长生命周期的对象，通常都是从 Survivor 区域拷贝过来的对象。当然，也有特殊情况，我们知道普通的对象会被分配在 TLAB 上；如果对象较大，JVM 会试图直接分配在 Eden 其他位置上；如果对象太大，完全无法在新生代找到足够长的连续空闲空间，JVM 就会直接分配到老年代。</p>
</li>
<li>
<p>永久代</p>
<p>这部分就是早期 Hotspot JVM 的方法区实现方式了，储存 Java 类元数据、常量池、Intern 字符串缓存，在 JDK 8 之后就不存在永久代这块儿了。</p>
</li>
</ol>
</li>
</ul>
</li>
</ol>
<h4 id="一些参数的配置" tabindex="-1"><a class="header-anchor" href="#一些参数的配置" aria-hidden="true">#</a> 一些参数的配置</h4>
<ul>
<li>默认的，新生代 ( Young ) 与老年代 ( Old ) 的比例的值为 1:2 ，可以通过参数 –XX:NewRatio 配置。</li>
<li>默认的，Edem : from : to = 8 : 1 : 1 ( 可以通过参数 –XX:SurvivorRatio 来设定)</li>
<li>Survivor区中的对象被复制次数为15(对应虚拟机参数 -XX:+MaxTenuringThreshold)</li>
</ul>
<h4 id="为什么要分为eden和survivor-为什么要设置两个survivor区" tabindex="-1"><a class="header-anchor" href="#为什么要分为eden和survivor-为什么要设置两个survivor区" aria-hidden="true">#</a> 为什么要分为Eden和Survivor?为什么要设置两个Survivor区？</h4>
<ul>
<li>如果没有Survivor，Eden区每进行一次Minor GC，存活的对象就会被送到老年代。老年代很快被填满，触发Major GC。老年代的内存空间远大于新生代，进行一次 Full GC 消耗的时间比 Minor GC 长得多,所以需要分为 Eden 和 Survivor。</li>
<li>Survivor 的存在意义，就是减少被送到老年代的对象，进而减少 Full GC 的发生</li>
<li>设置两个 Survivor 区最大的好处就是解决了碎片化，刚刚新建的对象在 Eden 中，经历一次 Minor GC，Eden 中的存活对象就会被移动到第一块 survivor space S0，Eden 被清空；等 Eden 区再满了，就再触发一次 Minor GC，Eden 和 S0 中的存活对象又会被复制送入第二块 survivor space S1（这个过程非常重要，因为这种复制算法保证了S1中来自S0和Eden两部分的存活对象占用连续的内存空间，避免了碎片化的发生）</li>
</ul>
<h3 id="_11、java-对象是不是都创建在堆上的呢" tabindex="-1"><a class="header-anchor" href="#_11、java-对象是不是都创建在堆上的呢" aria-hidden="true">#</a> 11、Java 对象是不是都创建在堆上的呢？</h3>
<p>我注意到有一些观点，认为通过<a href="https://en.wikipedia.org/wiki/Escape_analysis" target="_blank" rel="noopener noreferrer">逃逸分析<ExternalLinkIcon/></a>，JVM 会在栈上分配那些不会逃逸的对象，这在理论上是可行的，但是取决于 JVM 设计者的选择。据我所知，Oracle Hotspot JVM 中并未这么做，这一点在逃逸分析相关的<a href="https://docs.oracle.com/javase/8/docs/technotes/guides/vm/performance-enhancements-7.html#escapeAnalysis" target="_blank" rel="noopener noreferrer">文档<ExternalLinkIcon/></a>里已经说明，所以可以明确所有的对象实例都是创建在堆上。</p>
<ul>
<li>目前很多书籍还是基于 JDK 7 以前的版本，JDK 已经发生了很大变化，Intern 字符串的缓存和静态变量曾经都被分配在永久代上，而永久代已经被元数据区取代。但是，Intern 字符串缓存和静态变量并不是被转移到元数据区，而是直接在堆上分配，所以这一点同样符合前面一点的结论：对象实例都是分配在堆上。</li>
</ul>
<h3 id="java-new-一个对象的过程发生了什么" tabindex="-1"><a class="header-anchor" href="#java-new-一个对象的过程发生了什么" aria-hidden="true">#</a> Java new 一个对象的过程发生了什么</h3>
<p>java在new一个对象的时候，会先查看对象所属的类有没有被加载到内存，如果没有的话，就会先通过类的全限定名来加载。加载并初始化类完成后，再进行对象的创建工作。</p>
<p>我们先假设是第一次使用该类，这样的话new一个对象就可以分为两个过程：加载并初始化类和创建对象</p>
<p>加载过程就是 ClassLoader 那一套：加载-验证-准备-解析-初始化</p>
<p>然后创建对象</p>
<ol>
<li>
<p>在堆区分配对象需要的内存</p>
<p>分配的内存包括本类和父类的所有实例变量，但不包括任何静态变量</p>
</li>
<li>
<p>对所有实例变量赋默认值</p>
<p>将方法区内对实例变量的定义拷贝一份到堆区，然后赋默认值</p>
</li>
<li>
<p>执行实例初始化代码</p>
<p>初始化顺序是先初始化父类再初始化子类，初始化时先执行实例代码块然后是构造方法</p>
</li>
<li>
<p>如果有类似于Child c = new Child()形式的c引用的话，在栈区定义Child类型引用变量c，然后将堆区对象的地址赋值给它</p>
</li>
</ol>
<h3 id="_12、请谈谈你对-oom-的认识-哪些区域可能发生-outofmemoryerror" tabindex="-1"><a class="header-anchor" href="#_12、请谈谈你对-oom-的认识-哪些区域可能发生-outofmemoryerror" aria-hidden="true">#</a> 12、请谈谈你对 OOM 的认识 | 哪些区域可能发生 OutOfMemoryError？</h3>
<p>OOM 如果通俗点儿说，就是 JVM 内存不够用了，javadoc 中对<a href="https://docs.oracle.com/javase/9/docs/api/java/lang/OutOfMemoryError.html" target="_blank" rel="noopener noreferrer">OutOfMemoryError<ExternalLinkIcon/></a>的解释是，没有空闲内存，并且垃圾收集器也无法提供更多内存。</p>
<p>这里面隐含着一层意思是，在抛出 OutOfMemoryError 之前，通常垃圾收集器会被触发，尽其所能去清理出空间，例如：</p>
<p>当然，也不是在任何情况下垃圾收集器都会被触发的，比如，我们去分配一个超大对象，类似一个超大数组超过堆的最大值，JVM 可以判断出垃圾收集并不能解决这个问题，所以直接抛出 OutOfMemoryError。</p>
<p>从数据区的角度，除了程序计数器，其他区域都有可能会因为可能的空间不足发生 OutOfMemoryError，简单总结如下：</p>
<ul>
<li>堆内存不足是最常见的 OOM 原因之一，抛出的错误信息是“java.lang.OutOfMemoryError:Java heap space”，原因可能千奇百怪，例如，可能存在内存泄漏问题；也很有可能就是堆的大小不合理，比如我们要处理比较可观的数据量，但是没有显式指定 JVM 堆大小或者指定数值偏小；或者出现 JVM 处理引用不及时，导致堆积起来，内存无法释放等。</li>
<li>而对于 Java 虚拟机栈和本地方法栈，这里要稍微复杂一点。如果我们写一段程序不断的进行递归调用，而且没有退出条件，就会导致不断地进行压栈。类似这种情况，JVM 实际会抛出 StackOverFlowError；当然，如果 JVM 试图去扩展栈空间的的时候失败，则会抛出 OutOfMemoryError。</li>
<li>对于老版本的 Oracle JDK，因为永久代的大小是有限的，并且 JVM 对永久代垃圾回收（如，常量池回收、卸载不再需要的类型）非常不积极，所以当我们不断添加新类型的时候，永久代出现 OutOfMemoryError 也非常多见，尤其是在运行时存在大量动态类型生成的场合；类似 Intern 字符串缓存占用太多空间，也会导致 OOM 问题。对应的异常信息，会标记出来和永久代相关：“java.lang.OutOfMemoryError: PermGen space”。</li>
<li>随着元数据区的引入，方法区内存已经不再那么窘迫，所以相应的 OOM 有所改观，出现 OOM，异常信息则变成了：“java.lang.OutOfMemoryError: Metaspace”。</li>
<li>直接内存不足，也会导致 OOM</li>
</ul>
<h3 id="_13、内存泄露和内存溢出的区别" tabindex="-1"><a class="header-anchor" href="#_13、内存泄露和内存溢出的区别" aria-hidden="true">#</a> 13、内存泄露和内存溢出的区别？</h3>
<ul>
<li>
<p>内存泄露 memory leak，是指程序在申请内存后，无法释放已申请的内存空间，一次内存泄露危害可以忽略，但内存泄露堆积后果很严重，无论多少内存，迟早会被占光。</p>
</li>
<li>
<p>内存溢出 out of memory，是指程序在申请内存时，没有足够的内存空间供其使用，出现 out of memory；比如申请了一个 integer,但给它存了 long 才能存下的数，那就是内存溢出。</p>
<p>memory leak  最终会导致 out of memory！</p>
</li>
</ul>
<h3 id="内存泄漏时-如何定位问题代码" tabindex="-1"><a class="header-anchor" href="#内存泄漏时-如何定位问题代码" aria-hidden="true">#</a> 内存泄漏时，如何定位问题代码</h3>
<p>Java 的内存泄漏问题比较难以定位，下面针对一些常见的内存泄漏场景做介绍：</p>
<ol>
<li>持续在堆上创建对象而不释放。例如，持续不断的往一个列表中添加对象，而不对列表清空。这种问题，通常可以给程序运行时添加 JVM 参数<code v-pre>-Xmx</code> 指定一个较小的运行堆大小，这样可以比较容易的发现这类问题。</li>
<li>不正确的使用静态对象。因为 static 关键字修饰的对象的生命周期与 Java 程序的运行周期是一致的，所以垃圾回收机制无法回收静态变量引用的对象。所以，发生内存泄漏问题时，我们要着重分析所有的静态变量。</li>
<li>对大 String 对象调用 <code v-pre>String.intern()</code> 方法，该方法会从字符串常量池中查询当前字符串是否存在，若不存在就会将当前字符串放入常量池中。而在 jdk6 之前，字符串常量存储在 <code v-pre>PermGen</code> 区的，但是默认情况下 <code v-pre>PermGen</code> 区比较小，所以较大的字符串调用此方法，很容易会触发内存溢出问题。</li>
<li>打开的输入流、连接没有正确关闭。由于这些资源需要对应的内存维护状态，因此不关闭会导致这些内存无法释放。</li>
</ol>
<p>Java 的内存泄漏定位一般是比较困难的，需要使用到很多的实践经验和调试技巧。下面是一些比较通用的方法：</p>
<ul>
<li>可以添加 <code v-pre>-verbose:gc</code> 启动参数来输出 GC 日志。通过分析这些日志，可以知道每次 GC 后内存是否有增加，如果在缓慢的增加，那就有可能是内存泄漏了（当然也需要结合当前的负载）。如果无法添加这个启动参数，也可以使用jstat来查看实时的gc日志。如果有条件运行的化可以考虑使用jvisualvm图形化的观察，不过要是线上的化一般没这个条件。</li>
<li>当通过dump出堆内存，然后使用jvisualvm查看分析，一般能够分析出内存中大量存在的对象以及它的类型等。我们可以通过添加-XX:+HeapDumpOnOutOfMemoryError启动参数来自动保存发生OOM时的内存dump。</li>
<li>当确定出大对象，或者大量存在的实例类型以后，我们就需要去review代码，从实际的代码入手来定位到真正发生泄漏的代码。</li>
</ul>
<h3 id="_15、什么情况下会发生栈内存溢出" tabindex="-1"><a class="header-anchor" href="#_15、什么情况下会发生栈内存溢出" aria-hidden="true">#</a> 15、什么情况下会发生栈内存溢出?</h3>
<ul>
<li>栈是线程私有的，他的生命周期与线程相同，每个方法在执行的时候都会创建一个栈帧，用来存储局部变量表，操作数栈，动态链接，方法出口等信息。局部变量表又包含基本数据类型，对象引用类型</li>
<li>如果线程请求的栈深度大于虚拟机所允许的最大深度，将抛出StackOverflowError异常，方法递归调用产生这种结果。</li>
<li>如果 Java 虚拟机栈可以动态扩展，并且扩展的动作已经尝试过，但是无法申请到足够的内存去完成扩展，或者在新建立线程的时候没有足够的内存去创建对应的虚拟机栈，那么 Java 虚拟机将抛出一个 OutOfMemory 异常。(线程启动过多)</li>
<li>参数 -Xss 去调整 JVM 栈的大小</li>
</ul>
<h3 id="_16、如何监控和诊断-jvm-堆内和堆外内存使用" tabindex="-1"><a class="header-anchor" href="#_16、如何监控和诊断-jvm-堆内和堆外内存使用" aria-hidden="true">#</a> 16、如何监控和诊断 JVM 堆内和堆外内存使用？</h3>
<p>了解 JVM 内存的方法有很多，具体能力范围也有区别，简单总结如下：</p>
<ul>
<li>可以使用综合性的图形化工具，如 JConsole、VisualVM（注意，从 Oracle JDK 9 开始，VisualVM 已经不再包含在 JDK 安装包中）等。这些工具具体使用起来相对比较直观，直接连接到 Java 进程，然后就可以在图形化界面里掌握内存使用情况。</li>
</ul>
<p>以 JConsole 为例，其内存页面可以显示常见的<strong>堆内存</strong>和<strong>各种堆外部分</strong>使用状态。</p>
<ul>
<li>也可以使用命令行工具进行运行时查询，如 jstat 和 jmap 等工具都提供了一些选项，可以查看堆、方法区等使用数据。</li>
<li>或者，也可以使用 jmap 等提供的命令，生成堆转储（Heap Dump）文件，然后利用 jhat 或 Eclipse MAT 等堆转储分析工具进行详细分析。</li>
<li>如果你使用的是 Tomcat、Weblogic 等 Java EE 服务器，这些服务器同样提供了内存管理相关的功能。</li>
<li>另外，从某种程度上来说，GC 日志等输出，同样包含着丰富的信息。</li>
</ul>
<p>这里有一个相对特殊的部分，就是是堆外内存中的直接内存，前面的工具基本不适用，可以使用 JDK 自带的 Native Memory Tracking（NMT）特性，它会从 JVM 本地内存分配的角度进行解读。</p>
<h3 id="java-new一个对象的过程中发生了什么" tabindex="-1"><a class="header-anchor" href="#java-new一个对象的过程中发生了什么" aria-hidden="true">#</a> java new一个对象的过程中发生了什么</h3>
<p>java在new一个对象的时候，会先查看对象所属的类有没有被加载到内存，如果没有的话，就会先通过类的全限定名来加载。加载并初始化类完成后，再进行对象的创建工作。</p>
<ol>
<li>类加载过程（第一次使用该类） 加载-验证-准备-解析-初始化（为静态变量赋值、执行static 代码块）</li>
<li>创建对象
<ol>
<li>在堆区间分配对象需要的内存（分配的内存包括本类和父类的所有实例变量，但不包括任何静态变量）</li>
<li><strong>对所有实例变量赋默认值</strong>（将方法区内对实例变量的定义拷贝一份到堆区，然后赋默认值）</li>
<li><strong>执行实例初始化代码</strong>（初始化顺序是先初始化父类再初始化子类，初始化时先执行实例代码块然后是构造方法）</li>
<li><strong>如果有类似于Child c = new Child()形式的c引用的话，在栈区定义Child类型引用变量c，然后将堆区对象的地址赋值给它</strong></li>
</ol>
</li>
</ol>
<h3 id="string-字符串存放位置-常量池" tabindex="-1"><a class="header-anchor" href="#string-字符串存放位置-常量池" aria-hidden="true">#</a> String 字符串存放位置（常量池）</h3>
<p>在Java中只要是new的信息都会在堆上开辟一个新的空间,为了解决这个问题,JVM中才出现了字符串常量池的概念。但是只有直接用 &quot;&quot;修饰的字符,才会被加入到常量池中,当再次用 &quot;&quot;创建的时候,会首先从常量池中去获取。
字符串常量池存在于运行时常量池中。也就存在于方法区中。</p>
<p>使用相同的字符序列而不是使用new关键字创建的两个字符串会创建指向Java字符串常量池中的同一个字符串的指针。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//创建了几个对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>创建了两个对象；</p>
<ul>
<li>第一个对象是&quot;abc&quot;字符串存储在常量池中；</li>
<li>第二个对象是创建在Heap中的String对象；这里的s是放在栈里面的指向了Heap堆中的String对象。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"s1"</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"s1"</span><span class="token punctuation">)</span> <span class="token punctuation">;</span> <span class="token comment">//创建了几个对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>三个；</p>
<ul>
<li>
<p>第一个是编译期就已经创建在常量池中创建的&quot;s1&quot;，因为创建一个之后常量池中就会有，不再创建，直接指向；</p>
</li>
<li>
<p>后面两个是运行期使用new创建在堆上的s1和s2；</p>
</li>
</ul>
<h3 id="深拷贝和浅拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝和浅拷贝" aria-hidden="true">#</a> 深拷贝和浅拷贝</h3>
<p>简单来讲就是复制、克隆。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Person</span> p<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span>“张三”<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>浅拷贝就是对对象中的数据成员进行简单赋值，如果存在动态成员或者指针就会报错。深拷贝就是对对象中存在的动态成员或指针重新开辟内存空间。</p>
<hr>
<h2 id="三、gc" tabindex="-1"><a class="header-anchor" href="#三、gc" aria-hidden="true">#</a> 三、GC</h2>
<h3 id="谈下-java-的内存管理和垃圾回收" tabindex="-1"><a class="header-anchor" href="#谈下-java-的内存管理和垃圾回收" aria-hidden="true">#</a> 谈下 Java 的内存管理和垃圾回收</h3>
<p>内存管理就是内存的生命周期管理，包括内存的申请、压缩、回收等操作。 Java 的内存管理就是 GC，JVM 的 GC 模块不仅管理内存的回收，也负责内存的分配和压缩整理。</p>
<p>Java 程序的指令都运行在 JVM 上，而且我们的程序代码并不需要去分配内存和释放内存（例如 C/C++ 里需要使用的 malloc/free），那么这些操作自然是由JVM帮我们搞定的。</p>
<p>JVM 在我们创建 Java 对象的时候去分配新内存，并使用 GC 算法，根据对象的存活时间，在对象不使用之后，自动执行对象的内存回收操作。</p>
<h3 id="_17、简述垃圾回收机制" tabindex="-1"><a class="header-anchor" href="#_17、简述垃圾回收机制" aria-hidden="true">#</a> 17、简述垃圾回收机制</h3>
<p>程序在运行的时候，为了提高性能，大部分数据都是会加载到内存中进行运算的，有些数据是需要常驻内存中的，但是有些数据，用过之后便不会再需要了，我们称这部分数据为垃圾数据。</p>
<p>为了防止内存被使用完，我们需要将这些垃圾数据进行回收，即需要将这部分内存空间进行释放。不同于 C++ 需要自行释放内存的机制，Java 虚拟机（JVM）提供了一种自动回收内存的机制，它是低优先级的，在正常情况下是不会执行的，只有在虚拟机空闲或者当 前堆内存不足时，才会触发执行，扫面那些没有被任何引用的对象， 并将它们添加到要回收的集合中，进行回收。</p>
<h3 id="_18、jvm-垃圾回收的时候如何确定垃圾" tabindex="-1"><a class="header-anchor" href="#_18、jvm-垃圾回收的时候如何确定垃圾" aria-hidden="true">#</a> 18、JVM 垃圾回收的时候如何确定垃圾？</h3>
<p>自动垃圾收集的前提是清楚哪些内存可以被释放，内存中不再使用的空间就是垃圾</p>
<p>对于对象实例收集，主要是两种基本算法</p>
<ul>
<li>
<p>引用计数法：引用计数算法，顾名思义，就是为对象添加一个引用计数，用于记录对象被引用的情况，如果计数为 0，即表示对象可回收。有循环引用问题</p>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h32xlnrayhj20ev07ymxn.jpg" alt="6.jpg" loading="lazy"></p>
</li>
<li>
<p>可达性分析：将对象及其引用关系看作一个图，选定活动的对象作为 GC Roots，然后跟踪引用链条，如果一个对象和 GC Roots 之间不可达，也就是不存在引用链条，那么即可认为是可回收对象</p>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h32xlswkv6j20hj084mxs.jpg" alt="7.jpg" loading="lazy"></p>
</li>
</ul>
<h3 id="_19、引用计数法的缺点-除了循环引用-说一到两个" tabindex="-1"><a class="header-anchor" href="#_19、引用计数法的缺点-除了循环引用-说一到两个" aria-hidden="true">#</a> 19、引用计数法的缺点，除了循环引用，说一到两个</h3>
<ol>
<li>引用计数的增减开销在一些情况下会比较大，比如一些根引用的指针更新非常频繁，此时这种开销是不能忽视的（在每次赋值操作的时候都要做相当大的计算，尤其这里面还有递归调用）</li>
<li>对象引用计数器本身是需要空间的，而计数器要占用多少位也是一个问题</li>
<li>一个致命缺陷是循环引用，就是， objA引用了objB，objB也引用了objA，但是除此之外，再没有其他的地方引用这两个对象了，这两个对象的引用计数就都是1。这种情况下，这两个对象是不能被回收的。如下图所示：</li>
</ol>
<h3 id="_20、你知道什么是-gc-roots-吗-gc-roots-如何确定-那些对象可以作为-gc-roots" tabindex="-1"><a class="header-anchor" href="#_20、你知道什么是-gc-roots-吗-gc-roots-如何确定-那些对象可以作为-gc-roots" aria-hidden="true">#</a> 20、你知道什么是 GC Roots 吗？GC Roots 如何确定，那些对象可以作为 GC Roots?</h3>
<p>为了解决引用计数法的循环引用问题，Java 使用了可达性分析的方法</p>
<p>可达性算法的原理是以一系列叫做 <strong>GC Root</strong> 的对象为起点出发，引出它们指向的下一个节点，再以下个节点为起点，引出此节点指向的下一个结点。。。（这样通过 GC Root 串成的一条线就叫引用链），直到所有的结点都遍历完毕，如果相关对象不在任意一个以 <strong>GC Root</strong> 为起点的引用链中，则这些对象会被判断为「垃圾」,会被 GC 回收。</p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gjl6bl1kifj30jk0b60t0.jpg" alt="img" loading="lazy"></p>
<p><strong>哪些对象可以作为 GC Root 呢，有以下几类</strong></p>
<ul>
<li>虚拟机栈（栈帧中的本地变量表）中引用的对象</li>
<li>方法区中类静态属性引用的对象</li>
<li>方法区中常量引用的对象</li>
<li>本地方法栈中 JNI（即一般说的 Native 方法）引用的对象</li>
<li>Java 虚拟机内部的引用，如基本数据类型对应的 Class 对象，一些常驻的异常对象</li>
<li>所有被同步锁（synchronized 关键字）持有的对象</li>
<li>反映 Java 虚拟机内部情况的 JMXBean、JVMTI 中注册的回调、本地代码缓存</li>
</ul>
<h3 id="哪些内存区域需要-gc" tabindex="-1"><a class="header-anchor" href="#哪些内存区域需要-gc" aria-hidden="true">#</a> 哪些内存区域需要 GC ?</h3>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h32xon2wplj20m80ccjs9.jpg" alt="9.jpg" loading="lazy"></p>
<p>thread 独享的区域：PC Regiester、JVM Stack、Native Method Stack，其生命周期都与线程相同（即与线程共生死），所以无需 GC。而线程共享的 Heap 区、Method Area 则是 GC 关注的重点对象</p>
<h3 id="对象的死亡过程" tabindex="-1"><a class="header-anchor" href="#对象的死亡过程" aria-hidden="true">#</a> 对象的死亡过程</h3>
<ol>
<li>第一次标记</li>
</ol>
<p>​	对象在进行可达性分析后发现没有与 GC Roots 相连接的引用链，那它将会被第一次标记。</p>
<ol start="2">
<li>
<p>第二次标记</p>
<p>假如对象没有覆盖 finalize 方法，或者 finalize 方法已经被虚拟机调用过，那么不执行 finalize 方法。
如果有必要执行 finalize 方法，那么该对象将会被放置在一个名为 F-Queue 的队列之中，并在稍后由一条由虚拟机自动建立的、低调度优先级的 Finalizer 线程去执行它们的 finalize 方法。</p>
<p>finalize 方法是对象逃脱死亡命运的最后一次机会，稍后收集器将对 F-Queue 中的对象进行第二次小规模的标记，如果对象要在 finalize 中成功拯救自己，只要重新与引用链上的任何一个对象建立关联即可。
如果对象这时候还没有逃脱，那基本上它就真的要被回收了。</p>
</li>
</ol>
<h3 id="说一说常用的-gc-算法及其优缺点" tabindex="-1"><a class="header-anchor" href="#说一说常用的-gc-算法及其优缺点" aria-hidden="true">#</a> 说一说常用的 GC 算法及其优缺点</h3>
<ol>
<li>mark-sweep 标记清除法</li>
</ol>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h32xqqbokzj20iu0ad0sy.jpg" alt="10.jpg" loading="lazy"></p>
<p>​	如上图，黑色区域表示待清理的垃圾对象，标记出来后直接清空。</p>
<p>​	优：简单快速；</p>
<p>​	缺：产生很多内存碎片。</p>
<ol start="2">
<li>
<p>mark-copy 标记复制法</p>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h32xr30rtbj20j90ao0sz.jpg" alt="11.jpg" loading="lazy"></p>
<p>思路也很简单，将内存对半分，总是保留一块空着（上图中的右侧），将左侧存活的对象（浅灰色区域）复制到右侧，然后左侧全部清空。</p>
<p>优：避免了内存碎片问题；</p>
<p>缺：内存浪费很严重，相当于只能使用 50% 的内存。</p>
</li>
<li>
<p>mark-compact 标记-整理（也称标记-压缩）法</p>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h32xrqf5wrj20j30ak74i.jpg" alt="12.jpg" loading="lazy"></p>
<p>将垃圾对象清理掉后，同时将剩下的存活对象进行整理挪动（类似于 windows 的磁盘碎片整理），保证它们占用的空间连续。</p>
<p>优：节约了内存，并避免了内存碎片问题。</p>
<p>缺：整理过程会降低 GC 的效率。</p>
<p>上述三种算法，每种都有各自的优缺点，都不完美；在现代 JVM 中，往往是综合使用的。经过大量实际分析，发现内存中的对象，大致可以分为两类：</p>
<ul>
<li>
<p>有些生命周期很短，比如一些局部变量/临时对象；</p>
</li>
<li>
<p>而另一些则会存活很久，典型的比如 websocket 长连接中的 connection 对象。如下图，纵向 y 轴可以理解分配内存的字节数，横向 x 轴理解为随着时间流逝（伴随着 GC）。</p>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h32xsg6a9mj20km0e9mxm.jpg" alt="13.jpg" loading="lazy"></p>
<p>可以发现大部分对象其实相当短命，很少有对象能在 GC 后活下来，因此诞生了分代的思想。</p>
</li>
</ul>
<ol start="4">
<li>
<p>generation-collect 分代收集算法</p>
<p>以 Hotspot 为例（JDK 7）进行讲解，如下图所示，可以将内存分成了三大块：年青代（Young Genaration）、老年代（Old Generation）、永久代（Permanent Generation）。其中 Young Genaration 更是又细为分 eden、S0、S1 三个区。</p>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h32xttbmrgj20ns072dg9.jpg" alt="14.jpg" loading="lazy"></p>
<p>结合我们经常使用的一些 jvm 调优参数后，一些参数能影响的各区域内存大小值，示意图如下：</p>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h32xtyg6xyj20u00jnq43.jpg" alt="15.jpg" loading="lazy"></p>
<p>注：jdk8 开始，用 MetaSpace 区取代了 Perm 区（永久代），所以相应的 jvm 参数变成-XX:MetaspaceSize 及 -XX:MaxMetaspaceSize。</p>
</li>
</ol>
</li>
</ol>
<h3 id="_21、jvm中一次完整的gc流程是怎样的-对象如何晋升到老年代" tabindex="-1"><a class="header-anchor" href="#_21、jvm中一次完整的gc流程是怎样的-对象如何晋升到老年代" aria-hidden="true">#</a> 21、JVM中一次完整的GC流程是怎样的，对象如何晋升到老年代</h3>
<p><strong>思路：</strong> 先描述一下Java堆内存划分，再解释Minor GC，Major GC，full GC，描述它们之间转化流程。</p>
<ul>
<li>Java堆 = 老年代 + 新生代</li>
<li>新生代 = Eden + S0 + S1</li>
<li>当 Eden 区的空间满了， Java虚拟机会触发一次 Minor GC，以收集新生代的垃圾，存活下来的对象，则会转移到 Survivor区。</li>
<li><strong>大对象</strong>（需要大量连续内存空间的Java对象，如那种很长的字符串）<strong>直接进入老年态</strong>；</li>
<li>如果对象在 Eden 出生，并经过第一次 Minor GC 后仍然存活，并且被 Survivor 容纳的话，年龄设为 1，每熬过一次 Minor GC，年龄+1，<strong>若年龄超过一定限制（15），则被晋升到老年态</strong>。即<strong>长期存活的对象进入老年态</strong>。</li>
<li>老年代满了而<strong>无法容纳更多的对象</strong>，Minor GC 之后通常就会进行Full GC，Full GC  清理整个内存堆 – <strong>包括年轻代和年老代</strong>。</li>
<li>Major GC <strong>发生在老年代的GC</strong>，<strong>清理老年区</strong>，经常会伴随至少一次Minor GC，<strong>比Minor GC慢10倍以上</strong>。</li>
</ul>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h32xxpdtbnj20j90hg756.jpg" alt="阿里出品的《码出高效-Java开发手册》一书，梳理了 GC 的主要过程" loading="lazy"></p>
<h3 id="_22、gc分代年龄为什么最大为15" tabindex="-1"><a class="header-anchor" href="#_22、gc分代年龄为什么最大为15" aria-hidden="true">#</a> 22、GC分代年龄为什么最大为15？</h3>
<p>在 hotspot 虚拟机中，对象在堆内存中的存储布局可以划分为三部分：<strong>对象头，实例数据，对齐填充</strong>。
HotSpot虚拟机对象的对象头部包含两类信息</p>
<ul>
<li>用于存储对象自身的运行时数据，如HashCode，GC的分代年龄，锁状态标志，线程持有的锁，偏向线程ID，偏向时间戳等。这部数据的长度在32位和64位的虚拟机中分别为32比特和64比特，官方称为“Mark word”。</li>
<li>另一种是类型指针，即对象指向它的类型元数据的指针，Java通过这个指针确定该对象是哪个类的实例。但是并不是所有的虚拟机实现都必须在对象数据上保留类型指针，换句话说，查找对象的元数据信息不一定要经过对象本身。</li>
</ul>
<p>在32位的HotSpot虚拟机中，如对象未被同步锁锁定的状态下，Mark Word的32个比特存储空间中的25个比特用于存储对象的HashCode，<strong>4个比特存储对象分代年龄</strong>，2个比特存储锁标志位，一个比特固定为0.</p>
<p><img src="https://ewr1.vultrobjects.com/imgur4/000/015/073/822_628_2c6.png" alt="" loading="lazy"></p>
<p><img src="https://ewr1.vultrobjects.com/imgur4/000/015/073/823_160_bff.png" alt="" loading="lazy"></p>
<p><strong>因为Object Header采用4个bit位来保存年龄，4个bit位能表示的最大数就是15！</strong></p>
<h3 id="_23、你知道哪几种垃圾收集器-各自的优缺点-重点讲下cms和g1-包括原理-流程-优缺点。" tabindex="-1"><a class="header-anchor" href="#_23、你知道哪几种垃圾收集器-各自的优缺点-重点讲下cms和g1-包括原理-流程-优缺点。" aria-hidden="true">#</a> 23、你知道哪几种垃圾收集器，各自的优缺点，重点讲下cms和G1，包括原理，流程，优缺点。</h3>
<blockquote>
<p>实际上，垃圾收集器（GC，Garbage Collector）是和具体 JVM 实现紧密相关的，不同厂商（IBM、Oracle），不同版本的 JVM，提供的选择也不同。</p>
</blockquote>
<p><strong>思路：</strong> 一定要记住典型的垃圾收集器，尤其 cms 和 G1，它们的原理与区别，涉及的垃圾回收算法。</p>
<h4 id="a、几种垃圾收集器" tabindex="-1"><a class="header-anchor" href="#a、几种垃圾收集器" aria-hidden="true">#</a> a、几种垃圾收集器：</h4>
<ul>
<li>
<p><strong>Serial收集器：</strong> 单线程的收集器，收集垃圾时，必须 stop the world，使用复制算法。无需维护复杂的数据结构，初始化也简单，所以一直是 Client 模式下 JVM 的默认选项</p>
</li>
<li>
<p><strong>ParNew收集器：</strong>  一款多线程的收集器，采用复制算法，主要工作在 Young 区，可以通过 <code v-pre>-XX:ParallelGCThreads</code> 参数来控制收集的线程数，整个过程都是 STW 的，常与 CMS 组合使用</p>
</li>
<li>
<p><strong>Parallel Scavenge收集器：</strong> 新生代收集器，复制算法的收集器，并发的多线程收集器，目标是达到一个可控的吞吐量。如果虚拟机总共运行100分钟，其中垃圾花掉1分钟，吞吐量就是99%。</p>
</li>
<li>
<p><strong>Serial Old收集器：</strong> 是Serial收集器的老年代版本，单线程收集器，使用标记整理算法。</p>
</li>
<li>
<p><strong>Parallel Old收集器：</strong> 是Parallel Scavenge收集器的老年代版本，使用多线程，标记-整理算法。</p>
</li>
<li>
<p><strong>CMS(Concurrent Mark Sweep) 收集器：</strong> 是一种以获得最短回收停顿时间为目标的收集器，<strong>标记清除算法，运作过程：初始标记，并发标记，重新标记，并发清除</strong>，收集结束会产生大量空间碎片。其中初始标记和重新标记会 STW。另外，既然强调了并发（Concurrent），CMS 会占用更多 CPU 资源，并和用户线程争抢。多数应用于互联网站或者 B/S 系统的服务器端上，JDK9 被标记弃用，JDK14 被删除，详情可见 <a href="https://openjdk.java.net/jeps/363" target="_blank" rel="noopener noreferrer">JEP 363<ExternalLinkIcon/></a>。</p>
</li>
<li>
<p><strong>G1收集器：</strong> 一种兼顾吞吐量和停顿时间的 GC 实现，是 Oracle JDK 9 以后的默认 GC 选项。</p>
<p>G1 GC 仍然存在着年代的概念，但是其内存结构并不是简单的条带式划分，而是类似棋盘的一个个 region。Region 之间是复制算法，但整体上实际可看作是标记 - 整理（Mark-Compact）算法，可以有效地避免内存碎片，尤其是当 Java 堆非常大的时候，G1 的优势更加明显。</p>
<p>标记整理算法实现，<strong>运作流程主要包括以下：初始标记，并发标记，最终标记，筛选标记</strong>。不会产生空间碎片，可以精确地控制停顿。</p>
</li>
</ul>
<h4 id="b、cms-收集器和-g1-收集器的区别" tabindex="-1"><a class="header-anchor" href="#b、cms-收集器和-g1-收集器的区别" aria-hidden="true">#</a> b、CMS 收集器和 G1 收集器的区别：</h4>
<p>目前使用最多的是 CMS 和 G1 收集器，二者都有分代的概念，主要内存结构如下</p>
<p><img src="https://p1.meituan.net/travelcube/3a6dacdd87bfbec847d33d09dbe6226d199915.png" alt="img" loading="lazy"></p>
<ul>
<li>CMS 收集器是老年代的收集器，可以配合新生代的 Serial 和 ParNew 收集器一起使用；</li>
<li>G1 收集器收集范围是老年代和新生代，不需要结合其他收集器使用；</li>
<li>CMS 收集器以最小的停顿时间为目标的收集器；</li>
<li>G1 GC 这是一种兼顾吞吐量和停顿时间的 GC 实现，是 Oracle JDK 9 以后的默认 GC 选项。</li>
<li>G1 GC 仍然存在着年代的概念，但是其内存结构并不是简单的条带式划分，而是类似棋盘的一个个 region。Region 之间是复制算法，但整体上实际可看作是标记 - 整理（Mark-Compact）算法，可以有效地避免内存碎片，尤其是当 Java 堆非常大的时候，G1 的优势更加明显。G1 吞吐量和停顿表现都非常不错，并且仍然在不断地完善，与此同时 CMS 已经在 JDK 9 中被标记为废弃（deprecated），所以 G1 GC 值得你深入掌握。</li>
<li>CMS 收集器是使用“标记-清除”算法进行的垃圾回收，容易产生内存碎片</li>
</ul>
<blockquote>
<p>如果你有关注目前尚处于开发中的 JDK 11，你会发现，JDK 又增加了两种全新的 GC 方式，分别是：</p>
<ul>
<li><a href="http://openjdk.java.net/jeps/318" target="_blank" rel="noopener noreferrer">Epsilon GC<ExternalLinkIcon/></a>，简单说就是个不做垃圾收集的 GC，似乎有点奇怪，有的情况下，例如在进行性能测试的时候，可能需要明确判断 GC 本身产生了多大的开销，这就是其典型应用场景。</li>
<li><a href="http://openjdk.java.net/jeps/333" target="_blank" rel="noopener noreferrer">ZGC<ExternalLinkIcon/></a>，这是 Oracle 开源出来的一个超级 GC 实现，具备令人惊讶的扩展能力，比如支持 T bytes 级别的堆大小，并且保证绝大部分情况下，延迟都不会超过 10 ms。虽然目前还处于实验阶段，仅支持 Linux 64 位的平台，但其已经表现出的能力和潜力都非常令人期待。</li>
</ul>
</blockquote>
<h3 id="详细说一下cms垃圾回收算法回收过程-4个阶段" tabindex="-1"><a class="header-anchor" href="#详细说一下cms垃圾回收算法回收过程-4个阶段" aria-hidden="true">#</a> 详细说⼀下CMS垃圾回收算法回收过程？4个阶段</h3>
<p><img src="http://berrywong.com/group1/M00/00/01/wKgABF9-5X-EZjhuAAAAAD18VMY902.png" alt="截屏2020-10-08 下午4.23.52" loading="lazy"></p>
<p><strong>1）初始化标记</strong></p>
<p>这个阶段只会标记GC Root对象，会产生短暂的STW，初始化标记后其他用户线程可以恢复运行（初始标记的目标是标记所有的根对象，包括根对象直接引用的对象，以及被年轻代中所有存活对象所引用的对象（老年代单独回收））</p>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h32y0qzi0mj21eg0u00vk.jpg" alt="54201932.png" loading="lazy"></p>
<p><strong>2）并发标记</strong></p>
<p>在此阶段，CMS GC 遍历老年代，标记所有的存活对象，从前一阶段“Initial Mark”找到的根对象开始算起。“并发标记”阶段，就是与应用程序同时运行，不用暂停的阶段。请注意，并非所有老年代中存活的对象都在此阶段被标记，因为在标记过程中对象的引用关系还在发生变化。</p>
<p><img src="https://tva1.sinaimg.cn/large/e6c9d24ely1h32y0yz2spj21f30u0goy.jpg" alt="80365661.png" loading="lazy"></p>
<p>在上面的示意图中，“当前处理的对象”的一个引用就被应用线程给断开了，即这个部分的对象关系发生了变化</p>
<p><strong>3）重新标记</strong></p>
<p>重新标记阶段用户线程会短暂STW，因为上一个阶段中，用户线程和GC线程是同时执行的，在这期间用户线程可能会导致一些对象地址的移动，重新标记阶段会修正这些对象的地址信息。</p>
<p><strong>4）并发清除</strong></p>
<p>并发清除阶段会采用会将之前阶段标记的垃圾对象进行清除，期间可以和用户线程并发执行。</p>
<p><strong>5）并发重置</strong></p>
<p>此阶段与应用程序并发执行，重置 CMS 算法相关的内部数据，为下一次 GC 循环做准备。</p>
<h3 id="minor-gc-小型-gc" tabindex="-1"><a class="header-anchor" href="#minor-gc-小型-gc" aria-hidden="true">#</a> <strong>Minor GC（小型 GC）</strong></h3>
<p>收集年轻代内存的 GC 事件称为 Minor GC。关于 Minor GC 事件，我们需要了解一些相关的内容：</p>
<ol>
<li>
<p>当 JVM 无法为新对象分配内存空间时就会触发 Minor GC（ 一般就是 Eden 区用满了）。如果对象的分配速率很快，那么 Minor GC 的次数也就会很多，频率也就会很快。</p>
</li>
<li>
<p>Minor GC 事件不处理老年代，所以会把所有从老年代指向年轻代的引用都当做 GC Root。从年轻代指向老年代的引用则在标记阶段被忽略。</p>
</li>
<li>
<p>与我们一般的认知相反，Minor GC 每次都会引起 STW 停顿（stop-the-world），挂起所有的应用线程。对大部分应用程序来说，Minor GC 的暂停时间可以忽略不计，因为 Eden 区里面的对象大部分都是垃圾，也不怎么复制到存活区/老年代。但如果不符合这种情况，那么很多新创建的对象就不能被 GC 清理，Minor GC 的停顿时间就会增大，就会产生比较明显的 GC 性能影响。</p>
</li>
</ol>
<h3 id="minor-gc-和-full-gc-触发条件" tabindex="-1"><a class="header-anchor" href="#minor-gc-和-full-gc-触发条件" aria-hidden="true">#</a> Minor GC  和 Full GC 触发条件</h3>
<p>我们知道，除了 Minor GC 外，另外两种 GC 事件则是：</p>
<ul>
<li>Major GC（大型 GC）：清理老年代空间（Old Space）的 GC 事件。</li>
<li>Full GC（完全 GC）：清理整个堆内存空间的 GC 事件，包括年轻代空间和老年代空间。</li>
</ul>
<h3 id="什么时候会触发-full-gc" tabindex="-1"><a class="header-anchor" href="#什么时候会触发-full-gc" aria-hidden="true">#</a> 什么时候会触发 Full GC ?</h3>
<ol>
<li>
<p><code v-pre>System.gc()</code> 方法的调用</p>
<p>此方法的调用是建议 JVM 进行 Full GC，虽然只是建议而非一定，但很多情况下它会触发 Full GC，从而增加Full GC 的频率，也即增加了间歇性停顿的次数。强烈影响系建议能不使用此方法就别使用，让虚拟机自己去管理它的内存，可通过通过 -XX:+ DisableExplicitGC 来禁止 RMI 调用 System.gc。</p>
</li>
<li>
<p>老年代空间不足</p>
<p>老年代空间只有在新生代对象转入及创建大对象、大数组时才会出现不足的现象，当执行 Full GC 后空间仍然不足，则抛出如下错误：java.lang.OutOfMemoryError: Java heap space 为避免以上两种状况引起的 Full GC，调优时应尽量做到让对象在 Minor GC 阶段被回收、让对象在新生代多存活一段时间及不要创建过大的对象及数组。</p>
</li>
<li>
<p>老年代的内存使用率达到了一定阈值（可通过参数调整），直接触发 FGC</p>
</li>
<li>
<p>空间分配担保：在 YGC 之前，会先检查老年代最大可用的连续空间是否大于新生代所有对象的总空间。如果小于，说明 YGC 是不安全的，则会查看参数 HandlePromotionFailure 是否被设置成了允许担保失败，如果不允许则直接触发 Full GC；如果允许，那么会进一步检查老年代最大可用的连续空间是否大于历次晋升到老年代对象的平均大小，如果小于也会触发 Full GC</p>
</li>
<li>
<p>Metaspace（元空间）在空间不足时会进行扩容，当扩容到了-XX:MetaspaceSize 参数的指定值时，也会触发FGC</p>
</li>
</ol>
<h3 id="system-gc-和-runtime-gc-会做什么事情" tabindex="-1"><a class="header-anchor" href="#system-gc-和-runtime-gc-会做什么事情" aria-hidden="true">#</a> System.gc() 和 Runtime.gc() 会做什么事情</h3>
<p><code v-pre>java.lang.System.gc()</code> 只是 <code v-pre>java.lang.Runtime.getRuntime().gc()</code> 的简写，两者的行为没有任何不同</p>
<p>其实基本没什么机会用得到这个命令，因为这个命令只是建议 JVM 安排 GC 运行，还有可能完全被拒绝。 GC 本身是会周期性的自动运行的，由 JVM 决定运行的时机，而且现在的版本有多种更智能的模式可以选择，还会根据运行的机器自动去做选择，就算真的有性能上的需求，也应该去对 GC 的运行机制进行微调，而不是通过使用这个命令来实现性能的优化</p>
<h3 id="safepoint-是什么" tabindex="-1"><a class="header-anchor" href="#safepoint-是什么" aria-hidden="true">#</a> SafePoint 是什么</h3>
<p>比如 GC 的时候必须要等到 Java 线程都进入到 safepoint 的时候 VMThread 才能开始 执行 GC，</p>
<ol>
<li>循环的末尾 (防止大循环的时候一直不进入 safepoint，而其他线程在等待它进入 safepoint)</li>
<li>方法返回前</li>
<li>调用方法的call之后</li>
<li>抛出异常的位置</li>
</ol>
<h3 id="你们用的是什么-gc-都有哪些配置" tabindex="-1"><a class="header-anchor" href="#你们用的是什么-gc-都有哪些配置" aria-hidden="true">#</a> 你们用的是什么 GC，都有哪些配置</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>xxx      143       1 54 Jun07 ?        1-13:05:06 /opt/local/jdk/bin/java -Djava.util.logging.config.file=/opt/local/tomcat/conf/logging.properties -Djava.util.logging.manager=org.apache.juli.ClassLoaderLogManager -server -Xmn1024m -Xms22938M -Xmx22938M -XX:PermSize=512m -XX:MaxPermSize=512m -XX:ParallelGCThreads=3 -XX:+UseConcMarkSweepGC -XX:+UseCMSInitiatingOccupancyOnly -XX:CMSInitiatingOccupancyFraction=80 -XX:+CMSScavengeBeforeRemark -XX:SoftRefLRUPolicyMSPerMB=0 -XX:ParallelGCThreads=3 -Xss1m -XX:+PrintGCDateStamps -XX:+PrintGCDetails -Xloggc:/opt/logs/gc.log -verbose:gc -XX:+DisableExplicitGC -Dsun.rmi.transport.tcp.maxConnectionThreads=400 -XX:+ParallelRefProcEnabled -XX:+PrintTenuringDistribution -Dsun.rmi.transport.tcp.handshakeTimeout=2000 -Xdebug -Xrunjdwp:transport=dt_socket,address=22062,server=y,suspend=n -Dcom.sun.management.snmp.port=18328 -Dcom.sun.management.snmp.interface=0.0.0.0 -Dcom.sun.management.snmp.acl=false -javaagent:/opt/opbin/service_control/script/jmx_prometheus_javaagent-0.13.0.jar=9999:/opt/opbin/service_control/script/config.yaml -Djdk.tls.ephemeralDHKeySize=2048 -Djava.protocol.handler.pkgs=org.apache.catalina.webresources -Dignore.endorsed.dirs= -classpath /opt/local/tomcat/bin/bootstrap.jar:/opt/local/tomcat/bin/tomcat-juli.jar -Dcatalina.base=/opt/local/tomcat -Dcatalina.home=/opt/local/tomcat -Djava.io.tmpdir=/opt/local/tomcat/temp org.apache.catalina.startup.Bootstrap start start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="java-11-的-zgc-和-java12-的-shenandoah-了解过吗" tabindex="-1"><a class="header-anchor" href="#java-11-的-zgc-和-java12-的-shenandoah-了解过吗" aria-hidden="true">#</a> Java 11 的 ZGC 和 Java12 的 Shenandoah 了解过吗</h3>
<p>ZGC 即 Z Garbage Collector（Z 垃圾收集器，Z 有 Zero 的意思，主要作者是 Oracle 的 Per Liden），这是一款低停顿、高并发，基于小堆块（region）、不分代的增量压缩式垃圾收集器，平均 GC 耗时不到 2 毫秒，最坏情况下的暂停时间也不超过 10 毫秒。</p>
<p>像 G1 和 ZGC 之类的现代 GC 算法，只要空闲的堆内存足够多，基本上不触发 FullGC。</p>
<p>所以很多时候，只要条件允许，加内存才是最有效的解决办法。</p>
<p>既然低延迟是 ZGC 的核心看点，而 JVM 低延迟的关键是 GC 暂停时间，那么我们来看看有哪些方法可以减少 GC 暂停时间：</p>
<ul>
<li>使用多线程“并行”清理堆内存，充分利用多核 CPU 的资源；</li>
<li>使用“分阶段”的方式运行 GC 任务，把暂停时间打散；</li>
<li>使用“增量”方式进行处理，每次 GC 只处理一部分堆内存（小堆块，region）；</li>
<li>让 GC 与业务线程“并发”执行，例如增加并发标记，并发清除等阶段，从而把暂停时间控制在非常短的范围内（目前来说还是必须使用少量的 STW 暂停，比如根对象的扫描，最终标记等阶段）；</li>
<li>完全不进行堆内存整理，比如 Golang 的 GC 就采用这种方式（题外话）。</li>
</ul>
<h2 id="四、监控和调优" tabindex="-1"><a class="header-anchor" href="#四、监控和调优" aria-hidden="true">#</a> 四、监控和调优</h2>
<h3 id="说说你知道的几种主要的-jvm-参数" tabindex="-1"><a class="header-anchor" href="#说说你知道的几种主要的-jvm-参数" aria-hidden="true">#</a> 说说你知道的几种主要的 JVM 参数</h3>
<p><strong>思路：</strong> 可以说一下堆栈配置相关的，垃圾收集器相关的，还有一下辅助信息相关的。</p>
<p><strong>我的答案：</strong></p>
<h4 id="_1-堆栈配置相关" tabindex="-1"><a class="header-anchor" href="#_1-堆栈配置相关" aria-hidden="true">#</a> 1）堆栈配置相关</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>java -Xmx3550m -Xms3550m -Xmn2g -Xss128k 
-XX:MaxPermSize=16m -XX:NewRatio=4 -XX:SurvivorRatio=4 -XX:MaxTenuringThreshold=0
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>-Xmx3550m：</strong> 最大堆大小为3550m。</p>
<p><strong>-Xms3550m：</strong> 设置初始堆大小为3550m。</p>
<p><strong>-Xmn2g：</strong> 设置年轻代大小为2g。</p>
<p><strong>-Xss128k：</strong> 每个线程的堆栈大小为128k。</p>
<p><strong>-XX:MaxPermSize：</strong>  设置持久代大小为16m</p>
<p><strong>-XX:NewRatio=4:</strong> 设置年轻代（包括Eden和两个Survivor区）与年老代的比值（除去持久代）。</p>
<p><strong>-XX:SurvivorRatio=4：</strong> 设置年轻代中Eden区与Survivor区的大小比值。设置为4，则两个Survivor区与一个Eden区的比值为2:4，一个Survivor区占整个年轻代的1/6</p>
<p><strong>-XX:MaxTenuringThreshold=0：</strong> 设置垃圾最大年龄。如果设置为0的话，则年轻代对象不经过Survivor区，直接进入年老代。</p>
<h4 id="_2-垃圾收集器相关" tabindex="-1"><a class="header-anchor" href="#_2-垃圾收集器相关" aria-hidden="true">#</a> 2）垃圾收集器相关</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-XX:+UseParallelGC
-XX:ParallelGCThreads=20
-XX:+UseConcMarkSweepGC 
-XX:CMSFullGCsBeforeCompaction=5
-XX:+UseCMSCompactAtFullCollection：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>-XX:+UseParallelGC：</strong> 选择垃圾收集器为并行收集器。</p>
<p><strong>-XX:ParallelGCThreads=20：</strong> 配置并行收集器的线程数</p>
<p><strong>-XX:+UseConcMarkSweepGC：</strong> 设置年老代为并发收集。</p>
<p><strong>-XX:CMSFullGCsBeforeCompaction</strong>：由于并发收集器不对内存空间进行压缩、整理，所以运行一段时间以后会产生“碎片”，使得运行效率降低。此值设置运行多少次GC以后对内存空间进行压缩、整理。</p>
<p><strong>-XX:+UseCMSCompactAtFullCollection：</strong> 打开对年老代的压缩。可能会影响性能，但是可以消除碎片</p>
<h4 id="_3-辅助信息相关" tabindex="-1"><a class="header-anchor" href="#_3-辅助信息相关" aria-hidden="true">#</a> 3）辅助信息相关</h4>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-XX:+PrintGC
-XX:+PrintGCDetails
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>-XX:+PrintGC 输出形式:</strong></p>
<p>[GC 118250K-&gt;113543K(130112K), 0.0094143 secs] [Full GC 121376K-&gt;10414K(130112K), 0.0650971 secs]</p>
<p><strong>-XX:+PrintGCDetails 输出形式:</strong></p>
<p>[GC [DefNew: 8614K-&gt;781K(9088K), 0.0123035 secs] 118250K-&gt;113543K(130112K), 0.0124633 secs] [GC [DefNew: 8614K-&gt;8614K(9088K), 0.0000665 secs][Tenured: 112761K-&gt;10414K(121024K), 0.0433488 secs] 121376K-&gt;10414K(130112K), 0.0436268 secs</p>
<h3 id="你平时工作用过的-jvm-常用基本配置参数有哪些" tabindex="-1"><a class="header-anchor" href="#你平时工作用过的-jvm-常用基本配置参数有哪些" aria-hidden="true">#</a> 你平时工作用过的 JVM 常用基本配置参数有哪些？</h3>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code># 设置堆内存
-Xmx4g -Xms4g 
# 指定 GC 算法
-XX:+UseG1GC -XX:MaxGCPauseMillis=50 
# 指定 GC 并行线程数
-XX:ParallelGCThreads=4 
# 打印 GC 日志
-XX:+PrintGCDetails -XX:+PrintGCDateStamps 
# 指定 GC 日志文件
-Xloggc:gc.log 
# 指定 Meta 区的最大值
-XX:MaxMetaspaceSize=2g 
# 设置单个线程栈的大小
-Xss1m 
# 指定堆内存溢出时自动进行 Dump
-XX:+HeapDumpOnOutOfMemoryError 
-XX:HeapDumpPath=/usr/local/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="你说你做过-jvm-调优和参数配置-请问如何盘点查看-jvm-系统默认值" tabindex="-1"><a class="header-anchor" href="#你说你做过-jvm-调优和参数配置-请问如何盘点查看-jvm-系统默认值" aria-hidden="true">#</a> 你说你做过  JVM 调优和参数配置，请问如何盘点查看 JVM 系统默认值</h3>
<h4 id="jvm参数类型" tabindex="-1"><a class="header-anchor" href="#jvm参数类型" aria-hidden="true">#</a> JVM参数类型</h4>
<ul>
<li>
<p>标配参数</p>
<ul>
<li>-version   (java -version)</li>
<li>-help       (java -help)</li>
<li>java -showversion</li>
</ul>
</li>
<li>
<p>X 参数（了解）</p>
<ul>
<li>
<p>-Xint 解释执行</p>
</li>
<li>
<p>-Xcomp 第一次使用就编译成本地代码</p>
</li>
<li>
<p>-Xmixed 混合模式</p>
</li>
</ul>
</li>
<li>
<p>xx参数</p>
<ul>
<li>
<p>Boolean 类型</p>
<ul>
<li>
<p>公式： -xx:+ 或者 - 某个属性值（+表示开启，- 表示关闭）</p>
</li>
<li>
<p>Case</p>
<ul>
<li>
<p>是否打印GC收集细节</p>
<ul>
<li>-XX:+PrintGCDetails</li>
<li>-XX:- PrintGCDetails</li>
</ul>
<p>添加如下参数后，重新查看，发现是 + 号了</p>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gdebrx25moj31170u042c.jpg" alt="" loading="lazy"></p>
</li>
<li>
<p>是否使用串行垃圾回收器</p>
<ul>
<li>-XX:-UseSerialGC</li>
</ul>
</li>
<li>
<p>-XX:+UseSerialGC</p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>KV 设值类型</p>
<ul>
<li>
<p>公式 -XX:属性key=属性 value</p>
</li>
<li>
<p>Case:</p>
<ul>
<li>
<p>-XX:MetaspaceSize=128m</p>
</li>
<li>
<p>-xx:MaxTenuringThreshold=15</p>
</li>
<li>
<p>我们常见的 -Xms和 -Xmx 也属于 KV 设值类型</p>
<ul>
<li>-Xms 等价于 -XX:InitialHeapSize</li>
<li>-Xmx 等价于 -XX:MaxHeapSize</li>
</ul>
<p><img src="https://tva1.sinaimg.cn/large/00831rSTly1gdecj9d7z3j310202qdgb.jpg" alt="" loading="lazy"></p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>jinfo 举例，如何查看当前运行程序的配置</p>
<ul>
<li>jps -l</li>
<li>jinfo -flag [配置项] 进程编号</li>
<li>jinfo <strong>-flags</strong> 1981(打印所有)</li>
<li>jinfo -flag PrintGCDetails 1981</li>
<li>jinfo -flag MetaspaceSize 2044</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>这些都是命令级别的查看，我们如何在程序运行中查看</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token keyword">long</span> totalMemory <span class="token operator">=</span> <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">totalMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">long</span> maxMemory <span class="token operator">=</span> <span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">maxMemory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"total_memory(-xms)="</span><span class="token operator">+</span>totalMemory<span class="token operator">+</span><span class="token string">"字节，"</span> <span class="token operator">+</span><span class="token punctuation">(</span>totalMemory<span class="token operator">/</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"MB"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"max_memory(-xmx)="</span><span class="token operator">+</span>maxMemory<span class="token operator">+</span><span class="token string">"字节，"</span> <span class="token operator">+</span><span class="token punctuation">(</span>maxMemory<span class="token operator">/</span><span class="token punctuation">(</span><span class="token keyword">double</span><span class="token punctuation">)</span><span class="token number">1024</span><span class="token operator">/</span><span class="token number">1024</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">"MB"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="盘点家底查看-jvm-默认值" tabindex="-1"><a class="header-anchor" href="#盘点家底查看-jvm-默认值" aria-hidden="true">#</a> 盘点家底查看 JVM 默认值</h3>
<ul>
<li>
<p>-XX:+PrintFlagsInitial</p>
<ul>
<li>
<p>主要查看初始默认值</p>
</li>
<li>
<p>java -XX:+PrintFlagsInitial</p>
</li>
<li>
<p>java -XX:+PrintFlagsInitial -version</p>
<p><strong>等号前有冒号</strong> :=  说明 jvm 参数有人为修改过或者 JVM加载修改</p>
<p>false 说明是Boolean 类型 参数，数字说明是 KV 类型参数</p>
</li>
</ul>
</li>
<li>
<p>-XX:+PrintFlagsFinal</p>
<ul>
<li>主要查看修改更新</li>
<li>java -XX:+PrintFlagsFinal</li>
<li>java -XX:+PrintFlagsFinal -version</li>
<li>运行java命令的同时打印出参数 java -XX:+PrintFlagsFinal -XX:MetaspaceSize=512m Hello.java</li>
</ul>
</li>
<li>
<p>-XX:+PrintCommondLineFlags</p>
<ul>
<li>打印命令行参数</li>
<li>java -XX:+PrintCommondLineFlags -version</li>
<li>可以方便的看到垃圾回收器</li>
<li><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gehf1e54soj31e006qjz6.jpg" alt="" loading="lazy"></li>
</ul>
</li>
</ul>
<p>参数不懂，推荐直接去看官网，</p>
<p><a href="https://docs.oracle.com/javacomponents/jrockit-hotspot/migration-guide/cloptions.htm#JRHMG127" target="_blank" rel="noopener noreferrer">https://docs.oracle.com/javacomponents/jrockit-hotspot/migration-guide/cloptions.htm#JRHMG127<ExternalLinkIcon/></a></p>
<p><a href="https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html#BGBCIEFC" target="_blank" rel="noopener noreferrer">https://docs.oracle.com/javase/8/docs/technotes/tools/unix/java.html#BGBCIEFC<ExternalLinkIcon/></a></p>
<p><a href="https://docs.oracle.com/javase/8/" target="_blank" rel="noopener noreferrer">https://docs.oracle.com/javase/8/<ExternalLinkIcon/></a></p>
<p>Java SE Tools Reference for UNIX](<a href="https://docs.oracle.com/javase/8/docs/technotes/tools/unix/index.html" target="_blank" rel="noopener noreferrer">https://docs.oracle.com/javase/8/docs/technotes/tools/unix/index.html<ExternalLinkIcon/></a>)</p>
<h3 id="能写几个-oom-代码不" tabindex="-1"><a class="header-anchor" href="#能写几个-oom-代码不" aria-hidden="true">#</a> 能写几个 OOM 代码不</h3>
<ul>
<li>
<p>java.lang.StackOverflowError</p>
<ul>
<li>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StackOverflowErrorDemo</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">stackoverflowError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">stackoverflowError</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">stackoverflowError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
</li>
<li>
<p>java.lang.OutOfMemoryError: Java heap space</p>
<ul>
<li>new个大对象,就会出现</li>
</ul>
</li>
<li>
<p>java.lang.OutOfMemoryError: GC overhead limit exceeded  (GC上头，哈哈)</p>
<ul>
<li><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gehmrz0dvaj311w0muk0e.jpg" alt="" loading="lazy"></li>
</ul>
</li>
<li>
<p>java.lang.OutOfMemoryError: Direct buffer memory</p>
<ul>
<li><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gehn18eix6j31a00m2wup.jpg" alt="" loading="lazy"></li>
<li><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gehn52fphnj31as0lidyh.jpg" alt="" loading="lazy"></li>
</ul>
</li>
<li>
<p>java.lang.OutOfMemoryError: unable to create new native thread</p>
<ul>
<li><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gehn7osaz1j31940kc4c8.jpg" alt="" loading="lazy"></li>
</ul>
</li>
<li>
<p>java.lang.OutOfMemoryError：Metaspace</p>
<ul>
<li><a href="http://openjdk.java.net/jeps/122" target="_blank" rel="noopener noreferrer">http://openjdk.java.net/jeps/122<ExternalLinkIcon/></a></li>
<li><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gehnc3d4g3j319e0msguj.jpg" alt="" loading="lazy"></li>
<li><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gehndijxo8j31920madt6.jpg" alt="" loading="lazy"></li>
</ul>
</li>
</ul>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gehmmia4gaj30xw0gudid.jpg" alt="" loading="lazy"></p>
<h3 id="谈谈你的-gc-调优思路" tabindex="-1"><a class="header-anchor" href="#谈谈你的-gc-调优思路" aria-hidden="true">#</a> 谈谈你的 GC 调优思路？</h3>
<blockquote>
<p>谈到调优，这一定是针对特定场景、特定目的的事情， 对于 GC 调优来说，首先就需要清楚调优的目标是什么？从性能的角度看，通常关注三个方面，<strong>内存占用</strong>（footprint）、<strong>延时</strong>（latency）和<strong>吞吐量</strong>（throughput），大多数情况下调优会侧重于其中一个或者两个方面的目标，很少有情况可以兼顾三个不同的角度。当然，除了上面通常的三个方面，也可能需要考虑其他 GC 相关的场景，例如，OOM 也可能与不合理的 GC 相关参数有关；或者，应用启动速度方面的需求，GC 也会是个考虑的方面。</p>
<ul>
<li><strong>延迟（Latency）：</strong> 也可以理解为最大停顿时间，即垃圾收集过程中一次 STW 的最长时间，越短越好，一定程度上可以接受频次的增大，GC 技术的主要发展方向。</li>
<li><strong>吞吐量（Throughput）：</strong> 应用系统的生命周期内，由于 GC 线程会占用 Mutator 当前可用的 CPU 时钟周期，吞吐量即为 Mutator 有效花费的时间占系统总运行时间的百分比，例如系统运行了 100 min，GC 耗时 1 min，则系统吞吐量为 99%，吞吐量优先的收集器可以接受较长的停顿。</li>
</ul>
<p>基本的调优思路可以总结为：</p>
<ul>
<li>理解应用需求和问题，确定调优目标。假设，我们开发了一个应用服务，但发现偶尔会出现性能抖动，出现较长的服务停顿。评估用户可接受的响应时间和业务量，将目标简化为，希望 GC 暂停尽量控制在 200ms 以内，并且保证一定标准的吞吐量。</li>
<li>掌握 JVM 和 GC 的状态，定位具体的问题，确定真的有 GC 调优的必要。具体有很多方法，比如，通过 jstat 等工具查看 GC 等相关状态，可以开启 GC 日志，或者是利用操作系统提供的诊断工具等。例如，通过追踪 GC 日志，就可以查找是不是 GC 在特定时间发生了长时间的暂停，进而导致了应用响应不及时。</li>
<li>这里需要思考，选择的 GC 类型是否符合我们的应用特征，如果是，具体问题表现在哪里，是 Minor GC 过长，还是 Mixed GC 等出现异常停顿情况；如果不是，考虑切换到什么类型，如 CMS 和 G1 都是更侧重于低延迟的 GC 选项。</li>
<li>通过分析确定具体调整的参数或者软硬件配置。</li>
<li>验证是否达到调优目标，如果达到目标，即可以考虑结束调优；否则，重复完成分析、调整、验证这个过程。</li>
</ul>
</blockquote>
<h3 id="怎么打出线程栈信息。" tabindex="-1"><a class="header-anchor" href="#怎么打出线程栈信息。" aria-hidden="true">#</a> 怎么打出线程栈信息。</h3>
<p><strong>思路：</strong> 可以说一下jps，top ，jstack这几个命令，再配合一次排查线上问题进行解答。</p>
<p><strong>我的答案：</strong></p>
<ul>
<li>输入jps，获得进程号。</li>
<li>top -Hp pid 获取本进程中所有线程的CPU耗时性能</li>
<li>jstack pid命令查看当前java进程的堆栈状态</li>
<li>或者 jstack -l  &gt; /tmp/output.txt 把堆栈信息打到一个txt文件。</li>
<li>可以使用 fastthread 堆栈定位，<a href="http://fastthread.io/" target="_blank" rel="noopener noreferrer">fastthread.io/<ExternalLinkIcon/></a></li>
</ul>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gehofhsuglj31a20ka116.jpg" alt="" loading="lazy"></p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gehohen24lj31f20n2du8.jpg" alt="" loading="lazy"></p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1geholtp9p9j31bu0i8dsm.jpg" alt="" loading="lazy"></p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gehop8c2u8j30uu0kgk46.jpg" alt="" loading="lazy"></p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gehptemx4oj31520js47e.jpg" alt="" loading="lazy"></p>
<p><img src="https://tva1.sinaimg.cn/large/007S8ZIlly1gehps6jzcsj31go0mok5q.jpg" alt="" loading="lazy"></p>
<h3 id="_7-怎么查看服务器默认的垃圾收集器是哪个-生产上如何配置垃圾收集器-谈谈你对垃圾收集器的理解" tabindex="-1"><a class="header-anchor" href="#_7-怎么查看服务器默认的垃圾收集器是哪个-生产上如何配置垃圾收集器-谈谈你对垃圾收集器的理解" aria-hidden="true">#</a> 7.怎么查看服务器默认的垃圾收集器是哪个？生产上如何配置垃圾收集器？谈谈你对垃圾收集器的理解？</h3>
<h3 id="_9-生产环境服务器变慢-诊断思路和性能评估谈谈" tabindex="-1"><a class="header-anchor" href="#_9-生产环境服务器变慢-诊断思路和性能评估谈谈" aria-hidden="true">#</a> 9.生产环境服务器变慢，诊断思路和性能评估谈谈？</h3>
<h3 id="_10-假设生产环境出现-cpu占用过高-请谈谈你的分析思路和定位" tabindex="-1"><a class="header-anchor" href="#_10-假设生产环境出现-cpu占用过高-请谈谈你的分析思路和定位" aria-hidden="true">#</a> 10.假设生产环境出现 CPU占用过高，请谈谈你的分析思路和定位</h3>
<h3 id="_11-对于jdk-自带的jvm-监控和性能分析工具用过哪些-你是怎么用的" tabindex="-1"><a class="header-anchor" href="#_11-对于jdk-自带的jvm-监控和性能分析工具用过哪些-你是怎么用的" aria-hidden="true">#</a> 11. 对于JDK 自带的JVM 监控和性能分析工具用过哪些？你是怎么用的？</h3>
<ul>
<li>jconsole  直接在jdk/bin目录下点击jconsole.exe即可启动</li>
<li>VisualVM   jdk/bin目录下面jvisualvm.exe</li>
</ul>
<p><a href="https://www.cnblogs.com/ityouknow/p/6437037.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/ityouknow/p/6437037.html<ExternalLinkIcon/></a></p>
</div></template>
