<template><div><h2 id="基础概念与常识" tabindex="-1"><a class="header-anchor" href="#基础概念与常识" aria-hidden="true">#</a> 基础概念与常识</h2>
<h3 id="java-语言有哪些特点" tabindex="-1"><a class="header-anchor" href="#java-语言有哪些特点" aria-hidden="true">#</a> Java 语言有哪些特点?</h3>
<ol>
<li>简单易学；</li>
<li>面向对象（封装，继承，多态）；</li>
<li>平台无关性（ Java 虚拟机实现平台无关性）；</li>
<li>支持多线程（ C++ 语言没有内置的多线程机制，因此必须调用操作系统的多线程功能来进行多线程程序设计，而 Java 语言却提供了多线程支持）；</li>
<li>可靠性；</li>
<li>安全性；</li>
<li>支持网络编程并且很方便（ Java 语言诞生本身就是为简化网络编程设计的，因此 Java 语言不仅支持网络编程而且很方便）；</li>
<li>编译与解释并存；</li>
</ol>
<blockquote>
<p><strong>🐛 修正（参见： <a href="https://github.com/Snailclimb/JavaGuide/issues/544" target="_blank" rel="noopener noreferrer">issue#544<ExternalLinkIcon/></a>）</strong> ：C++11 开始（2011 年的时候）,C++就引入了多线程库，在 windows、linux、macos 都可以使用<code v-pre>std::thread</code>和<code v-pre>std::async</code>来创建线程。参考链接：<a href="http://www.cplusplus.com/reference/thread/thread/?kw=thread" target="_blank" rel="noopener noreferrer">http://www.cplusplus.com/reference/thread/thread/?kw=thread<ExternalLinkIcon/></a></p>
</blockquote>
<p>🌈 拓展一下：</p>
<p>“Write Once, Run Anywhere（一次编写，随处运行）”这句宣传口号，真心经典，流传了好多年！以至于，直到今天，依然有很多人觉得跨平台是 Java 语言最大的优势。实际上，跨平台已经不是 Java 最大的卖点了，各种 JDK 新特性也不是。目前市面上虚拟化技术已经非常成熟，比如你通过 Docker 就很容易实现跨平台了。在我看来，Java 强大的生态才是！</p>
<h3 id="jvm-vs-jdk-vs-jre" tabindex="-1"><a class="header-anchor" href="#jvm-vs-jdk-vs-jre" aria-hidden="true">#</a> JVM vs JDK vs JRE</h3>
<h4 id="jvm" tabindex="-1"><a class="header-anchor" href="#jvm" aria-hidden="true">#</a> JVM</h4>
<p>Java 虚拟机（JVM）是运行 Java 字节码的虚拟机。JVM 有针对不同系统的特定实现（Windows，Linux，macOS），目的是使用相同的字节码，它们都会给出相同的结果。字节码和不同系统的 JVM 实现是 Java 语言“一次编译，随处可以运行”的关键所在。</p>
<p><strong>JVM 并不是只有一种！只要满足 JVM 规范，每个公司、组织或者个人都可以开发自己的专属 JVM。</strong> 也就是说我们平时接触到的 HotSpot VM 仅仅是是 JVM 规范的一种实现而已。</p>
<p>除了我们平时最常用的 HotSpot VM 外，还有 J9 VM、Zing VM、JRockit VM 等 JVM 。维基百科上就有常见 JVM 的对比：<a href="https://en.wikipedia.org/wiki/Comparison_of_Java_virtual_machines" target="_blank" rel="noopener noreferrer">Comparison of Java virtual machines<ExternalLinkIcon/></a> ，感兴趣的可以去看看。并且，你可以在 <a href="https://docs.oracle.com/javase/specs/index.html" target="_blank" rel="noopener noreferrer">Java SE Specifications<ExternalLinkIcon/></a> 上找到各个版本的 JDK 对应的 JVM 规范。</p>
<p><img src="@source/code/java/common/basic/images/java-se-specifications.png" alt="Java SE Specifications" loading="lazy"></p>
<h4 id="jdk-和-jre" tabindex="-1"><a class="header-anchor" href="#jdk-和-jre" aria-hidden="true">#</a> JDK 和 JRE</h4>
<p>JDK 是 Java Development Kit 缩写，它是功能齐全的 Java SDK。它拥有 JRE 所拥有的一切，还有编译器（javac）和工具（如 javadoc 和 jdb）。它能够创建和编译程序。</p>
<p>JRE 是 Java 运行时环境。它是运行已编译 Java 程序所需的所有内容的集合，包括 Java 虚拟机（JVM），Java 类库，java 命令和其他的一些基础构件。但是，它不能用于创建新程序。</p>
<p>如果你只是为了运行一下 Java 程序的话，那么你只需要安装 JRE 就可以了。如果你需要进行一些 Java 编程方面的工作，那么你就需要安装 JDK 了。但是，这不是绝对的。有时，即使您不打算在计算机上进行任何 Java 开发，仍然需要安装 JDK。例如，如果要使用 JSP 部署 Web 应用程序，那么从技术上讲，您只是在应用程序服务器中运行 Java 程序。那你为什么需要 JDK 呢？因为应用程序服务器会将 JSP 转换为 Java servlet，并且需要使用 JDK 来编译 servlet。</p>
<h3 id="什么是字节码-采用字节码的好处是什么" tabindex="-1"><a class="header-anchor" href="#什么是字节码-采用字节码的好处是什么" aria-hidden="true">#</a> 什么是字节码?采用字节码的好处是什么?</h3>
<p>在 Java 中，JVM 可以理解的代码就叫做字节码（即扩展名为 <code v-pre>.class</code> 的文件），它不面向任何特定的处理器，只面向虚拟机。Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以， Java 程序运行时相对来说还是高效的（不过，和 C++，Rust，Go 等语言还是有一定差距的），而且，由于字节码并不针对一种特定的机器，因此，Java 程序无须重新编译便可在多种不同操作系统的计算机上运行。</p>
<p><strong>Java 程序从源代码到运行的过程如下图所示：</strong></p>
<p><img src="@source/code/java/common/basic/images/java程序转变为机器代码的过程.png" alt="Java程序转变为机器代码的过程" loading="lazy"></p>
<p>我们需要格外注意的是 <code v-pre>.class-&gt;机器码</code> 这一步。在这一步 JVM 类加载器首先加载字节码文件，然后通过解释器逐行解释执行，这种方式的执行速度会相对比较慢。而且，有些方法和代码块是经常需要被调用的(也就是所谓的热点代码)，所以后面引进了 JIT（just-in-time compilation） 编译器，而 JIT 属于运行时编译。当 JIT 编译器完成第一次编译后，其会将字节码对应的机器码保存下来，下次可以直接使用。而我们知道，机器码的运行效率肯定是高于 Java 解释器的。这也解释了我们为什么经常会说 <strong>Java 是编译与解释共存的语言</strong> 。</p>
<blockquote>
<p>HotSpot 采用了惰性评估(Lazy Evaluation)的做法，根据二八定律，消耗大部分系统资源的只有那一小部分的代码（热点代码），而这也就是 JIT 所需要编译的部分。JVM 会根据代码每次被执行的情况收集信息并相应地做出一些优化，因此执行的次数越多，它的速度就越快。JDK 9 引入了一种新的编译模式 AOT(Ahead of Time Compilation)，它是直接将字节码编译成机器码，这样就避免了 JIT 预热等各方面的开销。JDK 支持分层编译和 AOT 协作使用。但是 ，AOT 编译器的编译质量是肯定比不上 JIT 编译器的。</p>
</blockquote>
<h3 id="为什么说-java-语言-编译与解释并存" tabindex="-1"><a class="header-anchor" href="#为什么说-java-语言-编译与解释并存" aria-hidden="true">#</a> 为什么说 Java 语言“编译与解释并存”？</h3>
<p>其实这个问题我们讲字节码的时候已经提到过，因为比较重要，所以我们这里再提一下。</p>
<p>我们可以将高级编程语言按照程序的执行方式分为两种：</p>
<ul>
<li><strong>编译型</strong> ：<a href="https://zh.wikipedia.org/wiki/%E7%B7%A8%E8%AD%AF%E8%AA%9E%E8%A8%80" target="_blank" rel="noopener noreferrer">编译型语言<ExternalLinkIcon/></a> 会通过<a href="https://zh.wikipedia.org/wiki/%E7%B7%A8%E8%AD%AF%E5%99%A8" target="_blank" rel="noopener noreferrer">编译器<ExternalLinkIcon/></a>将源代码一次性翻译成可被该平台执行的机器码。一般情况下，编译语言的执行速度比较快，开发效率比较低。常见的编译性语言有 C、C++、Go、Rust 等等。</li>
<li><strong>解释型</strong> ：<a href="https://zh.wikipedia.org/wiki/%E7%9B%B4%E8%AD%AF%E8%AA%9E%E8%A8%80" target="_blank" rel="noopener noreferrer">解释型语言<ExternalLinkIcon/></a>会通过<a href="https://zh.wikipedia.org/wiki/%E7%9B%B4%E8%AD%AF%E5%99%A8" target="_blank" rel="noopener noreferrer">解释器<ExternalLinkIcon/></a>一句一句的将代码解释（interpret）为机器代码后再执行。解释型语言开发效率比较快，执行速度比较慢。常见的解释性语言有 Python、JavaScript、PHP 等等。</li>
</ul>
<p><img src="@source/code/java/common/basic/images/编译型语言和解释型语言.png" alt="编译型语言和解释型语言" loading="lazy"></p>
<p>根据维基百科介绍：</p>
<blockquote>
<p>为了改善编译语言的效率而发展出的<a href="https://zh.wikipedia.org/wiki/%E5%8D%B3%E6%99%82%E7%B7%A8%E8%AD%AF" target="_blank" rel="noopener noreferrer">即时编译<ExternalLinkIcon/></a>技术，已经缩小了这两种语言间的差距。这种技术混合了编译语言与解释型语言的优点，它像编译语言一样，先把程序源代码编译成<a href="https://zh.wikipedia.org/wiki/%E5%AD%97%E8%8A%82%E7%A0%81" target="_blank" rel="noopener noreferrer">字节码<ExternalLinkIcon/></a>。到执行期时，再将字节码直译，之后执行。<a href="https://zh.wikipedia.org/wiki/Java" target="_blank" rel="noopener noreferrer">Java<ExternalLinkIcon/></a>与<a href="https://zh.wikipedia.org/wiki/LLVM" target="_blank" rel="noopener noreferrer">LLVM<ExternalLinkIcon/></a>是这种技术的代表产物。</p>
<p>相关阅读：<a href="https://tech.meituan.com/2020/10/22/java-jit-practice-in-meituan.html" target="_blank" rel="noopener noreferrer">基本功 | Java 即时编译器原理解析及实践<ExternalLinkIcon/></a></p>
</blockquote>
<p><strong>为什么说 Java 语言“编译与解释并存”？</strong></p>
<p>这是因为 Java 语言既具有编译型语言的特征，也具有解释型语言的特征。因为 Java 程序要经过先编译，后解释两个步骤，由 Java 编写的程序需要先经过编译步骤，生成字节码（<code v-pre>.class</code> 文件），这种字节码必须由 Java 解释器来解释执行。</p>
<h3 id="oracle-jdk-vs-openjdk" tabindex="-1"><a class="header-anchor" href="#oracle-jdk-vs-openjdk" aria-hidden="true">#</a> Oracle JDK vs OpenJDK</h3>
<p>可能在看这个问题之前很多人和我一样并没有接触和使用过 OpenJDK 。那么 Oracle JDK 和 OpenJDK 之间是否存在重大差异？下面我通过收集到的一些资料，为你解答这个被很多人忽视的问题。</p>
<p>对于 Java 7，没什么关键的地方。OpenJDK 项目主要基于 Sun 捐赠的 HotSpot 源代码。此外，OpenJDK 被选为 Java 7 的参考实现，由 Oracle 工程师维护。关于 JVM，JDK，JRE 和 OpenJDK 之间的区别，Oracle 博客帖子在 2012 年有一个更详细的答案：</p>
<blockquote>
<p>问：OpenJDK 存储库中的源代码与用于构建 Oracle JDK 的代码之间有什么区别？</p>
<p>答：非常接近 - 我们的 Oracle JDK 版本构建过程基于 OpenJDK 7 构建，只添加了几个部分，例如部署代码，其中包括 Oracle 的 Java 插件和 Java WebStart 的实现，以及一些闭源的第三方组件，如图形光栅化器，一些开源的第三方组件，如 Rhino，以及一些零碎的东西，如附加文档或第三方字体。展望未来，我们的目的是开源 Oracle JDK 的所有部分，除了我们考虑商业功能的部分。</p>
</blockquote>
<p><strong>总结：</strong>（提示：下面括号内的内容是基于原文补充说明的，因为原文太过于晦涩难懂，用人话重新解释了下，如果你看得懂里面的术语，可以忽略括号解释的内容）</p>
<ol>
<li>
<p>Oracle JDK 大概每 6 个月发一次主要版本（从 2014 年 3 月 JDK 8 LTS 发布到 2017 年 9 月 JDK 9 发布经历了长达 3 年多的时间，所以并不总是 6 个月），而 OpenJDK 版本大概每三个月发布一次。但这不是固定的，我觉得了解这个没啥用处。详情参见：<a href="https://blogs.oracle.com/java-platform-group/update-and-faq-on-the-java-se-release-cadence" target="_blank" rel="noopener noreferrer">https://blogs.oracle.com/java-platform-group/update-and-faq-on-the-java-se-release-cadence<ExternalLinkIcon/></a> 。</p>
</li>
<li>
<p>OpenJDK 是一个参考模型并且是完全开源的，而 Oracle JDK 是 OpenJDK 的一个实现，并不是完全开源的；（个人观点：众所周知，JDK 原来是 SUN 公司开发的，后来 SUN 公司又卖给了 Oracle 公司，Oracle 公司以 Oracle 数据库而著名，而 Oracle 数据库又是闭源的，这个时候 Oracle 公司就不想完全开源了，但是原来的 SUN 公司又把 JDK 给开源了，如果这个时候 Oracle 收购回来之后就把他给闭源，必然会引其很多 Java 开发者的不满，导致大家对 Java 失去信心，那 Oracle 公司收购回来不就把 Java 烂在手里了吗！然后，Oracle 公司就想了个骚操作，这样吧，我把一部分核心代码开源出来给你们玩，并且我要和你们自己搞的 JDK 区分下，你们叫 OpenJDK，我叫 Oracle JDK，我发布我的，你们继续玩你们的，要是你们搞出来什么好玩的东西，我后续发布 Oracle JDK 也会拿来用一下，一举两得！）OpenJDK 开源项目：<a href="https://github.com/openjdk/jdk" target="_blank" rel="noopener noreferrer">https://github.com/openjdk/jdk<ExternalLinkIcon/></a></p>
</li>
<li>
<p>Oracle JDK 比 OpenJDK 更稳定（肯定啦，Oracle JDK 由 Oracle 内部团队进行单独研发的，而且发布时间比 OpenJDK 更长，质量更有保障）。OpenJDK 和 Oracle JDK 的代码几乎相同（OpenJDK 的代码是从 Oracle JDK 代码派生出来的，可以理解为在 Oracle JDK 分支上拉了一条新的分支叫 OpenJDK，所以大部分代码相同），但 Oracle JDK 有更多的类和一些错误修复。因此，如果您想开发企业/商业软件，我建议您选择 Oracle JDK，因为它经过了彻底的测试和稳定。某些情况下，有些人提到在使用 OpenJDK 可能会遇到了许多应用程序崩溃的问题，但是，只需切换到 Oracle JDK 就可以解决问题；</p>
</li>
<li>
<p>在响应性和 JVM 性能方面，Oracle JDK 与 OpenJDK 相比提供了更好的性能；</p>
</li>
<li>
<p>Oracle JDK 不会为即将发布的版本提供长期支持（如果是 LTS 长期支持版本的话也会，比如 JDK 8，但并不是每个版本都是 LTS 版本），用户每次都必须通过更新到最新版本获得支持来获取最新版本；</p>
</li>
<li>
<p>Oracle JDK 使用 BCL/OTN 协议获得许可，而 OpenJDK 根据 GPL v2 许可获得许可。</p>
</li>
</ol>
<blockquote>
<p>既然 Oracle JDK 这么好，那为什么还要有 OpenJDK？</p>
<p>答：</p>
<ol>
<li>
<p>OpenJDK 是开源的，开源意味着你可以对它根据你自己的需要进行修改、优化，比如 Alibaba 基于 OpenJDK 开发了 Dragonwell8：<a href="https://github.com/alibaba/dragonwell8" target="_blank" rel="noopener noreferrer">https://github.com/alibaba/dragonwell8<ExternalLinkIcon/></a></p>
</li>
<li>
<p>OpenJDK 是商业免费的（这也是为什么通过 yum 包管理器上默认安装的 JDK 是 OpenJDK 而不是 Oracle JDK）。虽然 Oracle JDK 也是商业免费（比如 JDK 8），但并不是所有版本都是免费的。</p>
</li>
<li>
<p>OpenJDK 更新频率更快。Oracle JDK 一般是每 6 个月发布一个新版本，而 OpenJDK 一般是每 3 个月发布一个新版本。（现在你知道为啥 Oracle JDK 更稳定了吧，先在 OpenJDK 试试水，把大部分问题都解决掉了才在 Oracle JDK 上发布）</p>
</li>
</ol>
<p>基于以上这些原因，OpenJDK 还是有存在的必要的！</p>
</blockquote>
<p><img src="@source/code/java/common/basic/images/oracle-jdk-release-cadence.jpg" alt="oracle jdk release cadence" loading="lazy"></p>
<p>🌈 拓展一下：</p>
<ul>
<li>BCL 协议（Oracle Binary Code License Agreement）： 可以使用 JDK（支持商用），但是不能进行修改。</li>
<li>OTN 协议（Oracle Technology Network License Agreement）： 11 及之后新发布的 JDK 用的都是这个协议，可以自己私下用，但是商用需要付费。</li>
</ul>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/20210425151835918.png" alt="" loading="lazy"></p>
<p>相关阅读 👍：<a href="https://www.baeldung.com/oracle-jdk-vs-openjdk" target="_blank" rel="noopener noreferrer">《Differences Between Oracle JDK and OpenJDK》<ExternalLinkIcon/></a></p>
<h3 id="java-和-c-的区别" tabindex="-1"><a class="header-anchor" href="#java-和-c-的区别" aria-hidden="true">#</a> Java 和 C++ 的区别?</h3>
<p>我知道很多人没学过 C++，但是面试官就是没事喜欢拿咱们 Java 和 C++ 比呀！没办法！！！就算没学过 C++，也要记下来。</p>
<p>虽然，Java 和 C++ 都是面向对象的语言，都支持封装、继承和多态，但是，它们还是有挺多不相同的地方：</p>
<ul>
<li>Java 不提供指针来直接访问内存，程序内存更加安全</li>
<li>Java 的类是单继承的，C++ 支持多重继承；虽然 Java 的类不可以多继承，但是接口可以多继承。</li>
<li>Java 有自动内存管理垃圾回收机制(GC)，不需要程序员手动释放无用内存。</li>
<li>C ++同时支持方法重载和操作符重载，但是 Java 只支持方法重载（操作符重载增加了复杂性，这与 Java 最初的设计思想不符）。</li>
<li>......</li>
</ul>
<h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h2>
<h3 id="字符型常量和字符串常量的区别" tabindex="-1"><a class="header-anchor" href="#字符型常量和字符串常量的区别" aria-hidden="true">#</a> 字符型常量和字符串常量的区别?</h3>
<ol>
<li><strong>形式</strong> : 字符常量是单引号引起的一个字符，字符串常量是双引号引起的 0 个或若干个字符。</li>
<li><strong>含义</strong> : 字符常量相当于一个整型值( ASCII 值),可以参加表达式运算; 字符串常量代表一个地址值(该字符串在内存中存放位置)。</li>
<li><strong>占内存大小</strong> ： 字符常量只占 2 个字节; 字符串常量占若干个字节。</li>
</ol>
<p>(<strong>注意： <code v-pre>char</code> 在 Java 中占两个字节</strong>)</p>
<h3 id="注释有哪几种形式" tabindex="-1"><a class="header-anchor" href="#注释有哪几种形式" aria-hidden="true">#</a> 注释有哪几种形式？</h3>
<p>Java 中的注释有三种：</p>
<ol>
<li>
<p>单行注释</p>
</li>
<li>
<p>多行注释</p>
</li>
<li>
<p>文档注释。</p>
</li>
</ol>
<p>在我们编写代码的时候，如果代码量比较少，我们自己或者团队其他成员还可以很轻易地看懂代码，但是当项目结构一旦复杂起来，我们就需要用到注释了。注释并不会执行(编译器在编译代码之前会把代码中的所有注释抹掉,字节码中不保留注释)，是我们程序员写给自己看的，注释是你的代码说明书，能够帮助看代码的人快速地理清代码之间的逻辑关系。因此，在写程序的时候随手加上注释是一个非常好的习惯。</p>
<p>《Clean Code》这本书明确指出：</p>
<blockquote>
<p><strong>代码的注释不是越详细越好。实际上好的代码本身就是注释，我们要尽量规范和美化自己的代码来减少不必要的注释。</strong></p>
<p><strong>若编程语言足够有表达力，就不需要注释，尽量通过代码来阐述。</strong></p>
<p>举个例子：</p>
<p>去掉下面复杂的注释，只需要创建一个与注释所言同一事物的函数即可</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// check to see if the employee is eligible for full benefits</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>employee<span class="token punctuation">.</span>flags <span class="token operator">&amp;</span> HOURLY_FLAG<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>employee<span class="token punctuation">.</span>age <span class="token operator">></span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>应替换为</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>employee<span class="token punctuation">.</span><span class="token function">isEligibleForFullBenefits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<h3 id="标识符和关键字的区别是什么" tabindex="-1"><a class="header-anchor" href="#标识符和关键字的区别是什么" aria-hidden="true">#</a> 标识符和关键字的区别是什么？</h3>
<p>在我们编写程序的时候，需要大量地为程序、类、变量、方法等取名字，于是就有了 <strong>标识符</strong> 。简单来说， <strong>标识符就是一个名字</strong> 。</p>
<p>有一些标识符，Java 语言已经赋予了其特殊的含义，只能用于特定的地方，这些特殊的标识符就是 <strong>关键字</strong> 。简单来说，<strong>关键字是被赋予特殊含义的标识</strong>符 。比如，在我们的日常生活中，如果我们想要开一家店，则要给这个店起一个名字，起的这个“名字”就叫标识符。但是我们店的名字不能叫“警察局”，因为“警察局”这个名字已经被赋予了特殊的含义，而“警察局”就是我们日常生活中的关键字。</p>
<h3 id="java-语言关键字有哪些" tabindex="-1"><a class="header-anchor" href="#java-语言关键字有哪些" aria-hidden="true">#</a> Java 语言关键字有哪些？</h3>
<table>
<thead>
<tr>
<th style="text-align:left">分类</th>
<th>关键字</th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">访问控制</td>
<td>private</td>
<td>protected</td>
<td>public</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align:left">类，方法和变量修饰符</td>
<td>abstract</td>
<td>class</td>
<td>extends</td>
<td>final</td>
<td>implements</td>
<td>interface</td>
<td>native</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td>new</td>
<td>static</td>
<td>strictfp</td>
<td>synchronized</td>
<td>transient</td>
<td>volatile</td>
<td>enum</td>
</tr>
<tr>
<td style="text-align:left">程序控制</td>
<td>break</td>
<td>continue</td>
<td>return</td>
<td>do</td>
<td>while</td>
<td>if</td>
<td>else</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td>for</td>
<td>instanceof</td>
<td>switch</td>
<td>case</td>
<td>default</td>
<td>assert</td>
<td></td>
</tr>
<tr>
<td style="text-align:left">错误处理</td>
<td>try</td>
<td>catch</td>
<td>throw</td>
<td>throws</td>
<td>finally</td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align:left">包相关</td>
<td>import</td>
<td>package</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align:left">基本类型</td>
<td>boolean</td>
<td>byte</td>
<td>char</td>
<td>double</td>
<td>float</td>
<td>int</td>
<td>long</td>
</tr>
<tr>
<td style="text-align:left"></td>
<td>short</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align:left">变量引用</td>
<td>super</td>
<td>this</td>
<td>void</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td style="text-align:left">保留字</td>
<td>goto</td>
<td>const</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<blockquote>
<p>Tips：所有的关键字都是小写的，在 IDE 中会以特殊颜色显示。</p>
<p><code v-pre>default</code> 这个关键字很特殊，既属于程序控制，也属于类，方法和变量修饰符，还属于访问控制。</p>
<ul>
<li>在程序控制中，当在 <code v-pre>switch</code> 中匹配不到任何情况时，可以使用 <code v-pre>default</code> 来编写默认匹配的情况。</li>
<li>在类，方法和变量修饰符中，从 JDK8 开始引入了默认方法，可以使用 <code v-pre>default</code> 关键字来定义一个方法的默认实现。</li>
<li>在访问控制中，如果一个方法前没有任何修饰符，则默认会有一个修饰符 <code v-pre>default</code>，但是这个修饰符加上了就会报错。</li>
</ul>
</blockquote>
<p>⚠️注意 ：虽然 <code v-pre>true</code>, <code v-pre>false</code>, 和 <code v-pre>null</code> 看起来像关键字但实际上他们是字面值，同时你也不可以作为标识符来使用。</p>
<p>官方文档：<a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html" target="_blank" rel="noopener noreferrer">https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html<ExternalLinkIcon/></a></p>
<h3 id="自增自减运算符" tabindex="-1"><a class="header-anchor" href="#自增自减运算符" aria-hidden="true">#</a> 自增自减运算符</h3>
<p>在写代码的过程中，常见的一种情况是需要某个整数类型变量增加 1 或减少 1，Java 提供了一种特殊的运算符，用于这种表达式，叫做自增运算符（++)和自减运算符（--）。</p>
<p>++ 和 -- 运算符可以放在变量之前，也可以放在变量之后，当运算符放在变量之前时(前缀)，先自增/减，再赋值；当运算符放在变量之后时(后缀)，先赋值，再自增/减。例如，当 <code v-pre>b = ++a</code> 时，先自增（自己增加 1），再赋值（赋值给 b）；当 <code v-pre>b = a++</code> 时，先赋值(赋值给 b)，再自增（自己增加 1）。也就是，++a 输出的是 a+1 的值，a++输出的是 a 值。用一句口诀就是：“符号在前就先加/减，符号在后就后加/减”。</p>
<h3 id="continue、break-和-return-的区别是什么" tabindex="-1"><a class="header-anchor" href="#continue、break-和-return-的区别是什么" aria-hidden="true">#</a> continue、break 和 return 的区别是什么？</h3>
<p>在循环结构中，当循环条件不满足或者循环次数达到要求时，循环会正常结束。但是，有时候可能需要在循环的过程中，当发生了某种条件之后 ，提前终止循环，这就需要用到下面几个关键词：</p>
<ol>
<li><code v-pre>continue</code> ：指跳出当前的这一次循环，继续下一次循环。</li>
<li><code v-pre>break</code> ：指跳出整个循环体，继续执行循环下面的语句。</li>
</ol>
<p><code v-pre>return</code> 用于跳出所在方法，结束该方法的运行。return 一般有两种用法：</p>
<ol>
<li><code v-pre>return;</code> ：直接使用 return 结束方法执行，用于没有返回值函数的方法</li>
<li><code v-pre>return value;</code> ：return 一个特定值，用于有返回值函数的方法</li>
</ol>
<p>思考一下：下列语句的运行结果是什么？</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"4"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"xixi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"haha"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"heihei"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>0
xixi
1
2
xixi
3
haha
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h3>
<h4 id="什么是方法的返回值-方法有哪几种类型" tabindex="-1"><a class="header-anchor" href="#什么是方法的返回值-方法有哪几种类型" aria-hidden="true">#</a> 什么是方法的返回值?方法有哪几种类型？</h4>
<p><strong>方法的返回值</strong> 是指我们获取到的某个方法体中的代码执行后产生的结果！（前提是该方法可能产生结果）。返回值的作用是接收出结果，使得它可以用于其他的操作！</p>
<p>我们可以按照方法的返回值和参数类型将方法分为下面这几种：</p>
<p><strong>1.无参数无返回值的方法</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//......</span>
<span class="token punctuation">}</span>
<span class="token comment">// 下面这个方法也没有返回值，虽然用到了 return</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 表示结束方法的执行,下方的输出语句不会执行</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2.有参数无返回值的方法</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">f2</span><span class="token punctuation">(</span><span class="token class-name">Parameter</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">,</span> <span class="token class-name">Parameter</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.有返回值无参数的方法</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">f3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//......</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.有返回值有参数的方法</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">f4</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a <span class="token operator">*</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="静态方法为什么不能调用非静态成员" tabindex="-1"><a class="header-anchor" href="#静态方法为什么不能调用非静态成员" aria-hidden="true">#</a> 静态方法为什么不能调用非静态成员?</h4>
<p>这个需要结合 JVM 的相关知识，主要原因如下：</p>
<ol>
<li>静态方法是属于类的，在类加载的时候就会分配内存，可以通过类名直接访问。而非静态成员属于实例对象，只有在对象实例化之后才存在，需要通过类的实例对象去访问。</li>
<li>在类的非静态成员不存在的时候静态成员就已经存在了，此时调用在内存中还不存在的非静态成员，属于非法操作。</li>
</ol>
<h4 id="静态方法和实例方法有何不同" tabindex="-1"><a class="header-anchor" href="#静态方法和实例方法有何不同" aria-hidden="true">#</a> 静态方法和实例方法有何不同？</h4>
<p><strong>1、调用方式</strong></p>
<p>在外部调用静态方法时，可以使用 <code v-pre>类名.方法名</code> 的方式，也可以使用 <code v-pre>对象.方法名</code> 的方式，而实例方法只有后面这种方式。也就是说，<strong>调用静态方法可以无需创建对象</strong> 。</p>
<p>不过，需要注意的是一般不建议使用 <code v-pre>对象.方法名</code> 的方式来调用静态方法。这种方式非常容易造成混淆，静态方法不属于类的某个对象而是属于这个类。</p>
<p>因此，一般建议使用 <code v-pre>类名.方法名</code> 的方式来调用静态方法。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">//......</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">staicMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token comment">//......</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用实例方法</span>
        person<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用静态方法</span>
        <span class="token class-name">Person</span><span class="token punctuation">.</span><span class="token function">staicMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、访问类成员是否存在限制</strong></p>
