import{_ as i,r,o as p,c as d,a as e,b as a,w as l,d as t,e as n}from"./app-ClnRftAW.js";const h={},u=e("h1",{id:"文件夹结构",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#文件夹结构"},[e("span",null,"文件夹结构")])],-1),g={class:"table-of-contents"},f=n('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>默认的文件结构可以使你更好的开始项目推进，你也可以自由的新增文件夹，但默认文件夹不要修改。</p><h2 id="根目录" tabindex="-1"><a class="header-anchor" href="#根目录"><span>根目录</span></a></h2><h3 id="app-目录" tabindex="-1"><a class="header-anchor" href="#app-目录"><span>app 目录</span></a></h3><p><code>app</code> 包含了程序的核心代码，程序中几乎所有的逻辑都将在这个文件夹中。</p><h3 id="bootstrap-目录" tabindex="-1"><a class="header-anchor" href="#bootstrap-目录"><span>bootstrap 目录</span></a></h3><p><code>bootstrap</code> 目录包含了框架的启动文件 <code>app.go</code>。</p><h3 id="config-目录" tabindex="-1"><a class="header-anchor" href="#config-目录"><span>config 目录</span></a></h3><p><code>config</code> 目录包含了应用程序的所有配置文件。最好把这些文件都浏览一遍，并熟悉所有可用的配置。</p><h3 id="database-目录" tabindex="-1"><a class="header-anchor" href="#database-目录"><span>database 目录</span></a></h3><p><code>database</code> 目录包含了数据库迁移文件。</p><h3 id="public-目录" tabindex="-1"><a class="header-anchor" href="#public-目录"><span>public 目录</span></a></h3><p><code>public</code> 目录包含一些静态资源，如图像、证书等。</p><h3 id="resources-目录" tabindex="-1"><a class="header-anchor" href="#resources-目录"><span>resources 目录</span></a></h3>',14),_=e("code",null,"resources",-1),b=n('<h3 id="routes-目录" tabindex="-1"><a class="header-anchor" href="#routes-目录"><span>routes 目录</span></a></h3><p><code>routes</code> 目录包含应用程序的所有路由定义。</p><h3 id="storage-目录" tabindex="-1"><a class="header-anchor" href="#storage-目录"><span>storage 目录</span></a></h3><p><code>storage</code> 目录包含 <code>logs</code> 等目录，<code>logs</code> 目录包含应用程序的日志文件。</p><h3 id="tests-目录" tabindex="-1"><a class="header-anchor" href="#tests-目录"><span>tests 目录</span></a></h3><p><code>tests</code> 目录包含你的自动化测试。</p><h2 id="app-目录-1" tabindex="-1"><a class="header-anchor" href="#app-目录-1"><span>app 目录</span></a></h2><h3 id="console-目录" tabindex="-1"><a class="header-anchor" href="#console-目录"><span>console 目录</span></a></h3>',8),m=e("code",null,"console",-1),v=e("code",null,"Artisan",-1),k=e("code",null,"kernel.go",-1),x=n('<h3 id="http-目录" tabindex="-1"><a class="header-anchor" href="#http-目录"><span>http 目录</span></a></h3><p><code>http</code> 目录包含了控制器、中间件等，几乎所有通过 Web 进入应用的请求处理都在这里进行。</p><h3 id="grpc-目录" tabindex="-1"><a class="header-anchor" href="#grpc-目录"><span>grpc 目录</span></a></h3><p><code>grpc</code> 目录包含了控制器、中间件等，几乎所有通过 Grpc 进入应用的请求处理都在这里进行。</p><h3 id="models-目录" tabindex="-1"><a class="header-anchor" href="#models-目录"><span>models 目录</span></a></h3><p><code>models</code> 目录包含所有数据模型。</p><h3 id="providers-目录" tabindex="-1"><a class="header-anchor" href="#providers-目录"><span>providers 目录</span></a></h3>',7),y=e("code",null,"providers",-1);function S(z,C){const o=r("router-link"),s=r("RouteLink"),c=r("CommentService");return p(),d("div",null,[u,e("nav",g,[e("ul",null,[e("li",null,[a(o,{to:"#简介"},{default:l(()=>[t("简介")]),_:1})]),e("li",null,[a(o,{to:"#根目录"},{default:l(()=>[t("根目录")]),_:1}),e("ul",null,[e("li",null,[a(o,{to:"#app-目录"},{default:l(()=>[t("app 目录")]),_:1})]),e("li",null,[a(o,{to:"#bootstrap-目录"},{default:l(()=>[t("bootstrap 目录")]),_:1})]),e("li",null,[a(o,{to:"#config-目录"},{default:l(()=>[t("config 目录")]),_:1})]),e("li",null,[a(o,{to:"#database-目录"},{default:l(()=>[t("database 目录")]),_:1})]),e("li",null,[a(o,{to:"#public-目录"},{default:l(()=>[t("public 目录")]),_:1})]),e("li",null,[a(o,{to:"#resources-目录"},{default:l(()=>[t("resources 目录")]),_:1})]),e("li",null,[a(o,{to:"#routes-目录"},{default:l(()=>[t("routes 目录")]),_:1})]),e("li",null,[a(o,{to:"#storage-目录"},{default:l(()=>[t("storage 目录")]),_:1})]),e("li",null,[a(o,{to:"#tests-目录"},{default:l(()=>[t("tests 目录")]),_:1})])])]),e("li",null,[a(o,{to:"#app-目录-1"},{default:l(()=>[t("app 目录")]),_:1}),e("ul",null,[e("li",null,[a(o,{to:"#console-目录"},{default:l(()=>[t("console 目录")]),_:1})]),e("li",null,[a(o,{to:"#http-目录"},{default:l(()=>[t("http 目录")]),_:1})]),e("li",null,[a(o,{to:"#grpc-目录"},{default:l(()=>[t("grpc 目录")]),_:1})]),e("li",null,[a(o,{to:"#models-目录"},{default:l(()=>[t("models 目录")]),_:1})]),e("li",null,[a(o,{to:"#providers-目录"},{default:l(()=>[t("providers 目录")]),_:1})])])])])]),f,e("p",null,[_,t(" 目录包含您的"),a(s,{to:"/zh/the-basics/views.html"},{default:l(()=>[t("视图")]),_:1}),t("，以及原始的、未编译的资源文件，例如 CSS 或 JavaScript。")]),b,e("p",null,[m,t(" 目录包含应用程序所有自定义的 "),v,t(" 命令，与控制台引导文件 "),k,t("，可以在这个文件中注册"),a(s,{to:"/zh/digging-deeper/task-scheduling.html"},{default:l(()=>[t("任务")]),_:1})]),x,e("p",null,[y,t(" 目录包含程序中所有的 "),a(s,{to:"/zh/architecutre-concepts/service-providers.html"},{default:l(()=>[t("服务提供者")]),_:1}),t("。服务提供者通过绑定服务、注册事件或执行任何其他任务来引导应用程序以应对传入的请求。")]),a(c)])}const V=i(h,[["render",S],["__file","directory-structure.html.vue"]]),w=JSON.parse('{"path":"/zh/getting-started/directory-structure.html","title":"文件夹结构","lang":"zh-CN","frontmatter":{"description":"文件夹结构 简介 默认的文件结构可以使你更好的开始项目推进，你也可以自由的新增文件夹，但默认文件夹不要修改。 根目录 app 目录 app 包含了程序的核心代码，程序中几乎所有的逻辑都将在这个文件夹中。 bootstrap 目录 bootstrap 目录包含了框架的启动文件 app.go。 config 目录 config 目录包含了应用程序的所有配置...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/getting-started/directory-structure.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/getting-started/directory-structure.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/getting-started/directory-structure.html"}],["meta",{"property":"og:description","content":"文件夹结构 简介 默认的文件结构可以使你更好的开始项目推进，你也可以自由的新增文件夹，但默认文件夹不要修改。 根目录 app 目录 app 包含了程序的核心代码，程序中几乎所有的逻辑都将在这个文件夹中。 bootstrap 目录 bootstrap 目录包含了框架的启动文件 app.go。 config 目录 config 目录包含了应用程序的所有配置..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"文件夹结构\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"根目录","slug":"根目录","link":"#根目录","children":[{"level":3,"title":"app 目录","slug":"app-目录","link":"#app-目录","children":[]},{"level":3,"title":"bootstrap 目录","slug":"bootstrap-目录","link":"#bootstrap-目录","children":[]},{"level":3,"title":"config 目录","slug":"config-目录","link":"#config-目录","children":[]},{"level":3,"title":"database 目录","slug":"database-目录","link":"#database-目录","children":[]},{"level":3,"title":"public 目录","slug":"public-目录","link":"#public-目录","children":[]},{"level":3,"title":"resources 目录","slug":"resources-目录","link":"#resources-目录","children":[]},{"level":3,"title":"routes 目录","slug":"routes-目录","link":"#routes-目录","children":[]},{"level":3,"title":"storage 目录","slug":"storage-目录","link":"#storage-目录","children":[]},{"level":3,"title":"tests 目录","slug":"tests-目录","link":"#tests-目录","children":[]}]},{"level":2,"title":"app 目录","slug":"app-目录-1","link":"#app-目录-1","children":[{"level":3,"title":"console 目录","slug":"console-目录","link":"#console-目录","children":[]},{"level":3,"title":"http 目录","slug":"http-目录","link":"#http-目录","children":[]},{"level":3,"title":"grpc 目录","slug":"grpc-目录","link":"#grpc-目录","children":[]},{"level":3,"title":"models 目录","slug":"models-目录","link":"#models-目录","children":[]},{"level":3,"title":"providers 目录","slug":"providers-目录","link":"#providers-目录","children":[]}]}],"git":{},"filePathRelative":"zh/getting-started/directory-structure.md","autoDesc":true}');export{V as comp,w as data};
