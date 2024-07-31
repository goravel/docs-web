import{_ as l,r as d,o as s,c as o,a as e,b as n,w as t,e as c,d as i}from"./app-CTBhyWeW.js";const r={},u=e("h1",{id:"本地化",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本地化"},[e("span",null,"本地化")])],-1),v={class:"table-of-contents"},m=c(`<h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>Goravel 的本地化功能提供了一种方便的方法来检索各种语言的字符串，从而使你可以轻松地在应用程序中支持多种语言。语言字符串存储在 <code>lang</code> 目录里的文件中，Goravel 支持两种方式组织语言文件：</p><p>每一种语言文件独立一个文件：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/lang
  en.json
  cn.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者当语言过多时，可以对其进行分类：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/lang
  /en
    user.json
  /cn
    user.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置语言环境" tabindex="-1"><a class="header-anchor" href="#配置语言环境"><span>配置语言环境</span></a></h2><p>应用程序的默认语言存储在 <code>config/app.go</code> 配置文件的 <code>locale</code> 配置选项中。你可以随意修改此值以适合你的应用程序的需求。</p><p>你也可以使用 App Facade 提供的 <code>SetLocale</code> 方法，在运行时为单个 <code>HTTP</code> 请求修改默认语言：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>facades.Route().Get(&quot;/&quot;, func(ctx http.Context) http.Response {
    facades.App().SetLocale(ctx, &quot;en&quot;)

    return ctx.Response()
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以配置一个「备用语言」，当当前语言不包含给定的翻译字符串时，将使用该语言。和默认语言一样，备用语言也是在 <code>config/app.go</code> 配置文件中配置。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;fallback_locale&quot;: &quot;en&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="确定当前的语言环境" tabindex="-1"><a class="header-anchor" href="#确定当前的语言环境"><span>确定当前的语言环境</span></a></h3><p>你可以使用 <code>CurrentLocale</code> 和 <code>IsLocale</code> 方法来确定当前的 <code>locale</code> 或检查 <code>locale</code> 是否是一个给定值。</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>locale := facades.App().CurrentLocale(ctx)
if facades.App().IsLocale(ctx, &quot;en&quot;) {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="定义翻译字符串" tabindex="-1"><a class="header-anchor" href="#定义翻译字符串"><span>定义翻译字符串</span></a></h3><p>在语言文件中，可以定义一级或多级结构：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// lang/en.json
{
  &quot;name&quot;: &quot;It&#39;s your name&quot;,
  &quot;required&quot;: {
    &quot;user_id&quot;: &quot;UserID is required&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="检索翻译字符串" tabindex="-1"><a class="header-anchor" href="#检索翻译字符串"><span>检索翻译字符串</span></a></h3><p>你可以使用 <code>facades.Lang(ctx).Get()</code> 方法从语言文件中检索翻译字符串。如果语言文件包含多个层级，可以使用 <code>.</code> 进行连接，如果语言文件在多层级的文件夹中，可以使用 <code>/</code> 进行连接。 例如：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// lang/en.json
{
  &quot;name&quot;: &quot;It&#39;s your name&quot;,
  &quot;required&quot;: {
    &quot;user_id&quot;: &quot;UserID is required&quot;
  }
}

facades.Lang(ctx).Get(&quot;name&quot;)
facades.Lang(ctx).Get(&quot;required.user_id&quot;)

// lang/en/role/user.json
{
  &quot;name&quot;: &quot;It&#39;s your name&quot;,
  &quot;required&quot;: {
    &quot;user_id&quot;: &quot;UserID is required&quot;
  }
}

facades.Lang(ctx).Get(&quot;role/user.name&quot;)
facades.Lang(ctx).Get(&quot;role/user.required.user_id&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="替换翻译字符串中的参数" tabindex="-1"><a class="header-anchor" href="#替换翻译字符串中的参数"><span>替换翻译字符串中的参数</span></a></h4><p>可以在翻译字符串中定义占位符。所有占位符的前缀都是 <code>:</code>。例如，可以使用占位符名称定义欢迎消息：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;welcome&quot;: &quot;Welcome, :name&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在要检索翻译字符串时替换占位符，可以将替换数组作为第二个参数传递给 <code>facades.Lang(ctx).Get()</code> 方法：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>facades.Lang(ctx).Get(&quot;welcome&quot;, translation.Option{
  Replace: map[string]string{
    &quot;name&quot;: &quot;Goravel&quot;,
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复数化" tabindex="-1"><a class="header-anchor" href="#复数化"><span>复数化</span></a></h4><p>因为不同的语言有着各种复杂的复数化规则，所以复数化是个复杂的问题；不过 Goravel 可以根据你定义的复数化规则帮助你翻译字符串。使用 <code>|</code> 字符，可以区分字符串的单数形式和复数形式：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;apples&quot;: &quot;There is one apple|There are many apples&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你甚至可以创建更复杂的复数化规则，为多个值范围指定转换字符串：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;apples&quot;: &quot;{0} There are none|[1,19] There are some|[20,*] There are many&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义具有复数选项的翻译字符串后，可以使用 <code>facades.Lang(ctx).Choice()</code> 方法检索给定「count」的行。在本例中，由于计数大于 1 ，因此返回翻译字符串的复数形式：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>facades.Lang(ctx).Choice(&quot;messages.apples&quot;, 10)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>也可以在复数化字符串中定义占位符属性。通过将数组作为第三个参数传递给 <code>facades.Lang(ctx).Choice()</code> 方法，可以替换这些占位符：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;minutes_ago&quot;: &quot;{1} :value minute ago|[2,*] :value minutes ago&quot;,

facades.Lang(ctx).Choice(&quot;time.minutes_ago&quot;, 5, translation.Option{
  Replace: map[string]string{
    &quot;value&quot;: &quot;5&quot;,
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,35);function p(g,b){const a=d("router-link");return s(),o("div",null,[u,e("nav",v,[e("ul",null,[e("li",null,[n(a,{to:"#简介"},{default:t(()=>[i("简介")]),_:1})]),e("li",null,[n(a,{to:"#配置语言环境"},{default:t(()=>[i("配置语言环境")]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#确定当前的语言环境"},{default:t(()=>[i("确定当前的语言环境")]),_:1})]),e("li",null,[n(a,{to:"#定义翻译字符串"},{default:t(()=>[i("定义翻译字符串")]),_:1})]),e("li",null,[n(a,{to:"#检索翻译字符串"},{default:t(()=>[i("检索翻译字符串")]),_:1})])])])])]),m])}const x=l(r,[["render",p],["__file","localization.html.vue"]]),q=JSON.parse('{"path":"/zh/digging-deeper/localization.html","title":"本地化","lang":"zh-CN","frontmatter":{"description":"本地化 简介 Goravel 的本地化功能提供了一种方便的方法来检索各种语言的字符串，从而使你可以轻松地在应用程序中支持多种语言。语言字符串存储在 lang 目录里的文件中，Goravel 支持两种方式组织语言文件： 每一种语言文件独立一个文件： 或者当语言过多时，可以对其进行分类： 配置语言环境 应用程序的默认语言存储在 config/app.go ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://goravel.dev/digging-deeper/localization.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/zh/digging-deeper/localization.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/digging-deeper/localization.html"}],["meta",{"property":"og:description","content":"本地化 简介 Goravel 的本地化功能提供了一种方便的方法来检索各种语言的字符串，从而使你可以轻松地在应用程序中支持多种语言。语言字符串存储在 lang 目录里的文件中，Goravel 支持两种方式组织语言文件： 每一种语言文件独立一个文件： 或者当语言过多时，可以对其进行分类： 配置语言环境 应用程序的默认语言存储在 config/app.go ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"本地化\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"配置语言环境","slug":"配置语言环境","link":"#配置语言环境","children":[{"level":3,"title":"确定当前的语言环境","slug":"确定当前的语言环境","link":"#确定当前的语言环境","children":[]},{"level":3,"title":"定义翻译字符串","slug":"定义翻译字符串","link":"#定义翻译字符串","children":[]},{"level":3,"title":"检索翻译字符串","slug":"检索翻译字符串","link":"#检索翻译字符串","children":[]}]}],"git":{},"filePathRelative":"zh/digging-deeper/localization.md","autoDesc":true}');export{x as comp,q as data};
