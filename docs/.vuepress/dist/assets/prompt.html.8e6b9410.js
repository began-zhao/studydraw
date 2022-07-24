import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as n,e as a}from"./app.15378688.js";const c={},d=a(`<p>\u7528\u6237\u8FDB\u5165 Bash \u4EE5\u540E\uFF0CBash \u4F1A\u663E\u793A\u4E00\u4E2A\u547D\u4EE4\u63D0\u793A\u7B26\uFF0C\u7528\u6765\u63D0\u793A\u7528\u6237\u5728\u8BE5\u4F4D\u7F6E\u540E\u9762\u8F93\u5165\u547D\u4EE4\u3002</p><h2 id="\u73AF\u5883\u53D8\u91CF-ps1" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF-ps1" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF PS1</h2><p>\u547D\u4EE4\u63D0\u793A\u7B26\u901A\u5E38\u662F\u7F8E\u5143\u7B26\u53F7 <code>$</code>\uFF0C\u5BF9\u4E8E\u6839\u7528\u6237\u5219\u662F\u4E95\u53F7 <code>#</code>\u3002\u8FD9\u4E2A\u7B26\u53F7\u662F\u73AF\u5883\u53D8\u91CF <code>PS1</code> \u51B3\u5B9A\u7684\uFF0C\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\uFF0C\u53EF\u4EE5\u770B\u5230\u5F53\u524D\u547D\u4EE4\u63D0\u793A\u7B26\u7684\u5B9A\u4E49\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token environment constant">$PS1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Bash \u5141\u8BB8\u7528\u6237\u81EA\u5B9A\u4E49\u547D\u4EE4\u63D0\u793A\u7B26\uFF0C\u53EA\u8981\u6539\u5199\u8FD9\u4E2A\u53D8\u91CF\u5373\u53EF\u3002\u6539\u5199\u540E \u7684 <code>PS1</code>\uFF0C\u53EF\u4EE5\u653E\u5728\u7528\u6237\u7684 Bash \u914D\u7F6E\u6587\u4EF6 <code>.bashrc</code> \u91CC\u9762\uFF0C\u4EE5\u540E\u65B0\u5EFA Bash \u5BF9\u8BDD\u65F6\uFF0C\u65B0\u7684\u63D0\u793A\u7B26\u5C31\u4F1A\u751F\u6548\u3002\u8981\u5728\u5F53\u524D\u7A97\u53E3\u770B\u5230\u4FEE\u6539\u540E\u7684\u63D0\u793A\u7B26\uFF0C\u53EF\u4EE5\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">source</span> ~/.bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u547D\u4EE4\u63D0\u793A\u7B26\u7684\u5B9A\u4E49\uFF0C\u53EF\u4EE5\u5305\u542B\u7279\u6B8A\u7684\u8F6C\u4E49\u5B57\u7B26\uFF0C\u8868\u793A\u7279\u5B9A\u5185\u5BB9\u3002</p><ul><li><code>\\a</code>: \u54CD\u94C3\uFF0C\u8BA1\u7B97\u673A\u53D1\u51FA\u4E00\u8BB0\u58F0\u97F3\u3002</li><li><code>\\d</code>: \u4EE5\u661F\u671F\u3001\u6708\u3001\u65E5\u683C\u5F0F\u8868\u793A\u5F53\u524D\u65E5\u671F\uFF0C\u4F8B\u5982\u201CMon May 26\u201D\u3002</li><li><code>\\h</code>: \u672C\u673A\u7684\u4E3B\u673A\u540D\u3002</li><li><code>\\H</code>: \u5B8C\u6574\u7684\u4E3B\u673A\u540D\u3002</li><li><code>\\j</code>: \u8FD0\u884C\u5728\u5F53\u524D Shell \u4F1A\u8BDD\u7684\u5DE5\u4F5C\u6570\u3002</li><li><code>\\l</code>: \u5F53\u524D\u7EC8\u7AEF\u8BBE\u5907\u540D\u3002</li><li><code>\\n</code>: \u4E00\u4E2A\u6362\u884C\u7B26\u3002</li><li><code>\\r</code>: \u4E00\u4E2A\u56DE\u8F66\u7B26\u3002</li><li><code>\\s</code>: Shell \u7684\u540D\u79F0\u3002</li><li><code>\\t</code>: 24 \u5C0F\u65F6\u5236\u7684 <code>hours:minutes:seconds</code> \u683C\u5F0F\u8868\u793A\u5F53\u524D\u65F6\u95F4\u3002</li><li><code>\\T</code>: 12 \u5C0F\u65F6\u5236\u7684\u5F53\u524D\u65F6\u95F4\u3002</li><li><code>\\@</code>: 12 \u5C0F\u65F6\u5236\u7684 <code>AM/PM</code> \u683C\u5F0F\u8868\u793A\u5F53\u524D\u65F6\u95F4\u3002</li><li><code>\\A</code>: 24 \u5C0F\u65F6\u5236\u7684 <code>hours:minutes</code> \u8868\u793A\u5F53\u524D\u65F6\u95F4\u3002</li><li><code>\\u</code>: \u5F53\u524D\u7528\u6237\u540D\u3002</li><li><code>\\v</code>: Shell \u7684\u7248\u672C\u53F7\u3002</li><li><code>\\V</code>: Shell \u7684\u7248\u672C\u53F7\u548C\u53D1\u5E03\u53F7\u3002</li><li><code>\\w</code>: \u5F53\u524D\u7684\u5DE5\u4F5C\u8DEF\u5F84\u3002</li><li><code>\\W</code>: \u5F53\u524D\u76EE\u5F55\u540D\u3002</li><li><code>\\!</code>: \u5F53\u524D\u547D\u4EE4\u5728\u547D\u4EE4\u5386\u53F2\u4E2D\u7684\u7F16\u53F7\u3002</li><li><code>\\#</code>: \u5F53\u524D shell \u4F1A\u8BDD\u4E2D\u7684\u547D\u4EE4\u6570\u3002</li><li><code>\\$</code>: \u666E\u901A\u7528\u6237\u663E\u793A\u4E3A <code>$</code> \u5B57\u7B26\uFF0C\u6839\u7528\u6237\u663E\u793A\u4E3A <code>#</code> \u5B57\u7B26\u3002</li><li><code>\\[</code>: \u975E\u6253\u5370\u5B57\u7B26\u5E8F\u5217\u7684\u5F00\u59CB\u6807\u5FD7\u3002</li><li><code>\\]</code>: \u975E\u6253\u5370\u5B57\u7B26\u5E8F\u5217\u7684\u7ED3\u675F\u6807\u5FD7\u3002</li></ul><p>\u4E3E\u4F8B\u6765\u8BF4\uFF0C<code>[\\u@\\h \\W]\\$</code> \u8FD9\u4E2A\u63D0\u793A\u7B26\u5B9A\u4E49\uFF0C\u663E\u793A\u51FA\u6765\u5C31\u662F <code>[user@host ~]$</code> (\u5177\u4F53\u7684\u663E\u793A\u5185\u5BB9\u53D6\u51B3\u4E8E\u60A8\u7684\u7CFB\u7EDF)\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>user@host ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$PS1</span>
<span class="token punctuation">[</span><span class="token punctuation">\\</span>u@<span class="token punctuation">\\</span>h <span class="token punctuation">\\</span>W<span class="token punctuation">]</span><span class="token punctuation">\\</span>$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6539\u5199 <code>PS1</code> \u53D8\u91CF\uFF0C\u5C31\u53EF\u4EE5\u6539\u53D8\u8FD9\u4E2A\u547D\u4EE4\u63D0\u793A\u7B26\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">&quot;\\A \\h \\$ &quot;</span>
<span class="token number">17</span>:33 <span class="token function">host</span> $
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6CE8\u610F\uFF0C<code>$</code> \u540E\u9762\u6700\u597D\u8DDF\u4E00\u4E2A\u7A7A\u683C\uFF0C\u8FD9\u6837\u7684\u8BDD\uFF0C\u7528\u6237\u7684\u8F93\u5165\u4E0E\u63D0\u793A\u7B26\u5C31\u4E0D\u4F1A\u8FDE\u5728\u4E00\u8D77\u3002</p><h2 id="\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u989C\u8272" aria-hidden="true">#</a> \u989C\u8272</h2><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u547D\u4EE4\u63D0\u793A\u7B26\u662F\u663E\u793A\u7EC8\u7AEF\u9884\u5B9A\u4E49\u7684\u989C\u8272\u3002Bash \u5141\u8BB8\u81EA\u5B9A\u4E49\u63D0\u793A\u7B26\u989C\u8272\u3002</p><p>\u4F7F\u7528\u4E0B\u9762\u7684\u4EE3\u7801\uFF0C\u53EF\u4EE5\u8BBE\u5B9A\u5176\u540E\u6587\u672C\u7684\u989C\u8272\u3002</p><ul><li><code>\\033[0;30m</code>: \u9ED1\u8272</li><li><code>\\033[1;30m</code>: \u6DF1\u7070\u8272</li><li><code>\\033[0;31m</code>: \u7EA2\u8272</li><li><code>\\033[1;31m</code>: \u6D45\u7EA2\u8272</li><li><code>\\033[0;32m</code>: \u7EFF\u8272</li><li><code>\\033[1;32m</code>: \u6D45\u7EFF\u8272</li><li><code>\\033[0;33m</code>: \u68D5\u8272</li><li><code>\\033[1;33m</code>: \u9EC4\u8272</li><li><code>\\033[0;34m</code>: \u84DD\u8272</li><li><code>\\033[1;34m</code>: \u6D45\u84DD\u8272</li><li><code>\\033[0;35m</code>: \u7C89\u7EA2</li><li><code>\\033[1;35m</code>: \u6D45\u7C89\u8272</li><li><code>\\033[0;36m</code>: \u9752\u8272</li><li><code>\\033[1;36m</code>: \u6D45\u9752\u8272</li><li><code>\\033[0;37m</code>: \u6D45\u7070\u8272</li><li><code>\\033[1;37m</code>: \u767D\u8272</li></ul><p>\u4E3E\u4F8B\u6765\u8BF4\uFF0C\u5982\u679C\u8981\u5C06\u63D0\u793A\u7B26\u8BBE\u4E3A\u7EA2\u8272\uFF0C\u53EF\u4EE5\u5C06 <code>PS1</code> \u8BBE\u6210\u4E0B\u9762\u7684\u4EE3\u7801\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">&#39;\\[\\033[0;31m\\]&lt;\\u@\\h \\W&gt;\\$&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F46\u662F\uFF0C\u4E0A\u9762\u8FD9\u6837\u8BBE\u7F6E\u4EE5\u540E\uFF0C\u7528\u6237\u5728\u63D0\u793A\u7B26\u540E\u9762\u8F93\u5165\u7684\u6587\u672C\u4E5F\u662F\u7EA2\u8272\u7684\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C \u53EF\u4EE5\u5728\u7ED3\u5C3E\u6DFB\u52A0\u53E6\u4E00\u4E2A\u7279\u6B8A\u4EE3\u7801 <code>\\[\\033[00m\\]</code>\uFF0C\u8868\u793A\u5C06\u5176\u540E\u7684\u6587\u672C\u6062\u590D\u5230\u9ED8\u8BA4\u989C\u8272\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">&#39;\\[\\033[0;31m\\]&lt;\\u@\\h \\W&gt;\\$\\[\\033[00m\\]&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9664\u4E86\u8BBE\u7F6E\u524D\u666F\u989C\u8272\uFF0CBash \u8FD8\u5141\u8BB8\u8BBE\u7F6E\u80CC\u666F\u989C\u8272\u3002</p><ul><li><code>\\033[0;40m</code>: \u84DD\u8272</li><li><code>\\033[1;44m</code>: \u9ED1\u8272</li><li><code>\\033[0;41m</code>: \u7EA2\u8272</li><li><code>\\033[1;45m</code>: \u7C89\u7EA2</li><li><code>\\033[0;42m</code>: \u7EFF\u8272</li><li><code>\\033[1;46m</code>: \u9752\u8272</li><li><code>\\033[0;43m</code>: \u68D5\u8272</li><li><code>\\033[1;47m</code>: \u6D45\u7070\u8272</li></ul><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u5E26\u6709\u7EA2\u8272\u80CC\u666F\u7684\u63D0\u793A\u7B26\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable"><span class="token environment constant">PS1</span></span><span class="token operator">=</span><span class="token string">&#39;\\[\\033[0;41m\\]&lt;\\u@\\h \\W&gt;\\$\\[\\033[0m\\] &#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u73AF\u5883\u53D8\u91CF-ps2-ps3-ps4" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF-ps2-ps3-ps4" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF PS2\uFF0CPS3\uFF0CPS4</h2><p>\u9664\u4E86 <code>PS1</code>\uFF0CBash \u8FD8\u63D0\u4F9B\u4E86\u63D0\u793A\u7B26\u76F8\u5173\u7684\u53E6\u5916\u4E09\u4E2A\u73AF\u5883\u53D8\u91CF\u3002</p><p>\u73AF\u5883\u53D8\u91CF <code>PS2</code> \u662F\u547D\u4EE4\u884C\u6298\u884C\u8F93\u5165\u65F6\u7CFB\u7EDF\u7684\u63D0\u793A\u7B26\uFF0C\u9ED8\u8BA4\u4E3A <code>&gt;</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello
&gt; world&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C\u8F93\u5165 <code>hello</code> \u4EE5\u540E\u6309\u4E0B\u56DE\u8F66\u952E\uFF0C\u7CFB\u7EDF\u4F1A\u63D0\u793A\u7EE7\u7EED\u8F93\u5165\u3002\u8FD9\u65F6\uFF0C\u7B2C\u4E8C\u884C\u663E\u793A\u7684\u63D0\u793A\u7B26\u5C31\u662F <code>PS2</code> \u5B9A\u4E49\u7684 <code>&gt;</code>\u3002</p><p>\u73AF\u5883\u53D8\u91CF <code>PS3</code> \u662F\u4F7F\u7528 <code>select</code> \u547D\u4EE4\u65F6\uFF0C\u7CFB\u7EDF\u8F93\u5165\u83DC\u5355\u7684\u63D0\u793A\u7B26\u3002</p><p>\u73AF\u5883\u53D8\u91CF <code>PS4</code> \u9ED8\u8BA4\u4E3A <code>+</code>\u3002\u5B83\u662F\u4F7F\u7528 Bash \u7684 <code>-x</code> \u53C2\u6570\u6267\u884C\u811A\u672C\u65F6\uFF0C\u6BCF\u4E00\u884C\u547D\u4EE4\u5728\u6267\u884C\u524D\u90FD\u4F1A\u5148\u6253\u5370\u51FA\u6765\uFF0C\u5E76\u4E14\u5728\u884C\u9996\u51FA\u73B0\u7684\u90A3\u4E2A\u63D0\u793A\u7B26\u3002</p><p>\u6BD4\u5982\u4E0B\u9762\u662F\u811A\u672C <code>test.sh</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;hello world&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 <code>-x</code> \u53C2\u6570\u6267\u884C\u8FD9\u4E2A\u811A\u672C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">bash</span> -x test.sh
+ <span class="token builtin class-name">echo</span> <span class="token string">&#39;hello world&#39;</span>
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u8F93\u51FA\u7684\u7B2C\u4E00\u884C\u524D\u9762\u6709\u4E00\u4E2A <code>+</code>\uFF0C\u8FD9\u5C31\u662F\u53D8\u91CF <code>PS4</code> \u5B9A\u4E49\u7684\u3002</p>`,37),o=[d];function l(i,t){return s(),n("div",null,o)}var u=e(c,[["render",l],["__file","prompt.html.vue"]]);export{u as default};
