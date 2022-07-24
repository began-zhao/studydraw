<template><div><p>数组(array)是一个包含多个值的变量。成员的编号从 0 开始，数量没有上限，也没有要求成员被连续索引。</p>
<!-- more -->
<h2 id="创建数组" tabindex="-1"><a class="header-anchor" href="#创建数组" aria-hidden="true">#</a> 创建数组</h2>
<p>数组可以采用逐个赋值的方法创建。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>ARRAY<span class="token punctuation">[</span>INDEX<span class="token punctuation">]</span><span class="token operator">=</span>value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面语法中，<code v-pre>ARRAY</code> 是数组的名字，可以是任意合法的变量名。<code v-pre>INDEX</code> 是一个大于或等于零的整数，也可以是算术表达式。注意数组第一个元素的下标是 0， 而不是 1。</p>
<p>下面创建一个三个成员的数组。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span>val
array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>val
array<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span>val
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数组也可以采用一次性赋值的方式创建。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">ARRAY</span><span class="token operator">=</span><span class="token punctuation">(</span>value1 value2 <span class="token punctuation">..</span>. valueN<span class="token punctuation">)</span>

<span class="token comment"># 等同于</span>

<span class="token assign-left variable">ARRAY</span><span class="token operator">=</span><span class="token punctuation">(</span>
  value1
  value2
  value3
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>采用上面方式创建数组时，可以按照默认顺序赋值，也可以在每个值前面指定位置。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">array</span><span class="token operator">=</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span>
<span class="token assign-left variable">array</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span>c <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span>a <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>b<span class="token punctuation">)</span>

