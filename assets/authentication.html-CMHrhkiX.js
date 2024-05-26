import{_ as c,r as o,o as l,c as i,a as n,b as a,w as e,e as u,d as t}from"./app-BlqL-mNw.js";const r={},d=n("h1",{id:"用户认证",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#用户认证"},[n("span",null,"用户认证")])],-1),k={class:"table-of-contents"},h=u(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>用户认证是 Web 应用中不可或缺的功能，Goravel 的 <code>facades.Auth()</code> 模块提供 JWT 功能的支持。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>可以在 <code>config/auth.go</code> 文件中配置默认守卫与多个守卫，以便在应用中进行不同用户身份的切换。</p><p>可以在 <code>config/jwt.go</code> 文件中配置 JWT 的相关参数，如秘钥、有效时长、可刷新时长等。</p><h2 id="生成-jwt-token" tabindex="-1"><a class="header-anchor" href="#生成-jwt-token"><span>生成 JWT Token</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go run <span class="token builtin class-name">.</span> artisan jwt:secret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="根据用户生成-token" tabindex="-1"><a class="header-anchor" href="#根据用户生成-token"><span>根据用户生成 Token</span></a></h2><p>可以根据模型来生成 Token，如果模型使用了 <code>orm.Model</code> 则无需额外配置，否则，在模型主键字段上需要配置 Tag，例如：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  ID <span class="token builtin">uint</span> <span class="token string">\`gorm:&quot;primaryKey&quot;\`</span>
  Name <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> user models<span class="token punctuation">.</span>User
user<span class="token punctuation">.</span>ID <span class="token operator">=</span> <span class="token number">1</span>

token<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Login</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="根据用户-id-生成-token" tabindex="-1"><a class="header-anchor" href="#根据用户-id-生成-token"><span>根据用户 ID 生成 Token</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>token<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">LoginUsingID</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="解析-token" tabindex="-1"><a class="header-anchor" href="#解析-token"><span>解析 Token</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>payload<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> token<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>可以通过 <code>payload</code> 获取：</p><ol><li><code>Guard</code>: 当前 Guard；</li><li><code>Key</code>: 用户标识；</li><li><code>ExpireAt</code>: 过期时间；</li><li><code>IssuedAt</code>: 发行时间；</li></ol><blockquote><p>当 <code>err</code> 为非 <code>ErrorTokenExpired</code> 的错误时，payload == nil</p></blockquote><p>可以通过 <code>err</code> 来判断 <code>Token</code> 是否过期：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token string">&quot;errors&quot;</span>
<span class="token string">&quot;github.com/goravel/framework/auth&quot;</span>

errors<span class="token punctuation">.</span><span class="token function">Is</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> auth<span class="token punctuation">.</span>ErrorTokenExpired<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Token 带不带 Bearer 前缀均可正常解析。</p></blockquote><h2 id="获取用户" tabindex="-1"><a class="header-anchor" href="#获取用户"><span>获取用户</span></a></h2><p>获取用户前需要先调用 <code>Parse</code> 解析 Token，这个过程可以在 HTTP 中间件中处理。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">var</span> user models<span class="token punctuation">.</span>User
err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">User</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>user<span class="token punctuation">)</span> <span class="token comment">// 必须是指针</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="刷新-token" tabindex="-1"><a class="header-anchor" href="#刷新-token"><span>刷新 Token</span></a></h2><p>刷新 Token 前需要先调用 <code>Parse</code> 解析 Token。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>token<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Refresh</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="登出" tabindex="-1"><a class="header-anchor" href="#登出"><span>登出</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Logout</span><span class="token punctuation">(</span>ctx<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="多用户授权" tabindex="-1"><a class="header-anchor" href="#多用户授权"><span>多用户授权</span></a></h2><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>token<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Guard</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">LoginUsingID</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Guard</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Parse</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> token<span class="token punctuation">)</span>
token<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Auth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Guard</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">User</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> <span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>当不使用默认授权时，在调用上述方法时都需要前置调用 <code>Guard</code> 方法。</p></blockquote>`,31);function g(v,m){const s=o("router-link"),p=o("CommentService");return l(),i("div",null,[d,n("nav",k,[n("ul",null,[n("li",null,[a(s,{to:"#简介"},{default:e(()=>[t("简介")]),_:1})]),n("li",null,[a(s,{to:"#配置"},{default:e(()=>[t("配置")]),_:1})]),n("li",null,[a(s,{to:"#生成-jwt-token"},{default:e(()=>[t("生成 JWT Token")]),_:1})]),n("li",null,[a(s,{to:"#根据用户生成-token"},{default:e(()=>[t("根据用户生成 Token")]),_:1})]),n("li",null,[a(s,{to:"#根据用户-id-生成-token"},{default:e(()=>[t("根据用户 ID 生成 Token")]),_:1})]),n("li",null,[a(s,{to:"#解析-token"},{default:e(()=>[t("解析 Token")]),_:1})]),n("li",null,[a(s,{to:"#获取用户"},{default:e(()=>[t("获取用户")]),_:1})]),n("li",null,[a(s,{to:"#刷新-token"},{default:e(()=>[t("刷新 Token")]),_:1})]),n("li",null,[a(s,{to:"#登出"},{default:e(()=>[t("登出")]),_:1})]),n("li",null,[a(s,{to:"#多用户授权"},{default:e(()=>[t("多用户授权")]),_:1})])])]),h,a(p)])}const b=c(r,[["render",g],["__file","authentication.html.vue"]]),x=JSON.parse('{"path":"/zh/security/authentication.html","title":"用户认证","lang":"zh-CN","frontmatter":{"description":"用户认证 简介 用户认证是 Web 应用中不可或缺的功能，Goravel 的 facades.Auth() 模块提供 JWT 功能的支持。 配置 可以在 config/auth.go 文件中配置默认守卫与多个守卫，以便在应用中进行不同用户身份的切换。 可以在 config/jwt.go 文件中配置 JWT 的相关参数，如秘钥、有效时长、可刷新时长等。 ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/security/authentication.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/security/authentication.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/security/authentication.html"}],["meta",{"property":"og:description","content":"用户认证 简介 用户认证是 Web 应用中不可或缺的功能，Goravel 的 facades.Auth() 模块提供 JWT 功能的支持。 配置 可以在 config/auth.go 文件中配置默认守卫与多个守卫，以便在应用中进行不同用户身份的切换。 可以在 config/jwt.go 文件中配置 JWT 的相关参数，如秘钥、有效时长、可刷新时长等。 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"用户认证\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"生成 JWT Token","slug":"生成-jwt-token","link":"#生成-jwt-token","children":[]},{"level":2,"title":"根据用户生成 Token","slug":"根据用户生成-token","link":"#根据用户生成-token","children":[]},{"level":2,"title":"根据用户 ID 生成 Token","slug":"根据用户-id-生成-token","link":"#根据用户-id-生成-token","children":[]},{"level":2,"title":"解析 Token","slug":"解析-token","link":"#解析-token","children":[]},{"level":2,"title":"获取用户","slug":"获取用户","link":"#获取用户","children":[]},{"level":2,"title":"刷新 Token","slug":"刷新-token","link":"#刷新-token","children":[]},{"level":2,"title":"登出","slug":"登出","link":"#登出","children":[]},{"level":2,"title":"多用户授权","slug":"多用户授权","link":"#多用户授权","children":[]}],"git":{},"filePathRelative":"zh/security/authentication.md","autoDesc":true}');export{b as comp,x as data};