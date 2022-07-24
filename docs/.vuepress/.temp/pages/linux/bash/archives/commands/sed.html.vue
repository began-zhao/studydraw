<template><div><h1 id="sed" tabindex="-1"><a class="header-anchor" href="#sed" aria-hidden="true">#</a> sed</h1>
<p><code v-pre>sed</code> 命令用于对文本进行过滤和变形处理。</p>
<p>下面是 <code v-pre>example.txt</code> 文件的内容。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Hello This is a Test <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token number">4</span>
replace all spaces with hyphens
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>sed</code> 命令将所有的空格换成连词线 <code v-pre>-</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sed</span> <span class="token string">'s/ /-/g'</span> example.txt
Hello-This-is-a-Test-1-2-3-4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>下面的命令将数字换成字母 <code v-pre>d</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">sed</span> <span class="token string">'s/[0-9]/d/g'</span> example.txt
Hello This is a Test d d d d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
