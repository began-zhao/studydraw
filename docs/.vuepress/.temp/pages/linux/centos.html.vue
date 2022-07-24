<template><div><h2 id="管理工具" tabindex="-1"><a class="header-anchor" href="#管理工具" aria-hidden="true">#</a> 管理工具</h2>
<ul>
<li>yum (Centos 7)</li>
<li>dnf (Centos 8)</li>
</ul>
<h2 id="yarn" tabindex="-1"><a class="header-anchor" href="#yarn" aria-hidden="true">#</a> yarn</h2>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> --silent --location https://dl.yarnpkg.com/rpm/yarn.repo <span class="token operator">|</span> <span class="token function">sudo</span> <span class="token function">tee</span> /etc/yum.repos.d/yarn.repo

<span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token function">yarn</span>
<span class="token comment">## OR ##</span>
<span class="token function">sudo</span> dnf <span class="token function">install</span> <span class="token function">yarn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试是否安装成功:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
