import{_ as o,r as l,o as s,c as d,b as e,d as a,w as t,e as i,f as c}from"./app.8e7f4439.js";const r={},m=e("h1",{id:"compile",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compile","aria-hidden":"true"},"#"),i(" Compile")],-1),u={class:"table-of-contents"},p=i("Regular compilation"),h=i("Static compilation"),v=i("Cross compile"),_=c(`<h2 id="regular-compilation" tabindex="-1"><a class="header-anchor" href="#regular-compilation" aria-hidden="true">#</a> Regular compilation</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go build .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="static-compilation" tabindex="-1"><a class="header-anchor" href="#static-compilation" aria-hidden="true">#</a> Static compilation</h2><p>The package by regular compilation also needs to rely on the support of the deployment environment, the statically compiled files can be freely put to run on the specified platform without environment configuration.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go build --ldflags &quot;-extldflags -static&quot; -o main .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="cross-compile" tabindex="-1"><a class="header-anchor" href="#cross-compile" aria-hidden="true">#</a> Cross compile</h2><p>Compilation is differentiated by platform, you need to select a matching compilation method according to the deployment situation.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// Compile Linux environment
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build .

// Compile Windows environment
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build .

// Compile Mac environment
CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function b(g,f){const n=l("router-link");return s(),d("div",null,[m,e("nav",u,[e("ul",null,[e("li",null,[a(n,{to:"#regular-compilation"},{default:t(()=>[p]),_:1})]),e("li",null,[a(n,{to:"#static-compilation"},{default:t(()=>[h]),_:1})]),e("li",null,[a(n,{to:"#cross-compile"},{default:t(()=>[v]),_:1})])])]),_])}const C=o(r,[["render",b],["__file","compile.html.vue"]]);export{C as default};