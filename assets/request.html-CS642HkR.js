import{_ as c,r as p,o as l,c as u,a as n,b as s,w as t,e as i,d as e}from"./app-ClnRftAW.js";const r={},d=n("h1",{id:"请求",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#请求"},[n("span",null,"请求")])],-1),k={class:"table-of-contents"},v=i(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>Goravel 的 <code>contracts/http/Request</code> 方法可以与应用程序处理的当前 HTTP 请求进行交互，以及检索与请求一起提交的输入内容和文件。</p><h2 id="与请求交互" tabindex="-1"><a class="header-anchor" href="#与请求交互"><span>与请求交互</span></a></h2><p><code>http.Context</code> 实例被自动注入到控制器中：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/contracts/http&quot;</span>

facades<span class="token punctuation">.</span><span class="token function">Route</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx http<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取请求路径" tabindex="-1"><a class="header-anchor" href="#获取请求路径"><span>获取请求路径</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>path <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Path</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// /users</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取请求-url" tabindex="-1"><a class="header-anchor" href="#获取请求-url"><span>获取请求 URL</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>url <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Url</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// /users?name=Goravel</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取请求-host" tabindex="-1"><a class="header-anchor" href="#获取请求-host"><span>获取请求 HOST</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>url <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Host</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取完整-url" tabindex="-1"><a class="header-anchor" href="#获取完整-url"><span>获取完整 URL</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>url <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">FullUrl</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// http://**/users?name=Goravel</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取请求方法" tabindex="-1"><a class="header-anchor" href="#获取请求方法"><span>获取请求方法</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>method <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Method</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取请求头" tabindex="-1"><a class="header-anchor" href="#获取请求头"><span>获取请求头</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>header <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Header</span><span class="token punctuation">(</span><span class="token string">&quot;X-Header-Name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span>
headers <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Headers</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取-ip-地址" tabindex="-1"><a class="header-anchor" href="#获取-ip-地址"><span>获取 IP 地址</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>ip <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="输入" tabindex="-1"><a class="header-anchor" href="#输入"><span>输入</span></a></h2><h3 id="获取所有输入数据" tabindex="-1"><a class="header-anchor" href="#获取所有输入数据"><span>获取所有输入数据</span></a></h3><p>可以使用 <code>All</code> 方法以 <code>map[string]any</code> 的形式检索所有传入请求的输入数据，是 <code>json</code>， <code>form</code> 和 <code>query</code> 的合集（优先级由前到后）。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>data <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">All</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取路由中的参数" tabindex="-1"><a class="header-anchor" href="#获取路由中的参数"><span>获取路由中的参数</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// /users/{id}</span>
id <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Route</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
id <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">RouteInt</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
id <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">RouteInt64</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取路由传入的参数" tabindex="-1"><a class="header-anchor" href="#获取路由传入的参数"><span>获取路由传入的参数</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// /users?name=goravel</span>
name <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
name <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// /users?id=1</span>
name <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">QueryInt</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
name <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">QueryInt64</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
name <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">QueryBool</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// /users?names=goravel1&amp;names=goravel2</span>
names <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">QueryArray</span><span class="token punctuation">(</span><span class="token string">&quot;names&quot;</span><span class="token punctuation">)</span>

<span class="token comment">// /users?names[a]=goravel1&amp;names[b]=goravel2</span>
names <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">QueryMap</span><span class="token punctuation">(</span><span class="token string">&quot;names&quot;</span><span class="token punctuation">)</span>

queries <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Queries</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检索一个输入值" tabindex="-1"><a class="header-anchor" href="#检索一个输入值"><span>检索一个输入值</span></a></h3><p>获取所有的用户输入数据，而不用在意用户使用的是哪种 HTTP 动词，不管是什么 HTTP 动词。检索顺序为：<code>json</code>, <code>form</code>, <code>query</code>, <code>route</code>。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>name <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Input</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
name <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Input</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;goravel&quot;</span><span class="token punctuation">)</span>
name <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">InputInt</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
name <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">InputInt64</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
name <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">InputBool</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
name <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">InputArray</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
name <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">InputMap</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json-form-绑定-struct" tabindex="-1"><a class="header-anchor" href="#json-form-绑定-struct"><span>json/form 绑定 struct</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">type</span> User <span class="token keyword">struct</span> <span class="token punctuation">{</span>
  Name <span class="token builtin">string</span> <span class="token string">\`form:&quot;code&quot; json:&quot;code&quot;\`</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> user User
err <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Bind</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">var</span> user <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>any
err <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Bind</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件" tabindex="-1"><a class="header-anchor" href="#文件"><span>文件</span></a></h2><h3 id="获取上传的文件" tabindex="-1"><a class="header-anchor" href="#获取上传的文件"><span>获取上传的文件</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>file<span class="token punctuation">,</span> err <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">File</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="储存上传的文件" tabindex="-1"><a class="header-anchor" href="#储存上传的文件"><span>储存上传的文件</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>file<span class="token punctuation">,</span> err <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">File</span><span class="token punctuation">(</span><span class="token string">&quot;file&quot;</span><span class="token punctuation">)</span>
file<span class="token punctuation">.</span><span class="token function">Store</span><span class="token punctuation">(</span><span class="token string">&quot;./public/test.png&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="中断请求" tabindex="-1"><a class="header-anchor" href="#中断请求"><span>中断请求</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AbortWithStatus</span><span class="token punctuation">(</span><span class="token number">403</span><span class="token punctuation">)</span>
ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">AbortWithStatusJson</span><span class="token punctuation">(</span><span class="token number">403</span><span class="token punctuation">,</span> http<span class="token punctuation">.</span>Json<span class="token punctuation">{</span>
  <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;World&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取原始-request" tabindex="-1"><a class="header-anchor" href="#获取原始-request"><span>获取原始 Request</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>request <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Origin</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="附加数据" tabindex="-1"><a class="header-anchor" href="#附加数据"><span>附加数据</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>ctx<span class="token punctuation">.</span><span class="token function">WithValue</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Goravel&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取数据" tabindex="-1"><a class="header-anchor" href="#获取数据"><span>获取数据</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>user <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Value</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="获取-context" tabindex="-1"><a class="header-anchor" href="#获取-context"><span>获取 Context</span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>ctx <span class="token operator">:=</span> ctx<span class="token punctuation">.</span><span class="token function">Context</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,48);function g(m,h){const a=p("router-link"),o=p("CommentService");return l(),u("div",null,[d,n("nav",k,[n("ul",null,[n("li",null,[s(a,{to:"#简介"},{default:t(()=>[e("简介")]),_:1})]),n("li",null,[s(a,{to:"#与请求交互"},{default:t(()=>[e("与请求交互")]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#获取请求路径"},{default:t(()=>[e("获取请求路径")]),_:1})]),n("li",null,[s(a,{to:"#获取请求-url"},{default:t(()=>[e("获取请求 URL")]),_:1})]),n("li",null,[s(a,{to:"#获取请求-host"},{default:t(()=>[e("获取请求 HOST")]),_:1})]),n("li",null,[s(a,{to:"#获取完整-url"},{default:t(()=>[e("获取完整 URL")]),_:1})]),n("li",null,[s(a,{to:"#获取请求方法"},{default:t(()=>[e("获取请求方法")]),_:1})]),n("li",null,[s(a,{to:"#获取请求头"},{default:t(()=>[e("获取请求头")]),_:1})]),n("li",null,[s(a,{to:"#获取-ip-地址"},{default:t(()=>[e("获取 IP 地址")]),_:1})])])]),n("li",null,[s(a,{to:"#输入"},{default:t(()=>[e("输入")]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#获取所有输入数据"},{default:t(()=>[e("获取所有输入数据")]),_:1})]),n("li",null,[s(a,{to:"#获取路由中的参数"},{default:t(()=>[e("获取路由中的参数")]),_:1})]),n("li",null,[s(a,{to:"#获取路由传入的参数"},{default:t(()=>[e("获取路由传入的参数")]),_:1})]),n("li",null,[s(a,{to:"#检索一个输入值"},{default:t(()=>[e("检索一个输入值")]),_:1})]),n("li",null,[s(a,{to:"#json-form-绑定-struct"},{default:t(()=>[e("json/form 绑定 struct")]),_:1})])])]),n("li",null,[s(a,{to:"#文件"},{default:t(()=>[e("文件")]),_:1}),n("ul",null,[n("li",null,[s(a,{to:"#获取上传的文件"},{default:t(()=>[e("获取上传的文件")]),_:1})]),n("li",null,[s(a,{to:"#储存上传的文件"},{default:t(()=>[e("储存上传的文件")]),_:1})]),n("li",null,[s(a,{to:"#中断请求"},{default:t(()=>[e("中断请求")]),_:1})]),n("li",null,[s(a,{to:"#获取原始-request"},{default:t(()=>[e("获取原始 Request")]),_:1})]),n("li",null,[s(a,{to:"#附加数据"},{default:t(()=>[e("附加数据")]),_:1})]),n("li",null,[s(a,{to:"#获取数据"},{default:t(()=>[e("获取数据")]),_:1})]),n("li",null,[s(a,{to:"#获取-context"},{default:t(()=>[e("获取 Context")]),_:1})])])])])]),v,s(o)])}const b=c(r,[["render",g],["__file","request.html.vue"]]),q=JSON.parse('{"path":"/zh/the-basics/request.html","title":"请求","lang":"zh-CN","frontmatter":{"description":"请求 简介 Goravel 的 contracts/http/Request 方法可以与应用程序处理的当前 HTTP 请求进行交互，以及检索与请求一起提交的输入内容和文件。 与请求交互 http.Context 实例被自动注入到控制器中： 获取请求路径 获取请求 URL 获取请求 HOST 获取完整 URL 获取请求方法 获取请求头 获取 IP 地址 ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/the-basics/request.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/the-basics/request.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/the-basics/request.html"}],["meta",{"property":"og:description","content":"请求 简介 Goravel 的 contracts/http/Request 方法可以与应用程序处理的当前 HTTP 请求进行交互，以及检索与请求一起提交的输入内容和文件。 与请求交互 http.Context 实例被自动注入到控制器中： 获取请求路径 获取请求 URL 获取请求 HOST 获取完整 URL 获取请求方法 获取请求头 获取 IP 地址 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"请求\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"与请求交互","slug":"与请求交互","link":"#与请求交互","children":[{"level":3,"title":"获取请求路径","slug":"获取请求路径","link":"#获取请求路径","children":[]},{"level":3,"title":"获取请求 URL","slug":"获取请求-url","link":"#获取请求-url","children":[]},{"level":3,"title":"获取请求 HOST","slug":"获取请求-host","link":"#获取请求-host","children":[]},{"level":3,"title":"获取完整 URL","slug":"获取完整-url","link":"#获取完整-url","children":[]},{"level":3,"title":"获取请求方法","slug":"获取请求方法","link":"#获取请求方法","children":[]},{"level":3,"title":"获取请求头","slug":"获取请求头","link":"#获取请求头","children":[]},{"level":3,"title":"获取 IP 地址","slug":"获取-ip-地址","link":"#获取-ip-地址","children":[]}]},{"level":2,"title":"输入","slug":"输入","link":"#输入","children":[{"level":3,"title":"获取所有输入数据","slug":"获取所有输入数据","link":"#获取所有输入数据","children":[]},{"level":3,"title":"获取路由中的参数","slug":"获取路由中的参数","link":"#获取路由中的参数","children":[]},{"level":3,"title":"获取路由传入的参数","slug":"获取路由传入的参数","link":"#获取路由传入的参数","children":[]},{"level":3,"title":"检索一个输入值","slug":"检索一个输入值","link":"#检索一个输入值","children":[]},{"level":3,"title":"json/form 绑定 struct","slug":"json-form-绑定-struct","link":"#json-form-绑定-struct","children":[]}]},{"level":2,"title":"文件","slug":"文件","link":"#文件","children":[{"level":3,"title":"获取上传的文件","slug":"获取上传的文件","link":"#获取上传的文件","children":[]},{"level":3,"title":"储存上传的文件","slug":"储存上传的文件","link":"#储存上传的文件","children":[]},{"level":3,"title":"中断请求","slug":"中断请求","link":"#中断请求","children":[]},{"level":3,"title":"获取原始 Request","slug":"获取原始-request","link":"#获取原始-request","children":[]},{"level":3,"title":"附加数据","slug":"附加数据","link":"#附加数据","children":[]},{"level":3,"title":"获取数据","slug":"获取数据","link":"#获取数据","children":[]},{"level":3,"title":"获取 Context","slug":"获取-context","link":"#获取-context","children":[]}]}],"git":{},"filePathRelative":"zh/the-basics/request.md","autoDesc":true}');export{b as comp,q as data};
