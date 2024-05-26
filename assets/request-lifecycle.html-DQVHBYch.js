import{_ as l,r as o,o as s,c as p,a as e,b as n,w as c,d as t,e as u}from"./app-BlqL-mNw.js";const d={},h=e("h1",{id:"request-lifecycle",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-lifecycle"},[e("span",null,"Request Lifecycle")])],-1),f={class:"table-of-contents"},m=u('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>The <code>main.go</code> file serves as the entry point for all requests in the Goravel application. It utilizes the <code>bootstrap.Boot()</code> function to initialize the framework.</p><p>Then a Goravel instance is created by <code>app := foundation.NewApplication()</code> in <code>bootstrap/app.go</code>.</p>',3),_=e("code",null,"app.Boot()",-1),y=e("code",null,"config.Boot()",-1),g=e("p",null,[t("Finally, start the HTTP server by using "),e("code",null,'facades.Route().Run(facades.Config().GetString("app.host"))'),t(" in "),e("code",null,"main.go"),t(".")],-1);function v(q,b){const i=o("router-link"),r=o("RouteLink"),a=o("CommentService");return s(),p("div",null,[h,e("nav",f,[e("ul",null,[e("li",null,[n(i,{to:"#introduction"},{default:c(()=>[t("Introduction")]),_:1})])])]),m,e("p",null,[t("After this, use "),_,t(" to load the "),n(r,{to:"/architecutre-concepts/service-providers.html"},{default:c(()=>[t("Service Provider")]),_:1}),t(" registered, and "),y,t(" to load the configuration files under the config directory.")]),g,n(a)])}const k=l(d,[["render",v],["__file","request-lifecycle.html.vue"]]),z=JSON.parse('{"path":"/architecutre-concepts/request-lifecycle.html","title":"Request Lifecycle","lang":"en-US","frontmatter":{"description":"Request Lifecycle Introduction The main.go file serves as the entry point for all requests in the Goravel application. It utilizes the bootstrap.Boot() function to initialize th...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goravel.dev/zh/architecutre-concepts/request-lifecycle.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/architecutre-concepts/request-lifecycle.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/architecutre-concepts/request-lifecycle.html"}],["meta",{"property":"og:description","content":"Request Lifecycle Introduction The main.go file serves as the entry point for all requests in the Goravel application. It utilizes the bootstrap.Boot() function to initialize th..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Request Lifecycle\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]}],"git":{},"filePathRelative":"architecutre-concepts/request-lifecycle.md","autoDesc":true}');export{k as comp,z as data};