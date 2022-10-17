import{_ as l,r,o,c,b as e,d as t,w as n,e as d,f as s}from"./app.ba4bf67a.js";const u={},v=e("h1",{id:"\u4EFB\u52A1\u8C03\u5EA6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u4EFB\u52A1\u8C03\u5EA6","aria-hidden":"true"},"#"),d(" \u4EFB\u52A1\u8C03\u5EA6")],-1),m={class:"table-of-contents"},h=d("\u4ECB\u7ECD"),b=d("\u5B9A\u4E49\u8C03\u5EA6"),p=d("Artisan \u547D\u4EE4\u8C03\u5EA6"),f=d("\u8C03\u5EA6\u9891\u7387\u9009\u9879"),g=d("\u907F\u514D\u4EFB\u52A1\u91CD\u590D"),_=d("\u8FD0\u884C\u8C03\u5EA6\u7A0B\u5E8F"),y=s(`<h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>\u8FC7\u53BB\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5728\u670D\u52A1\u5668\u4E0A\u4E3A\u6BCF\u4E00\u4E2A\u8C03\u5EA6\u4EFB\u52A1\u53BB\u521B\u5EFA Cron \u6761\u76EE\u3002\u56E0\u4E3A\u8FD9\u4E9B\u4EFB\u52A1\u7684\u8C03\u5EA6\u4E0D\u662F\u901A\u8FC7\u4EE3\u7801\u63A7\u5236\u7684\uFF0C\u4F60\u8981\u67E5\u770B\u6216\u65B0\u589E\u4EFB\u52A1\u8C03\u5EA6\u90FD\u9700\u8981\u901A\u8FC7 SSH \u8FDC\u7A0B\u767B\u5F55\u5230\u670D\u52A1\u5668\u4E0A\u53BB\u64CD\u4F5C\uFF0C\u6240\u4EE5\u8FD9\u79CD\u65B9\u5F0F\u5F88\u5FEB\u4F1A\u8BA9\u4EBA\u53D8\u5F97\u75DB\u82E6\u4E0D\u582A\u3002</p><p>Goravel \u7684\u547D\u4EE4\u884C\u8C03\u5EA6\u5668\u5141\u8BB8\u4F60\u5728 Goravel \u4E2D\u6E05\u6670\u660E\u4E86\u5730\u5B9A\u4E49\u547D\u4EE4\u8C03\u5EA6\u3002\u5728\u4F7F\u7528\u8FD9\u4E2A\u4EFB\u52A1\u8C03\u5EA6\u5668\u65F6\uFF0C\u4F60\u53EA\u9700\u8981\u5728\u4F60\u7684\u670D\u52A1\u5668\u4E0A\u521B\u5EFA\u5355\u4E2A Cron \u5165\u53E3\u3002\u4F60\u7684\u4EFB\u52A1\u8C03\u5EA6\u5728 <code>app/console/kernel.go</code> \u7684 Schedule \u65B9\u6CD5\u4E2D\u8FDB\u884C\u5B9A\u4E49\u3002</p><h2 id="\u5B9A\u4E49\u8C03\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49\u8C03\u5EA6" aria-hidden="true">#</a> \u5B9A\u4E49\u8C03\u5EA6</h2><p>\u4F60\u53EF\u4EE5\u5728 <code>app\\console\\kernel.go</code> \u7684 <code>Schedule</code> \u65B9\u6CD5\u4E2D\u5B9A\u4E49\u6240\u6709\u7684\u8C03\u5EA6\u4EFB\u52A1\u3002\u5728\u5F00\u59CB\u4E4B\u524D\uFF0C\u6211\u4EEC\u6765\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A\u6211\u4EEC\u8BA1\u5212\u6BCF\u5929\u5348\u591C\u6267\u884C\u4E00\u4E2A <code>\u95ED\u5305</code>\uFF0C\u8FD9\u4E2A <code>\u95ED\u5305</code> \u4F1A\u6267\u884C\u4E00\u6B21\u6570\u636E\u5E93\u8BED\u53E5\u53BB\u6E05\u7A7A\u4E00\u5F20\u8868\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package console

import (
  &quot;github.com/goravel/framework/contracts/console&quot;
  &quot;github.com/goravel/framework/schedule/support&quot;
  &quot;github.com/goravel/framework/support/facades&quot;
  &quot;goravel/app/models&quot;
)

type Kernel struct {
}

func (kernel Kernel) Schedule() []*support.Event {
  return []*support.Event{
    facades.Schedule.Call(func() {
      facades.DB.Where(&quot;1 = 1&quot;).Delete(&amp;models.User{})
    }).Daily(),
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="artisan-\u547D\u4EE4\u8C03\u5EA6" tabindex="-1"><a class="header-anchor" href="#artisan-\u547D\u4EE4\u8C03\u5EA6" aria-hidden="true">#</a> Artisan \u547D\u4EE4\u8C03\u5EA6</h3>`,7),q=d("\u8C03\u5EA6\u65B9\u5F0F\u4E0D\u4EC5\u6709\u8C03\u7528\u95ED\u5305\uFF0C\u8FD8\u6709\u8C03\u7528 "),x=d("Artisan commands"),S=d("\u3002\u4F8B\u5982\uFF0C\u4F60\u53EF\u4EE5\u7ED9 "),k=e("code",null,"command",-1),E=d(" \u65B9\u6CD5\u4F20\u9012\u547D\u4EE4\u540D\u79F0\u6216\u7C7B\u6765\u8C03\u5EA6\u4E00\u4E2A Artisan \u547D\u4EE4\uFF1A"),R=s(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package console

import (
  &quot;github.com/goravel/framework/contracts/console&quot;
  &quot;github.com/goravel/framework/schedule/support&quot;
  &quot;github.com/goravel/framework/support/facades&quot;
)

type Kernel struct {
}

func (kernel Kernel) Schedule() []*support.Event {
  return []*support.Event{
    facades.Schedule.Command(&quot;emails:send name&quot;).Daily(),
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u8C03\u5EA6\u9891\u7387\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u8C03\u5EA6\u9891\u7387\u9009\u9879" aria-hidden="true">#</a> \u8C03\u5EA6\u9891\u7387\u9009\u9879</h3><p>\u6211\u4EEC\u5DF2\u7ECF\u770B\u5230\u4E86\u51E0\u4E2A\u5982\u4F55\u8BBE\u7F6E\u4EFB\u52A1\u5728\u6307\u5B9A\u65F6\u95F4\u95F4\u9694\u8FD0\u884C\u7684\u4F8B\u5B50\u3002\u4E0D\u4EC5\u5982\u6B64\uFF0C\u4F60\u8FD8\u6709\u66F4\u591A\u7684\u4EFB\u52A1\u8C03\u5EA6\u9891\u7387\u53EF\u9009\uFF1A</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>.Cron(&#39;* * * * *&#39;)</code></td><td>\u81EA\u5B9A\u4E49 Crone \u8BA1\u5212\u6267\u884C\u4EFB\u52A1</td></tr><tr><td><code>.EveryMinute()</code></td><td>\u6BCF\u5206\u949F\u6267\u884C\u4E00\u6B21\u4EFB\u52A1</td></tr><tr><td><code>.EveryTwoMinutes()</code></td><td>\u6BCF\u4E24\u5206\u949F\u6267\u884C\u4E00\u6B21\u4EFB\u52A1</td></tr><tr><td><code>.EveryThreeMinutes()</code></td><td>\u6BCF\u4E09\u5206\u949F\u6267\u884C\u4E00\u6B21\u4EFB\u52A1</td></tr><tr><td><code>.EveryFourMinutes()</code></td><td>\u6BCF\u56DB\u5206\u949F\u6267\u884C\u4E00\u6B21\u4EFB\u52A1</td></tr><tr><td><code>.EveryFiveMinutes()</code></td><td>\u6BCF\u4E94\u5206\u949F\u6267\u884C\u4E00\u6B21\u4EFB\u52A1</td></tr><tr><td><code>.EveryTenMinutes()</code></td><td>\u6BCF\u5341\u5206\u949F\u6267\u884C\u4E00\u6B21\u4EFB\u52A1</td></tr><tr><td><code>.EveryFifteenMinutes()</code></td><td>\u6BCF\u5341\u4E94\u5206\u949F\u6267\u884C\u4E00\u6B21\u4EFB\u52A1</td></tr><tr><td><code>.EveryThirtyMinutes()</code></td><td>\u6BCF\u4E09\u5341\u5206\u949F\u6267\u884C\u4E00\u6B21\u4EFB\u52A1</td></tr><tr><td><code>.Hourly()</code></td><td>\u6BCF\u5C0F\u65F6\u6267\u884C\u4E00\u6B21\u4EFB\u52A1</td></tr><tr><td><code>.HourlyAt(17)</code></td><td>\u6BCF\u5C0F\u65F6\u7B2C\u5341\u4E03\u5206\u949F\u65F6\u6267\u884C\u4E00\u6B21\u4EFB\u52A1</td></tr><tr><td><code>.EveryTwoHours()</code></td><td>\u6BCF\u4E24\u5C0F\u65F6\u6267\u884C\u4E00\u6B21\u4EFB\u52A1</td></tr><tr><td><code>.EveryThreeHours()</code></td><td>\u6BCF\u4E09\u5C0F\u65F6\u6267\u884C\u4E00\u6B21\u4EFB\u52A1</td></tr><tr><td><code>.EveryFourHours()</code></td><td>\u6BCF\u56DB\u5C0F\u65F6\u6267\u884C\u4E00\u6B21\u4EFB\u52A1</td></tr><tr><td><code>.EverySixHours()</code></td><td>\u6BCF\u516D\u5C0F\u65F6\u6267\u884C\u4E00\u6B21\u4EFB\u52A1</td></tr><tr><td><code>.Daily()</code></td><td>\u6BCF\u5929 00:00 \u6267\u884C\u4E00\u6B21\u4EFB\u52A1</td></tr><tr><td><code>.DailyAt(&#39;13:00&#39;)</code></td><td>\u6BCF\u5929 13:00 \u6267\u884C\u4E00\u6B21\u4EFB\u52A1</td></tr></tbody></table><h3 id="\u907F\u514D\u4EFB\u52A1\u91CD\u590D" tabindex="-1"><a class="header-anchor" href="#\u907F\u514D\u4EFB\u52A1\u91CD\u590D" aria-hidden="true">#</a> \u907F\u514D\u4EFB\u52A1\u91CD\u590D</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5373\u4F7F\u4E4B\u524D\u7684\u4EFB\u52A1\u5B9E\u4F8B\u8FD8\u5728\u6267\u884C\uFF0C\u8C03\u5EA6\u5185\u7684\u4EFB\u52A1\u4E5F\u4F1A\u6267\u884C\u3002\u4E3A\u907F\u514D\u8FD9\u79CD\u60C5\u51B5\u7684\u53D1\u751F\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>SkipIfStillRunning</code>(\u5982\u679C\u6709) \u6216 <code>DelayIfStillRunning</code> \u65B9\u6CD5\uFF1A</p><table><thead><tr><th>\u65B9\u6CD5</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>.SkipIfStillRunning()</code></td><td>\u5982\u679C\u6709\u6B63\u5728\u6267\u884C\u7684\u76F8\u540C\u4EFB\u52A1\uFF0C\u5219\u672C\u6B21\u53D6\u6D88\u6267\u884C</td></tr><tr><td><code>.DelayIfStillRunning()</code></td><td>\u5982\u679C\u6709\u6B63\u5728\u6267\u884C\u7684\u76F8\u540C\u4EFB\u52A1\uFF0C\u5219\u672C\u6B21\u7B49\u5F85\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\u7ED3\u675F\u540E\u518D\u6267\u884C</td></tr></tbody></table><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>facades.Schedule.Command(&quot;emails:send name&quot;).EveryMinute().SkipIfStillRunning()
facades.Schedule.Command(&quot;emails:send name&quot;).EveryMinute().DelayIfStillRunning()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6B64\u4F8B\u4E2D\uFF0C\u82E5 <code>emails:send</code> Artisan \u547D\u4EE4\u8FD8\u672A\u8FD0\u884C\uFF0C\u90A3\u5B83\u5C06\u4F1A\u6BCF\u5206\u949F\u6267\u884C\u4E00\u6B21\u3002\u5982\u679C\u4F60\u7684\u4EFB\u52A1\u6267\u884C\u65F6\u95F4\u975E\u5E38\u4E0D\u786E\u5B9A\uFF0C\u5BFC\u81F4\u4F60\u65E0\u6CD5\u51C6\u786E\u9884\u6D4B\u4EFB\u52A1\u7684\u6267\u884C\u65F6\u95F4\uFF0C\u90A3\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u4F1A\u7279\u522B\u6709\u7528\u3002</p><h2 id="\u8FD0\u884C\u8C03\u5EA6\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C\u8C03\u5EA6\u7A0B\u5E8F" aria-hidden="true">#</a> \u8FD0\u884C\u8C03\u5EA6\u7A0B\u5E8F</h2><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5B66\u4F1A\u4E86\u5982\u4F55\u5B9A\u4E49\u8BA1\u5212\u4EFB\u52A1\uFF0C\u63A5\u4E0B\u6765\u8BA9\u6211\u4EEC\u8BA8\u8BBA\u5982\u4F55\u771F\u6B63\u5728\u670D\u52A1\u5668\u4E0A\u8FD0\u884C\u5B83\u4EEC\u3002</p><p>\u5728\u6839\u76EE\u5F55 <code>main.go</code> \u6587\u4EF6\u4E2D\u589E\u52A0 <code>go facades.Schedule.Run()</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>package main

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

  //Start schedule by facades.Schedule
  go facades.Schedule.Run()

  select {}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function w(C,A){const i=r("router-link"),a=r("RouterLink");return o(),c("div",null,[v,e("nav",m,[e("ul",null,[e("li",null,[t(i,{to:"#\u4ECB\u7ECD"},{default:n(()=>[h]),_:1})]),e("li",null,[t(i,{to:"#\u5B9A\u4E49\u8C03\u5EA6"},{default:n(()=>[b]),_:1}),e("ul",null,[e("li",null,[t(i,{to:"#artisan-\u547D\u4EE4\u8C03\u5EA6"},{default:n(()=>[p]),_:1})]),e("li",null,[t(i,{to:"#\u8C03\u5EA6\u9891\u7387\u9009\u9879"},{default:n(()=>[f]),_:1})]),e("li",null,[t(i,{to:"#\u907F\u514D\u4EFB\u52A1\u91CD\u590D"},{default:n(()=>[g]),_:1})])])]),e("li",null,[t(i,{to:"#\u8FD0\u884C\u8C03\u5EA6\u7A0B\u5E8F"},{default:n(()=>[_]),_:1})])])]),y,e("p",null,[q,t(a,{to:"/v0/zh/digging-deeper/Artisan%E5%91%BD%E4%BB%A4%E8%A1%8C.html"},{default:n(()=>[x]),_:1}),S,k,E]),R])}const M=l(u,[["render",w],["__file","task-scheduling.html.vue"]]);export{M as default};