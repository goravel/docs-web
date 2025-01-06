import{_ as c,c as r,b as a,e as t,f as e,a as l,d as s,r as i,o as d}from"./app-B8FHsz6d.js";const k={},g={class:"table-of-contents"};function v(m,n){const p=i("router-link"),o=i("RouteLink"),u=i("CommentService");return d(),r("div",null,[n[37]||(n[37]=a("h1",{id:"扩展包开发",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#扩展包开发"},[a("span",null,"扩展包开发")])],-1)),a("nav",g,[a("ul",null,[a("li",null,[t(p,{to:"#简介"},{default:e(()=>n[0]||(n[0]=[s("简介")])),_:1})]),a("li",null,[t(p,{to:"#创建包"},{default:e(()=>n[1]||(n[1]=[s("创建包")])),_:1})]),a("li",null,[t(p,{to:"#服务提供者"},{default:e(()=>n[2]||(n[2]=[s("服务提供者")])),_:1})]),a("li",null,[t(p,{to:"#使用"},{default:e(()=>n[3]||(n[3]=[s("使用")])),_:1})]),a("li",null,[t(p,{to:"#资源"},{default:e(()=>n[4]||(n[4]=[s("资源")])),_:1}),a("ul",null,[a("li",null,[t(p,{to:"#配置"},{default:e(()=>n[5]||(n[5]=[s("配置")])),_:1})]),a("li",null,[t(p,{to:"#路由"},{default:e(()=>n[6]||(n[6]=[s("路由")])),_:1})]),a("li",null,[t(p,{to:"#迁移"},{default:e(()=>n[7]||(n[7]=[s("迁移")])),_:1})]),a("li",null,[t(p,{to:"#命令"},{default:e(()=>n[8]||(n[8]=[s("命令")])),_:1})]),a("li",null,[t(p,{to:"#公共资源"},{default:e(()=>n[9]||(n[9]=[s("公共资源")])),_:1})]),a("li",null,[t(p,{to:"#发布文件组"},{default:e(()=>n[10]||(n[10]=[s("发布文件组")])),_:1})]),a("li",null,[t(p,{to:"#发布资源"},{default:e(()=>n[11]||(n[11]=[s("发布资源")])),_:1})])])])])]),n[38]||(n[38]=l(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>包是向 Goravel 添加功能的主要方式，这些包可能包含专门用于增强 Goravel 应用程序的路由、控制器和配置。本指南主要涵盖了那些特定于 Goravel 的包的开发。这里有一个关于包开发的官方示例：<a href="https://github.com/goravel/example-package" target="_blank" rel="noopener noreferrer">goravel/example-package</a></p><h2 id="创建包" tabindex="-1"><a class="header-anchor" href="#创建包"><span>创建包</span></a></h2><p>您可以使用 Artisan 命令便捷的创建一个包模板：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">go run <span class="token builtin class-name">.</span> artisan make:package sms</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建的文件默认保存在根目录 <code>packages</code> 文件夹中，您可以使用 <code>--root</code> 选项自定义：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">go run <span class="token builtin class-name">.</span> artisan make:package <span class="token parameter variable">--root</span><span class="token operator">=</span>pkg sms</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="服务提供者" tabindex="-1"><a class="header-anchor" href="#服务提供者"><span>服务提供者</span></a></h2>`,8)),a("p",null,[t(o,{to:"/zh/architecutre-concepts/service-providers.html"},{default:e(()=>n[12]||(n[12]=[s("服务提供者")])),_:1}),n[14]||(n[14]=s("是您的包和 Goravel 之间的连接点，通常位于包的根目录中：")),n[15]||(n[15]=a("code",null,"service_provider.go",-1)),n[16]||(n[16]=s("。服务提供者负责将事物绑定到 Goravel 的")),t(o,{to:"/zh/architecutre-concepts/service-container.html"},{default:e(()=>n[13]||(n[13]=[s("服务容器")])),_:1}),n[17]||(n[17]=s("并通知 Goravel 在哪里加载包资源。"))]),n[39]||(n[39]=l(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><p>将包内的 <code>ServiceProvider</code> 注册到 <code>config/app.go::providers</code>，然后将 <code>facades</code> 导出到应用中即可，详细步骤可以参考：<a href="https://github.com/goravel/example-package" target="_blank" rel="noopener noreferrer">goravel/example-package</a>。</p><h2 id="资源" tabindex="-1"><a class="header-anchor" href="#资源"><span>资源</span></a></h2><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><p>通常，您需要将包的配置文件发布到应用程序的 <code>config</code> 目录。这将允许您的包的用户轻松覆盖您的默认配置选项。要允许发布配置文件，请从服务提供者的 <code>Boot</code> 方法中调用 <code>Publishes</code> 方法，该方法第一个参数为包名，第二个参数为当前包文件路径与项目路径的映射：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>ServiceProvider<span class="token punctuation">)</span> <span class="token function">Boot</span><span class="token punctuation">(</span>app foundation<span class="token punctuation">.</span>Application<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  app<span class="token punctuation">.</span><span class="token function">Publishes</span><span class="token punctuation">(</span><span class="token string">&quot;github.com/goravel/example-package&quot;</span><span class="token punctuation">,</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;config/sms.go&quot;</span><span class="token punctuation">:</span> app<span class="token punctuation">.</span><span class="token function">ConfigPath</span><span class="token punctuation">(</span><span class="token string">&quot;sms.go&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="路由" tabindex="-1"><a class="header-anchor" href="#路由"><span>路由</span></a></h3>`,7)),a("p",null,[n[19]||(n[19]=s("如果您的包包含")),t(o,{to:"/zh/the-basics/routing.html"},{default:e(()=>n[18]||(n[18]=[s("路由")])),_:1}),n[20]||(n[20]=s("，可以使用 ")),n[21]||(n[21]=a("code",null,"app.MakeRoute()",-1)),n[22]||(n[22]=s(" 解析出 ")),n[23]||(n[23]=a("code",null,"facades.Route()",-1)),n[24]||(n[24]=s("，然后添加到项目"))]),n[40]||(n[40]=l(`<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>ServiceProvider<span class="token punctuation">)</span> <span class="token function">Boot</span><span class="token punctuation">(</span>app foundation<span class="token punctuation">.</span>Application<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	route <span class="token operator">:=</span> app<span class="token punctuation">.</span><span class="token function">MakeRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">	route<span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;sms&quot;</span><span class="token punctuation">,</span> <span class="token operator">*</span><span class="token operator">*</span><span class="token operator">*</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迁移" tabindex="-1"><a class="header-anchor" href="#迁移"><span>迁移</span></a></h3>`,2)),a("p",null,[n[26]||(n[26]=s("如果您的包包含")),t(o,{to:"/zh/orm/migrations.html"},{default:e(()=>n[25]||(n[25]=[s("数据库迁移")])),_:1}),n[27]||(n[27]=s("，也可以使用 ")),n[28]||(n[28]=a("code",null,"Publishes",-1)),n[29]||(n[29]=s(" 方法进行发布："))]),n[41]||(n[41]=l(`<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>ServiceProvider<span class="token punctuation">)</span> <span class="token function">Boot</span><span class="token punctuation">(</span>app foundation<span class="token punctuation">.</span>Application<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  app<span class="token punctuation">.</span><span class="token function">Publishes</span><span class="token punctuation">(</span><span class="token string">&quot;github.com/goravel/example-package&quot;</span><span class="token punctuation">,</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;migrations&quot;</span><span class="token punctuation">:</span> app<span class="token punctuation">.</span><span class="token function">DatabasePath</span><span class="token punctuation">(</span><span class="token string">&quot;migrations&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h3>`,2)),a("p",null,[n[31]||(n[31]=s("可以在服务提供者中使用 ")),n[32]||(n[32]=a("code",null,"Commands",-1)),n[33]||(n[33]=s(" 方法注册 ")),n[34]||(n[34]=a("code",null,"Artisan",-1)),n[35]||(n[35]=s(" 命令，注册命令后，您可以使用")),t(o,{to:"/zh/digging-deeper/artisan-console.html"},{default:e(()=>n[30]||(n[30]=[s("Artisan CLI")])),_:1}),n[36]||(n[36]=s("执行它们："))]),n[42]||(n[42]=l(`<div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>ServiceProvider<span class="token punctuation">)</span> <span class="token function">Boot</span><span class="token punctuation">(</span>app foundation<span class="token punctuation">.</span>Application<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	app<span class="token punctuation">.</span><span class="token function">Commands</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>console<span class="token punctuation">.</span>Command<span class="token punctuation">{</span></span>
<span class="line">		commands<span class="token punctuation">.</span><span class="token function">NewSmsCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="公共资源" tabindex="-1"><a class="header-anchor" href="#公共资源"><span>公共资源</span></a></h3><p>您的包可能包含 JavaScript、CSS 和图像等资产。要将这些资产发布到应用程序的 <code>public</code> 目录，请使用服务提供者的 <code>Publishes</code> 方法。：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>ServiceProvider<span class="token punctuation">)</span> <span class="token function">Boot</span><span class="token punctuation">(</span>app foundation<span class="token punctuation">.</span>Application<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  app<span class="token punctuation">.</span><span class="token function">Publishes</span><span class="token punctuation">(</span><span class="token string">&quot;github.com/goravel/example-package&quot;</span><span class="token punctuation">,</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;public&quot;</span><span class="token punctuation">:</span> app<span class="token punctuation">.</span><span class="token function">PublicPath</span><span class="token punctuation">(</span><span class="token string">&quot;vendor&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发布文件组" tabindex="-1"><a class="header-anchor" href="#发布文件组"><span>发布文件组</span></a></h3><p>您可能希望单独发布包资产和资源组。例如，您可能希望允许用户发布包的配置文件，而不是被迫发布包的全部资产。您可以在包的服务提供者中调用 <code>Publishes</code> 方法时定义「标签」来做到这一点。例如，让我们使用标签在包的服务提供者的 <code>Boot</code> 方法中为 <code>sms</code> 包定义两个发布组（<code>sms-config</code> 和 <code>sms-migrations</code>）：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>ServiceProvider<span class="token punctuation">)</span> <span class="token function">Boot</span><span class="token punctuation">(</span>app foundation<span class="token punctuation">.</span>Application<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  app<span class="token punctuation">.</span><span class="token function">Publishes</span><span class="token punctuation">(</span><span class="token string">&quot;github.com/goravel/example-package&quot;</span><span class="token punctuation">,</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;config/sms.go&quot;</span><span class="token punctuation">:</span> app<span class="token punctuation">.</span><span class="token function">ConfigPath</span><span class="token punctuation">(</span><span class="token string">&quot;sms.go&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;sms-config&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  app<span class="token punctuation">.</span><span class="token function">Publishes</span><span class="token punctuation">(</span><span class="token string">&quot;github.com/goravel/example-package&quot;</span><span class="token punctuation">,</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;migrations&quot;</span><span class="token punctuation">:</span> app<span class="token punctuation">.</span><span class="token function">DatabasePath</span><span class="token punctuation">(</span><span class="token string">&quot;migrations&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;sms-migrations&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="发布资源" tabindex="-1"><a class="header-anchor" href="#发布资源"><span>发布资源</span></a></h3><p>在项目中，您可以使用 Artisan 命令 <code>vendor:publish</code> 发布包中注册的资源：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">go run <span class="token builtin class-name">.</span> artisan vendor:publish <span class="token parameter variable">--package</span><span class="token operator">=</span><span class="token punctuation">{</span>您的包名<span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>该命令可以使用如下参数：</p><table><thead><tr><th>参数名</th><th>别名</th><th>作用</th></tr></thead><tbody><tr><td>--package</td><td>-p</td><td>包名，可以使远程包，例如：github.com/goravel/example-package，也可以使用本地包名：./packages/example-package，注意当使用本地包名时，需要以 <code>./</code> 开头</td></tr><tr><td>--tag</td><td>-t</td><td>资源分组</td></tr><tr><td>--force</td><td>-f</td><td>强制覆盖</td></tr><tr><td>--existing</td><td>-e</td><td>只发布已存在的资源，并强制覆盖</td></tr></tbody></table>`,12)),t(u)])}const h=c(k,[["render",v],["__file","package-development.html.vue"]]),f=JSON.parse('{"path":"/zh/digging-deeper/package-development.html","title":"扩展包开发","lang":"zh-CN","frontmatter":{"description":"扩展包开发 简介 包是向 Goravel 添加功能的主要方式，这些包可能包含专门用于增强 Goravel 应用程序的路由、控制器和配置。本指南主要涵盖了那些特定于 Goravel 的包的开发。这里有一个关于包开发的官方示例：goravel/example-package 创建包 您可以使用 Artisan 命令便捷的创建一个包模板： 创建的文件默认保存...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/digging-deeper/package-development.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/digging-deeper/package-development.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/digging-deeper/package-development.html"}],["meta",{"property":"og:description","content":"扩展包开发 简介 包是向 Goravel 添加功能的主要方式，这些包可能包含专门用于增强 Goravel 应用程序的路由、控制器和配置。本指南主要涵盖了那些特定于 Goravel 的包的开发。这里有一个关于包开发的官方示例：goravel/example-package 创建包 您可以使用 Artisan 命令便捷的创建一个包模板： 创建的文件默认保存..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"扩展包开发\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"创建包","slug":"创建包","link":"#创建包","children":[]},{"level":2,"title":"服务提供者","slug":"服务提供者","link":"#服务提供者","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[]},{"level":2,"title":"资源","slug":"资源","link":"#资源","children":[{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":3,"title":"路由","slug":"路由","link":"#路由","children":[]},{"level":3,"title":"迁移","slug":"迁移","link":"#迁移","children":[]},{"level":3,"title":"命令","slug":"命令","link":"#命令","children":[]},{"level":3,"title":"公共资源","slug":"公共资源","link":"#公共资源","children":[]},{"level":3,"title":"发布文件组","slug":"发布文件组","link":"#发布文件组","children":[]},{"level":3,"title":"发布资源","slug":"发布资源","link":"#发布资源","children":[]}]}],"git":{},"filePathRelative":"zh/digging-deeper/package-development.md","autoDesc":true}');export{h as comp,f as data};