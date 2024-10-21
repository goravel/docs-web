import{_ as c,r as o,o as d,c as l,a as n,b as s,w as a,d as e,e as p}from"./app-C1EstAlD.js";const r={},u=n("h1",{id:"database-seeding",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#database-seeding"},[n("span",null,"Database: Seeding")])],-1),m={class:"table-of-contents"},k=n("h2",{id:"introduction",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#introduction"},[n("span",null,"Introduction")])],-1),v=n("p",null,[e("Goravel includes the ability to seed your database with data using seed struct. All seed structs are stored in the "),n("code",null,"database/seeders"),e(" directory. By default, a "),n("code",null,"DatabaseSeeder"),e(" struct is defined for you.")],-1),g=n("h2",{id:"writing-seeders",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#writing-seeders"},[n("span",null,"Writing Seeders")])],-1),b=n("code",null,"make:seeder",-1),h=n("code",null,"database/seeders",-1),f=p(`<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go run <span class="token builtin class-name">.</span> artisan make:seeder UserSeeder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>By default, a seeder struct has two methods: <code>Signature</code> and <code>Run</code>. The <code>Signature</code> method sets the name of the seeder, while the <code>Run</code> method is triggered when the <code>db:seed</code> Artisan command is executed. You can use the <code>Run</code> method to insert data into your database in any way you prefer.</p><p>To illustrate, we can customize the <code>DatabaseSeeder</code> struct by adding a database insert statement to the <code>Run</code> method.</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token keyword">package</span> seeders

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="calling-additional-seeders" tabindex="-1"><a class="header-anchor" href="#calling-additional-seeders"><span>Calling Additional Seeders</span></a></h2><p>Within the <code>DatabaseSeeder</code> struct, you may use the <code>Call</code> method to execute additional seed structs. Using the <code>Call</code> method allows you to break up your database seeding into multiple files so that no single seeder struct becomes too large. The <code>Call</code> method accepts an array of seeder structs that should be executed:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// Run executes the seeder logic.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>DatabaseSeeder<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> facades<span class="token punctuation">.</span><span class="token function">Seeder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Call</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>seeder<span class="token punctuation">.</span>Seeder<span class="token punctuation">{</span>
		<span class="token operator">&amp;</span>UserSeeder<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Framework also provides a <code>CallOnce</code> method, a seeder will be executed only once in the <code>db:seed</code> command:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// Run executes the seeder logic.</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>s <span class="token operator">*</span>DatabaseSeeder<span class="token punctuation">)</span> <span class="token function">Run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> facades<span class="token punctuation">.</span><span class="token function">Seeder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">CallOnce</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>seeder<span class="token punctuation">.</span>Seeder<span class="token punctuation">{</span>
		<span class="token operator">&amp;</span>UserSeeder<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="running-seeders" tabindex="-1"><a class="header-anchor" href="#running-seeders"><span>Running Seeders</span></a></h2><p>You may run the <code>db:seed</code> Artisan command to seed your database. By default, the <code>db:seed</code> command runs the <code>database/seeders/database_seeder.go</code> file, which may in turn invoke other seed classes. However, you may use the <code>--seeder</code> option to specify a specific seeder class to run individually:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go run <span class="token builtin class-name">.</span> artisan db:seed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If you want to execute other seeders when running the <code>db:seed</code> command, you can register the seeder in <code>app/providers/database_service_provider.go</code>:</p><div class="language-go line-numbers-mode" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token comment">// app/providers/database_service_provider.go</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>receiver <span class="token operator">*</span>DatabaseServiceProvider<span class="token punctuation">)</span> <span class="token function">Boot</span><span class="token punctuation">(</span>app foundation<span class="token punctuation">.</span>Application<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	facades<span class="token punctuation">.</span><span class="token function">Seeder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Register</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span>seeder<span class="token punctuation">.</span>Seeder<span class="token punctuation">{</span>
		<span class="token operator">&amp;</span>seeders<span class="token punctuation">.</span>DatabaseSeeder<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token operator">&amp;</span>seeders<span class="token punctuation">.</span>UserSeeder<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token operator">&amp;</span>seeders<span class="token punctuation">.</span>PhotoSeeder<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">go</span> run <span class="token punctuation">.</span> artisan db<span class="token punctuation">:</span>seed <span class="token operator">--</span>seeder<span class="token operator">=</span>UserSeeder PhotoSeeder <span class="token comment">// The signature of seeder</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You may also seed your database using the <code>migrate:fresh</code> and <code>migrate:refresh</code> command in combination with the <code>--seed</code> option, which will drop all tables and re-run all of your migrations. This command is useful for completely re-building your database. The <code>--seeder</code> option may be used to specify a specific seeder to run:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go run <span class="token builtin class-name">.</span> artisan migrate:fresh <span class="token parameter variable">--seed</span>

go run <span class="token builtin class-name">.</span> artisan migrate:fresh <span class="token parameter variable">--seed</span> <span class="token parameter variable">--seeder</span><span class="token operator">=</span>UserSeeder

go run <span class="token builtin class-name">.</span> artisan migrate:refresh <span class="token parameter variable">--seed</span>

go run <span class="token builtin class-name">.</span> artisan migrate:refresh <span class="token parameter variable">--seed</span> <span class="token parameter variable">--seeder</span><span class="token operator">=</span>UserSeeder
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="forcing-seeders-to-run-in-production" tabindex="-1"><a class="header-anchor" href="#forcing-seeders-to-run-in-production"><span>Forcing Seeders To Run In Production</span></a></h3><p>Some seeding operations may cause you to alter or lose data. In order to protect you from running seeding commands against your production database, you will be prompted for confirmation before the seeders are executed in the <code>production</code> environment. To force the seeders to run without a prompt, use the <code>--force</code> flag:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go run <span class="token builtin class-name">.</span> artisan db:seed <span class="token parameter variable">--force</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19);function y(S,w){const t=o("router-link"),i=o("RouteLink");return d(),l("div",null,[u,n("nav",m,[n("ul",null,[n("li",null,[s(t,{to:"#introduction"},{default:a(()=>[e("Introduction")]),_:1})]),n("li",null,[s(t,{to:"#writing-seeders"},{default:a(()=>[e("Writing Seeders")]),_:1})]),n("li",null,[s(t,{to:"#calling-additional-seeders"},{default:a(()=>[e("Calling Additional Seeders")]),_:1})]),n("li",null,[s(t,{to:"#running-seeders"},{default:a(()=>[e("Running Seeders")]),_:1}),n("ul",null,[n("li",null,[s(t,{to:"#forcing-seeders-to-run-in-production"},{default:a(()=>[e("Forcing Seeders To Run In Production")]),_:1})])])])])]),k,v,g,n("p",null,[e("To generate a seeder, run the "),b,e(),s(i,{to:"/digging-deeper/artisan-console.html"},{default:a(()=>[e("Artisan command")]),_:1}),e(". All seeders generated by the framework will be stored in the "),h,e(" directory:")]),f])}const x=c(r,[["render",y],["__file","seeding.html.vue"]]),R=JSON.parse('{"path":"/orm/seeding.html","title":"Database: Seeding","lang":"en-US","frontmatter":{"description":"Database: Seeding Introduction Goravel includes the ability to seed your database with data using seed struct. All seed structs are stored in the database/seeders directory. By ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goravel.dev/zh/orm/seeding.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/orm/seeding.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/orm/seeding.html"}],["meta",{"property":"og:description","content":"Database: Seeding Introduction Goravel includes the ability to seed your database with data using seed struct. All seed structs are stored in the database/seeders directory. By ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Database: Seeding\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Writing Seeders","slug":"writing-seeders","link":"#writing-seeders","children":[]},{"level":2,"title":"Calling Additional Seeders","slug":"calling-additional-seeders","link":"#calling-additional-seeders","children":[]},{"level":2,"title":"Running Seeders","slug":"running-seeders","link":"#running-seeders","children":[{"level":3,"title":"Forcing Seeders To Run In Production","slug":"forcing-seeders-to-run-in-production","link":"#forcing-seeders-to-run-in-production","children":[]}]}],"git":{},"filePathRelative":"orm/seeding.md","autoDesc":true}');export{x as comp,R as data};