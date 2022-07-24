<template><div><p>Bash 变量分成环境变量和自定义变量两类。</p>
<!-- more -->
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>环境变量是 Bash 环境自带的变量，进入 Shell 时已经定义好了，可以直接使用。它们通常是系统定义好的，也可以由用户从父 Shell 传入子 Shell。</p>
<p><code v-pre>env</code> 命令或 <code v-pre>printenv</code> 命令，可以显示所有环境变量。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">env</span>
<span class="token comment"># 或者</span>
$ <span class="token function">printenv</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一些常见的环境变量。</p>
<ul>
<li><code v-pre>BASHPID</code>: Bash 进程的进程 ID。</li>
<li><code v-pre>BASHOPTS</code>: 当前 Shell 的参数，可以用 <code v-pre>shopt</code> 命令修改。</li>
<li><code v-pre>DISPLAY</code>: 图形环境的显示器名字，通常是 <code v-pre>:0</code>，表示 X Server 的第一个显示器。</li>
<li><code v-pre>EDITOR</code>: 默认的文本编辑器。</li>
<li><code v-pre>HOME</code>: 用户的主目录。</li>
<li><code v-pre>HOST</code>: 当前主机的名称。</li>
<li><code v-pre>IFS</code>: 词与词之间的分隔符，默认为空格。</li>
<li><code v-pre>LANG</code>: 字符集以及语言编码，比如 <code v-pre>zh_CN.UTF-8</code>。</li>
<li><code v-pre>PATH</code>: 由冒号分开的目录列表，当输入可执行程序名后，会搜索这个目录列表。</li>
<li><code v-pre>PS1</code>: Shell 提示符。</li>
<li><code v-pre>PS2</code>: 输入多行命令时，次要的 Shell 提示符。</li>
<li><code v-pre>PWD</code>: 当前工作目录。</li>
<li><code v-pre>RANDOM</code>: 返回一个 0 到 32767 之间的随机数。</li>
<li><code v-pre>SHELL</code>: Shell 的名字。</li>
<li><code v-pre>SHELLOPTS</code>: 启动当前 Shell 的 <code v-pre>set</code> 命令的参数，参见《set 命令》一章。</li>
<li><code v-pre>TERM</code>: 终端类型名，即终端仿真器所用的协议。</li>
<li><code v-pre>UID</code>: 当前用户的 ID 编号。</li>
<li><code v-pre>USER</code>: 当前用户的用户名。</li>
</ul>
<p>很多环境变量很少发生变化，而且是只读的，可以视为常量。由于它们的变量名全部都是大写，所以传统上，如果用户要自己定义一个常量，也会使用全部大写的变量名。</p>
<p>注意，Bash 变量名区分大小写，<code v-pre>HOME</code> 和 <code v-pre>home</code> 是两个不同的变量。</p>
<p>查看单个环境变量的值，可以使用 <code v-pre>printenv</code> 命令或 <code v-pre>echo</code> 命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">printenv</span> <span class="token environment constant">PATH</span>
<span class="token comment"># 或者</span>
$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code v-pre>printenv</code> 命令后面的变量名，不用加前缀 <code v-pre>$</code>。</p>
<p>自定义变量是用户在当前 Shell 里面自己定义的变量，必须先定义后使用，而且仅在当前 Shell 可用。一旦退出当前 Shell，该变量就不存在了。</p>
<p><code v-pre>set</code> 命令可以显示所有变量(包括环境变量和自定义变量)，以及所有的 Bash 函数。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">set</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建变量" tabindex="-1"><a class="header-anchor" href="#创建变量" aria-hidden="true">#</a> 创建变量</h2>
<p>用户创建变量的时候，变量名必须遵守下面的规则。</p>
<ul>
<li>字母、数字和下划线字符组成。</li>
<li>第一个字符必须是一个字母或一个下划线，不能是数字。</li>
<li>不允许出现空格和标点符号。</li>
</ul>
<p>变量声明的语法如下。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">variable</span><span class="token operator">=</span>value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令中，等号左边是变量名，右边是变量。注意，等号两边不能有空格。</p>
<p>如果变量的值包含空格，则必须将值放在引号中。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">myvar</span><span class="token operator">=</span><span class="token string">"hello world"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Bash 没有数据类型的概念，所有的变量值都是字符串。</p>
<p>下面是一些自定义变量的例子。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span>z                     <span class="token comment"># 变量 a 赋值为字符串 z</span>
<span class="token assign-left variable">b</span><span class="token operator">=</span><span class="token string">"a string"</span>            <span class="token comment"># 变量值包含空格，就必须放在引号里面</span>
<span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token string">"a string and <span class="token variable">$b</span>"</span>     <span class="token comment"># 变量值可以引用其他变量的值</span>
<span class="token assign-left variable">d</span><span class="token operator">=</span><span class="token string">"<span class="token entity" title="\t">\t</span><span class="token entity" title="\t">\t</span>a string<span class="token entity" title="\n">\n</span>"</span>      <span class="token comment"># 变量值可以使用转义字符</span>
<span class="token assign-left variable">e</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">ls</span> -l foo.txt<span class="token variable">)</span></span>      <span class="token comment"># 变量值可以是命令的执行结果</span>
<span class="token assign-left variable">f</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$((</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token number">7</span><span class="token variable">))</span></span>            <span class="token comment"># 变量值可以是数学运算的结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量可以重复赋值，后面的赋值会覆盖前面的赋值。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">1</span>
$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">2</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$foo</span>
<span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，变量 <code v-pre>foo</code> 的第二次赋值会覆盖第一次赋值。</p>
<h2 id="读取变量" tabindex="-1"><a class="header-anchor" href="#读取变量" aria-hidden="true">#</a> 读取变量</h2>
<p>读取变量的时候，直接在变量名前加上 <code v-pre>$</code> 就可以了。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span>bar
$ <span class="token builtin class-name">echo</span> <span class="token variable">$foo</span>
bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每当 Shell 看到以 <code v-pre>$</code> 开头的单词时，就会尝试读取这个变量名对应的值。</p>
<p>如果变量不存在，Bash 不会报错，而会输出空字符。</p>
<p>由于 <code v-pre>$</code> 在 Bash 中有特殊含义，把它当作美元符号使用时，一定要非常小心，</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> The total is <span class="token variable">$100</span>.00
The total is 00.00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令的原意是输入 <code v-pre>$100</code>，但是 Bash 将 <code v-pre>$1</code> 解释成了变量，该变量为空，因此输入就变成了 <code v-pre>00.00</code>。所以，如果要使用 <code v-pre>$</code> 的原义，需要在 <code v-pre>$</code> 前面放上反斜杠，进行转义。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> The total is <span class="token punctuation">\</span><span class="token variable">$100</span>.00
The total is <span class="token variable">$100</span>.00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>读取变量的时候，变量名也可以使用花括号 <code v-pre>{}</code> 包围，比如 <code v-pre>$a</code> 也可以写成 <code v-pre>${a}</code>。这种写法可以用于变量名与其他字符连用的情况。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">a</span><span class="token operator">=</span>foo
$ <span class="token builtin class-name">echo</span> <span class="token variable">$a_file</span>

$ <span class="token builtin class-name">echo</span> <span class="token variable">${a}</span>_file
foo_file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，变量名 <code v-pre>a_file</code> 不会有任何输出，因为 Bash 将其整个解释为变量，而这个变量是不存在的。只有用花括号区分 <code v-pre>$a</code>，Bash 才能正确解读。</p>
<p>事实上，读取变量的语法 <code v-pre>$foo</code>，可以看作是 <code v-pre>${foo}</code> 的简写形式。</p>
<p>如果变量的值本身也是变量，可以使用 <code v-pre>${!varname}</code> 的语法，读取最终的值。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">myvar</span><span class="token operator">=</span><span class="token environment constant">USER</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">${<span class="token operator">!</span>myvar}</span>
ruanyf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，变量 <code v-pre>myvar</code> 的值是 <code v-pre>USER</code>，<code v-pre>${!myvar}</code> 的写法将其展开成最终的值。</p>
<h2 id="删除变量" tabindex="-1"><a class="header-anchor" href="#删除变量" aria-hidden="true">#</a> 删除变量</h2>
<p><code v-pre>unset</code> 命令用来删除一个变量。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">unset</span> NAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个命令不是很有用。因为不存在的 Bash 变量一律等于空字符串，所以即使 <code v-pre>unset</code> 命令删除了变量，还是可以读取这个变量，值为空字符串。</p>
<p>所以，删除一个变量，也可以将这个变量设成空字符串。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token string">''</span>
<span class="token assign-left variable">foo</span><span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面两种写法，都是删除了变量 <code v-pre>foo</code>。由于不存在的值默认为空字符串，所以后一种写法可以在等号右边不写任何值。</p>
<h2 id="输出变量-export-命令" tabindex="-1"><a class="header-anchor" href="#输出变量-export-命令" aria-hidden="true">#</a> 输出变量，export 命令</h2>
<p>用户创建的变量仅可用于当前 Shell，子 Shell 默认读取不到父 Shell 定义的变量。为了把变量传递给子 Shell，需要使用 <code v-pre>export</code> 命令。这样输出的变量，对于子 Shell 来说就是环境变量。</p>
<p><code v-pre>export</code> 命令用来向子 Shell 输出变量。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">NAME</span><span class="token operator">=</span>foo
<span class="token builtin class-name">export</span> NAME
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令输出了变量 <code v-pre>NAME</code>。变量的赋值和输出也可以在一个步骤中完成。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">NAME</span><span class="token operator">=</span>value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令执行后，当前 Shell 及随后新建的子 Shell，都可以读取变量 <code v-pre>$NAME</code>。</p>
<p>子 Shell 如果修改继承的变量，不会影响父 Shell。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 输出变量 $foo</span>
$ <span class="token builtin class-name">export</span> <span class="token assign-left variable">foo</span><span class="token operator">=</span>bar

<span class="token comment"># 新建子 Shell</span>
$ <span class="token function">bash</span>

<span class="token comment"># 读取 $foo</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$foo</span>
bar

<span class="token comment"># 修改继承的变量</span>
$ <span class="token assign-left variable">foo</span><span class="token operator">=</span>baz

<span class="token comment"># 退出子 Shell</span>
$ <span class="token builtin class-name">exit</span>

<span class="token comment"># 读取 $foo</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$foo</span>
bar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，子 Shell 修改了继承的变量 <code v-pre>$foo</code>，对父 Shell 没有影响。</p>
<h2 id="特殊变量" tabindex="-1"><a class="header-anchor" href="#特殊变量" aria-hidden="true">#</a> 特殊变量</h2>
<p>Bash 提供一些特殊变量。这些变量的值由 Shell 提供，用户不能进行赋值。</p>
<p>(1) <code v-pre>$?</code></p>
<p><code v-pre>$?</code> 为上一个命令的退出码，用来判断上一个命令是否执行成功。返回值是 <code v-pre>0</code>，表示上一个命令执行成功；如果是非零，上一个命令执行失败。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">ls</span> doesnotexist
ls: doesnotexist: No such <span class="token function">file</span> or directory

$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>ls</code> 命令查看一个不存在的文件，导致报错。<code v-pre>$?</code> 为 1，表示上一个命令执行失败。</p>
<p>(2) <code v-pre>$$</code></p>
<p><code v-pre>$$</code> 为当前 Shell 的进程 ID。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable">$$</span>
<span class="token number">10662</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个特殊变量可以用来命名临时文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">LOGFILE</span><span class="token operator">=</span>/tmp/output_log.<span class="token variable">$$</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>(3) <code v-pre>$_</code></p>
<p><code v-pre>$_</code> 为上一个命令的最后一个参数。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">grep</span> dictionary /usr/share/dict/words
dictionary

$ <span class="token builtin class-name">echo</span> <span class="token variable">$_</span>
/usr/share/dict/words
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(4) <code v-pre>$!</code></p>
<p><code v-pre>$!</code> 为最近一个后台执行的异步命令的进程 ID。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ firefox <span class="token operator">&amp;</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token number">11064</span>

$ <span class="token builtin class-name">echo</span> <span class="token variable">$!</span>
<span class="token number">11064</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>firefox</code> 是后台运行的命令，<code v-pre>$!</code> 返回该命令的进程 ID。</p>
<p>(5) <code v-pre>$0</code></p>
<p><code v-pre>$0</code> 为当前 Shell 的名称(在命令行直接执行时)或者脚本名(在脚本中执行时)。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable">$0</span>
<span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>$0</code> 返回当前运行的是 Bash。</p>
<p>(6) <code v-pre>$-</code></p>
<p><code v-pre>$-</code> 为当前 Shell 的启动参数。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> $-
himBHs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>(7) <code v-pre>$@</code> 和 <code v-pre>$#</code></p>
<p><code v-pre>$@</code> 和 <code v-pre>$#</code> 表示脚本的参数数量，参见脚本一章。</p>
<h2 id="变量的默认值" tabindex="-1"><a class="header-anchor" href="#变量的默认值" aria-hidden="true">#</a> 变量的默认值</h2>
<p>Bash 提供四个特殊语法，跟变量的默认值有关，目的是保证变量不为空。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token variable">${varname<span class="token operator">:-</span>word}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面语法的含义是，如果变量 <code v-pre>varname</code> 存在且不为空，则返回它的值，否则返回 <code v-pre>word</code>。它的目的是返回一个默认值，比如 <code v-pre>${count:-0}</code> 表示变量 <code v-pre>count</code> 不存在时返回 <code v-pre>0</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token variable">${varname<span class="token operator">:=</span>word}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面语法的含义是，如果变量 <code v-pre>varname</code> 存在且不为空，则返回它的值，否则将它设为 <code v-pre>word</code>，并且返回 <code v-pre>word</code>。它的目的是设置变量的默认值，比如 <code v-pre>${count:=0}</code> 表示变量 <code v-pre>count</code> 不存在时返回 <code v-pre>0</code>，且将 <code v-pre>count</code> 设为 <code v-pre>0</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token variable">${varname<span class="token operator">:+</span>word}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面语法的含义是，如果变量名存在且不为空，则返回 <code v-pre>word</code>，否则返回空值。它的目的是测试变量是否存在，比如 <code v-pre>${count:+1}</code> 表示变量 <code v-pre>count</code> 存在时返回 <code v-pre>1</code>(表示 <code v-pre>true</code>)，否则返回空值。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token variable">${varname<span class="token operator">:?</span>message}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面语法的含义是，如果变量 <code v-pre>varname</code> 存在且不为空，则返回它的值，否则打印出 <code v-pre>varname: message</code>，并中断脚本的执行。如果省略了 <code v-pre>message</code>，则输出默认的信息“parameter null or not set.”。它的目的是防止变量未定义，比如 <code v-pre>${count:?&quot;undefined!&quot;}</code> 表示变量 <code v-pre>count</code> 未定义时就中断执行，抛出错误，返回给定的报错信息 <code v-pre>undefined!</code>。</p>
<p>上面四种语法如果用在脚本中，变量名的部分可以用到数字 <code v-pre>1</code> 到 <code v-pre>9</code>，表示脚本的参数。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token variable">${1<span class="token operator">:?</span>"filename missing."}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码出现在脚本中，<code v-pre>1</code> 表示脚本的第一个参数。如果该参数不存在，就退出脚本并报错。</p>
<h2 id="declare-命令" tabindex="-1"><a class="header-anchor" href="#declare-命令" aria-hidden="true">#</a> declare 命令</h2>
<p><code v-pre>declare</code> 命令可以声明一些特殊类型的变量，为变量设置一些限制，比如声明只读类型的变量和整数类型的变量。</p>
<p>它的语法形式如下。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span> OPTION <span class="token assign-left variable">VARIABLE</span><span class="token operator">=</span>value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>declare</code> 命令的主要参数(OPTION)如下。</p>
<ul>
<li><code v-pre>-a</code>: 声明数组变量。</li>
<li><code v-pre>-f</code>: 输出所有函数定义。</li>
<li><code v-pre>-F</code>: 输出所有函数名。</li>
<li><code v-pre>-i</code>: 声明整数变量。</li>
<li><code v-pre>-l</code>: 声明变量为小写字母。</li>
<li><code v-pre>-p</code>: 查看变量信息。</li>
<li><code v-pre>-r</code>: 声明只读变量。</li>
<li><code v-pre>-u</code>: 声明变量为大写字母。</li>
<li><code v-pre>-x</code>: 该变量输出为环境变量。</li>
</ul>
<p><code v-pre>declare</code> 命令如果用在函数中，声明的变量只在函数内部有效，等同于 <code v-pre>local</code> 命令。</p>
<p>不带任何参数时，<code v-pre>declare</code> 命令输出当前环境的所有变量，包括函数在内，等同于不带有任何参数的 <code v-pre>set</code> 命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>(1) <code v-pre>-i</code> 参数</strong></p>
<p><code v-pre>-i</code> 参数声明整数变量以后，可以直接进行数学运算。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">declare</span> -i <span class="token assign-left variable">val1</span><span class="token operator">=</span><span class="token number">12</span> <span class="token assign-left variable">val2</span><span class="token operator">=</span><span class="token number">5</span>
$ <span class="token builtin class-name">declare</span> -i result
$ <span class="token assign-left variable">result</span><span class="token operator">=</span>val1*val2
$ <span class="token builtin class-name">echo</span> <span class="token variable">$result</span>
<span class="token number">60</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，如果变量 <code v-pre>result</code> 不声明为整数，<code v-pre>val1*val2</code> 会被当作字面量，不会进行整数运算。另外，<code v-pre>val1</code> 和 <code v-pre>val2</code> 其实不需要声明为整数，因为只要 <code v-pre>result</code> 声明为整数，它的赋值就会自动解释为整数运算。</p>
<p>注意，一个变量声明为整数以后，依然可以被改写为字符串。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">declare</span> -i <span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token number">12</span>
$ <span class="token assign-left variable">var</span><span class="token operator">=</span>foo
$ <span class="token builtin class-name">echo</span> <span class="token variable">$var</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，变量 <code v-pre>var</code> 声明为整数，覆盖以后，Bash 不会报错，但会赋以不确定的值，上面的例子中可能输出 0，也可能输出的是 3。</p>
<p><strong>(2) <code v-pre>-x</code> 参数</strong></p>
<p><code v-pre>-x</code> 参数等同于 <code v-pre>export</code> 命令，可以输出一个变量为子 Shell 的环境变量。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">declare</span> -x foo
<span class="token comment"># 等同于</span>
$ <span class="token builtin class-name">export</span> foo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>(3) <code v-pre>-r</code> 参数</strong></p>
<p><code v-pre>-r</code> 参数可以声明只读变量，无法改变变量值，也不能 <code v-pre>unset</code> 变量。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">declare</span> -r <span class="token assign-left variable">bar</span><span class="token operator">=</span><span class="token number">1</span>

$ <span class="token assign-left variable">bar</span><span class="token operator">=</span><span class="token number">2</span>
bash: bar: 只读变量
$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">1</span>

$ <span class="token builtin class-name">unset</span> bar
bash: bar: 只读变量
$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，后两个赋值语句都会报错，命令执行失败。</p>
<p><strong>(4) <code v-pre>-u</code> 参数</strong></p>
<p><code v-pre>-u</code> 参数声明变量为大写字母，可以自动把变量值转成大写字母。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">declare</span> -u foo
$ <span class="token assign-left variable">foo</span><span class="token operator">=</span>upper
$ <span class="token builtin class-name">echo</span> <span class="token variable">$foo</span>
UPPER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>(5) <code v-pre>-l</code> 参数</strong></p>
<p><code v-pre>-l</code> 参数声明变量为小写字母，可以自动把变量值转成小写字母。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">declare</span> -l bar
$ <span class="token assign-left variable">bar</span><span class="token operator">=</span>LOWER
$ <span class="token builtin class-name">echo</span> <span class="token variable">$bar</span>
lower
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>(6) <code v-pre>-p</code> 参数</strong></p>
<p><code v-pre>-p</code> 参数输出变量信息。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span>hello
$ <span class="token builtin class-name">declare</span> -p foo
<span class="token builtin class-name">declare</span> -- <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token string">"hello"</span>
$ <span class="token builtin class-name">declare</span> -p bar
bar: 未找到
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>declare -p</code> 可以输出已定义变量的值，对于未定义的变量，会提示找不到。</p>
<p>如果不提供变量名，<code v-pre>declare -p</code> 输出所有变量的信息。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span> -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>(7) <code v-pre>-f</code> 参数</strong></p>
<p><code v-pre>-f</code> 参数输出当前环境的所有函数，包括它的定义。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span> -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>(8) <code v-pre>-F</code> 参数</strong></p>
<p><code v-pre>-F</code> 参数输出当前环境的所有函数名，不包含函数定义。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">declare</span> -F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="readonly-命令" tabindex="-1"><a class="header-anchor" href="#readonly-命令" aria-hidden="true">#</a> readonly 命令</h2>
<p><code v-pre>readonly</code> 命令等同于 <code v-pre>declare -r</code>，用来声明只读变量，不能改变变量值，也不能 <code v-pre>unset</code> 变量。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">readonly</span> <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">1</span>
$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">2</span>
bash: foo: 只读变量
$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，更改只读变量 <code v-pre>foo</code> 会报错，命令执行失败。</p>
<p><code v-pre>readonly</code> 命令有三个参数。</p>
<ul>
<li><code v-pre>-f</code>: 声明的变量为函数名。</li>
<li><code v-pre>-p</code>: 打印出所有的只读变量。</li>
<li><code v-pre>-a</code>: 声明的变量为数组。</li>
</ul>
<h2 id="let-命令" tabindex="-1"><a class="header-anchor" href="#let-命令" aria-hidden="true">#</a> let 命令</h2>
<p><code v-pre>let</code> 命令声明变量时，可以直接执行算术表达式。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">let</span> <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token number">1</span>+2
$ <span class="token builtin class-name">echo</span> <span class="token variable">$foo</span>
<span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>let</code> 命令可以直接计算 <code v-pre>1 + 2</code>。</p>
<p><code v-pre>let</code> 命令的参数表达式如果包含空格，就需要使用引号。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">let</span> <span class="token string">"foo = 1 + 2"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>let</code> 可以同时对多个变量赋值，赋值表达式之间使用空格分隔。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">let</span> <span class="token string">"v1 = 1"</span> <span class="token string">"v2 = v1++"</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">$v1</span>,<span class="token variable">$v2</span>
<span class="token number">2,1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>let</code> 声明了两个变量 <code v-pre>v1</code> 和 <code v-pre>v2</code>，其中 <code v-pre>v2</code> 等于 <code v-pre>v1++</code>，表示先返回 <code v-pre>v1</code> 的值，然后 <code v-pre>v1</code> 自增。</p>
<p>这种语法支持的运算符，参考《Bash 的算术运算》一章。</p>
</div></template>
