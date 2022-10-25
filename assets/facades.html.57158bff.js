import{_ as s,r as o,o as i,c,b as e,d,w as n,e as t,f as r}from"./app.8de5b488.js";const u={},h=e("h1",{id:"facades",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#facades","aria-hidden":"true"},"#"),t(" Facades")],-1),_={class:"table-of-contents"},f=t("\u4ECB\u7ECD"),v=t("facades \u5DE5\u4F5C\u539F\u7406"),g=t("facade \u7C7B\u53C2\u8003"),m=r(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p><code>facades</code> \u4E3A\u5E94\u7528\u7684\u6838\u5FC3\u529F\u80FD\u63D0\u4F9B\u4E00\u4E2A\u300C\u9759\u6001\u300D\u63A5\u53E3\uFF0C\u80FD\u591F\u63D0\u4F9B\u66F4\u52A0\u7075\u6D3B\u3001\u66F4\u52A0\u4F18\u96C5\u3001\u6613\u4E8E\u6D4B\u8BD5\u7684\u8BED\u6CD5\u3002</p><p>Goravel \u6240\u6709\u7684 <code>facades</code> \u90FD\u5B9A\u4E49\u5728 <code>github.com/goravel/framework/facades</code> \u4E0B\u3002\u6211\u4EEC\u53EF\u4EE5\u5F88\u8F7B\u677E\u7684\u4F7F\u7528 <code>facades</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import &quot;github.com/goravel/framework/facades&quot;

facades.Route.Run(facades.Config.GetString(&quot;app.host&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="facades-\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#facades-\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> facades \u5DE5\u4F5C\u539F\u7406</h2><p><code>facades</code> \u4E00\u822C\u4F1A\u5728\u5404\u6A21\u5757 <code>ServerProvider</code> \u7684 <code>Register</code> \u6216 <code>Boot</code> \u9636\u6BB5\u8FDB\u884C\u5B9E\u4F8B\u5316\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (config *ServiceProvider) Register() {
  app := Application{}
  facades.Config = app.Init()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8BE5 <code>facades</code> \u4F7F\u7528\u4E86\u5176\u4ED6 <code>facades</code>\uFF0C\u90A3\u4E48\u5C31\u5728 <code>ServerProvider</code> \u7684 <code>Boot</code> \u9636\u6BB5\u8FDB\u884C\u5B9E\u4F8B\u5316\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (database *ServiceProvider) Boot() {
  app := Application{}
  facades.DB = app.Init()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="facade-\u7C7B\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#facade-\u7C7B\u53C2\u8003" aria-hidden="true">#</a> facade \u7C7B\u53C2\u8003</h2>`,10),p=e("thead",null,[e("tr",null,[e("th",null,"Facade"),e("th",null,"\u6587\u6863")])],-1),b=e("td",null,"Artisan",-1),x=t("\u547D\u4EE4\u884C\u5DE5\u5177"),z=e("td",null,"Auth",-1),k=t("\u7528\u6237\u8BA4\u8BC1"),R=e("td",null,"Cache",-1),B=t("\u7F13\u5B58\u7CFB\u7EDF"),S=e("td",null,"Config",-1),C=t("\u914D\u7F6E\u4FE1\u606F"),q=e("td",null,"Orm",-1),w=t("ORM"),A=e("td",null,"Event",-1),G=t("\u4E8B\u4EF6\u7CFB\u7EDF"),N=e("td",null,"Grpc",-1),P=t("Grpc"),V=e("td",null,"Log",-1),L=t("\u65E5\u5FD7"),E=e("td",null,"Queue",-1),F=t("\u961F\u5217"),I=e("td",null,"Route",-1),O=t("\u8DEF\u7531"),y=e("td",null,"Schedule",-1),D=t("\u4EFB\u52A1\u8C03\u5EA6");function M(Q,T){const l=o("router-link"),a=o("RouterLink");return i(),c("div",null,[h,e("nav",_,[e("ul",null,[e("li",null,[d(l,{to:"#\u4ECB\u7ECD"},{default:n(()=>[f]),_:1})]),e("li",null,[d(l,{to:"#facades-\u5DE5\u4F5C\u539F\u7406"},{default:n(()=>[v]),_:1})]),e("li",null,[d(l,{to:"#facade-\u7C7B\u53C2\u8003"},{default:n(()=>[g]),_:1})])])]),m,e("table",null,[p,e("tbody",null,[e("tr",null,[b,e("td",null,[d(a,{to:"/v1.1/zh/digging-deeper/artisan-console.html"},{default:n(()=>[x]),_:1})])]),e("tr",null,[z,e("td",null,[d(a,{to:"/v1.1/zh/digging-deeper/auth.html"},{default:n(()=>[k]),_:1})])]),e("tr",null,[R,e("td",null,[d(a,{to:"/v1.1/zh/digging-deeper/cache.html"},{default:n(()=>[B]),_:1})])]),e("tr",null,[S,e("td",null,[d(a,{to:"/v1.1/zh/getting-started/configuration.html"},{default:n(()=>[C]),_:1})])]),e("tr",null,[q,e("td",null,[d(a,{to:"/v1.1/zh/orm/getting-started.html"},{default:n(()=>[w]),_:1})])]),e("tr",null,[A,e("td",null,[d(a,{to:"/v1.1/zh/digging-deeper/event.html"},{default:n(()=>[G]),_:1})])]),e("tr",null,[N,e("td",null,[d(a,{to:"/v1.1/zh/the-basics/grpc.html"},{default:n(()=>[P]),_:1})])]),e("tr",null,[V,e("td",null,[d(a,{to:"/v1.1/zh/the-basics/logging.html"},{default:n(()=>[L]),_:1})])]),e("tr",null,[E,e("td",null,[d(a,{to:"/v1.1/zh/digging-deeper/queues.html"},{default:n(()=>[F]),_:1})])]),e("tr",null,[I,e("td",null,[d(a,{to:"/v1.1/zh/the-basics/routing.html"},{default:n(()=>[O]),_:1})])]),e("tr",null,[y,e("td",null,[d(a,{to:"/v1.1/zh/digging-deeper/task-scheduling.html"},{default:n(()=>[D]),_:1})])])])])])}const H=s(u,[["render",M],["__file","facades.html.vue"]]);export{H as default};