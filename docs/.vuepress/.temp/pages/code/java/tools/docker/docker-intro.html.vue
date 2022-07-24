<template><div><p><strong>本文只是对 Docker 的概念做了较为详细的介绍，并不涉及一些像 Docker 环境的安装以及 Docker 的一些常见操作和命令。</strong></p>
<h2 id="一-认识容器" tabindex="-1"><a class="header-anchor" href="#一-认识容器" aria-hidden="true">#</a> 一 认识容器</h2>
<p><strong>Docker 是世界领先的软件容器平台</strong>，所以想要搞懂 Docker 的概念我们必须先从容器开始说起。</p>
<h3 id="_1-1-什么是容器" tabindex="-1"><a class="header-anchor" href="#_1-1-什么是容器" aria-hidden="true">#</a> 1.1 什么是容器?</h3>
<h4 id="先来看看容器较为官方的解释" tabindex="-1"><a class="header-anchor" href="#先来看看容器较为官方的解释" aria-hidden="true">#</a> 先来看看容器较为官方的解释</h4>
<p><strong>一句话概括容器：容器就是将软件打包成标准化单元，以用于开发、交付和部署。</strong></p>
<ul>
<li><strong>容器镜像是轻量的、可执行的独立软件包</strong> ，包含软件运行所需的所有内容：代码、运行时环境、系统工具、系统库和设置。</li>
<li><strong>容器化软件适用于基于 Linux 和 Windows 的应用，在任何环境中都能够始终如一地运行。</strong></li>
<li><strong>容器赋予了软件独立性</strong>，使其免受外在环境差异（例如，开发和预演环境的差异）的影响，从而有助于减少团队间在相同基础设施上运行不同软件时的冲突。</li>
</ul>
<h4 id="再来看看容器较为通俗的解释" tabindex="-1"><a class="header-anchor" href="#再来看看容器较为通俗的解释" aria-hidden="true">#</a> 再来看看容器较为通俗的解释</h4>
<p><strong>如果需要通俗地描述容器的话，我觉得容器就是一个存放东西的地方，就像书包可以装各种文具、衣柜可以放各种衣服、鞋架可以放各种鞋子一样。我们现在所说的容器存放的东西可能更偏向于应用比如网站、程序甚至是系统环境。</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-7/container.png" alt="认识容器" loading="lazy"></p>
<h3 id="_1-2-图解物理机-虚拟机与容器" tabindex="-1"><a class="header-anchor" href="#_1-2-图解物理机-虚拟机与容器" aria-hidden="true">#</a> 1.2 图解物理机,虚拟机与容器</h3>
<p>关于虚拟机与容器的对比在后面会详细介绍到，这里只是通过网上的图片加深大家对于物理机、虚拟机与容器这三者的理解(下面的图片来源于网络)。</p>
<p><strong>物理机：</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-7/物理机图解.png" alt="物理机" loading="lazy"></p>
<p><strong>虚拟机：</strong></p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-7/虚拟机图解.png" alt="虚拟机" loading="lazy"></p>
<p><strong>容器：</strong></p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/image-20211110104003678.png" alt="" loading="lazy"></p>
<p>通过上面这三张抽象图，我们可以大概通过类比概括出： <strong>容器虚拟化的是操作系统而不是硬件，容器之间是共享同一套操作系统资源的。虚拟机技术是虚拟出一套硬件后，在其上运行一个完整操作系统。因此容器的隔离级别会稍低一些。</strong></p>
<hr>
<p><strong>相信通过上面的解释大家对于容器这个既陌生又熟悉的概念有了一个初步的认识，下面我们就来谈谈 Docker 的一些概念。</strong></p>
<h2 id="二-再来谈谈-docker-的一些概念" tabindex="-1"><a class="header-anchor" href="#二-再来谈谈-docker-的一些概念" aria-hidden="true">#</a> 二 再来谈谈 Docker 的一些概念</h2>
<h3 id="_2-1-什么是-docker" tabindex="-1"><a class="header-anchor" href="#_2-1-什么是-docker" aria-hidden="true">#</a> 2.1 什么是 Docker?</h3>
<p>说实话关于 Docker 是什么并太好说，下面我通过四点向你说明 Docker 到底是个什么东西。</p>
<ul>
<li><strong>Docker 是世界领先的软件容器平台。</strong></li>
<li><strong>Docker</strong> 使用 Google 公司推出的 <strong>Go 语言</strong> 进行开发实现，基于 <strong>Linux 内核</strong> 提供的 CGroup 功能和 namespace 来实现的，以及 AUFS 类的 <strong>UnionFS</strong> 等技术，<strong>对进程进行封装隔离，属于操作系统层面的虚拟化技术。</strong> 由于隔离的进程独立于宿主和其它的隔离的进程，因此也称其为容器。</li>
<li><strong>Docker 能够自动执行重复性任务，例如搭建和配置开发环境，从而解放了开发人员以便他们专注在真正重要的事情上：构建杰出的软件。</strong></li>
<li><strong>用户可以方便地创建和使用容器，把自己的应用放入容器。容器还可以进行版本管理、复制、分享、修改，就像管理普通的代码一样。</strong></li>
</ul>
<h3 id="_2-2-docker-思想" tabindex="-1"><a class="header-anchor" href="#_2-2-docker-思想" aria-hidden="true">#</a> 2.2 Docker 思想</h3>
<ul>
<li><strong>集装箱</strong></li>
<li><strong>标准化：</strong> ① 运输方式 ② 存储方式 ③ API 接口</li>
<li><strong>隔离</strong></li>
</ul>
<h3 id="_2-3-docker-容器的特点" tabindex="-1"><a class="header-anchor" href="#_2-3-docker-容器的特点" aria-hidden="true">#</a> 2.3 Docker 容器的特点</h3>
<ul>
<li><strong>轻量</strong> :  在一台机器上运行的多个 Docker 容器可以共享这台机器的操作系统内核；它们能够迅速启动，只需占用很少的计算和内存资源。镜像是通过文件系统层进行构造的，并共享一些公共文件。这样就能尽量降低磁盘用量，并能更快地下载镜像。</li>
<li><strong>标准</strong> : Docker 容器基于开放式标准，能够在所有主流 Linux 版本、Microsoft Windows 以及包括 VM、裸机服务器和云在内的任何基础设施上运行。</li>
<li><strong>安全</strong> : Docker 赋予应用的隔离性不仅限于彼此隔离，还独立于底层的基础设施。Docker 默认提供最强的隔离，因此应用出现问题，也只是单个容器的问题，而不会波及到整台机器。</li>
</ul>
<h3 id="_2-4-为什么要用-docker" tabindex="-1"><a class="header-anchor" href="#_2-4-为什么要用-docker" aria-hidden="true">#</a> 2.4 为什么要用 Docker ?</h3>
<ul>
<li><strong>Docker 的镜像提供了除内核外完整的运行时环境，确保了应用运行环境一致性，从而不会再出现 “这段代码在我机器上没问题啊” 这类问题；——一致的运行环境</strong></li>
<li><strong>可以做到秒级、甚至毫秒级的启动时间。大大的节约了开发、测试、部署的时间。——更快速的启动时间</strong></li>
<li><strong>避免公用的服务器，资源会容易受到其他用户的影响。——隔离性</strong></li>
<li><strong>善于处理集中爆发的服务器使用压力；——弹性伸缩，快速扩展</strong></li>
<li><strong>可以很轻易的将在一个平台上运行的应用，迁移到另一个平台上，而不用担心运行环境的变化导致应用无法正常运行的情况。——迁移方便</strong></li>
<li><strong>使用 Docker 可以通过定制应用镜像来实现持续集成、持续交付、部署。——持续交付和部署</strong></li>
</ul>
<hr>
<h2 id="三-容器-vs-虚拟机" tabindex="-1"><a class="header-anchor" href="#三-容器-vs-虚拟机" aria-hidden="true">#</a> 三 容器 VS 虚拟机</h2>
<p><strong>每当说起容器，我们不得不将其与虚拟机做一个比较。就我而言，对于两者无所谓谁会取代谁，而是两者可以和谐共存。</strong></p>
<p>简单来说： <strong>容器和虚拟机具有相似的资源隔离和分配优势，但功能有所不同，因为容器虚拟化的是操作系统，而不是硬件，因此容器更容易移植，效率也更高。</strong></p>
<h3 id="_3-1-两者对比图" tabindex="-1"><a class="header-anchor" href="#_3-1-两者对比图" aria-hidden="true">#</a> 3.1 两者对比图</h3>
<p>传统虚拟机技术是虚拟出一套硬件后，在其上运行一个完整操作系统，在该系统上再运行所需应用进程；而容器内的应用进程直接运行于宿主的内核，容器内没有自己的内核，而且也没有进行硬件虚拟。因此容器要比传统虚拟机更为轻便。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/2e2b95eebf60b6d03f6c1476f4d7c697.png" alt="" loading="lazy"></p>
<h3 id="_3-2-容器与虚拟机总结" tabindex="-1"><a class="header-anchor" href="#_3-2-容器与虚拟机总结" aria-hidden="true">#</a> 3.2 容器与虚拟机总结</h3>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/4ef8691d67eb1eb53217099d0a691eb5.png" alt="" loading="lazy"></p>
<ul>
<li>
<p><strong>容器是一个应用层抽象，用于将代码和依赖资源打包在一起。</strong> <strong>多个容器可以在同一台机器上运行，共享操作系统内核，但各自作为独立的进程在用户空间中运行</strong> 。与虚拟机相比， <strong>容器占用的空间较少</strong>（容器镜像大小通常只有几十兆），<strong>瞬间就能完成启动</strong> 。</p>
</li>
<li>
<p><strong>虚拟机 (VM) 是一个物理硬件层抽象，用于将一台服务器变成多台服务器。</strong> 管理程序允许多个 VM 在一台机器上运行。每个 VM 都包含一整套操作系统、一个或多个应用、必要的二进制文件和库资源，因此 <strong>占用大量空间</strong> 。而且 VM <strong>启动也十分缓慢</strong> 。</p>
</li>
</ul>
<p>通过 Docker 官网，我们知道了这么多 Docker 的优势，但是大家也没有必要完全否定虚拟机技术，因为两者有不同的使用场景。<strong>虚拟机更擅长于彻底隔离整个运行环境</strong>。例如，云服务提供商通常采用虚拟机技术隔离不同的用户。而 <strong>Docker 通常用于隔离不同的应用</strong> ，例如前端，后端以及数据库。</p>
<h3 id="_3-3-容器与虚拟机两者是可以共存的" tabindex="-1"><a class="header-anchor" href="#_3-3-容器与虚拟机两者是可以共存的" aria-hidden="true">#</a> 3.3 容器与虚拟机两者是可以共存的</h3>
<p>就我而言，对于两者无所谓谁会取代谁，而是两者可以和谐共存。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/056c87751b9dd7b56f4264240fe96d00.png" alt="" loading="lazy"></p>
<hr>
<h2 id="四-docker-基本概念" tabindex="-1"><a class="header-anchor" href="#四-docker-基本概念" aria-hidden="true">#</a> 四 Docker 基本概念</h2>
<p><strong>Docker 中有非常重要的三个基本概念，理解了这三个概念，就理解了 Docker 的整个生命周期。</strong></p>
<ul>
<li><strong>镜像（Image）</strong></li>
<li><strong>容器（Container）</strong></li>
<li><strong>仓库（Repository）</strong></li>
</ul>
<p>理解了这三个概念，就理解了 Docker 的整个生命周期</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-7/docker基本概念.png" alt="docker基本概念" loading="lazy"></p>
<h3 id="_4-1-镜像-image-一个特殊的文件系统" tabindex="-1"><a class="header-anchor" href="#_4-1-镜像-image-一个特殊的文件系统" aria-hidden="true">#</a> 4.1 镜像(Image):一个特殊的文件系统</h3>
<p><strong>操作系统分为内核和用户空间</strong>。对于 Linux 而言，内核启动后，会挂载 root 文件系统为其提供用户空间支持。而 Docker 镜像（Image），就相当于是一个 root 文件系统。</p>
<p><strong>Docker 镜像是一个特殊的文件系统，除了提供容器运行时所需的程序、库、资源、配置等文件外，还包含了一些为运行时准备的一些配置参数（如匿名卷、环境变量、用户等）。</strong> 镜像不包含任何动态数据，其内容在构建之后也不会被改变。</p>
<p>Docker 设计时，就充分利用 <strong>Union FS</strong> 的技术，将其设计为<strong>分层存储的架构</strong> 。镜像实际是由多层文件系统联合组成。</p>
<p><strong>镜像构建时，会一层层构建，前一层是后一层的基础。每一层构建完就不会再发生改变，后一层上的任何改变只发生在自己这一层。</strong> 比如，删除前一层文件的操作，实际不是真的删除前一层的文件，而是仅在当前层标记为该文件已删除。在最终容器运行的时候，虽然不会看到这个文件，但是实际上该文件会一直跟随镜像。因此，在构建镜像的时候，需要额外小心，每一层尽量只包含该层需要添加的东西，任何额外的东西应该在该层构建结束前清理掉。</p>
<p>分层存储的特征还使得镜像的复用、定制变的更为容易。甚至可以用之前构建好的镜像作为基础层，然后进一步添加新的层，以定制自己所需的内容，构建新的镜像。</p>
<h3 id="_4-2-容器-container-镜像运行时的实体" tabindex="-1"><a class="header-anchor" href="#_4-2-容器-container-镜像运行时的实体" aria-hidden="true">#</a> 4.2 容器(Container):镜像运行时的实体</h3>
<p>镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的 类 和 实例 一样，镜像是静态的定义，<strong>容器是镜像运行时的实体。容器可以被创建、启动、停止、删除、暂停等</strong> 。</p>
<p><strong>容器的实质是进程，但与直接在宿主执行的进程不同，容器进程运行于属于自己的独立的 命名空间。前面讲过镜像使用的是分层存储，容器也是如此。</strong></p>
<p><strong>容器存储层的生存周期和容器一样，容器消亡时，容器存储层也随之消亡。因此，任何保存于容器存储层的信息都会随容器删除而丢失。</strong></p>
<p>按照 Docker 最佳实践的要求，<strong>容器不应该向其存储层内写入任何数据</strong> ，容器存储层要保持无状态化。<strong>所有的文件写入操作，都应该使用数据卷（Volume）、或者绑定宿主目录</strong>，在这些位置的读写会跳过容器存储层，直接对宿主(或网络存储)发生读写，其性能和稳定性更高。数据卷的生存周期独立于容器，容器消亡，数据卷不会消亡。因此， <strong>使用数据卷后，容器可以随意删除、重新 run ，数据却不会丢失。</strong></p>
<h3 id="_4-3-仓库-repository-集中存放镜像文件的地方" tabindex="-1"><a class="header-anchor" href="#_4-3-仓库-repository-集中存放镜像文件的地方" aria-hidden="true">#</a> 4.3 仓库(Repository):集中存放镜像文件的地方</h3>
<p>镜像构建完成后，可以很容易的在当前宿主上运行，但是， <strong>如果需要在其它服务器上使用这个镜像，我们就需要一个集中的存储、分发镜像的服务，Docker Registry 就是这样的服务。</strong></p>
<p>一个 Docker Registry 中可以包含多个仓库（Repository）；每个仓库可以包含多个标签（Tag）；每个标签对应一个镜像。所以说：<strong>镜像仓库是 Docker 用来集中存放镜像文件的地方类似于我们之前常用的代码仓库。</strong></p>
<p>通常，<strong>一个仓库会包含同一个软件不同版本的镜像</strong>，而<strong>标签就常用于对应该软件的各个版本</strong> 。我们可以通过<code v-pre>&lt;仓库名&gt;:&lt;标签&gt;</code>的格式来指定具体是这个软件哪个版本的镜像。如果不给出标签，将以 latest 作为默认标签.。</p>
<p><strong>这里补充一下 Docker Registry 公开服务和私有 Docker Registry 的概念：</strong></p>
<p><strong>Docker Registry 公开服务</strong> 是开放给用户使用、允许用户管理镜像的 Registry 服务。一般这类公开服务允许用户免费上传、下载公开的镜像，并可能提供收费服务供用户管理私有镜像。</p>
<p>最常使用的 Registry 公开服务是官方的 <strong>Docker Hub</strong> ，这也是默认的 Registry，并拥有大量的高质量的官方镜像，网址为：<a href="https://hub.docker.com/" title="https://hub.docker.com/" target="_blank" rel="noopener noreferrer">https://hub.docker.com/<ExternalLinkIcon/></a> 。官方是这样介绍 Docker Hub 的：</p>
<blockquote>
<p>Docker Hub 是 Docker 官方提供的一项服务，用于与您的团队查找和共享容器镜像。</p>
</blockquote>
<p>比如我们想要搜索自己想要的镜像：</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-7/Screen Shot 2019-11-04 at 8.21.39 PM.png" alt="利用Docker Hub 搜索镜像" loading="lazy"></p>
<p>在 Docker Hub 的搜索结果中，有几项关键的信息有助于我们选择合适的镜像：</p>
<ul>
<li><strong>OFFICIAL Image</strong> ：代表镜像为 Docker 官方提供和维护，相对来说稳定性和安全性较高。</li>
<li><strong>Stars</strong> ：和点赞差不多的意思，类似 GitHub 的 Star。</li>
<li><strong>Dowloads</strong> ：代表镜像被拉取的次数，基本上能够表示镜像被使用的频度。</li>
</ul>
<p>当然，除了直接通过 Docker Hub 网站搜索镜像这种方式外，我们还可以通过 <code v-pre>docker search</code> 这个命令搜索 Docker Hub 中的镜像，搜索的结果是一致的。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>➜  ~ <span class="token function">docker</span> search mysql
NAME                              DESCRIPTION                                     STARS               OFFICIAL            AUTOMATED
mysql                             MySQL is a widely used, open-source relation…   <span class="token number">8763</span>                <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
mariadb                           MariaDB is a community-developed fork of MyS…   <span class="token number">3073</span>                <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
mysql/mysql-server                Optimized MySQL Server Docker images. Create…   <span class="token number">650</span>                                     <span class="token punctuation">[</span>OK<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在国内访问<strong>Docker Hub</strong> 可能会比较慢国内也有一些云服务商提供类似于 Docker Hub 的公开服务。比如 <a href="https://www.tenxcloud.com/" title="时速云镜像库" target="_blank" rel="noopener noreferrer">时速云镜像库<ExternalLinkIcon/></a>、<a href="https://www.163yun.com/product/repo" title="网易云镜像服务" target="_blank" rel="noopener noreferrer">网易云镜像服务<ExternalLinkIcon/></a>、<a href="https://www.daocloud.io/" title="DaoCloud 镜像市场" target="_blank" rel="noopener noreferrer">DaoCloud 镜像市场<ExternalLinkIcon/></a>、<a href="https://www.aliyun.com/product/containerservice?utm_content=se_1292836" title="阿里云镜像库" target="_blank" rel="noopener noreferrer">阿里云镜像库<ExternalLinkIcon/></a>等。</p>
<p>除了使用公开服务外，用户还可以在 <strong>本地搭建私有 Docker Registry</strong> 。Docker 官方提供了 Docker Registry 镜像，可以直接使用做为私有 Registry 服务。开源的 Docker Registry 镜像只提供了 Docker Registry API 的服务端实现，足以支持 docker 命令，不影响使用。但不包含图形界面，以及镜像维护、用户管理、访问控制等高级功能。</p>
<hr>
<h2 id="五-常见命令" tabindex="-1"><a class="header-anchor" href="#五-常见命令" aria-hidden="true">#</a> 五 常见命令</h2>
<h3 id="_5-1-基本命令" tabindex="-1"><a class="header-anchor" href="#_5-1-基本命令" aria-hidden="true">#</a> 5.1 基本命令</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> version <span class="token comment"># 查看docker版本</span>
<span class="token function">docker</span> images <span class="token comment"># 查看所有已下载镜像，等价于：docker image ls 命令</span>
<span class="token function">docker</span> container <span class="token function">ls</span> <span class="token comment">#	查看所有容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token comment">#查看正在运行的容器</span>
<span class="token function">docker</span> image prune <span class="token comment"># 清理临时的、没有被使用的镜像文件。-a, --all: 删除所有没有用的镜像，而不仅仅是临时文件；</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-拉取镜像" tabindex="-1"><a class="header-anchor" href="#_5-2-拉取镜像" aria-hidden="true">#</a> 5.2 拉取镜像</h3>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> search mysql <span class="token comment"># 查看mysql相关镜像</span>
<span class="token function">docker</span> pull mysql:5.7 <span class="token comment"># 拉取mysql镜像</span>
<span class="token function">docker</span> image <span class="token function">ls</span> <span class="token comment"># 查看所有已下载镜像</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-删除镜像" tabindex="-1"><a class="header-anchor" href="#_5-3-删除镜像" aria-hidden="true">#</a> 5.3 删除镜像</h3>
<p>比如我们要删除我们下载的 mysql 镜像。</p>
<p>通过 <code v-pre>docker rmi [image]</code> （等价于<code v-pre>docker image rm [image]</code>）删除镜像之前首先要确保这个镜像没有被容器引用（可以通过标签名称或者镜像 ID删除）。通过我们前面讲的<code v-pre> docker ps</code>命令即可查看。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>➜  ~ <span class="token function">docker</span> <span class="token function">ps</span>
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES
c4cd691d9f80        mysql:5.7           <span class="token string">"docker-entrypoint.s…"</span>   <span class="token number">7</span> weeks ago         Up <span class="token number">12</span> days          <span class="token number">0.0</span>.0.0:3306-<span class="token operator">></span><span class="token number">3306</span>/tcp, <span class="token number">33060</span>/tcp   mysql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到 mysql 正在被 id 为 c4cd691d9f80 的容器引用，我们需要首先通过 <code v-pre>docker stop c4cd691d9f80</code> 或者 <code v-pre>docker stop mysql</code>暂停这个容器。</p>
<p>然后查看 mysql 镜像的 id</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>➜  ~ <span class="token function">docker</span> images
REPOSITORY              TAG                 IMAGE ID            CREATED             SIZE
mysql                   <span class="token number">5.7</span>                 f6509bac4980        <span class="token number">3</span> months ago        373MB
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 IMAGE ID  或者 REPOSITORY 名字即可删除</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">docker</span> rmi f6509bac4980 <span class="token comment">#  或者 docker rmi mysql </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="六-build-ship-and-run" tabindex="-1"><a class="header-anchor" href="#六-build-ship-and-run" aria-hidden="true">#</a> 六 Build Ship and Run</h2>
<p><strong>Docker 的概念以及常见命令基本上已经讲完，我们再来谈谈：Build, Ship, and Run。</strong></p>
<p>如果你搜索 Docker 官网，会发现如下的字样：<strong>“Docker - Build, Ship, and Run Any App, Anywhere”</strong>。那么 Build, Ship, and Run 到底是在干什么呢？</p>
<p><img src="https://img-blog.csdnimg.cn/2419919953764fc690c929d3844f7011.png" alt="" loading="lazy"></p>
<ul>
<li><strong>Build（构建镜像）</strong> ： 镜像就像是集装箱包括文件以及运行环境等等资源。</li>
<li><strong>Ship（运输镜像）</strong> ：主机和仓库间运输，这里的仓库就像是超级码头一样。</li>
<li><strong>Run （运行镜像）</strong> ：运行的镜像就是一个容器，容器就是运行程序的地方。</li>
</ul>
<p><strong>Docker 运行过程也就是去仓库把镜像拉到本地，然后用一条命令把镜像运行起来变成容器。所以，我们也常常将 Docker 称为码头工人或码头装卸工，这和 Docker 的中文翻译搬运工人如出一辙。</strong></p>
<h2 id="七-简单了解一下-docker-底层原理" tabindex="-1"><a class="header-anchor" href="#七-简单了解一下-docker-底层原理" aria-hidden="true">#</a> 七 简单了解一下 Docker 底层原理</h2>
<h3 id="_7-1-虚拟化技术" tabindex="-1"><a class="header-anchor" href="#_7-1-虚拟化技术" aria-hidden="true">#</a> 7.1 虚拟化技术</h3>
<p>首先，Docker <strong>容器虚拟化</strong>技术为基础的软件，那么什么是虚拟化技术呢？</p>
<p>简单点来说，虚拟化技术可以这样定义：</p>
<blockquote>
<p>虚拟化技术是一种资源管理技术，是将计算机的各种[实体资源](<a href="https://zh.wikipedia.org/wiki/%E8%B3%87%E6%BA%90_" target="_blank" rel="noopener noreferrer">https://zh.wikipedia.org/wiki/資源_<ExternalLinkIcon/></a>(計算機科學 &quot;实体资源&quot;))（<a href="https://zh.wikipedia.org/wiki/CPU" title="CPU" target="_blank" rel="noopener noreferrer">CPU<ExternalLinkIcon/></a>、<a href="https://zh.wikipedia.org/wiki/%E5%86%85%E5%AD%98" title="内存" target="_blank" rel="noopener noreferrer">内存<ExternalLinkIcon/></a>、<a href="https://zh.wikipedia.org/wiki/%E7%A3%81%E7%9B%98%E7%A9%BA%E9%97%B4" title="磁盘空间" target="_blank" rel="noopener noreferrer">磁盘空间<ExternalLinkIcon/></a>、<a href="https://zh.wikipedia.org/wiki/%E7%B6%B2%E8%B7%AF%E9%81%A9%E9%85%8D%E5%99%A8" title="网络适配器" target="_blank" rel="noopener noreferrer">网络适配器<ExternalLinkIcon/></a>等），予以抽象、转换后呈现出来并可供分割、组合为一个或多个电脑配置环境。由此，打破实体结构间的不可切割的障碍，使用户可以比原本的配置更好的方式来应用这些电脑硬件资源。这些资源的新虚拟部分是不受现有资源的架设方式，地域或物理配置所限制。一般所指的虚拟化资源包括计算能力和数据存储。</p>
</blockquote>
<h3 id="_7-2-docker-基于-lxc-虚拟容器技术" tabindex="-1"><a class="header-anchor" href="#_7-2-docker-基于-lxc-虚拟容器技术" aria-hidden="true">#</a> 7.2 Docker 基于 LXC 虚拟容器技术</h3>
<p>Docker 技术是基于 LXC（Linux container- Linux 容器）虚拟容器技术的。</p>
<blockquote>
<p>LXC，其名称来自 Linux 软件容器（Linux Containers）的缩写，一种操作系统层虚拟化（Operating system–level virtualization）技术，为 Linux 内核容器功能的一个用户空间接口。它将应用软件系统打包成一个软件容器（Container），内含应用软件本身的代码，以及所需要的操作系统核心和库。通过统一的名字空间和共用 API 来分配不同软件容器的可用硬件资源，创造出应用程序的独立沙箱运行环境，使得 Linux 用户可以容易的创建和管理系统或应用容器。</p>
</blockquote>
<p>LXC 技术主要是借助 Linux 内核中提供的 CGroup 功能和 namespace 来实现的，通过 LXC 可以为软件提供一个独立的操作系统运行环境。</p>
<p><strong>cgroup 和 namespace 介绍：</strong></p>
<ul>
<li>
<p><strong>namespace 是 Linux 内核用来隔离内核资源的方式。</strong> 通过 namespace 可以让一些进程只能看到与自己相关的一部分资源，而另外一些进程也只能看到与它们自己相关的资源，这两拨进程根本就感觉不到对方的存在。具体的实现方式是把一个或多个进程的相关资源指定在同一个 namespace 中。Linux namespaces 是对全局系统资源的一种封装隔离，使得处于不同 namespace 的进程拥有独立的全局系统资源，改变一个 namespace 中的系统资源只会影响当前 namespace 里的进程，对其他 namespace 中的进程没有影响。</p>
<p>（以上关于 namespace 介绍内容来自<a href="https://www.cnblogs.com/sparkdev/p/9365405.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/sparkdev/p/9365405.html<ExternalLinkIcon/></a> ，更多关于 namespace 的呢内容可以查看这篇文章 ）。</p>
</li>
<li>
<p><strong>CGroup 是 Control Groups 的缩写，是 Linux 内核提供的一种可以限制、记录、隔离进程组 (process groups) 所使用的物力资源 (如 cpu memory i/o 等等) 的机制。</strong></p>
<p>（以上关于 CGroup 介绍内容来自 <a href="https://www.ibm.com/developerworks/cn/linux/1506_cgroup/index.html" target="_blank" rel="noopener noreferrer">https://www.ibm.com/developerworks/cn/linux/1506_cgroup/index.html<ExternalLinkIcon/></a> ，更多关于 CGroup 的内容可以查看这篇文章 ）。</p>
</li>
</ul>
<p><strong>cgroup 和 namespace 两者对比：</strong></p>
<p>两者都是将进程进行分组，但是两者的作用还是有本质区别。namespace 是为了隔离进程组之间的资源，而 cgroup 是为了对一组进程进行统一的资源监控和限制。</p>
<h2 id="八-总结" tabindex="-1"><a class="header-anchor" href="#八-总结" aria-hidden="true">#</a> 八 总结</h2>
<p>本文主要把 Docker 中的一些常见概念做了详细的阐述，但是并不涉及 Docker 的安装、镜像的使用、容器的操作等内容。这部分东西，希望读者自己可以通过阅读书籍与官方文档的形式掌握。如果觉得官方文档阅读起来很费力的话，这里推荐一本书籍《Docker 技术入门与实战第二版》。</p>
<h2 id="九-推荐阅读" tabindex="-1"><a class="header-anchor" href="#九-推荐阅读" aria-hidden="true">#</a> 九 推荐阅读</h2>
<ul>
<li><a href="https://zhuanlan.zhihu.com/p/53260098" title="10分钟看懂Docker和K8S" target="_blank" rel="noopener noreferrer">10 分钟看懂 Docker 和 K8S<ExternalLinkIcon/></a></li>
<li><a href="https://www.infoq.cn/article/te70FlSyxhltL1Cr7gzM" title="从零开始入门 K8s：详解 K8s 容器基本概念" target="_blank" rel="noopener noreferrer">从零开始入门 K8s：详解 K8s 容器基本概念<ExternalLinkIcon/></a></li>
</ul>
<h2 id="十-参考" tabindex="-1"><a class="header-anchor" href="#十-参考" aria-hidden="true">#</a> 十 参考</h2>
<ul>
<li><a href="https://segmentfault.com/a/1190000009732550" title="Linux Namespace和Cgroup" target="_blank" rel="noopener noreferrer">Linux Namespace 和 Cgroup<ExternalLinkIcon/></a></li>
<li><a href="https://www.upguard.com/articles/docker-vs-lxc" title="LXC vs Docker: Why Docker is Better" target="_blank" rel="noopener noreferrer">LXC vs Docker: Why Docker is Better<ExternalLinkIcon/></a></li>
<li><a href="https://www.ibm.com/developerworks/cn/linux/1506_cgroup/index.html" title="CGroup 介绍、应用实例及原理描述" target="_blank" rel="noopener noreferrer">CGroup 介绍、应用实例及原理描述<ExternalLinkIcon/></a></li>
</ul>
</div></template>
