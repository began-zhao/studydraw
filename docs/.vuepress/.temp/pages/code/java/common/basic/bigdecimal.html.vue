<template><div><p>《阿里巴巴 Java 开发手册》中提到：“为了避免精度丢失，可以使用 <code v-pre>BigDecimal</code> 来进行浮点数的运算”。</p>
<p>这篇文章，我就简单解释一下浮点数运算出现精度丢失的原因以及 <code v-pre>BigDecimal</code> 的常见用法，希望对大家有帮助！</p>
<h2 id="bigdecimal-介绍" tabindex="-1"><a class="header-anchor" href="#bigdecimal-介绍" aria-hidden="true">#</a> BigDecimal 介绍</h2>
<p><code v-pre>BigDecimal</code> 可以实现对浮点数的运算，不会造成精度丢失。通常情况下，大部分需要浮点数精确运算结果的业务场景（比如涉及到钱的场景）都是通过 <code v-pre>BigDecimal</code> 来做的。</p>
<p>纳尼，浮点数的运算竟然还会有精度丢失的风险吗？确实会！</p>
<p>示例代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">float</span> a <span class="token operator">=</span> <span class="token number">2.0f</span> <span class="token operator">-</span> <span class="token number">1.9f</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> b <span class="token operator">=</span> <span class="token number">1.8f</span> <span class="token operator">-</span> <span class="token number">1.7f</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 0.100000024</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 0.099999905</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>为什么浮点数 <code v-pre>float</code> 或 <code v-pre>double</code> 运算的时候会有精度丢失的风险呢？</strong></p>
<p>这个和计算机保存浮点数的机制有很大关系。我们知道计算机是二进制的，而且计算机在表示一个数字时，宽度是有限的，无限循环的小数存储在计算机时，只能被截断，所以就会导致小数精度发生损失的情况。这也就是解释了为什么浮点数没有办法用二进制精确表示。</p>
<p>就比如说十进制下的 0.2 就没办法精确转换成二进制小数：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 0.2 转换为二进制数的过程为，不断乘以 2，直到不存在小数为止，</span>
<span class="token comment">// 在这个计算过程中，得到的整数部分从上到下排列就是二进制的结果。</span>
<span class="token number">0.2</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">0.4</span> <span class="token operator">-></span> <span class="token number">0</span>
<span class="token number">0.4</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">0.8</span> <span class="token operator">-></span> <span class="token number">0</span>
<span class="token number">0.8</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">1.6</span> <span class="token operator">-></span> <span class="token number">1</span>
<span class="token number">0.6</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">1.2</span> <span class="token operator">-></span> <span class="token number">1</span>
<span class="token number">0.2</span> <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">=</span> <span class="token number">0.4</span> <span class="token operator">-></span> <span class="token number">0</span>（发生循环）
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关于浮点数的更多内容，建议看一下<a href="http://kaito-kidd.com/2018/08/08/computer-system-float-point/" target="_blank" rel="noopener noreferrer">计算机系统基础（四）浮点数<ExternalLinkIcon/></a>这篇文章。</p>
<h2 id="bigdecimal-的用处" tabindex="-1"><a class="header-anchor" href="#bigdecimal-的用处" aria-hidden="true">#</a> BigDecimal 的用处</h2>
<p>《阿里巴巴 Java 开发手册》中提到：<strong>浮点数之间的等值判断，基本数据类型不能用==来比较，包装数据类型不能用 equals 来判断。</strong></p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/image-20211213101646884.png" alt="" loading="lazy"></p>
<p>具体原因我们在上面已经详细介绍了，这里就不多提了，我们下面直接上实例：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">float</span> a <span class="token operator">=</span> <span class="token number">1.0f</span> <span class="token operator">-</span> <span class="token number">0.9f</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> b <span class="token operator">=</span> <span class="token number">0.9f</span> <span class="token operator">-</span> <span class="token number">0.8f</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 0.100000024</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 0.099999964</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从输出结果就可以看出发生精度丢失的问题。</p>
<p>想要解决这个问题也很简单，直接使用 <code v-pre>BigDecimal</code> 来定义浮点数的值，再进行浮点数的运算操作即可。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">BigDecimal</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"1.0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"0.9"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"0.8"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">BigDecimal</span> x <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> y <span class="token operator">=</span> b<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 0.1 */</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* 0.1 */</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* true */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bigdecimal-常见方法" tabindex="-1"><a class="header-anchor" href="#bigdecimal-常见方法" aria-hidden="true">#</a> BigDecimal 常见方法</h2>
<h3 id="加减乘除" tabindex="-1"><a class="header-anchor" href="#加减乘除" aria-hidden="true">#</a> 加减乘除</h3>
<p><code v-pre>add</code> 方法用于将两个 <code v-pre>BigDecimal</code> 对象相加，<code v-pre>subtract</code> 方法用于将两个 <code v-pre>BigDecimal</code> 对象相减。<code v-pre>multiply</code> 方法用于将两个 <code v-pre>BigDecimal</code> 对象相乘，<code v-pre>divide</code> 方法用于将两个 <code v-pre>BigDecimal</code> 对象相除。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">BigDecimal</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"1.0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"0.9"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 1.9</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 0.1</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 0.90</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 无法除尽，抛出 ArithmeticException 异常</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token class-name">RoundingMode</span><span class="token punctuation">.</span>HALF_UP<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 1.11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里需要注意的是，在我们使用 <code v-pre>divide</code> 方法的时候尽量使用 3 个参数版本，并且<code v-pre>RoundingMode</code> 不要选择 <code v-pre>UNNECESSARY</code>，否则很可能会遇到 <code v-pre>ArithmeticException</code>（无法除尽出现无限循环小数的时候），其中 <code v-pre>scale</code> 表示要保留几位小数，<code v-pre>roundingMode</code> 代表保留规则。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">BigDecimal</span> <span class="token function">divide</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span> divisor<span class="token punctuation">,</span> <span class="token keyword">int</span> scale<span class="token punctuation">,</span> <span class="token class-name">RoundingMode</span> roundingMode<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">divide</span><span class="token punctuation">(</span>divisor<span class="token punctuation">,</span> scale<span class="token punctuation">,</span> roundingMode<span class="token punctuation">.</span>oldMode<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>保留规则非常多，这里列举几种:</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">RoundingMode</span> <span class="token punctuation">{</span>
   <span class="token comment">// 2.5 -> 3 , 1.6 -> 2</span>
   <span class="token comment">// -1.6 -> -2 , -2.5 -> -3</span>
			 <span class="token function">UP</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ROUND_UP<span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token comment">// 2.5 -> 2 , 1.6 -> 1</span>
   <span class="token comment">// -1.6 -> -1 , -2.5 -> -2</span>
			 <span class="token function">DOWN</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ROUND_DOWN<span class="token punctuation">)</span><span class="token punctuation">,</span>
			 <span class="token comment">// 2.5 -> 3 , 1.6 -> 2</span>
   <span class="token comment">// -1.6 -> -1 , -2.5 -> -2</span>
			 <span class="token function">CEILING</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ROUND_CEILING<span class="token punctuation">)</span><span class="token punctuation">,</span>
			 <span class="token comment">// 2.5 -> 2 , 1.6 -> 1</span>
   <span class="token comment">// -1.6 -> -2 , -2.5 -> -3</span>
			 <span class="token function">FLOOR</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ROUND_FLOOR<span class="token punctuation">)</span><span class="token punctuation">,</span>
   	<span class="token comment">// 2.5 -> 3 , 1.6 -> 2</span>
   <span class="token comment">// -1.6 -> -2 , -2.5 -> -3</span>
			 <span class="token function">HALF_UP</span><span class="token punctuation">(</span><span class="token class-name">BigDecimal</span><span class="token punctuation">.</span>ROUND_HALF_UP<span class="token punctuation">)</span><span class="token punctuation">,</span>
   <span class="token comment">//......</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="大小比较" tabindex="-1"><a class="header-anchor" href="#大小比较" aria-hidden="true">#</a> 大小比较</h3>
