import{_ as i,c,b as s,e as a,f as e,a as u,r as o,o as r,d as p}from"./app-Ci8pqpHY.js";const d={},k={class:"table-of-contents"};function g(m,n){const t=o("router-link"),l=o("CommentService");return r(),c("div",null,[n[6]||(n[6]=s("h1",{id:"配置信息",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#配置信息"},[s("span",null,"配置信息")])],-1)),s("nav",k,[s("ul",null,[s("li",null,[a(t,{to:"#简介"},{default:e(()=>n[0]||(n[0]=[p("简介")])),_:1})]),s("li",null,[a(t,{to:"#环境配置"},{default:e(()=>n[1]||(n[1]=[p("环境配置")])),_:1})]),s("li",null,[a(t,{to:"#获取环境配置"},{default:e(()=>n[2]||(n[2]=[p("获取环境配置")])),_:1})]),s("li",null,[a(t,{to:"#获取配置值"},{default:e(()=>n[3]||(n[3]=[p("获取配置值")])),_:1})]),s("li",null,[a(t,{to:"#设置配置值"},{default:e(()=>n[4]||(n[4]=[p("设置配置值")])),_:1})]),s("li",null,[a(t,{to:"#获取项目信息"},{default:e(()=>n[5]||(n[5]=[p("获取项目信息")])),_:1})])])]),n[7]||(n[7]=u(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>Goravel 框架所有配置文件都保存在 <code>config</code> 目录中。你可以进入具体文件查看配置说明，根据项目需要灵活配置。</p><h2 id="环境配置" tabindex="-1"><a class="header-anchor" href="#环境配置"><span>环境配置</span></a></h2><p>在不同的环境运行应用程序，通常需要不同的配置。例如，你可能希望在本地打开 Debug 模式，但生产环境不需要。</p><p>因此，框架在根目录提供了 <code>.env.example</code> 文件，需要你在开发前，复制该文件并重命名为 <code>.env</code>，根据项目需要修改 <code>.env</code> 文件中的配置项。</p><p>注意，<code>.env</code> 文件不应该加入版本控制，因为多人协作时，不同的开发人员有可能使用不同的配置，不同的部署环境配置也不相同。</p><p>此外，如果有入侵者获得了你的代码仓库访问权限，将会有暴露敏感配置的风险。如果你想新增新的配置项，可以添加到 <code>.env.example</code> 文件中，以此来同步所有开发者的配置。</p><h2 id="获取环境配置" tabindex="-1"><a class="header-anchor" href="#获取环境配置"><span>获取环境配置</span></a></h2><p>使用如下方法，可获取 <code>.env</code> 文件中的配置项：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token comment">// 第一个参数为配置键，第二个参数为默认值</span></span>
<span class="line">facades<span class="token punctuation">.</span><span class="token function">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Env</span><span class="token punctuation">(</span><span class="token string">&quot;APP_NAME&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;goravel&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取配置值" tabindex="-1"><a class="header-anchor" href="#获取配置值"><span>获取配置值</span></a></h2><p>你可以轻松的在应用程序的任何位置使用全局 <code>facades.Config()</code> 函数来访问 <code>config</code> 目录中的配置值。配置值的访问可以使用「点」语法。还可以指定默认值，如果配置选项不存在，则返回默认值：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token comment">// 通过断言获取配置</span></span>
<span class="line">facades<span class="token punctuation">.</span><span class="token function">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;app.name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;goravel&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取字符串类型的配置</span></span>
<span class="line">facades<span class="token punctuation">.</span><span class="token function">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;app.name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;goravel&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取整形类型的配置</span></span>
<span class="line">facades<span class="token punctuation">.</span><span class="token function">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetInt</span><span class="token punctuation">(</span><span class="token string">&quot;app.int&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取布尔类型的配置</span></span>
<span class="line">facades<span class="token punctuation">.</span><span class="token function">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">GetBool</span><span class="token punctuation">(</span><span class="token string">&quot;app.debug&quot;</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置配置值" tabindex="-1"><a class="header-anchor" href="#设置配置值"><span>设置配置值</span></a></h2><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">facades<span class="token punctuation">.</span><span class="token function">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">facades<span class="token punctuation">.</span><span class="token function">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;path.with.dot.case1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;value1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">facades<span class="token punctuation">.</span><span class="token function">Config</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span><span class="token string">&quot;path.with.dot&quot;</span><span class="token punctuation">,</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span>any<span class="token punctuation">{</span><span class="token string">&quot;case3&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;value3&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="获取项目信息" tabindex="-1"><a class="header-anchor" href="#获取项目信息"><span>获取项目信息</span></a></h2><p>可以使用 <code>artisan about</code> 命令来查看框架的版本、配置等信息。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">go run <span class="token builtin class-name">.</span> artisan about</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,18)),a(l)])}const h=i(d,[["render",g],["__file","configuration.html.vue"]]),f=JSON.parse('{"path":"/zh/getting-started/configuration.html","title":"配置信息","lang":"zh-CN","frontmatter":{"description":"配置信息 简介 Goravel 框架所有配置文件都保存在 config 目录中。你可以进入具体文件查看配置说明，根据项目需要灵活配置。 环境配置 在不同的环境运行应用程序，通常需要不同的配置。例如，你可能希望在本地打开 Debug 模式，但生产环境不需要。 因此，框架在根目录提供了 .env.example 文件，需要你在开发前，复制该文件并重命名为 ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/getting-started/configuration.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/getting-started/configuration.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/getting-started/configuration.html"}],["meta",{"property":"og:description","content":"配置信息 简介 Goravel 框架所有配置文件都保存在 config 目录中。你可以进入具体文件查看配置说明，根据项目需要灵活配置。 环境配置 在不同的环境运行应用程序，通常需要不同的配置。例如，你可能希望在本地打开 Debug 模式，但生产环境不需要。 因此，框架在根目录提供了 .env.example 文件，需要你在开发前，复制该文件并重命名为 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"配置信息\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"环境配置","slug":"环境配置","link":"#环境配置","children":[]},{"level":2,"title":"获取环境配置","slug":"获取环境配置","link":"#获取环境配置","children":[]},{"level":2,"title":"获取配置值","slug":"获取配置值","link":"#获取配置值","children":[]},{"level":2,"title":"设置配置值","slug":"设置配置值","link":"#设置配置值","children":[]},{"level":2,"title":"获取项目信息","slug":"获取项目信息","link":"#获取项目信息","children":[]}],"git":{},"filePathRelative":"zh/getting-started/configuration.md","autoDesc":true}');export{h as comp,f as data};