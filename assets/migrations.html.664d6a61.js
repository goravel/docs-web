import{_ as o,r as p,o as c,c as l,b as s,d as e,w as t,e as n,f as d}from"./app.8de5b488.js";const i={},r=s("h1",{id:"\u6570\u636E\u5E93\u8FC1\u79FB",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u6570\u636E\u5E93\u8FC1\u79FB","aria-hidden":"true"},"#"),n(" \u6570\u636E\u5E93\u8FC1\u79FB")],-1),u={class:"table-of-contents"},k=n("\u4ECB\u7ECD"),_=n("\u751F\u6210\u8FC1\u79FB"),m=n("\u5FEB\u6377\u751F\u6210"),v=d(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>\u5F53\u591A\u4EBA\u534F\u4F5C\u5F00\u53D1\u5E94\u7528\u7A0B\u5E8F\u65F6\uFF0C\u5982\u679C\u540C\u6B65\u6570\u636E\u5E93\u7ED3\u6784\u6CA1\u6709\u4E00\u4E2A\u7EDF\u4E00\u7684\u89C4\u8303\uFF0C\u4EE5\u4FDD\u8BC1\u6240\u6709\u4EBA\u7684\u672C\u5730\u6570\u636E\u90FD\u662F\u4E00\u81F4\u7684\uFF0C\u90A3\u5C06\u662F\u707E\u96BE\u3002\u6570\u636E\u5E93\u8FC1\u79FB\u5C31\u662F\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5C06\u6570\u636E\u5E93\u7684\u7ED3\u6784\u8FDB\u884C\u7248\u672C\u63A7\u5236\uFF0C\u4EE5\u4FDD\u8BC1\u6240\u6709\u5F00\u53D1\u4EBA\u5458\u7684\u6570\u636E\u5E93\u7ED3\u6784\u7684\u4E00\u81F4\u6027\u3002</p><h2 id="\u751F\u6210\u8FC1\u79FB" tabindex="-1"><a class="header-anchor" href="#\u751F\u6210\u8FC1\u79FB" aria-hidden="true">#</a> \u751F\u6210\u8FC1\u79FB</h2><p>\u4F7F\u7528 <code>make:migration</code> \u547D\u4EE4\u6765\u521B\u5EFA\u8FC1\u79FB\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">go</span> run <span class="token punctuation">.</span> artisan <span class="token builtin">make</span><span class="token punctuation">:</span>migration create_users_table
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u8BE5\u547D\u4EE4\u4F1A\u5728 <code>database/migrations</code> \u76EE\u5F55\u4E0B\u751F\u6210\u8FC1\u79FB\u6587\u4EF6\uFF0C\u6240\u6709\u8FC1\u79FB\u6587\u4EF6\u90FD\u4EE5\u4E00\u4E2A\u65F6\u95F4\u6233\u4E3A\u5F00\u5934\uFF0CGoravel \u5C06\u4EE5\u6B64\u4F5C\u4E3A\u8FC1\u79FB\u6587\u4EF6\u7684\u6267\u884C\u987A\u5E8F\u3002\u6240\u6709\u7684\u8FC1\u79FB\u6587\u4EF6\u90FD\u662F <code>.sql</code> \u6587\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 SQL \u8BED\u53E5\u81EA\u5B9A\u4E49\u8868\u7ED3\u6784\u3002</p><p>\u8FC1\u79FB\u547D\u4EE4\u4F1A\u540C\u65F6\u751F\u6210\u4E24\u4E2A\u8FC1\u79FB\u6587\u4EF6\uFF1A<code>***.up.sql</code>\u3001<code>***.down.sql</code>\uFF0C\u5206\u522B\u5BF9\u5E94\u6267\u884C\u3001\u56DE\u6EDA\u3002</p><h2 id="\u5FEB\u6377\u751F\u6210" tabindex="-1"><a class="header-anchor" href="#\u5FEB\u6377\u751F\u6210" aria-hidden="true">#</a> \u5FEB\u6377\u751F\u6210</h2><p>\u4F7F\u7528 <code>create_users_table</code> \u5C06\u4F1A\u81EA\u52A8\u751F\u6210\u5305\u542B <code>users</code> \u57FA\u7840\u7ED3\u6784\u7684\u8868\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> users <span class="token punctuation">(</span>
  id <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token keyword">unsigned</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span>
  created_at <span class="token keyword">datetime</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  updated_at <span class="token keyword">datetime</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">KEY</span> idx_users_created_at <span class="token punctuation">(</span>created_at<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token keyword">KEY</span> idx_users_updated_at <span class="token punctuation">(</span>updated_at<span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span> <span class="token operator">=</span> <span class="token keyword">InnoDB</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span> <span class="token operator">=</span> DummyDatabaseCharset<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9E\u73B0\u539F\u7406\u662F\u6839\u636E\u6B63\u5219\u8FDB\u884C\u5339\u914D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>^create_(\\w+)_table$
^create_(\\w+)$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528 <code>add_avatar_to_users_table</code> \u5C06\u4F1A\u81EA\u52A8\u751F\u6210\u5411 <code>users</code> \u8868\u589E\u52A0\u5B57\u6BB5\u7684\u7ED3\u6784\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token keyword">ALTER</span> <span class="token keyword">TABLE</span> users <span class="token keyword">ADD</span> <span class="token keyword">column</span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B9E\u73B0\u539F\u7406\u662F\u6839\u636E\u6B63\u5219\u8FDB\u884C\u5339\u914D\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>_(to|from|in)_(\\w+)_table$
_(to|from|in)_(\\w+)$
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u672A\u5339\u914D\u5230\u4E0A\u8FF0\u60C5\u51B5\u65F6\uFF0C\u6846\u67B6\u4F1A\u751F\u6210\u4E00\u4E2A\u7A7A\u7684\u8FC1\u79FB\u6587\u4EF6\u3002</p>`,17);function b(h,g){const a=p("router-link");return c(),l("div",null,[r,s("nav",u,[s("ul",null,[s("li",null,[e(a,{to:"#\u4ECB\u7ECD"},{default:t(()=>[k]),_:1})]),s("li",null,[e(a,{to:"#\u751F\u6210\u8FC1\u79FB"},{default:t(()=>[_]),_:1})]),s("li",null,[e(a,{to:"#\u5FEB\u6377\u751F\u6210"},{default:t(()=>[m]),_:1})])])]),v])}const y=o(i,[["render",b],["__file","migrations.html.vue"]]);export{y as default};
