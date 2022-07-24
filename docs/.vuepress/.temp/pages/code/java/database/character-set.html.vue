<template><div><p>MySQL 字符编码集中有两套 UTF-8 编码实现：<strong><code v-pre>utf8</code></strong> 和 <strong><code v-pre>utf8mb4</code></strong>。</p>
<p>如果使用 <strong><code v-pre>utf8</code></strong>  的话，存储emoji 符号和一些比较复杂的汉字、繁体字就会出错。</p>
<p>为什么会这样呢？这篇文章可以从源头给你解答。</p>
<h2 id="何为字符集" tabindex="-1"><a class="header-anchor" href="#何为字符集" aria-hidden="true">#</a> 何为字符集？</h2>
<p>字符是各种文字和符号的统称，包括各个国家文字、标点符号、表情、数字等等。 <strong>字符集</strong> 就是一系列字符的集合。字符集的种类较多，每个字符集可以表示的字符范围通常不同，就比如说有些字符集是无法表示汉字的。</p>
<p><strong>计算机只能存储二进制的数据，那英文、汉字、表情等字符应该如何存储呢？</strong></p>
<p>我们要将这些字符和二进制的数据一一对应起来，比如说字符“a”对应“01100001”，反之，“01100001”对应 “a”。我们将字符对应二进制数据的过程称为&quot;<strong>字符编码</strong>&quot;，反之，二进制数据解析成字符的过程称为“<strong>字符解码</strong>”。</p>
<h2 id="有哪些常见的字符集" tabindex="-1"><a class="header-anchor" href="#有哪些常见的字符集" aria-hidden="true">#</a> 有哪些常见的字符集？</h2>
<p>常见的字符集有 ASCII、GB2312、GBK、UTF-8......。</p>
<p>不同的字符集的主要区别在于：</p>
<ul>
<li>可以表示的字符范围</li>
<li>编码方式</li>
</ul>
<h3 id="ascii" tabindex="-1"><a class="header-anchor" href="#ascii" aria-hidden="true">#</a> ASCII</h3>
<p><strong>ASCII</strong> (<strong>A</strong>merican <strong>S</strong>tandard <strong>C</strong>ode for <strong>I</strong>nformation <strong>I</strong>nterchange，美国信息交换标准代码) 是一套主要用于现代美国英语的字符集（这也是 ASCII 字符集的局限性所在）。</p>
<p><strong>为什么 ASCII 字符集没有考虑到中文等其他字符呢？</strong> 因为计算机是美国人发明的，当时，计算机的发展还处于比较雏形的时代，还未在其他国家大规模使用。因此，美国发布 ASCII 字符集的时候没有考虑兼容其他国家的语言。</p>
<p>ASCII 字符集至今为止共定义了 128 个字符，其中有 33 个控制字符（比如回车、删除）无法显示。</p>
<p>一个 ASCII 码长度是一个字节也就是 8 个 bit，比如“a”对应的 ASCII 码是“01100001”。不过，最高位是 0 仅仅作为校验位，其余 7 位使用 0 和 1 进行组合，所以，ASCII 字符集可以定义 128（2^7）个字符。</p>
<p>由于，ASCII 码可以表示的字符实在是太少了。后来，人们对其进行了扩展得到了 <strong>ASCII 扩展字符集</strong> 。ASCII 扩展字符集使用 8 位（bits）表示一个字符，所以，ASCII 扩展字符集可以定义 256（2^8）个字符。</p>
<p><img src="https://img-blog.csdnimg.cn/img_convert/c1c6375d08ca268690cef2b13591a5b4.png" alt="ASCII字符编码" loading="lazy"></p>
<h3 id="gb2312" tabindex="-1"><a class="header-anchor" href="#gb2312" aria-hidden="true">#</a> GB2312</h3>
<p>我们上面说了，ASCII 字符集是一种现代美国英语适用的字符集。因此，很多国家都捣鼓了一个适合自己国家语言的字符集。</p>
<p>GB2312 字符集是一种对汉字比较友好的字符集，共收录 6700 多个汉字，基本涵盖了绝大部分常用汉字。不过，GB2312 字符集不支持绝大部分的生僻字和繁体字。</p>
<p>对于英语字符，GB2312 编码和 ASCII 码是相同的，1 字节编码即可。对于非英字符，需要 2 字节编码。</p>
<h3 id="gbk" tabindex="-1"><a class="header-anchor" href="#gbk" aria-hidden="true">#</a> GBK</h3>
<p>GBK 字符集可以看作是 GB2312 字符集的扩展，兼容 GB2312 字符集，共收录了 20000 多个汉字。</p>
<p>GBK 中 K 是汉语拼音 Kuo Zhan（扩展）中的“Kuo”的首字母。</p>
<h3 id="gb18030" tabindex="-1"><a class="header-anchor" href="#gb18030" aria-hidden="true">#</a> GB18030</h3>
<p>GB18030 完全兼容 GB2312 和 GBK 字符集，纳入中国国内少数民族的文字，且收录了日韩汉字，是目前为止最全面的汉字字符集，共收录汉字 70000 多个。</p>
<h3 id="big5" tabindex="-1"><a class="header-anchor" href="#big5" aria-hidden="true">#</a> BIG5</h3>
<p>BIG5 主要针对的是繁体中文，收录了 13000 多个汉字。</p>
<h3 id="unicode-utf-8编码" tabindex="-1"><a class="header-anchor" href="#unicode-utf-8编码" aria-hidden="true">#</a> Unicode &amp; UTF-8编码</h3>
<p>为了更加适合本国语言，诞生了很多种字符集。</p>
<p>我们上面也说了不同的字符集可以表示的字符范围以及编码规则存在差异。这就导致了一个非常严重的问题：<strong>使用错误的编码方式查看一个包含字符的文件就会产生乱码现象。</strong></p>
<p>就比如说你使用 UTF-8 编码方式打开 GB2312 编码格式的文件就会出现乱码。示例：“牛”这个汉字 GB2312 编码后的十六进制数值为 “C5A3”，而 “C5A3” 用 UTF-8 解码之后得到的却是 “ţ”。</p>
<p>你可以通过这个网站在线进行编码和解码：<a href="https://www.haomeili.net/HanZi/ZiFuBianMaZhuanHuan" target="_blank" rel="noopener noreferrer">https://www.haomeili.net/HanZi/ZiFuBianMaZhuanHuan<ExternalLinkIcon/></a></p>
<p><img src="https://img-blog.csdnimg.cn/836c49b117ee4408871b0020b74c991d.png" alt="" loading="lazy"></p>
<p>这样我们就搞懂了乱码的本质： <strong>编码和解码时用了不同或者不兼容的字符集</strong> 。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/a8808cbabeea49caa3af27d314fa3c02-1.jpg" alt="" loading="lazy"></p>
<p>为了解决这个问题，人们就想：“如果我们能够有一种字符集将世界上所有的字符都纳入其中就好了！”。</p>
<p>然后，<strong>Unicode</strong> 带着这个使命诞生了。</p>
<p>Unicode 字符集中包含了世界上几乎所有已知的字符。不过，Unicode 字符集并没有规定如何存储这些字符（也就是如何使用二进制数据表示这些字符）。</p>
<p>然后，就有了 <strong>UTF-8</strong>（<strong>8</strong>-bit <strong>U</strong>nicode <strong>T</strong>ransformation <strong>F</strong>ormat）。类似的还有 UTF-16、 UTF-32。</p>
<p>UTF-8 使用 1 到 4 个字节为每个字符编码， UTF-16 使用 2 或 4 个字节为每个字符编码，UTF-32 固定位 4 个字节为每个字符编码。</p>
<p>UTF-8 可以根据不同的符号自动选择编码的长短，像英文字符只需要 1 个字节就够了，这一点 ASCII 字符集一样 。因此，对于英语字符，UTF-8 编码和 ASCII 码是相同的。</p>
<p>UTF-32 的规则最简单，不过缺陷也比较明显，对于英文字母这类字符消耗的空间是 UTF-8 的 4 倍之多。</p>
<p><strong>UTF-8</strong> 是目前使用最广的一种字符编码，。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/1280px-Utf8webgrowth.svg.png" alt="" loading="lazy"></p>
<h2 id="mysql-字符集" tabindex="-1"><a class="header-anchor" href="#mysql-字符集" aria-hidden="true">#</a> MySQL 字符集</h2>
<p>MySQL 支持很多种字符编码的方式，比如 UTF-8、GB2312、GBK、BIG5。</p>
<p>你可以通过 <code v-pre>SHOW CHARSET</code> 命令来查看。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/image-20211008164229671.png" alt="" loading="lazy"></p>
<p>通常情况下，我们建议使用 UTF-8 作为默认的字符编码方式。</p>
<p>不过，这里有一个小坑。</p>
<p>MySQL 字符编码集中有两套 UTF-8 编码实现：</p>
<ul>
<li><strong><code v-pre>utf8</code></strong> ： <code v-pre>utf8</code>编码只支持<code v-pre>1-3</code>个字节 。 在 <code v-pre>utf8</code> 编码中，中文是占 3 个字节，其他数字、英文、符号占一个字节。但 emoji 符号占 4 个字节，一些较复杂的文字、繁体字也是 4 个字节。</li>
<li><strong><code v-pre>utf8mb4</code></strong> ： UTF-8 的完整实现，正版！最多支持使用 4 个字节表示字符，因此，可以用来存储 emoji 符号。</li>
</ul>
<p><strong>为什么有两套 UTF-8 编码实现呢？</strong> 原因如下：</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/image-20211008164542347.png" alt="" loading="lazy"></p>
<p>因此，如果你需要存储<code v-pre>emoji</code>类型的数据或者一些比较复杂的文字、繁体字到 MySQL 数据库的话，数据库的编码一定要指定为<code v-pre>utf8mb4</code> 而不是<code v-pre>utf8</code> ，要不然存储的时候就会报错了。</p>
<p>演示一下吧！（环境：MySQL 5.7+）</p>
<p>建表语句如下，我们指定数据库 CHARSET 为 <code v-pre>utf8</code> 。</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">`</span>user<span class="token punctuation">`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">66</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>phone<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">`</span>password<span class="token punctuation">`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span> <span class="token keyword">CHARACTER</span> <span class="token keyword">SET</span> utf8mb4 <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们执行下面的 insert 语句插入数据到数据库时，果然报错！</p>
<div class="language-sql ext-sql line-numbers-mode"><pre v-pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">`</span>user<span class="token punctuation">`</span></span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>id<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>name<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>phone<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">`</span>password<span class="token punctuation">`</span></span><span class="token punctuation">)</span>
<span class="token keyword">VALUES</span>
	<span class="token punctuation">(</span><span class="token string">'A00003'</span><span class="token punctuation">,</span> <span class="token string">'飞哥😘😘😘'</span><span class="token punctuation">,</span> <span class="token string">'181631312312'</span><span class="token punctuation">,</span> <span class="token string">'123456'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>报错信息如下：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>Incorrect string value: '\xF0\x9F\x98\x98\xF0\x9F...' for column 'name' at row 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>字符集和字符编码（Charset &amp; Encoding）： <a href="https://www.cnblogs.com/skynet/archive/2011/05/03/2035105.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/skynet/archive/2011/05/03/2035105.html<ExternalLinkIcon/></a></li>
<li>十分钟搞清字符集和字符编码：<a href="http://cenalulu.github.io/linux/character-encoding/" target="_blank" rel="noopener noreferrer">http://cenalulu.github.io/linux/character-encoding/<ExternalLinkIcon/></a></li>
<li>Unicode-维基百科：<a href="https://zh.wikipedia.org/wiki/Unicode" target="_blank" rel="noopener noreferrer">https://zh.wikipedia.org/wiki/Unicode<ExternalLinkIcon/></a></li>
<li>GB2312-维基百科：<a href="https://zh.wikipedia.org/wiki/GB_2312" target="_blank" rel="noopener noreferrer">https://zh.wikipedia.org/wiki/GB_2312<ExternalLinkIcon/></a></li>
<li>UTF-8-维基百科：<a href="https://zh.wikipedia.org/wiki/UTF-8" target="_blank" rel="noopener noreferrer">https://zh.wikipedia.org/wiki/UTF-8<ExternalLinkIcon/></a></li>
<li>GB18030-维基百科: <a href="https://zh.wikipedia.org/wiki/GB_18030" target="_blank" rel="noopener noreferrer">https://zh.wikipedia.org/wiki/GB_18030<ExternalLinkIcon/></a></li>
</ul>
</div></template>
