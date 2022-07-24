<template><div><p>本文介绍 Glob 匹配。</p>
<!-- more -->
<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h2>
<p>Glob 是当您要进行路径匹配时键入的模式。</p>
<p>在解析一条匹配模式前，Glob 首先将 <code v-pre>{}</code> 部分展开为一组匹配模式。<code v-pre>{}</code> 内的模式之间使用逗号分隔。</p>
<p>如 <code v-pre>a{/b/c,bcd}</code> 将扩展为 <code v-pre>a/b/c</code> 和 <code v-pre>abcd</code></p>
<p><code v-pre>{}</code> 可以嵌套，可与其他模式联用。</p>
<p>Glob 的魔术字符如下:</p>
<ul>
<li>
<p><code v-pre>*</code>: 匹配路径部分中的 0 个或多个字符</p>
</li>
<li>
<p><code v-pre>?</code>: 匹配单个字符</p>
</li>
<li>
<p><code v-pre>[...]</code>: 匹配字符范围。<code v-pre>[^...]</code>和 <code v-pre>[!...]</code> 表示匹配不在范围内的字符</p>
<details class="custom-container details"><summary>例子</summary>
<ul>
<li><code v-pre>[xyz].js</code> 只能匹配 <code v-pre>x.js</code>, <code v-pre>y.js</code>, <code v-pre>z.js</code>，但不会匹配 <code v-pre>xy.js</code>, <code v-pre>xyz.js</code> 等，因为整个中括号只代表一个字符。其等价于 <code v-pre>[x-z].js</code></li>
<li><code v-pre>[!xyz].js</code> 能匹配 <code v-pre>a.js</code>, <code v-pre>b.js</code>, <code v-pre>u.js</code>，但不会匹配 <code v-pre>x.js</code>, <code v-pre>y.js</code> <code v-pre>z.js</code>，<code v-pre>ab.js</code> 等。其等价于 <code v-pre>[^xyz].js</code> 和 <code v-pre>[!x-z].js</code>。</li>
</ul>
</details>
</li>
<li>
<p><code v-pre>!(pattern|pattern|pattern)</code>: 匹配与提供的任何模式都不匹配的任何内容。</p>
</li>
<li>
<p><code v-pre>?(pattern|pattern|pattern)</code>: 匹配 0 或一个内部模式。</p>
</li>
<li>
<p><code v-pre>+(pattern|pattern|pattern)</code> 匹配一个或多个内部模式。</p>
</li>
<li>
<p><code v-pre>*(a|b|c)</code>: 匹配 0 或多个内部模式。</p>
</li>
<li>
<p><code v-pre>@(pattern|pat*|pat?erN)</code>: 匹配恰好一个内部模式。</p>
</li>
<li>
<p><code v-pre>**</code>: 如果其在路径部分中单独出现，则匹配路径中的 0 个或多个目录与子目录。请注意它不对 symlinked 目录 (符号链接目录) 进行爬取。</p>
<details class="custom-container details"><summary>例子</summary>
<ul>
<li><code v-pre>**</code> 能匹配匹配所有的目录和文件。</li>
<li><code v-pre>**/*.js</code> 能匹配所有的 js 文件。</li>
<li><code v-pre>a/**/b.txt</code> 能匹配目录里任何一个 a 文件夹内的所有 b.txt 文件。</li>
</ul>
</details>
</li>
</ul>
<h2 id="开头的文件与文件夹" tabindex="-1"><a class="header-anchor" href="#开头的文件与文件夹" aria-hidden="true">#</a> <code v-pre>.</code> 开头的文件与文件夹</h2>
<p>由于以 <code v-pre>.</code> 开头的文件或文件夹在 Unix 中视为隐藏文件或文件夹，故 Glob 不会匹配任何以 <code v-pre>.</code> 开头的路径部分，如 <code v-pre>.github/dependabot.yml</code> 或 <code v-pre>.eslintrc.js</code>。</p>
<p>如果的确想要匹配 <code v-pre>.</code> 开头的文件或文件夹，可以显示标注出来，如 <code v-pre>.*.js</code> 可以匹配 <code v-pre>.eslintrc.js</code>。</p>
</div></template>
