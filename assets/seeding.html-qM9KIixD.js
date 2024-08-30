import{_ as l,r as o,o as i,c as d,a as s,b as e,w as a,d as n,e as p}from"./app-szi7K--b.js";const r={},u=s("h1",{id:"数据填充",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#数据填充"},[s("span",null,"数据填充")])],-1),k={class:"table-of-contents"},v=p('<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>Goravel 内置了一个可为您的数据库填充测试数据的 struct。所有的填充 struct 都放在 <code>database/seeds</code> 目录下。Goravel 默认定义了一个 <code>DatabaseSeeder</code> struct。通过这个 struct，你可以用 <code>facades.Seeder.Call()</code> 方法来运行其他的 <code>seed</code> 类，从而控制数据填充的顺序。</p><h2 id="编写-seeders" tabindex="-1"><a class="header-anchor" href="#编写-seeders"><span>编写 Seeders</span></a></h2>',3),m=s("code",null,"make:seeder",-1),b=s("code",null,"database/seeders",-1),g=p(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go run <span class="token builtin class-name">.</span> artisan make:seeder UserSeeder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Seeder struct 只包含两个方法：<code>Signature</code>, <code>Run</code>，<code>Signature</code> 方法定义 Seeder 的名称，<code>Run</code> 方法会在执行 <code>db:seed</code> 这个 Artisan command 时被调用。在 <code>Run</code> 方法里，您可以按需在数据库中插入数据。</p><p>如下所示，在默认的 <code>DatabaseSeeder</code> struct 中的 <code>Run</code> 方法中添加一条数据插入语句：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> seeders

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;github.com/goravel/framework/contracts/database/seeder&quot;</span>
	<span class="token string">&quot;github.com/goravel/framework/facades&quot;</span>

	<span class="token string">&quot;goravel/app/models&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">type</span> DatabaseSeeder <span class="token keyword">struct</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// Signature The name and signature of the seeder.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>DatabaseSeeder<span class="token punctuation">)</span> <span class="token function">Signature</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string">&quot;DatabaseSeeder&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">// Run executes the seeder logic.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>DatabaseSeeder<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	user <span class="token operator">:=</span> models<span class="token punctuation">.</span>User<span class="token punctuation">{</span>
		Name<span class="token punctuation">:</span> <span class="token string">&quot;goravel&quot;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> facades<span class="token punctuation">.</span><span class="token function">Orm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>user<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="调用其他-seeders" tabindex="-1"><a class="header-anchor" href="#调用其他-seeders"><span>调用其他 Seeders</span></a></h2><p>在 <code>DatabaseSeeder</code> struct 中，你可以使用 <code>Call</code> 方法来运行其他的 seed。使用 <code>Call</code> 方法可以将数据填充拆分成多个文件，这样就不会使单个 seeder 文件变得非常大。 只需向 <code>Call</code> 方法中传递要运行的 seeder 类名称即可：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// Run executes the seeder logic.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>DatabaseSeeder<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> facades<span class="token punctuation">.</span><span class="token function">Seeder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>seeder<span class="token punctuation">.</span>Seeder<span class="token punctuation">{</span>
		<span class="token operator">&amp;</span>UserSeeder<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>框架还提供一个 <code>CallOnce</code> 方法，可以使某 seeder 在一次 <code>db:seed</code> 命令中只运行一次：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// Run executes the seeder logic.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>DatabaseSeeder<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> facades<span class="token punctuation">.</span><span class="token function">Seeder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">CallOnce</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>seeder<span class="token punctuation">.</span>Seeder<span class="token punctuation">{</span>
		<span class="token operator">&amp;</span>UserSeeder<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运行-seeders" tabindex="-1"><a class="header-anchor" href="#运行-seeders"><span>运行 Seeders</span></a></h2><p>您可以使用 Artisan 命令 <code>db:seed</code> 来填充数据库。默认情况下，<code>db:seed</code> 命令将运行 <code>database/seeders/database_seeder.go</code>，这个 struct 又可以调用其他 seed。不过，你也可以使用 <code>--seeder</code> 选项来指定一个特定的 seeder：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go run <span class="token builtin class-name">.</span> artisan db:seed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果您想在运行 <code>db:seed</code> 命令时执行其他 seeder，可以在 <code>app/providers/database_service_provider.go</code> 中注册该 seeder：</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// app/providers/database_service_provider.go</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>DatabaseServiceProvider<span class="token punctuation">)</span> <span class="token function">Boot</span><span class="token punctuation">(</span>app foundation<span class="token punctuation">.</span>Application<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	facades<span class="token punctuation">.</span><span class="token function">Seeder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>seeder<span class="token punctuation">.</span>Seeder<span class="token punctuation">{</span>
		<span class="token operator">&amp;</span>seeders<span class="token punctuation">.</span>DatabaseSeeder<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token operator">&amp;</span>seeders<span class="token punctuation">.</span>UserSeeder<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token operator">&amp;</span>seeders<span class="token punctuation">.</span>PhotoSeeder<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">go</span> run <span class="token punctuation">.</span> artisan db<span class="token punctuation">:</span>seed <span class="token operator">--</span>seeder<span class="token operator">=</span>UserSeeder PhotoSeeder <span class="token comment">// The signature of seeder</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>您还可以使用 <code>migrate:fresh</code> 或 <code>migrate:refresh</code> 命令结合 <code>--seed</code> 选项，这将删除数据库中所有表并重新运行所有迁移。此命令对于完全重建数据库非常有用。也可以使用 <code>--seeder</code> 运行一个指定的 seeder：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go run <span class="token builtin class-name">.</span> artisan migrate:fresh <span class="token parameter variable">--seed</span>

go run <span class="token builtin class-name">.</span> artisan migrate:fresh <span class="token parameter variable">--seed</span> <span class="token parameter variable">--seeder</span><span class="token operator">=</span>UserSeeder

go run <span class="token builtin class-name">.</span> artisan migrate:refresh <span class="token parameter variable">--seed</span>

go run <span class="token builtin class-name">.</span> artisan migrate:refresh <span class="token parameter variable">--seed</span> <span class="token parameter variable">--seeder</span><span class="token operator">=</span>UserSeeder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在生产环境中强制运行填充" tabindex="-1"><a class="header-anchor" href="#在生产环境中强制运行填充"><span>在生产环境中强制运行填充</span></a></h3><p>一些填充操作可能会导致原有数据的更新或丢失。为了保护生产环境数据库的数据，在生产环境中运行填充命令前会进行确认。可以添加 <code>--force</code> 选项来强制运行填充命令：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go run <span class="token builtin class-name">.</span> artisan db:seed <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19);function h(f,S){const t=o("router-link"),c=o("RouteLink");return i(),d("div",null,[u,s("nav",k,[s("ul",null,[s("li",null,[e(t,{to:"#简介"},{default:a(()=>[n("简介")]),_:1})]),s("li",null,[e(t,{to:"#编写-seeders"},{default:a(()=>[n("编写 Seeders")]),_:1})]),s("li",null,[e(t,{to:"#调用其他-seeders"},{default:a(()=>[n("调用其他 Seeders")]),_:1})]),s("li",null,[e(t,{to:"#运行-seeders"},{default:a(()=>[n("运行 Seeders")]),_:1}),s("ul",null,[s("li",null,[e(t,{to:"#在生产环境中强制运行填充"},{default:a(()=>[n("在生产环境中强制运行填充")]),_:1})])])])])]),v,s("p",null,[n("运行 "),e(c,{to:"/zh/digging-deeper/artisan-console.html"},{default:a(()=>[n("Artisan 命令")]),_:1}),n(),m,n(" 可以生成 Seeder，框架生成的 seeders 都放在 "),b,n(" 目录下：")]),g])}const y=l(r,[["render",h],["__file","seeding.html.vue"]]),x=JSON.parse('{"path":"/zh/orm/seeding.html","title":"数据填充","lang":"zh-CN","frontmatter":{"description":"数据填充 简介 Goravel 内置了一个可为您的数据库填充测试数据的 struct。所有的填充 struct 都放在 database/seeds 目录下。Goravel 默认定义了一个 DatabaseSeeder struct。通过这个 struct，你可以用 facades.Seeder.Call() 方法来运行其他的 seed 类，从而控制数...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/orm/seeding.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/orm/seeding.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/orm/seeding.html"}],["meta",{"property":"og:description","content":"数据填充 简介 Goravel 内置了一个可为您的数据库填充测试数据的 struct。所有的填充 struct 都放在 database/seeds 目录下。Goravel 默认定义了一个 DatabaseSeeder struct。通过这个 struct，你可以用 facades.Seeder.Call() 方法来运行其他的 seed 类，从而控制数..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据填充\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"编写 Seeders","slug":"编写-seeders","link":"#编写-seeders","children":[]},{"level":2,"title":"调用其他 Seeders","slug":"调用其他-seeders","link":"#调用其他-seeders","children":[]},{"level":2,"title":"运行 Seeders","slug":"运行-seeders","link":"#运行-seeders","children":[{"level":3,"title":"在生产环境中强制运行填充","slug":"在生产环境中强制运行填充","link":"#在生产环境中强制运行填充","children":[]}]}],"git":{},"filePathRelative":"zh/orm/seeding.md","autoDesc":true}');export{y as comp,x as data};