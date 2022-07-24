<template><div><h1 id="du" tabindex="-1"><a class="header-anchor" href="#du" aria-hidden="true">#</a> du</h1>
<p><code v-pre>du</code> 命令显示某个文件或目录的磁盘使用量。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">du</span> filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>-h</code> 参数将返回的大小显示为人类可读的格式，即显示单位为 K、M、G 等。</p>
<p><code v-pre>-s</code> 参数表示总结(summarize)。</p>
<p><code v-pre>-x</code> 参数表示不显示不在当前分区的目录，通常会忽略<code v-pre>/dev</code>、<code v-pre>/proc</code>、<code v-pre>/sys</code> 等目录。</p>
<p><code v-pre>-c</code> 参数表示显示当前目录总共占用的空间大小。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 显示根目录下各级目录占用的空间大小</span>
$ <span class="token function">sudo</span> <span class="token function">du</span> -shxc /*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>--exclude</code> 参数用于排除某些目录或文件。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">du</span> -shxc /* --exclude<span class="token operator">=</span>proc
<span class="token function">sudo</span> <span class="token function">du</span> -sh --exclude<span class="token operator">=</span>*.iso
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>--max-depth</code> 参数用于设定目录大小统计到第几层。如果设为 <code v-pre>-–max-depth=0</code>，那么等同于 <code v-pre>-s</code> 参数。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">du</span> /home/ -hc --max-depth<span class="token operator">=</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
