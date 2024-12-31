import{_ as p,c as l,b as s,e as n,f as t,a as c,r as i,o as d,d as o}from"./app-DAwtq9VE.js";const h={},u={class:"table-of-contents"};function g(f,a){const e=i("router-link"),r=i("CommentService");return d(),l("div",null,[a[6]||(a[6]=s("h1",{id:"hashing",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#hashing"},[s("span",null,"Hashing")])],-1)),s("nav",u,[s("ul",null,[s("li",null,[n(e,{to:"#introduction"},{default:t(()=>a[0]||(a[0]=[o("Introduction")])),_:1})]),s("li",null,[n(e,{to:"#configuration"},{default:t(()=>a[1]||(a[1]=[o("Configuration")])),_:1})]),s("li",null,[n(e,{to:"#basic-usage"},{default:t(()=>a[2]||(a[2]=[o("Basic Usage")])),_:1}),s("ul",null,[s("li",null,[n(e,{to:"#hashing-passwords"},{default:t(()=>a[3]||(a[3]=[o("Hashing Passwords")])),_:1})]),s("li",null,[n(e,{to:"#verifying-that-a-password-matches-a-hash"},{default:t(()=>a[4]||(a[4]=[o("Verifying That A Password Matches A Hash")])),_:1})]),s("li",null,[n(e,{to:"#determining-if-a-password-needs-to-be-rehashed"},{default:t(()=>a[5]||(a[5]=[o("Determining If A Password Needs To Be Rehashed")])),_:1})])])])])]),a[7]||(a[7]=c(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>The Goravel <code>facades.Hash()</code> provides secure Argon2id and Bcrypt hashing for storing user passwords. If you are using one of the Goravel application starter kits, Argon2id will be used for registration and authentication by default.</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><p>The default hashing driver for your application is configured in your application&#39;s <code>config/hashing.go</code> configuration file. There are currently several supported drivers: Argon2id and Bcrypt.</p><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic Usage</span></a></h2><h3 id="hashing-passwords" tabindex="-1"><a class="header-anchor" href="#hashing-passwords"><span>Hashing Passwords</span></a></h3><p>You may hash a password by calling the <code>Make</code> method on the <code>facades.Hash()</code>:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">password<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Hash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Make</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="verifying-that-a-password-matches-a-hash" tabindex="-1"><a class="header-anchor" href="#verifying-that-a-password-matches-a-hash"><span>Verifying That A Password Matches A Hash</span></a></h3><p>The <code>Check</code> method provided by the Hash facade allows you to verify that a given plain-text string corresponds to a given hash:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">if</span> facades<span class="token punctuation">.</span><span class="token function">Hash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Check</span><span class="token punctuation">(</span><span class="token char">&#39;plain-text&#39;</span><span class="token punctuation">,</span> hashedPassword<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// The passwords match...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="determining-if-a-password-needs-to-be-rehashed" tabindex="-1"><a class="header-anchor" href="#determining-if-a-password-needs-to-be-rehashed"><span>Determining If A Password Needs To Be Rehashed</span></a></h3><p>The <code>NeedsRehash</code> method provided by the Hash facade allows you to determine if the work factor used by the hasher has changed since the password was hashed. Some applications choose to perform this check during the application&#39;s authentication process:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">if</span> facades<span class="token punctuation">.</span><span class="token function">Hash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">NeedsRehash</span><span class="token punctuation">(</span>hashed<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">     hashed <span class="token operator">=</span> facades<span class="token punctuation">.</span><span class="token function">Hash</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Make</span><span class="token punctuation">(</span><span class="token char">&#39;plain-text&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14)),n(r)])}const k=p(h,[["render",g],["__file","hashing.html.vue"]]),v=JSON.parse('{"path":"/security/hashing.html","title":"Hashing","lang":"en-US","frontmatter":{"description":"Hashing Introduction The Goravel facades.Hash() provides secure Argon2id and Bcrypt hashing for storing user passwords. If you are using one of the Goravel application starter k...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goravel.dev/zh/security/hashing.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/security/hashing.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/security/hashing.html"}],["meta",{"property":"og:description","content":"Hashing Introduction The Goravel facades.Hash() provides secure Argon2id and Bcrypt hashing for storing user passwords. If you are using one of the Goravel application starter k..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Hashing\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[]},{"level":2,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[{"level":3,"title":"Hashing Passwords","slug":"hashing-passwords","link":"#hashing-passwords","children":[]},{"level":3,"title":"Verifying That A Password Matches A Hash","slug":"verifying-that-a-password-matches-a-hash","link":"#verifying-that-a-password-matches-a-hash","children":[]},{"level":3,"title":"Determining If A Password Needs To Be Rehashed","slug":"determining-if-a-password-needs-to-be-rehashed","link":"#determining-if-a-password-needs-to-be-rehashed","children":[]}]}],"git":{},"filePathRelative":"security/hashing.md","autoDesc":true}');export{k as comp,v as data};
