<template><div><p>简单介绍一下 Java 程序员必知的 Linux 的一些概念以及常见命令。</p>
<p><em>如果文章有任何需要改善和完善的地方，欢迎在评论区指出，共同进步！笔芯！</em></p>
<h2 id="从认识操作系统开始" tabindex="-1"><a class="header-anchor" href="#从认识操作系统开始" aria-hidden="true">#</a> 从认识操作系统开始</h2>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-8/image-20200807161118901.png" alt="" loading="lazy"></p>
<p>正式开始 Linux 之前，简单花一点点篇幅科普一下操作系统相关的内容。</p>
<h3 id="操作系统简介" tabindex="-1"><a class="header-anchor" href="#操作系统简介" aria-hidden="true">#</a> 操作系统简介</h3>
<p>我通过以下四点介绍什么是操作系统：</p>
<ol>
<li><strong>操作系统（Operating System，简称 OS）是管理计算机硬件与软件资源的程序，是计算机的基石。</strong></li>
<li><strong>操作系统本质上是一个运行在计算机上的软件程序 ，用于管理计算机硬件和软件资源。</strong> 举例：运行在你电脑上的所有应用程序都通过操作系统来调用系统内存以及磁盘等等硬件。</li>
<li><strong>操作系统存在屏蔽了硬件层的复杂性。</strong> 操作系统就像是硬件使用的负责人，统筹着各种相关事项。</li>
<li><strong>操作系统的内核（Kernel）是操作系统的核心部分，它负责系统的内存管理，硬件设备的管理，文件系统的管理以及应用程序的管理</strong>。</li>
</ol>
<blockquote>
<p>内核（Kernel）在后文中会提到。</p>
</blockquote>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-8/Kernel_Layout.png" alt="Kernel_Layout" loading="lazy"></p>
<h3 id="操作系统简单分类" tabindex="-1"><a class="header-anchor" href="#操作系统简单分类" aria-hidden="true">#</a> 操作系统简单分类</h3>
<h4 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h4>
<p>目前最流行的个人桌面操作系统 ，不做多的介绍，大家都清楚。界面简单易操作，软件生态非常好。</p>
<p><em>玩玩电脑游戏还是必须要有 Windows 的，所以我现在是一台 Windows 用于玩游戏，一台 Mac 用于平时日常开发和学习使用。</em></p>
<p><img src="@source/code/java/cs-basics/operating-system/images/windows.png" alt="windows" loading="lazy"></p>
<h4 id="unix" tabindex="-1"><a class="header-anchor" href="#unix" aria-hidden="true">#</a> Unix</h4>
<p>最早的多用户、多任务操作系统 。后面崛起的 Linux 在很多方面都参考了 Unix。</p>
<p>目前这款操作系统已经逐渐逐渐退出操作系统的舞台。</p>
<p><img src="@source/code/java/cs-basics/operating-system/images/unix.png" alt="unix" loading="lazy"></p>
<h4 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h4>
<p><strong>Linux 是一套免费使用、开源的类 Unix 操作系统。</strong> Linux 存在着许多不同的发行版本，但它们都使用了 <strong>Linux 内核</strong> 。</p>
<blockquote>
<p>严格来讲，Linux 这个词本身只表示 Linux 内核，在 GNU/Linux 系统中，Linux 实际就是 Linux 内核，而该系统的其余部分主要是由 GNU 工程编写和提供的程序组成。单独的 Linux 内核并不能成为一个可以正常工作的操作系统。</p>
<p><strong>很多人更倾向使用 “GNU/Linux” 一词来表达人们通常所说的 “Linux”。</strong></p>
</blockquote>
<p><img src="@source/code/java/cs-basics/operating-system/images/linux.png" alt="linux" loading="lazy"></p>
<h4 id="mac-os" tabindex="-1"><a class="header-anchor" href="#mac-os" aria-hidden="true">#</a> Mac OS</h4>
<p>苹果自家的操作系统，编程体验和 Linux 相当，但是界面、软件生态以及用户体验各方面都要比 Linux 操作系统更好。</p>
<p><img src="@source/code/java/cs-basics/operating-system/images/macos.png" alt="macos" loading="lazy"></p>
<h3 id="操作系统的内核-kernel" tabindex="-1"><a class="header-anchor" href="#操作系统的内核-kernel" aria-hidden="true">#</a> 操作系统的内核（Kernel）</h3>
<p>我们先来看看维基百科对于内核的解释，我觉得总结的非常好！</p>
<blockquote>
<p><strong>内核</strong>（英语：Kernel，又称核心）在计算机科学中是一个用来管理软件发出的数据 I/O（输入与输出）要求的电脑程序，将这些要求转译为数据处理的指令并交由中央处理器（CPU）及电脑中其他电子组件进行处理，是现代操作系统中最基本的部分。它是为众多应用程序提供对计算机硬件的安全访问的一部分软件，这种访问是有限的，并由内核决定一个程序在什么时候对某部分硬件操作多长时间。 <strong>直接对硬件操作是非常复杂的。所以内核通常提供一种硬件抽象的方法，来完成这些操作。有了这个，通过进程间通信机制及系统调用，应用进程可间接控制所需的硬件资源（特别是处理器及 IO 设备）。</strong></p>
<p>早期计算机系统的设计中，还没有操作系统的内核这个概念。随着计算机系统的发展，操作系统内核的概念才渐渐明晰起来了!</p>
</blockquote>
<p>简单概括两点：</p>
<ol>
<li><strong>操作系统的内核（Kernel）是操作系统的核心部分，它负责系统的内存管理，硬件设备的管理，文件系统的管理以及应用程序的管理。</strong></li>
<li><strong>操作系统的内核是连接应用程序和硬件的桥梁，决定着操作系统的性能和稳定性。</strong></li>
</ol>
<h3 id="中央处理器-cpu-central-processing-unit" tabindex="-1"><a class="header-anchor" href="#中央处理器-cpu-central-processing-unit" aria-hidden="true">#</a> 中央处理器（CPU，Central Processing Unit）</h3>
<p>关于 CPU 简单概括三点：</p>
<ol>
<li><strong>CPU 是一台计算机的运算核心（Core）+控制核心（ Control Unit），可以称得上是计算机的大脑。</strong></li>
<li><strong>CPU 主要包括两个部分：控制器+运算器。</strong></li>
<li><strong>CPU 的根本任务就是执行指令，对计算机来说最终都是一串由“0”和“1”组成的序列。</strong></li>
</ol>
<h3 id="cpu-vs-kernel-内核" tabindex="-1"><a class="header-anchor" href="#cpu-vs-kernel-内核" aria-hidden="true">#</a> CPU vs Kernel(内核)</h3>
<p>很多人容易无法区分操作系统的内核（Kernel）和中央处理器（CPU），你可以简单从下面两点来区别：</p>
<ol>
<li>操作系统的内核（Kernel）属于操作系统层面，而 CPU 属于硬件。</li>
<li>CPU 主要提供运算，处理各种指令的能力。内核（Kernel）主要负责系统管理比如内存管理，它屏蔽了对硬件的操作。</li>
</ol>
<p>下图清晰说明了应用程序、内核、CPU 这三者的关系。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-8/Kernel_Layout.png" alt="Kernel_Layout" loading="lazy"></p>
<h3 id="系统调用" tabindex="-1"><a class="header-anchor" href="#系统调用" aria-hidden="true">#</a> 系统调用</h3>
<p>介绍系统调用之前，我们先来了解一下用户态和系统态。</p>
<p>根据进程访问资源的特点，我们可以把进程在系统上的运行分为两个级别：</p>
<ol>
<li><strong>用户态(user mode)</strong> : 用户态运行的进程或可以直接读取用户程序的数据。</li>
<li><strong>系统态(kernel mode)</strong>: 可以简单的理解系统态运行的进程或程序几乎可以访问计算机的任何资源，不受限制。</li>
</ol>
<p><strong>说了用户态和系统态之后，那么什么是系统调用呢？</strong></p>
<p>我们运行的程序基本都是运行在用户态，如果我们调用操作系统提供的系统态级别的子功能咋办呢？那就需要系统调用了！</p>
<p>也就是说在我们运行的用户程序中，凡是与系统态级别的资源有关的操作（如文件管理、进程控制、内存管理等)，都必须通过系统调用方式向操作系统提出服务请求，并由操作系统代为完成。</p>
<p>这些系统调用按功能大致可分为如下几类：</p>
<ul>
<li><strong>设备管理</strong> ：完成设备的请求或释放，以及设备启动等功能。</li>
<li><strong>文件管理</strong> ：完成文件的读、写、创建及删除等功能。</li>
<li><strong>进程控制</strong> ：完成进程的创建、撤销、阻塞及唤醒等功能。</li>
<li><strong>进程通信</strong> ：完成进程之间的消息传递或信号传递等功能。</li>
<li><strong>内存管理</strong> ：完成内存的分配、回收以及获取作业占用内存区大小及地址等功能。</li>
</ul>
<p>我在网上找了一个图，通过这个图可以很清晰的说明用户程序、系统调用、内核和硬件之间的关系。（<em>太难了~木有自己画</em>）</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/2020-8/L181kk2Eou-compress.jpg" alt="" loading="lazy"></p>
<h2 id="初探-linux" tabindex="-1"><a class="header-anchor" href="#初探-linux" aria-hidden="true">#</a> 初探 Linux</h2>
<h3 id="linux-简介" tabindex="-1"><a class="header-anchor" href="#linux-简介" aria-hidden="true">#</a> Linux 简介</h3>
<p>我们上面已经简单了 Linux，这里只强调三点。</p>
<ul>
<li><strong>类 Unix 系统</strong> ： Linux 是一种自由、开放源码的类似 Unix 的操作系统</li>
<li><strong>Linux 本质是指 Linux 内核</strong> ： 严格来讲，Linux 这个词本身只表示 Linux 内核，单独的 Linux 内核并不能成为一个可以正常工作的操作系统。所以，就有了各种 Linux 发行版。</li>
<li><strong>Linux 之父(林纳斯·本纳第克特·托瓦兹 Linus Benedict Torvalds)</strong> ： 一个编程领域的传奇式人物，真大佬！我辈崇拜敬仰之楷模。他是 <strong>Linux 内核</strong> 的最早作者，随后发起了这个开源项目，担任 Linux 内核的首要架构师。他还发起了 Git 这个开源项目，并为主要的开发者。</li>
</ul>
<p><img src="@source/code/java/cs-basics/operating-system/images/Linux之父.png" alt="Linux" loading="lazy"></p>
<h3 id="linux-诞生" tabindex="-1"><a class="header-anchor" href="#linux-诞生" aria-hidden="true">#</a> Linux 诞生</h3>
<p>1989 年，Linus Torvalds 进入芬兰陆军新地区旅，服 11 个月的国家义务兵役，军衔为少尉，主要服务于计算机部门，任务是弹道计算。服役期间，购买了安德鲁·斯图尔特·塔能鲍姆所著的教科书及 minix 源代码，开始研究操作系统。1990 年，他退伍后回到大学，开始接触 Unix。</p>
<blockquote>
<p><strong>Minix</strong> 是一个迷你版本的类 Unix 操作系统，由塔能鲍姆教授为了教学之用而创作，采用微核心设计。它启发了 Linux 内核的创作。</p>
</blockquote>
<p>1991 年，Linus Torvalds 开源了 Linux 内核。Linux 以一只可爱的企鹅作为标志，象征着敢作敢为、热爱生活。</p>
<p><img src="@source/code/java/cs-basics/operating-system/images/Linux-Logo.png" alt="OPINION: Make the switch to a Linux operating system | Opinion ..." loading="lazy"></p>
<h3 id="常见-linux-发行版本有哪些" tabindex="-1"><a class="header-anchor" href="#常见-linux-发行版本有哪些" aria-hidden="true">#</a> 常见 Linux 发行版本有哪些？</h3>
<p>Linus Torvalds 开源的只是 Linux 内核，我们上面也提到了操作系统内核的作用。一些组织或厂商将 Linux 内核与各种软件和文档包装起来，并提供系统安装界面和系统配置、设定与管理工具，就构成了 Linux 的发行版本。</p>
<blockquote>
<p>内核主要负责系统的内存管理，硬件设备的管理，文件系统的管理以及应用程序的管理。</p>
</blockquote>
<p>Linux 的发行版本可以大体分为两类：</p>
<ul>
<li>商业公司维护的发行版本，以著名的 Red Hat 为代表，比较典型的有 CentOS 。</li>
<li>社区组织维护的发行版本，以 Debian 为代表，比较典型的有 Ubuntu、Debian。</li>
</ul>
<p>对于初学者学习 Linux ,推荐选择 CentOS 。</p>
<h2 id="linux-文件系统概览" tabindex="-1"><a class="header-anchor" href="#linux-文件系统概览" aria-hidden="true">#</a> Linux 文件系统概览</h2>
<h3 id="linux-文件系统简介" tabindex="-1"><a class="header-anchor" href="#linux-文件系统简介" aria-hidden="true">#</a> Linux 文件系统简介</h3>
<p><strong>在 Linux 操作系统中，所有被操作系统管理的资源，例如网络接口卡、磁盘驱动器、打印机、输入输出设备、普通文件或是目录都被看作是一个文件。</strong> 也就是说在 Linux 系统中有一个重要的概念：<strong>一切都是文件</strong>。</p>
<p>其实这是 UNIX 哲学的一个体现，在 UNIX 系统中，把一切资源都看作是文件，Linux 的文件系统也是借鉴 UNIX 文件系统而来。</p>
<h3 id="inode-介绍" tabindex="-1"><a class="header-anchor" href="#inode-介绍" aria-hidden="true">#</a> inode 介绍</h3>
<p><strong>inode 是 linux/unix 文件系统的基础。那么，inode 是什么?有什么作用呢?</strong></p>
<p>硬盘的最小存储单位是扇区(Sector)，块(block)由多个扇区组成。文件数据存储在块中。块的最常见的大小是 4kb，约为 8 个连续的扇区组成（每个扇区存储 512 字节）。一个文件可能会占用多个 block，但是一个块只能存放一个文件。</p>
<p>虽然，我们将文件存储在了块(block)中，但是我们还需要一个空间来存储文件的 <strong>元信息 metadata</strong> ：如某个文件被分成几块、每一块在的地址、文件拥有者，创建时间，权限，大小等。这种 <strong>存储文件元信息的区域就叫 inode</strong>，译为索引节点：<strong>i（index）+node</strong>。 每个文件都有一个 inode，存储文件的元信息。</p>
<p>可以使用 <code v-pre>stat</code> 命令可以查看文件的 inode 信息。每个 inode 都有一个号码，Linux/Unix 操作系统不使用文件名来区分文件，而是使用 inode 号码区分不同的文件。</p>
<p>简单来说：inode 就是用来维护某个文件被分成几块、每一块在的地址、文件拥有者，创建时间，权限，大小等信息。</p>
<p>简单总结一下：</p>
<ul>
<li><strong>inode</strong> ：记录文件的属性信息，可以使用 stat 命令查看 inode 信息。</li>
<li><strong>block</strong> ：实际文件的内容，如果一个文件大于一个块时候，那么将占用多个 block，但是一个块只能存放一个文件。（因为数据是由 inode 指向的，如果有两个文件的数据存放在同一个块中，就会乱套了）</li>
</ul>
<p><img src="@source/code/java/cs-basics/operating-system/images/文件inode信息.png" alt="文件inode信息" loading="lazy"></p>
<h3 id="linux-文件类型" tabindex="-1"><a class="header-anchor" href="#linux-文件类型" aria-hidden="true">#</a> Linux 文件类型</h3>
<p>Linux 支持很多文件类型，其中非常重要的文件类型有: <strong>普通文件</strong>，<strong>目录文件</strong>，<strong>链接文件</strong>，<strong>设备文件</strong>，<strong>管道文件</strong>，<strong>Socket 套接字文件</strong>等。</p>
<ul>
<li><strong>普通文件（-）</strong> ： 用于存储信息和数据， Linux 用户可以根据访问权限对普通文件进行查看、更改和删除。比如：图片、声音、PDF、text、视频、源代码等等。</li>
<li><strong>目录文件（d，directory file）</strong> ：目录也是文件的一种，用于表示和管理系统中的文件，目录文件中包含一些文件名和子目录名。打开目录事实上就是打开目录文件。</li>
<li><strong>符号链接文件（l，symbolic link）</strong> ：保留了指向文件的地址而不是文件本身。</li>
<li><strong>字符设备（c，char）</strong> ：用来访问字符设备比如键盘。</li>
<li><strong>设备文件（b，block）</strong> ： 用来访问块设备比如硬盘、软盘。</li>
<li><strong>管道文件(p,pipe)</strong> : 一种特殊类型的文件，用于进程之间的通信。</li>
<li><strong>套接字(s,socket)</strong> ：用于进程间的网络通信，也可以用于本机之间的非网络通信。</li>
</ul>
<h3 id="linux-目录树" tabindex="-1"><a class="header-anchor" href="#linux-目录树" aria-hidden="true">#</a> Linux 目录树</h3>
<p>所有可操作的计算机资源都存在于目录树这个结构中，对计算资源的访问，可以看做是对这棵目录树的访问。</p>
<p><strong>Linux 的目录结构如下：</strong></p>
<p>Linux 文件系统的结构层次鲜明，就像一棵倒立的树，最顶层是其根目录：
<img src="@source/code/java/cs-basics/operating-system/images/Linux目录树.png" alt="Linux的目录结构" loading="lazy"></p>
<p><strong>常见目录说明：</strong></p>
<ul>
<li><strong>/bin：</strong> 存放二进制可执行文件(ls、cat、mkdir 等)，常用命令一般都在这里；</li>
<li><strong>/etc：</strong> 存放系统管理和配置文件；</li>
<li><strong>/home：</strong> 存放所有用户文件的根目录，是用户主目录的基点，比如用户 user 的主目录就是/home/user，可以用~user 表示；</li>
<li><strong>/usr ：</strong> 用于存放系统应用程序；</li>
<li><strong>/opt：</strong> 额外安装的可选应用程序包所放置的位置。一般情况下，我们可以把 tomcat 等都安装到这里；</li>
<li><strong>/proc：</strong> 虚拟文件系统目录，是系统内存的映射。可直接访问这个目录来获取系统信息；</li>
<li><strong>/root：</strong> 超级用户（系统管理员）的主目录（特权阶级<sup>o</sup>）；</li>
<li><strong>/sbin:</strong> 存放二进制可执行文件，只有 root 才能访问。这里存放的是系统管理员使用的系统级别的管理命令和程序。如 ifconfig 等；</li>
<li><strong>/dev：</strong> 用于存放设备文件；</li>
<li><strong>/mnt：</strong> 系统管理员安装临时文件系统的安装点，系统提供这个目录是让用户临时挂载其他的文件系统；</li>
<li><strong>/boot：</strong> 存放用于系统引导时使用的各种文件；</li>
<li><strong>/lib ：</strong> 存放着和系统运行相关的库文件 ；</li>
<li><strong>/tmp：</strong> 用于存放各种临时文件，是公用的临时文件存储点；</li>
<li><strong>/var：</strong> 用于存放运行时需要改变数据的文件，也是某些大文件的溢出区，比方说各种服务的日志文件（系统启动日志等。）等；</li>
<li><strong>/lost+found：</strong> 这个目录平时是空的，系统非正常关机而留下“无家可归”的文件（windows 下叫什么.chk）就在这里。</li>
</ul>
<h2 id="linux-基本命令" tabindex="-1"><a class="header-anchor" href="#linux-基本命令" aria-hidden="true">#</a> Linux 基本命令</h2>
<p>下面只是给出了一些比较常用的命令。</p>
<p>推荐一个 Linux 命令快查网站，非常不错，大家如果遗忘某些命令或者对某些命令不理解都可以在这里得到解决。Linux 命令在线速查手册：<a href="https://www.w3xue.com/manual/linux/" target="_blank" rel="noopener noreferrer">https://www.w3xue.com/manual/linux/<ExternalLinkIcon/></a> 。</p>
<p>另外，<a href="https://www.shell.how/" target="_blank" rel="noopener noreferrer">shell.how<ExternalLinkIcon/></a> 这个网站可以用来解释常见命令的意思，对你学习 Linux 基本命令以及其他常用命令（如 Git、NPM）。</p>
<h3 id="目录切换命令" tabindex="-1"><a class="header-anchor" href="#目录切换命令" aria-hidden="true">#</a> 目录切换命令</h3>
<ul>
<li><strong><code v-pre>cd usr</code>：</strong> 切换到该目录下 usr 目录</li>
<li><strong><code v-pre>cd ..（或cd../）</code>：</strong> 切换到上一层目录</li>
<li><strong><code v-pre>cd /</code>：</strong> 切换到系统根目录</li>
<li><strong><code v-pre>cd ~</code>：</strong> 切换到用户主目录</li>
<li><strong><code v-pre>cd -</code>：</strong> 切换到上一个操作所在目录</li>
</ul>
<h3 id="目录的操作命令-增删改查" tabindex="-1"><a class="header-anchor" href="#目录的操作命令-增删改查" aria-hidden="true">#</a> 目录的操作命令(增删改查)</h3>
<ul>
<li><strong><code v-pre>mkdir 目录名称</code>：</strong> 增加目录。</li>
<li><strong><code v-pre>ls/ll</code></strong>（ll 是 ls -l 的别名，ll 命令可以看到该目录下的所有目录和文件的详细信息）：查看目录信息。</li>
<li><strong><code v-pre>find 目录 参数</code>：</strong> 寻找目录（查）。示例：① 列出当前目录及子目录下所有文件和文件夹: <code v-pre>find .</code>；② 在<code v-pre>/home</code>目录下查找以.txt 结尾的文件名:<code v-pre>find /home -name &quot;*.txt&quot;</code> ,忽略大小写: <code v-pre>find /home -iname &quot;*.txt&quot;</code> ；③ 当前目录及子目录下查找所有以.txt 和.pdf 结尾的文件:<code v-pre>find . \( -name &quot;*.txt&quot; -o -name &quot;*.pdf&quot; \)</code>或<code v-pre>find . -name &quot;*.txt&quot; -o -name &quot;*.pdf&quot;</code>。</li>
<li><strong><code v-pre>mv 目录名称 新目录名称</code>：</strong> 修改目录的名称（改）。注意：mv 的语法不仅可以对目录进行重命名而且也可以对各种文件，压缩包等进行 重命名的操作。mv 命令用来对文件或目录重新命名，或者将文件从一个目录移到另一个目录中。后面会介绍到 mv 命令的另一个用法。</li>
<li><strong><code v-pre>mv 目录名称 目录的新位置</code>：</strong> 移动目录的位置---剪切（改）。注意：mv 语法不仅可以对目录进行剪切操作，对文件和压缩包等都可执行剪切操作。另外 mv 与 cp 的结果不同，mv 好像文件“搬家”，文件个数并未增加。而 cp 对文件进行复制，文件个数增加了。</li>
<li><strong><code v-pre>cp -r 目录名称 目录拷贝的目标位置</code>：</strong> 拷贝目录（改），-r 代表递归拷贝 。注意：cp 命令不仅可以拷贝目录还可以拷贝文件，压缩包等，拷贝文件和压缩包时不 用写-r 递归。</li>
<li><strong><code v-pre>rm [-rf] 目录</code> :</strong> 删除目录（删）。注意：rm 不仅可以删除目录，也可以删除其他文件或压缩包，为了增强大家的记忆， 无论删除任何目录或文件，都直接使用<code v-pre>rm -rf</code> 目录/文件/压缩包。</li>
</ul>
<h3 id="文件的操作命令-增删改查" tabindex="-1"><a class="header-anchor" href="#文件的操作命令-增删改查" aria-hidden="true">#</a> 文件的操作命令(增删改查)</h3>
<ul>
<li><strong><code v-pre>touch 文件名称</code>:</strong> 文件的创建（增）。</li>
<li><strong><code v-pre>cat/more/less/tail 文件名称</code></strong> ：文件的查看（查） 。命令 <code v-pre>tail -f 文件</code> 可以对某个文件进行动态监控，例如 tomcat 的日志文件， 会随着程序的运行，日志会变化，可以使用 <code v-pre>tail -f catalina-2016-11-11.log</code> 监控 文 件的变化 。</li>
<li><strong><code v-pre>vim 文件</code>：</strong> 修改文件的内容（改）。vim 编辑器是 Linux 中的强大组件，是 vi 编辑器的加强版，vim 编辑器的命令和快捷方式有很多，但此处不一一阐述，大家也无需研究的很透彻，使用 vim 编辑修改文件的方式基本会使用就可以了。在实际开发中，使用 vim 编辑器主要作用就是修改配置文件，下面是一般步骤： <code v-pre>vim 文件------&gt;进入文件-----&gt;命令模式------&gt;按i进入编辑模式-----&gt;编辑文件 -------&gt;按Esc进入底行模式-----&gt;输入：wq/q!</code> （输入 wq 代表写入内容并退出，即保存；输入 q!代表强制退出不保存）。</li>
<li><strong><code v-pre>rm -rf 文件</code>：</strong> 删除文件（删）。</li>
</ul>
<h3 id="压缩文件的操作命令" tabindex="-1"><a class="header-anchor" href="#压缩文件的操作命令" aria-hidden="true">#</a> 压缩文件的操作命令</h3>
<p><strong>1）打包并压缩文件：</strong></p>
<p>Linux 中的打包文件一般是以.tar 结尾的，压缩的命令一般是以.gz 结尾的。而一般情况下打包和压缩是一起进行的，打包并压缩后的文件的后缀名一般.tar.gz。
命令：<code v-pre>tar -zcvf 打包压缩后的文件名 要打包压缩的文件</code> ，其中：</p>
<ul>
<li>z：调用 gzip 压缩命令进行压缩</li>
<li>c：打包文件</li>
<li>v：显示运行过程</li>
<li>f：指定文件名</li>
</ul>
<p>比如：假如 test 目录下有三个文件分别是：aaa.txt bbb.txt ccc.txt，如果我们要打包 test 目录并指定压缩后的压缩包名称为 test.tar.gz 可以使用命令：<strong><code v-pre>tar -zcvf test.tar.gz aaa.txt bbb.txt ccc.txt</code> 或 <code v-pre>tar -zcvf test.tar.gz /test/</code></strong></p>
<p><strong>2）解压压缩包：</strong></p>
<p>命令：<code v-pre>tar [-xvf] 压缩文件</code></p>
<p>其中：x：代表解压</p>
<p>示例：</p>
<ul>
<li>将 /test 下的 test.tar.gz 解压到当前目录下可以使用命令：<strong><code v-pre>tar -xvf test.tar.gz</code></strong></li>
<li>将 /test 下的 test.tar.gz 解压到根目录/usr 下:<strong><code v-pre>tar -xvf test.tar.gz -C /usr</code></strong>（- C 代表指定解压的位置）</li>
</ul>
<h3 id="linux-的权限命令" tabindex="-1"><a class="header-anchor" href="#linux-的权限命令" aria-hidden="true">#</a> Linux 的权限命令</h3>
<p>操作系统中每个文件都拥有特定的权限、所属用户和所属组。权限是操作系统用来限制资源访问的机制，在 Linux 中权限一般分为读(readable)、写(writable)和执行(excutable)，分为三组。分别对应文件的属主(owner)，属组(group)和其他用户(other)，通过这样的机制来限制哪些用户、哪些组可以对特定的文件进行什么样的操作。</p>
<p>通过 <strong><code v-pre>ls -l</code></strong> 命令我们可以 查看某个目录下的文件或目录的权限</p>
<p>示例：在随意某个目录下<code v-pre>ls -l</code></p>
<p><img src="@source/code/java/cs-basics/operating-system/images/Linux权限命令.png" alt="" loading="lazy"></p>
<p>第一列的内容的信息解释如下：</p>
<p><img src="@source/code/java/cs-basics/operating-system/images/Linux权限解读.png" alt="" loading="lazy"></p>
<blockquote>
<p>下面将详细讲解文件的类型、Linux 中权限以及文件有所有者、所在组、其它组具体是什么？</p>
</blockquote>
<p><strong>文件的类型：</strong></p>
<ul>
<li>d： 代表目录</li>
<li>-： 代表文件</li>
<li>l： 代表软链接（可以认为是 window 中的快捷方式）</li>
</ul>
<p><strong>Linux 中权限分为以下几种：</strong></p>
<ul>
<li>r：代表权限是可读，r 也可以用数字 4 表示</li>
<li>w：代表权限是可写，w 也可以用数字 2 表示</li>
<li>x：代表权限是可执行，x 也可以用数字 1 表示</li>
</ul>
<p><strong>文件和目录权限的区别：</strong></p>
<p>对文件和目录而言，读写执行表示不同的意义。</p>
<p>对于文件：</p>
<table>
<thead>
<tr>
<th style="text-align:left">权限名称</th>
<th style="text-align:right">可执行操作</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">r</td>
<td style="text-align:right">可以使用 cat 查看文件的内容</td>
</tr>
<tr>
<td style="text-align:left">w</td>
<td style="text-align:right">可以修改文件的内容</td>
</tr>
<tr>
<td style="text-align:left">x</td>
<td style="text-align:right">可以将其运行为二进制文件</td>
</tr>
</tbody>
</table>
<p>对于目录：</p>
<table>
<thead>
<tr>
<th style="text-align:left">权限名称</th>
<th style="text-align:right">可执行操作</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">r</td>
<td style="text-align:right">可以查看目录下列表</td>
</tr>
<tr>
<td style="text-align:left">w</td>
<td style="text-align:right">可以创建和删除目录下文件</td>
</tr>
<tr>
<td style="text-align:left">x</td>
<td style="text-align:right">可以使用 cd 进入目录</td>
</tr>
</tbody>
</table>
<p>需要注意的是： <strong>超级用户可以无视普通用户的权限，即使文件目录权限是 000，依旧可以访问。</strong></p>
<p><strong>在 linux 中的每个用户必须属于一个组，不能独立于组外。在 linux 中每个文件有所有者、所在组、其它组的概念。</strong></p>
<ul>
<li><strong>所有者(u)</strong> ：一般为文件的创建者，谁创建了该文件，就天然的成为该文件的所有者，用 <code v-pre>ls ‐ahl</code> 命令可以看到文件的所有者 也可以使用 chown 用户名 文件名来修改文件的所有者 。</li>
<li><strong>文件所在组(g)</strong> ：当某个用户创建了一个文件后，这个文件的所在组就是该用户所在的组用 <code v-pre>ls ‐ahl</code>命令可以看到文件的所有组也可以使用 chgrp 组名 文件名来修改文件所在的组。</li>
<li><strong>其它组(o)</strong> ：除开文件的所有者和所在组的用户外，系统的其它用户都是文件的其它组。</li>
</ul>
<blockquote>
<p>我们再来看看如何修改文件/目录的权限。</p>
</blockquote>
<p><strong>修改文件/目录的权限的命令：<code v-pre>chmod</code></strong></p>
<p>示例：修改/test 下的 aaa.txt 的权限为文件所有者有全部权限，文件所有者所在的组有读写权限，其他用户只有读的权限。</p>
<p><strong><code v-pre>chmod u=rwx,g=rw,o=r aaa.txt</code></strong> 或者 <strong><code v-pre>chmod 764 aaa.txt</code></strong></p>
<p><img src="@source/code/java/cs-basics/operating-system/images/修改文件权限.png" alt="" loading="lazy"></p>
<p><strong>补充一个比较常用的东西:</strong></p>
<p>假如我们装了一个 zookeeper，我们每次开机到要求其自动启动该怎么办？</p>
<ol>
<li>新建一个脚本 zookeeper</li>
<li>为新建的脚本 zookeeper 添加可执行权限，命令是:<code v-pre>chmod +x zookeeper</code></li>
<li>把 zookeeper 这个脚本添加到开机启动项里面，命令是：<code v-pre>chkconfig --add zookeeper</code></li>
<li>如果想看看是否添加成功，命令是：<code v-pre>chkconfig --list</code></li>
</ol>
<h3 id="linux-用户管理" tabindex="-1"><a class="header-anchor" href="#linux-用户管理" aria-hidden="true">#</a> Linux 用户管理</h3>
<p>Linux 系统是一个多用户多任务的分时操作系统，任何一个要使用系统资源的用户，都必须首先向系统管理员申请一个账号，然后以这个账号的身份进入系统。</p>
<p>用户的账号一方面可以帮助系统管理员对使用系统的用户进行跟踪，并控制他们对系统资源的访问；另一方面也可以帮助用户组织文件，并为用户提供安全性保护。</p>
<p><strong>Linux 用户管理相关命令:</strong></p>
<ul>
<li><code v-pre>useradd 选项 用户名</code>:添加用户账号</li>
<li><code v-pre>userdel 选项 用户名</code>:删除用户帐号</li>
<li><code v-pre>usermod 选项 用户名</code>:修改帐号</li>
<li><code v-pre>passwd 用户名</code>:更改或创建用户的密码</li>
<li><code v-pre>passwd -S 用户名</code> :显示用户账号密码信息</li>
<li><code v-pre>passwd -d 用户名</code>: 清除用户密码</li>
</ul>
<p><code v-pre>useradd</code> 命令用于 Linux 中创建的新的系统用户。<code v-pre>useradd</code>可用来建立用户帐号。帐号建好之后，再用<code v-pre>passwd</code>设定帐号的密码．而可用<code v-pre>userdel</code>删除帐号。使用<code v-pre>useradd</code>指令所建立的帐号，实际上是保存在 <code v-pre>/etc/passwd</code>文本文件中。</p>
<p><code v-pre>passwd</code>命令用于设置用户的认证信息，包括用户密码、密码过期时间等。系统管理者则能用它管理系统用户的密码。只有管理者可以指定用户名称，一般用户只能变更自己的密码。</p>
<h3 id="linux-系统用户组的管理" tabindex="-1"><a class="header-anchor" href="#linux-系统用户组的管理" aria-hidden="true">#</a> Linux 系统用户组的管理</h3>
<p>每个用户都有一个用户组，系统可以对一个用户组中的所有用户进行集中管理。不同 Linux 系统对用户组的规定有所不同，如 Linux 下的用户属于与它同名的用户组，这个用户组在创建用户时同时创建。</p>
<p>用户组的管理涉及用户组的添加、删除和修改。组的增加、删除和修改实际上就是对<code v-pre>/etc/group</code>文件的更新。</p>
<p><strong>Linux 系统用户组的管理相关命令:</strong></p>
<ul>
<li><code v-pre>groupadd 选项 用户组</code> :增加一个新的用户组</li>
<li><code v-pre>groupdel 用户组</code>:要删除一个已有的用户组</li>
<li><code v-pre>groupmod 选项 用户组</code> : 修改用户组的属性</li>
</ul>
<h3 id="其他常用命令" tabindex="-1"><a class="header-anchor" href="#其他常用命令" aria-hidden="true">#</a> 其他常用命令</h3>
<ul>
<li>
<p><strong><code v-pre>pwd</code>：</strong> 显示当前所在位置</p>
</li>
<li>
<p><code v-pre>sudo + 其他命令</code>：以系统管理者的身份执行指令，也就是说，经由 sudo 所执行的指令就好像是 root 亲自执行。</p>
</li>
<li>
<p><strong><code v-pre>grep 要搜索的字符串 要搜索的文件 --color</code>：</strong> 搜索命令，--color 代表高亮显示</p>
</li>
<li>
<p><strong><code v-pre>ps -ef</code>/<code v-pre>ps -aux</code>：</strong> 这两个命令都是查看当前系统正在运行进程，两者的区别是展示格式不同。如果想要查看特定的进程可以使用这样的格式：<strong><code v-pre>ps aux|grep redis</code></strong> （查看包括 redis 字符串的进程），也可使用 <code v-pre>pgrep redis -a</code>。</p>
<p>注意：如果直接用 ps（（Process Status））命令，会显示所有进程的状态，通常结合 grep 命令查看某进程的状态。</p>
</li>
<li>
<p><strong><code v-pre>kill -9 进程的pid</code>：</strong> 杀死进程（-9 表示强制终止。）</p>
<p>先用 ps 查找进程，然后用 kill 杀掉</p>
</li>
<li>
<p><strong>网络通信命令：</strong></p>
<ul>
<li>查看当前系统的网卡信息：ifconfig</li>
<li>查看与某台机器的连接情况：ping</li>
<li>查看当前系统的端口使用：netstat -an</li>
</ul>
</li>
<li>
<p><strong>net-tools 和 iproute2 ：</strong>
<code v-pre>net-tools</code>起源于 BSD 的 TCP/IP 工具箱，后来成为老版本 LinuxLinux 中配置网络功能的工具。但自 2001 年起，Linux 社区已经对其停止维护。同时，一些 Linux 发行版比如 Arch Linux 和 CentOS/RHEL 7 则已经完全抛弃了 net-tools，只支持<code v-pre>iproute2</code>。linux ip 命令类似于 ifconfig，但功能更强大，旨在替代它。更多详情请阅读<a href="https://linoxide.com/linux-command/use-ip-command-linux" target="_blank" rel="noopener noreferrer">如何在 Linux 中使用 IP 命令和示例<ExternalLinkIcon/></a></p>
</li>
<li>
<p><strong><code v-pre>shutdown</code>：</strong> <code v-pre>shutdown -h now</code>： 指定现在立即关机；<code v-pre>shutdown +5 &quot;System will shutdown after 5 minutes&quot;</code>：指定 5 分钟后关机，同时送出警告信息给登入用户。</p>
</li>
<li>
<p><strong><code v-pre>reboot</code>：</strong> <strong><code v-pre>reboot</code>：</strong> 重开机。<strong><code v-pre>reboot -w</code>：</strong> 做个重开机的模拟（只有纪录并不会真的重开机）。</p>
</li>
</ul>
<h2 id="linux-环境变量" tabindex="-1"><a class="header-anchor" href="#linux-环境变量" aria-hidden="true">#</a> Linux 环境变量</h2>
<p>在 Linux 系统中，环境变量是用来定义系统运行环境的一些参数，比如每个用户不同的主目录（HOME）。</p>
<h3 id="环境变量分类" tabindex="-1"><a class="header-anchor" href="#环境变量分类" aria-hidden="true">#</a> 环境变量分类</h3>
<p>按照作用域来分，环境变量可以简单的分成:</p>
<ul>
<li>用户级别环境变量 : <code v-pre>~/.bashrc</code>、<code v-pre>~/.bash_profile</code>。</li>
<li>系统级别环境变量 : <code v-pre>/etc/bashrc</code>、<code v-pre>/etc/environment</code>、<code v-pre>/etc/profile</code>、<code v-pre>/etc/profile.d</code>。</li>
</ul>
<p>上述配置文件执行先后顺序为：<code v-pre>/etc/enviroment</code> –&gt; <code v-pre>/etc/profile</code> –&gt; <code v-pre>/etc/profile.d</code> –&gt; <code v-pre>~/.bash_profile</code> –&gt; <code v-pre>/etc/bashrc</code> –&gt; <code v-pre>~/.bashrc</code></p>
<p>如果要修改系统级别环境变量文件，需要管理员具备对该文件的写入权限。</p>
<p>建议用户级别环境变量在 <code v-pre>~/.bash_profile</code>中配置，系统级别环境变量在 <code v-pre>/etc/profile.d</code> 中配置。</p>
<p>按照生命周期来分，环境变量可以简单的分成:</p>
<ul>
<li>永久的：需要用户修改相关的配置文件，变量永久生效。</li>
<li>临时的：用户利用 <code v-pre>export</code> 命令，在当前终端下声明环境变量，关闭 shell 终端失效。</li>
</ul>
<h3 id="读取环境变量" tabindex="-1"><a class="header-anchor" href="#读取环境变量" aria-hidden="true">#</a> 读取环境变量</h3>
<p>通过 <code v-pre>export</code> 命令可以输出当前系统定义的所有环境变量。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 列出当前的环境变量值</span>
<span class="token builtin class-name">export</span> -p
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>除了 <code v-pre>export</code> 命令之外， <code v-pre>env</code> 命令也可以列出所有环境变量。</p>
<p><code v-pre>echo</code> 命令可以输出指定环境变量的值。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token comment"># 输出当前的PATH环境变量的值</span>
<span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span>
<span class="token comment"># 输出当前的HOME环境变量的值</span>
<span class="token builtin class-name">echo</span> <span class="token environment constant">$HOME</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="环境变量修改" tabindex="-1"><a class="header-anchor" href="#环境变量修改" aria-hidden="true">#</a> 环境变量修改</h3>
<p>通过 <code v-pre>export</code>命令可以修改指定的环境变量。不过，这种方式修改环境变量仅仅对当前 shell 终端生效，关闭 shell 终端就会失效。修改完成之后，立即生效。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span>./JAVA_HOME/lib<span class="token punctuation">;</span><span class="token variable">$JAVA_HOME</span>/jre/lib
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过 <code v-pre>vim</code> 命令修改环境变量配置文件。这种方式修改环境变量永久有效。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">vim</span> ~/.bash_profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果修改的是系统级别环境变量则对所有用户生效，如果修改的是用户级别环境变量则仅对当前用户生效。</p>
<p>修改完成之后，需要 <code v-pre>source</code> 命令让其生效或者关闭 shell 终端重新登录。</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token builtin class-name">source</span> /etc/profile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>