<p>静态方法在访问本类的成员时，只允许访问静态成员（即静态成员变量和静态方法），不允许访问实例成员（即实例成员变量和实例方法），而实例方法不存在这个限制。</p>
<h4 id="重载和重写的区别" tabindex="-1"><a class="header-anchor" href="#重载和重写的区别" aria-hidden="true">#</a> 重载和重写的区别</h4>
<blockquote>
<p>重载就是同样的一个方法能够根据输入数据的不同，做出不同的处理</p>
<p>重写就是当子类继承自父类的相同方法，输入数据一样，但要做出有别于父类的响应时，你就要覆盖父类方法</p>
</blockquote>
<p><strong>重载</strong></p>
<p>发生在同一个类中（或者父类和子类之间），方法名必须相同，参数类型不同、个数不同、顺序不同，方法返回值和访问修饰符可以不同。</p>
<p>《Java 核心技术》这本书是这样介绍重载的：</p>
<blockquote>
<p>如果多个方法(比如 <code v-pre>StringBuilder</code> 的构造方法)有相同的名字、不同的参数， 便产生了重载。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">StringBuilder</span> sb2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token string">"HelloWorld"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编译器必须挑选出具体执行哪个方法，它通过用各个方法给出的参数类型与特定方法调用所使用的值类型进行匹配来挑选出相应的方法。 如果编译器找不到匹配的参数， 就会产生编译时错误， 因为根本不存在匹配， 或者没有一个比其他的更好(这个过程被称为重载解析(overloading resolution))。</p>
<p>Java 允许重载任何方法， 而不只是构造器方法。</p>
</blockquote>
<p>综上：重载就是同一个类中多个同名方法根据不同的传参来执行不同的逻辑处理。</p>
<p><strong>重写</strong></p>
<p>重写发生在运行期，是子类对父类的允许访问的方法的实现过程进行重新编写。</p>
<ol>
<li>方法名、参数列表必须相同，子类方法返回值类型应比父类方法返回值类型更小或相等，抛出的异常范围小于等于父类，访问修饰符范围大于等于父类。</li>
<li>如果父类方法访问修饰符为 <code v-pre>private/final/static</code> 则子类就不能重写该方法，但是被 <code v-pre>static</code> 修饰的方法能够被再次声明。</li>
<li>构造方法无法被重写</li>
</ol>
<p>综上：<strong>重写就是子类对父类方法的重新改造，外部样子不能改变，内部逻辑可以改变。</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">区别点</th>
<th style="text-align:left">重载方法</th>
<th style="text-align:left">重写方法</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">发生范围</td>
<td style="text-align:left">同一个类</td>
<td style="text-align:left">子类</td>
</tr>
<tr>
<td style="text-align:left">参数列表</td>
<td style="text-align:left">必须修改</td>
<td style="text-align:left">一定不能修改</td>
</tr>
<tr>
<td style="text-align:left">返回类型</td>
<td style="text-align:left">可修改</td>
<td style="text-align:left">子类方法返回值类型应比父类方法返回值类型更小或相等</td>
</tr>
<tr>
<td style="text-align:left">异常</td>
<td style="text-align:left">可修改</td>
<td style="text-align:left">子类方法声明抛出的异常类应比父类方法声明抛出的异常类更小或相等；</td>
</tr>
<tr>
<td style="text-align:left">访问修饰符</td>
<td style="text-align:left">可修改</td>
<td style="text-align:left">一定不能做更严格的限制（可以降低限制）</td>
</tr>
<tr>
<td style="text-align:left">发生阶段</td>
<td style="text-align:left">编译期</td>
<td style="text-align:left">运行期</td>
</tr>
</tbody>
</table>
<p><strong>方法的重写要遵循“两同两小一大”</strong>（以下内容摘录自《疯狂 Java 讲义》，<a href="https://github.com/Snailclimb/JavaGuide/issues/892" target="_blank" rel="noopener noreferrer">issue#892<ExternalLinkIcon/></a> ）：</p>
<ul>
<li>“两同”即方法名相同、形参列表相同；</li>
<li>“两小”指的是子类方法返回值类型应比父类方法返回值类型更小或相等，子类方法声明抛出的异常类应比父类方法声明抛出的异常类更小或相等；</li>
<li>“一大”指的是子类方法的访问权限应比父类方法的访问权限更大或相等。</li>
</ul>
<p>⭐️ 关于 <strong>重写的返回值类型</strong> 这里需要额外多说明一下，上面的表述不太清晰准确：如果方法的返回类型是 void 和基本数据类型，则返回值重写时不可修改。但是如果方法的返回值是引用类型，重写时是可以返回该引用类型的子类的。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Hero</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"超级英雄"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuperMan</span> <span class="token keyword">extends</span> <span class="token class-name">Hero</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"超人"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Hero</span> <span class="token function">hero</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Hero</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SuperSuperMan</span> <span class="token keyword">extends</span> <span class="token class-name">SuperMan</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"超级超级英雄"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">SuperMan</span> <span class="token function">hero</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">SuperMan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="什么是可变长参数" tabindex="-1"><a class="header-anchor" href="#什么是可变长参数" aria-hidden="true">#</a> 什么是可变长参数？</h3>
<p>从 Java5 开始，Java 支持定义可变长参数，所谓可变长参数就是允许在调用方法时传入不定长度的参数。就比如下面的这个 <code v-pre>printVariable</code> 方法就可以接受 0 个或者多个参数。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，可变参数只能作为函数的最后一个参数，但其前面可以有也可以没有任何其他参数。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token class-name">String</span> arg1<span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
   <span class="token comment">//......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>遇到方法重载的情况怎么办呢？会优先匹配固定参数还是可变参数的方法呢？</strong></p>
