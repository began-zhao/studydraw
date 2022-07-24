<template><div><h2 id="版本控制" tabindex="-1"><a class="header-anchor" href="#版本控制" aria-hidden="true">#</a> 版本控制</h2>
<h3 id="什么是版本控制" tabindex="-1"><a class="header-anchor" href="#什么是版本控制" aria-hidden="true">#</a> 什么是版本控制</h3>
<p>版本控制是一种记录一个或若干文件内容变化，以便将来查阅特定版本修订情况的系统。 除了项目源代码，你可以对任何类型的文件进行版本控制。</p>
<h3 id="为什么要版本控制" tabindex="-1"><a class="header-anchor" href="#为什么要版本控制" aria-hidden="true">#</a> 为什么要版本控制</h3>
<p>有了它你就可以将某个文件回溯到之前的状态，甚至将整个项目都回退到过去某个时间点的状态，你可以比较文件的变化细节，查出最后是谁修改了哪个地方，从而找出导致怪异问题出现的原因，又是谁在何时报告了某个功能缺陷等等。</p>
<h3 id="本地版本控制系统" tabindex="-1"><a class="header-anchor" href="#本地版本控制系统" aria-hidden="true">#</a> 本地版本控制系统</h3>
<p>许多人习惯用复制整个项目目录的方式来保存不同的版本，或许还会改名加上备份时间以示区别。 这么做唯一的好处就是简单，但是特别容易犯错。 有时候会混淆所在的工作目录，一不小心会写错文件或者覆盖意想外的文件。</p>
<p>为了解决这个问题，人们很久以前就开发了许多种本地版本控制系统，大多都是采用某种简单的数据库来记录文件的历次更新差异。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-3/本地版本控制系统.png" alt="本地版本控制系统" loading="lazy"></p>
<h3 id="集中化的版本控制系统" tabindex="-1"><a class="header-anchor" href="#集中化的版本控制系统" aria-hidden="true">#</a> 集中化的版本控制系统</h3>
<p>接下来人们又遇到一个问题，如何让在不同系统上的开发者协同工作？ 于是，集中化的版本控制系统（Centralized Version Control Systems，简称 CVCS）应运而生。</p>
<p>集中化的版本控制系统都有一个单一的集中管理的服务器，保存所有文件的修订版本，而协同工作的人们都通过客户端连到这台服务器，取出最新的文件或者提交更新。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-3/集中化的版本控制系统.png" alt="集中化的版本控制系统" loading="lazy"></p>
<p>这么做虽然解决了本地版本控制系统无法让在不同系统上的开发者协同工作的诟病，但也还是存在下面的问题：</p>
<ul>
<li><strong>单点故障：</strong> 中央服务器宕机，则其他人无法使用；如果中心数据库磁盘损坏又没有进行备份，你将丢失所有数据。本地版本控制系统也存在类似问题，只要整个项目的历史记录被保存在单一位置，就有丢失所有历史更新记录的风险。</li>
<li><strong>必须联网才能工作：</strong> 受网络状况、带宽影响。</li>
</ul>
<h3 id="分布式版本控制系统" tabindex="-1"><a class="header-anchor" href="#分布式版本控制系统" aria-hidden="true">#</a> 分布式版本控制系统</h3>
<p>于是分布式版本控制系统（Distributed Version Control System，简称 DVCS）面世了。 Git 就是一个典型的分布式版本控制系统。</p>
<p>这类系统，客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来。 这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复。 因为每一次的克隆操作，实际上都是一次对代码仓库的完整备份。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-3/分布式版本控制系统.png" alt="分布式版本控制系统" loading="lazy"></p>
<p>分布式版本控制系统可以不用联网就可以工作，因为每个人的电脑上都是完整的版本库，当你修改了某个文件后，你只需要将自己的修改推送给别人就可以了。但是，在实际使用分布式版本控制系统的时候，很少会直接进行推送修改，而是使用一台充当“中央服务器”的东西。这个服务器的作用仅仅是用来方便“交换”大家的修改，没有它大家也一样干活，只是交换修改不方便而已。</p>
<p>分布式版本控制系统的优势不单是不必联网这么简单，后面我们还会看到 Git 极其强大的分支管理等功能。</p>
<h2 id="认识-git" tabindex="-1"><a class="header-anchor" href="#认识-git" aria-hidden="true">#</a> 认识 Git</h2>
<h3 id="git-简史" tabindex="-1"><a class="header-anchor" href="#git-简史" aria-hidden="true">#</a> Git 简史</h3>
<p>Linux 内核项目组当时使用分布式版本控制系统 BitKeeper 来管理和维护代码。但是，后来开发 BitKeeper 的商业公司同 Linux 内核开源社区的合作关系结束，他们收回了 Linux 内核社区免费使用 BitKeeper 的权力。 Linux 开源社区（特别是 Linux 的缔造者 Linus Torvalds）基于使用 BitKeeper 时的经验教训，开发出自己的版本系统，而且对新的版本控制系统做了很多改进。</p>
<h3 id="git-与其他版本管理系统的主要区别" tabindex="-1"><a class="header-anchor" href="#git-与其他版本管理系统的主要区别" aria-hidden="true">#</a> Git 与其他版本管理系统的主要区别</h3>
<p>Git 在保存和对待各种信息的时候与其它版本控制系统有很大差异，尽管操作起来的命令形式非常相近，理解这些差异将有助于防止你使用中的困惑。</p>
<p>下面我们主要说一个关于 Git 与其他版本管理系统的主要差别：<strong>对待数据的方式</strong>。</p>
<p><strong>Git采用的是直接记录快照的方式，而非差异比较。我后面会详细介绍这两种方式的差别。</strong></p>
<p>大部分版本控制系统（CVS、Subversion、Perforce、Bazaar 等等）都是以文件变更列表的方式存储信息，这类系统<strong>将它们保存的信息看作是一组基本文件和每个文件随时间逐步累积的差异。</strong></p>
<p>具体原理如下图所示，理解起来其实很简单，每当我们提交更新一个文件之后，系统都会记录这个文件做了哪些更新，以增量符号Δ(Delta)表示。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-3deltas.png" alt="" loading="lazy"></p>
<p><strong>我们怎样才能得到一个文件的最终版本呢？</strong></p>
<p>很简单，高中数学的基本知识，我们只需要将这些原文件和这些增加进行相加就行了。</p>
<p><strong>这种方式有什么问题呢？</strong></p>
<p>比如我们的增量特别特别多的话，如果我们要得到最终的文件是不是会耗费时间和性能。</p>
<p>Git 不按照以上方式对待或保存数据。 反之，Git 更像是把数据看作是对小型文件系统的一组快照。 每次你提交更新，或在 Git 中保存项目状态时，它主要对当时的全部文件制作一个快照并保存这个快照的索引。 为了高效，如果文件没有修改，Git 不再重新存储该文件，而是只保留一个链接指向之前存储的文件。 Git 对待数据更像是一个 <strong>快照流</strong>。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-3snapshots.png" alt="" loading="lazy"></p>
<h3 id="git-的三种状态" tabindex="-1"><a class="header-anchor" href="#git-的三种状态" aria-hidden="true">#</a> Git 的三种状态</h3>
<p>Git 有三种状态，你的文件可能处于其中之一：</p>
<ol>
<li><strong>已提交（committed）</strong>：数据已经安全的保存在本地数据库中。</li>
<li><strong>已修改（modified）</strong>：已修改表示修改了文件，但还没保存到数据库中。</li>
<li><strong>已暂存（staged）</strong>：表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。</li>
</ol>
<p>由此引入 Git 项目的三个工作区域的概念：<strong>Git 仓库(.git directory)</strong>、<strong>工作目录(Working Directory)</strong> 以及 <strong>暂存区域(Staging Area)</strong> 。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-3areas.png" alt="" loading="lazy"></p>
<p><strong>基本的 Git 工作流程如下：</strong></p>
<ol>
<li>在工作目录中修改文件。</li>
<li>暂存文件，将文件的快照放入暂存区域。</li>
<li>提交更新，找到暂存区域的文件，将快照永久性存储到 Git 仓库目录。</li>
</ol>
<h2 id="git-使用快速入门" tabindex="-1"><a class="header-anchor" href="#git-使用快速入门" aria-hidden="true">#</a> Git 使用快速入门</h2>
<h3 id="获取-git-仓库" tabindex="-1"><a class="header-anchor" href="#获取-git-仓库" aria-hidden="true">#</a> 获取 Git 仓库</h3>
<p>有两种取得 Git 项目仓库的方法。</p>
<ol>
<li>在现有目录中初始化仓库: 进入项目目录运行  <code v-pre>git init</code>  命令,该命令将创建一个名为 <code v-pre>.git</code> 的子目录。</li>
<li>从一个服务器克隆一个现有的 Git 仓库: <code v-pre>git clone [url]</code> 自定义本地仓库的名字: <code v-pre>git clone [url] directoryname</code></li>
</ol>
<h3 id="记录每次更新到仓库" tabindex="-1"><a class="header-anchor" href="#记录每次更新到仓库" aria-hidden="true">#</a> 记录每次更新到仓库</h3>
<ol>
<li><strong>检测当前文件状态</strong> : <code v-pre>git status</code></li>
<li><strong>提出更改（把它们添加到暂存区</strong>）：<code v-pre>git add filename </code> (针对特定文件)、<code v-pre>git add *</code>(所有文件)、<code v-pre>git add *.txt</code>（支持通配符，所有 .txt 文件）</li>
<li><strong>忽略文件</strong>：<code v-pre>.gitignore</code> 文件</li>
<li><strong>提交更新:</strong> <code v-pre>git commit -m &quot;代码提交信息&quot;</code> （每次准备提交前，先用 <code v-pre>git status</code> 看下，是不是都已暂存起来了， 然后再运行提交命令 <code v-pre>git commit</code>）</li>
<li><strong>跳过使用暂存区域更新的方式</strong> : <code v-pre>git commit -a -m &quot;代码提交信息&quot;</code>。 <code v-pre>git commit</code> 加上 <code v-pre>-a</code> 选项，Git 就会自动把所有已经跟踪过的文件暂存起来一并提交，从而跳过 <code v-pre>git add</code> 步骤。</li>
<li><strong>移除文件</strong> ：<code v-pre>git rm filename</code>  （从暂存区域移除，然后提交。）</li>
<li><strong>对文件重命名</strong> ：<code v-pre>git mv README.md README</code>(这个命令相当于<code v-pre>mv README.md README</code>、<code v-pre>git rm README.md</code>、<code v-pre>git add README</code> 这三条命令的集合)</li>
</ol>
<h3 id="一个好的-git-提交消息" tabindex="-1"><a class="header-anchor" href="#一个好的-git-提交消息" aria-hidden="true">#</a> 一个好的 Git 提交消息</h3>
<p>一个好的 Git 提交消息如下：</p>
<pre><code>标题行：用这一行来描述和解释你的这次提交

