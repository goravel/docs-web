import{_ as o,r as p,o as c,c as i,a as n,b as a,w as t,e as l,d as e}from"./app-DXEXQbZ1.js";const u={},d=n("h1",{id:"session",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#session"},[n("span",null,"Session")])],-1),r={class:"table-of-contents"},k=l(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>Session 使你可以在多个请求之间存储用户信息，为本质上无状态的 HTTP 协议提供有状态的体验。这些用户信息在服务器端持久存储。Goravel 提供了一个统一的接口，用于与各种持久存储驱动进行交互。</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration"><span>Configuration</span></a></h2><p><code>session</code> 配置文件位于 <code>config/session.go</code>。默认驱动是 <code>file</code>，它会把 <code>session</code> 存储在 <code>storage/framework/sessions</code> 目录中。Goravel 允许你通过实现 <code>contracts/session/driver</code> 接口来创建自定义 <code>session</code> 驱动。</p><h3 id="注册-middleware" tabindex="-1"><a class="header-anchor" href="#注册-middleware"><span>注册 Middleware</span></a></h3><p>Goravel 默认情况下未启动 <code>Session</code> 功能，但是框架提供了用于启动会话的中间件。你可以在 <code>app/http/kernel.go</code> 文件中注册 <code>Session</code> 中间件，以将其应用于所有路由，或者将其添加到特定路由中：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/goravel/framework/contracts/http&quot;</span>
	<span class="token string">&quot;github.com/goravel/framework/session/middleware&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>kernel Kernel<span class="token punctuation">)</span> <span class="token function">Middleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>http<span class="token punctuation">.</span>Middleware <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>http<span class="token punctuation">.</span>Middleware<span class="token punctuation">{</span>
		middleware<span class="token punctuation">.</span><span class="token function">StartSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-session" tabindex="-1"><a class="header-anchor" href="#使用-session"><span>使用 Session</span></a></h2><h3 id="获取数据" tabindex="-1"><a class="header-anchor" href="#获取数据"><span>获取数据</span></a></h3><p>你可以使用 <code>Get</code> 方法从 <code>Session</code> 中检索数据。如果值不存在，则返回 <code>nil</code>。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>value <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>你还可以将默认值作为第二个参数传递给 <code>Get</code> 方法。如果会话中不存在指定的键，则返回该值：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>value <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取所有数据" tabindex="-1"><a class="header-anchor" href="#获取所有数据"><span>获取所有数据</span></a></h3><p>如果你想从会话中检索所有数据，可以使用 <code>All</code> 方法：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>data <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">All</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取数据子集" tabindex="-1"><a class="header-anchor" href="#获取数据子集"><span>获取数据子集</span></a></h3><p>如果你想检索会话数据某些字段，可以使用 <code>Only</code> 方法：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>data <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Only</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="确定会话中是否存在项目" tabindex="-1"><a class="header-anchor" href="#确定会话中是否存在项目"><span>确定会话中是否存在项目</span></a></h3><p>确定会话中是否存在项目，你可以使用 <code>Has</code> 方法。如果项目存在且不为 <code>nil</code>，则 <code>Has</code> 方法返回 <code>true</code>：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">if</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Has</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>确定项目是否存在，即使它是 <code>nil</code>，你可以使用 <code>Exists</code> 方法：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">if</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Exists</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>确定项目是否不存在于会话中，你可以使用 <code>Missing</code> 方法：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">if</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Missing</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="存储数据" tabindex="-1"><a class="header-anchor" href="#存储数据"><span>存储数据</span></a></h3><p>你可以使用 <code>Put</code> 方法将数据存储在会话中：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Put</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="检索并删除数据" tabindex="-1"><a class="header-anchor" href="#检索并删除数据"><span>检索并删除数据</span></a></h3><p>如果你想从会话中检索项目，然后删除它，可以使用 <code>Pull</code> 方法：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>value <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Pull</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="删除数据" tabindex="-1"><a class="header-anchor" href="#删除数据"><span>删除数据</span></a></h3><p><code>Forget</code> 方法可用于从会话中删除数据。如果你想从会话中删除所有数据，可以使用 <code>Flush</code> 方法：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Forget</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">)</span>

ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="重新生成会话-id" tabindex="-1"><a class="header-anchor" href="#重新生成会话-id"><span>重新生成会话 ID</span></a></h3><p>重新生成会话 ID 通常是为了防止恶意用户利用会话固定攻击来利用你的应用程序。你可以使用 <code>Regenerate</code> 方法重新生成会话 ID：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Regenerate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你想重新生成会话 ID 并忘记会话中的所有数据，可以使用 <code>Invalidate</code> 方法：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Invalidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="闪存数据" tabindex="-1"><a class="header-anchor" href="#闪存数据"><span>闪存数据</span></a></h3><p>闪存数据一种仅在随后的 HTTP 请求中可用的数据，请求结束后将被删除。闪存数据对于存储临时消息（如状态消息）非常有用。你可以使用 <code>Flash</code> 方法将闪存数据存储在会话中：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Flash</span><span class="token punctuation">(</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Task was successful!&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你希望保留闪存数据以供额外请求使用，可以使用 <code>Reflash</code> 方法：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Reflash</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果你希望保留特定的闪存数据以供立即使用，可以使用 <code>Keep</code> 方法：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Keep</span><span class="token punctuation">(</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you would like to keep specific data around for immediate use, you may use the <code>Now</code> method:</p><p>如果你希望保留特定数据以供立即使用，可以使用 <code>Now</code> 方法：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Now</span><span class="token punctuation">(</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Task was successful!&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="会话管理器" tabindex="-1"><a class="header-anchor" href="#会话管理器"><span>会话管理器</span></a></h2><h3 id="构建自定义会话" tabindex="-1"><a class="header-anchor" href="#构建自定义会话"><span>构建自定义会话</span></a></h3><p>使用 <code>Session</code> 门面构建自定义会话。<code>Session</code> 门面提供了 <code>BuildSession</code> 方法，它接受一个驱动实例和一个可选的会话 ID，如果你想指定自定义会话 ID：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

session <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">BuildSession</span><span class="token punctuation">(</span>driver<span class="token punctuation">,</span> <span class="token string">&quot;sessionID&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="添加自定义会话驱动" tabindex="-1"><a class="header-anchor" href="#添加自定义会话驱动"><span>添加自定义会话驱动</span></a></h3><h4 id="实现驱动" tabindex="-1"><a class="header-anchor" href="#实现驱动"><span>实现驱动</span></a></h4><p>要实现自定义会话驱动，驱动必须实现 <code>contracts/session/driver</code> 接口。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// Driver is the interface for Session handlers.</span>
<span class="token keyword">type</span> Driver <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token comment">// Close closes the session handler.</span>
	<span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
	<span class="token comment">// Destroy destroys the session with the given ID.</span>
	<span class="token function">Destroy</span><span class="token punctuation">(</span>id <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
	<span class="token comment">// Gc performs garbage collection on the session handler with the given maximum lifetime.</span>
	<span class="token function">Gc</span><span class="token punctuation">(</span>maxLifetime <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
	<span class="token comment">// Open opens a session with the given path and name.</span>
	<span class="token function">Open</span><span class="token punctuation">(</span>path <span class="token builtin">string</span><span class="token punctuation">,</span> name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
	<span class="token comment">// Read reads the session data associated with the given ID.</span>
	<span class="token function">Read</span><span class="token punctuation">(</span>id <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">error</span><span class="token punctuation">)</span>
	<span class="token comment">// Write writes the session data associated with the given ID.</span>
	<span class="token function">Write</span><span class="token punctuation">(</span>id <span class="token builtin">string</span><span class="token punctuation">,</span> data <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注册驱动" tabindex="-1"><a class="header-anchor" href="#注册驱动"><span>注册驱动</span></a></h4><p>实现驱动后，你需要在 Goravel 中注册它。你可以在 <code>app/providers/app_service_provider.go</code> 的 <code>boot</code> 方法中调用 <code>Extend</code> 方法：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/contracts/session&quot;</span>

facades<span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Extend</span><span class="token punctuation">(</span><span class="token string">&quot;redis&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> session<span class="token punctuation">.</span>Driver <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token operator">&amp;</span>RedisDriver<span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注册了驱动程序以后，你可以通过将会话配置文件中的 <code>driver</code> 选项设置为 <code>redis</code> 或将 <code>SESSION_DRIVER</code> 环境变量设置为 <code>redis</code> 来使用它。</p><h3 id="获取驱动实例" tabindex="-1"><a class="header-anchor" href="#获取驱动实例"><span>获取驱动实例</span></a></h3><p>使用 <code>Driver</code> 方法从会话管理器中检索驱动实例。它接受一个可选的驱动名称，如果未提供，则返回默认驱动实例：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>driver<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Driver</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="开始新会话" tabindex="-1"><a class="header-anchor" href="#开始新会话"><span>开始新会话</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>session <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">BuildSession</span><span class="token punctuation">(</span>driver<span class="token punctuation">)</span>
session<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="保存会话数据" tabindex="-1"><a class="header-anchor" href="#保存会话数据"><span>保存会话数据</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>session <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">BuildSession</span><span class="token punctuation">(</span>driver<span class="token punctuation">)</span>
session<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
session<span class="token punctuation">.</span><span class="token function">Save</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将会话附加到请求" tabindex="-1"><a class="header-anchor" href="#将会话附加到请求"><span>将会话附加到请求</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>session <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">BuildSession</span><span class="token punctuation">(</span>driver<span class="token punctuation">)</span>
session<span class="token punctuation">.</span><span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">SetSession</span><span class="token punctuation">(</span>session<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检查请求是否有会话" tabindex="-1"><a class="header-anchor" href="#检查请求是否有会话"><span>检查请求是否有会话</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">if</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">HasSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,73);function g(v,h){const s=p("router-link");return c(),i("div",null,[d,n("nav",r,[n("ul",null,[n("li",null,[a(s,{to:"#简介"},{default:t(()=>[e("简介")]),_:1})]),n("li",null,[a(s,{to:"#configuration"},{default:t(()=>[e("Configuration")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#注册-middleware"},{default:t(()=>[e("注册 Middleware")]),_:1})])])]),n("li",null,[a(s,{to:"#使用-session"},{default:t(()=>[e("使用 Session")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#获取数据"},{default:t(()=>[e("获取数据")]),_:1})]),n("li",null,[a(s,{to:"#获取所有数据"},{default:t(()=>[e("获取所有数据")]),_:1})]),n("li",null,[a(s,{to:"#获取数据子集"},{default:t(()=>[e("获取数据子集")]),_:1})]),n("li",null,[a(s,{to:"#确定会话中是否存在项目"},{default:t(()=>[e("确定会话中是否存在项目")]),_:1})]),n("li",null,[a(s,{to:"#存储数据"},{default:t(()=>[e("存储数据")]),_:1})]),n("li",null,[a(s,{to:"#检索并删除数据"},{default:t(()=>[e("检索并删除数据")]),_:1})]),n("li",null,[a(s,{to:"#删除数据"},{default:t(()=>[e("删除数据")]),_:1})]),n("li",null,[a(s,{to:"#重新生成会话-id"},{default:t(()=>[e("重新生成会话 ID")]),_:1})]),n("li",null,[a(s,{to:"#闪存数据"},{default:t(()=>[e("闪存数据")]),_:1})])])]),n("li",null,[a(s,{to:"#会话管理器"},{default:t(()=>[e("会话管理器")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#构建自定义会话"},{default:t(()=>[e("构建自定义会话")]),_:1})]),n("li",null,[a(s,{to:"#添加自定义会话驱动"},{default:t(()=>[e("添加自定义会话驱动")]),_:1})]),n("li",null,[a(s,{to:"#获取驱动实例"},{default:t(()=>[e("获取驱动实例")]),_:1})]),n("li",null,[a(s,{to:"#开始新会话"},{default:t(()=>[e("开始新会话")]),_:1})]),n("li",null,[a(s,{to:"#保存会话数据"},{default:t(()=>[e("保存会话数据")]),_:1})]),n("li",null,[a(s,{to:"#将会话附加到请求"},{default:t(()=>[e("将会话附加到请求")]),_:1})]),n("li",null,[a(s,{to:"#检查请求是否有会话"},{default:t(()=>[e("检查请求是否有会话")]),_:1})])])])])]),k])}const f=o(u,[["render",g],["__file","session.html.vue"]]),b=JSON.parse('{"path":"/zh/the-basics/session.html","title":"Session","lang":"zh-CN","frontmatter":{"description":"Session 简介 Session 使你可以在多个请求之间存储用户信息，为本质上无状态的 HTTP 协议提供有状态的体验。这些用户信息在服务器端持久存储。Goravel 提供了一个统一的接口，用于与各种持久存储驱动进行交互。 Configuration session 配置文件位于 config/session.go。默认驱动是 file，它会把 s...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/the-basics/session.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/the-basics/session.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/the-basics/session.html"}],["meta",{"property":"og:description","content":"Session 简介 Session 使你可以在多个请求之间存储用户信息，为本质上无状态的 HTTP 协议提供有状态的体验。这些用户信息在服务器端持久存储。Goravel 提供了一个统一的接口，用于与各种持久存储驱动进行交互。 Configuration session 配置文件位于 config/session.go。默认驱动是 file，它会把 s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Session\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"Configuration","slug":"configuration","link":"#configuration","children":[{"level":3,"title":"注册 Middleware","slug":"注册-middleware","link":"#注册-middleware","children":[]}]},{"level":2,"title":"使用 Session","slug":"使用-session","link":"#使用-session","children":[{"level":3,"title":"获取数据","slug":"获取数据","link":"#获取数据","children":[]},{"level":3,"title":"获取所有数据","slug":"获取所有数据","link":"#获取所有数据","children":[]},{"level":3,"title":"获取数据子集","slug":"获取数据子集","link":"#获取数据子集","children":[]},{"level":3,"title":"确定会话中是否存在项目","slug":"确定会话中是否存在项目","link":"#确定会话中是否存在项目","children":[]},{"level":3,"title":"存储数据","slug":"存储数据","link":"#存储数据","children":[]},{"level":3,"title":"检索并删除数据","slug":"检索并删除数据","link":"#检索并删除数据","children":[]},{"level":3,"title":"删除数据","slug":"删除数据","link":"#删除数据","children":[]},{"level":3,"title":"重新生成会话 ID","slug":"重新生成会话-id","link":"#重新生成会话-id","children":[]},{"level":3,"title":"闪存数据","slug":"闪存数据","link":"#闪存数据","children":[]}]},{"level":2,"title":"会话管理器","slug":"会话管理器","link":"#会话管理器","children":[{"level":3,"title":"构建自定义会话","slug":"构建自定义会话","link":"#构建自定义会话","children":[]},{"level":3,"title":"添加自定义会话驱动","slug":"添加自定义会话驱动","link":"#添加自定义会话驱动","children":[]},{"level":3,"title":"获取驱动实例","slug":"获取驱动实例","link":"#获取驱动实例","children":[]},{"level":3,"title":"开始新会话","slug":"开始新会话","link":"#开始新会话","children":[]},{"level":3,"title":"保存会话数据","slug":"保存会话数据","link":"#保存会话数据","children":[]},{"level":3,"title":"将会话附加到请求","slug":"将会话附加到请求","link":"#将会话附加到请求","children":[]},{"level":3,"title":"检查请求是否有会话","slug":"检查请求是否有会话","link":"#检查请求是否有会话","children":[]}]}],"git":{},"filePathRelative":"zh/the-basics/session.md","autoDesc":true}');export{f as comp,b as data};
