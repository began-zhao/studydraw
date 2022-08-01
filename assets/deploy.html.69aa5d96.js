import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.1b4b1cb5.js";const t={},i=e(`<p>\u672C\u6587\u4ECB\u7ECD\u5982\u4F55\u5229\u7528 Git \u548C GitHub Action\uFF0C\u81EA\u52A8\u90E8\u7F72\u4EE3\u7801\u5230\u670D\u52A1\u5668\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u7531\u4E8E Centos \u4ECD\u7136\u662F\u7528 GitV1\uFF0C\u672C\u6559\u7A0B\u4F7F\u7528 Ubuntu 20.04 \u8FDB\u884C\u6559\u5B66\u3002</p></div><h2 id="\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668" aria-hidden="true">#</a> \u670D\u52A1\u5668</h2><p>\u4E3A\u4E86\u80FD\u4F9B\u81EA\u52A8\u90E8\u7F72\u5230\u670D\u52A1\u5668\uFF0C\u6211\u4EEC\u9700\u8981\u8BA9\u670D\u52A1\u5668\u7684\u7F51\u7AD9\u76EE\u5F55\u6210\u4E3A\u4E00\u4E2A Git \u4ED3\u5E93\uFF0C\u8FD9\u6837\u6211\u4EEC\u53EF\u4EE5\u5728 GitHub Actions \u4E2D\uFF0C\u901A\u8FC7\u5411\u670D\u52A1\u5668\u5BF9\u5E94 GitHub \u4ED3\u5E93\u63A8\u9001\u7F51\u7AD9\u5185\u5BB9\uFF0C\u4F7F\u670D\u52A1\u5668\u7F51\u7AD9\u83B7\u5F97\u81EA\u52A8\u66F4\u65B0\u3002\u4E0B\u9762\u662F\u670D\u52A1\u5668\u4FA7\u7684\u90E8\u7F72\u914D\u7F6E</p><h3 id="\u6DFB\u52A0\u8D26\u6237" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u8D26\u6237" aria-hidden="true">#</a> \u6DFB\u52A0\u8D26\u6237</h3><p>\u4E3A\u4E86\u5B89\u5168\uFF0C\u9996\u5148\u9700\u8981\u4F7F\u7528\u547D\u4EE4\u521B\u5EFA Git \u7528\u6237\uFF0C\u4E3A\u4E86\u5B89\u5168\u8BF7\u52A1\u5FC5\u8BBE\u7F6E\u5BC6\u7801\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> adduser <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E4B\u540E\uFF0C\u67E5\u770B\u90E8\u7F72\u76EE\u5F55\u6240\u5728\u7EC4\uFF0Cgit \u7528\u6237\u6DFB\u52A0\u5230\u7EC4\u4E2D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">usermod</span> -a -G <span class="token operator">&lt;</span>\u76EE\u5F55\u6240\u5728\u7EC4<span class="token operator">&gt;</span> <span class="token function">git</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u5C06\u90E8\u7F72\u76EE\u5F55\u7684\u6743\u9650\u8BBE\u7F6E\u4E3A <code>775</code>\uFF0C\u5373\u5141\u8BB8\u540C\u7EC4\u8BBF\u95EE\u3002\u8FD9\u6837 git \u5C31\u6709\u6743\u9650\u8BBF\u95EE\u90E8\u7F72\u76EE\u5F55\u3002</p><h3 id="\u6DFB\u52A0\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u6743\u9650" aria-hidden="true">#</a> \u6DFB\u52A0\u6743\u9650</h3><p>\u521B\u5EFA <code>~/.ssh/</code> \u6587\u4EF6\u5939\uFF0C\u751F\u6210 <code>authorized_keys</code> \u6587\u4EF6\uFF0C\u5E76\u8BBE\u7F6E\u5176\u6743\u9650\u4E3A <code>600</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p ~/.ssh/

<span class="token function">touch</span> ~/.ssh/authorized_keys

