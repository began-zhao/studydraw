<template><div><h1 id="mybatis-常见面试总结" tabindex="-1"><a class="header-anchor" href="#mybatis-常见面试总结" aria-hidden="true">#</a> MyBatis 常见面试总结</h1>
<blockquote>
<p>本篇文章是收集自网络，原出处不明。</p>
</blockquote>
<p>MyBatis 技术内幕系列博客，从原理和源码角度，介绍了其内部实现细节，无论是写的好与不好，我确实是用心写了，由于并不是介绍如何使用 MyBatis 的文章，所以，一些参数使用细节略掉了，我们的目标是介绍 MyBatis 的技术架构和重要组成部分，以及基本运行原理。</p>
<p>博客写的很辛苦，但是写出来却不一定好看，所谓开始很兴奋，过程很痛苦，结束很遗憾。要求不高，只要读者能从系列博客中，学习到一点其他博客所没有的技术点，作为作者，我就很欣慰了，我也读别人写的博客，通常对自己当前研究的技术，是很有帮助的。</p>
<p>尽管还有很多可写的内容，但是，我认为再写下去已经没有意义，任何其他小的功能点，都是在已经介绍的基本框架和基本原理下运行的，只有结束，才能有新的开始。写博客也积攒了一些经验，源码多了感觉就是复制黏贴，源码少了又觉得是空谈原理，将来再写博客，我希望是“精炼博文”，好读好懂美观读起来又不累，希望自己能再写一部开源分布式框架原理系列博客。</p>
<p>有胆就来，我出几道 MyBatis 面试题，看你能回答上来几道（都是我出的，可不是网上找的）。</p>
<h4 id="_1、-和-的区别是什么" tabindex="-1"><a class="header-anchor" href="#_1、-和-的区别是什么" aria-hidden="true">#</a> 1、#{}和${}的区别是什么？</h4>
<p>注：这道题是面试官面试我同事的。</p>
<p>答：</p>
<ul>
<li><code v-pre>${}</code>是 Properties 文件中的变量占位符，它可以用于标签属性值和 sql 内部，属于静态文本替换，比如${driver}会被静态替换为<code v-pre>com.mysql.jdbc. Driver</code>。</li>
<li><code v-pre>#{}</code>是 sql 的参数占位符，MyBatis 会将 sql 中的<code v-pre>#{}</code>替换为? 号，在 sql 执行前会使用 PreparedStatement 的参数设置方法，按序给 sql 的? 号占位符设置参数值，比如 ps.setInt(0, parameterValue)，<code v-pre>#{item.name}</code> 的取值方式为使用反射从参数对象中获取 item 对象的 name 属性值，相当于 <code v-pre>param.getItem().getName()</code>。</li>
</ul>
<h4 id="_2、xml-映射文件中-除了常见的-select-insert-update-delete-标签之外-还有哪些标签" tabindex="-1"><a class="header-anchor" href="#_2、xml-映射文件中-除了常见的-select-insert-update-delete-标签之外-还有哪些标签" aria-hidden="true">#</a> 2、Xml 映射文件中，除了常见的 select|insert|update|delete 标签之外，还有哪些标签？</h4>
<p>注：这道题是京东面试官面试我时问的。</p>
<p>答：还有很多其他的标签， <code v-pre>&lt;resultMap&gt;</code> 、 <code v-pre>&lt;parameterMap&gt;</code> 、 <code v-pre>&lt;sql&gt;</code> 、 <code v-pre>&lt;include&gt;</code> 、 <code v-pre>&lt;selectKey&gt;</code> ，加上动态 sql 的 9 个标签， <code v-pre>trim|where|set|foreach|if|choose|when|otherwise|bind</code> 等，其中 <code v-pre>&lt;sql&gt;</code> 为 sql 片段标签，通过 <code v-pre>&lt;include&gt;</code> 标签引入 sql 片段， <code v-pre>&lt;selectKey&gt;</code> 为不支持自增的主键生成策略标签。</p>
<h4 id="_3、最佳实践中-通常一个-xml-映射文件-都会写一个-dao-接口与之对应-请问-这个-dao-接口的工作原理是什么-dao-接口里的方法-参数不同时-方法能重载吗" tabindex="-1"><a class="header-anchor" href="#_3、最佳实践中-通常一个-xml-映射文件-都会写一个-dao-接口与之对应-请问-这个-dao-接口的工作原理是什么-dao-接口里的方法-参数不同时-方法能重载吗" aria-hidden="true">#</a> 3、最佳实践中，通常一个 Xml 映射文件，都会写一个 Dao 接口与之对应，请问，这个 Dao 接口的工作原理是什么？Dao 接口里的方法，参数不同时，方法能重载吗？</h4>
<p>注：这道题也是京东面试官面试我被问的。</p>
<p>答：Dao 接口，就是人们常说的 <code v-pre>Mapper</code> 接口，接口的全限名，就是映射文件中的 namespace 的值，接口的方法名，就是映射文件中 <code v-pre>MappedStatement</code> 的 id 值，接口方法内的参数，就是传递给 sql 的参数。 <code v-pre>Mapper</code> 接口是没有实现类的，当调用接口方法时，接口全限名+方法名拼接字符串作为 key 值，可唯一定位一个 <code v-pre>MappedStatement</code> ，举例： <code v-pre>com.mybatis3.mappers. StudentDao.findStudentById</code> ，可以唯一找到 namespace 为 <code v-pre>com.mybatis3.mappers. StudentDao</code> 下面 <code v-pre>id = findStudentById</code> 的 <code v-pre>MappedStatement</code> 。在 MyBatis 中，每一个 <code v-pre>&lt;select&gt;</code> 、 <code v-pre>&lt;insert&gt;</code> 、 <code v-pre>&lt;update&gt;</code> 、 <code v-pre>&lt;delete&gt;</code> 标签，都会被解析为一个 <code v-pre>MappedStatement</code> 对象。</p>
<p><s>Dao 接口里的方法，是不能重载的，因为是全限名+方法名的保存和寻找策略。</s></p>
<p>Dao 接口里的方法可以重载，但是 Mybatis 的 XML 里面的 ID 不允许重复。</p>
<p>Mybatis 版本 3.3.0，亲测如下：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * Mapper接口里面方法重载
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">StuMapper</span> <span class="token punctuation">{</span>

	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span> <span class="token function">getAllStu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Student</span><span class="token punctuation">></span></span> <span class="token function">getAllStu</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在 <code v-pre>StuMapper.xml</code> 中利用 Mybatis 的动态 sql 就可以实现。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code>	<span class="token operator">&lt;</span>select id<span class="token operator">=</span><span class="token string">"getAllStu"</span> resultType<span class="token operator">=</span><span class="token string">"com.pojo.Student"</span><span class="token operator">></span>
 		select <span class="token operator">*</span> from student
		<span class="token generics"><span class="token punctuation">&lt;</span>where<span class="token punctuation">></span></span>
			<span class="token operator">&lt;</span><span class="token keyword">if</span> test<span class="token operator">=</span><span class="token string">"id != null"</span><span class="token operator">></span>
				id <span class="token operator">=</span> #<span class="token punctuation">{</span>id<span class="token punctuation">}</span>
			<span class="token operator">&lt;</span><span class="token operator">/</span><span class="token keyword">if</span><span class="token operator">></span>
		<span class="token operator">&lt;</span><span class="token operator">/</span>where<span class="token operator">></span>
 	<span class="token operator">&lt;</span><span class="token operator">/</span>select<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>能正常运行，并能得到相应的结果，这样就实现了在 Dao 接口中写重载方法。</p>