主体部分可以是很少的几行，来加入更多的细节来解释提交，最好是能给出一些相关的背景或者解释这个提交能修复和解决什么问题。

主体部分当然也可以有几段，但是一定要注意换行和句子不要太长。因为这样在使用 &quot;git log&quot; 的时候会有缩进比较好看。
</code></pre>
<p>提交的标题行描述应该尽量的清晰和尽量的一句话概括。这样就方便相关的 Git 日志查看工具显示和其他人的阅读。</p>
<h3 id="推送改动到远程仓库" tabindex="-1"><a class="header-anchor" href="#推送改动到远程仓库" aria-hidden="true">#</a> 推送改动到远程仓库</h3>
<ul>
<li>
<p>如果你还没有克隆现有仓库，并欲将你的仓库连接到某个远程服务器，你可以使用如下命令添加：<code v-pre>git remote add origin &lt;server&gt;</code> ,比如我们要让本地的一个仓库和 Github 上创建的一个仓库关联可以这样<code v-pre>git remote add origin https://github.com/Snailclimb/test.git</code></p>
</li>
<li>
<p>将这些改动提交到远端仓库：<code v-pre>git push origin master</code> (可以把 <em>master</em> 换成你想要推送的任何分支)</p>
<p>如此你就能够将你的改动推送到所添加的服务器上去了。</p>
</li>
</ul>
<h3 id="远程仓库的移除与重命名" tabindex="-1"><a class="header-anchor" href="#远程仓库的移除与重命名" aria-hidden="true">#</a> 远程仓库的移除与重命名</h3>
<ul>
<li>将 test 重命名为 test1：<code v-pre>git remote rename test test1</code></li>
<li>移除远程仓库 test1:<code v-pre>git remote rm test1</code></li>
</ul>
<h3 id="查看提交历史" tabindex="-1"><a class="header-anchor" href="#查看提交历史" aria-hidden="true">#</a> 查看提交历史</h3>
<p>在提交了若干更新，又或者克隆了某个项目之后，你也许想回顾下提交历史。 完成这个任务最简单而又有效的工具是 <code v-pre>git log</code> 命令。<code v-pre>git log</code> 会按提交时间列出所有的更新，最近的更新排在最上面。</p>
<p><strong>可以添加一些参数来查看自己希望看到的内容：</strong></p>
<p>只看某个人的提交记录：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> log --author<span class="token operator">=</span>bob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="撤销操作" tabindex="-1"><a class="header-anchor" href="#撤销操作" aria-hidden="true">#</a> 撤销操作</h3>
<p>有时候我们提交完了才发现漏掉了几个文件没有添加，或者提交信息写错了。 此时，可以运行带有 <code v-pre>--amend</code> 选项的提交命令尝试重新提交：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> commit --amend
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>取消暂存的文件</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> reset filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>撤消对文件的修改:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout -- filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>假如你想丢弃你在本地的所有改动与提交，可以到服务器上获取最新的版本历史，并将你本地主分支指向它：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> fetch origin
<span class="token function">git</span> reset --hard origin/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h3>
<p>分支是用来将特性开发绝缘开来的。在你创建仓库的时候，<em>master</em> 是“默认”的分支。在其他分支上进行开发，完成后再将它们合并到主分支上。</p>
<p>我们通常在开发新功能、修复一个紧急 bug 等等时候会选择创建分支。单分支开发好还是多分支开发好，还是要看具体场景来说。</p>
<p>创建一个名字叫做 test 的分支</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换当前分支到 test（当你切换分支的时候，Git 会重置你的工作目录，使其看起来像回到了你在那个分支上最后一次提交的样子。 Git 会自动添加、删除、修改文件以确保此时你的工作目录和这个分支最后一次提交时的样子一模一样）</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-3切换分支.png" alt="" loading="lazy"></p>
<p>你也可以直接这样创建分支并切换过去(上面两条命令的合写)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout -b feature_x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>切换到主分支</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> checkout master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>合并分支(可能会有冲突)</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code> <span class="token function">git</span> merge <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>把新建的分支删掉</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> branch -d feature_x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将分支推送到远端仓库（推送成功后其他人可见）：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">git</span> push origin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="推荐" tabindex="-1"><a class="header-anchor" href="#推荐" aria-hidden="true">#</a> 推荐</h2>
<p><strong>在线演示学习工具：</strong></p>
<p>「补充，来自<a href="https://github.com/Snailclimb/JavaGuide/issues/729" target="_blank" rel="noopener noreferrer">issue729<ExternalLinkIcon/></a>」Learn Git Branching <a href="https://oschina.gitee.io/learn-git-branching/" target="_blank" rel="noopener noreferrer">https://oschina.gitee.io/learn-git-branching/<ExternalLinkIcon/></a> 。该网站可以方便的演示基本的git操作，讲解得明明白白。每一个基本命令的作用和结果。</p>
<p><strong>推荐阅读：</strong></p>
<ul>
<li><a href="https://rogerdudler.github.io/git-guide/index.zh.html" target="_blank" rel="noopener noreferrer">Git - 简明指南<ExternalLinkIcon/></a></li>
<li><a href="https://marklodato.github.io/visual-git-guide/index-zh-cn.html" target="_blank" rel="noopener noreferrer">图解Git<ExternalLinkIcon/></a></li>
<li><a href="https://backlog.com/git-tutorial/cn/intro/intro1_1.html" target="_blank" rel="noopener noreferrer">猴子都能懂得Git入门<ExternalLinkIcon/></a></li>
<li><a href="https://git-scm.com/book/en/v2" target="_blank" rel="noopener noreferrer">https://git-scm.com/book/en/v2<ExternalLinkIcon/></a></li>
<li><a href="https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent" target="_blank" rel="noopener noreferrer">Generating a new SSH key and adding it to the ssh-agent<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/torvalds/subsurface-for-dirk/blob/a48494d2fbed58c751e9b7e8fbff88582f9b2d02/README#L88" target="_blank" rel="noopener noreferrer">一个好的 Git 提交消息，出自 Linus 之手<ExternalLinkIcon/></a></li>
</ul>
</div></template>
