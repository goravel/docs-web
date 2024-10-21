import{_ as c,r as o,o as r,c as p,a as e,b as t,w as a,d as n,e as i}from"./app-C1EstAlD.js";const h={},E=e("h1",{id:"从-v1-10-升级到-v1-11",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#从-v1-10-升级到-v1-11"},[e("span",null,"从 v1.10 升级到 v1.11")])],-1),g={class:"table-of-contents"},v=i(`<h2 id="v1-11-3" tabindex="-1"><a class="header-anchor" href="#v1-11-3"><span>v1.11.3</span></a></h2><h3 id="bug-修复-🐛" tabindex="-1"><a class="header-anchor" href="#bug-修复-🐛"><span>Bug 修复 🐛</span></a></h3><ul><li><a href="#schedule-%E4%B8%AD-panic-%E5%AF%BC%E8%87%B4%E8%BF%9B%E7%A8%8B%E4%B8%AD%E6%96%AD%E7%9A%84%E9%97%AE%E9%A2%98">Schedule 中 panic 导致进程中断的问题</a></li><li><a href="#schedule-%E4%B8%AD-dailyat-%E6%AF%8F%E5%88%86%E9%92%9F%E9%83%BD%E4%BC%9A%E6%89%A7%E8%A1%8C%E7%9A%84%E9%97%AE%E9%A2%98">Schedule 中 DailyAt 每分钟都会执行的问题</a></li></ul><h2 id="v1-11-2" tabindex="-1"><a class="header-anchor" href="#v1-11-2"><span>v1.11.2</span></a></h2><h3 id="bug-修复-🐛-1" tabindex="-1"><a class="header-anchor" href="#bug-修复-🐛-1"><span>Bug 修复 🐛</span></a></h3><ul><li><a href="#%E5%90%8C%E6%97%B6%E4%BD%BF%E7%94%A8-request-input()-%E4%B8%8E-request-bind()-%E6%96%B9%E6%B3%95%E6%95%B0%E6%8D%AE%E9%94%99%E8%AF%AF%E7%9A%84%E9%97%AE%E9%A2%98">同时使用 Request.Input() 与 Request.Bind() 数据错误的问题</a></li></ul><h2 id="v1-11-1" tabindex="-1"><a class="header-anchor" href="#v1-11-1"><span>v1.11.1</span></a></h2><h3 id="功能增强-🚀" tabindex="-1"><a class="header-anchor" href="#功能增强-🚀"><span>功能增强 🚀</span></a></h3><ul><li><a href="#route-%E6%96%B0%E5%A2%9E%E8%B5%84%E6%BA%90%E8%B7%AF%E7%94%B1">Route 新增资源路由</a></li><li><a href="#request-%E6%96%B0%E5%A2%9E%E6%96%B9%E6%B3%95">Request 新增方法</a></li><li><a href="#storage-%E6%96%B0%E5%A2%9E%E6%96%B9%E6%B3%95">Storage 新增方法</a></li><li><a href="#file-%E6%96%B0%E5%A2%9E%E6%96%B9%E6%B3%95">File 新增方法</a></li></ul><h3 id="bug-修复-🐛-2" tabindex="-1"><a class="header-anchor" href="#bug-修复-🐛-2"><span>Bug 修复 🐛</span></a></h3><ul><li><a href="#%E4%BF%AE%E5%A4%8D%E6%96%87%E4%BB%B6%E5%82%A8%E5%AD%98-windows-%E8%B7%AF%E5%BE%84%E9%94%99%E8%AF%AF%E7%9A%84%E9%97%AE%E9%A2%98">修复文件储存 windows 路径错误的问题</a></li><li><a href="%E4%BF%AE%E5%A4%8D-request-%E6%A8%A1%E5%9D%97-header-panic-%E9%97%AE%E9%A2%98">修复 Request 模块 Header panic 问题</a></li></ul><h2 id="v1-11-0" tabindex="-1"><a class="header-anchor" href="#v1-11-0"><span>v1.11.0</span></a></h2><h3 id="令人兴奋的新功能-🎉" tabindex="-1"><a class="header-anchor" href="#令人兴奋的新功能-🎉"><span>令人兴奋的新功能 🎉</span></a></h3><ul><li><a href="#orm-%E6%96%B0%E5%A2%9E%E6%A8%A1%E5%9E%8B%E4%BA%8B%E4%BB%B6">Orm 新增模型事件(1.11.0)</a></li></ul><h3 id="功能增强-🚀-1" tabindex="-1"><a class="header-anchor" href="#功能增强-🚀-1"><span>功能增强 🚀</span></a></h3><ul><li><a href="#cache-%E6%96%B0%E5%A2%9E%E3%80%81%E4%BC%98%E5%8C%96%E6%96%B9%E6%B3%95">Cache 新增、优化方法(1.11.0)</a></li><li><a href="#route-%E6%94%AF%E6%8C%81-fallback-%E8%B7%AF%E7%94%B1">Route 支持 Fallback 路由(1.11.0)</a></li><li><a href="#orm-%E6%96%B0%E5%A2%9E%E6%96%B9%E6%B3%95">Orm 新增方法(1.11.0)</a></li><li><a href="#%E4%BC%98%E5%8C%96-facades-config-add-%E6%96%B9%E6%B3%95">优化 facades.Config.Add() 方法(1.11.0)</a></li><li><a href="#%E4%BF%AE%E6%94%B9-sqlite-%E9%A9%B1%E5%8A%A8">修改 Sqlite 驱动(1.11.0)</a></li><li><a href="#contracts-http-%E5%A2%9E%E5%8A%A0-net-http-%E7%9A%84-method-%E6%98%A0%E5%B0%84">contracts/http 增加 net/http 的 Method 映射(1.11.0)</a></li></ul><h3 id="破坏性变化-🛠" tabindex="-1"><a class="header-anchor" href="#破坏性变化-🛠"><span>破坏性变化 🛠</span></a></h3><ul><li><a href="#_2-%E4%BC%98%E5%8C%96%E3%80%81%E7%A7%BB%E9%99%A4%E5%BA%9F%E5%BC%83%E7%9A%84%E6%96%B9%E6%B3%95">Orm 优化、移除方法(1.11.0)</a></li></ul><h3 id="bug-修复-🐛-3" tabindex="-1"><a class="header-anchor" href="#bug-修复-🐛-3"><span>Bug 修复 🐛</span></a></h3><ul><li>Hash 配置在某种情况下不生效的问题(1.11.0)</li><li>RateLimiter 非线程安全的问题(1.11.0)</li></ul><h2 id="升级指南" tabindex="-1"><a class="header-anchor" href="#升级指南"><span>升级指南</span></a></h2><p>请根据本节内容，一步步进行框架升级。</p><p><strong>预计升级时间：1 分钟</strong></p><h3 id="_1-更新依赖" tabindex="-1"><a class="header-anchor" href="#_1-更新依赖"><span>1. 更新依赖</span></a></h3><p><code>go.mod</code> 中更新依赖：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>go get -u github.com/goravel/framework@v1.11.0 &amp;&amp; go mod tidy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-优化、移除废弃的方法" tabindex="-1"><a class="header-anchor" href="#_2-优化、移除废弃的方法"><span>2. 优化、移除废弃的方法</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>import (
  &quot;github.com/goravel/framework/database&quot;
  &quot;github.com/goravel/framework/database/gorm&quot;
)

// 废弃
database.NewGormInstance()
// 替换为（注：该方法未推荐使用，请尽量不用）
gorm.New()

// 废弃
facades.Orm.Query().Updates()
// 替换为(只修改方法名即可，无需修改参数)
facades.Orm.Query().Update()

// Update 方法修改返回值
// 修改前
err := facades.Orm.Query().Update()
// 修改后
res, err := facades.Orm.Query().Update()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="新增内容" tabindex="-1"><a class="header-anchor" href="#新增内容"><span>新增内容</span></a></h2><p>本节内容不涉及到代码修改，只是功能增强。</p><h3 id="orm-新增模型事件" tabindex="-1"><a class="header-anchor" href="#orm-新增模型事件"><span>Orm 新增模型事件</span></a></h3><p>Version: v1.11.0</p><p>Orm 模型触发几个事件，允许你挂接到模型生命周期的如下节点：<code>Retrieved</code>、<code>Creating</code>、<code>Created</code>、<code>Updating</code>、<code>Updated</code>、<code>Saving</code>、<code>Saved</code>、<code>Deleting</code>、<code>Deleted</code>、<code>ForceDeleting</code>、<code>ForceDeleted</code>。</p>`,33),f=e("h3",{id:"cache-新增、优化方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cache-新增、优化方法"},[e("span",null,"Cache 新增、优化方法")])],-1),m=e("p",null,"Version: v1.11.0",-1),_=e("h4",{id:"新增方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#新增方法"},[e("span",null,"新增方法")])],-1),b=e("thead",null,[e("tr",null,[e("th",null,"方法名"),e("th",null,"作用")])],-1),B=e("td",null,"Decrement",-1),k=e("td",null,"Increment",-1),A=e("td",null,"Lock",-1),q=e("td",null,"Store",-1),x=i(`<h4 id="优化方法" tabindex="-1"><a class="header-anchor" href="#优化方法"><span>优化方法</span></a></h4><p><code>Get</code>, <code>GetBool</code>, <code>GetInt</code>, <code>GetInt64</code>, <code>GetString</code>, <code>Pull</code> 方法不再需要传递默认值（向下兼容）。</p><h3 id="route-支持-fallback-路由" tabindex="-1"><a class="header-anchor" href="#route-支持-fallback-路由"><span>Route 支持 Fallback 路由</span></a></h3><p>Version: v1.11.0</p><p>您可以定义一个在没有其他路由匹配传入请求时将执行的路由。</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Fallback</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span>ctx http<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> http<span class="token punctuation">.</span>Response <span class="token punctuation">{</span>
  <span class="token keyword">return</span> ctx<span class="token punctuation">.</span><span class="token function">Response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">String</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">,</span> <span class="token string">&quot;not found&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="orm-新增方法" tabindex="-1"><a class="header-anchor" href="#orm-新增方法"><span>Orm 新增方法</span></a></h3><p>Version: v1.11.0</p>`,8),F=e("thead",null,[e("tr",null,[e("th",null,"方法名"),e("th",null,"作用")])],-1),y=e("td",null,"db.Raw",-1),R=e("td",null,"LockForUpdate",-1),C=e("td",null,"SharedLock",-1),w=e("h3",{id:"优化-facades-config-add-方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#优化-facades-config-add-方法"},[e("span",null,"优化 facades.Config.Add() 方法")])],-1),S=e("p",null,"Version: v1.11.0",-1),D=e("p",null,[e("code",null,"facades.Config.Add()"),n(" 方法 "),e("code",null,"configuration"),n(" 参数由 "),e("code",null,"map[string]any"),n(" 修改为 "),e("code",null,"any"),n("，使设置更灵活。")],-1),z=i('<h3 id="修改-sqlite-驱动" tabindex="-1"><a class="header-anchor" href="#修改-sqlite-驱动"><span>修改 Sqlite 驱动</span></a></h3><p>因为 <code>github.com/mattn/go-sqlite3</code> 要求必须启动 <code>CGO</code>，因此替换了一个不强制要求 <code>CGO</code> 的第三方包：<code>github.com/glebarez/go-sqlite</code>。</p><h3 id="contracts-http-增加-net-http-的-method-映射" tabindex="-1"><a class="header-anchor" href="#contracts-http-增加-net-http-的-method-映射"><span>contracts/http 增加 net/http 的 Method 映射</span></a></h3><p>Version: v1.11.0</p><p>可以在 controller 中直接使用 <code>http.MethodGet</code> 等，而不需要再导入 <code>net/http</code>。</p>',5),V={href:"https://github.com/goravel/framework/blob/v1.11.0/contracts/http/method.go",target:"_blank",rel:"noopener noreferrer"},O=i(`<h3 id="route-新增资源路由" tabindex="-1"><a class="header-anchor" href="#route-新增资源路由"><span>Route 新增资源路由</span></a></h3><p>Version: v1.11.1</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code>facades<span class="token punctuation">.</span>Route<span class="token punctuation">.</span><span class="token function">Resource</span><span class="token punctuation">(</span><span class="token string">&quot;/resource&quot;</span><span class="token punctuation">,</span> resourceController<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),M=e("h3",{id:"request-新增方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#request-新增方法"},[e("span",null,"Request 新增方法")])],-1),I=e("p",null,"Version: v1.11.1",-1),G=e("thead",null,[e("tr",null,[e("th",null,"方法名"),e("th",null,"作用")])],-1),L=e("td",null,"All",-1),N=e("td",null,"Host",-1),U=e("td",null,"Queries",-1),H=e("p",null,[n("即将废弃 "),e("code",null,"Form"),n(", "),e("code",null,"Json"),n(" 方法，请替换为 "),e("code",null,"Input"),n("。")],-1),Q=e("h3",{id:"storage-新增方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#storage-新增方法"},[e("span",null,"Storage 新增方法")])],-1),P=e("p",null,"Version: v1.11.1",-1),T=e("thead",null,[e("tr",null,[e("th",null,"方法名"),e("th",null,"作用")])],-1),J=e("td",null,"LastModified",-1),j=e("td",null,"MimeType",-1),K=e("h3",{id:"file-新增方法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#file-新增方法"},[e("span",null,"File 新增方法")])],-1),W=e("p",null,"Version: v1.11.1",-1),X=e("thead",null,[e("tr",null,[e("th",null,"方法名"),e("th",null,"作用")])],-1),Y=e("td",null,"LastModified",-1),Z=e("td",null,"MimeType",-1),$=e("td",null,"Size",-1),ee=i(`<h3 id="修复文件储存-windows-路径错误的问题" tabindex="-1"><a class="header-anchor" href="#修复文件储存-windows-路径错误的问题"><span>修复文件储存 windows 路径错误的问题</span></a></h3><p>Version: v1.11.1</p><p>windows 系统中路径有斜线不对的问题。</p><h3 id="修复-request-模块-header-panic-问题" tabindex="-1"><a class="header-anchor" href="#修复-request-模块-header-panic-问题"><span>修复 Request 模块 Header panic 问题</span></a></h3><p>Version: v1.11.1</p><p><code>ctx.Request().Header( key: &quot;token&quot;)</code> 将会 panic。</p><h3 id="同时使用-request-input-与-request-bind-方法数据错误的问题" tabindex="-1"><a class="header-anchor" href="#同时使用-request-input-与-request-bind-方法数据错误的问题"><span>同时使用 Request.Input() 与 Request.Bind() 方法数据错误的问题</span></a></h3><p>Version: v1.11.2</p><p>由于使用 <code>Request.Input()</code> 方法会清空 <code>Request.Body</code>，之后再使用 <code>Request.Bind()</code>，将无法正确获取到数据。</p><h3 id="schedule-中-panic-导致进程中断的问题" tabindex="-1"><a class="header-anchor" href="#schedule-中-panic-导致进程中断的问题"><span>Schedule 中 panic 导致进程中断的问题</span></a></h3><p>Version: v1.11.3</p><p>当 Schedule 中出现 panic，会导致进程中断，影响所有定时任务。</p><h3 id="schedule-中-dailyat-每分钟都会执行的问题" tabindex="-1"><a class="header-anchor" href="#schedule-中-dailyat-每分钟都会执行的问题"><span>Schedule 中 DailyAt 每分钟都会执行的问题</span></a></h3><p>Version: v1.11.3</p><p>修复 <code>DailyAt</code> 每分钟都会执行的问题：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>kernel <span class="token operator">*</span>Kernel<span class="token punctuation">)</span> <span class="token function">Schedule</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>schedule<span class="token punctuation">.</span>Event <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>schedule<span class="token punctuation">.</span>Event<span class="token punctuation">{</span>
    facades<span class="token punctuation">.</span>Schedule<span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">DailyAt</span><span class="token punctuation">(</span><span class="token string">&quot;18:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function ne(te,ae){const l=o("router-link"),s=o("RouteLink"),d=o("ExternalLinkIcon"),u=o("CommentService");return r(),p("div",null,[E,e("nav",g,[e("ul",null,[e("li",null,[t(l,{to:"#v1-11-3"},{default:a(()=>[n("v1.11.3")]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"#bug-修复-🐛"},{default:a(()=>[n("Bug 修复 🐛")]),_:1})])])]),e("li",null,[t(l,{to:"#v1-11-2"},{default:a(()=>[n("v1.11.2")]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"#bug-修复-🐛-1"},{default:a(()=>[n("Bug 修复 🐛")]),_:1})])])]),e("li",null,[t(l,{to:"#v1-11-1"},{default:a(()=>[n("v1.11.1")]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"#功能增强-🚀"},{default:a(()=>[n("功能增强 🚀")]),_:1})]),e("li",null,[t(l,{to:"#bug-修复-🐛-2"},{default:a(()=>[n("Bug 修复 🐛")]),_:1})])])]),e("li",null,[t(l,{to:"#v1-11-0"},{default:a(()=>[n("v1.11.0")]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"#令人兴奋的新功能-🎉"},{default:a(()=>[n("令人兴奋的新功能 🎉")]),_:1})]),e("li",null,[t(l,{to:"#功能增强-🚀-1"},{default:a(()=>[n("功能增强 🚀")]),_:1})]),e("li",null,[t(l,{to:"#破坏性变化-🛠"},{default:a(()=>[n("破坏性变化 🛠")]),_:1})]),e("li",null,[t(l,{to:"#bug-修复-🐛-3"},{default:a(()=>[n("Bug 修复 🐛")]),_:1})])])]),e("li",null,[t(l,{to:"#升级指南"},{default:a(()=>[n("升级指南")]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"#_1-更新依赖"},{default:a(()=>[n("1. 更新依赖")]),_:1})]),e("li",null,[t(l,{to:"#_2-优化、移除废弃的方法"},{default:a(()=>[n("2. 优化、移除废弃的方法")]),_:1})])])]),e("li",null,[t(l,{to:"#新增内容"},{default:a(()=>[n("新增内容")]),_:1}),e("ul",null,[e("li",null,[t(l,{to:"#orm-新增模型事件"},{default:a(()=>[n("Orm 新增模型事件")]),_:1})]),e("li",null,[t(l,{to:"#cache-新增、优化方法"},{default:a(()=>[n("Cache 新增、优化方法")]),_:1})]),e("li",null,[t(l,{to:"#route-支持-fallback-路由"},{default:a(()=>[n("Route 支持 Fallback 路由")]),_:1})]),e("li",null,[t(l,{to:"#orm-新增方法"},{default:a(()=>[n("Orm 新增方法")]),_:1})]),e("li",null,[t(l,{to:"#优化-facades-config-add-方法"},{default:a(()=>[n("优化 facades.Config.Add() 方法")]),_:1})]),e("li",null,[t(l,{to:"#修改-sqlite-驱动"},{default:a(()=>[n("修改 Sqlite 驱动")]),_:1})]),e("li",null,[t(l,{to:"#contracts-http-增加-net-http-的-method-映射"},{default:a(()=>[n("contracts/http 增加 net/http 的 Method 映射")]),_:1})]),e("li",null,[t(l,{to:"#route-新增资源路由"},{default:a(()=>[n("Route 新增资源路由")]),_:1})]),e("li",null,[t(l,{to:"#request-新增方法"},{default:a(()=>[n("Request 新增方法")]),_:1})]),e("li",null,[t(l,{to:"#storage-新增方法"},{default:a(()=>[n("Storage 新增方法")]),_:1})]),e("li",null,[t(l,{to:"#file-新增方法"},{default:a(()=>[n("File 新增方法")]),_:1})]),e("li",null,[t(l,{to:"#修复文件储存-windows-路径错误的问题"},{default:a(()=>[n("修复文件储存 windows 路径错误的问题")]),_:1})]),e("li",null,[t(l,{to:"#修复-request-模块-header-panic-问题"},{default:a(()=>[n("修复 Request 模块 Header panic 问题")]),_:1})]),e("li",null,[t(l,{to:"#同时使用-request-input-与-request-bind-方法数据错误的问题"},{default:a(()=>[n("同时使用 Request.Input() 与 Request.Bind() 方法数据错误的问题")]),_:1})]),e("li",null,[t(l,{to:"#schedule-中-panic-导致进程中断的问题"},{default:a(()=>[n("Schedule 中 panic 导致进程中断的问题")]),_:1})]),e("li",null,[t(l,{to:"#schedule-中-dailyat-每分钟都会执行的问题"},{default:a(()=>[n("Schedule 中 DailyAt 每分钟都会执行的问题")]),_:1})])])])])]),v,e("p",null,[t(s,{to:"/zh/orm/getting-started.html#events"},{default:a(()=>[n("详见文档")]),_:1})]),f,m,_,e("table",null,[b,e("tbody",null,[e("tr",null,[B,e("td",null,[t(s,{to:"/zh/digging-deeper/cache.html#%E9%80%92%E5%A2%9E--%E9%80%92%E5%87%8F%E5%80%BC"},{default:a(()=>[n("递减值")]),_:1})])]),e("tr",null,[k,e("td",null,[t(s,{to:"/zh/digging-deeper/cache.html#%E9%80%92%E5%A2%9E--%E9%80%92%E5%87%8F%E5%80%BC"},{default:a(()=>[n("递增值")]),_:1})])]),e("tr",null,[A,e("td",null,[t(s,{to:"/zh/digging-deeper/cache.html#%E5%8E%9F%E5%AD%90%E9%94%81"},{default:a(()=>[n("原子锁")]),_:1})])]),e("tr",null,[q,e("td",null,[t(s,{to:"/zh/digging-deeper/cache.html#%E5%8F%AF%E7%94%A8%E7%9A%84%E7%BC%93%E5%AD%98%E9%A9%B1%E5%8A%A8"},{default:a(()=>[n("访问多个缓存存储")]),_:1})])])])]),x,e("table",null,[F,e("tbody",null,[e("tr",null,[y,e("td",null,[t(s,{to:"/zh/orm/getting-started.html#%E5%8E%9F%E7%94%9F%E8%A1%A8%E8%BE%BE%E5%BC%8F"},{default:a(()=>[n("原生表达式")]),_:1})])]),e("tr",null,[R,e("td",null,[t(s,{to:"/zh/orm/getting-started.html#%E6%82%B2%E8%A7%82%E9%94%81"},{default:a(()=>[n("悲观锁")]),_:1})])]),e("tr",null,[C,e("td",null,[t(s,{to:"/zh/orm/getting-started.html#%E6%82%B2%E8%A7%82%E9%94%81"},{default:a(()=>[n("悲观锁")]),_:1})])])])]),w,S,D,e("p",null,[t(s,{to:"/zh/getting-started/configuration.html#%E8%AE%BE%E7%BD%AE%E9%85%8D%E7%BD%AE%E5%80%BC"},{default:a(()=>[n("查看文档")]),_:1})]),z,e("p",null,[e("a",V,[n("详见文件"),t(d)])]),O,e("p",null,[t(s,{to:"/zh/the-basics/routing.html#%E8%B5%84%E6%BA%90%E8%B7%AF%E7%94%B1"},{default:a(()=>[n("For Detail")]),_:1})]),M,I,e("table",null,[G,e("tbody",null,[e("tr",null,[L,e("td",null,[t(s,{to:"/zh/the-basics/request.html#%E8%8E%B7%E5%8F%96%E6%89%80%E6%9C%89%E8%BE%93%E5%85%A5%E6%95%B0%E6%8D%AE"},{default:a(()=>[n("获取所有输入数据")]),_:1})])]),e("tr",null,[N,e("td",null,[t(s,{to:"/zh/the-basics/request.html#%E8%8E%B7%E5%8F%96%E8%AF%B7%E6%B1%82-host"},{default:a(()=>[n("获取请求 Host")]),_:1})])]),e("tr",null,[U,e("td",null,[t(s,{to:"/zh/the-basics/request.html#%E8%8E%B7%E5%8F%96%E8%B7%AF%E7%94%B1%E4%BC%A0%E5%85%A5%E7%9A%84%E5%8F%82%E6%95%B0"},{default:a(()=>[n("获取所有查询字符串")]),_:1})])])])]),H,Q,P,e("table",null,[T,e("tbody",null,[e("tr",null,[J,e("td",null,[t(s,{to:"/zh/digging-deeper/filesystem.html#%E6%96%87%E4%BB%B6-Metadata-%E4%BF%A1%E6%81%AF"},{default:a(()=>[n("获取文件最后修改时间")]),_:1})])]),e("tr",null,[j,e("td",null,[t(s,{to:"/zh/digging-deeper/filesystem.html#%E6%96%87%E4%BB%B6-Metadata-%E4%BF%A1%E6%81%AF"},{default:a(()=>[n("获取文件类型")]),_:1})])])])]),K,W,e("table",null,[X,e("tbody",null,[e("tr",null,[Y,e("td",null,[t(s,{to:"/zh/digging-deeper/filesystem.html#%E6%96%87%E4%BB%B6-Metadata-%E4%BF%A1%E6%81%AF"},{default:a(()=>[n("获取文件最后修改时间")]),_:1})])]),e("tr",null,[Z,e("td",null,[t(s,{to:"/zh/digging-deeper/filesystem.html#%E6%96%87%E4%BB%B6-Metadata-%E4%BF%A1%E6%81%AF"},{default:a(()=>[n("获取文件类型")]),_:1})])]),e("tr",null,[$,e("td",null,[t(s,{to:"/zh/digging-deeper/filesystem.html#%E6%96%87%E4%BB%B6-Metadata-%E4%BF%A1%E6%81%AF"},{default:a(()=>[n("获取文件大小")]),_:1})])])])]),ee,t(u)])}const se=c(h,[["render",ne],["__file","v1.11.html.vue"]]),ie=JSON.parse('{"path":"/zh/upgrade/v1.11.html","title":"从 v1.10 升级到 v1.11","lang":"zh-CN","frontmatter":{"description":"从 v1.10 升级到 v1.11 v1.11.3 Bug 修复 🐛 Schedule 中 panic 导致进程中断的问题 Schedule 中 DailyAt 每分钟都会执行的问题 v1.11.2 Bug 修复 🐛 同时使用 Request.Input() 与 Request.Bind() 数据错误的问题 v1.11.1 功能增强 🚀 Rout...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/upgrade/v1.11.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/upgrade/v1.11.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/upgrade/v1.11.html"}],["meta",{"property":"og:description","content":"从 v1.10 升级到 v1.11 v1.11.3 Bug 修复 🐛 Schedule 中 panic 导致进程中断的问题 Schedule 中 DailyAt 每分钟都会执行的问题 v1.11.2 Bug 修复 🐛 同时使用 Request.Input() 与 Request.Bind() 数据错误的问题 v1.11.1 功能增强 🚀 Rout..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从 v1.10 升级到 v1.11\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"v1.11.3","slug":"v1-11-3","link":"#v1-11-3","children":[{"level":3,"title":"Bug 修复 🐛","slug":"bug-修复-🐛","link":"#bug-修复-🐛","children":[]}]},{"level":2,"title":"v1.11.2","slug":"v1-11-2","link":"#v1-11-2","children":[{"level":3,"title":"Bug 修复 🐛","slug":"bug-修复-🐛-1","link":"#bug-修复-🐛-1","children":[]}]},{"level":2,"title":"v1.11.1","slug":"v1-11-1","link":"#v1-11-1","children":[{"level":3,"title":"功能增强 🚀","slug":"功能增强-🚀","link":"#功能增强-🚀","children":[]},{"level":3,"title":"Bug 修复 🐛","slug":"bug-修复-🐛-2","link":"#bug-修复-🐛-2","children":[]}]},{"level":2,"title":"v1.11.0","slug":"v1-11-0","link":"#v1-11-0","children":[{"level":3,"title":"令人兴奋的新功能 🎉","slug":"令人兴奋的新功能-🎉","link":"#令人兴奋的新功能-🎉","children":[]},{"level":3,"title":"功能增强 🚀","slug":"功能增强-🚀-1","link":"#功能增强-🚀-1","children":[]},{"level":3,"title":"破坏性变化 🛠","slug":"破坏性变化-🛠","link":"#破坏性变化-🛠","children":[]},{"level":3,"title":"Bug 修复 🐛","slug":"bug-修复-🐛-3","link":"#bug-修复-🐛-3","children":[]}]},{"level":2,"title":"升级指南","slug":"升级指南","link":"#升级指南","children":[{"level":3,"title":"1. 更新依赖","slug":"_1-更新依赖","link":"#_1-更新依赖","children":[]},{"level":3,"title":"2. 优化、移除废弃的方法","slug":"_2-优化、移除废弃的方法","link":"#_2-优化、移除废弃的方法","children":[]}]},{"level":2,"title":"新增内容","slug":"新增内容","link":"#新增内容","children":[{"level":3,"title":"Orm 新增模型事件","slug":"orm-新增模型事件","link":"#orm-新增模型事件","children":[]},{"level":3,"title":"Cache 新增、优化方法","slug":"cache-新增、优化方法","link":"#cache-新增、优化方法","children":[]},{"level":3,"title":"Route 支持 Fallback 路由","slug":"route-支持-fallback-路由","link":"#route-支持-fallback-路由","children":[]},{"level":3,"title":"Orm 新增方法","slug":"orm-新增方法","link":"#orm-新增方法","children":[]},{"level":3,"title":"优化 facades.Config.Add() 方法","slug":"优化-facades-config-add-方法","link":"#优化-facades-config-add-方法","children":[]},{"level":3,"title":"修改 Sqlite 驱动","slug":"修改-sqlite-驱动","link":"#修改-sqlite-驱动","children":[]},{"level":3,"title":"contracts/http 增加 net/http 的 Method 映射","slug":"contracts-http-增加-net-http-的-method-映射","link":"#contracts-http-增加-net-http-的-method-映射","children":[]},{"level":3,"title":"Route 新增资源路由","slug":"route-新增资源路由","link":"#route-新增资源路由","children":[]},{"level":3,"title":"Request 新增方法","slug":"request-新增方法","link":"#request-新增方法","children":[]},{"level":3,"title":"Storage 新增方法","slug":"storage-新增方法","link":"#storage-新增方法","children":[]},{"level":3,"title":"File 新增方法","slug":"file-新增方法","link":"#file-新增方法","children":[]},{"level":3,"title":"修复文件储存 windows 路径错误的问题","slug":"修复文件储存-windows-路径错误的问题","link":"#修复文件储存-windows-路径错误的问题","children":[]},{"level":3,"title":"修复 Request 模块 Header panic 问题","slug":"修复-request-模块-header-panic-问题","link":"#修复-request-模块-header-panic-问题","children":[]},{"level":3,"title":"同时使用 Request.Input() 与 Request.Bind() 方法数据错误的问题","slug":"同时使用-request-input-与-request-bind-方法数据错误的问题","link":"#同时使用-request-input-与-request-bind-方法数据错误的问题","children":[]},{"level":3,"title":"Schedule 中 panic 导致进程中断的问题","slug":"schedule-中-panic-导致进程中断的问题","link":"#schedule-中-panic-导致进程中断的问题","children":[]},{"level":3,"title":"Schedule 中 DailyAt 每分钟都会执行的问题","slug":"schedule-中-dailyat-每分钟都会执行的问题","link":"#schedule-中-dailyat-每分钟都会执行的问题","children":[]}]}],"git":{},"filePathRelative":"zh/upgrade/v1.11.md","autoDesc":true}');export{se as comp,ie as data};