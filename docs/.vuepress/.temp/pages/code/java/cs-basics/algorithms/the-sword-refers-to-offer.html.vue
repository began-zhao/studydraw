<template><div><h2 id="斐波那契数列" tabindex="-1"><a class="header-anchor" href="#斐波那契数列" aria-hidden="true">#</a> 斐波那契数列</h2>
<p><strong>题目描述：</strong></p>
<p>大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项。
n&lt;=39</p>
<p><strong>问题分析：</strong></p>
<p>可以肯定的是这一题通过递归的方式是肯定能做出来，但是这样会有一个很大的问题，那就是递归大量的重复计算会导致内存溢出。另外可以使用迭代法，用fn1和fn2保存计算过程中的结果，并复用起来。下面我会把两个方法示例代码都给出来并给出两个方法的运行时间对比。</p>
<p><strong>示例代码：</strong></p>
<p>采用迭代法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token class-name">Fibonacci</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> number <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> first <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> second <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> third <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> number<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        third <span class="token operator">=</span> first <span class="token operator">+</span> second<span class="token punctuation">;</span>
        first <span class="token operator">=</span> second<span class="token punctuation">;</span>
        second <span class="token operator">=</span> third<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> third<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>采用递归：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token class-name">Fibonacci</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token operator">||</span>n<span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token class-name">Fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token class-name">Fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跳台阶问题" tabindex="-1"><a class="header-anchor" href="#跳台阶问题" aria-hidden="true">#</a> 跳台阶问题</h2>
<p><strong>题目描述：</strong></p>
<p>一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。</p>
<p><strong>问题分析：</strong></p>
<p>正常分析法：</p>
<blockquote>
<p>a.如果两种跳法，1阶或者2阶，那么假定第一次跳的是一阶，那么剩下的是n-1个台阶，跳法是f(n-1);
b.假定第一次跳的是2阶，那么剩下的是n-2个台阶，跳法是f(n-2)
c.由a，b假设可以得出总跳法为: f(n) = f(n-1) + f(n-2)
d.然后通过实际的情况可以得出：只有一阶的时候 f(1) = 1 ,只有两阶的时候可以有 f(2) = 2</p>
</blockquote>
<p>找规律分析法：</p>
<blockquote>
<p>f(1) = 1, f(2) = 2, f(3) = 3, f(4) = 5，  可以总结出f(n) = f(n-1) + f(n-2)的规律。但是为什么会出现这样的规律呢？假设现在6个台阶，我们可以从第5跳一步到6，这样的话有多少种方案跳到5就有多少种方案跳到6，另外我们也可以从4跳两步跳到6，跳到4有多少种方案的话，就有多少种方案跳到6，其他的不能从3跳到6什么的啦，所以最后就是f(6) = f(5) + f(4)；这样子也很好理解变态跳台阶的问题了。</p>
</blockquote>
<p><strong>所以这道题其实就是斐波那契数列的问题。</strong></p>
<p>代码只需要在上一题的代码稍做修改即可。和上一题唯一不同的就是这一题的初始元素变为 1 2 3 5 8.....而上一题为1 1 2  3 5 .......。另外这一题也可以用递归做，但是递归效率太低，所以我这里只给出了迭代方式的代码。</p>
<p><strong>示例代码：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token function">jumpFloor</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">int</span> first <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> second <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">,</span> third <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> number<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        third <span class="token operator">=</span> first <span class="token operator">+</span> second<span class="token punctuation">;</span>
        first <span class="token operator">=</span> second<span class="token punctuation">;</span>
        second <span class="token operator">=</span> third<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> third<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="变态跳台阶问题" tabindex="-1"><a class="header-anchor" href="#变态跳台阶问题" aria-hidden="true">#</a> 变态跳台阶问题</h2>
