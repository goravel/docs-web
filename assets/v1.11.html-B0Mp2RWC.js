import{_ as c,r as o,o as u,c as h,a as e,b as n,w as a,d as t,e as l}from"./app-ClnRftAW.js";const p={},m=e("h1",{id:"upgrading-to-v1-11-from-v1-10",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#upgrading-to-v1-11-from-v1-10"},[e("span",null,"Upgrading To v1.11 From v1.10")])],-1),g={class:"table-of-contents"},f=l(`<h2 id="v1-11-3" tabindex="-1"><a class="header-anchor" href="#v1-11-3"><span>v1.11.3</span></a></h2><h3 id="bug-fixes-🐛" tabindex="-1"><a class="header-anchor" href="#bug-fixes-🐛"><span>Bug Fixes 🐛</span></a></h3><ul><li><a href="#the-problem-of-process-interruption-caused-by-panic-in-schedule">The problem of process interruption caused by panic in Schedule</a></li><li><a href="#the-problem-that-dailyat-in-schedule-will-be-executed-every-minute">The problem that DailyAt in Schedule will be executed every minute</a></li></ul><h2 id="v1-11-2" tabindex="-1"><a class="header-anchor" href="#v1-11-2"><span>v1.11.2</span></a></h2><h3 id="bug-fixes-🐛-1" tabindex="-1"><a class="header-anchor" href="#bug-fixes-🐛-1"><span>Bug Fixes 🐛</span></a></h3><ul><li><a href="#fix-the-data-error-of-using-request-input()-and-request-bind()-at-the-same-time">Fix the data error of using Request.Input() and Request.Bind() at the same time</a></li></ul><h2 id="v1-11-1" tabindex="-1"><a class="header-anchor" href="#v1-11-1"><span>v1.11.1</span></a></h2><h3 id="exciting-new-features-🎉" tabindex="-1"><a class="header-anchor" href="#exciting-new-features-🎉"><span>Exciting New Features 🎉</span></a></h3><ul><li><a href="#route-add-resource-routing">Route add resource routing</a></li><li><a href="#request-add-new-methods">Request add new methods</a></li><li><a href="#storage-add-new-methods">Storage add new methods</a></li><li><a href="#file-add-new-methods">File add new methods</a></li></ul><h3 id="bug-fixes-🐛-2" tabindex="-1"><a class="header-anchor" href="#bug-fixes-🐛-2"><span>Bug Fixes 🐛</span></a></h3><ul><li><a href="#fix-the-error-of-incorrect-windows-path-for-filesystem">Fix the error of incorrect windows path for Filesystem</a></li><li><a href="#fix-the-panic-of-the-header-method-for-request">Fix the panic of the Header method for Request</a></li></ul><h2 id="v1-11-0" tabindex="-1"><a class="header-anchor" href="#v1-11-0"><span>v1.11.0</span></a></h2><h2 id="exciting-new-features-🎉-1" tabindex="-1"><a class="header-anchor" href="#exciting-new-features-🎉-1"><span>Exciting New Features 🎉</span></a></h2><ul><li><a href="#orm-add-model-events">Orm add model events(1.11.0)</a></li></ul><h2 id="enhancements-🚀" tabindex="-1"><a class="header-anchor" href="#enhancements-🚀"><span>Enhancements 🚀</span></a></h2><ul><li><a href="#cache-add-and-optimize-methods">Cache add and optimize methods(1.11.0)</a></li><li><a href="#route-supports-fallback-route">Route supports Fallback route(1.11.0)</a></li><li><a href="#orm-adds-new-methods">Orm adds new methods(1.11.0)</a></li><li><a href="#optimize-facades-config-add">Optimize facades.Config.Add()(1.11.0)</a></li><li><a href="#change-sqlite-driver">Change Sqlite driver(1.11.0)</a></li><li><a href="#contracts-http-add-method-mapping-of-net-http">contracts/http add method mapping of net/http(1.11.0)</a></li></ul><h3 id="breaking-changes-🛠" tabindex="-1"><a class="header-anchor" href="#breaking-changes-🛠"><span>Breaking Changes 🛠</span></a></h3><ul><li><a href="#_2-remove-deprecated-methods">Orm removes methods(1.11.0)</a></li></ul><h3 id="bug-fixes-🐛-3" tabindex="-1"><a class="header-anchor" href="#bug-fixes-🐛-3"><span>Bug Fixes 🐛</span></a></h3><ul><li>The problem that the hashing configuration does not take effect under some situations(1.11.0)</li><li>Non-thread safety problems in RateLimiter(1.11.0)</li></ul><h2 id="upgrade-guide" tabindex="-1"><a class="header-anchor" href="#upgrade-guide"><span>Upgrade Guide</span></a></h2><p>Please upgrade the framework step by step according to the content in this section.</p><p><strong>Estimated Upgrade Time: 1 Minutes</strong></p><h3 id="updating-dependencies" tabindex="-1"><a class="header-anchor" href="#updating-dependencies"><span>Updating Dependencies</span></a></h3><p>Update dependencies in the <code>go.mod</code> file:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>go get -u github.com/goravel/framework@v1.11.0 &amp;&amp; go mod tidy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>go get -u github.com/goravel/framework@v1.11.0 &amp;&amp; go mod tidy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-remove-deprecated-methods" tabindex="-1"><a class="header-anchor" href="#_2-remove-deprecated-methods"><span>2. Remove deprecated methods</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import (
  &quot;github.com/goravel/framework/database&quot;
  &quot;github.com/goravel/framework/database/gorm&quot;
)

// Deprecated
database.NewGormInstance()
// Replace with(Note: This method is not recommended, please try not to use it)
gorm.New()

// Deprecated
facades.Orm.Query().Updates()
// Replace with(Only modify the method name is fine, no need to modify the parameters)
facades.Orm.Query().Update()

// The Update method changes return value
// Before
err := facades.Orm.Query().Update()
// After
res, err := facades.Orm.Query().Update()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="new-content" tabindex="-1"><a class="header-anchor" href="#new-content"><span>New Content</span></a></h2><p>This section does not involve code changes, only enhancements.</p><h3 id="orm-add-model-events" tabindex="-1"><a class="header-anchor" href="#orm-add-model-events"><span>Orm add model events</span></a></h3><p>Version: v1.10.1</p><p>Orm models dispatch several events, allowing you to hook into the following moments in a model&#39;s lifecycle: <code>Retrieved</code>, <code>Creating</code>, <code>Created</code>, <code>Updating</code>, <code>Updated</code>, <code>Saving</code>, <code>Saved</code>, <code>Deleting</code>, <code>Deleted</code>, <code>ForceDeleting</code>, <code>ForceDeleted</code>.</p>`,34),v=e("h3",{id:"cache-add-and-optimize-methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cache-add-and-optimize-methods"},[e("span",null,"Cache add and optimize methods")])],-1),b=e("p",null,"Version: v1.10.1",-1),x=e("h4",{id:"new-methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#new-methods"},[e("span",null,"New Methods")])],-1),k=e("thead",null,[e("tr",null,[e("th",null,"Methods"),e("th",null,"Action")])],-1),_=e("td",null,"Decrement",-1),w=e("td",null,"Increment",-1),y=e("td",null,"Lock",-1),q=e("td",null,"Store",-1),F=l(`<h4 id="optimize-methods" tabindex="-1"><a class="header-anchor" href="#optimize-methods"><span>Optimize methods</span></a></h4><p><code>Get</code>, <code>GetBool</code>, <code>GetInt</code>, <code>GetInt64</code>, <code>GetString</code>, <code>Pull</code> no longer need to pass a default value(Backwards compatible).</p><h3 id="route-supports-fallback-route" tabindex="-1"><a class="header-anchor" href="#route-supports-fallback-route"><span>Route supports Fallback route</span></a></h3><p>Version: v1.10.1</p><p>You may define a route that will be executed when no other route matches the incoming request.</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Fallback</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>ctx http<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> http<span class="token punctuation">.</span>Response <span class="token punctuation">{</span>
  <span class="token keyword">return</span> ctx<span class="token punctuation">.</span><span class="token function">Response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">,</span> <span class="token string">&quot;not found&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="orm-adds-new-methods" tabindex="-1"><a class="header-anchor" href="#orm-adds-new-methods"><span>Orm adds new methods</span></a></h3><p>Version: v1.10.1</p>`,8),R=e("thead",null,[e("tr",null,[e("th",null,"Method"),e("th",null,"Action")])],-1),T=e("td",null,"db.Raw",-1),A=e("td",null,"LockForUpdate",-1),S=e("td",null,"SharedLock",-1),O=l('<h3 id="optimize-facades-config-add" tabindex="-1"><a class="header-anchor" href="#optimize-facades-config-add"><span>Optimize facades.Config.Add()</span></a></h3><p>Version: v1.11.0</p><p>The <code>configuration</code> parameter of <code>facades.Config.Add()</code> changes to <code>any</code> from <code>map[string]any</code>, make configuration more flexible.</p>',3),C=l('<h3 id="change-sqlite-driver" tabindex="-1"><a class="header-anchor" href="#change-sqlite-driver"><span>Change Sqlite driver</span></a></h3><p>Because <code>github.com/mattn/go-sqlite3</code> requires <code>CGO</code> to be started, so replacing a third-party package that does not require <code>CGO</code>: <code>github.com/glebarez/go-sqlite</code>.</p><h3 id="contracts-http-add-method-mapping-of-net-http" tabindex="-1"><a class="header-anchor" href="#contracts-http-add-method-mapping-of-net-http"><span>contracts/http add method mapping of net/http</span></a></h3><p>Version: v1.11.0</p><p>You can use <code>http.MethodGet</code> in controller directly, instead of import <code>net/http</code>.</p>',5),B={href:"https://github.com/goravel/framework/blob/v1.11.0/contracts/http/method.go",target:"_blank",rel:"noopener noreferrer"},z=l(`<h3 id="route-add-resource-routing" tabindex="-1"><a class="header-anchor" href="#route-add-resource-routing"><span>Route Add Resource Routing</span></a></h3><p>Version: v1.11.1</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Resource</span><span class="token punctuation">(</span><span class="token string">&quot;/resource&quot;</span><span class="token punctuation">,</span> resourceController<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),N=e("h3",{id:"request-add-new-methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-add-new-methods"},[e("span",null,"Request Add New Methods")])],-1),D=e("p",null,"Version: v1.11.1",-1),M=e("thead",null,[e("tr",null,[e("th",null,"Method"),e("th",null,"Action")])],-1),U=e("td",null,"All",-1),E=e("td",null,"Host",-1),V=e("td",null,"Queries",-1),G=e("p",null,[t("About to be deprecated the "),e("code",null,"Form"),t(", "),e("code",null,"Json"),t(" methods, please use "),e("code",null,"Input"),t(" instead.")],-1),I=e("h3",{id:"storage-add-new-methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#storage-add-new-methods"},[e("span",null,"Storage Add New Methods")])],-1),L=e("p",null,"Version: v1.11.1",-1),P=e("thead",null,[e("tr",null,[e("th",null,"Method"),e("th",null,"Action")])],-1),H=e("td",null,"LastModified",-1),Q=e("td",null,"MimeType",-1),W=e("h3",{id:"file-add-new-methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#file-add-new-methods"},[e("span",null,"File Add New Methods")])],-1),J=e("p",null,"Version: v1.11.1",-1),Y=e("thead",null,[e("tr",null,[e("th",null,"Method"),e("th",null,"Action")])],-1),j=e("td",null,"LastModified",-1),K=e("td",null,"MimeType",-1),X=e("td",null,"Size",-1),Z=l(`<h3 id="fix-the-error-of-incorrect-windows-path-for-filesystem" tabindex="-1"><a class="header-anchor" href="#fix-the-error-of-incorrect-windows-path-for-filesystem"><span>Fix The Error Of Incorrect Windows Path For Filesystem</span></a></h3><p>Version: v1.11.1</p><p>There is a wrong slash in windows system.</p><h3 id="fix-the-panic-of-the-header-method-for-request" tabindex="-1"><a class="header-anchor" href="#fix-the-panic-of-the-header-method-for-request"><span>Fix The Panic Of The Header Method For Request</span></a></h3><p>Version: v1.11.1</p><p><code>ctx.Request().Header( key: &quot;token&quot;)</code> will panic.</p><h3 id="fix-the-data-error-of-using-request-input-and-request-bind-at-the-same-time" tabindex="-1"><a class="header-anchor" href="#fix-the-data-error-of-using-request-input-and-request-bind-at-the-same-time"><span>Fix The Data Error Of Using Request.Input() And Request.Bind() At The Same Time</span></a></h3><p>Version: v1.11.2</p><p><code>Request.Input()</code> will clear <code>Request.Body</code>, if you use <code>Request.Bind()</code> after that, you will not be able to get the data correctly.</p><h3 id="the-problem-of-process-interruption-caused-by-panic-in-schedule" tabindex="-1"><a class="header-anchor" href="#the-problem-of-process-interruption-caused-by-panic-in-schedule"><span>The problem of process interruption caused by panic in Schedule</span></a></h3><p>Version: v1.11.3</p><p>The Schedule process will interruption when occurring panic, all tasks wil lbe affected.</p><h3 id="the-problem-that-dailyat-in-schedule-will-be-executed-every-minute" tabindex="-1"><a class="header-anchor" href="#the-problem-that-dailyat-in-schedule-will-be-executed-every-minute"><span>The problem that DailyAt in Schedule will be executed every minute</span></a></h3><p>Version: v1.11.3</p><p>Fix the problem that <code>DailyAt</code> will be executed every minute:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>kernel <span class="token operator">*</span>Kernel<span class="token punctuation">)</span> <span class="token function">Schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>schedule<span class="token punctuation">.</span>Event <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>schedule<span class="token punctuation">.</span>Event<span class="token punctuation">{</span>
    facades<span class="token punctuation">.</span>Schedule<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">DailyAt</span><span class="token punctuation">(</span><span class="token string">&quot;18:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function $(ee,te){const s=o("router-link"),i=o("RouteLink"),d=o("ExternalLinkIcon"),r=o("CommentService");return u(),h("div",null,[m,e("nav",g,[e("ul",null,[e("li",null,[n(s,{to:"#v1-11-3"},{default:a(()=>[t("v1.11.3")]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#bug-fixes-🐛"},{default:a(()=>[t("Bug Fixes 🐛")]),_:1})])])]),e("li",null,[n(s,{to:"#v1-11-2"},{default:a(()=>[t("v1.11.2")]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#bug-fixes-🐛-1"},{default:a(()=>[t("Bug Fixes 🐛")]),_:1})])])]),e("li",null,[n(s,{to:"#v1-11-1"},{default:a(()=>[t("v1.11.1")]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#exciting-new-features-🎉"},{default:a(()=>[t("Exciting New Features 🎉")]),_:1})]),e("li",null,[n(s,{to:"#bug-fixes-🐛-2"},{default:a(()=>[t("Bug Fixes 🐛")]),_:1})])])]),e("li",null,[n(s,{to:"#v1-11-0"},{default:a(()=>[t("v1.11.0")]),_:1})]),e("li",null,[n(s,{to:"#exciting-new-features-🎉-1"},{default:a(()=>[t("Exciting New Features 🎉")]),_:1})]),e("li",null,[n(s,{to:"#enhancements-🚀"},{default:a(()=>[t("Enhancements 🚀")]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#breaking-changes-🛠"},{default:a(()=>[t("Breaking Changes 🛠")]),_:1})]),e("li",null,[n(s,{to:"#bug-fixes-🐛-3"},{default:a(()=>[t("Bug Fixes 🐛")]),_:1})])])]),e("li",null,[n(s,{to:"#upgrade-guide"},{default:a(()=>[t("Upgrade Guide")]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#updating-dependencies"},{default:a(()=>[t("Updating Dependencies")]),_:1})]),e("li",null,[n(s,{to:"#_2-remove-deprecated-methods"},{default:a(()=>[t("2. Remove deprecated methods")]),_:1})])])]),e("li",null,[n(s,{to:"#new-content"},{default:a(()=>[t("New Content")]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#orm-add-model-events"},{default:a(()=>[t("Orm add model events")]),_:1})]),e("li",null,[n(s,{to:"#cache-add-and-optimize-methods"},{default:a(()=>[t("Cache add and optimize methods")]),_:1})]),e("li",null,[n(s,{to:"#route-supports-fallback-route"},{default:a(()=>[t("Route supports Fallback route")]),_:1})]),e("li",null,[n(s,{to:"#orm-adds-new-methods"},{default:a(()=>[t("Orm adds new methods")]),_:1})]),e("li",null,[n(s,{to:"#optimize-facades-config-add"},{default:a(()=>[t("Optimize facades.Config.Add()")]),_:1})]),e("li",null,[n(s,{to:"#change-sqlite-driver"},{default:a(()=>[t("Change Sqlite driver")]),_:1})]),e("li",null,[n(s,{to:"#contracts-http-add-method-mapping-of-net-http"},{default:a(()=>[t("contracts/http add method mapping of net/http")]),_:1})]),e("li",null,[n(s,{to:"#route-add-resource-routing"},{default:a(()=>[t("Route Add Resource Routing")]),_:1})]),e("li",null,[n(s,{to:"#request-add-new-methods"},{default:a(()=>[t("Request Add New Methods")]),_:1})]),e("li",null,[n(s,{to:"#storage-add-new-methods"},{default:a(()=>[t("Storage Add New Methods")]),_:1})]),e("li",null,[n(s,{to:"#file-add-new-methods"},{default:a(()=>[t("File Add New Methods")]),_:1})]),e("li",null,[n(s,{to:"#fix-the-error-of-incorrect-windows-path-for-filesystem"},{default:a(()=>[t("Fix The Error Of Incorrect Windows Path For Filesystem")]),_:1})]),e("li",null,[n(s,{to:"#fix-the-panic-of-the-header-method-for-request"},{default:a(()=>[t("Fix The Panic Of The Header Method For Request")]),_:1})]),e("li",null,[n(s,{to:"#fix-the-data-error-of-using-request-input-and-request-bind-at-the-same-time"},{default:a(()=>[t("Fix The Data Error Of Using Request.Input() And Request.Bind() At The Same Time")]),_:1})]),e("li",null,[n(s,{to:"#the-problem-of-process-interruption-caused-by-panic-in-schedule"},{default:a(()=>[t("The problem of process interruption caused by panic in Schedule")]),_:1})]),e("li",null,[n(s,{to:"#the-problem-that-dailyat-in-schedule-will-be-executed-every-minute"},{default:a(()=>[t("The problem that DailyAt in Schedule will be executed every minute")]),_:1})])])])])]),f,e("p",null,[n(i,{to:"/orm/getting-started.html#events"},{default:a(()=>[t("For Detail")]),_:1})]),v,b,x,e("table",null,[k,e("tbody",null,[e("tr",null,[_,e("td",null,[n(i,{to:"/digging-deeper/cache.html#incrementing--decrementing-values"},{default:a(()=>[t("Decrement")]),_:1})])]),e("tr",null,[w,e("td",null,[n(i,{to:"/digging-deeper/cache.html#incrementing--decrementing-values"},{default:a(()=>[t("Increment")]),_:1})])]),e("tr",null,[y,e("td",null,[n(i,{to:"/digging-deeper/cache.html#atomic-locks"},{default:a(()=>[t("Atomic Locks")]),_:1})])]),e("tr",null,[q,e("td",null,[n(i,{to:"/digging-deeper/cache.html#accessing-multiple-cache-stores"},{default:a(()=>[t("Accessing Multiple Cache Stores")]),_:1})])])])]),F,e("table",null,[R,e("tbody",null,[e("tr",null,[T,e("td",null,[n(i,{to:"/orm/getting-started.html#raw-expressions"},{default:a(()=>[t("Raw Expressions")]),_:1})])]),e("tr",null,[A,e("td",null,[n(i,{to:"/orm/getting-started.html#pessimistic-locking"},{default:a(()=>[t("Pessimistic Locking")]),_:1})])]),e("tr",null,[S,e("td",null,[n(i,{to:"/orm/getting-started.html#pessimistic-locking"},{default:a(()=>[t("Pessimistic Locking")]),_:1})])])])]),O,e("p",null,[n(i,{to:"/getting-started/configuration.html#set-configuration"},{default:a(()=>[t("For Detail")]),_:1})]),C,e("p",null,[e("a",B,[t("For Detail"),n(d)])]),z,e("p",null,[n(i,{to:"/the-basics/routing.html#resource-routing"},{default:a(()=>[t("For Detail")]),_:1})]),N,D,e("table",null,[M,e("tbody",null,[e("tr",null,[U,e("td",null,[n(i,{to:"/the-basics/request.html#retrieving-all-input-data"},{default:a(()=>[t("Retrieving all input data")]),_:1})])]),e("tr",null,[E,e("td",null,[n(i,{to:"/the-basics/request.html#retrieving-the-request-host"},{default:a(()=>[t("Retrieving the request HOST")]),_:1})])]),e("tr",null,[V,e("td",null,[n(i,{to:"/the-basics/request.html#retrieving-input-from-the-query-string"},{default:a(()=>[t("Retrieving input from the query string")]),_:1})])])])]),G,I,L,e("table",null,[P,e("tbody",null,[e("tr",null,[H,e("td",null,[n(i,{to:"/digging-deeper/filesystem.html#file-metadata"},{default:a(()=>[t("Get the last modified time of file")]),_:1})])]),e("tr",null,[Q,e("td",null,[n(i,{to:"/digging-deeper/filesystem.html#file-metadata"},{default:a(()=>[t("Get the mime type of file")]),_:1})])])])]),W,J,e("table",null,[Y,e("tbody",null,[e("tr",null,[j,e("td",null,[n(i,{to:"/digging-deeper/filesystem.html#file-metadata"},{default:a(()=>[t("Get the last modified time of file")]),_:1})])]),e("tr",null,[K,e("td",null,[n(i,{to:"/digging-deeper/filesystem.html#file-metadata"},{default:a(()=>[t("Get the mime type of file")]),_:1})])]),e("tr",null,[X,e("td",null,[n(i,{to:"/digging-deeper/filesystem.html#file-metadata"},{default:a(()=>[t("Get the size of file")]),_:1})])])])]),Z,n(r)])}const ae=c(p,[["render",$],["__file","v1.11.html.vue"]]),se=JSON.parse('{"path":"/upgrade/v1.11.html","title":"Upgrading To v1.11 From v1.10","lang":"en-US","frontmatter":{"description":"Upgrading To v1.11 From v1.10 v1.11.3 Bug Fixes 🐛 The problem of process interruption caused by panic in Schedule The problem that DailyAt in Schedule will be executed every mi...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goravel.dev/zh/upgrade/v1.11.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/upgrade/v1.11.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/upgrade/v1.11.html"}],["meta",{"property":"og:description","content":"Upgrading To v1.11 From v1.10 v1.11.3 Bug Fixes 🐛 The problem of process interruption caused by panic in Schedule The problem that DailyAt in Schedule will be executed every mi..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Upgrading To v1.11 From v1.10\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"v1.11.3","slug":"v1-11-3","link":"#v1-11-3","children":[{"level":3,"title":"Bug Fixes 🐛","slug":"bug-fixes-🐛","link":"#bug-fixes-🐛","children":[]}]},{"level":2,"title":"v1.11.2","slug":"v1-11-2","link":"#v1-11-2","children":[{"level":3,"title":"Bug Fixes 🐛","slug":"bug-fixes-🐛-1","link":"#bug-fixes-🐛-1","children":[]}]},{"level":2,"title":"v1.11.1","slug":"v1-11-1","link":"#v1-11-1","children":[{"level":3,"title":"Exciting New Features 🎉","slug":"exciting-new-features-🎉","link":"#exciting-new-features-🎉","children":[]},{"level":3,"title":"Bug Fixes 🐛","slug":"bug-fixes-🐛-2","link":"#bug-fixes-🐛-2","children":[]}]},{"level":2,"title":"v1.11.0","slug":"v1-11-0","link":"#v1-11-0","children":[]},{"level":2,"title":"Exciting New Features 🎉","slug":"exciting-new-features-🎉-1","link":"#exciting-new-features-🎉-1","children":[]},{"level":2,"title":"Enhancements 🚀","slug":"enhancements-🚀","link":"#enhancements-🚀","children":[{"level":3,"title":"Breaking Changes 🛠","slug":"breaking-changes-🛠","link":"#breaking-changes-🛠","children":[]},{"level":3,"title":"Bug Fixes 🐛","slug":"bug-fixes-🐛-3","link":"#bug-fixes-🐛-3","children":[]}]},{"level":2,"title":"Upgrade Guide","slug":"upgrade-guide","link":"#upgrade-guide","children":[{"level":3,"title":"Updating Dependencies","slug":"updating-dependencies","link":"#updating-dependencies","children":[]},{"level":3,"title":"2. Remove deprecated methods","slug":"_2-remove-deprecated-methods","link":"#_2-remove-deprecated-methods","children":[]}]},{"level":2,"title":"New Content","slug":"new-content","link":"#new-content","children":[{"level":3,"title":"Orm add model events","slug":"orm-add-model-events","link":"#orm-add-model-events","children":[]},{"level":3,"title":"Cache add and optimize methods","slug":"cache-add-and-optimize-methods","link":"#cache-add-and-optimize-methods","children":[]},{"level":3,"title":"Route supports Fallback route","slug":"route-supports-fallback-route","link":"#route-supports-fallback-route","children":[]},{"level":3,"title":"Orm adds new methods","slug":"orm-adds-new-methods","link":"#orm-adds-new-methods","children":[]},{"level":3,"title":"Optimize facades.Config.Add()","slug":"optimize-facades-config-add","link":"#optimize-facades-config-add","children":[]},{"level":3,"title":"Change Sqlite driver","slug":"change-sqlite-driver","link":"#change-sqlite-driver","children":[]},{"level":3,"title":"contracts/http add method mapping of net/http","slug":"contracts-http-add-method-mapping-of-net-http","link":"#contracts-http-add-method-mapping-of-net-http","children":[]},{"level":3,"title":"Route Add Resource Routing","slug":"route-add-resource-routing","link":"#route-add-resource-routing","children":[]},{"level":3,"title":"Request Add New Methods","slug":"request-add-new-methods","link":"#request-add-new-methods","children":[]},{"level":3,"title":"Storage Add New Methods","slug":"storage-add-new-methods","link":"#storage-add-new-methods","children":[]},{"level":3,"title":"File Add New Methods","slug":"file-add-new-methods","link":"#file-add-new-methods","children":[]},{"level":3,"title":"Fix The Error Of Incorrect Windows Path For Filesystem","slug":"fix-the-error-of-incorrect-windows-path-for-filesystem","link":"#fix-the-error-of-incorrect-windows-path-for-filesystem","children":[]},{"level":3,"title":"Fix The Panic Of The Header Method For Request","slug":"fix-the-panic-of-the-header-method-for-request","link":"#fix-the-panic-of-the-header-method-for-request","children":[]},{"level":3,"title":"Fix The Data Error Of Using Request.Input() And Request.Bind() At The Same Time","slug":"fix-the-data-error-of-using-request-input-and-request-bind-at-the-same-time","link":"#fix-the-data-error-of-using-request-input-and-request-bind-at-the-same-time","children":[]},{"level":3,"title":"The problem of process interruption caused by panic in Schedule","slug":"the-problem-of-process-interruption-caused-by-panic-in-schedule","link":"#the-problem-of-process-interruption-caused-by-panic-in-schedule","children":[]},{"level":3,"title":"The problem that DailyAt in Schedule will be executed every minute","slug":"the-problem-that-dailyat-in-schedule-will-be-executed-every-minute","link":"#the-problem-that-dailyat-in-schedule-will-be-executed-every-minute","children":[]}]}],"git":{},"filePathRelative":"upgrade/v1.11.md","autoDesc":true}');export{ae as comp,se as data};
