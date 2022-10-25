import{_ as r,r as t,o,c,b as e,d as n,w as s,e as a,f as l}from"./app.8de5b488.js";const u={},h=e("h1",{id:"\u5B89\u88C5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B89\u88C5","aria-hidden":"true"},"#"),a(" \u5B89\u88C5")],-1),v={class:"table-of-contents"},_=a("\u670D\u52A1\u5668\u8981\u6C42"),m=a("\u5B89\u88C5 Goravel"),p=a("\u542F\u52A8 HTTP \u670D\u52A1"),b=a("\u70ED\u66F4\u65B0"),g=a("\u914D\u7F6E"),f=a("\u914D\u7F6E\u6587\u4EF6"),x=a("\u5E94\u7528\u5BC6\u94A5"),k=l(`<h2 id="\u670D\u52A1\u5668\u8981\u6C42" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u5668\u8981\u6C42" aria-hidden="true">#</a> \u670D\u52A1\u5668\u8981\u6C42</h2><ul><li>Golang &gt;= 1.18</li></ul><h2 id="\u5B89\u88C5-goravel" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-goravel" aria-hidden="true">#</a> \u5B89\u88C5 Goravel</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>// \u4E0B\u8F7D\u6846\u67B6
<span class="token function">git</span> clone git@github.com:goravel/goravel.git goravel

// \u5B89\u88C5\u4F9D\u8D56
<span class="token builtin class-name">cd</span> goravel <span class="token operator">&amp;&amp;</span> go mod tidy

// \u521B\u5EFA .env \u73AF\u5883\u914D\u7F6E\u6587\u4EF6
<span class="token function">cp</span> .env.example .env

// \u751F\u6210\u5E94\u7528\u5BC6\u94A5
go run <span class="token builtin class-name">.</span> artisan key:generate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u52A8-http-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-http-\u670D\u52A1" aria-hidden="true">#</a> \u542F\u52A8 HTTP \u670D\u52A1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u70ED\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u70ED\u66F4\u65B0" aria-hidden="true">#</a> \u70ED\u66F4\u65B0</h3>`,7),G=a("\u6846\u67B6\u5185\u7F6E "),T={href:"https://github.com/cosmtrek/air",target:"_blank",rel:"noopener noreferrer"},E=a("cosmtrek/air"),N=a(" \u914D\u7F6E\u6587\u4EF6\uFF0C\u53EF\u76F4\u63A5\u4F7F\u7528"),P=l(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>air
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><h3 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h3><p>Goravel \u6846\u67B6\u6240\u6709\u7684\u914D\u7F6E\u6587\u4EF6\u90FD\u653E\u5728 <code>config</code> \u76EE\u5F55\u4E2D\u3002\u6BCF\u4E2A\u914D\u7F6E\u9879\u90FD\u6709\u6CE8\u91CA\uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u8EAB\u9700\u6C42\u8FDB\u884C\u8C03\u6574\u3002</p><h3 id="\u5E94\u7528\u5BC6\u94A5" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u5BC6\u94A5" aria-hidden="true">#</a> \u5E94\u7528\u5BC6\u94A5</h3><p>Goravel \u5B89\u88C5\u5230\u672C\u5730\u540E\uFF0C\u8981\u751F\u6210\u5E94\u7528\u7A0B\u5E8F\u7684\u5BC6\u94A5\u3002\u8FD0\u884C\u4E0B\u9762\u547D\u4EE4\u540E\u4F1A\u5728 <code>.env</code> \u6587\u4EF6\u7684 <code>APP_KEY</code> \u952E\u4E0A\u751F\u6210 32 \u4F4D\u5B57\u7B26\u4E32\uFF0C\u8BE5\u5BC6\u94A5\u4E3B\u8981\u4F5C\u7528\u4E8E\u6570\u636E\u52A0\u89E3\u5BC6\u7B49\u529F\u80FD\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go run . artisan key:generate
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7);function V(y,B){const i=t("router-link"),d=t("ExternalLinkIcon");return o(),c("div",null,[h,e("nav",v,[e("ul",null,[e("li",null,[n(i,{to:"#\u670D\u52A1\u5668\u8981\u6C42"},{default:s(()=>[_]),_:1})]),e("li",null,[n(i,{to:"#\u5B89\u88C5-goravel"},{default:s(()=>[m]),_:1})]),e("li",null,[n(i,{to:"#\u542F\u52A8-http-\u670D\u52A1"},{default:s(()=>[p]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#\u70ED\u66F4\u65B0"},{default:s(()=>[b]),_:1})])])]),e("li",null,[n(i,{to:"#\u914D\u7F6E"},{default:s(()=>[g]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#\u914D\u7F6E\u6587\u4EF6"},{default:s(()=>[f]),_:1})]),e("li",null,[n(i,{to:"#\u5E94\u7528\u5BC6\u94A5"},{default:s(()=>[x]),_:1})])])])])]),k,e("p",null,[G,e("a",T,[E,n(d)]),N]),P])}const C=r(u,[["render",V],["__file","installation.html.vue"]]);export{C as default};
