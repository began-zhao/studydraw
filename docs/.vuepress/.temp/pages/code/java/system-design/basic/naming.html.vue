<template><div><p>我还记得我刚工作那一段时间， 项目 Code Review 的时候，我经常因为变量命名不规范而被 “diss”!</p>
<p>究其原因还是自己那会经验不足，而且，大学那会写项目的时候不太注意这些问题，想着只要把功能实现出来就行了。</p>
<p>但是，工作中就不一样，为了代码的可读性、可维护性，项目组对于代码质量的要求还是很高的！</p>
<p>前段时间，项目组新来的一个实习生也经常在 Code Review 因为变量命名不规范而被 “diss”，这让我想到自己刚到公司写代码那会的日子。</p>
<p>于是，我就简单写了这篇关于变量命名规范的文章，希望能对同样有此困扰的小伙伴提供一些帮助。</p>
<p>确实，编程过程中，有太多太多让我们头疼的事情了，比如命名、维护其他人的代码、写测试、与其他人沟通交流等等。</p>
<p>据说之前在 Quora 网站，由接近 5000 名程序员票选出来的最难的事情就是“命名”。</p>
<p>大名鼎鼎的《重构》的作者老马（Martin Fowler）曾经在<a href="https://martinfowler.com/bliki/TwoHardThings.html" target="_blank" rel="noopener noreferrer">TwoHardThings<ExternalLinkIcon/></a>这篇文章中提到过CS 领域有两大最难的事情：一是 <strong>缓存失效</strong> ，一是 <strong>程序命名</strong> 。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/marting-naming.png" alt="" loading="lazy"></p>
<p>这个句话实际上也是老马引用别人的，类似的表达还有很多。比如分布式系统领域有两大最难的事情：一是 <strong>保证消息顺序</strong> ，一是 <strong>严格一次传递</strong> 。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/20210629104844645.png" alt="" loading="lazy"></p>
<p>今天咱们就单独拎出 “<strong>命名</strong>” 来聊聊！</p>
<p>这篇文章配合我之前发的 <a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247486449&amp;idx=1&amp;sn=c3b502529ff991c7180281bcc22877af&amp;chksm=cea2443af9d5cd2c1c87049ed15ccf6f88275419c7dbe542406166a703b27d0f3ecf2af901f8&amp;token=999884676&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">《编码 5 分钟，命名 2 小时？史上最全的 Java 命名规范参考！》<ExternalLinkIcon/></a> 这篇文章阅读效果更佳哦！</p>
<h2 id="为什么需要重视命名" tabindex="-1"><a class="header-anchor" href="#为什么需要重视命名" aria-hidden="true">#</a> 为什么需要重视命名？</h2>
<p>咱们需要先搞懂为什么要重视编程中的命名这一行为，它对于我们的编码工作有着什么意义。</p>
<p><strong>为什么命名很重要呢？</strong> 这是因为 <strong>好的命名即是注释，别人一看到你的命名就知道你的变量、方法或者类是做什么的！</strong></p>
<p>简单来说就是 <strong>别人根据你的命名就能知道你的代码要表达的意思</strong> （不过，前提这个人也要有基本的英语知识，对于一些编程中常见的单词比较熟悉）。</p>
<p>简单举个例子说明一下命名的重要性。</p>
<p>《Clean Code》这本书明确指出：</p>
<blockquote>
<p><strong>好的代码本身就是注释，我们要尽量规范和美化自己的代码来减少不必要的注释。</strong></p>
<p><strong>若编程语言足够有表达力，就不需要注释，尽量通过代码来阐述。</strong></p>
<p>举个例子：</p>
<p>去掉下面复杂的注释，只需要创建一个与注释所言同一事物的函数即可</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// check to see if the employee is eligible for full benefits</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>employee<span class="token punctuation">.</span>flags <span class="token operator">&amp;</span> HOURLY_FLAG<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>employee<span class="token punctuation">.</span>age <span class="token operator">></span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>应替换为</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>employee<span class="token punctuation">.</span><span class="token function">isEligibleForFullBenefits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></blockquote>
<h2 id="常见命名规则以及适用场景" tabindex="-1"><a class="header-anchor" href="#常见命名规则以及适用场景" aria-hidden="true">#</a> 常见命名规则以及适用场景</h2>
<p>这里只介绍 3 种最常见的命名规范。</p>
<h3 id="驼峰命名法-camelcase" tabindex="-1"><a class="header-anchor" href="#驼峰命名法-camelcase" aria-hidden="true">#</a> 驼峰命名法（CamelCase）</h3>
<p>驼峰命名法应该我们最常见的一个，这种命名方式使用大小写混合的格式来区别各个单词，并且单词之间不使用空格隔开或者连接字符连接的命名方式</p>
<h4 id="大驼峰命名法-uppercamelcase" tabindex="-1"><a class="header-anchor" href="#大驼峰命名法-uppercamelcase" aria-hidden="true">#</a> 大驼峰命名法（UpperCamelCase）</h4>
<p><strong>类名需要使用大驼峰命名法（UpperCamelCase）</strong></p>
<p>正例：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">ServiceDiscovery</span>、<span class="token class-name">ServiceInstance</span>、<span class="token class-name">LruCacheFactory</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>反例：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>serviceDiscovery、<span class="token class-name">Serviceinstance</span>、<span class="token class-name">LRUCacheFactory</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="小驼峰命名法-lowercamelcase" tabindex="-1"><a class="header-anchor" href="#小驼峰命名法-lowercamelcase" aria-hidden="true">#</a> 小驼峰命名法（lowerCamelCase）</h4>
<p><strong>方法名、参数名、成员变量、局部变量需要使用小驼峰命名法（lowerCamelCase）。</strong></p>
<p>正例：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">createCustomThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">setNameFormat</span><span class="token punctuation">(</span><span class="token class-name">String</span> nameFormat<span class="token punctuation">)</span>
<span class="token class-name">Uservice</span> userService<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反例：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">GetUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span>、<span class="token class-name">CreateCustomThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">)</span>、<span class="token function">setNameFormat</span><span class="token punctuation">(</span><span class="token class-name">String</span> <span class="token class-name">NameFormat</span><span class="token punctuation">)</span>
<span class="token class-name">Uservice</span> user_service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="蛇形命名法-snake-case" tabindex="-1"><a class="header-anchor" href="#蛇形命名法-snake-case" aria-hidden="true">#</a> 蛇形命名法（snake_case）</h3>
<p><strong>测试方法名、常量、枚举名称需要使用蛇形命名法（snake_case）</strong></p>
<p>在蛇形命名法中，各个单词之间通过下划线“_”连接，比如<code v-pre>should_get_200_status_code_when_request_is_valid</code>、<code v-pre>CLIENT_CONNECT_SERVER_FAILURE</code>。</p>
<p>蛇形命名法的优势是命名所需要的单词比较多的时候，比如我把上面的命名通过小驼峰命名法给大家看一下：“shouldGet200StatusCodeWhenRequestIsValid”。</p>
<p>感觉如何？ 相比于使用蛇形命名法（snake_case）来说是不是不那么易读？</p>
<p>正例：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">should_get_200_status_code_when_request_is_valid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>反例：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">void</span> <span class="token function">shouldGet200StatusCodeWhenRequestIsValid</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="串式命名法-kebab-case" tabindex="-1"><a class="header-anchor" href="#串式命名法-kebab-case" aria-hidden="true">#</a> 串式命名法（kebab-case）</h3>
<p>在串式命名法中，各个单词之间通过连接符“-”连接，比如<code v-pre>dubbo-registry</code>。</p>
<p>建议项目文件夹名称使用串式命名法（kebab-case），比如 dubbo 项目的各个模块的命名是下面这样的。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/dubbo-naming.png" alt="" loading="lazy"></p>
<h2 id="常见命名规范" tabindex="-1"><a class="header-anchor" href="#常见命名规范" aria-hidden="true">#</a> 常见命名规范</h2>
<h3 id="java-语言基本命名规范" tabindex="-1"><a class="header-anchor" href="#java-语言基本命名规范" aria-hidden="true">#</a> Java 语言基本命名规范</h3>
<p><strong>1、类名需要使用大驼峰命名法（UpperCamelCase）风格。方法名、参数名、成员变量、局部变量需要使用小驼峰命名法（lowerCamelCase）。</strong></p>
<p><strong>2、测试方法名、常量、枚举名称需要使用蛇形命名法（snake_case）</strong>，比如<code v-pre>should_get_200_status_code_when_request_is_valid</code>、<code v-pre>CLIENT_CONNECT_SERVER_FAILURE</code>。并且，<strong>测试方法名称要求全部小写，常量以及枚举名称需要全部大写。</strong></p>
<p><strong>3、项目文件夹名称使用串式命名法（kebab-case），比如<code v-pre>dubbo-registry</code>。</strong></p>
<p><strong>4、包名统一使用小写，尽量使用单个名词作为包名，各个单词通过 &quot;.&quot; 分隔符连接，并且各个单词必须为单数。</strong></p>
<p>正例： <code v-pre>org.apache.dubbo.common.threadlocal</code></p>
<p>反例： <s><code v-pre>org.apache_dubbo.Common.threadLocals</code></s></p>
<p><strong>5、抽象类命名使用 Abstract 开头</strong>。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//为远程传输部分抽象出来的一个抽象类（出处：Dubbo源码）</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractClient</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractEndpoint</span> <span class="token keyword">implements</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>6、异常类命名使用 Exception 结尾。</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//自定义的 NoSuchMethodException（出处：Dubbo源码）</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NoSuchMethodException</span> <span class="token keyword">extends</span> <span class="token class-name">RuntimeException</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">long</span> serialVersionUID <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">2725364246023268766L</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">NoSuchMethodException</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">NoSuchMethodException</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>7、测试类命名以它要测试的类的名称开始，以 Test 结尾。</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//为 AnnotationUtils 类写的测试类（出处：Dubbo源码）</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AnnotationUtilsTest</span> <span class="token punctuation">{</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>POJO 类中布尔类型的变量，都不要加 is 前缀，否则部分框架解析会引起序列化错误。</p>
<p>如果模块、接口、类、方法使用了设计模式，在命名时需体现出具体模式。</p>
<h3 id="命名易读性规范" tabindex="-1"><a class="header-anchor" href="#命名易读性规范" aria-hidden="true">#</a> 命名易读性规范</h3>
<p><strong>1、为了能让命名更加易懂和易读，尽量不要缩写/简写单词，除非这些单词已经被公认可以被这样缩写/简写。比如 <code v-pre>CustomThreadFactory</code> 不可以被写成 ~~<code v-pre>CustomTF</code> 。</strong></p>
<p><strong>2、命名不像函数一样要尽量追求短，可读性强的名字优先于简短的名字，虽然可读性强的名字会比较长一点。</strong> 这个对应我们上面说的第 1 点。</p>
<p><strong>3、避免无意义的命名，你起的每一个名字都要能表明意思。</strong></p>
<p>正例：<code v-pre>UserService userService;</code> <code v-pre>int userCount</code>;</p>
<p>反例: <s><code v-pre>UserService service</code></s> <s><code v-pre>int count</code></s></p>
<p><strong>4、避免命名过长（50 个字符以内最好），过长的命名难以阅读并且丑陋。</strong></p>
<p><strong>5、不要使用拼音，更不要使用中文。</strong> 不过像 alibaba 、wuhan、taobao 这种国际通用名词可以当做英文来看待。</p>
<p>正例：discount</p>
<p>反例：<s>dazhe</s></p>
<h2 id="codelf-变量命名神器" tabindex="-1"><a class="header-anchor" href="#codelf-变量命名神器" aria-hidden="true">#</a> Codelf:变量命名神器?</h2>
<p>这是一个由国人开发的网站，网上有很多人称其为变量命名神器， 我在实际使用了几天之后感觉没那么好用。小伙伴们可以自行体验一下，然后再给出自己的判断。</p>
<p>Codelf 提供了在线网站版本，网址：<a href="https://unbug.github.io/codelf/" target="_blank" rel="noopener noreferrer">https://unbug.github.io/codelf/<ExternalLinkIcon/></a>，具体使用情况如下：</p>
<p>我选择了 Java 编程语言，然后搜索了“序列化”这个关键词，然后它就返回了很多关于序列化的命名。</p>
<p><img src="@source/code/java/system-design/basic/pictures/Codelf.png" alt="" loading="lazy"></p>
<p>并且，Codelf 还提供了 VS code 插件，看这个评价，看来大家还是很喜欢这款命名工具的。</p>
<p><img src="@source/code/java/system-design/basic/pictures/vscode-codelf.png" alt="" loading="lazy"></p>
<h2 id="相关阅读推荐" tabindex="-1"><a class="header-anchor" href="#相关阅读推荐" aria-hidden="true">#</a> 相关阅读推荐</h2>
<ol>
<li>《阿里巴巴 Java 开发手册》</li>
<li>《Clean Code》</li>
<li>Google Java 代码指南：<a href="https://google.github.io/styleguide/javaguide.html" target="_blank" rel="noopener noreferrer">https://google.github.io/styleguide/javaguide.html<ExternalLinkIcon/></a></li>
<li>告别编码5分钟，命名2小时！史上最全的Java命名规范参考：<a href="https://www.cnblogs.com/liqiangchn/p/12000361.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/liqiangchn/p/12000361.html<ExternalLinkIcon/></a></li>
</ol>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>作为一个合格的程序员，小伙伴们应该都知道代码表义的重要性。想要写出高质量代码，好的命名就是第一步！</p>
<p>好的命名对于其他人（包括你自己）理解你的代码有着很大的帮助！你的代码越容易被理解，可维护性就越强，侧面也就说明你的代码设计的也就越好！</p>
<p>在日常编码过程中，我们需要谨记常见命名规范比如类名需要使用大驼峰命名法、不要使用拼音，更不要使用中文......。</p>
<p>另外，国人开发的一个叫做 Codelf 的网站被很多人称为“变量命名神器”，当你为命名而头疼的时候，你可以去参考一下上面提供的一些命名示例。</p>
<p>最后，祝愿大家都不用再为命名而困扰!</p>
</div></template>
