<template><div><h1 id="开发软件" tabindex="-1"><a class="header-anchor" href="#开发软件" aria-hidden="true">#</a> 开发软件</h1>
<h2 id="安装-vs-code" tabindex="-1"><a class="header-anchor" href="#安装-vs-code" aria-hidden="true">#</a> 安装 VS Code</h2>
<ul>
<li>
<p>使用 snap</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> snap <span class="token function">install</span> --classic code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>在 WSL 环境下 snap 无法使用，则使用以下命令安装 code 库。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> https://packages.microsoft.com/keys/microsoft.asc <span class="token operator">|</span> gpg --dearmor <span class="token operator">></span> packages.microsoft.gpg
<span class="token function">sudo</span> <span class="token function">install</span> -o root -g root -m <span class="token number">644</span> packages.microsoft.gpg /usr/share/keyrings/
<span class="token function">sudo</span> <span class="token function">sh</span> -c <span class="token string">'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后正常安装:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> apt-transport-https
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> code <span class="token comment"># or code-insiders</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<p>可能还需要安装</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> libx11-xcb1 libasound2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="remote-插件安装" tabindex="-1"><a class="header-anchor" href="#remote-插件安装" aria-hidden="true">#</a> remote 插件安装</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>code --install-extension ms-vscode-remote.vscode-remote-extensionpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> nvm</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 Linux 上可能需要重新链接终端，命令才可用。</p>
<p>测试命令，输入 <code v-pre>nvm</code> 即安装成功:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">command</span> -v nvm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装命令:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nvm <span class="token function">install</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换命令:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>nvm use <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="安装-git" tabindex="-1"><a class="header-anchor" href="#安装-git" aria-hidden="true">#</a> 安装 Git</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository ppa:git-core/ppa

<span class="token function">sudo</span> <span class="token function">apt-get</span> update

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> yarn</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -sS https://dl.yarnpkg.com/debian/pubkey.gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
<span class="token builtin class-name">echo</span> <span class="token string">"deb https://dl.yarnpkg.com/debian/ stable main"</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/yarn.list
<span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试是否安装成功:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
