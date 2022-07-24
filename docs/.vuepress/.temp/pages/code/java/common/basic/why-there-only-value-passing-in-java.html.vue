<template><div><p>开始之前，我们先来搞懂下面这两个概念：</p>
<ul>
<li>形参&amp;实参</li>
<li>值传递&amp;引用传递</li>
</ul>
<h2 id="形参-实参" tabindex="-1"><a class="header-anchor" href="#形参-实参" aria-hidden="true">#</a> 形参&amp;实参</h2>
<p>方法的定义可能会用到 <strong>参数</strong>（有参的方法），参数在程序语言中分为：</p>
<ul>
<li><strong>实参（实际参数）</strong> ：用于传递给函数/方法的参数，必须有确定的值。</li>
<li><strong>形参（形式参数）</strong> ：用于定义函数/方法，接收实参，不需要有确定的值。</li>
</ul>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> hello <span class="token operator">=</span> <span class="token string">"Hello!"</span><span class="token punctuation">;</span>
<span class="token comment">// hello 为实参</span>
<span class="token function">sayHello</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// str 为形参</span>
<span class="token keyword">void</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="值传递-引用传递" tabindex="-1"><a class="header-anchor" href="#值传递-引用传递" aria-hidden="true">#</a> 值传递&amp;引用传递</h2>
<p>程序设计语言将实参传递给方法（或函数）的方式分为两种：</p>
<ul>
<li><strong>值传递</strong> ：方法接收的是实参值的拷贝，会创建副本。</li>
<li><strong>引用传递</strong> ：方法接收的直接是实参所引用的对象在堆中的地址，不会创建副本，对形参的修改将影响到实参。</li>
</ul>
<p>很多程序设计语言（比如 C++、 Pascal )提供了两种参数传递的方式，不过，在 Java 中只有值传递。</p>
<h2 id="为什么-java-只有值传递" tabindex="-1"><a class="header-anchor" href="#为什么-java-只有值传递" aria-hidden="true">#</a> 为什么 Java 只有值传递？</h2>
<p><strong>为什么说 Java 只有值传递呢？</strong> 不需要太多废话，我通过 3 个例子来给大家证明。</p>
<h3 id="案例1-传递基本类型参数" tabindex="-1"><a class="header-anchor" href="#案例1-传递基本类型参数" aria-hidden="true">#</a> 案例1：传递基本类型参数</h3>
<p>代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> num1 <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> num2 <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num1 = "</span> <span class="token operator">+</span> num1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"num2 = "</span> <span class="token operator">+</span> num2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> temp <span class="token operator">=</span> a<span class="token punctuation">;</span>
    a <span class="token operator">=</span> b<span class="token punctuation">;</span>
    b <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"a = "</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"b = "</span> <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>a = 20
b = 10
num1 = 10
num2 = 20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：</p>
<p>在 <code v-pre>swap()</code>  方法中，<code v-pre>a</code>、<code v-pre>b</code> 的值进行交换，并不会影响到 <code v-pre>num1</code>、<code v-pre>num2</code>。因为，<code v-pre>a</code>、<code v-pre>b</code> 的值，只是从 <code v-pre>num1</code>、<code v-pre>num2</code> 的复制过来的。也就是说，a、b 相当于 <code v-pre>num1</code>、<code v-pre>num2</code> 的副本，副本的内容无论怎么修改，都不会影响到原件本身。</p>
<p><img src="@source/code/java/common/basic/images/java-value-passing-01.png" alt="基本数据类型参数" loading="lazy"></p>
<p>通过上面例子，我们已经知道了一个方法不能修改一个基本数据类型的参数，而对象引用作为参数就不一样，请看案例2。</p>
<h3 id="案例2-传递引用类型参数1" tabindex="-1"><a class="header-anchor" href="#案例2-传递引用类型参数1" aria-hidden="true">#</a> 案例2：传递引用类型参数1</h3>
<p>代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">change</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 将数组的第一个元素变为0</span>
      array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>1
0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：</p>
<p><img src="@source/code/java/common/basic/images/java-value-passing-02.png" alt="引用数据类型参数1" loading="lazy"></p>
<p>看了这个案例很多人肯定觉得 Java 对引用类型的参数采用的是引用传递。</p>
<p>实际上，并不是的，这里传递的还是值，不过，这个值是实参的地址罢了！</p>
<p>也就是说 <code v-pre>change</code> 方法的参数拷贝的是  <code v-pre>arr</code> （实参）的地址，因此，它和 <code v-pre>arr</code> 指向的是同一个数组对象。这也就说明了为什么方法内部对形参的修改会影响到实参。</p>
<p>为了更强有力地反驳 Java 对引用类型的参数采用的不是引用传递，我们再来看下面这个案例！</p>
<h3 id="案例3-传递引用类型参数2" tabindex="-1"><a class="header-anchor" href="#案例3-传递引用类型参数2" aria-hidden="true">#</a> 案例3 ：传递引用类型参数2</h3>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
   <span class="token comment">// 省略构造函数、Getter&amp;Setter方法</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Person</span> xiaoZhang <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"小张"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Person</span> xiaoLi <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"小李"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">swap</span><span class="token punctuation">(</span>xiaoZhang<span class="token punctuation">,</span> xiaoLi<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"xiaoZhang:"</span> <span class="token operator">+</span> xiaoZhang<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"xiaoLi:"</span> <span class="token operator">+</span> xiaoLi<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">swap</span><span class="token punctuation">(</span><span class="token class-name">Person</span> person1<span class="token punctuation">,</span> <span class="token class-name">Person</span> person2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Person</span> temp <span class="token operator">=</span> person1<span class="token punctuation">;</span>
    person1 <span class="token operator">=</span> person2<span class="token punctuation">;</span>
    person2 <span class="token operator">=</span> temp<span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"person1:"</span> <span class="token operator">+</span> person1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"person2:"</span> <span class="token operator">+</span> person2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>person1:小李
person2:小张
xiaoZhang:小张
xiaoLi:小李
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解析：</p>
<p>怎么回事？？？两个引用类型的形参互换并没有影响实参啊！</p>
<p><code v-pre>swap</code> 方法的参数 <code v-pre>person1</code> 和 <code v-pre>person2</code> 只是拷贝的实参 <code v-pre>xiaoZhang</code> 和 <code v-pre>xiaoLi</code> 的地址。因此， <code v-pre>person1</code> 和 <code v-pre>person2</code> 的互换只是拷贝的两个地址的互换罢了，并不会影响到实参 <code v-pre>xiaoZhang</code> 和 <code v-pre>xiaoLi</code> 。</p>
<p><img src="@source/code/java/common/basic/images/java-value-passing-03.png" alt="引用数据类型参数2" loading="lazy"></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>Java 中将实参传递给方法（或函数）的方式是 <strong>值传递</strong> ：</p>
<ul>
<li>如果参数是基本类型的话，很简单，传递的就是基本类型的字面量值的拷贝，会创建副本。</li>
<li>如果参数是引用类型，传递的就是实参所引用的对象在堆中地址值的拷贝，同样也会创建副本。</li>
</ul>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>《Java 核心技术卷 Ⅰ》基础知识第十版第四章 4.5 小节</li>
<li><a href="https://www.zhihu.com/question/31203609/answer/576030121" target="_blank" rel="noopener noreferrer">Java 到底是值传递还是引用传递？ - Hollis的回答 - 知乎<ExternalLinkIcon/></a></li>
</ul>
</div></template>
