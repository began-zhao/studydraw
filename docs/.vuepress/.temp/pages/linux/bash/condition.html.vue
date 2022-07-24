<template><div><p>本章介绍 Bash 脚本的条件判断语法。</p>
<!-- more -->
<h2 id="if-结构" tabindex="-1"><a class="header-anchor" href="#if-结构" aria-hidden="true">#</a> if 结构</h2>
<p><code v-pre>if</code> 是最常用的条件判断结构，只有符合给定条件时，才会执行指定的命令。它的语法如下。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> commands<span class="token punctuation">;</span> <span class="token keyword">then</span>
  commands
<span class="token punctuation">[</span>elif commands<span class="token punctuation">;</span> <span class="token keyword">then</span>
  commands<span class="token punctuation">..</span>.<span class="token punctuation">]</span>
<span class="token punctuation">[</span>else
  commands<span class="token punctuation">]</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个命令分成三个部分: <code v-pre>if</code>、<code v-pre>elif</code> 和 <code v-pre>else</code>。其中，后两个部分是可选的。</p>
<p><code v-pre>if</code> 关键字后面是主要的判断条件，<code v-pre>elif</code> 用来添加在主条件不成立时的其他判断条件，<code v-pre>else</code> 则是所有条件都不成立时要执行的部分。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token builtin class-name">test</span> <span class="token environment constant">$USER</span> <span class="token operator">=</span> <span class="token string">"foo"</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Hello foo."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"You are not foo."</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，判断条件是环境变量 <code v-pre>$USER</code> 是否等于 <code v-pre>foo</code>，如果等于就输出 <code v-pre>Hello foo.</code>，否则输出其他内容。</p>
<p><code v-pre>if</code> 和 <code v-pre>then</code> 写在同一行时，需要分号分隔。分号是 Bash 的命令分隔符。它们也可以写成两行，这时不需要分号。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token boolean">true</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">'hello world'</span>
<span class="token keyword">fi</span>

<span class="token keyword">if</span> <span class="token boolean">false</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">'it is false'</span> <span class="token comment"># 本行不会执行</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，<code v-pre>true</code> 和 <code v-pre>false</code> 是两个特殊命令，前者代表操作成功，后者代表操作失败。<code v-pre>if true</code> 意味着命令部分总是会执行，<code v-pre>if false</code> 意味着命令部分永远不会执行。</p>
<p>除了多行的写法，<code v-pre>if</code> 结构也可以写成单行。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token keyword">if</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">'hello world'</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
hello world

$ <span class="token keyword">if</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">"It's true."</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，<code v-pre>if</code> 关键字后面也可以是一条命令，该条命令执行成功(返回值 <code v-pre>0</code>)，就意味着判断条件成立。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token keyword">if</span> <span class="token builtin class-name">echo</span> <span class="token string">'hi'</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">'hello world'</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
hi
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面命令中，<code v-pre>if</code> 后面是一条命令 <code v-pre>echo 'hi'</code>。该命令会执行，如果返回值是 <code v-pre>0</code>，则执行 <code v-pre>then</code> 的部分。</p>
<p><code v-pre>if</code> 后面可以跟任意数量的命令。这时，所有命令都会执行，但是判断真伪只看最后一个命令，即使前面所有命令都失败，只要最后一个命令返回 <code v-pre>0</code>，就会执行 <code v-pre>then</code> 的部分。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token keyword">if</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">'hello world'</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>if</code> 后面有两条命令 (<code v-pre>false;true;</code>)，第二条命令 (<code v-pre>true</code>) 决定了 <code v-pre>then</code> 的部分是否会执行。</p>
<p><code v-pre>elif</code> 部分可以有多个。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> -n <span class="token string">"输入一个 1 到 3 之间的数字(包含两端)> "</span>
<span class="token builtin class-name">read</span> character
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$character</span>"</span> <span class="token operator">=</span> <span class="token string">"1"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token number">1</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$character</span>"</span> <span class="token operator">=</span> <span class="token string">"2"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token number">2</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$character</span>"</span> <span class="token operator">=</span> <span class="token string">"3"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token number">3</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> 输入不符合要求
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，如果用户输入 <code v-pre>3</code>，就会连续判断 3 次。</p>
<h2 id="test-命令" tabindex="-1"><a class="header-anchor" href="#test-命令" aria-hidden="true">#</a> test 命令</h2>
<p><code v-pre>if</code> 结构的判断条件，一般使用 <code v-pre>test</code> 命令，有三种形式。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 写法一</span>
<span class="token builtin class-name">test</span> expression

