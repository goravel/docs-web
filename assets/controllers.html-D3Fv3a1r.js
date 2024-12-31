import{_ as c,c as i,b as s,e as a,f as t,a as r,r as o,o as u,d as l}from"./app-DAwtq9VE.js";const d={},k={class:"table-of-contents"};function v(m,n){const e=o("router-link"),p=o("CommentService");return u(),i("div",null,[n[4]||(n[4]=s("h1",{id:"控制器",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#控制器"},[s("span",null,"控制器")])],-1)),s("nav",k,[s("ul",null,[s("li",null,[a(e,{to:"#简介"},{default:t(()=>n[0]||(n[0]=[l("简介")])),_:1})]),s("li",null,[a(e,{to:"#定义控制器"},{default:t(()=>n[1]||(n[1]=[l("定义控制器")])),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#创建控制器"},{default:t(()=>n[2]||(n[2]=[l("创建控制器")])),_:1})])])]),s("li",null,[a(e,{to:"#资源型控制器"},{default:t(()=>n[3]||(n[3]=[l("资源型控制器")])),_:1})])])]),n[5]||(n[5]=r(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>为了代替在单独路由中以闭包形式定义所有的请求处理逻辑，可以使用控制器来进行整合。控制器被存放在 <code>app/http/controllers</code> 目录中。</p><h2 id="定义控制器" tabindex="-1"><a class="header-anchor" href="#定义控制器"><span>定义控制器</span></a></h2><p>下面是一个基础控制器类的例子：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> controllers</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">&quot;github.com/goravel/framework/contracts/http&quot;</span></span>
<span class="line">  <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> UserController <span class="token keyword">struct</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// Dependent services</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">NewUserController</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span>UserController <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token operator">&amp;</span>UserController<span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// Inject services</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token punctuation">(</span>r <span class="token operator">*</span>UserController<span class="token punctuation">)</span> <span class="token function">Show</span><span class="token punctuation">(</span>ctx http<span class="token punctuation">.</span>Context<span class="token punctuation">)</span> http<span class="token punctuation">.</span>Response <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> ctx<span class="token punctuation">.</span><span class="token function">Response</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Success</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Json</span><span class="token punctuation">(</span>http<span class="token punctuation">.</span>Json<span class="token punctuation">{</span></span>
<span class="line">    <span class="token string">&quot;Hello&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Goravel&quot;</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>路由定义：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">package</span> routes</span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">&quot;github.com/goravel/framework/facades&quot;</span></span>
<span class="line"></span>
<span class="line">  <span class="token string">&quot;goravel/app/http/controllers&quot;</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">func</span> <span class="token function">Web</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  userController <span class="token operator">:=</span> controllers<span class="token punctuation">.</span><span class="token function">NewUserController</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  facades<span class="token punctuation">.</span><span class="token function">Route</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Get</span><span class="token punctuation">(</span><span class="token string">&quot;/{id}&quot;</span><span class="token punctuation">,</span> userController<span class="token punctuation">.</span>Show<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建控制器" tabindex="-1"><a class="header-anchor" href="#创建控制器"><span>创建控制器</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">go run <span class="token builtin class-name">.</span> artisan make:controller UserController</span>
<span class="line">go run <span class="token builtin class-name">.</span> artisan make:controller user/UserController</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资源型控制器" tabindex="-1"><a class="header-anchor" href="#资源型控制器"><span>资源型控制器</span></a></h2><p>如果您将应用程序中的每个模型都视为资源，那么通常对应用程序中的每个资源都执行相同的操作。例如，假设您的应用程序中包含一个 <code>Photo</code> 模型和一个 <code>Movie</code> 模型。用户可能可以创建，读取，更新或者删除这些资源。</p><p>Goravel 的资源路由通过单行代码即可将典型的「CURD (增删改查)」路由分配给控制器。首先，我们可以使用 Artisan 命令 <code>make:controller</code> 的 <code>--resource</code> 选项来快速创建一个控制器：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">go run <span class="token builtin class-name">.</span> artisan make:controller <span class="token parameter variable">--resource</span> PhotoController</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这个命令将会生成一个控制器 <code>app/http/controllers/photo_controller.go</code>。其中包括每个可用资源操作的方法。接下来，您可以给控制器注册一个资源路由：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">facades<span class="token punctuation">.</span><span class="token function">Route</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Resource</span><span class="token punctuation">(</span><span class="token string">&quot;photos&quot;</span><span class="token punctuation">,</span> controllers<span class="token punctuation">.</span><span class="token function">NewPhotoController</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><table><thead><tr><th>请求方式</th><th>请求URI</th><th>行为</th></tr></thead><tbody><tr><td>GET</td><td><code>/photos</code></td><td>Index</td></tr><tr><td>POST</td><td><code>/photos</code></td><td>Store</td></tr><tr><td>GET</td><td><code>/photos/{photo}</code></td><td>Show</td></tr><tr><td>PUT/PATCH</td><td><code>/photos/{photo}</code></td><td>Update</td></tr><tr><td>DELETE</td><td><code>/photos/{photo}</code></td><td>Destroy</td></tr></tbody></table>`,16)),a(p)])}const b=c(d,[["render",v],["__file","controllers.html.vue"]]),g=JSON.parse('{"path":"/zh/the-basics/controllers.html","title":"控制器","lang":"zh-CN","frontmatter":{"description":"控制器 简介 为了代替在单独路由中以闭包形式定义所有的请求处理逻辑，可以使用控制器来进行整合。控制器被存放在 app/http/controllers 目录中。 定义控制器 下面是一个基础控制器类的例子： 路由定义： 创建控制器 资源型控制器 如果您将应用程序中的每个模型都视为资源，那么通常对应用程序中的每个资源都执行相同的操作。例如，假设您的应用程序...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/the-basics/controllers.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/the-basics/controllers.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/the-basics/controllers.html"}],["meta",{"property":"og:description","content":"控制器 简介 为了代替在单独路由中以闭包形式定义所有的请求处理逻辑，可以使用控制器来进行整合。控制器被存放在 app/http/controllers 目录中。 定义控制器 下面是一个基础控制器类的例子： 路由定义： 创建控制器 资源型控制器 如果您将应用程序中的每个模型都视为资源，那么通常对应用程序中的每个资源都执行相同的操作。例如，假设您的应用程序..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"控制器\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"定义控制器","slug":"定义控制器","link":"#定义控制器","children":[{"level":3,"title":"创建控制器","slug":"创建控制器","link":"#创建控制器","children":[]}]},{"level":2,"title":"资源型控制器","slug":"资源型控制器","link":"#资源型控制器","children":[]}],"git":{},"filePathRelative":"zh/the-basics/controllers.md","autoDesc":true}');export{b as comp,g as data};
