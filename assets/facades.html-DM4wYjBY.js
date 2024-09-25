import{_ as d,r as o,o as i,c as u,a as t,b as n,w as a,e as p,d as e}from"./app-CL4YvOJX.js";const r={},h=t("h1",{id:"facades",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#facades"},[t("span",null,"Facades")])],-1),f={class:"table-of-contents"},g=p(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p><code>facades</code> 为应用的核心功能提供一个「静态」接口，能够提供更加灵活、更加优雅、易于测试的语法。</p><p>Goravel 所有的 <code>facades</code> 都定义在 <code>github.com/goravel/framework/facades</code> 下。我们可以很轻松的使用 <code>facades</code>：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

facades<span class="token punctuation">.</span><span class="token function">Route</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span>facades<span class="token punctuation">.</span><span class="token function">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;app.host&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="facades-工作原理" tabindex="-1"><a class="header-anchor" href="#facades-工作原理"><span>facades 工作原理</span></a></h2><p><code>facades</code> 一般会在各模块 <code>ServerProvider</code> 的 <code>Register</code> 或 <code>Boot</code> 阶段进行实例化。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>config <span class="token operator">*</span>ServiceProvider<span class="token punctuation">)</span> <span class="token function">Register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app <span class="token operator">:=</span> Application<span class="token punctuation">{</span><span class="token punctuation">}</span>
  facades<span class="token punctuation">.</span>Config <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果该 <code>facades</code> 使用了其他 <code>facades</code>，那么就在 <code>ServerProvider</code> 的 <code>Boot</code> 阶段进行实例化：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>database <span class="token operator">*</span>ServiceProvider<span class="token punctuation">)</span> <span class="token function">Boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app <span class="token operator">:=</span> Application<span class="token punctuation">{</span><span class="token punctuation">}</span>
  facades<span class="token punctuation">.</span>DB <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="facade-类参考" tabindex="-1"><a class="header-anchor" href="#facade-类参考"><span>facade 类参考</span></a></h2>`,10),_=t("thead",null,[t("tr",null,[t("th",null,"Facade"),t("th",null,"文档")])],-1),m=t("td",null,"App",-1),k=t("td",null,"Artisan",-1),v=t("td",null,"Auth",-1),b=t("td",null,"Cache",-1),z=t("td",null,"Config",-1),y=t("td",null,"Crypt",-1),S=t("td",null,"Event",-1),x=t("td",null,"Gate",-1),C=t("td",null,"Grpc",-1),R=t("td",null,"Hash",-1),w=t("td",null,"Log",-1),G=t("td",null,"Mail",-1),B=t("td",null,"Orm",-1),N=t("td",null,"Queue",-1),A=t("td",null,"RateLimiter",-1),F=t("td",null,"Route",-1),q=t("td",null,"Seeder",-1),P=t("td",null,"Schedule",-1),V=t("td",null,"Storage",-1),L=t("td",null,"Testing",-1),M=t("td",null,"Validation",-1);function O(D,E){const l=o("router-link"),s=o("RouteLink"),c=o("CommentService");return i(),u("div",null,[h,t("nav",f,[t("ul",null,[t("li",null,[n(l,{to:"#简介"},{default:a(()=>[e("简介")]),_:1})]),t("li",null,[n(l,{to:"#facades-工作原理"},{default:a(()=>[e("facades 工作原理")]),_:1})]),t("li",null,[n(l,{to:"#facade-类参考"},{default:a(()=>[e("facade 类参考")]),_:1})])])]),g,t("table",null,[_,t("tbody",null,[t("tr",null,[m,t("td",null,[n(s,{to:"/zh/architecutre-concepts/service-container.html"},{default:a(()=>[e("容器")]),_:1})])]),t("tr",null,[k,t("td",null,[n(s,{to:"/zh/digging-deeper/artisan-console.html"},{default:a(()=>[e("命令行工具")]),_:1})])]),t("tr",null,[v,t("td",null,[n(s,{to:"/zh/security/authentication.html"},{default:a(()=>[e("用户认证")]),_:1})])]),t("tr",null,[b,t("td",null,[n(s,{to:"/zh/digging-deeper/cache.html"},{default:a(()=>[e("缓存系统")]),_:1})])]),t("tr",null,[z,t("td",null,[n(s,{to:"/zh/getting-started/configuration.html"},{default:a(()=>[e("配置信息")]),_:1})])]),t("tr",null,[y,t("td",null,[n(s,{to:"/zh/security/encryption.html"},{default:a(()=>[e("加密解密")]),_:1})])]),t("tr",null,[S,t("td",null,[n(s,{to:"/zh/digging-deeper/event.html"},{default:a(()=>[e("事件系统")]),_:1})])]),t("tr",null,[x,t("td",null,[n(s,{to:"/zh/security/authorization.html"},{default:a(()=>[e("用户授权")]),_:1})])]),t("tr",null,[C,t("td",null,[n(s,{to:"/zh/the-basics/grpc.html"},{default:a(()=>[e("Grpc")]),_:1})])]),t("tr",null,[R,t("td",null,[n(s,{to:"/zh/security/hashing.html"},{default:a(()=>[e("哈希")]),_:1})])]),t("tr",null,[w,t("td",null,[n(s,{to:"/zh/the-basics/logging.html"},{default:a(()=>[e("日志")]),_:1})])]),t("tr",null,[G,t("td",null,[n(s,{to:"/zh/digging-deeper/mail.html"},{default:a(()=>[e("邮件")]),_:1})])]),t("tr",null,[B,t("td",null,[n(s,{to:"/zh/orm/getting-started.html"},{default:a(()=>[e("ORM")]),_:1})])]),t("tr",null,[N,t("td",null,[n(s,{to:"/zh/digging-deeper/queues.html"},{default:a(()=>[e("队列")]),_:1})])]),t("tr",null,[A,t("td",null,[n(s,{to:"/zh/the-basics/routing.html"},{default:a(()=>[e("限流器")]),_:1})])]),t("tr",null,[F,t("td",null,[n(s,{to:"/zh/the-basics/routing.html"},{default:a(()=>[e("路由")]),_:1})])]),t("tr",null,[q,t("td",null,[n(s,{to:"/zh/orm/seeding.html"},{default:a(()=>[e("数据填充")]),_:1})])]),t("tr",null,[P,t("td",null,[n(s,{to:"/zh/digging-deeper/task-scheduling.html"},{default:a(()=>[e("任务调度")]),_:1})])]),t("tr",null,[V,t("td",null,[n(s,{to:"/zh/digging-deeper/filesystem.html"},{default:a(()=>[e("文件系统")]),_:1})])]),t("tr",null,[L,t("td",null,[n(s,{to:"/zh/testing/getting-started.html"},{default:a(()=>[e("测试")]),_:1})])]),t("tr",null,[M,t("td",null,[n(s,{to:"/zh/the-basics/validation.html"},{default:a(()=>[e("表单验证")]),_:1})])])])]),n(c)])}const T=d(r,[["render",O],["__file","facades.html.vue"]]),j=JSON.parse('{"path":"/zh/architecutre-concepts/facades.html","title":"Facades","lang":"zh-CN","frontmatter":{"description":"Facades 简介 facades 为应用的核心功能提供一个「静态」接口，能够提供更加灵活、更加优雅、易于测试的语法。 Goravel 所有的 facades 都定义在 github.com/goravel/framework/facades 下。我们可以很轻松的使用 facades： facades 工作原理 facades 一般会在各模块 Ser...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/architecutre-concepts/facades.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/architecutre-concepts/facades.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/architecutre-concepts/facades.html"}],["meta",{"property":"og:description","content":"Facades 简介 facades 为应用的核心功能提供一个「静态」接口，能够提供更加灵活、更加优雅、易于测试的语法。 Goravel 所有的 facades 都定义在 github.com/goravel/framework/facades 下。我们可以很轻松的使用 facades： facades 工作原理 facades 一般会在各模块 Ser..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Facades\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"facades 工作原理","slug":"facades-工作原理","link":"#facades-工作原理","children":[]},{"level":2,"title":"facade 类参考","slug":"facade-类参考","link":"#facade-类参考","children":[]}],"git":{},"filePathRelative":"zh/architecutre-concepts/facades.md","autoDesc":true}');export{T as comp,j as data};