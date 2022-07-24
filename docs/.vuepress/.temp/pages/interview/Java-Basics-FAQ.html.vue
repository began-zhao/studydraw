<template><div><h3 id="jdk和jre、-jvm" tabindex="-1"><a class="header-anchor" href="#jdk和jre、-jvm" aria-hidden="true">#</a> JDK和JRE、 JVM</h3>
<ul>
<li>
<p>JDK（Java Development Kit）是 Java 开发工具包，包括了 Java 运行环境 JRE、Java 工具和 Java 基础类库。</p>
</li>
<li>
<p>JRE（Java Runtime Environment）是运行 Java 程序所必须的环境的集合，包含 JVM 标准实现及 Java 核心类库。</p>
</li>
<li>
<p>JVM（Java Virtual Machine）是 Java 虚拟机的缩写，是整个 Java 实现跨平台的最核心的部分，能够运行以Java 语言写作的软件程序。</p>
</li>
</ul>
<h3 id="class-和-object-的区别" tabindex="-1"><a class="header-anchor" href="#class-和-object-的区别" aria-hidden="true">#</a> Class 和 Object 的区别</h3>
<p>Class这个Java类保存的是一个Java类的元信息，一般在反射中使用。可以通过Class类型来获取其他类型的元数据（metadata），比如字段，属性，构造器，方法等等，可以获取并调用。</p>
<p>Object类，是所有Java类的根。它包括Class类。</p>
<blockquote>
<p>类是对象的模板，对象是类的具体实例，对象依据类而产生</p>
</blockquote>
<h3 id="对比-exception-和-error-另外-运行时异常与一般异常有什么区别" tabindex="-1"><a class="header-anchor" href="#对比-exception-和-error-另外-运行时异常与一般异常有什么区别" aria-hidden="true">#</a> 对比 Exception 和 Error，另外，运行时异常与一般异常有什么区别？</h3>
<p>Exception 和 Error 都是继承了 Throwable 类，在 Java 中只有 Throwable 类型的实例才可以被抛出（throw）或者捕获（catch），它是异常处理机制的基本组成类型。</p>
<p>Exception 和 Error 体现了 Java 平台设计者对不同异常情况的分类。Exception 是程序正常运行中，可以预料的意外情况，可能并且应该被捕获，进行相应处理。</p>
<p>Error 是指在正常情况下，不大可能出现的情况，绝大部分的 Error 都会导致程序（比如 JVM 自身）处于非正常的、不可恢复状态。既然是非正常情况，所以不便于也不需要捕获，常见的比如 OutOfMemoryError 之类，都是 Error 的子类。</p>
<p>Exception 又分为<strong>可检查</strong>（checked）异常和<strong>不检查</strong>（unchecked）异常，可检查异常在源代码里必须显式地进行捕获处理，这是编译期检查的一部分。前面我介绍的不可查的 Error，是 Throwable 不是 Exception。</p>
<p>不检查异常就是所谓的运行时异常，类似 NullPointerException、ArrayIndexOutOfBoundsException 之类，通常是可以编码避免的逻辑错误，具体根据需要来判断是否需要捕获，并不会在编译期强制要求。</p>
<h3 id="类和对象的区别" tabindex="-1"><a class="header-anchor" href="#类和对象的区别" aria-hidden="true">#</a> 类和对象的区别</h3>
<p>类是一类物体的共同特性的抽象.对象是类的一个实例.</p>
<p>通俗的说:把某一类物品共有的特征,或者属性组装起来就是一个类. 能够具体到物品或者个体就是对象.</p>
<h3 id="你是如何理解面向对象的" tabindex="-1"><a class="header-anchor" href="#你是如何理解面向对象的" aria-hidden="true">#</a> 你是如何理解面向对象的</h3>
<p>在我理解,面向对象是一种“万物皆对象”的编程思想</p>
<p>面向对象 ( Object Oriented ) 是将现实问题构建关系，然后抽象成 <strong>类 ( class )</strong>，给类定义属性和方法后，再将类实例化成 <strong>实例 ( instance )</strong> ，通过访问实例的属性和调用方法来进行使用。</p>
<p>类具有三个基本特征：封装、继承、多态</p>
<h3 id="构造方法和普通方法的区别" tabindex="-1"><a class="header-anchor" href="#构造方法和普通方法的区别" aria-hidden="true">#</a> 构造方法和普通方法的区别</h3>
<p>构造函数的方法名和类型相同、没有返回值类型、不能写 return，是给对象初始化用的，创建对象的时候就会初始化，执行唯一的一次构造方法，系统会默认添加一个无参的构造方法</p>
<p>普通方法是对象调用才能执行，可被多次调用。</p>
<p><strong>构造器Constructor是否可被override</strong></p>
<p>构造器Constructor不能被继承，因此不能重写Override，但可以被重载Overload。</p>
<h3 id="作用域public-private-protected-以及不写时的区别" tabindex="-1"><a class="header-anchor" href="#作用域public-private-protected-以及不写时的区别" aria-hidden="true">#</a> 作用域public，private，protected，以及不写时的区别</h3>
<p>这四个作用域的可见范围如下表所示。</p>
<p>说明：如果在修饰的元素上面没有写任何访问修饰符，则表示 default 。</p>
<p><img src="https://cdn.jsdelivr.net/gh/Jstarfish/picBed/img/20200929182248.png" alt="" loading="lazy"></p>
<h3 id="integer与-int-的区别" tabindex="-1"><a class="header-anchor" href="#integer与-int-的区别" aria-hidden="true">#</a> Integer与 int 的区别</h3>
<p>int 是 Java 提供的 8 种原始数据类型之一。Java 为每个原始类型提供了<strong>封装类</strong>，Integer 是 Java 为 int 提供的封装类。<strong>int的默认值为0，而Integer的默认值为null</strong>，即Integer可以区分出未赋值和值为0的区别，int则无法表达出未赋值的情况，例如，要想表达出没有参加考试和考试成绩为0的区别，则只能使用Integer。在JSP开发中，Integer的默认为null，所以用el表达式在文本框中显示时，值为空白字符串，而int默认的默认值为0，所以用el表达式在文本框中显示时，结果为0，所以，<strong>int不适合作为web层的表单数据的类型</strong>。</p>
<h3 id="int-float-short-double-long-char-占字节数" tabindex="-1"><a class="header-anchor" href="#int-float-short-double-long-char-占字节数" aria-hidden="true">#</a> int float short double long char 占字节数？</h3>
<p>java实现了平台无关，所以所有的基本数据类型字长和机器字长无关，即32位和64位一样，但是引用（地址）与机器字长有关。</p>
<table>
<thead>
<tr>
<th>数据类型</th>
<th>32位计算机</th>
<th>64位计算机</th>
<th>取值范围</th>
</tr>
</thead>
<tbody>
<tr>
<td>byte</td>
<td>1</td>
<td>1</td>
<td>-128~127</td>
</tr>
<tr>
<td>char</td>
<td>2</td>
<td>2</td>
<td></td>
</tr>
<tr>
<td>short</td>
<td>2</td>
<td>2</td>
<td>(-2)的15次方 ~ (2的15次方) - 1</td>
</tr>
<tr>
<td>int</td>
<td>4</td>
<td>4</td>
<td>(-2)的31次方 ~ (2的31次方) - 1</td>
</tr>
<tr>
<td>long</td>
<td>8</td>
<td>8</td>
<td>即 (-2)的63次方 ~ (2的63次方) - 1</td>
</tr>
<tr>
<td>float</td>
<td>4</td>
<td>4</td>
<td></td>
</tr>
<tr>
<td>double</td>
<td>8</td>
<td>8</td>
<td></td>
</tr>
<tr>
<td>引用</td>
<td>4</td>
<td>8</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="基本类型和包装类型的区别" tabindex="-1"><a class="header-anchor" href="#基本类型和包装类型的区别" aria-hidden="true">#</a> 基本类型和包装类型的区别</h3>
<ul>
<li>
<p>包装类型可以为 null，而基本类型不可以（它使得包装类型可以应用于 POJO 中，而基本类型则不行）</p>
<p>和 POJO 类似的，还有数据传输对象 DTO（Data Transfer Object，泛指用于展示层与服务层之间的数据传输对象）、视图对象 VO（View Object，把某个页面的数据封装起来）、持久化对象 PO（Persistant Object，可以看成是与数据库中的表映射的 Java 对象）。</p>
<p>那为什么 POJO 的属性必须要用包装类型呢？</p>
<p>《阿里巴巴 Java 开发手册》上有详细的说明，我们来大声朗读一下（预备，起）。</p>
</li>
</ul>
<blockquote>
<p>数据库的查询结果可能是 null，如果使用基本类型的话，因为要自动拆箱（将包装类型转为基本类型，比如说把 Integer 对象转换成 int 值），就会抛出 <code v-pre>NullPointerException</code> 的异常。</p>
</blockquote>
<ol>
<li>包装类型可用于泛型，而基本类型不可以</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 提示 Syntax error, insert "Dimensions" to complete ReferenceType</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为什么呢？因为Java中的泛型是通过编译时的类型擦除来完成的，当泛型被类型擦除后都变成Object类型。但是Object类型不能指代像int，double这样的基本类型只能指代Integer，Double这样的引用类型。</p>
<ol start="2">
<li>
<p>基本类型比包装类型更高效</p>
<p>基本类型在栈中直接存储的具体数值，而包装类型则存储的是堆中的引用。</p>
</li>
</ol>
<p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2019/9/29/16d7a5686ac8c66b~tplv-t2oaga2asx-zoom-in-crop-mark:1304:0:0:0.awebp" alt="img" loading="lazy"></p>
<p>很显然，相比较于基本类型而言，包装类型需要占用更多的内存空间。假如没有基本类型的话，对于数值这类经常使用到的数据来说，每次都要通过 new 一个包装类型就显得非常笨重。</p>
<ol start="3">
<li>
<p>两个包装类型的值可以相同，但却不相等</p>
</li>
<li>
<p>自动装箱和自动拆箱</p>
<p>既然有了基本类型和包装类型，肯定有些时候要在它们之间进行转换。把基本类型转换成包装类型的过程叫做装箱（boxing）。反之，把包装类型转换成基本类型的过程叫做拆箱（unboxing）</p>
</li>
</ol>
<h3 id="和-的区别" tabindex="-1"><a class="header-anchor" href="#和-的区别" aria-hidden="true">#</a> &amp;和&amp;&amp;的区别</h3>
<p>&amp;和&amp;&amp;都可以用作<strong>逻辑与</strong>的运算符，表示逻辑与（and），当运算符两边的表达式的结果都为 true 时，整个运算结果才为 true，否则，只要有一方为 false，则结果为 false。</p>
<p>&amp;&amp; 还具有<strong>短路</strong>的功能，即如果第一个表达式为 false，则不再计算第二个表达式</p>
<p>&amp;还可以用作<strong>位运算符</strong>，当&amp;操作符两边的表达式不是boolean类型时，&amp;表示按位与操作，我们通常使用0x0f来与一个整数进行&amp;运算，来获取该整数的最低4个bit位，例如，0x31 &amp; 0x0f的结果为0x01。</p>
<h3 id="全局变量、局部变量、静态变量和实例变量的区别" tabindex="-1"><a class="header-anchor" href="#全局变量、局部变量、静态变量和实例变量的区别" aria-hidden="true">#</a> 全局变量、局部变量、静态变量和实例变量的区别</h3>
<p>全局变量：也叫成员变量，是指在类中定义的变量，它在整个类中都有效。全局变量的定义一般是在类的最上方，在所有方法的外部的位置处定义。</p>
<p>全局变量又可分为：类变量（静态变量）和实例变量（对象变量）。</p>
<p>实例变量也叫对象变量，这种变量是在类声明的内部但是在类的其他成员方法之外声明的。类的每个对象维护它自己的一份实例变量的副本。</p>
<p>注意：实例变量被定义在类中但在任何方法之外。并且 New 出来后均被初始化，也就是说没有显示初始化的，都被赋予了默认值。</p>
<p>类变量也叫静态变量，也就是在实例变量前加了static 的变量。一般被用来声明常量。（至于static这个关键字的详细使用，这里就不在详细叙述）</p>
<h3 id="类变量与实例变量的区别" tabindex="-1"><a class="header-anchor" href="#类变量与实例变量的区别" aria-hidden="true">#</a> 类变量与实例变量的区别</h3>
<p>在语法定义上的区别：静态变量前要加static关键字，而实例变量前则不加。</p>
<p>在程序运行时的区别：<strong>实例变量属于某个对象的属性</strong>，必须创建了实例对象，其中的实例变量才会被分配空间，才能使用这个实例变量。<strong>静态变量不属于某个实例对象，而是属于类</strong>，所以也称为类变量，只要程序加载了类的字节码，不用创建任何实例对象，静态变量就会被分配空间，静态变量就可以被使用了。总之，<strong>实例变量必须创建对象后才可以通过这个对象来使用，静态变量则可以直接使用类名来引用</strong>。</p>
<p>类变量是所有该类的实例化对象所共有的资源，其中一个对象将它值改变，其他对象得到的就是改变后的结果；而实例变量则属对象私有，某一个对象将其所包含的实例变量的值改变，不影响其他对象中实例变量的值；</p>
<p><strong>局部变量</strong>，由声明在某方法，或某代码段里（比如for循环）。执行到它的时候直接在栈中开辟内存并使用的。当局部变量脱离作用域，存放该作用域的栈指针，栈顶与栈底重合即为释放内存，速度是非常快的。</p>
<h3 id="和equals区别" tabindex="-1"><a class="header-anchor" href="#和equals区别" aria-hidden="true">#</a> &quot;==&quot;和equals区别</h3>
<p>==操作符专门用来比较两个变量的值是否相等，也就是用于比较变量所对应的内存中所存储的数值是否相同，要比较两个基本类型的数据或两个引用变量是否相等，只能用==操作符。</p>
<p>equals 方法是用于比较两个独立对象的内容是否相同，就好比去比较两个人的长相是否相同，它比较的两个对象是独立的。</p>
<p>如果一个类没有自己定义equals方法，那么它将继承Object类的equals方法，Object类的equals方法的实现代码如下：</p>
<div class="language-JAVA ext-JAVA line-numbers-mode"><pre v-pre class="language-JAVA"><code>boolean equals(Object o){
	return this==o;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这说明，如果一个类没有自己定义equals方法，它默认的equals方法（从Object 类继承的）就是使用==操作符，也是在比较两个变量指向的对象是否是同一对象，这时候使用equals和使用==会得到同样的结果，如果比较的是两个独立的对象则总返回false。如果你编写的类希望能够比较该类创建的两个实例对象的内容是否相同，那么你必须覆盖equals方法，由你自己写代码来决定在什么情况即可认为两个对象的内容是相同的。</p>
<h3 id="string-s-new-string-xyz-创建了几个string-object-二者之间有什么区别" tabindex="-1"><a class="header-anchor" href="#string-s-new-string-xyz-创建了几个string-object-二者之间有什么区别" aria-hidden="true">#</a> String s = new String(&quot;xyz&quot;);创建了几个String Object? 二者之间有什么区别？</h3>
<p>两个或一个，”xyz”对应一个对象，这个对象放在字符串常量缓冲区，常量”xyz”不管出现多少遍，都是缓冲区中的那一个。New String每写一遍，就创建一个新的对象，它一句那个常量”xyz”对象的内容来创建出一个新String对象。如果以前就用过’xyz’，这句代表就不会创建”xyz”自己了，直接从缓冲区拿。</p>
<h3 id="string-和stringbuffer的区别" tabindex="-1"><a class="header-anchor" href="#string-和stringbuffer的区别" aria-hidden="true">#</a> String 和StringBuffer的区别</h3>
<p>String和StringBuffer，它们都可以储存和操作字符串，即包含多个字符的字符数据。</p>
<p>不同之处在于: 感觉就像是变量和常量的区别，StringBuffer对象的内容可以修改，而Sring对象一旦产生就不可以被修改，重新赋值的话，其实就是 两个对象了。典型地，你可以使用StringBuffer来动态构造字符数据。</p>
<p>另外，String实现了equals方法，new String(“abc”).equals(new String(“abc”)的结果为true,而StringBuffer没有实现equals方法，所以，new StringBuffer(“abc”).equals(new StringBuffer(“abc”)的结果为false。</p>
<p>SringBuffer进行字符串处理时，不生成新的对象，内存占得少，所以实际使用中，要经常对字符串进行修改，插入删除等，用StringBufer更合适，还有一个StringBuilde，是线程不安全的，可能快点。</p>
<p>String覆盖了equals方法和hashCode方法，而StringBuffer没有覆盖equals方法和hashCode方法，所以，将StringBuffer对象存储进Java集合类中时会出现问题。</p>
<h3 id="final-finally-finalize的区别" tabindex="-1"><a class="header-anchor" href="#final-finally-finalize的区别" aria-hidden="true">#</a> final, finally, finalize的区别</h3>
<p>final 用于声明属性，方法和类，分别表示属性不可变，方法不可覆盖，类不可继承。</p>
<p>内部类要访问局部变量，局部变量必须定义成final类型。</p>
<p>finally是异常处理语句结构的一部分，表示总是执行。</p>
<p>finalize是Object类的一个方法，在垃圾收集器执行的时候会调用被回收对象的此方法，可以覆盖此方法提供垃圾收集时的其他资源回收，例如关闭文件等。JVM不保证此方法总被调用</p>
<h3 id="java中finally语句块的深度解析-try-catch-finally的执行顺序" tabindex="-1"><a class="header-anchor" href="#java中finally语句块的深度解析-try-catch-finally的执行顺序" aria-hidden="true">#</a> Java中finally语句块的深度解析(try catch finally的执行顺序)</h3>
<p>1、除了以下2种情况外，不管有木有出现异常，finally块中代码都会执行；</p>
<p>①程序未进入try{}块的执行，如在try之前出现运行时异常，程序终止。</p>
<p>②程序进入到try{}和catch{}块的执行，但是在try{}或者catch{}块碰到了System.exit(0)语句，jvm直接退出。 finally{}块不会执行</p>
<p>2、当try和catch中有return时，finally仍然会执行；</p>
<p>3、<strong>finally是在return后面的表达式运算后执行的</strong>（此时并没有返回运算后的值，而是先把要返回的值的引用地址保存起来，而不管finally中的代码怎么样，最后返回的都是这个引用地址（或者说这个引用地址指向的对象），而这个返回值在finally中会被不会被改变要分以下2种情况）。</p>
<p>①若这个返回值是基本数据类型（int,double）或者不可变类对象（如String,Integer），</p>
<p>②则不管finally中的代码怎么样，返回的值都不会改变，仍然是之前保存的值，若这个值是可变类对象），所以函数返回值是在finally执行前确定的；</p>
<p>4、<strong>finally中最好不要包含return，否则程序会提前退出，返回值不是try或catch中保存的返回值，而是finally中的return值</strong>。</p>
<h3 id="overload和override的区别" tabindex="-1"><a class="header-anchor" href="#overload和override的区别" aria-hidden="true">#</a> Overload和Override的区别</h3>
<p>Overload是重载的意思，Override是覆盖的意思，也就是重写。</p>
<p>重载Overload表示同一个类中可以有多个名称相同的方法，但这些方法的参数列表各不相同（即参数个数或类型不同）。</p>
<p>重写Override表示子类中的方法可以与父类中的某个方法的名称和参数完全相同，通过子类创建的实例对象调用这个方法时，将调用子类中的定义方法，这相当于把父类中定义的那个完全相同的方法给覆盖了，这也是面向对象编程的多态性的一种表现。子类覆盖父类的方法时，只能比父类抛出更少的异常，或者是抛出父类抛出的异常的子异常，因为子类可以解决父类的一些问题，不能比父类有更多的问题。子类方法的访问权限只能比父类的更大，不能更小。如果父类的方法是private类型，那么，子类则不存在覆盖的限制，相当于子类中增加了一个全新的方法。</p>
<h3 id="ceil、floor、round的区别" tabindex="-1"><a class="header-anchor" href="#ceil、floor、round的区别" aria-hidden="true">#</a> ceil、floor、round的区别</h3>
<p>Math类中提供了三个与取整有关的方法：ceil、floor、round，这些方法的作用与它们的英文名称的含义相对应，例如，ceil的英文意义是天花板，该方法就表示向上取整，Math.ceil(11.3)的结果为12,Math.ceil(-11.3)的结果是-11；floor的英文意义是地板，该方法就表示向下取整，Math.ceil(11.6)的结果为11,Math.ceil(-11.6)的结果是-12；最难掌握的是round方法，它表示“四舍五入”，算法为Math.floor(x+0.5)，即将原来的数字加上0.5后再向下取整，所以，Math.round(11.5)的结果为12，Math.round(-11.5)的结果为-11。</p>
<h3 id="抽象类和接口的对比" tabindex="-1"><a class="header-anchor" href="#抽象类和接口的对比" aria-hidden="true">#</a> 抽象类和接口的对比</h3>
<p>抽象类是用来捕捉子类的通用特性的。接口是抽象方法的集合。</p>
<p>从设计层面来说，抽象类是对类的抽象，是一种模板设计，接口是行为的抽象，是一种行为的规范。</p>
<p><strong>相同点</strong></p>
<ul>
<li>接口和抽象类都不能实例化</li>
<li>都位于继承的顶端，用于被其他实现或继承</li>
<li>都包含抽象方法，其子类都必须覆写这些抽象方法</li>
</ul>
<p><strong>不同点</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>抽象类</th>
<th>接口</th>
</tr>
</thead>
<tbody>
<tr>
<td>声明</td>
<td>抽象类使用abstract关键字声明</td>
<td>接口使用interface关键字声明</td>
</tr>
<tr>
<td>实现</td>
<td>子类使用extends关键字来继承抽象类。如果子类不是抽象类的话，它需要提供抽象类中所有声明的方法的实现</td>
<td>子类使用implements关键字来实现接口。它需要提供接口中所有声明的方法的实现</td>
</tr>
<tr>
<td>构造器</td>
<td>抽象类可以有构造器</td>
<td>接口不能有构造器</td>
</tr>
<tr>
<td>访问修饰符</td>
<td>抽象类中的方法可以是任意访问修饰符</td>
<td>接口方法默认修饰符是public。并且不允许定义为 private 或者 protected</td>
</tr>
<tr>
<td>多继承</td>
<td>一个类最多只能继承一个抽象类</td>
<td>一个类可以实现多个接口</td>
</tr>
<tr>
<td>字段声明</td>
<td>抽象类的字段声明可以是任意的</td>
<td>接口的字段默认都是 static 和 final 的</td>
</tr>
</tbody>
</table>
<p><strong>备注</strong>：Java8中接口中引入默认方法和静态方法，以此来减少抽象类和接口之间的差异。</p>
<p>现在，我们可以为接口提供默认实现的方法了，并且不用强制子类来实现它。</p>
<p>接口和抽象类各有优缺点，在接口和抽象类的选择上，必须遵守这样一个原则：</p>
<ul>
<li>行为模型应该总是通过接口而不是抽象类定义，所以通常是优先选用接口，尽量少用抽象类。</li>
<li>选择抽象类的时候通常是如下情况：需要定义子类的行为，又要为子类提供通用的功能。</li>
</ul>
<h3 id="java中的异常处理机制的简单原理和应用" tabindex="-1"><a class="header-anchor" href="#java中的异常处理机制的简单原理和应用" aria-hidden="true">#</a> Java中的异常处理机制的简单原理和应用</h3>
<p>异常是指java程序运行时（非编译）所发生的非正常情况或错误，与现实生活中的事件很相似，现实生活中的事件可以包含事件发生的时间、地点、人物、情节等信息，可以用一个对象来表示，Java使用面向对象的方式来处理异常，它把程序中发生的每个异常也都分别封装到一个对象来表示的，该对象中包含有异常的信息。</p>
<p>Java对异常进行了分类，不同类型的异常分别用不同的Java类表示，所有异常的根类为java.lang.Throwable，Throwable下面又派生了两个子类：Error和Exception，Error 表示应用程序本身无法克服和恢复的一种严重问题，程序只有死的份了，例如，说内存溢出和线程死锁等系统问题。Exception表示程序还能够克服和恢复的问题，其中又分为系统异常和普通异常，系统异常是软件本身缺陷所导致的问题，也就是软件开发人员考虑不周所导致的问题，软件使用者无法克服和恢复这种问题，但在这种问题下还可以让软件系统继续运行或者让软件死掉，例如，数组脚本越界（ArrayIndexOutOfBoundsException），空指针异常（NullPointerException）、类转换异常（ClassCastException）；普通异常是运行环境的变化或异常所导致的问题，是用户能够克服的问题，例如，网络断线，硬盘空间不够，发生这样的异常后，程序不应该死掉。</p>
<p>java为系统异常和普通异常提供了不同的解决方案，编译器强制普通异常必须try..catch处理或用throws声明继续抛给上层调用方法处理，所以普通异常也称为checked异常，而系统异常可以处理也可以不处理，所以，编译器不强制用try..catch处理或用throws声明，所以系统异常也称为unchecked异常。</p>
<h3 id="什么是java序列化-如何实现java序列化-或者请解释serializable接口的作用" tabindex="-1"><a class="header-anchor" href="#什么是java序列化-如何实现java序列化-或者请解释serializable接口的作用" aria-hidden="true">#</a> 什么是java序列化，如何实现java序列化？或者请解释Serializable接口的作用</h3>
<p>无论何种类型的数据，都是以二进制的形式在网络上传送，为了由一个进程把Java对象发送给另一个进程，需要把其转换为字节序列才能在网络上传送，把JAVA对象转换为字节序列的过程就称为对象的序列化，将字节序列恢复成Java对象的过程称为对象的反序列化</p>
<p>只有实现了 serializable接口的类的对象才能被序列化</p>
<p>例如，在web开发中，如果对象被保存在了Session中，tomcat在重启时要把Session对象序列化到硬盘，这个对象就必须实现Serializable接口。如果对象要经过分布式系统进行网络传输或通过rmi等远程调用，这就需要在网络上传输对象，被传输的对象就必须实现Serializable接口。</p>
<h3 id="java中有几种类型的流-jdk为每种类型的流提供了一些抽象类以供继承-请说出他们分别是哪些类" tabindex="-1"><a class="header-anchor" href="#java中有几种类型的流-jdk为每种类型的流提供了一些抽象类以供继承-请说出他们分别是哪些类" aria-hidden="true">#</a> java中有几种类型的流？JDK为每种类型的流提供了一些抽象类以供继承，请说出他们分别是哪些类？</h3>
<p>字节流，字符流。</p>
<p>字节流继承于InputStream OutputStream，</p>
<p>字符流继承于InputStreamReader OutputStreamWriter。</p>
<p>在java.io包中还有许多其他的流，主要是为了提高性能和使用方便。</p>
<h3 id="字节流与字符流的区别" tabindex="-1"><a class="header-anchor" href="#字节流与字符流的区别" aria-hidden="true">#</a> 字节流与字符流的区别</h3>
<p>要把一片二进制数据数据逐一输出到某个设备中，或者从某个设备中逐一读取一片二进制数据，不管输入输出设备是什么，我们要用统一的方式来完成这些操作，用一种抽象的方式进行描述，这个抽象描述方式起名为IO流，对应的抽象类为OutputStream和InputStream ，不同的实现类就代表不同的输入和输出设备，它们都是针对字节进行操作的。</p>
<p>在应用中，经常要完全是字符的一段文本输出去或读进来，用字节流可以吗？计算机中的一切最终都是二进制的字节形式存在。对于“中国”这些字符，首先要得到其对应的字节，然后将字节写入到输出流。读取时，首先读到的是字节，可是我们要把它显示为字符，我们需要将字节转换成字符。由于这样的需求很广泛，人家专门提供了字符流的包装类。</p>
<p>底层设备永远只接受字节数据，有时候要写字符串到底层设备，需要将字符串转成字节再进行写入。字符流是字节流的包装，字符流则是直接接受字符串，它内部将串转成字节，再写入底层设备，这为我们向IO设别写入或读取字符串提供了一点点方便。</p>
<p>字符向字节转换时，要注意编码的问题，因为字符串转成字节数组，</p>
<p>其实是转成该字符的某种编码的字节形式，读取也是反之的道理。</p>
<h3 id="获得一个类的类对象有哪些方式" tabindex="-1"><a class="header-anchor" href="#获得一个类的类对象有哪些方式" aria-hidden="true">#</a> 获得一个类的类对象有哪些方式？</h3>
<ul>
<li>方法1：类型.class，例如：String.class</li>
<li>方法2：对象.getClass()，例如：&quot;hello&quot;.getClass()</li>
<li>方法3：Class.forName()，例如：Class.forName(&quot;java.lang.String&quot;)</li>
</ul>
<h3 id="如何通过反射创建对象" tabindex="-1"><a class="header-anchor" href="#如何通过反射创建对象" aria-hidden="true">#</a> 如何通过反射创建对象？</h3>
<ul>
<li>方法1：通过类对象调用newInstance()方法，例如：String.class.newInstance()</li>
<li>方法2：通过类对象的getConstructor()或getDeclaredConstructor()方法获得构造器（Constructor）对象并调用其newInstance()方法创建对象，例如：String.class.getConstructor(String.class).newInstance(&quot;Hello&quot;);</li>
</ul>
<h3 id="break-continue-return-的区别及作用" tabindex="-1"><a class="header-anchor" href="#break-continue-return-的区别及作用" aria-hidden="true">#</a> break ,continue ,return 的区别及作用</h3>
<p>break 跳出总上一层循环，不再执行循环(结束当前的循环体)</p>
<p>continue 跳出本次循环，继续执行下次循环(结束正在执行的循环 进入下一个循环条件)</p>
<p>return 程序返回，不再执行下面的代码(结束当前的方法 直接返回)</p>
<h3 id="hashcode-与-equals-重要" tabindex="-1"><a class="header-anchor" href="#hashcode-与-equals-重要" aria-hidden="true">#</a> hashCode 与 equals (重要)</h3>
<p>HashSet如何检查重复</p>
<p>两个对象的 hashCode() 相同，则 equals() 也一定为 true，对吗？</p>
<p>hashCode和equals方法的关系</p>
<p>面试官可能会问你：“你重写过 hashcode 和 equals 么，为什么重写equals时必须重写hashCode方法？”</p>
<p><strong>hashCode()介绍</strong></p>
<p>hashCode() 的作用是获取哈希码，也称为散列码；它实际上是返回一个int整数。这个哈希码的作用是确定该对象在哈希表中的索引位置。hashCode() 定义在JDK的Object.java中，这就意味着Java中的任何类都包含有hashCode()函数。</p>
<p>散列表存储的是键值对(key-value)，它的特点是：能根据“键”快速的检索出对应的“值”。这其中就利用到了散列码！（可以快速找到所需要的对象）</p>
<p><strong>为什么要有 hashCode</strong></p>
<p><strong>我们以“HashSet 如何检查重复”为例子来说明为什么要有 hashCode</strong>：</p>
<p>当你把对象加入 HashSet 时，HashSet 会先计算对象的 hashcode 值来判断对象加入的位置，同时也会与其他已经加入的对象的 hashcode 值作比较，如果没有相符的hashcode，HashSet会假设对象没有重复出现。但是如果发现有相同 hashcode 值的对象，这时会调用 equals()方法来检查 hashcode 相等的对象是否真的相同。如果两者相同，HashSet 就不会让其加入操作成功。如果不同的话，就会重新散列到其他位置。（摘自我的Java启蒙书《Head first java》第二版）。这样我们就大大减少了 equals 的次数，相应就大大提高了执行速度。</p>
<p><strong>hashCode()与equals()的相关规定</strong></p>
<p>如果两个对象相等，则hashcode一定也是相同的</p>
<p>两个对象相等，对两个对象分别调用equals方法都返回true</p>
<p>两个对象有相同的hashcode值，它们也不一定是相等的</p>
<p><strong>因此，equals 方法被覆盖过，则 hashCode 方法也必须被覆盖</strong></p>
<p>hashCode() 的默认行为是对堆上的对象产生独特值。如果没有重写 hashCode()，则该 class 的两个对象无论如何都不会相等（即使这两个对象指向相同的数据）</p>
<h3 id="为什么重写了equals-还要重写hashcode" tabindex="-1"><a class="header-anchor" href="#为什么重写了equals-还要重写hashcode" aria-hidden="true">#</a> 为什么重写了equals()，还要重写hashCode()？</h3>
<p>hashCode 方法用于散列集合的查找，equals 方法用于判断两个对象是否相等。</p>
<p>为什么重写了 equals 方法，还要重写 hashCode 方法？
因为如果只重写了 equals 方法，两个对象 equals 返回了true，但是如果没有重写 hashCode 方法，集合还是会插入元素。这样集合中就出现了重复元素了。</p>
<h3 id="bio-nio-aio-有什么区别" tabindex="-1"><a class="header-anchor" href="#bio-nio-aio-有什么区别" aria-hidden="true">#</a> BIO,NIO,AIO 有什么区别?</h3>
<p>简答</p>
<ul>
<li>BIO：Block IO 同步阻塞式 IO，就是我们平常使用的传统 IO，它的特点是模式简单使用方便，并发处理能力低。</li>
<li>NIO：Non IO 同步非阻塞 IO，是传统 IO 的升级，客户端和服务器端通过 Channel（通道）通讯，实现了多路复用。</li>
<li>AIO：Asynchronous IO 是 NIO 的升级，也叫 NIO2，实现了异步非堵塞 IO ，异步 IO 的操作基于事件和回调机制。</li>
</ul>
<p>详细回答</p>
<ul>
<li><strong>BIO (Blocking I/O):</strong> 同步阻塞I/O模式，数据的读取写入必须阻塞在一个线程内等待其完成。在活动连接数不是特别高（小于单机1000）的情况下，这种模型是比较不错的，可以让每一个连接专注于自己的 I/O 并且编程模型简单，也不用过多考虑系统的过载、限流等问题。线程池本身就是一个天然的漏斗，可以缓冲一些系统处理不了的连接或请求。但是，当面对十万甚至百万级连接的时候，传统的 BIO 模型是无能为力的。因此，我们需要一种更高效的 I/O 处理模型来应对更高的并发量。</li>
<li><strong>NIO (New I/O):</strong> NIO是一种同步非阻塞的I/O模型，在Java 1.4 中引入了NIO框架，对应 java.nio 包，提供了 Channel , Selector，Buffer等抽象。NIO中的N可以理解为Non-blocking，不单纯是New。它支持面向缓冲的，基于通道的I/O操作方法。 NIO提供了与传统BIO模型中的 <code v-pre>Socket</code> 和 <code v-pre>ServerSocket</code> 相对应的 <code v-pre>SocketChannel</code> 和 <code v-pre>ServerSocketChannel</code> 两种不同的套接字通道实现,两种通道都支持阻塞和非阻塞两种模式。阻塞模式使用就像传统中的支持一样，比较简单，但是性能和可靠性都不好；非阻塞模式正好与之相反。对于低负载、低并发的应用程序，可以使用同步阻塞I/O来提升开发速率和更好的维护性；对于高负载、高并发的（网络）应用，应使用 NIO 的非阻塞模式来开发</li>
<li><strong>AIO (Asynchronous I/O):</strong> AIO 也就是 NIO 2。在 Java 7 中引入了 NIO 的改进版 NIO 2,它是异步非阻塞的IO模型。异步 IO 是基于事件和回调机制实现的，也就是应用操作之后会直接返回，不会堵塞在那里，当后台处理完成，操作系统会通知相应的线程进行后续的操作。AIO 是异步IO的缩写，虽然 NIO 在网络操作中，提供了非阻塞的方法，但是 NIO 的 IO 行为还是同步的。对于 NIO 来说，我们的业务线程是在 IO 操作准备好时，得到通知，接着就由这个线程自行进行 IO 操作，IO操作本身是同步的。查阅网上相关资料，我发现就目前来说 AIO 的应用还不是很广泛，Netty 之前也尝试使用过 AIO，不过又放弃了。</li>
</ul>
<h2 id="反射" tabindex="-1"><a class="header-anchor" href="#反射" aria-hidden="true">#</a> 反射</h2>
<h3 id="什么是反射机制" tabindex="-1"><a class="header-anchor" href="#什么是反射机制" aria-hidden="true">#</a> 什么是反射机制？</h3>
<p>JAVA反射机制是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为java语言的反射机制。</p>
<p>静态编译和动态编译</p>
<ul>
<li>**静态编译：**在编译时确定类型，绑定对象</li>
<li>**动态编译：**运行时确定类型，绑定对象</li>
</ul>
<h3 id="反射机制优缺点" tabindex="-1"><a class="header-anchor" href="#反射机制优缺点" aria-hidden="true">#</a> 反射机制优缺点</h3>
<ul>
<li><strong>优点：</strong> 运行期类型的判断，动态加载类，提高代码灵活度。</li>
<li><strong>缺点：</strong> 性能瓶颈：反射相当于一系列解释操作，通知 JVM 要做的事情，性能比直接的java代码要慢很多。</li>
</ul>
<h3 id="反射机制的应用场景有哪些" tabindex="-1"><a class="header-anchor" href="#反射机制的应用场景有哪些" aria-hidden="true">#</a> 反射机制的应用场景有哪些？</h3>
<p>反射是框架设计的灵魂。</p>
<p>在我们平时的项目开发过程中，基本上很少会直接使用到反射机制，但这不能说明反射机制没有用，实际上有很多设计、开发都与反射机制有关，例如模块化的开发，通过反射去调用对应的字节码；动态代理设计模式也采用了反射机制，还有我们日常使用的 Spring／Hibernate 等框架也大量使用到了反射机制。</p>
<p>举例：</p>
<p>①我们在使用JDBC连接数据库时使用Class.forName()通过反射加载数据库的驱动程序；</p>
<p>②Spring框架也用到很多反射机制，最经典的就是xml的配置模式。Spring 通过 XML 配置模式装载 Bean 的过程：</p>
<ol>
<li>将程序内所有 XML 或 Properties 配置文件加载入内存中;</li>
<li>Java类里面解析xml或properties里面的内容，得到对应实体类的字节码字符串以及相关的属性信息;</li>
<li>使用反射机制，根据这个字符串获得某个类的Class实例;</li>
<li>动态配置实例的属性</li>
</ol>
<h3 id="java获取反射的三种方法" tabindex="-1"><a class="header-anchor" href="#java获取反射的三种方法" aria-hidden="true">#</a> Java获取反射的三种方法</h3>
<ol>
<li>通过new对象实现反射机制</li>
<li>通过路径实现反射机制</li>
<li>通过类名实现反射机制</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Student</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> id<span class="token punctuation">;</span>
    <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">protected</span> <span class="token keyword">boolean</span> sex<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> score<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token number">123456</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Get</span> <span class="token punctuation">{</span>
    <span class="token comment">//获取反射机制三种方式</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token comment">//方式一(通过建立对象)</span>
        <span class="token class-name">Student</span> stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Class</span> classobj1 <span class="token operator">=</span> stu<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>classobj1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//方式二（所在通过路径-相对路径）</span>
        <span class="token class-name">Class</span> classobj2 <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">"fanshe.Student"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>classobj2<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//方式三（通过类名）</span>
        <span class="token class-name">Class</span> classobj3 <span class="token operator">=</span> <span class="token class-name">Student</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>classobj3<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反射的原理" tabindex="-1"><a class="header-anchor" href="#反射的原理" aria-hidden="true">#</a> 反射的原理</h3>
<p>Java反射机制是在运行状态中，对于任意一个类，都能够知道这个类中的所有属性和方法；对于任意一个对象，都能够调用它的任意一个方法和属性；这种动态获取的信息以及动态调用对象的方法的功能称为java语言的反射机制。</p>
<p>简单一句话：反射技术可以对类进行解剖。</p>
<p>反射就是在 Java 类执行过程中的加载步骤中，从 .class 字节码文件中提取出包含 java 类的所有信息，然后将字节码中的方法，变量，构造函数等映射成 相应的 Method、Filed、Constructor 等类，然后进行各种操作</p>
<h3 id="注解的原理" tabindex="-1"><a class="header-anchor" href="#注解的原理" aria-hidden="true">#</a> 注解的原理</h3>
<p>注解的底层也是使用反射实现的，我们可以自定义一个注解来体会下。注解和接口有点类似，不过申明注解类需要加上@interface，注解类里面，只支持基本类型、String及枚举类型，里面所有属性被定义成方法，并允许提供默认值。</p>
<p><a href="https://blog.csdn.net/yuzongtao/article/details/83306182" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/yuzongtao/article/details/83306182<ExternalLinkIcon/></a></p>
<p><strong>注解处理器</strong></p>
<p>这个是注解使用的核心了，前面我们说了那么多注解相关的，那到底java是如何去处理这些注解的呢</p>
<p>从getAnnotation进去可以看到java.lang.class实现了<strong>AnnotatedElement</strong>方法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token class-name">MyAnTargetType</span> t <span class="token operator">=</span> <span class="token class-name">AnnotationTest</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">MyAnTargetType</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">class</span> <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">></span></span> <span class="token keyword">implements</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span><span class="token punctuation">,</span>
                              <span class="token class-name">GenericDeclaration</span><span class="token punctuation">,</span>
                              <span class="token class-name">Type</span><span class="token punctuation">,</span>
                              <span class="token class-name">AnnotatedElement</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>java.lang.reflect.AnnotatedElement 接口是所有程序元素（Class、Method和Constructor）的父接口，所以程序通过反射获取了某个类的AnnotatedElement对象之后，程序就可以调用该对象的如下四个个方法来访问Annotation信息：</p>
<p>方法1 &lt;T extends Annotation&gt; T getAnnotation(Class&lt;T&gt; annotationClass):*返回改程序元素上存在的、指定类型的注解，如果该类型注解不存在，则返回null
方法2：Annotation[] getAnnotations(): 返回该程序元素上存在的所有注解</p>
<h2 id="java-版本差异" tabindex="-1"><a class="header-anchor" href="#java-版本差异" aria-hidden="true">#</a> Java 版本差异</h2>
<h3 id="lambda-表达式中使用外部变量-为什么要-final" tabindex="-1"><a class="header-anchor" href="#lambda-表达式中使用外部变量-为什么要-final" aria-hidden="true">#</a> lambda 表达式中使用外部变量，为什么要 final？</h3>
<p>我们在 Java 8 之前，匿名类中如果要访问局部变量的话，那个局部变量必须显式的声明为 final</p>
<p>每个方法在执行的时候都会在线程栈中开辟一块空间创建一个栈帧，方法的执行实际就是栈帧的入栈出栈的过程。栈帧中包含局部变量表，操作数栈，动态连接，方法出口等。外部方法的局部变量（假如有一个局部变量p）就保存在所在栈帧（为了方便叫栈帧A）的局部变量表中，而lambda表达式实际上就是一个匿名内部类的接口实现方法，执行的时候需要在线程栈中创建一个新的栈帧（栈帧B）。不同栈帧之间的局部变量表是独享的，所以栈帧B中的变量p实际上是对外部变量的一个私有拷贝。为了保证程序的正确性就要求这个被应用的局部变量需要定义成final的。假如变量p不要求是final的就会出现栈帧A和栈帧B中该变量值不一样的情况。这就跟我们预期的不一致了。导致程序不正确。</p>
</div></template>
