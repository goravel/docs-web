import{_ as d,r as i,o as c,c as p,a,d as n,b as e,w as o,e as l}from"./app-CL4YvOJX.js";const r={},u=l(`<h1 id="从-v1-11-升级到-v1-12" tabindex="-1"><a class="header-anchor" href="#从-v1-11-升级到-v1-12"><span>从 v1.11 升级到 v1.12</span></a></h1><h2 id="v1-12-6" tabindex="-1"><a class="header-anchor" href="#v1-12-6"><span>v1.12.6</span></a></h2><h3 id="bug-修复-🐛" tabindex="-1"><a class="header-anchor" href="#bug-修复-🐛"><span>Bug 修复 🐛</span></a></h3><ul><li><a href="#%E4%BF%AE%E5%A4%8D-jwt-%E7%9A%84%E9%97%AE%E9%A2%98">修复 JWT 的问题</a></li></ul><h2 id="v1-12-5" tabindex="-1"><a class="header-anchor" href="#v1-12-5"><span>v1.12.5</span></a></h2><h3 id="bug-修复-🐛-1" tabindex="-1"><a class="header-anchor" href="#bug-修复-🐛-1"><span>Bug 修复 🐛</span></a></h3><ul><li><a href="#%E4%BF%AE%E5%A4%8D-facades-orm-query-load-%E7%9A%84%E9%97%AE%E9%A2%98">修复 facades.Orm().Query().Load() 的问题</a></li></ul><h2 id="v1-12-4" tabindex="-1"><a class="header-anchor" href="#v1-12-4"><span>v1.12.4</span></a></h2><h3 id="bug-修复-🐛-2" tabindex="-1"><a class="header-anchor" href="#bug-修复-🐛-2"><span>Bug 修复 🐛</span></a></h3><ul><li><a href="#throttle-%E4%B8%AD%E9%97%B4%E4%BB%B6-panic-%E7%9A%84%E9%97%AE%E9%A2%98">throttle 中间件 panic 的问题</a></li></ul><h2 id="v1-12-3" tabindex="-1"><a class="header-anchor" href="#v1-12-3"><span>v1.12.3</span></a></h2><h3 id="bug-修复-🐛-3" tabindex="-1"><a class="header-anchor" href="#bug-修复-🐛-3"><span>Bug 修复 🐛</span></a></h3><ul><li><a href="#windows-%E4%B8%8B-make-package-%E5%91%BD%E4%BB%A4%E7%9A%84%E9%97%AE%E9%A2%98">Windows 下 make:package 命令的问题</a></li></ul><h2 id="v1-12-2" tabindex="-1"><a class="header-anchor" href="#v1-12-2"><span>v1.12.2</span></a></h2><h3 id="bug-修复-🐛-4" tabindex="-1"><a class="header-anchor" href="#bug-修复-🐛-4"><span>Bug 修复 🐛</span></a></h3><ul><li><a href="#facades-gate-%E8%BF%94%E5%9B%9E-nil-%E7%9A%84%E9%97%AE%E9%A2%98">facades.Gate() 返回 nil 的问题</a></li></ul><h2 id="v1-12-1" tabindex="-1"><a class="header-anchor" href="#v1-12-1"><span>v1.12.1</span></a></h2><h3 id="bug-修复-🐛-5" tabindex="-1"><a class="header-anchor" href="#bug-修复-🐛-5"><span>Bug 修复 🐛</span></a></h3><ul><li><a href="#windows-%E4%B8%8B%E5%9B%A0%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84%E5%BC%95%E5%8F%91-panic-%E7%9A%84%E9%97%AE%E9%A2%98">Windows 下因文件路径引发 panic 的问题</a></li></ul><h2 id="v1-12-0" tabindex="-1"><a class="header-anchor" href="#v1-12-0"><span>v1.12.0</span></a></h2><h3 id="令人兴奋的新功能-🎉" tabindex="-1"><a class="header-anchor" href="#令人兴奋的新功能-🎉"><span>令人兴奋的新功能 🎉</span></a></h3><ul><li><a href="#%E6%9C%8D%E5%8A%A1%E5%AE%B9%E5%99%A8">服务容器</a></li><li><a href="#%E6%89%A9%E5%B1%95%E5%8C%85%E5%BC%80%E5%8F%91">扩展包开发</a></li><li><a href="#%E6%96%B0%E5%A2%9E-helpers-%E6%96%B9%E6%B3%95">新增 Carbon 模块</a></li></ul><h3 id="功能增强-🚀" tabindex="-1"><a class="header-anchor" href="#功能增强-🚀"><span>功能增强 🚀</span></a></h3><ul><li><a href="#artisan-flag-%E6%96%B0%E5%A2%9E%E6%96%B9%E6%B3%95">Artisan Flag 新增方法</a></li><li><a href="#%E6%96%B0%E5%A2%9E-helpers-%E6%96%B9%E6%B3%95">新增 Helpers 方法</a></li><li><a href="#%E5%8D%87%E7%BA%A7%E4%BE%9D%E8%B5%96">升级依赖</a></li><li><a href="#migration-%E6%96%B0%E5%A2%9E%E5%91%BD%E4%BB%A4">Migration 新增命令</a></li><li><a href="#%E9%83%A8%E5%88%86-make-%E5%91%BD%E4%BB%A4%E6%94%AF%E6%8C%81%E5%AD%90%E6%96%87%E4%BB%B6%E5%A4%B9">部分 <code>make</code> 命令支持子文件夹</a></li></ul><h3 id="破坏性变化-🛠" tabindex="-1"><a class="header-anchor" href="#破坏性变化-🛠"><span>破坏性变化 🛠</span></a></h3><ul><li><a href="#_3-%E4%BF%AE%E6%94%B9-facades">修改 facades 调用方式</a></li><li><a href="#_6-%E4%BF%AE%E6%94%B9-artisan-%E5%91%BD%E4%BB%A4%E4%B8%AD%E7%9A%84-flag-%E5%A6%82%E6%9E%9C%E7%94%A8%E5%88%B0">优化 Artisan Flag 参数格式</a></li><li><a href="#_7-filesystem-%E6%A8%A1%E5%9D%97%E5%8F%96%E6%B6%88%E5%AF%B9-s3-oss-cos-minio-%E9%A9%B1%E5%8A%A8%E7%9A%84%E9%BB%98%E8%AE%A4%E6%94%AF%E6%8C%81">Filesystem 模块取消对 S3, OSS, COS, Minio 驱动的默认支持</a></li><li><a href="#_8-cache-%E6%A8%A1%E5%9D%97%E5%8F%96%E6%B6%88%E5%AF%B9-redis-%E9%A9%B1%E5%8A%A8%E7%9A%84%E9%BB%98%E8%AE%A4%E6%94%AF%E6%8C%81">Cache 模块取消对 Redis 驱动的默认支持</a></li><li><a href="#_9-%E4%BF%AE%E6%94%B9-model-%E4%B8%AD-createdat-updatedat-%E7%9A%84%E7%B1%BB%E5%9E%8B">修改 Model 中 CreatedAt, UpdatedAt 的类型</a></li><li><a href="#_10-%E4%BC%98%E5%8C%96-validation-%E6%A8%A1%E5%9D%97%E7%9A%84%E6%A0%A1%E9%AA%8C%E8%A7%84%E5%88%99">优化 Validation 模块的校验规则</a></li></ul><h2 id="升级指南" tabindex="-1"><a class="header-anchor" href="#升级指南"><span>升级指南</span></a></h2><p>请根据本节内容，一步步进行框架升级。</p><p><strong>预计升级时间：30 分钟</strong></p><h3 id="_1-更新依赖" tabindex="-1"><a class="header-anchor" href="#_1-更新依赖"><span>1. 更新依赖</span></a></h3><p><code>go.mod</code> 中更新依赖：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>go get -u github.com/goravel/framework@v1.12.0 &amp;&amp; go mod tidy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>go mod tidy</code> 将会抛出一个错误，执行完下面升级步骤即可解决。</p><h3 id="_2-修改-bootstrap-app-go" tabindex="-1"><a class="header-anchor" href="#_2-修改-bootstrap-app-go"><span>2. 修改 <code>bootstrap/app.go</code></span></a></h3><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 修改前</span>
app <span class="token operator">:=</span> foundation<span class="token punctuation">.</span>Application<span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 修改后</span>
app <span class="token operator">:=</span> foundation<span class="token punctuation">.</span><span class="token function">NewApplication</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-修改-facades" tabindex="-1"><a class="header-anchor" href="#_3-修改-facades"><span>3. 修改 facades.*</span></a></h3><table><thead><tr><th>修改前</th><th>修改后</th></tr></thead><tbody><tr><td><code>facades.Artisan</code></td><td><code>facades.Artisan()</code></td></tr><tr><td><code>facades.Auth</code></td><td><code>facades.Auth()</code></td></tr><tr><td><code>facades.Cache</code></td><td><code>facades.Cache()</code></td></tr><tr><td><code>facades.Config</code></td><td><code>facades.Config()</code></td></tr><tr><td><code>facades.Crypt</code></td><td><code>facades.Crypt()</code></td></tr><tr><td><code>facades.Event</code></td><td><code>facades.Event()</code></td></tr><tr><td><code>facades.Gate</code></td><td><code>facades.Gate()</code></td></tr><tr><td><code>facades.Grpc</code></td><td><code>facades.Grpc()</code></td></tr><tr><td><code>facades.Hash</code></td><td><code>facades.Hash()</code></td></tr><tr><td><code>facades.Log</code></td><td><code>facades.Log()</code></td></tr><tr><td><code>facades.Mail</code></td><td><code>facades.Mail()</code></td></tr><tr><td><code>facades.Orm</code></td><td><code>facades.Orm()</code></td></tr><tr><td><code>facades.Queue</code></td><td><code>facades.Queue()</code></td></tr><tr><td><code>facades.RateLimiter</code></td><td><code>facades.RateLimiter()</code></td></tr><tr><td><code>facades.Route</code></td><td><code>facades.Route()</code></td></tr><tr><td><code>facades.Schedule</code></td><td><code>facades.Schedule()</code></td></tr><tr><td><code>facades.Storage</code></td><td><code>facades.Storage()</code></td></tr><tr><td><code>facades.Validation</code></td><td><code>facades.Validation()</code></td></tr></tbody></table><h3 id="_4-修改-app-providers" tabindex="-1"><a class="header-anchor" href="#_4-修改-app-providers"><span>4. 修改 <code>app/providers/*</code></span></a></h3><p>所有文件增加导入：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;github.com/goravel/framework/contracts/foundation&quot;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有 <code>Register</code>, <code>Boot</code> 方法增加 <code>app foundation.Application</code> 入参：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>AppServiceProvider<span class="token punctuation">)</span> <span class="token function">Register</span><span class="token punctuation">(</span>app foundation<span class="token punctuation">.</span>Application<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>AppServiceProvider<span class="token punctuation">)</span> <span class="token function">Boot</span><span class="token punctuation">(</span>app foundation<span class="token punctuation">.</span>Application<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-修改-app-config-app-go" tabindex="-1"><a class="header-anchor" href="#_5-修改-app-config-app-go"><span>5. 修改 <code>app/config/app.go</code></span></a></h3><p>修改导入：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 修改前</span>
<span class="token string">&quot;github.com/goravel/framework/contracts&quot;</span>

<span class="token string">&quot;providers&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>contracts<span class="token punctuation">.</span>ServiceProvider<span class="token punctuation">{</span>

<span class="token comment">// 修改后</span>
<span class="token string">&quot;github.com/goravel/framework/contracts/foundation&quot;</span>

<span class="token string">&quot;providers&quot;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>foundation<span class="token punctuation">.</span>ServiceProvider<span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-修改-artisan-命令中的-flag-如果用到" tabindex="-1"><a class="header-anchor" href="#_6-修改-artisan-命令中的-flag-如果用到"><span>6. 修改 Artisan 命令中的 Flag（如果用到）</span></a></h3><p>为 <code>[]command.Flag</code> 中的项增加 <code>&amp;command.StringFlag</code> 类型：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 修改前</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>VendorPublishCommand<span class="token punctuation">)</span> <span class="token function">Extend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> command<span class="token punctuation">.</span>Extend <span class="token punctuation">{</span>
  <span class="token keyword">return</span> command<span class="token punctuation">.</span>Extend<span class="token punctuation">{</span>
    Category<span class="token punctuation">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
    Flags<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>command<span class="token punctuation">.</span>Flag<span class="token punctuation">{</span>
      <span class="token punctuation">{</span>
        Name<span class="token punctuation">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 修改后</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>VendorPublishCommand<span class="token punctuation">)</span> <span class="token function">Extend</span><span class="token punctuation">(</span><span class="token punctuation">)</span> command<span class="token punctuation">.</span>Extend <span class="token punctuation">{</span>
  <span class="token keyword">return</span> command<span class="token punctuation">.</span>Extend<span class="token punctuation">{</span>
    Category<span class="token punctuation">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
    Flags<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>command<span class="token punctuation">.</span>Flag<span class="token punctuation">{</span>
      <span class="token operator">&amp;</span>command<span class="token punctuation">.</span>StringFlag<span class="token punctuation">{</span>
        Name<span class="token punctuation">:</span> <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-filesystem-模块取消对-s3-oss-cos-minio-驱动的默认支持" tabindex="-1"><a class="header-anchor" href="#_7-filesystem-模块取消对-s3-oss-cos-minio-驱动的默认支持"><span>7. Filesystem 模块取消对 S3, OSS, COS, Minio 驱动的默认支持</span></a></h3><p>为减少加载不必要的第三方包，减小打包体积，提高编译效率，Goravel 将逐步剥离各模块驱动到独立扩展包。本次升级 Filesystem 模块取消对 <code>S3</code>, <code>OSS</code>, <code>COS</code>, <code>Minio</code> 驱动的默认支持，转由独立扩展包提供支持。</p><p>删除 <code>config/filesystems.go::disks</code> 中除 <code>local</code> 和正在使用的驱动以外的键：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 修改后</span>
<span class="token string">&quot;disks&quot;</span><span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>any<span class="token punctuation">{</span>
  <span class="token string">&quot;local&quot;</span><span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>any<span class="token punctuation">{</span>
    <span class="token string">&quot;driver&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;local&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;root&quot;</span><span class="token punctuation">:</span>   <span class="token string">&quot;storage/app&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;url&quot;</span><span class="token punctuation">:</span>    config<span class="token punctuation">.</span><span class="token function">Env</span><span class="token punctuation">(</span><span class="token string">&quot;APP_URL&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;/storage&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您用到了 <code>local</code> 以外的驱动，请参考对应驱动文档进行安装：</p>`,53),h=a("thead",null,[a("tr",null,[a("th",null,"驱动"),a("th",null,"地址")])],-1),v=a("td",null,"S3",-1),g={href:"https://github.com/goravel/s3",target:"_blank",rel:"noopener noreferrer"},k=a("td",null,"OSS",-1),m={href:"https://github.com/goravel/oss",target:"_blank",rel:"noopener noreferrer"},f=a("td",null,"COS",-1),b={href:"https://github.com/goravel/cos",target:"_blank",rel:"noopener noreferrer"},E=a("td",null,"Minio",-1),_={href:"https://github.com/goravel/minio",target:"_blank",rel:"noopener noreferrer"},A=l(`<h3 id="_8-cache-模块取消对-redis-驱动的默认支持" tabindex="-1"><a class="header-anchor" href="#_8-cache-模块取消对-redis-驱动的默认支持"><span>8. Cache 模块取消对 Redis 驱动的默认支持</span></a></h3><p>如果您没有使用 <code>redis</code> 驱动，删除 <code>config/cache.go::stores</code> 中的 <code>redis</code> 键：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// 修改后</span>
<span class="token string">&quot;stores&quot;</span><span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>any<span class="token punctuation">{</span>
  <span class="token string">&quot;memory&quot;</span><span class="token punctuation">:</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>any<span class="token punctuation">{</span>
    <span class="token string">&quot;driver&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;memory&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您用到了 <code>redis</code> 驱动，请参考文档进行安装：</p>`,4),B=a("thead",null,[a("tr",null,[a("th",null,"驱动"),a("th",null,"地址")])],-1),x=a("td",null,"Redis",-1),y={href:"https://github.com/goravel/redis",target:"_blank",rel:"noopener noreferrer"},w=l('<h3 id="_9-修改-model-中-createdat-updatedat-的类型" tabindex="-1"><a class="header-anchor" href="#_9-修改-model-中-createdat-updatedat-的类型"><span>9. 修改 Model 中 CreatedAt, UpdatedAt 的类型</span></a></h3><p>为了使时间类型在接口输出时更加标准，<code>CreatedAt</code>, <code>UpdatedAt</code> 类型由 <code>time.Time</code> 修改为 <code>carbon.DateTime</code>。如果您对这两个字段进行了额外处理，可以通过 <code>CreatedAt.ToStdTime()</code> 方法获取原有的 <code>time.Time</code> 类型。</p><h3 id="_10-优化-validation-模块的校验规则" tabindex="-1"><a class="header-anchor" href="#_10-优化-validation-模块的校验规则"><span>10. 优化 Validation 模块的校验规则</span></a></h3><p>原有校验规则中对零值进行校验，例如设置规则为 <code>date</code> 且没有设置 <code>required</code>，如果该字段为空或未传入，会提示该字段必填。优化后，将跳过校验，更符合使用直觉。如果您用到了相关校验，请确保升级后与预期一致。</p><h3 id="_11-再次安装依赖" tabindex="-1"><a class="header-anchor" href="#_11-再次安装依赖"><span>11. 再次安装依赖</span></a></h3><p>运行 <code>go mod tidy</code> 命令。</p><h2 id="功能介绍" tabindex="-1"><a class="header-anchor" href="#功能介绍"><span>功能介绍</span></a></h2><h3 id="服务容器" tabindex="-1"><a class="header-anchor" href="#服务容器"><span>服务容器</span></a></h3><p>Version: v1.12.0</p>',9),q=a("h3",{id:"扩展包开发",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#扩展包开发"},[a("span",null,"扩展包开发")])],-1),C=a("p",null,"Version: v1.12.0",-1),F=a("h3",{id:"artisan-flag-新增方法",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#artisan-flag-新增方法"},[a("span",null,"Artisan Flag 新增方法")])],-1),S=a("p",null,"Version: v1.12.0",-1),U=a("code",null,"Flag",-1),V=a("h3",{id:"新增-helpers-方法",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#新增-helpers-方法"},[a("span",null,"新增 Helpers 方法")])],-1),G=a("p",null,"Version: v1.12.0",-1),O=a("code",null,"path",-1),D=a("code",null,"carbon",-1),L=l('<h3 id="升级依赖" tabindex="-1"><a class="header-anchor" href="#升级依赖"><span>升级依赖</span></a></h3><p>Version: v1.12.0</p><p>为提供更好的功能支持，升级了 Goravel 依赖的所有包的版本。</p><h3 id="migration-新增命令" tabindex="-1"><a class="header-anchor" href="#migration-新增命令"><span>Migration 新增命令</span></a></h3><p>Version: v1.12.0</p><table><thead><tr><th>命令</th><th>作用</th></tr></thead><tbody><tr><td>migrate:fresh</td><td>删除所有表并重新运行所有迁移</td></tr><tr><td>migrate:refresh</td><td>回滚所有迁移并重新运行所有迁移</td></tr><tr><td>migrate:reset</td><td>回滚所有迁移</td></tr><tr><td>migrate:status</td><td>查询迁移状态</td></tr></tbody></table><h3 id="部分-make-命令支持子文件夹" tabindex="-1"><a class="header-anchor" href="#部分-make-命令支持子文件夹"><span>部分 <code>make</code> 命令支持子文件夹</span></a></h3><p>Version: v1.12.0</p><table><thead><tr><th>命令</th><th>生成文件</th></tr></thead><tbody><tr><td>make:policy User/AuthPolicy</td><td>app/policies/User/auth_policy.go</td></tr><tr><td>make:command Goravel/CleanCache</td><td>app/console/commands/Goravel/clean_cache.go</td></tr><tr><td>make:model User/Phone</td><td>app/models/User/phone.go</td></tr><tr><td>make:observer User/PhoneObserver</td><td>app/observers/User/phone_observer.go</td></tr><tr><td>make:event User/GoravelEvent</td><td>app/events/User/goravel_event.go</td></tr><tr><td>make:listener User/GoravelListen</td><td>app/listeners/User/goravel_listen.go</td></tr><tr><td>make:controller User/AuthController</td><td>app/http/controllers/User/auth_controller.go</td></tr><tr><td>make:middleware User/Auth</td><td>app/http/middleware/User/auth.go</td></tr><tr><td>make:request User/Auth</td><td>app/http/requests/User/auth.go</td></tr><tr><td>make:job Goravel/Job</td><td>app/jobs/Goravel/job.go</td></tr><tr><td>make:rule User/Phone</td><td>app/rules/User/phone.go</td></tr></tbody></table><h3 id="windows-下因文件路径引发-panic-的问题" tabindex="-1"><a class="header-anchor" href="#windows-下因文件路径引发-panic-的问题"><span>Windows 下因文件路径引发 panic 的问题</span></a></h3><p>Version: v1.12.1</p><p>修复 windows 下，<code>make</code> 命令自动创建文件夹时，由于反斜杠引发 panic 的问题。</p><h3 id="facades-gate-返回-nil-的问题" tabindex="-1"><a class="header-anchor" href="#facades-gate-返回-nil-的问题"><span>facades.Gate() 返回 nil 的问题</span></a></h3><p>Version: v1.12.2</p><p>修复 facades.Gate() 返回 nil 的问题。</p><h3 id="windows-下-make-package-命令的问题" tabindex="-1"><a class="header-anchor" href="#windows-下-make-package-命令的问题"><span>Windows 下 make:package 命令的问题</span></a></h3><p>Version: v1.12.3</p><p>修复 Windows 下 make:package 命令创建的文件中的路径错误的问题。</p><h3 id="throttle-中间件-panic-的问题" tabindex="-1"><a class="header-anchor" href="#throttle-中间件-panic-的问题"><span>throttle 中间件 panic 的问题</span></a></h3><p>Version: v1.12.4</p><p>修复 throttle 中间件 panic 的问题。</p><h3 id="修复-facades-orm-query-load-的问题" tabindex="-1"><a class="header-anchor" href="#修复-facades-orm-query-load-的问题"><span>修复 facades.Orm().Query().Load() 的问题</span></a></h3><p>Version: v1.12.5</p><p>修复 <code>facades.Orm().Query().Load()</code> 某种情况下无法正确加载模型的问题。</p><h3 id="修复-jwt-的问题" tabindex="-1"><a class="header-anchor" href="#修复-jwt-的问题"><span>修复 JWT 的问题</span></a></h3><p>Version: v1.12.6</p><p>修复 JWT Token 过期且无效时，返回过期错误的问题，预期优先返回无效错误。</p>',27);function W(M,R){const s=i("ExternalLinkIcon"),t=i("RouteLink");return c(),p("div",null,[u,a("table",null,[h,a("tbody",null,[a("tr",null,[v,a("td",null,[a("a",g,[n("https://github.com/goravel/s3"),e(s)])])]),a("tr",null,[k,a("td",null,[a("a",m,[n("https://github.com/goravel/oss"),e(s)])])]),a("tr",null,[f,a("td",null,[a("a",b,[n("https://github.com/goravel/cos"),e(s)])])]),a("tr",null,[E,a("td",null,[a("a",_,[n("https://github.com/goravel/minio"),e(s)])])])])]),A,a("table",null,[B,a("tbody",null,[a("tr",null,[x,a("td",null,[a("a",y,[n("https://github.com/goravel/redis"),e(s)])])])])]),w,a("p",null,[n("Goravel 中所有服务都注册到服务容器当中，为第三方包的开发提供有力的支持，"),e(t,{to:"/zh/architecutre-concepts/service-container.html"},{default:o(()=>[n("详见文档")]),_:1}),n("。")]),q,C,a("p",null,[n("包是向 Goravel 添加功能的主要方式，可以使 Goravel 的生态更加丰富，"),e(t,{to:"/zh/digging-deeper/package-development.html"},{default:o(()=>[n("详见文档")]),_:1}),n("。")]),F,S,a("p",null,[n("为 Artisan 模块新增获取不同类型 "),U,n(" 的方法，"),e(t,{to:"/zh/digging-deeper/artisan-console.html#%E9%80%89%E9%A1%B9"},{default:o(()=>[n("详见文档")]),_:1}),n("。")]),V,G,a("p",null,[n("新增 "),O,n(", "),D,n(" Helpers 方法，可以很方便的获取项目中的路径信息与进行时间处理，"),e(t,{to:"/zh/digging-deeper/helpers.html"},{default:o(()=>[n("详见文档")]),_:1}),n("。")]),L])}const T=d(r,[["render",W],["__file","v1.12.html.vue"]]),N=JSON.parse('{"path":"/zh/upgrade/v1.12.html","title":"从 v1.11 升级到 v1.12","lang":"zh-CN","frontmatter":{"description":"从 v1.11 升级到 v1.12 v1.12.6 Bug 修复 🐛 修复 JWT 的问题 v1.12.5 Bug 修复 🐛 修复 facades.Orm().Query().Load() 的问题 v1.12.4 Bug 修复 🐛 throttle 中间件 panic 的问题 v1.12.3 Bug 修复 🐛 Windows 下 make:pa...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/upgrade/v1.12.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/upgrade/v1.12.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/upgrade/v1.12.html"}],["meta",{"property":"og:description","content":"从 v1.11 升级到 v1.12 v1.12.6 Bug 修复 🐛 修复 JWT 的问题 v1.12.5 Bug 修复 🐛 修复 facades.Orm().Query().Load() 的问题 v1.12.4 Bug 修复 🐛 throttle 中间件 panic 的问题 v1.12.3 Bug 修复 🐛 Windows 下 make:pa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"从 v1.11 升级到 v1.12\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"v1.12.6","slug":"v1-12-6","link":"#v1-12-6","children":[{"level":3,"title":"Bug 修复 🐛","slug":"bug-修复-🐛","link":"#bug-修复-🐛","children":[]}]},{"level":2,"title":"v1.12.5","slug":"v1-12-5","link":"#v1-12-5","children":[{"level":3,"title":"Bug 修复 🐛","slug":"bug-修复-🐛-1","link":"#bug-修复-🐛-1","children":[]}]},{"level":2,"title":"v1.12.4","slug":"v1-12-4","link":"#v1-12-4","children":[{"level":3,"title":"Bug 修复 🐛","slug":"bug-修复-🐛-2","link":"#bug-修复-🐛-2","children":[]}]},{"level":2,"title":"v1.12.3","slug":"v1-12-3","link":"#v1-12-3","children":[{"level":3,"title":"Bug 修复 🐛","slug":"bug-修复-🐛-3","link":"#bug-修复-🐛-3","children":[]}]},{"level":2,"title":"v1.12.2","slug":"v1-12-2","link":"#v1-12-2","children":[{"level":3,"title":"Bug 修复 🐛","slug":"bug-修复-🐛-4","link":"#bug-修复-🐛-4","children":[]}]},{"level":2,"title":"v1.12.1","slug":"v1-12-1","link":"#v1-12-1","children":[{"level":3,"title":"Bug 修复 🐛","slug":"bug-修复-🐛-5","link":"#bug-修复-🐛-5","children":[]}]},{"level":2,"title":"v1.12.0","slug":"v1-12-0","link":"#v1-12-0","children":[{"level":3,"title":"令人兴奋的新功能 🎉","slug":"令人兴奋的新功能-🎉","link":"#令人兴奋的新功能-🎉","children":[]},{"level":3,"title":"功能增强 🚀","slug":"功能增强-🚀","link":"#功能增强-🚀","children":[]},{"level":3,"title":"破坏性变化 🛠","slug":"破坏性变化-🛠","link":"#破坏性变化-🛠","children":[]}]},{"level":2,"title":"升级指南","slug":"升级指南","link":"#升级指南","children":[{"level":3,"title":"1. 更新依赖","slug":"_1-更新依赖","link":"#_1-更新依赖","children":[]},{"level":3,"title":"2. 修改 bootstrap/app.go","slug":"_2-修改-bootstrap-app-go","link":"#_2-修改-bootstrap-app-go","children":[]},{"level":3,"title":"3. 修改 facades.*","slug":"_3-修改-facades","link":"#_3-修改-facades","children":[]},{"level":3,"title":"4. 修改 app/providers/*","slug":"_4-修改-app-providers","link":"#_4-修改-app-providers","children":[]},{"level":3,"title":"5. 修改 app/config/app.go","slug":"_5-修改-app-config-app-go","link":"#_5-修改-app-config-app-go","children":[]},{"level":3,"title":"6. 修改 Artisan 命令中的 Flag（如果用到）","slug":"_6-修改-artisan-命令中的-flag-如果用到","link":"#_6-修改-artisan-命令中的-flag-如果用到","children":[]},{"level":3,"title":"7. Filesystem 模块取消对 S3, OSS, COS, Minio 驱动的默认支持","slug":"_7-filesystem-模块取消对-s3-oss-cos-minio-驱动的默认支持","link":"#_7-filesystem-模块取消对-s3-oss-cos-minio-驱动的默认支持","children":[]},{"level":3,"title":"8. Cache 模块取消对 Redis 驱动的默认支持","slug":"_8-cache-模块取消对-redis-驱动的默认支持","link":"#_8-cache-模块取消对-redis-驱动的默认支持","children":[]},{"level":3,"title":"9. 修改 Model 中 CreatedAt, UpdatedAt 的类型","slug":"_9-修改-model-中-createdat-updatedat-的类型","link":"#_9-修改-model-中-createdat-updatedat-的类型","children":[]},{"level":3,"title":"10. 优化 Validation 模块的校验规则","slug":"_10-优化-validation-模块的校验规则","link":"#_10-优化-validation-模块的校验规则","children":[]},{"level":3,"title":"11. 再次安装依赖","slug":"_11-再次安装依赖","link":"#_11-再次安装依赖","children":[]}]},{"level":2,"title":"功能介绍","slug":"功能介绍","link":"#功能介绍","children":[{"level":3,"title":"服务容器","slug":"服务容器","link":"#服务容器","children":[]},{"level":3,"title":"扩展包开发","slug":"扩展包开发","link":"#扩展包开发","children":[]},{"level":3,"title":"Artisan Flag 新增方法","slug":"artisan-flag-新增方法","link":"#artisan-flag-新增方法","children":[]},{"level":3,"title":"新增 Helpers 方法","slug":"新增-helpers-方法","link":"#新增-helpers-方法","children":[]},{"level":3,"title":"升级依赖","slug":"升级依赖","link":"#升级依赖","children":[]},{"level":3,"title":"Migration 新增命令","slug":"migration-新增命令","link":"#migration-新增命令","children":[]},{"level":3,"title":"部分 make 命令支持子文件夹","slug":"部分-make-命令支持子文件夹","link":"#部分-make-命令支持子文件夹","children":[]},{"level":3,"title":"Windows 下因文件路径引发 panic 的问题","slug":"windows-下因文件路径引发-panic-的问题","link":"#windows-下因文件路径引发-panic-的问题","children":[]},{"level":3,"title":"facades.Gate() 返回 nil 的问题","slug":"facades-gate-返回-nil-的问题","link":"#facades-gate-返回-nil-的问题","children":[]},{"level":3,"title":"Windows 下 make:package 命令的问题","slug":"windows-下-make-package-命令的问题","link":"#windows-下-make-package-命令的问题","children":[]},{"level":3,"title":"throttle 中间件 panic 的问题","slug":"throttle-中间件-panic-的问题","link":"#throttle-中间件-panic-的问题","children":[]},{"level":3,"title":"修复 facades.Orm().Query().Load() 的问题","slug":"修复-facades-orm-query-load-的问题","link":"#修复-facades-orm-query-load-的问题","children":[]},{"level":3,"title":"修复 JWT 的问题","slug":"修复-jwt-的问题","link":"#修复-jwt-的问题","children":[]}]}],"git":{},"filePathRelative":"zh/upgrade/v1.12.md","autoDesc":true}');export{T as comp,N as data};