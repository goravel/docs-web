import{_ as c,c as p,b as t,e as n,f as r,a as u,d as o,r as i,o as d}from"./app-DJ6Ojx-Q.js";const f={},m={class:"table-of-contents"};function h(y,e){const l=i("router-link"),s=i("RouteLink"),a=i("CommentService");return d(),p("div",null,[e[8]||(e[8]=t("h1",{id:"request-lifecycle",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#request-lifecycle"},[t("span",null,"Request Lifecycle")])],-1)),t("nav",m,[t("ul",null,[t("li",null,[n(l,{to:"#introduction"},{default:r(()=>e[0]||(e[0]=[o("Introduction")])),_:1})])])]),e[9]||(e[9]=u('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>The <code>main.go</code> file serves as the entry point for all requests in the Goravel application. It utilizes the <code>bootstrap.Boot()</code> function to initialize the framework.</p><p>Then a Goravel instance is created by <code>app := foundation.NewApplication()</code> in <code>bootstrap/app.go</code>.</p>',3)),t("p",null,[e[2]||(e[2]=o("After this, use ")),e[3]||(e[3]=t("code",null,"app.Boot()",-1)),e[4]||(e[4]=o(" to load the ")),n(s,{to:"/architecture-concepts/service-providers.html"},{default:r(()=>e[1]||(e[1]=[o("Service Provider")])),_:1}),e[5]||(e[5]=o(" registered, and ")),e[6]||(e[6]=t("code",null,"config.Boot()",-1)),e[7]||(e[7]=o(" to load the configuration files under the config directory."))]),e[10]||(e[10]=t("p",null,[o("Finally, start the HTTP server by using "),t("code",null,'facades.Route().Run(facades.Config().GetString("app.host"))'),o(" in "),t("code",null,"main.go"),o(".")],-1)),n(a)])}const v=c(f,[["render",h],["__file","request-lifecycle.html.vue"]]),q=JSON.parse('{"path":"/architecture-concepts/request-lifecycle.html","title":"Request Lifecycle","lang":"en-US","frontmatter":{"description":"Request Lifecycle Introduction The main.go file serves as the entry point for all requests in the Goravel application. It utilizes the bootstrap.Boot() function to initialize th...","head":[["meta",{"property":"og:url","content":"https://goravel.dev/architecture-concepts/request-lifecycle.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/architecture-concepts/request-lifecycle.html"}],["meta",{"property":"og:description","content":"Request Lifecycle Introduction The main.go file serves as the entry point for all requests in the Goravel application. It utilizes the bootstrap.Boot() function to initialize th..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Request Lifecycle\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]}],"git":{},"filePathRelative":"architecture-concepts/request-lifecycle.md","autoDesc":true}');export{v as comp,q as data};
