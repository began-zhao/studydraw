<template><div><h1 id="类文件结构详解" tabindex="-1"><a class="header-anchor" href="#类文件结构详解" aria-hidden="true">#</a> 类文件结构详解</h1>
<h2 id="一-概述" tabindex="-1"><a class="header-anchor" href="#一-概述" aria-hidden="true">#</a> 一 概述</h2>
<p>在 Java 中，JVM 可以理解的代码就叫做<code v-pre>字节码</code>（即扩展名为 <code v-pre>.class</code> 的文件），它不面向任何特定的处理器，只面向虚拟机。Java 语言通过字节码的方式，在一定程度上解决了传统解释型语言执行效率低的问题，同时又保留了解释型语言可移植的特点。所以 Java 程序运行时比较高效，而且，由于字节码并不针对一种特定的机器，因此，Java 程序无须重新编译便可在多种不同操作系统的计算机上运行。</p>
<p>Clojure（Lisp 语言的一种方言）、Groovy、Scala 等语言都是运行在 Java 虚拟机之上。下图展示了不同的语言被不同的编译器编译成<code v-pre>.class</code>文件最终运行在 Java 虚拟机之上。<code v-pre>.class</code>文件的二进制格式可以使用 <a href="https://www.x-ways.net/winhex/" target="_blank" rel="noopener noreferrer">WinHex<ExternalLinkIcon/></a> 查看。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/bg/desktop类文件结构概览.png" alt="java虚拟机" loading="lazy"></p>
<p>可以说<code v-pre>.class</code>文件是不同的语言在 Java 虚拟机之间的重要桥梁，同时也是支持 Java 跨平台很重要的一个原因。</p>
<h2 id="二-class-文件结构总结" tabindex="-1"><a class="header-anchor" href="#二-class-文件结构总结" aria-hidden="true">#</a> 二 Class 文件结构总结</h2>
<p>根据 Java 虚拟机规范，Class 文件通过 <code v-pre>ClassFile</code> 定义，有点类似 C 语言的结构体。</p>
<p><code v-pre>ClassFile</code> 的结构如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ClassFile</span> <span class="token punctuation">{</span>
    u4             magic<span class="token punctuation">;</span> <span class="token comment">//Class 文件的标志</span>
    u2             minor_version<span class="token punctuation">;</span><span class="token comment">//Class 的小版本号</span>
    u2             major_version<span class="token punctuation">;</span><span class="token comment">//Class 的大版本号</span>
    u2             constant_pool_count<span class="token punctuation">;</span><span class="token comment">//常量池的数量</span>
    cp_info        constant_pool<span class="token punctuation">[</span>constant_pool_count<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//常量池</span>
    u2             access_flags<span class="token punctuation">;</span><span class="token comment">//Class 的访问标记</span>
    u2             this_class<span class="token punctuation">;</span><span class="token comment">//当前类</span>
    u2             super_class<span class="token punctuation">;</span><span class="token comment">//父类</span>
    u2             interfaces_count<span class="token punctuation">;</span><span class="token comment">//接口</span>
    u2             interfaces<span class="token punctuation">[</span>interfaces_count<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//一个类可以实现多个接口</span>
    u2             fields_count<span class="token punctuation">;</span><span class="token comment">//Class 文件的字段属性</span>
    field_info     fields<span class="token punctuation">[</span>fields_count<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//一个类可以有多个字段</span>
    u2             methods_count<span class="token punctuation">;</span><span class="token comment">//Class 文件的方法数量</span>
    method_info    methods<span class="token punctuation">[</span>methods_count<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//一个类可以有个多个方法</span>
    u2             attributes_count<span class="token punctuation">;</span><span class="token comment">//此类的属性表中的属性数</span>
    attribute_info attributes<span class="token punctuation">[</span>attributes_count<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//属性表集合</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过分析 <code v-pre>ClassFile</code> 的内容，我们便可以知道 class 文件的组成。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/16d5ec47609818fc.jpeg" alt="" loading="lazy"></p>
<p>下面这张图是通过 IDEA 插件 <code v-pre>jclasslib</code> 查看的，你可以更直观看到 Class 文件结构。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/image-20210401170711475.png" alt="" loading="lazy"></p>
<p>使用 <code v-pre>jclasslib</code> 不光可以直观地查看某个类对应的字节码文件，还可以查看类的基本信息、常量池、接口、属性、函数等信息。</p>
<p>下面详细介绍一下 Class 文件结构涉及到的一些组件。</p>
<h3 id="_2-1-魔数-magic-number" tabindex="-1"><a class="header-anchor" href="#_2-1-魔数-magic-number" aria-hidden="true">#</a> 2.1 魔数（Magic Number）</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    u4             magic<span class="token punctuation">;</span> <span class="token comment">//Class 文件的标志</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>每个 Class 文件的头 4 个字节称为魔数（Magic Number）,它的唯一作用是<strong>确定这个文件是否为一个能被虚拟机接收的 Class 文件</strong>。</p>
<p>程序设计者很多时候都喜欢用一些特殊的数字表示固定的文件类型或者其它特殊的含义。</p>
<h3 id="_2-2-class-文件版本号-minor-major-version" tabindex="-1"><a class="header-anchor" href="#_2-2-class-文件版本号-minor-major-version" aria-hidden="true">#</a> 2.2 Class 文件版本号（Minor&amp;Major Version）</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    u2             minor_version<span class="token punctuation">;</span><span class="token comment">//Class 的小版本号</span>
    u2             major_version<span class="token punctuation">;</span><span class="token comment">//Class 的大版本号</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>紧接着魔数的四个字节存储的是 Class 文件的版本号：第 5 和第 6 位是<strong>次版本号</strong>，第 7 和第 8 位是<strong>主版本号</strong>。</p>
<p>每当 Java 发布大版本（比如 Java 8，Java9）的时候，主版本号都会加 1。你可以使用 <code v-pre>javap -v</code> 命令来快速查看 Class 文件的版本号信息。</p>
<p>高版本的 Java 虚拟机可以执行低版本编译器生成的 Class 文件，但是低版本的 Java 虚拟机不能执行高版本编译器生成的 Class 文件。所以，我们在实际开发的时候要确保开发的的 JDK 版本和生产环境的 JDK 版本保持一致。</p>
<h3 id="_2-3-常量池-constant-pool" tabindex="-1"><a class="header-anchor" href="#_2-3-常量池-constant-pool" aria-hidden="true">#</a> 2.3 常量池（Constant Pool）</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    u2             constant_pool_count<span class="token punctuation">;</span><span class="token comment">//常量池的数量</span>
    cp_info        constant_pool<span class="token punctuation">[</span>constant_pool_count<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//常量池</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>紧接着主次版本号之后的是常量池，常量池的数量是 <code v-pre>constant_pool_count-1</code>（<strong>常量池计数器是从 1 开始计数的，将第 0 项常量空出来是有特殊考虑的，索引值为 0 代表“不引用任何一个常量池项”</strong>）。</p>
<p>常量池主要存放两大常量：字面量和符号引用。字面量比较接近于 Java 语言层面的的常量概念，如文本字符串、声明为 final 的常量值等。而符号引用则属于编译原理方面的概念。包括下面三类常量：</p>
<ul>
<li>类和接口的全限定名</li>
<li>字段的名称和描述符</li>
<li>方法的名称和描述符</li>
</ul>
<p>常量池中每一项常量都是一个表，这 14 种表有一个共同的特点：<strong>开始的第一位是一个 u1 类型的标志位 -tag 来标识常量的类型，代表当前这个常量属于哪种常量类型．</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">类型</th>
<th style="text-align:center">标志（tag）</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">CONSTANT_utf8_info</td>
<td style="text-align:center">1</td>
<td style="text-align:center">UTF-8 编码的字符串</td>
</tr>
<tr>
<td style="text-align:center">CONSTANT_Integer_info</td>
<td style="text-align:center">3</td>
<td style="text-align:center">整形字面量</td>
</tr>
<tr>
<td style="text-align:center">CONSTANT_Float_info</td>
<td style="text-align:center">4</td>
<td style="text-align:center">浮点型字面量</td>
</tr>
<tr>
<td style="text-align:center">CONSTANT_Long_info</td>
<td style="text-align:center">５</td>
<td style="text-align:center">长整型字面量</td>
</tr>
<tr>
<td style="text-align:center">CONSTANT_Double_info</td>
<td style="text-align:center">６</td>
<td style="text-align:center">双精度浮点型字面量</td>
</tr>
<tr>
<td style="text-align:center">CONSTANT_Class_info</td>
<td style="text-align:center">７</td>
<td style="text-align:center">类或接口的符号引用</td>
</tr>
<tr>
<td style="text-align:center">CONSTANT_String_info</td>
<td style="text-align:center">８</td>
<td style="text-align:center">字符串类型字面量</td>
</tr>
<tr>
<td style="text-align:center">CONSTANT_Fieldref_info</td>
<td style="text-align:center">９</td>
<td style="text-align:center">字段的符号引用</td>
</tr>
<tr>
<td style="text-align:center">CONSTANT_Methodref_info</td>
<td style="text-align:center">10</td>
<td style="text-align:center">类中方法的符号引用</td>
</tr>
<tr>
<td style="text-align:center">CONSTANT_InterfaceMethodref_info</td>
<td style="text-align:center">11</td>
<td style="text-align:center">接口中方法的符号引用</td>
</tr>
<tr>
<td style="text-align:center">CONSTANT_NameAndType_info</td>
<td style="text-align:center">12</td>
<td style="text-align:center">字段或方法的符号引用</td>
</tr>
<tr>
<td style="text-align:center">CONSTANT_MothodType_info</td>
<td style="text-align:center">16</td>
<td style="text-align:center">标志方法类型</td>
</tr>
<tr>
<td style="text-align:center">CONSTANT_MethodHandle_info</td>
<td style="text-align:center">15</td>
<td style="text-align:center">表示方法句柄</td>
</tr>
<tr>
<td style="text-align:center">CONSTANT_InvokeDynamic_info</td>
<td style="text-align:center">18</td>
<td style="text-align:center">表示一个动态方法调用点</td>
</tr>
</tbody>
</table>
<p><code v-pre>.class</code> 文件可以通过<code v-pre>javap -v class类名</code> 指令来看一下其常量池中的信息(<code v-pre>javap -v class类名-&gt; temp.txt</code> ：将结果输出到 temp.txt 文件)。</p>
<h3 id="_2-4-访问标志-access-flags" tabindex="-1"><a class="header-anchor" href="#_2-4-访问标志-access-flags" aria-hidden="true">#</a> 2.4 访问标志(Access Flags)</h3>
<p>在常量池结束之后，紧接着的两个字节代表访问标志，这个标志用于识别一些类或者接口层次的访问信息，包括：这个 Class 是类还是接口，是否为 <code v-pre>public</code> 或者 <code v-pre>abstract</code> 类型，如果是类的话是否声明为 <code v-pre>final</code> 等等。</p>
<p>类访问和属性修饰符:</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/访问标志.png" alt="类访问和属性修饰符" loading="lazy"></p>
<p>我们定义了一个 Employee 类</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">top<span class="token punctuation">.</span>snailclimb<span class="token punctuation">.</span>bean</span><span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Employee</span> <span class="token punctuation">{</span>
   <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过<code v-pre>javap -v class类名</code> 指令来看一下类的访问标志。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/查看类的访问标志.png" alt="查看类的访问标志" loading="lazy"></p>
<h3 id="_2-5-当前类-this-class-、父类-super-class-、接口-interfaces-索引集合" tabindex="-1"><a class="header-anchor" href="#_2-5-当前类-this-class-、父类-super-class-、接口-interfaces-索引集合" aria-hidden="true">#</a> 2.5 当前类（This Class）、父类（Super Class）、接口（Interfaces）索引集合</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    u2             this_class<span class="token punctuation">;</span><span class="token comment">//当前类</span>
    u2             super_class<span class="token punctuation">;</span><span class="token comment">//父类</span>
    u2             interfaces_count<span class="token punctuation">;</span><span class="token comment">//接口</span>
    u2             interfaces<span class="token punctuation">[</span>interfaces_count<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//一个类可以实现多个接口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类索引用于确定这个类的全限定名，父类索引用于确定这个类的父类的全限定名，由于 Java 语言的单继承，所以父类索引只有一个，除了 <code v-pre>java.lang.Object</code> 之外，所有的 java 类都有父类，因此除了 <code v-pre>java.lang.Object</code> 外，所有 Java 类的父类索引都不为 0。</p>
<p>接口索引集合用来描述这个类实现了那些接口，这些被实现的接口将按 <code v-pre>implements</code> (如果这个类本身是接口的话则是<code v-pre>extends</code>) 后的接口顺序从左到右排列在接口索引集合中。</p>
<h3 id="_2-6-字段表集合-fields" tabindex="-1"><a class="header-anchor" href="#_2-6-字段表集合-fields" aria-hidden="true">#</a> 2.6 字段表集合（Fields）</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    u2             fields_count<span class="token punctuation">;</span><span class="token comment">//Class 文件的字段的个数</span>
    field_info     fields<span class="token punctuation">[</span>fields_count<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//一个类会可以有个字段</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>字段表（field info）用于描述接口或类中声明的变量。字段包括类级变量以及实例变量，但不包括在方法内部声明的局部变量。</p>
<p><strong>field info(字段表) 的结构:</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/字段表的结构.png" alt="字段表的结构 " loading="lazy"></p>
<ul>
<li><strong>access_flags:</strong> 字段的作用域（<code v-pre>public</code> ,<code v-pre>private</code>,<code v-pre>protected</code>修饰符），是实例变量还是类变量（<code v-pre>static</code>修饰符）,可否被序列化（transient 修饰符）,可变性（final）,可见性（volatile 修饰符，是否强制从主内存读写）。</li>
<li><strong>name_index:</strong> 对常量池的引用，表示的字段的名称；</li>
<li><strong>descriptor_index:</strong> 对常量池的引用，表示字段和方法的描述符；</li>
<li><strong>attributes_count:</strong> 一个字段还会拥有一些额外的属性，attributes_count 存放属性的个数；</li>
<li><strong>attributes[attributes_count]:</strong> 存放具体属性具体内容。</li>
</ul>
<p>上述这些信息中，各个修饰符都是布尔值，要么有某个修饰符，要么没有，很适合使用标志位来表示。而字段叫什么名字、字段被定义为什么数据类型这些都是无法固定的，只能引用常量池中常量来描述。</p>
<p><strong>字段的 access_flag 的取值:</strong></p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/JVM/image-20201031084342859.png" alt="字段的 access_flag 的取值" loading="lazy"></p>
<h3 id="_2-7-方法表集合-methods" tabindex="-1"><a class="header-anchor" href="#_2-7-方法表集合-methods" aria-hidden="true">#</a> 2.7 方法表集合（Methods）</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>    u2             methods_count<span class="token punctuation">;</span><span class="token comment">//Class 文件的方法的数量</span>
    method_info    methods<span class="token punctuation">[</span>methods_count<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//一个类可以有个多个方法</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>methods_count 表示方法的数量，而 method_info 表示方法表。</p>
<p>Class 文件存储格式中对方法的描述与对字段的描述几乎采用了完全一致的方式。方法表的结构如同字段表一样，依次包括了访问标志、名称索引、描述符索引、属性表集合几项。</p>
<p><strong>method_info(方法表的) 结构:</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/方法表的结构.png" alt="方法表的结构" loading="lazy"></p>
<p><strong>方法表的 access_flag 取值：</strong></p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/JVM/image-20201031084248965.png" alt="方法表的 access_flag 取值" loading="lazy"></p>
<p>注意：因为<code v-pre>volatile</code>修饰符和<code v-pre>transient</code>修饰符不可以修饰方法，所以方法表的访问标志中没有这两个对应的标志，但是增加了<code v-pre>synchronized</code>、<code v-pre>native</code>、<code v-pre>abstract</code>等关键字修饰方法，所以也就多了这些关键字对应的标志。</p>
<h3 id="_2-8-属性表集合-attributes" tabindex="-1"><a class="header-anchor" href="#_2-8-属性表集合-attributes" aria-hidden="true">#</a> 2.8 属性表集合（Attributes）</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>   u2             attributes_count<span class="token punctuation">;</span><span class="token comment">//此类的属性表中的属性数</span>
   attribute_info attributes<span class="token punctuation">[</span>attributes_count<span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token comment">//属性表集合</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Class 文件，字段表，方法表中都可以携带自己的属性表集合，以用于描述某些场景专有的信息。与 Class 文件中其它的数据项目要求的顺序、长度和内容不同，属性表集合的限制稍微宽松一些，不再要求各个属性表具有严格的顺序，并且只要不与已有的属性名重复，任何人实现的编译器都可以向属性表中写 入自己定义的属性信息，Java 虚拟机运行时会忽略掉它不认识的属性。</p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li><a href="https://docs.oracle.com/javase/specs/jvms/se7/html/jvms-4.html" target="_blank" rel="noopener noreferrer">https://docs.oracle.com/javase/specs/jvms/se7/html/jvms-4.html<ExternalLinkIcon/></a></li>
<li><a href="https://coolshell.cn/articles/9229.html" target="_blank" rel="noopener noreferrer">https://coolshell.cn/articles/9229.html<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/luanlouis/article/details/39960815" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/luanlouis/article/details/39960815<ExternalLinkIcon/></a></li>
<li>《实战 Java 虚拟机》</li>
</ul>
</div></template>
