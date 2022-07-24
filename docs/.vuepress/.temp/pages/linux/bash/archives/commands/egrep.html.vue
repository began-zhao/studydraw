<template><div><h1 id="egrep" tabindex="-1"><a class="header-anchor" href="#egrep" aria-hidden="true">#</a> egrep</h1>
<p><code v-pre>egrep</code> 命令用于显示匹配正则模式的行，与 <code v-pre>grep -E</code> 命令等价。</p>
<p>下面是 <code v-pre>example.txt</code> 文件的内容。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Lorem ipsum
dolor sit amet,
consetetur
sadipscing elitr,
sed diam nonumy
eirmod tempor
invidunt ut labore
et dolore magna
aliquyam erat, sed
diam voluptua. At
vero eos et
accusam et justo
duo dolores et ea
rebum. Stet clita
kasd gubergren,
no sea takimata
sanctus est Lorem
ipsum dolor sit
amet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>egrep</code> 命令显示包括 <code v-pre>Lorem</code> 或 <code v-pre>dolor</code> 的行。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">egrep</span> <span class="token string">'(Lorem|dolor)'</span> example.txt
<span class="token comment"># 或者</span>
$ <span class="token function">grep</span> -E <span class="token string">'(Lorem|dolor)'</span> example.txt
Lorem ipsum
dolor sit amet,
et dolore magna
duo dolores et ea
sanctus est Lorem
ipsum dolor sit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
