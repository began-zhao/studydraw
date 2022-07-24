<template><div><p>本章介绍 Bash 的最基本语法。</p>
<!-- more -->
<h2 id="echo-命令" tabindex="-1"><a class="header-anchor" href="#echo-命令" aria-hidden="true">#</a> echo 命令</h2>
<p>由于后面的例子会大量用到 <code v-pre>echo</code> 命令，这里先介绍这个命令。</p>
<p><code v-pre>echo</code> 命令的作用是在屏幕输出一行文本，可以将该命令的参数原样输出。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> hello world
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>echo</code> 的参数是 <code v-pre>hello world</code>，可以原样输出。</p>
<p>如果想要输出的是多行文本，即包括换行符。这时需要把多行文本放在引号里面。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">"&lt;HTML>
    &lt;HEAD>
          &lt;TITLE>Page Title&lt;/TITLE>
    &lt;/HEAD>
    &lt;BODY>
          Page body.
    &lt;/BODY>
&lt;/HTML>"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>echo</code> 可以原样输出多行文本。</p>
<h3 id="n-参数" tabindex="-1"><a class="header-anchor" href="#n-参数" aria-hidden="true">#</a> <code v-pre>-n</code> 参数</h3>
<p>默认情况下，<code v-pre>echo</code> 输出的文本末尾会有一个回车符。<code v-pre>-n</code> 参数可以取消末尾的回车符，使得下一个提示符紧跟在输出内容的后面。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> -n hello world
hello world$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>world</code> 后面直接就是下一行的提示符 <code v-pre>$</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> a<span class="token punctuation">;</span><span class="token builtin class-name">echo</span> b
a
b

$ <span class="token builtin class-name">echo</span> -n a<span class="token punctuation">;</span><span class="token builtin class-name">echo</span> b
ab
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>-n</code> 参数可以让两个 <code v-pre>echo</code> 命令的输出连在一起，出现在同一行。</p>
<h3 id="e-参数" tabindex="-1"><a class="header-anchor" href="#e-参数" aria-hidden="true">#</a> <code v-pre>-e</code> 参数</h3>
<p><code v-pre>-e</code> 参数会解释引号(双引号和单引号)里面的特殊字符(比如换行符 <code v-pre>\n</code>)。如果不使用 <code v-pre>-e</code> 参数，即默认情况下，引号会让特殊字符变成普通字符，<code v-pre>echo</code> 不解释它们，原样输出。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">"Hello<span class="token entity" title="\n">\n</span>World"</span>
Hello<span class="token punctuation">\</span>nWorld

<span class="token comment"># 双引号的情况</span>
$ <span class="token builtin class-name">echo</span> -e <span class="token string">"Hello<span class="token entity" title="\n">\n</span>World"</span>
Hello
World