<p><code v-pre>a.compareTo(b)</code> : 返回 -1 表示 <code v-pre>a</code> 小于 <code v-pre>b</code>，0 表示 <code v-pre>a</code> 等于 <code v-pre>b</code> ， 1 表示 <code v-pre>a</code> 大于 <code v-pre>b</code>。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">BigDecimal</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"1.0"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"0.9"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="保留几位小数" tabindex="-1"><a class="header-anchor" href="#保留几位小数" aria-hidden="true">#</a> 保留几位小数</h3>
<p>通过 <code v-pre>setScale</code>方法设置保留几位小数以及保留规则。保留规则有挺多种，不需要记，IDEA 会提示。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">BigDecimal</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"1.255433"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigDecimal</span> n <span class="token operator">=</span> m<span class="token punctuation">.</span><span class="token function">setScale</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token class-name">RoundingMode</span><span class="token punctuation">.</span>HALF_DOWN<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 1.255</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bigdecimal-的使用注意事项" tabindex="-1"><a class="header-anchor" href="#bigdecimal-的使用注意事项" aria-hidden="true">#</a> BigDecimal 的使用注意事项</h2>
<p>注意：我们在使用 <code v-pre>BigDecimal</code> 时，为了防止精度丢失，推荐使用它的<code v-pre>BigDecimal(String val)</code>构造方法或者 <code v-pre>BigDecimal.valueOf(double val)</code> 静态方法来创建对象。</p>
<p>《阿里巴巴 Java 开发手册》对这部分内容也有提到，如下图所示。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/image-20211213102222601.png" alt="" loading="lazy"></p>
<h2 id="bigdecimal-工具类分享" tabindex="-1"><a class="header-anchor" href="#bigdecimal-工具类分享" aria-hidden="true">#</a> BigDecimal 工具类分享</h2>
<p>网上有一个使用人数比较多的 <code v-pre>BigDecimal</code> 工具类，提供了多个静态方法来简化 <code v-pre>BigDecimal</code> 的操作。</p>
<p>我对其进行了简单改进，分享一下源码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">RoundingMode</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 简化BigDecimal计算的小工具类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">BigDecimalUtil</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 默认除法运算精度
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> DEF_DIV_SCALE <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">BigDecimalUtil</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的加法运算。
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被加数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 加数
     * <span class="token keyword">@return</span> 两个参数的和
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">double</span> v1<span class="token punctuation">,</span> <span class="token keyword">double</span> v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的减法运算。
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被减数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 减数
     * <span class="token keyword">@return</span> 两个参数的差
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">subtract</span><span class="token punctuation">(</span><span class="token keyword">double</span> v1<span class="token punctuation">,</span> <span class="token keyword">double</span> v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">subtract</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的乘法运算。
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被乘数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 乘数
     * <span class="token keyword">@return</span> 两个参数的积
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">multiply</span><span class="token punctuation">(</span><span class="token keyword">double</span> v1<span class="token punctuation">,</span> <span class="token keyword">double</span> v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供（相对）精确的除法运算，当发生除不尽的情况时，精确到
     * 小数点以后10位，以后的数字四舍五入。
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 被除数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 除数
     * <span class="token keyword">@return</span> 两个参数的商
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">divide</span><span class="token punctuation">(</span><span class="token keyword">double</span> v1<span class="token punctuation">,</span> <span class="token keyword">double</span> v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">divide</span><span class="token punctuation">(</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">,</span> DEF_DIV_SCALE<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供（相对）精确的除法运算。当发生除不尽的情况时，由scale参数指
     * 定精度，以后的数字四舍五入。
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span>    被除数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span>    除数
     * <span class="token keyword">@param</span> <span class="token parameter">scale</span> 表示表示需要精确到小数点以后几位。
     * <span class="token keyword">@return</span> 两个参数的商
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">divide</span><span class="token punctuation">(</span><span class="token keyword">double</span> v1<span class="token punctuation">,</span> <span class="token keyword">double</span> v2<span class="token punctuation">,</span> <span class="token keyword">int</span> scale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>scale <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span>
                    <span class="token string">"The scale must be a positive integer or zero"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>b2<span class="token punctuation">,</span> scale<span class="token punctuation">,</span> <span class="token class-name">RoundingMode</span><span class="token punctuation">.</span>HALF_UP<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的小数位四舍五入处理。
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v</span>     需要四舍五入的数字
     * <span class="token keyword">@param</span> <span class="token parameter">scale</span> 小数点后保留几位
     * <span class="token keyword">@return</span> 四舍五入后的结果
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">round</span><span class="token punctuation">(</span><span class="token keyword">double</span> v<span class="token punctuation">,</span> <span class="token keyword">int</span> scale<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>scale <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span>
                    <span class="token string">"The scale must be a positive integer or zero"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">BigDecimal</span> b <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> one <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b<span class="token punctuation">.</span><span class="token function">divide</span><span class="token punctuation">(</span>one<span class="token punctuation">,</span> scale<span class="token punctuation">,</span> <span class="token class-name">RoundingMode</span><span class="token punctuation">.</span>HALF_UP<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的类型转换(Float)
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v</span> 需要被转换的数字
     * <span class="token keyword">@return</span> 返回转换结果
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">float</span> <span class="token function">convertToFloat</span><span class="token punctuation">(</span><span class="token keyword">double</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b<span class="token punctuation">.</span><span class="token function">floatValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的类型转换(Int)不进行四舍五入
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v</span> 需要被转换的数字
     * <span class="token keyword">@return</span> 返回转换结果
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">convertsToInt</span><span class="token punctuation">(</span><span class="token keyword">double</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b<span class="token punctuation">.</span><span class="token function">intValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 提供精确的类型转换(Long)
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v</span> 需要被转换的数字
     * <span class="token keyword">@return</span> 返回转换结果
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token function">convertsToLong</span><span class="token punctuation">(</span><span class="token keyword">double</span> v<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b<span class="token punctuation">.</span><span class="token function">longValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回两个数中大的一个值
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 需要被对比的第一个数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 需要被对比的第二个数
     * <span class="token keyword">@return</span> 返回两个数中大的一个值
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">returnMax</span><span class="token punctuation">(</span><span class="token keyword">double</span> v1<span class="token punctuation">,</span> <span class="token keyword">double</span> v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 返回两个数中小的一个值
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 需要被对比的第一个数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 需要被对比的第二个数
     * <span class="token keyword">@return</span> 返回两个数中小的一个值
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">double</span> <span class="token function">returnMin</span><span class="token punctuation">(</span><span class="token keyword">double</span> v1<span class="token punctuation">,</span> <span class="token keyword">double</span> v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doubleValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 精确对比两个数字
     *
     * <span class="token keyword">@param</span> <span class="token parameter">v1</span> 需要被对比的第一个数
     * <span class="token keyword">@param</span> <span class="token parameter">v2</span> 需要被对比的第二个数
     * <span class="token keyword">@return</span> 如果两个数一样则返回0，如果第一个数比第二个数大则返回1，反之返回-1
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">compareTo</span><span class="token punctuation">(</span><span class="token keyword">double</span> v1<span class="token punctuation">,</span> <span class="token keyword">double</span> v2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">BigDecimal</span> b1 <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>v1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">BigDecimal</span> b2 <span class="token operator">=</span> <span class="token class-name">BigDecimal</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>v2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> b1<span class="token punctuation">.</span><span class="token function">compareTo</span><span class="token punctuation">(</span>b2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>浮点数没有办法用二进制精确表示，因此存在精度丢失的风险。</p>
<p>不过，Java 提供了<code v-pre>BigDecimal</code> 来操作浮点数。<code v-pre>BigDecimal</code> 的实现利用到了 <code v-pre>BigInteger</code> （用来操作大整数）, 所不同的是 <code v-pre>BigDecimal</code> 加入了小数位的概念。</p>
</div></template>
