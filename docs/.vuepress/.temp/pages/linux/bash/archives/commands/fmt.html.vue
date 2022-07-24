<template><div><h1 id="fmt" tabindex="-1"><a class="header-anchor" href="#fmt" aria-hidden="true">#</a> fmt</h1>
<p><code v-pre>fmt</code> 命令用于对文本指定样式。</p>
<p>下面是 <code v-pre>example.txt</code> 的内容，是非常长的一行。</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>fmt</code> 可以将其输出为每行 80 个字符。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">cat</span> example.txt <span class="token operator">|</span> <span class="token function">fmt</span> -w <span class="token number">20</span>
Lorem ipsum
dolor sit amet,
consetetur
sadipscing elitr,
<span class="token function">sed</span> diam nonumy
eirmod tempor
invidunt ut labore
et dolore magna
aliquyam erat, <span class="token function">sed</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
