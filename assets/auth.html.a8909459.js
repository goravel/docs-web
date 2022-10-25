import{_ as o,r as i,o as c,c as p,b as n,d as e,w as t,e as a,f as u}from"./app.8de5b488.js";const r={},l=n("h1",{id:"authentication",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#authentication","aria-hidden":"true"},"#"),a(" Authentication")],-1),d={class:"table-of-contents"},k=a("Introdution"),h=a("Configration"),g=a("Generate Token Using User"),m=a("Generate Token Using ID"),f=a("Parse Token"),v=a("Get User"),b=a("Refrech Token"),_=a("Logout"),x=a("Multiple Guards"),T=u(`<h2 id="introdution" tabindex="-1"><a class="header-anchor" href="#introdution" aria-hidden="true">#</a> Introdution</h2><p>Authentication is an indispensable feature in Web Applications, the <code>facades.Auth</code> module of Goravel provides support for JWT.</p><h2 id="configration" tabindex="-1"><a class="header-anchor" href="#configration" aria-hidden="true">#</a> Configration</h2><p>You can configure default guard and multiple guards in the <code>config/auth.go</code> file to switch different user identities in the application.</p><p>You can configure parameters of JWT in the <code>config/jwt.go</code> file, such as <code>secret</code>, <code>ttl</code>, <code>refresh_ttl</code>.</p><h2 id="generate-token-using-user" tabindex="-1"><a class="header-anchor" href="#generate-token-using-user" aria-hidden="true">#</a> Generate Token Using User</h2><p>You can generate Token by Model, there is no extra configuration if the model use <code>orm.Model</code>, otherwise, you need to configure Tag on the model permary key filed, for example:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  ID <span class="token builtin">uint</span> <span class="token string">\`gorm:&quot;primaryKey&quot;\`</span>
  Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> user models<span class="token punctuation">.</span>User
user<span class="token punctuation">.</span>ID <span class="token operator">=</span> <span class="token number">1</span>

token<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Auth<span class="token punctuation">.</span><span class="token function">User</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="generate-token-using-id" tabindex="-1"><a class="header-anchor" href="#generate-token-using-id" aria-hidden="true">#</a> Generate Token Using ID</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>token<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Auth<span class="token punctuation">.</span><span class="token function">LoginUsingID</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="parse-token" tabindex="-1"><a class="header-anchor" href="#parse-token" aria-hidden="true">#</a> Parse Token</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Auth<span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> token<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can judge whether the Token is expired by err:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token string">&quot;errors&quot;</span>
<span class="token string">&quot;github.com/goravel/framework/auth&quot;</span>

errros<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> auth<span class="token punctuation">.</span>ErrorTokenExpired<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Token can be parsed normally with or without Bearer prefix.</p></blockquote><h2 id="get-user" tabindex="-1"><a class="header-anchor" href="#get-user" aria-hidden="true">#</a> Get User</h2><p>You need to generate Token by <code>Parse</code> before getting user, the process can be handled in HTTP middleware.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> user models<span class="token punctuation">.</span>User
err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Auth<span class="token punctuation">.</span><span class="token function">User</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>user<span class="token punctuation">)</span><span class="token comment">// Must point</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="refrech-token" tabindex="-1"><a class="header-anchor" href="#refrech-token" aria-hidden="true">#</a> Refrech Token</h2><p>You need to generate Token by <code>Parse</code> before refreshing user.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>token<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Auth<span class="token punctuation">.</span><span class="token function">Refresh</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="logout" tabindex="-1"><a class="header-anchor" href="#logout" aria-hidden="true">#</a> Logout</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Auth<span class="token punctuation">.</span><span class="token function">Logout</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="multiple-guards" tabindex="-1"><a class="header-anchor" href="#multiple-guards" aria-hidden="true">#</a> Multiple Guards</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>token<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Auth<span class="token punctuation">.</span><span class="token function">Guard</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">LoginUsingID</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Auth<span class="token punctuation">.</span><span class="token function">Guard</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> token<span class="token punctuation">)</span>
token<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Auth<span class="token punctuation">.</span><span class="token function">Guard</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">User</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>When don&#39;t use default guard, the <code>Guard</code> method needs to be called beforehand when calling the above methods.</p></blockquote>`,27);function q(U,w){const s=i("router-link");return c(),p("div",null,[l,n("nav",d,[n("ul",null,[n("li",null,[e(s,{to:"#introdution"},{default:t(()=>[k]),_:1})]),n("li",null,[e(s,{to:"#configration"},{default:t(()=>[h]),_:1})]),n("li",null,[e(s,{to:"#generate-token-using-user"},{default:t(()=>[g]),_:1})]),n("li",null,[e(s,{to:"#generate-token-using-id"},{default:t(()=>[m]),_:1})]),n("li",null,[e(s,{to:"#parse-token"},{default:t(()=>[f]),_:1})]),n("li",null,[e(s,{to:"#get-user"},{default:t(()=>[v]),_:1})]),n("li",null,[e(s,{to:"#refrech-token"},{default:t(()=>[b]),_:1})]),n("li",null,[e(s,{to:"#logout"},{default:t(()=>[_]),_:1})]),n("li",null,[e(s,{to:"#multiple-guards"},{default:t(()=>[x]),_:1})])])]),T])}const A=o(r,[["render",q],["__file","auth.html.vue"]]);export{A as default};