<span class="token function">chmod</span> <span class="token number">600</span> ~/.ssh/authorized_keys
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E4B\u540E\u5C06\u9700\u8981\u8D4B\u4E88\u6743\u9650\u7684\u7528\u6237\u516C\u94A5\u4F9D\u6B21\u7C98\u8D34\u81F3\u8BE5\u6587\u4EF6\uFF0C\u8FD9\u6837\u76F8\u5173\u7528\u6237\u5373\u53EF\u4EE5\u4F7F\u7528\u5BF9\u5E94\u79C1\u94A5\uFF0C\u5411\u670D\u52A1\u5668\u76F8\u5173\u4ED3\u5E93\u63A8\u9001\u4EE3\u7801\u3002</p><h3 id="\u521B\u5EFA\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4ED3\u5E93" aria-hidden="true">#</a> \u521B\u5EFA\u4ED3\u5E93</h3><p>\u56DE\u5230 <code>/home/git/</code>\uFF0C\u521B\u5EFA\u6240\u9700\u7684\u6587\u4EF6\u5939:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~
<span class="token function">mkdir</span> <span class="token operator">&lt;</span>\u4ED3\u5E93\u540D<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FDB\u5165\u6587\u4EF6\u5939\uFF0C\u4F7F\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> init --separate-git-dir<span class="token operator">=</span>. <span class="token operator">&lt;</span>\u90E8\u7F72\u4F4D\u7F6E<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8FD9\u4F1A\u5C06 git \u5E93\u4FDD\u6301\u5728 <code>/home/git/&lt;\u4ED3\u5E93\u540D&gt;</code> \u4E0B\uFF0C\u540C\u65F6\u5C06\u5DE5\u4F5C\u533A\u8BBE\u7F6E\u5230\u90E8\u7F72\u6587\u4EF6\u5939\u4E2D\u3002</p><p>\u63A5\u4E0B\u6765\u6267\u884C:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config receive.denyCurrentBranch ignore
<span class="token function">git</span> config --global --add safe.directory <span class="token operator">&lt;</span>\u90E8\u7F72\u6587\u4EF6\u5939<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container note"><p class="custom-container-title">\u6CE8</p><p>Git \u9ED8\u8BA4\u62D2\u7EDD\u5916\u90E8\u5BF9\u5F53\u524D\u5206\u652F\u7684\u63A8\u9001\u64CD\u4F5C\uFF0C\u56E0\u4E3A\u8FD9\u53EF\u80FD\u4F1A\u8986\u76D6\u6216\u53D8\u66F4\u5DE5\u4F5C\u533A\u6587\u4EF6\u3002\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u663E\u5F0F\u901A\u77E5 Git \u4E0D\u8981\u62D2\u7EDD\u5F53\u524D\u5206\u652F\u7684\u63A8\u9001\u64CD\u4F5C\u3002</p><p>\u53E6\u5916\u5728\u65B0\u7248\u672C Git \u4E2D\uFF0C\u8003\u8651\u5230\u5B89\u5168\u56E0\u7D20\uFF0CGit \u4F1A\u5728\u68C0\u51FA\u65F6\u68C0\u6D4B\u9879\u76EE\u6587\u4EF6\u5939\u662F\u5426\u5C5E\u4E8E\u5176\u4ED6\u7EC4\u6210\u5458\uFF0C\u5982\u679C\u68C0\u6D4B\u5230\u4F1A\u9ED8\u8BA4\u62D2\u7EDD\u76F8\u5173\u64CD\u4F5C\u4EE5\u9632\u6B62\u5176\u4ED6\u7528\u4E8E\u83B7\u53D6\u5230\u672C\u4E0D\u5E94\u8BE5\u83B7\u53D6\u5230\u7684\u4EE3\u7801\u4FE1\u606F\u3002\u56E0\u4E3A\u90E8\u7F72\u6587\u4EF6\u5939\u7684\u6240\u6709\u8005\u901A\u5E38\u4E0D\u4F1A\u662F git\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u6807\u8BB0\u5BF9\u5E94\u7684\u90E8\u7F72\u6587\u4EF6\u5939\u201C\u5B89\u5168\u201D\u3002</p></div><h2 id="github-actions" tabindex="-1"><a class="header-anchor" href="#github-actions" aria-hidden="true">#</a> GitHub Actions</h2><p>\u5728 GitHub \u4E00\u4FA7\uFF0C\u6211\u4EEC\u9700\u8981\u901A\u8FC7 GitHub Action\uFF0C\u5728\u65B0\u4EE3\u7801\u63A8\u9001\u65F6\u81EA\u52A8\u6784\u5EFA\u7F51\u7AD9\uFF0C\u5E76\u90E8\u7F72\u5230 GitHub \u7684 gh-pages \u5206\u652F\u3002\u4E4B\u540E\uFF0CGitHub Action \u5C06\u8BE5\u5206\u652F\u7684\u53D8\u52A8\u63A8\u9001\u670D\u52A1\u5668\u7684\u5BF9\u5E94\u4ED3\u5E93\uFF0C\u5B8C\u6210\u7F51\u7AD9\u7684\u81EA\u52A8\u90E8\u7F72\u3002</p><p>\u4E4B\u540E\u53EA\u9700\u8981\u4F7F\u7528 GitHub Action \u901A\u8FC7 Git \u63A8\u9001\u5230 <code>git@&lt;domain&gt;:&lt;\u90E8\u7F72\u76EE\u5F55&gt; gh-pages</code> \u5373\u53EF\u3002</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># \u81EA\u52A8\u90E8\u7F72\u7684\u540D\u79F0</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> GitHub pages deploy