<p><strong>题目描述：</strong></p>
<p>一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。</p>
<p><strong>问题分析：</strong></p>
<p>假设n&gt;=2，第一步有n种跳法：跳1级、跳2级、到跳n级
跳1级，剩下n-1级，则剩下跳法是f(n-1)
跳2级，剩下n-2级，则剩下跳法是f(n-2)
......
跳n-1级，剩下1级，则剩下跳法是f(1)
跳n级，剩下0级，则剩下跳法是f(0)
所以在n&gt;=2的情况下：
f(n)=f(n-1)+f(n-2)+...+f(1)
因为f(n-1)=f(n-2)+f(n-3)+...+f(1)
所以f(n)=2*f(n-1) 又f(1)=1,所以可得<strong>f(n)=2^(number-1)</strong></p>
<p><strong>示例代码：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> <span class="token class-name">JumpFloorII</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> <span class="token operator">--</span>number<span class="token punctuation">;</span><span class="token comment">//2^(number-1)用位移操作进行，更快</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>补充：</strong></p>
<p>java中有三种移位运算符：</p>
<ol>
<li>“&lt;&lt;” :     <strong>左移运算符</strong>，等同于乘2的n次方</li>
<li>“&gt;&gt;”:     <strong>右移运算符</strong>，等同于除2的n次方</li>
<li>“&gt;&gt;&gt;” :  <strong>无符号右移运算符</strong>，不管移动前最高位是0还是1，右移后左侧产生的空位部分都以0来填充。与&gt;&gt;类似。</li>
</ol>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">16</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> b <span class="token operator">=</span> a <span class="token operator">&lt;&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span><span class="token comment">//左移2，等同于16 * 2的2次方，也就是16 * 4</span>
<span class="token keyword">int</span> c <span class="token operator">=</span> a <span class="token operator">>></span> <span class="token number">2</span><span class="token punctuation">;</span><span class="token comment">//右移2，等同于16 / 2的2次方，也就是16 / 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二维数组查找" tabindex="-1"><a class="header-anchor" href="#二维数组查找" aria-hidden="true">#</a> 二维数组查找</h2>
<p><strong>题目描述：</strong></p>
<p>在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。</p>
<p><strong>问题解析：</strong></p>
<p>这一道题还是比较简单的，我们需要考虑的是如何做，效率最快。这里有一种很好理解的思路：</p>
<blockquote>
<p>矩阵是有序的，从左下角来看，向上数字递减，向右数字递增，
因此从左下角开始查找，当要查找数字比左下角数字大时。右移
要查找数字比左下角数字小时，上移。这样找的速度最快。</p>
</blockquote>
<p><strong>示例代码：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token class-name">Find</span><span class="token punctuation">(</span><span class="token keyword">int</span> target<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//基本思路从左下角开始找，这样速度最快</span>
    <span class="token keyword">int</span> row <span class="token operator">=</span> array<span class="token punctuation">.</span>length<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//行</span>
    <span class="token keyword">int</span> column <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//列</span>
    <span class="token comment">//当行数大于0，当前列数小于总列数时循环条件成立</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>row <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>column<span class="token operator">&lt;</span> array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span> <span class="token operator">></span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
            row<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>row<span class="token punctuation">]</span><span class="token punctuation">[</span>column<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span>
            column<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="替换空格" tabindex="-1"><a class="header-anchor" href="#替换空格" aria-hidden="true">#</a> 替换空格</h2>
<p><strong>题目描述：</strong></p>
<p>请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。</p>
<p><strong>问题分析：</strong></p>
<p>这道题不难，我们可以通过循环判断字符串的字符是否为空格，是的话就利用append()方法添加追加“%20”，否则还是追加原字符。</p>
<p>或者最简单的方法就是利用：replaceAll(String regex,String replacement)方法了，一行代码就可以解决。</p>
<p><strong>示例代码：</strong></p>
<p>常规做法：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">replaceSpace</span><span class="token punctuation">(</span><span class="token class-name">StringBuffer</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">StringBuffer</span> out <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuffer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> str<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">char</span> b <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">" "</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            out<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">"%20"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            out<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> out<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一行代码解决：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">replaceSpace</span><span class="token punctuation">(</span><span class="token class-name">StringBuffer</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//return str.toString().replaceAll(" ", "%20");</span>
    <span class="token comment">//public String replaceAll(String regex,String replacement)</span>
    <span class="token comment">//用给定的替换替换与给定的regular expression匹配的此字符串的每个子字符串。 </span>
    <span class="token comment">//\ 转义字符. 如果你要使用 "\" 本身, 则应该使用 "\\". String类型中的空格用“\s”表示，所以我这里猜测"\\s"就是代表空格的意思</span>
    <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">"\\s"</span><span class="token punctuation">,</span> <span class="token string">"%20"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="数值的整数次方" tabindex="-1"><a class="header-anchor" href="#数值的整数次方" aria-hidden="true">#</a> 数值的整数次方</h2>
<p><strong>题目描述：</strong></p>
<p>给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。</p>
<p><strong>问题解析：</strong></p>
<p>这道题算是比较麻烦和难一点的一个了。我这里采用的是<strong>二分幂</strong>思想，当然也可以采用<strong>快速幂</strong>。
更具剑指offer书中细节，该题的解题思路如下：
1.当底数为0且指数&lt;0时，会出现对0求倒数的情况，需进行错误处理，设置一个全局变量；
2.判断底数是否等于0，由于base为double型，所以不能直接用==判断
3.优化求幂函数（二分幂）。
当n为偶数，a^n =（a<sup>n/2）*（a</sup>n/2）；
当n为奇数，a^n = a<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1" /></sup> * a<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2" /></sup> * a。时间复杂度O(logn)</p>
<p><strong>时间复杂度</strong>：O(logn)</p>
<p><strong>示例代码：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span> 
      <span class="token keyword">boolean</span> invalidInput<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>    
      <span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token class-name">Power</span><span class="token punctuation">(</span><span class="token keyword">double</span> base<span class="token punctuation">,</span> <span class="token keyword">int</span> exponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token comment">//如果底数等于0并且指数小于0</span>
          <span class="token comment">//由于base为double型，不能直接用==判断</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">equal</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span><span class="token number">0.0</span><span class="token punctuation">)</span><span class="token operator">&amp;&amp;</span>exponent<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            invalidInput<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> <span class="token number">0.0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">int</span> absexponent<span class="token operator">=</span>exponent<span class="token punctuation">;</span>
         <span class="token comment">//如果指数小于0，将指数转正</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>exponent<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span>
            absexponent<span class="token operator">=</span><span class="token operator">-</span>exponent<span class="token punctuation">;</span>
         <span class="token comment">//getPower方法求出base的exponent次方。</span>
        <span class="token keyword">double</span> res<span class="token operator">=</span><span class="token function">getPower</span><span class="token punctuation">(</span>base<span class="token punctuation">,</span>absexponent<span class="token punctuation">)</span><span class="token punctuation">;</span>
         <span class="token comment">//如果指数小于0，所得结果为上面求的结果的倒数</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>exponent<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span>
            res<span class="token operator">=</span><span class="token number">1.0</span><span class="token operator">/</span>res<span class="token punctuation">;</span>
        <span class="token keyword">return</span> res<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
    <span class="token comment">//比较两个double型变量是否相等的方法</span>
    <span class="token keyword">boolean</span> <span class="token function">equal</span><span class="token punctuation">(</span><span class="token keyword">double</span> num1<span class="token punctuation">,</span><span class="token keyword">double</span> num2<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>num1<span class="token operator">-</span>num2<span class="token operator">></span><span class="token operator">-</span><span class="token number">0.000001</span><span class="token operator">&amp;&amp;</span>num1<span class="token operator">-</span>num2<span class="token operator">&lt;</span><span class="token number">0.000001</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//求出b的e次方的方法</span>
    <span class="token keyword">double</span> <span class="token function">getPower</span><span class="token punctuation">(</span><span class="token keyword">double</span> b<span class="token punctuation">,</span><span class="token keyword">int</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//如果指数为0，返回1</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
        <span class="token comment">//如果指数为1，返回b</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> b<span class="token punctuation">;</span>
        <span class="token comment">//e>>1相等于e/2，这里就是求a^n =（a^n/2）*（a^n/2）</span>
        <span class="token keyword">double</span> result<span class="token operator">=</span><span class="token function">getPower</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span>e<span class="token operator">>></span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        result<span class="token operator">*=</span>result<span class="token punctuation">;</span>
        <span class="token comment">//如果指数n为奇数，则要再乘一次底数base</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>e<span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span>
            result<span class="token operator">*=</span>b<span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然这一题也可以采用笨方法：累乘。不过这种方法的时间复杂度为O（n），这样没有前一种方法效率高。</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">// 使用累乘</span>
<span class="token keyword">public</span> <span class="token keyword">double</span> <span class="token function">powerAnother</span><span class="token punctuation">(</span><span class="token keyword">double</span> base<span class="token punctuation">,</span> <span class="token keyword">int</span> exponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">double</span> result <span class="token operator">=</span> <span class="token number">1.0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>exponent<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        result <span class="token operator">*=</span> base<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>exponent <span class="token operator">>=</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token keyword">else</span>
        <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">/</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调整数组顺序使奇数位于偶数前面" tabindex="-1"><a class="header-anchor" href="#调整数组顺序使奇数位于偶数前面" aria-hidden="true">#</a> 调整数组顺序使奇数位于偶数前面</h2>
<p><strong>题目描述：</strong></p>
<p>输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有的奇数位于数组的前半部分，所有的偶数位于位于数组的后半部分，并保证奇数和奇数，偶数和偶数之间的相对位置不变。</p>
<p><strong>问题解析：</strong></p>
<p>这道题有挺多种解法的，给大家介绍一种我觉得挺好理解的方法：
我们首先统计奇数的个数假设为n,然后新建一个等长数组，然后通过循环判断原数组中的元素为偶数还是奇数。如果是则从数组下标0的元素开始，把该奇数添加到新数组；如果是偶数则从数组下标为n的元素开始把该偶数添加到新数组中。</p>
<p><strong>示例代码：</strong></p>
<p>时间复杂度为O（n），空间复杂度为O（n）的算法</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">reOrderArray</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> array<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//如果数组长度等于0或者等于1，什么都不做直接返回</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span>length<span class="token operator">==</span><span class="token number">0</span><span class="token operator">||</span>array<span class="token punctuation">.</span>length<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> 
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token comment">//oddCount：保存奇数个数</span>
        <span class="token comment">//oddBegin：奇数从数组头部开始添加</span>
        <span class="token keyword">int</span> oddCount<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span>oddBegin<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">//新建一个数组</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> newArray<span class="token operator">=</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span>array<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">//计算出（数组中的奇数个数）开始添加元素</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>array<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> oddCount<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>array<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//如果数为基数新数组从头开始添加元素</span>
            <span class="token comment">//如果为偶数就从oddCount（数组中的奇数个数）开始添加元素</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">&amp;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> 
                newArray<span class="token punctuation">[</span>oddBegin<span class="token operator">++</span><span class="token punctuation">]</span><span class="token operator">=</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            <span class="token keyword">else</span> newArray<span class="token punctuation">[</span>oddCount<span class="token operator">++</span><span class="token punctuation">]</span><span class="token operator">=</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>array<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">=</span>newArray<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链表中倒数第k个节点" tabindex="-1"><a class="header-anchor" href="#链表中倒数第k个节点" aria-hidden="true">#</a> 链表中倒数第k个节点</h2>
<p><strong>题目描述：</strong></p>
<p>输入一个链表，输出该链表中倒数第k个结点</p>
<p><strong>问题分析：</strong></p>
<p><strong>一句话概括：</strong>
两个指针一个指针p1先开始跑，指针p1跑到k-1个节点后，另一个节点p2开始跑，当p1跑到最后时，p2所指的指针就是倒数第k个节点。</p>
<p><strong>思想的简单理解：</strong>
前提假设：链表的结点个数(长度)为n。
规律一：要找到倒数第k个结点，需要向前走多少步呢？比如倒数第一个结点，需要走n步，那倒数第二个结点呢？很明显是向前走了n-1步，所以可以找到规律是找到倒数第k个结点，需要向前走n-k+1步。</p>
<p><strong>算法开始：</strong></p>
<ol>
<li>设两个都指向head的指针p1和p2，当p1走了k-1步的时候，停下来。p2之前一直不动。</li>
<li>p1的下一步是走第k步，这个时候，p2开始一起动了。至于为什么p2这个时候动呢？看下面的分析。</li>
<li>当p1走到链表的尾部时，即p1走了n步。由于我们知道p2是在p1走了k-1步才开始动的，也就是说p1和p2永远差k-1步。所以当p1走了n步时，p2走的应该是在n-(k-1)步。即p2走了n-k+1步，此时巧妙的是p2正好指向的是规律一的倒数第k个结点处。
这样是不是很好理解了呢？</li>
</ol>
<p><strong>考察内容：</strong></p>
<p>链表+代码的鲁棒性</p>
<p><strong>示例代码：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">/*
//链表类
public class ListNode {
    int val;
    ListNode next = null;

    ListNode(int val) {
        this.val = val;
    }
}*/</span>

<span class="token comment">//时间复杂度O(n),一次遍历即可</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token class-name">FindKthToTail</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">,</span><span class="token keyword">int</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> pre<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">,</span>p<span class="token operator">=</span><span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">//两个指针都指向头结点</span>
        p<span class="token operator">=</span>head<span class="token punctuation">;</span>
        pre<span class="token operator">=</span>head<span class="token punctuation">;</span>
        <span class="token comment">//记录k值</span>
        <span class="token keyword">int</span> a<span class="token operator">=</span>k<span class="token punctuation">;</span>
        <span class="token comment">//记录节点的个数</span>
        <span class="token keyword">int</span> count<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">//p指针先跑，并且记录节点数，当p指针跑了k-1个节点后，pre指针开始跑，</span>
        <span class="token comment">//当p指针跑到最后时，pre所指指针就是倒数第k个节点</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>p<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            p<span class="token operator">=</span>p<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            count<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>k<span class="token operator">&lt;</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                pre<span class="token operator">=</span>pre<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            k<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//如果节点个数小于所求的倒数第k个节点，则返回空</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>count<span class="token operator">&lt;</span>a<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
            
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="反转链表" tabindex="-1"><a class="header-anchor" href="#反转链表" aria-hidden="true">#</a> 反转链表</h2>
<p><strong>题目描述：</strong></p>
<p>输入一个链表，反转链表后，输出链表的所有元素。</p>
<p><strong>问题分析：</strong></p>
<p>链表的很常规的一道题，这一道题思路不算难，但自己实现起来真的可能会感觉无从下手，我是参考了别人的代码。
思路就是我们根据链表的特点，前一个节点指向下一个节点的特点，把后面的节点移到前面来。
就比如下图：我们把1节点和2节点互换位置，然后再将3节点指向2节点，4节点指向3节点，这样以来下面的链表就被反转了。</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/844773c7300e4373922bb1a6ae2a55a3~tplv-k3u1fbpfcp-zoom-1.image" alt="链表" loading="lazy"></p>
<p><strong>考察内容：</strong></p>
<p>链表+代码的鲁棒性</p>
<p><strong>示例代码：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">/*
public class ListNode {
    int val;
    ListNode next = null;

    ListNode(int val) {
        this.val = val;
    }
}*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token class-name">ReverseList</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token class-name">ListNode</span> next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
       <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>head <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
              <span class="token comment">//保存要反转到头来的那个节点</span>
               next <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
               <span class="token comment">//要反转的那个节点指向已经反转的上一个节点</span>
               head<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
               <span class="token comment">//上一个已经反转到头部的节点</span>
               pre <span class="token operator">=</span> head<span class="token punctuation">;</span>
               <span class="token comment">//一直向链表尾走</span>
               head <span class="token operator">=</span> next<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="合并两个排序的链表" tabindex="-1"><a class="header-anchor" href="#合并两个排序的链表" aria-hidden="true">#</a> 合并两个排序的链表</h2>
<p><strong>题目描述：</strong></p>
<p>输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。</p>
<p><strong>问题分析：</strong></p>
<p>我们可以这样分析:</p>
<ol>
<li>假设我们有两个链表 A,B；</li>
<li>A的头节点A1的值与B的头结点B1的值比较，假设A1小，则A1为头节点；</li>
<li>A2再和B1比较，假设B1小,则，A1指向B1；</li>
<li>A2再和B2比较。。。。。。。
就这样循环往复就行了，应该还算好理解。</li>
</ol>
<p><strong>考察内容：</strong></p>
<p>链表+代码的鲁棒性</p>
<p><strong>示例代码：</strong></p>
<p>非递归版本：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">/*
public class ListNode {
    int val;
    ListNode next = null;

    ListNode(int val) {
        this.val = val;
    }
}*/</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token class-name">Merge</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> list1<span class="token punctuation">,</span><span class="token class-name">ListNode</span> list2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token comment">//list1为空，直接返回list2</span>
       <span class="token keyword">if</span><span class="token punctuation">(</span>list1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> list2<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//list2为空，直接返回list1</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>list2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> list1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token class-name">ListNode</span> mergeHead <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token class-name">ListNode</span> current <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>   
        <span class="token comment">//当list1和list2不为空时</span>
        <span class="token keyword">while</span><span class="token punctuation">(</span>list1<span class="token operator">!=</span><span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> list2<span class="token operator">!=</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">//取较小值作头结点 </span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>mergeHead <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                   mergeHead <span class="token operator">=</span> current <span class="token operator">=</span> list1<span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                   current<span class="token punctuation">.</span>next <span class="token operator">=</span> list1<span class="token punctuation">;</span>
                    <span class="token comment">//current节点保存list1节点的值因为下一次还要用</span>
                   current <span class="token operator">=</span> list1<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">//list1指向下一个节点</span>
                list1 <span class="token operator">=</span> list1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span><span class="token punctuation">(</span>mergeHead <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                   mergeHead <span class="token operator">=</span> current <span class="token operator">=</span> list2<span class="token punctuation">;</span>
                <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
                   current<span class="token punctuation">.</span>next <span class="token operator">=</span> list2<span class="token punctuation">;</span>
                     <span class="token comment">//current节点保存list2节点的值因为下一次还要用</span>
                   current <span class="token operator">=</span> list2<span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token comment">//list2指向下一个节点</span>
                list2 <span class="token operator">=</span> list2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>list1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            current<span class="token punctuation">.</span>next <span class="token operator">=</span> list2<span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            current<span class="token punctuation">.</span>next <span class="token operator">=</span> list1<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> mergeHead<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>递归版本：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token class-name">Merge</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> list1<span class="token punctuation">,</span><span class="token class-name">ListNode</span> list2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>list1 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> list2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>list2 <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> list1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        list1<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token class-name">Merge</span><span class="token punctuation">(</span>list1<span class="token punctuation">.</span>next<span class="token punctuation">,</span> list2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> list1<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        list2<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token class-name">Merge</span><span class="token punctuation">(</span>list1<span class="token punctuation">,</span> list2<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> list2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>       
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="用两个栈实现队列" tabindex="-1"><a class="header-anchor" href="#用两个栈实现队列" aria-hidden="true">#</a> 用两个栈实现队列</h2>
<p><strong>题目描述：</strong></p>
<p>用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。</p>
<p><strong>问题分析：</strong></p>
<p>先来回顾一下栈和队列的基本特点：
**栈：**后进先出（LIFO）
<strong>队列：</strong> 先进先出
很明显我们需要根据JDK给我们提供的栈的一些基本方法来实现。先来看一下Stack类的一些基本方法：
<img src="https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-4-4/5985000.jpg" alt="Stack类的一些常见方法" loading="lazy"></p>
<p>既然题目给了我们两个栈，我们可以这样考虑当push的时候将元素push进stack1，pop的时候我们先把stack1的元素pop到stack2，然后再对stack2执行pop操作，这样就可以保证是先进先出的。（负[pop]负[pop]得正[先进先出]）</p>
<p><strong>考察内容：</strong></p>
<p>队列+栈</p>
<p>示例代码：</p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token comment">//左程云的《程序员代码面试指南》的答案</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Stack</span></span><span class="token punctuation">;</span>
 
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> stack1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> stack2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
     
    <span class="token comment">//当执行push操作时，将元素添加到stack1</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">int</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stack1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
     
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//如果两个队列都为空则抛出异常,说明用户没有push进任何元素</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>stack1<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">&amp;&amp;</span>stack2<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">"Queue is empty!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//如果stack2不为空直接对stack2执行pop操作，</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>stack2<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>stack1<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//将stack1的元素按后进先出push进stack2里面</span>
                stack2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack1<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
          <span class="token keyword">return</span> stack2<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="栈的压入-弹出序列" tabindex="-1"><a class="header-anchor" href="#栈的压入-弹出序列" aria-hidden="true">#</a> 栈的压入,弹出序列</h2>
<p><strong>题目描述：</strong></p>
<p>输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否为该栈的弹出顺序。假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，序列4，5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。（注意：这两个序列的长度是相等的）</p>
<p><strong>题目分析：</strong></p>
<p>这道题想了半天没有思路，参考了Alias的答案，他的思路写的也很详细应该很容易看懂。
作者：Alias
<a href="https://www.nowcoder.com/questionTerminal/d77d11405cc7470d82554cb392585106" target="_blank" rel="noopener noreferrer">https://www.nowcoder.com/questionTerminal/d77d11405cc7470d82554cb392585106<ExternalLinkIcon/></a>
来源：牛客网</p>
<p>【思路】借用一个辅助的栈，遍历压栈顺序，先讲第一个放入栈中，这里是1，然后判断栈顶元素是不是出栈顺序的第一个元素，这里是4，很显然1≠4，所以我们继续压栈，直到相等以后开始出栈，出栈一个元素，则将出栈顺序向后移动一位，直到不相等，这样循环等压栈顺序遍历完成，如果辅助栈还不为空，说明弹出序列不是该栈的弹出顺序。</p>
<p>举例：</p>
<p>入栈1,2,3,4,5</p>
<p>出栈4,5,3,2,1</p>
<p>首先1入辅助栈，此时栈顶1≠4，继续入栈2</p>
<p>此时栈顶2≠4，继续入栈3</p>
<p>此时栈顶3≠4，继续入栈4</p>
<p>此时栈顶4＝4，出栈4，弹出序列向后一位，此时为5，,辅助栈里面是1,2,3</p>
<p>此时栈顶3≠5，继续入栈5</p>
<p>此时栈顶5=5，出栈5,弹出序列向后一位，此时为3，,辅助栈里面是1,2,3</p>
<p>….
依次执行，最后辅助栈为空。如果不为空说明弹出序列不是该栈的弹出顺序。</p>
<p><strong>考察内容：</strong></p>
<p>栈</p>
<p><strong>示例代码：</strong></p>
<div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Stack</span></span><span class="token punctuation">;</span>
<span class="token comment">//这道题没想出来，参考了Alias同学的答案：https://www.nowcoder.com/questionTerminal/d77d11405cc7470d82554cb392585106</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token class-name">IsPopOrder</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> pushA<span class="token punctuation">,</span><span class="token keyword">int</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> popA<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>pushA<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> popA<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Stack</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//用于标识弹出序列的位置</span>
        <span class="token keyword">int</span> popIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span> pushA<span class="token punctuation">.</span>length<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            s<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>pushA<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//如果栈不为空，且栈顶元素等于弹出序列</span>
            <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>s<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>s<span class="token punctuation">.</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> popA<span class="token punctuation">[</span>popIndex<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">//出栈</span>
                s<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">//弹出序列向后一位</span>
                popIndex<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> s<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">
<section class="footnotes">
<ol class="footnotes-list">
<li id="footnote1" class="footnote-item"><p>(n-1)/2 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p>
</li>
<li id="footnote2" class="footnote-item"><p>(n-1)/2 <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p>
</li>
</ol>
</section>
</div></template>
