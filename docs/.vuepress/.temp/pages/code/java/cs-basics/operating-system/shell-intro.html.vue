<template><div><h1 id="shell-编程入门" tabindex="-1"><a class="header-anchor" href="#shell-编程入门" aria-hidden="true">#</a> Shell 编程入门</h1>
<h2 id="走进-shell-编程的大门" tabindex="-1"><a class="header-anchor" href="#走进-shell-编程的大门" aria-hidden="true">#</a> 走进 Shell 编程的大门</h2>
<h3 id="为什么要学shell" tabindex="-1"><a class="header-anchor" href="#为什么要学shell" aria-hidden="true">#</a> 为什么要学Shell？</h3>
<p>学一个东西，我们大部分情况都是往实用性方向着想。从工作角度来讲，学习 Shell 是为了提高我们自己工作效率，提高产出，让我们在更少的时间完成更多的事情。</p>
<p>很多人会说 Shell 编程属于运维方面的知识了，应该是运维人员来做，我们做后端开发的没必要学。我觉得这种说法大错特错，相比于专门做Linux运维的人员来说，我们对 Shell 编程掌握程度的要求要比他们低，但是shell编程也是我们必须要掌握的！</p>
<p>目前Linux系统下最流行的运维自动化语言就是Shell和Python了。</p>
<p>两者之间，Shell几乎是IT企业必须使用的运维自动化编程语言，特别是在运维工作中的服务监控、业务快速部署、服务启动停止、数据备份及处理、日志分析等环节里，shell是不可缺的。Python 更适合处理复杂的业务逻辑，以及开发复杂的运维软件工具，实现通过web访问等。Shell是一个命令解释器，解释执行用户所输入的命令和程序。一输入命令，就立即回应的交互的对话方式。</p>
<p>另外，了解 shell 编程也是大部分互联网公司招聘后端开发人员的要求。下图是我截取的一些知名互联网公司对于 Shell 编程的要求。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-11-16/60190220.jpg" alt="大型互联网公司对于shell编程技能的要求" loading="lazy"></p>
<h3 id="什么是-shell" tabindex="-1"><a class="header-anchor" href="#什么是-shell" aria-hidden="true">#</a> 什么是 Shell？</h3>
<p>简单来说“Shell编程就是对一堆Linux命令的逻辑化处理”。</p>
<p>W3Cschool 上的一篇文章是这样介绍 Shell的，如下图所示。
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-11-26/19456505.jpg" alt="什么是 Shell？" loading="lazy"></p>
<h3 id="shell-编程的-hello-world" tabindex="-1"><a class="header-anchor" href="#shell-编程的-hello-world" aria-hidden="true">#</a> Shell 编程的 Hello World</h3>
<p>学习任何一门编程语言第一件事就是输出HelloWorld了！下面我会从新建文件到shell代码编写来说下Shell 编程如何输出Hello World。</p>
<p>(1)新建一个文件 <a href="http://helloworld.sh" target="_blank" rel="noopener noreferrer">helloworld.sh<ExternalLinkIcon/></a> :<code v-pre>touch helloworld.sh</code>，扩展名为 sh（sh代表Shell）（扩展名并不影响脚本执行，见名知意就好，如果你用 php 写 shell 脚本，扩展名就用 php 好了）</p>
<p>(2) 使脚本具有执行权限：<code v-pre>chmod +x helloworld.sh</code></p>
<p>(3) 使用 vim 命令修改helloworld.sh文件：<code v-pre>vim helloworld.sh</code>(vim 文件------&gt;进入文件-----&gt;命令模式------&gt;按i进入编辑模式-----&gt;编辑文件 -------&gt;按Esc进入底行模式-----&gt;输入:wq/q! （输入wq代表写入内容并退出，即保存；输入q!代表强制退出不保存。）)</p>
<p><a href="http://helloworld.sh" target="_blank" rel="noopener noreferrer">helloworld.sh<ExternalLinkIcon/></a> 内容如下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#第一个shell小程序,echo 是linux中的输出命令。</span>
<span class="token builtin class-name">echo</span>  <span class="token string">"helloworld!"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>shell中 # 符号表示注释。<strong>shell 的第一行比较特殊，一般都会以#!开始来指定使用的 shell 类型。在linux中，除了bash shell以外，还有很多版本的shell， 例如zsh、dash等等...不过bash shell还是我们使用最多的。</strong></p>
<p>(4) 运行脚本:<code v-pre>./helloworld.sh</code> 。（注意，一定要写成 <code v-pre>./helloworld.sh</code> ，而不是 <code v-pre>helloworld.sh</code> ，运行其它二进制的程序也一样，直接写 <code v-pre>helloworld.sh</code> ，linux 系统会去 PATH 里寻找有没有叫 <a href="http://helloworld.sh" target="_blank" rel="noopener noreferrer">helloworld.sh<ExternalLinkIcon/></a> 的，而只有 /bin, /sbin, /usr/bin，/usr/sbin 等在 PATH 里，你的当前目录通常不在 PATH 里，所以写成 <code v-pre>helloworld.sh</code> 是会找不到命令的，要用<code v-pre>./helloworld.sh</code> 告诉系统说，就在当前目录找。）</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-11-16/55296212.jpg" alt="shell 编程Hello World" loading="lazy"></p>
<h2 id="shell-变量" tabindex="-1"><a class="header-anchor" href="#shell-变量" aria-hidden="true">#</a> Shell 变量</h2>
<h3 id="shell-编程中的变量介绍" tabindex="-1"><a class="header-anchor" href="#shell-编程中的变量介绍" aria-hidden="true">#</a> Shell 编程中的变量介绍</h3>
<p><strong>Shell编程中一般分为三种变量：</strong></p>
<ol>
<li><strong>我们自己定义的变量（自定义变量）:</strong> 仅在当前 Shell 实例中有效，其他 Shell 启动的程序不能访问局部变量。</li>
<li><strong>Linux已定义的环境变量</strong>（环境变量， 例如：<code v-pre>PATH</code>, ​<code v-pre>HOME</code> 等..., 这类变量我们可以直接使用），使用 <code v-pre>env</code> 命令可以查看所有的环境变量，而set命令既可以查看环境变量也可以查看自定义变量。</li>
<li><strong>Shell变量</strong> ：Shell变量是由 Shell 程序设置的特殊变量。Shell 变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了 Shell 的正常运行</li>
</ol>
<p><strong>常用的环境变量:</strong></p>
<blockquote>
<p>PATH 决定了shell将到哪些目录中寻找命令或程序<br>
HOME 当前用户主目录<br>
HISTSIZE　历史记录数<br>
LOGNAME 当前用户的登录名<br>
HOSTNAME　指主机的名称<br>
SHELL 当前用户Shell类型<br>
LANGUAGE 　语言相关的环境变量，多语言可以修改此环境变量<br>
MAIL　当前用户的邮件存放目录<br>
PS1　基本提示符，对于root用户是#，对于普通用户是$</p>
</blockquote>
<p><strong>使用 Linux 已定义的环境变量：</strong></p>
<p>比如我们要看当前用户目录可以使用：<code v-pre>echo $HOME</code>命令；如果我们要看当前用户Shell类型 可以使用<code v-pre>echo $SHELL</code>命令。可以看出，使用方法非常简单。</p>
<p><strong>使用自己定义的变量：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#自定义变量hello</span>
<span class="token assign-left variable">hello</span><span class="token operator">=</span><span class="token string">"hello world"</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$hello</span>
<span class="token builtin class-name">echo</span>  <span class="token string">"helloworld!"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-11-17/19835037.jpg" alt="使用自己定义的变量" loading="lazy"></p>
<p><strong>Shell 编程中的变量名的命名的注意事项：</strong></p>
<ul>
<li>命名只能使用英文字母，数字和下划线，首个字符不能以数字开头，但是可以使用下划线（_）开头。</li>
<li>中间不能有空格，可以使用下划线（_）。</li>
<li>不能使用标点符号。</li>
<li>不能使用bash里的关键字（可用help命令查看保留关键字）。</li>
</ul>
<h3 id="shell-字符串入门" tabindex="-1"><a class="header-anchor" href="#shell-字符串入门" aria-hidden="true">#</a> Shell 字符串入门</h3>
<p>字符串是shell编程中最常用最有用的数据类型（除了数字和字符串，也没啥其它类型好用了），字符串可以用单引号，也可以用双引号。这点和Java中有所不同。</p>
<p><strong>单引号字符串：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">'SnailClimb'</span>
<span class="token assign-left variable">hello</span><span class="token operator">=</span><span class="token string">'Hello, I  am '</span><span class="token variable">$name</span><span class="token string">'!'</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出内容：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Hello, I am SnailClimb!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>双引号字符串：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">'SnailClimb'</span>
<span class="token assign-left variable">hello</span><span class="token operator">=</span><span class="token string">"Hello, I  am "</span><span class="token variable">$name</span><span class="token string">"!"</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出内容：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Hello, I am SnailClimb!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="shell-字符串常见操作" tabindex="-1"><a class="header-anchor" href="#shell-字符串常见操作" aria-hidden="true">#</a> Shell 字符串常见操作</h3>
<p><strong>拼接字符串：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">"SnailClimb"</span>
<span class="token comment"># 使用双引号拼接</span>
<span class="token assign-left variable">greeting</span><span class="token operator">=</span><span class="token string">"hello, "</span><span class="token variable">$name</span><span class="token string">" !"</span>
<span class="token assign-left variable">greeting_1</span><span class="token operator">=</span><span class="token string">"hello, <span class="token variable">${name}</span> !"</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$greeting</span>  <span class="token variable">$greeting_1</span>
<span class="token comment"># 使用单引号拼接</span>
<span class="token assign-left variable">greeting_2</span><span class="token operator">=</span><span class="token string">'hello, '</span><span class="token variable">$name</span><span class="token string">' !'</span>
<span class="token assign-left variable">greeting_3</span><span class="token operator">=</span><span class="token string">'hello, ${name} !'</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$greeting_2</span>  <span class="token variable">$greeting_3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-11-17/51148933.jpg" alt="输出结果" loading="lazy"></p>
<p><strong>获取字符串长度：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment">#获取字符串长度</span>
<span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">"SnailClimb"</span>
<span class="token comment"># 第一种方式</span>
<span class="token builtin class-name">echo</span> <span class="token variable">${<span class="token operator">#</span>name}</span> <span class="token comment">#输出 10</span>
<span class="token comment"># 第二种方式</span>
<span class="token function">expr</span> length <span class="token string">"<span class="token variable">$name</span>"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>10
10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 expr 命令时，表达式中的运算符左右必须包含空格，如果不包含空格，将会输出表达式本身:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">expr</span> <span class="token number">5</span>+6    // 直接输出 <span class="token number">5</span>+6
<span class="token function">expr</span> <span class="token number">5</span> + <span class="token number">6</span>       // 输出 <span class="token number">11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于某些运算符，还需要我们使用符号<code v-pre>\</code>进行转义，否则就会提示语法错误。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">expr</span> <span class="token number">5</span> * <span class="token number">6</span>       // 输出错误
<span class="token function">expr</span> <span class="token number">5</span> <span class="token punctuation">\</span>* <span class="token number">6</span>      // 输出30
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>截取子字符串:</strong></p>
<p>简单的字符串截取：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#从字符串第 1 个字符开始往后截取 10 个字符</span>
<span class="token assign-left variable">str</span><span class="token operator">=</span><span class="token string">"SnailClimb is a great man"</span>
<span class="token builtin class-name">echo</span> <span class="token variable">${str<span class="token operator">:</span>0<span class="token operator">:</span>10}</span> <span class="token comment">#输出:SnailClimb</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据表达式截取：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment">#!bin/bash</span>
<span class="token comment">#author:amau</span>

<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token string">"https://www.runoob.com/linux/linux-shell-variable.html"</span>
<span class="token comment"># %表示删除从后匹配, 最短结果</span>
<span class="token comment"># %%表示删除从后匹配, 最长匹配结果</span>
<span class="token comment"># #表示删除从头匹配, 最短结果</span>
<span class="token comment"># ##表示删除从头匹配, 最长匹配结果</span>
<span class="token comment"># 注: *为通配符, 意为匹配任意数量的任意字符</span>
<span class="token assign-left variable">s1</span><span class="token operator">=</span><span class="token variable">${var<span class="token operator">%%</span>t*}</span> <span class="token comment">#h</span>
<span class="token assign-left variable">s2</span><span class="token operator">=</span><span class="token variable">${var<span class="token operator">%</span>t*}</span>  <span class="token comment">#https://www.runoob.com/linux/linux-shell-variable.h</span>
<span class="token assign-left variable">s3</span><span class="token operator">=</span><span class="token variable">${var<span class="token operator">%%</span>.*}</span> <span class="token comment">#http://www</span>
<span class="token assign-left variable">s4</span><span class="token operator">=</span><span class="token variable">${var<span class="token operator">#</span>*<span class="token operator">/</span>}</span>  <span class="token comment">#/www.runoob.com/linux/linux-shell-variable.html</span>
<span class="token assign-left variable">s5</span><span class="token operator">=</span><span class="token variable">${var<span class="token operator">##</span>*<span class="token operator">/</span>}</span> <span class="token comment">#linux-shell-variable.html</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="shell-数组" tabindex="-1"><a class="header-anchor" href="#shell-数组" aria-hidden="true">#</a> Shell 数组</h3>
<p>bash支持一维数组（不支持多维数组），并且没有限定数组的大小。我下面给了大家一个关于数组操作的 Shell 代码示例，通过该示例大家可以知道如何创建数组、获取数组长度、获取/删除特定位置的数组元素、删除整个数组以及遍历数组。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">array</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment"># 获取数组长度</span>
<span class="token assign-left variable">length</span><span class="token operator">=</span><span class="token variable">${<span class="token operator">#</span>array<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token comment"># 或者</span>
<span class="token assign-left variable">length2</span><span class="token operator">=</span><span class="token variable">${<span class="token operator">#</span>array<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>
<span class="token comment">#输出数组长度</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$length</span> <span class="token comment">#输出：5</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$length2</span> <span class="token comment">#输出：5</span>
<span class="token comment"># 输出数组第三个元素</span>
<span class="token builtin class-name">echo</span> <span class="token variable">${array<span class="token punctuation">[</span>2<span class="token punctuation">]</span>}</span> <span class="token comment">#输出：3</span>
<span class="token builtin class-name">unset</span> array<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token comment"># 删除下标为1的元素也就是删除第二个元素</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">${array<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token variable">$i</span> <span class="token punctuation">;</span><span class="token keyword">done</span> <span class="token comment"># 遍历数组，输出： 1 3 4 5 </span>
<span class="token builtin class-name">unset</span> array<span class="token punctuation">;</span> <span class="token comment"># 删除数组中的所有元素</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable">${array<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span><span class="token punctuation">;</span><span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token variable">$i</span> <span class="token punctuation">;</span><span class="token keyword">done</span> <span class="token comment"># 遍历数组，数组元素为空，没有任何输出内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell-基本运算符" tabindex="-1"><a class="header-anchor" href="#shell-基本运算符" aria-hidden="true">#</a> Shell 基本运算符</h2>
<blockquote>
<p>说明：图片来自《菜鸟教程》</p>
</blockquote>
<p>Shell 编程支持下面几种运算符</p>
<ul>
<li>算数运算符</li>
<li>关系运算符</li>
<li>布尔运算符</li>
<li>字符串运算符</li>
<li>文件测试运算符</li>
</ul>
<h3 id="算数运算符" tabindex="-1"><a class="header-anchor" href="#算数运算符" aria-hidden="true">#</a> 算数运算符</h3>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-11-22/4937342.jpg" alt="算数运算符" loading="lazy"></p>
<p>我以加法运算符做一个简单的示例（注意：不是单引号，是反引号）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span><span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
<span class="token assign-left variable">val</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span><span class="token function">expr</span> $a + $b<span class="token variable">`</span></span>
<span class="token comment">#输出：Total value : 6</span>
<span class="token builtin class-name">echo</span> <span class="token string">"Total value : <span class="token variable">$val</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符" aria-hidden="true">#</a> 关系运算符</h3>
<p>关系运算符只支持数字，不支持字符串，除非字符串的值是数字。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-11-22/64391380.jpg" alt="shell关系运算符" loading="lazy"></p>
<p>通过一个简单的示例演示关系运算符的使用，下面shell程序的作用是当score=100的时候输出A否则输出B。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">score</span><span class="token operator">=</span><span class="token number">90</span><span class="token punctuation">;</span>
<span class="token assign-left variable">maxscore</span><span class="token operator">=</span><span class="token number">100</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$score</span> -eq <span class="token variable">$maxscore</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">"A"</span>
<span class="token keyword">else</span>
   <span class="token builtin class-name">echo</span> <span class="token string">"B"</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h3>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-11-22/60545848.jpg" alt="逻辑运算符" loading="lazy"></p>
<p>示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token number">0</span><span class="token variable">))</span></span>
<span class="token comment"># 输出：0；逻辑与运算只有相与的两边都是1，与的结果才是1；否则与的结果是0</span>
<span class="token builtin class-name">echo</span> <span class="token variable">$a</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="布尔运算符" tabindex="-1"><a class="header-anchor" href="#布尔运算符" aria-hidden="true">#</a> 布尔运算符</h3>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-11-22/93961425.jpg" alt="布尔运算符" loading="lazy"></p>
<p>这里就不做演示了，应该挺简单的。</p>
<h3 id="字符串运算符" tabindex="-1"><a class="header-anchor" href="#字符串运算符" aria-hidden="true">#</a> 字符串运算符</h3>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-11-22/309094.jpg" alt=" 字符串运算符" loading="lazy"></p>
<p>简单示例：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token string">"abc"</span><span class="token punctuation">;</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token string">"efg"</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> <span class="token operator">=</span> <span class="token variable">$b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">"a 等于 b"</span>
<span class="token keyword">else</span>
   <span class="token builtin class-name">echo</span> <span class="token string">"a 不等于 b"</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>a 不等于 b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="文件相关运算符" tabindex="-1"><a class="header-anchor" href="#文件相关运算符" aria-hidden="true">#</a> 文件相关运算符</h3>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-11-22/60359774.jpg" alt="文件相关运算符" loading="lazy"></p>
<p>使用方式很简单，比如我们定义好了一个文件路径<code v-pre>file=&quot;/usr/learnshell/test.sh&quot;</code> 如果我们想判断这个文件是否可读，可以这样<code v-pre>if [ -r $file ]</code> 如果想判断这个文件是否可写，可以这样<code v-pre>-w $file</code>，是不是很简单。</p>
<h2 id="shell流程控制" tabindex="-1"><a class="header-anchor" href="#shell流程控制" aria-hidden="true">#</a> shell流程控制</h2>
<h3 id="if-条件语句" tabindex="-1"><a class="header-anchor" href="#if-条件语句" aria-hidden="true">#</a> if 条件语句</h3>
<p>简单的 if else-if else 的条件语句示例</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">;</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token number">9</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> -eq <span class="token variable">$b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">"a 等于 b"</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token variable">$a</span> -gt <span class="token variable">$b</span> <span class="token punctuation">]</span>
<span class="token keyword">then</span>
   <span class="token builtin class-name">echo</span> <span class="token string">"a 大于 b"</span>
<span class="token keyword">else</span>
   <span class="token builtin class-name">echo</span> <span class="token string">"a 小于 b"</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>a 小于 b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相信大家通过上面的示例就已经掌握了 shell 编程中的 if 条件语句。不过，还要提到的一点是，不同于我们常见的 Java 以及 PHP 中的 if 条件语句，shell  if 条件语句中不能包含空语句也就是什么都不做的语句。</p>
<h3 id="for-循环语句" tabindex="-1"><a class="header-anchor" href="#for-循环语句" aria-hidden="true">#</a> for 循环语句</h3>
<p>通过下面三个简单的示例认识 for 循环语句最基本的使用，实际上 for 循环语句的功能比下面你看到的示例展现的要大得多。</p>
<p><strong>输出当前列表中的数据：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">for</span> <span class="token for-or-select variable">loop</span> <span class="token keyword">in</span> <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"The value is: <span class="token variable">$loop</span>"</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>产生 10 个随机数：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">..</span><span class="token number">9</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">do</span> 
   <span class="token builtin class-name">echo</span> <span class="token environment constant">$RANDOM</span><span class="token punctuation">;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出1到5:</strong></p>
<p>通常情况下 shell 变量调用需要加 $,但是 for 的 (()) 中不需要,下面来看一个例子：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token keyword">for</span><span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$i</span><span class="token punctuation">;</span>
<span class="token keyword">done</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="while-语句" tabindex="-1"><a class="header-anchor" href="#while-语句" aria-hidden="true">#</a> while 语句</h3>
<p><strong>基本的 while 循环语句：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">int</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span><span class="token variable"><span class="token punctuation">((</span> $int<span class="token operator">&lt;=</span><span class="token number">5</span> <span class="token punctuation">))</span></span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token variable">$int</span>
    <span class="token builtin class-name">let</span> <span class="token string">"int++"</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>while循环可用于读取键盘信息：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">'按下 &lt;CTRL-D> 退出'</span>
<span class="token builtin class-name">echo</span> -n <span class="token string">'输入你最喜欢的电影: '</span>
<span class="token keyword">while</span> <span class="token builtin class-name">read</span> FILM
<span class="token keyword">do</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"是的！<span class="token variable">$FILM</span> 是一个好电影"</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出内容:</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>按下 &lt;CTRL-D> 退出
输入你最喜欢的电影: 变形金刚
是的！变形金刚 是一个好电影
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>无限循环：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">while</span> <span class="token boolean">true</span>
<span class="token keyword">do</span>
    <span class="token builtin class-name">command</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell-函数" tabindex="-1"><a class="header-anchor" href="#shell-函数" aria-hidden="true">#</a> shell 函数</h2>
<h3 id="不带参数没有返回值的函数" tabindex="-1"><a class="header-anchor" href="#不带参数没有返回值的函数" aria-hidden="true">#</a> 不带参数没有返回值的函数</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token function-name function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"这是我的第一个 shell 函数!"</span>
<span class="token punctuation">}</span>
<span class="token builtin class-name">echo</span> <span class="token string">"-----函数开始执行-----"</span>
hello
<span class="token builtin class-name">echo</span> <span class="token string">"-----函数执行完毕-----"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>-----函数开始执行-----
这是我的第一个 shell 函数!
-----函数执行完毕-----
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="有返回值的函数" tabindex="-1"><a class="header-anchor" href="#有返回值的函数" aria-hidden="true">#</a> 有返回值的函数</h3>
<p><strong>输入两个数字之后相加并返回结果：</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token function-name function">funWithReturn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"输入第一个数字: "</span>
    <span class="token builtin class-name">read</span> aNum
    <span class="token builtin class-name">echo</span> <span class="token string">"输入第二个数字: "</span>
    <span class="token builtin class-name">read</span> anotherNum
    <span class="token builtin class-name">echo</span> <span class="token string">"两个数字分别为 <span class="token variable">$aNum</span> 和 <span class="token variable">$anotherNum</span> !"</span>
    <span class="token builtin class-name">return</span> <span class="token variable"><span class="token variable">$((</span>$aNum<span class="token operator">+</span>$anotherNum<span class="token variable">))</span></span>
<span class="token punctuation">}</span>
funWithReturn
<span class="token builtin class-name">echo</span> <span class="token string">"输入的两个数字之和为 <span class="token variable">$?</span>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>输入第一个数字: 
1
输入第二个数字: 
2
两个数字分别为 1 和 2 !
输入的两个数字之和为 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="带参数的函数" tabindex="-1"><a class="header-anchor" href="#带参数的函数" aria-hidden="true">#</a> 带参数的函数</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token function-name function">funWithParam</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"第一个参数为 <span class="token variable">$1</span> !"</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"第二个参数为 <span class="token variable">$2</span> !"</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"第十个参数为 <span class="token variable">$10</span> !"</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"第十个参数为 <span class="token variable">${10}</span> !"</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"第十一个参数为 <span class="token variable">${11}</span> !"</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"参数总数有 <span class="token variable">$#</span> 个!"</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"作为一个字符串输出所有参数 <span class="token variable">$*</span> !"</span>
<span class="token punctuation">}</span>
funWithParam <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span> <span class="token number">5</span> <span class="token number">6</span> <span class="token number">7</span> <span class="token number">8</span> <span class="token number">9</span> <span class="token number">34</span> <span class="token number">73</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>第一个参数为 1 !
第二个参数为 2 !
第十个参数为 10 !
第十个参数为 34 !
第十一个参数为 73 !
参数总数有 11 个!
作为一个字符串输出所有参数 1 2 3 4 5 6 7 8 9 34 73 !
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