<span class="token comment"># \u81EA\u52A8\u90E8\u7F72\u7684\u6761\u4EF6</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> master

<span class="token key atrule">jobs</span><span class="token punctuation">:</span>
  <span class="token comment"># \u6784\u5EFA\u7F51\u7AD9\u5E76\u90E8\u7F72\u5230 GitHub Pages</span>
  <span class="token key atrule">deploy-gh-pages</span><span class="token punctuation">:</span>
    <span class="token comment"># \u8FD0\u884C\u73AF\u5883</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token comment"># \u6B65\u9AA4</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># \u7B2C\u4E00\u6B65: \u4E0B\u8F7D\u6E90\u7801</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token comment"># action \u914D\u7F6E\u8BE6\u89C1 https://github.com/actions/checkout</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u5982\u679C\u672C\u9879\u76EE\u5305\u542B\u4E86\u5B50\u6A21\u5757 (git submodules)\uFF0C\u9700\u8981\u5C06\u6B64\u9879\u8BBE\u7F6E\u4E3A true</span>
          <span class="token comment"># submodules: true</span>

          <span class="token comment"># \u8FD9\u662F\u83B7\u53D6\u5386\u53F2 commit \u7684\u6DF1\u5EA6\uFF0C\u9ED8\u8BA4\u4E3A 1\uFF0C\u5373\u53EA\u62C9\u53D6\u6700\u540E\u4E00\u4E2A commit</span>
          <span class="token comment"># \u8FD9\u6837\u53EF\u4EE5\u52A0\u5FEB\u62C9\u53D6\u901F\u5EA6</span>
          <span class="token comment">#</span>
          <span class="token comment"># \u5982\u679C\u9879\u76EE\u4F7F\u7528 VuePress\uFF0C\u4E3A\u4E86\u6B63\u786E\u901A\u8FC7 Git \u5386\u53F2\u63D0\u4EA4\u8BB0\u5F55\u751F\u6210\u9875\u9762\u7684\u6700\u540E\u66F4\u65B0\u65F6\u95F4</span>
          <span class="token comment"># \u9700\u8981\u8BBE\u7F6E\u4E3A 0 \u4EE5\u62C9\u53D6\u5B8C\u6574\u7684 git \u5386\u53F2\u63D0\u4EA4</span>
          <span class="token comment"># fetch-depth: 0</span>

          <span class="token comment"># \u5982\u679C\u5B50\u6A21\u5757\u5305\u542B\u79C1\u6709\u4ED3\u5E93\uFF0C\u9700\u8981\u8BBE\u7F6E ssh key \u6216 token \u4EE5\u4FDD\u8BC1\u62E5\u6709\u62C9\u53D6\u76F8\u5E94\u4ED3\u5E93\u7684\u6743\u9650</span>
          <span class="token comment"># \u60A8\u53EF\u4EE5\u5C06 ssh-key \u8BBE\u7F6E\u4E3A github \u7ED1\u5B9A\u516C\u94A5\u5BF9\u5E94\u7684\u79C1\u94A5</span>
          <span class="token comment"># \u4E5F\u53EF\u4EE5\u65B0\u5EFA\u4E00\u4E2A\u5177\u6709\u76F8\u5173\u4ED3\u5E93\u8BBF\u95EE\u6743\u9650\u7684 github token</span>
          <span class="token comment"># token:</span>

      <span class="token comment"># \u7F13\u5B58 node_modules \u4EE5\u907F\u514D\u91CD\u590D\u5B89\u88C5</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/cache@v3
        <span class="token key atrule">id</span><span class="token punctuation">:</span> node<span class="token punctuation">-</span>modules
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u9700\u8981\u7F13\u5B58\u7684\u8DEF\u5F84</span>
          <span class="token key atrule">path</span><span class="token punctuation">:</span> node_modules/
          <span class="token comment"># \u7F13\u5B58\u7684 key</span>
          <span class="token key atrule">key</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> runner.os <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">-</span>node<span class="token punctuation">-</span>modules<span class="token punctuation">-</span>$<span class="token punctuation">{</span><span class="token punctuation">{</span> hashFiles(&#39;yarn.lock&#39;) <span class="token punctuation">}</span><span class="token punctuation">}</span>
          <span class="token comment"># \u6062\u590D key</span>
          <span class="token key atrule">restore-keys</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
            \${{ runner.os }}-node-modules-</span>

      <span class="token comment"># \u5B89\u88C5\u4F9D\u8D56</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install Deps
        <span class="token comment"># \u53EA\u6709\u6CA1\u6709\u547D\u4E2D\u7F13\u5B58\u624D\u4F1A\u6267\u884C</span>
        <span class="token key atrule">if</span><span class="token punctuation">:</span> steps.node<span class="token punctuation">-</span>modules.outputs.cache<span class="token punctuation">-</span>hit <span class="token tag">!=</span> &#39;true&#39;
        <span class="token comment"># \u4E25\u683C\u6309\u7167 yarn.lock \u5B89\u88C5\u4F9D\u8D56</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn install <span class="token punctuation">-</span><span class="token punctuation">-</span>frozen<span class="token punctuation">-</span>lockfile

      <span class="token comment"># \u6784\u5EFA\u9879\u76EE</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Build
        <span class="token comment"># \u9879\u76EE\u7684\u6784\u5EFA\u547D\u4EE4</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> yarn run build

      <span class="token comment"># \u7B2C\u56DB\u6B65\uFF0C\u90E8\u7F72</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token comment"># action \u914D\u7F6E\u8BE6\u89C1 https://github.com/JamesIves/github-pages-deploy-action</span>
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@v4
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u90E8\u7F72\u5230\u7684\u5206\u652F</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># \u9700\u8981\u90E8\u7F72\u7684\u6587\u4EF6\u5939</span>
          <span class="token key atrule">folder</span><span class="token punctuation">:</span> dist

  <span class="token comment"># \u90E8\u7F72\u5230\u670D\u52A1\u5668</span>
  <span class="token key atrule">deploy-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest
    <span class="token comment"># \u786E\u4FDD\u5728\u90E8\u7F72\u5230 GitHub Pages \u4E4B\u540E\u6267\u884C</span>
    <span class="token key atrule">needs</span><span class="token punctuation">:</span> deploy<span class="token punctuation">-</span>gh<span class="token punctuation">-</span>pages
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
      <span class="token comment"># \u68C0\u51FA\u7F51\u7AD9\u4EE3\u7801</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token comment"># \u68C0\u51FA gh-pages \u5206\u652F</span>
          <span class="token key atrule">ref</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
          <span class="token comment"># \u83B7\u53D6\u5168\u90E8\u7684\u5386\u53F2\u63D0\u4EA4</span>
          <span class="token key atrule">fetch-depth</span><span class="token punctuation">:</span> <span class="token number">0</span>

      <span class="token comment"># \u914D\u7F6E\u73AF\u5883</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Configuration environment
        <span class="token comment"># \u5199\u5165\u79C1\u94A5\u3001\u914D\u7F6E Git \u7528\u6237\u540D\uFF0C\u5199\u5165\u670D\u52A1\u5668\u5730\u5740</span>
        <span class="token comment"># \u60A8\u9700\u8981\u81EA\u884C\u5C06\u670D\u52A1\u5668\u7684\u79C1\u94A5\u5199\u5165 secrets \u7684 SSH_PRIVATE_KEY</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          mkdir -p ~/.ssh/
          echo &quot;\${{ secrets.SSH_PRIVATE_KEY }}&quot; &gt; ~/.ssh/id_rsa
          chmod 600 ~/.ssh/id_rsa
          ssh-keyscan &lt;your domain&gt; &gt;&gt; ~/.ssh/known_hosts
          git config --global user.name &#39;Your Name&#39;
          git config --global user.email &#39;You email&#39;</span>

      <span class="token comment"># \u90E8\u7F72\u5230\u670D\u52A1\u5668</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy
        <span class="token comment"># \u4F7F\u7528 Git \u5C06\u7F51\u7AD9\u4EE3\u7801\u5F3A\u5236\u63A8\u9001\u5230\u8FDC\u7A0B\u7684\u7F51\u7AD9\u76EE\u5F55</span>
        <span class="token comment"># \u5E76\u4F7F\u7528 SSH \u8FDE\u63A5\u670D\u52A1\u5668\u8FDB\u5165\u7F51\u7AD9\u76EE\u5F55\u624B\u52A8\u5207\u6362\u5230\u6700\u65B0\u63D0\u4EA4</span>
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          git push -f git@&lt;your domain&gt;:&lt;deploy dir&gt; gh-pages
          ssh git@&lt;your domain&gt; &quot;cd &lt;deploy dir&gt; &amp;&amp; git reset --hard HEAD&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27),l=[i];function c(p,o){return s(),a("div",null,l)}var r=n(t,[["render",c],["__file","deploy.html.vue"]]);export{r as default};