<span class="token comment"># 单引号的情况</span>
$ <span class="token builtin class-name">echo</span> -e <span class="token string">'Hello\nWorld'</span>
Hello
World
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>-e</code> 参数使得 <code v-pre>\n</code> 解释为换行符，导致输出内容里面出现换行。</p>
<h2 id="命令格式" tabindex="-1"><a class="header-anchor" href="#命令格式" aria-hidden="true">#</a> 命令格式</h2>
<p>命令行环境中，主要通过使用 Shell 命令，进行各种操作。Shell 命令基本都是下面的格式。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> <span class="token punctuation">[</span> arg1 <span class="token punctuation">..</span>. <span class="token punctuation">[</span> argN <span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>command</code> 是具体的命令或者一个可执行文件，<code v-pre>arg1 ... argN</code> 是传递给命令的参数，它们是可选的。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ls</span> -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面这个命令中，<code v-pre>ls</code> 是命令，<code v-pre>-l</code> 是参数。</p>
<p>有些参数是命令的配置项，这些配置项一般都以一个连词线开头，比如上面的 <code v-pre>-l</code>。同一个配置项往往有长和短两种形式，比如 <code v-pre>-l</code> 是短形式，<code v-pre>--list</code> 是长形式，它们的作用完全相同。短形式便于手动输入，长形式一般用在脚本之中，可读性更好，利于解释自身的含义。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 短形式</span>
$ <span class="token function">ls</span> -r

<span class="token comment"># 长形式</span>
$ <span class="token function">ls</span> --reverse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令中，<code v-pre>-r</code> 是短形式，<code v-pre>--reverse</code> 是长形式，作用完全一样。前者便于输入，后者便于理解。</p>
<p>Bash 单个命令一般都是一行，用户按下回车键，就开始执行。有些命令比较长，写成多行会有利于阅读和编辑，这时可以在每一行的结尾加上反斜杠，Bash 就会将下一行跟当前行放在一起解释。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> foo bar

<span class="token comment"># 等同于</span>
$ <span class="token builtin class-name">echo</span> foo <span class="token punctuation">\</span>
bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="空格" tabindex="-1"><a class="header-anchor" href="#空格" aria-hidden="true">#</a> 空格</h2>
<p>Bash 使用空格(或 Tab 键)区分不同的参数。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> foo bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，<code v-pre>foo</code> 和 <code v-pre>bar</code> 之间有一个空格，所以 Bash 认为它们是两个参数。</p>
<p>如果参数之间有多个空格，Bash 会自动忽略多余的空格。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> this is a     <span class="token builtin class-name">test</span>
this is a <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令中，<code v-pre>a</code> 和 <code v-pre>test</code> 之间有多个空格，Bash 会忽略多余的空格。</p>
<h2 id="分号" tabindex="-1"><a class="header-anchor" href="#分号" aria-hidden="true">#</a> 分号</h2>
<p>分号(<code v-pre>;</code>)是命令的结束符，使得一行可以放置多个命令，上一个命令执行结束后，再执行第二个命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">clear</span><span class="token punctuation">;</span> <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面例子中，Bash 先执行 <code v-pre>clear</code> 命令，执行完成后，再执行 <code v-pre>ls</code> 命令。</p>
<p>注意，使用分号时，第二个命令总是接着第一个命令执行，不管第一个命令执行成功或失败。</p>
<h2 id="命令的组合符-和" tabindex="-1"><a class="header-anchor" href="#命令的组合符-和" aria-hidden="true">#</a> 命令的组合符 <code v-pre>&amp;&amp;</code> 和 <code v-pre>||</code></h2>
<p>除了分号，Bash 还提供两个命令组合符 <code v-pre>&amp;&amp;</code> 和 <code v-pre>||</code>，允许更好地控制多个命令之间的继发关系。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Command1 <span class="token operator">&amp;&amp;</span> Command2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令的意思是，如果 <code v-pre>Command1</code> 命令运行成功，则继续运行 <code v-pre>Command2</code> 命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Command1 <span class="token operator">||</span> Command2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令的意思是，如果 <code v-pre>Command1</code> 命令运行失败，则继续运行 <code v-pre>Command2</code> 命令。</p>
<p>下面是一些例子。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cat</span> filelist.txt <span class="token punctuation">;</span> <span class="token function">ls</span> -l filelist.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面例子中，只要 <code v-pre>cat</code> 命令执行结束，不管成功或失败，都会继续执行 <code v-pre>ls</code> 命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cat</span> filelist.txt <span class="token operator">&amp;&amp;</span> <span class="token function">ls</span> -l filelist.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面例子中，只有 <code v-pre>cat</code> 命令执行成功，才会继续执行 <code v-pre>ls</code> 命令。如果 <code v-pre>cat</code> 执行失败(比如不存在文件 <code v-pre>flielist.txt</code>)，那么 <code v-pre>ls</code> 命令就不会执行。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> foo <span class="token operator">||</span> <span class="token function">mkdir</span> bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面例子中，只有 <code v-pre>mkdir foo</code> 命令执行失败(比如 <code v-pre>foo</code> 目录已经存在)，才会继续执行 <code v-pre>mkdir bar</code> 命令。如果 <code v-pre>mkdir foo</code> 命令执行成功，就不会创建 <code v-pre>bar</code> 目录了。</p>
<h2 id="type-命令" tabindex="-1"><a class="header-anchor" href="#type-命令" aria-hidden="true">#</a> type 命令</h2>
<p>Bash 本身内置了很多命令，同时也可以执行外部程序。怎么知道一个命令是内置命令，还是外部程序呢?</p>
<p><code v-pre>type</code> 命令用来判断命令的来源。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">type</span> <span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> is a shell <span class="token builtin class-name">builtin</span>
$ <span class="token builtin class-name">type</span> <span class="token function">ls</span>
<span class="token function">ls</span> is hashed <span class="token punctuation">(</span>/bin/ls<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>type</code> 命令告诉我们，<code v-pre>echo</code> 是内部命令，<code v-pre>ls</code> 是外部程序 (<code v-pre>/bin/ls</code>)。</p>
<p><code v-pre>type</code> 命令本身也是内置命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">type</span> <span class="token builtin class-name">type</span>
<span class="token builtin class-name">type</span> is a shell <span class="token builtin class-name">builtin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要查看一个命令的所有定义，可以使用 <code v-pre>type</code> 命令的 <code v-pre>-a</code> 参数。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">type</span> -a <span class="token builtin class-name">echo</span>
<span class="token builtin class-name">echo</span> is shell <span class="token builtin class-name">builtin</span>
<span class="token builtin class-name">echo</span> is /usr/bin/echo
<span class="token builtin class-name">echo</span> is /bin/echo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码表示，<code v-pre>echo</code> 命令即是内置命令，也有对应的外部程序。</p>
<p><code v-pre>type</code> 命令的 <code v-pre>-t</code> 参数，可以返回一个命令的类型: 别名(alias)，关键词(keyword)，函数(function)，内置命令(builtin)和文件(file)。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">type</span> -t <span class="token function">bash</span>
<span class="token function">file</span>
$ <span class="token builtin class-name">type</span> -t <span class="token keyword">if</span>
keyword
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>bash</code> 是文件，<code v-pre>if</code> 是关键词。</p>
<h2 id="快捷键" tabindex="-1"><a class="header-anchor" href="#快捷键" aria-hidden="true">#</a> 快捷键</h2>
<p>Bash 提供很多快捷键，可以大大方便操作。下面是一些最常用的快捷键，完整的介绍参见 <RouterLink to="/linux/bash/readline.html">行操作</RouterLink> 一章。</p>
<ul>
<li><code v-pre>Ctrl + L</code>: 清除屏幕并将当前行移到页面顶部。</li>
<li><code v-pre>Ctrl + C</code>: 中止当前正在执行的命令。</li>
<li><code v-pre>Shift + PageUp</code>: 向上滚动。</li>
<li><code v-pre>Shift + PageDown</code>: 向下滚动。</li>
<li><code v-pre>Ctrl + U</code>: 从光标位置删除到行首。</li>
<li><code v-pre>Ctrl + K</code>: 从光标位置删除到行尾。</li>
<li><code v-pre>Ctrl + D</code>: 关闭 Shell 会话。</li>
<li><code v-pre>↑</code>，<code v-pre>↓</code>: 浏览已执行命令的历史记录。</li>
</ul>
<p>除了上面的快捷键，Bash 还具有自动补全功能。命令输入到一半的时候，可以按下 Tab 键，Bash 会自动完成剩下的部分。比如，输入 <code v-pre>pw</code>，然后按一下 Tab 键，Bash 会自动补上 <code v-pre>d</code>。</p>
<p>除了命令的自动补全，Bash 还支持路径的自动补全。有时，需要输入很长的路径，这时只需要输入前面的部分，然后按下 Tab 键，就会自动补全后面的部分。如果有多个可能的选择，按两次 Tab 键，Bash 会显示所有选项，让您选择。</p>
</div></template>
