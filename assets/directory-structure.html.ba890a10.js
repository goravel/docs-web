import{_ as s,r as c,o as n,c as l,b as e,d as t,w as r,e as o,f as d}from"./app.7583e1e5.js";const h={},u=e("h1",{id:"directory-structure",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#directory-structure","aria-hidden":"true"},"#"),o(" Directory Structure")],-1),p={class:"table-of-contents"},y=o("Introduction"),_=o("Root Directory"),f=o("app Directory"),b=o("bootstrap Directory"),g=o("config Directory"),m=o("database Directory"),D=o("public Directory"),v=o("routes Directory"),x=o("storage Directory"),T=o("app Directory"),k=o("console Directory"),w=o("http Directory"),S=o("models Directory"),N=o("providers Directory"),R=d('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>The default file structure can make you better start project advancement, and you can also add new folders freely, but do not modify the default folders.</p><h2 id="root-directory" tabindex="-1"><a class="header-anchor" href="#root-directory" aria-hidden="true">#</a> Root Directory</h2><h3 id="app-directory" tabindex="-1"><a class="header-anchor" href="#app-directory" aria-hidden="true">#</a> <code>app</code> Directory</h3><p><code>app</code> contains the core code of the program. Almost all the logic in the program will be in this folder.</p><h3 id="bootstrap-directory" tabindex="-1"><a class="header-anchor" href="#bootstrap-directory" aria-hidden="true">#</a> <code>bootstrap</code> Directory</h3><p>The <code>bootstrap</code> directory contains the framework startup file <code>app.go</code>.</p><h3 id="config-directory" tabindex="-1"><a class="header-anchor" href="#config-directory" aria-hidden="true">#</a> <code>config</code> Directory</h3><p>The <code>config</code> directory contains all configuration files of the application. It is best to browse through these files and familiarize yourself with all the available options.</p><h3 id="database-directory" tabindex="-1"><a class="header-anchor" href="#database-directory" aria-hidden="true">#</a> <code>database</code> Directory</h3><p>The <code>database</code> directory contains database migration files.</p><h3 id="public-directory" tabindex="-1"><a class="header-anchor" href="#public-directory" aria-hidden="true">#</a> <code>public</code> Directory</h3><p>The <code>public</code> directory contains some resources, such as images, certificates, etc.</p><h3 id="routes-directory" tabindex="-1"><a class="header-anchor" href="#routes-directory" aria-hidden="true">#</a> <code>routes</code> Directory</h3><p>The <code>routes</code> directory contains all the route definitions of the application.</p><h3 id="storage-directory" tabindex="-1"><a class="header-anchor" href="#storage-directory" aria-hidden="true">#</a> <code>storage</code> Directory</h3><p>The <code>storage</code> directory contains the <code>logs</code> directory, and the <code>logs</code> directory contains the application log files.</p><h2 id="app-directory-1" tabindex="-1"><a class="header-anchor" href="#app-directory-1" aria-hidden="true">#</a> <code>app</code> Directory</h2><h3 id="console-directory" tabindex="-1"><a class="header-anchor" href="#console-directory" aria-hidden="true">#</a> <code>console</code> Directory</h3>',19),V=o("The "),B=e("code",null,"console",-1),I=o(" directory contains all the custom Artisan commands of the application, and the console boot file "),q=e("code",null,"kernel.go",-1),A=o(", which can be registered in this file "),C=o("Task Scheduling"),L=d('<h3 id="http-directory" tabindex="-1"><a class="header-anchor" href="#http-directory" aria-hidden="true">#</a> <code>http</code> Directory</h3><p>The <code>http</code> directory contains controllers, middleware, etc., and almost all requests that enter the application via the Web are processed here.</p><h3 id="models-directory" tabindex="-1"><a class="header-anchor" href="#models-directory" aria-hidden="true">#</a> <code>models</code> Directory</h3><p>The <code>models</code> directory contains all data models.</p><h3 id="providers-directory" tabindex="-1"><a class="header-anchor" href="#providers-directory" aria-hidden="true">#</a> <code>providers</code> Directory</h3><p>The <code>providers</code> directory contains all [Service Providers] (../architecture-concepts/service-providers.md) in the program. The service provider guides the application to respond to incoming requests by binding services, registering for events, or performing any other tasks.</p>',6);function j(z,E){const i=c("router-link"),a=c("RouterLink");return n(),l("div",null,[u,e("nav",p,[e("ul",null,[e("li",null,[t(i,{to:"#introduction"},{default:r(()=>[y]),_:1})]),e("li",null,[t(i,{to:"#root-directory"},{default:r(()=>[_]),_:1}),e("ul",null,[e("li",null,[t(i,{to:"#app-directory"},{default:r(()=>[f]),_:1})]),e("li",null,[t(i,{to:"#bootstrap-directory"},{default:r(()=>[b]),_:1})]),e("li",null,[t(i,{to:"#config-directory"},{default:r(()=>[g]),_:1})]),e("li",null,[t(i,{to:"#database-directory"},{default:r(()=>[m]),_:1})]),e("li",null,[t(i,{to:"#public-directory"},{default:r(()=>[D]),_:1})]),e("li",null,[t(i,{to:"#routes-directory"},{default:r(()=>[v]),_:1})]),e("li",null,[t(i,{to:"#storage-directory"},{default:r(()=>[x]),_:1})])])]),e("li",null,[t(i,{to:"#app-directory-1"},{default:r(()=>[T]),_:1}),e("ul",null,[e("li",null,[t(i,{to:"#console-directory"},{default:r(()=>[k]),_:1})]),e("li",null,[t(i,{to:"#http-directory"},{default:r(()=>[w]),_:1})]),e("li",null,[t(i,{to:"#models-directory"},{default:r(()=>[S]),_:1})]),e("li",null,[t(i,{to:"#providers-directory"},{default:r(()=>[N]),_:1})])])])])]),R,e("p",null,[V,B,I,q,A,t(a,{to:"/digging-deeper/task-scheduling.html"},{default:r(()=>[C]),_:1})]),L])}const W=s(h,[["render",j],["__file","directory-structure.html.vue"]]);export{W as default};
