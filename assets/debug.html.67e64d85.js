import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as a,e}from"./app.b9e78213.js";const i={},c=e(`<h1 id="\u5F00\u53D1\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5F00\u53D1\u8F6F\u4EF6" aria-hidden="true">#</a> \u5F00\u53D1\u8F6F\u4EF6</h1><h2 id="\u5B89\u88C5-vs-code" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-vs-code" aria-hidden="true">#</a> \u5B89\u88C5 VS Code</h2><ul><li><p>\u4F7F\u7528 snap</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> snap <span class="token function">install</span> --classic code
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5728 WSL \u73AF\u5883\u4E0B snap \u65E0\u6CD5\u4F7F\u7528\uFF0C\u5219\u4F7F\u7528\u4EE5\u4E0B\u547D\u4EE4\u5B89\u88C5 code \u5E93\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> https://packages.microsoft.com/keys/microsoft.asc <span class="token operator">|</span> gpg --dearmor <span class="token operator">&gt;</span> packages.microsoft.gpg
<span class="token function">sudo</span> <span class="token function">install</span> -o root -g root -m <span class="token number">644</span> packages.microsoft.gpg /usr/share/keyrings/
<span class="token function">sudo</span> <span class="token function">sh</span> -c <span class="token string">&#39;echo &quot;deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main&quot; &gt; /etc/apt/sources.list.d/vscode.list&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7136\u540E\u6B63\u5E38\u5B89\u88C5:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> apt-transport-https
<span class="token function">sudo</span> <span class="token function">apt-get</span> update
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> code <span class="token comment"># or code-insiders</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>\u53EF\u80FD\u8FD8\u9700\u8981\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> libx11-xcb1 libasound2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="remote-\u63D2\u4EF6\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#remote-\u63D2\u4EF6\u5B89\u88C5" aria-hidden="true">#</a> remote \u63D2\u4EF6\u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>code --install-extension ms-vscode-remote.vscode-remote-extensionpack
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> nvm</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.1/install.sh <span class="token operator">|</span> <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5728 Linux \u4E0A\u53EF\u80FD\u9700\u8981\u91CD\u65B0\u94FE\u63A5\u7EC8\u7AEF\uFF0C\u547D\u4EE4\u624D\u53EF\u7528\u3002</p><p>\u6D4B\u8BD5\u547D\u4EE4\uFF0C\u8F93\u5165 <code>nvm</code> \u5373\u5B89\u88C5\u6210\u529F:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">command</span> -v nvm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm <span class="token function">install</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5207\u6362\u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>nvm use <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5-git" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-git" aria-hidden="true">#</a> \u5B89\u88C5 Git</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> add-apt-repository ppa:git-core/ppa

<span class="token function">sudo</span> <span class="token function">apt-get</span> update

<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> yarn</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -sS https://dl.yarnpkg.com/debian/pubkey.gpg <span class="token operator">|</span> <span class="token function">sudo</span> apt-key <span class="token function">add</span> -
<span class="token builtin class-name">echo</span> <span class="token string">&quot;deb https://dl.yarnpkg.com/debian/ stable main&quot;</span> <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/apt/sources.list.d/yarn.list
<span class="token function">sudo</span> <span class="token function">apt-get</span> update <span class="token operator">&amp;&amp;</span> <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6D4B\u8BD5\u662F\u5426\u5B89\u88C5\u6210\u529F:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">yarn</span> --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,22),t=[c];function o(l,d){return n(),a("div",null,t)}var u=s(i,[["render",o],["__file","debug.html.vue"]]);export{u as default};
