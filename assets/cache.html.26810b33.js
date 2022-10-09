import{_ as r,r as d,o as s,c,b as e,d as a,w as n,e as t,f as o}from"./app.c57080ea.js";const l={},u=e("h1",{id:"cache",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cache","aria-hidden":"true"},"#"),t(" Cache")],-1),h={class:"table-of-contents"},v=t("Introduction"),m=t("Configuration"),f=t("Available Cache Drivers"),g=t("Cache Usage"),b=t("Retrieving Items From The Cache"),x=t("Checking For Item Existence"),p=t("Retrieve & Store"),_=t("Retrieve & Delete"),q=t("Storing Items In The Cache"),C=t("Store If Not Present"),y=t("Storing Items Forever"),k=t("Removing Items From The Cache"),F=t("Adding Custom Cache Drivers"),w=t("Configuration"),I=t("Write Driver"),R=o(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Goravel provides an expandable cache module. This module can be operated using <code>facades.Cache</code>.</p><h2 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h2><p>Make all custom configurations in <code>config/cache.go</code>. Different cache drivers are allowed to be configured. By default, <code>redis</code> is used. You can also customize the driver by entering the configuration file to view it.</p><h2 id="available-cache-drivers" tabindex="-1"><a class="header-anchor" href="#available-cache-drivers" aria-hidden="true">#</a> Available Cache Drivers</h2><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>redis</code></td><td>Redis drive</td></tr><tr><td><code>custom</code></td><td>Custom drive</td></tr></tbody></table><h2 id="cache-usage" tabindex="-1"><a class="header-anchor" href="#cache-usage" aria-hidden="true">#</a> Cache Usage</h2><h3 id="retrieving-items-from-the-cache" tabindex="-1"><a class="header-anchor" href="#retrieving-items-from-the-cache" aria-hidden="true">#</a> Retrieving Items From The Cache</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value := facades.Cache.Get(&quot;goravel&quot;, func() interface{} {
    return &quot;default&quot;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can pass a <code>func</code> as the default value. If the specified data does not exist in the cache, the result of <code>func</code> will be returned. The transitive closure method allows you to obtain default values from the database or other external services. Note the closure structure <code>func() interface()</code>.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value := facades.Cache.Get(&quot;goravel&quot;, func() interface{} {
    return &quot;default&quot;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="checking-for-item-existence" tabindex="-1"><a class="header-anchor" href="#checking-for-item-existence" aria-hidden="true">#</a> Checking For Item Existence</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value := facades.Cache.Has(&quot;goravel&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="retrieve-store" tabindex="-1"><a class="header-anchor" href="#retrieve-store" aria-hidden="true">#</a> Retrieve &amp; Store</h3><p>Sometimes you may want to get a piece of data from the cache, and when the requested cache item does not exist, the program can store a default value for you.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value, err := facades.Cache.Remember(&quot;goravel&quot;, 5 * time.Second, func() interface{} {
    return &quot;goravel&quot;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the data you want does not exist in the cache, the closure passed to the <code>Remember</code> method will be executed, and then the result will be returned and placed in the cache.</p><p>You can use the <code>RememberForever</code> method to retrieve data from the cache or store it permanently:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value, err := facades.Cache.RememberForever(&quot;goravel&quot;, func() interface{} {
    return &quot;default&quot;
})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="retrieve-delete" tabindex="-1"><a class="header-anchor" href="#retrieve-delete" aria-hidden="true">#</a> Retrieve &amp; Delete</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>value := facades.Cache.Pull(&quot;goravel&quot;, &quot;default&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="storing-items-in-the-cache" tabindex="-1"><a class="header-anchor" href="#storing-items-in-the-cache" aria-hidden="true">#</a> Storing Items In The Cache</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>err := facades.Cache.Put(&quot;goravel&quot;, &quot;value&quot;, 5 * time.Second)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If the expiration time of the cache is set to <code>0</code>, the cache will be valid forever:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>err := facades.Cache.Put(&quot;goravel&quot;, &quot;value&quot;, 0)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="store-if-not-present" tabindex="-1"><a class="header-anchor" href="#store-if-not-present" aria-hidden="true">#</a> Store If Not Present</h3><p>The <code>Add</code> method will only store data that does not exist in the cache. If the storage is successful, it will return <code>true</code>, otherwise it will return <code>false</code>:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>res := facades.Cache.Add(&quot;goravel&quot;, &quot;value&quot;, 5 * time.Second)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="storing-items-forever" tabindex="-1"><a class="header-anchor" href="#storing-items-forever" aria-hidden="true">#</a> Storing Items Forever</h3><p>The <code>Forever</code> method can be used to store data persistently in the cache. Because these data will not expire, they must be manually deleted from the cache through the <code>Forget</code> method:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>res := facades.Cache.Forever(&quot;goravel&quot;, &quot;value&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="removing-items-from-the-cache" tabindex="-1"><a class="header-anchor" href="#removing-items-from-the-cache" aria-hidden="true">#</a> Removing Items From The Cache</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>res := facades.Cache.Forget(&quot;goravel&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can use the <code>Flush</code> method to clear all caches:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>res := facades.Cache.Flush()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="adding-custom-cache-drivers" tabindex="-1"><a class="header-anchor" href="#adding-custom-cache-drivers" aria-hidden="true">#</a> Adding Custom Cache Drivers</h2><h3 id="configuration-1" tabindex="-1"><a class="header-anchor" href="#configuration-1" aria-hidden="true">#</a> Configuration</h3><p>If you want to define a completely custom driver, you can specify the <code>custom</code> driver type in the <code>config/cache.go</code> configuration file. Then include a <code>via</code> option to implement a <code>framework\\contracts\\cache\\Store</code> structure:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//config/cache.go
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="write-driver" tabindex="-1"><a class="header-anchor" href="#write-driver" aria-hidden="true">#</a> Write Driver</h3><p>Implement the <code>framework\\contracts\\cache\\Store</code> interface and configure it to <code>config/cache.go</code>. Files can be stored in the <code>app/extensions</code> folder (modifiable).</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>//framework\\contracts\\cache\\Store
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42);function S(D,T){const i=d("router-link");return s(),c("div",null,[u,e("nav",h,[e("ul",null,[e("li",null,[a(i,{to:"#introduction"},{default:n(()=>[v]),_:1})]),e("li",null,[a(i,{to:"#configuration"},{default:n(()=>[m]),_:1})]),e("li",null,[a(i,{to:"#available-cache-drivers"},{default:n(()=>[f]),_:1})]),e("li",null,[a(i,{to:"#cache-usage"},{default:n(()=>[g]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#retrieving-items-from-the-cache"},{default:n(()=>[b]),_:1})]),e("li",null,[a(i,{to:"#checking-for-item-existence"},{default:n(()=>[x]),_:1})]),e("li",null,[a(i,{to:"#retrieve-store"},{default:n(()=>[p]),_:1})]),e("li",null,[a(i,{to:"#retrieve-delete"},{default:n(()=>[_]),_:1})]),e("li",null,[a(i,{to:"#storing-items-in-the-cache"},{default:n(()=>[q]),_:1})]),e("li",null,[a(i,{to:"#store-if-not-present"},{default:n(()=>[C]),_:1})]),e("li",null,[a(i,{to:"#storing-items-forever"},{default:n(()=>[y]),_:1})]),e("li",null,[a(i,{to:"#removing-items-from-the-cache"},{default:n(()=>[k]),_:1})])])]),e("li",null,[a(i,{to:"#adding-custom-cache-drivers"},{default:n(()=>[F]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#configuration-1"},{default:n(()=>[w]),_:1})]),e("li",null,[a(i,{to:"#write-driver"},{default:n(()=>[I]),_:1})])])])])]),R])}const A=r(l,[["render",S],["__file","cache.html.vue"]]);export{A as default};
