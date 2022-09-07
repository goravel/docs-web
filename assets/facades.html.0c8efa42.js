import{_ as s,r as i,o as c,c as r,b as e,d as t,w as n,e as a,f as l}from"./app.7583e1e5.js";const u={},h=e("h1",{id:"facades",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#facades","aria-hidden":"true"},"#"),a(" Facades")],-1),f={class:"table-of-contents"},v=a("Introduction"),p=a("How Facades Work"),_=a("Facade Class Reference"),g=l(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p><code>facades</code> provide a &quot;static&quot; interface for the core functionality of the application. Goravel comes with a lot of <code>facades</code>, you can use more of the functions, and can provide a more flexible, more elegant, and easy-to-test syntax when using it.</p><p>All <code>facades</code> of Goravel are defined under <code>github.com/goravel/framework/support/facades</code>. We can easily use <code>facades</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import &quot;github.com/goravel/framework/support/facades&quot;

facades.Route.Run(facades.Config.GetString(&quot;app.host&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="how-facades-work" tabindex="-1"><a class="header-anchor" href="#how-facades-work" aria-hidden="true">#</a> How Facades Work</h2><p><code>facades</code> are generally instantiated in the <code>Register</code> or <code>Boot</code> stage of <code>ServerProvider</code>, or they can be assigned directly, which can be flexibly distinguished according to different usage scenarios.</p><p>For example, if you just want to use <code>facades</code> to instantiate an object, you can assign it directly.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var Artisan = &amp;console.Application{}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If the <code>facades</code> use other <code>facades</code>, then instantiate them in the <code>Boot</code> phase of the <code>ServerProvider</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (database *ServiceProvider) Register() {
  app := Application{}
  facades.DB = app.Init()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In other cases, it can be instantiated in the <code>Register</code> phase of <code>ServerProvider</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>func (config *ServiceProvider) Register() {
  app := Application{}
  facades.Config = app.Init()
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="facade-class-reference" tabindex="-1"><a class="header-anchor" href="#facade-class-reference" aria-hidden="true">#</a> Facade Class Reference</h2>`,13),m=e("thead",null,[e("tr",null,[e("th",null,"Facade"),e("th",null,"Action")])],-1),b=e("td",null,"Artisan",-1),x=a("Artisan Console"),w=e("td",null,"Config",-1),R=a("Configuration"),k=e("td",null,"DB",-1),y=a("ORM"),C=e("td",null,"Route",-1),A=a("Roueting");function B(F,S){const d=i("router-link"),o=i("RouterLink");return c(),r("div",null,[h,e("nav",f,[e("ul",null,[e("li",null,[t(d,{to:"#introduction"},{default:n(()=>[v]),_:1})]),e("li",null,[t(d,{to:"#how-facades-work"},{default:n(()=>[p]),_:1})]),e("li",null,[t(d,{to:"#facade-class-reference"},{default:n(()=>[_]),_:1})])])]),g,e("table",null,[m,e("tbody",null,[e("tr",null,[b,e("td",null,[t(o,{to:"/digging-deeper/artisan-console.html"},{default:n(()=>[x]),_:1})])]),e("tr",null,[w,e("td",null,[t(o,{to:"/getting-started/configuration.html"},{default:n(()=>[R]),_:1})])]),e("tr",null,[k,e("td",null,[t(o,{to:"/ORM/getting-started.html"},{default:n(()=>[y]),_:1})])]),e("tr",null,[C,e("td",null,[t(o,{to:"/the-basics/routing.html"},{default:n(()=>[A]),_:1})])])])])])}const I=s(u,[["render",B],["__file","facades.html.vue"]]);export{I as default};