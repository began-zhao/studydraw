<template><div><h1 id="用户管理" tabindex="-1"><a class="header-anchor" href="#用户管理" aria-hidden="true">#</a> 用户管理</h1>
<h2 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h2>
<p><code v-pre>id</code> 命令用于查看指定用户的用户名和组名。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">id</span>
<span class="token assign-left variable">uid</span><span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span> <span class="token assign-left variable">gid</span><span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span> <span class="token assign-left variable">groups</span><span class="token operator">=</span><span class="token number">500</span><span class="token punctuation">(</span>me<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>id</code> 输出结果分为三个部分，分别是 UID(用户编号和用户名)、GID(组编号和组名)，groups(用户所在的所有组)。</p>
<p>用户帐户的信息，存放在<code v-pre>/etc/passwd</code> 文件里面；用户组的信息，存放在<code v-pre>/etc/group</code> 文件里面。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 返回UID</span>
$ <span class="token function">id</span> -u <span class="token punctuation">[</span>UserName<span class="token punctuation">]</span>

<span class="token comment"># 返回GID</span>
$ <span class="token function">id</span> -g <span class="token punctuation">[</span>UserName<span class="token punctuation">]</span>

<span class="token comment"># 返回用户名</span>
$ <span class="token function">id</span> -un <span class="token punctuation">[</span>UserName<span class="token punctuation">]</span>

<span class="token comment"># 返回组名</span>
$ <span class="token function">id</span> -gn <span class="token punctuation">[</span>UserName<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的命令，如果省略用户名，则返回当前用户的信息。</p>
<h2 id="su" tabindex="-1"><a class="header-anchor" href="#su" aria-hidden="true">#</a> su</h2>
<p><code v-pre>su</code> 命令允许您以另一个用户的身份，启动一个新的 shell 会话，或者是以这个用户的身份来发布一个命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">su</span> otherUser
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行上面的命令以后，系统会提示输入密码。通过以后，就以另一个用户身份在执行命令了。</p>
<p>如果不加用户名，则表示切换到 root 用户。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">su</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>-l</code> 参数表示启动一个需要登录的新的 Shell，这意味着工作目录会切换到该用户的主目录。它的缩写形式是 <code v-pre>-</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">su</span> -
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令表示，切换到 root 用户的身份，且工作目录也切换到 root 用户的主目录。</p>
<p><code v-pre>-c</code> 参数表示只以其他用户的身份，执行单个命令，而不是启动一个新的 Session。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">su</span> -c <span class="token string">'command'</span>

<span class="token comment"># 实例</span>
$ <span class="token function">su</span> -c <span class="token string">'ls -l /root/*'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sudo" tabindex="-1"><a class="header-anchor" href="#sudo" aria-hidden="true">#</a> sudo</h2>
<p><code v-pre>sudo</code> 命令很类似 <code v-pre>su</code> 命令，但有几点差别。</p>
<ul>
<li>对于管理员来说，<code v-pre>sudo</code> 命令的可配置性更高</li>
<li><code v-pre>sudo</code> 命令通常只用于执行单个命令，而不是开启另一个 Session。</li>
<li><code v-pre>sudo</code> 命令不要求超级用户的密码，而是用户使自己的密码来认证。</li>
</ul>
<p><code v-pre>sudo</code> 的设置在文件<code v-pre>/etc/sudoers</code> 之中。</p>
<p><code v-pre>-l</code> 参数列出用户拥有的所有权限。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="chown" tabindex="-1"><a class="header-anchor" href="#chown" aria-hidden="true">#</a> chown</h2>
<p><code v-pre>chown</code> 命令用来更改文件或目录的所有者和用户组。使用这个命令需要超级用户权限。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">chown</span> <span class="token punctuation">[</span>owner<span class="token punctuation">]</span><span class="token punctuation">[</span>:<span class="token punctuation">[</span>group<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下面是一些例子。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 更改文件所有者</span>
$ <span class="token function">sudo</span> <span class="token function">chown</span> bob foo.txt

<span class="token comment"># 更改文件所有者和用户组</span>
$ <span class="token function">sudo</span> <span class="token function">chown</span> bob:users foo.txt

<span class="token comment"># 更改用户组</span>
$ <span class="token function">sudo</span> <span class="token function">chown</span> :admins foo.txt

<span class="token comment"># 更改文件所有者和用户组(用户 bob 登录系统时，所属的用户组)</span>
$ <span class="token function">sudo</span> <span class="token function">chown</span> bob: foo.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chgrp" tabindex="-1"><a class="header-anchor" href="#chgrp" aria-hidden="true">#</a> chgrp</h2>
<p><code v-pre>chgrp</code> 命令更改用户组，用法与 <code v-pre>chown</code> 命令类似。</p>
<h2 id="useradd" tabindex="-1"><a class="header-anchor" href="#useradd" aria-hidden="true">#</a> useradd</h2>
<p><code v-pre>useradd</code> 命令用来新增用户。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">useradd</span> -G admin -d /home/bill -s /bin/bash -m bill
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面命令新增用户 <code v-pre>bill</code>，参数 <code v-pre>-G</code> 指定用户所在的组，参数 <code v-pre>d</code> 指定用户的主目录，参数 <code v-pre>s</code> 指定用户的 Shell，参数 <code v-pre>m</code> 表示如果该目录不存在，则创建该目录。</p>
<h2 id="usermod" tabindex="-1"><a class="header-anchor" href="#usermod" aria-hidden="true">#</a> usermod</h2>
<p><code v-pre>usermod</code> 命令用来修改用户的各项属性。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">usermod</span> -g sales jerry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令修改用户 <code v-pre>jerry</code> 属于的主要用户组为 <code v-pre>sales</code>。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">usermod</span> -G sales jerry
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面的命令修改用户 <code v-pre>jerry</code> 属于的次要用户组为 <code v-pre>sales</code>。</p>
<h2 id="adduser" tabindex="-1"><a class="header-anchor" href="#adduser" aria-hidden="true">#</a> adduser</h2>
<p><code v-pre>adduser</code> 命令用来将一个用户加入用户组。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> adduser username grouptoadd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="groupadd" tabindex="-1"><a class="header-anchor" href="#groupadd" aria-hidden="true">#</a> groupadd</h2>
<p><code v-pre>groupadd</code> 命令用来新建一个用户组。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">groupadd</span> group1
<span class="token function">sudo</span> adduser foobar group1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="groupdel" tabindex="-1"><a class="header-anchor" href="#groupdel" aria-hidden="true">#</a> groupdel</h2>
<p><code v-pre>groupdel</code> 命令用来删除一个用户组。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">groupdel</span> group1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="passwd" tabindex="-1"><a class="header-anchor" href="#passwd" aria-hidden="true">#</a> passwd</h2>
<p><code v-pre>passwd</code> 命令用于修改密码。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 修改自己的密码</span>
$ <span class="token function">passwd</span>

<span class="token comment"># 修改其他用户的密码</span>
$ <span class="token function">sudo</span> <span class="token function">passwd</span> <span class="token punctuation">[</span>user<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
