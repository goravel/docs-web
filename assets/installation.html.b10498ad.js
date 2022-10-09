import{_ as r,r as s,o as d,c,b as e,d as a,w as t,e as n,f as l}from"./app.c57080ea.js";const u={},h=e("h1",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),n(" Installation")],-1),v={class:"table-of-contents"},p=n("Server Requirements"),f=n("Installation"),m=n("Start HTTP Service"),_=n("Live reload"),g=n("Configuration"),b=n("Configuration files"),x=n("Application key"),k=l(`<h2 id="server-requirements" tabindex="-1"><a class="header-anchor" href="#server-requirements" aria-hidden="true">#</a> Server Requirements</h2><ul><li>Golang &gt;= 1.18</li></ul><h2 id="installation-1" tabindex="-1"><a class="header-anchor" href="#installation-1" aria-hidden="true">#</a> Installation</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// Download framework
<span class="token function">git</span> clone git@github.com:goravel/goravel.git

// Installation dependencies
<span class="token builtin class-name">cd</span> goravel <span class="token operator">&amp;&amp;</span> go mod tidy

// Create .env environment configuration <span class="token function">file</span>
<span class="token function">cp</span> .env.example .env

// Generate application key
go run <span class="token builtin class-name">.</span> artisan key:generate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="start-http-service" tabindex="-1"><a class="header-anchor" href="#start-http-service" aria-hidden="true">#</a> Start HTTP Service</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="live-reload" tabindex="-1"><a class="header-anchor" href="#live-reload" aria-hidden="true">#</a> Live reload</h3>`,7),y=n("Built-in "),w={href:"https://github.com/cosmtrek/air",target:"_blank",rel:"noopener noreferrer"},C=n("cosmtrek/air"),S=n(" configuration file which can be used directly."),I=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>air
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><h3 id="configuration-files" tabindex="-1"><a class="header-anchor" href="#configuration-files" aria-hidden="true">#</a> Configuration files</h3><p>All configuration files of the Goravel framework are placed in the <code>config</code> directory. All configuration items has annotations, you can adjust it according to your needs.</p><h3 id="application-key" tabindex="-1"><a class="header-anchor" href="#application-key" aria-hidden="true">#</a> Application key</h3><p>You need to generate the application key after Goravel is installed locally. Running the command below, a 32-bit string will be generated on the <code>APP_KEY</code> key in the <code>.env</code> file. This key is mainly used for data encryption and decryption.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run. artisan key:generate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function T(q,A){const i=s("router-link"),o=s("ExternalLinkIcon");return d(),c("div",null,[h,e("nav",v,[e("ul",null,[e("li",null,[a(i,{to:"#server-requirements"},{default:t(()=>[p]),_:1})]),e("li",null,[a(i,{to:"#installation-1"},{default:t(()=>[f]),_:1})]),e("li",null,[a(i,{to:"#start-http-service"},{default:t(()=>[m]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#live-reload"},{default:t(()=>[_]),_:1})])])]),e("li",null,[a(i,{to:"#configuration"},{default:t(()=>[g]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#configuration-files"},{default:t(()=>[b]),_:1})]),e("li",null,[a(i,{to:"#application-key"},{default:t(()=>[x]),_:1})])])])])]),k,e("p",null,[y,e("a",w,[C,a(o)]),S]),I])}const E=r(u,[["render",T],["__file","installation.html.vue"]]);export{E as default};