<p>答案是会优先匹配固定参数的方法，因为固定参数的方法匹配度更高。</p>
<p>我们通过下面这个例子来证明一下。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@date</span> 2021/12/13 16:52
 **/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VariableLengthArgument</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printVariable</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> s <span class="token operator">:</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printVariable</span><span class="token punctuation">(</span><span class="token class-name">String</span> arg1<span class="token punctuation">,</span> <span class="token class-name">String</span> arg2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arg1 <span class="token operator">+</span> arg2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">printVariable</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printVariable</span><span class="token punctuation">(</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">,</span> <span class="token string">"d"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>ab
a
b
c
d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，Java 的可变参数编译后实际会被转换成一个数组，我们看编译后生成的 <code v-pre>class</code>文件就可以看出来了。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">VariableLengthArgument</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">printVariable</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> var1 <span class="token operator">=</span> args<span class="token punctuation">;</span>
        <span class="token keyword">int</span> var2 <span class="token operator">=</span> args<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> var3 <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> var3 <span class="token operator">&lt;</span> var2<span class="token punctuation">;</span> <span class="token operator">++</span>var3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> s <span class="token operator">=</span> var1<span class="token punctuation">[</span>var3<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
    <span class="token comment">// ......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h2>
<h3 id="java-中的几种基本数据类型了解么" tabindex="-1"><a class="header-anchor" href="#java-中的几种基本数据类型了解么" aria-hidden="true">#</a> Java 中的几种基本数据类型了解么？</h3>
<p>Java 中有 8 种基本数据类型，分别为：</p>
<ul>
<li>6 种数字类型：
<ul>
<li>4 种整数型：<code v-pre>byte</code>、<code v-pre>short</code>、<code v-pre>int</code>、<code v-pre>long</code></li>
<li>2 种浮点型：<code v-pre>float</code>、<code v-pre>double</code></li>
</ul>
</li>
<li>1 种字符类型：<code v-pre>char</code></li>
<li>1 种布尔型：<code v-pre>boolean</code>。</li>
</ul>
<p>这 8 种基本数据类型的默认值以及所占空间的大小如下：</p>
<table>
<thead>
<tr>
<th style="text-align:left">基本类型</th>
<th style="text-align:left">位数</th>
<th style="text-align:left">字节</th>
<th style="text-align:left">默认值</th>
<th>取值范围</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>byte</code></td>
<td style="text-align:left">8</td>
<td style="text-align:left">1</td>
<td style="text-align:left">0</td>
<td>-128 ~ 127</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>short</code></td>
<td style="text-align:left">16</td>
<td style="text-align:left">2</td>
<td style="text-align:left">0</td>
<td>-32768 ~ 32767</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>int</code></td>
<td style="text-align:left">32</td>
<td style="text-align:left">4</td>
<td style="text-align:left">0</td>
<td>-2147483648 ~ 2147483647</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>long</code></td>
<td style="text-align:left">64</td>
<td style="text-align:left">8</td>
<td style="text-align:left">0L</td>
<td>-9223372036854775808 ~ 9223372036854775807</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>char</code></td>
<td style="text-align:left">16</td>
<td style="text-align:left">2</td>
<td style="text-align:left">'u0000'</td>
<td>0 ~ 65535</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>float</code></td>
<td style="text-align:left">32</td>
<td style="text-align:left">4</td>
<td style="text-align:left">0f</td>
<td>1.4E-45 ~ 3.4028235E38</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>double</code></td>
<td style="text-align:left">64</td>
<td style="text-align:left">8</td>
<td style="text-align:left">0d</td>
<td>4.9E-324 ~ 1.7976931348623157E308</td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>boolean</code></td>
<td style="text-align:left">1</td>
<td style="text-align:left"></td>
<td style="text-align:left">false</td>
<td>true、false</td>
</tr>
</tbody>
</table>
<p>对于 <code v-pre>boolean</code>，官方文档未明确定义，它依赖于 JVM 厂商的具体实现。逻辑上理解是占用 1 位，但是实际中会考虑计算机高效存储因素。</p>
<p>另外，Java 的每种基本类型所占存储空间的大小不会像其他大多数语言那样随机器硬件架构的变化而变化。这种所占存储空间大小的不变性是 Java 程序比用其他大多数语言编写的程序更具可移植性的原因之一（《Java 编程思想》2.2 节有提到）。</p>
<p><strong>注意：</strong></p>
<ol>
<li>Java 里使用 <code v-pre>long</code> 类型的数据一定要在数值后面加上 <strong>L</strong>，否则将作为整型解析。</li>
<li><code v-pre>char a = 'h'</code>char :单引号，<code v-pre>String a = &quot;hello&quot;</code> :双引号。</li>
</ol>
<p>这八种基本类型都有对应的包装类分别为：<code v-pre>Byte</code>、<code v-pre>Short</code>、<code v-pre>Integer</code>、<code v-pre>Long</code>、<code v-pre>Float</code>、<code v-pre>Double</code>、<code v-pre>Character</code>、<code v-pre>Boolean</code> 。</p>
<h3 id="基本类型和包装类型的区别" tabindex="-1"><a class="header-anchor" href="#基本类型和包装类型的区别" aria-hidden="true">#</a> 基本类型和包装类型的区别？</h3>
<ul>
<li>成员变量包装类型不赋值就是 <code v-pre>null</code> ，而基本类型有默认值且不是 <code v-pre>null</code>。</li>
<li>包装类型可用于泛型，而基本类型不可以。</li>
<li>基本数据类型的局部变量存放在 Java 虚拟机栈中的局部变量表中，基本数据类型的成员变量（未被 <code v-pre>static</code> 修饰 ）存放在 Java 虚拟机的堆中。包装类型属于对象类型，我们知道几乎所有对象实例都存在于堆中。</li>
<li>相比于对象类型， 基本数据类型占用的空间非常小。</li>
</ul>
<p><strong>为什么说是几乎所有对象实例呢？</strong> 这是因为 HotSpot 虚拟机引入了 JIT 优化之后，会对对象进行逃逸分析，如果发现某一个对象并没有逃逸到方法外部，那么就可能通过标量替换来实现栈上分配，而避免堆上分配内存</p>
<p>⚠️注意  ： <strong>基本数据类型存放在栈中是一个常见的误区！</strong> 基本数据类型的成员变量如果没有被 <code v-pre>static</code> 修饰的话（不建议这么使用，应该要使用基本数据类型对应的包装类型），就存放在堆中。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">BasicTypeVar</span><span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token keyword">int</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="包装类型的缓存机制了解么" tabindex="-1"><a class="header-anchor" href="#包装类型的缓存机制了解么" aria-hidden="true">#</a> 包装类型的缓存机制了解么？</h3>
<p>Java 基本数据类型的包装类型的大部分都用到了缓存机制来提升性能。</p>
<p><code v-pre>Byte</code>,<code v-pre>Short</code>,<code v-pre>Integer</code>,<code v-pre>Long</code> 这 4 种包装类默认创建了数值 <strong>[-128，127]</strong> 的相应类型的缓存数据，<code v-pre>Character</code> 创建了数值在 <strong>[0,127]</strong> 范围的缓存数据，<code v-pre>Boolean</code> 直接返回 <code v-pre>True</code> or <code v-pre>False</code>。</p>
<p><strong>Integer 缓存源码：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Integer</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">>=</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>low <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;=</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>high<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token operator">-</span><span class="token class-name">IntegerCache</span><span class="token punctuation">.</span>low<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">IntegerCache</span> <span class="token punctuation">{</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> low <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">128</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> high<span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token comment">// high value may be configured by property</span>
        <span class="token keyword">int</span> h <span class="token operator">=</span> <span class="token number">127</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>Character</code> 缓存源码:</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Character</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">char</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>c <span class="token operator">&lt;=</span> <span class="token number">127</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// must cache</span>
      <span class="token keyword">return</span> <span class="token class-name">CharacterCache</span><span class="token punctuation">.</span>cache<span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>c<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Character</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">CharacterCache</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">CharacterCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Character</span> cache<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Character</span><span class="token punctuation">[</span><span class="token number">127</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cache<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
            cache<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Character</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>Boolean</code> 缓存源码：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Boolean</span> <span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token keyword">boolean</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>b <span class="token operator">?</span> TRUE <span class="token operator">:</span> FALSE<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果超出对应范围仍然会去创建新的对象，缓存的范围区间的大小只是在性能和资源之间的权衡。</p>
<p>两种浮点数类型的包装类 <code v-pre>Float</code>,<code v-pre>Double</code> 并没有实现缓存机制。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Integer</span> i1 <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> i2 <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i1 <span class="token operator">==</span> i2<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出 true</span>

<span class="token class-name">Float</span> i11 <span class="token operator">=</span> <span class="token number">333f</span><span class="token punctuation">;</span>
<span class="token class-name">Float</span> i22 <span class="token operator">=</span> <span class="token number">333f</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i11 <span class="token operator">==</span> i22<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出 false</span>

<span class="token class-name">Double</span> i3 <span class="token operator">=</span> <span class="token number">1.2</span><span class="token punctuation">;</span>
<span class="token class-name">Double</span> i4 <span class="token operator">=</span> <span class="token number">1.2</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i3 <span class="token operator">==</span> i4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 输出 false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面我们来看一下问题。下面的代码的输出结果是 <code v-pre>true</code> 还是 <code v-pre>false</code> 呢？</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Integer</span> i1 <span class="token operator">=</span> <span class="token number">40</span><span class="token punctuation">;</span>
<span class="token class-name">Integer</span> i2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Integer</span><span class="token punctuation">(</span><span class="token number">40</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i1<span class="token operator">==</span>i2<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>Integer i1=40</code> 这一行代码会发生装箱，也就是说这行代码等价于 <code v-pre>Integer i1=Integer.valueOf(40)</code> 。因此，<code v-pre>i1</code> 直接使用的是缓存中的对象。而<code v-pre>Integer i2 = new Integer(40)</code> 会直接创建新的对象。</p>
<p>因此，答案是 <code v-pre>false</code> 。你答对了吗？</p>
<p>记住：<strong>所有整型包装类对象之间值的比较，全部使用 equals 方法比较</strong>。</p>
<p><img src="https://img-blog.csdnimg.cn/20210422164544846.png" alt="" loading="lazy"></p>
<h3 id="自动装箱与拆箱了解吗-原理是什么" tabindex="-1"><a class="header-anchor" href="#自动装箱与拆箱了解吗-原理是什么" aria-hidden="true">#</a> 自动装箱与拆箱了解吗？原理是什么？</h3>
<p><strong>什么是自动拆装箱？</strong></p>
<ul>
<li><strong>装箱</strong>：将基本类型用它们对应的引用类型包装起来；</li>
<li><strong>拆箱</strong>：将包装类型转换为基本数据类型；</li>
</ul>
<p>举例：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Integer</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  <span class="token comment">//装箱</span>
<span class="token keyword">int</span> n <span class="token operator">=</span> i<span class="token punctuation">;</span>   <span class="token comment">//拆箱</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这两行代码对应的字节码为：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>   L1

    LINENUMBER <span class="token number">8</span> L1

    ALOAD <span class="token number">0</span>

    BIPUSH <span class="token number">10</span>

    INVOKESTATIC java<span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Integer</span><span class="token punctuation">.</span>valueOf <span class="token punctuation">(</span><span class="token class-name">I</span><span class="token punctuation">)</span><span class="token class-name">Ljava</span><span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Integer</span><span class="token punctuation">;</span>

    PUTFIELD <span class="token class-name">AutoBoxTest</span><span class="token punctuation">.</span>i <span class="token operator">:</span> <span class="token class-name">Ljava</span><span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Integer</span><span class="token punctuation">;</span>

   L2

    LINENUMBER <span class="token number">9</span> L2

    ALOAD <span class="token number">0</span>

    ALOAD <span class="token number">0</span>

    GETFIELD <span class="token class-name">AutoBoxTest</span><span class="token punctuation">.</span>i <span class="token operator">:</span> <span class="token class-name">Ljava</span><span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Integer</span><span class="token punctuation">;</span>

    INVOKEVIRTUAL java<span class="token operator">/</span>lang<span class="token operator">/</span><span class="token class-name">Integer</span><span class="token punctuation">.</span>intValue <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token class-name">I</span>

    PUTFIELD <span class="token class-name">AutoBoxTest</span><span class="token punctuation">.</span>n <span class="token operator">:</span> <span class="token class-name">I</span>

    RETURN
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从字节码中，我们发现装箱其实就是调用了 包装类的<code v-pre>valueOf()</code>方法，拆箱其实就是调用了 <code v-pre>xxxValue()</code>方法。</p>
<p>因此，</p>
<ul>
<li><code v-pre>Integer i = 10</code> 等价于 <code v-pre>Integer i = Integer.valueOf(10)</code></li>
<li><code v-pre>int n = i</code> 等价于 <code v-pre>int n = i.intValue()</code>;</li>
</ul>
<p>注意：<strong>如果频繁拆装箱的话，也会严重影响系统的性能。我们应该尽量避免不必要的拆装箱操作。</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 应该使用 long 而不是 Long</span>
    <span class="token class-name">Long</span> sum <span class="token operator">=</span> <span class="token number">0L</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">long</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span>MAX_VALUE<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
        sum <span class="token operator">+=</span> i<span class="token punctuation">;</span>
    <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li><a href="https://stackoverflow.com/questions/1906445/what-is-the-difference-between-jdk-and-jre" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/1906445/what-is-the-difference-between-jdk-and-jre<ExternalLinkIcon/></a></li>
<li><a href="https://www.educba.com/oracle-vs-openjdk/" target="_blank" rel="noopener noreferrer">https://www.educba.com/oracle-vs-openjdk/<ExternalLinkIcon/></a></li>
<li><a href="https://stackoverflow.com/questions/22358071/differences-between-oracle-jdk-and-openjdk" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/22358071/differences-between-oracle-jdk-and-openjdk<ExternalLinkIcon/></a></li>
</ul>
</div></template>
