import{_ as t,r as i,o as c,c as a,b as e,d,w as n,e as o,f as s}from"./app.8de5b488.js";const l={},p=e("h1",{id:"service-providers",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#service-providers","aria-hidden":"true"},"#"),o(" Service Providers")],-1),h={class:"table-of-contents"},v=o("Introduction"),u=s('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>The most important thing in the kernel boot operation is to load the <code>Service Provider</code>. All <code>Service Provider</code> under the application are configured in the <code>providers</code> array in the <code>config/app.go</code> file.</p><p>First, the kernel will call the <code>Register</code> methods of all service providers. After all service providers have been registered, the kernel will call the <code>Boot</code> methods of all <code>Service Provider</code> again.</p><p>The <code>Service Provider</code> is the key in the life cycle of Goravel. They enables the framework to contain various components, such as routing, database, queue, cache, etc.</p><p>You can also customize your own provider, it can be stored under <code>app/providers</code> and registered in the <code>providers</code> array in <code>config/app.go</code>.</p><p>The framework defaults a blank service provider <code>app/providers/app_service_provider.go</code>, you can add some simple boot logic here. In large projects, you can create new service providers to gain finer granular control.</p>',6);function _(f,m){const r=i("router-link");return c(),a("div",null,[p,e("nav",h,[e("ul",null,[e("li",null,[d(r,{to:"#introduction"},{default:n(()=>[v]),_:1})])])]),u])}const b=t(l,[["render",_],["__file","service-providers.html.vue"]]);export{b as default};
