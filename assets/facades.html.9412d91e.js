import{_ as s,r as o,o as c,c as i,b as e,d,w as a,e as t,f as r}from"./app.c57080ea.js";const u={},h=e("h1",{id:"facades",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#facades","aria-hidden":"true"},"#"),t(" Facades")],-1),_={class:"table-of-contents"},f=t("\u4ECB\u7ECD"),v=t("facades \u5DE5\u4F5C\u539F\u7406"),g=t("facade \u7C7B\u53C2\u8003"),m=r(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p><code>facades</code> \u4E3A\u5E94\u7528\u7684\u6838\u5FC3\u529F\u80FD\u63D0\u4F9B\u4E00\u4E2A\u300C\u9759\u6001\u300D\u63A5\u53E3\uFF0C\u80FD\u591F\u63D0\u4F9B\u66F4\u52A0\u7075\u6D3B\u3001\u66F4\u52A0\u4F18\u96C5\u3001\u6613\u4E8E\u6D4B\u8BD5\u7684\u8BED\u6CD5\u3002</p><p>Goravel \u6240\u6709\u7684 <code>facades</code> \u90FD\u5B9A\u4E49\u5728 <code>github.com/goravel/framework/facades</code> \u4E0B\u3002\u6211\u4EEC\u53EF\u4EE5\u5F88\u8F7B\u677E\u7684\u4F7F\u7528 <code>facades</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import &quot;github.com/goravel/framework/facades&quot;

facades.Route.Run(facades.Config.GetString(&quot;app.host&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="facades-\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#facades-\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> facades \u5DE5\u4F5C\u539F\u7406</h2><p><code>facades</code> \u4E00\u822C\u4F1A\u5728\u5404\u6A21\u5757 <code>ServerProvider</code> \u7684 <code>Register</code> \u6216 <code>Boot</code> \u9636\u6BB5\u8FDB\u884C\u5B9E\u4F8B\u5316\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (config *ServiceProvider) Register() {
  app := Application{}
  facades.Config = app.Init()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u8BE5 <code>facades</code> \u4F7F\u7528\u4E86\u5176\u4ED6 <code>facades</code>\uFF0C\u90A3\u4E48\u5C31\u5728 <code>ServerProvider</code> \u7684 <code>Boot</code> \u9636\u6BB5\u8FDB\u884C\u5B9E\u4F8B\u5316\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (database *ServiceProvider) Boot() {
  app := Application{}
  facades.DB = app.Init()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="facade-\u7C7B\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#facade-\u7C7B\u53C2\u8003" aria-hidden="true">#</a> facade \u7C7B\u53C2\u8003</h2>`,10),p=e("thead",null,[e("tr",null,[e("th",null,"Facade"),e("th",null,"\u6587\u6863")])],-1),b=e("td",null,"Artisan",-1),x=t("\u547D\u4EE4\u884C\u5DE5\u5177"),z=e("td",null,"Cache",-1),k=t("\u7F13\u5B58\u7CFB\u7EDF"),R=e("td",null,"Config",-1),B=t("\u914D\u7F6E\u4FE1\u606F"),S=e("td",null,"Orm",-1),C=t("ORM"),q=e("td",null,"Event",-1),w=t("\u4E8B\u4EF6\u7CFB\u7EDF"),G=e("td",null,"Grpc",-1),N=t("Grpc"),P=e("td",null,"Log",-1),V=t("\u65E5\u5FD7"),A=e("td",null,"Queue",-1),L=t("\u961F\u5217"),E=e("td",null,"Route",-1),F=t("\u8DEF\u7531"),I=e("td",null,"Schedule",-1),O=t("\u4EFB\u52A1\u8C03\u5EA6");function y(D,M){const l=o("router-link"),n=o("RouterLink");return c(),i("div",null,[h,e("nav",_,[e("ul",null,[e("li",null,[d(l,{to:"#\u4ECB\u7ECD"},{default:a(()=>[f]),_:1})]),e("li",null,[d(l,{to:"#facades-\u5DE5\u4F5C\u539F\u7406"},{default:a(()=>[v]),_:1})]),e("li",null,[d(l,{to:"#facade-\u7C7B\u53C2\u8003"},{default:a(()=>[g]),_:1})])])]),m,e("table",null,[p,e("tbody",null,[e("tr",null,[b,e("td",null,[d(n,{to:"/zh/digging-deeper/artisan-console.html"},{default:a(()=>[x]),_:1})])]),e("tr",null,[z,e("td",null,[d(n,{to:"/zh/digging-deeper/cache.html"},{default:a(()=>[k]),_:1})])]),e("tr",null,[R,e("td",null,[d(n,{to:"/zh/getting-started/configuration.html"},{default:a(()=>[B]),_:1})])]),e("tr",null,[S,e("td",null,[d(n,{to:"/zh/orm/getting-started.html"},{default:a(()=>[C]),_:1})])]),e("tr",null,[q,e("td",null,[d(n,{to:"/zh/digging-deeper/event.html"},{default:a(()=>[w]),_:1})])]),e("tr",null,[G,e("td",null,[d(n,{to:"/zh/the-basics/grpc.html"},{default:a(()=>[N]),_:1})])]),e("tr",null,[P,e("td",null,[d(n,{to:"/zh/the-basics/logging.html"},{default:a(()=>[V]),_:1})])]),e("tr",null,[A,e("td",null,[d(n,{to:"/zh/digging-deeper/queues.html"},{default:a(()=>[L]),_:1})])]),e("tr",null,[E,e("td",null,[d(n,{to:"/zh/the-basics/routing.html"},{default:a(()=>[F]),_:1})])]),e("tr",null,[I,e("td",null,[d(n,{to:"/zh/digging-deeper/task-scheduling.html"},{default:a(()=>[O]),_:1})])])])])])}const T=s(u,[["render",y],["__file","facades.html.vue"]]);export{T as default};
