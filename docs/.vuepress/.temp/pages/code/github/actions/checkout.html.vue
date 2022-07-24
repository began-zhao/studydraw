<template><div><p>该操作将检出您的存储库 <code v-pre>$GITHUB_WORKSPACE</code>，使您的工作流可以访问它。</p>
<!-- more -->
<p>默认情况下，对于触发工作流的 ref / SHA，为了速度仅提取一次提交。如需获取所有分支和标签的所有历史记录，需要设置设置 <code v-pre>fetch-depth: 0</code>。</p>
<p>身份验证令牌保留在本地 Git 配置中。这使您的脚本可以运行经过身份验证的 Git 命令。在工作后清理期间将删除令牌。</p>
<p>设置 <code v-pre>persist-credentials: false</code> 取消保留。</p>
<h2 id="常用参数" tabindex="-1"><a class="header-anchor" href="#常用参数" aria-hidden="true">#</a> 常用参数</h2>
<h3 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h3>
<p>需要检出的 ref，即可以填入特定分支、commitID 或 tag。默认为触发当前工作流的 ref。</p>
<h3 id="token" tabindex="-1"><a class="header-anchor" href="#token" aria-hidden="true">#</a> token</h3>
<p>个人访问令牌，又称 Personal access token (PAT)，用于配置机器 Git 配置，以运行需要身份验证的 Git 命令，详见 <RouterLink to="/code/github/token.html">GitHub Token</RouterLink>。</p>
<div v-pre>
<p>默认为工作流提供的 <code v-pre>${{ github.token }}</code></p>
</div>
<h3 id="fetch-depth" tabindex="-1"><a class="header-anchor" href="#fetch-depth" aria-hidden="true">#</a> fetch-depth</h3>
<p>要获取的提交数。 <code v-pre>0</code> 表示所有分支和标签的所有历史记录。</p>
<p>默认为 <code v-pre>1</code></p>
<h3 id="submodules" tabindex="-1"><a class="header-anchor" href="#submodules" aria-hidden="true">#</a> submodules</h3>
<p>是否检出子模块。<code v-pre>true</code> 检出子模块 <code v-pre>recursive</code> 会递归检出子模块。</p>
<p>默认为 <code v-pre>false</code></p>
<h2 id="其他参数" tabindex="-1"><a class="header-anchor" href="#其他参数" aria-hidden="true">#</a> 其他参数</h2>
<h3 id="repository" tabindex="-1"><a class="header-anchor" href="#repository" aria-hidden="true">#</a> repository</h3>
<p>带有作者的仓库名，如 <code v-pre>Hope-Studio/innenu-app</code>，默认为当前仓库。</p>
<h3 id="persist-credentials" tabindex="-1"><a class="header-anchor" href="#persist-credentials" aria-hidden="true">#</a> persist-credentials</h3>
<p>是否将 token 等信息用于本地的 Git 配置，以便后续 Git 命令可以访问。</p>
<h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h3>
<p><code v-pre>$GITHUB_WORKSPACE</code> 下用于放置存储库的相对路径</p>
<p>默认为 <code v-pre>./</code></p>
<h3 id="ssh-key" tabindex="-1"><a class="header-anchor" href="#ssh-key" aria-hidden="true">#</a> ssh-key</h3>
<p>用于获取仓库的 SSH 私钥，用于配置机器 Git 配置，以运行需要身份验证的 Git 命令。</p>
<div class="custom-container tip"><p class="custom-container-title">提示</p>
<p>默认的 token 有权限拉取工作流所在的仓库。</p>
<p>如果仓库包含了存放于其他代码托管商或私有的 submodules，或是的仓库，可能需要设置上述两选项之一，才能拉取对应 submodule。</p>
</div>
<h3 id="ssh-known-hosts" tabindex="-1"><a class="header-anchor" href="#ssh-known-hosts" aria-hidden="true">#</a> ssh-known-hosts</h3>
<p>除了用户和全局主机密钥数据库外的已知主机。可以使用 <code v-pre>ssh-keyscan</code> 获得主机的公共 SSH 密钥。 例如，<code v-pre>ssh-keyscan github.com</code>。 <a href="http://github.com" target="_blank" rel="noopener noreferrer">github.com<ExternalLinkIcon/></a> 的公钥总是隐式添加的。</p>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<p>当您需要获取其他代码托管商的仓库时，需要设置此选项</p>
</div>
<h3 id="ssh-strict" tabindex="-1"><a class="header-anchor" href="#ssh-strict" aria-hidden="true">#</a> ssh-strict</h3>
<p>是否进行严格的 ssh 校验，默认为 <code v-pre>true</code>，即不检查 IP，而是检查 Host 给出的密钥指纹是否匹配。</p>
<h3 id="clean" tabindex="-1"><a class="header-anchor" href="#clean" aria-hidden="true">#</a> clean</h3>
<p>是否在拉取代码前执行 <code v-pre>git clean -ffdx &amp;&amp; git reset --hard HEAD</code>。</p>
<p>默认为 <code v-pre>true</code></p>
<h3 id="lfs" tabindex="-1"><a class="header-anchor" href="#lfs" aria-hidden="true">#</a> lfs</h3>
<p>是否下载 Git-LFS 文件。</p>
<p>默认为 <code v-pre>false</code></p>
<h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2>
<ul>
<li>
<p>获取所有标签与历史:</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>检出特定分支</p>
</li>
</ul>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">ref</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p>检出 <code v-pre>HEAD^</code></p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> git checkout HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>并列检出多个 repo</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> main

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout tools repo
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">repository</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>org/my<span class="token punctuation">-</span>tools
    <span class="token key atrule">path</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>嵌套检出多个 repo</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout tools repo
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">repository</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>org/my<span class="token punctuation">-</span>tools
    <span class="token key atrule">path</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>检出多个私有 repo</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> main

<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout private tools
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">repository</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>org/my<span class="token punctuation">-</span>private<span class="token punctuation">-</span>tools
    <span class="token key atrule">token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.GitHub_PAT <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment"># `GitHub_PAT` is a secret that contains your PAT</span>
    <span class="token key atrule">path</span><span class="token punctuation">:</span> my<span class="token punctuation">-</span>tools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<div class="custom-container info"><p class="custom-container-title">相关信息</p>
<div v-pre>
<p><code v-pre>${{ github.token }}</code> 仅限于当前存储库，因此，如果要签出其他私有存储库，则需要提供自己的 PAT。</p>
</div>
</div>
<ul>
<li>
<p>检出 PR HEAD commit 而不是 merge commit</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">ref</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> github.event.pull_request.head.sha <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>当关闭 PR 时将其检出</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">pull_request</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>main<span class="token punctuation">]</span>
    <span class="token key atrule">types</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>opened<span class="token punctuation">,</span> synchronize<span class="token punctuation">,</span> closed<span class="token punctuation">]</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>使用内置 token 进行提交</p>
<div class="language-yaml ext-yml line-numbers-mode"><pre v-pre class="language-yaml"><code><span class="token key atrule">on</span><span class="token punctuation">:</span> push
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
      <span class="token punctuation">-</span> <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          date > generated.txt
          git config user.name github-actions
          git config user.email github-actions@github.com
          git add .
          git commit -m "generated"
          git push</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h2 id="地址" tabindex="-1"><a class="header-anchor" href="#地址" aria-hidden="true">#</a> 地址</h2>
<p>地址: <a href="https://github.com/actions/checkout" target="_blank" rel="noopener noreferrer">https://github.com/actions/checkout<ExternalLinkIcon/></a></p>
</div></template>