<span class="token comment"># 写法二</span>
<span class="token punctuation">[</span> expression <span class="token punctuation">]</span>

<span class="token comment"># 写法三</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span> expression <span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面三种形式是等价的，但是第三种形式还支持正则判断，前两种不支持。</p>
<p>上面的 <code v-pre>expression</code> 是一个表达式。这个表达式为真，<code v-pre>test</code> 命令执行成功(返回值为 <code v-pre>0</code>)；表达式为伪，<code v-pre>test</code> 命令执行失败(返回值为 <code v-pre>1</code>)。注意，第二种和第三种写法，<code v-pre>[</code> 和 <code v-pre>]</code> 与内部的表达式之间必须有空格。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token builtin class-name">test</span> -f /etc/hosts
$ <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">0</span>

$ <span class="token punctuation">[</span> -f /etc/hosts <span class="token punctuation">]</span>
$  <span class="token builtin class-name">echo</span> <span class="token variable">$?</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子中，<code v-pre>test</code> 命令采用两种写法，判断 <code v-pre>/etc/hosts</code> 文件是否存在，这两种写法是等价的。命令执行后，返回值为 <code v-pre>0</code>，表示该文件确实存在。</p>
<p>实际上，<code v-pre>[</code> 这个字符是 <code v-pre>test</code> 命令的一种简写形式，可以看作是一个独立的命令，这解释了为什么它后面必须有空格。</p>
<p>下面把 <code v-pre>test</code> 命令的三种形式，用在 <code v-pre>if</code> 结构中，判断一个文件是否存在。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 写法一</span>
<span class="token keyword">if</span> <span class="token builtin class-name">test</span> -e /tmp/foo.txt <span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Found foo.txt"</span>
<span class="token keyword">fi</span>

<span class="token comment"># 写法二</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> -e /tmp/foo.txt <span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Found foo.txt"</span>
<span class="token keyword">fi</span>

<span class="token comment"># 写法三</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> -e /tmp/foo.txt <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Found foo.txt"</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="判断表达式" tabindex="-1"><a class="header-anchor" href="#判断表达式" aria-hidden="true">#</a> 判断表达式</h2>
<p><code v-pre>if</code> 关键字后面，跟的是一个命令。这个命令可以是 <code v-pre>test</code> 命令，也可以是其他命令。命令的返回值为 <code v-pre>0</code> 表示判断成立，否则表示不成立。因为这些命令主要是为了得到返回值，所以可以视为表达式。</p>
<p>常用的判断表达式有下面这些。</p>
<h3 id="文件判断" tabindex="-1"><a class="header-anchor" href="#文件判断" aria-hidden="true">#</a> 文件判断</h3>
<p>以下表达式用来判断文件状态。</p>
<ul>
<li><code v-pre>[ -a file ]</code>: 如果 file 存在，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -b file ]</code>: 如果 file 存在并且是一个块(设备)文件，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -c file ]</code>: 如果 file 存在并且是一个字符(设备)文件，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -d file ]</code>: 如果 file 存在并且是一个目录，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -e file ]</code>: 如果 file 存在，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -f file ]</code>: 如果 file 存在并且是一个普通文件，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -g file ]</code>: 如果 file 存在并且设置了组 ID，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -G file ]</code>: 如果 file 存在并且属于有效的组 ID，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -h file ]</code>: 如果 file 存在并且是符号链接，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -k file ]</code>: 如果 file 存在并且设置了它的“sticky bit”，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -L file ]</code>: 如果 file 存在并且是一个符号链接，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -N file ]</code>: 如果 file 存在并且自上次读取后已被修改，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -O file ]</code>: 如果 file 存在并且属于有效的用户 ID，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -p file ]</code>: 如果 file 存在并且是一个命名管道，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -r file ]</code>: 如果 file 存在并且可读(当前用户有可读权限)，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -s file ]</code>: 如果 file 存在且其长度大于零，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -S file ]</code>: 如果 file 存在且是一个网络 socket，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -t fd ]</code>: 如果 fd 是一个文件描述符，并且重定向到终端，则为 <code v-pre>true</code>。这可以用来判断是否重定向了标准输入／输出错误。</li>
<li><code v-pre>[ -u file ]</code>: 如果 file 存在并且设置了 setuid 位，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -w file ]</code>: 如果 file 存在并且可写(当前用户拥有可写权限)，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ -x file ]</code>: 如果 file 存在并且可执行(有效用户有执行／搜索权限)，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ file1 -nt file2 ]</code>: 如果 FILE1 比 FILE2 的更新时间最近，或者 FILE1 存在而 FILE2 不存在，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ file1 -ot file2 ]</code>: 如果 FILE1 比 FILE2 的更新时间更旧，或者 FILE2 存在而 FILE1 不存在，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ FILE1 -ef FILE2 ]</code>: 如果 FILE1 和 FILE2 引用相同的设备和 inode 编号，则为 <code v-pre>true</code>。</li>
</ul>
<p>下面是一个示例。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">FILE</span><span class="token operator">=~</span>/.bashrc

