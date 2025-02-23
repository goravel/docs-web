import{_ as a,c as i,b as o,e as t,f as n,a as s,r,o as d,d as l}from"./app-DJ6Ojx-Q.js";const v={},h={class:"table-of-contents"};function m(g,e){const c=r("router-link"),p=r("CommentService");return d(),i("div",null,[e[1]||(e[1]=o("h1",{id:"服务提供者",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#服务提供者"},[o("span",null,"服务提供者")])],-1)),o("nav",h,[o("ul",null,[o("li",null,[t(c,{to:"#简介"},{default:n(()=>e[0]||(e[0]=[l("简介")])),_:1})])])]),e[2]||(e[2]=s('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>内核启动过程中最重要的是加载 <code>服务提供者</code>。应用下所有的服务提供者均被配置到了 <code>config/app.go</code> 文件中的 <code>providers</code> 数组中。</p><p>首先，内核会先调用所有服务提供者的 <code>Register</code> 方法，所有服务提供者均被注册后，再次调用所有服务提供者的 <code>Boot</code> 方法。</p><p>服务提供者是 Goravel 生命周期中的关键。服务提供者使框架可以包含各种组件，例如路由、数据库、队列、缓存等。</p><p>你也可以自定义自己的 provider，可以存放在 <code>app/providers</code> 下面，并注册到 <code>config/app.go</code> 中的 <code>providers</code> 数组中。</p><p>框架默认有一个空白的服务提供者 <code>app/providers/app_service_provider.go</code>，你可以在这里添加一些简单的引导逻辑。在大型项目中，你可以新建服务提供者以获得更细颗粒度的控制。</p>',6)),t(p)])}const f=a(v,[["render",m],["__file","service-providers.html.vue"]]),_=JSON.parse('{"path":"/zh/architecutre-concepts/service-providers.html","title":"服务提供者","lang":"zh-CN","frontmatter":{"description":"服务提供者 简介 内核启动过程中最重要的是加载 服务提供者。应用下所有的服务提供者均被配置到了 config/app.go 文件中的 providers 数组中。 首先，内核会先调用所有服务提供者的 Register 方法，所有服务提供者均被注册后，再次调用所有服务提供者的 Boot 方法。 服务提供者是 Goravel 生命周期中的关键。服务提供者使...","head":[["meta",{"property":"og:url","content":"https://goravel.dev/zh/architecutre-concepts/service-providers.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/architecutre-concepts/service-providers.html"}],["meta",{"property":"og:description","content":"服务提供者 简介 内核启动过程中最重要的是加载 服务提供者。应用下所有的服务提供者均被配置到了 config/app.go 文件中的 providers 数组中。 首先，内核会先调用所有服务提供者的 Register 方法，所有服务提供者均被注册后，再次调用所有服务提供者的 Boot 方法。 服务提供者是 Goravel 生命周期中的关键。服务提供者使..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"服务提供者\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]}],"git":{},"filePathRelative":"zh/architecutre-concepts/service-providers.md","autoDesc":true}');export{f as comp,_ as data};
