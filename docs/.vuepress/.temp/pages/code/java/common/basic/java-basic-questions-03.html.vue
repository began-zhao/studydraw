<template><div><h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常</h2>
<p><strong>Java 异常类层次结构图概览</strong> ：</p>
<p><img src="@source/code/java/common/basic/images/types-of-exceptions-in-java.png" alt="types-of-exceptions-in-java" loading="lazy"></p>
<h3 id="exception-和-error-有什么区别" tabindex="-1"><a class="header-anchor" href="#exception-和-error-有什么区别" aria-hidden="true">#</a> Exception 和 Error 有什么区别？</h3>
<p>在 Java 中，所有的异常都有一个共同的祖先 <code v-pre>java.lang</code> 包中的 <code v-pre>Throwable</code> 类。<code v-pre>Throwable</code> 类有两个重要的子类:</p>
<ul>
<li><strong><code v-pre>Exception</code></strong> :程序本身可以处理的异常，可以通过 <code v-pre>catch</code> 来进行捕获。<code v-pre>Exception</code> 又可以分为 Checked Exception (受检查异常，必须处理) 和 Unchecked Exception (不受检查异常，可以不处理)。</li>
<li><strong><code v-pre>Error</code></strong> ：<code v-pre>Error</code> 属于程序无法处理的错误 ，<s>我们没办法通过 <code v-pre>catch</code> 来进行捕获</s>不建议通过<code v-pre>catch</code>捕获 。例如 Java 虚拟机运行错误（<code v-pre>Virtual MachineError</code>）、虚拟机内存不够错误(<code v-pre>OutOfMemoryError</code>)、类定义错误（<code v-pre>NoClassDefFoundError</code>）等 。这些异常发生时，Java 虚拟机（JVM）一般会选择线程终止。</li>
</ul>
<h3 id="checked-exception-和-unchecked-exception-有什么区别" tabindex="-1"><a class="header-anchor" href="#checked-exception-和-unchecked-exception-有什么区别" aria-hidden="true">#</a> Checked Exception 和 Unchecked Exception 有什么区别？</h3>
<p><strong>Checked Exception</strong> 即 受检查异常 ，Java 代码在编译过程中，如果受检查异常没有被 <code v-pre>catch</code>或者<code v-pre>throws</code> 关键字处理的话，就没办法通过编译。</p>
<p>比如下面这段 IO 操作的代码：</p>
<p><img src="@source/code/java/common/basic/images/checked-exception.png" alt="" loading="lazy"></p>
<p>除了<code v-pre>RuntimeException</code>及其子类以外，其他的<code v-pre>Exception</code>类及其子类都属于受检查异常 。常见的受检查异常有： IO 相关的异常、<code v-pre>ClassNotFoundException</code> 、<code v-pre>SQLException</code>...。</p>
<p><strong>Unchecked Exception</strong> 即 <strong>不受检查异常</strong> ，Java 代码在编译过程中 ，我们即使不处理不受检查异常也可以正常通过编译。</p>
<p><code v-pre>RuntimeException</code> 及其子类都统称为非受检查异常，常见的有（建议记下来，日常开发中会经常用到）：</p>
<ul>
<li><code v-pre>NullPointerException</code>(空指针错误)</li>
<li><code v-pre>IllegalArgumentException</code>(参数错误比如方法入参类型错误)</li>
<li><code v-pre>NumberFormatException</code>（字符串转换为数字格式错误，<code v-pre>IllegalArgumentException</code>的子类）</li>
<li><code v-pre>ArrayIndexOutOfBoundsException</code>（数组越界错误）</li>
<li><code v-pre>ClassCastException</code>（类型转换错误）</li>
<li><code v-pre>ArithmeticException</code>（算术错误）</li>
<li><code v-pre>SecurityException</code> （安全错误比如权限不够）</li>
<li><code v-pre>UnsupportedOperationException</code>(不支持的操作错误比如重复创建同一用户)</li>
<li>......</li>
</ul>
<p><img src="@source/code/java/common/basic/images/unchecked-exception.png" alt="" loading="lazy"></p>
<h3 id="throwable-类常用方法有哪些" tabindex="-1"><a class="header-anchor" href="#throwable-类常用方法有哪些" aria-hidden="true">#</a> Throwable 类常用方法有哪些？</h3>
<ul>
<li><code v-pre>String getMessage()</code>: 返回异常发生时的简要描述</li>
<li><code v-pre>String toString()</code>: 返回异常发生时的详细信息</li>
<li><code v-pre>String getLocalizedMessage()</code>: 返回异常对象的本地化信息。使用 <code v-pre>Throwable</code> 的子类覆盖这个方法，可以生成本地化信息。如果子类没有覆盖该方法，则该方法返回的信息与 <code v-pre>getMessage()</code>返回的结果相同</li>
<li><code v-pre>void printStackTrace()</code>: 在控制台上打印 <code v-pre>Throwable</code> 对象封装的异常信息</li>
</ul>
<h3 id="try-catch-finally-如何使用" tabindex="-1"><a class="header-anchor" href="#try-catch-finally-如何使用" aria-hidden="true">#</a> try-catch-finally 如何使用？</h3>
<ul>
<li><code v-pre>try</code>块 ： 用于捕获异常。其后可接零个或多个 <code v-pre>catch</code> 块，如果没有 <code v-pre>catch</code> 块，则必须跟一个 <code v-pre>finally</code> 块。</li>
<li>*<code v-pre>catch</code>块 ： 用于处理 try 捕获到的异常。</li>
<li><code v-pre>finally</code> 块 ： 无论是否捕获或处理异常，<code v-pre>finally</code> 块里的语句都会被执行。当在 <code v-pre>try</code> 块或 <code v-pre>catch</code> 块中遇到 <code v-pre>return</code> 语句时，<code v-pre>finally</code> 语句块将在方法返回之前被执行。</li>
</ul>
<p>代码示例：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Try to do something"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"RuntimeException"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Catch Exception -> "</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Finally"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Try to do something
Catch Exception -> RuntimeException
Finally
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：不要在 finally 语句块中使用 return!</strong> 当 try 语句和 finally 语句中都有 return 语句时，try 语句块中的 return 语句会被忽略。这是因为 try 语句中的 return 返回值会先被暂存在一个本地变量中，当执行到 finally 语句中的 return 之后，这个本地变量的值就变为了 finally 语句中的 return 返回值。</p>
<p><a href="https://docs.oracle.com/javase/specs/jvms/se7/html/jvms-4.html#jvms-4.10.2.5" target="_blank" rel="noopener noreferrer">jvm 官方文档<ExternalLinkIcon/></a>中有明确提到：</p>
<blockquote>
<p>If the <code v-pre>try</code> clause executes a <em>return</em>, the compiled code does the following:</p>
<ol>
<li>Saves the return value (if any) in a local variable.</li>
<li>Executes a <em>jsr</em> to the code for the <code v-pre>finally</code> clause.</li>
<li>Upon return from the <code v-pre>finally</code> clause, returns the value saved in the local variable.</li>
</ol>
</blockquote>
<p>代码示例：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> value <span class="token operator">*</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="finally-中的代码一定会执行吗" tabindex="-1"><a class="header-anchor" href="#finally-中的代码一定会执行吗" aria-hidden="true">#</a> finally 中的代码一定会执行吗？</h3>
<p>不一定的！在某些情况下，finally 中的代码不会被执行。</p>
<p>就比如说 finally 之前虚拟机被终止运行的话，finally 中的代码就不会被执行。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Try to do something"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"RuntimeException"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Catch Exception -> "</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 终止当前正在运行的Java虚拟机</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Finally"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Try to do something
Catch Exception -> RuntimeException
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，在以下 2 种特殊情况下，<code v-pre>finally</code> 块的代码也不会被执行：</p>
<ol>
<li>程序所在的线程死亡。</li>
<li>关闭 CPU。</li>
</ol>
<p>相关 issue： <a href="https://github.com/Snailclimb/JavaGuide/issues/190" target="_blank" rel="noopener noreferrer">https://github.com/Snailclimb/JavaGuide/issues/190<ExternalLinkIcon/></a>。</p>
<p>🧗🏻 进阶一下：从字节码角度分析<code v-pre>try catch finally</code>这个语法糖背后的实现原理。</p>
<h3 id="如何使用-try-with-resources-代替try-catch-finally" tabindex="-1"><a class="header-anchor" href="#如何使用-try-with-resources-代替try-catch-finally" aria-hidden="true">#</a> 如何使用 <code v-pre>try-with-resources</code> 代替<code v-pre>try-catch-finally</code>？</h3>
<ol>
<li><strong>适用范围（资源的定义）：</strong> 任何实现 <code v-pre>java.lang.AutoCloseable</code>或者 <code v-pre>java.io.Closeable</code> 的对象</li>
<li><strong>关闭资源和 finally 块的执行顺序：</strong> 在 <code v-pre>try-with-resources</code> 语句中，任何 catch 或 finally 块在声明的资源关闭后运行</li>
</ol>
<p>《Effective Java》中明确指出：</p>
<blockquote>
<p>面对必须要关闭的资源，我们总是应该优先使用 <code v-pre>try-with-resources</code> 而不是<code v-pre>try-finally</code>。随之产生的代码更简短，更清晰，产生的异常对我们也更有用。<code v-pre>try-with-resources</code>语句让我们更容易编写必须要关闭的资源的代码，若采用<code v-pre>try-finally</code>则几乎做不到这点。</p>
</blockquote>
<p>Java 中类似于<code v-pre>InputStream</code>、<code v-pre>OutputStream</code> 、<code v-pre>Scanner</code> 、<code v-pre>PrintWriter</code>等的资源都需要我们调用<code v-pre>close()</code>方法来手动关闭，一般情况下我们都是通过<code v-pre>try-catch-finally</code>语句来实现这个需求，如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//读取文本文件的内容</span>
<span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token keyword">try</span> <span class="token punctuation">{</span>
    scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"D://read.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>scanner <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        scanner<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 Java 7 之后的 <code v-pre>try-with-resources</code> 语句改造上面的代码:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">Scanner</span> scanner <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"test.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>scanner<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">FileNotFoundException</span> fnfe<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    fnfe<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然多个资源需要关闭的时候，使用 <code v-pre>try-with-resources</code> 实现起来也非常简单，如果你还是用<code v-pre>try-catch-finally</code>可能会带来很多问题。</p>
