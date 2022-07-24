<template><div><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>Bash 内置了 Readline 库，具有这个库提供的很多“行操作”功能，比如命令的自动补全，可以大大加快操作速度。</p>
<p>这个库默认采用 Emacs 快捷键，也可以改成 Vi 快捷键。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">set</span> -o <span class="token function">vi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面的命令可以改回 Emacs 快捷键。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">set</span> -o emacs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果想永久性更改编辑模式(Emacs / Vi)，可以将命令写在 <code v-pre>~/.inputrc</code> 文件，这个文件是 Readline 的配置文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">set</span> editing-mode <span class="token function">vi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>本章介绍的快捷键都属于 Emacs 模式。Vi 模式的快捷键，读者可以参考 Vi 编辑器的教程。</p>
<p>Bash 默认开启这个库，但是允许关闭。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">bash</span> --noediting
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，<code v-pre>--noediting</code> 参数关闭了 Readline 库，启动的 Bash 就不带有行操作功能。</p>
<h2 id="光标移动" tabindex="-1"><a class="header-anchor" href="#光标移动" aria-hidden="true">#</a> 光标移动</h2>
<p>Readline 提供快速移动光标的快捷键。</p>
<ul>
<li><code v-pre>Ctrl + a</code>: 移到行首。</li>
<li><code v-pre>Ctrl + b</code>: 向行首移动一个字符，与左箭头作用相同。</li>
<li><code v-pre>Ctrl + e</code>: 移到行尾。</li>
<li><code v-pre>Ctrl + f</code>: 向行尾移动一个字符，与右箭头作用相同。</li>
<li><code v-pre>Alt + f</code>: 移动到当前单词的词尾。</li>
<li><code v-pre>Alt + b</code>: 移动到当前单词的词首。</li>
</ul>
<p>上面快捷键的 Alt 键，也可以用 ESC 键代替。</p>
<h2 id="清除屏幕" tabindex="-1"><a class="header-anchor" href="#清除屏幕" aria-hidden="true">#</a> 清除屏幕</h2>
<p><code v-pre>Ctrl + l</code> 快捷键可以清除屏幕，即将当前行移到屏幕的第一行，与 <code v-pre>clear</code> 命令作用相同。</p>
<h2 id="编辑操作" tabindex="-1"><a class="header-anchor" href="#编辑操作" aria-hidden="true">#</a> 编辑操作</h2>
<p>下面的快捷键可以编辑命令行内容。</p>
<ul>
<li><code v-pre>Ctrl + d</code>: 删除光标位置的字符(delete)。</li>
<li><code v-pre>Ctrl + w</code>: 删除光标前面的单词。</li>
<li><code v-pre>Ctrl + t</code>: 光标位置的字符与它前面一位的字符交换位置(transpose)。</li>
<li><code v-pre>Alt + t</code>: 光标位置的词与它前面一位的词交换位置(transpose)。</li>
<li><code v-pre>Alt + l</code>: 将光标位置至词尾转为小写(lowercase)。</li>
<li><code v-pre>Alt + u</code>: 将光标位置至词尾转为大写(uppercase)。</li>
</ul>
<p>使用 <code v-pre>Ctrl + d</code> 的时候，如果当前行没有任何字符，会导致退出当前 Shell，所以要小心。</p>
<p>剪切和粘贴快捷键如下。</p>
<ul>
<li><code v-pre>Ctrl + k</code>: 剪切光标位置到行尾的文本。</li>
<li><code v-pre>Ctrl + u</code>: 剪切光标位置到行首的文本。</li>
<li><code v-pre>Alt + d</code>: 剪切光标位置到词尾的文本。</li>
<li><code v-pre>Alt + Backspace</code>: 剪切光标位置到词首的文本。</li>
<li><code v-pre>Ctrl + y</code>: 在光标位置粘贴文本。</li>
</ul>
<p>同样地，Alt 键可以用 Esc 键代替。</p>
<h2 id="自动补全" tabindex="-1"><a class="header-anchor" href="#自动补全" aria-hidden="true">#</a> 自动补全</h2>
<p>命令输入到一半的时候，可以按一下 Tab 键，Readline 会自动补全命令或路径。比如，输入 <code v-pre>cle</code>，再按下 Tab 键，Bash 会自动将这个命令补全为 <code v-pre>clear</code>。</p>
<p>如果符合条件的命令或路径有多个，就需要连续按两次 Tab 键，Bash 会提示所有符合条件的命令或路径。</p>
<p>除了命令或路径，Tab 还可以补全其他值。如果一个值以 <code v-pre>$</code> 开头，则按下 Tab 键会补全变量；如果以 <code v-pre>~</code> 开头，则补全用户名；如果以 <code v-pre>@</code> 开头，则补全主机名(hostname)，主机名以列在 <code v-pre>/etc/hosts</code> 文件里面的主机为准。</p>
<p>自动补全相关的快捷键如下。</p>
<ul>
<li>Tab: 完成自动补全。</li>
<li><code v-pre>Alt + ?</code>: 列出可能的补全，与连按两次 Tab 键作用相同。</li>
<li><code v-pre>Alt + /</code>: 尝试文件路径补全。</li>
<li><code v-pre>Ctrl + x /</code>: 先按 <code v-pre>Ctrl + x</code>，再按 <code v-pre>/</code>，等同于 <code v-pre>Alt + ?</code>，列出可能的文件路径补全。</li>
<li><code v-pre>Alt + !</code>: 命令补全。</li>
<li><code v-pre>Ctrl + x !</code>: 先按 <code v-pre>Ctrl + x</code>，再按 <code v-pre>!</code>，等同于 <code v-pre>Alt + !</code>，命令补全。</li>
<li><code v-pre>Alt + ~</code>: 用户名补全。</li>
<li><code v-pre>Ctrl + x ~</code>: 先按 <code v-pre>Ctrl + x</code>，再按 <code v-pre>~</code>，等同于 <code v-pre>Alt + ~</code>，用户名补全。</li>
<li><code v-pre>Alt + $</code>: 变量名补全。</li>
<li><code v-pre>Ctrl + x $</code>: 先按 <code v-pre>Ctrl + x</code>，再按 <code v-pre>$</code>，等同于 <code v-pre>Alt + $</code>，变量名补全。</li>
<li><code v-pre>Alt + @</code>: 主机名补全。</li>
<li><code v-pre>Ctrl + x @</code>: 先按 <code v-pre>Ctrl + x</code>，再按 <code v-pre>@</code>，等同于 <code v-pre>Alt + @</code>，主机名补全。</li>
<li><code v-pre>Alt + *</code>: 在命令行一次性插入所有可能的补全。</li>
<li><code v-pre>Alt + Tab</code>: 尝试用 <code v-pre>.bash_history</code> 里面以前执行命令，进行补全。</li>
</ul>
<p>上面的 <code v-pre>Alt</code> 键也可以用 ESC 键代替。</p>
<h2 id="操作历史" tabindex="-1"><a class="header-anchor" href="#操作历史" aria-hidden="true">#</a> 操作历史</h2>
<h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h3>
<p>Bash 会保留用户的操作历史，即用户输入的每一条命令都会记录。退出当前 Shell 的时候，Bash 会将用户在当前 Shell 的操作历史写入 <code v-pre>~/.bash_history</code> 文件，该文件默认储存 500 个操作。</p>
<p>环境变量 <code v-pre>HISTFILE</code> 总是指向这个文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$HISTFILE</span>
/home/me/.bash_history
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>有了操作历史以后，就可以使用方向键的 <code v-pre>↑</code> 和 <code v-pre>↓</code>，快速浏览上一条和下一条命令。</p>
<p>下面的方法可以快速执行以前执行过的命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> Hello World
Hello World