<span class="token keyword">if</span> <span class="token punctuation">[</span> -e <span class="token string">"<span class="token variable">$FILE</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> -f <span class="token string">"<span class="token variable">$FILE</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$FILE</span> is a regular file."</span>
  <span class="token keyword">fi</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> -d <span class="token string">"<span class="token variable">$FILE</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$FILE</span> is a directory."</span>
  <span class="token keyword">fi</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> -r <span class="token string">"<span class="token variable">$FILE</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$FILE</span> is readable."</span>
  <span class="token keyword">fi</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> -w <span class="token string">"<span class="token variable">$FILE</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$FILE</span> is writable."</span>
  <span class="token keyword">fi</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> -x <span class="token string">"<span class="token variable">$FILE</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$FILE</span> is executable/searchable."</span>
  <span class="token keyword">fi</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$FILE</span> does not exist"</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>$FILE</code> 要放在双引号之中。这样可以防止 <code v-pre>$FILE</code> 为空，因为这时 <code v-pre>[ -e ]</code> 会判断为真。而放在双引号之中，返回的就总是一个空字符串，<code v-pre>[ -e &quot;&quot; ]</code> 会判断为伪。</p>
<h3 id="字符串判断" tabindex="-1"><a class="header-anchor" href="#字符串判断" aria-hidden="true">#</a> 字符串判断</h3>
<p>以下表达式用来判断字符串。</p>
<ul>
<li><code v-pre>[ string ]</code>: 如果 <code v-pre>string</code> 不为空(长度大于 0)，则判断为真。</li>
<li><code v-pre>[ -n string ]</code>: 如果字符串 <code v-pre>string</code> 的长度大于零，则判断为真。</li>
<li><code v-pre>[ -z string ]</code>: 如果字符串 <code v-pre>string</code> 的长度为零，则判断为真。</li>
<li><code v-pre>[ string1 = string2 ]</code>: 如果 <code v-pre>string1</code> 和 <code v-pre>string2</code> 相同，则判断为真。</li>
<li><code v-pre>[ string1 == string2 ]</code> 等同于 <code v-pre>[ string1 = string2 ]</code>。</li>
<li><code v-pre>[ string1 != string2 ]</code>: 如果 <code v-pre>string1</code> 和 <code v-pre>string2</code> 不相同，则判断为真。</li>
<li><code v-pre>[ string1 '&gt;' string2 ]</code>: 如果按照字典顺序 <code v-pre>string1</code> 排列在 <code v-pre>string2</code> 之后，则判断为真。</li>
<li><code v-pre>[ string1 '&lt;' string2 ]</code>: 如果按照字典顺序 <code v-pre>string1</code> 排列在 <code v-pre>string2</code> 之前，则判断为真。</li>
</ul>
<p>注意，<code v-pre>test</code> 命令内部的 <code v-pre>&gt;</code> 和 <code v-pre>&lt;</code>，必须用引号引起来(或者是用反斜杠转义)。否则，它们会被 shell 解释为重定向操作符。</p>
<p>下面是一个示例。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">ANSWER</span><span class="token operator">=</span>maybe

<span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">"<span class="token variable">$ANSWER</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"There is no answer."</span> <span class="token operator">></span><span class="token file-descriptor important">&amp;2</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$ANSWER</span>"</span> <span class="token operator">=</span> <span class="token string">"yes"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"The answer is YES."</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$ANSWER</span>"</span> <span class="token operator">=</span> <span class="token string">"no"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"The answer is NO."</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$ANSWER</span>"</span> <span class="token operator">=</span> <span class="token string">"maybe"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"The answer is MAYBE."</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"The answer is UNKNOWN."</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，首先确定 <code v-pre>$ANSWER</code> 字符串是否为空。如果为空，就终止脚本，并把退出状态设为 <code v-pre>1</code>。注意，这里的 <code v-pre>echo</code> 命令把错误信息 <code v-pre>There is no answer.</code> 重定向到标准错误，这是处理错误信息的常用方法。如果 <code v-pre>$ANSWER</code> 字符串不为空，就判断它的值是否等于 <code v-pre>yes</code>、<code v-pre>no</code> 或者 <code v-pre>maybe</code>。</p>
<p>注意，字符串判断时，变量要放在双引号之中，比如 <code v-pre>[ -n &quot;$COUNT&quot; ]</code>，否则变量替换成字符串以后，<code v-pre>test</code> 命令可能会报错，提示参数过多。另外，如果不放在双引号之中，变量为空时，命令会变成 <code v-pre>[ -n ]</code>，这时会判断为真。如果放在双引号之中，<code v-pre>[ -n &quot;&quot; ]</code> 就判断为伪。</p>
<h3 id="整数判断" tabindex="-1"><a class="header-anchor" href="#整数判断" aria-hidden="true">#</a> 整数判断</h3>
<p>下面的表达式用于判断整数。</p>
<ul>
<li><code v-pre>[ integer1 -eq integer2 ]</code>: 如果 <code v-pre>integer1</code> 等于 <code v-pre>integer2</code>，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ integer1 -ne integer2 ]</code>: 如果 <code v-pre>integer1</code> 不等于 <code v-pre>integer2</code>，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ integer1 -le integer2 ]</code>: 如果 <code v-pre>integer1</code> 小于或等于 <code v-pre>integer2</code>，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ integer1 -lt integer2 ]</code>: 如果 <code v-pre>integer1</code> 小于 <code v-pre>integer2</code>，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ integer1 -ge integer2 ]</code>: 如果 <code v-pre>integer1</code> 大于或等于 <code v-pre>integer2</code>，则为 <code v-pre>true</code>。</li>
<li><code v-pre>[ integer1 -gt integer2 ]</code>: 如果 <code v-pre>integer1</code> 大于 <code v-pre>integer2</code>，则为 <code v-pre>true</code>。</li>
</ul>
<p>下面是一个用法的例子。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">INT</span><span class="token operator">=</span>-5

