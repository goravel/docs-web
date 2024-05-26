import{_ as i,r as t,o as c,c as r,a as e,b as a,w as s,e as d,d as l}from"./app-BlqL-mNw.js";const p={},m=e("h1",{id:"compile",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compile"},[e("span",null,"Compile")])],-1),u={class:"table-of-contents"},h=d(`<h2 id="regular-compilation" tabindex="-1"><a class="header-anchor" href="#regular-compilation"><span>Regular compilation</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go build <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="deploy-server" tabindex="-1"><a class="header-anchor" href="#deploy-server"><span>Deploy Server</span></a></h3><p>The Following files and folders need to be uploaded to the server during deployment:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>./main // Compile the resulting binary file
.env
./database
./public
./storage
./resources
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="static-compilation" tabindex="-1"><a class="header-anchor" href="#static-compilation"><span>Static compilation</span></a></h2><p>The package by regular compilation also needs to rely on the support of the deployment environment, the statically compiled files can be freely put to run on the specified platform without environment configuration.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go build <span class="token parameter variable">--ldflags</span> <span class="token string">&quot;-extldflags -static&quot;</span> <span class="token parameter variable">-o</span> main <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cross-compile" tabindex="-1"><a class="header-anchor" href="#cross-compile"><span>Cross compile</span></a></h2><p>Compilation is differentiated by platform, you need to select a matching compilation method according to the deployment situation.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>// Compile Linux environment
<span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>linux <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>amd64 go build <span class="token builtin class-name">.</span>

// Compile Windows environment
<span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>windows <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>amd64 go build <span class="token builtin class-name">.</span>

// Compile Mac environment
<span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>darwin <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>amd64 go build <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h2><p>Goravel has a default <code>Dockerfile</code> and <code>docker-compose.yml</code> file, you can use it directly, note that <code>APP_HOST</code> should be <code>0.0.0.0</code> at this time.</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose"><span>Docker Compose</span></a></h3><p>You can also quickly start the service with the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> build
<span class="token function">docker-compose</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note: If you need external access, you need to change APP_HOST to 0.0.0.0</p></blockquote><h2 id="reduce-package-size" tabindex="-1"><a class="header-anchor" href="#reduce-package-size"><span>Reduce package size</span></a></h2><p>Commenting out the unused <code>ServiceProvider</code> in <code>config/app.go::providers</code> will effectively reduce the packaging volume.</p>`,20);function v(g,b){const n=t("router-link"),o=t("CommentService");return c(),r("div",null,[m,e("nav",u,[e("ul",null,[e("li",null,[a(n,{to:"#regular-compilation"},{default:s(()=>[l("Regular compilation")]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#deploy-server"},{default:s(()=>[l("Deploy Server")]),_:1})])])]),e("li",null,[a(n,{to:"#static-compilation"},{default:s(()=>[l("Static compilation")]),_:1})]),e("li",null,[a(n,{to:"#cross-compile"},{default:s(()=>[l("Cross compile")]),_:1})]),e("li",null,[a(n,{to:"#docker"},{default:s(()=>[l("Docker")]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#docker-compose"},{default:s(()=>[l("Docker Compose")]),_:1})])])]),e("li",null,[a(n,{to:"#reduce-package-size"},{default:s(()=>[l("Reduce package size")]),_:1})])])]),h,a(o)])}const f=i(p,[["render",v],["__file","compile.html.vue"]]),y=JSON.parse('{"path":"/getting-started/compile.html","title":"Compile","lang":"en-US","frontmatter":{"description":"Compile Regular compilation Deploy Server The Following files and folders need to be uploaded to the server during deployment: Static compilation The package by regular compilat...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goravel.dev/zh/getting-started/compile.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/getting-started/compile.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/getting-started/compile.html"}],["meta",{"property":"og:description","content":"Compile Regular compilation Deploy Server The Following files and folders need to be uploaded to the server during deployment: Static compilation The package by regular compilat..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Compile\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Regular compilation","slug":"regular-compilation","link":"#regular-compilation","children":[{"level":3,"title":"Deploy Server","slug":"deploy-server","link":"#deploy-server","children":[]}]},{"level":2,"title":"Static compilation","slug":"static-compilation","link":"#static-compilation","children":[]},{"level":2,"title":"Cross compile","slug":"cross-compile","link":"#cross-compile","children":[]},{"level":2,"title":"Docker","slug":"docker","link":"#docker","children":[{"level":3,"title":"Docker Compose","slug":"docker-compose","link":"#docker-compose","children":[]}]},{"level":2,"title":"Reduce package size","slug":"reduce-package-size","link":"#reduce-package-size","children":[]}],"git":{},"filePathRelative":"getting-started/compile.md","autoDesc":true}');export{f as comp,y as data};