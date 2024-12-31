import{_ as p,c as i,b as n,e as t,f as s,a as c,r as l,o as d,d as o}from"./app-DAwtq9VE.js";const u={},h={class:"table-of-contents"};function g(m,e){const a=l("router-link"),r=l("CommentService");return d(),i("div",null,[e[5]||(e[5]=n("h1",{id:"加密解密",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#加密解密"},[n("span",null,"加密解密")])],-1)),n("nav",h,[n("ul",null,[n("li",null,[t(a,{to:"#简介"},{default:s(()=>e[0]||(e[0]=[o("简介")])),_:1})]),n("li",null,[t(a,{to:"#配置"},{default:s(()=>e[1]||(e[1]=[o("配置")])),_:1})]),n("li",null,[t(a,{to:"#基本用法"},{default:s(()=>e[2]||(e[2]=[o("基本用法")])),_:1}),n("ul",null,[n("li",null,[t(a,{to:"#加密一个值"},{default:s(()=>e[3]||(e[3]=[o("加密一个值")])),_:1})]),n("li",null,[t(a,{to:"#解密一个值"},{default:s(()=>e[4]||(e[4]=[o("解密一个值")])),_:1})])])])])]),e[6]||(e[6]=c(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>Goravel 的加密机制使用的是 OpenSSL 所提供的 AES-256 加密。强烈建议你使用 Goravel 内建的加密工具，而不是用其它的加密算法。所有 Goravel 加密之后的结果都会使用消息认证码 (GMAC) 签名，使其底层值不能在加密后再次修改。</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>在使用 Goravel 的加密工具之前，你必须先设置 <code>config/app.go</code> 配置文件中的 <code>key</code> 配置项。该配置项由环境变量 <code>APP_KEY</code> 设定。你应当使用 <code>go run . artisan key:generate</code> 命令来生成该变量的值，<code>key:generate</code> 命令将使用 Golang 的安全随机字节生成器为你的应用程序构建加密安全密钥。</p><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h2><h3 id="加密一个值" tabindex="-1"><a class="header-anchor" href="#加密一个值"><span>加密一个值</span></a></h3><p>你可以使用 <code>facades.Crypt()</code> 提供的 <code>EncryptString</code> 来加密一个值。所有加密的值都使用 OpenSSL 的 <code>AES-256-GCM</code> 来进行加密。此外，所有加密过的值都会使用消息认证码 (GMAC) 来签名，以检测加密字符串是否被篡改过：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">secret<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Crypt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">EncryptString</span><span class="token punctuation">(</span><span class="token string">&quot;goravel&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="解密一个值" tabindex="-1"><a class="header-anchor" href="#解密一个值"><span>解密一个值</span></a></h3><p>您可以使用 <code>facades.Crypt()</code> 提供的 <code>DecryptString</code> 来进行解密。如果该值不能被正确解密，例如消息认证码 (MAC) 无效，会返回错误：</p><div class="language-go line-numbers-mode" data-highlighter="prismjs" data-ext="go" data-title="go"><pre><code><span class="line">str<span class="token punctuation">,</span> err <span class="token operator">:=</span> facades<span class="token punctuation">.</span><span class="token function">Crypt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">DecryptString</span><span class="token punctuation">(</span>secret<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,11)),t(r)])}const f=p(u,[["render",g],["__file","encryption.html.vue"]]),y=JSON.parse('{"path":"/zh/security/encryption.html","title":"加密解密","lang":"zh-CN","frontmatter":{"description":"加密解密 简介 Goravel 的加密机制使用的是 OpenSSL 所提供的 AES-256 加密。强烈建议你使用 Goravel 内建的加密工具，而不是用其它的加密算法。所有 Goravel 加密之后的结果都会使用消息认证码 (GMAC) 签名，使其底层值不能在加密后再次修改。 配置 在使用 Goravel 的加密工具之前，你必须先设置 config...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/security/encryption.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/security/encryption.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/security/encryption.html"}],["meta",{"property":"og:description","content":"加密解密 简介 Goravel 的加密机制使用的是 OpenSSL 所提供的 AES-256 加密。强烈建议你使用 Goravel 内建的加密工具，而不是用其它的加密算法。所有 Goravel 加密之后的结果都会使用消息认证码 (GMAC) 签名，使其底层值不能在加密后再次修改。 配置 在使用 Goravel 的加密工具之前，你必须先设置 config..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"加密解密\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[{"level":3,"title":"加密一个值","slug":"加密一个值","link":"#加密一个值","children":[]},{"level":3,"title":"解密一个值","slug":"解密一个值","link":"#解密一个值","children":[]}]}],"git":{},"filePathRelative":"zh/security/encryption.md","autoDesc":true}');export{f as comp,y as data};
