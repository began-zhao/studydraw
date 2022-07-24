<template><div><h1 id="tr" tabindex="-1"><a class="header-anchor" href="#tr" aria-hidden="true">#</a> tr</h1>
<p><code v-pre>tr</code> 命令用于按照给定模式转换文本。</p>
<p>下面是 <code v-pre>example.txt</code> 文件的内容。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>Hello World Foo Bar Baz<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>tr</code> 命令可以将所有小写字母转换为大写字母。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">cat</span> example.txt <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">'a-z'</span> <span class="token string">'A-Z'</span>
HELLO WORLD FOO BAR BAZ<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>tr</code> 命令还可以将所有空格转为换行符。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">cat</span> example.txt <span class="token operator">|</span> <span class="token function">tr</span> <span class="token string">' '</span> <span class="token string">'\n'</span>
Hello
World
Foo
Bar
Baz<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
