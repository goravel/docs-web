import{_ as o,r as c,o as p,c as l,b as n,d as t,w as e,e as s,f as i}from"./app.8f68af67.js";const u={},r=n("h1",{id:"\u63A7\u5236\u5668",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u63A7\u5236\u5668","aria-hidden":"true"},"#"),s(" \u63A7\u5236\u5668")],-1),d={class:"table-of-contents"},k=s("\u4ECB\u7ECD"),v=s("\u5B9A\u4E49\u63A7\u5236\u5668"),m=i(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>\u4E3A\u4E86\u4EE3\u66FF\u5728\u5355\u72EC\u8DEF\u7531\u4E2D\u4EE5\u95ED\u5305\u5F62\u5F0F\u5B9A\u4E49\u6240\u6709\u7684\u8BF7\u6C42\u5904\u7406\u903B\u8F91\uFF0C\u53EF\u4EE5\u4F7F\u7528\u63A7\u5236\u5668\u6765\u8FDB\u884C\u6574\u5408\u3002\u63A7\u5236\u5668\u88AB\u5B58\u653E\u5728 <code>app/http/controllers</code> \u76EE\u5F55\u4E2D\u3002</p><h2 id="\u5B9A\u4E49\u63A7\u5236\u5668" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u63A7\u5236\u5668" aria-hidden="true">#</a> \u5B9A\u4E49\u63A7\u5236\u5668</h2><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u57FA\u7840\u63A7\u5236\u5668\u7C7B\u7684\u4F8B\u5B50\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> controllers

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/goravel/framework/contracts/http&quot;</span>
	<span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> UserController <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">//Dependent services</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewUserController</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>UserController <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>UserController<span class="token punctuation">{</span>
		<span class="token comment">//Inject services</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>UserController<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span>ctx http<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	ctx<span class="token punctuation">.</span><span class="token function">Response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Json</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>Json<span class="token punctuation">{</span>
		<span class="token string">&quot;Hello&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Goravel&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8DEF\u7531\u5B9A\u4E49\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> routes

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

	<span class="token string">&quot;goravel/app/http/controllers&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Web</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	userController <span class="token operator">:=</span> controllers<span class="token punctuation">.</span><span class="token function">NewUserController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;/{id}&quot;</span><span class="token punctuation">,</span> userController<span class="token punctuation">.</span>Show<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function b(h,f){const a=c("router-link");return p(),l("div",null,[r,n("nav",d,[n("ul",null,[n("li",null,[t(a,{to:"#\u4ECB\u7ECD"},{default:e(()=>[k]),_:1})]),n("li",null,[t(a,{to:"#\u5B9A\u4E49\u63A7\u5236\u5668"},{default:e(()=>[v]),_:1})])])]),m])}const _=o(u,[["render",b],["__file","controllers.html.vue"]]);export{_ as default};
