import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as n,e as t}from"./app.15378688.js";const s={},p=t(`<h1 id="\u7BA1\u7406\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u7406\u5DE5\u5177" aria-hidden="true">#</a> \u7BA1\u7406\u5DE5\u5177</h1><h2 id="apt-get" tabindex="-1"><a class="header-anchor" href="#apt-get" aria-hidden="true">#</a> apt-get</h2><p><code>apt-get</code> \u547D\u4EE4\u9ED8\u8BA4\u7684\u6E90\u5728\u56FD\u5185\u8BBF\u95EE\u5F88\u6162\uFF0C\u53EF\u4EE5\u8003\u8651\u6362\u6E90\u3002</p><ul><li><p>\u83B7\u53D6\u8F6F\u4EF6\u5305\u66F4\u65B0:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u66F4\u65B0\u8F6F\u4EF6\u5305:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt-get</span> update
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5176\u4ED6\u547D\u4EE4<a href="%E5%85%B6%E4%BB%96%E5%91%BD%E4%BB%A4">^order</a></p></li></ul><pre><code>\`\`\`bash
apt-cache search # ------(package \u641C\u7D22\u5305)

apt-cache show #------(package \u83B7\u53D6\u5305\u7684\u76F8\u5173\u4FE1\u606F\uFF0C\u5982\u8BF4\u660E\u3001\u5927\u5C0F\u3001\u7248\u672C\u7B49)

sudo apt-get install # ------(package \u5B89\u88C5\u5305)sudo apt-get install # -----(package - - reinstall \u91CD\u65B0\u5B89\u88C5\u5305)

sudo apt-get -f install # -----(\u5F3A\u5236\u5B89\u88C5?#&quot;-f = --fix-missing&quot;\u5F53\u662F\u4FEE\u590D\u5B89\u88C5\u5427...)

sudo apt-get remove #-----(package \u5220\u9664\u5305)

sudo apt-get remove - - purge # ------(package \u5220\u9664\u5305\uFF0C\u5305\u62EC\u5220\u9664\u914D\u7F6E\u6587\u4EF6\u7B49)

sudo apt-get autoremove --purge # ----(package \u5220\u9664\u5305\u53CA\u5176\u4F9D\u8D56\u7684\u8F6F\u4EF6\u5305+\u914D\u7F6E\u6587\u4EF6\u7B49(\u53EA\u5BF96.10\u6709\u6548\uFF0C\u5F3A\u70C8\u63A8\u8350))

sudo apt-get update #------\u66F4\u65B0\u6E90

sudo apt-get upgrade #------\u66F4\u65B0\u5DF2\u5B89\u88C5\u7684\u5305

sudo apt-get dist-upgrade # ---------\u5347\u7EA7\u7CFB\u7EDF

sudo apt-get dselect-upgrade #------\u4F7F\u7528 dselect \u5347\u7EA7

apt-cache depends #-------(package \u4E86\u89E3\u4F7F\u7528\u4F9D\u8D56)

apt-cache rdepends # ------(package \u4E86\u89E3\u67D0\u4E2A\u5177\u4F53\u7684\u4F9D\u8D56?#\u5F53\u662F\u67E5\u770B\u8BE5\u5305\u88AB\u54EA\u4E9B\u5305\u4F9D\u8D56\u5427...)

sudo apt-get build-dep # ------(package \u5B89\u88C5\u76F8\u5173\u7684\u7F16\u8BD1\u73AF\u5883)

apt-get source #------(package \u4E0B\u8F7D\u8BE5\u5305\u7684\u6E90\u4EE3\u7801)

sudo apt-get clean &amp;&amp; sudo apt-get autoclean # --------\u6E05\u7406\u4E0B\u8F7D\u6587\u4EF6\u7684\u5B58\u6863 &amp;&amp; \u53EA\u6E05\u7406\u8FC7\u65F6\u7684\u5305

sudo apt-get check #-------\u68C0\u67E5\u662F\u5426\u6709\u635F\u574F\u7684\u4F9D\u8D56
\`\`\`
</code></pre><h2 id="snap" tabindex="-1"><a class="header-anchor" href="#snap" aria-hidden="true">#</a> Snap</h2><p>\u5DF2\u7ECF\u9884\u88C5\u3002</p><p>\u5728\u4E2D\u56FD\u5927\u9646\u4E0D\u5EFA\u8BAE\u4F7F\u7528 Snap</p>`,8),d=[p];function c(r,i){return a(),n("div",null,d)}var u=e(s,[["render",c],["__file","manage.html.vue"]]);export{u as default};
