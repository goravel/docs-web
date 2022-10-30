import{_ as i,r as a,o as s,c as t,b as r,d,w as c,f as l,e}from"./app.4764c1a8.js";const o={},u=l(`<h1 id="upgrading-to-v1-1-from-v1-2" tabindex="-1"><a class="header-anchor" href="#upgrading-to-v1-1-from-v1-2" aria-hidden="true">#</a> Upgrading To v1.1 From v1.2</h1><h2 id="high-impact-changes" tabindex="-1"><a class="header-anchor" href="#high-impact-changes" aria-hidden="true">#</a> High Impact Changes</h2><ul><li><a href="#Updating-Dependencies">Updating Dependencies</a></li><li><a href="#Auth-Support-Context">Auth support context</a></li></ul><h2 id="upgrade-guide" tabindex="-1"><a class="header-anchor" href="#upgrade-guide" aria-hidden="true">#</a> Upgrade Guide</h2><p><strong>Estimated Upgrade Time: 1 Minutes</strong></p><h3 id="updating-dependencies" tabindex="-1"><a class="header-anchor" href="#updating-dependencies" aria-hidden="true">#</a> Updating Dependencies</h3><p><strong>Likelihood Of Impact: High</strong></p><p>Update dependencies in the <code>go.mod</code> file\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>github<span class="token punctuation">.</span>com<span class="token operator">/</span>goravel<span class="token operator">/</span>framework v1<span class="token punctuation">.</span><span class="token number">2.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="auth-support-context" tabindex="-1"><a class="header-anchor" href="#auth-support-context" aria-hidden="true">#</a> Auth Support Context</h3><p><strong>Likelihood Of Impact: High</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Old
facades.Auth.Parse(token string) error

// New
facades.Auth.Parse(ctx http.Context, token string) error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Old
facades.Auth.User(ctx http.Context, user interface{}) error

// New
facades.Auth.User(ctx http.Context, user interface{}) error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Old
facades.Auth.facades.Auth.Login(user interface{}) (token string, err error)

// New
facades.Auth.facades.Auth.Login(ctx http.Context, user interface{}) (token string, err error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Old
facades.Auth.LoginUsingID(id interface{}) (token string, err error)

// New
facades.Auth.LoginUsingID(ctx http.Context, id interface{}) (token string, err error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Old
facades.Auth.Refresh() (token string, err error)

// New
facades.Auth.Refresh(ctx http.Context) (token string, err error)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Old
facades.Auth.Logout() error

// New
facades.Auth.Logout(ctx http.Context) error
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),v=e("For detail "),h=e("facades.Auth"),p=e("\u3002");function g(m,x){const n=a("RouterLink");return s(),t("div",null,[u,r("p",null,[v,d(n,{to:"/digging-deeper/auth.html"},{default:c(()=>[h]),_:1}),p])])}const f=i(o,[["render",g],["__file","v1.2.html.vue"]]);export{f as default};
