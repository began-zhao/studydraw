<template><div><h1 id="ps" tabindex="-1"><a class="header-anchor" href="#ps" aria-hidden="true">#</a> ps</h1>
<p><code v-pre>ps</code> 命令列出当前正在执行的进程信息。</p>
<p>由于进程很多，所以为了快速找到某个进程，一般与 <code v-pre>grep</code> 配合使用。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 找出正在运行 vim 的进程</span>
$ <span class="token function">ps</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token function">vi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2>
<p><code v-pre>-u</code> 参数列出指定用户拥有的进程。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">ps</span> -u yourusername
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
