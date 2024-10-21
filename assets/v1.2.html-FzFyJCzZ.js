import{_ as d,r,o,c,a as e,b as n,w as a,d as t,e as u}from"./app-C1EstAlD.js";const v={},h=e("h1",{id:"从-v1-1-升级到-v1-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#从-v1-1-升级到-v1-2"},[e("span",null,"从 v1.1 升级到 v1.2")])],-1),p={class:"table-of-contents"},m=u(`<h2 id="高影响变化" tabindex="-1"><a class="header-anchor" href="#高影响变化"><span>高影响变化</span></a></h2><ul><li><a href="#%E6%9B%B4%E6%96%B0%E4%BE%9D%E8%B5%96">更新依赖</a></li><li><a href="#auth-support-context">Auth 支持 Context</a></li></ul><h2 id="升级指南" tabindex="-1"><a class="header-anchor" href="#升级指南"><span>升级指南</span></a></h2><p><strong>预计升级时间：1 分钟</strong></p><h3 id="更新依赖" tabindex="-1"><a class="header-anchor" href="#更新依赖"><span>更新依赖</span></a></h3><p><strong>影响可能性：高</strong></p><p><code>go.mod</code> 中更新依赖：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>github<span class="token punctuation">.</span>com<span class="token operator">/</span>goravel<span class="token operator">/</span>framework v1<span class="token punctuation">.</span><span class="token number">2.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="auth-支持-context" tabindex="-1"><a class="header-anchor" href="#auth-支持-context"><span>Auth 支持 Context</span></a></h3><p><strong>影响可能性：高</strong></p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// Old
facades.Auth.Parse(token string) error

// New
facades.Auth.Parse(ctx http.Context, token string) error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// Old
facades.Auth.User(ctx http.Context, user interface{}) error

// New
facades.Auth.User(ctx http.Context, user interface{}) error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// Old
facades.Auth.facades.Auth.Login(user interface{}) (token string, err error)

// New
facades.Auth.facades.Auth.Login(ctx http.Context, user interface{}) (token string, err error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// Old
facades.Auth.LoginUsingID(id interface{}) (token string, err error)

// New
facades.Auth.LoginUsingID(ctx http.Context, id interface{}) (token string, err error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// Old
facades.Auth.Refresh() (token string, err error)

// New
facades.Auth.Refresh(ctx http.Context) (token string, err error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// Old
facades.Auth.Logout() error

// New
facades.Auth.Logout(ctx http.Context) error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function g(x,b){const i=r("router-link"),s=r("RouteLink"),l=r("CommentService");return o(),c("div",null,[h,e("nav",p,[e("ul",null,[e("li",null,[n(i,{to:"#高影响变化"},{default:a(()=>[t("高影响变化")]),_:1})]),e("li",null,[n(i,{to:"#升级指南"},{default:a(()=>[t("升级指南")]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#更新依赖"},{default:a(()=>[t("更新依赖")]),_:1})]),e("li",null,[n(i,{to:"#auth-支持-context"},{default:a(()=>[t("Auth 支持 Context")]),_:1})])])])])]),m,e("p",null,[t("For detail "),n(s,{to:"/zh/security/authentication.html"},{default:a(()=>[t("facades.Auth")]),_:1}),t("。")]),n(l)])}const _=d(v,[["render",g],["__file","v1.2.html.vue"]]),k=JSON.parse('{"path":"/zh/upgrade/v1.2.html","title":"从 v1.1 升级到 v1.2","lang":"zh-CN","frontmatter":{"description":"从 v1.1 升级到 v1.2 高影响变化 更新依赖 Auth 支持 Context 升级指南 预计升级时间：1 分钟 更新依赖 影响可能性：高 go.mod 中更新依赖： Auth 支持 Context 影响可能性：高 For detail 。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/upgrade/v1.2.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/upgrade/v1.2.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/upgrade/v1.2.html"}],["meta",{"property":"og:description","content":"从 v1.1 升级到 v1.2 高影响变化 更新依赖 Auth 支持 Context 升级指南 预计升级时间：1 分钟 更新依赖 影响可能性：高 go.mod 中更新依赖： Auth 支持 Context 影响可能性：高 For detail 。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从 v1.1 升级到 v1.2\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"高影响变化","slug":"高影响变化","link":"#高影响变化","children":[]},{"level":2,"title":"升级指南","slug":"升级指南","link":"#升级指南","children":[{"level":3,"title":"更新依赖","slug":"更新依赖","link":"#更新依赖","children":[]},{"level":3,"title":"Auth 支持 Context","slug":"auth-支持-context","link":"#auth-支持-context","children":[]}]}],"git":{},"filePathRelative":"zh/upgrade/v1.2.md","autoDesc":true}');export{_ as comp,k as data};
