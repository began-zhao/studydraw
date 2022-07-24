<template><div><h1 id="final-static-this-super-关键字总结" tabindex="-1"><a class="header-anchor" href="#final-static-this-super-关键字总结" aria-hidden="true">#</a> final,static,this,super 关键字总结</h1>
<h2 id="final-关键字" tabindex="-1"><a class="header-anchor" href="#final-关键字" aria-hidden="true">#</a> final 关键字</h2>
<p><strong>final 关键字，意思是最终的、不可修改的，最见不得变化 ，用来修饰类、方法和变量，具有以下特点：</strong></p>
<ol>
<li>
<p>final 修饰的类不能被继承，final 类中的所有成员方法都会被隐式的指定为 final 方法；</p>
</li>
<li>
<p>final 修饰的方法不能被重写；</p>
</li>
<li>
<p>final 修饰的变量是常量，如果是基本数据类型的变量，则其数值一旦在初始化之后便不能更改；如果是引用类型的变量，则在对其初始化之后便不能让其指向另一个对象。</p>
</li>
</ol>
<p>说明：使用 final 方法的原因有两个。第一个原因是把方法锁定，以防任何继承类修改它的含义；第二个原因是效率。在早期的 Java 实现版本中，会将 final 方法转为内嵌调用。但是如果方法过于庞大，可能看不到内嵌调用带来的任何性能提升（现在的 Java 版本已经不需要使用 final 方法进行这些优化了）。类中所有的 private 方法都隐式地指定为 final。</p>
<h2 id="static-关键字" tabindex="-1"><a class="header-anchor" href="#static-关键字" aria-hidden="true">#</a> static 关键字</h2>
<p><strong>static 关键字主要有以下四种使用场景：</strong></p>
<ol>
<li><strong>修饰成员变量和成员方法:</strong> 被 static 修饰的成员属于类，不属于单个这个类的某个对象，被类中所有对象共享，可以并且建议通过类名调用。被 static 声明的成员变量属于静态成员变量，静态变量 存放在 Java 内存区域的方法区。调用格式：<code v-pre>类名.静态变量名</code> <code v-pre>类名.静态方法名()</code></li>
<li><strong>静态代码块:</strong> 静态代码块定义在类中方法外, 静态代码块在非静态代码块之前执行(静态代码块—&gt;非静态代码块—&gt;构造方法)。 该类不管创建多少对象，静态代码块只执行一次.</li>
<li><strong>静态内部类（static 修饰类的话只能修饰内部类）：</strong> 静态内部类与非静态内部类之间存在一个最大的区别: 非静态内部类在编译完成之后会隐含地保存着一个引用，该引用是指向创建它的外围类，但是静态内部类却没有。没有这个引用就意味着：1. 它的创建是不需要依赖外围类的创建。2. 它不能使用任何外围类的非 static 成员变量和方法。</li>
<li><strong>静态导包(用来导入类中的静态资源，1.5 之后的新特性):</strong> 格式为：<code v-pre>import static</code> 这两个关键字连用可以指定导入某个类中的指定静态资源，并且不需要使用类名调用类中静态成员，可以直接使用类中静态成员变量和成员方法。</li>
</ol>
<h2 id="this-关键字" tabindex="-1"><a class="header-anchor" href="#this-关键字" aria-hidden="true">#</a> this 关键字</h2>
<p>this 关键字用于引用类的当前实例。 例如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Manager</span> <span class="token punctuation">{</span>
    <span class="token class-name">Employees</span><span class="token punctuation">[</span><span class="token punctuation">]</span> employees<span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">manageEmployees</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> totalEmp <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>employees<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Total employees: "</span> <span class="token operator">+</span> totalEmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">report</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">void</span> <span class="token function">report</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的示例中，this 关键字用于两个地方：</p>
<ul>
<li>this.employees.length：访问类 Manager 的当前实例的变量。</li>
<li>this.report（）：调用类 Manager 的当前实例的方法。</li>
</ul>
<p>此关键字是可选的，这意味着如果上面的示例在不使用此关键字的情况下表现相同。 但是，使用此关键字可能会使代码更易读或易懂。</p>
<h2 id="super-关键字" tabindex="-1"><a class="header-anchor" href="#super-关键字" aria-hidden="true">#</a> super 关键字</h2>
<p>super 关键字用于从子类访问父类的变量和方法。 例如：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Super</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> <span class="token keyword">int</span> number<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token function">showNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"number = "</span> <span class="token operator">+</span> number<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Sub</span> <span class="token keyword">extends</span> <span class="token class-name">Super</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span>number <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">showNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中，Sub 类访问父类成员变量 number 并调用其父类 Super 的 <code v-pre>showNumber（）</code> 方法。</p>
<p><strong>使用 this 和 super 要注意的问题：</strong></p>
<ul>
<li>在构造器中使用 <code v-pre>super()</code> 调用父类中的其他构造方法时，该语句必须处于构造器的首行，否则编译器会报错。另外，this 调用本类中的其他构造方法时，也要放在首行。</li>
<li>this、super 不能用在 static 方法中。</li>
</ul>
<p><strong>简单解释一下：</strong></p>
<p>被 static 修饰的成员属于类，不属于单个这个类的某个对象，被类中所有对象共享。而 this 代表对本类对象的引用，指向本类对象；而 super 代表对父类对象的引用，指向父类对象；所以， <strong>this 和 super 是属于对象范畴的东西，而静态方法是属于类范畴的东西</strong>。</p>
<h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li><a href="https://www.codejava.net/java-core/the-java-language/java-keywords" target="_blank" rel="noopener noreferrer">https://www.codejava.net/java-core/the-java-language/java-keywords<ExternalLinkIcon/></a></li>
<li><a href="https://blog.csdn.net/u013393958/article/details/79881037" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/u013393958/article/details/79881037<ExternalLinkIcon/></a></li>
</ul>
<h1 id="static-关键字详解" tabindex="-1"><a class="header-anchor" href="#static-关键字详解" aria-hidden="true">#</a> static 关键字详解</h1>
<h2 id="static-关键字主要有以下四种使用场景" tabindex="-1"><a class="header-anchor" href="#static-关键字主要有以下四种使用场景" aria-hidden="true">#</a> static 关键字主要有以下四种使用场景</h2>
<ol>
<li>修饰成员变量和成员方法</li>
<li>静态代码块</li>
<li>修饰类(只能修饰内部类)</li>
<li>静态导包(用来导入类中的静态资源，1.5 之后的新特性)</li>
</ol>
<h3 id="修饰成员变量和成员方法-常用" tabindex="-1"><a class="header-anchor" href="#修饰成员变量和成员方法-常用" aria-hidden="true">#</a> 修饰成员变量和成员方法(常用)</h3>
<p>被 static 修饰的成员属于类，不属于单个这个类的某个对象，被类中所有对象共享，可以并且建议通过类名调用。被 static 声明的成员变量属于静态成员变量，静态变量 存放在 Java 内存区域的方法区。</p>
<p>方法区与 Java 堆一样，是各个线程共享的内存区域，它用于存储已被虚拟机加载的类信息、常量、静态变量、即时编译器编译后的代码等数据。虽然 Java 虚拟机规范把方法区描述为堆的一个逻辑部分，但是它却有一个别名叫做 Non-Heap（非堆），目的应该是与 Java 堆区分开来。</p>
<p>HotSpot 虚拟机中方法区也常被称为 “永久代”，本质上两者并不等价。仅仅是因为 HotSpot 虚拟机设计团队用永久代来实现方法区而已，这样 HotSpot 虚拟机的垃圾收集器就可以像管理 Java 堆一样管理这部分内存了。但是这并不是一个好主意，因为这样更容易遇到内存溢出问题。</p>
<p>调用格式：</p>
<ul>
<li><code v-pre>类名.静态变量名</code></li>
<li><code v-pre>类名.静态方法名()</code></li>
</ul>
<p>如果变量或者方法被 private 则代表该属性或者该方法只能在类的内部被访问而不能在类的外部被访问。</p>
<p>测试方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticBean</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token comment">//静态变量</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">StaticBean</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//静态方法</span>
    <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"Hello i am java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">"StaticBean{"</span><span class="token operator">+</span>
                <span class="token string">"name="</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">",age="</span> <span class="token operator">+</span> age <span class="token operator">+</span>
                <span class="token string">"}"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StaticDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">StaticBean</span> staticBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StaticBean</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StaticBean</span> staticBean2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StaticBean</span><span class="token punctuation">(</span><span class="token string">"2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StaticBean</span> staticBean3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StaticBean</span><span class="token punctuation">(</span><span class="token string">"3"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StaticBean</span> staticBean4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StaticBean</span><span class="token punctuation">(</span><span class="token string">"4"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">StaticBean</span><span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>staticBean <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> staticBean2 <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> staticBean3 <span class="token operator">+</span> <span class="token string">" "</span> <span class="token operator">+</span> staticBean4<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//StaticBean{name=1,age=33} StaticBean{name=2,age=33} StaticBean{name=3,age=33} StaticBean{name=4,age=33}</span>
        <span class="token class-name">StaticBean</span><span class="token punctuation">.</span><span class="token function">sayHello</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//Hello i am java</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态代码块" tabindex="-1"><a class="header-anchor" href="#静态代码块" aria-hidden="true">#</a> 静态代码块</h3>
<p>静态代码块定义在类中方法外, 静态代码块在非静态代码块之前执行(静态代码块 —&gt; 非静态代码块 —&gt; 构造方法)。 该类不管创建多少对象，静态代码块只执行一次.</p>
<p>静态代码块的格式是</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>static {
语句体;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个类中的静态代码块可以有多个，位置可以随便放，它不在任何的方法体内，JVM 加载类时会执行这些静态的代码块，如果静态代码块有多个，JVM 将按照它们在类中出现的先后顺序依次执行它们，每个代码块只会被执行一次。</p>
<p><img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-9-14/88531075.jpg" alt="" loading="lazy"></p>
<p>静态代码块对于定义在它之后的静态变量，可以赋值，但是不能访问.</p>
<h3 id="静态内部类" tabindex="-1"><a class="header-anchor" href="#静态内部类" aria-hidden="true">#</a> 静态内部类</h3>
<p>静态内部类与非静态内部类之间存在一个最大的区别，我们知道非静态内部类在编译完成之后会隐含地保存着一个引用，该引用是指向创建它的外围类，但是静态内部类却没有。没有这个引用就意味着：</p>
<ol>
<li>它的创建是不需要依赖外围类的创建。</li>
<li>它不能使用任何外围类的非 static 成员变量和方法。</li>
</ol>
<p>Example（静态内部类实现单例模式）</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Singleton</span> <span class="token punctuation">{</span>
    <span class="token comment">//声明为 private 避免调用默认构造方法创建对象</span>
    <span class="token keyword">private</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
   <span class="token comment">// 声明为 private 表明静态内部该类只能在该 Singleton 类中被访问</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">SingletonHolder</span> <span class="token punctuation">{</span>
        <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token class-name">Singleton</span> INSTANCE <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Singleton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Singleton</span> <span class="token function">getUniqueInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">SingletonHolder</span><span class="token punctuation">.</span>INSTANCE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当 Singleton 类加载时，静态内部类 SingletonHolder 没有被加载进内存。只有当调用 <code v-pre>getUniqueInstance()</code>方法从而触发 <code v-pre>SingletonHolder.INSTANCE</code> 时 SingletonHolder 才会被加载，此时初始化 INSTANCE 实例，并且 JVM 能确保 INSTANCE 只被实例化一次。</p>
<p>这种方式不仅具有延迟初始化的好处，而且由 JVM 提供了对线程安全的支持。</p>
<h3 id="静态导包" tabindex="-1"><a class="header-anchor" href="#静态导包" aria-hidden="true">#</a> 静态导包</h3>
<p>格式为：import static</p>
<p>这两个关键字连用可以指定导入某个类中的指定静态资源，并且不需要使用类名调用类中静态成员，可以直接使用类中静态成员变量和成员方法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code> <span class="token comment">//将Math中的所有静态资源导入，这时候可以直接使用里面的静态方法，而不用通过类名进行调用</span>
 <span class="token comment">//如果只想导入单一某个静态方法，只需要将*换成对应的方法名即可</span>
<span class="token keyword">import</span> <span class="token keyword">static</span> <span class="token import static"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token operator">*</span></span><span class="token punctuation">;</span><span class="token comment">//换成import static java.lang.Math.max;具有一样的效果</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demo</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> max <span class="token operator">=</span> <span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="补充内容" tabindex="-1"><a class="header-anchor" href="#补充内容" aria-hidden="true">#</a> 补充内容</h2>
<h3 id="静态方法与非静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法与非静态方法" aria-hidden="true">#</a> 静态方法与非静态方法</h3>
<p>静态方法属于类本身，非静态方法属于从该类生成的每个对象。 如果您的方法执行的操作不依赖于其类的各个变量和方法，请将其设置为静态（这将使程序的占用空间更小）。 否则，它应该是非静态的。</p>
<p>Example</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> i<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">this</span><span class="token punctuation">.</span>i <span class="token operator">=</span> i<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">method1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token string">"An example string that doesn't depend on i (an instance variable)"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>  <span class="token comment">//Depends on i</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以像这样调用静态方法：<code v-pre>Foo.method1()</code>。 如果您尝试使用这种方法调用 method2 将失败。 但这样可行</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Foo</span> bar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bar<span class="token punctuation">.</span><span class="token function">method2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>总结：</p>
<ul>
<li>在外部调用静态方法时，可以使用”类名.方法名”的方式，也可以使用”对象名.方法名”的方式。而实例方法只有后面这种方式。也就是说，调用静态方法可以无需创建对象。</li>
<li>静态方法在访问本类的成员时，只允许访问静态成员（即静态成员变量和静态方法），而不允许访问实例成员变量和实例方法；实例方法则无此限制</li>
</ul>
<h3 id="static-静态代码块与-非静态代码块-构造代码块" tabindex="-1"><a class="header-anchor" href="#static-静态代码块与-非静态代码块-构造代码块" aria-hidden="true">#</a> <code v-pre>static{}</code>静态代码块与<code v-pre>{}</code>非静态代码块(构造代码块)</h3>
<p>相同点： 都是在 JVM 加载类时且在构造方法执行之前执行，在类中都可以定义多个，定义多个时按定义的顺序执行，一般在代码块中对一些 static 变量进行赋值。</p>
<p>不同点： 静态代码块在非静态代码块之前执行(静态代码块 -&gt; 非静态代码块 -&gt; 构造方法)。静态代码块只在第一次 new 执行一次，之后不再执行，而非静态代码块在每 new 一次就执行一次。 非静态代码块可在普通方法中定义(不过作用不大)；而静态代码块不行。</p>
<blockquote>
<p><strong>🐛 修正（参见： <a href="https://github.com/Snailclimb/JavaGuide/issues/677" target="_blank" rel="noopener noreferrer">issue #677<ExternalLinkIcon/></a>）</strong> ：静态代码块可能在第一次 new 对象的时候执行，但不一定只在第一次 new 的时候执行。比如通过 <code v-pre>Class.forName(&quot;ClassDemo&quot;)</code>创建 Class 对象的时候也会执行，即 new 或者 <code v-pre>Class.forName(&quot;ClassDemo&quot;)</code> 都会执行静态代码块。
一般情况下,如果有些代码比如一些项目最常用的变量或对象必须在项目启动的时候就执行的时候,需要使用静态代码块,这种代码是主动执行的。如果我们想要设计不需要创建对象就可以调用类中的方法，例如：<code v-pre>Arrays</code> 类，<code v-pre>Character</code> 类，<code v-pre>String</code> 类等，就需要使用静态方法, 两者的区别是 静态代码块是自动执行的而静态方法是被调用的时候才执行的.</p>
</blockquote>
<p>Example：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"默认构造方法！--"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//非静态代码块</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"非静态代码块！--"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//静态代码块</span>
    <span class="token keyword">static</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"静态代码块！--"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"静态方法中的内容! --"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"静态方法中的代码块！--"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Test</span> test <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Test</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//静态代码块！--静态方法中的内容! --静态方法中的代码块！--</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>静态代码块！--非静态代码块！--默认构造方法！--静态方法中的内容! --静态方法中的代码块！--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当只执行 <code v-pre>Test.test();</code> 时输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>静态代码块！--静态方法中的内容! --静态方法中的代码块！--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当只执行 <code v-pre>Test test = new Test();</code> 时输出：</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>静态代码块！--非静态代码块！--默认构造方法！--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>非静态代码块与构造函数的区别是： 非静态代码块是给所有对象进行统一初始化，而构造函数是给对应的对象初始化，因为构造函数是可以多个的，运行哪个构造函数就会建立什么样的对象，但无论建立哪个对象，都会先执行相同的构造代码块。也就是说，构造代码块中定义的是不同对象共性的初始化内容。</p>
<h3 id="参考-1" tabindex="-1"><a class="header-anchor" href="#参考-1" aria-hidden="true">#</a> 参考</h3>
<ul>
<li><a href="https://blog.csdn.net/chen13579867831/article/details/78995480" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/chen13579867831/article/details/78995480<ExternalLinkIcon/></a></li>
<li><a href="https://www.cnblogs.com/chenssy/p/3388487.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/chenssy/p/3388487.html<ExternalLinkIcon/></a></li>
<li><a href="https://www.cnblogs.com/Qian123/p/5713440.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/Qian123/p/5713440.html<ExternalLinkIcon/></a></li>
</ul>
</div></template>
