<template><div><p>本章介绍如何对 Shell 脚本除错。</p>
<!-- more -->
<h2 id="常见错误" tabindex="-1"><a class="header-anchor" href="#常见错误" aria-hidden="true">#</a> 常见错误</h2>
<p>编写 Shell 脚本的时候，一定要考虑到命令失败的情况，否则很容易出错。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>

<span class="token assign-left variable">dir_name</span><span class="token operator">=</span>/path/not/exist

<span class="token builtin class-name">cd</span> <span class="token variable">$dir_name</span>
<span class="token function">rm</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面脚本中，如果目录 <code v-pre>$dir_name</code> 不存在，<code v-pre>cd $dir_name</code> 命令就会执行失败。这时，就不会改变当前目录，脚本会继续执行下去，导致 <code v-pre>rm *</code> 命令删光当前目录的文件。</p>
<p>如果改成下面的样子，也会有问题。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">cd</span> <span class="token variable">$dir_name</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面脚本中，只有 <code v-pre>cd $dir_name</code> 执行成功，才会执行 <code v-pre>rm *</code>。但是，如果变量 <code v-pre>$dir_name</code> 为空，<code v-pre>cd</code> 就会进入用户主目录，从而删光用户主目录的文件。</p>
<p>下面的写法才是正确的。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span><span class="token punctuation">[</span> -d <span class="token variable">$dir_name</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token variable">$dir_name</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，先判断目录 <code v-pre>$dir_name</code> 是否存在，然后才执行其他操作。</p>
<p>如果不放心删除什么文件，可以先打印出来看一下。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span><span class="token punctuation">[</span> -d <span class="token variable">$dir_name</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token variable">$dir_name</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token function">rm</span> *
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，<code v-pre>echo rm *</code> 不会删除文件，只会打印出来要删除的文件。</p>
<h2 id="bash-的-x-参数" tabindex="-1"><a class="header-anchor" href="#bash-的-x-参数" aria-hidden="true">#</a> <code v-pre>bash</code> 的 <code v-pre>-x</code> 参数</h2>
<p><code v-pre>bash</code> 的 <code v-pre>-x</code> 参数可以在执行每一行命令之前，打印该命令。这样就不用自己输出执行的命令，一旦出错，比较容易追查。</p>
<p>下面是一个脚本 <code v-pre>script.sh</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># script.sh</span>
<span class="token builtin class-name">echo</span> hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>加上 <code v-pre>-x</code> 参数，执行每条命令之前，都会显示该命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">bash</span> -x script.sh
+ <span class="token builtin class-name">echo</span> hello world
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，行首为 <code v-pre>+</code> 的行，显示该行是所要执行的命令，下一行才是该命令的执行结果。</p>
<p>下面再看一个 <code v-pre>-x</code> 写在脚本内部的例子。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#! /bin/bash -x</span>
<span class="token comment"># trouble: script to demonstrate common errors</span>

<span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$number</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Number is equal to 1."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Number is not equal to 1."</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的脚本执行之后，会输出每一行命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ trouble
+ <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">1</span>
+ <span class="token string">'['</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token string">']'</span>
+ <span class="token builtin class-name">echo</span> <span class="token string">'Number is equal to 1.'</span>
Number is equal to <span class="token number">1</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的命令之前的 <code v-pre>+</code> 号，是由系统变量 <code v-pre>PS4</code> 决定，可以修改这个变量。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PS4</span></span><span class="token operator">=</span><span class="token string">'$LINENO + '</span>
$ trouble
<span class="token number">5</span> + <span class="token assign-left variable">number</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token number">7</span> + <span class="token string">'['</span> <span class="token number">1</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token string">']'</span>
<span class="token number">8</span> + <span class="token builtin class-name">echo</span> <span class="token string">'Number is equal to 1.'</span>
Number is equal to <span class="token number">1</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，<code v-pre>set</code> 命令也可以设置 Shell 的行为参数，有利于脚本除错，详见 <RouterLink to="/linux/bash/set.html">set 命令</RouterLink> 一章。</p>
<h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2>
<p>有一些环境变量常用于除错。</p>
<h3 id="lineno" tabindex="-1"><a class="header-anchor" href="#lineno" aria-hidden="true">#</a> LINENO</h3>
<p>变量 <code v-pre>LINENO</code> 返回它在脚本里面的行号。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">"This is line <span class="token variable">$LINENO</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面的脚本 <code v-pre>test.sh</code>，<code v-pre>$LINENO</code> 会返回 <code v-pre>3</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ./test.sh
This is line <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="funcname" tabindex="-1"><a class="header-anchor" href="#funcname" aria-hidden="true">#</a> FUNCNAME</h3>
<p>变量 <code v-pre>FUNCNAME</code> 返回一个数组，内容是当前的函数调用堆栈。该数组的 0 号成员是当前调用的函数，1 号成员是调用当前函数的函数，以此类推。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func1: FUNCNAME0 is <span class="token variable">${FUNCNAME<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func1: FUNCNAME1 is <span class="token variable">${FUNCNAME<span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func1: FUNCNAME2 is <span class="token variable">${FUNCNAME<span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>"</span>
  func2
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func2: FUNCNAME0 is <span class="token variable">${FUNCNAME<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func2: FUNCNAME1 is <span class="token variable">${FUNCNAME<span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func2: FUNCNAME2 is <span class="token variable">${FUNCNAME<span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>"</span>
<span class="token punctuation">}</span>

func1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面的脚本 <code v-pre>test.sh</code>，结果如下。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ./test.sh
func1: FUNCNAME0 is func1
func1: FUNCNAME1 is main
func1: FUNCNAME2 is
func2: FUNCNAME0 is func2
func2: FUNCNAME1 is func1
func2: FUNCNAME2 is main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，执行 <code v-pre>func1</code> 时，变量 <code v-pre>FUNCNAME</code> 的 0 号成员是 <code v-pre>func1</code>，1 号成员是调用 <code v-pre>func1</code> 的主脚本 <code v-pre>main</code>。执行 <code v-pre>func2</code> 时，变量 <code v-pre>FUNCNAME</code> 的 0 号成员是 <code v-pre>func2</code>，1 号成员是调用 <code v-pre>func2</code> 的 <code v-pre>func1</code>。</p>
<h3 id="bash-source" tabindex="-1"><a class="header-anchor" href="#bash-source" aria-hidden="true">#</a> BASH_SOURCE</h3>
<p>变量 <code v-pre>BASH_SOURCE</code> 返回一个数组，内容是当前的脚本调用堆栈。该数组的 0 号成员是当前执行的脚本，1 号成员是调用当前脚本的脚本，以此类推，跟变量 <code v-pre>FUNCNAME</code> 是一一对应关系。</p>
<p>下面有两个子脚本 <code v-pre>lib1.sh</code> 和 <code v-pre>lib2.sh</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># lib1.sh</span>
<span class="token keyword">function</span> <span class="token function-name function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func1: BASH_SOURCE0 is <span class="token variable">${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func1: BASH_SOURCE1 is <span class="token variable">${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func1: BASH_SOURCE2 is <span class="token variable">${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>"</span>
  func2
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># lib2.sh</span>
<span class="token keyword">function</span> <span class="token function-name function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func2: BASH_SOURCE0 is <span class="token variable">${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func2: BASH_SOURCE1 is <span class="token variable">${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func2: BASH_SOURCE2 is <span class="token variable">${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span>"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，主脚本 <code v-pre>main.sh</code> 调用上面两个子脚本。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># main.sh</span>

<span class="token builtin class-name">source</span> lib1.sh
<span class="token builtin class-name">source</span> lib2.sh

func1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行主脚本 <code v-pre>main.sh</code>，会得到下面的结果。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ./main.sh
func1: BASH_SOURCE0 is lib1.sh
func1: BASH_SOURCE1 is ./main.sh
func1: BASH_SOURCE2 is
func2: BASH_SOURCE0 is lib2.sh
func2: BASH_SOURCE1 is lib1.sh
func2: BASH_SOURCE2 is ./main.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，执行函数 <code v-pre>func1</code> 时，变量 <code v-pre>BASH_SOURCE</code> 的 0 号成员是 <code v-pre>func1</code> 所在的脚本 <code v-pre>lib1.sh</code>，1 号成员是主脚本 <code v-pre>main.sh</code>；执行函数 <code v-pre>func2</code> 时，变量 <code v-pre>BASH_SOURCE</code> 的 0 号成员是 <code v-pre>func2</code> 所在的脚本 <code v-pre>lib2.sh</code>，1 号成员是调用 <code v-pre>func2</code> 的脚本 <code v-pre>lib1.sh</code>。</p>
<h3 id="bash-lineno" tabindex="-1"><a class="header-anchor" href="#bash-lineno" aria-hidden="true">#</a> BASH_LINENO</h3>
<p>变量 <code v-pre>BASH_LINENO</code> 返回一个数组，内容是每一轮调用对应的行号。<code v-pre>${BASH_LINENO[$i]}</code> 跟 <code v-pre>${FUNCNAME[$i]}</code> 是一一对应关系，表示 <code v-pre>${FUNCNAME[$i]}</code> 在调用它的脚本文件 <code v-pre>${BASH_SOURCE[$i+1]}</code> 里面的行号。</p>
<p>下面有两个子脚本 <code v-pre>lib1.sh</code> 和 <code v-pre>lib2.sh</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># lib1.sh</span>
<span class="token keyword">function</span> <span class="token function-name function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func1: BASH_LINENO is <span class="token variable">${<span class="token environment constant">BASH_LINENO</span><span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func1: FUNCNAME is <span class="token variable">${FUNCNAME<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func1: BASH_SOURCE is <span class="token variable">${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>"</span>

  func2
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># lib2.sh</span>
<span class="token keyword">function</span> <span class="token function-name function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func2: BASH_LINENO is <span class="token variable">${<span class="token environment constant">BASH_LINENO</span><span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func2: FUNCNAME is <span class="token variable">${FUNCNAME<span class="token punctuation">[</span>0<span class="token punctuation">]</span>}</span>"</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"func2: BASH_SOURCE is <span class="token variable">${<span class="token environment constant">BASH_SOURCE</span><span class="token punctuation">[</span>1<span class="token punctuation">]</span>}</span>"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，主脚本 <code v-pre>main.sh</code> 调用上面两个子脚本。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># main.sh</span>

<span class="token builtin class-name">source</span> lib1.sh
<span class="token builtin class-name">source</span> lib2.sh

func1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行主脚本 <code v-pre>main.sh</code>，会得到下面的结果。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ ./main.sh
func1: <span class="token environment constant">BASH_LINENO</span> is <span class="token number">7</span>
func1: FUNCNAME is func1
func1: <span class="token environment constant">BASH_SOURCE</span> is main.sh
func2: <span class="token environment constant">BASH_LINENO</span> is <span class="token number">8</span>
func2: FUNCNAME is func2
func2: <span class="token environment constant">BASH_SOURCE</span> is lib1.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，函数 <code v-pre>func1</code> 是在 <code v-pre>main.sh</code> 的第 7 行调用，函数 <code v-pre>func2</code> 是在 <code v-pre>lib1.sh</code> 的第 8 行调用的。</p>
</div></template>
