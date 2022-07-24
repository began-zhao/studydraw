<template><div><h1 id="类加载过程详解" tabindex="-1"><a class="header-anchor" href="#类加载过程详解" aria-hidden="true">#</a> 类加载过程详解</h1>
<h2 id="类的生命周期" tabindex="-1"><a class="header-anchor" href="#类的生命周期" aria-hidden="true">#</a> 类的生命周期</h2>
<p>一个类的完整生命周期如下：</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-11/类加载过程-完善.png" alt="" loading="lazy"></p>
<h2 id="类加载过程" tabindex="-1"><a class="header-anchor" href="#类加载过程" aria-hidden="true">#</a> 类加载过程</h2>
<p>Class 文件需要加载到虚拟机中之后才能运行和使用，那么虚拟机是如何加载这些 Class 文件呢？</p>
<p>系统加载 Class 类型的文件主要三步：<strong>加载-&gt;连接-&gt;初始化</strong>。连接过程又可分为三步：<strong>验证-&gt;准备-&gt;解析</strong>。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/类加载过程.png" alt="" loading="lazy"></p>
<p>详见：<a href="https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-5.html#jvms-5.4" target="_blank" rel="noopener noreferrer">jvm规范5.4<ExternalLinkIcon/></a> 。</p>
<p><img src="https://img-blog.csdnimg.cn/20210607102244508.png" alt="" loading="lazy"></p>
<h3 id="加载" tabindex="-1"><a class="header-anchor" href="#加载" aria-hidden="true">#</a> 加载</h3>
<p>类加载过程的第一步，主要完成下面 3 件事情：</p>
<ol>
<li>通过全类名获取定义此类的二进制字节流</li>
<li>将字节流所代表的静态存储结构转换为方法区的运行时数据结构</li>
<li>在内存中生成一个代表该类的 <code v-pre>Class</code> 对象，作为方法区这些数据的访问入口</li>
</ol>
<p>虚拟机规范上面这 3 点并不具体，因此是非常灵活的。比如：&quot;通过全类名获取定义此类的二进制字节流&quot; 并没有指明具体从哪里获取、怎样获取。比如：比较常见的就是从 <code v-pre>ZIP</code> 包中读取（日后出现的 <code v-pre>JAR</code>、<code v-pre>EAR</code>、<code v-pre>WAR</code> 格式的基础）、其他文件生成（典型应用就是 <code v-pre>JSP</code>）等等。</p>
<p><strong>一个非数组类的加载阶段（加载阶段获取类的二进制字节流的动作）是可控性最强的阶段，这一步我们可以去完成还可以自定义类加载器去控制字节流的获取方式（重写一个类加载器的 <code v-pre>loadClass()</code> 方法）。数组类型不通过类加载器创建，它由 Java 虚拟机直接创建。</strong></p>
<p>类加载器、双亲委派模型也是非常重要的知识点，这部分内容会在后面的文章中单独介绍到。</p>
<p>加载阶段和连接阶段的部分内容是交叉进行的，加载阶段尚未结束，连接阶段可能就已经开始了。</p>
<h3 id="验证" tabindex="-1"><a class="header-anchor" href="#验证" aria-hidden="true">#</a> 验证</h3>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/验证阶段.png" alt="验证阶段示意图" loading="lazy"></p>
<h3 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h3>
<p><strong>准备阶段是正式为类变量分配内存并设置类变量初始值的阶段</strong>，这些内存都将在方法区中分配。对于该阶段有以下几点需要注意：</p>
<ol>
<li>这时候进行内存分配的仅包括类变量（ Class Variables ，即静态变量，被 <code v-pre>static</code> 关键字修饰的变量，只与类相关，因此被称为类变量），而不包括实例变量。实例变量会在对象实例化时随着对象一块分配在 Java 堆中。</li>
<li>从概念上讲，类变量所使用的内存都应当在 <strong>方法区</strong> 中进行分配。不过有一点需要注意的是：JDK 7 之前，HotSpot 使用永久代来实现方法区的时候，实现是完全符合这种逻辑概念的。 而在 JDK 7 及之后，HotSpot 已经把原本放在永久代的字符串常量池、静态变量等移动到堆中，这个时候类变量则会随着 Class 对象一起存放在 Java 堆中。相关阅读：<a href="https://github.com/fenixsoft/jvm_book/issues/75" target="_blank" rel="noopener noreferrer">《深入理解Java虚拟机（第3版）》勘误#75<ExternalLinkIcon/></a></li>
<li>这里所设置的初始值&quot;通常情况&quot;下是数据类型默认的零值（如 0、0L、null、false 等），比如我们定义了<code v-pre>public static int value=111</code> ，那么 value 变量在准备阶段的初始值就是 0 而不是 111（初始化阶段才会赋值）。特殊情况：比如给 value 变量加上了 final 关键字<code v-pre>public static final int value=111</code> ，那么准备阶段 value 的值就被赋值为 111。</li>
</ol>
<p><strong>基本数据类型的零值</strong> ： (图片来自《深入理解 Java 虚拟机》第 3 版  7.33 )</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/基本数据类型的零值.png" alt="基本数据类型的零值" loading="lazy"></p>
<h3 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h3>
<p>解析阶段是虚拟机将常量池内的符号引用替换为直接引用的过程。解析动作主要针对类或接口、字段、类方法、接口方法、方法类型、方法句柄和调用限定符 7 类符号引用进行。</p>
<p>符号引用就是一组符号来描述目标，可以是任何字面量。<strong>直接引用</strong>就是直接指向目标的指针、相对偏移量或一个间接定位到目标的句柄。在程序实际运行时，只有符号引用是不够的，举个例子：在程序执行方法时，系统需要明确知道这个方法所在的位置。Java 虚拟机为每个类都准备了一张方法表来存放类中所有的方法。当需要调用一个类的方法的时候，只要知道这个方法在方法表中的偏移量就可以直接调用该方法了。通过解析操作符号引用就可以直接转变为目标方法在类中方法表的位置，从而使得方法可以被调用。</p>
<p>综上，解析阶段是虚拟机将常量池内的符号引用替换为直接引用的过程，也就是得到类或者字段、方法在内存中的指针或者偏移量。</p>
<h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3>
<p>初始化阶段是执行初始化方法 <code v-pre>&lt;clinit&gt; ()</code>方法的过程，是类加载的最后一步，这一步 JVM 才开始真正执行类中定义的 Java 程序代码(字节码)。</p>
<blockquote>
<p>说明： <code v-pre>&lt;clinit&gt; ()</code>方法是编译之后自动生成的。</p>
</blockquote>
<p>对于<code v-pre>&lt;clinit&gt; ()</code> 方法的调用，虚拟机会自己确保其在多线程环境中的安全性。因为 <code v-pre>&lt;clinit&gt; ()</code> 方法是带锁线程安全，所以在多线程环境下进行类初始化的话可能会引起多个进程阻塞，并且这种阻塞很难被发现。</p>
<p>对于初始化阶段，虚拟机严格规范了有且只有 5 种情况下，必须对类进行初始化(只有主动去使用类才会初始化类)：</p>
<ol>
<li>当遇到 <code v-pre>new</code> 、 <code v-pre>getstatic</code>、<code v-pre>putstatic</code> 或 <code v-pre>invokestatic</code> 这 4 条直接码指令时，比如 <code v-pre>new</code> 一个类，读取一个静态字段(未被 final 修饰)、或调用一个类的静态方法时。
<ul>
<li>当 jvm 执行 <code v-pre>new</code> 指令时会初始化类。即当程序创建一个类的实例对象。</li>
<li>当 jvm 执行 <code v-pre>getstatic</code> 指令时会初始化类。即程序访问类的静态变量(不是静态常量，常量会被加载到运行时常量池)。</li>
<li>当 jvm 执行 <code v-pre>putstatic</code> 指令时会初始化类。即程序给类的静态变量赋值。</li>
<li>当 jvm 执行 <code v-pre>invokestatic</code> 指令时会初始化类。即程序调用类的静态方法。</li>
</ul>
</li>
<li>使用 <code v-pre>java.lang.reflect</code> 包的方法对类进行反射调用时如 <code v-pre>Class.forname(&quot;...&quot;)</code>, <code v-pre>newInstance()</code> 等等。如果类没初始化，需要触发其初始化。</li>
<li>初始化一个类，如果其父类还未初始化，则先触发该父类的初始化。</li>
<li>当虚拟机启动时，用户需要定义一个要执行的主类 (包含 <code v-pre>main</code> 方法的那个类)，虚拟机会先初始化这个类。</li>
<li><code v-pre>MethodHandle</code> 和 <code v-pre>VarHandle</code> 可以看作是轻量级的反射调用机制，而要想使用这 2 个调用，
就必须先使用 <code v-pre>findStaticVarHandle</code> 来初始化要调用的类。</li>
<li><strong>「补充，来自<a href="https://github.com/Snailclimb/JavaGuide/issues/745" target="_blank" rel="noopener noreferrer">issue745<ExternalLinkIcon/></a>」</strong> 当一个接口中定义了 JDK8 新加入的默认方法（被 default 关键字修饰的接口方法）时，如果有这个接口的实现类发生了初始化，那该接口要在其之前被初始化。</li>
</ol>
<h2 id="卸载" tabindex="-1"><a class="header-anchor" href="#卸载" aria-hidden="true">#</a> 卸载</h2>
<blockquote>
<p>卸载这部分内容来自 <a href="https://github.com/Snailclimb/JavaGuide/issues/662" target="_blank" rel="noopener noreferrer">issue#662<ExternalLinkIcon/></a>由 <strong><a href="https://github.com/guang19" target="_blank" rel="noopener noreferrer">guang19<ExternalLinkIcon/></a></strong> 补充完善。</p>
</blockquote>
<p>卸载类即该类的 Class 对象被 GC。</p>
<p>卸载类需要满足 3 个要求:</p>
<ol>
<li>该类的所有的实例对象都已被 GC，也就是说堆不存在该类的实例对象。</li>
<li>该类没有在其他任何地方被引用</li>
<li>该类的类加载器的实例已被 GC</li>
</ol>
<p>所以，在 JVM 生命周期内，由 jvm 自带的类加载器加载的类是不会被卸载的。但是由我们自定义的类加载器加载的类是可能被卸载的。</p>
<p>只要想通一点就好了，jdk 自带的 <code v-pre>BootstrapClassLoader</code>, <code v-pre>ExtClassLoader</code>, <code v-pre>AppClassLoader</code> 负责加载 jdk 提供的类，所以它们(类加载器的实例)肯定不会被回收。而我们自定义的类加载器的实例是可以被回收的，所以使用我们自定义加载器加载的类是可以被卸载掉的。</p>
<p><strong>参考</strong></p>
<ul>
<li>《深入理解 Java 虚拟机》</li>
<li>《实战 Java 虚拟机》</li>
<li><a href="https://docs.oracle.com/javase/specs/jvms/se7/html/jvms-5.html" target="_blank" rel="noopener noreferrer">https://docs.oracle.com/javase/specs/jvms/se7/html/jvms-5.html<ExternalLinkIcon/></a></li>
</ul>
</div></template>
