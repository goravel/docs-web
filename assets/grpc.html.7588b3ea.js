import{_ as p,r as o,o as c,c as i,b as n,d as e,w as t,e as s,f as l}from"./app.8f68af67.js";const r={},u=n("h1",{id:"grpc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#grpc","aria-hidden":"true"},"#"),s(" Grpc")],-1),d={class:"table-of-contents"},v=s("\u4ECB\u7ECD"),k=s("\u63A7\u5236\u5668"),m=s("\u5B9A\u4E49\u8DEF\u7531"),b=s("\u6CE8\u518C\u8DEF\u7531"),g=s("\u542F\u52A8 Grpc \u670D\u52A1\u5668"),h=s("\u6269\u5C55"),f=s("\u8BBE\u7F6E\u94FE\u8DEF\u8DDF\u8E2A\u4E2D\u95F4\u4EF6"),_=l(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>Grpc \u6A21\u5757\u53EF\u4EE5\u4F7F\u7528 <code>facades.Grpc</code> \u8FDB\u884C\u64CD\u4F5C\u3002</p><h2 id="\u63A7\u5236\u5668" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u5668" aria-hidden="true">#</a> \u63A7\u5236\u5668</h2><p>\u63A7\u5236\u5668\u6587\u4EF6\u53EF\u4EE5\u5B9A\u4E49\u5728 <code>/app/grpc/controllers</code> \u76EE\u5F55\u4E2D\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// app/grpc/controllers</span>
<span class="token keyword">package</span> controllers

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;context&quot;</span>
	<span class="token string">&quot;net/http&quot;</span>

  <span class="token string">&quot;github.com/goravel/grpc/protos&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> UserController <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">NewUserController</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>UserController <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>UserController<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>UserController<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span>ctx context<span class="token punctuation">.</span>Context<span class="token punctuation">,</span> req <span class="token operator">*</span>protos<span class="token punctuation">.</span>UserRequest<span class="token punctuation">)</span> <span class="token punctuation">(</span>protoBook <span class="token operator">*</span>protos<span class="token punctuation">.</span>UserResponse<span class="token punctuation">,</span> err <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>protos<span class="token punctuation">.</span>UserResponse<span class="token punctuation">{</span>
		Code<span class="token punctuation">:</span> http<span class="token punctuation">.</span>StatusOK<span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">nil</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B9A\u4E49\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u8DEF\u7531" aria-hidden="true">#</a> \u5B9A\u4E49\u8DEF\u7531</h2><p>\u6240\u6709\u8DEF\u7531\u6587\u4EF6\u53EF\u4EE5\u5B9A\u4E49\u5728 <code>/routes</code> \u76EE\u5F55\u4E2D\uFF0C\u4F8B\u5982 <code>/routes/grpc.go</code>\u3002\u7136\u540E\u6CE8\u518C\u5230 <code>app/providers/grpc_service_provider.go</code> \u6587\u4EF6\u4E2D\uFF0C\u4EE5\u5B9E\u73B0\u8DEF\u7531\u7684\u7ED1\u5B9A\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// routes/grpc.go</span>
<span class="token keyword">package</span> routes

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/goravel/grpc/protos&quot;</span>
	<span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

	<span class="token string">&quot;goravel/app/grpc/controllers&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Grpc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  protos<span class="token punctuation">.</span><span class="token function">RegisterUserServer</span><span class="token punctuation">(</span>facades<span class="token punctuation">.</span>Grpc<span class="token punctuation">.</span><span class="token function">Server</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> controllers<span class="token punctuation">.</span><span class="token function">NewUserController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6CE8\u518C\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u8DEF\u7531" aria-hidden="true">#</a> \u6CE8\u518C\u8DEF\u7531</h3><p>\u8DEF\u7531\u5B9A\u4E49\u597D\u540E\uFF0C\u5728 <code>app/providers/grpc_service_provider.go</code> \u6587\u4EF6\u4E2D\u6CE8\u518C\u8DEF\u7531\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// app/providers/grpc_service_provider.go</span>
<span class="token keyword">package</span> providers

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;goravel/routes&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> GrpcServiceProvider <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>router <span class="token operator">*</span>GrpcServiceProvider<span class="token punctuation">)</span> <span class="token function">Register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>router <span class="token operator">*</span>GrpcServiceProvider<span class="token punctuation">)</span> <span class="token function">Boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	routes<span class="token punctuation">.</span><span class="token function">Grpc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u52A8-grpc-\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-grpc-\u670D\u52A1\u5668" aria-hidden="true">#</a> \u542F\u52A8 Grpc \u670D\u52A1\u5668</h2><p>\u5728 <code>main.go</code> \u4E2D\u542F\u52A8 Grpc.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Grpc<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span>facades<span class="token punctuation">.</span>Config<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;grpc.host&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    facades<span class="token punctuation">.</span>Log<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;Grpc run error: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6269\u5C55" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55" aria-hidden="true">#</a> \u6269\u5C55</h2><p><code>facades.Grpc</code> \u63D0\u4F9B\u6269\u5C55\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u5BF9 Server \u8FDB\u884C\u6269\u5C55\uFF0C\u4F8B\u5982\u8BBE\u7F6E\u4E2D\u95F4\u4EF6\uFF1A</p><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>Server() *grpc.Server</code></td><td>\u83B7\u53D6 Server \u5B9E\u4F8B</td></tr><tr><td><code>SetServer(server *grpc.Server)</code></td><td>\u8BBE\u7F6E Server \u5B9E\u4F8B</td></tr></tbody></table><h3 id="\u8BBE\u7F6E\u94FE\u8DEF\u8DDF\u8E2A\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u94FE\u8DEF\u8DDF\u8E2A\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u8BBE\u7F6E\u94FE\u8DEF\u8DDF\u8E2A\u4E2D\u95F4\u4EF6</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// app/providers/grpc_service_provider.go</span>
<span class="token keyword">package</span> providers

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>
	grpc_middleware <span class="token string">&quot;github.com/grpc-ecosystem/go-grpc-middleware&quot;</span>
	<span class="token string">&quot;google.golang.org/grpc&quot;</span>

	<span class="token string">&quot;goravel/routes&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> GrpcServiceProvider <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>router <span class="token operator">*</span>GrpcServiceProvider<span class="token punctuation">)</span> <span class="token function">Register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>router <span class="token operator">*</span>GrpcServiceProvider<span class="token punctuation">)</span> <span class="token function">Boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	facades<span class="token punctuation">.</span>Grpc<span class="token punctuation">.</span><span class="token function">SetServer</span><span class="token punctuation">(</span>grpc<span class="token punctuation">.</span><span class="token function">NewServer</span><span class="token punctuation">(</span>grpc<span class="token punctuation">.</span><span class="token function">UnaryInterceptor</span><span class="token punctuation">(</span>
		grpc_middleware<span class="token punctuation">.</span><span class="token function">ChainUnaryServer</span><span class="token punctuation">(</span>
			<span class="token comment">// Add middleware</span>
		<span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

	routes<span class="token punctuation">.</span><span class="token function">Grpc</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function w(y,q){const a=o("router-link");return c(),i("div",null,[u,n("nav",d,[n("ul",null,[n("li",null,[e(a,{to:"#\u4ECB\u7ECD"},{default:t(()=>[v]),_:1})]),n("li",null,[e(a,{to:"#\u63A7\u5236\u5668"},{default:t(()=>[k]),_:1})]),n("li",null,[e(a,{to:"#\u5B9A\u4E49\u8DEF\u7531"},{default:t(()=>[m]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#\u6CE8\u518C\u8DEF\u7531"},{default:t(()=>[b]),_:1})])])]),n("li",null,[e(a,{to:"#\u542F\u52A8-grpc-\u670D\u52A1\u5668"},{default:t(()=>[g]),_:1})]),n("li",null,[e(a,{to:"#\u6269\u5C55"},{default:t(()=>[h]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#\u8BBE\u7F6E\u94FE\u8DEF\u8DDF\u8E2A\u4E2D\u95F4\u4EF6"},{default:t(()=>[f]),_:1})])])])])]),_])}const x=p(r,[["render",w],["__file","grpc.html.vue"]]);export{x as default};
