<template><div><h2 id="面向对象基础" tabindex="-1"><a class="header-anchor" href="#面向对象基础" aria-hidden="true">#</a> 面向对象基础</h2>
<h3 id="面向对象和面向过程的区别" tabindex="-1"><a class="header-anchor" href="#面向对象和面向过程的区别" aria-hidden="true">#</a> 面向对象和面向过程的区别</h3>
<p>两者的主要区别在于解决问题的方式不同：</p>
<ul>
<li>面向过程把解决问题的过程拆成一个个方法，通过一个个方法的执行解决问题。</li>
<li>面向对象会先抽象出对象，然后用对象执行方法的方式解决问题。</li>
</ul>
<p>另外，面向对象开发的程序一般更易维护、易复用、易扩展。</p>
<p>相关 issue : <a href="https://github.com/Snailclimb/JavaGuide/issues/431" target="_blank" rel="noopener noreferrer">面向过程 ：面向过程性能比面向对象高？？<ExternalLinkIcon/></a></p>
<h3 id="成员变量与局部变量的区别" tabindex="-1"><a class="header-anchor" href="#成员变量与局部变量的区别" aria-hidden="true">#</a> 成员变量与局部变量的区别</h3>
<ul>
<li><strong>语法形式</strong> ：从语法形式上看，成员变量是属于类的，而局部变量是在代码块或方法中定义的变量或是方法的参数；成员变量可以被 <code v-pre>public</code>,<code v-pre>private</code>,<code v-pre>static</code> 等修饰符所修饰，而局部变量不能被访问控制修饰符及 <code v-pre>static</code> 所修饰；但是，成员变量和局部变量都能被 <code v-pre>final</code> 所修饰。</li>
<li><strong>存储方式</strong> ：从变量在内存中的存储方式来看,如果成员变量是使用 <code v-pre>static</code> 修饰的，那么这个成员变量是属于类的，如果没有使用 <code v-pre>static</code> 修饰，这个成员变量是属于实例的。而对象存在于堆内存，局部变量则存在于栈内存。</li>
<li><strong>生存时间</strong> ：从变量在内存中的生存时间上看，成员变量是对象的一部分，它随着对象的创建而存在，而局部变量随着方法的调用而自动生成，随着方法的调用结束而消亡。</li>
<li><strong>默认值</strong> ：从变量是否有默认值来看，成员变量如果没有被赋初始值，则会自动以类型的默认值而赋值（一种情况例外:被 <code v-pre>final</code> 修饰的成员变量也必须显式地赋值），而局部变量则不会自动赋值。</li>
</ul>
<h3 id="创建一个对象用什么运算符-对象实体与对象引用有何不同" tabindex="-1"><a class="header-anchor" href="#创建一个对象用什么运算符-对象实体与对象引用有何不同" aria-hidden="true">#</a> 创建一个对象用什么运算符?对象实体与对象引用有何不同?</h3>
<p>new 运算符，new 创建对象实例（对象实例在堆内存中），对象引用指向对象实例（对象引用存放在栈内存中）。</p>
<p>一个对象引用可以指向 0 个或 1 个对象（一根绳子可以不系气球，也可以系一个气球）;一个对象可以有 n 个引用指向它（可以用 n 条绳子系住一个气球）。</p>
<h3 id="对象的相等和引用相等的区别" tabindex="-1"><a class="header-anchor" href="#对象的相等和引用相等的区别" aria-hidden="true">#</a> 对象的相等和引用相等的区别</h3>
<ul>
<li>对象的相等一般比较的是内存中存放的内容是否相等。</li>
<li>引用相等一般比较的是他们指向的内存地址是否相等。</li>
</ul>
<h3 id="类的构造方法的作用是什么" tabindex="-1"><a class="header-anchor" href="#类的构造方法的作用是什么" aria-hidden="true">#</a> 类的构造方法的作用是什么?</h3>
<p>构造方法是一种特殊的方法，主要作用是完成对象的初始化工作。</p>
<h3 id="如果一个类没有声明构造方法-该程序能正确执行吗" tabindex="-1"><a class="header-anchor" href="#如果一个类没有声明构造方法-该程序能正确执行吗" aria-hidden="true">#</a> 如果一个类没有声明构造方法，该程序能正确执行吗?</h3>
<p>如果一个类没有声明构造方法，也可以执行！因为一个类即使没有声明构造方法也会有默认的不带参数的构造方法。如果我们自己添加了类的构造方法（无论是否有参），Java 就不会再添加默认的无参数的构造方法了，我们一直在不知不觉地使用构造方法，这也是为什么我们在创建对象的时候后面要加一个括号（因为要调用无参的构造方法）。如果我们重载了有参的构造方法，记得都要把无参的构造方法也写出来（无论是否用到），因为这可以帮助我们在创建对象的时候少踩坑。</p>
<h3 id="构造方法有哪些特点-是否可被-override" tabindex="-1"><a class="header-anchor" href="#构造方法有哪些特点-是否可被-override" aria-hidden="true">#</a> 构造方法有哪些特点？是否可被 override?</h3>
<p>构造方法特点如下：</p>
<ul>
<li>名字与类名相同。</li>
<li>没有返回值，但不能用 void 声明构造函数。</li>
<li>生成类的对象时自动执行，无需调用。</li>
</ul>
<p>构造方法不能被 override（重写）,但是可以 overload（重载）,所以你可以看到一个类中有多个构造函数的情况。</p>
<h3 id="面向对象三大特征" tabindex="-1"><a class="header-anchor" href="#面向对象三大特征" aria-hidden="true">#</a> 面向对象三大特征</h3>
<h4 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h4>
<p>封装是指把一个对象的状态信息（也就是属性）隐藏在对象内部，不允许外部对象直接访问对象的内部信息。但是可以提供一些可以被外界访问的方法来操作属性。就好像我们看不到挂在墙上的空调的内部的零件信息（也就是属性），但是可以通过遥控器（方法）来控制空调。如果属性不想被外界访问，我们大可不必提供方法给外界访问。但是如果一个类没有提供给外界访问的方法，那么这个类也没有什么意义了。就好像如果没有空调遥控器，那么我们就无法操控空凋制冷，空调本身就没有意义了（当然现在还有很多其他方法 ，这里只是为了举例子）。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span><span class="token comment">//id属性私有化</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span><span class="token comment">//name属性私有化</span>

    <span class="token comment">//获取id的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//设置id的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//获取name的方法</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//设置name的方法</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setName</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h4>
