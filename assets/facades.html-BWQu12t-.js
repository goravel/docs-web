import{_ as i,r as l,o as d,c as u,a as t,b as n,w as e,e as r,d as a}from"./app-C1EstAlD.js";const p={},h=t("h1",{id:"facades",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#facades"},[t("span",null,"Facades")])],-1),f={class:"table-of-contents"},g=r(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p><code>facades</code> provide a &quot;static&quot; interface for the core functionality of the application and provide a more flexible, more elegant, and easy-to-test syntax.</p><p>All <code>facades</code> of Goravel are defined under <code>github.com/goravel/framework/facades</code>. We can easily use <code>facades</code>:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

facades<span class="token punctuation">.</span><span class="token function">Route</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Run</span><span class="token punctuation">(</span>facades<span class="token punctuation">.</span><span class="token function">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;app.host&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-facades-work" tabindex="-1"><a class="header-anchor" href="#how-facades-work"><span>How Facades Work</span></a></h2><p><code>facades</code> are generally instantiated in the <code>Register</code> or <code>Boot</code> stage of each module <code>ServerProvider</code>.</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>config <span class="token operator">*</span>ServiceProvider<span class="token punctuation">)</span> <span class="token function">Register</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app <span class="token operator">:=</span> Application<span class="token punctuation">{</span><span class="token punctuation">}</span>
  facades<span class="token punctuation">.</span>Config <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the <code>facades</code> use other <code>facades</code>, then instantiate them in the <code>Boot</code> phase of the <code>ServerProvider</code>:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>database <span class="token operator">*</span>ServiceProvider<span class="token punctuation">)</span> <span class="token function">Boot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  app <span class="token operator">:=</span> Application<span class="token punctuation">{</span><span class="token punctuation">}</span>
  facades<span class="token punctuation">.</span>DB <span class="token operator">=</span> app<span class="token punctuation">.</span><span class="token function">Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="facade-class-reference" tabindex="-1"><a class="header-anchor" href="#facade-class-reference"><span>Facade Class Reference</span></a></h2>`,10),m=t("thead",null,[t("tr",null,[t("th",null,"Facade"),t("th",null,"Document")])],-1),_=t("td",null,"App",-1),k=t("td",null,"Artisan",-1),v=t("td",null,"Auth",-1),b=t("td",null,"Cache",-1),y=t("td",null,"Config",-1),w=t("td",null,"Crypt",-1),x=t("td",null,"Event",-1),C=t("td",null,"Gate",-1),S=t("td",null,"Grpc",-1),R=t("td",null,"Hash",-1),F=t("td",null,"Log",-1),A=t("td",null,"Mail",-1),I=t("td",null,"Orm",-1),q=t("td",null,"Queue",-1),B=t("td",null,"RateLimiter",-1),G=t("td",null,"Route",-1),L=t("td",null,"Seeder",-1),N=t("td",null,"Schedule",-1),V=t("td",null,"Storage",-1),z=t("td",null,"Testing",-1),H=t("td",null,"Validation",-1);function P(E,M){const o=l("router-link"),s=l("RouteLink"),c=l("CommentService");return d(),u("div",null,[h,t("nav",f,[t("ul",null,[t("li",null,[n(o,{to:"#introduction"},{default:e(()=>[a("Introduction")]),_:1})]),t("li",null,[n(o,{to:"#how-facades-work"},{default:e(()=>[a("How Facades Work")]),_:1})]),t("li",null,[n(o,{to:"#facade-class-reference"},{default:e(()=>[a("Facade Class Reference")]),_:1})])])]),g,t("table",null,[m,t("tbody",null,[t("tr",null,[_,t("td",null,[n(s,{to:"/architecutre-concepts/service-container.html"},{default:e(()=>[a("Container")]),_:1})])]),t("tr",null,[k,t("td",null,[n(s,{to:"/digging-deeper/artisan-console.html"},{default:e(()=>[a("Command Console")]),_:1})])]),t("tr",null,[v,t("td",null,[n(s,{to:"/security/authentication.html"},{default:e(()=>[a("Authentication")]),_:1})])]),t("tr",null,[b,t("td",null,[n(s,{to:"/digging-deeper/cache.html"},{default:e(()=>[a("Cache")]),_:1})])]),t("tr",null,[y,t("td",null,[n(s,{to:"/getting-started/configuration.html"},{default:e(()=>[a("Configuration")]),_:1})])]),t("tr",null,[w,t("td",null,[n(s,{to:"/security/encryption.html"},{default:e(()=>[a("Encryption")]),_:1})])]),t("tr",null,[x,t("td",null,[n(s,{to:"/digging-deeper/event.html"},{default:e(()=>[a("Event")]),_:1})])]),t("tr",null,[C,t("td",null,[n(s,{to:"/security/authorization.html"},{default:e(()=>[a("Authorization")]),_:1})])]),t("tr",null,[S,t("td",null,[n(s,{to:"/the-basics/grpc.html"},{default:e(()=>[a("Grpc")]),_:1})])]),t("tr",null,[R,t("td",null,[n(s,{to:"/security/hashing.html"},{default:e(()=>[a("Hashing")]),_:1})])]),t("tr",null,[F,t("td",null,[n(s,{to:"/the-basics/logging.html"},{default:e(()=>[a("Log")]),_:1})])]),t("tr",null,[A,t("td",null,[n(s,{to:"/digging-deeper/mail.html"},{default:e(()=>[a("Mail")]),_:1})])]),t("tr",null,[I,t("td",null,[n(s,{to:"/orm/getting-started.html"},{default:e(()=>[a("ORM")]),_:1})])]),t("tr",null,[q,t("td",null,[n(s,{to:"/digging-deeper/queues.html"},{default:e(()=>[a("Queue")]),_:1})])]),t("tr",null,[B,t("td",null,[n(s,{to:"/the-basics/routing.html"},{default:e(()=>[a("RateLimiter")]),_:1})])]),t("tr",null,[G,t("td",null,[n(s,{to:"/the-basics/routing.html"},{default:e(()=>[a("Route")]),_:1})])]),t("tr",null,[L,t("td",null,[n(s,{to:"/orm/seeding.html"},{default:e(()=>[a("Seeder")]),_:1})])]),t("tr",null,[N,t("td",null,[n(s,{to:"/digging-deeper/task-scheduling.html"},{default:e(()=>[a("Schedule")]),_:1})])]),t("tr",null,[V,t("td",null,[n(s,{to:"/digging-deeper/task-scheduling.html"},{default:e(()=>[a("Storage")]),_:1})])]),t("tr",null,[z,t("td",null,[n(s,{to:"/testing/getting-started.html"},{default:e(()=>[a("Testing")]),_:1})])]),t("tr",null,[H,t("td",null,[n(s,{to:"/digging-deeper/task-scheduling.html"},{default:e(()=>[a("Validation")]),_:1})])])])]),n(c)])}const D=i(p,[["render",P],["__file","facades.html.vue"]]),O=JSON.parse('{"path":"/architecutre-concepts/facades.html","title":"Facades","lang":"en-US","frontmatter":{"description":"Facades Introduction facades provide a \\"static\\" interface for the core functionality of the application and provide a more flexible, more elegant, and easy-to-test syntax. All f...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goravel.dev/zh/architecutre-concepts/facades.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/architecutre-concepts/facades.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/architecutre-concepts/facades.html"}],["meta",{"property":"og:description","content":"Facades Introduction facades provide a \\"static\\" interface for the core functionality of the application and provide a more flexible, more elegant, and easy-to-test syntax. All f..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Facades\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"How Facades Work","slug":"how-facades-work","link":"#how-facades-work","children":[]},{"level":2,"title":"Facade Class Reference","slug":"facade-class-reference","link":"#facade-class-reference","children":[]}],"git":{},"filePathRelative":"architecutre-concepts/facades.md","autoDesc":true}');export{D as comp,O as data};