<p><strong>Mybatis 的 Dao 接口可以有多个重载方法，但是多个接口对应的映射必须只有一个，否则启动会报错。</strong></p>
<p>相关 issue ：<a href="https://github.com/Snailclimb/JavaGuide/issues/1122" target="_blank" rel="noopener noreferrer">更正：Dao 接口里的方法可以重载，但是 Mybatis 的 XML 里面的 ID 不允许重复！<ExternalLinkIcon/></a>。</p>
<p>Dao 接口的工作原理是 JDK 动态代理，MyBatis 运行时会使用 JDK 动态代理为 Dao 接口生成代理 proxy 对象，代理对象 proxy 会拦截接口方法，转而执行 <code v-pre>MappedStatement</code> 所代表的 sql，然后将 sql 执行结果返回。</p>
<h5 id="补充" tabindex="-1"><a class="header-anchor" href="#补充" aria-hidden="true">#</a> <mark>补充：</mark></h5>
<p>Dao 接口方法可以重载，但是需要满足以下条件：</p>
<ol>
<li>仅有一个无参方法和一个有参方法</li>
<li>多个有参方法时，参数数量必须一致。且使用相同的 <code v-pre>@Param</code> ，或者使用 <code v-pre>param1</code> 这种</li>
</ol>
<p>测试如下：</p>
<p><code v-pre>PersonDao.java</code></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Person</span> <span class="token function">queryById</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Person</span> <span class="token function">queryById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Person</span> <span class="token function">queryById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"id"</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>PersonMapper.xml</code></p>
<div class="language-xml ext-xml line-numbers-mode"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>queryById<span class="token punctuation">"</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>PersonMap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    select
      id, name, age, address
    from person
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>where</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            id = #{id}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>name != null and name != <span class="token punctuation">'</span><span class="token punctuation">'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            name = #{name}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>where</span><span class="token punctuation">></span></span>
    limit 1
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>org.apache.ibatis.scripting.xmltags. DynamicContext. ContextAccessor#getProperty</code> 方法用于获取 <code v-pre>&lt;if&gt;</code> 标签中的条件值</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getProperty</span><span class="token punctuation">(</span><span class="token class-name">Map</span> context<span class="token punctuation">,</span> <span class="token class-name">Object</span> target<span class="token punctuation">,</span> <span class="token class-name">Object</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token class-name">Map</span> map <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token punctuation">)</span> target<span class="token punctuation">;</span>

  <span class="token class-name">Object</span> result <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token operator">||</span> result <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> result<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token class-name">Object</span> parameterObject <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>PARAMETER_OBJECT_KEY<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>parameterObject <span class="token keyword">instanceof</span> <span class="token class-name">Map</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">Map</span><span class="token punctuation">)</span>parameterObject<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>parameterObject</code> 为 map，存放的是 Dao 接口中参数相关信息。</p>