<p>不同类型的对象，相互之间经常有一定数量的共同点。例如，小明同学、小红同学、小李同学，都共享学生的特性（班级、学号等）。同时，每一个对象还定义了额外的特性使得他们与众不同。例如小明的数学比较好，小红的性格惹人喜爱；小李的力气比较大。继承是使用已存在的类的定义作为基础建立新类的技术，新类的定义可以增加新的数据或新的功能，也可以用父类的功能，但不能选择性地继承父类。通过使用继承，可以快速地创建新的类，可以提高代码的重用，程序的可维护性，节省大量创建新类的时间 ，提高我们的开发效率。</p>
<p><strong>关于继承如下 3 点请记住：</strong></p>
<ol>
<li>子类拥有父类对象所有的属性和方法（包括私有属性和私有方法），但是父类中的私有属性和方法子类是无法访问，<strong>只是拥有</strong>。</li>
<li>子类可以拥有自己属性和方法，即子类可以对父类进行扩展。</li>
<li>子类可以用自己的方式实现父类的方法。（以后介绍）。</li>
</ol>
<h4 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h4>
<p>多态，顾名思义，表示一个对象具有多种的状态，具体表现为父类的引用指向子类的实例。</p>
<p><strong>多态的特点:</strong></p>
<ul>
<li>对象类型和引用类型之间具有继承（类）/实现（接口）的关系；</li>
<li>引用类型变量发出的方法调用的到底是哪个类中的方法，必须在程序运行期间才能确定；</li>
<li>多态不能调用“只在子类存在但在父类不存在”的方法；</li>
<li>如果子类重写了父类的方法，真正执行的是子类覆盖的方法，如果子类没有覆盖父类的方法，执行的是父类的方法。</li>
</ul>
<h3 id="接口和抽象类有什么共同点和区别" tabindex="-1"><a class="header-anchor" href="#接口和抽象类有什么共同点和区别" aria-hidden="true">#</a> 接口和抽象类有什么共同点和区别？</h3>
<p><strong>共同点</strong> ：</p>
<ul>
<li>都不能被实例化。</li>
<li>都可以包含抽象方法。</li>
<li>都可以有默认实现的方法（Java 8 可以用 <code v-pre>default</code> 关键字在接口中定义默认方法）。</li>
</ul>
<p><strong>区别</strong> ：</p>
<ul>
<li>接口主要用于对类的行为进行约束，你实现了某个接口就具有了对应的行为。抽象类主要用于代码复用，强调的是所属关系（比如说我们抽象了一个发送短信的抽象类，）。</li>
<li>一个类只能继承一个类，但是可以实现多个接口。</li>
<li>接口中的成员变量只能是 <code v-pre>public static final</code> 类型的，不能被修改且必须有初始值，而抽象类的成员变量默认 default，可在子类中被重新定义，也可被重新赋值。</li>
</ul>
<h3 id="深拷贝和浅拷贝区别了解吗-什么是引用拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝和浅拷贝区别了解吗-什么是引用拷贝" aria-hidden="true">#</a> 深拷贝和浅拷贝区别了解吗？什么是引用拷贝？</h3>
<p>关于深拷贝和浅拷贝区别，我这里先给结论：</p>
<ul>
<li><strong>浅拷贝</strong>：浅拷贝会在堆上创建一个新的对象（区别于引用拷贝的一点），不过，如果原对象内部的属性是引用类型的话，浅拷贝会直接复制内部对象的引用地址，也就是说拷贝对象和原对象共用同一个内部对象。</li>
<li><strong>深拷贝</strong> ：深拷贝会完全复制整个对象，包括这个对象所包含的内部对象。</li>
</ul>
<p>上面的结论没有完全理解的话也没关系，我们来看一个具体的案例！</p>
<p><strong>浅拷贝</strong></p>
<p>浅拷贝的示例代码如下，我们这里实现了 <code v-pre>Cloneable</code> 接口，并重写了 <code v-pre>clone()</code> 方法。</p>
<p><code v-pre>clone()</code> 方法的实现很简单，直接调用的是父类 <code v-pre>Object</code> 的 <code v-pre>clone()</code> 方法。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Address</span> <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token comment">// 省略构造函数、Getter&amp;Setter方法</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Address</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token class-name">Address</span><span class="token punctuation">)</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">CloneNotSupportedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">AssertionError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token keyword">implements</span> <span class="token class-name">Cloneable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Address</span> address<span class="token punctuation">;</span>
    <span class="token comment">// 省略构造函数、Getter&amp;Setter方法</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> person<span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">CloneNotSupportedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">AssertionError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试 ：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Person</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Address</span><span class="token punctuation">(</span><span class="token string">"武汉"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span> person1Copy <span class="token operator">=</span> person1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// true</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person1<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> person1Copy<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从输出结构就可以看出， <code v-pre>person1</code> 的克隆对象和 <code v-pre>person1</code> 使用的仍然是同一个 <code v-pre>Address</code> 对象。</p>
