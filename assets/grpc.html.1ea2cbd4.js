import{_ as o,r as p,o as c,c as i,b as n,d as e,w as t,e as s,f as r}from"./app.af1fd0e6.js";const l={},u=n("h1",{id:"grpc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#grpc","aria-hidden":"true"},"#"),s(" Grpc")],-1),d={class:"table-of-contents"},v=s("Introduction"),k=s("Controllers"),m=s("Define routing"),g=s("Register routing"),b=s("Start Grpc Server"),h=s("Extension"),f=s("Set Tracing Analysis Middlewares"),_=r(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Grpc module can be operated by <code>facades.Grpc</code>.</p><h2 id="controllers" tabindex="-1"><a class="header-anchor" href="#controllers" aria-hidden="true">#</a> Controllers</h2><p>Controllers can be defined in the <code>/app/grpc/controllers</code> directory.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// app/grpc/controllers</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="define-routing" tabindex="-1"><a class="header-anchor" href="#define-routing" aria-hidden="true">#</a> Define routing</h2><p>All routing files can be defined in the <code>/routes</code> directory, such as <code>/routes/grpc.go</code>. Then bind routes in the <code>app/providers/grpc_service_provider.go</code> file.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// routes/grpc.go</span>
<span class="token keyword">package</span> routes

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/goravel/grpc/protos&quot;</span>
	<span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

	<span class="token string">&quot;goravel/app/grpc/controllers&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">Grpc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  protos<span class="token punctuation">.</span><span class="token function">RegisterUserServer</span><span class="token punctuation">(</span>facades<span class="token punctuation">.</span>Grpc<span class="token punctuation">.</span><span class="token function">Server</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> controllers<span class="token punctuation">.</span><span class="token function">NewUserController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="register-routing" tabindex="-1"><a class="header-anchor" href="#register-routing" aria-hidden="true">#</a> Register routing</h3><p>Register routing in the <code>app/providers/grpc_service_provider.go</code> file after routing was defined.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// app/providers/grpc_service_provider.go</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="start-grpc-server" tabindex="-1"><a class="header-anchor" href="#start-grpc-server" aria-hidden="true">#</a> Start Grpc Server</h2><p>Start Grpc in the <code>main.go</code> file.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Grpc<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span>facades<span class="token punctuation">.</span>Config<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;grpc.host&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
    facades<span class="token punctuation">.</span>Log<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;Grpc run error: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extension" tabindex="-1"><a class="header-anchor" href="#extension" aria-hidden="true">#</a> Extension</h2><p><code>facades.Grpc</code> provide extension methods, they can extend Server, for example, set middlewares:</p><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>Server() *grpc.Server</code></td><td>Get Server Instance</td></tr><tr><td><code>SetServer(server *grpc.Server)</code></td><td>Set Server Instance</td></tr></tbody></table><h3 id="set-tracing-analysis-middlewares" tabindex="-1"><a class="header-anchor" href="#set-tracing-analysis-middlewares" aria-hidden="true">#</a> Set Tracing Analysis Middlewares</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// app/providers/grpc_service_provider.go</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function w(y,S){const a=p("router-link");return c(),i("div",null,[u,n("nav",d,[n("ul",null,[n("li",null,[e(a,{to:"#introduction"},{default:t(()=>[v]),_:1})]),n("li",null,[e(a,{to:"#controllers"},{default:t(()=>[k]),_:1})]),n("li",null,[e(a,{to:"#define-routing"},{default:t(()=>[m]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#register-routing"},{default:t(()=>[g]),_:1})])])]),n("li",null,[e(a,{to:"#start-grpc-server"},{default:t(()=>[b]),_:1})]),n("li",null,[e(a,{to:"#extension"},{default:t(()=>[h]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#set-tracing-analysis-middlewares"},{default:t(()=>[f]),_:1})])])])])]),_])}const q=o(l,[["render",w],["__file","grpc.html.vue"]]);export{q as default};
