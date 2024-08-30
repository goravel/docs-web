import{_ as p,r as i,o as s,c,a as e,b as o,w as n,d as t,e as h}from"./app-szi7K--b.js";const g={},u=e("h1",{id:"upgrading-to-v1-4-from-v1-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#upgrading-to-v1-4-from-v1-3"},[e("span",null,"Upgrading To v1.4 From v1.3")])],-1),m={class:"table-of-contents"},_=h(`<h2 id="high-impact-changes" tabindex="-1"><a class="header-anchor" href="#high-impact-changes"><span>High Impact Changes</span></a></h2><ul><li><a href="#optimize-grpc-module">Optimize Grpc Module</a></li><li><a href="#optimize-route-register">Optimize Route Register</a></li></ul><h2 id="low-impact-changes" tabindex="-1"><a class="header-anchor" href="#low-impact-changes"><span>Low Impact Changes</span></a></h2><ul><li><a href="#add-http-context-method">Add http.Context Method</a></li><li><a href="#add-request-method">Add Request Method</a></li></ul><h2 id="upgrade-guide" tabindex="-1"><a class="header-anchor" href="#upgrade-guide"><span>Upgrade Guide</span></a></h2><p><strong>Estimated Upgrade Time: 1 Minutes</strong></p><h3 id="updating-dependencies" tabindex="-1"><a class="header-anchor" href="#updating-dependencies"><span>Updating Dependencies</span></a></h3><p><strong>Likelihood Of Impact: High</strong></p><p>Update dependencies in the <code>go.mod</code> file:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>github<span class="token punctuation">.</span>com<span class="token operator">/</span>goravel<span class="token operator">/</span>framework v1<span class="token punctuation">.</span><span class="token number">4.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="optimize-grpc-module" tabindex="-1"><a class="header-anchor" href="#optimize-grpc-module"><span>Optimize Grpc Module</span></a></h3><p><strong>Likelihood Of Impact: High</strong></p>`,12),v={href:"https://github.com/goravel/goravel/blob/v1.4.0/app/grpc/kernel.go",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/goravel/goravel/tree/v1.4.0/app/grpc/interceptors",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/goravel/goravel/blob/v1.4.0/config/grpc.go",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/goravel/goravel/blob/v1.4.0/routes/grpc.go",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/goravel/goravel/blob/v1.4.0/app/providers/grpc_service_provider.go",target:"_blank",rel:"noopener noreferrer"},z=e("code",null,"grpc_host",-1),R={href:"https://github.com/goravel/goravel/blob/v1.4.0/config/app.go",target:"_blank",rel:"noopener noreferrer"},C=e("h3",{id:"optimize-route-register",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#optimize-route-register"},[e("span",null,"Optimize Route Register")])],-1),M=e("p",null,[e("strong",null,"Likelihood Of Impact: High")],-1),A=e("code",null,"routes.Web()",-1),O=e("code",null,"Boot()",-1),I=e("code",null,"Register()",-1),U={href:"https://github.com/goravel/goravel/blob/v1.4.0/app/providers/route_service_provider.go",target:"_blank",rel:"noopener noreferrer"},q=e("h3",{id:"add-http-context-method",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#add-http-context-method"},[e("span",null,"Add http.Context Method")])],-1),L=e("p",null,[e("strong",null,"Likelihood Of Impact: Low")],-1),w=e("p",null,[t("Add "),e("code",null,"ctx.Context()"),t(" Method.")],-1),G=e("h3",{id:"add-request-method",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#add-request-method"},[e("span",null,"Add Request Method")])],-1),y=e("p",null,[e("strong",null,"Likelihood Of Impact: Low")],-1),F=e("p",null,[t("Add "),e("code",null,"ctx.Request().AbortWithStatusJson"),t(" method.")],-1);function H(D,S){const a=i("router-link"),r=i("ExternalLinkIcon"),l=i("RouteLink"),d=i("CommentService");return s(),c("div",null,[u,e("nav",m,[e("ul",null,[e("li",null,[o(a,{to:"#high-impact-changes"},{default:n(()=>[t("High Impact Changes")]),_:1})]),e("li",null,[o(a,{to:"#low-impact-changes"},{default:n(()=>[t("Low Impact Changes")]),_:1})]),e("li",null,[o(a,{to:"#upgrade-guide"},{default:n(()=>[t("Upgrade Guide")]),_:1}),e("ul",null,[e("li",null,[o(a,{to:"#updating-dependencies"},{default:n(()=>[t("Updating Dependencies")]),_:1})]),e("li",null,[o(a,{to:"#optimize-grpc-module"},{default:n(()=>[t("Optimize Grpc Module")]),_:1})]),e("li",null,[o(a,{to:"#optimize-route-register"},{default:n(()=>[t("Optimize Route Register")]),_:1})]),e("li",null,[o(a,{to:"#add-http-context-method"},{default:n(()=>[t("Add http.Context Method")]),_:1})]),e("li",null,[o(a,{to:"#add-request-method"},{default:n(()=>[t("Add Request Method")]),_:1})])])])])]),_,e("ol",null,[e("li",null,[t("Add "),e("a",v,[t("app/grpc/kernel.go"),o(r)]),t(" file;")]),e("li",null,[t("Add "),e("a",f,[t("app/grpc/interceptors"),o(r)]),t(" folder;")]),e("li",null,[t("Add "),e("a",b,[t("config/grpc.go"),o(r)]),t(" file;")]),e("li",null,[t("Add "),e("a",k,[t("routes/grpc.go"),o(r)]),t(" file;")]),e("li",null,[t("Add register interceptor logic in "),e("a",x,[t("app/providers/grpc_service_provider.go"),o(r)]),t(";")]),e("li",null,[t("Remove "),z,t(" in "),e("a",R,[t("config/app.go"),o(r)]),t(";")])]),e("p",null,[o(l,{to:"/the-basics/grpc.html"},{default:n(()=>[t("For Detail")]),_:1})]),C,M,e("p",null,[t("Move "),A,t(" to "),O,t(" from "),I,t(" in "),e("a",U,[t("app/providers/route_service_provider.go"),o(r)]),t(";")]),q,L,w,e("p",null,[o(l,{to:"/the-basics/request.html#get-context"},{default:n(()=>[t("For Detail")]),_:1})]),G,y,F,e("p",null,[o(l,{to:"/the-basics/request.html#abort-request"},{default:n(()=>[t("For Detail")]),_:1})]),o(d)])}const E=p(g,[["render",H],["__file","v1.4.html.vue"]]),N=JSON.parse('{"path":"/upgrade/v1.4.html","title":"Upgrading To v1.4 From v1.3","lang":"en-US","frontmatter":{"description":"Upgrading To v1.4 From v1.3 High Impact Changes Optimize Grpc Module Optimize Route Register Low Impact Changes Add http.Context Method Add Request Method Upgrade Guide Estimate...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goravel.dev/zh/upgrade/v1.4.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/upgrade/v1.4.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/upgrade/v1.4.html"}],["meta",{"property":"og:description","content":"Upgrading To v1.4 From v1.3 High Impact Changes Optimize Grpc Module Optimize Route Register Low Impact Changes Add http.Context Method Add Request Method Upgrade Guide Estimate..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Upgrading To v1.4 From v1.3\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"High Impact Changes","slug":"high-impact-changes","link":"#high-impact-changes","children":[]},{"level":2,"title":"Low Impact Changes","slug":"low-impact-changes","link":"#low-impact-changes","children":[]},{"level":2,"title":"Upgrade Guide","slug":"upgrade-guide","link":"#upgrade-guide","children":[{"level":3,"title":"Updating Dependencies","slug":"updating-dependencies","link":"#updating-dependencies","children":[]},{"level":3,"title":"Optimize Grpc Module","slug":"optimize-grpc-module","link":"#optimize-grpc-module","children":[]},{"level":3,"title":"Optimize Route Register","slug":"optimize-route-register","link":"#optimize-route-register","children":[]},{"level":3,"title":"Add http.Context Method","slug":"add-http-context-method","link":"#add-http-context-method","children":[]},{"level":3,"title":"Add Request Method","slug":"add-request-method","link":"#add-request-method","children":[]}]}],"git":{},"filePathRelative":"upgrade/v1.4.md","autoDesc":true}');export{E as comp,N as data};