<p><strong>深拷贝</strong></p>
<p>这里我们简单对 <code v-pre>Person</code> 类的 <code v-pre>clone()</code> 方法进行修改，连带着要把 <code v-pre>Person</code> 对象内部的 <code v-pre>Address</code> 对象一起复制。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">Person</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person</span> person <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">)</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person<span class="token punctuation">.</span><span class="token function">setAddress</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> person<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">CloneNotSupportedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">AssertionError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试 ：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">Person</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Address</span><span class="token punctuation">(</span><span class="token string">"武汉"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">Person</span> person1Copy <span class="token operator">=</span> person1<span class="token punctuation">.</span><span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// false</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>person1<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> person1Copy<span class="token punctuation">.</span><span class="token function">getAddress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从输出结构就可以看出，虽然 <code v-pre>person1</code> 的克隆对象和 <code v-pre>person1</code> 包含的 <code v-pre>Address</code> 对象已经是不同的了。</p>
<p><strong>那什么是引用拷贝呢？</strong> 简单来说，引用拷贝就是两个不同的引用指向同一个对象。</p>
<p>我专门画了一张图来描述浅拷贝、深拷贝、引用拷贝：</p>
<p><img src="@source/code/java/common/basic/images/shallow&amp;deep-copy.png" alt="" loading="lazy"></p>
<h2 id="java-常见类" tabindex="-1"><a class="header-anchor" href="#java-常见类" aria-hidden="true">#</a> Java 常见类</h2>
<h3 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> Object</h3>
<h4 id="object-类的常见方法有哪些" tabindex="-1"><a class="header-anchor" href="#object-类的常见方法有哪些" aria-hidden="true">#</a> Object 类的常见方法有哪些？</h4>
<p>Object 类是一个特殊的类，是所有类的父类。它主要提供了以下 11 个方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token doc-comment comment">/**
 * native 方法，用于返回当前运行时对象的 Class 对象，使用了 final 关键字修饰，故不允许子类重写。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">></span></span> <span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，用于返回对象的哈希码，主要使用在哈希表中，比如 JDK 中的HashMap。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * 用于比较 2 个对象的内存地址是否相等，String 类对该方法进行了重写以用于比较字符串的值是否相等。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * naitive 方法，用于创建并返回当前对象的一份拷贝。
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">native</span> <span class="token class-name">Object</span> <span class="token function">clone</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">CloneNotSupportedException</span>
<span class="token doc-comment comment">/**
 * 返回类的名字实例的哈希码的 16 进制的字符串。建议 Object 所有的子类都重写这个方法。
 */</span>
