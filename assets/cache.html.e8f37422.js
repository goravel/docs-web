import{_ as t,r,o as s,c as l,b as e,d as n,w as d,e as a,f as c}from"./app.7583e1e5.js";const o={},u=e("h1",{id:"\u7F13\u5B58\u7CFB\u7EDF",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u7F13\u5B58\u7CFB\u7EDF","aria-hidden":"true"},"#"),a(" \u7F13\u5B58\u7CFB\u7EDF")],-1),v={class:"table-of-contents"},h=a("\u4ECB\u7ECD"),m=a("\u914D\u7F6E"),b=a("\u53EF\u7528\u7684\u7F13\u5B58\u9A71\u52A8"),f=a("\u7F13\u5B58\u4F7F\u7528"),g=a("\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6\u6570\u636E"),x=a("\u68C0\u67E5\u7F13\u5B58\u9879\u662F\u5426\u5B58\u5728"),p=a("\u83B7\u53D6\u548C\u5B58\u50A8"),_=a("\u83B7\u53D6\u548C\u5220\u9664"),q=a("\u5728\u7F13\u5B58\u4E2D\u5B58\u50A8\u6570\u636E"),k=a("\u53EA\u5B58\u50A8\u6CA1\u6709\u7684\u6570\u636E"),C=a("\u6570\u636E\u6C38\u4E45\u5B58\u50A8"),y=a("\u4ECE\u7F13\u5B58\u4E2D\u5220\u9664\u6570\u636E"),F=a("\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7F13\u5B58\u9A71\u52A8"),R=a("\u914D\u7F6E"),S=a("\u7F16\u5199\u9A71\u52A8"),G=c(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>Goravel \u63D0\u4F9B\u4E86\u53EF\u62D3\u5C55\u7684\u7F13\u5B58\u6A21\u5757\u3002\u8BE5\u6A21\u5757\u53EF\u4EE5\u4F7F\u7528 <code>facades.Cache</code> \u8FDB\u884C\u64CD\u4F5C\u3002</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>\u5728 <code>config/cache.go</code> \u4E2D\u8FDB\u884C\u6240\u6709\u81EA\u5B9A\u4E49\u914D\u7F6E\u3002\u5141\u8BB8\u914D\u7F6E\u4E0D\u540C\u7684\u7F13\u5B58\u9A71\u52A8\uFF0C\u9ED8\u8BA4\u4F7F\u7528 <code>redis</code>\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u81EA\u5B9A\u4E49\u9A71\u52A8\uFF0C\u53EF\u4EE5\u8FDB\u5165\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u67E5\u770B\u3002</p><h2 id="\u53EF\u7528\u7684\u7F13\u5B58\u9A71\u52A8" tabindex="-1"><a class="header-anchor" href="#\u53EF\u7528\u7684\u7F13\u5B58\u9A71\u52A8" aria-hidden="true">#</a> \u53EF\u7528\u7684\u7F13\u5B58\u9A71\u52A8</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>redis</code></td><td>Redis \u9A71\u52A8</td></tr><tr><td><code>custom</code></td><td>\u81EA\u5B9A\u4E49\u9A71\u52A8</td></tr></tbody></table><h2 id="\u7F13\u5B58\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7F13\u5B58\u4F7F\u7528" aria-hidden="true">#</a> \u7F13\u5B58\u4F7F\u7528</h2><h3 id="\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6\u6570\u636E" aria-hidden="true">#</a> \u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6\u6570\u636E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value := facades.Cache.Get(&quot;goravel&quot;, func() interface{} {
    return &quot;default&quot;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F60\u53EF\u4EE5\u4F20\u9012\u4E00\u4E2A <code>func</code> \u4F5C\u4E3A\u9ED8\u8BA4\u503C\u3002\u5982\u679C\u6307\u5B9A\u7684\u6570\u636E\u5728\u7F13\u5B58\u4E2D\u4E0D\u5B58\u5728\uFF0C\u5C06\u8FD4\u56DE <code>func</code> \u7684\u7ED3\u679C\u3002\u4F20\u9012\u95ED\u5305\u7684\u65B9\u6CD5\u5141\u8BB8\u4F60\u4ECE\u6570\u636E\u5E93\u6216\u5176\u4ED6\u5916\u90E8\u670D\u52A1\u4E2D\u83B7\u53D6\u9ED8\u8BA4\u503C\u3002\u6CE8\u610F\u95ED\u5305\u7ED3\u6784 <code>func() interface{}</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value := facades.Cache.Get(&quot;goravel&quot;, func() interface{} {
    return &quot;default&quot;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u68C0\u67E5\u7F13\u5B58\u9879\u662F\u5426\u5B58\u5728" tabindex="-1"><a class="header-anchor" href="#\u68C0\u67E5\u7F13\u5B58\u9879\u662F\u5426\u5B58\u5728" aria-hidden="true">#</a> \u68C0\u67E5\u7F13\u5B58\u9879\u662F\u5426\u5B58\u5728</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value := facades.Cache.Has(&quot;goravel&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6\u548C\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u548C\u5B58\u50A8" aria-hidden="true">#</a> \u83B7\u53D6\u548C\u5B58\u50A8</h3><p>\u6709\u65F6\u4F60\u53EF\u80FD\u60F3\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6\u4E00\u4E2A\u6570\u636E\uFF0C\u800C\u5F53\u8BF7\u6C42\u7684\u7F13\u5B58\u9879\u4E0D\u5B58\u5728\u65F6\uFF0C\u7A0B\u5E8F\u80FD\u4E3A\u4F60\u5B58\u50A8\u4E00\u4E2A\u9ED8\u8BA4\u503C\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value, err := facades.Cache.Remember(&quot;goravel&quot;, 5 * time.Second, func() interface{} {
    return &quot;goravel&quot;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u7F13\u5B58\u4E2D\u4E0D\u5B58\u5728\u4F60\u60F3\u8981\u7684\u6570\u636E\u65F6\uFF0C\u5219\u4F20\u9012\u7ED9 <code>Remember</code> \u65B9\u6CD5\u7684\u95ED\u5305\u5C06\u88AB\u6267\u884C\uFF0C\u7136\u540E\u5C06\u5176\u7ED3\u679C\u8FD4\u56DE\u5E76\u653E\u7F6E\u5230\u7F13\u5B58\u4E2D\u3002</p><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>RememberForever</code> \u65B9\u6CD5\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6\u6570\u636E\u6216\u8005\u6C38\u4E45\u5B58\u50A8\u5B83\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value, err := facades.Cache.RememberForever(&quot;goravel&quot;, func() interface{} {
    return &quot;default&quot;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u83B7\u53D6\u548C\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u83B7\u53D6\u548C\u5220\u9664" aria-hidden="true">#</a> \u83B7\u53D6\u548C\u5220\u9664</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value := facades.Cache.Pull(&quot;goravel&quot;, &quot;default&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5728\u7F13\u5B58\u4E2D\u5B58\u50A8\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5728\u7F13\u5B58\u4E2D\u5B58\u50A8\u6570\u636E" aria-hidden="true">#</a> \u5728\u7F13\u5B58\u4E2D\u5B58\u50A8\u6570\u636E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>err := facades.Cache.Put(&quot;goravel&quot;, &quot;value&quot;, 5 * time.Second)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u7F13\u5B58\u7684\u8FC7\u671F\u65F6\u95F4\u8BBE\u7F6E\u4E3A 0\uFF0C \u5219\u7F13\u5B58\u5C06\u6C38\u4E45\u6709\u6548\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>err := facades.Cache.Put(&quot;goravel&quot;, &quot;value&quot;, 0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u53EA\u5B58\u50A8\u6CA1\u6709\u7684\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u53EA\u5B58\u50A8\u6CA1\u6709\u7684\u6570\u636E" aria-hidden="true">#</a> \u53EA\u5B58\u50A8\u6CA1\u6709\u7684\u6570\u636E</h3><p><code>Add</code> \u65B9\u6CD5\u5C06\u53EA\u5B58\u50A8\u7F13\u5B58\u4E2D\u4E0D\u5B58\u5728\u7684\u6570\u636E\u3002\u5982\u679C\u5B58\u50A8\u6210\u529F\uFF0C\u5C06\u8FD4\u56DE <code>true</code> \uFF0C\u5426\u5219\u8FD4\u56DE <code>false</code> \uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>res := facades.Cache.Add(&quot;goravel&quot;, &quot;value&quot;, 5 * time.Second)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u6570\u636E\u6C38\u4E45\u5B58\u50A8" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u6C38\u4E45\u5B58\u50A8" aria-hidden="true">#</a> \u6570\u636E\u6C38\u4E45\u5B58\u50A8</h3><p><code>Forever</code> \u65B9\u6CD5\u53EF\u7528\u4E8E\u5C06\u6570\u636E\u6301\u4E45\u5316\u5B58\u50A8\u5230\u7F13\u5B58\u4E2D\u3002\u56E0\u4E3A\u8FD9\u4E9B\u6570\u636E\u4E0D\u4F1A\u8FC7\u671F\uFF0C\u6240\u4EE5\u5FC5\u987B\u901A\u8FC7 <code>Forget</code> \u65B9\u6CD5\u4ECE\u7F13\u5B58\u4E2D\u624B\u52A8\u5220\u9664\u5B83\u4EEC\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>res := facades.Cache.Forever(&quot;goravel&quot;, &quot;value&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u4ECE\u7F13\u5B58\u4E2D\u5220\u9664\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u4ECE\u7F13\u5B58\u4E2D\u5220\u9664\u6570\u636E" aria-hidden="true">#</a> \u4ECE\u7F13\u5B58\u4E2D\u5220\u9664\u6570\u636E</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>res := facades.Cache.Forget(&quot;goravel&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>Flush</code> \u65B9\u6CD5\u6E05\u7A7A\u6240\u6709\u7684\u7F13\u5B58\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>res := facades.Cache.Flush()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7F13\u5B58\u9A71\u52A8" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7F13\u5B58\u9A71\u52A8" aria-hidden="true">#</a> \u6DFB\u52A0\u81EA\u5B9A\u4E49\u7F13\u5B58\u9A71\u52A8</h2><h3 id="\u914D\u7F6E-1" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-1" aria-hidden="true">#</a> \u914D\u7F6E</h3><p>\u5982\u679C\u4F60\u60F3\u5B9A\u4E49\u4E00\u4E2A\u5B8C\u5168\u81EA\u5B9A\u4E49\u7684\u9A71\u52A8\uFF0C\u53EF\u4EE5\u5728 <code>config/cache.go</code> \u914D\u7F6E\u6587\u4EF6\u4E2D\u6307\u5B9A <code>custom</code> \u9A71\u52A8\u7C7B\u578B\u3002 \u7136\u540E\u5305\u542B\u4E00\u4E2A <code>via</code> \u9009\u9879\uFF0C\u5B9E\u73B0\u4E00\u4E2A <code>framework\\contracts\\cache\\Store</code> \u7ED3\u6784\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//config/cache.go
&quot;stores&quot;: map[string]interface{}{
    &quot;redis&quot;: map[string]interface{}{
        &quot;driver&quot;:     &quot;redis&quot;,
        &quot;connection&quot;: &quot;default&quot;,
    },
    &quot;custom&quot;: map[string]interface{}{
        &quot;driver&quot;: &quot;custom&quot;,
        &quot;via&quot;:    Logger{},//\u81EA\u5B9A\u4E49\u9A71\u52A8
    },
},
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7F16\u5199\u9A71\u52A8" tabindex="-1"><a class="header-anchor" href="#\u7F16\u5199\u9A71\u52A8" aria-hidden="true">#</a> \u7F16\u5199\u9A71\u52A8</h3><p>\u5B9E\u73B0 <code>framework\\contracts\\cache\\Store</code> \u63A5\u53E3\uFF0C\u5E76\u914D\u7F6E\u5230 <code>config/cache.go</code> \u5373\u53EF\u3002\u6587\u4EF6\u53EF\u4EE5\u7EDF\u4E00\u50A8\u5B58\u5230 <code>app/extensions</code> \u6587\u4EF6\u5939\u4E2D\uFF08\u53EF\u4FEE\u6539\uFF09\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//framework\\contracts\\cache\\Store
package cache

import &quot;time&quot;

type Store interface {
    //Get Retrieve an item from the cache by key.
    Get(key string, defaults interface{}) interface{}

    //Has Determine if an item exists in the cache.
    Has(key string) bool

    //Put Store an item in the cache for a given number of seconds.
    Put(key string, value interface{}, seconds time.Duration) error

    //Pull Retrieve an item from the cache and delete it.
    Pull(key string, defaults interface{}) interface{}

    //Add Store an item in the cache if the key does not exist.
    Add(key string, value interface{}, seconds time.Duration) bool

    //Remember Get an item from the cache, or execute the given Closure and store the result.
    Remember(key string, ttl time.Duration, callback func() interface{}) (interface{}, error)

    //RememberForever Get an item from the cache, or execute the given Closure and store the result forever.
    RememberForever(key string, callback func() interface{}) (interface{}, error)

    //Forever Store an item in the cache indefinitely.
    Forever(key string, value interface{}) bool

    //Forget Remove an item from the cache.
    Forget(key string) bool

    //Flush Remove all items from the cache.
    Flush() bool
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42);function P(w,A){const i=r("router-link");return s(),l("div",null,[u,e("nav",v,[e("ul",null,[e("li",null,[n(i,{to:"#\u4ECB\u7ECD"},{default:d(()=>[h]),_:1})]),e("li",null,[n(i,{to:"#\u914D\u7F6E"},{default:d(()=>[m]),_:1})]),e("li",null,[n(i,{to:"#\u53EF\u7528\u7684\u7F13\u5B58\u9A71\u52A8"},{default:d(()=>[b]),_:1})]),e("li",null,[n(i,{to:"#\u7F13\u5B58\u4F7F\u7528"},{default:d(()=>[f]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#\u4ECE\u7F13\u5B58\u4E2D\u83B7\u53D6\u6570\u636E"},{default:d(()=>[g]),_:1})]),e("li",null,[n(i,{to:"#\u68C0\u67E5\u7F13\u5B58\u9879\u662F\u5426\u5B58\u5728"},{default:d(()=>[x]),_:1})]),e("li",null,[n(i,{to:"#\u83B7\u53D6\u548C\u5B58\u50A8"},{default:d(()=>[p]),_:1})]),e("li",null,[n(i,{to:"#\u83B7\u53D6\u548C\u5220\u9664"},{default:d(()=>[_]),_:1})]),e("li",null,[n(i,{to:"#\u5728\u7F13\u5B58\u4E2D\u5B58\u50A8\u6570\u636E"},{default:d(()=>[q]),_:1})]),e("li",null,[n(i,{to:"#\u53EA\u5B58\u50A8\u6CA1\u6709\u7684\u6570\u636E"},{default:d(()=>[k]),_:1})]),e("li",null,[n(i,{to:"#\u6570\u636E\u6C38\u4E45\u5B58\u50A8"},{default:d(()=>[C]),_:1})]),e("li",null,[n(i,{to:"#\u4ECE\u7F13\u5B58\u4E2D\u5220\u9664\u6570\u636E"},{default:d(()=>[y]),_:1})])])]),e("li",null,[n(i,{to:"#\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7F13\u5B58\u9A71\u52A8"},{default:d(()=>[F]),_:1}),e("ul",null,[e("li",null,[n(i,{to:"#\u914D\u7F6E-1"},{default:d(()=>[R]),_:1})]),e("li",null,[n(i,{to:"#\u7F16\u5199\u9A71\u52A8"},{default:d(()=>[S]),_:1})])])])])]),G])}const N=t(o,[["render",P],["__file","cache.html.vue"]]);export{N as default};