<p><code v-pre>((Map)parameterObject).get(name)</code> 方法如下</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">V</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">BindingException</span><span class="token punctuation">(</span><span class="token string">"Parameter '"</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">"' not found. Available parameters are "</span> <span class="token operator">+</span> <span class="token function">keySet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li><code v-pre>queryById()</code>方法执行时，<code v-pre>parameterObject</code>为 null，<code v-pre>getProperty</code>方法返回 null 值，<code v-pre>&lt;if&gt;</code>标签获取的所有条件值都为 null，所有条件不成立，动态 sql 可以正常执行。</li>
<li><code v-pre>queryById(1L)</code>方法执行时，<code v-pre>parameterObject</code>为 map，包含了<code v-pre>id</code>和<code v-pre>param1</code>两个 key 值。当获取<code v-pre>&lt;if&gt;</code>标签中<code v-pre>name</code>的属性值时，进入<code v-pre>((Map)parameterObject).get(name)</code>方法中，map 中 key 不包含<code v-pre>name</code>，所以抛出异常。</li>
<li><code v-pre>queryById(1L,&quot;1&quot;)</code>方法执行时，<code v-pre>parameterObject</code>中包含<code v-pre>id</code>,<code v-pre>param1</code>,<code v-pre>name</code>,<code v-pre>param2</code>四个 key 值，<code v-pre>id</code>和<code v-pre>name</code>属性都可以获取到，动态 sql 正常执行。</li>
</ol>
<h4 id="_4、mybatis-是如何进行分页的-分页插件的原理是什么" tabindex="-1"><a class="header-anchor" href="#_4、mybatis-是如何进行分页的-分页插件的原理是什么" aria-hidden="true">#</a> 4、MyBatis 是如何进行分页的？分页插件的原理是什么？</h4>
<p>注：我出的。</p>
<p>答：<strong>(1)</strong> MyBatis 使用 RowBounds 对象进行分页，它是针对 ResultSet 结果集执行的内存分页，而非物理分页；<strong>(2)</strong> 可以在 sql 内直接书写带有物理分页的参数来完成物理分页功能，<strong>(3)</strong> 也可以使用分页插件来完成物理分页。</p>
<p>分页插件的基本原理是使用 MyBatis 提供的插件接口，实现自定义插件，在插件的拦截方法内拦截待执行的 sql，然后重写 sql，根据 dialect 方言，添加对应的物理分页语句和物理分页参数。</p>
<p>举例： <code v-pre>select _ from student</code> ，拦截 sql 后重写为： <code v-pre>select t._ from （select \* from student）t limit 0，10</code></p>
<h4 id="_5、简述-mybatis-的插件运行原理-以及如何编写一个插件。" tabindex="-1"><a class="header-anchor" href="#_5、简述-mybatis-的插件运行原理-以及如何编写一个插件。" aria-hidden="true">#</a> 5、简述 MyBatis 的插件运行原理，以及如何编写一个插件。</h4>
<p>注：我出的。</p>
<p>答：MyBatis 仅可以编写针对 <code v-pre>ParameterHandler</code> 、 <code v-pre>ResultSetHandler</code> 、 <code v-pre>StatementHandler</code> 、 <code v-pre>Executor</code> 这 4 种接口的插件，MyBatis 使用 JDK 的动态代理，为需要拦截的接口生成代理对象以实现接口方法拦截功能，每当执行这 4 种接口对象的方法时，就会进入拦截方法，具体就是 <code v-pre>InvocationHandler</code> 的 <code v-pre>invoke()</code> 方法，当然，只会拦截那些你指定需要拦截的方法。</p>
<p>实现 MyBatis 的 Interceptor 接口并复写 <code v-pre>intercept()</code> 方法，然后在给插件编写注解，指定要拦截哪一个接口的哪些方法即可，记住，别忘了在配置文件中配置你编写的插件。</p>
<h4 id="_6、mybatis-执行批量插入-能返回数据库主键列表吗" tabindex="-1"><a class="header-anchor" href="#_6、mybatis-执行批量插入-能返回数据库主键列表吗" aria-hidden="true">#</a> 6、MyBatis 执行批量插入，能返回数据库主键列表吗？</h4>
<p>注：我出的。</p>
<p>答：能，JDBC 都能，MyBatis 当然也能。</p>
<h4 id="_7、mybatis-动态-sql-是做什么的-都有哪些动态-sql-能简述一下动态-sql-的执行原理不" tabindex="-1"><a class="header-anchor" href="#_7、mybatis-动态-sql-是做什么的-都有哪些动态-sql-能简述一下动态-sql-的执行原理不" aria-hidden="true">#</a> 7、MyBatis 动态 sql 是做什么的？都有哪些动态 sql？能简述一下动态 sql 的执行原理不？</h4>
<p>注：我出的。</p>
<p>答：MyBatis 动态 sql 可以让我们在 Xml 映射文件内，以标签的形式编写动态 sql，完成逻辑判断和动态拼接 sql 的功能，MyBatis 提供了 9 种动态 sql 标签 <code v-pre>trim|where|set|foreach|if|choose|when|otherwise|bind</code> 。</p>
<p>其执行原理为，使用 OGNL 从 sql 参数对象中计算表达式的值，根据表达式的值动态拼接 sql，以此来完成动态 sql 的功能。</p>
<h4 id="_8、mybatis-是如何将-sql-执行结果封装为目标对象并返回的-都有哪些映射形式" tabindex="-1"><a class="header-anchor" href="#_8、mybatis-是如何将-sql-执行结果封装为目标对象并返回的-都有哪些映射形式" aria-hidden="true">#</a> 8、MyBatis 是如何将 sql 执行结果封装为目标对象并返回的？都有哪些映射形式？</h4>
<p>注：我出的。</p>
<p>答：第一种是使用 <code v-pre>&lt;resultMap&gt;</code> 标签，逐一定义列名和对象属性名之间的映射关系。第二种是使用 sql 列的别名功能，将列别名书写为对象属性名，比如 T_NAME AS NAME，对象属性名一般是 name，小写，但是列名不区分大小写，MyBatis 会忽略列名大小写，智能找到与之对应对象属性名，你甚至可以写成 T_NAME AS NaMe，MyBatis 一样可以正常工作。</p>
<p>有了列名与属性名的映射关系后，MyBatis 通过反射创建对象，同时使用反射给对象的属性逐一赋值并返回，那些找不到映射关系的属性，是无法完成赋值的。</p>
<h4 id="_9、mybatis-能执行一对一、一对多的关联查询吗-都有哪些实现方式-以及它们之间的区别。" tabindex="-1"><a class="header-anchor" href="#_9、mybatis-能执行一对一、一对多的关联查询吗-都有哪些实现方式-以及它们之间的区别。" aria-hidden="true">#</a> 9、MyBatis 能执行一对一、一对多的关联查询吗？都有哪些实现方式，以及它们之间的区别。</h4>
<p>注：我出的。</p>
<!-- 答：能，MyBatis 不仅可以执行一对一、一对多的关联查询，还可以执行多对一，多对多的关联查询，多对一查询，其实就是一对一查询，只需要把 `selectOne()` 修改为 `selectList()` 即可；多对多查询，其实就是一对多查询，只需要把 `selectOne()` 修改为 `selectList()` 即可。 -->
<p>关联对象查询，有两种实现方式，一种是单独发送一个 sql 去查询关联对象，赋给主对象，然后返回主对象。另一种是使用嵌套查询，嵌套查询的含义为使用 join 查询，一部分列是 A 对象的属性值，另外一部分列是关联对象 B 的属性值，好处是只发一个 sql 查询，就可以把主对象和其关联对象查出来。</p>
<p>那么问题来了，join 查询出来 100 条记录，如何确定主对象是 5 个，而不是 100 个？其去重复的原理是 <code v-pre>&lt;resultMap&gt;</code> 标签内的 <code v-pre>&lt;id&gt;</code> 子标签，指定了唯一确定一条记录的 id 列，MyBatis 根据 <code v-pre>&lt;id&gt;</code> 列值来完成 100 条记录的去重复功能， <code v-pre>&lt;id&gt;</code> 可以有多个，代表了联合主键的语意。</p>
<p>同样主对象的关联对象，也是根据这个原理去重复的，尽管一般情况下，只有主对象会有重复记录，关联对象一般不会重复。</p>
<p>举例：下面 join 查询出来 6 条记录，一、二列是 Teacher 对象列，第三列为 Student 对象列，MyBatis 去重复处理后，结果为 1 个老师 6 个学生，而不是 6 个老师 6 个学生。</p>
<table>
<thead>
<tr>
<th>t_id</th>
<th>t_name</th>
<th>s_id</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>teacher</td>
<td>38</td>
</tr>
<tr>
<td>1</td>
<td>teacher</td>
<td>39</td>
</tr>
<tr>
<td>1</td>
<td>teacher</td>
<td>40</td>
</tr>
<tr>
<td>1</td>
<td>teacher</td>
<td>41</td>
</tr>
<tr>
<td>1</td>
<td>teacher</td>
<td>42</td>
</tr>
<tr>
<td>1</td>
<td>teacher</td>
<td>43</td>
</tr>
</tbody>
</table>
<h4 id="_10、mybatis-是否支持延迟加载-如果支持-它的实现原理是什么" tabindex="-1"><a class="header-anchor" href="#_10、mybatis-是否支持延迟加载-如果支持-它的实现原理是什么" aria-hidden="true">#</a> 10、MyBatis 是否支持延迟加载？如果支持，它的实现原理是什么？</h4>
<p>注：我出的。</p>
<p>答：MyBatis 仅支持 association 关联对象和 collection 关联集合对象的延迟加载，association 指的就是一对一，collection 指的就是一对多查询。在 MyBatis 配置文件中，可以配置是否启用延迟加载 <code v-pre>lazyLoadingEnabled=true|false。</code></p>
<p>它的原理是，使用 <code v-pre>CGLIB</code> 创建目标对象的代理对象，当调用目标方法时，进入拦截器方法，比如调用 <code v-pre>a.getB().getName()</code> ，拦截器 <code v-pre>invoke()</code> 方法发现 <code v-pre>a.getB()</code> 是 null 值，那么就会单独发送事先保存好的查询关联 B 对象的 sql，把 B 查询上来，然后调用 a.setB(b)，于是 a 的对象 b 属性就有值了，接着完成 <code v-pre>a.getB().getName()</code> 方法的调用。这就是延迟加载的基本原理。</p>
<p>当然了，不光是 MyBatis，几乎所有的包括 Hibernate，支持延迟加载的原理都是一样的。</p>
<h4 id="_11、mybatis-的-xml-映射文件中-不同的-xml-映射文件-id-是否可以重复" tabindex="-1"><a class="header-anchor" href="#_11、mybatis-的-xml-映射文件中-不同的-xml-映射文件-id-是否可以重复" aria-hidden="true">#</a> 11、MyBatis 的 Xml 映射文件中，不同的 Xml 映射文件，id 是否可以重复？</h4>
<p>注：我出的。</p>
<p>答：不同的 Xml 映射文件，如果配置了 namespace，那么 id 可以重复；如果没有配置 namespace，那么 id 不能重复；毕竟 namespace 不是必须的，只是最佳实践而已。</p>
<p>原因就是 namespace+id 是作为 <code v-pre>Map&lt;String, MappedStatement&gt;</code> 的 key 使用的，如果没有 namespace，就剩下 id，那么，id 重复会导致数据互相覆盖。有了 namespace，自然 id 就可以重复，namespace 不同，namespace+id 自然也就不同。</p>
<h4 id="_12、mybatis-中如何执行批处理" tabindex="-1"><a class="header-anchor" href="#_12、mybatis-中如何执行批处理" aria-hidden="true">#</a> 12、MyBatis 中如何执行批处理？</h4>
<p>注：我出的。</p>
<p>答：使用 BatchExecutor 完成批处理。</p>
<h4 id="_13、mybatis-都有哪些-executor-执行器-它们之间的区别是什么" tabindex="-1"><a class="header-anchor" href="#_13、mybatis-都有哪些-executor-执行器-它们之间的区别是什么" aria-hidden="true">#</a> 13、MyBatis 都有哪些 Executor 执行器？它们之间的区别是什么？</h4>
<p>注：我出的</p>
<p>答：MyBatis 有三种基本的 Executor 执行器，** <code v-pre>SimpleExecutor</code> 、 <code v-pre>ReuseExecutor</code> 、 <code v-pre>BatchExecutor</code> 。**</p>
<p>** <code v-pre>SimpleExecutor</code> ：**每执行一次 update 或 select，就开启一个 Statement 对象，用完立刻关闭 Statement 对象。</p>
<p>** <code v-pre>ReuseExecutor</code> ：**执行 update 或 select，以 sql 作为 key 查找 Statement 对象，存在就使用，不存在就创建，用完后，不关闭 Statement 对象，而是放置于 Map&lt;String, Statement&gt;内，供下一次使用。简言之，就是重复使用 Statement 对象。</p>
<p>** <code v-pre>BatchExecutor</code> ：**执行 update（没有 select，JDBC 批处理不支持 select），将所有 sql 都添加到批处理中（addBatch()），等待统一执行（executeBatch()），它缓存了多个 Statement 对象，每个 Statement 对象都是 addBatch()完毕后，等待逐一执行 executeBatch()批处理。与 JDBC 批处理相同。</p>
<p>作用范围：Executor 的这些特点，都严格限制在 SqlSession 生命周期范围内。</p>
<h4 id="_14、mybatis-中如何指定使用哪一种-executor-执行器" tabindex="-1"><a class="header-anchor" href="#_14、mybatis-中如何指定使用哪一种-executor-执行器" aria-hidden="true">#</a> 14、MyBatis 中如何指定使用哪一种 Executor 执行器？</h4>
<p>注：我出的</p>
<p>答：在 MyBatis 配置文件中，可以指定默认的 ExecutorType 执行器类型，也可以手动给 <code v-pre>DefaultSqlSessionFactory</code> 的创建 SqlSession 的方法传递 ExecutorType 类型参数。</p>
<h4 id="_15、mybatis-是否可以映射-enum-枚举类" tabindex="-1"><a class="header-anchor" href="#_15、mybatis-是否可以映射-enum-枚举类" aria-hidden="true">#</a> 15、MyBatis 是否可以映射 Enum 枚举类？</h4>
<p>注：我出的</p>
<p>答：MyBatis 可以映射枚举类，不单可以映射枚举类，MyBatis 可以映射任何对象到表的一列上。映射方式为自定义一个 <code v-pre>TypeHandler</code> ，实现 <code v-pre>TypeHandler</code> 的 <code v-pre>setParameter()</code> 和 <code v-pre>getResult()</code> 接口方法。 <code v-pre>TypeHandler</code> 有两个作用，一是完成从 javaType 至 jdbcType 的转换，二是完成 jdbcType 至 javaType 的转换，体现为 <code v-pre>setParameter()</code> 和 <code v-pre>getResult()</code> 两个方法，分别代表设置 sql 问号占位符参数和获取列查询结果。</p>
<h4 id="_16、mybatis-映射文件中-如果-a-标签通过-include-引用了-b-标签的内容-请问-b-标签能否定义在-a-标签的后面-还是说必须定义在-a-标签的前面" tabindex="-1"><a class="header-anchor" href="#_16、mybatis-映射文件中-如果-a-标签通过-include-引用了-b-标签的内容-请问-b-标签能否定义在-a-标签的后面-还是说必须定义在-a-标签的前面" aria-hidden="true">#</a> 16、MyBatis 映射文件中，如果 A 标签通过 include 引用了 B 标签的内容，请问，B 标签能否定义在 A 标签的后面，还是说必须定义在 A 标签的前面？</h4>
<p>注：我出的</p>
<p>答：虽然 MyBatis 解析 Xml 映射文件是按照顺序解析的，但是，被引用的 B 标签依然可以定义在任何地方，MyBatis 都可以正确识别。</p>
<p>原理是，MyBatis 解析 A 标签，发现 A 标签引用了 B 标签，但是 B 标签尚未解析到，尚不存在，此时，MyBatis 会将 A 标签标记为未解析状态，然后继续解析余下的标签，包含 B 标签，待所有标签解析完毕，MyBatis 会重新解析那些被标记为未解析的标签，此时再解析 A 标签时，B 标签已经存在，A 标签也就可以正常解析完成了。</p>
<h4 id="_17、简述-mybatis-的-xml-映射文件和-mybatis-内部数据结构之间的映射关系" tabindex="-1"><a class="header-anchor" href="#_17、简述-mybatis-的-xml-映射文件和-mybatis-内部数据结构之间的映射关系" aria-hidden="true">#</a> 17、简述 MyBatis 的 Xml 映射文件和 MyBatis 内部数据结构之间的映射关系？</h4>
<p>注：我出的</p>
<p>答：MyBatis 将所有 Xml 配置信息都封装到 All-In-One 重量级对象 Configuration 内部。在 Xml 映射文件中， <code v-pre>&lt;parameterMap&gt;</code> 标签会被解析为 <code v-pre>ParameterMap</code> 对象，其每个子元素会被解析为 ParameterMapping 对象。 <code v-pre>&lt;resultMap&gt;</code> 标签会被解析为 <code v-pre>ResultMap</code> 对象，其每个子元素会被解析为 <code v-pre>ResultMapping</code> 对象。每一个 <code v-pre>&lt;select&gt;、&lt;insert&gt;、&lt;update&gt;、&lt;delete&gt;</code> 标签均会被解析为 <code v-pre>MappedStatement</code> 对象，标签内的 sql 会被解析为 BoundSql 对象。</p>
<h4 id="_18、为什么说-mybatis-是半自动-orm-映射工具-它与全自动的区别在哪里" tabindex="-1"><a class="header-anchor" href="#_18、为什么说-mybatis-是半自动-orm-映射工具-它与全自动的区别在哪里" aria-hidden="true">#</a> 18、为什么说 MyBatis 是半自动 ORM 映射工具？它与全自动的区别在哪里？</h4>
<p>注：我出的</p>
<p>答：Hibernate 属于全自动 ORM 映射工具，使用 Hibernate 查询关联对象或者关联集合对象时，可以根据对象关系模型直接获取，所以它是全自动的。而 MyBatis 在查询关联对象或关联集合对象时，需要手动编写 sql 来完成，所以，称之为半自动 ORM 映射工具。</p>
<p>面试题看似都很简单，但是想要能正确回答上来，必定是研究过源码且深入的人，而不是仅会使用的人或者用的很熟的人，以上所有面试题及其答案所涉及的内容，在我的 MyBatis 系列博客中都有详细讲解和原理分析。</p>
</div></template>
