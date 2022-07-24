<template><div><h2 id="docker介绍" tabindex="-1"><a class="header-anchor" href="#docker介绍" aria-hidden="true">#</a> Docker介绍</h2>
<h3 id="什么是-docker" tabindex="-1"><a class="header-anchor" href="#什么是-docker" aria-hidden="true">#</a> 什么是 Docker？</h3>
<p>说实话关于 Docker 是什么并不太好说，下面我通过四点向你说明 Docker 到底是个什么东西。</p>
<ul>
<li>Docker 是世界领先的软件容器平台，基于 <strong>Go 语言</strong> 进行开发实现。</li>
<li>Docker 能够自动执行重复性任务，例如搭建和配置开发环境，从而解放开发人员。</li>
<li>用户可以方便地创建和使用容器，把自己的应用放入容器。容器还可以进行版本管理、复制、分享、修改，就像管理普通的代码一样。</li>
<li>Docker 可以<strong>对进程进行封装隔离，属于操作系统层面的虚拟化技术。</strong> 由于隔离的进程独立于宿主和其它的隔离的进程，因此也称其为容器。</li>
</ul>
<p>官网地址：<a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">https://www.docker.com/<ExternalLinkIcon/></a> 。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-7/container.png" alt="认识容器" loading="lazy"></p>
<h3 id="为什么要用-docker" tabindex="-1"><a class="header-anchor" href="#为什么要用-docker" aria-hidden="true">#</a> 为什么要用 Docker?</h3>
<p>Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。</p>
<p>容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app），更重要的是容器性能开销极低。</p>
<p>传统的开发流程中，我们的项目通常需要使用 MySQL、Redis、FastDFS 等等环境，这些环境都是需要我们手动去进行下载并配置的，安装配置流程极其复杂，而且不同系统下的操作也不一样。</p>
<p>Docker 的出现完美地解决了这一问题，我们可以在容器中安装 MySQL、Redis 等软件环境，使得应用和环境架构分开，它的优势在于：</p>
<ol>
<li>一致的运行环境，能够更轻松地迁移</li>
<li>对进程进行封装隔离，容器与容器之间互不影响，更高效地利用系统资源</li>
<li>可以通过镜像复制多个一致的容器</li>
</ol>
<p>另外，<a href="https://yeasy.gitbook.io/docker_practice/introduction/why" target="_blank" rel="noopener noreferrer">《Docker 从入门到实践》<ExternalLinkIcon/></a> 这本开源书籍中也已经给出了使用 Docker 的原因。</p>
<p><img src="https://img-blog.csdnimg.cn/20210412220015698.png" alt="" loading="lazy"></p>
<h2 id="docker-的安装" tabindex="-1"><a class="header-anchor" href="#docker-的安装" aria-hidden="true">#</a> Docker 的安装</h2>
<h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3>
<p>接下来对 Docker 进行安装，以 Windows 系统为例，访问 Docker 的官网：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-4e3146984adaee0067bdc5e9b1d757bb479.png" alt="" loading="lazy"></p>
<p>然后点击<code v-pre>Get Started</code>：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-96adfbfebe3e59097c8ba25e55f68ba7908.png" alt="" loading="lazy"></p>
<p>在此处点击<code v-pre>Download for Windows</code>即可进行下载。</p>
<p>如果你的电脑是<code v-pre>Windows 10 64位专业版</code>的操作系统，则在安装 Docker 之前需要开启一下<code v-pre>Hyper-V</code>，开启方式如下。打开控制面板，选择程序：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-73ce678240826de0f49225250a970b4d205.png" alt="" loading="lazy"></p>
<p>点击<code v-pre>启用或关闭Windows功能</code>：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-9c7a96c332e56b9506325a1f1fdb608a659.png" alt="" loading="lazy"></p>
<p>勾选上<code v-pre>Hyper-V</code>，点击确定即可：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-aad4a58c5e917f7185908d6320d7fb06861.png" alt="" loading="lazy"></p>
<p>完成更改后需要重启一下计算机。</p>
<p>开启了<code v-pre>Hyper-V</code>后，我们就可以对 Docker 进行安装了，打开安装程序后，等待片刻点击<code v-pre>Ok</code>即可：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-62ac3c9184bdc21387755294613ff5054c6.png" alt="" loading="lazy"></p>
<p>安装完成后，我们仍然需要重启计算机，重启后，若提示如下内容：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-3585c7d6a4632134ed925493a7d43e14a43.png" alt="" loading="lazy"></p>
<p>它的意思是询问我们是否使用 WSL2，这是基于 Windows 的一个 Linux 子系统，这里我们取消即可，它就会使用我们之前勾选的<code v-pre>Hyper-V</code>虚拟机。</p>
<p>因为是图形界面的操作，这里就不介绍 Docker Desktop 的具体用法了。</p>
<h3 id="mac" tabindex="-1"><a class="header-anchor" href="#mac" aria-hidden="true">#</a> Mac</h3>
<p>直接使用 Homebrew 安装即可</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>brew <span class="token function">install</span> --cask <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3>
<p>下面来看看 Linux 中如何安装 Docker，这里以 CentOS7 为例。</p>
<p>在测试或开发环境中，Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，执行这个脚本后就会自动地将一切准备工作做好，并且把 Docker 的稳定版本安装在系统中。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">curl</span> -fsSL get.docker.com -o get-docker.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sh</span> get-docker.sh --mirror Aliyun
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装完成后直接启动服务：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>推荐设置开机自启，执行指令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="docker-中的几个概念" tabindex="-1"><a class="header-anchor" href="#docker-中的几个概念" aria-hidden="true">#</a> Docker 中的几个概念</h2>
<p>在正式学习 Docker 之前，我们需要了解 Docker 中的几个核心概念：</p>
<h3 id="镜像" tabindex="-1"><a class="header-anchor" href="#镜像" aria-hidden="true">#</a> 镜像</h3>
<p>镜像就是一个只读的模板，镜像可以用来创建 Docker 容器，一个镜像可以创建多个容器</p>
<h3 id="容器" tabindex="-1"><a class="header-anchor" href="#容器" aria-hidden="true">#</a> 容器</h3>
<p>容器是用镜像创建的运行实例，Docker 利用容器独立运行一个或一组应用。它可以被启动、开始、停止、删除，每个容器都是相互隔离的、保证安全的平台。 可以把容器看作是一个简易的 Linux 环境和运行在其中的应用程序。容器的定义和镜像几乎一模一样，也是一堆层的统一视角，唯一区别在于容器的最上面那一层是可读可写的</p>
<h3 id="仓库" tabindex="-1"><a class="header-anchor" href="#仓库" aria-hidden="true">#</a> 仓库</h3>
<p>仓库是集中存放镜像文件的场所。仓库和仓库注册服务器是有区别的，仓库注册服务器上往往存放着多个仓库，每个仓库中又包含了多个镜像，每个镜像有不同的标签。 仓库分为公开仓库和私有仓库两种形式，最大的公开仓库是 DockerHub，存放了数量庞大的镜像供用户下载，国内的公开仓库有阿里云、网易云等</p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<p>通俗点说，一个镜像就代表一个软件；而基于某个镜像运行就是生成一个程序实例，这个程序实例就是容器；而仓库是用来存储 Docker 中所有镜像的。</p>
<p>其中仓库又分为远程仓库和本地仓库，和 Maven 类似，倘若每次都从远程下载依赖，则会大大降低效率，为此，Maven 的策略是第一次访问依赖时，将其下载到本地仓库，第二次、第三次使用时直接用本地仓库的依赖即可，Docker 的远程仓库和本地仓库的作用也是类似的。</p>
<h2 id="docker-初体验" tabindex="-1"><a class="header-anchor" href="#docker-初体验" aria-hidden="true">#</a> Docker 初体验</h2>
<p>下面我们来对 Docker 进行一个初步的使用，这里以下载一个 MySQL 的镜像为例<code v-pre>(在CentOS7下进行)</code>。</p>
<p>和 GitHub 一样，Docker 也提供了一个 DockerHub 用于查询各种镜像的地址和安装教程，为此，我们先访问 DockerHub：<a href="https://hub.docker.com/" target="_blank" rel="noopener noreferrer">https://hub.docker.com/<ExternalLinkIcon/></a></p>
<p><img src="https://oscimg.oschina.net/oscnet/up-37d083cc92fe36aad829e975646b9d27fa0.png" alt="" loading="lazy"></p>
<p>在左上角的搜索框中输入<code v-pre>MySQL</code>并回车：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-ced37002391a059754def9b3a6c2aa4e342.png" alt="" loading="lazy"></p>
<p>可以看到相关 MySQL 的镜像非常多，若右上角有<code v-pre>OFFICIAL IMAGE</code>标识，则说明是官方镜像，所以我们点击第一个 MySQL 镜像：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-48ba3fdc99c93a96e18b929195ca8e93c6c.png" alt="" loading="lazy"></p>
<p>右边提供了下载 MySQL 镜像的指令为<code v-pre>docker pull MySQL</code>，但该指令始终会下载 MySQL 镜像的最新版本。</p>
<p>若是想下载指定版本的镜像，则点击下面的<code v-pre>View Available Tags</code>：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-ed601649275c6cfe65bbe422b463c263a64.png" alt="" loading="lazy"></p>
<p>这里就可以看到各种版本的镜像，右边有下载的指令，所以若是想下载 5.7.32 版本的 MySQL 镜像，则执行：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull MySQL:5.7.32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然而下载镜像的过程是非常慢的，所以我们需要配置一下镜像源加速下载，访问<code v-pre>阿里云</code>官网：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-0a46effd262d3db1b613a0db597efa31f34.png" alt="" loading="lazy"></p>
<p>点击控制台：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-60f198e0106be6b43044969d2900272504f.png" alt="" loading="lazy"></p>
<p>然后点击左上角的菜单，在弹窗的窗口中，将鼠标悬停在产品与服务上，并在右侧搜索容器镜像服务，最后点击容器镜像服务：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-2f6706a979b405dab01bc44a29bb6b26fc4.png" alt="" loading="lazy"></p>
<p>点击左侧的镜像加速器，并依次执行右侧的配置指令即可。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> -p /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">'EOF'
{
  "registry-mirrors": ["https://679xpnpz.mirror.aliyuncs.com"]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-镜像指令" tabindex="-1"><a class="header-anchor" href="#docker-镜像指令" aria-hidden="true">#</a> Docker 镜像指令</h2>
<p>Docker 需要频繁地操作相关的镜像，所以我们先来了解一下 Docker 中的镜像指令。</p>
<p>若想查看 Docker 中当前拥有哪些镜像，则可以使用 <code v-pre>docker images</code> 命令。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@izrcf5u3j3q8xaz ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY    TAG       IMAGE ID       CREATED         SIZE
MySQL         <span class="token number">5.7</span>.32    f07dfa83b528   <span class="token number">11</span> days ago     448MB
tomcat        latest    feba8d001e3f   <span class="token number">2</span> weeks ago     649MB
nginx         latest    ae2feff98a0c   <span class="token number">2</span> weeks ago     133MB
hello-world   latest    bf756fb1ae65   <span class="token number">12</span> months ago   <span class="token number">13</span>.3kB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code v-pre>REPOSITORY</code>为镜像名，<code v-pre>TAG</code>为版本标志，<code v-pre>IMAGE ID</code>为镜像 id(唯一的)，<code v-pre>CREATED</code>为创建时间，注意这个时间并不是我们将镜像下载到 Docker 中的时间，而是镜像创建者创建的时间，<code v-pre>SIZE</code>为镜像大小。</p>
<p>该指令能够查询指定镜像名：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> image MySQL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若如此做，则会查询出 Docker 中的所有 MySQL 镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@izrcf5u3j3q8xaz ~<span class="token punctuation">]</span><span class="token comment"># docker images MySQL</span>
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
MySQL        <span class="token number">5.6</span>       0ebb5600241d   <span class="token number">11</span> days ago     302MB
MySQL        <span class="token number">5.7</span>.32    f07dfa83b528   <span class="token number">11</span> days ago     448MB
MySQL        <span class="token number">5.5</span>       d404d78aa797   <span class="token number">20</span> months ago   205MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该指令还能够携带<code v-pre>-q</code>参数：<code v-pre>docker images -q</code> ， <code v-pre>-q</code>表示仅显示镜像的 id：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@izrcf5u3j3q8xaz ~<span class="token punctuation">]</span><span class="token comment"># docker images -q</span>
0ebb5600241d
f07dfa83b528
feba8d001e3f
d404d78aa797
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若是要下载镜像，则使用：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull MySQL:5.7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>docker pull</code>是固定的，后面写上需要下载的镜像名及版本标志；若是不写版本标志，而是直接执行<code v-pre>docker pull MySQL</code>，则会下载镜像的最新版本。</p>
<p>一般在下载镜像前我们需要搜索一下镜像有哪些版本才能对指定版本进行下载，使用指令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> search MySQL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://oscimg.oschina.net/oscnet/up-559083ae80e7501e86e95fbbad25b6d571a.png" alt="" loading="lazy"></p>
<p>不过该指令只能查看 MySQL 相关的镜像信息，而不能知道有哪些版本，若想知道版本，则只能这样查询：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> search MySQL:5.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://oscimg.oschina.net/oscnet/up-68394e25f652964bb042571151c5e0fd2e9.png" alt="" loading="lazy"></p>
<p>若是查询的版本不存在，则结果为空：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-abfdd51b9ad2ced3711268369f52b077b12.png" alt="" loading="lazy"></p>
<p>删除镜像使用指令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> image <span class="token function">rm</span> MySQL:5.5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若是不指定版本，则默认删除的也是最新版本。</p>
<p>还可以通过指定镜像 id 进行删除：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> image <span class="token function">rm</span> bf756fb1ae65
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然而此时报错了：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@izrcf5u3j3q8xaz ~<span class="token punctuation">]</span><span class="token comment"># docker image rm bf756fb1ae65</span>
Error response from daemon: conflict: unable to delete bf756fb1ae65 <span class="token punctuation">(</span>must be forced<span class="token punctuation">)</span> - image is being used by stopped container d5b6c177c151
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为要删除的<code v-pre>hello-world</code>镜像正在运行中，所以无法删除镜像，此时需要强制执行删除：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> image <span class="token function">rm</span> -f bf756fb1ae65
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该指令会将镜像和通过该镜像执行的容器全部删除，谨慎使用。</p>
<p>Docker 还提供了删除镜像的简化版本：<code v-pre>docker rmi 镜像名:版本标志</code> 。</p>
<p>此时我们即可借助<code v-pre>rmi</code>和<code v-pre>-q</code>进行一些联合操作，比如现在想删除所有的 MySQL 镜像，那么你需要查询出 MySQL 镜像的 id，并根据这些 id 一个一个地执行<code v-pre>docker rmi</code>进行删除，但是现在，我们可以这样：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> rmi -f <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images MySQL -q<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>首先通过<code v-pre>docker images MySQL -q</code>查询出 MySQL 的所有镜像 id，<code v-pre>-q</code>表示仅查询 id，并将这些 id 作为参数传递给<code v-pre>docker rmi -f</code>指令，这样所有的 MySQL 镜像就都被删除了。</p>
<h2 id="docker-容器指令" tabindex="-1"><a class="header-anchor" href="#docker-容器指令" aria-hidden="true">#</a> Docker 容器指令</h2>
<p>掌握了镜像的相关指令之后，我们需要了解一下容器的指令，容器是基于镜像的。</p>
<p>若需要通过镜像运行一个容器，则使用：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run tomcat:8.0-jre8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当然了，运行的前提是你拥有这个镜像，所以先下载镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull tomcat:8.0-jre8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下载完成后就可以运行了，运行后查看一下当前运行的容器：<code v-pre>docker ps</code> 。</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-bd48e20ef07b7c91ad16f92821a3dbca5b5.png" alt="" loading="lazy"></p>
<p>其中<code v-pre>CONTAINER_ID</code>为容器的 id，<code v-pre>IMAGE</code>为镜像名，<code v-pre>COMMAND</code>为容器内执行的命令，<code v-pre>CREATED</code>为容器的创建时间，<code v-pre>STATUS</code>为容器的状态，<code v-pre>PORTS</code>为容器内服务监听的端口，<code v-pre>NAMES</code>为容器的名称。</p>
<p>通过该方式运行的 tomcat 是不能直接被外部访问的，因为容器具有隔离性，若是想直接通过 8080 端口访问容器内部的 tomcat，则需要对宿主机端口与容器内的端口进行映射：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run -p <span class="token number">8080</span>:8080 tomcat:8.0-jre8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解释一下这两个端口的作用(<code v-pre>8080:8080</code>)，第一个 8080 为宿主机端口，第二个 8080 为容器内的端口，外部访问 8080 端口就会通过映射访问容器内的 8080 端口。</p>
<p>此时外部就可以访问 Tomcat 了：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-16d9ff4d29094681f51424ea8d0ee4fd73e.png" alt="" loading="lazy"></p>
<p>若是这样进行映射：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run -p <span class="token number">8088</span>:8080 tomcat:8.0-jre8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>则外部需访问 8088 端口才能访问 tomcat，需要注意的是，每次运行的容器都是相互独立的，所以同时运行多个 tomcat 容器并不会产生端口的冲突。</p>
<p>容器还能够以后台的方式运行，这样就不会占用终端：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run -d -p <span class="token number">8080</span>:8080 tomcat:8.0-jre8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动容器时默认会给容器一个名称，但这个名称其实是可以设置的，使用指令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run -d -p <span class="token number">8080</span>:8080 --name tomcat01 tomcat:8.0-jre8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时的容器名称即为 tomcat01，容器名称必须是唯一的。</p>
<p>再来引申一下<code v-pre>docker ps</code>中的几个指令参数，比如<code v-pre>-a</code>：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> -a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该参数会将运行和非运行的容器全部列举出来：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-16d9ff4d29094681f51424ea8d0ee4fd73e.png" alt="" loading="lazy"></p>
<p><code v-pre>-q</code>参数将只查询正在运行的容器 id：<code v-pre>docker ps -q</code> 。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@izrcf5u3j3q8xaz ~<span class="token punctuation">]</span><span class="token comment"># docker ps -q</span>
f3aac8ee94a3
074bf575249b
1d557472a708
4421848ba294
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若是组合使用，则查询运行和非运行的所有容器 id：<code v-pre>docker ps -qa</code> 。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@izrcf5u3j3q8xaz ~<span class="token punctuation">]</span><span class="token comment"># docker ps -aq</span>
f3aac8ee94a3
7f7b0e80c841
074bf575249b
a1e830bddc4c
1d557472a708
4421848ba294
b0440c0a219a
c2f5d78c5d1a
5831d1bab2a6
d5b6c177c151
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来是容器的停止、重启指令，因为非常简单，就不过多介绍了。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> start c2f5d78c5d1a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过该指令能够将已经停止运行的容器运行起来，可以通过容器的 id 启动，也可以通过容器的名称启动。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> restart c2f5d78c5d1a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该指令能够重启指定的容器。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> stop c2f5d78c5d1a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该指令能够停止指定的容器。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">kill</span> c2f5d78c5d1a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该指令能够直接杀死指定的容器。</p>
<p>以上指令都能够通过容器的 id 和容器名称两种方式配合使用。</p>
<hr>
<p>当容器被停止之后，容器虽然不再运行了，但仍然是存在的，若是想删除它，则使用指令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> d5b6c177c151
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是容器的 id 无需全部写出来，只需唯一标识即可。</p>
<p>若是想删除正在运行的容器，则需要添加<code v-pre>-f</code>参数强制删除：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> -f d5b6c177c151
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>若是想删除所有容器，则可以使用组合指令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">rm</span> -f <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> <span class="token function">ps</span> -qa<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>先通过<code v-pre>docker ps -qa</code>查询出所有容器的 id，然后通过<code v-pre>docker rm -f</code>进行删除。</p>
<hr>
<p>当容器以后台的方式运行时，我们无法知晓容器的运行状态，若此时需要查看容器的运行日志，则使用指令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> logs 289cc00dc5ed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样的方式显示的日志并不是实时的，若是想实时显示，需要使用<code v-pre>-f</code>参数：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> logs -f 289cc00dc5ed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过<code v-pre>-t</code>参数还能够显示日志的时间戳，通常与<code v-pre>-f</code>参数联合使用：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> logs -ft 289cc00dc5ed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<p>查看容器内运行了哪些进程，可以使用指令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">top</span> 289cc00dc5ed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://oscimg.oschina.net/oscnet/up-7ec71a682712e56e90490f55c32cf660fd3.png" alt="" loading="lazy"></p>
<p>若是想与容器进行交互，则使用指令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it 289cc00dc5ed <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://oscimg.oschina.net/oscnet/up-fd17796322f833685ca8ead592d38581898.png" alt="" loading="lazy"></p>
<p>此时终端将会进入容器内部，执行的指令都将在容器中生效，在容器内只能执行一些比较简单的指令，如：ls、cd 等，若是想退出容器终端，重新回到 CentOS 中，则执行<code v-pre>exit</code>即可。</p>
<p>现在我们已经能够进入容器终端执行相关操作了，那么该如何向 tomcat 容器中部署一个项目呢？</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> ./test.html 289cc00dc5ed:/usr/local/tomcat/webapps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过<code v-pre>docker cp</code>指令能够将文件从 CentOS 复制到容器中，<code v-pre>./test.html</code>为 CentOS 中的资源路径，<code v-pre>289cc00dc5ed</code>为容器 id，<code v-pre>/usr/local/tomcat/webapps</code>为容器的资源路径，此时<code v-pre>test.html</code>文件将会被复制到该路径下。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@izrcf5u3j3q8xaz ~<span class="token punctuation">]</span><span class="token comment"># docker exec -it 289cc00dc5ed bash</span>
root@289cc00dc5ed:/usr/local/tomcat<span class="token comment"># cd webapps</span>
root@289cc00dc5ed:/usr/local/tomcat/webapps<span class="token comment"># ls</span>
test.html
root@289cc00dc5ed:/usr/local/tomcat/webapps<span class="token comment">#</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若是想将容器内的文件复制到 CentOS 中，则反过来写即可：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">cp</span> 289cc00dc5ed:/usr/local/tomcat/webapps/test.html ./
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所以现在若是想要部署项目，则先将项目上传到 CentOS，然后将项目从 CentOS 复制到容器内，此时启动容器即可。</p>
<hr>
<p>虽然使用 Docker 启动软件环境非常简单，但同时也面临着一个问题，我们无法知晓容器内部具体的细节，比如监听的端口、绑定的 ip 地址等等，好在这些 Docker 都帮我们想到了，只需使用指令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> inspect 923c969b0d91
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://oscimg.oschina.net/oscnet/up-fca74d4350cdfebfc2b06101e1cab411619.png" alt="" loading="lazy"></p>
<h2 id="docker-数据卷" tabindex="-1"><a class="header-anchor" href="#docker-数据卷" aria-hidden="true">#</a> Docker 数据卷</h2>
<p>学习了容器的相关指令之后，我们来了解一下 Docker 中的数据卷，它能够实现宿主机与容器之间的文件共享，它的好处在于我们对宿主机的文件进行修改将直接影响容器，而无需再将宿主机的文件再复制到容器中。</p>
<p>现在若是想将宿主机中<code v-pre>/opt/apps</code>目录与容器中<code v-pre>webapps</code>目录做一个数据卷，则应该这样编写指令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run -d -p <span class="token number">8080</span>:8080 --name tomcat01 -v /opt/apps:/usr/local/tomcat/webapps tomcat:8.0-jre8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然而此时访问 tomcat 会发现无法访问：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-8fa1b23f6ea2567b5938370e7d7f636533f.png" alt="" loading="lazy"></p>
<p>这就说明我们的数据卷设置成功了，Docker 会将容器内的<code v-pre>webapps</code>目录与<code v-pre>/opt/apps</code>目录进行同步，而此时<code v-pre>/opt/apps</code>目录是空的，导致<code v-pre>webapps</code>目录也会变成空目录，所以就访问不到了。</p>
<p>此时我们只需向<code v-pre>/opt/apps</code>目录下添加文件，就会使得<code v-pre>webapps</code>目录也会拥有相同的文件，达到文件共享，测试一下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@centos-7 opt<span class="token punctuation">]</span><span class="token comment"># cd apps/</span>
<span class="token punctuation">[</span>root@centos-7 apps<span class="token punctuation">]</span><span class="token comment"># vim test.html</span>
<span class="token punctuation">[</span>root@centos-7 apps<span class="token punctuation">]</span><span class="token comment"># ls</span>
test.html
<span class="token punctuation">[</span>root@centos-7 apps<span class="token punctuation">]</span><span class="token comment"># cat test.html</span>
<span class="token operator">&lt;</span>h<span class="token operator"><span class="token file-descriptor important">1</span>></span>This is a <span class="token builtin class-name">test</span> html<span class="token operator">!</span><span class="token operator">&lt;</span>/h<span class="token operator"><span class="token file-descriptor important">1</span>></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>/opt/apps</code>目录下创建了一个 <code v-pre>test.html</code> 文件，那么容器内的<code v-pre>webapps</code>目录是否会有该文件呢？进入容器的终端：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@centos-7 apps<span class="token punctuation">]</span><span class="token comment"># docker exec -it tomcat01 bash</span>
root@115155c08687:/usr/local/tomcat<span class="token comment"># cd webapps/</span>
root@115155c08687:/usr/local/tomcat/webapps<span class="token comment"># ls</span>
test.html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>容器内确实已经有了该文件，那接下来我们编写一个简单的 Web 应用：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloServlet</span> <span class="token keyword">extends</span> <span class="token class-name">HttpServlet</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doGet</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        resp<span class="token punctuation">.</span><span class="token function">getWriter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doPost</span><span class="token punctuation">(</span><span class="token class-name">HttpServletRequest</span> req<span class="token punctuation">,</span> <span class="token class-name">HttpServletResponse</span> resp<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ServletException</span><span class="token punctuation">,</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
        <span class="token function">doGet</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span>resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个非常简单的 Servlet，我们将其打包上传到<code v-pre>/opt/apps</code>中，那么容器内肯定就会同步到该文件，此时进行访问：</p>
<p><img src="https://oscimg.oschina.net/oscnet/up-712716a8c8c444ba3a77ade8ff27e7c6cf5.png" alt="" loading="lazy"></p>
<p>这种方式设置的数据卷称为自定义数据卷，因为数据卷的目录是由我们自己设置的，Docker 还为我们提供了另外一种设置数据卷的方式：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> run -d -p <span class="token number">8080</span>:8080 --name tomcat01 -v aa:/usr/local/tomcat/webapps tomcat:8.0-jre8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此时的<code v-pre>aa</code>并不是数据卷的目录，而是数据卷的别名，Docker 会为我们自动创建一个名为<code v-pre>aa</code>的数据卷，并且会将容器内<code v-pre>webapps</code>目录下的所有内容复制到数据卷中，该数据卷的位置在<code v-pre>/var/lib/docker/volumes</code>目录下：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@centos-7 volumes<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/var/lib/docker/volumes
<span class="token punctuation">[</span>root@centos-7 volumes<span class="token punctuation">]</span><span class="token comment"># cd aa/</span>
<span class="token punctuation">[</span>root@centos-7 aa<span class="token punctuation">]</span><span class="token comment"># ls</span>
_data
<span class="token punctuation">[</span>root@centos-7 aa<span class="token punctuation">]</span><span class="token comment"># cd _data/</span>
<span class="token punctuation">[</span>root@centos-7 _data<span class="token punctuation">]</span><span class="token comment"># ls</span>
docs  examples  host-manager  manager  ROOT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时我们只需修改该目录的内容就能能够影响到容器。</p>
<hr>
<p>最后再介绍几个容器和镜像相关的指令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> commit -m <span class="token string">"描述信息"</span> -a <span class="token string">"镜像作者"</span> tomcat01 my_tomcat:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该指令能够将容器打包成一个镜像，此时查询镜像：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@centos-7 _data<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
my_tomcat           <span class="token number">1.0</span>                 79ab047fade5        <span class="token number">2</span> seconds ago       463MB
tomcat              <span class="token number">8</span>                   a041be4a5ba5        <span class="token number">2</span> weeks ago         533MB
MySQL               latest              db2b37ec6181        <span class="token number">2</span> months ago        545MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若是想将镜像备份出来，则可以使用指令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> save my_tomcat:1.0 -o my-tomcat-1.0.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token punctuation">[</span>root@centos-7 ~<span class="token punctuation">]</span><span class="token comment"># docker save my_tomcat:1.0 -o my-tomcat-1.0.tar</span>
<span class="token punctuation">[</span>root@centos-7 ~<span class="token punctuation">]</span><span class="token comment"># ls</span>
anaconda-ks.cfg  initial-setup-ks.cfg  公共  视频  文档  音乐
get-docker.sh    my-tomcat-1.0.tar     模板  图片  下载  桌面
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若是拥有<code v-pre>.tar</code>格式的镜像，该如何将其加载到 Docker 中呢？执行指令：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> load -i my-tomcat-1.0.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>root@centos-7 ~<span class="token punctuation">]</span><span class="token comment"># docker load -i my-tomcat-1.0.tar</span>
b28ef0b6fef8: Loading layer <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">></span><span class="token punctuation">]</span>  <span class="token number">105</span>.5MB/105.5MB
0b703c74a09c: Loading layer <span class="token punctuation">[</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">></span><span class="token punctuation">]</span>  <span class="token number">23</span>.99MB/23.99MB
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
Loaded image: my_tomcat:1.0
<span class="token punctuation">[</span>root@centos-7 ~<span class="token punctuation">]</span><span class="token comment"># docker images</span>
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
my_tomcat           <span class="token number">1.0</span>                 79ab047fade5        <span class="token number">7</span> minutes ago       463MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>
