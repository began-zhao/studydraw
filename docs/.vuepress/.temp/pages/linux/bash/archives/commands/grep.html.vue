<template><div><h1 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep</h1>
<p><code v-pre>grep</code> 命令用于文件内容的搜索，返回所有匹配的行。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">grep</span> pattern filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是一个例子。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">grep</span> admin /etc/passwd
_kadmin_admin:*:218:-2:Kerberos Admin Service:/var/empty:/usr/bin/false
_kadmin_changepw:*:219:-2:Kerberos Change Password Service:/var/empty:/usr/bin/false
_krb_kadmin:*:231:-2:Open Directory Kerberos Admin Service:/var/empty:/usr/bin/false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一般情况下，应该使用 <code v-pre>grep -R</code>，递归地找出当前目录下符合 <code v-pre>someVar</code> 的文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">grep</span> -FR <span class="token string">'someVar'</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>別忘了大小不敏感的参数，因为 grep 默认搜索是大小写敏感的。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">grep</span> -iR <span class="token string">'somevar'</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以用 <code v-pre>grep -l</code> 光打印出符合条件的文件名而非文件内容选段。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">grep</span> -lR <span class="token string">'somevar'</span> <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果您写的脚本或批处理任务需要上面的输出内容，可以使用 while 和 read 来处理文件名中的空格和其他特殊字符:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">grep</span> -lR someVar <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token assign-left variable"><span class="token environment constant">IFS</span></span><span class="token operator">=</span> <span class="token builtin class-name">read</span> -r <span class="token function">file</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token function">head</span> <span class="token string">"<span class="token variable">$file</span>"</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您在您的项目里使用了版本控制软件，它通常会在 .svn， .git， .hg 目录下包含一些元数据。您也可以很容易地用 grep -v 把这些目录移出搜索范围，当然得用 grep -F 指定一个恰当且确定的字符串，即要移除的目录名:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">grep</span> -R <span class="token string">'someVar'</span> <span class="token builtin class-name">.</span> <span class="token operator">|</span> <span class="token function">grep</span> -vF <span class="token string">'.svn'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>部分版本的 grep 包含了 --exclude 和 --exclude-dir 选项，这看起来更加易读。</p>
<h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2>
<p><code v-pre>-i</code> 参数表示忽略大小写。</p>
<p><code v-pre>-r</code> 表示搜索某个目录下面的所有文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">grep</span> -r admin /etc/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>-v</code> 过滤包含某个词的行，即 <code v-pre>grep</code> 的逆操作。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 显示所有包含 vim，但不包含 grep 的行</span>
$ <span class="token function">ps</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">vim</span> <span class="token operator">|</span> <span class="token function">grep</span> -v <span class="token function">grep</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
