import{_ as t,r as l,o as r,c as o,a as e,b as a,w as s,e as c,d as i}from"./app-BAhmVc9k.js";const u={},p=e("h1",{id:"编译",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#编译"},[e("span",null,"编译")])],-1),v={class:"table-of-contents"},m=c(`<h2 id="编译命令" tabindex="-1"><a class="header-anchor" href="#编译命令"><span>编译命令</span></a></h2><p>Goravel 项目可以通过以下命令编译：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 选择系统进行编译
go run . artisan build

// 指定系统进行编译
go run . artisan build --os=linux
go run . artisan build -o=linux

// 静态编译
go run . artisan build --static
go run . artisan build -s

// 指定输出文件名 
go run . artisan build --name=goravel
go run . artisan build -n=goravel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="手动编译" tabindex="-1"><a class="header-anchor" href="#手动编译"><span>手动编译</span></a></h2><h3 id="常规编译" tabindex="-1"><a class="header-anchor" href="#常规编译"><span>常规编译</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go build <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="部署服务器" tabindex="-1"><a class="header-anchor" href="#部署服务器"><span>部署服务器</span></a></h4><p>部署时需要将下列文件与文件夹上传至服务器：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>./main // 编译生成的二进制文件
.env
./database
./public
./storage
./resources
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态编译" tabindex="-1"><a class="header-anchor" href="#静态编译"><span>静态编译</span></a></h3><p>常规编译后的包还需要依赖部署环境的支持，静态编译出的文件可以任意放到指定平台下运行，不需要环境配置。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>go build <span class="token parameter variable">--ldflags</span> <span class="token string">&quot;-extldflags -static&quot;</span> <span class="token parameter variable">-o</span> main <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="交叉编译" tabindex="-1"><a class="header-anchor" href="#交叉编译"><span>交叉编译</span></a></h3><p>编译有平台区分，需要根据部署情况，选择匹配的编译方式。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>// 编译 Linux 环境
<span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>linux <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>amd64 go build <span class="token builtin class-name">.</span>

// 编译 Windows 环境
<span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>windows <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>amd64 go build <span class="token builtin class-name">.</span>

// 编译 Mac 环境
<span class="token assign-left variable">CGO_ENABLED</span><span class="token operator">=</span><span class="token number">0</span> <span class="token assign-left variable">GOOS</span><span class="token operator">=</span>darwin <span class="token assign-left variable">GOARCH</span><span class="token operator">=</span>amd64 go build <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h2><p>Goravel 默认自带 <code>Dockerfile</code> 与 <code>docker-compose.yml</code> 文件，可以直接使用，注意此时 <code>APP_HOST</code> 应为 <code>0.0.0.0</code>。</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>国内会有下载依赖较慢与时区问题，可以将 Dockerfile 内容替换为下面脚本：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>FROM golang:alpine AS builder

ENV GO111MODULE=on \\
    CGO_ENABLED=0  \\
    GOARCH=&quot;amd64&quot; \\
    GOOS=linux   \\
    GOPROXY=https://goproxy.cn,direct

WORKDIR /build
COPY . .
RUN go mod tidy
RUN go build --ldflags &quot;-extldflags -static&quot; -o main .

FROM alpine:latest

RUN sed -i &#39;s/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g&#39; /etc/apk/repositories
RUN apk add tzdata &amp;&amp; cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \\
    &amp;&amp; echo &quot;Asia/Shanghai&quot; &gt; /etc/timezone
WORKDIR /www

COPY --from=builder /build/main /www/
COPY --from=builder /build/database/ /www/database/
COPY --from=builder /build/public/ /www/public/
COPY --from=builder /build/storage/ /www/storage/
COPY --from=builder /build/resources/ /www/resources/
COPY --from=builder /build/.env /www/.env

ENTRYPOINT [&quot;/www/main&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose"><span>Docker Compose</span></a></h3><p>您也可以使用以下命令快速启动服务：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> build
<span class="token function">docker-compose</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：如需外部访问，需要将 APP_HOST 改为 0.0.0.0</p></blockquote><h2 id="减小打包体积" tabindex="-1"><a class="header-anchor" href="#减小打包体积"><span>减小打包体积</span></a></h2><p>将 <code>config/app.go::providers</code> 中未用到的 <code>ServiceProvider</code> 注释掉将能有效地减少打包体积。</p>`,26);function b(h,g){const n=l("router-link"),d=l("CommentService");return r(),o("div",null,[p,e("nav",v,[e("ul",null,[e("li",null,[a(n,{to:"#编译命令"},{default:s(()=>[i("编译命令")]),_:1})]),e("li",null,[a(n,{to:"#手动编译"},{default:s(()=>[i("手动编译")]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#常规编译"},{default:s(()=>[i("常规编译")]),_:1})]),e("li",null,[a(n,{to:"#静态编译"},{default:s(()=>[i("静态编译")]),_:1})]),e("li",null,[a(n,{to:"#交叉编译"},{default:s(()=>[i("交叉编译")]),_:1})])])]),e("li",null,[a(n,{to:"#docker"},{default:s(()=>[i("Docker")]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#docker-compose"},{default:s(()=>[i("Docker Compose")]),_:1})])])]),e("li",null,[a(n,{to:"#减小打包体积"},{default:s(()=>[i("减小打包体积")]),_:1})])])]),m,a(d)])}const f=t(u,[["render",b],["__file","compile.html.vue"]]),x=JSON.parse('{"path":"/zh/getting-started/compile.html","title":"编译","lang":"zh-CN","frontmatter":{"description":"编译 编译命令 Goravel 项目可以通过以下命令编译： 手动编译 常规编译 部署服务器 部署时需要将下列文件与文件夹上传至服务器： 静态编译 常规编译后的包还需要依赖部署环境的支持，静态编译出的文件可以任意放到指定平台下运行，不需要环境配置。 交叉编译 编译有平台区分，需要根据部署情况，选择匹配的编译方式。 Docker Goravel 默认自带 ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/getting-started/compile.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/getting-started/compile.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/getting-started/compile.html"}],["meta",{"property":"og:description","content":"编译 编译命令 Goravel 项目可以通过以下命令编译： 手动编译 常规编译 部署服务器 部署时需要将下列文件与文件夹上传至服务器： 静态编译 常规编译后的包还需要依赖部署环境的支持，静态编译出的文件可以任意放到指定平台下运行，不需要环境配置。 交叉编译 编译有平台区分，需要根据部署情况，选择匹配的编译方式。 Docker Goravel 默认自带 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"编译\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"编译命令","slug":"编译命令","link":"#编译命令","children":[]},{"level":2,"title":"手动编译","slug":"手动编译","link":"#手动编译","children":[{"level":3,"title":"常规编译","slug":"常规编译","link":"#常规编译","children":[]},{"level":3,"title":"静态编译","slug":"静态编译","link":"#静态编译","children":[]},{"level":3,"title":"交叉编译","slug":"交叉编译","link":"#交叉编译","children":[]}]},{"level":2,"title":"Docker","slug":"docker","link":"#docker","children":[{"level":3,"title":"Docker Compose","slug":"docker-compose","link":"#docker-compose","children":[]}]},{"level":2,"title":"减小打包体积","slug":"减小打包体积","link":"#减小打包体积","children":[]}],"git":{},"filePathRelative":"zh/getting-started/compile.md","autoDesc":true}');export{f as comp,x as data};
