import{_ as l,r as s,o as r,c as t,b as e,d,w as a,e as i,f as c}from"./app.80bfe622.js";const u={},o=e("h1",{id:"\u7F16\u8BD1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7F16\u8BD1","aria-hidden":"true"},"#"),i(" \u7F16\u8BD1")],-1),v={class:"table-of-contents"},m=i("\u5E38\u89C4\u7F16\u8BD1"),b=i("\u9759\u6001\u7F16\u8BD1"),h=i("\u4EA4\u53C9\u7F16\u8BD1"),g=i("Docker"),p=c(`<h2 id="\u5E38\u89C4\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C4\u7F16\u8BD1" aria-hidden="true">#</a> \u5E38\u89C4\u7F16\u8BD1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go build .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u9759\u6001\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u7F16\u8BD1" aria-hidden="true">#</a> \u9759\u6001\u7F16\u8BD1</h2><p>\u5E38\u89C4\u7F16\u8BD1\u540E\u7684\u5305\u8FD8\u9700\u8981\u4F9D\u8D56\u90E8\u7F72\u73AF\u5883\u7684\u652F\u6301\uFF0C\u9759\u6001\u7F16\u8BD1\u51FA\u7684\u6587\u4EF6\u53EF\u4EE5\u4EFB\u610F\u653E\u5230\u6307\u5B9A\u5E73\u53F0\u4E0B\u8FD0\u884C\uFF0C\u4E0D\u9700\u8981\u73AF\u5883\u914D\u7F6E\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go build --ldflags &quot;-extldflags -static&quot; -o main .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4EA4\u53C9\u7F16\u8BD1" tabindex="-1"><a class="header-anchor" href="#\u4EA4\u53C9\u7F16\u8BD1" aria-hidden="true">#</a> \u4EA4\u53C9\u7F16\u8BD1</h2><p>\u7F16\u8BD1\u6709\u5E73\u53F0\u533A\u5206\uFF0C\u9700\u8981\u6839\u636E\u90E8\u7F72\u60C5\u51B5\uFF0C\u9009\u62E9\u5339\u914D\u7684\u7F16\u8BD1\u65B9\u5F0F\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u7F16\u8BD1 Linux \u73AF\u5883
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build .

// \u7F16\u8BD1 Windows \u73AF\u5883
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build .

// \u7F16\u8BD1 Mac \u73AF\u5883
CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h2><p>Goravel \u9ED8\u8BA4\u81EA\u5E26\u4E00\u4E2A Dockerfile \u6587\u4EF6\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>docker build .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u56FD\u5185\u4F1A\u6709\u4E0B\u8F7D\u4F9D\u8D56\u8F83\u6162\u4E0E\u65F6\u533A\u95EE\u9898\uFF0C\u53EF\u4EE5\u5C06 Doockerfile \u5185\u5BB9\u66FF\u6362\u4E3A\u4E0B\u9762\u811A\u672C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>FROM golang:1.18.3-alpine3.16 AS builder

ENV GO111MODULE=on \\
    CGO_ENABLED=0  \\
    GOARCH=&quot;amd64&quot; \\
    GOOS=linux   \\
    GOPROXY=https://goproxy.cn,direct

WORKDIR /build
COPY . .
RUN go mod tidy
RUN go build --ldflags &quot;-extldflags -static&quot; -o main .

FROM alpine:3.16

RUN sed -i &#39;s/dl-cdn.alpinelinux.org/mirrors.tuna.tsinghua.edu.cn/g&#39; /etc/apk/repositories
RUN apk add tzdata &amp;&amp; cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime \\
    &amp;&amp; echo &quot;Asia/Shanghai&quot; &gt; /etc/timezone
WORKDIR /www

COPY --from=builder /build/main /www/
COPY --from=builder /build/database/ /www/database/
COPY --from=builder /build/public/ /www/public/
COPY --from=builder /build/storage/ /www/storage/
COPY --from=builder /build/.env /www/.env

ENTRYPOINT [&quot;/www/main&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function x(_,O){const n=s("router-link");return r(),t("div",null,[o,e("nav",v,[e("ul",null,[e("li",null,[d(n,{to:"#\u5E38\u89C4\u7F16\u8BD1"},{default:a(()=>[m]),_:1})]),e("li",null,[d(n,{to:"#\u9759\u6001\u7F16\u8BD1"},{default:a(()=>[b]),_:1})]),e("li",null,[d(n,{to:"#\u4EA4\u53C9\u7F16\u8BD1"},{default:a(()=>[h]),_:1})]),e("li",null,[d(n,{to:"#docker"},{default:a(()=>[g]),_:1})])])]),p])}const w=l(u,[["render",x],["__file","compile.html.vue"]]);export{w as default};
