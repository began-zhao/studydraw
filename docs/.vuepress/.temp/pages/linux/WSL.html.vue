<template><div><p>WSL 可以直接在 Windows 系统上安装并运行 Linux。目前最新的版本是 WSL2。</p>
<!-- more -->
<h2 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> Ubuntu</h2>
<p>Windows 上的功能有很大缺失。已知不能用 Snap。</p>
<h2 id="wsl-文件位置" tabindex="-1"><a class="header-anchor" href="#wsl-文件位置" aria-hidden="true">#</a> WSL 文件位置</h2>
<div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code>C:\Users\%USERNAME%\AppData\Local\Packages\CanonicalGroupLimited.UbuntuonWindows_79rhkp1fndgsc\LocalState\rootfs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="重启-wsl" tabindex="-1"><a class="header-anchor" href="#重启-wsl" aria-hidden="true">#</a> 重启 WSL</h2>
<p>使用</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>net stop LxssManager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>和</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>net start LxssManager
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
