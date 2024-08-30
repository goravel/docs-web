import{_ as c,r as i,o as u,c as p,a as e,b as n,w as t,d as a,e as l}from"./app-szi7K--b.js";const m={},h=e("h1",{id:"upgrading-to-v1-8-from-v1-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#upgrading-to-v1-8-from-v1-7"},[e("span",null,"Upgrading To v1.8 From v1.7")])],-1),g={class:"table-of-contents"},v=l(`<h2 id="exciting-new-features-🎉" tabindex="-1"><a class="header-anchor" href="#exciting-new-features-🎉"><span>Exciting New Features 🎉</span></a></h2><ul><li><a href="#add-model-association-for-orm">Add model association for Orm(1.8.0)</a></li></ul><h2 id="enhancements-🚀" tabindex="-1"><a class="header-anchor" href="#enhancements-🚀"><span>Enhancements 🚀</span></a></h2><ul><li><a href="#add-methods-for-request">Add methods for Request(1.8.0)</a></li><li><a href="#add-methods-for-response">Add methods for Response(1.8.0)</a></li><li><a href="#optimize-database-migrate">Optimize database migrate(1.8.0)</a></li><li><a href="#route-supports-https">Route supports HTTPS(1.8.3)</a></li></ul><h2 id="breaking-changes-🛠" tabindex="-1"><a class="header-anchor" href="#breaking-changes-🛠"><span>Breaking Changes 🛠</span></a></h2><ul><li><a href="#optimize-import-order">Optimize import order(1.8.0)</a></li><li><a href="#mock-validator-change-Name">mock.Validator change name(1.8.0)</a></li><li><a href="#support-mysql-change-name">support.Mysql change name(1.8.0)</a></li><li><a href="#database-newgorminstance-is-about-to-be-deprecated">database.NewGormInstance is about to be deprecated(1.8.0)</a></li></ul><h2 id="bug-fixes-🐛" tabindex="-1"><a class="header-anchor" href="#bug-fixes-🐛"><span>Bug Fixes 🐛</span></a></h2><ul><li><a href="#fix-Orm-concurrency-safety-issue">Fix Orm concurrency safety issue(1.8.1)</a></li><li><a href="#fix-mail-module-can-t-send-mail-by-25-and-465-ports">Fix Mail module can&#39;t send mail by 25 and 465 ports(1.8.2)</a></li></ul><h2 id="upgrade-guide" tabindex="-1"><a class="header-anchor" href="#upgrade-guide"><span>Upgrade Guide</span></a></h2><p><strong>Estimated Upgrade Time: 1 Minutes</strong></p><h3 id="updating-dependencies" tabindex="-1"><a class="header-anchor" href="#updating-dependencies"><span>Updating Dependencies</span></a></h3><p>Update dependencies in the <code>go.mod</code> file:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>go get -u github.com/goravel/framework@v1.8.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="add-model-association-for-orm" tabindex="-1"><a class="header-anchor" href="#add-model-association-for-orm"><span>Add model association for Orm</span></a></h3><p>Version: v1.8.0</p><p>Add methods for Orm, to handle model association:</p>`,16),f=e("thead",null,[e("tr",null,[e("th",null,"Method"),e("th",null,"Action")])],-1),b=e("td",null,"Association",-1),k=e("td",null,"DB",-1),_=e("td",null,"Load",-1),y=e("td",null,"LoadMissing",-1),x=e("td",null,"Omit",-1),q=e("td",null,"With",-1),w=e("h3",{id:"add-methods-for-request",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#add-methods-for-request"},[e("span",null,"Add methods for Request")])],-1),z=e("p",null,"Version: v1.8.0",-1),A=e("p",null,[a("Add methods for "),e("code",null,"ctx.Request()"),a(", to enrich the format of "),e("code",null,"Query"),a(" parameters:")],-1),R=e("thead",null,[e("tr",null,[e("th",null,"Method"),e("th",null,"Action")])],-1),O=e("td",null,[e("code",null,"QueryArray")],-1),T=e("td",null,[e("code",null,"QueryMap")],-1),F=e("h3",{id:"add-methods-for-response",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#add-methods-for-response"},[e("span",null,"Add-methods-for-Response")])],-1),N=e("p",null,"Version: v1.8.0",-1),M=e("p",null,[a("Add "),e("code",null,"Origin"),a(" method to "),e("code",null,"ctx.Response()"),a(", you can get all information of "),e("code",null,"Response"),a(" in the HTTP middleware.")],-1),V=l(`<h3 id="optimize-import-order" tabindex="-1"><a class="header-anchor" href="#optimize-import-order"><span>Optimize import order</span></a></h3><p>Version: v1.8.0</p><p>The import order in the <code>bootstrap/app.go</code> file change to:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> bootstrap

<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;github.com/goravel/framework/foundation&quot;</span>

  <span class="token string">&quot;goravel/config&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),S={href:"https://github.com/goravel/goravel/blob/v1.8.0/bootstrap/app.go",target:"_blank",rel:"noopener noreferrer"},E=l(`<h3 id="optimize-database-migrate" tabindex="-1"><a class="header-anchor" href="#optimize-database-migrate"><span>Optimize database migrate</span></a></h3><p>Version: v1.8.0</p><p>Run the command that generate the migrate file: <code>go run . artisan make:migration create_users_table</code>, the corresponding migration file will be generated based on the default database driver currently in use(<code>facades.Config.GetString(&quot;database.default&quot;)</code>).</p><h3 id="mock-validator-change-name" tabindex="-1"><a class="header-anchor" href="#mock-validator-change-name"><span>mock.Validator Change Name</span></a></h3><p>Version: v1.8.0</p><p>If you use <code>mock.Validator</code> to write unit tests, the following modifications are required:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import &quot;github.com/goravel/framework/testing/mock&quot;

mock.Validator

// Modify to

import &quot;github.com/goravel/framework/testing/mock&quot;

mock.Validation
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),C=l(`<h3 id="support-mysql-change-name" tabindex="-1"><a class="header-anchor" href="#support-mysql-change-name"><span>support.Mysql Change Name</span></a></h3><p>Version: v1.8.0</p><p>If you use framework constants such as <code>support.Mysql</code> to judge the database driver, you need to make the following modifications:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/database/support&quot;</span>

support<span class="token punctuation">.</span>Mysql
support<span class="token punctuation">.</span>Postgresql
support<span class="token punctuation">.</span>Sqlite
support<span class="token punctuation">.</span>Sqlserver

<span class="token comment">// Modify to</span>

<span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/contracts/database/orm&quot;</span>

orm<span class="token punctuation">.</span>Mysql
orm<span class="token punctuation">.</span>Postgresql
orm<span class="token punctuation">.</span>Sqlite
orm<span class="token punctuation">.</span>Sqlserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The new constants such as <code>orm.Mysql</code> are of type <code>orm.Driver</code> and can be converted to a string type using the <code>orm.Mysql.String()</code> method.</p><h3 id="database-newgorminstance-is-about-to-be-deprecated" tabindex="-1"><a class="header-anchor" href="#database-newgorminstance-is-about-to-be-deprecated"><span>database.NewGormInstance is about to be deprecated</span></a></h3><p>Version: v1.8.0</p><p>The <code>database.NewGormInstance</code> method will be deprecated in v1.9.0 version, it can be used in current version, if you use the method to get the <code>gorm</code> instance, the following modifications are required:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/database&quot;</span>

gorm<span class="token punctuation">,</span> err <span class="token operator">:=</span> database<span class="token punctuation">.</span><span class="token function">NewGormInstance</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span>

<span class="token comment">// Modify to</span>

<span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/database/gorm&quot;</span>

gorm<span class="token punctuation">,</span> err <span class="token operator">:=</span> gorm<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fix-orm-concurrency-safety-issue" tabindex="-1"><a class="header-anchor" href="#fix-orm-concurrency-safety-issue"><span>Fix Orm concurrency safety issue</span></a></h3><p>Version: v1.8.1</p><p>When high concurrent access, reading <code>facades.Orm</code> for the first time may return nil.</p><h3 id="fix-mail-module-can-t-send-mail-by-25-and-465-ports" tabindex="-1"><a class="header-anchor" href="#fix-mail-module-can-t-send-mail-by-25-and-465-ports"><span>Fix Mail module can&#39;t send mail by 25 and 465 ports</span></a></h3><p>Version: v1.8.2</p><p>You can send mail by 25, 465, 587 ports now.</p><h3 id="route-supports-https" tabindex="-1"><a class="header-anchor" href="#route-supports-https"><span>Route supports HTTPS</span></a></h3><p>Version: v1.8.3</p>`,17),G=e("code",null,"facades.Route",-1),U=e("code",null,"RunTLS",-1);function I(L,B){const s=i("router-link"),o=i("RouteLink"),r=i("ExternalLinkIcon"),d=i("CommentService");return u(),p("div",null,[h,e("nav",g,[e("ul",null,[e("li",null,[n(s,{to:"#exciting-new-features-🎉"},{default:t(()=>[a("Exciting New Features 🎉")]),_:1})]),e("li",null,[n(s,{to:"#enhancements-🚀"},{default:t(()=>[a("Enhancements 🚀")]),_:1})]),e("li",null,[n(s,{to:"#breaking-changes-🛠"},{default:t(()=>[a("Breaking Changes 🛠")]),_:1})]),e("li",null,[n(s,{to:"#bug-fixes-🐛"},{default:t(()=>[a("Bug Fixes 🐛")]),_:1})]),e("li",null,[n(s,{to:"#upgrade-guide"},{default:t(()=>[a("Upgrade Guide")]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#updating-dependencies"},{default:t(()=>[a("Updating Dependencies")]),_:1})]),e("li",null,[n(s,{to:"#add-model-association-for-orm"},{default:t(()=>[a("Add model association for Orm")]),_:1})]),e("li",null,[n(s,{to:"#add-methods-for-request"},{default:t(()=>[a("Add methods for Request")]),_:1})]),e("li",null,[n(s,{to:"#add-methods-for-response"},{default:t(()=>[a("Add-methods-for-Response")]),_:1})]),e("li",null,[n(s,{to:"#optimize-import-order"},{default:t(()=>[a("Optimize import order")]),_:1})]),e("li",null,[n(s,{to:"#optimize-database-migrate"},{default:t(()=>[a("Optimize database migrate")]),_:1})]),e("li",null,[n(s,{to:"#mock-validator-change-name"},{default:t(()=>[a("mock.Validator Change Name")]),_:1})]),e("li",null,[n(s,{to:"#support-mysql-change-name"},{default:t(()=>[a("support.Mysql Change Name")]),_:1})]),e("li",null,[n(s,{to:"#database-newgorminstance-is-about-to-be-deprecated"},{default:t(()=>[a("database.NewGormInstance is about to be deprecated")]),_:1})]),e("li",null,[n(s,{to:"#fix-orm-concurrency-safety-issue"},{default:t(()=>[a("Fix Orm concurrency safety issue")]),_:1})]),e("li",null,[n(s,{to:"#fix-mail-module-can-t-send-mail-by-25-and-465-ports"},{default:t(()=>[a("Fix Mail module can't send mail by 25 and 465 ports")]),_:1})]),e("li",null,[n(s,{to:"#route-supports-https"},{default:t(()=>[a("Route supports HTTPS")]),_:1})])])])])]),v,e("table",null,[f,e("tbody",null,[e("tr",null,[b,e("td",null,[n(o,{to:"/orm/relationships.html#querying-associations"},{default:t(()=>[a("Association")]),_:1})])]),e("tr",null,[k,e("td",null,[n(o,{to:"/orm/getting-started.html#generic-database-interface-sqldb"},{default:t(()=>[a("Generic Database Interface sql.DB")]),_:1})])]),e("tr",null,[_,e("td",null,[n(o,{to:"/orm/relationships.html#lazy-eager-loading"},{default:t(()=>[a("Lazy Eager Loading")]),_:1})])]),e("tr",null,[y,e("td",null,[n(o,{to:"/orm/relationships.html#lazy-eager-loading"},{default:t(()=>[a("Lazy Eager Loading(not exist)")]),_:1})])]),e("tr",null,[x,e("td",null,[n(o,{to:"/orm/relationships.html#create-or-update-associations"},{default:t(()=>[a("Omit associations")]),_:1})])]),e("tr",null,[q,e("td",null,[n(o,{to:"/orm/relationships.html#Eager-Loading"},{default:t(()=>[a("Eager Loading")]),_:1})])])])]),w,z,A,e("table",null,[R,e("tbody",null,[e("tr",null,[O,e("td",null,[n(o,{to:"/the-basics/request.html#Retrieving-Input-From-The-Query-String"},{default:t(()=>[a("Get the array parameters")]),_:1})])]),e("tr",null,[T,e("td",null,[n(o,{to:"/the-basics/request.html#Retrieving-Input-From-The-Query-String"},{default:t(()=>[a("Get the map parameters")]),_:1})])])])]),F,N,M,e("p",null,[n(o,{to:"/the-basics/response.html#Get-Response"},{default:t(()=>[a("Detail")]),_:1})]),V,e("p",null,[e("a",S,[a("The File"),n(r)])]),E,e("p",null,[n(o,{to:"/testing/mock.html#Mock-facades.Validation"},{default:t(()=>[a("Detail")]),_:1})]),C,e("p",null,[G,a(" Add "),U,a(" method，support start HTTPS server, "),n(o,{to:"/the-basics/routing.html#start-https-server"},{default:t(()=>[a("For Detail")]),_:1}),a(".")]),n(d)])}const P=c(m,[["render",I],["__file","v1.8.html.vue"]]),H=JSON.parse(`{"path":"/upgrade/v1.8.html","title":"Upgrading To v1.8 From v1.7","lang":"en-US","frontmatter":{"description":"Upgrading To v1.8 From v1.7 Exciting New Features 🎉 Add model association for Orm(1.8.0) Enhancements 🚀 Add methods for Request(1.8.0) Add methods for Response(1.8.0) Optimize...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goravel.dev/zh/upgrade/v1.8.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/upgrade/v1.8.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/upgrade/v1.8.html"}],["meta",{"property":"og:description","content":"Upgrading To v1.8 From v1.7 Exciting New Features 🎉 Add model association for Orm(1.8.0) Enhancements 🚀 Add methods for Request(1.8.0) Add methods for Response(1.8.0) Optimize..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Upgrading To v1.8 From v1.7\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Exciting New Features 🎉","slug":"exciting-new-features-🎉","link":"#exciting-new-features-🎉","children":[]},{"level":2,"title":"Enhancements 🚀","slug":"enhancements-🚀","link":"#enhancements-🚀","children":[]},{"level":2,"title":"Breaking Changes 🛠","slug":"breaking-changes-🛠","link":"#breaking-changes-🛠","children":[]},{"level":2,"title":"Bug Fixes 🐛","slug":"bug-fixes-🐛","link":"#bug-fixes-🐛","children":[]},{"level":2,"title":"Upgrade Guide","slug":"upgrade-guide","link":"#upgrade-guide","children":[{"level":3,"title":"Updating Dependencies","slug":"updating-dependencies","link":"#updating-dependencies","children":[]},{"level":3,"title":"Add model association for Orm","slug":"add-model-association-for-orm","link":"#add-model-association-for-orm","children":[]},{"level":3,"title":"Add methods for Request","slug":"add-methods-for-request","link":"#add-methods-for-request","children":[]},{"level":3,"title":"Add-methods-for-Response","slug":"add-methods-for-response","link":"#add-methods-for-response","children":[]},{"level":3,"title":"Optimize import order","slug":"optimize-import-order","link":"#optimize-import-order","children":[]},{"level":3,"title":"Optimize database migrate","slug":"optimize-database-migrate","link":"#optimize-database-migrate","children":[]},{"level":3,"title":"mock.Validator Change Name","slug":"mock-validator-change-name","link":"#mock-validator-change-name","children":[]},{"level":3,"title":"support.Mysql Change Name","slug":"support-mysql-change-name","link":"#support-mysql-change-name","children":[]},{"level":3,"title":"database.NewGormInstance is about to be deprecated","slug":"database-newgorminstance-is-about-to-be-deprecated","link":"#database-newgorminstance-is-about-to-be-deprecated","children":[]},{"level":3,"title":"Fix Orm concurrency safety issue","slug":"fix-orm-concurrency-safety-issue","link":"#fix-orm-concurrency-safety-issue","children":[]},{"level":3,"title":"Fix Mail module can't send mail by 25 and 465 ports","slug":"fix-mail-module-can-t-send-mail-by-25-and-465-ports","link":"#fix-mail-module-can-t-send-mail-by-25-and-465-ports","children":[]},{"level":3,"title":"Route supports HTTPS","slug":"route-supports-https","link":"#route-supports-https","children":[]}]}],"git":{},"filePathRelative":"upgrade/v1.8.md","autoDesc":true}`);export{P as comp,H as data};