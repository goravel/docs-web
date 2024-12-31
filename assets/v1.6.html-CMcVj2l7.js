import{_ as p,c as d,b as t,e as o,f as r,a as v,r as l,o as c,d as a}from"./app-DAwtq9VE.js";const u={},g={class:"table-of-contents"};function h(m,e){const n=l("router-link"),s=l("RouteLink"),i=l("CommentService");return c(),d("div",null,[e[5]||(e[5]=t("h1",{id:"从-v1-5-升级到-v1-6",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#从-v1-5-升级到-v1-6"},[t("span",null,"从 v1.5 升级到 v1.6")])],-1)),t("nav",g,[t("ul",null,[t("li",null,[o(n,{to:"#高影响变化"},{default:r(()=>e[0]||(e[0]=[a("高影响变化")])),_:1})]),t("li",null,[o(n,{to:"#升级指南"},{default:r(()=>e[1]||(e[1]=[a("升级指南")])),_:1}),t("ul",null,[t("li",null,[o(n,{to:"#更新依赖"},{default:r(()=>e[2]||(e[2]=[a("更新依赖")])),_:1})]),t("li",null,[o(n,{to:"#新增用户授权模块"},{default:r(()=>e[3]||(e[3]=[a("新增用户授权模块")])),_:1})])])])])]),e[6]||(e[6]=v(`<h2 id="高影响变化" tabindex="-1"><a class="header-anchor" href="#高影响变化"><span>高影响变化</span></a></h2><ul><li><a href="#%E6%96%B0%E5%A2%9E%E7%94%A8%E6%88%B7%E6%8E%88%E6%9D%83%E6%A8%A1%E5%9D%97">新增用户授权模块</a></li></ul><h2 id="升级指南" tabindex="-1"><a class="header-anchor" href="#升级指南"><span>升级指南</span></a></h2><p><strong>预计升级时间：1 分钟</strong></p><h3 id="更新依赖" tabindex="-1"><a class="header-anchor" href="#更新依赖"><span>更新依赖</span></a></h3><p><strong>影响可能性：高</strong></p><p><code>go.mod</code> 中更新依赖：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">github<span class="token punctuation">.</span>com<span class="token operator">/</span>goravel<span class="token operator">/</span>framework v1<span class="token punctuation">.</span><span class="token number">6.3</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="新增用户授权模块" tabindex="-1"><a class="header-anchor" href="#新增用户授权模块"><span>新增用户授权模块</span></a></h3><p><strong>影响可能性：高</strong></p><ol><li>新增 <a href="https://github.com/goravel/goravel/blob/v1.6.0/app/providers/auth_service_provider.go" target="_blank" rel="noopener noreferrer">app/providers/auth_service_provider.go</a> 文件；</li><li><a href="https://github.com/goravel/goravel/blob/v1.6.0/config/app.go" target="_blank" rel="noopener noreferrer">config/app.go</a> 文件 <code>providers</code> 新增 <code>&amp;providers.AuthServiceProvider{}</code>；</li></ol>`,11)),t("p",null,[o(s,{to:"/zh/security/authorization.html"},{default:r(()=>e[4]||(e[4]=[a("查看文档")])),_:1})]),o(i)])}const _=p(u,[["render",h],["__file","v1.6.html.vue"]]),b=JSON.parse('{"path":"/zh/upgrade/v1.6.html","title":"从 v1.5 升级到 v1.6","lang":"zh-CN","frontmatter":{"description":"从 v1.5 升级到 v1.6 高影响变化 新增用户授权模块 升级指南 预计升级时间：1 分钟 更新依赖 影响可能性：高 go.mod 中更新依赖： 新增用户授权模块 影响可能性：高 新增 app/providers/auth_service_provider.go 文件； config/app.go 文件 providers 新增 &provider...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/upgrade/v1.6.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/upgrade/v1.6.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/upgrade/v1.6.html"}],["meta",{"property":"og:description","content":"从 v1.5 升级到 v1.6 高影响变化 新增用户授权模块 升级指南 预计升级时间：1 分钟 更新依赖 影响可能性：高 go.mod 中更新依赖： 新增用户授权模块 影响可能性：高 新增 app/providers/auth_service_provider.go 文件； config/app.go 文件 providers 新增 &provider..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从 v1.5 升级到 v1.6\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"高影响变化","slug":"高影响变化","link":"#高影响变化","children":[]},{"level":2,"title":"升级指南","slug":"升级指南","link":"#升级指南","children":[{"level":3,"title":"更新依赖","slug":"更新依赖","link":"#更新依赖","children":[]},{"level":3,"title":"新增用户授权模块","slug":"新增用户授权模块","link":"#新增用户授权模块","children":[]}]}],"git":{},"filePathRelative":"zh/upgrade/v1.6.md","autoDesc":true}');export{_ as comp,b as data};