<span class="token keyword">if</span> <span class="token punctuation">[</span> -z <span class="token string">"<span class="token variable">$INT</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"INT is empty."</span> <span class="token operator">></span><span class="token file-descriptor important">&amp;2</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$INT</span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"INT is zero."</span>
<span class="token keyword">else</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$INT</span> -lt <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"INT is negative."</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"INT is positive."</span>
  <span class="token keyword">fi</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable"><span class="token variable">$((</span>INT <span class="token operator">%</span> <span class="token number">2</span><span class="token variable">))</span></span> -eq <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"INT is even."</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"INT is odd."</span>
  <span class="token keyword">fi</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，先判断变量 <code v-pre>$INT</code> 是否为空，然后判断是否为 <code v-pre>0</code>，接着判断正负，最后通过求余数判断奇偶。</p>
<h3 id="正则判断" tabindex="-1"><a class="header-anchor" href="#正则判断" aria-hidden="true">#</a> 正则判断</h3>
<p><code v-pre>[[ expression ]]</code> 这种判断形式，支持正则表达式。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span><span class="token punctuation">[</span> string1 <span class="token operator">=~</span> regex <span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的语法中，<code v-pre>regex</code> 是一个正则表示式，<code v-pre>=~</code> 是正则比较运算符。</p>
<p>下面是一个例子。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">INT</span><span class="token operator">=</span>-5

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$INT</span>"</span> <span class="token operator">=~</span> ^-?<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>+$ <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"INT is an integer."</span>
  <span class="token builtin class-name">exit</span> <span class="token number">0</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"INT is not an integer."</span> <span class="token operator">></span><span class="token file-descriptor important">&amp;2</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，先判断变量 <code v-pre>INT</code> 的字符串形式，是否满足 <code v-pre>^-?[0-9]+$</code> 的正则模式，如果满足就表明它是一个整数。</p>
<h3 id="test-判断的逻辑运算" tabindex="-1"><a class="header-anchor" href="#test-判断的逻辑运算" aria-hidden="true">#</a> test 判断的逻辑运算</h3>
<p>通过逻辑运算，可以把多个 <code v-pre>test</code> 判断表达式结合起来，创造更复杂的判断。三种逻辑运算 <code v-pre>AND</code>，<code v-pre>OR</code>，和 <code v-pre>NOT</code>，都有自己的专用符号。</p>
<ul>
<li><code v-pre>AND</code> 运算: 符号 <code v-pre>&amp;&amp;</code>，也可使用参数 <code v-pre>-a</code>。</li>
<li><code v-pre>OR</code> 运算: 符号 <code v-pre>||</code>，也可使用参数 <code v-pre>-o</code>。</li>
<li><code v-pre>NOT</code> 运算: 符号 <code v-pre>!</code>。</li>
</ul>
<p>下面是一个 <code v-pre>AND</code> 的例子，判断整数是否在某个范围之内。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">MIN_VAL</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">MAX_VAL</span><span class="token operator">=</span><span class="token number">100</span>

<span class="token assign-left variable">INT</span><span class="token operator">=</span><span class="token number">50</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$INT</span>"</span> <span class="token operator">=~</span> ^-?<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>+$ <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$INT</span> -ge <span class="token variable">$MIN_VAL</span> <span class="token operator">&amp;&amp;</span> <span class="token variable">$INT</span> -le <span class="token variable">$MAX_VAL</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$INT</span> is within <span class="token variable">$MIN_VAL</span> to <span class="token variable">$MAX_VAL</span>."</span>
  <span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$INT</span> is out of range."</span>
  <span class="token keyword">fi</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"INT is not an integer."</span> <span class="token operator">></span><span class="token file-descriptor important">&amp;2</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>&amp;&amp;</code> 用来连接两个判断条件: 大于等于 <code v-pre>$MIN_VAL</code>，并且小于等于 <code v-pre>$MAX_VAL</code>。</p>
<p>使用否定操作符 <code v-pre>!</code> 时，最好用圆括号确定转义的范围。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token punctuation">\</span><span class="token punctuation">(</span> <span class="token variable">$INT</span> -ge <span class="token variable">$MIN_VAL</span> -a <span class="token variable">$INT</span> -le <span class="token variable">$MAX_VAL</span> <span class="token punctuation">\</span><span class="token punctuation">)</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$INT</span> is outside <span class="token variable">$MIN_VAL</span> to <span class="token variable">$MAX_VAL</span>."</span>
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$INT</span> is in range."</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>test</code> 命令内部使用的圆括号，必须使用引号或者转义，否则会被 Bash 解释。</p>
<h3 id="算术判断" tabindex="-1"><a class="header-anchor" href="#算术判断" aria-hidden="true">#</a> 算术判断</h3>
<p>Bash 还提供了 <code v-pre>((...))</code> 作为算术条件，进行算术运算的判断。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span><span class="token number">3</span> <span class="token operator">></span> <span class="token number">2</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"true"</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码执行后，会打印出 <code v-pre>true</code>。</p>
<p>注意，算术判断不需要使用 <code v-pre>test</code> 命令，而是直接使用 <code v-pre>((...))</code> 结构。这个结构的返回值，决定了判断的真伪。</p>
<p>如果算术计算的结果是非零值，则表示判断成立。这一点跟命令的返回值正好相反，需要小心。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span><span class="token number">1</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">"It is true."</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
It is true.
$ <span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span><span class="token number">0</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">"It is true."</span><span class="token punctuation">;</span> <span class="token keyword">else</span> <span class="token builtin class-name">echo</span> <span class="token string">"it is false."</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
It is false.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>((1))</code> 表示判断成立，<code v-pre>((0))</code> 表示判断不成立。</p>
<p>算术条件 <code v-pre>((...))</code> 也可以用于变量赋值。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span> foo <span class="token operator">=</span> <span class="token number">5</span> <span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">"foo is <span class="token variable">$foo</span>"</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
foo is <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，<code v-pre>(( foo = 5 ))</code> 完成了两件事情。首先把 <code v-pre>5</code> 赋值给变量 <code v-pre>foo</code>，然后根据返回值 <code v-pre>5</code>，判断条件为真。</p>
<p>注意，赋值语句返回等号右边的值，如果返回的是 <code v-pre>0</code>，则判断为假。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span> foo <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">))</span></span><span class="token punctuation">;</span><span class="token keyword">then</span> <span class="token builtin class-name">echo</span> <span class="token string">"It is true."</span><span class="token punctuation">;</span><span class="token keyword">else</span> <span class="token builtin class-name">echo</span> <span class="token string">"It is false."</span><span class="token punctuation">;</span> <span class="token keyword">fi</span>
It is false.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是用算术条件改写的数值判断脚本。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">INT</span><span class="token operator">=</span>-5

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token string">"<span class="token variable">$INT</span>"</span> <span class="token operator">=~</span> ^-?<span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span>+$ <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span>INT <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">"INT is zero."</span>
  <span class="token keyword">else</span>
    <span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span>INT <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token builtin class-name">echo</span> <span class="token string">"INT is negative."</span>
    <span class="token keyword">else</span>
      <span class="token builtin class-name">echo</span> <span class="token string">"INT is positive."</span>
    <span class="token keyword">fi</span>
    <span class="token keyword">if</span> <span class="token variable"><span class="token punctuation">((</span> <span class="token punctuation">((</span>INT <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">))</span></span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">))</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token builtin class-name">echo</span> <span class="token string">"INT is even."</span>
    <span class="token keyword">else</span>
      <span class="token builtin class-name">echo</span> <span class="token string">"INT is odd."</span>
    <span class="token keyword">fi</span>
  <span class="token keyword">fi</span>
<span class="token keyword">else</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"INT is not an integer."</span> <span class="token operator">></span><span class="token file-descriptor important">&amp;2</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要是算术表达式，都能用于 <code v-pre>((...))</code> 语法，详见 <RouterLink to="/linux/bash/arithmetic.html">Bash 的算术运算</RouterLink> 一章。</p>
<h3 id="普通命令的逻辑运算" tabindex="-1"><a class="header-anchor" href="#普通命令的逻辑运算" aria-hidden="true">#</a> 普通命令的逻辑运算</h3>
<p>如果 <code v-pre>if</code> 结构使用的不是 <code v-pre>test</code> 命令，而是普通命令，比如上一节的 <code v-pre>((...))</code> 算术运算，或者 <code v-pre>test</code> 命令与普通命令混用，那么可以使用 Bash 的命令控制操作符 <code v-pre>&amp;&amp;</code>(AND)和 <code v-pre>||</code>(OR)，进行多个命令的逻辑运算。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>command1 <span class="token operator">&amp;&amp;</span> command2
command1 <span class="token operator">||</span> command2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 <code v-pre>&amp;&amp;</code> 操作符，先执行 <code v-pre>command1</code>，只有 <code v-pre>command1</code> 执行成功后， 才会执行 <code v-pre>command2</code>。对于 <code v-pre>||</code> 操作符，先执行 <code v-pre>command1</code>，只有 <code v-pre>command1</code> 执行失败后， 才会执行 <code v-pre>command2</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">mkdir</span> temp <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令会创建一个名为 <code v-pre>temp</code> 的目录，执行成功后，才会执行第二个命令，进入这个目录。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span> -d temp <span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token function">mkdir</span> temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令会测试目录 <code v-pre>temp</code> 是否存在，如果不存在，就会执行第二个命令，创建这个目录。这种写法非常有助于在脚本中处理错误。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span> <span class="token operator">!</span> -d temp <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">exit</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令中，如果 <code v-pre>temp</code> 子目录不存在，脚本会终止，并且返回值为 <code v-pre>1</code>。</p>
<p>下面就是 <code v-pre>if</code> 与 <code v-pre>&amp;&amp;</code> 结合使用的写法。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">if</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">command</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面是一个示例。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>

<span class="token assign-left variable">filename</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">word1</span><span class="token operator">=</span><span class="token variable">$2</span>
<span class="token assign-left variable">word2</span><span class="token operator">=</span><span class="token variable">$3</span>

<span class="token keyword">if</span> <span class="token function">grep</span> <span class="token variable">$word1</span> <span class="token variable">$filename</span> <span class="token operator">&amp;&amp;</span> <span class="token function">grep</span> <span class="token variable">$word2</span> <span class="token variable">$filename</span>
<span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"<span class="token variable">$word1</span> and <span class="token variable">$word2</span> are both in <span class="token variable">$filename</span>."</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子只有在指定文件里面，同时存在搜索词 <code v-pre>word1</code> 和 <code v-pre>word2</code>，就会执行 <code v-pre>if</code> 的命令部分。</p>
<p>下面的示例演示如何将一个 <code v-pre>&amp;&amp;</code> 判断表达式，改写成对应的 <code v-pre>if</code> 结构。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span><span class="token punctuation">[</span> -d <span class="token string">"<span class="token variable">$dir_name</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> <span class="token string">"<span class="token variable">$dir_name</span>"</span> <span class="token operator">&amp;&amp;</span> <span class="token function">rm</span> *

<span class="token comment"># 等同于</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token operator">!</span> -d <span class="token string">"<span class="token variable">$dir_name</span>"</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"No such directory: '<span class="token variable">$dir_name</span>'"</span> <span class="token operator">></span><span class="token file-descriptor important">&amp;2</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token builtin class-name">cd</span> <span class="token string">"<span class="token variable">$dir_name</span>"</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"Cannot cd to '<span class="token variable">$dir_name</span>'"</span> <span class="token operator">></span><span class="token file-descriptor important">&amp;2</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
<span class="token keyword">if</span> <span class="token operator">!</span> <span class="token function">rm</span> *<span class="token punctuation">;</span> <span class="token keyword">then</span>
  <span class="token builtin class-name">echo</span> <span class="token string">"File deletion failed. Check results"</span> <span class="token operator">></span><span class="token file-descriptor important">&amp;2</span>
  <span class="token builtin class-name">exit</span> <span class="token number">1</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="case-结构" tabindex="-1"><a class="header-anchor" href="#case-结构" aria-hidden="true">#</a> case 结构</h2>
<p><code v-pre>case</code> 结构用于多值判断，可以为每个值指定对应的命令，跟包含多个 <code v-pre>elif</code> 的 <code v-pre>if</code> 结构等价，但是语义更好。它的语法如下。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token keyword">case</span> expression <span class="token keyword">in</span>
  pattern <span class="token punctuation">)</span>
    commands <span class="token punctuation">;</span><span class="token punctuation">;</span>
  pattern <span class="token punctuation">)</span>
    commands <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token punctuation">..</span>.
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，<code v-pre>expression</code> 是一个表达式，<code v-pre>pattern</code> 是表达式的值或者一个模式，可以有多条，用来匹配多个值，每条以两个分号 (<code v-pre>;</code>) 结尾。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> -n <span class="token string">"输入一个 1 到 3 之间的数字(包含两端)> "</span>
<span class="token builtin class-name">read</span> character
<span class="token keyword">case</span> <span class="token variable">$character</span> <span class="token keyword">in</span>
  <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token number">1</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token number">2</span> <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token number">2</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token number">3</span> <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token number">3</span>
    <span class="token punctuation">;</span><span class="token punctuation">;</span>
  * <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> 输入不符合要求
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，最后一条匹配语句的模式是 <code v-pre>*</code>，这个通配符可以匹配其他字符和没有输入字符的情况，类似 <code v-pre>if</code> 的 <code v-pre>else</code> 部分。</p>
<p>下面是另一个例子。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">OS</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">uname</span> -s<span class="token variable">)</span></span>

<span class="token keyword">case</span> <span class="token string">"<span class="token variable">$OS</span>"</span> <span class="token keyword">in</span>
  FreeBSD<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">"This is FreeBSD"</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
  Darwin<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">"This is Mac OSX"</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
  AIX<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">"This is AIX"</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
  Minix<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">"This is Minix"</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
  Linux<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">"This is Linux"</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
  *<span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">"Failed to identify this OS"</span> <span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的例子判断当前是什么操作系统。</p>
<p><code v-pre>case</code> 的匹配模式可以使用各种通配符，下面是一些例子。</p>
<ul>
<li><code v-pre>a)</code>: 匹配 <code v-pre>a</code>。</li>
<li><code v-pre>a|b)</code>: 匹配 <code v-pre>a</code> 或 <code v-pre>b</code>。</li>
<li><code v-pre>[[:alpha:]])</code>: 匹配单个字母。</li>
<li><code v-pre>???)</code>: 匹配 3 个字符的单词。</li>
<li><code v-pre>*.txt)</code>: 匹配 <code v-pre>.txt</code> 结尾。</li>
<li><code v-pre>*)</code>: 匹配任意输入，通过作为 <code v-pre>case</code> 结构的最后一个模式。</li>
</ul>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> -n <span class="token string">"输入一个字母或数字 > "</span>
<span class="token builtin class-name">read</span> character
<span class="token keyword">case</span> <span class="token variable">$character</span> <span class="token keyword">in</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>:lower:<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">|</span> <span class="token punctuation">[</span><span class="token punctuation">[</span>:upper:<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">)</span> <span class="token builtin class-name">echo</span> <span class="token string">"输入了字母 <span class="token variable">$character</span>"</span>
                              <span class="token punctuation">;</span><span class="token punctuation">;</span>
  <span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span> <span class="token punctuation">)</span>                     <span class="token builtin class-name">echo</span> <span class="token string">"输入了数字 <span class="token variable">$character</span>"</span>
                              <span class="token punctuation">;</span><span class="token punctuation">;</span>
  * <span class="token punctuation">)</span>                         <span class="token builtin class-name">echo</span> <span class="token string">"输入不符合要求"</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面例子中，使用通配符 <code v-pre>[[:lower:]] | [[:upper:]]</code> 匹配字母，<code v-pre>[0-9]</code> 匹配数字。</p>
