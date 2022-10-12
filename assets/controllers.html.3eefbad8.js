import{_ as o,r as c,o as l,c as i,b as n,d as e,w as t,e as s,f as p}from"./app.8dbedbc7.js";const r={},u=n("h1",{id:"controllers",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#controllers","aria-hidden":"true"},"#"),s(" Controllers")],-1),d={class:"table-of-contents"},k=s("Introduction"),v=s("Define Controllers"),m=p(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Instead of defining all request processing logic in the form of a closure in a separate route, a controller can be used for integration. The controllers are stored in the <code>app/http/controllers</code> directory.</p><h2 id="define-controllers" tabindex="-1"><a class="header-anchor" href="#define-controllers" aria-hidden="true">#</a> Define Controllers</h2><p>The following is an example of a basic controller:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> controllers

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The route define:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> routes

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

	<span class="token string">&quot;goravel/app/http/controllers&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Web</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	userController <span class="token operator">:=</span> controllers<span class="token punctuation">.</span><span class="token function">NewUserController</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;/{id}&quot;</span><span class="token punctuation">,</span> userController<span class="token punctuation">.</span>Show<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function b(f,h){const a=c("router-link");return l(),i("div",null,[u,n("nav",d,[n("ul",null,[n("li",null,[e(a,{to:"#introduction"},{default:t(()=>[k]),_:1})]),n("li",null,[e(a,{to:"#define-controllers"},{default:t(()=>[v]),_:1})])])]),m])}const _=o(r,[["render",b],["__file","controllers.html.vue"]]);export{_ as default};