<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，并且不能重写。唤醒一个在此对象监视器上等待的线程(监视器相当于就是锁的概念)。如果有多个线程在等待只会任意唤醒一个。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native 方法，并且不能重写。跟 notify 一样，唯一的区别就是会唤醒在此对象监视器上等待的所有线程，而不是一个线程。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">notifyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token doc-comment comment">/**
 * native方法，并且不能重写。暂停线程的执行。注意：sleep 方法没有释放锁，而 wait 方法释放了锁 ，timeout 是等待时间。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token keyword">long</span> timeout<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
<span class="token doc-comment comment">/**
 * 多了 nanos 参数，这个参数表示额外时间（以毫微秒为单位，范围是 0-999999）。 所以超时的时间还需要加上 nanos 毫秒。。
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token keyword">long</span> timeout<span class="token punctuation">,</span> <span class="token keyword">int</span> nanos<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
<span class="token doc-comment comment">/**
 * 跟之前的2个wait方法一样，只不过该方法一直等待，没有超时时间这个概念
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span>
<span class="token doc-comment comment">/**
 * 实例被垃圾回收器回收的时候触发的操作
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">finalize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="和-equals-的区别" tabindex="-1"><a class="header-anchor" href="#和-equals-的区别" aria-hidden="true">#</a> == 和 equals() 的区别</h4>
<p><strong><code v-pre>==</code></strong> 对于基本类型和引用类型的作用效果是不同的：</p>
<ul>
<li>对于基本数据类型来说，<code v-pre>==</code> 比较的是值。</li>
<li>对于引用数据类型来说，<code v-pre>==</code> 比较的是对象的内存地址。</li>
</ul>
<blockquote>
<p>因为 Java 只有值传递，所以，对于 == 来说，不管是比较基本数据类型，还是引用数据类型的变量，其本质比较的都是值，只是引用类型变量存的值是对象的地址。</p>
</blockquote>
<p><strong><code v-pre>equals()</code></strong> 不能用于判断基本数据类型的变量，只能用来判断两个对象是否相等。<code v-pre>equals()</code>方法存在于<code v-pre>Object</code>类中，而<code v-pre>Object</code>类是所有类的直接或间接父类，因此所有的类都有<code v-pre>equals()</code>方法。</p>
<p><code v-pre>Object</code> 类 <code v-pre>equals()</code> 方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>equals()</code> 方法存在两种使用情况：</p>
<ul>
<li><strong>类没有重写 <code v-pre>equals()</code>方法</strong> ：通过<code v-pre>equals()</code>比较该类的两个对象时，等价于通过“==”比较这两个对象，使用的默认是 <code v-pre>Object</code>类<code v-pre>equals()</code>方法。</li>
<li><strong>类重写了 <code v-pre>equals()</code>方法</strong> ：一般我们都重写 <code v-pre>equals()</code>方法来比较两个对象中的属性是否相等；若它们的属性相等，则返回 true(即，认为这两个对象相等)。</li>
</ul>
<p>举个例子（这里只是为了举例。实际上，你按照下面这种写法的话，像 IDEA 这种比较智能的 IDE 都会提示你将 <code v-pre>==</code> 换成 <code v-pre>equals()</code> ）：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"ab"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a 为一个引用</span>
<span class="token class-name">String</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"ab"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// b为另一个引用,对象的内容一样</span>
<span class="token class-name">String</span> aa <span class="token operator">=</span> <span class="token string">"ab"</span><span class="token punctuation">;</span> <span class="token comment">// 放在常量池中</span>
<span class="token class-name">String</span> bb <span class="token operator">=</span> <span class="token string">"ab"</span><span class="token punctuation">;</span> <span class="token comment">// 从常量池中查找</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aa <span class="token operator">==</span> bb<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a <span class="token operator">==</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">42</span> <span class="token operator">==</span> <span class="token number">42.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>String</code> 中的 <code v-pre>equals</code> 方法是被重写过的，因为 <code v-pre>Object</code> 的 <code v-pre>equals</code> 方法是比较的对象的内存地址，而 <code v-pre>String</code> 的 <code v-pre>equals</code> 方法比较的是对象的值。</p>
<p>当创建 <code v-pre>String</code> 类型的对象时，虚拟机会在常量池中查找有没有已经存在的值和要创建的值相同的对象，如果有就把它赋给当前引用。如果没有就在常量池中重新创建一个 <code v-pre>String</code> 对象。</p>
<p><code v-pre>String</code>类<code v-pre>equals()</code>方法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">equals</span><span class="token punctuation">(</span><span class="token class-name">Object</span> anObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token operator">==</span> anObject<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>anObject <span class="token keyword">instanceof</span> <span class="token class-name">String</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> anotherString <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">)</span>anObject<span class="token punctuation">;</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> value<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> anotherString<span class="token punctuation">.</span>value<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">char</span> v1<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
            <span class="token keyword">char</span> v2<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> anotherString<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
            <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">--</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>v1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!=</span> v2<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
                    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
                i<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="hashcode-有什么用" tabindex="-1"><a class="header-anchor" href="#hashcode-有什么用" aria-hidden="true">#</a> hashCode() 有什么用？</h4>
<p><code v-pre>hashCode()</code> 的作用是获取哈希码（<code v-pre>int</code> 整数），也称为散列码。这个哈希码的作用是确定该对象在哈希表中的索引位置。</p>
<p><code v-pre>hashCode()</code>定义在 JDK 的 <code v-pre>Object</code> 类中，这就意味着 Java 中的任何类都包含有 <code v-pre>hashCode()</code> 函数。另外需要注意的是： <code v-pre>Object</code> 的 <code v-pre>hashCode()</code> 方法是本地方法，也就是用 C 语言或 C++ 实现的，该方法通常用来将对象的内存地址转换为整数之后返回。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">native</span> <span class="token keyword">int</span> <span class="token function">hashCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>散列表存储的是键值对(key-value)，它的特点是：<strong>能根据“键”快速的检索出对应的“值”。这其中就利用到了散列码！（可以快速找到所需要的对象）</strong></p>
<h4 id="为什么要有-hashcode" tabindex="-1"><a class="header-anchor" href="#为什么要有-hashcode" aria-hidden="true">#</a> 为什么要有 hashCode？</h4>
<p>我们以“<code v-pre>HashSet</code> 如何检查重复”为例子来说明为什么要有 <code v-pre>hashCode</code>？</p>
<p>下面这段内容摘自我的 Java 启蒙书《Head First Java》:</p>
<blockquote>
<p>当你把对象加入 <code v-pre>HashSet</code> 时，<code v-pre>HashSet</code> 会先计算对象的 <code v-pre>hashCode</code> 值来判断对象加入的位置，同时也会与其他已经加入的对象的 <code v-pre>hashCode</code> 值作比较，如果没有相符的 <code v-pre>hashCode</code>，<code v-pre>HashSet</code> 会假设对象没有重复出现。但是如果发现有相同 <code v-pre>hashCode</code> 值的对象，这时会调用 <code v-pre>equals()</code> 方法来检查 <code v-pre>hashCode</code> 相等的对象是否真的相同。如果两者相同，<code v-pre>HashSet</code> 就不会让其加入操作成功。如果不同的话，就会重新散列到其他位置。这样我们就大大减少了 <code v-pre>equals</code> 的次数，相应就大大提高了执行速度。</p>
</blockquote>
<p>其实， <code v-pre>hashCode()</code> 和 <code v-pre>equals()</code>都是用于比较两个对象是否相等。</p>
<p><strong>那为什么 JDK 还要同时提供这两个方法呢？</strong></p>
<p>这是因为在一些容器（比如 <code v-pre>HashMap</code>、<code v-pre>HashSet</code>）中，有了 <code v-pre>hashCode()</code> 之后，判断元素是否在对应容器中的效率会更高（参考添加元素进<code v-pre>HashSet</code>的过程）！</p>
<p>我们在前面也提到了添加元素进<code v-pre>HashSet</code>的过程，如果 <code v-pre>HashSet</code> 在对比的时候，同样的 <code v-pre>hashCode</code> 有多个对象，它会继续使用 <code v-pre>equals()</code> 来判断是否真的相同。也就是说 <code v-pre>hashCode</code> 帮助我们大大缩小了查找成本。</p>
<p><strong>那为什么不只提供 <code v-pre>hashCode()</code> 方法呢？</strong></p>
<p>这是因为两个对象的<code v-pre>hashCode</code> 值相等并不代表两个对象就相等。</p>
<p><strong>那为什么两个对象有相同的 <code v-pre>hashCode</code> 值，它们也不一定是相等的？</strong></p>
<p>因为 <code v-pre>hashCode()</code> 所使用的哈希算法也许刚好会让多个对象传回相同的哈希值。越糟糕的哈希算法越容易碰撞，但这也与数据值域分布的特性有关（所谓哈希碰撞也就是指的是不同的对象得到相同的 <code v-pre>hashCode</code> )。</p>
<p>总结下来就是 ：</p>
<ul>
<li>如果两个对象的<code v-pre>hashCode</code> 值相等，那这两个对象不一定相等（哈希碰撞）。</li>
<li>如果两个对象的<code v-pre>hashCode</code> 值相等并且<code v-pre>equals()</code>方法也返回 <code v-pre>true</code>，我们才认为这两个对象相等。</li>
<li>如果两个对象的<code v-pre>hashCode</code> 值不相等，我们就可以直接认为这两个对象不相等。</li>
</ul>
<p>相信大家看了我前面对 <code v-pre>hashCode()</code> 和 <code v-pre>equals()</code> 的介绍之后，下面这个问题已经难不倒你们了。</p>
<h4 id="为什么重写-equals-时必须重写-hashcode-方法" tabindex="-1"><a class="header-anchor" href="#为什么重写-equals-时必须重写-hashcode-方法" aria-hidden="true">#</a> 为什么重写 equals() 时必须重写 hashCode() 方法？</h4>
<p>因为两个相等的对象的 <code v-pre>hashCode</code> 值必须是相等。也就是说如果 <code v-pre>equals</code> 方法判断两个对象是相等的，那这两个对象的 <code v-pre>hashCode</code> 值也要相等。</p>
<p>如果重写 <code v-pre>equals()</code> 时没有重写 <code v-pre>hashCode()</code> 方法的话就可能会导致 <code v-pre>equals</code> 方法判断是相等的两个对象，<code v-pre>hashCode</code> 值却不相等。</p>
<p><strong>思考</strong> ：重写 <code v-pre>equals()</code> 时没有重写 <code v-pre>hashCode()</code> 方法的话，使用 <code v-pre>HashMap</code> 可能会出现什么问题。</p>
<p><strong>总结</strong> ：</p>
<ul>
<li><code v-pre>equals</code> 方法判断两个对象是相等的，那这两个对象的 <code v-pre>hashCode</code> 值也要相等。</li>
<li>两个对象有相同的 <code v-pre>hashCode</code> 值，他们也不一定是相等的（哈希碰撞）。</li>
</ul>
<p>更多关于 <code v-pre>hashCode()</code> 和 <code v-pre>equals()</code> 的内容可以查看：<a href="https://www.cnblogs.com/skywang12345/p/3324958.html" target="_blank" rel="noopener noreferrer">Java hashCode() 和 equals()的若干问题解答<ExternalLinkIcon/></a></p>
<h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h3>
<h4 id="string、stringbuffer、stringbuilder-的区别" tabindex="-1"><a class="header-anchor" href="#string、stringbuffer、stringbuilder-的区别" aria-hidden="true">#</a> String、StringBuffer、StringBuilder 的区别？</h4>
<p><strong>可变性</strong></p>
<p><code v-pre>String</code> 是不可变的（后面会详细分析原因）。</p>
<p><code v-pre>StringBuilder</code> 与 <code v-pre>StringBuffer</code> 都继承自 <code v-pre>AbstractStringBuilder</code> 类，在 <code v-pre>AbstractStringBuilder</code> 中也是使用字符数组保存字符串，不过没有使用 <code v-pre>final</code> 和 <code v-pre>private</code> 关键字修饰，最关键的是这个 <code v-pre>AbstractStringBuilder</code> 类还提供了很多修改字符串的方法比如 <code v-pre>append</code> 方法。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractStringBuilder</span> <span class="token keyword">implements</span> <span class="token class-name">Appendable</span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>
    <span class="token keyword">char</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">AbstractStringBuilder</span> <span class="token function">append</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>str <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token function">appendNull</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> len <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">ensureCapacityInternal</span><span class="token punctuation">(</span>count <span class="token operator">+</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        str<span class="token punctuation">.</span><span class="token function">getChars</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> len<span class="token punctuation">,</span> value<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        count <span class="token operator">+=</span> len<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  	<span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>线程安全性</strong></p>
<p><code v-pre>String</code> 中的对象是不可变的，也就可以理解为常量，线程安全。<code v-pre>AbstractStringBuilder</code> 是 <code v-pre>StringBuilder</code> 与 <code v-pre>StringBuffer</code> 的公共父类，定义了一些字符串的基本操作，如 <code v-pre>expandCapacity</code>、<code v-pre>append</code>、<code v-pre>insert</code>、<code v-pre>indexOf</code> 等公共方法。<code v-pre>StringBuffer</code> 对方法加了同步锁或者对调用的方法加了同步锁，所以是线程安全的。<code v-pre>StringBuilder</code> 并没有对方法进行加同步锁，所以是非线程安全的。</p>
<p><strong>性能</strong></p>
<p>每次对 <code v-pre>String</code> 类型进行改变的时候，都会生成一个新的 <code v-pre>String</code> 对象，然后将指针指向新的 <code v-pre>String</code> 对象。<code v-pre>StringBuffer</code> 每次都会对 <code v-pre>StringBuffer</code> 对象本身进行操作，而不是生成新的对象并改变对象引用。相同情况下使用 <code v-pre>StringBuilder</code> 相比使用 <code v-pre>StringBuffer</code> 仅能获得 10%~15% 左右的性能提升，但却要冒多线程不安全的风险。</p>
<p><strong>对于三者使用的总结：</strong></p>
<ol>
<li>操作少量的数据: 适用 <code v-pre>String</code></li>
<li>单线程操作字符串缓冲区下操作大量数据: 适用 <code v-pre>StringBuilder</code></li>
<li>多线程操作字符串缓冲区下操作大量数据: 适用 <code v-pre>StringBuffer</code></li>
</ol>
<h4 id="string-为什么是不可变的" tabindex="-1"><a class="header-anchor" href="#string-为什么是不可变的" aria-hidden="true">#</a> String 为什么是不可变的?</h4>
<p><code v-pre>String</code> 类中使用 <code v-pre>final</code> 关键字修饰字符数组来保存字符串，<s>所以<code v-pre>String</code> 对象是不可变的。</s></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">String</span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">,</span> <span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">char</span> value<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>🐛 修正 ： 我们知道被 <code v-pre>final</code> 关键字修饰的类不能被继承，修饰的方法不能被重写，修饰的变量是基本数据类型则值不能改变，修饰的变量是引用类型则不能再指向其他对象。因此，<code v-pre>final</code> 关键字修饰的数组保存字符串并不是 <code v-pre>String</code> 不可变的根本原因，因为这个数组保存的字符串是可变的（<code v-pre>final</code> 修饰引用类型变量的情况）。</p>
<p><code v-pre>String</code> 真正不可变有下面几点原因：</p>
<ol>
<li>保存字符串的数组被 <code v-pre>final</code> 修饰且为私有的，并且<code v-pre>String</code> 类没有提供/暴露修改这个字符串的方法。</li>
<li><code v-pre>String</code> 类被 <code v-pre>final</code> 修饰导致其不能被继承，进而避免了子类破坏 <code v-pre>String</code> 不可变。</li>
</ol>
<p>相关阅读：<a href="https://www.zhihu.com/question/20618891/answer/114125846" target="_blank" rel="noopener noreferrer">如何理解 String 类型值的不可变？ - 知乎提问<ExternalLinkIcon/></a></p>
<p>补充（来自<a href="https://github.com/Snailclimb/JavaGuide/issues/675" target="_blank" rel="noopener noreferrer">issue 675<ExternalLinkIcon/></a>）：在 Java 9 之后，<code v-pre>String</code> 、<code v-pre>StringBuilder</code> 与 <code v-pre>StringBuffer</code> 的实现改用 <code v-pre>byte</code> 数组存储字符串。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">String</span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">,</span><span class="token class-name">Comparable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>
    <span class="token comment">// @Stable 注解表示变量最多被修改一次，称为“稳定的”。</span>
    <span class="token annotation punctuation">@Stable</span>
    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractStringBuilder</span> <span class="token keyword">implements</span> <span class="token class-name">Appendable</span><span class="token punctuation">,</span> <span class="token class-name">CharSequence</span> <span class="token punctuation">{</span>
    <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> value<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Java 9 为何要将 <code v-pre>String</code> 的底层实现由 <code v-pre>char[]</code> 改成了 <code v-pre>byte[]</code> ?</strong></p>
<p>新版的 String 其实支持两个编码方案： Latin-1 和 UTF-16。如果字符串中包含的汉字没有超过 Latin-1 可表示范围内的字符，那就会使用 Latin-1 作为编码方案。Latin-1 编码方案下，<code v-pre>byte</code> 占一个字节(8 位)，<code v-pre>char</code> 占用 2 个字节（16），<code v-pre>byte</code> 相较 <code v-pre>char</code> 节省一半的内存空间。</p>
<p>JDK 官方就说了绝大部分字符串对象只包含 Latin-1 可表示的字符。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/jdk9-string-latin1.png" alt="" loading="lazy"></p>
<p>如果字符串中包含的汉字超过 Latin-1 可表示范围内的字符，<code v-pre>byte</code> 和 <code v-pre>char</code> 所占用的空间是一样的。</p>
<p>这是官方的介绍：<a href="https://openjdk.java.net/jeps/254" target="_blank" rel="noopener noreferrer">https://openjdk.java.net/jeps/254<ExternalLinkIcon/></a> 。</p>
</blockquote>
<h4 id="字符串拼接用-还是-stringbuilder" tabindex="-1"><a class="header-anchor" href="#字符串拼接用-还是-stringbuilder" aria-hidden="true">#</a> 字符串拼接用“+” 还是 StringBuilder?</h4>
<p>Java 语言本身并不支持运算符重载，“+”和“+=”是专门为 String 类重载过的运算符，也是 Java 中仅有的两个重载过的元素符。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">"he"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">"llo"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token string">"world"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str4 <span class="token operator">=</span> str1 <span class="token operator">+</span> str2 <span class="token operator">+</span> str3<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的代码对应的字节码如下：</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/java/image-20220422161637929.png" alt="" loading="lazy"></p>
<p>可以看出，字符串对象通过“+”的字符串拼接方式，实际上是通过 <code v-pre>StringBuilder</code> 调用 <code v-pre>append()</code> 方法实现的，拼接完成之后调用 <code v-pre>toString()</code> 得到一个 <code v-pre>String</code> 对象 。</p>
<p>不过，在循环内使用“+”进行字符串的拼接的话，存在比较明显的缺陷：<strong>编译器不会创建单个 <code v-pre>StringBuilder</code> 以复用，会导致创建过多的 <code v-pre>StringBuilder</code> 对象</strong>。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"he"</span><span class="token punctuation">,</span> <span class="token string">"llo"</span><span class="token punctuation">,</span> <span class="token string">"world"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>StringBuilder</code> 对象是在循环内部被创建的，这意味着每循环一次就会创建一个 <code v-pre>StringBuilder</code> 对象。</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/java/image-20220422161320823.png" alt="" loading="lazy"></p>
<p>如果直接使用 <code v-pre>StringBuilder</code> 对象进行字符串拼接的话，就不会存在这个问题了。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">"he"</span><span class="token punctuation">,</span> <span class="token string">"llo"</span><span class="token punctuation">,</span> <span class="token string">"world"</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token class-name">StringBuilder</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> value <span class="token operator">:</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    s<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/java/image-20220422162327415.png" alt="" loading="lazy"></p>
<p>如果你使用 IDEA 的话，IDEA 自带的代码检查机制也会提示你修改代码。</p>
<h4 id="string-equals-和-object-equals-有何区别" tabindex="-1"><a class="header-anchor" href="#string-equals-和-object-equals-有何区别" aria-hidden="true">#</a> String#equals() 和 Object#equals() 有何区别？</h4>
<p><code v-pre>String</code> 中的 <code v-pre>equals</code> 方法是被重写过的，比较的是 String 字符串的值是否相等。 <code v-pre>Object</code> 的 <code v-pre>equals</code> 方法是比较的对象的内存地址。</p>
<h4 id="字符串常量池的作用了解吗" tabindex="-1"><a class="header-anchor" href="#字符串常量池的作用了解吗" aria-hidden="true">#</a> 字符串常量池的作用了解吗？</h4>
<p><strong>字符串常量池</strong> 是 JVM 为了提升性能和减少内存消耗针对字符串（String 类）专门开辟的一块区域，主要目的是为了避免字符串的重复创建。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 在堆中创建字符串对象”ab“</span>
<span class="token comment">// 将字符串对象”ab“的引用保存在字符串常量池中</span>
<span class="token class-name">String</span> aa <span class="token operator">=</span> <span class="token string">"ab"</span><span class="token punctuation">;</span>
<span class="token comment">// 直接返回字符串常量池中字符串对象”ab“的引用</span>
<span class="token class-name">String</span> bb <span class="token operator">=</span> <span class="token string">"ab"</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>aa<span class="token operator">==</span>bb<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更多关于字符串常量池的介绍可以看一下 <a href="https://javaguide.cn/java/jvm/memory-area.html" target="_blank" rel="noopener noreferrer">Java 内存区域详解<ExternalLinkIcon/></a> 这篇文章。</p>
<h4 id="string-s1-new-string-abc-这句话创建了几个字符串对象" tabindex="-1"><a class="header-anchor" href="#string-s1-new-string-abc-这句话创建了几个字符串对象" aria-hidden="true">#</a> String s1 = new String(&quot;abc&quot;);这句话创建了几个字符串对象？</h4>
<p>会创建 1 或 2 个字符串对象。</p>
<p>1、如果字符串常量池中不存在字符串对象“abc”的引用，那么会在堆中创建 2 个字符串对象“abc”。</p>
<p>示例代码（JDK 1.8）：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对应的字节码：</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/open-source-project/image-20220413175809959.png" alt="" loading="lazy"></p>
<p><code v-pre>ldc</code> 命令用于判断字符串常量池中是否保存了对应的字符串对象的引用，如果保存了的话直接返回，如果没有保存的话，会在堆中创建对应的字符串对象并将该字符串对象的引用保存到字符串常量池中。</p>
<p>2、如果字符串常量池中已存在字符串对象“abc”的引用，则只会在堆中创建 1 个字符串对象“abc”。</p>
<p>示例代码（JDK 1.8）：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 字符串常量池中已存在字符串对象“abc”的引用</span>
<span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span>
<span class="token comment">// 下面这段代码只会在堆中创建 1 个字符串对象“abc”</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对应的字节码：</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/github/javaguide/open-source-project/image-20220413180021072.png" alt="" loading="lazy"></p>
<p>这里就不对上面的字节码进行详细注释了，7 这个位置的 <code v-pre>ldc</code> 命令不会在堆中创建新的字符串对象“abc”，这是因为 0 这个位置已经执行了一次 <code v-pre>ldc</code> 命令，已经在堆中创建过一次字符串对象“abc”了。7 这个位置执行 <code v-pre>ldc</code> 命令会直接返回字符串常量池中字符串对象“abc”对应的引用。</p>
<h4 id="intern-方法有什么作用" tabindex="-1"><a class="header-anchor" href="#intern-方法有什么作用" aria-hidden="true">#</a> intern 方法有什么作用?</h4>
<p><code v-pre>String.intern()</code> 是一个 native（本地）方法，其作用是将指定的字符串对象的引用保存在字符串常量池中，可以简单分为两种情况：</p>
<ul>
<li>如果字符串常量池中保存了对应的字符串对象的引用，就直接返回该引用。</li>
<li>如果字符串常量池中没有保存了对应的字符串对象的引用，那就在常量池中创建一个指向该字符串对象的引用并返回。</li>
</ul>
<p>示例代码（JDK 1.8） :</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 在堆中创建字符串对象”Java“</span>
<span class="token comment">// 将字符串对象”Java“的引用保存在字符串常量池中</span>
<span class="token class-name">String</span> s1 <span class="token operator">=</span> <span class="token string">"Java"</span><span class="token punctuation">;</span>
<span class="token comment">// 直接返回字符串常量池中字符串对象”Java“对应的引用</span>
<span class="token class-name">String</span> s2 <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">intern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 会在堆中在单独创建一个字符串对象</span>
<span class="token class-name">String</span> s3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span><span class="token string">"Java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 直接返回字符串常量池中字符串对象”Java“对应的引用</span>
<span class="token class-name">String</span> s4 <span class="token operator">=</span> s3<span class="token punctuation">.</span><span class="token function">intern</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// s1 和 s2 指向的是堆中的同一个对象</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token comment">// s3 和 s4 指向的是堆中不同的对象</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s3 <span class="token operator">==</span> s4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span>
<span class="token comment">// s1 和 s4 指向的是堆中的同一个对象</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>s1 <span class="token operator">==</span> s4<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="string-类型的变量和常量做-运算时发生了什么" tabindex="-1"><a class="header-anchor" href="#string-类型的变量和常量做-运算时发生了什么" aria-hidden="true">#</a> String 类型的变量和常量做“+”运算时发生了什么？</h4>
<p>先来看字符串不加 <code v-pre>final</code> 关键字拼接的情况（JDK1.8）：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">"str"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">"ing"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str3 <span class="token operator">=</span> <span class="token string">"str"</span> <span class="token operator">+</span> <span class="token string">"ing"</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> str4 <span class="token operator">=</span> str1 <span class="token operator">+</span> str2<span class="token punctuation">;</span>
<span class="token class-name">String</span> str5 <span class="token operator">=</span> <span class="token string">"string"</span><span class="token punctuation">;</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str3 <span class="token operator">==</span> str4<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str3 <span class="token operator">==</span> str5<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//true</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str4 <span class="token operator">==</span> str5<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>注意</strong> ：比较 String 字符串的值是否相等，可以使用 <code v-pre>equals()</code> 方法。 <code v-pre>String</code> 中的 <code v-pre>equals</code> 方法是被重写过的。 <code v-pre>Object</code> 的 <code v-pre>equals</code> 方法是比较的对象的内存地址，而 <code v-pre>String</code> 的 <code v-pre>equals</code> 方法比较的是字符串的值是否相等。如果你使用 <code v-pre>==</code> 比较两个字符串是否相等的话，IDEA 还是提示你使用 <code v-pre>equals()</code> 方法替换。</p>
</blockquote>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/java-guide-blog/image-20210817123252441.png" alt="" loading="lazy"></p>
<p><strong>对于编译期可以确定值的字符串，也就是常量字符串 ，jvm 会将其存入字符串常量池。并且，字符串常量拼接得到的字符串常量在编译阶段就已经被存放字符串常量池，这个得益于编译器的优化。</strong></p>
<p>在编译过程中，Javac 编译器（下文中统称为编译器）会进行一个叫做 <strong>常量折叠(Constant Folding)</strong> 的代码优化。《深入理解 Java 虚拟机》中是也有介绍到：</p>
<p><img src="https://guide-blog-images.oss-cn-shenzhen.aliyuncs.com/javaguide/image-20210817142715396.png" alt="" loading="lazy"></p>
<p>常量折叠会把常量表达式的值求出来作为常量嵌在最终生成的代码中，这是 Javac 编译器会对源代码做的极少量优化措施之一(代码优化几乎都在即时编译器中进行)。</p>
<p>对于 <code v-pre>String str3 = &quot;str&quot; + &quot;ing&quot;;</code> 编译器会给你优化成 <code v-pre>String str3 = &quot;string&quot;;</code> 。</p>
<p>并不是所有的常量都会进行折叠，只有编译器在程序编译期就可以确定值的常量才可以：</p>
<ul>
<li>基本数据类型( <code v-pre>byte</code>、<code v-pre>boolean</code>、<code v-pre>short</code>、<code v-pre>char</code>、<code v-pre>int</code>、<code v-pre>float</code>、<code v-pre>long</code>、<code v-pre>double</code>)以及字符串常量。</li>
<li><code v-pre>final</code> 修饰的基本数据类型和字符串变量</li>
<li>字符串通过 “+”拼接得到的字符串、基本数据类型之间算数运算（加减乘除）、基本数据类型的位运算（&lt;&lt;、&gt;&gt;、&gt;&gt;&gt; ）</li>
</ul>
<p><strong>引用的值在程序编译期是无法确定的，编译器无法对其进行优化。</strong></p>
<p>对象引用和“+”的字符串拼接方式，实际上是通过 <code v-pre>StringBuilder</code> 调用 <code v-pre>append()</code> 方法实现的，拼接完成之后调用 <code v-pre>toString()</code> 得到一个 <code v-pre>String</code> 对象 。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">String</span> str4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们在平时写代码的时候，尽量避免多个字符串对象拼接，因为这样会重新创建对象。如果需要改变字符串的话，可以使用 <code v-pre>StringBuilder</code> 或者 <code v-pre>StringBuffer</code>。</p>
<p>不过，字符串使用 <code v-pre>final</code> 关键字声明之后，可以让编译器当做常量来处理。</p>
<p>示例代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">"str"</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> <span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token string">"ing"</span><span class="token punctuation">;</span>
<span class="token comment">// 下面两个表达式其实是等价的</span>
<span class="token class-name">String</span> c <span class="token operator">=</span> <span class="token string">"str"</span> <span class="token operator">+</span> <span class="token string">"ing"</span><span class="token punctuation">;</span><span class="token comment">// 常量池中的对象</span>
<span class="token class-name">String</span> d <span class="token operator">=</span> str1 <span class="token operator">+</span> str2<span class="token punctuation">;</span> <span class="token comment">// 常量池中的对象</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c <span class="token operator">==</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>被 <code v-pre>final</code> 关键字修改之后的 <code v-pre>String</code> 会被编译器当做常量来处理，编译器在程序编译期就可以确定它的值，其效果就相当于访问常量。</p>
<p>如果 ，编译器在运行时才能知道其确切值的话，就无法对其优化。</p>
<p>示例代码（<code v-pre>str2</code> 在运行时才能确定其值）：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">String</span> str1 <span class="token operator">=</span> <span class="token string">"str"</span><span class="token punctuation">;</span>
<span class="token keyword">final</span> <span class="token class-name">String</span> str2 <span class="token operator">=</span> <span class="token function">getStr</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">String</span> c <span class="token operator">=</span> <span class="token string">"str"</span> <span class="token operator">+</span> <span class="token string">"ing"</span><span class="token punctuation">;</span><span class="token comment">// 常量池中的对象</span>
<span class="token class-name">String</span> d <span class="token operator">=</span> str1 <span class="token operator">+</span> str2<span class="token punctuation">;</span> <span class="token comment">// 在堆上创建的新的对象</span>
<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>c <span class="token operator">==</span> d<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// false</span>
<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">getStr</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">"ing"</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>
<ul>
<li>深入解析 String#intern<a href="https://tech.meituan.com/2014/03/06/in-depth-understanding-string-intern.html" target="_blank" rel="noopener noreferrer">https://tech.meituan.com/2014/03/06/in-depth-understanding-string-intern.html<ExternalLinkIcon/></a></li>
<li>R 大（RednaxelaFX）关于常量折叠的回答：<a href="https://www.zhihu.com/question/55976094/answer/147302764" target="_blank" rel="noopener noreferrer">https://www.zhihu.com/question/55976094/answer/147302764<ExternalLinkIcon/></a></li>
</ul>
</div></template>
