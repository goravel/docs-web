import{_ as p,r as o,o as c,c as i,b as n,d as t,w as e,e as s,f as l}from"./app.80bfe622.js";const u={},r=n("h1",{id:"grpc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#grpc","aria-hidden":"true"},"#"),s(" Grpc")],-1),d={class:"table-of-contents"},k=s("Introduction"),v=s("Controllers"),g=s("Define routing"),m=s("Register routing"),b=s("Start Grpc Server"),h=s("Interceptor"),f=l(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Grpc module can be operated by <code>facades.Grpc</code>.</p><h2 id="controllers" tabindex="-1"><a class="header-anchor" href="#controllers" aria-hidden="true">#</a> Controllers</h2><p>Controllers can be defined in the <code>/app/grpc/controllers</code> directory.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// app/grpc/controllers</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="interceptor" tabindex="-1"><a class="header-anchor" href="#interceptor" aria-hidden="true">#</a> Interceptor</h2><p>The interceptor can be defined in the <code>app/grpc/inteceptors</code> folder, and then registered to <code>app/grpc/kernel.go</code>.</p><p><strong>Server Interceptor</strong></p><p>You can set the server interceptors in the <code>app/grpc/kernel.go:UnaryServerInterceptors</code> method. For example:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// app/grpc/kernel.go</span>
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;goravel/app/grpc/interceptors&quot;</span>

	<span class="token string">&quot;google.golang.org/grpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>kernel <span class="token operator">*</span>Kernel<span class="token punctuation">)</span> <span class="token function">UnaryServerInterceptors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>grpc<span class="token punctuation">.</span>UnaryServerInterceptor <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>grpc<span class="token punctuation">.</span>UnaryServerInterceptor<span class="token punctuation">{</span>
		interceptors<span class="token punctuation">.</span>Server<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Client Interceptor</strong></p><p>You can set the client interceptor in the <code>app/grpc/kernel.go:UnaryClientInterceptorGroups</code> method, the method can group interceptors. For example, <code>interceptors.Client</code> is included under the <code>trace</code> group.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// app/grpc/kernel.go</span>
<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;goravel/app/grpc/interceptors&quot;</span>

	<span class="token string">&quot;google.golang.org/grpc&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>kernel <span class="token operator">*</span>Kernel<span class="token punctuation">)</span> <span class="token function">UnaryClientInterceptorGroups</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span>grpc<span class="token punctuation">.</span>UnaryClientInterceptor <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span>grpc<span class="token punctuation">.</span>UnaryClientInterceptor<span class="token punctuation">{</span>
		<span class="token string">&quot;trace&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
			interceptors<span class="token punctuation">.</span>Client<span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>the <code>trace</code> group can be applied to the configuration item <code>grpc.clients.interceptors</code>, in this way, the Client will be applied to all interceptors under the group. For example:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> config

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	config <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Config
	config<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;grpc&quot;</span><span class="token punctuation">,</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>
		<span class="token comment">// Grpc Configuration</span>
		<span class="token comment">//</span>
		<span class="token comment">// Configure your server host</span>
		<span class="token string">&quot;host&quot;</span><span class="token punctuation">:</span> config<span class="token punctuation">.</span><span class="token function">Env</span><span class="token punctuation">(</span><span class="token string">&quot;GRPC_HOST&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

		<span class="token comment">// Configure your client host and interceptors.</span>
		<span class="token comment">// Interceptors can be the group name of UnaryClientInterceptorGroups in app/grpc/kernel.go.</span>
		<span class="token string">&quot;clients&quot;</span><span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>any<span class="token punctuation">{</span>
			<span class="token string">&quot;user&quot;</span><span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>any<span class="token punctuation">{</span>
				<span class="token string">&quot;host&quot;</span><span class="token punctuation">:</span>         config<span class="token punctuation">.</span><span class="token function">Env</span><span class="token punctuation">(</span><span class="token string">&quot;GRPC_HOST&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token string">&quot;interceptors&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;trace&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function q(y,_){const a=o("router-link");return c(),i("div",null,[r,n("nav",d,[n("ul",null,[n("li",null,[t(a,{to:"#introduction"},{default:e(()=>[k]),_:1})]),n("li",null,[t(a,{to:"#controllers"},{default:e(()=>[v]),_:1})]),n("li",null,[t(a,{to:"#define-routing"},{default:e(()=>[g]),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#register-routing"},{default:e(()=>[m]),_:1})])])]),n("li",null,[t(a,{to:"#start-grpc-server"},{default:e(()=>[b]),_:1})]),n("li",null,[t(a,{to:"#interceptor"},{default:e(()=>[h]),_:1})])])]),f])}const C=p(u,[["render",q],["__file","grpc.html.vue"]]);export{C as default};