<p>通过使用分号分隔，可以在<code v-pre>try-with-resources</code>块中声明多个资源。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">try</span> <span class="token punctuation">(</span><span class="token class-name">BufferedInputStream</span> bin <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileInputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"test.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token class-name">BufferedOutputStream</span> bout <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">FileOutputStream</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span><span class="token string">"out.txt"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> b<span class="token punctuation">;</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>b <span class="token operator">=</span> bin<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        bout<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异常使用有哪些需要注意的地方" tabindex="-1"><a class="header-anchor" href="#异常使用有哪些需要注意的地方" aria-hidden="true">#</a> 异常使用有哪些需要注意的地方？</h3>
<ul>
<li>不要把异常定义为静态变量，因为这样会导致异常栈信息错乱。每次手动抛出异常，我们都需要手动 new 一个异常对象抛出。</li>
<li>抛出的异常信息一定要有意义。</li>
<li>建议抛出更加具体的异常比如字符串转换为数字格式错误的时候应该抛出<code v-pre>NumberFormatException</code>而不是其父类<code v-pre>IllegalArgumentException</code>。</li>
<li>使用日志打印异常之后就不要再抛出异常了（两者不要同时存在一段代码逻辑中）。</li>
<li>......</li>
</ul>
<h2 id="泛型" tabindex="-1"><a class="header-anchor" href="#泛型" aria-hidden="true">#</a> 泛型</h2>
<h3 id="什么是泛型-有什么作用" tabindex="-1"><a class="header-anchor" href="#什么是泛型-有什么作用" aria-hidden="true">#</a> 什么是泛型？有什么作用？</h3>
<p><strong>Java 泛型（Generics）</strong> 是 JDK 5 中引入的一个新特性。使用泛型参数，可以增强代码的可读性以及稳定性。</p>
<p>编译器可以对泛型参数进行检测，并且通过泛型参数可以指定传入的对象类型。比如 <code v-pre>ArrayList&lt;Persion&gt; persons = new ArrayList&lt;Persion&gt;()</code> 这行代码就指明了该 <code v-pre>ArrayList</code> 对象只能传入 <code v-pre>Persion</code> 对象，如果传入其他类型的对象就会报错。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">E</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>并且，原生 <code v-pre>List</code> 返回类型是 <code v-pre>Object</code> ，需要手动转换类型才能使用，使用泛型后编译器自动转换。</p>
<h3 id="泛型的使用方式有哪几种" tabindex="-1"><a class="header-anchor" href="#泛型的使用方式有哪几种" aria-hidden="true">#</a> 泛型的使用方式有哪几种？</h3>
<p>泛型一般有三种使用方式:<strong>泛型类</strong>、<strong>泛型接口</strong>、<strong>泛型方法</strong>。</p>
<p><strong>1.泛型类</strong>：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//此处T可以随便写为任意标识，常见的如T、E、K、V等形式的参数常用于表示泛型</span>
<span class="token comment">//在实例化泛型类时，必须指定T的具体类型</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Generic</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">T</span> key<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Generic</span><span class="token punctuation">(</span><span class="token class-name">T</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>key <span class="token operator">=</span> key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">getKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> key<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何实例化泛型类：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Generic</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> genericInteger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Generic</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token number">123456</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.泛型接口</strong> ：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Generator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现泛型接口，不指定类型：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">GeneratorImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token keyword">implements</span> <span class="token class-name">Generator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">T</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现泛型接口，指定类型：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">GeneratorImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token keyword">implements</span> <span class="token class-name">Generator</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"hello"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.泛型方法</strong> ：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token generics"><span class="token punctuation">&lt;</span> <span class="token class-name">E</span> <span class="token punctuation">></span></span> <span class="token keyword">void</span> <span class="token function">printArray</span><span class="token punctuation">(</span> <span class="token class-name">E</span><span class="token punctuation">[</span><span class="token punctuation">]</span> inputArray <span class="token punctuation">)</span>
   <span class="token punctuation">{</span>
         <span class="token keyword">for</span> <span class="token punctuation">(</span> <span class="token class-name">E</span> element <span class="token operator">:</span> inputArray <span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">printf</span><span class="token punctuation">(</span> <span class="token string">"%s "</span><span class="token punctuation">,</span> element <span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token punctuation">}</span>
         <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 创建不同类型数组： Integer, Double 和 Character</span>
<span class="token class-name">Integer</span><span class="token punctuation">[</span><span class="token punctuation">]</span> intArray <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> stringArray <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string">"Hello"</span><span class="token punctuation">,</span> <span class="token string">"World"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token function">printArray</span><span class="token punctuation">(</span> intArray  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">printArray</span><span class="token punctuation">(</span> stringArray  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意: <code v-pre>public static &lt; E &gt; void printArray( E[] inputArray )</code> 一般被称为静态泛型方法;在 java 中泛型只是一个占位符，必须在传递类型后才能使用。类在实例化时才能真正的传递类型参数，由于静态方法的加载先于类的实例化，也就是说类中的泛型还没有传递真正的类型参数，静态的方法的加载就已经完成了，所以静态泛型方法是没有办法使用类上声明的泛型的。只能使用自己声明的 <code v-pre>&lt;E&gt;</code></p>
</blockquote>
<h3 id="项目中哪里用到了泛型" tabindex="-1"><a class="header-anchor" href="#项目中哪里用到了泛型" aria-hidden="true">#</a> 项目中哪里用到了泛型？</h3>
<ul>
<li>自定义接口通用返回结果 <code v-pre>CommonResult&lt;T&gt;</code> 通过参数 <code v-pre>T</code> 可根据具体的返回类型动态指定结果的数据类型</li>
<li>定义 <code v-pre>Excel</code> 处理类 <code v-pre>ExcelUtil&lt;T&gt;</code> 用于动态指定 <code v-pre>Excel</code> 导出的数据类型</li>
<li>构建集合工具类（参考 <code v-pre>Collections</code> 中的 <code v-pre>sort</code>, <code v-pre>binarySearch</code> 方法）。</li>
<li>......</li>
</ul>
<h2 id="反射" tabindex="-1"><a class="header-anchor" href="#反射" aria-hidden="true">#</a> 反射</h2>
<h3 id="何为反射" tabindex="-1"><a class="header-anchor" href="#何为反射" aria-hidden="true">#</a> 何为反射？</h3>
<p>如果说大家研究过框架的底层原理或者咱们自己写过框架的话，一定对反射这个概念不陌生。</p>
<p>反射之所以被称为框架的灵魂，主要是因为它赋予了我们在运行时分析类以及执行类中方法的能力。通过反射你可以获取任意一个类的所有属性和方法，你还可以调用这些方法和属性。</p>
<h3 id="反射机制优缺点" tabindex="-1"><a class="header-anchor" href="#反射机制优缺点" aria-hidden="true">#</a> 反射机制优缺点</h3>
<ul>
<li><strong>优点</strong> ： 可以让咱们的代码更加灵活、为各种框架提供开箱即用的功能提供了便利</li>
<li><strong>缺点</strong> ：让我们在运行时有了分析操作类的能力，这同样也增加了安全问题。比如可以无视泛型参数的安全检查（泛型参数的安全检查发生在编译时）。另外，反射的性能也要稍差点，不过，对于框架来说实际是影响不大的。<a href="https://stackoverflow.com/questions/1392351/java-reflection-why-is-it-so-slow" target="_blank" rel="noopener noreferrer">Java Reflection: Why is it so slow?<ExternalLinkIcon/></a></li>
</ul>
<h3 id="反射的应用场景" tabindex="-1"><a class="header-anchor" href="#反射的应用场景" aria-hidden="true">#</a> 反射的应用场景</h3>
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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，像 Java 中的一大利器 <strong>注解</strong> 的实现也用到了反射。</p>
<p>为什么你使用 Spring 的时候 ，一个<code v-pre>@Component</code>注解就声明了一个类为 Spring Bean 呢？为什么你通过一个 <code v-pre>@Value</code>注解就读取到配置文件中的值呢？究竟是怎么起作用的呢？</p>
<p>这些都是因为你可以基于反射分析类，然后获取到类/属性/方法/方法的参数上的注解。你获取到注解之后，就可以做进一步的处理。</p>
<h2 id="注解" tabindex="-1"><a class="header-anchor" href="#注解" aria-hidden="true">#</a> 注解</h2>
<p><code v-pre>Annotation</code> （注解） 是 Java5 开始引入的新特性，可以看作是一种特殊的注释，主要用于修饰类、方法或者变量。</p>
<p>注解本质是一个继承了<code v-pre>Annotation</code> 的特殊接口：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>METHOD<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>SOURCE<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Override</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Override</span> <span class="token keyword">extends</span> <span class="token class-name">Annotation</span><span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注解只有被解析之后才会生效，常见的解析方法有两种：</p>
<ul>
<li><strong>编译期直接扫描</strong> ：编译器在编译 Java 代码的时候扫描对应的注解并处理，比如某个方法使用<code v-pre>@Override</code> 注解，编译器在编译的时候就会检测当前的方法是否重写了父类对应的方法。</li>
<li><strong>运行期通过反射处理</strong> ：像框架中自带的注解(比如 Spring 框架的 <code v-pre>@Value</code> 、<code v-pre>@Component</code>)都是通过反射来进行处理的。</li>
</ul>
<p>JDK 提供了很多内置的注解（比如 <code v-pre>@Override</code> 、<code v-pre>@Deprecated</code>），同时，我们还可以自定义注解。</p>
<h2 id="i-o" tabindex="-1"><a class="header-anchor" href="#i-o" aria-hidden="true">#</a> I/O</h2>
<h3 id="什么是序列化-什么是反序列化" tabindex="-1"><a class="header-anchor" href="#什么是序列化-什么是反序列化" aria-hidden="true">#</a> 什么是序列化?什么是反序列化?</h3>
<p>如果我们需要持久化 Java 对象比如将 Java 对象保存在文件中，或者在网络传输 Java 对象，这些场景都需要用到序列化。</p>
<p>简单来说：</p>
<ul>
<li><strong>序列化</strong>： 将数据结构或对象转换成二进制字节流的过程</li>
<li><strong>反序列化</strong>：将在序列化过程中所生成的二进制字节流转换成数据结构或者对象的过程</li>
</ul>
<p>对于 Java 这种面向对象编程语言来说，我们序列化的都是对象（Object）也就是实例化后的类(Class)，但是在 C++这种半面向对象的语言中，struct(结构体)定义的是数据结构类型，而 class 对应的是对象类型。</p>
<p>维基百科是如是介绍序列化的：</p>
<blockquote>
<p><strong>序列化</strong>（serialization）在计算机科学的数据处理中，是指将数据结构或对象状态转换成可取用格式（例如存成文件，存于缓冲，或经由网络中发送），以留待后续在相同或另一台计算机环境中，能恢复原先状态的过程。依照序列化格式重新获取字节的结果时，可以利用它来产生与原始对象相同语义的副本。对于许多对象，像是使用大量引用的复杂对象，这种序列化重建的过程并不容易。面向对象中的对象序列化，并不概括之前原始对象所关系的函数。这种过程也称为对象编组（marshalling）。从一系列字节提取数据结构的反向操作，是反序列化（也称为解编组、deserialization、unmarshalling）。</p>
</blockquote>
<p>综上：<strong>序列化的主要目的是通过网络传输对象或者说是将对象存储到文件系统、数据库、内存中。</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2020-8/a478c74d-2c48-40ae-9374-87aacf05188c.png" alt="" loading="lazy"></p>
<p style="text-align:right;font-size:13px;color:gray">https://www.corejavaguru.com/java/serialization/interview-questions-1</p>
<h3 id="java-序列化中如果有些字段不想进行序列化-怎么办" tabindex="-1"><a class="header-anchor" href="#java-序列化中如果有些字段不想进行序列化-怎么办" aria-hidden="true">#</a> Java 序列化中如果有些字段不想进行序列化，怎么办？</h3>
<p>对于不想进行序列化的变量，使用 <code v-pre>transient</code> 关键字修饰。</p>
<p><code v-pre>transient</code> 关键字的作用是：阻止实例中那些用此关键字修饰的的变量序列化；当对象被反序列化时，被 <code v-pre>transient</code> 修饰的变量值不会被持久化和恢复。</p>
<p>关于 <code v-pre>transient</code> 还有几点注意：</p>
<ul>
<li><code v-pre>transient</code> 只能修饰变量，不能修饰类和方法。</li>
<li><code v-pre>transient</code> 修饰的变量，在反序列化后变量值将会被置成类型的默认值。例如，如果是修饰 <code v-pre>int</code> 类型，那么反序列后结果就是 <code v-pre>0</code>。</li>
<li><code v-pre>static</code> 变量因为不属于任何对象(Object)，所以无论有没有 <code v-pre>transient</code> 关键字修饰，均不会被序列化。</li>
</ul>
<h3 id="获取用键盘输入常用的两种方法" tabindex="-1"><a class="header-anchor" href="#获取用键盘输入常用的两种方法" aria-hidden="true">#</a> 获取用键盘输入常用的两种方法</h3>
<p>方法 1：通过 <code v-pre>Scanner</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s  <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
input<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法 2：通过 <code v-pre>BufferedReader</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">BufferedReader</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BufferedReader</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">InputStreamReader</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">readLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="java-中-io-流分为几种" tabindex="-1"><a class="header-anchor" href="#java-中-io-流分为几种" aria-hidden="true">#</a> Java 中 IO 流分为几种?</h3>
<ul>
<li>按照流的流向分，可以分为输入流和输出流；</li>
<li>按照操作单元划分，可以划分为字节流和字符流；</li>
<li>按照流的角色划分为节点流和处理流。</li>
</ul>
<p>Java IO 流共涉及 40 多个类，这些类看上去很杂乱，但实际上很有规则，而且彼此之间存在非常紧密的联系， Java IO 流的 40 多个类都是从如下 4 个抽象类基类中派生出来的。</p>
<ul>
<li>InputStream/Reader: 所有的输入流的基类，前者是字节输入流，后者是字符输入流。</li>
<li>OutputStream/Writer: 所有输出流的基类，前者是字节输出流，后者是字符输出流。</li>
</ul>
<p>按操作方式分类结构图：</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/IO-操作方式分类.png" alt="IO-操作方式分类" loading="lazy"></p>
<p>按操作对象分类结构图：</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/IO-操作对象分类.png" alt="IO-操作对象分类" loading="lazy"></p>
<h3 id="既然有了字节流-为什么还要有字符流" tabindex="-1"><a class="header-anchor" href="#既然有了字节流-为什么还要有字符流" aria-hidden="true">#</a> 既然有了字节流,为什么还要有字符流?</h3>
<p>问题本质想问：<strong>不管是文件读写还是网络发送接收，信息的最小存储单元都是字节，那为什么 I/O 流操作要分为字节流操作和字符流操作呢？</strong></p>
<p>回答：字符流是由 Java 虚拟机将字节转换得到的，问题就出在这个过程还算是非常耗时，并且，如果我们不知道编码类型就很容易出现乱码问题。所以， I/O 流就干脆提供了一个直接操作字符的接口，方便我们平时对字符进行流操作。如果音频文件、图片等媒体文件用字节流比较好，如果涉及到字符的话使用字符流比较好。</p>
</div></template>