$ <span class="token builtin class-name">echo</span> Goodbye
Goodbye

$ <span class="token operator">!</span>e
<span class="token builtin class-name">echo</span> Goodbye
Goodbye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>!e</code> 表示找出操作历史之中，最近的那一条以 <code v-pre>e</code> 开头的命令并执行。Bash 会先输出那一条命令 <code v-pre>echo Goodbye</code>，然后直接执行。</p>
<p>同理，<code v-pre>!echo</code> 也会执行最近一条以 <code v-pre>echo</code> 开头的命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token operator">!</span>echo
<span class="token builtin class-name">echo</span> Goodbye
Goodbye

$ <span class="token operator">!</span>echo H
<span class="token builtin class-name">echo</span> Goodbye H
Goodbye H

$ <span class="token operator">!</span>echo H G
<span class="token builtin class-name">echo</span> Goodbye H G
Goodbye H G
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code v-pre>!string</code> 语法只会匹配命令，不会匹配参数。所以 <code v-pre>!echo H</code> 不会执行 <code v-pre>echo Hello World</code>，而是会执行 <code v-pre>echo Goodbye</code>，并把参数 <code v-pre>H</code> 附加在这条命令之后。同理，<code v-pre>!echo H G</code> 也是等同于 <code v-pre>echo Goodbye</code> 命令之后附加 <code v-pre>H G</code>。</p>
<p>最后，按下 <code v-pre>Ctrl + r</code> 会显示操作历史，可以用方向键上下移动，选择其中要执行的命令。也可以键入命令的首字母，Shell 就会自动在历史文件中，查询并显示匹配的结果。</p>
<h3 id="history-命令" tabindex="-1"><a class="header-anchor" href="#history-命令" aria-hidden="true">#</a> history 命令</h3>
<p><code v-pre>history</code> 命令能显示操作历史，即 <code v-pre>.bash_history</code> 文件的内容。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">history</span>
<span class="token punctuation">..</span>.
<span class="token number">498</span> <span class="token builtin class-name">echo</span> Goodbye
<span class="token number">499</span> <span class="token function">ls</span> ~
<span class="token number">500</span> <span class="token builtin class-name">cd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用该命令，而不是直接读取 <code v-pre>.bash_history</code> 文件的好处是，它会在所有的操作前加上行号，最近的操作在最后面，行号最大。</p>
<p>通过定制环境变量 <code v-pre>HISTTIMEFORMAT</code>，可以显示每个操作的时间。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">HISTTIMEFORMAT</span><span class="token operator">=</span><span class="token string">'%F %T  '</span>
$ <span class="token function">history</span>
<span class="token number">1</span>  <span class="token number">2013</span>-06-09 <span class="token number">10</span>:40:12   <span class="token function">cat</span> /etc/issue
<span class="token number">2</span>  <span class="token number">2013</span>-06-09 <span class="token number">10</span>:40:12   <span class="token function">clear</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>%F</code> 相当于 <code v-pre>%Y - %m - %d</code>，<code v-pre>%T</code> 相当于 <code v-pre>%H : %M : %S</code>。</p>
<p>只要设置 <code v-pre>HISTTIMEFORMAT</code> 这个环境变量，就会在 <code v-pre>.bash_history</code> 文件保存命令的执行时间戳。如果不设置，就不会保存时间戳。</p>
<p>如果不希望保存本次操作的历史，可以设置环境变量 <code v-pre>HISTSIZE</code> 等于 0。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">HISTSIZE</span></span><span class="token operator">=</span><span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果 <code v-pre>HISTSIZE=0</code> 写入用户主目录的 <code v-pre>~/.bashrc</code> 文件，那么就不会保留该用户的操作历史。如果写入 <code v-pre>/etc/profile</code>，整个系统都不会保留操作历史。</p>
<p>如果想搜索某个以前执行的命令，可以配合 <code v-pre>grep</code> 命令搜索操作历史。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">history</span> <span class="token operator">|</span> <span class="token function">grep</span> /usr/bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令返回 <code v-pre>.bash_history</code> 文件里面，那些包含 <code v-pre>/usr/bin</code> 的命令。</p>
<p>操作历史的每一条记录都有编号。知道了命令的编号以后，可以用 <code v-pre>感叹号 + 编号</code> 执行该命令。如果想要执行 <code v-pre>.bash_history</code> 里面的第 8 条命令，可以像下面这样操作。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token operator">!</span><span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>history</code> 命令的 <code v-pre>-c</code> 参数可以清除操作历史。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">history</span> -c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="相关快捷键" tabindex="-1"><a class="header-anchor" href="#相关快捷键" aria-hidden="true">#</a> 相关快捷键</h3>
<p>下面是一些与操作历史相关的快捷键。</p>
<ul>
<li><code v-pre>Ctrl + p</code>: 显示上一个命令，与向上箭头效果相同(previous)。</li>
<li><code v-pre>Ctrl + n</code>: 显示下一个命令，与向下箭头效果相同(next)。</li>
<li><code v-pre>Alt + &lt;</code>: 显示第一个命令。</li>
<li><code v-pre>Alt + &gt;</code>: 显示最后一个命令，即当前的命令。</li>
<li><code v-pre>Ctrl + o</code>: 执行历史文件里面的当前条目，并自动显示下一条命令。这对重复执行某个序列的命令很有帮助。</li>
</ul>
<p>感叹号<code v-pre>!</code>的快捷键如下。</p>
<ul>
<li><code v-pre>!!</code>: 执行上一个命令。</li>
<li><code v-pre>!n</code>: 执行历史文件里面行号为 <code v-pre>n</code> 的命令。</li>
<li><code v-pre>!-n</code>: 执行当前命令之前 <code v-pre>n</code> 条的命令。</li>
<li><code v-pre>!string</code>: 执行最近一个以指定字符串 <code v-pre>string</code> 开头的命令。</li>
<li><code v-pre>!?string</code>: 执行最近一条包含字符串 <code v-pre>string</code> 的命令。</li>
<li><code v-pre>^string1^string2</code>: 执行最近一条包含 <code v-pre>string1</code> 的命令，将其替换成 <code v-pre>string2</code>。</li>
</ul>
<h2 id="其他快捷键" tabindex="-1"><a class="header-anchor" href="#其他快捷键" aria-hidden="true">#</a> 其他快捷键</h2>
<ul>
<li><code v-pre>Ctrl + j</code>: 等同于回车键(LINEFEED)。</li>
<li><code v-pre>Ctrl + m</code>: 等同于回车键(CARRIAGE RETURN)。</li>
<li><code v-pre>Ctrl + o</code>: 等同于回车键，并展示操作历史的下一个命令。</li>
<li><code v-pre>Ctrl + v</code>: 将下一个输入的特殊字符变成字面量，比如回车变成 <code v-pre>^M</code>。</li>
<li><code v-pre>Ctrl + [</code>: 等同于 ESC。</li>
<li><code v-pre>Alt + .</code>: 插入上一个命令的最后一个词。</li>
<li><code v-pre>Alt + _</code>: 等同于 <code v-pre>Alt + .</code>。</li>
</ul>
<p>上面的 <code v-pre>Alt + .</code> 快捷键，对于很长的文件路径，有时会非常方便。因为 Unix 命令的最后一个参数通常是文件路径。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> foo_bar
<span class="token builtin class-name">cd</span> <span class="token comment">#按下 Alt + .</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，在 <code v-pre>cd</code> 命令后按下 <code v-pre>Alt + .</code>，就会自动插入 <code v-pre>foo_bar</code>。</p>
</div></template>