<span class="token assign-left variable">days</span><span class="token operator">=</span><span class="token punctuation">(</span>Sun Mon Tue Wed Thu Fri Sat<span class="token punctuation">)</span>
<span class="token assign-left variable">days</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span>Sun <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>Mon <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token operator">=</span>Tue <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token operator">=</span>Wed <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token operator">=</span>Thu <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">=</span>Fri <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token operator">=</span>Sat<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只为某些值指定位置，也是可以的。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">names</span><span class="token operator">=</span><span class="token punctuation">(</span>hatter <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">=</span>duchess alice<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>hatter</code> 是数组的 0 号位置，<code v-pre>duchess</code> 是 5 号位置，<code v-pre>alice</code> 是 6 号位置。</p>
<p>没有赋值的数组元素的默认值是空字符串。</p>
<p>定义数组的时候，可以使用通配符。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">mp3s</span><span class="token operator">=</span><span class="token punctuation">(</span> *.mp3 <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面例子中，将当前目录的所有 MP3 文件，放进一个数组。</p>
<p>先用 <code v-pre>declare -a</code> 命令声明一个数组，也是可以的。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span> -a ARRAYNAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>read -a</code> 命令则是将用户的命令行输入，读入一个数组。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">read</span> -a dice
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令将用户的命令行输入，读入数组 <code v-pre>dice</code>。</p>
<h2 id="读取数组" tabindex="-1"><a class="header-anchor" href="#读取数组" aria-hidden="true">#</a> 读取数组</h2>
<h3 id="读取单个元素" tabindex="-1"><a class="header-anchor" href="#读取单个元素" aria-hidden="true">#</a> 读取单个元素</h3>
<p>读取数组指定位置的成员，要使用下面的语法。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable">${array<span class="token punctuation">[</span>i<span class="token punctuation">]</span>}</span>     <span class="token comment"># i 是索引</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面语法里面的大括号是必不可少的，否则 Bash 会把索引部分 <code v-pre>[i]</code> 按照原样输出。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token operator">=</span>a

$ <span class="token builtin class-name">echo</span> <span class="token variable">${array<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>
a

$ <span class="token builtin class-name">echo</span> <span class="token variable">$array</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，数组的第一个元素是 <code v-pre>a</code>。如果不加大括号，Bash 会直接读取 <code v-pre>$array</code> 首成员的值，然后将 <code v-pre>[0]</code> 按照原样输出。</p>
<h3 id="读取所有成员" tabindex="-1"><a class="header-anchor" href="#读取所有成员" aria-hidden="true">#</a> 读取所有成员</h3>
<p><code v-pre>@</code> 和 <code v-pre>*</code> 是数组的特殊索引，表示返回数组的所有成员。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token punctuation">(</span>a b c d e f<span class="token punctuation">)</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">${foo<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
a b c d e f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个特殊索引配合 <code v-pre>for</code> 循环，就可以用来遍历数组。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token string">"<span class="token variable">${names<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>"</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">$i</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>@</code> 和 <code v-pre>*</code> 放不放在双引号之中，是有差别的。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">activities</span><span class="token operator">=</span><span class="token punctuation">(</span> swimming <span class="token string">"water skiing"</span> canoeing <span class="token string">"white-water rafting"</span> surfing <span class="token punctuation">)</span>
$ <span class="token keyword">for</span> <span class="token for-or-select variable">act</span> <span class="token keyword">in</span> <span class="token variable">${activities<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span><span class="token punctuation">;</span> <span class="token punctuation">\</span>
<span class="token keyword">do</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Activity: <span class="token variable">$act</span>"</span><span class="token punctuation">;</span> <span class="token punctuation">\</span>
<span class="token keyword">done</span>

Activity: swimming
Activity: water
Activity: skiing
Activity: canoeing
Activity: white-water
Activity: rafting
Activity: surfing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，数组 <code v-pre>activities</code> 实际包含 5 个元素，但是 <code v-pre>for...in</code> 循环直接遍历 <code v-pre>${activities[@]}</code>，会导致返回 7 个结果。为了避免这种情况，一般把 <code v-pre>${activities[@]}</code> 放在双引号之中。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token keyword">for</span> <span class="token for-or-select variable">act</span> <span class="token keyword">in</span> <span class="token string">"<span class="token variable">${activities<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>"</span><span class="token punctuation">;</span> <span class="token punctuation">\</span>
<span class="token keyword">do</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Activity: <span class="token variable">$act</span>"</span><span class="token punctuation">;</span> <span class="token punctuation">\</span>
<span class="token keyword">done</span>

Activity: swimming
Activity: water skiing
Activity: canoeing
Activity: white-water rafting
Activity: surfing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>${activities[@]}</code> 放在双引号之中，遍历就会返回正确的结果。</p>
<p><code v-pre>${activities[*]}</code> 不放在双引号之中，跟 <code v-pre>${activities[@]}</code> 不放在双引号之中是一样的。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token keyword">for</span> <span class="token for-or-select variable">act</span> <span class="token keyword">in</span> <span class="token variable">${activities<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span><span class="token punctuation">;</span> <span class="token punctuation">\</span>
<span class="token keyword">do</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Activity: <span class="token variable">$act</span>"</span><span class="token punctuation">;</span> <span class="token punctuation">\</span>
<span class="token keyword">done</span>

Activity: swimming
Activity: water
Activity: skiing
Activity: canoeing
Activity: white-water
Activity: rafting
Activity: surfing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>${activities[*]}</code> 放在双引号之中，所有元素就会变成单个字符串返回。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token keyword">for</span> <span class="token for-or-select variable">act</span> <span class="token keyword">in</span> <span class="token string">"<span class="token variable">${activities<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>"</span><span class="token punctuation">;</span> <span class="token punctuation">\</span>
<span class="token keyword">do</span> <span class="token punctuation">\</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Activity: <span class="token variable">$act</span>"</span><span class="token punctuation">;</span> <span class="token punctuation">\</span>
<span class="token keyword">done</span>

Activity: swimming water skiing canoeing white-water rafting surfing
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以，拷贝一个数组的最方便方法，就是写成下面这样。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">hobbies</span><span class="token operator">=</span><span class="token punctuation">(</span> <span class="token string">"<span class="token variable">${activities<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>"</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面例子中，数组 <code v-pre>activities</code> 被拷贝给了另一个数组 <code v-pre>hobbies</code>。</p>
<p>这种写法也可以用来为新数组添加成员。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">hobbies</span><span class="token operator">=</span><span class="token punctuation">(</span> <span class="token string">"${activities[@]"</span> diving <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面例子中，新数组 <code v-pre>hobbies</code> 在数组 <code v-pre>activities</code> 的所有成员之后，又添加了一个成员。</p>
<h3 id="默认位置" tabindex="-1"><a class="header-anchor" href="#默认位置" aria-hidden="true">#</a> 默认位置</h3>
<p>如果读取数组成员时，没有读取指定哪一个位置的成员，默认使用 <code v-pre>0</code> 号位置。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">declare</span> -a foo
$ <span class="token assign-left variable">foo</span><span class="token operator">=</span>A
$ <span class="token builtin class-name">echo</span> <span class="token variable">${foo<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>
A
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>foo</code> 是一个数组，赋值的时候不指定位置，实际上是给 <code v-pre>foo[0]</code> 赋值。</p>
<p>引用一个不带下标的数组变量，则引用的是 <code v-pre>0</code> 号位置的数组元素。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token punctuation">(</span>a b c d e f<span class="token punctuation">)</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">${foo}</span>
a
$ <span class="token builtin class-name">echo</span> <span class="token variable">$foo</span>
a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，引用数组元素的时候，没有指定位置，结果返回的是 <code v-pre>0</code> 号位置。</p>
<h2 id="数组的长度" tabindex="-1"><a class="header-anchor" href="#数组的长度" aria-hidden="true">#</a> 数组的长度</h2>
<p>要想知道数组的长度(即一共包含多少成员)，可以使用下面两种语法。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token variable">${<span class="token operator">#</span>array<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
<span class="token variable">${<span class="token operator">#</span>array<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个例子。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ a<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token operator">=</span>foo

$ <span class="token builtin class-name">echo</span> <span class="token variable">${<span class="token operator">#</span>a<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
<span class="token number">1</span>

$ <span class="token builtin class-name">echo</span> <span class="token variable">${<span class="token operator">#</span>a<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，把字符串赋值给 <code v-pre>100</code> 位置的数组元素，这时的数组只有一个元素。</p>
<p>注意，如果用这种语法去读取具体的数组成员，就会返回该成员的字符串长度。这一点必须小心。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ a<span class="token punctuation">[</span><span class="token number">100</span><span class="token punctuation">]</span><span class="token operator">=</span>foo
$ <span class="token builtin class-name">echo</span> <span class="token variable">${<span class="token operator">#</span>a<span class="token punctuation">[</span>100<span class="token punctuation">]</span>}</span>
<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>${#a[100]}</code> 实际上是返回数组第 100 号成员 <code v-pre>a[100]</code> 的值(<code v-pre>foo</code>)的字符串长度。</p>
<h2 id="提取数组序号" tabindex="-1"><a class="header-anchor" href="#提取数组序号" aria-hidden="true">#</a> 提取数组序号</h2>
<p><code v-pre>${!array[@]}</code> 或 <code v-pre>${!array[*]}</code>，可以返回数组的成员序号，即哪些位置是有值的。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token operator">=</span>a <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token operator">=</span>b <span class="token punctuation">[</span><span class="token number">23</span><span class="token punctuation">]</span><span class="token operator">=</span>c<span class="token punctuation">)</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">${<span class="token operator">!</span>arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token number">5</span> <span class="token number">9</span> <span class="token number">23</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">${<span class="token operator">!</span>arr<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
<span class="token number">5</span> <span class="token number">9</span> <span class="token number">23</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，数组的 5、9、23 号位置有值。</p>
<p>利用这个语法，也可以通过 <code v-pre>for</code> 循环遍历数组。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">arr</span><span class="token operator">=</span><span class="token punctuation">(</span>a b c d<span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">${<span class="token operator">!</span>arr<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span><span class="token punctuation">;</span><span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token variable">${arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span>}</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="提取数组成员" tabindex="-1"><a class="header-anchor" href="#提取数组成员" aria-hidden="true">#</a> 提取数组成员</h2>
<p><code v-pre>${array[@]:position:length}</code> 的语法可以提取数组成员。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">food</span><span class="token operator">=</span><span class="token punctuation">(</span> apples bananas cucumbers dates eggs fajitas grapes <span class="token punctuation">)</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">${food<span class="token punctuation">[</span>@<span class="token punctuation">]</span><span class="token operator">:</span>1<span class="token operator">:</span>1}</span>
bananas
$ <span class="token builtin class-name">echo</span> <span class="token variable">${food<span class="token punctuation">[</span>@<span class="token punctuation">]</span><span class="token operator">:</span>1<span class="token operator">:</span>3}</span>
bananas cucumbers dates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>${food[@]:1:1}</code> 返回从数组 1 号位置开始的 1 个成员，<code v-pre>${food[@]:1:3}</code> 返回从 1 号位置开始的 3 个成员。</p>
<p>如果省略长度参数 <code v-pre>length</code>，则返回从指定位置开始的所有成员。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable">${food<span class="token punctuation">[</span>@<span class="token punctuation">]</span><span class="token operator">:</span>4}</span>
eggs fajitas grapes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子返回从 4 号位置开始到结束的所有成员。</p>
<h2 id="追加数组成员" tabindex="-1"><a class="header-anchor" href="#追加数组成员" aria-hidden="true">#</a> 追加数组成员</h2>
<p>数组末尾追加成员，可以使用 <code v-pre>+=</code> 赋值运算符。它能够自动地把值追加到数组末尾。否则，就需要知道数组的最大序号，比较麻烦。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token punctuation">(</span>a b c<span class="token punctuation">)</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">${foo<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
a b c

$ <span class="token assign-left variable">foo</span><span class="token operator">+=</span><span class="token punctuation">(</span>d e f<span class="token punctuation">)</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">${foo<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
a b c d e f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除数组" tabindex="-1"><a class="header-anchor" href="#删除数组" aria-hidden="true">#</a> 删除数组</h2>
<p>删除一个数组成员，使用 <code v-pre>unset</code> 命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token punctuation">(</span>a b c d e f<span class="token punctuation">)</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">${foo<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
a b c d e f

$ <span class="token builtin class-name">unset</span> foo<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">${foo<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
a b d e f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，删除了数组中的第三个元素，下标为 2。</p>
<p>删除成员也可以将这个成员设为空值。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token punctuation">(</span>a b c d e f<span class="token punctuation">)</span>
$ foo<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">''</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">${foo<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
a c d e f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，将数组的第二个成员设为空字符串，就删除了这个成员。</p>
<p>由于空值就是空字符串，所以下面这样写也可以，但是不建议这种写法。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>foo<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的写法也相当于删除了数组的第二个成员。</p>
<p>直接将数组变量赋值为空字符串，相当于删除数组的第一个成员。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token punctuation">(</span>a b c d e f<span class="token punctuation">)</span>
$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token string">''</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">${foo<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
b c d e f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的写法相当于删除了数组的第一个成员。</p>
<p><code v-pre>unset ArrayName</code> 可以清空整个数组。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">unset</span> ARRAY

$ <span class="token builtin class-name">echo</span> <span class="token variable">${ARRAY<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
<span class="token operator">&lt;</span>--no output--<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关联数组" tabindex="-1"><a class="header-anchor" href="#关联数组" aria-hidden="true">#</a> 关联数组</h2>
<p>Bash 的新版本支持关联数组。关联数组使用字符串而不是整数作为数组索引。</p>
<p><code v-pre>declare -A</code> 可以声明关联数组。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span> -A colors
colors<span class="token punctuation">[</span><span class="token string">"red"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"#ff0000"</span>
colors<span class="token punctuation">[</span><span class="token string">"green"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"#00ff00"</span>
colors<span class="token punctuation">[</span><span class="token string">"blue"</span><span class="token punctuation">]</span><span class="token operator">=</span><span class="token string">"#0000ff"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>整数索引的数组，可以直接使用变量名创建数组，关联数组则必须用带有 <code v-pre>-A</code> 选项的 <code v-pre>declare</code> 命令声明创建。</p>
<p>访问关联数组成员的方式，几乎与整数索引数组相同。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token variable">${colors<span class="token punctuation">[</span>"blue"<span class="token punctuation">]</span>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
