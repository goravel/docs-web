import{_ as s,r as o,o as i,c as l,b as e,d,w as t,e as a,f as r}from"./app.7583e1e5.js";const u={},h=e("h1",{id:"facades",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#facades","aria-hidden":"true"},"#"),a(" Facades")],-1),v={class:"table-of-contents"},f=a("\u4ECB\u7ECD"),_=a("facades \u5DE5\u4F5C\u539F\u7406"),p=a("facade \u7C7B\u53C2\u8003"),m=r(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p><code>facades</code> \u4E3A\u5E94\u7528\u7684\u6838\u5FC3\u529F\u80FD\u63D0\u4F9B\u4E00\u4E2A\u300C\u9759\u6001\u300D\u63A5\u53E3\u3002Goravel \u81EA\u5E26\u4E86\u5F88\u591A <code>facades</code>\uFF0C\u53EF\u4EE5\u4F7F\u7528\u5927\u90E8\u5206\u529F\u80FD\uFF0C\u5728\u4F7F\u7528\u65F6\u80FD\u591F\u63D0\u4F9B\u66F4\u52A0\u7075\u6D3B\u3001\u66F4\u52A0\u4F18\u96C5\u3001\u6613\u4E8E\u6D4B\u8BD5\u7684\u8BED\u6CD5\u3002</p><p>Goravel \u6240\u6709\u7684 <code>facades</code> \u90FD\u5B9A\u4E49\u5728 <code>github.com/goravel/framework/support/facades</code> \u4E0B\u3002\u6211\u4EEC\u53EF\u4EE5\u5F88\u8F7B\u677E\u7684\u4F7F\u7528 <code>facades</code>\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import &quot;github.com/goravel/framework/support/facades&quot;

facades.Route.Run(facades.Config.GetString(&quot;app.host&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="facades-\u5DE5\u4F5C\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#facades-\u5DE5\u4F5C\u539F\u7406" aria-hidden="true">#</a> facades \u5DE5\u4F5C\u539F\u7406</h2><p><code>facades</code> \u4E00\u822C\u4F1A\u5728 <code>ServerProvider</code> \u7684 <code>Register</code> \u6216 <code>Boot</code> \u9636\u6BB5\u8FDB\u884C\u5B9E\u4F8B\u5316\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8FDB\u884C\u8D4B\u503C\uFF0C\u5177\u4F53\u6839\u636E\u4F7F\u7528\u573A\u666F\u4E0D\u540C\u7075\u6D3B\u533A\u5206\u3002</p><p>\u4F8B\u5982\uFF0C\u4F60\u53EA\u662F\u60F3\u7528 <code>facades</code> \u5B9E\u4F8B\u5316\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8FDB\u884C\u8D4B\u503C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var Artisan = &amp;console.Application{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u8BE5 <code>facades</code> \u4F7F\u7528\u4E86\u5176\u4ED6 <code>facades</code>\uFF0C\u90A3\u4E48\u5C31\u5728 <code>ServerProvider</code> \u7684 <code>Boot</code> \u9636\u6BB5\u8FDB\u884C\u5B9E\u4F8B\u5316\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (database *ServiceProvider) Register() {
  app := Application{}
  facades.DB = app.Init()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4ED6\u60C5\u51B5\uFF0C\u53EF\u4EE5\u5728 <code>ServerProvider</code> \u7684 <code>Register</code> \u9636\u6BB5\u8FDB\u884C\u5B9E\u4F8B\u5316\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (config *ServiceProvider) Register() {
  app := Application{}
  facades.Config = app.Init()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="facade-\u7C7B\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#facade-\u7C7B\u53C2\u8003" aria-hidden="true">#</a> facade \u7C7B\u53C2\u8003</h2>`,13),b=e("thead",null,[e("tr",null,[e("th",null,"Facade"),e("th",null,"\u4F5C\u7528")])],-1),g=e("td",null,"Artisan",-1),x=a("\u547D\u4EE4\u884C\u5DE5\u5177"),E=e("td",null,"Config",-1),A=a("\u83B7\u53D6\u7CFB\u7EDF\u914D\u7F6E"),B=e("td",null,"DB",-1),R=a("ORM"),C=e("td",null,"Route",-1),k=a("\u8DEF\u7531");function D(F,S){const c=o("router-link"),n=o("RouterLink");return i(),l("div",null,[h,e("nav",v,[e("ul",null,[e("li",null,[d(c,{to:"#\u4ECB\u7ECD"},{default:t(()=>[f]),_:1})]),e("li",null,[d(c,{to:"#facades-\u5DE5\u4F5C\u539F\u7406"},{default:t(()=>[_]),_:1})]),e("li",null,[d(c,{to:"#facade-\u7C7B\u53C2\u8003"},{default:t(()=>[p]),_:1})])])]),m,e("table",null,[b,e("tbody",null,[e("tr",null,[g,e("td",null,[d(n,{to:"/zh/%E7%BB%BC%E5%90%88%E8%AF%9D%E9%A2%98/Artisan%E5%91%BD%E4%BB%A4%E8%A1%8C.html"},{default:t(()=>[x]),_:1})])]),e("tr",null,[E,e("td",null,[d(n,{to:"/zh/%E5%85%A5%E9%97%A8%E6%8C%87%E5%8D%97/%E9%85%8D%E7%BD%AE%E4%BF%A1%E6%81%AF.html"},{default:t(()=>[A]),_:1})])]),e("tr",null,[B,e("td",null,[d(n,{to:"/zh/ORM.html"},{default:t(()=>[R]),_:1})])]),e("tr",null,[C,e("td",null,[d(n,{to:"/zh/%E5%9F%BA%E6%9C%AC%E5%8A%9F%E8%83%BD/%E8%B7%AF%E7%94%B1.html"},{default:t(()=>[k]),_:1})])])])])])}const q=s(u,[["render",D],["__file","facades.html.vue"]]);export{q as default};
