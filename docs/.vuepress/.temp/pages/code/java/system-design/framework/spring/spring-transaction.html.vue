<template><div><p>前段时间答应读者的 <strong>Spring 事务</strong> 分析总结终于来了。这部分内容比较重要，不论是对于工作还是面试，但是网上比较好的参考资料比较少。</p>
<h2 id="什么是事务" tabindex="-1"><a class="header-anchor" href="#什么是事务" aria-hidden="true">#</a> 什么是事务？</h2>
<p><strong>事务是逻辑上的一组操作，要么都执行，要么都不执行。</strong></p>
<p>相信大家应该都能背上面这句话了，下面我结合我们日常的真实开发来谈一谈。</p>
<p>我们系统的每个业务方法可能包括了多个原子性的数据库操作，比如下面的 <code v-pre>savePerson()</code> 方法中就有两个原子性的数据库操作。这些原子性的数据库操作是有依赖的，它们要么都执行，要不就都不执行。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">savePerson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		personDao<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>
		personDetailDao<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>personDetail<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，需要格外注意的是：<strong>事务能否生效数据库引擎是否支持事务是关键。比如常用的 MySQL 数据库默认使用支持事务的 <code v-pre>innodb</code>引擎。但是，如果把数据库引擎变为 <code v-pre>myisam</code>，那么程序也就不再支持事务了！</strong></p>
