import{_ as r,c as i,b as e,e as o,f as a,a as p,r as t,o as d,d as s}from"./app-DAwtq9VE.js";const u={},g={class:"table-of-contents"};function h(m,n){const l=t("router-link"),c=t("CommentService");return d(),i("div",null,[n[5]||(n[5]=e("h1",{id:"color",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#color"},[e("span",null,"Color")])],-1)),e("nav",g,[e("ul",null,[e("li",null,[o(l,{to:"#简介"},{default:a(()=>n[0]||(n[0]=[s("简介")])),_:1})]),e("li",null,[o(l,{to:"#特定颜色"},{default:a(()=>n[1]||(n[1]=[s("特定颜色")])),_:1}),e("ul",null,[e("li",null,[o(l,{to:"#打印方法"},{default:a(()=>n[2]||(n[2]=[s("打印方法")])),_:1})])])]),e("li",null,[o(l,{to:"#指定颜色"},{default:a(()=>n[3]||(n[3]=[s("指定颜色")])),_:1}),e("ul",null,[e("li",null,[o(l,{to:"#color-new"},{default:a(()=>n[4]||(n[4]=[s("color.New")])),_:1})])])])])]),n[6]||(n[6]=p(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p><code>color</code> 包提供一系列的方法以便在控制台上输出带颜色的内容，该功能由 <a href="github.com/pterm/pterm">PTerm</a> 提供驱动。</p><h2 id="特定颜色" tabindex="-1"><a class="header-anchor" href="#特定颜色"><span>特定颜色</span></a></h2><p>包提供了一些方法来创建特定颜色的打印。这些方法允许您轻松地为终端输出添加颜色。</p><ul><li><code>color.Red()</code></li><li><code>color.Green()</code></li><li><code>color.Yellow()</code></li><li><code>color.Blue()</code></li><li><code>color.Magenta()</code></li><li><code>color.Cyan()</code></li><li><code>color.White()</code></li><li><code>color.Black()</code></li><li><code>color.Gray()</code></li><li><code>color.Default()</code></li></ul><h3 id="打印方法" tabindex="-1"><a class="header-anchor" href="#打印方法"><span>打印方法</span></a></h3><ul><li><code>Print</code></li><li><code>Println</code></li><li><code>Printf</code></li><li><code>Sprint</code></li><li><code>Sprintln</code></li><li><code>Sprintf</code></li></ul><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/support/color&quot;</span></span>
<span class="line"></span>
<span class="line">color<span class="token punctuation">.</span><span class="token function">Blue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, Goravel!&quot;</span><span class="token punctuation">)</span></span>
<span class="line">color<span class="token punctuation">.</span><span class="token function">Green</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, %s!&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Goravel&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="指定颜色" tabindex="-1"><a class="header-anchor" href="#指定颜色"><span>指定颜色</span></a></h2><h3 id="color-new" tabindex="-1"><a class="header-anchor" href="#color-new"><span><code>color.New</code></span></a></h3><p><code>color.New</code> 函数创建一个新的颜色打印。您可以使用此对象来为终端的输出添加颜色。</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">&quot;github.com/goravel/framework/support/color&quot;</span></span>
<span class="line"></span>
<span class="line">color<span class="token punctuation">.</span><span class="token function">New</span><span class="token punctuation">(</span>color<span class="token punctuation">.</span>FgRed<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, Goravel!&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12)),o(c)])}const v=r(u,[["render",h],["__file","color.html.vue"]]),f=JSON.parse('{"path":"/zh/digging-deeper/color.html","title":"Color","lang":"zh-CN","frontmatter":{"description":"Color 简介 color 包提供一系列的方法以便在控制台上输出带颜色的内容，该功能由 PTerm 提供驱动。 特定颜色 包提供了一些方法来创建特定颜色的打印。这些方法允许您轻松地为终端输出添加颜色。 color.Red() color.Green() color.Yellow() color.Blue() color.Magenta() color...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/digging-deeper/color.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/digging-deeper/color.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/digging-deeper/color.html"}],["meta",{"property":"og:description","content":"Color 简介 color 包提供一系列的方法以便在控制台上输出带颜色的内容，该功能由 PTerm 提供驱动。 特定颜色 包提供了一些方法来创建特定颜色的打印。这些方法允许您轻松地为终端输出添加颜色。 color.Red() color.Green() color.Yellow() color.Blue() color.Magenta() color..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Color\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"特定颜色","slug":"特定颜色","link":"#特定颜色","children":[{"level":3,"title":"打印方法","slug":"打印方法","link":"#打印方法","children":[]}]},{"level":2,"title":"指定颜色","slug":"指定颜色","link":"#指定颜色","children":[{"level":3,"title":"color.New","slug":"color-new","link":"#color-new","children":[]}]}],"git":{},"filePathRelative":"zh/digging-deeper/color.md","autoDesc":true}');export{v as comp,f as data};
