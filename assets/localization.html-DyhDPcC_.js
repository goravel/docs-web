import{_ as l,r as s,o,c as r,a as e,b as a,w as t,e as d,d as i}from"./app-R_yqPBBy.js";const c={},u=e("h1",{id:"localization",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#localization"},[e("span",null,"Localization")])],-1),g={class:"table-of-contents"},v=d(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>Goravel&#39;s localization features provide a convenient way to retrieve strings in various languages, making it easy to support multiple languages in your application. Language strings are stored in files in the <code>lang</code> directory, and Goravel supports two ways to organize language files:</p><p>Each language has its own file:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/lang
  en.json
  cn.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or, when there are too many translations, they can be categorized:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>/lang
  /en
    user.json
  /cn
    user.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="configuring-the-locale" tabindex="-1"><a class="header-anchor" href="#configuring-the-locale"><span>Configuring the Locale</span></a></h2><p>The default language of the application is stored in the <code>locale</code> configuration option in the <code>config/app.go</code> configuration file. You can modify this value as needed to suit your application&#39;s requirements.</p><p>You can also use the <code>SetLocale</code> method provided by the App Facade to modify the default language for a single <code>HTTP</code> request at runtime:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>facades.Route().Get(&quot;/&quot;, func(ctx http.Context) http.Response {
    facades.App().SetLocale(ctx, &quot;en&quot;)

    return ctx.Response()
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can configure a &quot;fallback locale&quot; that will be used when the current language does not contain the given translation string. Like the default language, the fallback language is also configured in the <code>config/app.go</code> configuration file.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;fallback_locale&quot;: &quot;en&quot;,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="determining-the-current-locale" tabindex="-1"><a class="header-anchor" href="#determining-the-current-locale"><span>Determining the Current Locale</span></a></h3><p>You can use the <code>CurrentLocale</code> and <code>IsLocale</code> methods to determine the current <code>locale</code> or check if the <code>locale</code> is a given value.</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>locale := facades.App().CurrentLocale(ctx)
if facades.App().IsLocale(ctx, &quot;en&quot;) {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="defining-translation-strings" tabindex="-1"><a class="header-anchor" href="#defining-translation-strings"><span>Defining Translation Strings</span></a></h3><p>In language files, you can define single-level or multi-level structures:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// lang/en.json
{
  &quot;name&quot;: &quot;It&#39;s your name&quot;,
  &quot;required&quot;: {
    &quot;user_id&quot;: &quot;UserID is required&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="retrieving-translation-strings" tabindex="-1"><a class="header-anchor" href="#retrieving-translation-strings"><span>Retrieving Translation Strings</span></a></h3><p>You can use the <code>facades.Lang(ctx).Get()</code> method to retrieve translation strings from language files. If the language file contains multiple levels, you can use <code>.</code> to connect them, and if the language file is in multiple levels of folders, you can use <code>/</code> to connect them.</p><p>For example:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// lang/en.json
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="replacing-parameters-in-translation-strings" tabindex="-1"><a class="header-anchor" href="#replacing-parameters-in-translation-strings"><span>Replacing Parameters in Translation Strings</span></a></h4><p>You can define placeholders in translation strings. All placeholders have the prefix <code>:</code>. For example, you can use a placeholder to define a welcome message:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;welcome&quot;: &quot;Welcome, :name&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To replace placeholders when retrieving a translation string, you can pass a translation option with the replacement map as the second parameter to the <code>facades.Lang(ctx).Get()</code> method:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>facades.Lang(ctx).Get(&quot;welcome&quot;, translation.Option{
  Replace: map[string]string{
    &quot;name&quot;: &quot;Goravel&quot;,
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pluralization" tabindex="-1"><a class="header-anchor" href="#pluralization"><span>Pluralization</span></a></h4><p>Pluralization is a complex problem because different languages have various pluralization rules. However, Goravel can help you translate strings based on the pluralization rules you define. By using the <code>|</code> character, you can differentiate between the singular and plural forms of a string:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;apples&quot;: &quot;There is one apple|There are many apples&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can even create more complex pluralization rules by specifying translation strings for multiple value ranges:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{
  &quot;apples&quot;: &quot;{0} There are none|[1,19] There are some|[20,*] There are many&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After defining a translation string with pluralization options, you can use the <code>facades.Lang(ctx).Choice()</code> method to retrieve the line for a given <code>count</code>. In this example, because the count is greater than 1, the plural form of the translation string is returned:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>facades.Lang(ctx).Choice(&quot;messages.apples&quot;, 10)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can also define placeholder attributes in pluralization strings. By passing an array as the third parameter to the <code>facades.Lang(ctx).Choice()</code> method, you can replace these placeholders:</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>&quot;minutes_ago&quot;: &quot;{1} :value minute ago|[2,*] :value minutes ago&quot;,

facades.Lang(ctx).Choice(&quot;time.minutes_ago&quot;, 5, translation.Option{
  Replace: map[string]string{
    &quot;value&quot;: &quot;5&quot;,
  },
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function p(m,h){const n=s("router-link");return o(),r("div",null,[u,e("nav",g,[e("ul",null,[e("li",null,[a(n,{to:"#introduction"},{default:t(()=>[i("Introduction")]),_:1})]),e("li",null,[a(n,{to:"#configuring-the-locale"},{default:t(()=>[i("Configuring the Locale")]),_:1}),e("ul",null,[e("li",null,[a(n,{to:"#determining-the-current-locale"},{default:t(()=>[i("Determining the Current Locale")]),_:1})]),e("li",null,[a(n,{to:"#defining-translation-strings"},{default:t(()=>[i("Defining Translation Strings")]),_:1})]),e("li",null,[a(n,{to:"#retrieving-translation-strings"},{default:t(()=>[i("Retrieving Translation Strings")]),_:1})])])])])]),v])}const f=l(c,[["render",p],["__file","localization.html.vue"]]),x=JSON.parse(`{"path":"/digging-deeper/localization.html","title":"Localization","lang":"en-US","frontmatter":{"description":"Localization Introduction Goravel's localization features provide a convenient way to retrieve strings in various languages, making it easy to support multiple languages in your...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://goravel.dev/zh/digging-deeper/localization.html"}],["meta",{"property":"og:url","content":"https://goravel.dev/digging-deeper/localization.html"}],["meta",{"property":"og:site_name","content":"Goravel"}],["meta",{"property":"og:title","content":"/digging-deeper/localization.html"}],["meta",{"property":"og:description","content":"Localization Introduction Goravel's localization features provide a convenient way to retrieve strings in various languages, making it easy to support multiple languages in your..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Localization\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Configuring the Locale","slug":"configuring-the-locale","link":"#configuring-the-locale","children":[{"level":3,"title":"Determining the Current Locale","slug":"determining-the-current-locale","link":"#determining-the-current-locale","children":[]},{"level":3,"title":"Defining Translation Strings","slug":"defining-translation-strings","link":"#defining-translation-strings","children":[]},{"level":3,"title":"Retrieving Translation Strings","slug":"retrieving-translation-strings","link":"#retrieving-translation-strings","children":[]}]}],"git":{},"filePathRelative":"digging-deeper/localization.md","autoDesc":true}`);export{f as comp,x as data};
