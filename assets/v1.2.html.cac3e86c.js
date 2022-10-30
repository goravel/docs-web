import{_ as a,r as s,o as i,c as r,b as t,d,w as l,f as c,e}from"./app.364d89d5.js";const o={},u=c(`<h1 id="\u4ECE-v1-1-\u5347\u7EA7\u5230-v1-2" tabindex="-1"><a class="header-anchor" href="#\u4ECE-v1-1-\u5347\u7EA7\u5230-v1-2" aria-hidden="true">#</a> \u4ECE v1.1 \u5347\u7EA7\u5230 v1.2</h1><h2 id="\u9AD8\u5F71\u54CD\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u5F71\u54CD\u53D8\u5316" aria-hidden="true">#</a> \u9AD8\u5F71\u54CD\u53D8\u5316</h2><ul><li><a href="#%E6%9B%B4%E6%96%B0%E4%BE%9D%E8%B5%96">\u66F4\u65B0\u4F9D\u8D56</a></li><li><a href="#Auth-Support-Context">Auth \u652F\u6301 Context</a></li></ul><h2 id="\u5347\u7EA7\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#\u5347\u7EA7\u6307\u5357" aria-hidden="true">#</a> \u5347\u7EA7\u6307\u5357</h2><p><strong>\u9884\u8BA1\u5347\u7EA7\u65F6\u95F4\uFF1A1 \u5206\u949F</strong></p><h3 id="\u66F4\u65B0\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u4F9D\u8D56" aria-hidden="true">#</a> \u66F4\u65B0\u4F9D\u8D56</h3><p><strong>\u5F71\u54CD\u53EF\u80FD\u6027\uFF1A\u9AD8</strong></p><p><code>go.mod</code> \u4E2D\u66F4\u65B0\u4F9D\u8D56\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>github<span class="token punctuation">.</span>com<span class="token operator">/</span>goravel<span class="token operator">/</span>framework v1<span class="token punctuation">.</span><span class="token number">2.1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="auth-\u652F\u6301-context" tabindex="-1"><a class="header-anchor" href="#auth-\u652F\u6301-context" aria-hidden="true">#</a> Auth \u652F\u6301 Context</h3><p><strong>\u5F71\u54CD\u53EF\u80FD\u6027\uFF1A\u9AD8</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Old
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),v=e("For detail "),h=e("facades.Auth"),m=e("\u3002");function g(x,b){const n=s("RouterLink");return i(),r("div",null,[u,t("p",null,[v,d(n,{to:"/zh/digging-deeper/auth.html"},{default:l(()=>[h]),_:1}),m])])}const f=a(o,[["render",g],["__file","v1.2.html.vue"]]);export{f as default};