<p>Bash 4.0 之前，<code v-pre>case</code> 结构只能匹配一个条件，然后就会退出 <code v-pre>case</code> 结构。Bash 4.0 之后，允许匹配多个条件，这时可以用 <code v-pre>;;&amp;</code> 终止每个条件块。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token comment"># test.sh</span>

<span class="token builtin class-name">read</span> -n <span class="token number">1</span> -p <span class="token string">"Type a character > "</span>
<span class="token builtin class-name">echo</span>
<span class="token keyword">case</span> <span class="token environment constant">$REPLY</span> <span class="token keyword">in</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>:upper:<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token builtin class-name">echo</span> <span class="token string">"'<span class="token environment constant">$REPLY</span>' is upper case."</span> <span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token operator">&amp;</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>:lower:<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token builtin class-name">echo</span> <span class="token string">"'<span class="token environment constant">$REPLY</span>' is lower case."</span> <span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token operator">&amp;</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>:alpha:<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token builtin class-name">echo</span> <span class="token string">"'<span class="token environment constant">$REPLY</span>' is alphabetic."</span> <span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token operator">&amp;</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>:digit:<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token builtin class-name">echo</span> <span class="token string">"'<span class="token environment constant">$REPLY</span>' is a digit."</span> <span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token operator">&amp;</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>:graph:<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token builtin class-name">echo</span> <span class="token string">"'<span class="token environment constant">$REPLY</span>' is a visible character."</span> <span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token operator">&amp;</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>:punct:<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token builtin class-name">echo</span> <span class="token string">"'<span class="token environment constant">$REPLY</span>' is a punctuation symbol."</span> <span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token operator">&amp;</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>:space:<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token builtin class-name">echo</span> <span class="token string">"'<span class="token environment constant">$REPLY</span>' is a whitespace character."</span> <span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token operator">&amp;</span>
  <span class="token punctuation">[</span><span class="token punctuation">[</span>:xdigit:<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>   <span class="token builtin class-name">echo</span> <span class="token string">"'<span class="token environment constant">$REPLY</span>' is a hexadecimal digit."</span> <span class="token punctuation">;</span><span class="token punctuation">;</span><span class="token operator">&amp;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行上面的脚本，会得到下面的结果。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ test.sh
Type a character <span class="token operator">></span> a
<span class="token string">'a'</span> is lower case.
<span class="token string">'a'</span> is alphabetic.
<span class="token string">'a'</span> is a visible character.
<span class="token string">'a'</span> is a hexadecimal digit.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到条件语句结尾添加了 <code v-pre>;;&amp;</code> 以后，在匹配一个条件之后，并没有退出 <code v-pre>case</code> 结构，而是继续判断下一个条件。</p>
<h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2>
<ul>
<li><a href="http://linuxcommand.org/tlcl.php" target="_blank" rel="noopener noreferrer">The Linux command-line<ExternalLinkIcon/></a>, William Shotts</li>
<li><a href="https://www.pcwdld.com/linux-commands-cheat-sheet" target="_blank" rel="noopener noreferrer">Linux Commands Cheat Sheet<ExternalLinkIcon/></a> (一个很简短的 CheatSheet)</li>
</ul>
</div></template>
