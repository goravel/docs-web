import{_ as c,r as u,o as i,c as l,b as n,d as a,w as t,e as s,f as e}from"./app.8e7f4439.js";const r={},d=n("h1",{id:"routing",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#routing","aria-hidden":"true"},"#"),s(" Routing")],-1),k={class:"table-of-contents"},g=s("Introduction"),h=s("Default Routing File"),v=s("Start HTTP Server"),f=s("Routing Methods"),m=s("Basic Routing"),b=s("Group Routing"),R=s("Routing Prefix"),_=s("File Routing"),q=s("Routing Parameters"),w=s("Middleware"),x=s("Testing Routing"),S=e(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Goravel routing module can operated by <code>facades.Route</code>.</p><h2 id="default-routing-file" tabindex="-1"><a class="header-anchor" href="#default-routing-file" aria-hidden="true">#</a> Default Routing File</h2><p>All routing files are defined in the <code>/routes</code> directory. The framework defaults to a sample route <code>/routes/web.go</code>, in which the <code>func Web()</code> method is registered in the <code>app/providers/route_service_provider.go</code> file to achieve routing binding.</p><p>You can add routing files under the <code>routes</code> directory to perform more fine-grained management, then register them in the <code>app/providers/route_service_provider.go</code> file.</p><h2 id="start-http-server" tabindex="-1"><a class="header-anchor" href="#start-http-server" aria-hidden="true">#</a> Start HTTP Server</h2><p>Start the HTTP server in <code>main.go</code> in the root directory.</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

  <span class="token string">&quot;goravel/bootstrap&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//This bootstraps the framework and gets it ready for use.</span>
  bootstrap<span class="token punctuation">.</span><span class="token function">Boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">//Start http server by facades.Route.</span>
  <span class="token keyword">go</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span>facades<span class="token punctuation">.</span>Config<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;app.host&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
      facades<span class="token punctuation">.</span>Log<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;Route run error: %v&quot;</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">select</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="routing-methods" tabindex="-1"><a class="header-anchor" href="#routing-methods" aria-hidden="true">#</a> Routing Methods</h3><table><thead><tr><th>Methods</th><th>Action</th></tr></thead><tbody><tr><td>Run</td><td><a href="#Start-HTTP-Server">Start HTTP Server</a></td></tr><tr><td>Group</td><td><a href="#Group-Routing">Group Routing</a></td></tr><tr><td>Prefix</td><td><a href="#Routing-Prefix">Routing Prefix</a></td></tr><tr><td>ServeHTTP</td><td><a href="#Testing-Routing">Testing Routing</a></td></tr><tr><td>Get</td><td><a href="#Basic-Routing">Basic Routing</a></td></tr><tr><td>Post</td><td><a href="#Basic-Routing">Basic Routing</a></td></tr><tr><td>Put</td><td><a href="#Basic-Routing">Basic Routing</a></td></tr><tr><td>Delete</td><td><a href="#Basic-Routing">Basic Routing</a></td></tr><tr><td>Patch</td><td><a href="#Basic-Routing">Basic Routing</a></td></tr><tr><td>Options</td><td><a href="#Basic-Routing">Basic Routing</a></td></tr><tr><td>Any</td><td><a href="#Basic-Routing">Basic Routing</a></td></tr><tr><td>Static</td><td><a href="#File-Routing">File Routing</a></td></tr><tr><td>StaticFile</td><td><a href="#File-Routing">File Routing</a></td></tr><tr><td>StaticFS</td><td><a href="#File-Routing">File Routing</a></td></tr><tr><td>Middleware</td><td><a href="#Middleware">Middleware</a></td></tr></tbody></table><h2 id="basic-routing" tabindex="-1"><a class="header-anchor" href="#basic-routing" aria-hidden="true">#</a> Basic Routing</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> userController<span class="token punctuation">.</span>Show<span class="token punctuation">)</span>
facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Post</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> userController<span class="token punctuation">.</span>Show<span class="token punctuation">)</span>
facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Put</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> userController<span class="token punctuation">.</span>Show<span class="token punctuation">)</span>
facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Delete</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> userController<span class="token punctuation">.</span>Show<span class="token punctuation">)</span>
facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Patch</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> userController<span class="token punctuation">.</span>Show<span class="token punctuation">)</span>
facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Options</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> userController<span class="token punctuation">.</span>Show<span class="token punctuation">)</span>
facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Any</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> userController<span class="token punctuation">.</span>Show<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="group-routing" tabindex="-1"><a class="header-anchor" href="#group-routing" aria-hidden="true">#</a> Group Routing</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Group</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>route route<span class="token punctuation">.</span>Route<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  route<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;group/{id}&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx http<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span><span class="token function">Response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span>ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="routing-prefix" tabindex="-1"><a class="header-anchor" href="#routing-prefix" aria-hidden="true">#</a> Routing Prefix</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Prefix</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> userController<span class="token punctuation">.</span>Show<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="file-routing" tabindex="-1"><a class="header-anchor" href="#file-routing" aria-hidden="true">#</a> File Routing</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Static</span><span class="token punctuation">(</span><span class="token string">&quot;static&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./public&quot;</span><span class="token punctuation">)</span>
facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">StaticFile</span><span class="token punctuation">(</span><span class="token string">&quot;static-file&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./public/logo.png&quot;</span><span class="token punctuation">)</span>
facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">StaticFS</span><span class="token punctuation">(</span><span class="token string">&quot;static-fs&quot;</span><span class="token punctuation">,</span> nethttp<span class="token punctuation">.</span><span class="token function">Dir</span><span class="token punctuation">(</span><span class="token string">&quot;./public&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="routing-parameters" tabindex="-1"><a class="header-anchor" href="#routing-parameters" aria-hidden="true">#</a> Routing Parameters</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;/input/{id}&quot;</span><span class="token punctuation">,</span> <span class="token keyword">func</span><span class="token punctuation">(</span>ctx http<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ctx<span class="token punctuation">.</span><span class="token function">Response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Json</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>Json<span class="token punctuation">{</span>
    <span class="token string">&quot;id&quot;</span><span class="token punctuation">:</span> ctx<span class="token punctuation">.</span><span class="token function">Request</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Input</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),y=s("Detail "),T=s("Request"),B=e(`<h2 id="middleware" tabindex="-1"><a class="header-anchor" href="#middleware" aria-hidden="true">#</a> Middleware</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/http/middleware&quot;</span>

facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Middleware</span><span class="token punctuation">(</span>middleware<span class="token punctuation">.</span><span class="token function">Cors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;users&quot;</span><span class="token punctuation">,</span> userController<span class="token punctuation">.</span>Show<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),P=s("Detail "),C=s("Middleware"),G=e(`<h2 id="testing-routing" tabindex="-1"><a class="header-anchor" href="#testing-routing" aria-hidden="true">#</a> Testing Routing</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">TestHttp</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  w <span class="token operator">:=</span> httptest<span class="token punctuation">.</span><span class="token function">NewRecorder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  req<span class="token punctuation">,</span> err <span class="token operator">:=</span> http<span class="token punctuation">.</span><span class="token function">NewRequest</span><span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/users&quot;</span><span class="token punctuation">,</span> <span class="token boolean">nil</span><span class="token punctuation">)</span>
  assert<span class="token punctuation">.</span><span class="token function">Nil</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> err<span class="token punctuation">)</span>
  facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">ServeHTTP</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> req<span class="token punctuation">)</span>
  assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> w<span class="token punctuation">.</span>Code<span class="token punctuation">)</span>
  assert<span class="token punctuation">.</span><span class="token function">Equal</span><span class="token punctuation">(</span>t<span class="token punctuation">,</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> w<span class="token punctuation">.</span>Body<span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function F(M,H){const o=u("router-link"),p=u("RouterLink");return i(),l("div",null,[d,n("nav",k,[n("ul",null,[n("li",null,[a(o,{to:"#introduction"},{default:t(()=>[g]),_:1})]),n("li",null,[a(o,{to:"#default-routing-file"},{default:t(()=>[h]),_:1})]),n("li",null,[a(o,{to:"#start-http-server"},{default:t(()=>[v]),_:1}),n("ul",null,[n("li",null,[a(o,{to:"#routing-methods"},{default:t(()=>[f]),_:1})])])]),n("li",null,[a(o,{to:"#basic-routing"},{default:t(()=>[m]),_:1})]),n("li",null,[a(o,{to:"#group-routing"},{default:t(()=>[b]),_:1})]),n("li",null,[a(o,{to:"#routing-prefix"},{default:t(()=>[R]),_:1})]),n("li",null,[a(o,{to:"#file-routing"},{default:t(()=>[_]),_:1})]),n("li",null,[a(o,{to:"#routing-parameters"},{default:t(()=>[q]),_:1})]),n("li",null,[a(o,{to:"#middleware"},{default:t(()=>[w]),_:1})]),n("li",null,[a(o,{to:"#testing-routing"},{default:t(()=>[x]),_:1})])])]),S,n("p",null,[y,a(p,{to:"/the-basics/request.html"},{default:t(()=>[T]),_:1})]),B,n("p",null,[P,a(p,{to:"/the-basics/middleware.html"},{default:t(()=>[C]),_:1})]),G])}const N=c(r,[["render",F],["__file","routing.html.vue"]]);export{N as default};