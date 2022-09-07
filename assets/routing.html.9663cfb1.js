import{_ as d,r as o,o as r,c as l,b as e,d as t,w as s,e as n,f as c}from"./app.7583e1e5.js";const u={},v=e("h1",{id:"\u8DEF\u7531",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8DEF\u7531","aria-hidden":"true"},"#"),n(" \u8DEF\u7531")],-1),h={class:"table-of-contents"},m=n("\u4ECB\u7ECD"),_=n("\u9ED8\u8BA4\u8DEF\u7531\u6587\u4EF6"),b=n("\u542F\u52A8 HTTP \u670D\u52A1\u5668"),g=n("\u57FA\u672C\u8DEF\u7531"),f=n("\u53EF\u7528\u7684\u8DEF\u7531\u65B9\u6CD5"),p=n("\u8DEF\u7531\u53C2\u6570"),q=n("\u8DEF\u7531\u4F20\u53C2"),x=n("\u66F4\u591A\u4F7F\u7528\u65B9\u6CD5"),T=e("h2",{id:"\u4ECB\u7ECD",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#"),n(" \u4ECB\u7ECD")],-1),R=n("Goravel \u8DEF\u7531\u6A21\u5757\u53EF\u4EE5\u4F7F\u7528 "),E=e("code",null,"facades.Route",-1),P=n(" \u8FDB\u884C\u64CD\u4F5C\uFF0C"),k=e("code",null,"facades.Route",-1),H=n(" \u662F\u77E5\u540D HTTP \u6846\u67B6 "),S={href:"https://github.com/gin-gonic/gin",target:"_blank",rel:"noopener noreferrer"},G=n("gin-gonic/gin"),C=n(" \u7684\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u4F7F\u7528\u65B9\u6CD5\u4E0E "),O=e("code",null,"gin-gonic/gin",-1),w=n(" \u5B8C\u5168\u4E00\u81F4\u3002"),N=c(`<h2 id="\u9ED8\u8BA4\u8DEF\u7531\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u9ED8\u8BA4\u8DEF\u7531\u6587\u4EF6" aria-hidden="true">#</a> \u9ED8\u8BA4\u8DEF\u7531\u6587\u4EF6</h2><p>\u6240\u6709\u8DEF\u7531\u6587\u4EF6\u90FD\u5728 <code>/routes</code> \u76EE\u5F55\u4E2D\u8FDB\u884C\u5B9A\u4E49\u3002\u6846\u67B6\u9ED8\u8BA4\u6709\u4E00\u4E2A\u793A\u4F8B\u8DEF\u7531 <code>/routes/web.go</code>\uFF0C\u5176\u4E2D <code>func Web</code> \u65B9\u6CD5\u88AB\u6CE8\u518C\u5230 <code>app/providers/route_service_provider.go</code> \u6587\u4EF6\u4E2D\uFF0C\u4EE5\u5B9E\u73B0\u8DEF\u7531\u7684\u7ED1\u5B9A\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u6839\u636E\u8FD9\u79CD\u65B9\u6CD5\u8FDB\u884C\u66F4\u7EC6\u9897\u7C92\u7684\u7BA1\u7406\uFF0C\u53EF\u4EE5\u5728 <code>routes</code> \u76EE\u5F55\u4E0B\u65B0\u589E\u8DEF\u7531\u6587\u4EF6\uFF0C\u7136\u540E\u5728 <code>app/providers/route_service_provider.go</code> \u6587\u4EF6\u4E2D\u8FDB\u884C\u6CE8\u518C\u3002</p><h2 id="\u542F\u52A8-http-\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8-http-\u670D\u52A1\u5668" aria-hidden="true">#</a> \u542F\u52A8 HTTP \u670D\u52A1\u5668</h2><p>\u5728\u6839\u76EE\u5F55\u4E0B <code>main.go</code> \u4E2D\u542F\u52A8 HTTP \u670D\u52A1\u5668</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

import (
  &quot;github.com/goravel/framework/support/facades&quot;
  &quot;goravel/bootstrap&quot;
)

func main() {
  //This bootstraps the framework and gets it ready for use.
  bootstrap.Boot()

  //Start http server by facades.Route.
  go func() {
    if err := facades.Route.Run(facades.Config.GetString(&quot;app.host&quot;)); err != nil {
      facades.Log.Errorf(&quot;Route run error: %v&quot;, err)
    }
  }()

  select {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u57FA\u672C\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u8DEF\u7531" aria-hidden="true">#</a> \u57FA\u672C\u8DEF\u7531</h2><p>\u53EF\u4EE5\u4F7F\u7528\u95ED\u5305\u7684\u5F62\u5F0F\uFF0C\u5B9A\u4E49\u4E00\u4E2A\u5F88\u7B80\u5355\u7684\u8DEF\u7531\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>facades.Route.GET(&quot;/&quot;, func(c *gin.Context) {
    c.JSON(200, gin.H{
        &quot;message&quot;: &quot;pong&quot;,
    })
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u53EF\u7528\u7684\u8DEF\u7531\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u53EF\u7528\u7684\u8DEF\u7531\u65B9\u6CD5" aria-hidden="true">#</a> \u53EF\u7528\u7684\u8DEF\u7531\u65B9\u6CD5</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>facades.Route.GET(&quot;/someGet&quot;, getting)
facades.Route.POST(&quot;/somePost&quot;, posting)
facades.Route.PUT(&quot;/somePut&quot;, putting)
facades.Route.DELETE(&quot;/someDelete&quot;, deleting)
facades.Route.PATCH(&quot;/somePatch&quot;, patching)
facades.Route.HEAD(&quot;/someHead&quot;, head)
facades.Route.OPTIONS(&quot;/someOptions&quot;, options)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8DEF\u7531\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u53C2\u6570" aria-hidden="true">#</a> \u8DEF\u7531\u53C2\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>facades.Route.GET(&quot;/user/:name&quot;, func(c *gin.Context) {
    name := c.Param(&quot;name&quot;)
    c.String(http.StatusOK, &quot;Hello %s&quot;, name)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8DEF\u7531\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u4F20\u53C2" aria-hidden="true">#</a> \u8DEF\u7531\u4F20\u53C2</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>router.GET(&quot;/welcome&quot;, func(c *gin.Context) {
    firstname := c.DefaultQuery(&quot;firstname&quot;, &quot;Guest&quot;)
    lastname := c.Query(&quot;lastname&quot;) // shortcut for c.Request.URL.Query().Get(&quot;lastname&quot;)

    c.String(http.StatusOK, &quot;Hello %s %s&quot;, firstname, lastname)
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u66F4\u591A\u4F7F\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A\u4F7F\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u66F4\u591A\u4F7F\u7528\u65B9\u6CD5</h3>`,16),y=n("\u8BE6\u89C1 "),L={href:"https://github.com/gin-gonic/gin",target:"_blank",rel:"noopener noreferrer"},B=n("gin-gonic/gin");function D(V,I){const i=o("router-link"),a=o("ExternalLinkIcon");return r(),l("div",null,[v,e("nav",h,[e("ul",null,[e("li",null,[t(i,{to:"#\u4ECB\u7ECD"},{default:s(()=>[m]),_:1})]),e("li",null,[t(i,{to:"#\u9ED8\u8BA4\u8DEF\u7531\u6587\u4EF6"},{default:s(()=>[_]),_:1})]),e("li",null,[t(i,{to:"#\u542F\u52A8-http-\u670D\u52A1\u5668"},{default:s(()=>[b]),_:1})]),e("li",null,[t(i,{to:"#\u57FA\u672C\u8DEF\u7531"},{default:s(()=>[g]),_:1}),e("ul",null,[e("li",null,[t(i,{to:"#\u53EF\u7528\u7684\u8DEF\u7531\u65B9\u6CD5"},{default:s(()=>[f]),_:1})]),e("li",null,[t(i,{to:"#\u8DEF\u7531\u53C2\u6570"},{default:s(()=>[p]),_:1})]),e("li",null,[t(i,{to:"#\u8DEF\u7531\u4F20\u53C2"},{default:s(()=>[q]),_:1})]),e("li",null,[t(i,{to:"#\u66F4\u591A\u4F7F\u7528\u65B9\u6CD5"},{default:s(()=>[x]),_:1})])])])])]),T,e("p",null,[R,E,P,k,H,e("a",S,[G,t(a)]),C,O,w]),N,e("p",null,[y,e("a",L,[B,t(a)])])])}const A=d(u,[["render",D],["__file","routing.html.vue"]]);export{A as default};