<p>事务最经典也经常被拿出来说例子就是转账了。假如小明要给小红转账 1000 元，这个转账会涉及到两个关键操作就是：</p>
<blockquote>
<ol>
<li>将小明的余额减少 1000 元。</li>
<li>将小红的余额增加 1000 元。</li>
</ol>
</blockquote>
<p>万一在这两个操作之间突然出现错误比如银行系统崩溃或者网络故障，导致小明余额减少而小红的余额没有增加，这样就不对了。事务就是保证这两个关键操作要么都成功，要么都要失败。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrdersService</span> <span class="token punctuation">{</span>
	<span class="token keyword">private</span> <span class="token class-name">AccountDao</span> accountDao<span class="token punctuation">;</span>

	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setOrdersDao</span><span class="token punctuation">(</span><span class="token class-name">AccountDao</span> accountDao<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>accountDao <span class="token operator">=</span> accountDao<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

  <span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span>REQUIRED<span class="token punctuation">,</span>
                isolation <span class="token operator">=</span> <span class="token class-name">Isolation</span><span class="token punctuation">.</span>DEFAULT<span class="token punctuation">,</span> readOnly <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span> timeout <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">accountMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//小红账户多1000</span>
		accountDao<span class="token punctuation">.</span><span class="token function">addMoney</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span>xiaohong<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//模拟突然出现的异常，比如银行中可能为突然停电等等</span>
    <span class="token comment">//如果没有配置事务管理的话会造成，小红账户多了1000而小明账户没有少钱</span>
		<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">/</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token comment">//小王账户少1000</span>
		accountDao<span class="token punctuation">.</span><span class="token function">reduceMoney</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span>xiaoming<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，数据库事务的 ACID 四大特性是事务的基础，下面简单来了解一下。</p>
<h2 id="事务的特性-acid-了解么" tabindex="-1"><a class="header-anchor" href="#事务的特性-acid-了解么" aria-hidden="true">#</a> 事务的特性（ACID）了解么?</h2>
<ul>
<li><strong>原子性（Atomicity）：</strong> 一个事务（transaction）中的所有操作，或者全部完成，或者全部不完成，不会结束在中间某个环节。事务在执行过程中发生错误，会被回滚（Rollback）到事务开始前的状态，就像这个事务从来没有执行过一样。即，事务不可分割、不可约简。</li>
<li><strong>一致性（Consistency）：</strong> 在事务开始之前和事务结束以后，数据库的完整性没有被破坏。这表示写入的资料必须完全符合所有的预设约束、触发器、级联回滚等。</li>
<li><strong>隔离性（Isolation）：</strong> 数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。事务隔离分为不同级别，包括未提交读（Read uncommitted）、提交读（read committed）、可重复读（repeatable read）和串行化（Serializable）。</li>
<li><strong>持久性（Durability）:</strong> 事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。</li>
</ul>
<p>参考 ：<a href="https://zh.wikipedia.org/wiki/ACID" target="_blank" rel="noopener noreferrer">https://zh.wikipedia.org/wiki/ACID<ExternalLinkIcon/></a> 。</p>
<h2 id="详谈-spring-对事务的支持" tabindex="-1"><a class="header-anchor" href="#详谈-spring-对事务的支持" aria-hidden="true">#</a> 详谈 Spring 对事务的支持</h2>
<blockquote>
<p>⚠️ 再提醒一次：你的程序是否支持事务首先取决于数据库 ，比如使用 MySQL 的话，如果你选择的是 innodb 引擎，那么恭喜你，是可以支持事务的。但是，如果你的 MySQL 数据库使用的是 myisam 引擎的话，那不好意思，从根上就是不支持事务的。</p>
</blockquote>
<p>这里再多提一下一个非常重要的知识点： <strong>MySQL 怎么保证原子性的？</strong></p>
<p>我们知道如果想要保证事务的原子性，就需要在异常发生时，对已经执行的操作进行<strong>回滚</strong>，在 MySQL 中，恢复机制是通过 <strong>回滚日志（undo log）</strong> 实现的，所有事务进行的修改都会先记录到这个回滚日志中，然后再执行相关的操作。如果执行过程中遇到异常的话，我们直接利用 <strong>回滚日志</strong> 中的信息将数据回滚到修改之前的样子即可！并且，回滚日志会先于数据持久化到磁盘上。这样就保证了即使遇到数据库突然宕机等情况，当用户再次启动数据库的时候，数据库还能够通过查询回滚日志来回滚将之前未完成的事务。</p>
<h3 id="spring-支持两种方式的事务管理" tabindex="-1"><a class="header-anchor" href="#spring-支持两种方式的事务管理" aria-hidden="true">#</a> Spring 支持两种方式的事务管理</h3>
<h4 id="编程式事务管理" tabindex="-1"><a class="header-anchor" href="#编程式事务管理" aria-hidden="true">#</a> 编程式事务管理</h4>
<p>通过 <code v-pre>TransactionTemplate</code>或者<code v-pre>TransactionManager</code>手动管理事务，实际应用中很少使用，但是对于你理解 Spring 事务管理原理有帮助。</p>
<p>使用<code v-pre>TransactionTemplate</code> 进行编程式事务管理的示例代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">TransactionTemplate</span> transactionTemplate<span class="token punctuation">;</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

        transactionTemplate<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TransactionCallbackWithoutResult</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">doInTransactionWithoutResult</span><span class="token punctuation">(</span><span class="token class-name">TransactionStatus</span> transactionStatus<span class="token punctuation">)</span> <span class="token punctuation">{</span>

                <span class="token keyword">try</span> <span class="token punctuation">{</span>

                    <span class="token comment">// ....  业务代码</span>
                <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
                    <span class="token comment">//回滚</span>
                    transactionStatus<span class="token punctuation">.</span><span class="token function">setRollbackOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>TransactionManager</code> 进行编程式事务管理的示例代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Autowired</span>
<span class="token keyword">private</span> <span class="token class-name">PlatformTransactionManager</span> transactionManager<span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

  <span class="token class-name">TransactionStatus</span> status <span class="token operator">=</span> transactionManager<span class="token punctuation">.</span><span class="token function">getTransaction</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">DefaultTransactionDefinition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">try</span> <span class="token punctuation">{</span>
               <span class="token comment">// ....  业务代码</span>
              transactionManager<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              transactionManager<span class="token punctuation">.</span><span class="token function">rollback</span><span class="token punctuation">(</span>status<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="声明式事务管理" tabindex="-1"><a class="header-anchor" href="#声明式事务管理" aria-hidden="true">#</a> 声明式事务管理</h4>
<p>推荐使用（代码侵入性最小），实际是通过 AOP 实现（基于<code v-pre>@Transactional</code> 的全注解方式使用最多）。</p>
<p>使用 <code v-pre>@Transactional</code>注解进行事务管理的示例代码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span>REQUIRED<span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> aMethod <span class="token punctuation">{</span>
  <span class="token comment">//do something</span>
  <span class="token class-name">B</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token class-name">C</span> c <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  b<span class="token punctuation">.</span><span class="token function">bMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  c<span class="token punctuation">.</span><span class="token function">cMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spring-事务管理接口介绍" tabindex="-1"><a class="header-anchor" href="#spring-事务管理接口介绍" aria-hidden="true">#</a> Spring 事务管理接口介绍</h3>
<p>Spring 框架中，事务管理相关最重要的 3 个接口如下：</p>
<ul>
<li><strong><code v-pre>PlatformTransactionManager</code></strong>： （平台）事务管理器，Spring 事务策略的核心。</li>
<li><strong><code v-pre>TransactionDefinition</code></strong>： 事务定义信息(事务隔离级别、传播行为、超时、只读、回滚规则)。</li>
<li><strong><code v-pre>TransactionStatus</code></strong>： 事务运行状态。</li>
</ul>
<p>我们可以把 <strong><code v-pre>PlatformTransactionManager</code></strong> 接口可以被看作是事务上层的管理者，而 <strong><code v-pre>TransactionDefinition</code></strong> 和 <strong><code v-pre>TransactionStatus</code></strong> 这两个接口可以看作是事务的描述。</p>
<p><strong><code v-pre>PlatformTransactionManager</code></strong> 会根据 <strong><code v-pre>TransactionDefinition</code></strong> 的定义比如事务超时时间、隔离级别、传播行为等来进行事务管理 ，而 <strong><code v-pre>TransactionStatus</code></strong> 接口则提供了一些方法来获取事务相应的状态比如是否新事务、是否可以回滚等等。</p>
<h4 id="platformtransactionmanager-事务管理接口" tabindex="-1"><a class="header-anchor" href="#platformtransactionmanager-事务管理接口" aria-hidden="true">#</a> PlatformTransactionManager:事务管理接口</h4>
<p><strong>Spring 并不直接管理事务，而是提供了多种事务管理器</strong> 。Spring 事务管理器的接口是： <strong><code v-pre>PlatformTransactionManager</code></strong> 。</p>
<p>通过这个接口，Spring 为各个平台如 JDBC(<code v-pre>DataSourceTransactionManager</code>)、Hibernate(<code v-pre>HibernateTransactionManager</code>)、JPA(<code v-pre>JpaTransactionManager</code>)等都提供了对应的事务管理器，但是具体的实现就是各个平台自己的事情了。</p>
<p><strong><code v-pre>PlatformTransactionManager</code> 接口的具体实现如下:</strong></p>
<p><img src="@source/code/java/system-design/framework/spring/images/spring-transaction/PlatformTransactionManager.png" alt="" loading="lazy"></p>
<p><code v-pre>PlatformTransactionManager</code>接口中定义了三个方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>transaction</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">Nullable</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PlatformTransactionManager</span> <span class="token punctuation">{</span>
    <span class="token comment">//获得事务</span>
    <span class="token class-name">TransactionStatus</span> <span class="token function">getTransaction</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Nullable</span> <span class="token class-name">TransactionDefinition</span> var1<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">TransactionException</span><span class="token punctuation">;</span>
    <span class="token comment">//提交事务</span>
    <span class="token keyword">void</span> <span class="token function">commit</span><span class="token punctuation">(</span><span class="token class-name">TransactionStatus</span> var1<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">TransactionException</span><span class="token punctuation">;</span>
    <span class="token comment">//回滚事务</span>
    <span class="token keyword">void</span> <span class="token function">rollback</span><span class="token punctuation">(</span><span class="token class-name">TransactionStatus</span> var1<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">TransactionException</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这里多插一嘴。为什么要定义或者说抽象出来<code v-pre>PlatformTransactionManager</code>这个接口呢？</strong></p>
<p>主要是因为要将事务管理行为抽象出来，然后不同的平台去实现它，这样我们可以保证提供给外部的行为不变，方便我们扩展。</p>
<blockquote>
<p>《设计模式》（GOF 那本）这本书在很多年前都提到过说要基于接口而非实现编程，你真的知道为什么要基于接口编程么？</p>
<p>纵观开源框架和项目的源码，接口是它们不可或缺的重要组成部分。要理解为什么要用接口，首先要搞懂接口提供了什么功能。我们可以把接口理解为提供了一系列功能列表的约定，接口本身不提供功能，它只定义行为。但是谁要用，就要先实现我，遵守我的约定，然后再自己去实现我定义的要实现的功能。</p>
<p>举个例子，我上个项目有发送短信的需求，为此，我们定了一个接口，接口只有两个方法:</p>
<p>1.发送短信
2.处理发送结果的方法。</p>
<p>刚开始我们用的是阿里云短信服务，然后我们实现这个接口完成了一个阿里云短信的服务。后来，我们突然又换到了别的短信服务平台，我们这个时候只需要再实现这个接口即可。这样保证了我们提供给外部的行为不变。几乎不需要改变什么代码，我们就轻松完成了需求的转变，提高了代码的灵活性和可扩展性。</p>
<p>什么时候用接口？当你要实现的功能模块设计抽象行为的时候，比如发送短信的服务，图床的存储服务等等。</p>
</blockquote>
<h4 id="transactiondefinition-事务属性" tabindex="-1"><a class="header-anchor" href="#transactiondefinition-事务属性" aria-hidden="true">#</a> TransactionDefinition:事务属性</h4>
<p>事务管理器接口 <strong><code v-pre>PlatformTransactionManager</code></strong> 通过 <strong><code v-pre>getTransaction(TransactionDefinition definition)</code></strong> 方法来得到一个事务，这个方法里面的参数是 <strong><code v-pre>TransactionDefinition</code></strong> 类 ，这个类就定义了一些基本的事务属性。</p>
<p><strong>什么是事务属性呢？</strong> 事务属性可以理解成事务的一些基本配置，描述了事务策略如何应用到方法上。</p>
<p>事务属性包含了 5 个方面：</p>
<ul>
<li>隔离级别</li>
<li>传播行为</li>
<li>回滚规则</li>
<li>是否只读</li>
<li>事务超时</li>
</ul>
<p><code v-pre>TransactionDefinition</code> 接口中定义了 5 个方法以及一些表示事务属性的常量比如隔离级别、传播行为等等。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>transaction</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">Nullable</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TransactionDefinition</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> PROPAGATION_REQUIRED <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> PROPAGATION_SUPPORTS <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> PROPAGATION_MANDATORY <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> PROPAGATION_REQUIRES_NEW <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> PROPAGATION_NOT_SUPPORTED <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> PROPAGATION_NEVER <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> PROPAGATION_NESTED <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ISOLATION_DEFAULT <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ISOLATION_READ_UNCOMMITTED <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ISOLATION_READ_COMMITTED <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ISOLATION_REPEATABLE_READ <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ISOLATION_SERIALIZABLE <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> TIMEOUT_DEFAULT <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token comment">// 返回事务的传播行为，默认值为 REQUIRED。</span>
    <span class="token keyword">int</span> <span class="token function">getPropagationBehavior</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//返回事务的隔离级别，默认值是 DEFAULT</span>
    <span class="token keyword">int</span> <span class="token function">getIsolationLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 返回事务的超时时间，默认值为-1。如果超过该时间限制但事务还没有完成，则自动回滚事务。</span>
    <span class="token keyword">int</span> <span class="token function">getTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 返回是否为只读事务，默认值为 false</span>
    <span class="token keyword">boolean</span> <span class="token function">isReadOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Nullable</span>
    <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="transactionstatus-事务状态" tabindex="-1"><a class="header-anchor" href="#transactionstatus-事务状态" aria-hidden="true">#</a> TransactionStatus:事务状态</h4>
<p><code v-pre>TransactionStatus</code>接口用来记录事务的状态 该接口定义了一组方法,用来获取或判断事务的相应状态信息。</p>
<p><code v-pre>PlatformTransactionManager.getTransaction(…)</code>方法返回一个 <code v-pre>TransactionStatus</code> 对象。</p>
<p><strong>TransactionStatus 接口内容如下：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TransactionStatus</span><span class="token punctuation">{</span>
    <span class="token keyword">boolean</span> <span class="token function">isNewTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 是否是新的事务</span>
    <span class="token keyword">boolean</span> <span class="token function">hasSavepoint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 是否有恢复点</span>
    <span class="token keyword">void</span> <span class="token function">setRollbackOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 设置为只回滚</span>
    <span class="token keyword">boolean</span> <span class="token function">isRollbackOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 是否为只回滚</span>
    <span class="token keyword">boolean</span> isCompleted<span class="token punctuation">;</span> <span class="token comment">// 是否已完成</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事务属性详解" tabindex="-1"><a class="header-anchor" href="#事务属性详解" aria-hidden="true">#</a> 事务属性详解</h3>
<p>实际业务开发中，大家一般都是使用 <code v-pre>@Transactional</code> 注解来开启事务，但很多人并不清楚这个注解里面的参数是什么意思，有什么用。为了更好的在项目中使用事务管理，强烈推荐好好阅读一下下面的内容。</p>
<h4 id="事务传播行为" tabindex="-1"><a class="header-anchor" href="#事务传播行为" aria-hidden="true">#</a> 事务传播行为</h4>
<p><strong>事务传播行为是为了解决业务层方法之间互相调用的事务问题</strong>。</p>
<p>当事务方法被另一个事务方法调用时，必须指定事务应该如何传播。例如：方法可能继续在现有事务中运行，也可能开启一个新事务，并在自己的事务中运行。</p>
<p>举个例子：我们在 A 类的<code v-pre>aMethod()</code>方法中调用了 B 类的 <code v-pre>bMethod()</code> 方法。这个时候就涉及到业务层方法之间互相调用的事务问题。如果我们的 <code v-pre>bMethod()</code>如果发生异常需要回滚，如何配置事务传播行为才能让 <code v-pre>aMethod()</code>也跟着回滚呢？这个时候就需要事务传播行为的知识了，如果你不知道的话一定要好好看一下。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token class-name">Class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">B</span> b<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span>xxx<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> aMethod <span class="token punctuation">{</span>
        <span class="token comment">//do something</span>
        b<span class="token punctuation">.</span><span class="token function">bMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Service</span>
<span class="token class-name">Class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span>xxx<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> bMethod <span class="token punctuation">{</span>
       <span class="token comment">//do something</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code v-pre>TransactionDefinition</code>定义中包括了如下几个表示传播行为的常量：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TransactionDefinition</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> PROPAGATION_REQUIRED <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> PROPAGATION_SUPPORTS <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> PROPAGATION_MANDATORY <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> PROPAGATION_REQUIRES_NEW <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> PROPAGATION_NOT_SUPPORTED <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> PROPAGATION_NEVER <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> PROPAGATION_NESTED <span class="token operator">=</span> <span class="token number">6</span><span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，为了方便使用，Spring 相应地定义了一个枚举类：<code v-pre>Propagation</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>transaction<span class="token punctuation">.</span>annotation</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>transaction<span class="token punctuation">.</span></span><span class="token class-name">TransactionDefinition</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Propagation</span> <span class="token punctuation">{</span>

    <span class="token function">REQUIRED</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>PROPAGATION_REQUIRED<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">SUPPORTS</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>PROPAGATION_SUPPORTS<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">MANDATORY</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>PROPAGATION_MANDATORY<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">REQUIRES_NEW</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>PROPAGATION_REQUIRES_NEW<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">NOT_SUPPORTED</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>PROPAGATION_NOT_SUPPORTED<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">NEVER</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>PROPAGATION_NEVER<span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">NESTED</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>PROPAGATION_NESTED<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>

    <span class="token class-name">Propagation</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确的事务传播行为可能的值如下</strong> ：</p>
<p><strong>1.<code v-pre>TransactionDefinition.PROPAGATION_REQUIRED</code></strong></p>
<p>使用的最多的一个事务传播行为，我们平时经常使用的<code v-pre>@Transactional</code>注解默认使用就是这个事务传播行为。如果当前存在事务，则加入该事务；如果当前没有事务，则创建一个新的事务。也就是说：</p>
<ul>
<li>如果外部方法没有开启事务的话，<code v-pre>Propagation.REQUIRED</code>修饰的内部方法会新开启自己的事务，且开启的事务相互独立，互不干扰。</li>
<li>如果外部方法开启事务并且被<code v-pre>Propagation.REQUIRED</code>的话，所有<code v-pre>Propagation.REQUIRED</code>修饰的内部方法和外部方法均属于同一事务 ，只要一个方法回滚，整个事务均回滚。</li>
</ul>
<p>举个例子：如果我们上面的<code v-pre>aMethod()</code>和<code v-pre>bMethod()</code>使用的都是<code v-pre>PROPAGATION_REQUIRED</code>传播行为的话，两者使用的就是同一个事务，只要其中一个方法回滚，整个事务均回滚。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token class-name">Class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">B</span> b<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span>REQUIRED<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> aMethod <span class="token punctuation">{</span>
        <span class="token comment">//do something</span>
        b<span class="token punctuation">.</span><span class="token function">bMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Service</span>
<span class="token class-name">Class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span>REQUIRED<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> bMethod <span class="token punctuation">{</span>
       <span class="token comment">//do something</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>2.TransactionDefinition.PROPAGATION_REQUIRES_NEW</code></strong></p>
<p>创建一个新的事务，如果当前存在事务，则把当前事务挂起。也就是说不管外部方法是否开启事务，<code v-pre>Propagation.REQUIRES_NEW</code>修饰的内部方法会新开启自己的事务，且开启的事务相互独立，互不干扰。</p>
<p>举个例子：如果我们上面的<code v-pre>bMethod()</code>使用<code v-pre>PROPAGATION_REQUIRES_NEW</code>事务传播行为修饰，<code v-pre>aMethod</code>还是用<code v-pre>PROPAGATION_REQUIRED</code>修饰的话。如果<code v-pre>aMethod()</code>发生异常回滚，<code v-pre>bMethod()</code>不会跟着回滚，因为 <code v-pre>bMethod()</code>开启了独立的事务。但是，如果 <code v-pre>bMethod()</code>抛出了未被捕获的异常并且这个异常满足事务回滚规则的话,<code v-pre>aMethod()</code>同样也会回滚，因为这个异常被 <code v-pre>aMethod()</code>的事务管理机制检测到了。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token class-name">Class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">B</span> b<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span>REQUIRED<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> aMethod <span class="token punctuation">{</span>
        <span class="token comment">//do something</span>
        b<span class="token punctuation">.</span><span class="token function">bMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Service</span>
<span class="token class-name">Class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span>REQUIRES_NEW<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> bMethod <span class="token punctuation">{</span>
       <span class="token comment">//do something</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>3.<code v-pre>TransactionDefinition.PROPAGATION_NESTED</code></strong>:</p>
<p>如果当前存在事务，就在嵌套事务内执行；如果当前没有事务，就执行与<code v-pre>TransactionDefinition.PROPAGATION_REQUIRED</code>类似的操作。也就是说：</p>
<ul>
<li>在外部方法开启事务的情况下,在内部开启一个新的事务，作为嵌套事务存在。</li>
<li>如果外部方法无事务，则单独开启一个事务，与 <code v-pre>PROPAGATION_REQUIRED</code> 类似。</li>
</ul>
<p>这里还是简单举个例子：如果 <code v-pre>bMethod()</code> 回滚的话，<code v-pre>aMethod()</code>也会回滚。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token class-name">Class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token class-name">B</span> b<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span>REQUIRED<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> aMethod <span class="token punctuation">{</span>
        <span class="token comment">//do something</span>
        b<span class="token punctuation">.</span><span class="token function">bMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation punctuation">@Service</span>
<span class="token class-name">Class</span> <span class="token class-name">B</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>propagation <span class="token operator">=</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span>NESTED<span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> bMethod <span class="token punctuation">{</span>
       <span class="token comment">//do something</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>4.<code v-pre>TransactionDefinition.PROPAGATION_MANDATORY</code></strong></p>
<p>如果当前存在事务，则加入该事务；如果当前没有事务，则抛出异常。（mandatory：强制性）</p>
<p>这个使用的很少，就不举例子来说了。</p>
<p><strong>若是错误的配置以下 3 种事务传播行为，事务将不会发生回滚，这里不对照案例讲解了，使用的很少。</strong></p>
<ul>
<li><strong><code v-pre>TransactionDefinition.PROPAGATION_SUPPORTS</code></strong>: 如果当前存在事务，则加入该事务；如果当前没有事务，则以非事务的方式继续运行。</li>
<li><strong><code v-pre>TransactionDefinition.PROPAGATION_NOT_SUPPORTED</code></strong>: 以非事务方式运行，如果当前存在事务，则把当前事务挂起。</li>
<li><strong><code v-pre>TransactionDefinition.PROPAGATION_NEVER</code></strong>: 以非事务方式运行，如果当前存在事务，则抛出异常。</li>
</ul>
<p>更多关于事务传播行为的内容请看这篇文章：<a href="https://mp.weixin.qq.com/s?__biz=Mzg2OTA0Njk0OA==&amp;mid=2247486668&amp;idx=2&amp;sn=0381e8c836442f46bdc5367170234abb&amp;chksm=cea24307f9d5ca11c96943b3ccfa1fc70dc97dd87d9c540388581f8fe6d805ff548dff5f6b5b&amp;token=1776990505&amp;lang=zh_CN#rd" target="_blank" rel="noopener noreferrer">《太难了~面试官让我结合案例讲讲自己对 Spring 事务传播行为的理解。》<ExternalLinkIcon/></a></p>
<h4 id="事务隔离级别" tabindex="-1"><a class="header-anchor" href="#事务隔离级别" aria-hidden="true">#</a> 事务隔离级别</h4>
<p><code v-pre>TransactionDefinition</code> 接口中定义了五个表示隔离级别的常量：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TransactionDefinition</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">int</span> ISOLATION_DEFAULT <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ISOLATION_READ_UNCOMMITTED <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ISOLATION_READ_COMMITTED <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ISOLATION_REPEATABLE_READ <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ISOLATION_SERIALIZABLE <span class="token operator">=</span> <span class="token number">8</span><span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和事务传播行为那块一样，为了方便使用，Spring 也相应地定义了一个枚举类：<code v-pre>Isolation</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">Isolation</span> <span class="token punctuation">{</span>

  <span class="token function">DEFAULT</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>ISOLATION_DEFAULT<span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token function">READ_UNCOMMITTED</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>ISOLATION_READ_UNCOMMITTED<span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token function">READ_COMMITTED</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>ISOLATION_READ_COMMITTED<span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token function">REPEATABLE_READ</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>ISOLATION_REPEATABLE_READ<span class="token punctuation">)</span><span class="token punctuation">,</span>

  <span class="token function">SERIALIZABLE</span><span class="token punctuation">(</span><span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>ISOLATION_SERIALIZABLE<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">int</span> value<span class="token punctuation">;</span>

  <span class="token class-name">Isolation</span><span class="token punctuation">(</span><span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面我依次对每一种事务隔离级别进行介绍：</p>
<ul>
<li><strong><code v-pre>TransactionDefinition.ISOLATION_DEFAULT</code></strong> :使用后端数据库默认的隔离级别，MySQL 默认采用的 <code v-pre>REPEATABLE_READ</code> 隔离级别 Oracle 默认采用的 <code v-pre>READ_COMMITTED</code> 隔离级别.</li>
<li><strong><code v-pre>TransactionDefinition.ISOLATION_READ_UNCOMMITTED</code></strong> :最低的隔离级别，使用这个隔离级别很少，因为它允许读取尚未提交的数据变更，<strong>可能会导致脏读、幻读或不可重复读</strong></li>
<li><strong><code v-pre>TransactionDefinition.ISOLATION_READ_COMMITTED</code></strong> : 允许读取并发事务已经提交的数据，<strong>可以阻止脏读，但是幻读或不可重复读仍有可能发生</strong></li>
<li><strong><code v-pre>TransactionDefinition.ISOLATION_REPEATABLE_READ</code></strong> : 对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，<strong>可以阻止脏读和不可重复读，但幻读仍有可能发生。</strong></li>
<li><strong><code v-pre>TransactionDefinition.ISOLATION_SERIALIZABLE</code></strong> : 最高的隔离级别，完全服从 ACID 的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，<strong>该级别可以防止脏读、不可重复读以及幻读</strong>。但是这将严重影响程序的性能。通常情况下也不会用到该级别。</li>
</ul>
<p>相关阅读：<a href="https://javaguide.cn/database/mysql/transaction-isolation-level.html" target="_blank" rel="noopener noreferrer">MySQL事务隔离级别详解<ExternalLinkIcon/></a>。</p>
<h4 id="事务超时属性" tabindex="-1"><a class="header-anchor" href="#事务超时属性" aria-hidden="true">#</a> 事务超时属性</h4>
<p>所谓事务超时，就是指一个事务所允许执行的最长时间，如果超过该时间限制但事务还没有完成，则自动回滚事务。在 <code v-pre>TransactionDefinition</code> 中以 int 的值来表示超时时间，其单位是秒，默认值为-1，这表示事务的超时时间取决于底层事务系统或者没有超时时间。</p>
<h4 id="事务只读属性" tabindex="-1"><a class="header-anchor" href="#事务只读属性" aria-hidden="true">#</a> 事务只读属性</h4>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>transaction</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">Nullable</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">TransactionDefinition</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token comment">// 返回是否为只读事务，默认值为 false</span>
    <span class="token keyword">boolean</span> <span class="token function">isReadOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于只有读取数据查询的事务，可以指定事务类型为 readonly，即只读事务。只读事务不涉及数据的修改，数据库会提供一些优化手段，适合用在有多条数据库查询操作的方法中。</p>
<p>很多人就会疑问了，为什么我一个数据查询操作还要启用事务支持呢？</p>
<p>拿 MySQL 的 innodb 举例子，根据官网 <a href="https://dev.mysql.com/doc/refman/5.7/en/innodb-autocommit-commit-rollback.html" target="_blank" rel="noopener noreferrer">https://dev.mysql.com/doc/refman/5.7/en/innodb-autocommit-commit-rollback.html<ExternalLinkIcon/></a> 描述：</p>
<blockquote>
<p>MySQL 默认对每一个新建立的连接都启用了<code v-pre>autocommit</code>模式。在该模式下，每一个发送到 MySQL 服务器的<code v-pre>sql</code>语句都会在一个单独的事务中进行处理，执行结束后会自动提交事务，并开启一个新的事务。</p>
</blockquote>
<p>但是，如果你给方法加上了<code v-pre>Transactional</code>注解的话，这个方法执行的所有<code v-pre>sql</code>会被放在一个事务中。如果声明了只读事务的话，数据库就会去优化它的执行，并不会带来其他的什么收益。</p>
<p>如果不加<code v-pre>Transactional</code>，每条<code v-pre>sql</code>会开启一个单独的事务，中间被其它事务改了数据，都会实时读取到最新值。</p>
<p>分享一下关于事务只读属性，其他人的解答：</p>
<ul>
<li>如果你一次执行单条查询语句，则没有必要启用事务支持，数据库默认支持 SQL 执行期间的读一致性；</li>
<li>如果你一次执行多条查询语句，例如统计查询，报表查询，在这种场景下，多条查询 SQL 必须保证整体的读一致性，否则，在前条 SQL 查询之后，后条 SQL 查询之前，数据被其他用户改变，则该次整体的统计查询将会出现读数据不一致的状态，此时，应该启用事务支持</li>
</ul>
<h4 id="事务回滚规则" tabindex="-1"><a class="header-anchor" href="#事务回滚规则" aria-hidden="true">#</a> 事务回滚规则</h4>
<p>这些规则定义了哪些异常会导致事务回滚而哪些不会。默认情况下，事务只有遇到运行期异常（<code v-pre>RuntimeException</code> 的子类）时才会回滚，<code v-pre>Error</code> 也会导致事务回滚，但是，在遇到检查型（Checked）异常时不会回滚。</p>
<p><img src="@source/code/java/system-design/framework/spring/images/spring-transaction/roollbackFor.png" alt="" loading="lazy"></p>
<p>如果你想要回滚你定义的特定的异常类型的话，可以这样：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Transactional</span><span class="token punctuation">(</span>rollbackFor<span class="token operator">=</span> <span class="token class-name">MyException</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="transactional-注解使用详解" tabindex="-1"><a class="header-anchor" href="#transactional-注解使用详解" aria-hidden="true">#</a> @Transactional 注解使用详解</h3>
<h4 id="transactional-的作用范围" tabindex="-1"><a class="header-anchor" href="#transactional-的作用范围" aria-hidden="true">#</a> <code v-pre>@Transactional</code> 的作用范围</h4>
<ol>
<li><strong>方法</strong> ：推荐将注解使用于方法上，不过需要注意的是：<strong>该注解只能应用到 public 方法上，否则不生效。</strong></li>
<li><strong>类</strong> ：如果这个注解使用在类上的话，表明该注解对该类中所有的 public 方法都生效。</li>
<li><strong>接口</strong> ：不推荐在接口上使用。</li>
</ol>
<h4 id="transactional-的常用配置参数" tabindex="-1"><a class="header-anchor" href="#transactional-的常用配置参数" aria-hidden="true">#</a> <code v-pre>@Transactional</code> 的常用配置参数</h4>
<p><code v-pre>@Transactional</code>注解源码如下，里面包含了基本事务属性的配置：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">,</span> <span class="token class-name">ElementType</span><span class="token punctuation">.</span>METHOD<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>
<span class="token annotation punctuation">@Inherited</span>
<span class="token annotation punctuation">@Documented</span>
<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">Transactional</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@AliasFor</span><span class="token punctuation">(</span><span class="token string">"transactionManager"</span><span class="token punctuation">)</span>
	<span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">""</span><span class="token punctuation">;</span>

	<span class="token annotation punctuation">@AliasFor</span><span class="token punctuation">(</span><span class="token string">"value"</span><span class="token punctuation">)</span>
	<span class="token class-name">String</span> <span class="token function">transactionManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">""</span><span class="token punctuation">;</span>

	<span class="token class-name">Propagation</span> <span class="token function">propagation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">Propagation</span><span class="token punctuation">.</span>REQUIRED<span class="token punctuation">;</span>

	<span class="token class-name">Isolation</span> <span class="token function">isolation</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">Isolation</span><span class="token punctuation">.</span>DEFAULT<span class="token punctuation">;</span>

	<span class="token keyword">int</span> <span class="token function">timeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token class-name">TransactionDefinition</span><span class="token punctuation">.</span>TIMEOUT_DEFAULT<span class="token punctuation">;</span>

	<span class="token keyword">boolean</span> <span class="token function">readOnly</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Throwable</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">rollbackFor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">rollbackForClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span> <span class="token keyword">extends</span> <span class="token class-name">Throwable</span><span class="token punctuation">></span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">noRollbackFor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">noRollbackForClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong><code v-pre>@Transactional</code> 的常用配置参数总结（只列出了 5 个我平时比较常用的）：</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">propagation</td>
<td style="text-align:left">事务的传播行为，默认值为 REQUIRED，可选的值在上面介绍过</td>
</tr>
<tr>
<td style="text-align:left">isolation</td>
<td style="text-align:left">事务的隔离级别，默认值采用 DEFAULT，可选的值在上面介绍过</td>
</tr>
<tr>
<td style="text-align:left">timeout</td>
<td style="text-align:left">事务的超时时间，默认值为-1（不会超时）。如果超过该时间限制但事务还没有完成，则自动回滚事务。</td>
</tr>
<tr>
<td style="text-align:left">readOnly</td>
<td style="text-align:left">指定事务是否为只读事务，默认值为 false。</td>
</tr>
<tr>
<td style="text-align:left">rollbackFor</td>
<td style="text-align:left">用于指定能够触发事务回滚的异常类型，并且可以指定多个异常类型。</td>
</tr>
</tbody>
</table>
<h4 id="transactional-事务注解原理" tabindex="-1"><a class="header-anchor" href="#transactional-事务注解原理" aria-hidden="true">#</a> <code v-pre>@Transactional</code> 事务注解原理</h4>
<p>面试中在问 AOP 的时候可能会被问到的一个问题。简单说下吧！</p>
<p>我们知道，<strong><code v-pre>@Transactional</code> 的工作机制是基于 AOP 实现的，AOP 又是使用动态代理实现的。如果目标对象实现了接口，默认情况下会采用 JDK 的动态代理，如果目标对象没有实现了接口,会使用 CGLIB 动态代理。</strong></p>
<p>多提一嘴：<code v-pre>createAopProxy()</code> 方法 决定了是使用 JDK 还是 Cglib 来做动态代理，源码如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DefaultAopProxyFactory</span> <span class="token keyword">implements</span> <span class="token class-name">AopProxyFactory</span><span class="token punctuation">,</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">AopProxy</span> <span class="token function">createAopProxy</span><span class="token punctuation">(</span><span class="token class-name">AdvisedSupport</span> config<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">AopConfigException</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>config<span class="token punctuation">.</span><span class="token function">isOptimize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> config<span class="token punctuation">.</span><span class="token function">isProxyTargetClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">hasNoUserSuppliedProxyInterfaces</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> targetClass <span class="token operator">=</span> config<span class="token punctuation">.</span><span class="token function">getTargetClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>targetClass <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">AopConfigException</span><span class="token punctuation">(</span><span class="token string">"TargetSource cannot determine target class: "</span> <span class="token operator">+</span>
						<span class="token string">"Either an interface or a target is required for proxy creation."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>targetClass<span class="token punctuation">.</span><span class="token function">isInterface</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">isProxyClass</span><span class="token punctuation">(</span>targetClass<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">JdkDynamicAopProxy</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ObjenesisCglibAopProxy</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">JdkDynamicAopProxy</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果一个类或者一个类中的 public 方法上被标注<code v-pre>@Transactional</code> 注解的话，Spring 容器就会在启动的时候为其创建一个代理类，在调用被<code v-pre>@Transactional</code> 注解的 public 方法的时候，实际调用的是，<code v-pre>TransactionInterceptor</code> 类中的 <code v-pre>invoke()</code>方法。这个方法的作用就是在目标方法之前开启事务，方法执行过程中如果遇到异常的时候回滚事务，方法调用完成之后提交事务。</p>
<blockquote>
<p><code v-pre>TransactionInterceptor</code> 类中的 <code v-pre>invoke()</code>方法内部实际调用的是 <code v-pre>TransactionAspectSupport</code> 类的 <code v-pre>invokeWithinTransaction()</code>方法。由于新版本的 Spring 对这部分重写很大，而且用到了很多响应式编程的知识，这里就不列源码了。</p>
</blockquote>
<h4 id="spring-aop-自调用问题" tabindex="-1"><a class="header-anchor" href="#spring-aop-自调用问题" aria-hidden="true">#</a> Spring AOP 自调用问题</h4>
<p>若同一类中的其他没有 <code v-pre>@Transactional</code> 注解的方法内部调用有 <code v-pre>@Transactional</code> 注解的方法，有<code v-pre>@Transactional</code> 注解的方法的事务会失效。</p>
<p>这是由于<code v-pre>Spring AOP</code>代理的原因造成的，因为只有当 <code v-pre>@Transactional</code> 注解的方法在类以外被调用的时候，Spring 事务管理才生效。</p>
<p><code v-pre>MyService</code> 类中的<code v-pre>method1()</code>调用<code v-pre>method2()</code>就会导致<code v-pre>method2()</code>的事务失效。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyService</span> <span class="token punctuation">{</span>

<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token comment">//......</span>
<span class="token punctuation">}</span>
<span class="token annotation punctuation">@Transactional</span>
 <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token comment">//......</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解决办法就是避免同一类中自调用或者使用 AspectJ 取代 Spring AOP 代理。</p>
<h4 id="transactional-的使用注意事项总结" tabindex="-1"><a class="header-anchor" href="#transactional-的使用注意事项总结" aria-hidden="true">#</a> <code v-pre>@Transactional</code> 的使用注意事项总结</h4>
<ul>
<li><code v-pre>@Transactional</code> 注解只有作用到 public 方法上事务才生效，不推荐在接口上使用；</li>
<li>避免同一个类中调用 <code v-pre>@Transactional</code> 注解的方法，这样会导致事务失效；</li>
<li>正确的设置 <code v-pre>@Transactional</code> 的 <code v-pre>rollbackFor</code> 和 <code v-pre>propagation</code> 属性，否则事务可能会回滚失败;</li>
<li>被 <code v-pre>@Transactional</code> 注解的方法所在的类必须被 Spring 管理，否则不生效；</li>
<li>底层使用的数据库必须支持事务机制，否则不生效；</li>
<li>......</li>
</ul>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>[总结]Spring 事务管理中@Transactional 的参数:<a href="http://www.mobabel.net/spring%E4%BA%8B%E5%8A%A1%E7%AE%A1%E7%90%86%E4%B8%ADtransactional%E7%9A%84%E5%8F%82%E6%95%B0/" target="_blank" rel="noopener noreferrer">http://www.mobabel.net/spring 事务管理中 transactional 的参数/<ExternalLinkIcon/></a></li>
<li>Spring 官方文档：<a href="https://docs.spring.io/spring/docs/4.2.x/spring-framework-reference/html/transaction.html" target="_blank" rel="noopener noreferrer">https://docs.spring.io/spring/docs/4.2.x/spring-framework-reference/html/transaction.html<ExternalLinkIcon/></a></li>
<li>《Spring5 高级编程》</li>
<li>透彻的掌握 Spring 中@transactional 的使用: <a href="https://www.ibm.com/developerworks/cn/java/j-master-spring-transactional-use/index.html" target="_blank" rel="noopener noreferrer">https://www.ibm.com/developerworks/cn/java/j-master-spring-transactional-use/index.html<ExternalLinkIcon/></a></li>
<li>Spring 事务的传播特性：<a href="https://github.com/love-somnus/Spring/wiki/Spring%E4%BA%8B%E5%8A%A1%E7%9A%84%E4%BC%A0%E6%92%AD%E7%89%B9%E6%80%A7" target="_blank" rel="noopener noreferrer">https://github.com/love-somnus/Spring/wiki/Spring 事务的传播特性<ExternalLinkIcon/></a></li>
<li><a href="https://segmentfault.com/a/1190000013341344" target="_blank" rel="noopener noreferrer">Spring 事务传播行为详解<ExternalLinkIcon/></a> ：<a href="https://segmentfault.com/a/1190000013341344" target="_blank" rel="noopener noreferrer">https://segmentfault.com/a/1190000013341344<ExternalLinkIcon/></a></li>
<li>全面分析 Spring 的编程式事务管理及声明式事务管理：<a href="https://www.ibm.com/developerworks/cn/education/opensource/os-cn-spring-trans/index.html" target="_blank" rel="noopener noreferrer">https://www.ibm.com/developerworks/cn/education/opensource/os-cn-spring-trans/index.html<ExternalLinkIcon/></a></li>
</ul>
</div></template>
