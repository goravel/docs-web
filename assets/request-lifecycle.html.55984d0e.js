import{_ as a,r as o,o as r,c as d,b as e,d as c,w as n,e as t,f as l}from"./app.c57080ea.js";const h={},_=e("h1",{id:"request-lifecycle",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-lifecycle","aria-hidden":"true"},"#"),t(" Request Lifecycle")],-1),u={class:"table-of-contents"},f=t("Introduction"),p=l('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>All request entries of the Goravel application are the <code>main.go</code> file, which use the <code>bootstrap.Boot()</code> to boot the framework to load.</p><p>Then create a Goravel instance by <code>app := foundation.Application{}</code> in the <code>bootstrap/app.go</code> script.</p>',3),m=t("Use "),v=e("code",null,"app.Boot()",-1),g=t(" to load the "),b=t("Service Provider"),y=t(" registered, and use "),k=e("code",null,"config.Boot()",-1),x=t(" to load the configuration file under the config directory."),q=e("p",null,[t("Finally, use "),e("code",null,'facades.Route.Run(facades.Config.GetString("app.host"))'),t(" in the "),e("code",null,"main.go"),t(" file to start the HTTP server.")],-1);function B(R,w){const i=o("router-link"),s=o("RouterLink");return r(),d("div",null,[_,e("nav",u,[e("ul",null,[e("li",null,[c(i,{to:"#introduction"},{default:n(()=>[f]),_:1})])])]),p,e("p",null,[m,v,g,c(s,{to:"/architecutre-concepts/service-providers.html"},{default:n(()=>[b]),_:1}),y,k,x]),q])}const N=a(h,[["render",B],["__file","request-lifecycle.html.vue"]]);export{N as default};
