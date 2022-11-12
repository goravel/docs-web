import{_ as d,r as i,o as l,c as o,b as e,d as t,w as s,e as n,f as c}from"./app.80bfe622.js";const u={},v=e("h1",{id:"\u4ECE-v1-1-\u5347\u7EA7\u5230-v1-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4ECE-v1-1-\u5347\u7EA7\u5230-v1-2","aria-hidden":"true"},"#"),n(" \u4ECE v1.1 \u5347\u7EA7\u5230 v1.2")],-1),h={class:"table-of-contents"},m=n("\u9AD8\u5F71\u54CD\u53D8\u5316"),g=n("\u5347\u7EA7\u6307\u5357"),x=n("\u66F4\u65B0\u4F9D\u8D56"),b=n("Auth \u652F\u6301 Context"),p=c(`<h2 id="\u9AD8\u5F71\u54CD\u53D8\u5316" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u5F71\u54CD\u53D8\u5316" aria-hidden="true">#</a> \u9AD8\u5F71\u54CD\u53D8\u5316</h2><ul><li><a href="#%E6%9B%B4%E6%96%B0%E4%BE%9D%E8%B5%96">\u66F4\u65B0\u4F9D\u8D56</a></li><li><a href="#Auth-Support-Context">Auth \u652F\u6301 Context</a></li></ul><h2 id="\u5347\u7EA7\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#\u5347\u7EA7\u6307\u5357" aria-hidden="true">#</a> \u5347\u7EA7\u6307\u5357</h2><p><strong>\u9884\u8BA1\u5347\u7EA7\u65F6\u95F4\uFF1A1 \u5206\u949F</strong></p><h3 id="\u66F4\u65B0\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u4F9D\u8D56" aria-hidden="true">#</a> \u66F4\u65B0\u4F9D\u8D56</h3><p><strong>\u5F71\u54CD\u53EF\u80FD\u6027\uFF1A\u9AD8</strong></p><p><code>go.mod</code> \u4E2D\u66F4\u65B0\u4F9D\u8D56\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>github<span class="token punctuation">.</span>com<span class="token operator">/</span>goravel<span class="token operator">/</span>framework v1<span class="token punctuation">.</span><span class="token number">2.1</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),f=n("For detail "),_=n("facades.Auth"),k=n("\u3002");function A(C,N){const a=i("router-link"),r=i("RouterLink");return l(),o("div",null,[v,e("nav",h,[e("ul",null,[e("li",null,[t(a,{to:"#\u9AD8\u5F71\u54CD\u53D8\u5316"},{default:s(()=>[m]),_:1})]),e("li",null,[t(a,{to:"#\u5347\u7EA7\u6307\u5357"},{default:s(()=>[g]),_:1}),e("ul",null,[e("li",null,[t(a,{to:"#\u66F4\u65B0\u4F9D\u8D56"},{default:s(()=>[x]),_:1})]),e("li",null,[t(a,{to:"#auth-\u652F\u6301-context"},{default:s(()=>[b]),_:1})])])])])]),p,e("p",null,[f,t(r,{to:"/zh/digging-deeper/auth.html"},{default:s(()=>[_]),_:1}),k])])}const B=d(u,[["render",A],["__file","v1.2.html.vue"]]);export{B as default};
