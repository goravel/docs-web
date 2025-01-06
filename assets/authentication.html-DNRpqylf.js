import{_ as l,c,b as s,e as a,f as t,a as u,r as i,o as r,d as o}from"./app-B8FHsz6d.js";const d={},k={class:"table-of-contents"};function g(h,n){const e=i("router-link"),p=i("CommentService");return r(),c("div",null,[n[11]||(n[11]=s("h1",{id:"authentication",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#authentication"},[s("span",null,"Authentication")])],-1)),s("nav",k,[s("ul",null,[s("li",null,[a(e,{to:"#introduction"},{default:t(()=>n[0]||(n[0]=[o("Introduction")])),_:1})]),s("li",null,[a(e,{to:"#configuration"},{default:t(()=>n[1]||(n[1]=[o("Configuration")])),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#configure-ttl-for-different-guards"},{default:t(()=>n[2]||(n[2]=[o("Configure TTL for different Guards")])),_:1})])])]),s("li",null,[a(e,{to:"#generate-jwt-token"},{default:t(()=>n[3]||(n[3]=[o("Generate JWT Token")])),_:1})]),s("li",null,[a(e,{to:"#generate-token-using-user"},{default:t(()=>n[4]||(n[4]=[o("Generate Token Using User")])),_:1})]),s("li",null,[a(e,{to:"#generate-token-using-id"},{default:t(()=>n[5]||(n[5]=[o("Generate Token Using ID")])),_:1})]),s("li",null,[a(e,{to:"#parse-token"},{default:t(()=>n[6]||(n[6]=[o("Parse Token")])),_:1})]),s("li",null,[a(e,{to:"#get-user"},{default:t(()=>n[7]||(n[7]=[o("Get User")])),_:1})]),s("li",null,[a(e,{to:"#refresh-token"},{default:t(()=>n[8]||(n[8]=[o("Refresh Token")])),_:1})]),s("li",null,[a(e,{to:"#logout"},{default:t(()=>n[9]||(n[9]=[o("Logout")])),_:1})]),s("li",null,[a(e,{to:"#multiple-guards"},{default:t(()=>n[10]||(n[10]=[o("Multiple Guards")])),_:1})])])]),n[12]||(n[12]=u(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>Authentication is an indispensable feature in Web Applications, the <code>facades.Auth()</code> module of Goravel provides support for JWT.</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><p>You can configure <code>defaults</code> guard and multiple <code>guards</code> in the <code>config/auth.go</code> file to switch different user identities in the application.</p><p>You can configure the parameters of JWT in the <code>config/jwt.go</code> file, such as <code>secret</code>, <code>ttl</code>, <code>refresh_ttl</code>.</p><h3 id="configure-ttl-for-different-guards" tabindex="-1"><a class="header-anchor" href="#configure-ttl-for-different-guards"><span>Configure TTL for different Guards</span></a></h3><p>You can set TTL for each Guard separately in the <code>config/auth.go</code> file, if not set, the <code>jwt.ttl</code> configuration is used by default.</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token comment">// config/auth.go</span></span>
<span class="line"><span class="token string">&quot;guards&quot;</span><span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>any<span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">&quot;user&quot;</span><span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>any<span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;driver&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;jwt&quot;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token operator">++</span>  <span class="token string">&quot;ttl&quot;</span><span class="token punctuation">:</span> <span class="token number">60</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generate-jwt-token" tabindex="-1"><a class="header-anchor" href="#generate-jwt-token"><span>Generate JWT Token</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">go run <span class="token builtin class-name">.</span> artisan jwt:secret</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="generate-token-using-user" tabindex="-1"><a class="header-anchor" href="#generate-token-using-user"><span>Generate Token Using User</span></a></h2><p>You can generate a token by Model, there is no extra configuration if the model uses <code>orm.Model</code>, otherwise, you need to configure Tag on the model primary key field, for example:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">  ID <span class="token builtin">uint</span> <span class="token string">\`gorm:&quot;primaryKey&quot;\`</span></span>
<span class="line">  Name <span class="token builtin">string</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">var</span> user models<span class="token punctuation">.</span>User</span>
<span class="line">user<span class="token punctuation">.</span>ID <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">token<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Login</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generate-token-using-id" tabindex="-1"><a class="header-anchor" href="#generate-token-using-id"><span>Generate Token Using ID</span></a></h2><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">token<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">LoginUsingID</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="parse-token" tabindex="-1"><a class="header-anchor" href="#parse-token"><span>Parse Token</span></a></h2><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">payload<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Through <code>payload</code> you can get:</p><ol><li><code>Guard</code>: Current Guard;</li><li><code>Key</code>: User flag;</li><li><code>ExpireAt</code>: Expire time;</li><li><code>IssuedAt</code>: Issued time;</li></ol><blockquote><p>If <code>err</code> isn&#39;t nil other than <code>ErrorTokenExpired</code>, the payload should be nil.</p></blockquote><p>You can judge whether the Token is expired by err:</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token string">&quot;errors&quot;</span></span>
<span class="line"><span class="token string">&quot;github.com/goravel/framework/auth&quot;</span></span>
<span class="line"></span>
<span class="line">errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> auth<span class="token punctuation">.</span>ErrorTokenExpired<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>The token can be parsed normally with or without the Bearer prefix.</p></blockquote><h2 id="get-user" tabindex="-1"><a class="header-anchor" href="#get-user"><span>Get User</span></a></h2><p>You need to generate a Token by <code>Parse</code> before getting a user, the process can be handled in HTTP middleware.</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">var</span> user models<span class="token punctuation">.</span>User</span>
<span class="line">err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">User</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span> <span class="token comment">// Must point</span></span>
<span class="line">id<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ID</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refresh-token" tabindex="-1"><a class="header-anchor" href="#refresh-token"><span>Refresh Token</span></a></h2><p>You need to generate a Token by <code>Parse</code> before refreshing the user.</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">token<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="logout" tabindex="-1"><a class="header-anchor" href="#logout"><span>Logout</span></a></h2><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="multiple-guards" tabindex="-1"><a class="header-anchor" href="#multiple-guards"><span>Multiple Guards</span></a></h2><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">token<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Guard</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">LoginUsingID</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Guard</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span></span>
<span class="line">token<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Guard</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">User</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>When the default guard is not used, the <code>Guard</code> method must be called before calling the above methods.</p></blockquote>`,34)),a(p)])}const m=l(d,[["render",g],["__file","authentication.html.vue"]]),v=JSON.parse('{"path":"/security/authentication.html","title":"Authentication","lang":"en-US","frontmatter":{"description":"Authentication Introduction Authentication is an indispensable feature in Web Applications, the facades.Auth() module of Goravel provides support for JWT. Configuration You can ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goravel.dev/zh/security/authentication.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/security/authentication.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/security/authentication.html"}],["meta",{"property":"og:description","content":"Authentication Introduction Authentication is an indispensable feature in Web Applications, the facades.Auth() module of Goravel provides support for JWT. Configuration You can ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Authentication\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"Configure TTL for different Guards","slug":"configure-ttl-for-different-guards","link":"#configure-ttl-for-different-guards","children":[]}]},{"level":2,"title":"Generate JWT Token","slug":"generate-jwt-token","link":"#generate-jwt-token","children":[]},{"level":2,"title":"Generate Token Using User","slug":"generate-token-using-user","link":"#generate-token-using-user","children":[]},{"level":2,"title":"Generate Token Using ID","slug":"generate-token-using-id","link":"#generate-token-using-id","children":[]},{"level":2,"title":"Parse Token","slug":"parse-token","link":"#parse-token","children":[]},{"level":2,"title":"Get User","slug":"get-user","link":"#get-user","children":[]},{"level":2,"title":"Refresh Token","slug":"refresh-token","link":"#refresh-token","children":[]},{"level":2,"title":"Logout","slug":"logout","link":"#logout","children":[]},{"level":2,"title":"Multiple Guards","slug":"multiple-guards","link":"#multiple-guards","children":[]}],"git":{},"filePathRelative":"security/authentication.md","autoDesc":true}');export{m as comp,v as data};